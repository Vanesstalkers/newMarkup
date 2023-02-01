async ({ col, name, _id, parents = [], links, data = {} }) => {
  const bulkQueries = [];

  if (!_id) {
    _id = db.mongo.ObjectID();
    bulkQueries.push({ insertOne: { document: { _id } } });
  }

  const insertData = {
    add_time: new Date().toISOString(),
  };
  for (const parent of parents) {
    if (typeof parent._id === 'string') parent._id = db.mongo.ObjectID(parent._id);
    if (!parent.col) parent.col = parent.name;
    const { name: parentName, _id: parentId } = parent;
    const parentLink = links[name]?.[parentName];
    if (parentLink) insertData[parentLink] = { l: [parentId], c: 1 };
  }
  const $set = { ...insertData, ...data };
  if ($set._id) delete $set._id;
  bulkQueries.push({ updateOne: { filter: { _id }, update: { $set } } });
  await db.mongo.bulkWrite(col || name, bulkQueries);

  for (const { name: parentName, col: parentCol, _id: parentId } of parents) {
    const itemLink = links[parentName];
    if (itemLink) {
      const updateData = { $push: { [`${itemLink}.l`]: _id }, $inc: { [`${itemLink}.c`]: 1 } };
      await db.mongo.updateOne(parentCol || parentName, parentId, updateData);
    }
  }
  return { ...insertData, _id };
};
