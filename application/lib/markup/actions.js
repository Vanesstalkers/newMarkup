({
  saveField: async ({ form, code, value, user }) => {
    const processForm = user.forms[form];
    const field = processForm.fields[code];
    const parent = processForm.fields[field.parentCode];
    const _id = processForm.data[field.parentCode]._id;
    await db.mongo.updateOne(parent.col, _id, { $set: { [field.name]: value } });
  },
  addComplex: async ({ form, code, user }) => {
    const processForm = user.forms[form];
    const block = processForm.fields[code];
    const _id = processForm.data[block.parent.code]._id;

    const parentLink = block.links[block.name]?.[block.parent.name];
    const insertData = parentLink ? { [parentLink]: { l: [_id], c: 1 } } : {};
    insertData.num = '777';
    const newItem = await db.mongo.insertOne(block.col, insertData);
    
    const itemLink = block.links[block.parent.name];
    if (itemLink) {
      const updateData = { $push: { [`${itemLink}.l`]: newItem._id }, $inc: { [`${itemLink}.c`]: 1 } };
      await db.mongo.updateOne(block.parent.col, _id, updateData);
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
    console.log({ block, _id, newItem, parentLink, item: block.items[itemCode] });

    return block.items[itemCode];
  },
});
