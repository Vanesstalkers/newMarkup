async (col, query, options) => {
  if (!col) throw new Error('col is empty');
  const result = await db.mongo.client.collection(col).aggregate(query, options).toArray();
  return result;
};
