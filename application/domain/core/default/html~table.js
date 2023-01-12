({
  tpl: ({}, config) => [
    DIV(
      { class: 'card' },
      H5({ class: 'card-header' }, SPAN({ text: 'Table Basic' })),
      DIV(
        { class: 'table-responsive text-nowrap' },
        TABLE(
          { class: 'table' },
          THEAD({}, TR({}, ...config.table.cols.map((col) => TH({ text: col.label })))),
          COMPLEX(
            {
              name: config.col,
              config: { tag: 'tbody' },
              class: 'table-border-bottom-0',
              item: { add: false, config: { tag: 'tr', content: config.table.cols } },
              id: config.table.id,
            },
            ({ data }) => {
              const cols = (parent.type === 'complex' ? parent.item.config?.content : parent.config?.content) || [];
              return cols.map((col) =>
                TD(
                  { class: col.class || '' },
                  ...[]
                    .concat(col.f ? [FIELD(col.f)] : [])
                    .concat(
                      col.c
                        ? [
                            COMPLEX(
                              {
                                name: col.c.name,
                                add: false,
                                item: { config: { content: col.c.f } },
                              },
                              () => {
                                const content =
                                  parent.type === 'complex' ? parent.item.config?.content : parent.config?.content;
                                return [FIELD(content)];
                              },
                            ),
                          ]
                        : [],
                    )
                    .concat(col.html ? [HTML(col.html, { test: true })] : []),
                ),
              );
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
  ],
});
