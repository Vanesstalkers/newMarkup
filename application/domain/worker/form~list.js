({
  config: {
    menu: {
      label: 'Сотрудники',
      icon: 'fa-solid fa-address-card',
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
        const admin = user.current.v === 'admin';
        if (!admin) {
          if (!user.current.parentType) return [];
          if (!user.current.link?.value) return [];
        }
        const collection = user.current.parentType || 'fabricator';
        const findData = await db.mongo.aggregate('ce', [
          { $match: { _id: db.mongo.ObjectID(user.current.link?.value) } },
          // { $lookup: { from: 'ce', localField: '__ce.l', foreignField: '_id', as: 'from_ce' } },
          {
            $lookup: {
              from: 'worker',
              localField: '__worker.l',
              foreignField: '_id',
              as: 'from_worker',
              pipeline: [{ $skip: 0 }, { $limit: 100 }],
            },
          },
          // { $limit: 1 },
        ]);
        // if (query['filter.find_text']) find.second_name = { $regex: query['filter.find_text'] || '' };
        return findData[0]?.from_worker.map(({ _id }) => _id) || [];
      },
      links: { worker: { 'ce~worker': false, ce: '__ce' }, 'ce~worker': false, ce: '__worker' },
    }),
  ],
  func: () => {},
  style: `
  `,
});
