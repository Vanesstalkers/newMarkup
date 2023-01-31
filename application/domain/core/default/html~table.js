({
  tpl: ({}, config) => {
    const filters = config.filter?.items || [];
    const table = config.table || {};
    const [{ value: tableConfig }] = data.tableConfig?.[config.col]?.filterCount || [{}];
    const filterCount = tableConfig ? { limit: +tableConfig } : {};
    return [
      DIV(
        { class: 'card shadow-none' },
        IF(filters.length, () => [
          DIV(
            { class: 'card-header border-bottom' },
            H5({ class: 'card-title' }, SPAN({ text: 'Фильтры поиска' })),
            DIV(
              { class: 'd-flex justify-content-start align-items-center row gap-3 gap-md-0' },
              ...filters
                .map((item) => DIV({ class: item.class }, FIELD(item.f)))
                .concat([
                  DIV(
                    { class: 'col-auto d-flex align-items-center' },
                    FIELD({
                      type: 'button',
                      label: 'Найти',
                      on: {
                        click: async (event) => {
                          const $header = event.target.closest('.card-header');
                          const $filters = $header.querySelectorAll('input');
                          const $card = $header.parentNode;
                          const $table = $card.querySelector('tbody.complex-block');
                          const form = $card.closest('[type="form"]').dataset.name;
                          const code = $table.dataset.code;
                          const query = Object.fromEntries(
                            Array.from($filters).map(($filter) => [
                              $filter.closest('.el').dataset.name,
                              $filter.type === 'checkbox' ? $filter.checked : $filter.value,
                            ]),
                          );
                          const { result, data: el, msg, stack } = await api.markup.showComplex({ form, code, query });
                          if (result === 'error') console.error({ msg, stack });
                          else if (result === 'success') {
                            const $parent = $table.parentNode;
                            el.class = (el.class || '') + ' reloaded';
                            const { tpl, prepare } = window.el[el.elPath] || {};
                            await nativeTplToHTML([tpl(el)], $parent);
                            const $newEl = $parent.querySelector(`.reloaded.complex-block[code='${el.code}']`);
                            if (prepare) prepare({ $el: $newEl, data: el });
                            if (el.items) {
                              for (const item of Object.values(el.items)) {
                                const { tpl, prepare } = window.el[item.elPath] || {};
                                if (typeof tpl === 'function') {
                                  await nativeTplToHTML([tpl({ ...item, parent: el })], $newEl);
                                  const $item = $newEl.querySelector(`.complex-item[code='${item.code}']`);
                                  if (prepare) prepare({ $el: $item, data: item, parent: { data: el, $el: $newEl } });
                                  await nativeTplToHTML(item.content, $item);
                                }
                              }
                            }
                            $newEl.classList.remove('reloaded');
                            $table.replaceWith($newEl);
                          }
                        },
                      },
                    }),
                  ),
                ]),
            ),
          ),
        ]),
        DIV(
          { class: 'card-datatable table-responsive' },
          DIV(
            { class: 'dataTables_wrapper dt-bootstrap5 no-footer' },
            DIV(
              { class: 'row mx-2' },
              DIV(
                { class: 'col-md-2' },
                DIV(
                  { class: 'me-3' },
                  DIV(
                    { class: 'dataTables_length', id: 'DataTables_Table_0_length' },
                    LABEL(
                      {},
                      FIELD({
                        name: ['tableConfig', config.col, 'filterCount'].join('.'),
                        type: 'select',
                        lst: 'core/default~filterCount',
                        on: {
                          afterSave: ({ event }) => {
                            window.reloadComplexBlock(
                              event.target.closest('.dataTables_wrapper').querySelector('table > .complex-block'),
                              { limit: +event.target.value, offset: 0 },
                            );
                          },
                        },
                      }),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-md-10' },
                DIV(
                  {
                    class:
                      'dt-action-buttons text-xl-end text-lg-start text-md-end text-start d-flex align-items-center justify-content-end flex-md-row flex-column mb-3 mb-md-0',
                  },
                  DIV(
                    { id: 'DataTables_Table_0_filter', class: 'dataTables_filter' },
                    LABEL(
                      {},
                      INPUT({
                        type: 'search',
                        class: 'form-control',
                        placeholder: 'Поиск..',
                        disabled: true,
                        'aria-controls': 'DataTables_Table_0',
                      }),
                    ),
                  ),
                  DIV(
                    { class: 'dt-buttons btn-group' },
                    DIV(
                      { class: 'btn-group' },
                      BUTTON(
                        {
                          class:
                            'btn btn-secondary buttons-collection dropdown-toggle btn-outline-secondary mx-3 disabled',
                          'aria-controls': 'DataTables_Table_0',
                          type: 'button',
                          'aria-haspopup': 'dialog',
                          'aria-expanded': 'false',
                        },
                        SPAN({}, I({ class: 'bx bx-export me-1' }), SPAN({ text: 'Выгрузить' })),
                        SPAN({ class: 'dt-down-arrow' }),
                      ),
                    ),

                    IF(config.add?.modal, () => {
                      const addModal = config.add.modal || {};
                      return [
                        HTML('core/default~modal', {
                          title: `Новый объект '${config.col}'`,
                          id: `${config.col}-add`,
                          html: {
                            body: [
                              COMPLEX(
                                {
                                  name: 'tmp_obj_' + config.col,
                                  col: 'tmp_obj',
                                  add: { auto: true },
                                  custom: { presetFields: config.add.presetFields || {} },
                                  handlers: {
                                    beforeAdd:
                                      config.add.beforeAdd ||
                                      async function ({ data, complex }) {
                                        for (const [key, value] of Object.entries(complex.custom.presetFields)) {
                                          data[key] = value;
                                        }
                                        return data;
                                      },
                                  },
                                  controls: { reload: true, config: { hide: true } },
                                  item: { controls: {}, custom: { items: config.add?.items || [] } },
                                },
                                ({ custom }) => {
                                  return [
                                    DIV(
                                      {},
                                      ...custom.items
                                        .filter((item) => item)
                                        .map((item) =>
                                          []
                                            .concat(item.f ? [FIELD(item.f)] : [])
                                            .concat(item.html ? [HTML(item.html)] : []),
                                        ),
                                    ),
                                  ];
                                },
                              ),
                            ],
                            footer: [
                              BUTTON({
                                type: 'button',
                                class: 'btn btn-label-secondary',
                                'data-bs-dismiss': 'modal',
                                text: 'Закрыть',
                              }),
                              FIELD({
                                label: 'Добавить',
                                name: 'create',
                                type: 'button',
                                config: { btnType: 'primary' },
                                handler: async ({ form, field, user, data }) => {
                                  const { _id: tmpObjId } = form.data[data.tmpObjCode];
                                  const tmpObjData = await db.mongo.findOne('tmp_obj', tmpObjId);
                                  const formName = form.name;
                                  const parents = [];
                                  if (tmpObjData.company?.length)
                                    parents.push({ name: 'ce', _id: tmpObjData.company[0].v });

                                  tmpObjData.add_time = new Date().toISOString();
                                  const newItem = await lib.markup.actions.addComplex({
                                    form: formName,
                                    code: data.tableCode,
                                    user,
                                    returnId: true,
                                    data: tmpObjData,
                                    parents,
                                  });
                                  await lib.markup.actions.deleteComplex({
                                    form: formName,
                                    code: data.tmpObjCode,
                                    user,
                                  });

                                  return newItem;
                                },
                                on: {
                                  beforeHandler: (event) => {
                                    const $modal = event.target.closest('.modal');
                                    const $item = $modal.querySelector('.modal-body > .complex-block .complex-item');
                                    const $card = event.target.closest('.card');
                                    const $table = $card.querySelector('table > .complex-block');
                                    return {
                                      tmpObjCode: $item.getAttribute('code'),
                                      tableCode: $table.getAttribute('code'),
                                    };
                                  },
                                  afterHandler: (event, data) => {
                                    const $modal = event.target.closest('.modal');
                                    const $card = event.target.closest('.card');
                                    const $table = $card.querySelector('table > .complex-block');
                                    const $tableReloadBtn = $table.querySelector(
                                      `.card-header[parent-code="${$table.getAttribute('code')}"] .btn-reload`,
                                    );
                                    if ($tableReloadBtn) $tableReloadBtn.click();
                                    const $tmpObj = $modal.querySelector('.complex-block');
                                    const $tmpObjReloadBtn = $tmpObj.querySelector(
                                      `.card-header[parent-code="${$tmpObj.getAttribute('code')}"] .btn-reload`,
                                    );
                                    if ($tmpObjReloadBtn) $tmpObjReloadBtn.click();
                                    $($modal).modal('hide');
                                  },
                                },
                              }),
                            ],
                          },
                          toggleButton: {
                            html: [
                              // BUTTON(
                              //   {
                              //     class: 'btn btn-secondary add-new btn-primary',
                              //     tabindex: '0',
                              //     'aria-controls': 'DataTables_Table_0',
                              //     type: 'button',
                              //     'data-bs-toggle': 'offcanvas',
                              //     'data-bs-target': '#offcanvasAddUser',
                              //   },
                              //   SPAN(
                              //     {},
                              //     I({ class: 'bx bx-plus me-0 me-sm-1' }),
                              //     SPAN({ class: 'd-none d-sm-inline-block' }, SPAN({ text: 'Add New User' })),
                              //   ),
                              // ),

                              BUTTON(
                                {
                                  class: 'btn btn-secondary add-new btn-primary',
                                  'data-bs-toggle': 'modal',
                                  'data-bs-target': `#${config.col}-add-modal`,
                                },
                                SPAN(
                                  { class: 'd-flex' },
                                  I({ class: 'bx bx-plus me-0 me-sm-1' }),
                                  IF(addModal.toggleButton?.simple !== true, () => [
                                    SPAN(
                                      { class: 'd-none d-sm-inline-block' },
                                      SPAN({ class: 'text-nowrap', text: addModal.toggleButton?.label || 'Добавить' }),
                                    ),
                                  ]),
                                ),
                              ),
                            ],
                          },
                        }),
                      ];
                    }),
                  ),
                ),
              ),
            ),
            TABLE(
              { class: 'table border-top dataTable no-footer dtr-column' },
              THEAD(
                {},
                TR(
                  {},
                  ...table.cols
                    .filter(({ label }) => label)
                    .map((col) => TH({ text: col.label === true ? '' : col.label })),
                  table.addRowLink ? TH() : undefined,
                ),
              ),
              COMPLEX(
                {
                  name: config.col,
                  add: false,
                  links: config.links,
                  config: { tag: 'tbody', disableCardStyle: true, disableCardView: true },
                  controls: { reload: true, config: { hide: true } },
                  class: 'table-border-bottom-0',
                  item: {
                    config: { tag: 'tr' },
                    controls: {},
                    custom: { col: config.col, addRowLink: table.addRowLink, cols: table.cols },
                  },
                  id: table.id,
                  filter: { ...(table.filter || {}), ...filterCount },
                },
                ({ data, custom }) => {
                  const { cols } = custom;
                  return [
                    ...cols
                      .filter(({ label }) => label)
                      .map((col) =>
                        TD(
                          { class: col.class || '' },
                          ...[]
                            .concat(col.f ? [FIELD({ type: 'label', label: false, ...col.f })] : [])
                            .concat(
                              col.c
                                ? [
                                    COMPLEX(
                                      {
                                        config: { disableCardStyle: true },
                                        item: { custom: { content: col.c.f } },
                                        ...col.c,
                                      },
                                      ({ custom: { content } }) => [FIELD({ type: 'label', label: false, ...content })],
                                    ),
                                  ]
                                : [],
                            )
                            .concat(col.html ? [HTML(col.html, { test: true })] : []),
                        ),
                      ),
                    custom.addRowLink
                      ? TD(
                          {},
                          DIV(
                            { class: 'd-flex justify-content-end text-nowrap' },
                            A(
                              {
                                href: `#${JSON.stringify({
                                  form: `${custom.col}~main`,
                                  container: 'formContent',
                                  _id: data._id,
                                })}`,
                              },
                              I({ class: 'bx bx-edit' }),
                            ),
                            // BUTTON({ class: 'btn btn-sm btn-icon delete-record' }, I({ class: 'bx bx-trash' })),
                            BUTTON(
                              { class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                              I({ class: 'bx bx-dots-vertical-rounded' }),
                            ),
                            DIV(
                              { class: 'dropdown-menu dropdown-menu-end m-0' },
                              A({ href: 'app-user-view-account.html', class: 'dropdown-item' }, SPAN({ text: 'View' })),
                              A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Suspend' })),
                            ),
                          ),
                        )
                      : undefined,
                  ];
                },
              ),
            ),
          ),
        ),
      ),
    ];
  },
});
