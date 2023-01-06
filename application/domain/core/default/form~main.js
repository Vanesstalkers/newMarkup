({
  id: async () => [],
  tpl: () => [
    // var userLST = SYS.get(LST, 'user~roles.list.obj.'+_.__.user.role) || {};

    // _.__.global.baseForm = userLST.baseForm || 'client~list';

    LINK({ href: '/theme/style.css', rel: 'stylesheet', type: 'text/css', media: 'all' }),
    SCRIPT({ src: '/theme/global.min.js' }),
    LINK({ href: '/vendor/select2/css/select2.min.css', rel: 'stylesheet', type: 'text/css', media: 'all' }),
    SCRIPT({ src: '/vendor/select2/js/select2.full.min.js' }),

    DIV(
      { id: 'main-wrapper', class: 'show' },
      DIV(
        { class: 'nav-header' },
        A(
          { href: 'https://demo.themefisher.com/focus/index.html', class: 'brand-logo' },
          IMG({ class: 'logo-abbr', src: './modal - Focus - Bootstrap Admin Dashboard _files/logo.png', alt: '' }),
          IMG({
            class: 'logo-compact',
            src: './modal - Focus - Bootstrap Admin Dashboard _files/logo-text.png',
            alt: '',
          }),
          IMG({
            class: 'brand-title',
            src: './modal - Focus - Bootstrap Admin Dashboard _files/logo-text.png',
            alt: '',
          }),
        ),
        DIV(
          { class: 'nav-control' },
          DIV({ class: 'hamburger' }, SPAN({ class: 'line' }), SPAN({ class: 'line' }), SPAN({ class: 'line' })),
        ),
      ),
      DIV(
        { class: 'header' },
        DIV(
          { class: 'header-content' },
          NAV(
            { class: 'navbar navbar-expand' },
            DIV(
              { class: 'collapse navbar-collapse justify-content-between' },
              DIV(
                { class: 'header-left' },
                DIV(
                  { class: 'search_bar dropdown' },
                  SPAN(
                    { class: 'search_icon p-3 c-pointer', 'data-toggle': 'dropdown' },
                    I({ class: 'mdi mdi-magnify' }),
                  ),
                  DIV(
                    { class: 'dropdown-menu p-0 m-0' },
                    DIV(
                      {},
                      INPUT({ class: 'form-control', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
                    ),
                  ),
                ),
              ),
              UL(
                { class: 'navbar-nav header-right' },
                LI(
                  { class: 'nav-item dropdown notification_dropdown' },
                  A(
                    {
                      class: 'nav-link',
                      href: 'https://demo.themefisher.com/focus/ui-modal.html#',
                      role: 'button',
                      'data-toggle': 'dropdown',
                    },
                    I({ class: 'mdi mdi-bell' }),
                    DIV({ class: 'pulse-css' }),
                  ),
                  DIV(
                    { class: 'dropdown-menu dropdown-menu-right' },
                    UL(
                      { class: 'list-unstyled' },
                      LI(
                        { class: 'media dropdown-item' },
                        SPAN({ class: 'success' }, I({ class: 'ti-user' })),
                        DIV(
                          { class: 'media-body' },
                          A(
                            { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                            P(
                              {},
                              STRONG({}, SPAN({ text: 'Martin' })),
                              SPAN({ text: 'has added a' }),
                              STRONG({}, SPAN({ text: 'customer' })),
                              SPAN({ text: 'Successfully' }),
                            ),
                          ),
                        ),
                        SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
                      ),
                      LI(
                        { class: 'media dropdown-item' },
                        SPAN({ class: 'primary' }, I({ class: 'ti-shopping-cart' })),
                        DIV(
                          { class: 'media-body' },
                          A(
                            { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                            P(
                              {},
                              STRONG({}, SPAN({ text: 'Jennifer' })),
                              SPAN({ text: 'purchased Light Dashboard 2.0.' }),
                            ),
                          ),
                        ),
                        SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
                      ),
                      LI(
                        { class: 'media dropdown-item' },
                        SPAN({ class: 'danger' }, I({ class: 'ti-bookmark' })),
                        DIV(
                          { class: 'media-body' },
                          A(
                            { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                            P(
                              {},
                              STRONG({}, SPAN({ text: 'Robin' })),
                              SPAN({ text: 'marked a' }),
                              STRONG({}, SPAN({ text: 'ticket' })),
                              SPAN({ text: 'as unsolved.' }),
                            ),
                          ),
                        ),
                        SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
                      ),
                      LI(
                        { class: 'media dropdown-item' },
                        SPAN({ class: 'primary' }, I({ class: 'ti-heart' })),
                        DIV(
                          { class: 'media-body' },
                          A(
                            { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                            P(
                              {},
                              STRONG({}, SPAN({ text: 'David' })),
                              SPAN({ text: 'purchased Light Dashboard 1.0.' }),
                            ),
                          ),
                        ),
                        SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
                      ),
                      LI(
                        { class: 'media dropdown-item' },
                        SPAN({ class: 'success' }, I({ class: 'ti-image' })),
                        DIV(
                          { class: 'media-body' },
                          A(
                            { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                            P(
                              {},
                              STRONG({}, SPAN({ text: 'James.' })),
                              SPAN({ text: 'has added a' }),
                              STRONG({}, SPAN({ text: 'customer' })),
                              SPAN({ text: 'Successfully' }),
                            ),
                          ),
                        ),
                        SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
                      ),
                    ),
                    A(
                      { class: 'all-notification', href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
                      SPAN({ text: 'See all notifications' }),
                      I({ class: 'ti-arrow-right' }),
                    ),
                  ),
                ),
                LI(
                  { class: 'nav-item dropdown header-profile' },
                  A(
                    {
                      class: 'nav-link',
                      href: 'https://demo.themefisher.com/focus/ui-modal.html#',
                      role: 'button',
                      'data-toggle': 'dropdown',
                    },
                    I({ class: 'mdi mdi-account' }),
                  ),
                  DIV(
                    { class: 'dropdown-menu dropdown-menu-right' },
                    A(
                      { href: 'https://demo.themefisher.com/focus/app-profile.html', class: 'dropdown-item' },
                      I({ class: 'icon-user' }),
                      SPAN({ class: 'ml-2' }, SPAN({ text: 'Profile' })),
                    ),
                    A(
                      { href: 'https://demo.themefisher.com/focus/email-inbox.html', class: 'dropdown-item' },
                      I({ class: 'icon-envelope-open' }),
                      SPAN({ class: 'ml-2' }, SPAN({ text: 'Inbox' })),
                    ),
                    A(
                      { href: 'https://demo.themefisher.com/focus/page-login.html', class: 'dropdown-item' },
                      I({ class: 'icon-key' }),
                      SPAN({ class: 'ml-2' }, SPAN({ text: 'Logout' })),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      HTML('core/default~sidebar'),
      DIV(
        { class: 'content-body', style: 'min-height: 750px;' },
        DIV(
          { class: 'container-fluid' },
          DIV(
            { id: 'formContent' /* , class: 'role-'+_.__.user.role+' wrapper wrapper-content animated fadeIn' */ },
            FORM({ name: 'ce~main' /* , SYS.get(_.__, 'user.query.subform.form') || _.__.global.baseForm */ }),
          ),
          DIV(
            { class: 'row page-titles mx-0' },
            DIV(
              { class: 'col-sm-6 p-md-0' },
              DIV(
                { class: 'welcome-text' },
                H4({}, SPAN({ text: 'Hi, welcome back!' })),
                SPAN({ class: 'ml-1' }, SPAN({ text: 'Modal' })),
              ),
            ),
            DIV(
              { class: 'col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex' },
              OL(
                { class: 'breadcrumb' },
                LI({ class: 'breadcrumb-item' }, A({ href: 'javascript:void(0)' }, SPAN({ text: 'Bootstrap' }))),
                LI({ class: 'breadcrumb-item active' }, A({ href: 'javascript:void(0)' }, SPAN({ text: 'Modal' }))),
              ),
            ),
          ),
          DIV(
            { class: 'row' },

            DIV(
              { class: 'col-xl-6' },
              DIV(
                { class: 'card' },
                DIV(
                  { class: 'card-body' },
                  DIV(
                    { class: 'mb-4' },
                    H4({ class: 'card-title' }, SPAN({ text: 'Single select boxes' })),
                    P({}, SPAN({ text: 'Select2 can take a regular select box like this...' })),
                  ),
                  SELECT(
                    { id: 'single-select' },
                    OPTION({ value: 'AL' }, SPAN({ text: 'Alabama' })),
                    OPTION({ value: 'WY' }, SPAN({ text: 'Wyoming' })),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'col-xl-6' },
              DIV(
                { class: 'card' },
                DIV(
                  { class: 'card-body' },
                  DIV(
                    { class: 'mb-4' },
                    H4({ class: 'card-title' }, SPAN({ text: 'Multi-select boxes' })),
                    P(
                      {},
                      SPAN({
                        text: 'Select2 also supports multi-value select boxes. The select below is declared with the multiple',
                      }),
                      MARK({ class: 'text-primary' }, SPAN({ text: 'attribute' })),
                      SPAN({ text: '.' }),
                    ),
                  ),
                  SELECT(
                    { class: 'multi-select', name: 'states[]', multiple: 'multiple' },
                    OPTION({ value: 'AL' }, SPAN({ text: 'Alabama' })),
                    OPTION({ value: 'WY' }, SPAN({ text: 'Wyoming' })),
                    OPTION({ value: 'UI' }, SPAN({ text: 'dlf' })),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'col-xl-6' },
              DIV(
                { class: 'card' },
                DIV(
                  { class: 'card-body' },
                  DIV(
                    { class: 'mb-4' },
                    H4({ class: 'card-title' }, SPAN({ text: 'Ajax (remote data)' })),
                    P(
                      {},
                      SPAN({
                        text: "Select2 comes with AJAX support built in, using jQuery's AJAX methods. In this example, we can search for repositories using GitHub's API:",
                      }),
                    ),
                  ),
                  SELECT({ class: 'js-data-example-ajax w-100' }),
                ),
              ),
            ),

            DIV(
              { class: 'col-12' },
              DIV(
                { class: 'card' },
                DIV({ class: 'card-header' }, H4({ class: 'card-title' }, SPAN({ text: 'Bootstrap Modal' }))),
                DIV(
                  { class: 'card-body' },
                  P(
                    {},
                    SPAN({
                      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima! Eligendi minima illum itaque harum aliquam vel, sunt magni dolorem! Cum quaerat est cupiditate saepe quidem, fugiat in at magni ad provident distinctio\r\n                                eum tempore laboriosam adipisci, tempora cumque ex quis unde voluptatem consequuntur. Excepturi quibusdam accusamus deleniti officiis ullam repellendus magni unde? Saepe quibusdam vel, ipsum numquam ratione tempore.\r\n                                Dolor optio aliquid in velit eaque, sed delectus reprehenderit quam quidem a eum id nostrum ullam obcaecati error deleniti modi quasi harum possimus voluptatum repellat saepe! Omnis dolor maiores eaque deserunt exercitationem\r\n                                incidunt autem et voluptatibus molestias quod explicabo ipsam nam vitae a architecto, consectetur quas facilis sed nulla, placeat eum ex, ducimus in. Hic quo necessitatibus autem tempora provident!',
                    }),
                  ),
                  DIV(
                    { class: 'bootstrap-modal' },
                    BUTTON(
                      {
                        type: 'button',
                        class: 'btn btn-primary',
                        'data-toggle': 'modal',
                        'data-target': '#test',
                      },
                      SPAN({ text: 'Test modal' }),
                    ),

                    HTML('core/default~modal', { id: 'test', title: 'test' }),
                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '#basicModal',
                    //   },
                    //   SPAN({ text: 'Basic modal' }),
                    // ),
                    // DIV(
                    //   { class: 'modal fade', id: 'basicModal' },
                    //   DIV(
                    //     { class: 'modal-dialog', role: 'document' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV({ class: 'modal-body' }, SPAN({ text: 'Modal body text goes here.' })),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),

                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '#exampleModalLong',
                    //   },
                    //   SPAN({ text: 'Long content Modal' }),
                    // ),
                    // DIV(
                    //   { class: 'modal fade', id: 'exampleModalLong' },
                    //   DIV(
                    //     { class: 'modal-dialog' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-body' },
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
                    //           }),
                    //         ),
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.',
                    //           }),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '#exampleModalCenter',
                    //   },
                    //   SPAN({ text: 'Modal centered' }),
                    // ),
                    // DIV(
                    //   { class: 'modal fade', id: 'exampleModalCenter', style: 'display: none;', 'aria-hidden': 'true' },
                    //   DIV(
                    //     { class: 'modal-dialog modal-dialog-centered', role: 'document' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-body' },
                    //         P(
                    //           {},
                    //           SPAN({
                    //             text: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
                    //           }),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '#exampleModalpopover',
                    //   },
                    //   SPAN({ text: 'Modal with tooltip' }),
                    // ),
                    // DIV(
                    //   { class: 'modal fade', id: 'exampleModalpopover' },
                    //   DIV(
                    //     { class: 'modal-dialog modal-dialog-centered', role: 'document' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-body' },
                    //         H5({}, SPAN({ text: 'Popover in a modal' })),
                    //         P(
                    //           {},
                    //           SPAN({ text: 'This' }),
                    //           A(
                    //             {
                    //               href: 'https://demo.themefisher.com/focus/ui-modal.html#',
                    //               role: 'button',
                    //               'data-container-fluid': 'body',
                    //               'data-toggle': 'popover',
                    //               class: 'btn btn-secondary popover-test',
                    //               title: 'Popover title',
                    //               'data-content': 'Popover body content is set in this attribute.',
                    //             },
                    //             SPAN({ text: 'button' }),
                    //           ),
                    //           SPAN({ text: 'triggers a popover on click.' }),
                    //         ),
                    //         ['hr'],
                    //         H5({}, SPAN({ text: 'Tooltips in a modal' })),
                    //         P(
                    //           {},
                    //           A(
                    //             {
                    //               href: 'https://demo.themefisher.com/focus/ui-modal.html#',
                    //               class: 'tooltip-test text-primary',
                    //               'data-toggle': 'tooltip',
                    //               title: 'Told you!',
                    //             },
                    //             SPAN({ text: 'This link' }),
                    //           ),
                    //           SPAN({ text: 'and' }),
                    //           A(
                    //             {
                    //               href: 'https://demo.themefisher.com/focus/ui-modal.html#',
                    //               class: 'tooltip-test text-primary',
                    //               'data-toggle': 'tooltip',
                    //               title: 'Another one!',
                    //             },
                    //             SPAN({ text: 'that link' }),
                    //           ),
                    //           SPAN({ text: 'have tooltips on hover.' }),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                    // BUTTON(
                    //   { type: 'button', class: 'btn btn-primary', 'data-toggle': 'modal', 'data-target': '#modalGrid' },
                    //   SPAN({ text: 'Grid Inside Modal' }),
                    // ),
                    // DIV(
                    //   { class: 'modal fade', id: 'modalGrid' },
                    //   DIV(
                    //     { class: 'modal-dialog', role: 'document' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-body' },
                    //         DIV(
                    //           { class: 'container-fluid' },
                    //           DIV(
                    //             { class: 'row' },
                    //             DIV({ class: 'col-md-4' }, SPAN({ text: '.col-md-4' })),
                    //             DIV({ class: 'col-md-4 ml-auto' }, SPAN({ text: '.col-md-4 .ml-auto' })),
                    //           ),
                    //           DIV(
                    //             { class: 'row' },
                    //             DIV({ class: 'col-md-3 ml-auto' }, SPAN({ text: '.col-md-3 .ml-auto' })),
                    //             DIV({ class: 'col-md-2 ml-auto' }, SPAN({ text: '.col-md-2 .ml-auto' })),
                    //           ),
                    //           DIV(
                    //             { class: 'row' },
                    //             DIV({ class: 'col-md-6 ml-auto' }, SPAN({ text: '.col-md-6 .ml-auto' })),
                    //           ),
                    //           DIV(
                    //             { class: 'row' },
                    //             DIV(
                    //               { class: 'col-sm-9' },
                    //               SPAN({ text: 'Level 1: .col-sm-9' }),
                    //               DIV(
                    //                 { class: 'row' },
                    //                 DIV({ class: 'col-8 col-sm-6' }, SPAN({ text: 'Level 2: .col-8 .col-sm-6' })),
                    //                 DIV({ class: 'col-4 col-sm-6' }, SPAN({ text: 'Level 2: .col-4 .col-sm-6' })),
                    //               ),
                    //             ),
                    //           ),
                    //         ),
                    //       ),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '.bd-example-modal-lg',
                    //   },
                    //   SPAN({ text: 'Large modal' }),
                    // ),
                    // DIV(
                    //   {
                    //     class: 'modal fade bd-example-modal-lg',
                    //     tabindex: '-1',
                    //     role: 'dialog',
                    //     'aria-hidden': 'true',
                    //   },
                    //   DIV(
                    //     { class: 'modal-dialog modal-lg' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV({ class: 'modal-body' }, SPAN({ text: 'Modal body text goes here.' })),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                    // BUTTON(
                    //   {
                    //     type: 'button',
                    //     class: 'btn btn-primary',
                    //     'data-toggle': 'modal',
                    //     'data-target': '.bd-example-modal-sm',
                    //   },
                    //   SPAN({ text: 'Small modal' }),
                    // ),
                    // DIV(
                    //   {
                    //     class: 'modal fade bd-example-modal-sm',
                    //     tabindex: '-1',
                    //     role: 'dialog',
                    //     'aria-hidden': 'true',
                    //   },
                    //   DIV(
                    //     { class: 'modal-dialog modal-sm' },
                    //     DIV(
                    //       { class: 'modal-content' },
                    //       DIV(
                    //         { class: 'modal-header' },
                    //         H5({ class: 'modal-title' }, SPAN({ text: 'Modal title' })),
                    //         BUTTON(
                    //           { type: 'button', class: 'close', 'data-dismiss': 'modal' },
                    //           SPAN({}, SPAN({ text: '×' })),
                    //         ),
                    //       ),
                    //       DIV({ class: 'modal-body' }, SPAN({ text: 'Modal body text goes here.' })),
                    //       DIV(
                    //         { class: 'modal-footer' },
                    //         BUTTON(
                    //           { type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' },
                    //           SPAN({ text: 'Close' }),
                    //         ),
                    //         BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
                    //       ),
                    //     ),
                    //   ),
                    // ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'footer' },
        DIV(
          { class: 'copyright' },
          P(
            {},
            SPAN({ text: 'Copyright © Designed &amp; Developed by' }),
            A(
              { href: 'https://demo.themefisher.com/focus/ui-modal.html#', target: '_blank' },
              SPAN({ text: 'Quixkit' }),
            ),
            SPAN({ text: '2019' }),
          ),
        ),
      ),
    ),

    /*     DIV(
      { id: 'wrapper' },
      HTML('core/default~sidebar'),

      DIV(
        { id: 'page-wrapper', class: 'gray-bg' },
        DIV({ class: 'row border-bottom' }, [
          // _.html('__tpl~navbar', _, {}),
        ]),

        DIV(
          { class: 'row wrapper border-bottom white-bg page-heading' },
          DIV({ class: 'col-lg-10' }, H2({ text: '' }), OL({ class: 'breadcrumb' })),
        ),

        DIV(
          { id: 'formContent' , class: 'role-'+_.__.user.role+' wrapper wrapper-content animated fadeIn' },
          FORM({ name: 'ce~main' SYS.get(_.__, 'user.query.subform.form') || _.__.global.baseForm }),
        ),

        // _.html('__tpl~footer', _, {}),
      ),
    ), */

    // _.if(userLST.tutorial !== false, ()=>['div', {id: 'subFormTutorial'}, [
    //   _.form({name: 'tutorial~main', history: false }),
    // ]]),
  ],
  func: () => {
    let waitForLib = '/theme/global.min.js';
    if (!window.waitForLoadRes[waitForLib]) window.waitForLoadRes[waitForLib] = [];
    window.waitForLoadRes[waitForLib].push(() => {
      new quixSettings({
        typography: 'roboto',
        version: 'light',
        layout: 'vertical',
        headerBg: 'color_1',
        navheaderBg: 'color_1',
        sidebarBg: 'color_1',
        sidebarStyle: 'full',
        sidebarPosition: 'fixed',
        headerPosition: 'fixed',
        containerLayout: 'wide',
        direction: 'ltr',
      });

      $('#preloader').fadeOut(500);
      $('#main-wrapper').addClass('show');

      // if($('body').attr('data-sidebar-position') === "fixed") {
      //     $('.quixnav-scroll').slimscroll({
      //         position: "right",
      //         size: "5px",
      //         height: "100%",
      //         color: "transparent"
      //     });
      // }

      $('#menu').metisMenu();

      // $(function() {
      //     AOS.init({
      //         duration: 1500,
      //         easing: 'ease-in-out',
      //     });
      // });

      $('#checkAll').change(function () {
        $('td input:checkbox').prop('checked', $(this).prop('checked'));
      });

      // $('.sidebar-right-inner').slimscroll({
      //     // position: "left",
      //     size: "5px",
      //     height: "100%",
      //     color: "#c6c8c9"
      // });

      $('.nav-control').on('click', function () {
        $('#main-wrapper').toggleClass('menu-toggle');

        $('.hamburger').toggleClass('is-active');
      });

      //to keep the current page active
      $(function () {
        for (
          var nk = window.location,
            o = $('ul#menu a')
              .filter(function () {
                return this.href == nk;
              })
              .addClass('mm-active')
              .parent()
              .addClass('mm-active');
          ;

        ) {
          // console.log(o)
          if (!o.is('li')) break;
          o = o.parent().addClass('mm-show').parent().addClass('mm-active');
        }

        $('ul#menu>li').on('click', function () {
          const sidebarStyle = $('body').attr('data-sidebar-style');
          if (sidebarStyle === 'mini') {
            console.log($(this).find('ul'));
            $(this).find('ul').stop();
          }
        });
      });

      $(function () {
        // var win_w = window.outerWidth;
        var win_h = window.outerHeight;
        var win_h = window.outerHeight;
        if (win_h > 0 ? win_h : screen.height) {
          $('.content-body').css('min-height', win_h + 60 + 'px');
        }
      });

      $('a[data-action="collapse"]').on('click', function (i) {
        i.preventDefault(),
          $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('mdi-arrow-down mdi-arrow-up'),
          $(this).closest('.card').children('.card-body').collapse('toggle');
      });

      $('a[data-action="expand"]').on('click', function (i) {
        i.preventDefault(),
          $(this)
            .closest('.card')
            .find('[data-action="expand"] i')
            .toggleClass('icon-size-actual icon-size-fullscreen'),
          $(this).closest('.card').toggleClass('card-fullscreen');
      });

      $('[data-action="close"]').on('click', function () {
        $(this).closest('.card').removeClass().slideUp('fast');
      });

      $('[data-action="reload"]').on('click', function () {
        var e = $(this);
        e.parents('.card').addClass('card-load'),
          e.parents('.card').append('<div class="card-loader"><i class=" ti-reload rotate-refresh"></div>'),
          setTimeout(function () {
            e.parents('.card').children('.card-loader').remove(), e.parents('.card').removeClass('card-load');
          }, 2000);
      });

      const headerHight = $('.header').innerHeight();

      $(window).scroll(function () {
        if (
          $('body').attr('data-layout') === 'horizontal' &&
          $('body').attr('data-header-position') === 'static' &&
          $('body').attr('data-sidebar-position') === 'fixed'
        )
          $(this.window).scrollTop() >= headerHight
            ? $('.quixnav').addClass('fixed')
            : $('.quixnav').removeClass('fixed');
      });

      // $('.sidebar-right-trigger').on('click', function() {
      //     $('.sidebar-right').toggleClass('show');
      // });

      const qs = new PerfectScrollbar('.quixnav-scroll');
      // const sr = new PerfectScrollbar('.sidebar-right-inner');

      //plugin bootstrap minus and plus
      $('.btn-number').on('click', function (e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
          if (type == 'minus') input.val(currentVal - 1);
          else if (type == 'plus') input.val(currentVal + 1);
        } else {
          input.val(0);
        }
      });
    });

    waitForLib = '/vendor/select2/js/select2.full.min.js';
    if (!window.waitForLoadRes[waitForLib]) window.waitForLoadRes[waitForLib] = [];
    window.waitForLoadRes[waitForLib].push(() => {
      // single select box
      $('#single-select').select2();

      // multi select box
      $('.multi-select').select2();

      // dropdown option groups
      $('.dropdown-groups').select2();

      //disabling options
      $('.disabling-options').select2();

      //disabling a select2 control
      $('.js-example-disabled').select2();
      $('.js-example-disabled-multi').select2();
      $('#js-programmatic-enable').on('click', function () {
        $('.js-example-disabled').prop('disabled', false);
        $('.js-example-disabled-multi').prop('disabled', false);
      });
      $('#js-programmatic-disable').on('click', function () {
        $('.js-example-disabled').prop('disabled', true);
        $('.js-example-disabled-multi').prop('disabled', true);
      });

      // select2 with labels
      $('.select2-with-label-single').select2();
      $('.select2-with-label-multiple').select2();

      //select2 container width
      $('.select2-width-50').select2();
      $('.select2-width-75').select2();

      //select2 themes
      $('.js-example-theme-single').select2({
        theme: 'classic',
      });
      $('.js-example-theme-multiple').select2({
        theme: 'classic',
      });

      //ajax remote data
      $('.js-data-example-ajax').select2({
        width: '100%',
        ajax: {
          url: 'https://api.github.com/search/repositories',
          dataType: 'json',
          delay: 250,
          data: function (params) {
            return {
              q: params.term, // search term
              page: params.page,
            };
          },
          processResults: function (data, params) {
            // parse the results into the format expected by Select2
            // since we are using custom formatting functions we do not need to
            // alter the remote JSON data, except to indicate that infinite
            // scrolling can be used
            params.page = params.page || 1;

            return {
              results: data.items,
              pagination: {
                more: params.page * 30 < data.total_count,
              },
            };
          },
          cache: true,
        },
        placeholder: 'Search for a repository',
        escapeMarkup: function (markup) {
          return markup;
        }, // let our custom formatter work
        minimumInputLength: 1,
        templateResult: formatRepo,
        templateSelection: formatRepoSelection,
      });

      function formatRepo(repo) {
        if (repo.loading) {
          return repo.text;
        }

        var markup =
          "<div class='select2-result-repository clearfix'>" +
          "<div class='select2-result-repository__avatar'><img src='" +
          repo.owner.avatar_url +
          "' /></div>" +
          "<div class='select2-result-repository__meta'>" +
          "<div class='select2-result-repository__title'>" +
          repo.full_name +
          '</div>';

        if (repo.description) {
          markup += "<div class='select2-result-repository__description'>" + repo.description + '</div>';
        }

        markup +=
          "<div class='select2-result-repository__statistics'>" +
          "<div class='select2-result-repository__forks'><i class='fa fa-flash'></i> " +
          repo.forks_count +
          ' Forks</div>' +
          "<div class='select2-result-repository__stargazers'><i class='fa fa-star'></i> " +
          repo.stargazers_count +
          ' Stars</div>' +
          "<div class='select2-result-repository__watchers'><i class='fa fa-eye'></i> " +
          repo.watchers_count +
          ' Watchers</div>' +
          '</div>' +
          '</div></div>';

        return markup;
      }

      function formatRepoSelection(repo) {
        return repo.full_name || repo.text;
      }

      // loading array data
      var data = [
        {
          id: 0,
          text: 'enhancement',
        },
        {
          id: 1,
          text: 'bug',
        },
        {
          id: 2,
          text: 'duplicate',
        },
        {
          id: 3,
          text: 'invalid',
        },
        {
          id: 4,
          text: 'wontfix',
        },
      ];
      $('.js-example-data-array').select2({
        data: data,
      });

      //automatic selection
      $('#automatic-selection').select2({
        selectOnClose: true,
      });

      //remain open after selection
      $('#remain-open').select2({
        closeOnSelect: false,
      });

      //dropdown-placement
      $('#dropdown-placement').select2({
        dropdownParent: $('#select2-modal'),
      });

      // limit the number of selection
      $('#limit-selection').select2({
        maximumSelectionLength: 2,
      });

      // dynamic option
      $('#dynamic-option-creation').select2({
        tags: true,
      });

      // tagging with multi value select box
      $('#multi-value-select').select2({
        tags: true,
      });

      // single-select-placeholder
      $('.single-select-placeholder').select2({
        placeholder: 'Select a state',
        allowClear: true,
      });

      // multi select placeholder
      $('.multi-select-placeholder').select2({
        placeholder: 'Select a state',
      });

      //default selection placeholder
      $('.default-placeholder').select2({
        placeholder: {
          id: '-1', // the value of the option
          text: 'Select an option',
        },
      });

      // customizing how results are matched
      function matchCustom(params, data) {
        // If there are no search terms, return all of the data
        if ($.trim(params.term) === '') {
          return data;
        }

        // Do not display the item if there is no 'text' property
        if (typeof data.text === 'undefined') {
          return null;
        }

        // `params.term` should be the term that is used for searching
        // `data.text` is the text that is displayed for the data object
        if (data.text.indexOf(params.term) > -1) {
          var modifiedData = $.extend({}, data, true);
          modifiedData.text += ' (matched)';

          // You can return modified objects from here
          // This includes matching the `children` how you want in nested data sets
          return modifiedData;
        }

        // Return `null` if the term should not be displayed
        return null;
      }
      $('.customize-result').select2({
        matcher: matchCustom,
      });

      // matching grouped options

      function matchStart(params, data) {
        // If there are no search terms, return all of the data
        if ($.trim(params.term) === '') {
          return data;
        }

        // Skip if there is no 'children' property
        if (typeof data.children === 'undefined') {
          return null;
        }

        // `data.children` contains the actual options that we are matching against
        var filteredChildren = [];
        $.each(data.children, function (idx, child) {
          if (child.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
            filteredChildren.push(child);
          }
        });

        // If we matched any of the timezone group's children, then set the matched children on the group
        // and return the group object
        if (filteredChildren.length) {
          var modifiedData = $.extend({}, data, true);
          modifiedData.children = filteredChildren;

          // You can return modified objects from here
          // This includes matching the `children` how you want in nested data sets
          return modifiedData;
        }

        // Return `null` if the term should not be displayed
        return null;
      }
      $('.match-grouped-options').select2({
        matcher: matchStart,
      });

      //minimum search term length
      $('.minimum-search-length').select2({
        minimumInputLength: 3, // only start searching when the user has input 3 or more characters
      });

      //maximum search term length
      $('.maximum-search-length').select2({
        maximumInputLength: 20, // only allow terms up to 20 characters long
      });

      // programmatically add new option
      var data = {
        id: 1,
        text: 'New Item',
      };
      var newOption = new Option(data.text, data.id, false, false);
      $('.add-new-options').append(newOption).trigger('change').select2();

      // create if not exists

      // Set the value, creating a new option if necessary
      if ($('.create-if-not-exists').find("option[value='" + data.id + "']").length) {
        $('.create-if-not-exists').val(data.id).trigger('change');
      } else {
        // Create a DOM Option and pre-select by default
        var newOption = new Option(data.text, data.id, true, true);
        // Append it to the select
        $('.create-if-not-exists').append(newOption).trigger('change').select2();
      }

      // using jquery selector

      $('.jquery-selector').select2();
      $('.jquery-selector').on('change', function () {
        var selectData = $(this).find(':selected');
        var value = selectData.val();
        alert('you select ' + value);
      });

      // select2 rtl support
      $('.rtl-select2').select2({
        dir: 'rtl',
      });

      // destroy selector
      $('.destroy-selector').select2();

      $('#destroy-selector-trigger').click(function () {
        $('.destroy-selector').select2('destroy');
      });

      // opening options
      $('.opening-dropdown').select2();
      $('#dropdown-trigger-open').click(function () {
        $('.opening-dropdown').select2('open');
      });

      // open or close dropdown
      $('.open-close-dropdown').select2();
      $('#opening-dropdown-trigger').click(function () {
        $('.open-close-dropdown').select2('open');
      });
      $('#closing-dropdown-trigger').click(function () {
        $('.open-close-dropdown').select2('close');
      });

      // select2 methods
      var $singleUnbind = $('.single-event-unbind').select2();

      $('.js-programmatic-set-val').on('click', function () {
        $singleUnbind.val('CA').trigger('change');
      });

      $('.js-programmatic-open').on('click', function () {
        $singleUnbind.select2('open');
      });

      $('.js-programmatic-close').on('click', function () {
        $singleUnbind.select2('close');
      });

      $('.js-programmatic-init').on('click', function () {
        $singleUnbind.select2({
          width: '400px',
        });
      });

      $('.js-programmatic-destroy').on('click', function () {
        $singleUnbind.select2('destroy');
      });

      var $unbindMulti = $('.js-example-programmatic-multi').select2();
      $('.js-programmatic-multi-set-val').on('click', function () {
        $unbindMulti.val(['CA', 'HA']).trigger('change');
      });

      $('.js-programmatic-multi-clear').on('click', function () {
        $unbindMulti.val(null).trigger('change');
      });
    });
  },
  style: `
  `,
});
