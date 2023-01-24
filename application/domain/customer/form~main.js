({
  config: { disableCardStyle: true },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'customer',
  id: function ({ user, query }) {
    return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
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
                icon: 'fa-solid fa-database fa-fw',
                text: 'Токены',
              },
              content: [
                HTML('token~table', {
                  hideFilters: true,
                  tableId: async ({ user, query = {}, parentData, complex }) => {
                    const find = { _id: { $in: parentData[complex.links[complex.parent.name]]?.l || [] } };
                    const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
                    return findData.map(({ _id }) => _id);
                  },
                  links: { token: { 'customer~main': '__customer' }, 'customer~main': '__token' },
                  add: { modal: { toggleButton: { simple: true } } },
                }),
                // COMPLEX({ name: 'token', label: 'Выпуски токенов', add: { label: 'Выпустить токены' } }, ({ data }) => [
                //   DIV({ text: data._id }),
                // ]),
              ],
            },
            {
              button: {
                icon: 'fa-solid fa-database fa-fw',
                text: 'Заявки на поставку',
              },
              content: [COMPLEX({ name: 'req', label: false, add: true }, ({ data }) => [DIV({ text: data._id })])],
            },
            {
              button: {
                icon: 'fa-solid fa-folder-open',
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
                icon: 'fa-solid fa-address-card fa-fw',
                text: 'Сотрудники',
              },
              content: [
                COMPLEX(
                  { name: 'ce_workers', col: 'ce', label: false, add: false, links: { 'customer~main': '__ce' } },
                  () => [
                    HTML('worker~table', {
                      hideFilters: true,
                      tableId: async ({ user, query = {}, parentData, complex }) => {
                        const find = { _id: { $in: parentData[complex.links[complex.parent.name]]?.l || [] } };
                        const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
                        return findData.map(({ _id }) => _id);
                      },
                      links: { worker: { ce_workers: '__ce' }, ce_workers: '__worker' },
                      // add: { modal: { toggleButton: { simple: true } } },
                    }),
                  ],
                ),
              ],
            },
          ],
        }),
        // UL(
        //   { class: 'nav nav-pills flex-column flex-md-row mb-3' },
        //   LI(
        //     { class: 'nav-item' },
        //     A(
        //       { class: 'nav-link active', href: 'javascript:void(0);' },
        //       I({ class: 'fa-solid fa-database me-2' }),
        //       SPAN({ text: 'Токены' }),
        //     ),
        //   ),
        //   LI(
        //     { class: 'nav-item' },
        //     A(
        //       { class: 'nav-link', href: 'app-user-view-security.html' },
        //       I({ class: 'bx bx-lock-alt me-1' }),
        //       SPAN({ text: 'Security' }),
        //     ),
        //   ),
        //   LI(
        //     { class: 'nav-item' },
        //     A(
        //       { class: 'nav-link', href: 'app-user-view-billing.html' },
        //       I({ class: 'bx bx-detail me-1' }),
        //       SPAN({ text: 'Billing &amp; Plans' }),
        //     ),
        //   ),
        //   LI(
        //     { class: 'nav-item' },
        //     A(
        //       { class: 'nav-link', href: 'app-user-view-notifications.html' },
        //       I({ class: 'bx bx-bell me-1' }),
        //       SPAN({ text: 'Notifications' }),
        //     ),
        //   ),
        //   LI(
        //     { class: 'nav-item' },
        //     A(
        //       { class: 'nav-link', href: 'app-user-view-connections.html' },
        //       I({ class: 'bx bx-link-alt me-1' }),
        //       SPAN({ text: 'Connections' }),
        //     ),
        //   ),
        // ),
        // DIV(
        //   { class: 'card mb-4' },
        //   H5({ class: 'card-header' }, SPAN({ text: "User's Projects List" })),
        //   DIV(
        //     { class: 'table-responsive mb-3' },
        //     DIV(
        //       { id: 'DataTables_Table_0_wrapper', class: 'dataTables_wrapper dt-bootstrap5 no-footer' },
        //       DIV(
        //         { class: 'd-flex justify-content-between align-items-center flex-column flex-sm-row mx-4 row' },
        //         DIV(
        //           {
        //             class: 'col-sm-4 col-12 d-flex align-items-center justify-content-sm-start justify-content-center',
        //           },
        //           DIV(
        //             { class: 'dataTables_length', id: 'DataTables_Table_0_length' },
        //             LABEL(
        //               {},
        //               SPAN({ text: 'Show' }),
        //               SELECT(
        //                 {
        //                   name: 'DataTables_Table_0_length',
        //                   'aria-controls': 'DataTables_Table_0',
        //                   class: 'form-select',
        //                 },
        //                 OPTION({ value: '7' }, SPAN({ text: '7' })),
        //                 OPTION({ value: '10' }, SPAN({ text: '10' })),
        //                 OPTION({ value: '25' }, SPAN({ text: '25' })),
        //                 OPTION({ value: '50' }, SPAN({ text: '50' })),
        //                 OPTION({ value: '75' }, SPAN({ text: '75' })),
        //                 OPTION({ value: '100' }, SPAN({ text: '100' })),
        //               ),
        //             ),
        //           ),
        //         ),
        //         DIV(
        //           { class: 'col-sm-8 col-12 d-flex align-items-center justify-content-sm-end justify-content-center' },
        //           DIV(
        //             { id: 'DataTables_Table_0_filter', class: 'dataTables_filter' },
        //             LABEL(
        //               {},
        //               SPAN({ text: 'Search:' }),
        //               INPUT({
        //                 type: 'search',
        //                 class: 'form-control',
        //                 placeholder: 'Search Project',
        //                 'aria-controls': 'DataTables_Table_0',
        //               }),
        //             ),
        //           ),
        //         ),
        //       ),
        //       TABLE(
        //         {
        //           class: 'table datatable-project border-top dataTable no-footer dtr-column collapsed',
        //           id: 'DataTables_Table_0',
        //           'aria-describedby': 'DataTables_Table_0_info',
        //           style: 'width: 575px;',
        //         },
        //         THEAD(
        //           {},
        //           TR(
        //             {},
        //             TH({
        //               class: 'control sorting',
        //               tabindex: '0',
        //               'aria-controls': 'DataTables_Table_0',
        //               rowspan: '1',
        //               colspan: '1',
        //               style: 'width: 3px;',
        //               'aria-label': ': activate to sort column ascending',
        //             }),
        //             TH(
        //               {
        //                 class: 'sorting sorting_desc',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_0',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 224px;',
        //                 'aria-label': 'Project: activate to sort column ascending',
        //                 'aria-sort': 'descending',
        //               },
        //               SPAN({ text: 'Project' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'text-nowrap sorting_disabled',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 89px;',
        //                 'aria-label': 'Total Task',
        //               },
        //               SPAN({ text: 'Total Task' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_0',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 81px;',
        //                 'aria-label': 'Progress: activate to sort column ascending',
        //               },
        //               SPAN({ text: 'Progress' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting_disabled dtr-hidden',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 0px; display: none;',
        //                 'aria-label': 'Hours',
        //               },
        //               SPAN({ text: 'Hours' }),
        //             ),
        //           ),
        //         ),
        //         TBODY(
        //           {},
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/vue-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Vue Admin template' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'Vuejs Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '214/627' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '78%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-success',
        //                     style: 'width: 78%',
        //                     'aria-valuenow': '78%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '88:19h' })),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/event-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Online Webinar' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'Official Event' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '12/20' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '69%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-info',
        //                     style: 'width: 69%',
        //                     'aria-valuenow': '69%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '12:12h' })),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/html-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Hoffman Website' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'HTML Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '56/183' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '43%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-warning',
        //                     style: 'width: 43%',
        //                     'aria-valuenow': '43%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '76h' })),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/sketch-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Foodista mobile app' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'iPhone Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '12/86' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '49%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-warning',
        //                     style: 'width: 49%',
        //                     'aria-valuenow': '49%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '45h' })),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/xd-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Falcon Logo Design' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'UI/UX Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '9/50' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '15%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-danger',
        //                     style: 'width: 15%',
        //                     'aria-valuenow': '15%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '89h' })),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/react-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Dojo React Project' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'React Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '234/378' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '73%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-info',
        //                     style: 'width: 73%',
        //                     'aria-valuenow': '73%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '67:10h' })),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD(
        //               { class: 'sorting_1' },
        //               DIV(
        //                 { class: 'd-flex justify-content-left align-items-center' },
        //                 DIV(
        //                   { class: 'avatar-wrapper' },
        //                   DIV(
        //                     { class: 'avatar avatar-sm me-3' },
        //                     IMG({
        //                       src: '../../assets/img/icons/brands/vue-label.png',
        //                       alt: 'Project Image',
        //                       class: 'rounded-circle',
        //                     }),
        //                   ),
        //                 ),
        //                 DIV(
        //                   { class: 'd-flex flex-column' },
        //                   SPAN({ class: 'text-truncate fw-semibold' }, SPAN({ text: 'Dashboard Design' })),
        //                   SMALL({ class: 'text-muted' }, SPAN({ text: 'Vuejs Project' })),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: '', style: '' }, SPAN({ text: '100/190' })),
        //             TD(
        //               {},
        //               DIV(
        //                 { class: 'd-flex flex-column' },
        //                 SMALL({ class: 'mb-1' }, SPAN({ text: '90%' })),
        //                 DIV(
        //                   { class: 'progress w-100 me-3', style: 'height: 6px;' },
        //                   DIV({
        //                     class: 'progress-bar bg-success',
        //                     style: 'width: 90%',
        //                     'aria-valuenow': '90%',
        //                     'aria-valuemin': '0',
        //                     'aria-valuemax': '100',
        //                   }),
        //                 ),
        //               ),
        //             ),
        //             TD({ class: 'dtr-hidden', style: 'display: none;' }, SPAN({ text: '129:45h' })),
        //           ),
        //         ),
        //       ),
        //       DIV(
        //         { class: 'd-flex justify-content-between mx-4 row' },
        //         DIV(
        //           { class: 'col-sm-12 col-md-6' },
        //           DIV(
        //             { class: 'dataTables_info', id: 'DataTables_Table_0_info', role: 'status', 'aria-live': 'polite' },
        //             SPAN({ text: 'Showing 1 to 7 of 11 entries' }),
        //           ),
        //         ),
        //         DIV(
        //           { class: 'col-sm-12 col-md-6' },
        //           DIV(
        //             { class: 'dataTables_paginate paging_simple_numbers', id: 'DataTables_Table_0_paginate' },
        //             UL(
        //               { class: 'pagination' },
        //               LI(
        //                 { class: 'paginate_button page-item previous disabled', id: 'DataTables_Table_0_previous' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_0',
        //                     'data-dt-idx': 'previous',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: 'Previous' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item active' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_0',
        //                     'data-dt-idx': '0',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '1' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item ' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_0',
        //                     'data-dt-idx': '1',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '2' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item next', id: 'DataTables_Table_0_next' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_0',
        //                     'data-dt-idx': 'next',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: 'Next' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //         ),
        //       ),
        //     ),
        //   ),
        // ),
        // DIV(
        //   { class: 'card mb-4' },
        //   H5({ class: 'card-header' }, SPAN({ text: 'User Activity Timeline' })),
        //   DIV(
        //     { class: 'card-body' },
        //     UL(
        //       { class: 'timeline' },
        //       LI(
        //         { class: 'timeline-item timeline-item-transparent' },
        //         SPAN({ class: 'timeline-point timeline-point-primary' }),
        //         DIV(
        //           { class: 'timeline-event' },
        //           DIV(
        //             { class: 'timeline-header mb-1' },
        //             H6({ class: 'mb-0' }, SPAN({ text: '12 Invoices have been paid' })),
        //             SMALL({ class: 'text-muted' }, SPAN({ text: '12 min ago' })),
        //           ),
        //           P({ class: 'mb-2' }, SPAN({ text: 'Invoices have been paid to the company' })),
        //           DIV(
        //             { class: 'd-flex' },
        //             A(
        //               { href: 'javascript:void(0)', class: 'me-3' },
        //               IMG({ src: '../../assets/img/icons/misc/pdf.png', alt: 'PDF image', width: '15', class: 'me-2' }),
        //               SPAN({ class: 'fw-bold text-body' }, SPAN({ text: 'invoices.pdf' })),
        //             ),
        //           ),
        //         ),
        //       ),
        //       LI(
        //         { class: 'timeline-item timeline-item-transparent' },
        //         SPAN({ class: 'timeline-point timeline-point-warning' }),
        //         DIV(
        //           { class: 'timeline-event' },
        //           DIV(
        //             { class: 'timeline-header mb-1' },
        //             H6({ class: 'mb-0' }, SPAN({ text: 'Client Meeting' })),
        //             SMALL({ class: 'text-muted' }, SPAN({ text: '45 min ago' })),
        //           ),
        //           P({ class: 'mb-2' }, SPAN({ text: 'Project meeting with john @10:15am' })),
        //           DIV(
        //             { class: 'd-flex flex-wrap' },
        //             DIV(
        //               { class: 'avatar me-3' },
        //               IMG({ src: '../../assets/img/avatars/3.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //             DIV(
        //               {},
        //               H6({ class: 'mb-0' }, SPAN({ text: 'Lester McCarthy (Client)' })),
        //               SPAN({ class: 'text-muted' }, SPAN({ text: 'CEO of ThemeSelection' })),
        //             ),
        //           ),
        //         ),
        //       ),
        //       LI(
        //         { class: 'timeline-item timeline-item-transparent' },
        //         SPAN({ class: 'timeline-point timeline-point-info' }),
        //         DIV(
        //           { class: 'timeline-event' },
        //           DIV(
        //             { class: 'timeline-header mb-1' },
        //             H6({ class: 'mb-0' }, SPAN({ text: 'Create a new project for client' })),
        //             SMALL({ class: 'text-muted' }, SPAN({ text: '2 Day Ago' })),
        //           ),
        //           P({ class: 'mb-2' }, SPAN({ text: '5 team members in a project' })),
        //           DIV(
        //             { class: 'd-flex align-items-center avatar-group' },
        //             DIV(
        //               {
        //                 class: 'avatar pull-up',
        //                 'data-bs-toggle': 'tooltip',
        //                 'data-popup': 'tooltip-custom',
        //                 'data-bs-placement': 'top',
        //                 'aria-label': 'Vinnie Mostowy',
        //                 'data-bs-original-title': 'Vinnie Mostowy',
        //               },
        //               IMG({ src: '../../assets/img/avatars/5.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //             DIV(
        //               {
        //                 class: 'avatar pull-up',
        //                 'data-bs-toggle': 'tooltip',
        //                 'data-popup': 'tooltip-custom',
        //                 'data-bs-placement': 'top',
        //                 'aria-label': 'Marrie Patty',
        //                 'data-bs-original-title': 'Marrie Patty',
        //               },
        //               IMG({ src: '../../assets/img/avatars/12.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //             DIV(
        //               {
        //                 class: 'avatar pull-up',
        //                 'data-bs-toggle': 'tooltip',
        //                 'data-popup': 'tooltip-custom',
        //                 'data-bs-placement': 'top',
        //                 'aria-label': 'Jimmy Jackson',
        //                 'data-bs-original-title': 'Jimmy Jackson',
        //               },
        //               IMG({ src: '../../assets/img/avatars/9.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //             DIV(
        //               {
        //                 class: 'avatar pull-up',
        //                 'data-bs-toggle': 'tooltip',
        //                 'data-popup': 'tooltip-custom',
        //                 'data-bs-placement': 'top',
        //                 'aria-label': 'Kristine Gill',
        //                 'data-bs-original-title': 'Kristine Gill',
        //               },
        //               IMG({ src: '../../assets/img/avatars/6.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //             DIV(
        //               {
        //                 class: 'avatar pull-up',
        //                 'data-bs-toggle': 'tooltip',
        //                 'data-popup': 'tooltip-custom',
        //                 'data-bs-placement': 'top',
        //                 'aria-label': 'Nelson Wilson',
        //                 'data-bs-original-title': 'Nelson Wilson',
        //               },
        //               IMG({ src: '../../assets/img/avatars/14.png', alt: 'Avatar', class: 'rounded-circle' }),
        //             ),
        //           ),
        //         ),
        //       ),
        //       LI(
        //         { class: 'timeline-item timeline-item-transparent' },
        //         SPAN({ class: 'timeline-point timeline-point-success' }),
        //         DIV(
        //           { class: 'timeline-event' },
        //           DIV(
        //             { class: 'timeline-header mb-1' },
        //             H6({ class: 'mb-0' }, SPAN({ text: 'Design Review' })),
        //             SMALL({ class: 'text-muted' }, SPAN({ text: '5 days Ago' })),
        //           ),
        //           P({ class: 'mb-0' }, SPAN({ text: 'Weekly review of freshly prepared design for our new app.' })),
        //         ),
        //       ),
        //       LI({ class: 'timeline-end-indicator' }, I({ class: 'bx bx-check-circle' })),
        //     ),
        //   ),
        // ),
        // DIV(
        //   { class: 'card mb-4' },
        //   DIV(
        //     { class: 'table-responsive mb-3' },
        //     DIV(
        //       { id: 'DataTables_Table_1_wrapper', class: 'dataTables_wrapper dt-bootstrap5 no-footer' },
        //       DIV(
        //         { class: 'row mx-4' },
        //         DIV(
        //           {
        //             class:
        //               'col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-start mb-3 mb-md-0',
        //           },
        //           DIV(
        //             { class: 'dataTables_length', id: 'DataTables_Table_1_length' },
        //             LABEL(
        //               {},
        //               SELECT(
        //                 {
        //                   name: 'DataTables_Table_1_length',
        //                   'aria-controls': 'DataTables_Table_1',
        //                   class: 'form-select',
        //                 },
        //                 OPTION({ value: '10' }, SPAN({ text: '10' })),
        //                 OPTION({ value: '25' }, SPAN({ text: '25' })),
        //                 OPTION({ value: '50' }, SPAN({ text: '50' })),
        //                 OPTION({ value: '100' }, SPAN({ text: '100' })),
        //               ),
        //             ),
        //           ),
        //         ),
        //         DIV(
        //           { class: 'col-sm-6 col-12 d-flex align-items-center justify-content-center justify-content-sm-end' },
        //           DIV(
        //             { class: 'dt-buttons btn-group flex-wrap' },
        //             DIV(
        //               { class: 'btn-group' },
        //               BUTTON(
        //                 {
        //                   class:
        //                     'btn btn-secondary buttons-collection dropdown-toggle btn-label-secondary float-sm-end mb-3 mb-sm-0',
        //                   tabindex: '0',
        //                   'aria-controls': 'DataTables_Table_1',
        //                   type: 'button',
        //                   'aria-haspopup': 'dialog',
        //                   'aria-expanded': 'false',
        //                 },
        //                 SPAN({}, I({ class: 'bx bx-upload me-2' }), SPAN({ text: 'Export' })),
        //                 SPAN({ class: 'dt-down-arrow' }),
        //               ),
        //             ),
        //           ),
        //         ),
        //       ),
        //       TABLE(
        //         {
        //           class: 'table datatable-invoice border-top dataTable no-footer dtr-column collapsed',
        //           id: 'DataTables_Table_1',
        //           'aria-describedby': 'DataTables_Table_1_info',
        //           style: 'width: 576px;',
        //         },
        //         THEAD(
        //           {},
        //           TR(
        //             {},
        //             TH({
        //               class: 'control sorting',
        //               tabindex: '0',
        //               'aria-controls': 'DataTables_Table_1',
        //               rowspan: '1',
        //               colspan: '1',
        //               style: 'width: 0px;',
        //               'aria-label': ': activate to sort column ascending',
        //             }),
        //             TH(
        //               {
        //                 class: 'sorting sorting_desc',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_1',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 53px;',
        //                 'aria-label': 'ID: activate to sort column ascending',
        //                 'aria-sort': 'descending',
        //               },
        //               SPAN({ text: 'ID' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_1',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 35px;',
        //                 'aria-label': ': activate to sort column ascending',
        //               },
        //               I({ class: 'bx bx-trending-up' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_1',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 57px;',
        //                 'aria-label': 'Total: activate to sort column ascending',
        //               },
        //               SPAN({ text: 'Total' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting',
        //                 tabindex: '0',
        //                 'aria-controls': 'DataTables_Table_1',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 110px;',
        //                 'aria-label': 'Issued Date: activate to sort column ascending',
        //               },
        //               SPAN({ text: 'Issued Date' }),
        //             ),
        //             TH(
        //               {
        //                 class: 'sorting_disabled dtr-hidden',
        //                 rowspan: '1',
        //                 colspan: '1',
        //                 style: 'width: 97px; display: none;',
        //                 'aria-label': 'Actions',
        //               },
        //               SPAN({ text: 'Actions' }),
        //             ),
        //           ),
        //         ),
        //         TBODY(
        //           {},
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#5089' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Sent' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '05/09/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Sent' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '05/09/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 ' },
        //                   I({ class: 'bx bx-mail-send bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$3077' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '05/02/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#5041' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Sent' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '11/19/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Sent' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '11/19/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-secondary w-px-30 h-px-30 ' },
        //                   I({ class: 'bx bx-mail-send bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$2230' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '02/01/2021' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#5027' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '09/25/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '09/25/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-success w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-adjust bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$2787' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '09/28/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#5024' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '-$202' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '08/02/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '-$202' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '08/02/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-success w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-adjust bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$5285' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '06/30/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#5020' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Downloaded' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '12/15/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Downloaded' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '12/15/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-info w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-down-arrow-circle bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$5219' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '07/17/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#4995' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '06/09/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '06/09/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-success w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-adjust bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$3313' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '08/21/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#4993' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '10/22/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '10/22/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-success w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-adjust bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$4836' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '07/10/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#4989' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Past Due' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '08/01/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Past Due' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '08/01/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-danger w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-info-circle bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$5293' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '07/30/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'odd' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#4989' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Downloaded' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '09/23/2020' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Downloaded' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '0' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '09/23/2020' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-info w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-down-arrow-circle bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$3623' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '12/01/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //           TR(
        //             { class: 'even' },
        //             TD({ class: 'control', tabindex: '0', style: '' }),
        //             TD({ class: 'sorting_1' }, A({ href: 'app-invoice-preview.html' }, SPAN({ text: '#4965' }))),
        //             TD(
        //               {},
        //               SPAN(
        //                 { 'data-bs-toggle': 'tooltip', 'data-bs-html': 'true', 'aria-label': 'aria-label' },
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '$666' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '03/18/2021' }),
        //                 ),
        //                 SPAN({ text: '" data-bs-original-title="' }),
        //                 SPAN(
        //                   {},
        //                   SPAN({ text: 'Partial Payment' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Balance:' })),
        //                   SPAN({ text: '$666' }),
        //                   ['br'],
        //                   STRONG({}, SPAN({ text: 'Due Date:' })),
        //                   SPAN({ text: '03/18/2021' }),
        //                 ),
        //                 SPAN({ text: '"' }),
        //                 SPAN(
        //                   { class: 'badge badge-center rounded-pill bg-label-success w-px-30 h-px-30' },
        //                   I({ class: 'bx bx-adjust bx-xs' }),
        //                 ),
        //               ),
        //             ),
        //             TD({}, SPAN({ text: '$3789' })),
        //             TD({ class: '', style: '' }, SPAN({ text: '09/27/2020' })),
        //             TD(
        //               { class: 'dtr-hidden', style: 'display: none;' },
        //               DIV(
        //                 { class: 'd-flex align-items-center' },
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Send Mail',
        //                     'data-bs-original-title': 'Send Mail',
        //                   },
        //                   I({ class: 'bx bx-paper-plane mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'app-invoice-preview.html',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Preview',
        //                     'data-bs-original-title': 'Preview',
        //                   },
        //                   I({ class: 'bx bx-show-alt mx-1' }),
        //                 ),
        //                 A(
        //                   {
        //                     href: 'javascript:;',
        //                     class: 'text-body',
        //                     'data-bs-toggle': 'tooltip',
        //                     'aria-label': 'Download',
        //                     'data-bs-original-title': 'Download',
        //                   },
        //                   I({ class: 'bx bx-download mx-1' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //         ),
        //       ),
        //       DIV(
        //         { class: 'row mx-4' },
        //         DIV(
        //           { class: 'col-md-12 col-lg-6 text-center text-lg-start pb-md-2 pb-lg-0' },
        //           DIV(
        //             { class: 'dataTables_info', id: 'DataTables_Table_1_info', role: 'status', 'aria-live': 'polite' },
        //             SPAN({ text: 'Showing 1 to 10 of 50 entries' }),
        //           ),
        //         ),
        //         DIV(
        //           { class: 'col-md-12 col-lg-6 d-flex justify-content-center justify-content-lg-end' },
        //           DIV(
        //             { class: 'dataTables_paginate paging_simple_numbers', id: 'DataTables_Table_1_paginate' },
        //             UL(
        //               { class: 'pagination' },
        //               LI(
        //                 { class: 'paginate_button page-item previous disabled', id: 'DataTables_Table_1_previous' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': 'previous',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: 'Previous' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item active' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': '0',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '1' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item ' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': '1',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '2' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item ' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': '2',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '3' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item ' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': '3',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '4' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item ' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': '4',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: '5' }),
        //                 ),
        //               ),
        //               LI(
        //                 { class: 'paginate_button page-item next', id: 'DataTables_Table_1_next' },
        //                 A(
        //                   {
        //                     href: '#',
        //                     'aria-controls': 'DataTables_Table_1',
        //                     'data-dt-idx': 'next',
        //                     tabindex: '0',
        //                     class: 'page-link',
        //                   },
        //                   SPAN({ text: 'Next' }),
        //                 ),
        //               ),
        //             ),
        //           ),
        //         ),
        //       ),
        //     ),
        //   ),
        // ),
      ),
    ),
  ],
});
