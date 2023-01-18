({
  config: {
    menu: {
      label: 'Производители',
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
      col: 'fabricator',
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
          { label: 'Добавлена', f: { name: 'add_time', type: 'label', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Название', f: { name: 'name', type: 'label' } },
          { label: 'ИНН', c: { name: 'ce', f: { name: 'inn', type: 'label' }, config: { disableCardView: true } } },
          // {
          //   label: 'ce',
          //   html: () => [
          //     COMPLEX(
          //       {
          //         name: 'ce',
          //         add: { auto: true },
          //         // links: { ce: { tmp_obj_fabricator: '__fabricator' }, tmp_obj_fabricator: '__ce' },
          //         // config: { disableCardView: true },
          //       },
          //       () => [FIELD({ name: 'inn' })],
          //     ),
          //   ],
          // },
        ],
      },
      add: {
        modal: true,
        items: [
          { f: { label: 'Название производителя', name: 'name' } },
          { f: { label: 'Тип производителя', name: 'type', type: 'select', lst: 'fabricator~type' } },
          {
            html: () => [
              COMPLEX(
                {
                  name: 'ce',
                  add: { auto: true },
                  links: { ce: { tmp_obj_fabricator: '__fabricator' }, tmp_obj_fabricator: '__ce' },
                  config: { disableCardView: true },
                },
                () => [HTML('ce~info')],
              ),
            ],
          },
        ],
      },
    }),
  ],
});
