({
  config: {
    menu: {
      label: 'Ресурсные токены',
      icon: 'fa-solid fa-coins',
    },
    access: ['admin', 'fabricator_manager', 'customer_manager'],
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    HTML('token~table', {
      hideCols: user.current.v === 'customer_manager' ? [] : ['buy'],
      tableId: async ({ user, query = {}, parentData, complex }) => {
        const find = {};
        let findData = [];
        if (user.current.parentType === 'fabricator') {
          if (!user.current.parentType) return [];
          if (!user.current.link?.v) return [];
          findData = await db.mongo.aggregate('token', [
            { $lookup: { from: 'fabricator', localField: '__fabricator.l', foreignField: '_id', as: 'fabricator' } },
            { $lookup: { from: 'ce', localField: 'fabricator.__ce.l', foreignField: '_id', as: 'ce' } },
            { $match: { 'ce._id': { $eq: db.mongo.ObjectID(user.current.link?.v) } } },
          ]);
        } else {
          findData = await db.mongo.find(
            'token',
            find,
            { projection: { _id: 1 } },
            { ...complex.filter, ...(query.filter || {}) },
          );
        }
        return findData.map(({ _id }) => _id);
      },
      tableFilter: { limit: 10 },
      // links: { token: { 'ce~worker': false }, 'ce~worker': false },
    }),
  ],
  func: () => {},
  style: `
  `,
});
