async (col, value = {}) => {
  // console.warn('db insertOne col=', col, value);
  const insertResult = await db.mongo.client.collection(col).insertOne(value);
  return { _id: insertResult.insertedId };
};
