({
  config: {
    menu: { label: 'Юридические лица', icon: 'fa-solid fa-city' },
    access: ['admin'],
    disableCardStyle: true,
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    HTML('core/default~table', {
      col: 'ce',
      filter: {
        items: [
          { class: 'col-3', f: { label: 'Название', name: 'filter.find_text', config: { float: true } } },
          { class: 'col-3', f: { label: 'Показывать удаленные', name: 'filter.is_deleted', type: 'check', config: { switch: true } } },
        ], // prettier-ignore
      },
      table: {
        addRowLink: true,
        id: async ({ user, complex, query = {} }) => {
          const find = {};
          if (query['filter.find_text']) find.name = { $regex: query['filter.find_text'] || '' };
          const findData = await db.mongo.find(
            complex.col,
            find,
            { projection: { _id: 1 } },
            { ...complex.filter, ...(query.filter || {}) },
          );
          return findData.map(({ _id }) => _id);
        },
        filter: { limit: 5 },
        cols: [
          { label: 'Время добавления', f: { name: 'add_time', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Название', f: { name: 'name' } },
          { label: 'ИНН', f: { name: 'inn' } },
        ],
      },
      add: {
        modal: { toggleButton: { label: 'Добавить юр.лицо' } },
        items: [
          { f: { name: 'name', label: 'Название' } }, 
          { html: (_, d) => [HTML('ce/fields~inn')] }
        ], // prettier-ignore
      },
    }),
  ],
});
