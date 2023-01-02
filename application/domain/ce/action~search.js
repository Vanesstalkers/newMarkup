async ({ query }) => {
  const result = await db.mongo.find(
    'lvl1',
    { num: { $regex: query, $options: 'i' } },
    { projection: { _id: 1, num: 1 } },
  );
  return result.map(({ _id, num }) => ({ value: _id, label: num }));
};
