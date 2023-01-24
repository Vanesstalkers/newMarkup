({
  config: {
    menu: { label: 'Документы', icon: 'fa-solid fa-folder-open' },
    disableCardStyle: true,
  },
  col: 'document',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    HTML('core/default~table', {
      col: 'document',
      filter: {
        items: [
          // { class: 'col-3', f: { label: 'Название', name: 'filter.find_text', config: { float: true } } },
          // { class: 'col-3', f: { label: 'Показывать удаленные', name: 'filter.is_deleted', type: 'check', config: { switch: true } } },
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
          {
            label: 'Добавлена',
            f: { name: 'add_time', type: 'label', label: false, config: { inputType: 'datetime' } },
          },
          { label: 'Тип', f: { name: 'type', type: 'select', lst: 'document~type' } },
          // { label: 'ИНН', c: { name: 'customer', c: { name: 'ce', f: { name: 'inn', type: 'label', label: false } } } },
          {
            label: 'ИНН',
            html: ({ data }) => [
              COMPLEX({ name: 'customer', add: false, config: { disableCardView: true } }, ({data}) => [
                COMPLEX({ name: 'ce', add: false, config: { disableCardView: true } }, () => [
                  FIELD({ name: 'inn', type: 'label' }),
                ]),
              ]),
            ],
          },
        ],
      },
      add: false /* {
        modal: { toggleButton: { label: 'Добавить юр.лицо' } },
        items: [
          { f: { name: 'name', label: 'Название' } }, 
          { html: (_, d) => [HTML('ce/fields~inn')] }
        ], // prettier-ignore
      }, */,
    }),
  ],
});
