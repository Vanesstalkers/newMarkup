async ({ col, _id, parent: { name: parentName, col: parentCol, _id: parentId }, links }) => {
  await db.mongo.deleteOne(col, _id);
  const itemLink = links[parentName];
  const updateData = { $pull: { [`${itemLink}.l`]: itemId }, $inc: { [`${itemLink}.c`]: -1 } };
  await db.mongo.updateOne(parentCol || parentName, parentId, updateData);
};
