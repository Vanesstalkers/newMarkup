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
        // if (query['filter.find_text']) find.second_name = { $regex: query['filter.find_text'] || '' };
        const findData = await db.mongo.find('token', find);
        return findData.map(({ _id }) => _id) || [];
      },
      // links: { token: { 'ce~worker': false }, 'ce~worker': false },
    }),
  ],
  func: () => {},
  style: `
  `,
});
