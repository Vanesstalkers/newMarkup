({
  tpl: () => [
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
              // DIV(
              //   { class: 'search_bar dropdown' },
              //   SPAN(
              //     { class: 'search_icon p-3 c-pointer', 'data-toggle': 'dropdown' },
              //     I({ class: 'mdi mdi-magnify' }),
              //   ),
              //   DIV(
              //     { class: 'dropdown-menu p-0 m-0' },
              //     DIV(
              //       {},
              //       INPUT({ class: 'form-control', type: 'search', placeholder: 'Search', 'aria-label': 'Search' }),
              //     ),
              //   ),
              // ),
            ),
            UL(
              { class: 'navbar-nav header-right' },
              // LI(
              //   { class: 'nav-item dropdown notification_dropdown' },
              //   A(
              //     {
              //       class: 'nav-link',
              //       href: 'https://demo.themefisher.com/focus/ui-modal.html#',
              //       role: 'button',
              //       'data-toggle': 'dropdown',
              //     },
              //     I({ class: 'mdi mdi-bell' }),
              //     DIV({ class: 'pulse-css' }),
              //   ),
              //   DIV(
              //     { class: 'dropdown-menu dropdown-menu-right' },
              //     UL(
              //       { class: 'list-unstyled' },
              //       LI(
              //         { class: 'media dropdown-item' },
              //         SPAN({ class: 'success' }, I({ class: 'ti-user' })),
              //         DIV(
              //           { class: 'media-body' },
              //           A(
              //             { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //             P(
              //               {},
              //               STRONG({}, SPAN({ text: 'Martin' })),
              //               SPAN({ text: 'has added a' }),
              //               STRONG({}, SPAN({ text: 'customer' })),
              //               SPAN({ text: 'Successfully' }),
              //             ),
              //           ),
              //         ),
              //         SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
              //       ),
              //       LI(
              //         { class: 'media dropdown-item' },
              //         SPAN({ class: 'primary' }, I({ class: 'ti-shopping-cart' })),
              //         DIV(
              //           { class: 'media-body' },
              //           A(
              //             { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //             P(
              //               {},
              //               STRONG({}, SPAN({ text: 'Jennifer' })),
              //               SPAN({ text: 'purchased Light Dashboard 2.0.' }),
              //             ),
              //           ),
              //         ),
              //         SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
              //       ),
              //       LI(
              //         { class: 'media dropdown-item' },
              //         SPAN({ class: 'danger' }, I({ class: 'ti-bookmark' })),
              //         DIV(
              //           { class: 'media-body' },
              //           A(
              //             { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //             P(
              //               {},
              //               STRONG({}, SPAN({ text: 'Robin' })),
              //               SPAN({ text: 'marked a' }),
              //               STRONG({}, SPAN({ text: 'ticket' })),
              //               SPAN({ text: 'as unsolved.' }),
              //             ),
              //           ),
              //         ),
              //         SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
              //       ),
              //       LI(
              //         { class: 'media dropdown-item' },
              //         SPAN({ class: 'primary' }, I({ class: 'ti-heart' })),
              //         DIV(
              //           { class: 'media-body' },
              //           A(
              //             { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //             P({}, STRONG({}, SPAN({ text: 'David' })), SPAN({ text: 'purchased Light Dashboard 1.0.' })),
              //           ),
              //         ),
              //         SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
              //       ),
              //       LI(
              //         { class: 'media dropdown-item' },
              //         SPAN({ class: 'success' }, I({ class: 'ti-image' })),
              //         DIV(
              //           { class: 'media-body' },
              //           A(
              //             { href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //             P(
              //               {},
              //               STRONG({}, SPAN({ text: 'James.' })),
              //               SPAN({ text: 'has added a' }),
              //               STRONG({}, SPAN({ text: 'customer' })),
              //               SPAN({ text: 'Successfully' }),
              //             ),
              //           ),
              //         ),
              //         SPAN({ class: 'notify-time' }, SPAN({ text: '3:20 am' })),
              //       ),
              //     ),
              //     A(
              //       { class: 'all-notification', href: 'https://demo.themefisher.com/focus/ui-modal.html#' },
              //       SPAN({ text: 'See all notifications' }),
              //       I({ class: 'ti-arrow-right' }),
              //     ),
              //   ),
              // ),
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
                    {
                      href: `#${JSON.stringify({ form: 'user~profile', container: 'formContent' })}`,
                      class: 'dropdown-item',
                    },
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
  ],
  func: () => {},
  style: ``,
});
