({
  config: {
    menu: { label: 'Карточка компании', icon: 'fa-solid fa-cart-shopping' },
    access: ['customer_manager'],
    disableCardStyle: true,
  },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'customer',
  id: async function ({ user, query }) {
    let id = query._id;
    if (!id) {
      const ce = await this.db.mongo.findOne('ce', user.current.link?.v);
      if (ce) id = ce.__customer.l[0];
    }
    return id ? [this.db.mongo.ObjectID(id)] : [];
  },
  tpl: () => [
    HTML('core/default~breadcrumbs', { items: ['Покупатели', data.name] }),
    FIELD({ name: 'name', type: 'json' }),

    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-xl-4 col-lg-5 col-md-5 order-1 order-md-0' },
        DIV(
          { class: 'card mb-4' },
          DIV(
            { class: 'card-body' },
            DIV(
              { class: 'user-avatar-section' },
              DIV(
                { class: ' d-flex align-items-center flex-column' },
                FIELD({
                  name: 'avatar',
                  type: 'file',
                  label: 'Аватар',
                  config: { img: { class: 'img-fluid rounded my-4', height: 110, width: 110 } },
                }),
                DIV(
                  { class: 'user-info text-center' },
                  FIELD({ name: 'name', type: 'label', label: false, class: 'mb-2', config: { tag: 'h4' } }),
                  FIELD({ name: 'type', type: 'label', label: false, class: 'badge bg-label-secondary' }),
                ),
              ),
            ),
            DIV(
              { class: 'd-flex justify-content-around flex-wrap my-4 py-3' },
              DIV(
                { class: 'd-flex align-items-start me-4 mt-3 gap-3' },
                SPAN({ class: 'badge bg-label-primary p-2 rounded' }, I({ class: 'bx bx-check bx-sm' })),
                DIV({}, H5({ class: 'mb-0' }, SPAN({ text: '1.23k' })), SPAN({}, SPAN({ text: 'Tasks Done' }))),
              ),
              DIV(
                { class: 'd-flex align-items-start mt-3 gap-3' },
                SPAN({ class: 'badge bg-label-primary p-2 rounded' }, I({ class: 'bx bx-customize bx-sm' })),
                DIV({}, H5({ class: 'mb-0' }, SPAN({ text: '568' })), SPAN({}, SPAN({ text: 'Projects Done' }))),
              ),
            ),
            H5({ class: 'pb-2 border-bottom mb-4' }, SPAN({ text: 'Информация' })),

            COMPLEX(
              {
                name: 'ce',
                class: 'info-container',
                config: { disableCardStyle: true },
                item: { tag: 'ul', class: 'list-unstyled' },
                queryFields: { name: 1 },
              },
              ({ data }) => [
                LI(
                  { class: 'mb-3' },
                  SPAN({ class: 'fw-bold me-2' }, SPAN({ text: 'Статус проверки:' })),
                  SPAN({ class: 'badge bg-label-success' }, SPAN({ text: 'Active' })),
                ),
                LI(
                  { class: 'mb-3' },
                  SPAN({ class: 'fw-bold me-2' }, SPAN({ text: 'Название:' })),
                  SPAN({}, SPAN({ text: data.name })),
                ),
                LI(
                  { class: 'mb-3' },
                  SPAN({ class: 'fw-bold me-2' }, SPAN({ text: 'Телефоны:' })),
                  COMPLEX({ name: 'phone', config: { inline: true, disableCardView: true } }, () => [
                    FIELD({ name: 'num', label: false, type: 'label' }),
                  ]),
                ),
              ],
            ),
          ),
        ),
      ),
      DIV(
        { class: 'col-xl-8 col-lg-7 col-md-7 order-0 order-md-1' },
        HTML('core/default~tabs', {
          items: [
            {
              button: {
                icon: 'fa-solid fa-database fa-fw me-1',
                text: 'Токены',
              },
              content: [
                COMPLEX({ name: 'purchase', label: false, config: { disableCardStyle: true }, controls: { reload: true } }, ({ data }) => [
                  DIV(
                    { class: 'row' },
                    FIELD({
                      label: 'Дата покупки',
                      name: 'add_time',
                      type: 'label',
                      on: { prepareValue: 'toLocaleString' },
                      class: 'col-3',
                    }),
                    FIELD({ label: 'Количество', name: 'count', type: 'label', class: 'col-2' }),
                    COMPLEX(
                      {
                        name: 'token',
                        add: false,
                        class: 'col-5',
                        item: { class: 'row' },
                        config: { disableCardView: true },
                      },
                      () => [
                        FIELD({ label: 'Качество', type: 'label', name: 'type', lst: 'token~quality', class: 'col-6' }),
                        COMPLEX(
                          {
                            name: 'fabricator',
                            add: false,
                            class: 'col-6',
                            config: { disableCardView: true },
                          },
                          () => [FIELD({ label: 'Производитель', name: 'name', type: 'label' })],
                        ),
                      ],
                    ),

                    IF(data.__invoice?.l.length, () => [
                      COMPLEX(
                        {
                          name: 'invoice',
                          add: false,
                          class: 'col-2',
                          config: { disableCardView: true },
                        },
                        () => [
                          FIELD({
                            label: 'Статус поставки',
                            name: 'status',
                            lst: 'token~invoice_status',
                            type: 'label',
                          }),
                        ],
                      ),
                    ]),

                    IF(!data.__invoice?.l.length, () => [
                      HTML('core/default~offcanvas', {
                        title: 'Запрос поставки',
                        id: data._id,
                        button: { label: 'Запросить поставку', type: 'info', cls: 'col-2' },
                        html: {
                          body: [
                            FIELD({
                              label: 'Дата поставки',
                              name: 'deliveryDate',
                              config: { inputType: 'date' },
                              class: 'mb-3',
                            }),
                            FIELD({
                              label: 'Комментарий к поставке',
                              name: 'deliveryComment',
                              type: 'textarea',
                              class: 'mb-3',
                            }),
                            FIELD({
                              name: 'deliveryAction',
                              type: 'button',
                              label: 'Отправить запрос',
                              config: {
                                btnType: 'success',
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
                                const purchase = await db.mongo.findOne('purchase', parentData._id);
                                const tokenId = purchase.__token.l[0];
                                const token = await db.mongo.findOne('token', tokenId);
                                await db.addComplex({
                                  name: 'invoice',
                                  parents: [
                                    { name: 'customer', _id: purchase.__customer.l[0] },
                                    { name: 'fabricator', _id: token.__fabricator.l[0] },
                                    { name: 'token', _id: tokenId },
                                    { name: 'purchase', _id: parentData._id },
                                  ],
                                  links: {
                                    invoice: {
                                      customer: '__customer',
                                      token: '__token',
                                      purchase: '__purchase',
                                      fabricator: '__fabricator',
                                    },
                                    customer: '__invoice',
                                    token: '__invoice',
                                    purchase: '__invoice',
                                    fabricator: '__invoice',
                                  },
                                  data: {
                                    date: data.deliveryDate,
                                    comment: data.deliveryComment,
                                    status: [domain.token['lst~invoice_status'].find(({ v }) => v === 'wait')],
                                  },
                                });

                                return data;
                              },
                              on: {
                                beforeHandler: async (event) => {
                                  const data = Array.from(
                                    event.target.closest('.offcanvas-body').querySelectorAll('input, textarea'),
                                  ).reduce((obj, { name, value, type, checked }) => {
                                    if (type === 'checkbox' || type === 'radio') {
                                      if (type === 'checkbox') obj[name] = checked;
                                      if (type === 'radio' && checked) obj[name] = value;
                                    } else {
                                      obj[name] = value;
                                    }
                                    return obj;
                                  }, {});
                                  return { deliveryDate: data.deliveryDate, deliveryComment: data.deliveryComment };
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
                    ]),
                  ),
                ]),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-truck-arrow-right fa-fw me-1',
                text: 'Заявки на поставку',
              },
              content: [
                COMPLEX(
                  { name: 'invoice', label: false, config: { disableCardStyle: true }, controls: { reload: true } },
                  ({ data }) => [
                    DIV(
                      { class: 'row' },
                      DIV(
                        { class: 'col-12' },
                        DIV(
                          { class: 'row' },
                          FIELD({
                            label: 'Дата заявки',
                            name: 'add_time',
                            type: 'label',
                            on: { prepareValue: 'toLocaleString' },
                            class: 'col-4',
                          }),
                          FIELD({
                            label: 'Идентификатор токена',
                            name: '__token',
                            defValue: data.__token?.l[0],
                            type: 'label',
                            class: 'col-5',
                          }),
                          COMPLEX(
                            {
                              name: 'fabricator',
                              add: false,
                              class: 'col-3',
                              config: { disableCardView: true },
                            },
                            () => [FIELD({ label: 'Производитель', name: 'name', type: 'label' })],
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'col-12' },
                        DIV(
                          { class: 'row' },
                          FIELD({
                            label: 'Дата поставки',
                            name: 'date',
                            type: 'input',
                            disabled: true,
                            config: { inputType: 'date' },
                            class: 'col-4',
                          }),
                          FIELD({
                            label: 'Статус поставки',
                            name: 'status',
                            lst: 'token~invoice_status',
                            type: 'label',
                            class: 'col-4 ',
                          }),
                        ),
                      ),
                      FIELD({
                        label: 'Комментарий',
                        name: 'comment',
                        type: 'label',
                        class: 'col-12 ',
                      }),
                      HR(),
                    ),
                  ],
                ),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-folder-open me-1',
                text: 'Документы',
              },
              content: [
                COMPLEX(
                  {
                    name: 'document',
                    label: false,
                    add: true,
                    links: { document: { 'customer~main': '__customer' }, 'customer~main': '__document' },
                  },
                  ({ data }) => [DIV({ text: data._id })],
                ),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-address-card fa-fw me-1',
                text: 'Сотрудники',
              },
              content: [
                COMPLEX(
                  { name: 'ce_workers', col: 'ce', label: false, add: false, links: { 'customer~main': '__ce' } },
                  () => [
                    FIELD({ name: 'name', type: 'json' }),
                    HTML('worker~table', {
                      hideFilters: true,
                      hideCols: ['ce'],
                      tableId: async ({ user, query = {}, parentData, complex }) => {
                        const find = { _id: { $in: parentData[complex.links[complex.parent.name]]?.l || [] } };
                        const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
                        return findData.map(({ _id }) => _id);
                      },
                      links: { worker: { ce_workers: '__ce' }, ce_workers: '__worker' },
                      add: {
                        presetFields: { company: true },
                        beforeAdd: async function ({ data, parentData }) {
                          data.company = [{ value: parentData._id, label: parentData.name }];
                          return data;
                        },
                      },
                    }),
                  ],
                ),
              ],
            },
          ],
        }),
      ),
    ),
  ],
});
