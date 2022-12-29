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

    const parentLink = block.links[block.name]?.[block.parent.name];
    const insertData = parentLink ? { [parentLink]: { l: [parentId], c: 1 } } : {};
    const newItem = await db.mongo.insertOne(block.col, insertData);

    const itemLink = block.links[block.parent.name];
    if (itemLink) {
      const updateData = { $push: { [`${itemLink}.l`]: newItem._id }, $inc: { [`${itemLink}.c`]: 1 } };
      await db.mongo.updateOne(block.parent.col, parentId, updateData);
    }

    const promises = { db: [], tpl: [] };
    const errors = [];
    const itemCode = ++processForm.codeCount;
    processForm.data[itemCode] = insertData;

    promises.tpl.push(async () => {
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
      processForm.fields[item.code] = item;
      const proxyData = { form: processForm, parent: item, errors, promises };
      result = lib.markup.helpers.addProxifiedContextToTplFunc(
        processForm.markup[block.linecode].tpl,
        proxyData,
      )({ data: insertData });
      block.items[item.code] = { ...item, content: result };
      if (errors.length) throw errors[0];
    });

    async function execPromises() {
      if (promises.tpl.length) {
        const tplPromises = [...promises.tpl];
        const dbPromises = [...promises.db];
        promises.tpl.splice(0, promises.tpl.length);
        promises.db.splice(0, promises.db.length);
        for (const dbFunc of dbPromises) await dbFunc();
        for (const tplFunc of tplPromises) await tplFunc();
        await execPromises();
      }
    }
    await execPromises();

    return block.items[itemCode];
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
});
