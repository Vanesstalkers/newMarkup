({
  saveField: async ({ form, code, value, user }) => {
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const { _id: parentId } = processForm.data[field.parentCode];

    await db.mongo.updateOne(parent.col, parentId, { $set: { [field.name]: value } });
  },
  addComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const block = processForm.fields[code];
    const { _id: parentId } = processForm.data[block.parent.code];

    const newItem = await db.addComplex({ ...block, parent: { ...block.parent, _id: parentId } });
    const itemCode = lib.markup.helpers.nextCode(processForm);
    processForm.data[itemCode] = newItem;
    return await lib.markup.actions.showComplexItem({ itemCode, blockCode: code, user, form: processForm });
  },
  deleteComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    const { _id: itemId } = processForm.data[code];
    const block = processForm.fields[item.blockCode];
    const { _id: parentId } = processForm.data[block.parent.code];

    await db.mongo.deleteOne(item.col, itemId);
    const itemLink = block.links[block.parent.name];
    const updateData = { $pull: { [`${itemLink}.l`]: itemId }, $inc: { [`${itemLink}.c`]: -1 } };
    await db.mongo.updateOne(block.parent.col, parentId, updateData);
  },
  showComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const item = processForm.fields[code];
    const { _id: itemId } = processForm.data[code];

    const itemData = await db.mongo.findOne(item.col, itemId);
    processForm.data[code] = itemData;
    return await lib.markup.actions.showComplexItem({ itemCode: code, blockCode: item.blockCode, user, form: processForm });
  },
  showComplexItem: async ({ itemCode, blockCode, user, form }) => {
    const block = form.fields[blockCode];

    const { handlers, execHandlers } = lib.markup.actions.prepareMarkupHandlers({ form });
    handlers.tpl.push(async () => {
      let result = [];
      const item = {
        ...block.item,
        code: itemCode,
        blockCode: block.code,
        name: block.name,
        col: block.col,
        linecode: block.linecode,
        elPath: 'core/default/el~complex|item',
      };
      form.fields[item.code] = item;
      const proxyData = { user, form, data: form.data[itemCode], parent: item, handlers };
      try {
        result = lib.markup.helpers.addProxifiedContextToTplFunc(form.markup[block.linecode].tpl, proxyData)();
      } catch (err) {
        result = [['div', { class: 'inline-error', error: err.message }]];
      }
      block.items[item.code] = { ...item, content: result };
    });
    await execHandlers();

    return block.items[itemCode];
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
