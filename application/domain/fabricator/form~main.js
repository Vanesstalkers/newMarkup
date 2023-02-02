({
  config: {
    menu: { label: 'Карточка компании', icon: 'fas fa-person-digging' },
    access: ['fabricator_manager'],
    disableCardStyle: true,
  },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'fabricator',
  id: async function ({ user, query }) {
    let id = query._id;
    if (!id) {
      const ce = await this.db.mongo.findOne('ce', user.current.link?.v);
      if (ce) id = ce.__fabricator.l[0];
    }
    return id ? [this.db.mongo.ObjectID(id)] : [];
  },
  tpl: () => [
    HTML('core/default~breadcrumbs', { items: ['Производители', data.name] }),
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
                DIV({}, H5({ class: 'mb-0' }, SPAN({ text: '1.23k' })), SPAN({}, SPAN({ text: 'Токенов' }))),
              ),
              DIV(
                { class: 'd-flex align-items-start mt-3 gap-3' },
                SPAN({ class: 'badge bg-label-primary p-2 rounded' }, I({ class: 'bx bx-customize bx-sm' })),
                DIV({}, H5({ class: 'mb-0' }, SPAN({ text: '568' })), SPAN({}, SPAN({ text: 'Инвестиций получено' }))),
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
                HTML('token~table', {
                  hideFilters: true,
                  hideCols: ['buy', 'fabricator'],
                  tableId: async ({ user, query = {}, parentData, complex }) => {
                    const find = { _id: { $in: parentData[complex.links[complex.parent.name]]?.l || [] } };
                    const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
                    return findData.map(({ _id }) => _id);
                  },
                  links: { token: { 'fabricator~main': '__fabricator' }, 'fabricator~main': '__token' },
                  add: { modal: { toggleButton: { simple: true } } },
                }),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-truck-arrow-right fa-fw me-1',
                text: 'Заявки на поставку',
              },
              content: [
                COMPLEX({ name: 'invoice', label: false, config: { disableCardStyle: true }, controls: { reload: true } }, ({ data }) => [
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
                            name: 'customer',
                            add: false,
                            class: 'col-3',
                            config: { disableCardView: true },
                          },
                          () => [FIELD({ label: 'Покупатель', name: 'name', type: 'label' })],
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
                ]),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-address-card fa-fw me-1',
                text: 'Сотрудники',
              },
              content: [
                COMPLEX(
                  { name: 'ce_workers', col: 'ce', label: false, add: false, links: { 'fabricator~main': '__ce' } },
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
