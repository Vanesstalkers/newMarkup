async ({ query }) => {
  const result = await db.mongo.find(
    'ce',
    { name: { $regex: query, $options: 'i' } },
    { projection: { _id: 1, name: 1 } },
  );
  return result.map(({ _id, name }) => ({ value: _id, label: name }));
};
