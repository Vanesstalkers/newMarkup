(col, query, options, cb) => {
  if (!col) throw new Error('col is empty');
  db.mongo.client.collection(col).find(query, options).toArray(cb);
};
