async ({ col, name, parent: { name: parentName, col: parentCol, _id: parentId }, links }) => {
  const parentLink = links[name]?.[parentName];
  const insertData = parentLink ? { [parentLink]: { l: [parentId], c: 1 } } : {};
  const newItem = await db.mongo.insertOne(col || name, insertData);
  const itemLink = links[parentName];
  if (itemLink) {
    const updateData = { $push: { [`${itemLink}.l`]: newItem._id }, $inc: { [`${itemLink}.c`]: 1 } };
    await db.mongo.updateOne(parentCol || parentName, parentId, updateData);
  }
  return { ...insertData, ...newItem };
};
