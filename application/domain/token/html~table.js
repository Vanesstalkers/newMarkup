({
  tpl: ({ data }, { hideFilters, hideCols = [], tableId, links, add = {} } = {}) => [
    HTML('core/default~table', {
      col: 'token',
      links: links,
      filter: {
        items: hideFilters
          ? []
          : [
              { class: 'col-6 col-sm-3', f: { label: 'Должность', name: 'find_type', type: 'select', lst: 'worker~type' } },
              { class: 'col-6 col-sm-3', f: { label: 'Имя/Фамилия', name: 'find_text' } },
              { class: 'col-6 col-sm-3', f: { label: 'Показывать\x0aуволенных', name: 'is_delete', type: 'check' } },
            ], // prettier-ignore
      },
      table: {
        // addRowLink: true,
        id: tableId,
        cols: [
          { label: 'Добавлен', f: { name: 'add_time', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Кем выпущен', c: { name: 'fabricator', f: { name: 'name', label: false } } },
          { label: 'Качество', f: { name: 'type', lst: 'token~quality' } },
          { label: 'Цена', f: { name: 'price' } },
          { label: 'Количество', f: { name: 'count' } },
          hideCols.includes('buy')
            ? null
            : {
                label: true,
                html: ({ data }) => [
                  HTML('core/default~offcanvas', {
                    id: data._id,
                    button: { label: 'Купить', type: 'info' },
                    html: {
                      body: [
                        DIV(
                          { class: 'row' },
                          DIV(
                            { class: 'col-12' },
                            COMPLEX(
                              {
                                name: 'file',
                                add: false,
                                config: { disableCardStyle: true },
                                // links: { file: { tmp_obj_token: '__token' }, tmp_obj_token: '__file' },
                              },
                              () => [FIELD({ name: 'file', type: 'file', label: false })],
                            ),
                          ),
                          DIV(
                            { class: 'col-12' },
                            FIELD({
                              name: 'buyAction',
                              type: 'button',
                              label: 'Купить',
                              config: { btnType: 'success', label: true },
                              handler: async ({ form, parent, user, value }) => {
                                console.log('buyAction', { user });
                                return data;
                              },
                            }),
                          ),
                        ),
                      ],
                    },
                  }),
                ],
              },
        ].filter((col) => col),
      },
      add: {
        modal: add.modal || false,
        items: [
          // { f: { label: 'Количество', name: 'count' } },
          // { f: { label: 'Качество', name: 'type', type: 'select', lst: 'token~quality' } },
          {
            html: () => [
              DIV(
                { class: 'row' },
                DIV({ class: 'col-4' }, FIELD({ label: 'Количество', name: 'count' })),
                DIV({ class: 'col-4' }, FIELD({ label: 'Цена', name: 'price' })),
                DIV({ class: 'col-4' }, FIELD({ label: 'Качество', name: 'type', type: 'select', lst: 'token~quality' })),
                DIV(
                  { class: 'col-12' },
                  COMPLEX(
                    {
                      name: 'file',
                      add: { type: 'file', placeholder: 'Добавить документ', field: 'file', multiple: true },
                      config: { disableCardStyle: true },
                      links: { file: { tmp_obj_token: '__token' }, tmp_obj_token: '__file' },
                      item: { controls: { delete: true, config: { simple: true } } },
                    },
                    () => [FIELD({ name: 'file', type: 'file', label: false })],
                  ),
                ),
              ),
            ],
          },
        ],
      },
    }),
  ],
});
