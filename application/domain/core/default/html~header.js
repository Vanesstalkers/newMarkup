({
  tpl: () => [
    NAV(
      {
        class: 'layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme',
        id: 'layout-navbar',
      },
      DIV(
        { class: 'layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none' },
        A({ class: 'nav-item nav-link px-0 me-xl-4', href: 'javascript:void(0)' }, I({ class: 'bx bx-menu bx-sm' })),
      ),
      DIV(
        { class: 'navbar-nav-right d-flex align-items-center', id: 'navbar-collapse' },
        DIV(
          { class: 'navbar-nav align-items-center' },
          DIV(
            { class: 'nav-item navbar-search-wrapper mb-0' },
            A(
              { class: 'nav-item nav-link search-toggler px-0', href: 'javascript:void(0);' },
              I({ class: 'bx bx-search bx-sm' }),
              SPAN({ class: 'd-none d-md-inline-block text-muted px-1', text: 'Search (Ctrl+/)' }),
            ),
          ),
        ),
        UL(
          { class: 'navbar-nav flex-row align-items-center ms-auto' },
          LI(
            { class: 'nav-item dropdown-language dropdown me-2 me-xl-0' },
            A(
              {
                class: 'nav-link dropdown-toggle hide-arrow',
                href: 'javascript:void(0);',
                'data-bs-toggle': 'dropdown',
              },
              I({ class: 'fi fi-us fis rounded-circle fs-3 me-1' }),
            ),
            UL(
              { class: 'dropdown-menu dropdown-menu-end' },
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'javascript:void(0);', 'data-language': 'en' },
                  I({ class: 'fi fi-us fis rounded-circle fs-4 me-1' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'English' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'javascript:void(0);', 'data-language': 'fr' },
                  I({ class: 'fi fi-fr fis rounded-circle fs-4 me-1' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'France' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'javascript:void(0);', 'data-language': 'de' },
                  I({ class: 'fi fi-de fis rounded-circle fs-4 me-1' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'German' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'javascript:void(0);', 'data-language': 'pt' },
                  I({ class: 'fi fi-pt fis rounded-circle fs-4 me-1' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'Portuguese' })),
                ),
              ),
            ),
          ),
          LI(
            { class: 'nav-item me-2 me-xl-0' },
            A(
              { class: 'nav-link style-switcher-toggle hide-arrow', href: 'javascript:void(0);' },
              I({ class: 'bx bx-sm' }),
            ),
          ),
          LI(
            { class: 'nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0' },
            A(
              {
                class: 'nav-link dropdown-toggle hide-arrow',
                href: 'javascript:void(0);',
                'data-bs-toggle': 'dropdown',
                'data-bs-auto-close': 'outside',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-grid-alt bx-sm' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end py-0' },
              DIV(
                { class: 'dropdown-menu-header border-bottom' },
                DIV(
                  { class: 'dropdown-header d-flex align-items-center py-3' },
                  H5({ class: 'text-body mb-0 me-auto' }, SPAN({ text: 'Shortcuts' })),
                  A(
                    {
                      href: 'javascript:void(0)',
                      class: 'dropdown-shortcuts-add text-body',
                      'data-bs-toggle': 'tooltip',
                      'data-bs-placement': 'top',
                      title: 'Add shortcuts',
                    },
                    I({ class: 'bx bx-sm bx-plus-circle' }),
                  ),
                ),
              ),
              DIV(
                { class: 'dropdown-shortcuts-list scrollable-container' },
                DIV(
                  { class: 'row row-bordered overflow-visible g-0' },
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-calendar fs-4' }),
                    ),
                    A({ href: 'app-calendar.html', class: 'stretched-link' }, SPAN({ text: 'Calendar' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Appointments' })),
                  ),
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-food-menu fs-4' }),
                    ),
                    A({ href: 'app-invoice-list.html', class: 'stretched-link' }, SPAN({ text: 'Invoice App' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Manage Accounts' })),
                  ),
                ),
                DIV(
                  { class: 'row row-bordered overflow-visible g-0' },
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-user fs-4' }),
                    ),
                    A({ href: 'app-user-list.html', class: 'stretched-link' }, SPAN({ text: 'User App' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Manage Users' })),
                  ),
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-check-shield fs-4' }),
                    ),
                    A({ href: 'app-access-roles.html', class: 'stretched-link' }, SPAN({ text: 'Role Management' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Permission' })),
                  ),
                ),
                DIV(
                  { class: 'row row-bordered overflow-visible g-0' },
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-pie-chart-alt-2 fs-4' }),
                    ),
                    A({ href: 'index.html', class: 'stretched-link' }, SPAN({ text: 'Dashboard' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'User Profile' })),
                  ),
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-cog fs-4' }),
                    ),
                    A(
                      { href: 'pages-account-settings-account.html', class: 'stretched-link' },
                      SPAN({ text: 'Setting' }),
                    ),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Account Settings' })),
                  ),
                ),
                DIV(
                  { class: 'row row-bordered overflow-visible g-0' },
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-help-circle fs-4' }),
                    ),
                    A(
                      { href: 'pages-help-center-landing.html', class: 'stretched-link' },
                      SPAN({ text: 'Help Center' }),
                    ),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'FAQs & Articles' })),
                  ),
                  DIV(
                    { class: 'dropdown-shortcuts-item col' },
                    SPAN(
                      { class: 'dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2' },
                      I({ class: 'bx bx-window-open fs-4' }),
                    ),
                    A({ href: 'modal-examples.html', class: 'stretched-link' }, SPAN({ text: 'Modals' })),
                    SMALL({ class: 'text-muted mb-0' }, SPAN({ text: 'Useful Popups' })),
                  ),
                ),
              ),
            ),
          ),
          LI(
            { class: 'nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1' },
            A(
              {
                class: 'nav-link dropdown-toggle hide-arrow',
                href: 'javascript:void(0);',
                'data-bs-toggle': 'dropdown',
                'data-bs-auto-close': 'outside',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-bell bx-sm' }),
              SPAN({ class: 'badge bg-danger rounded-pill badge-notifications' }, SPAN({ text: '5' })),
            ),
            UL(
              { class: 'dropdown-menu dropdown-menu-end py-0' },
              LI(
                { class: 'dropdown-menu-header border-bottom' },
                DIV(
                  { class: 'dropdown-header d-flex align-items-center py-3' },
                  H5({ class: 'text-body mb-0 me-auto' }, SPAN({ text: 'Notification' })),
                  A(
                    {
                      href: 'javascript:void(0)',
                      class: 'dropdown-notifications-all text-body',
                      'data-bs-toggle': 'tooltip',
                      'data-bs-placement': 'top',
                      title: 'Mark all as read',
                    },
                    I({ class: 'bx fs-4 bx-envelope-open' }),
                  ),
                ),
              ),
              LI(
                { class: 'dropdown-notifications-list scrollable-container' },
                UL(
                  { class: 'list-group list-group-flush' },
                  LI(
                    { class: 'list-group-item list-group-item-action dropdown-notifications-item' },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          IMG({ src: 'theme/sneat/1.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Congratulation Lettie 🎉' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'Won the monthly best seller gold badge' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '1h ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'list-group-item list-group-item-action dropdown-notifications-item' },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          SPAN({ class: 'avatar-initial rounded-circle bg-label-danger' }, SPAN({ text: 'CF' })),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Charles Franklin' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'Accepted your connection' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '12hr ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    {
                      class: 'list-group-item list-group-item-action dropdown-notifications-item marked-as-read',
                    },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          IMG({ src: 'theme/sneat/2.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'New Message ✉️' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'You have new message from Natalie' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '1h ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'list-group-item list-group-item-action dropdown-notifications-item' },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          SPAN({ class: 'avatar-initial rounded-circle bg-label-success' }, I({ class: 'bx bx-cart' })),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Whoo! You have new order 🛒' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'ACME Inc. made new order $1,154' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '1 day ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    {
                      class: 'list-group-item list-group-item-action dropdown-notifications-item marked-as-read',
                    },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          IMG({ src: 'theme/sneat/9.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Application has been approved 🚀' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'Your ABC project application has been approved.' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '2 days ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    {
                      class: 'list-group-item list-group-item-action dropdown-notifications-item marked-as-read',
                    },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          SPAN(
                            { class: 'avatar-initial rounded-circle bg-label-success' },
                            I({ class: 'bx bx-pie-chart-alt' }),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Monthly report is generated' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'July monthly financial report is generated' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '3 days ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    {
                      class: 'list-group-item list-group-item-action dropdown-notifications-item marked-as-read',
                    },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          IMG({ src: 'theme/sneat/5.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'Send connection request' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'Peter sent you connection request' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '4 days ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'list-group-item list-group-item-action dropdown-notifications-item' },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          IMG({ src: 'theme/sneat/6.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'New message from Jane' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'Your have new message from Jane' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '5 days ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    {
                      class: 'list-group-item list-group-item-action dropdown-notifications-item marked-as-read',
                    },
                    DIV(
                      { class: 'd-flex' },
                      DIV(
                        { class: 'flex-shrink-0 me-3' },
                        DIV(
                          { class: 'avatar' },
                          SPAN(
                            { class: 'avatar-initial rounded-circle bg-label-warning' },
                            I({ class: 'bx bx-error' }),
                          ),
                        ),
                      ),
                      DIV(
                        { class: 'flex-grow-1' },
                        H6({ class: 'mb-1' }, SPAN({ text: 'CPU is running high' })),
                        P({ class: 'mb-0' }, SPAN({ text: 'CPU Utilization Percent is currently at 88.63%,' })),
                        SMALL({ class: 'text-muted' }, SPAN({ text: '5 days ago' })),
                      ),
                      DIV(
                        { class: 'flex-shrink-0 dropdown-notifications-actions' },
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-read' },
                          SPAN({ class: 'badge badge-dot' }),
                        ),
                        A(
                          { href: 'javascript:void(0)', class: 'dropdown-notifications-archive' },
                          SPAN({ class: 'bx bx-x' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              LI(
                { class: 'dropdown-menu-footer border-top' },
                A(
                  { href: 'javascript:void(0);', class: 'dropdown-item d-flex justify-content-center p-3' },
                  SPAN({ text: 'View all notifications' }),
                ),
              ),
            ),
          ),
          LI(
            { class: 'nav-item navbar-dropdown dropdown-user dropdown' },
            A(
              {
                class: 'nav-link dropdown-toggle hide-arrow',
                href: 'javascript:void(0);',
                'data-bs-toggle': 'dropdown',
              },
              DIV(
                { class: 'avatar avatar-online' },
                IMG({ src: 'theme/sneat/1.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
              ),
            ),
            UL(
              { class: 'dropdown-menu dropdown-menu-end' },
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-account-settings-account.html' },
                  DIV(
                    { class: 'd-flex' },
                    DIV(
                      { class: 'flex-shrink-0 me-3' },
                      DIV(
                        { class: 'avatar avatar-online' },
                        IMG({ src: 'theme/sneat/1.png', alt: 'alt', class: 'w-px-40 h-auto rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'flex-grow-1' },
                      SPAN({ class: 'fw-semibold d-block' }, SPAN({ text: 'John Doe' })),
                      SMALL({ class: 'text-muted' }, SPAN({ text: 'Admin' })),
                    ),
                  ),
                ),
              ),
              LI({}, DIV({ class: 'dropdown-divider' })),
              LI(
                {},
                A(
                  {
                    class: 'dropdown-item',
                    href: `#${JSON.stringify({ form: 'user~profile', container: 'formContent' })}`,
                  },
                  I({ class: 'bx bx-user me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'My Profile' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-account-settings-account.html' },
                  I({ class: 'bx bx-cog me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'Settings' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-account-settings-billing.html' },
                  SPAN(
                    { class: 'd-flex align-items-center align-middle' },
                    I({ class: 'flex-shrink-0 bx bx-credit-card me-2' }),
                    SPAN({ class: 'flex-grow-1 align-middle' }, SPAN({ text: 'Billing' })),
                    SPAN(
                      { class: 'flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20' },
                      SPAN({ text: '4' }),
                    ),
                  ),
                ),
              ),
              LI({}, DIV({ class: 'dropdown-divider' })),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-help-center-landing.html' },
                  I({ class: 'bx bx-support me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'Help' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-faq.html' },
                  I({ class: 'bx bx-help-circle me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'FAQ' })),
                ),
              ),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'pages-pricing.html' },
                  I({ class: 'bx bx-dollar me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'Pricing' })),
                ),
              ),
              LI({}, DIV({ class: 'dropdown-divider' })),
              LI(
                {},
                A(
                  { class: 'dropdown-item', href: 'auth-login-cover.html', target: '_blank' },
                  I({ class: 'bx bx-power-off me-2' }),
                  SPAN({ class: 'align-middle' }, SPAN({ text: 'Log Out' })),
                ),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'navbar-search-wrapper search-input-wrapper d-none' },
        INPUT({
          type: 'text',
          class: 'form-control search-input container-xxl border-0',
          placeholder: 'Search...',
          'aria-label': 'Search...',
        }),
        I({ class: 'bx bx-x bx-sm search-toggler cursor-pointer' }),
      ),
    ),
  ],
  func: () => {},
  style: ``,
});
