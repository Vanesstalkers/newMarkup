({
  tpl: () => [
    FOOTER(
      { class: 'content-footer footer bg-footer-theme' },
      DIV(
        { class: 'container-xxl d-flex flex-wrap justify-content-between py-2 flex-md-row flex-column' },
        DIV(
          { class: 'mb-2 mb-md-0' },
          SPAN({ text: '©' }),
          SPAN({ text: ', made with ❤️ by' }),
          A(
            { href: 'https://themeselection.com', target: '_blank', class: 'footer-link fw-bolder' },
            SPAN({ text: 'ThemeSelection' }),
          ),
        ),
        DIV(
          {},
          A(
            { href: 'https://themeselection.com/license/', class: 'footer-link me-4', target: '_blank' },
            SPAN({ text: 'License' }),
          ),
          A(
            { href: 'https://themeselection.com/', target: '_blank', class: 'footer-link me-4' },
            SPAN({ text: 'More Themes' }),
          ),
          A(
            {
              href: 'https://demos.themeselection.com/sneat-bootstrap-html-admin-template/documentation/',
              target: '_blank',
              class: 'footer-link me-4',
            },
            SPAN({ text: 'Documentation' }),
          ),
          A(
            {
              href: 'https://themeselection.com/support/',
              target: '_blank',
              class: 'footer-link d-none d-sm-inline-block',
            },
            SPAN({ text: 'Support' }),
          ),
        ),
      ),
    ),
  ],
  func: () => {},
  style: ``,
});
