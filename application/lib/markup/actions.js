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
      if (typeof handler === 'function') result = await handler({ form, code, user, data });
    }
    return result;
  },
  saveField: async ({ form, code, value, user }) => {
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const { _id: parentId } = processForm.data[field.parentCode];

    await db.mongo.updateOne(parent.col, parentId, { $set: { [field.name]: value } });
  },
  addComplex: async ({ form, code, user, data = {} }) => {
    const [block, name] = form.split('~');
    const processForm = user.forms[form];
    const complex = processForm.fields[code];
    const { _id: parentId } = processForm.data[complex.parent.code];
    const handlers =
      lib.utils.getDeep(domain, [...block.split('/'), 'cache', 'handlers', complex.linecode].join('.')) || {};

    if (typeof handlers.beforeAdd === 'function') await handlers.beforeAdd({ form, code, user, data });
    const newItem = await db.addComplex({ ...complex, data, parent: { ...complex.parent, _id: parentId } });
    const itemCode = lib.markup.helpers.nextCode(processForm);
    processForm.data[itemCode] = newItem;
    if (typeof handlers.afterAdd === 'function') await handlers.afterAdd({ form, code, user, data, newItem });
    return await lib.markup.actions.showComplexItem({ itemCode, complexCode: code, user, form: processForm });
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
  showComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    const { _id: itemId } = processForm.data[code];

    const itemData = await db.mongo.findOne(item.col, itemId);
    processForm.data[code] = itemData;
    return await lib.markup.actions.showComplexItem({
      itemCode: code,
      complexCode: item.complexCode,
      user,
      form: processForm,
    });
  },
  showComplexItem: async ({ itemCode, complexCode, user, form }) => {
    const complex = form.fields[complexCode];

    const { handlers, execHandlers } = lib.markup.actions.prepareMarkupHandlers({ form });
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
        )({ data: form.data[itemCode] });
      } catch (err) {
        result = [['div', { class: 'inline-error', error: err.message }]];
      }
      complex.items[item.code] = { ...item, content: result };
    });
    await execHandlers();

    return complex.items[itemCode];
  },
  prepareMarkupHandlers: ({ form }) => {
    const handlers = { ids: [], db: {}, tpl: [] };

    async function execHandlers() {
      try {
        if (handlers.tpl.length) {
          const idsHandlers = [...handlers.ids];
          const tplHandlers = [...handlers.tpl];
          handlers.ids.splice(0, handlers.ids.length);
          handlers.tpl.splice(0, handlers.tpl.length);
          for (const handler of idsHandlers) await handler();

          for (const [col, map] of Object.entries(handlers.db)) {
            for (const [linecode, ids] of Object.entries(map)) {
              const findData = await db.mongo.find(
                col,
                { _id: { $in: ids } },
                { projection: form.markup[linecode].queryFields },
              );
              for (const item of findData) {
                const itemCode = form.data[`${linecode}-${item._id}`];
                form.data[itemCode] = item;
                delete form.data[`${linecode}-${item._id}`];
              }
            }
          }

          for (const handler of tplHandlers) await handler();
          handlers.db = {};
          await execHandlers();
        }
      } catch (err) {
        console.log(err);
      }
    }

    return { handlers, execHandlers };
  },
});
