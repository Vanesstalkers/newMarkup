({
  config: {
    menu: { label: 'Юридические лица', icon: 'fa-solid fa-city' },
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
          if (query['filter.find_text']) find.add_time = { $regex: query['filter.find_text'] || '' };
          const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
          return findData.map(({ _id }) => _id);
        },
        cols: [
          { label: 'Добавлена', f: { name: 'add_time', config: { inputType: 'datetime' } } },
          { label: 'Название', f: { name: 'name', type: 'input' } },
          { label: 'ИНН', f: { name: 'inn', type: 'input' } },
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
