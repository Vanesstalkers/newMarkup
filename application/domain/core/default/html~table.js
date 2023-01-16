({
  tpl: ({}, config) => {
    const filters = config.filter?.items || [];
    const table = config.table || {};
    return [
      DIV(
        { class: 'card' },
        // H5(
        //   { class: 'card-header', text: filters.length ? 'Фильтры поиска' : '' },
        // ),
        // HR(),
        DIV(
          { class: 'row p-3' },
          DIV(
            { class: 'col-10 col-lg-8' },
            IF(filters.length, () => [
              DIV(
                { class: 'row' },
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
                            const {
                              result,
                              data: el,
                              msg,
                              stack,
                            } = await api.markup.showComplex({ form, code, query });
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
            ]),
          ),
          DIV(
            { class: 'col-2 col-lg-4 d-flex align-items-start justify-content-end' },
            IF(config.add?.modal, () => {
              const { items } = config.add || {};
              return [
                HTML('core/default~modal', {
                  id: `${config.col}-add`,
                  title: `Новый объект '${config.col}'`,
                  html: {
                    body: [
                      COMPLEX(
                        {
                          name: 'tmp_obj_' + config.col,
                          col: 'tmp_obj',
                          add: { auto: true },
                          controls: {},
                          item: { controls: {}, custom: { col: config.col, items } },
                        },
                        ({ custom }) => {
                          const { items } = custom;
                          return [
                            DIV(
                              {},
                              ...items
                                .filter((item) => item)
                                .map((item) =>
                                  [].concat(item.f ? [FIELD(item.f)] : []).concat(item.html ? [HTML(item.html)] : []),
                                ),
                            ),
                          ];
                        },
                      ),
                    ],
                  },
                  button: {
                    html: [
                      BUTTON(
                        {
                          class: 'btn btn-sm btn-primary',
                          'data-bs-toggle': 'modal',
                          'data-bs-target': `#${config.col}-add-modal`,
                        },
                        SPAN(
                          { class: 'tf-icons bx bx-plus' },
                          SPAN({ class: 'd-none d-lg-inline ml-2', text: 'Добавить' }),
                        ),
                      ),
                    ],
                  },
                }),
              ];
            }),
          ),
        ),
        DIV(
          { class: 'table-responsive text-nowrap' },
          TABLE(
            { class: 'table' },
            THEAD(
              {},
              TR(
                {},
                table.addRowLink ? TH() : undefined,
                ...table.cols.filter(({ label }) => label).map((col) => TH({ text: col.label })),
                //.concat(table.addRowLink ? [TH()] : []),
              ),
            ),
            COMPLEX(
              {
                name: config.col,
                add: false,
                config: { tag: 'tbody', disableCardView: true },
                controls: { reload: true, config: { hide: true } },
                class: 'table-border-bottom-0',
                item: {
                  config: { tag: 'tr' },
                  controls: {},
                  custom: { col: config.col, addRowLink: table.addRowLink, cols: table.cols },
                },
                id: table.id,
              },
              ({ data, custom }) => {
                const { cols } = custom;
                return [
                  custom.addRowLink
                    ? TD(
                        {},
                        A(
                          {
                            href: `#${JSON.stringify({
                              form: `${custom.col}~main`,
                              container: 'formContent',
                              _id: data._id,
                            })}`,
                          },
                          I({ class: 'bx bx-link-alt me-1' }),
                        ),
                      )
                    : undefined,
                  ...cols
                    .filter(({ label }) => label)
                    .map((col) =>
                      TD(
                        { class: col.class || '' },
                        ...[]
                          .concat(col.f ? [FIELD(col.f)] : [])
                          .concat(
                            col.c
                              ? [
                                  COMPLEX(
                                    { name: col.c.name, item: { custom: { content: col.c.f } } },
                                    ({ custom }) => {
                                      const { content } = custom;
                                      return [FIELD(content)];
                                    },
                                  ),
                                ]
                              : [],
                          )
                          .concat(col.html ? [HTML(col.html, { test: true })] : []),
                      ),
                    ),
                ];
                //   .concat(
                //     item.c
                //       ? [
                //           //   _.c({
                //           //     name: item.c.name,
                //           //     add: false,
                //           //     config: { f: item.c.f },
                //           //     process: {
                //           //       tpl: (_, d) => (_.config.f ? [_.f(_.config.f)] : []),
                //           //     },
                //           //   }),
                //         ]
                //       : [],
                //   )
                //   ]),

                //   TD(
                //     {},
                //     I({ class: 'fab fa-angular fa-lg text-danger me-3' }),
                //     STRONG({}, SPAN({ text: 'Angular Project' })),
                //   ),
                //   TD({}, SPAN({ text: 'Albert Cook' })),
                //   TD(
                //     {},
                //     UL(
                //       { class: 'list-unstyled users-list m-0 avatar-group d-flex align-items-center' },
                //       LI(
                //         {
                //           'data-bs-toggle': 'tooltip',
                //           'data-popup': 'tooltip-custom',
                //           'data-bs-placement': 'top',
                //           class: 'avatar avatar-xs pull-up',
                //           'aria-label': 'Lilian Fuller',
                //           'data-bs-original-title': 'Lilian Fuller',
                //         },
                //         IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
                //       ),
                //       LI(
                //         {
                //           'data-bs-toggle': 'tooltip',
                //           'data-popup': 'tooltip-custom',
                //           'data-bs-placement': 'top',
                //           class: 'avatar avatar-xs pull-up',
                //           'aria-label': 'Sophia Wilkerson',
                //           'data-bs-original-title': 'Sophia Wilkerson',
                //         },
                //         IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
                //       ),
                //       LI(
                //         {
                //           'data-bs-toggle': 'tooltip',
                //           'data-popup': 'tooltip-custom',
                //           'data-bs-placement': 'top',
                //           class: 'avatar avatar-xs pull-up',
                //           'aria-label': 'Christina Parker',
                //           'data-bs-original-title': 'Christina Parker',
                //         },
                //         IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                //       ),
                //     ),
                //   ),
                //   TD({}, SPAN({ class: 'badge bg-label-primary me-1' }, SPAN({ text: 'Active' }))),
                //   TD(
                //     {},
                //     DIV(
                //       { class: 'dropdown' },
                //       BUTTON(
                //         { type: 'button', class: 'btn p-0 dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                //         I({ class: 'bx bx-dots-vertical-rounded' }),
                //       ),
                //       DIV(
                //         { class: 'dropdown-menu' },
                //         A(
                //           { class: 'dropdown-item', href: 'javascript:void(0);' },
                //           I({ class: 'bx bx-edit-alt me-1' }),
                //           SPAN({ text: 'Edit' }),
                //         ),
                //         A(
                //           { class: 'dropdown-item', href: 'javascript:void(0);' },
                //           I({ class: 'bx bx-trash me-1' }),
                //           SPAN({ text: 'Delete' }),
                //         ),
                //       ),
                //     ),
                //   ),

                //   TBODY(
                //     { class: 'table-border-bottom-0' },
                //     TR(
                //       {},
                //       TD(
                //         {},
                //         I({ class: 'fab fa-angular fa-lg text-danger me-3' }),
                //         STRONG({}, SPAN({ text: 'Angular Project' })),
                //       ),
                //       TD({}, SPAN({ text: 'Albert Cook' })),
                //       TD(
                //         {},
                //         UL(
                //           { class: 'list-unstyled users-list m-0 avatar-group d-flex align-items-center' },
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Lilian Fuller',
                //               'data-bs-original-title': 'Lilian Fuller',
                //             },
                //             IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Sophia Wilkerson',
                //               'data-bs-original-title': 'Sophia Wilkerson',
                //             },
                //             IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Christina Parker',
                //               'data-bs-original-title': 'Christina Parker',
                //             },
                //             IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //         ),
                //       ),
                //       TD({}, SPAN({ class: 'badge bg-label-primary me-1' }, SPAN({ text: 'Active' }))),
                //       TD(
                //         {},
                //         DIV(
                //           { class: 'dropdown' },
                //           BUTTON(
                //             { type: 'button', class: 'btn p-0 dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                //             I({ class: 'bx bx-dots-vertical-rounded' }),
                //           ),
                //           DIV(
                //             { class: 'dropdown-menu' },
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-edit-alt me-1' }),
                //               SPAN({ text: 'Edit' }),
                //             ),
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-trash me-1' }),
                //               SPAN({ text: 'Delete' }),
                //             ),
                //           ),
                //         ),
                //       ),
                //     ),
                //     TR(
                //       {},
                //       TD({}, I({ class: 'fab fa-react fa-lg text-info me-3' }), STRONG({}, SPAN({ text: 'React Project' }))),
                //       TD({}, SPAN({ text: 'Barry Hunter' })),
                //       TD(
                //         {},
                //         UL(
                //           { class: 'list-unstyled users-list m-0 avatar-group d-flex align-items-center' },
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Lilian Fuller',
                //               'data-bs-original-title': 'Lilian Fuller',
                //             },
                //             IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Sophia Wilkerson',
                //               'data-bs-original-title': 'Sophia Wilkerson',
                //             },
                //             IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Christina Parker',
                //               'data-bs-original-title': 'Christina Parker',
                //             },
                //             IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //         ),
                //       ),
                //       TD({}, SPAN({ class: 'badge bg-label-success me-1' }, SPAN({ text: 'Completed' }))),
                //       TD(
                //         {},
                //         DIV(
                //           { class: 'dropdown' },
                //           BUTTON(
                //             { type: 'button', class: 'btn p-0 dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                //             I({ class: 'bx bx-dots-vertical-rounded' }),
                //           ),
                //           DIV(
                //             { class: 'dropdown-menu' },
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-edit-alt me-2' }),
                //               SPAN({ text: 'Edit' }),
                //             ),
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-trash me-2' }),
                //               SPAN({ text: 'Delete' }),
                //             ),
                //           ),
                //         ),
                //       ),
                //     ),
                //     TR(
                //       {},
                //       TD({}, I({ class: 'fab fa-vuejs fa-lg text-success me-3' }), STRONG({}, SPAN({ text: 'VueJs Project' }))),
                //       TD({}, SPAN({ text: 'Trevor Baker' })),
                //       TD(
                //         {},
                //         UL(
                //           { class: 'list-unstyled users-list m-0 avatar-group d-flex align-items-center' },
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Lilian Fuller',
                //               'data-bs-original-title': 'Lilian Fuller',
                //             },
                //             IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Sophia Wilkerson',
                //               'data-bs-original-title': 'Sophia Wilkerson',
                //             },
                //             IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Christina Parker',
                //               'data-bs-original-title': 'Christina Parker',
                //             },
                //             IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //         ),
                //       ),
                //       TD({}, SPAN({ class: 'badge bg-label-info me-1' }, SPAN({ text: 'Scheduled' }))),
                //       TD(
                //         {},
                //         DIV(
                //           { class: 'dropdown' },
                //           BUTTON(
                //             { type: 'button', class: 'btn p-0 dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                //             I({ class: 'bx bx-dots-vertical-rounded' }),
                //           ),
                //           DIV(
                //             { class: 'dropdown-menu' },
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-edit-alt me-2' }),
                //               SPAN({ text: 'Edit' }),
                //             ),
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-trash me-2' }),
                //               SPAN({ text: 'Delete' }),
                //             ),
                //           ),
                //         ),
                //       ),
                //     ),
                //     TR(
                //       {},
                //       TD(
                //         {},
                //         I({ class: 'fab fa-bootstrap fa-lg text-primary me-3' }),
                //         STRONG({}, SPAN({ text: 'Bootstrap Project' })),
                //       ),
                //       TD({}, SPAN({ text: 'Jerry Milton' })),
                //       TD(
                //         {},
                //         UL(
                //           { class: 'list-unstyled users-list m-0 avatar-group d-flex align-items-center' },
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Lilian Fuller',
                //               'data-bs-original-title': 'Lilian Fuller',
                //             },
                //             IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Sophia Wilkerson',
                //               'data-bs-original-title': 'Sophia Wilkerson',
                //             },
                //             IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //           LI(
                //             {
                //               'data-bs-toggle': 'tooltip',
                //               'data-popup': 'tooltip-custom',
                //               'data-bs-placement': 'top',
                //               class: 'avatar avatar-xs pull-up',
                //               'aria-label': 'Christina Parker',
                //               'data-bs-original-title': 'Christina Parker',
                //             },
                //             IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                //           ),
                //         ),
                //       ),
                //       TD({}, SPAN({ class: 'badge bg-label-warning me-1' }, SPAN({ text: 'Pending' }))),
                //       TD(
                //         {},
                //         DIV(
                //           { class: 'dropdown' },
                //           BUTTON(
                //             { type: 'button', class: 'btn p-0 dropdown-toggle hide-arrow', 'data-bs-toggle': 'dropdown' },
                //             I({ class: 'bx bx-dots-vertical-rounded' }),
                //           ),
                //           DIV(
                //             { class: 'dropdown-menu' },
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-edit-alt me-2' }),
                //               SPAN({ text: 'Edit' }),
                //             ),
                //             A(
                //               { class: 'dropdown-item', href: 'javascript:void(0);' },
                //               I({ class: 'bx bx-trash me-2' }),
                //               SPAN({ text: 'Delete' }),
                //             ),
                //           ),
                //         ),
                //       ),
                //     ),
                //   ),
              },
            ),
          ),
        ),
      ),
    ];
  },
});
