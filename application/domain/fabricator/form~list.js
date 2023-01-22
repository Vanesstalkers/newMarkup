({
  config: {
    menu: { label: 'Производители', icon: 'fas fa-person-digging' },
    disableCardStyle: true,
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    // DIV(
    //   { class: 'row g-4 mb-4' },
    COMPLEX(
      {
        name: 'stats',
        add: false,
        config: { disableCardStyle: true, inline: true },
        controls: { reload: true, config: { hide: true } },
        class: 'row g-4 mb-4',
        item: { class: 'col-sm-4 col-xl-3', bodyClass: 'p-0' },
        id: () => [true],
        handlers: {
          customData: async ({ parentData }) => {
            const count = await db.mongo.client.collection('fabricator').count();
            return [
              { count, icon: 'fas fa-person-digging' },
              { count: count - 1, icon: 'fa-regular fa-handshake' },
              { count: count - 2, icon: 'fa-regular fa-handshake' },
            ];
          },
        },
      },
      ({ data }) => [
        // DIV(
        //   { class: 'col-sm-6 col-xl-3' },
        DIV(
          { class: 'card' },
          DIV(
            { class: 'card-body' },
            DIV(
              { class: 'd-flex align-items-start justify-content-between' },
              DIV(
                { class: 'content-left', text: 'Производителей' },

                DIV(
                  { class: 'd-flex align-items-end mt-2' },
                  H4({ class: 'mb-0 me-2' }, SPAN({ text: data.count })),
                  SMALL({ class: 'text-success' }, SPAN({ text: '(+29%)' })),
                ),
                SPAN({ text: 'Всего' }),
              ),
              SPAN({ class: 'badge bg-label-primary rounded p-2' }, I({ class: data.icon + ' fa-2x' })),
            ),
          ),
        ),
        // ),
      ],
    ),
    // ), // prettier-ignore

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
          { label: 'ИНН', c: { name: 'ce', f: { name: 'inn', type: 'label' }, config: { disableCardStyle: true } } },
          // {
          //   label: 'ce',
          //   html: () => [
          //     COMPLEX(
          //       {
          //         name: 'ce',
          //         add: { auto: true },
          //         // links: { ce: { tmp_obj_fabricator: '__fabricator' }, tmp_obj_fabricator: '__ce' },
          //         // config: { disableCardStyle: true },
          //       },
          //       () => [FIELD({ name: 'inn' })],
          //     ),
          //   ],
          // },
        ],
      },
      add: {
        modal: { toggleButton: { label: 'Добавить производителя' } },
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
                  config: { disableCardStyle: true },
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
