({
  config: {
    menu: {
      label: 'FAQ',
      icon: 'fa-solid fa-circle-question fa-fw',
    },
    disableCardStyle: true,
  },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: ({ data }) => [
    DIV(
      { class: 'card overflow-hidden' },
      DIV(
        { class: 'help-center-header d-flex flex-column justify-content-center align-items-center' },
        H3({ class: 'text-center' }, SPAN({ text: 'Hello, how can we help?' })),
        DIV(
          { class: 'input-wrapper my-3 input-group input-group-merge' },
          SPAN({ class: 'input-group-text', id: 'basic-addon1' }, I({ class: 'bx bx-search-alt bx-xs text-muted' })),
          INPUT({
            type: 'text',
            class: 'form-control form-control-lg',
            placeholder: 'Find anything (features, payment or reset password)',
            'aria-label': 'Search',
            'aria-describedby': 'basic-addon1',
          }),
        ),
        P(
          { class: 'text-center px-3 mb-0' },
          SPAN({ text: 'Common troubleshooting topics: eCommerce, Blogging to payment' }),
        ),
      ),
      DIV(
        { class: 'help-center-popular-articles py-5' },
        DIV(
          { class: 'container-xl' },
          H4({ class: 'text-center mt-2 mb-4' }, SPAN({ text: 'Popular Articles' })),
          DIV(
            { class: 'row' },
            DIV(
              { class: 'col-lg-10 mx-auto' },
              DIV(
                { class: 'row mb-3' },
                DIV(
                  { class: 'col-md-4 mb-md-0 mb-4' },
                  DIV(
                    { class: 'card border shadow-none' },
                    DIV(
                      { class: 'card-body text-center' },
                      IMG({
                        class: 'mb-3',
                        src: '/img/icons/unicons/rocket.png',
                        height: '60',
                        alt: 'Help center articles',
                      }),
                      H5({}, SPAN({ text: 'Getting Started' })),
                      P({}, SPAN({ text: "Whether you're new or you're a power user, this article will…" })),
                      A(
                        { class: 'btn btn-label-primary', href: './pages-help-center-article.html' },
                        SPAN({ text: 'Read More' }),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 mb-md-0 mb-4' },
                  DIV(
                    { class: 'card border shadow-none' },
                    DIV(
                      { class: 'card-body text-center' },
                      IMG({
                        class: 'mb-3',
                        src: '/img/icons/unicons/cube-secondary.png',
                        height: '60',
                        alt: 'Help center articles',
                      }),
                      H5({}, SPAN({ text: 'First Steps' })),
                      P({}, SPAN({ text: 'Are you a new customer wondering how to get started?' })),
                      A(
                        { class: 'btn btn-label-primary', href: './pages-help-center-article.html' },
                        SPAN({ text: 'Read More' }),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4' },
                  DIV(
                    { class: 'card border shadow-none' },
                    DIV(
                      { class: 'card-body text-center' },
                      IMG({
                        class: 'mb-3',
                        src: '/img/icons/unicons/desktop.png',
                        height: '60',
                        alt: 'Help center articles',
                      }),
                      H5({}, SPAN({ text: 'Add External Content' })),
                      P({}, SPAN({ text: 'This article will show you how to expand the functionality of...' })),
                      A(
                        { class: 'btn btn-label-primary', href: './pages-help-center-article.html' },
                        SPAN({ text: 'Read More' }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'help-center-knowledge-base py-5' },
        DIV(
          { class: 'container-xl' },
          H4({ class: 'text-center mb-4' }, SPAN({ text: 'Knowledge Base' })),
          DIV(
            { class: 'row' },
            DIV(
              { class: 'col-lg-10 mx-auto' },
              DIV(
                { class: 'row' },
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN({ class: 'badge bg-label-success p-2 rounded me-2' }, I({ class: 'bx bx-cart bx-sm' })),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'eCommerce' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Pricing Wizard' })),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Square Sync' })),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '56 articles' })),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN({ class: 'badge bg-label-info p-2 rounded me-2' }, I({ class: 'bx bx-laptop bx-sm' })),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'Building Your Website' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'First Steps' })),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Add Images' })),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '111 articles' })),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN({ class: 'badge bg-label-primary p-2 rounded me-2' }, I({ class: 'bx bx-user bx-sm' })),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'Your Account' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Insights' })),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Manage Your Orders' })),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '29 articles' })),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN({ class: 'badge bg-label-danger p-2 rounded me-2' }, I({ class: 'bx bx-world bx-sm' })),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'Domains and Email' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Access to Admin Account' })),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A(
                            { href: './pages-help-center-categories.html' },
                            SPAN({ text: 'Send Email From an Alias' }),
                          ),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '22 articles' })),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN(
                          { class: 'badge bg-label-warning p-2 rounded me-2' },
                          I({ class: 'bx bx-mobile-alt bx-sm' }),
                        ),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'Mobile Apps' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A(
                            { href: './pages-help-center-categories.html' },
                            SPAN({ text: 'Getting Started with the App' }),
                          ),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A(
                            { href: './pages-help-center-categories.html' },
                            SPAN({ text: 'Getting Started with Android' }),
                          ),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '24 articles' })),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 col-sm-6 mb-4' },
                  DIV(
                    { class: 'card' },
                    DIV(
                      { class: 'card-body' },
                      DIV(
                        { class: 'd-flex align-items-center mb-2' },
                        SPAN(
                          { class: 'badge bg-label-secondary p-2 rounded me-2' },
                          I({ class: 'bx bx-envelope bx-sm' }),
                        ),
                        H5({ class: 'fw-semibold mt-3 ms-1' }, SPAN({ text: 'Email Marketing' })),
                      ),
                      UL(
                        {},
                        LI(
                          { class: 'text-primary py-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'Getting Started' })),
                        ),
                        LI(
                          { class: 'text-primary pb-1' },
                          A({ href: './pages-help-center-categories.html' }, SPAN({ text: 'How does this work?' })),
                        ),
                      ),
                      P(
                        { class: 'mb-0 fw-semibold' },
                        A({ href: 'javascript:void(0);' }, SPAN({ text: '27 articles' })),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'help-center-keep-learning py-5' },
        DIV(
          { class: 'container-xl' },
          H4({ class: 'text-center mb-5' }, SPAN({ text: 'Keep Learning' })),
          DIV(
            { class: 'row' },
            DIV(
              { class: 'col-lg-10 mx-auto' },
              DIV(
                { class: 'row' },
                DIV(
                  { class: 'col-md-4 mb-md-0 mb-4 text-center' },
                  IMG({
                    src: '/img/icons/unicons/laptop.png',
                    class: 'mb-2',
                    height: '50',
                    alt: 'Help center blog',
                  }),
                  H5({ class: 'my-3' }, SPAN({ text: 'Blogging' })),
                  P(
                    { class: 'mb-1' },
                    SPAN({ text: 'Expert tips and tools to improve your website or online store using our blog.' }),
                  ),
                  A(
                    {
                      href: './pages-help-center-categories.html',
                      class: 'd-flex align-items-center justify-content-center mt-2',
                    },
                    SPAN({ class: 'align-middle me-1' }, SPAN({ text: 'Learn More' })),
                    I({ class: 'bx bx-right-arrow-circle scaleX-n1-rtl' }),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 mb-md-0 mb-4 text-center' },
                  IMG({
                    src: '/img/icons/unicons/bulb.png',
                    class: 'mb-2',
                    height: '50',
                    alt: 'Help center inspiration',
                  }),
                  H5({ class: 'my-3' }, SPAN({ text: 'Inspiration Center' })),
                  P(
                    { class: 'mb-1' },
                    SPAN({ text: 'Inspiration from experts to help you start and grow your big ideas.' }),
                  ),
                  A(
                    {
                      href: './pages-help-center-categories.html',
                      class: 'd-flex align-items-center justify-content-center mt-2',
                    },
                    SPAN({ class: 'align-middle me-1' }, SPAN({ text: 'Learn More' })),
                    I({ class: 'bx bx-right-arrow-circle scaleX-n1-rtl' }),
                  ),
                ),
                DIV(
                  { class: 'col-md-4 text-center' },
                  IMG({
                    src: '/img/icons/unicons/community.png',
                    class: 'mb-2',
                    height: '50',
                    alt: 'Help center inspiration',
                  }),
                  H5({ class: 'my-3' }, SPAN({ text: 'Community' })),
                  P(
                    { class: 'mb-1' },
                    SPAN({ text: 'A group of people living in the same place or having a particular.' }),
                  ),
                  A(
                    {
                      href: './pages-help-center-categories.html',
                      class: 'd-flex align-items-center justify-content-center mt-2',
                    },
                    SPAN({ class: 'align-middle me-1' }, SPAN({ text: 'Learn More' })),
                    I({ class: 'bx bx-right-arrow-circle scaleX-n1-rtl' }),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'help-center-contact-us help-center-bg-alt' },
        DIV(
          { class: 'container-xl' },
          DIV(
            { class: 'row justify-content-center py-5 my-3' },
            DIV(
              { class: 'col-md-8 col-lg-6 text-center' },
              H4({}, SPAN({ text: 'Still need help?' })),
              P(
                { class: 'mb-4' },
                SPAN({ text: 'Our specialists are always happy to help. Contact' }),
                ['br'],
                SPAN({ text: 'us during standard business hours or email us 24/7' }),
                ['br'],
                SPAN({ text: "and we'll get back to you." }),
              ),
              DIV(
                { class: 'd-flex justify-content-center flex-wrap gap-4' },
                A(
                  { href: 'javascript:void(0);', class: 'btn btn-label-primary' },
                  SPAN({ text: 'Visit our community' }),
                ),
                A({ href: 'javascript:void(0);', class: 'btn btn-label-primary' }, SPAN({ text: 'Contact us' })),
              ),
            ),
          ),
        ),
      ),
    ),
  ],
  style: `
    .help-center-header{background:url("/img/pages/header.png");background-size:cover;background-repeat:no-repeat;min-height:300px !important}.help-center-header .input-wrapper{position:relative;width:100%;max-width:55%}@media(max-width: 575.98px){.help-center-header .input-wrapper{max-width:70%}}.light-style .help-center-bg-alt{background-color:#f0f2f4}.dark-style .help-center-bg-alt{background-color:#313249}
  `,
});
