({
  config: { disableCardStyle: true },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: () => [
    DIV(
      {},
      MARQUEE(
        { class: 'top-bar', direction: 'left' },
        UL(
          { class: 'list-inline mb-0 fs-13 fw-semibold' },
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'BTC $ 55.88' }),
            SPAN({ class: 'text-success fw-bold' }, SPAN({ text: '+$ 4.62 ( +9.01% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'LTC $ 120.03' }),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '-$ 14.07 ( -10.49% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'ETH $ 63.58' }),
            SPAN({ class: 'text-success fw-bold' }, SPAN({ text: '+$ 5.17 ( +8.84% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'CORAVE $ 14.75' }),
            SPAN({ class: 'text-success fw-bold' }, SPAN({ text: '+$ 1.05 ( +7.66% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'AUR $ 139.72' }),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '-$ 11.41 ( -7.55% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'XMR $ 326.23' }),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '-$ 21.61 ( -6.21% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'DCN $ 37,471.47' }),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '+$ 492.60 ( +1.33% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'XRP' }),
            SPAN({}, SPAN({ text: '$ 0.39' })),
            SPAN({ class: 'text-success' }, SPAN({ text: '+$ 5.62 ( +9.01% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'JET' }),
            SPAN({}, SPAN({ text: '$ 148.67' })),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '-$ 5.58 ( -3.62% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'AVT' }),
            SPAN({}, SPAN({ text: '$ 427.37' })),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '-$ 15.98 ( -3.60% )' })),
          ),
          LI(
            { class: 'list-inline-item px-2 mb-0' },
            SPAN({ text: 'BCN $ 1,647.87' }),
            SPAN({ class: 'text-danger fw-bold' }, SPAN({ text: '+$ 14.51 ( +0.89% )' })),
          ),
        ),
      ),
      NAV(
        { class: 'navbar navbar-expand-lg fixed-top sticky', id: 'navbar' },
        DIV(
          { class: 'container-fluid custom-container' },
          A(
            {
              class: 'navbar-brand text-dark fw-bold me-auto',
              href: 'https://preview.pichforest.com/cryptorex/layouts/index.html',
            },
            SPAN({ text: 'Cryptorex' }),
          ),
          DIV(
            {},
            BUTTON(
              {
                class: 'navbar-toggler me-3',
                type: 'button',
                'data-bs-toggle': 'collapse',
                'data-bs-target': '#navbarCollapse',
                'aria-controls': 'navbarCollapse',
                'aria-label': 'Toggle navigation',
              },
              I({ class: 'mdi mdi-menu' }),
            ),
          ),
          DIV(
            { class: 'collapse navbar-collapse', id: 'navbarCollapse' },
            UL(
              { class: 'navbar-nav mx-auto navbar-center' },
              LI(
                { class: 'nav-item dropdown dropdown-hover' },
                A(
                  {
                    class: 'nav-link',
                    href: 'javascript:void(0)',
                    id: 'productdropdown',
                    'data-bs-toggle': 'dropdown',
                    'aria-expanded': 'false',
                  },
                  SPAN({ text: 'Home' }),
                  DIV({ class: 'arrow-down' }),
                ),
                UL(
                  { class: 'dropdown-menu dropdown-menu-center', 'aria-labelledby': 'productdropdown' },
                  LI(
                    {},
                    A(
                      { class: 'dropdown-item', href: 'https://preview.pichforest.com/cryptorex/layouts/index.html' },
                      SPAN({ text: 'Index' }),
                    ),
                  ),
                  LI(
                    {},
                    A(
                      { class: 'dropdown-item', href: 'https://preview.pichforest.com/cryptorex/layouts/index-2.html' },
                      SPAN({ text: 'Index 2' }),
                    ),
                  ),
                  LI(
                    {},
                    A(
                      { class: 'dropdown-item', href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html' },
                      SPAN({ text: 'Index 3' }),
                    ),
                  ),
                  LI(
                    {},
                    A(
                      {
                        class: 'dropdown-item',
                        href: 'https://preview.pichforest.com/cryptorex/layouts/ico-index.html',
                      },
                      SPAN({ text: 'Ico Layout' }),
                    ),
                  ),
                  LI(
                    {},
                    A(
                      {
                        class: 'dropdown-item',
                        href: 'https://preview.pichforest.com/cryptorex/layouts/payment-index.html',
                      },
                      SPAN({ text: 'Payment Layout' }),
                    ),
                  ),
                  LI(
                    {},
                    A(
                      {
                        class: 'dropdown-item',
                        href: 'https://preview.pichforest.com/cryptorex/layouts/wallets-index.html',
                      },
                      SPAN({ text: 'Wallets' }),
                    ),
                  ),
                ),
              ),
              LI(
                { class: 'nav-item' },
                A(
                  { class: 'nav-link', href: 'https://preview.pichforest.com/cryptorex/layouts/market-data.html' },
                  SPAN({ text: 'Market' }),
                ),
              ),
              LI(
                { class: 'nav-item' },
                A(
                  { class: 'nav-link', href: 'https://preview.pichforest.com/cryptorex/layouts/token-sale.html' },
                  SPAN({ text: 'Token' }),
                ),
              ),
              LI(
                { class: 'nav-item' },
                A(
                  { class: 'nav-link', href: 'https://preview.pichforest.com/cryptorex/layouts/wallets.html' },
                  SPAN({ text: 'Wallets' }),
                ),
              ),
              LI(
                { class: 'nav-item dropdown dropdown-hover' },
                A(
                  { class: 'nav-link', href: 'javascript:void(0)', id: 'pagesdoropdown', 'data-bs-toggle': 'dropdown' },
                  SPAN({ text: 'Pages' }),
                  DIV({ class: 'arrow-down' }),
                ),
                DIV(
                  { class: 'dropdown-menu dropdown-menu-lg dropdown-menu-center', 'aria-labelledby': 'pagesdoropdown' },
                  DIV(
                    { class: 'row' },
                    DIV(
                      { class: 'col-lg-3' },
                      H6({ class: 'dropdown-header' }, SPAN({ text: 'Product' })),
                      UL(
                        { class: 'list-unstyled mb-0' },
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/market-details.html',
                            },
                            SPAN({ text: 'Market History' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/roadmap.html',
                            },
                            SPAN({ text: 'Roadmap' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/buy-sell.html',
                            },
                            SPAN({ text: 'Buy & Sell' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/whitepaper.html',
                            },
                            SPAN({ text: 'Whitepaper' }),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      { class: 'col-lg-3' },
                      H6({ class: 'dropdown-header' }, SPAN({ text: 'Product' })),
                      UL(
                        { class: 'list-unstyled mb-0' },
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/about.html',
                            },
                            SPAN({ text: 'About' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/Service.html',
                            },
                            SPAN({ text: 'Service' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/pricing.html',
                            },
                            SPAN({ text: 'Pricing' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/faqs.html',
                            },
                            SPAN({ text: "FAQ'S" }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/privacy-policy.html',
                            },
                            SPAN({ text: 'Terms' }),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      { class: 'col-lg-3' },
                      H6({ class: 'dropdown-header' }, SPAN({ text: 'Product' })),
                      UL(
                        { class: 'list-unstyled mb-0' },
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/blog.html',
                            },
                            SPAN({ text: 'Blog' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/blog-grid.html',
                            },
                            SPAN({ text: 'Blog Grid' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/blog-details.html',
                            },
                            SPAN({ text: 'Blog Details' }),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      { class: 'col-lg-3' },
                      H6({ class: 'dropdown-header' }, SPAN({ text: 'Auth' })),
                      UL(
                        { class: 'list-unstyled mb-2' },
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/sign-up.html',
                            },
                            SPAN({ text: 'Sign Up' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/sign-in.html',
                            },
                            SPAN({ text: 'Sign In' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/forgot-password.html',
                            },
                            SPAN({ text: 'Forgot Password' }),
                          ),
                        ),
                        LI(
                          {},
                          A(
                            {
                              class: 'dropdown-item',
                              href: 'https://preview.pichforest.com/cryptorex/layouts/verification-sms.html',
                            },
                            SPAN({ text: 'Verification' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              LI(
                { class: 'nav-item' },
                A(
                  { href: 'https://preview.pichforest.com/cryptorex/layouts/contact.html', class: 'nav-link' },
                  SPAN({ text: 'Contact' }),
                ),
              ),
            ),
          ),
          DIV(
            { class: 'navbar-header' },
            DIV(
              { class: 'header-item' },
              A(
                {
                  href: 'https://preview.pichforest.com/cryptorex/layouts/sign-in.html',
                  class: 'btn btn-primary btn-sm',
                },
                I({ class: 'uil uil-lock-alt' }),
                SPAN({ class: 'd-none d-sm-inline-block' }, SPAN({ text: 'Login' })),
              ),
            ),
            DIV(
              { class: 'dropdown language-switch header-item' },
              BUTTON(
                {
                  type: 'button',
                  class: 'btn',
                  'data-bs-toggle': 'dropdown',
                  'aria-haspopup': 'true',
                  'aria-expanded': 'false',
                },
                IMG({
                  id: 'header-lang-img',
                  src: './theme/web/us.jpg',
                  alt: 'Header Language',
                  height: '16',
                }),
              ),
              UL(
                { class: 'dropdown-menu dropdown-menu-end' },
                LI(
                  {},
                  A(
                    { href: 'javascript:void(0);', class: 'dropdown-item notify-item language', 'data-lang': 'eng' },
                    IMG({
                      src: './theme/web/us.jpg',
                      alt: 'user-image',
                      class: 'me-1',
                      height: '12',
                    }),
                    SPAN({ class: 'align-middle' }, SPAN({ text: 'English' })),
                  ),
                ),
                LI(
                  {},
                  A(
                    { href: 'javascript:void(0);', class: 'dropdown-item notify-item language', 'data-lang': 'sp' },
                    IMG({
                      src: './theme/web/spain.jpg',
                      alt: 'user-image',
                      class: 'me-1',
                      height: '12',
                    }),
                    SPAN({ class: 'align-middle' }, SPAN({ text: 'Spanish' })),
                  ),
                ),
                LI(
                  {},
                  A(
                    { href: 'javascript:void(0);', class: 'dropdown-item notify-item language', 'data-lang': 'gr' },
                    IMG({
                      src: './theme/web/germany.jpg',
                      alt: 'user-image',
                      class: 'me-1',
                      height: '12',
                    }),
                    SPAN({ class: 'align-middle' }, SPAN({ text: 'German' })),
                  ),
                ),
                LI(
                  {},
                  A(
                    { href: 'javascript:void(0);', class: 'dropdown-item notify-item language', 'data-lang': 'it' },
                    IMG({
                      src: './theme/web/italy.jpg',
                      alt: 'user-image',
                      class: 'me-1',
                      height: '12',
                    }),
                    SPAN({ class: 'align-middle' }, SPAN({ text: 'Italian' })),
                  ),
                ),
                LI(
                  {},
                  A(
                    { href: 'javascript:void(0);', class: 'dropdown-item notify-item language', 'data-lang': 'ru' },
                    IMG({
                      src: './theme/web/russia.jpg',
                      alt: 'user-image',
                      class: 'me-1',
                      height: '12',
                    }),
                    SPAN({ class: 'align-middle' }, SPAN({ text: 'Russian' })),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'main-content' },
        SECTION(
          { class: 'bg-home3' },
          DIV({ class: 'bg-overlay' }),
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row justify-content-center' },
              DIV(
                { class: 'col-lg-8' },
                DIV(
                  { class: 'text-center text-white' },
                  H1({ class: 'mb-4' }, SPAN({ text: 'The Easiest Way To Buy & Sell Cryptocurrency' })),
                  P(
                    { class: 'lead para-desc mx-auto text-white-50 mt-3' },
                    SPAN({
                      text: 'Explore and learn more about everything from learning and global payments to scaling your team.',
                    }),
                  ),
                  DIV(
                    { class: 'mt-4 pt-2' },
                    A(
                      {
                        href: `#${JSON.stringify({ form: `core/web~register` })}`,
                        class: 'btn btn-success btn-hover',
                      },
                      SPAN({ text: 'Buy & Sell' }),
                      I({ class: 'mdi mdi-arrow-right ms-1' }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'position-relative', style: 'z-index: 1' },
          DIV(
            { class: 'shape' },
            SVG(
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 250' },
              PATH({
                fill: '#FFFFFF',
                'fill-opacity': '1',
                d: 'M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
              }),
            ),
          ),
        ),
        DIV(
          { class: 'buy-sell-list' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-12' },
                DIV(
                  { class: 'swiper buysellSlider swiper-initialized swiper-horizontal swiper-pointer-events' },
                  DIV(
                    {
                      class: 'swiper-wrapper',
                      id: 'swiper-wrapper-5ec21572b106fe30c',
                      'aria-live': 'off',
                      style: 'transition-duration: 0ms; transform: translate3d(-1390px, 0px, 0px);',
                    },
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '1 / 4',
                        'data-swiper-slide-index': '0',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-info text-info fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-eth' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ethereum (ETH)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Ethereum!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '2 / 4',
                        'data-swiper-slide-index': '1',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-warning text-warning fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-btc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Bitcoin (BTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Bitcoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '3 / 4',
                        'data-swiper-slide-index': '2',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-success text-success fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-ltc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Litecoin (LTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Litecoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '4 / 4',
                        'data-swiper-slide-index': '3',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-orange text-orange fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-xrp' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ripple  (XRP)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win fre e Ripple!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-prev',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '1 / 4',
                        'data-swiper-slide-index': '0',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-info text-info fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-eth' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ethereum (ETH)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Ethereum!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-active',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '2 / 4',
                        'data-swiper-slide-index': '1',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-warning text-warning fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-btc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Bitcoin (BTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Bitcoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-next',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '3 / 4',
                        'data-swiper-slide-index': '2',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-success text-success fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-ltc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Litecoin (LTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Litecoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '4 / 4',
                        'data-swiper-slide-index': '3',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-orange text-orange fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-xrp' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ripple  (XRP)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win fre e Ripple!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '1 / 4',
                        'data-swiper-slide-index': '0',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-info text-info fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-eth' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ethereum (ETH)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Ethereum!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '2 / 4',
                        'data-swiper-slide-index': '1',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-warning text-warning fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-btc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Bitcoin (BTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Bitcoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '3 / 4',
                        'data-swiper-slide-index': '2',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-success text-success fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-ltc' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Litecoin (LTC)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win free Litecoin!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                    DIV(
                      {
                        class: 'swiper-slide swiper-slide-duplicate',
                        style: 'width: 238px; margin-right: 40px;',
                        role: 'group',
                        'aria-label': '4 / 4',
                        'data-swiper-slide-index': '3',
                      },
                      DIV(
                        { class: 'card rounded-4 shadow-lg border-0' },
                        DIV(
                          { class: 'card-body p-4' },
                          DIV(
                            {
                              class:
                                'avatar-sm d-flex justify-content-center align-items-center bg-soft-orange text-orange fs-20 rounded-circle',
                            },
                            I({ class: 'cf cf-xrp' }),
                          ),
                          DIV(
                            { class: 'mt-4' },
                            H6({ class: 'fw-semibold mb-1' }, SPAN({ text: 'Ripple  (XRP)' })),
                            P({ class: 'text-muted mb-2' }, SPAN({ text: 'Deposite now and win fre e Ripple!' })),
                            DIV(
                              {},
                              A(
                                { href: 'javascript:void(0)', class: 'form-text text-primary fw-semibold' },
                                SPAN({ text: 'Buy Now' }),
                                I({ class: 'uil uil-angle-right-b ms-1' }),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  SPAN({ class: 'swiper-notification', 'aria-live': 'assertive', 'aria-atomic': 'true' }),
                  SPAN({ class: 'swiper-notification', 'aria-live': 'assertive', 'aria-atomic': 'true' }),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'section' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row justify-content-center' },
              DIV(
                { class: 'col-lg-7' },
                DIV(
                  { class: 'section-title text-center mb-5' },
                  H4({ class: 'title' }, SPAN({ text: 'Become a Crypto Trader in Seconds' })),
                  P(
                    { class: 'desc-content text-muted' },
                    SPAN({
                      text: 'Explore and learn more about everything from machine learning and global payments to scaling your team.',
                    }),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-4' },
                DIV(
                  { class: 'card bg-gradient-light border-0 mt-4' },
                  DIV(
                    { class: 'card-body text-center' },
                    DIV(
                      { class: 'my-4' },
                      IMG({
                        src: './theme/web/features-04.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'mt-4 pt-2' },
                      H5({}, SPAN({ text: 'Buy & Sell Crypto' })),
                      P(
                        { class: 'text-muted' },
                        SPAN({ text: 'Buy or sell Bitcoin, Ethereum other crypto assets with your credit.' }),
                      ),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-4' },
                DIV(
                  { class: 'card bg-gradient-light border-0 mt-4' },
                  DIV(
                    { class: 'card-body text-center' },
                    DIV(
                      { class: 'my-4' },
                      IMG({
                        src: './theme/web/features-05.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'mt-4 pt-2' },
                      H5({}, SPAN({ text: 'Trade Assets' })),
                      P(
                        { class: 'text-muted' },
                        SPAN({ text: 'Some quick example text to build on the card title and make up content.' }),
                      ),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-4' },
                DIV(
                  { class: 'card bg-gradient-light border-0 mt-4' },
                  DIV(
                    { class: 'card-body text-center' },
                    DIV(
                      { class: 'my-4' },
                      IMG({
                        src: './theme/web/features-06.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'mt-4 pt-2' },
                      H5({}, SPAN({ text: 'Learn Crypto' })),
                      P(
                        { class: 'text-muted' },
                        SPAN({ text: 'Never miss an opportunity for a little competition. Join our latest earn.' }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'section bg-gradient-light' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row align-items-center' },
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'section-title me-5' },
                  H4({ class: 'title mb-3' }, SPAN({ text: 'Bitcoin is an Innovative & a New Kind of Money' })),
                  P(
                    { class: 'fs-19 text-muted mb-4' },
                    SPAN({
                      text: "What's the secret to Cryptorex's success? The answer is obvious: Our people. We are proud to have one of the most talented, hardworking and passionate teams.",
                    }),
                  ),
                  DIV(
                    { class: 'about-list-box d-flex align-items-center mt-3' },
                    DIV(
                      { class: 'flex-shrink-0 me-3' },
                      DIV({ class: 'check-list text-white rounded-circle' }, I({ class: 'uil uil-angle-right-b' })),
                    ),
                    P({ class: 'mb-0' }, SPAN({ text: 'Fast peer-to-peer transactions' })),
                  ),
                  DIV(
                    { class: 'about-list-box d-flex align-items-center mt-3' },
                    DIV(
                      { class: 'flex-shrink-0 me-3' },
                      DIV({ class: 'check-list text-white rounded-circle' }, I({ class: 'uil uil-angle-right-b' })),
                    ),
                    P({ class: 'mb-0' }, SPAN({ text: 'Worldwide payments' })),
                  ),
                  DIV(
                    { class: 'about-list-box d-flex align-items-center mt-3' },
                    DIV(
                      { class: 'flex-shrink-0 me-3' },
                      DIV({ class: 'check-list text-white rounded-circle' }, I({ class: 'uil uil-angle-right-b' })),
                    ),
                    P({ class: 'mb-0' }, SPAN({ text: 'Low processing fees' })),
                  ),
                  DIV(
                    { class: 'mt-4 pt-2' },
                    A(
                      { href: 'javascript:void(0)', class: 'btn btn-primary btn-hover' },
                      SPAN({ text: 'Read More' }),
                      I({ class: 'uil uil-arrow-right ms-1' }),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'buy-about-img rounded-4 mt-4 mt-lg-0' },
                  IMG({
                    src: './theme/web/img-03.jpg',
                    alt: '',
                    class: 'img-fluid rounded',
                  }),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'section' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row justify-content-center' },
              DIV(
                { class: 'col-lg-7' },
                DIV(
                  { class: 'section-title text-center mb-5 pb-2' },
                  H4({ class: 'title' }, SPAN({ text: 'Top Cryptocurrency' })),
                  P(
                    { class: 'desc-content text-muted' },
                    SPAN({
                      text: 'Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.',
                    }),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-12' },
                DIV(
                  { class: 'table-responsive' },
                  TABLE(
                    { class: 'table table-hover align-middle' },
                    THEAD(
                      {},
                      TR(
                        { class: 'text-muted' },
                        TH({ scope: 'col' }, SPAN({ text: 'Symbol' })),
                        TH({ scope: 'col' }, SPAN({ text: 'Coin Name' })),
                        TH({ scope: 'col' }, SPAN({ text: 'Price($)' })),
                        TH({ scope: 'col' }, SPAN({ text: 'Trand(%)' })),
                        TH({ scope: 'col' }, SPAN({ text: 'Chart' })),
                        TH({ scope: 'col' }, SPAN({ text: 'Action' })),
                      ),
                    ),
                    TBODY(
                      {},
                      TR(
                        { class: 'table-item box-shadow-md' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Bitcoin' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(BTC)' })),
                          ),
                        ),
                        TD(
                          {},
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-warning text-warning justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-btc fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$42542.25' })),
                        TD({ class: 'text-success' }, SPAN({ text: '02.25%' }), I({ class: 'mdi mdi-arrow-up' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart1', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexcharts6vh9iq7g',
                                class: 'apexcharts-canvas apexcharts6vh9iq7g apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3176',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3178',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3177' },
                                    CLIPPATH(
                                      { id: 'gridRectMask6vh9iq7g' },
                                      RECT({
                                        id: 'SvgjsRect3183',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMask6vh9iq7g' }),
                                    CLIPPATH({ id: 'nonForecastMask6vh9iq7g' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMask6vh9iq7g' },
                                      RECT({
                                        id: 'SvgjsRect3184',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3189', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3190',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3191',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3192',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3193',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3182',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3196', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3197',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3206', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3207',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3209',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3210',
                                        x1: '0',
                                        y1: '8',
                                        x2: '120',
                                        y2: '8',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3211',
                                        x1: '0',
                                        y1: '16',
                                        x2: '120',
                                        y2: '16',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3212',
                                        x1: '0',
                                        y1: '24',
                                        x2: '120',
                                        y2: '24',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3213',
                                        x1: '0',
                                        y1: '32',
                                        x2: '120',
                                        y2: '32',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3214',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3208',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3216',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3215',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3185', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3186',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3194',
                                        d: 'M 0 40L 0 32C 7 32 13 35.2 20 35.2C 27 35.2 33 18 40 18C 47 18 53 30 60 30C 67 30 73 16 80 16C 87 16 93 25.6 100 25.6C 107 25.6 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        fill: 'url(#SvgjsLinearGradient3189)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMask6vh9iq7g)',
                                        pathTo:
                                          'M 0 40L 0 32C 7 32 13 35.2 20 35.2C 27 35.2 33 18 40 18C 47 18 53 30 60 30C 67 30 73 16 80 16C 87 16 93 25.6 100 25.6C 107 25.6 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3195',
                                        d: 'M 0 32C 7 32 13 35.2 20 35.2C 27 35.2 33 18 40 18C 47 18 53 30 60 30C 67 30 73 16 80 16C 87 16 93 25.6 100 25.6C 107 25.6 113 8 120 8',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#00b074',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMask6vh9iq7g)',
                                        pathTo:
                                          'M 0 32C 7 32 13 35.2 20 35.2C 27 35.2 33 18 40 18C 47 18 53 30 60 30C 67 30 73 16 80 16C 87 16 93 25.6 100 25.6C 107 25.6 113 8 120 8',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3187',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3222',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wskeeup9d no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#00b074',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3188', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3217',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3218',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3219', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3220', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3221', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3181',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3205',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3179', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(0, 176, 116);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow-md' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Ethereum' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(ETH)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-info text-info justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-eth fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$1,851.35' })),
                        TD({ class: 'text-danger' }, SPAN({ text: '01.30%' }), I({ class: 'mdi mdi-arrow-down' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart2', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartskrab92d5',
                                class: 'apexcharts-canvas apexchartskrab92d5 apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3224',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3226',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3225' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskkrab92d5' },
                                      RECT({
                                        id: 'SvgjsRect3231',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskkrab92d5' }),
                                    CLIPPATH({ id: 'nonForecastMaskkrab92d5' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskkrab92d5' },
                                      RECT({
                                        id: 'SvgjsRect3232',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3237', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3238',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3239',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3240',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3241',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3230',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3244', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3245',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3254', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3255',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3257',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3258',
                                        x1: '0',
                                        y1: '8',
                                        x2: '120',
                                        y2: '8',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3259',
                                        x1: '0',
                                        y1: '16',
                                        x2: '120',
                                        y2: '16',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3260',
                                        x1: '0',
                                        y1: '24',
                                        x2: '120',
                                        y2: '24',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3261',
                                        x1: '0',
                                        y1: '32',
                                        x2: '120',
                                        y2: '32',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3262',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3256',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3264',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3263',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3233', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3234',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3242',
                                        d: 'M 0 40L 0 26C 7 26 13 35.2 20 35.2C 27 35.2 33 25.6 40 25.6C 47 25.6 53 6.399999999999999 60 6.399999999999999C 67 6.399999999999999 73 18.4 80 18.4C 87 18.4 93 15.600000000000001 100 15.600000000000001C 107 15.600000000000001 113 23.6 120 23.6C 120 23.6 120 23.6 120 40M 120 23.6z',
                                        fill: 'url(#SvgjsLinearGradient3237)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskkrab92d5)',
                                        pathTo:
                                          'M 0 40L 0 26C 7 26 13 35.2 20 35.2C 27 35.2 33 25.6 40 25.6C 47 25.6 53 6.399999999999999 60 6.399999999999999C 67 6.399999999999999 73 18.4 80 18.4C 87 18.4 93 15.600000000000001 100 15.600000000000001C 107 15.600000000000001 113 23.6 120 23.6C 120 23.6 120 23.6 120 40M 120 23.6z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3243',
                                        d: 'M 0 26C 7 26 13 35.2 20 35.2C 27 35.2 33 25.6 40 25.6C 47 25.6 53 6.399999999999999 60 6.399999999999999C 67 6.399999999999999 73 18.4 80 18.4C 87 18.4 93 15.600000000000001 100 15.600000000000001C 107 15.600000000000001 113 23.6 120 23.6',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#da3746',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskkrab92d5)',
                                        pathTo:
                                          'M 0 26C 7 26 13 35.2 20 35.2C 27 35.2 33 25.6 40 25.6C 47 25.6 53 6.399999999999999 60 6.399999999999999C 67 6.399999999999999 73 18.4 80 18.4C 87 18.4 93 15.600000000000001 100 15.600000000000001C 107 15.600000000000001 113 23.6 120 23.6',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3235',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3270',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker w791wwxahi no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#da3746',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3236', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3265',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3266',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3267', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3268', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3269', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3229',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3253',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3227', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(218, 55, 70);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow-md' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Litecoin' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(LTC)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-success text-success justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-ltc fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$875.10' })),
                        TD({ class: 'text-success' }, SPAN({ text: '01.65%' }), I({ class: 'mdi mdi-arrow-up' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart3', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartsbuiak4w6',
                                class: 'apexcharts-canvas apexchartsbuiak4w6 apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3272',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3274',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3273' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskbuiak4w6' },
                                      RECT({
                                        id: 'SvgjsRect3279',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskbuiak4w6' }),
                                    CLIPPATH({ id: 'nonForecastMaskbuiak4w6' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskbuiak4w6' },
                                      RECT({
                                        id: 'SvgjsRect3280',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3285', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3286',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3287',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3288',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3289',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3278',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3292', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3293',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3302', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3303',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3305',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3306',
                                        x1: '0',
                                        y1: '10',
                                        x2: '120',
                                        y2: '10',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3307',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3308',
                                        x1: '0',
                                        y1: '30',
                                        x2: '120',
                                        y2: '30',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3309',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3304',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3311',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3310',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3281', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3282',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3290',
                                        d: 'M 0 40L 0 34C 7 34 13 22 20 22C 27 22 33 29 40 29C 47 29 53 6.5 60 6.5C 67 6.5 73 19.5 80 19.5C 87 19.5 93 23.5 100 23.5C 107 23.5 113 14.5 120 14.5C 120 14.5 120 14.5 120 40M 120 14.5z',
                                        fill: 'url(#SvgjsLinearGradient3285)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskbuiak4w6)',
                                        pathTo:
                                          'M 0 40L 0 34C 7 34 13 22 20 22C 27 22 33 29 40 29C 47 29 53 6.5 60 6.5C 67 6.5 73 19.5 80 19.5C 87 19.5 93 23.5 100 23.5C 107 23.5 113 14.5 120 14.5C 120 14.5 120 14.5 120 40M 120 14.5z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3291',
                                        d: 'M 0 34C 7 34 13 22 20 22C 27 22 33 29 40 29C 47 29 53 6.5 60 6.5C 67 6.5 73 19.5 80 19.5C 87 19.5 93 23.5 100 23.5C 107 23.5 113 14.5 120 14.5',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#00b074',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskbuiak4w6)',
                                        pathTo:
                                          'M 0 34C 7 34 13 22 20 22C 27 22 33 29 40 29C 47 29 53 6.5 60 6.5C 67 6.5 73 19.5 80 19.5C 87 19.5 93 23.5 100 23.5C 107 23.5 113 14.5 120 14.5',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3283',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3317',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wsn04xcaj no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#00b074',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3284', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3312',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3313',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3314', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3315', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3316', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3277',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3301',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3275', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(0, 176, 116);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Monero' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(XMR)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-blue text-blue justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-xmr fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$1240.21' })),
                        TD({ class: 'text-danger' }, SPAN({ text: '02.15%' }), I({ class: 'mdi mdi-arrow-down' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart4', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartsod2cd306',
                                class: 'apexcharts-canvas apexchartsod2cd306 apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3319',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3321',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3320' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskod2cd306' },
                                      RECT({
                                        id: 'SvgjsRect3326',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskod2cd306' }),
                                    CLIPPATH({ id: 'nonForecastMaskod2cd306' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskod2cd306' },
                                      RECT({
                                        id: 'SvgjsRect3327',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3332', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3333',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3334',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3335',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3336',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3325',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3339', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3340',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3349', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3350',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3352',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3353',
                                        x1: '0',
                                        y1: '10',
                                        x2: '120',
                                        y2: '10',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3354',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3355',
                                        x1: '0',
                                        y1: '30',
                                        x2: '120',
                                        y2: '30',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3356',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3351',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3358',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3357',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3328', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3329',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3337',
                                        d: 'M 0 40L 0 30C 7 30 13 9.5 20 9.5C 27 9.5 33 32 40 32C 47 32 53 17.5 60 17.5C 67 17.5 73 23 80 23C 87 23 93 2.5 100 2.5C 107 2.5 113 21.5 120 21.5C 120 21.5 120 21.5 120 40M 120 21.5z',
                                        fill: 'url(#SvgjsLinearGradient3332)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskod2cd306)',
                                        pathTo:
                                          'M 0 40L 0 30C 7 30 13 9.5 20 9.5C 27 9.5 33 32 40 32C 47 32 53 17.5 60 17.5C 67 17.5 73 23 80 23C 87 23 93 2.5 100 2.5C 107 2.5 113 21.5 120 21.5C 120 21.5 120 21.5 120 40M 120 21.5z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3338',
                                        d: 'M 0 30C 7 30 13 9.5 20 9.5C 27 9.5 33 32 40 32C 47 32 53 17.5 60 17.5C 67 17.5 73 23 80 23C 87 23 93 2.5 100 2.5C 107 2.5 113 21.5 120 21.5',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#da3746',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskod2cd306)',
                                        pathTo:
                                          'M 0 30C 7 30 13 9.5 20 9.5C 27 9.5 33 32 40 32C 47 32 53 17.5 60 17.5C 67 17.5 73 23 80 23C 87 23 93 2.5 100 2.5C 107 2.5 113 21.5 120 21.5',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3330',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3364',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wl3tusqet no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#da3746',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3331', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3359',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3360',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3361', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3362', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3363', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3324',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3348',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3322', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(218, 55, 70);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Ripple' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(XRP)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-orange text-orange justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-xrp fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$1,315.15' })),
                        TD({ class: 'text-danger' }, SPAN({ text: '01.12%' }), I({ class: 'mdi mdi-arrow-down' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart5', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartsfw94cm9n',
                                class: 'apexcharts-canvas apexchartsfw94cm9n apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3366',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3368',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3367' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskfw94cm9n' },
                                      RECT({
                                        id: 'SvgjsRect3373',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskfw94cm9n' }),
                                    CLIPPATH({ id: 'nonForecastMaskfw94cm9n' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskfw94cm9n' },
                                      RECT({
                                        id: 'SvgjsRect3374',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3379', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3380',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3381',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3382',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3383',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3372',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3386', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3387',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3396', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3397',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3399',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3400',
                                        x1: '0',
                                        y1: '10',
                                        x2: '120',
                                        y2: '10',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3401',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3402',
                                        x1: '0',
                                        y1: '30',
                                        x2: '120',
                                        y2: '30',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3403',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3398',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3405',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3404',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3375', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3376',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3384',
                                        d: 'M 0 40L 0 30C 7 30 13 27.5 20 27.5C 27 27.5 33 3 40 3C 47 3 53 27.5 60 27.5C 67 27.5 73 37 80 37C 87 37 93 11 100 11C 107 11 113 28 120 28C 120 28 120 28 120 40M 120 28z',
                                        fill: 'url(#SvgjsLinearGradient3379)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskfw94cm9n)',
                                        pathTo:
                                          'M 0 40L 0 30C 7 30 13 27.5 20 27.5C 27 27.5 33 3 40 3C 47 3 53 27.5 60 27.5C 67 27.5 73 37 80 37C 87 37 93 11 100 11C 107 11 113 28 120 28C 120 28 120 28 120 40M 120 28z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3385',
                                        d: 'M 0 30C 7 30 13 27.5 20 27.5C 27 27.5 33 3 40 3C 47 3 53 27.5 60 27.5C 67 27.5 73 37 80 37C 87 37 93 11 100 11C 107 11 113 28 120 28',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#da3746',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskfw94cm9n)',
                                        pathTo:
                                          'M 0 30C 7 30 13 27.5 20 27.5C 27 27.5 33 3 40 3C 47 3 53 27.5 60 27.5C 67 27.5 73 37 80 37C 87 37 93 11 100 11C 107 11 113 28 120 28',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3377',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3411',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker w9ic35t85 no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#da3746',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3378', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3406',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3407',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3408', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3409', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3410', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3371',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3395',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3369', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(218, 55, 70);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Auroracoin' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(AUR)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-info text-info justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-aur fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$3,659.33' })),
                        TD({ class: 'text-success' }, SPAN({ text: '02.02%' }), I({ class: 'mdi mdi-arrow-up' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart6', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartsz1hdde1vl',
                                class: 'apexcharts-canvas apexchartsz1hdde1vl apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3413',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3415',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3414' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskz1hdde1vl' },
                                      RECT({
                                        id: 'SvgjsRect3420',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskz1hdde1vl' }),
                                    CLIPPATH({ id: 'nonForecastMaskz1hdde1vl' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskz1hdde1vl' },
                                      RECT({
                                        id: 'SvgjsRect3421',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3426', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3427',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3428',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3429',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3430',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3419',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3433', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3434',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3443', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3444',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3446',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3447',
                                        x1: '0',
                                        y1: '6.666666666666667',
                                        x2: '120',
                                        y2: '6.666666666666667',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3448',
                                        x1: '0',
                                        y1: '13.333333333333334',
                                        x2: '120',
                                        y2: '13.333333333333334',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3449',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3450',
                                        x1: '0',
                                        y1: '26.666666666666668',
                                        x2: '120',
                                        y2: '26.666666666666668',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3451',
                                        x1: '0',
                                        y1: '33.333333333333336',
                                        x2: '120',
                                        y2: '33.333333333333336',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3452',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3445',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3454',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3453',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3422', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3423',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3431',
                                        d: 'M 0 40L 0 30.666666666666668C 7 30.666666666666668 13 16 20 16C 27 16 33 32 40 32C 47 32 53 4 60 4C 67 4 73 13.333333333333336 80 13.333333333333336C 87 13.333333333333336 93 36 100 36C 107 36 113 13.333333333333336 120 13.333333333333336C 120 13.333333333333336 120 13.333333333333336 120 40M 120 13.333333333333336z',
                                        fill: 'url(#SvgjsLinearGradient3426)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskz1hdde1vl)',
                                        pathTo:
                                          'M 0 40L 0 30.666666666666668C 7 30.666666666666668 13 16 20 16C 27 16 33 32 40 32C 47 32 53 4 60 4C 67 4 73 13.333333333333336 80 13.333333333333336C 87 13.333333333333336 93 36 100 36C 107 36 113 13.333333333333336 120 13.333333333333336C 120 13.333333333333336 120 13.333333333333336 120 40M 120 13.333333333333336z',
                                        pathFrom:
                                          'M -1 53.333333333333336L -1 53.333333333333336L 20 53.333333333333336L 40 53.333333333333336L 60 53.333333333333336L 80 53.333333333333336L 100 53.333333333333336L 120 53.333333333333336',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3432',
                                        d: 'M 0 30.666666666666668C 7 30.666666666666668 13 16 20 16C 27 16 33 32 40 32C 47 32 53 4 60 4C 67 4 73 13.333333333333336 80 13.333333333333336C 87 13.333333333333336 93 36 100 36C 107 36 113 13.333333333333336 120 13.333333333333336',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#00b074',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskz1hdde1vl)',
                                        pathTo:
                                          'M 0 30.666666666666668C 7 30.666666666666668 13 16 20 16C 27 16 33 32 40 32C 47 32 53 4 60 4C 67 4 73 13.333333333333336 80 13.333333333333336C 87 13.333333333333336 93 36 100 36C 107 36 113 13.333333333333336 120 13.333333333333336',
                                        pathFrom:
                                          'M -1 53.333333333333336L -1 53.333333333333336L 20 53.333333333333336L 40 53.333333333333336L 60 53.333333333333336L 80 53.333333333333336L 100 53.333333333333336L 120 53.333333333333336',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3424',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3460',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wma0wzurif no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#00b074',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3425', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3455',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3456',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3457', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3458', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3459', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3418',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3442',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3416', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(0, 176, 116);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Potcoin' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(PTC)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-blue text-blue justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-ptc fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$9,124.32' })),
                        TD({ class: 'text-danger' }, SPAN({ text: '02.85%' }), I({ class: 'mdi mdi-arrow-down' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart7', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartsq5zw9cqe',
                                class: 'apexcharts-canvas apexchartsq5zw9cqe apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3462',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3464',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3463' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskq5zw9cqe' },
                                      RECT({
                                        id: 'SvgjsRect3469',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskq5zw9cqe' }),
                                    CLIPPATH({ id: 'nonForecastMaskq5zw9cqe' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskq5zw9cqe' },
                                      RECT({
                                        id: 'SvgjsRect3470',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3475', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3476',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3477',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3478',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3479',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(218,55,70,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3468',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3482', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3483',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3492', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3493',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3495',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3496',
                                        x1: '0',
                                        y1: '6.666666666666667',
                                        x2: '120',
                                        y2: '6.666666666666667',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3497',
                                        x1: '0',
                                        y1: '13.333333333333334',
                                        x2: '120',
                                        y2: '13.333333333333334',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3498',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3499',
                                        x1: '0',
                                        y1: '26.666666666666668',
                                        x2: '120',
                                        y2: '26.666666666666668',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3500',
                                        x1: '0',
                                        y1: '33.333333333333336',
                                        x2: '120',
                                        y2: '33.333333333333336',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3501',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3494',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3503',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3502',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3471', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3472',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3480',
                                        d: 'M 0 40L 0 11.333333333333329C 7 11.333333333333329 13 32.666666666666664 20 32.666666666666664C 27 32.666666666666664 33 10 40 10C 47 10 53 27.333333333333332 60 27.333333333333332C 67 27.333333333333332 73 16.666666666666664 80 16.666666666666664C 87 16.666666666666664 93 6.666666666666664 100 6.666666666666664C 107 6.666666666666664 113 22.666666666666664 120 22.666666666666664C 120 22.666666666666664 120 22.666666666666664 120 40M 120 22.666666666666664z',
                                        fill: 'url(#SvgjsLinearGradient3475)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskq5zw9cqe)',
                                        pathTo:
                                          'M 0 40L 0 11.333333333333329C 7 11.333333333333329 13 32.666666666666664 20 32.666666666666664C 27 32.666666666666664 33 10 40 10C 47 10 53 27.333333333333332 60 27.333333333333332C 67 27.333333333333332 73 16.666666666666664 80 16.666666666666664C 87 16.666666666666664 93 6.666666666666664 100 6.666666666666664C 107 6.666666666666664 113 22.666666666666664 120 22.666666666666664C 120 22.666666666666664 120 22.666666666666664 120 40M 120 22.666666666666664z',
                                        pathFrom:
                                          'M -1 46.666666666666664L -1 46.666666666666664L 20 46.666666666666664L 40 46.666666666666664L 60 46.666666666666664L 80 46.666666666666664L 100 46.666666666666664L 120 46.666666666666664',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3481',
                                        d: 'M 0 11.333333333333329C 7 11.333333333333329 13 32.666666666666664 20 32.666666666666664C 27 32.666666666666664 33 10 40 10C 47 10 53 27.333333333333332 60 27.333333333333332C 67 27.333333333333332 73 16.666666666666664 80 16.666666666666664C 87 16.666666666666664 93 6.666666666666664 100 6.666666666666664C 107 6.666666666666664 113 22.666666666666664 120 22.666666666666664',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#da3746',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskq5zw9cqe)',
                                        pathTo:
                                          'M 0 11.333333333333329C 7 11.333333333333329 13 32.666666666666664 20 32.666666666666664C 27 32.666666666666664 33 10 40 10C 47 10 53 27.333333333333332 60 27.333333333333332C 67 27.333333333333332 73 16.666666666666664 80 16.666666666666664C 87 16.666666666666664 93 6.666666666666664 100 6.666666666666664C 107 6.666666666666664 113 22.666666666666664 120 22.666666666666664',
                                        pathFrom:
                                          'M -1 46.666666666666664L -1 46.666666666666664L 20 46.666666666666664L 40 46.666666666666664L 60 46.666666666666664L 80 46.666666666666664L 100 46.666666666666664L 120 46.666666666666664',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3473',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3509',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wb51m9e9d no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#da3746',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3474', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3504',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3505',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3506', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3507', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3508', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3467',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3491',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3465', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(218, 55, 70);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Aichain' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(AIT)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-success text-success justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-ait fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$2,336.84' })),
                        TD({ class: 'text-success' }, SPAN({ text: '01.34%' }), I({ class: 'mdi mdi-arrow-up' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart8', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexcharts3u6mhs1j',
                                class: 'apexcharts-canvas apexcharts3u6mhs1j apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3511',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3513',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3512' },
                                    CLIPPATH(
                                      { id: 'gridRectMask3u6mhs1j' },
                                      RECT({
                                        id: 'SvgjsRect3518',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMask3u6mhs1j' }),
                                    CLIPPATH({ id: 'nonForecastMask3u6mhs1j' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMask3u6mhs1j' },
                                      RECT({
                                        id: 'SvgjsRect3519',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3524', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3525',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3526',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3527',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3528',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3517',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3531', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3532',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3541', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3542',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3544',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3545',
                                        x1: '0',
                                        y1: '8',
                                        x2: '120',
                                        y2: '8',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3546',
                                        x1: '0',
                                        y1: '16',
                                        x2: '120',
                                        y2: '16',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3547',
                                        x1: '0',
                                        y1: '24',
                                        x2: '120',
                                        y2: '24',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3548',
                                        x1: '0',
                                        y1: '32',
                                        x2: '120',
                                        y2: '32',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3549',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3543',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3551',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3550',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3520', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3521',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3529',
                                        d: 'M 0 40L 0 24C 7 24 13 32 20 32C 27 32 33 20 40 20C 47 20 53 32 60 32C 67 32 73 16 80 16C 87 16 93 28 100 28C 107 28 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        fill: 'url(#SvgjsLinearGradient3524)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMask3u6mhs1j)',
                                        pathTo:
                                          'M 0 40L 0 24C 7 24 13 32 20 32C 27 32 33 20 40 20C 47 20 53 32 60 32C 67 32 73 16 80 16C 87 16 93 28 100 28C 107 28 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3530',
                                        d: 'M 0 24C 7 24 13 32 20 32C 27 32 33 20 40 20C 47 20 53 32 60 32C 67 32 73 16 80 16C 87 16 93 28 100 28C 107 28 113 8 120 8',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#00b074',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMask3u6mhs1j)',
                                        pathTo:
                                          'M 0 24C 7 24 13 32 20 32C 27 32 33 20 40 20C 47 20 53 32 60 32C 67 32 73 16 80 16C 87 16 93 28 100 28C 107 28 113 8 120 8',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3522',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3557',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker wp26kh0te no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#00b074',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3523', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3552',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3553',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3554', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3555', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3556', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3516',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3540',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3514', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(0, 176, 116);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                      TR(
                        { class: 'table-item box-shadow' },
                        TD(
                          {},
                          H6(
                            { class: 'fw-medium mb-0' },
                            SPAN({ text: 'Auroracoin' }),
                            SPAN({ class: 'fw-normal text-muted' }, SPAN({ text: '(ARC)' })),
                          ),
                        ),
                        TD(
                          { style: 'width: 150px;' },
                          DIV(
                            {
                              class:
                                'avatar-xs d-flex bg-soft-orange text-orange justify-content-center rounded-circle align-items-center',
                            },
                            I({ class: 'cf cf-arc fs-5' }),
                          ),
                        ),
                        TD({}, SPAN({ text: '$2,112.85' })),
                        TD({ class: 'text-success' }, SPAN({ text: '03.12%' }), I({ class: 'mdi mdi-arrow-up' })),
                        TD(
                          { style: 'width: 150px; position: relative;' },
                          DIV(
                            { id: 'chart9', style: 'min-height: 40px;' },
                            DIV(
                              {
                                id: 'apexchartswzbdo6c6',
                                class: 'apexcharts-canvas apexchartswzbdo6c6 apexcharts-theme-light',
                                style: 'width: 120px; height: 40px;',
                              },
                              SVG(
                                {
                                  id: 'SvgjsSvg3559',
                                  width: '120',
                                  height: '40',
                                  xmlns: 'http://www.w3.org/2000/svg',
                                  version: '1.1',
                                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                                  'xmlns:svgjs': 'http://svgjs.com/svgjs',
                                  class: 'apexcharts-svg',
                                  'xmlns:data': 'ApexChartsNS',
                                  transform: 'translate(0, 0)',
                                  style: 'background: transparent;',
                                },
                                G(
                                  {
                                    id: 'SvgjsG3561',
                                    class: 'apexcharts-inner apexcharts-graphical',
                                    transform: 'translate(0, 0)',
                                  },
                                  DEFS(
                                    { id: 'SvgjsDefs3560' },
                                    CLIPPATH(
                                      { id: 'gridRectMaskwzbdo6c6' },
                                      RECT({
                                        id: 'SvgjsRect3566',
                                        width: '126',
                                        height: '42',
                                        x: '-3',
                                        y: '-1',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    CLIPPATH({ id: 'forecastMaskwzbdo6c6' }),
                                    CLIPPATH({ id: 'nonForecastMaskwzbdo6c6' }),
                                    CLIPPATH(
                                      { id: 'gridRectMarkerMaskwzbdo6c6' },
                                      RECT({
                                        id: 'SvgjsRect3567',
                                        width: '124',
                                        height: '44',
                                        x: '-2',
                                        y: '-2',
                                        rx: '0',
                                        ry: '0',
                                        opacity: '1',
                                        'stroke-width': '0',
                                        stroke: 'none',
                                        'stroke-dasharray': '0',
                                        fill: '#fff',
                                      }),
                                    ),
                                    LINEARGRADIENT(
                                      { id: 'SvgjsLinearGradient3572', x1: '0', y1: '0', x2: '0', y2: '1' },
                                      STOP({
                                        id: 'SvgjsStop3573',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '0.2',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3574',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3575',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(255,255,255,0.45)',
                                        offset: '1',
                                      }),
                                      STOP({
                                        id: 'SvgjsStop3576',
                                        'stop-opacity': '0.45',
                                        'stop-color': 'rgba(0,176,116,0.45)',
                                        offset: '1',
                                      }),
                                    ),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3565',
                                    x1: '0',
                                    y1: '0',
                                    x2: '0',
                                    y2: '40',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '3',
                                    class: 'apexcharts-xcrosshairs',
                                    x: '0',
                                    y: '0',
                                    width: '1',
                                    height: '40',
                                    fill: '#b1b9c4',
                                    filter: 'none',
                                    'fill-opacity': '0.9',
                                    'stroke-width': '1',
                                  }),
                                  G(
                                    { id: 'SvgjsG3579', class: 'apexcharts-xaxis', transform: 'translate(0, 0)' },
                                    G({
                                      id: 'SvgjsG3580',
                                      class: 'apexcharts-xaxis-texts-g',
                                      transform: 'translate(0, -4)',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3589', class: 'apexcharts-grid' },
                                    G(
                                      {
                                        id: 'SvgjsG3590',
                                        class: 'apexcharts-gridlines-horizontal',
                                        style: 'display: none;',
                                      },
                                      LINE({
                                        id: 'SvgjsLine3592',
                                        x1: '0',
                                        y1: '0',
                                        x2: '120',
                                        y2: '0',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3593',
                                        x1: '0',
                                        y1: '6.666666666666667',
                                        x2: '120',
                                        y2: '6.666666666666667',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3594',
                                        x1: '0',
                                        y1: '13.333333333333334',
                                        x2: '120',
                                        y2: '13.333333333333334',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3595',
                                        x1: '0',
                                        y1: '20',
                                        x2: '120',
                                        y2: '20',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3596',
                                        x1: '0',
                                        y1: '26.666666666666668',
                                        x2: '120',
                                        y2: '26.666666666666668',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3597',
                                        x1: '0',
                                        y1: '33.333333333333336',
                                        x2: '120',
                                        y2: '33.333333333333336',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                      LINE({
                                        id: 'SvgjsLine3598',
                                        x1: '0',
                                        y1: '40',
                                        x2: '120',
                                        y2: '40',
                                        stroke: '#e0e0e0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-gridline',
                                      }),
                                    ),
                                    G({
                                      id: 'SvgjsG3591',
                                      class: 'apexcharts-gridlines-vertical',
                                      style: 'display: none;',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3600',
                                      x1: '0',
                                      y1: '40',
                                      x2: '120',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                    LINE({
                                      id: 'SvgjsLine3599',
                                      x1: '0',
                                      y1: '1',
                                      x2: '0',
                                      y2: '40',
                                      stroke: 'transparent',
                                      'stroke-dasharray': '0',
                                    }),
                                  ),
                                  G(
                                    { id: 'SvgjsG3568', class: 'apexcharts-area-series apexcharts-plot-series' },
                                    G(
                                      {
                                        id: 'SvgjsG3569',
                                        class: 'apexcharts-series',
                                        seriesName: 'seriesx1',
                                        'data:longestSeries': 'true',
                                        rel: '1',
                                        'data:realIndex': '0',
                                      },
                                      PATH({
                                        id: 'SvgjsPath3577',
                                        d: 'M 0 40L 0 25C 7 25 13 36 20 36C 27 36 33 18.333333333333332 40 18.333333333333332C 47 18.333333333333332 53 28 60 28C 67 28 73 21.666666666666668 80 21.666666666666668C 87 21.666666666666668 93 28 100 28C 107 28 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        fill: 'url(#SvgjsLinearGradient3572)',
                                        'fill-opacity': '1',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '0',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskwzbdo6c6)',
                                        pathTo:
                                          'M 0 40L 0 25C 7 25 13 36 20 36C 27 36 33 18.333333333333332 40 18.333333333333332C 47 18.333333333333332 53 28 60 28C 67 28 73 21.666666666666668 80 21.666666666666668C 87 21.666666666666668 93 28 100 28C 107 28 113 8 120 8C 120 8 120 8 120 40M 120 8z',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      PATH({
                                        id: 'SvgjsPath3578',
                                        d: 'M 0 25C 7 25 13 36 20 36C 27 36 33 18.333333333333332 40 18.333333333333332C 47 18.333333333333332 53 28 60 28C 67 28 73 21.666666666666668 80 21.666666666666668C 87 21.666666666666668 93 28 100 28C 107 28 113 8 120 8',
                                        fill: 'none',
                                        'fill-opacity': '1',
                                        stroke: '#00b074',
                                        'stroke-opacity': '1',
                                        'stroke-linecap': 'butt',
                                        'stroke-width': '2',
                                        'stroke-dasharray': '0',
                                        class: 'apexcharts-area',
                                        index: '0',
                                        'clip-path': 'url(#gridRectMaskwzbdo6c6)',
                                        pathTo:
                                          'M 0 25C 7 25 13 36 20 36C 27 36 33 18.333333333333332 40 18.333333333333332C 47 18.333333333333332 53 28 60 28C 67 28 73 21.666666666666668 80 21.666666666666668C 87 21.666666666666668 93 28 100 28C 107 28 113 8 120 8',
                                        pathFrom: 'M -1 40L -1 40L 20 40L 40 40L 60 40L 80 40L 100 40L 120 40',
                                      }),
                                      G(
                                        {
                                          id: 'SvgjsG3570',
                                          class: 'apexcharts-series-markers-wrap',
                                          'data:realIndex': '0',
                                        },
                                        G(
                                          { class: 'apexcharts-series-markers' },
                                          CIRCLE({
                                            id: 'SvgjsCircle3606',
                                            r: '0',
                                            cx: '0',
                                            cy: '0',
                                            class: 'apexcharts-marker w8ocmpbg4 no-pointer-events',
                                            stroke: '#ffffff',
                                            fill: '#00b074',
                                            'fill-opacity': '1',
                                            'stroke-width': '2',
                                            'stroke-opacity': '0.9',
                                            'default-marker-size': '0',
                                          }),
                                        ),
                                      ),
                                    ),
                                    G({ id: 'SvgjsG3571', class: 'apexcharts-datalabels', 'data:realIndex': '0' }),
                                  ),
                                  LINE({
                                    id: 'SvgjsLine3601',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    stroke: '#b6b6b6',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '1',
                                    class: 'apexcharts-ycrosshairs',
                                  }),
                                  LINE({
                                    id: 'SvgjsLine3602',
                                    x1: '0',
                                    y1: '0',
                                    x2: '120',
                                    y2: '0',
                                    'stroke-dasharray': '0',
                                    'stroke-width': '0',
                                    class: 'apexcharts-ycrosshairs-hidden',
                                  }),
                                  G({ id: 'SvgjsG3603', class: 'apexcharts-yaxis-annotations' }),
                                  G({ id: 'SvgjsG3604', class: 'apexcharts-xaxis-annotations' }),
                                  G({ id: 'SvgjsG3605', class: 'apexcharts-point-annotations' }),
                                ),
                                RECT({
                                  id: 'SvgjsRect3564',
                                  width: '0',
                                  height: '0',
                                  x: '0',
                                  y: '0',
                                  rx: '0',
                                  ry: '0',
                                  opacity: '1',
                                  'stroke-width': '0',
                                  stroke: 'none',
                                  'stroke-dasharray': '0',
                                  fill: '#fefefe',
                                }),
                                G({
                                  id: 'SvgjsG3588',
                                  class: 'apexcharts-yaxis',
                                  rel: '0',
                                  transform: 'translate(-18, 0)',
                                }),
                                G({ id: 'SvgjsG3562', class: 'apexcharts-annotations' }),
                              ),
                              DIV({ class: 'apexcharts-legend', style: 'max-height: 20px;' }),
                              DIV(
                                { class: 'apexcharts-tooltip apexcharts-theme-light' },
                                DIV(
                                  { class: 'apexcharts-tooltip-series-group', style: 'order: 1;' },
                                  SPAN({
                                    class: 'apexcharts-tooltip-marker',
                                    style: 'background-color: rgb(0, 176, 116);',
                                  }),
                                  DIV(
                                    {
                                      class: 'apexcharts-tooltip-text',
                                      style: 'font-family: Helvetica, Arial, sans-serif; font-size: 12px;',
                                    },
                                    DIV(
                                      { class: 'apexcharts-tooltip-y-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-y-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-y-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-goals-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-goals-value' }),
                                    ),
                                    DIV(
                                      { class: 'apexcharts-tooltip-z-group' },
                                      SPAN({ class: 'apexcharts-tooltip-text-z-label' }),
                                      SPAN({ class: 'apexcharts-tooltip-text-z-value' }),
                                    ),
                                  ),
                                ),
                              ),
                              DIV(
                                {
                                  class:
                                    'apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light',
                                },
                                DIV({ class: 'apexcharts-yaxistooltip-text' }),
                              ),
                            ),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                          DIV(
                            { class: 'resize-triggers' },
                            DIV({ class: 'expand-trigger' }, DIV({ style: 'width: 151px; height: 77px;' })),
                            DIV({ class: 'contract-trigger' }),
                          ),
                        ),
                        TD(
                          {},
                          A(
                            {
                              href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#buysellModal',
                              'data-bs-toggle': 'modal',
                              class: 'btn btn-primary btn-sm',
                            },
                            SPAN({ text: 'Trade' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
                DIV(
                  { class: 'text-center mt-4' },
                  A(
                    {
                      href: 'https://preview.pichforest.com/cryptorex/layouts/market-data.html',
                      class: 'text-primary fw-medium',
                    },
                    SPAN({ text: 'View More' }),
                    I({ class: 'uil uil-arrow-right ms-1' }),
                  ),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'section bg-gradient-light' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row justify-content-center' },
              DIV(
                { class: 'col-lg-7' },
                DIV(
                  { class: 'section-title text-center mb-5' },
                  H4({ class: 'title' }, SPAN({ text: 'Accept Payments' })),
                  P(
                    { class: 'desc-content text-muted' },
                    SPAN({
                      text: 'Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.',
                    }),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'text-center p-4 rounded-3 shadow h-100 d-flex flex-column' },
                  H5({}, SPAN({ text: 'Payment Gateways' })),
                  DIV(
                    { class: 'd-flex justify-content-center mt-4 pt-2' },
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/paypal.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light mx-3' },
                      IMG({
                        src: './theme/web/skrill.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/wepay.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                  ),
                  DIV(
                    { class: 'mt-auto ' },
                    A(
                      { href: 'javascript:void(0)', class: 'primary-link fw-medium form-text' },
                      SPAN({ text: 'View More' }),
                      I({ class: 'mdi mdi-arrow-right ms-1' }),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'text-center p-4 rounded-3 shadow' },
                  H5({}, SPAN({ text: 'Supported Methods' })),
                  DIV(
                    { class: 'd-flex justify-content-center mt-4 pt-2' },
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/apple-pay.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light mx-3' },
                      IMG({
                        src: './theme/web/skrill.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/visa.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light mx-3' },
                      IMG({
                        src: './theme/web/master-card.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/amazon.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                  ),
                  DIV(
                    { class: 'd-flex justify-content-center mt-3' },
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/paypal.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light mx-3' },
                      IMG({
                        src: './theme/web/g-pay.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/omise.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light mx-3' },
                      IMG({
                        src: './theme/web/paytm.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                    DIV(
                      { class: 'rounded-4 bg-light' },
                      IMG({
                        src: './theme/web/real.png',
                        alt: '',
                        class: 'img-fluid',
                      }),
                    ),
                  ),
                  DIV(
                    { class: 'mt-3' },
                    A(
                      { href: 'javascript:void(0)', class: 'primary-link fw-medium form-text' },
                      SPAN({ text: 'View More' }),
                      I({ class: 'mdi mdi-arrow-right ms-1' }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'section' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row align-items-center' },
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'text-center' },
                  IMG({
                    src: './theme/web/app.png',
                    alt: '',
                    class: 'img-fluid',
                  }),
                ),
              ),
              DIV(
                { class: 'col-lg-6' },
                DIV(
                  { class: 'section-title ms-lg-4 mt-4 mt-lg-0' },
                  H4({ class: 'title' }, SPAN({ text: 'Buy Bitcoin Instantly From a Safe Exchange' })),
                  P(
                    { class: 'fs-19 text-muted mb-3' },
                    SPAN({
                      text: 'Buy and sell 100+ cryptocurrencies with 20+ fiat currencies using bank transfers or your credit/debit card.',
                    }),
                  ),
                  P(
                    { class: 'fs-19 text-muted mb-3' },
                    SPAN({
                      text: 'With Cryptorex Trade, you can be sure your trading skills are a matched with excellent service With Cryptorex Trade, you can be sure your trading skills are matched with excellent service.',
                    }),
                  ),
                  DIV(
                    { class: 'mt-4 pt-2 gap-2 d-flex' },
                    A(
                      { href: 'javascript:void(0)', class: 'btn btn-primary btn-hover' },
                      I({ class: 'uil uil-apple me-1' }),
                      SPAN({ text: 'Apple Store' }),
                    ),
                    A(
                      { href: 'javascript:void(0)', class: 'btn btn-soft-success btn-hover' },
                      I({ class: 'uil uil-google-play me-1' }),
                      SPAN({ text: 'Play Store' }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        SECTION(
          { class: 'bg-cta bg-dark' },
          DIV({ class: 'bg-overlay' }),
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row justify-content-center' },
              DIV(
                { class: 'col-lg-7' },
                DIV(
                  { class: 'section-title text-center' },
                  H4(
                    { class: 'title text-white' },
                    SPAN({ text: 'Forget About Crypto Buy & Sell, Spread the Payments' }),
                  ),
                  P(
                    { class: 'desc-content text-white-50' },
                    SPAN({ text: 'With Cryptorex Trade, you can be sure your trading skills.' }),
                  ),
                  DIV(
                    { class: 'mt-4 pt-2' },
                    A(
                      {
                        href: 'https://preview.pichforest.com/cryptorex/layouts/buy-sell.html',
                        class: 'btn btn-primary btn-hover',
                      },
                      SPAN({ text: 'Buy & Sell Now' }),
                      I({ class: 'uil uil-arrow-right ms-1' }),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'modal fade', id: 'buysellModal', tabindex: '-1', 'aria-hidden': 'true' },
          BUTTON({
            type: 'button',
            class: 'btn-close btn-close-white position-absolute top-0 end-0 p-5',
            'data-bs-dismiss': 'modal',
            'aria-label': 'Close',
          }),
          DIV(
            { class: 'modal-dialog modal-dialog-centered' },
            DIV(
              { class: 'modal-content' },
              DIV(
                { class: 'modal-body p-4' },
                UL(
                  {
                    class:
                      'nav nav-pills nav-justified flex-column flex-sm-row crypto-exchange-menu p-2 bg-light rounded-3',
                    id: 'pills-tab',
                    role: 'tablist',
                  },
                  LI(
                    { class: 'nav-item', role: 'presentation' },
                    BUTTON(
                      {
                        class: 'nav-link fw-semibold active',
                        id: 'pills-profile-tab',
                        'data-bs-toggle': 'pill',
                        'data-bs-target': '#pills-profile',
                        type: 'button',
                        role: 'tab',
                        'aria-controls': 'pills-profile',
                        'aria-selected': 'false',
                      },
                      SPAN({ text: 'Buy' }),
                    ),
                  ),
                  LI(
                    { class: 'nav-item', role: 'presentation' },
                    BUTTON(
                      {
                        class: 'nav-link fw-semibold',
                        id: 'pills-contact-tab',
                        'data-bs-toggle': 'pill',
                        'data-bs-target': '#pills-contact',
                        type: 'button',
                        role: 'tab',
                        'aria-controls': 'pills-contact',
                        'aria-selected': 'false',
                      },
                      SPAN({ text: 'Sell' }),
                    ),
                  ),
                ),
                DIV(
                  { class: 'tab-content mt-4 pt-2', id: 'pills-tabContent' },
                  DIV(
                    {
                      class: 'tab-pane fade show active',
                      id: 'pills-profile',
                      role: 'tabpanel',
                      'aria-labelledby': 'pills-profile-tab',
                    },
                    DIV(
                      { class: 'd-flex align-items-center justify-content-between' },
                      DIV(
                        {},
                        H5(
                          { class: 'fs-18 fw-medium mb-1' },
                          SPAN({ text: 'Bitcoin' }),
                          SPAN({ class: 'badge bg-soft-success text-success' }, SPAN({ text: 'Buy' })),
                        ),
                        P({ class: 'fs-16 text-muted mb-0' }, SPAN({ text: '20,485.87 USD' })),
                      ),
                      DIV({ class: 'flex-shrink-0 text-warning' }, I({ class: 'cf cf-btc fs-5' })),
                    ),
                    FORM(
                      { action: 'javascript:void(0)', class: 'mt-4' },
                      DIV(
                        { class: 'row' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'priceInput', class: ' col-form-label' }, SPAN({ text: 'Price' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          DIV(
                            { class: 'crypto-buy position-relative' },
                            INPUT({ type: 'number', class: 'form-control', id: 'priceInput', placeholder: '0.852' }),
                            SELECT(
                              {
                                class: 'form-select',
                                id: 'choices-crypto-list',
                                'aria-label': 'Default select example',
                              },
                              OPTION({ value: '1' }, SPAN({ text: 'BTC' })),
                              OPTION({ value: '2' }, SPAN({ text: 'ETH' })),
                              OPTION({ value: '3' }, SPAN({ text: 'XRP' })),
                              OPTION({ value: '4' }, SPAN({ text: 'LTC' })),
                              OPTION({ value: '5' }, SPAN({ text: 'BNT' })),
                            ),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'row mt-3' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'amountInput', class: ' col-form-label' }, SPAN({ text: 'Amount' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          DIV(
                            { class: 'crypto-buy position-relative' },
                            INPUT({ type: 'number', class: 'form-control', id: 'amountInput', placeholder: '501.812' }),
                            SELECT(
                              {
                                class: 'form-select',
                                id: 'choices-crypto-list2',
                                'aria-label': 'Default select example',
                              },
                              OPTION({ value: '1' }, SPAN({ text: 'BTC' })),
                              OPTION({ value: '2' }, SPAN({ text: 'ETH' })),
                              OPTION({ value: '3' }, SPAN({ text: 'XRP' })),
                              OPTION({ value: '4' }, SPAN({ text: 'LTC' })),
                              OPTION({ value: '5' }, SPAN({ text: 'BNT' })),
                            ),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'row mt-3' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'inputTotle', class: ' col-form-label' }, SPAN({ text: 'Totle' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          INPUT({ type: 'number', class: 'form-control', id: 'inputTotle', placeholder: '502.664' }),
                          P(
                            { class: 'text-muted fs-16 mb-0 mt-2' },
                            SPAN({ text: 'Service Free: 0.25%(25,321.00 BTC)' }),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'mt-4' },
                        BUTTON({ type: 'submit', class: 'btn btn-primary w-100' }, SPAN({ text: 'Buy Now' })),
                        P(
                          { class: 'form-text fs-16 text-center mb-0 mt-2' },
                          SPAN({ text: 'Buy Bitcoin you agree with' }),
                          A({ href: 'javascript:void(0)', class: 'fw-semibold' }, SPAN({ text: 'Terms & Condition' })),
                        ),
                      ),
                    ),
                  ),
                  DIV(
                    {
                      class: 'tab-pane fade',
                      id: 'pills-contact',
                      role: 'tabpanel',
                      'aria-labelledby': 'pills-contact-tab',
                    },
                    DIV(
                      { class: 'd-flex align-items-center justify-content-between' },
                      DIV(
                        {},
                        H5(
                          { class: 'fs-18 fw-medium mb-1' },
                          SPAN({ text: 'Bitcoin' }),
                          SPAN({ class: 'badge bg-soft-danger text-danger' }, SPAN({ text: 'Sell' })),
                        ),
                        P({ class: 'fs-16 text-muted mb-0' }, SPAN({ text: '18,245.120 USD' })),
                      ),
                      DIV({ class: 'flex-shrink-0 text-warning' }, I({ class: 'cf cf-btc fs-5' })),
                    ),
                    FORM(
                      { action: 'javascript:void(0)', class: 'mt-4' },
                      DIV(
                        { class: 'row' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'inputPrice', class: ' col-form-label' }, SPAN({ text: 'Price' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          DIV(
                            { class: 'crypto-buy position-relative' },
                            INPUT({ type: 'number', class: 'form-control', id: 'inputPrice', placeholder: '0.852' }),
                            SELECT(
                              {
                                class: 'form-select',
                                id: 'choices-crypto-list3',
                                'aria-label': 'Default select example',
                              },
                              OPTION({ value: '1' }, SPAN({ text: 'BTC' })),
                              OPTION({ value: '2' }, SPAN({ text: 'ETH' })),
                              OPTION({ value: '3' }, SPAN({ text: 'XRP' })),
                              OPTION({ value: '4' }, SPAN({ text: 'LTC' })),
                              OPTION({ value: '5' }, SPAN({ text: 'BNT' })),
                            ),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'row mt-3' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'inputAmount', class: ' col-form-label' }, SPAN({ text: 'Amount' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          DIV(
                            { class: 'crypto-buy position-relative' },
                            INPUT({ type: 'number', class: 'form-control', id: 'inputAmount', placeholder: '501.812' }),
                            SELECT(
                              {
                                class: 'form-select',
                                id: 'choices-crypto-list4',
                                'aria-label': 'Default select example',
                              },
                              OPTION({ value: '1' }, SPAN({ text: 'BTC' })),
                              OPTION({ value: '2' }, SPAN({ text: 'ETH' })),
                              OPTION({ value: '3' }, SPAN({ text: 'XRP' })),
                              OPTION({ value: '4' }, SPAN({ text: 'LTC' })),
                              OPTION({ value: '5' }, SPAN({ text: 'BNT' })),
                            ),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'row mt-3' },
                        DIV(
                          { class: 'col-sm-3' },
                          LABEL({ for: 'totleInput', class: ' col-form-label' }, SPAN({ text: 'Totle' })),
                        ),
                        DIV(
                          { class: 'col-sm-9' },
                          INPUT({ type: 'number', class: 'form-control', id: 'totleInput', placeholder: '502.664' }),
                          P(
                            { class: 'text-muted fs-16 mb-0 mt-2' },
                            SPAN({ text: 'Service Free: 0.25%(25,321.00 BTC)' }),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'mt-4' },
                        BUTTON({ type: 'submit', class: 'btn btn-primary w-100' }, SPAN({ text: 'Sell Now' })),
                        P(
                          { class: 'form-text fs-16 text-center mb-0 mt-2' },
                          SPAN({ text: 'Sell Bitcoin you agree with' }),
                          A({ href: 'javascript:void(0)', class: 'fw-semibold' }, SPAN({ text: 'Terms & Condition' })),
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
          { class: 'position-relative', style: 'z-index: 1' },
          DIV(
            { class: 'footer-shape' },
            SVG(
              { xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 1440 250' },
              PATH({
                fill: '#2d2d51',
                'fill-opacity': '1',
                d: 'M0,192L120,202.7C240,213,480,235,720,234.7C960,235,1200,213,1320,202.7L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z',
              }),
            ),
          ),
        ),
        SECTION(
          { class: 'bg-footer overflow-hidden' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-4' },
                DIV(
                  { class: 'footer-item mt-4 mt-lg-0 me-lg-5' },
                  DIV(
                    { class: 'mb-2' },
                    IMG({
                      src: './theme/web/dark-logo.png',
                      alt: '',
                      class: 'footer-dark-logo',
                    }),
                    IMG({
                      src: './theme/web/light-logo.png',
                      alt: '',
                      class: 'footer-light-logo',
                    }),
                  ),
                  P(
                    { class: 'footer-content' },
                    SPAN({
                      text: 'It is a long established fact that a reader will be of a page reader\r\n                                  will layout.',
                    }),
                  ),
                  UL(
                    { class: 'footer-social-menu list-inline mb-0' },
                    LI(
                      { class: 'list-inline-item' },
                      A({ href: 'javascript:void(0)' }, I({ class: 'uil uil-facebook-f' })),
                    ),
                    LI(
                      { class: 'list-inline-item' },
                      A({ href: 'javascript:void(0)' }, I({ class: 'uil uil-linkedin-alt' })),
                    ),
                    LI(
                      { class: 'list-inline-item' },
                      A({ href: 'javascript:void(0)' }, I({ class: 'uil uil-google' })),
                    ),
                    LI(
                      { class: 'list-inline-item' },
                      A({ href: 'javascript:void(0)' }, I({ class: 'uil uil-twitter' })),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-2 col-6' },
                DIV(
                  { class: 'footer-item mt-4 mt-lg-0' },
                  H6({ class: 'footer-header mb-3' }, SPAN({ text: 'Company' })),
                  UL(
                    { class: 'list-unstyled footer-list mb-0' },
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/index.html' },
                        SPAN({ text: 'Home' }),
                      ),
                    ),
                    LI({}, A({ href: 'javascript:void(0)' }, SPAN({ text: 'Careers' }))),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/pricing.html' },
                        SPAN({ text: 'Pricing' }),
                      ),
                    ),
                    LI(
                      {},
                      A({ href: 'https://preview.pichforest.com/cryptorex/layouts/blog.html' }, SPAN({ text: 'Blog' })),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-2 col-6' },
                DIV(
                  { class: 'footer-item mt-4 mt-lg-0' },
                  H6({ class: 'footer-header mb-3' }, SPAN({ text: 'Services' })),
                  UL(
                    { class: 'list-unstyled footer-list mb-0' },
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/market-data.html' },
                        SPAN({ text: 'Trade' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/payment-index.html' },
                        SPAN({ text: 'Payment' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/wallets.html' },
                        SPAN({ text: 'Wallets' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/whitepaper.html' },
                        SPAN({ text: 'Whitepaper' }),
                      ),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-2 col-6' },
                DIV(
                  { class: 'footer-item mt-4 mt-lg-0' },
                  H6({ class: 'footer-header mb-3' }, SPAN({ text: 'Product' })),
                  UL(
                    { class: 'list-unstyled footer-list mb-0' },
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/about.html' },
                        SPAN({ text: 'Guides' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/buy-sell.html' },
                        SPAN({ text: 'Buy & Sell' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/wallets.html' },
                        SPAN({ text: 'Wallets' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/token-sale.html' },
                        SPAN({ text: 'Token Sale' }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/roadmap.html' },
                        SPAN({ text: 'Roadmap' }),
                      ),
                    ),
                    LI({}, A({ href: 'javascript:void(0)' }, SPAN({ text: 'Exchange' }))),
                  ),
                ),
              ),
              DIV(
                { class: 'col-lg-2 col-6' },
                DIV(
                  { class: 'footer-item mt-4 mt-lg-0' },
                  H6({ class: 'footer-header mb-3' }, SPAN({ text: 'Legal' })),
                  UL(
                    { class: 'list-unstyled footer-list mb-0' },
                    LI({}, A({ href: 'javascript:void(0)' }, SPAN({ text: 'Documentation' }))),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/faqs.html' },
                        SPAN({ text: "Faq's" }),
                      ),
                    ),
                    LI(
                      {},
                      A(
                        { href: 'https://preview.pichforest.com/cryptorex/layouts/privacy-policy.html' },
                        SPAN({ text: 'Privacy & Policy' }),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'footer-alt' },
          DIV(
            { class: 'container' },
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-lg-12' },
                P(
                  { class: 'text-center fw-medium fs-16 mb-0' },
                  SPAN({
                    text: '20232023 \r\n                              © Cryptorex - Cryptocurrency Template kit by',
                  }),
                  A(
                    {
                      href: 'https://preview.pichforest.com/cryptorex/layouts/index-3.html#',
                      class: 'text-reset text-decoration-underline',
                    },
                    SPAN({ text: 'Pichforest' }),
                  ),
                ),
              ),
            ),
          ),
        ),
        BUTTON(
          { onclick: 'topFunction()', id: 'back-to-top', style: 'opacity: 0; bottom: 150px;' },
          I({ class: 'mdi mdi-arrow-up' }),
        ),
        DIV(
          { id: 'preloader', style: 'opacity: 0; visibility: hidden;' },
          DIV(
            { id: 'status' },
            DIV(
              { id: 'bitcoin' },
              SVG(
                {
                  version: '1.1',
                  id: 'Layer_1',
                  xmlns: 'http://www.w3.org/2000/svg',
                  'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                  x: '0px',
                  y: '0px',
                  width: '200px',
                  height: '200px',
                  viewBox: '100 100 400 400',
                  'xml:space': 'preserve',
                },
                FILTER(
                  { id: 'dropshadow', height: '130%' },
                  FEGAUSSIANBLUR({ in: 'SourceAlpha', stdDeviation: '5' }),
                  FEOFFSET({ dx: '0', dy: '0', result: 'offsetblur' }),
                  FEFLOOD({ 'flood-color': 'red' }),
                  FECOMPOSITE({ in2: 'offsetblur', operator: 'in' }),
                  FEMERGE({}, ['feMergeNode'], FEMERGENODE({ in: 'SourceGraphic' })),
                ),
                PATH({
                  class: 'path',
                  style: 'filter:url(#dropshadow)',
                  fill: '#000000',
                  d: 'M446.089,261.45c6.135-41.001-25.084-63.033-67.769-77.735l13.844-55.532l-33.801-8.424l-13.48,54.068\r\n                      c-8.896-2.217-18.015-4.304-27.091-6.371l13.568-54.429l-33.776-8.424l-13.861,55.521c-7.354-1.676-14.575-3.328-21.587-5.073\r\n                      l0.034-0.171l-46.617-11.64l-8.993,36.102c0,0,25.08,5.746,24.549,6.105c13.689,3.42,16.159,12.478,15.75,19.658L208.93,357.23\r\n                      c-1.675,4.158-5.925,10.401-15.494,8.031c0.338,0.485-24.579-6.134-24.579-6.134l-9.631,40.468l36.843,9.188\r\n                      c8.178,2.051,16.209,4.19,24.098,6.217l-13.978,56.17l33.764,8.424l13.852-55.571c9.235,2.499,18.186,4.813,26.948,6.995\r\n                      l-13.802,55.309l33.801,8.424l13.994-56.061c57.648,10.902,100.998,6.502,119.237-45.627c14.705-41.979-0.731-66.193-31.06-81.984\r\n                      C425.008,305.984,441.655,291.455,446.089,261.45z M368.859,369.754c-10.455,41.983-81.128,19.285-104.052,13.589l18.562-74.404\r\n                      C306.28,314.65,379.774,325.975,368.859,369.754z M379.302,260.846c-9.527,38.187-68.358,18.781-87.442,14.023l16.828-67.489\r\n                      C327.767,212.14,389.234,221.02,379.302,260.846z',
                }),
              ),
            ),
          ),
        ),
        DIV(
          { id: 'style-switcher', onclick: 'toggleSwitcher()', style: 'left: -165px;' },
          DIV(
            {},
            H6({}, SPAN({ text: 'Select your color' })),
            UL(
              { class: 'pattern list-unstyled mb-0' },
              LI({}, A({ class: 'color-list color1', href: 'javascript: void(0);', onclick: 'setColorGreen()' })),
              LI({}, A({ class: 'color-list color2', href: 'javascript: void(0);', onclick: "setColor('blue')" })),
              LI({}, A({ class: 'color-list color3', href: 'javascript: void(0);', onclick: "setColor('cyan')" })),
            ),
            DIV(
              { class: 'mt-3' },
              H6({}, SPAN({ text: 'Layout Mode' })),
              DIV(
                { class: 'text-center mt-3' },
                A(
                  { href: 'javascript: void(0);', id: 'mode', class: 'mode-btn text-white rounded-3' },
                  I({ class: 'uil uil-brightness mode-dark mx-auto' }),
                  I({ class: 'uil uil-moon mode-light' }),
                ),
              ),
            ),
          ),
          DIV(
            { class: 'bottom' },
            A({ href: 'javascript: void(0);', class: 'settings rounded-end' }, I({ class: 'mdi mdi-cog mdi-spin' })),
          ),
        ),
      ),
    ),
  ],
  on: {
    load: (el) => {
      window.loadRes('theme/web/switcher.init.js');
      window.loadRes('theme/web/table-chart.init.js');
      window.loadRes('theme/web/buy-sell.init.js');
      window.loadRes('theme/web/app.js');
    },
    itemLoad: () => {},
  },
  func: () => {},
  style: `
  `,
});
