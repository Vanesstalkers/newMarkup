({
  config: {
    menu: {
      label: 'Компании',
      icon: 'bx bx-building',
    },
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
          { class: 'col-3', f: { name: 'filter.find_text', label: 'Название', config: { float: true } } },
          {
            class: 'col-3',
            f: { name: 'filter.is_deleted', label: 'Показывать удаленные', type: 'check', config: { switch: true } },
          },
        ],
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
          // { label: 'Добавлена', c: { name: 'lvl2', f: { name: 'add_time', config: { inputType: 'datetime' } } } },
          { label: 'Добавлена', f: { name: 'add_time', config: { inputType: 'datetime' } } },
          { label: 'Название', f: { name: 'name', type: 'input' } },
          { label: 'ИНН', f: { name: 'inn', type: 'input' } },
          // { label: 'Тест', html: ({ data }) => [DIV({ text: data?._id }), FIELD({ name: 'test' })] },
          {} || {
            label: 'Тест2',
            html: ({ data }) => [
              // COMPLEX({ name: 'lvl3', item: { config: {} } }, () => [FIELD({ name: 'test' })]),
              COMPLEX({ name: 'lvl2-deep', col: 'lvl2', links: { lvl1: '__lvl2' } }, ({ data }) => [
                FIELD({ name: 'add_time', config: { inputType: 'datetime' } }),
                COMPLEX({ name: 'lvl3', links: { 'lvl2-deep': '__lvl3' } }, () => [FIELD({ name: 'test' })]),
              ]),
            ],
          },
          /*{label: 'ОГРН', f: {name: 'ogrn', type: 'text--', value: ''}},
        {label: 'КПП', f: {name: 'kpp', type: 'text--', value: ''}},*/
        ],
      },
      add: {
        modal: true,
        items: [{ f: { name: 'name', label: 'Название' } }, { html: (_, d) => [HTML('ce/fields~inn')] }],
      },
    }),
  ],
  func: () => {},
  style: `
  `,
});
