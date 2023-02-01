async (col, bulkQueries, options) => {
  // console.warn('db bulkQueries col=', { col, bulkQueries, options });
  const result = await db.mongo.client.collection(col).bulkWrite(bulkQueries, options);
  return result;
};
