async (col, query, options, { limit, offset = 0, reverse = false } = {}) => {
  // console.log('find', {col, query, options});
  if (!col) throw new Error('col is empty');
  const find = await db.mongo.client.collection(col).find(query, options);
  if (reverse) find.sort({_id: -1});
  if (offset) find.skip(offset);
  if (limit) find.limit(limit);
  const result = await find.toArray();
  return result;
  // return !reverse ? result.reverse() : result;
};
