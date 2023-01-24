async ({ col, name, parents = [], links, data }) => {
  const insertData = {};
  for (const parent of parents) {
    if (typeof parent._id === 'string') parent._id = db.mongo.ObjectID(parent._id);
    if (!parent.col) parent.col = parent.name;
    const { name: parentName, _id: parentId } = parent;
    const parentLink = links[name]?.[parentName];
    if (parentLink) insertData[parentLink] = { l: [parentId], c: 1 };
  }
  const newItem = await db.mongo.insertOne(col || name, { ...insertData, ...data });

  for (const { name: parentName, col: parentCol, _id: parentId } of parents) {
    const itemLink = links[parentName];
    if (itemLink) {
      const updateData = { $push: { [`${itemLink}.l`]: newItem._id }, $inc: { [`${itemLink}.c`]: 1 } };
      await db.mongo.updateOne(parentCol || parentName, parentId, updateData);
    }
  }
  return { ...insertData, ...newItem };
};
