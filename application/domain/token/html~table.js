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
          { label: 'Время добавления', f: { name: 'add_time', on: { prepareValue: 'toLocaleString' } } },
          hideCols.includes('fabricator')
            ? null
            : { label: 'Кем выпущен', c: { name: 'fabricator', f: { name: 'name', label: false } } },
          { label: 'Качество', f: { name: 'type', lst: 'token~quality' } },
          { label: 'Цена', f: { name: 'price' } },
          {
            label: 'Количество / выпущено',
            html: ({ data }) => [
              SPAN({ text: data.count - (data.sold || 0) + '/' + data.count }),
              FIELD({ label: 'Продано', name: 'sold', type: 'json' }),
              FIELD({ label: 'Количество', name: 'count', type: 'json' }),
            ],
          },

          hideCols.includes('buy')
            ? null
            : {
                label: true,
                html: ({ data }) => [
                  HTML('core/default~offcanvas', {
                    title: 'Покупка токенов',
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
                                label: 'Эмитент',
                                name: 'fabricator_buy',
                                col: 'fabricator',
                                links: { token: '__fabricator' },
                                config: { disableCardView: true },
                              },
                              () => [
                                DIV(
                                  {
                                    class: 'card-body',
                                  },
                                  FIELD({ label: 'Название', name: 'name', type: 'label' }),
                                ),
                                COMPLEX(
                                  {
                                    label: 'Данные эмитента',
                                    name: 'ce',
                                    controls: { collapse: true, config: { collapsed: true } },
                                    config: { disableCardStyle: true },
                                    links: { fabricator_buy: '__ce' },
                                  },
                                  () => [HTML(`ce~info`)],
                                ),
                              ],
                            ),
                            // c: { name: 'fabricator', f: { name: 'name', label: false } }
                          ),

                          DIV(
                            { class: 'col-12' },
                            COMPLEX(
                              {
                                label: 'Документы на выпуск',
                                name: 'file',
                                add: false,
                                config: { disableCardStyle: true },
                                controls: { collapse: true, config: { collapsed: true } },
                              },
                              () => [FIELD({ name: 'file', type: 'file', label: false })],
                            ),
                          ),
                          HR(),

                          FIELD({
                            label: 'Качество',
                            type: 'label',
                            name: 'type',
                            lst: 'token~quality',
                            class: 'col-4',
                          }),
                          FIELD({ label: 'Цена', type: 'label', name: 'price', class: 'col-4' }),
                          FIELD({ label: 'Количество', name: 'buyCount', class: 'col-4' }),
                          HR(),

                          DIV(
                            { class: 'col-12 text-end' },
                            FIELD({
                              name: 'buyAction',
                              type: 'button',
                              label: 'Купить',
                              config: {
                                btnType: 'success',
                                label: true,
                                popover: {
                                  trigger: 'manual',
                                  placement: 'left',
                                  'custom-class': 'popover-danger',
                                  content: '-',
                                  'original-title': 'Ошибка заполнения формы',
                                },
                              },
                              handler: async ({ form, field, parent, user, data, parentData }) => {
                                return data;
                              },
                              on: {
                                beforeHandler: async (event) => {
                                  const data = Array.from(
                                    event.target.closest('.offcanvas-body').querySelectorAll('input'),
                                  ).reduce((obj, { name, value, type, checked }) => {
                                    if (type === 'checkbox' || type === 'radio') {
                                      if (type === 'checkbox') obj[name] = checked;
                                      if (type === 'radio' && checked) obj[name] = value;
                                    } else {
                                      obj[name] = value;
                                    }
                                    return obj;
                                  }, {});
                                  if (!data.buyCount) throw new Error('Должно быть указано количество');
                                  return { buyCount: data.buyCount };
                                },
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
          {
            html: () => [
              DIV(
                { class: 'row' },
                DIV({ class: 'col-4' }, FIELD({ label: 'Количество', name: 'count' })),
                DIV({ class: 'col-4' }, FIELD({ label: 'Цена', name: 'price' })),
                DIV(
                  { class: 'col-4' },
                  FIELD({ label: 'Качество', name: 'type', type: 'select', lst: 'token~quality' }),
                ),
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
