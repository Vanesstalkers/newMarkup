({
  config: {
    menu: { label: 'Производители', icon: 'fas fa-person-digging' },
    access: ['admin', 'fabricator_manager'],
    disableCardStyle: true,
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: ({ data }) => [
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
            const findData = await db.mongo.aggregate('fabricator', [
              { $lookup: { from: 'token', localField: '__token.l', foreignField: '_id', as: 'from_token' } },
            ]);
            // [
            //   {
            //     '$project': {
            //       'keys': {
            //         '$map': {
            //           'input': {
            //             '$objectToArray': '$__token.ids'
            //           }, 
            //           'in': {
            //             '$toObjectId': '$$this.k'
            //           }
            //         }
            //       }
            //     }
            //   }, {
            //     '$lookup': {
            //       'from': 'token', 
            //       'localField': 'keys', 
            //       'foreignField': '_id', 
            //       'as': 'matchedIds'
            //     }
            //   }
            // ]
            const count = findData.length;
            const tokenCount = findData.reduce(
              (sum, item) => sum + item.from_token.reduce((sum, item) => sum + (item.count || 0) * 1, 0),
              0,
            );
            return [
              { label: 'Производителей', desc: 'Всего', num: count, icon: 'fas fa-person-digging' },
              { label: 'Выпущено токенов', desc: 'Всего', num: tokenCount, icon: 'fa-solid fa-coins' },
            ];
          },
        },
      },
      ({ data }) => [
        DIV(
          { class: 'card' },
          DIV(
            { class: 'card-body' },
            DIV(
              { class: 'd-flex align-items-start justify-content-between' },
              DIV(
                { class: 'content-left', text: data.label },

                DIV(
                  { class: 'd-flex align-items-end mt-2' },
                  H4({ class: 'mb-0 me-2' }, SPAN({ text: data.num })),
                  SMALL({ class: 'text-success' }, SPAN({ text: '(+29%)' })),
                ),
                SPAN({ text: data.desc }),
              ),
              SPAN({ class: 'badge bg-label-primary rounded p-2' }, I({ class: data.icon + ' fa-2x' })),
            ),
          ),
        ),
      ],
    ),

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
          if (query['filter.find_text']) find.name = { $regex: query['filter.find_text'] || '' };
          const findData = await db.mongo.find(
            complex.col,
            find,
            { projection: { _id: 1 } },
            { ...complex.filter, ...(query.filter || {}) },
          );
          return findData.map(({ _id }) => _id);
        },
        filter: { limit: 10 },
        cols: [
          { label: 'Время добавления', f: { name: 'add_time', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Название', f: { name: 'name' } },
          {
            label: 'ИНН',
            c: { name: 'ce_inn', col: 'ce', f: { name: 'inn' }, links: { fabricator: '__ce' } },
          },
          {
            label: 'Юр.лицо',
            c: { name: 'ce_name', col: 'ce', f: { name: 'name' }, links: { fabricator: '__ce' } },
          },
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
