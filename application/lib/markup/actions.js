({
  handler: async ({ form, code, user, data }) => {
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const parentData = processForm.data[field.parentCode];

    let result = null;
    if (typeof field.handler === 'string') {
      const [block, name] = field.handler.split('~');
      const action = lib.utils.getDeep(domain, block.replace(/\//g, '.') + '.' + `action~${name}`);
      if (typeof action === 'function') result = await action({ query: '1' });
    } else {
      const handler = lib.utils.getDeep(
        domain,
        [...form.split('~')[0].split('/'), 'cache', 'handlers', parent.linecode, field.name].join('.'),
      );
      if (typeof handler === 'function') result = await handler({ form: processForm, field, parent, user, data, parentData });
    }
    return result;
  },
  saveField: async ({ form, code, value, user }) => {
    const [block, name] = form.split('~');
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const { _id: parentId } = processForm.data[field.parentCode];
    const handler = lib.utils.getDeep(
      domain,
      [...block.split('/'), 'cache', 'handlers', parent.linecode, field.name].join('.'),
    );
    const $set = { [field.name]: value };
    if (handler) await handler({ form, field, parent, user, value, $set });
    await db.mongo.updateOne(parent.col, parentId, { $set });
    processForm.data[field.parentCode][field.name] = value; // !!! доделать setDeep
  },
  addComplex: async ({ form, code, user, data = {}, parents = [], returnId = false }) => {
    const [block, name] = form.split('~');
    const processForm = user.forms[form];
    const complex = processForm.fields[code];
    const parentData = processForm.data[complex.parent.code];
    const handlers =
      lib.utils.getDeep(domain, [...block.split('/'), 'cache', 'handlers', complex.linecode].join('.')) || {};

    if (typeof handlers.beforeAdd === 'function') await handlers.beforeAdd({ form, complex, user, data, parentData });

    if (complex.links?.[complex.name]?.[complex.parent.name]) {
      data[complex.links?.[complex.name]?.[complex.parent.name]] = { l: [parentData._id], c: 1 };
    }

    parents.push({ ...complex.parent, _id: parentData._id });
    const newItem = await db.addComplex({ ...complex, data, parents });
    const itemCode = lib.markup.helpers.nextCode(processForm);

    processForm.data[itemCode] = { ...newItem, ...data };
    if (complex.links?.[complex.parent.name]) {
      if (!parentData[complex.links[complex.parent.name]])
        parentData[complex.links[complex.parent.name]] = { l: [], c: 0 };
      parentData[complex.links[complex.parent.name]].l.push(newItem._id);
      parentData[complex.links[complex.parent.name]].c++;
    }

    if (typeof handlers.afterAdd === 'function') await handlers.afterAdd({ form, complex, user, data, newItem });
    return returnId // !!! переделать защиту от form.fields[item.code] в showComplexItem
      ? newItem._id
      : await lib.markup.actions.showComplexItem({ itemCode, complexCode: code, user, form: processForm });
  },
  deleteComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    const { _id: itemId } = processForm.data[code];
    const complex = processForm.fields[item.complexCode];
    const parentData = processForm.data[complex.parent.code];

    await db.mongo.deleteOne(item.col, itemId);
    const itemLink = complex.links[complex.parent.name];
    const updateData = { $pull: { [`${itemLink}.l`]: itemId }, $inc: { [`${itemLink}.c`]: -1 } };
    await db.mongo.updateOne(complex.parent.col, parentData._id, updateData);

    if (complex.links?.[complex.parent.name]) {
      if (parentData[complex.links[complex.parent.name]]) {
        parentData[complex.links[complex.parent.name]].l = parentData[complex.links[complex.parent.name]].l.filter(
          (_id) => _id.toString() !== itemId.toString(),
        );
        parentData[complex.links[complex.parent.name]].c--;
      }
    }
  },
  showComplex: async ({ form, code, user, query }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    if (item.type === 'complex') {
      const { handlers, execHandlers } = lib.markup.helpers.prepareMarkupHandlers({ form: processForm });
      const result = lib.markup.complex.get(
        { user, form: processForm, data: processForm.data, parent: item.parent, handlers },
        { ...item, custom: { ...(item.custom || {}), query } },
      );
      await execHandlers();
      return result;
    } else {
      const { _id: itemId } = processForm.data[code] || {};
      const itemData = await db.mongo.findOne(item.col, itemId);
      processForm.data[code] = itemData;
      return await lib.markup.actions.showComplexItem({
        itemCode: code,
        complexCode: item.complexCode,
        user,
        form: processForm,
      });
    }
  },
  showComplexItem: async ({ itemCode, complexCode, user, form }) => {
    const complex = form.fields[complexCode];

    const { handlers, execHandlers } = lib.markup.helpers.prepareMarkupHandlers({ form });
    handlers.tpl.push(async () => {
      let result = [];
      const item = {
        ...complex.item,
        code: itemCode,
        complexCode: complex.code,
        name: complex.name,
        col: complex.col,
        linecode: complex.linecode,
        elPath: 'core/default/el~complex|item',
      };
      form.fields[item.code] = item;
      const proxyData = { user, form, data: form.data[itemCode], parent: item, handlers };
      try {
        result = lib.markup.helpers.addProxifiedContextToTplFunc(
          form.markup[complex.linecode].tpl,
          proxyData,
        )({ data: form.data[itemCode] || {}, custom: item.custom || {} });
      } catch (err) {
        result = [['div', { class: 'inline-error', error: err.message }]];
      }
      complex.items[item.code] = { ...item, content: result };
    });
    await execHandlers();

    return complex.items[itemCode];
  },
});
