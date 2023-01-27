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
        const find = {};
        if (!admin) {
          if (!user.current.parentType) return [];
          if (!user.current.link?.value) return [];
          find['__ce.l'] = { $elemMatch: { $eq: db.mongo.ObjectID(user.current.link?.value) } };
        }
        const findData = await db.mongo.find(
          'worker',
          find,
          { projection: { _id: 1 } },
          { ...complex.filter, ...(query.filter || {}) },
        );
        return findData.map(({ _id }) => _id);
      },
      links: { worker: { 'ce~worker': false, ce: '__ce' }, 'ce~worker': false, ce: '__worker' },
      tableFilter: { limit: 10 },
      add: {
        presetFields: user.current.link ? { company: [user.current.link] } : {},
      },
    }),
  ],
  func: () => {},
  style: `
  `,
});
