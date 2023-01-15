({
  handler: async ({ form, code, user, data }) => {
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const { _id: parentId } = processForm.data[field.parentCode];

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
      if (typeof handler === 'function') result = await handler({ form: processForm, field, user, data });
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
    if (handler) await handler({ form, field, parent, user, value });
    processForm.data[field.parentCode][field.name] = value; // !!! доделать setDeep
    await db.mongo.updateOne(parent.col, parentId, { $set: { [field.name]: value } });
  },
  addComplex: async ({ form, code, user, data = {}, returnId = false }) => {
    const [block, name] = form.split('~');
    const processForm = user.forms[form];
    const complex = processForm.fields[code];
    const { _id: parentId } = processForm.data[complex.parent.code];
    const handlers =
      lib.utils.getDeep(domain, [...block.split('/'), 'cache', 'handlers', complex.linecode].join('.')) || {};

    if (typeof handlers.beforeAdd === 'function') await handlers.beforeAdd({ form, complex, user, data });
    const newItem = await db.addComplex({ ...complex, data, parent: { ...complex.parent, _id: parentId } });
    const itemCode = lib.markup.helpers.nextCode(processForm);
    processForm.data[itemCode] = newItem;
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
    const { _id: parentId } = processForm.data[complex.parent.code];

    await db.mongo.deleteOne(item.col, itemId);
    const itemLink = complex.links[complex.parent.name];
    const updateData = { $pull: { [`${itemLink}.l`]: itemId }, $inc: { [`${itemLink}.c`]: -1 } };
    await db.mongo.updateOne(complex.parent.col, parentId, updateData);
  },
  showComplex: async ({ form, code, user, query }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    if (item.type === 'complex') {
      // if (_id !== true) _id = db.mongo.ObjectID(_id);
      // let { col, id, on = {} } = processForm.markup[`__${form}`];
      // if (!id) id = () => [_id];
      const { handlers, execHandlers } = lib.markup.helpers.prepareMarkupHandlers({ form: processForm });
      const result = lib.markup.complex.get(
        { user, form: processForm, data: processForm.data, parent: item.parent, handlers },
        { ...item, custom: { query } },
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
        )({ data: form.data[itemCode], custom: item.custom || {} });
      } catch (err) {
        result = [['div', { class: 'inline-error', error: err.message }]];
      }
      complex.items[item.code] = { ...item, content: result };
    });
    await execHandlers();

    return complex.items[itemCode];
  },
});
