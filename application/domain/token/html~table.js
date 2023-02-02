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
            label: 'Осталось / выпущено',
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
                        COMPLEX(
                          {
                            label: 'Эмитент',
                            name: 'fabricator_buy',
                            col: 'fabricator',
                            links: { token: '__fabricator' },
                            config: { disableCardView: true },
                          },
                          () => [
                            FIELD({ label: 'Название', name: 'name', type: 'label' }),

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

                        FIELD({
                          label: 'Качество',
                          type: 'label',
                          name: 'type',
                          lst: 'token~quality',
                          class: 'mb-3',
                        }),
                        FIELD({
                          label: 'Цена',
                          type: 'label',
                          name: 'price',
                          class: 'mb-3',
                        }),
                        FIELD({
                          label: 'Осталось / выпущено',
                          type: 'label',
                          name: 'soldCount',
                          defValue: data.count - (data.sold || 0) + '/' + data.count,
                          class: 'mb-3',
                        }),
                        FIELD({ label: 'Продано', name: 'sold', type: 'json' }),
                        FIELD({ label: 'Количество', name: 'count', type: 'json' }),
                        HR(),

                        FIELD({ label: 'Количество для покупки', name: 'buyCount', class: 'mb-3' }),
                        FIELD({
                          name: 'buyAction',
                          type: 'button',
                          label: 'Купить',
                          config: {
                            btnType: 'primary',
                            label: true,
                            popover: {
                              trigger: 'manual',
                              placement: 'bottom',
                              'custom-class': 'popover-danger',
                              content: '-',
                              'original-title': 'Ошибка заполнения формы',
                            },
                          },
                          handler: async ({ form, field, parent, user, data, parentData }) => {
                            const token = await db.mongo.findOne('token', parentData._id, {
                              projection: { count: true, sold: true },
                            });
                            if (+data.buyCount > +token.count - token.sold)
                              throw new Error('Такого количества токенов нет в наличии');

                            const {
                              __customer: {
                                l: [customerId],
                              },
                            } = await db.mongo.findOne('ce', user.current.link.v);
                            await db.addComplex({
                              name: 'purchase',
                              parents: [
                                { name: 'customer', _id: customerId },
                                { name: 'token', _id: parentData._id },
                              ],
                              links: {
                                purchase: { customer: '__customer', token: '__token' },
                                customer: '__purchase',
                                token: '__purchase',
                              },
                              data: { count: data.buyCount },
                            });
                            await db.mongo.updateOne('token', parentData._id, { $inc: { sold: +data.buyCount } });

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
                            afterHandler: (event, data) => {
                              const $offcanvas = event.target.closest('.offcanvas');
                              $($offcanvas).offcanvas('hide');
                              const $item = $offcanvas.closest('.complex-item');
                              window.reloadComplexItem($item);
                            },
                          },
                        }),
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
