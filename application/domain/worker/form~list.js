({
  config: {
    menu: {
      label: 'Сотрудники',
      icon: 'bx bx-user-badge',
    },
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    HTML('worker~table', {
      tableId: async ({ user, query = {}, parentData, complex }) => {
        if (!user.current.parentType) return [];
        if (!user.current?.parent._id) return [];
        const collection = user.current.parentType;
        const findData = await db.mongo.aggregate(collection, [
          { $match: { _id: db.mongo.ObjectID(user.current.parent._id) } },
          { $lookup: { from: 'ce', localField: '__ce.l', foreignField: '_id', as: 'from_ce' } },
          { $lookup: { from: 'worker', localField: 'from_ce.__worker.l', foreignField: '_id', as: 'from_worker' } },
        ]);
        // if (query['filter.find_text']) find.second_name = { $regex: query['filter.find_text'] || '' };
        return findData[0]?.from_worker.map(({ _id }) => _id) || [];
      },
      links: { worker: { 'ce~worker': false }, 'ce~worker': false },
    }),
  ],
  func: () => {},
  style: `
  `,
});
