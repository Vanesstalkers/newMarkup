({
  col: 'user',
  config: { disableCardStyle: true },
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: () => [
    H4(
      { class: 'fw-bold py-3 mb-4' },
      SPAN({ class: 'text-muted fw-light' }, SPAN({ text: 'User Profile /' })),
      SPAN({ text: 'Profile' }),
    ),
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12' },
        DIV(
          { class: 'card mb-4' },
          DIV(
            { class: 'user-profile-header-banner' },
            IMG({ src: '../../assets/img/pages/profile-banner.png', alt: 'Banner image', class: 'rounded-top' }),
          ),
          DIV(
            { class: 'user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4' },
            DIV(
              { class: 'flex-shrink-0 mt-n2 mx-sm-0 mx-auto' },
              IMG({
                src: '../../assets/img/avatars/1.png',
                alt: 'user image',
                class: 'd-block h-auto ms-0 ms-sm-4 rounded user-profile-img',
              }),
            ),
            DIV(
              { class: 'flex-grow-1 mt-3 mt-sm-5' },
              DIV(
                {
                  class:
                    'd-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4',
                },
                DIV(
                  { class: 'user-profile-info' },
                  H4({}, SPAN({ text: 'John Doe' })),
                  UL(
                    {
                      class:
                        'list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2',
                    },
                    LI(
                      { class: 'list-inline-item fw-semibold' },
                      I({ class: 'bx bx-pen' }),
                      SPAN({ text: 'UX Designer' }),
                    ),
                    LI(
                      { class: 'list-inline-item fw-semibold' },
                      I({ class: 'bx bx-map' }),
                      SPAN({ text: 'Vatican City' }),
                    ),
                    LI(
                      { class: 'list-inline-item fw-semibold' },
                      I({ class: 'bx bx-calendar-alt' }),
                      SPAN({ text: 'Joined April 2021' }),
                    ),
                  ),
                ),
                A(
                  { href: 'javascript:void(0)', class: 'btn btn-primary text-nowrap' },
                  I({ class: 'bx bx-user-check me-1' }),
                  SPAN({ text: 'Connected' }),
                ),
              ),
            ),
          ),
        ),
      ),
    ),
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-md-12' },
        UL(
          { class: 'nav nav-pills flex-column flex-sm-row mb-4' },
          LI(
            { class: 'nav-item' },
            A(
              { class: 'nav-link active', href: 'javascript:void(0);' },
              I({ class: 'bx bx-user me-1' }),
              SPAN({ text: 'Profile' }),
            ),
          ),
          LI(
            { class: 'nav-item' },
            A(
              { class: 'nav-link', href: 'pages-profile-teams.html' },
              I({ class: 'bx bx-group me-1' }),
              SPAN({ text: 'Teams' }),
            ),
          ),
          LI(
            { class: 'nav-item' },
            A(
              { class: 'nav-link', href: 'pages-profile-projects.html' },
              I({ class: 'bx bx-grid-alt me-1' }),
              SPAN({ text: 'Projects' }),
            ),
          ),
          LI(
            { class: 'nav-item' },
            A(
              { class: 'nav-link', href: 'pages-profile-connections.html' },
              I({ class: 'bx bx-link-alt me-1' }),
              SPAN({ text: 'Connections' }),
            ),
          ),
        ),
      ),
    ),
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-xl-4 col-lg-5 col-md-5' },
        HTML('core/default~card', {
          title: 'Информация',
          html: [
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-12' },
                COMPLEX(
                  {
                    name: 'pp_info',
                    col: 'pp',
                    links: { 'user~profile': '__pp' },
                    add: false,
                    config: { disableCardStyle: true },
                  },
                  ({ data }) => [
                    HTML('pp~info', {
                      phonesConfig: {
                        name: 'pp_phone',
                        links: { pp_phone: { pp_info: `__pp` }, pp_info: '__phone' },
                      },
                      emailsConfig: {
                        name: 'pp_email',
                        links: { pp_email: { pp_info: `__pp` }, pp_info: '__email' },
                      },
                    }),
                  ],
                ),
              ),
            ),
          ],
        }),

        DIV(
          { class: 'card mb-4' },
          DIV(
            { class: 'card-body' },
            SMALL({ class: 'text-muted text-uppercase' }, SPAN({ text: 'About' })),
            UL(
              { class: 'list-unstyled mb-4 mt-3' },
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-user' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Full Name:' })),
                SPAN({}, SPAN({ text: 'John Doe' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-check' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Status:' })),
                SPAN({}, SPAN({ text: 'Active' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-star' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Role:' })),
                SPAN({}, SPAN({ text: 'Developer' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-flag' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Country:' })),
                SPAN({}, SPAN({ text: 'USA' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-detail' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Languages:' })),
                SPAN({}, SPAN({ text: 'English' })),
              ),
            ),
            SMALL({ class: 'text-muted text-uppercase' }, SPAN({ text: 'Contacts' })),
            UL(
              { class: 'list-unstyled mb-4 mt-3' },
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-phone' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Contact:' })),
                SPAN({}, SPAN({ text: '(123) 456-7890' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-chat' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Skype:' })),
                SPAN({}, SPAN({ text: 'john.doe' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-envelope' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Email:' })),
                SPAN({}, SPAN({ text: 'john.doe@example.com' })),
              ),
            ),
            SMALL({ class: 'text-muted text-uppercase' }, SPAN({ text: 'Teams' })),
            UL(
              { class: 'list-unstyled mt-3 mb-0' },
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bxl-github text-primary me-2' }),
                DIV(
                  { class: 'd-flex flex-wrap' },
                  SPAN({ class: 'fw-semibold me-2' }, SPAN({ text: 'Backend Developer' })),
                  SPAN({}, SPAN({ text: '(126 Members)' })),
                ),
              ),
              LI(
                { class: 'd-flex align-items-center' },
                I({ class: 'bx bxl-react text-info me-2' }),
                DIV(
                  { class: 'd-flex flex-wrap' },
                  SPAN({ class: 'fw-semibold me-2' }, SPAN({ text: 'React Developer' })),
                  SPAN({}, SPAN({ text: '(98 Members)' })),
                ),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'card mb-4' },
          DIV(
            { class: 'card-body' },
            SMALL({ class: 'text-muted text-uppercase' }, SPAN({ text: 'Overview' })),
            UL(
              { class: 'list-unstyled mt-3 mb-0' },
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-check' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Task Compiled:' })),
                SPAN({}, SPAN({ text: '13.5k' })),
              ),
              LI(
                { class: 'd-flex align-items-center mb-3' },
                I({ class: 'bx bx-customize' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Projects Compiled:' })),
                SPAN({}, SPAN({ text: '146' })),
              ),
              LI(
                { class: 'd-flex align-items-center' },
                I({ class: 'bx bx-user' }),
                SPAN({ class: 'fw-semibold mx-2' }, SPAN({ text: 'Connections:' })),
                SPAN({}, SPAN({ text: '897' })),
              ),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'col-xl-8 col-lg-7 col-md-7' },

        HTML('core/default~card', {
          html: [
            DIV(
              { class: 'row' },
              DIV({ class: 'col-6' }, HTML('user/fields~login')),
              DIV({ class: 'col-6' }, HTML('user/fields~pswd', { showGenBtn: true })),
              DIV({ class: 'col-12' }, HTML('user~roles')),
            ),
          ],
        }),

        DIV(
          { class: 'card card-action mb-4' },
          DIV(
            { class: 'card-header align-items-center' },
            H5(
              { class: 'card-action-title mb-0' },
              I({ class: 'bx bx-list-ul me-2' }),
              SPAN({ text: 'Activity Timeline' }),
            ),
            DIV(
              { class: 'card-action-element' },
              DIV(
                { class: 'dropdown' },
                BUTTON(
                  {
                    type: 'button',
                    class: 'btn dropdown-toggle hide-arrow p-0',
                    'data-bs-toggle': 'dropdown',
                    'aria-expanded': 'false',
                  },
                  I({ class: 'bx bx-dots-vertical-rounded' }),
                ),
                UL(
                  { class: 'dropdown-menu dropdown-menu-end' },
                  LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share timeline' }))),
                  LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Suggest edits' }))),
                  LI({}, HR({ class: 'dropdown-divider' })),
                  LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Report bug' }))),
                ),
              ),
            ),
          ),
          DIV(
            { class: 'card-body' },
            UL(
              { class: 'timeline ms-2' },
              LI(
                { class: 'timeline-item timeline-item-transparent' },
                SPAN({ class: 'timeline-point timeline-point-warning' }),
                DIV(
                  { class: 'timeline-event' },
                  DIV(
                    { class: 'timeline-header mb-1' },
                    H6({ class: 'mb-0' }, SPAN({ text: 'Client Meeting' })),
                    SMALL({ class: 'text-muted' }, SPAN({ text: 'Today' })),
                  ),
                  P({ class: 'mb-2' }, SPAN({ text: 'Project meeting with john @10:15am' })),
                  DIV(
                    { class: 'd-flex flex-wrap' },
                    DIV(
                      { class: 'avatar me-3' },
                      IMG({ src: '../../assets/img/avatars/3.png', alt: 'Avatar', class: 'rounded-circle' }),
                    ),
                    DIV(
                      {},
                      H6({ class: 'mb-0' }, SPAN({ text: 'Lester McCarthy (Client)' })),
                      SPAN({}, SPAN({ text: 'CEO of Infibeam' })),
                    ),
                  ),
                ),
              ),
              LI(
                { class: 'timeline-item timeline-item-transparent' },
                SPAN({ class: 'timeline-point timeline-point-info' }),
                DIV(
                  { class: 'timeline-event' },
                  DIV(
                    { class: 'timeline-header mb-1' },
                    H6({ class: 'mb-0' }, SPAN({ text: 'Create a new project for client' })),
                    SMALL({ class: 'text-muted' }, SPAN({ text: '2 Day Ago' })),
                  ),
                  P({ class: 'mb-0' }, SPAN({ text: 'Add files to new design folder' })),
                ),
              ),
              LI(
                { class: 'timeline-item timeline-item-transparent' },
                SPAN({ class: 'timeline-point timeline-point-primary' }),
                DIV(
                  { class: 'timeline-event' },
                  DIV(
                    { class: 'timeline-header mb-1' },
                    H6({ class: 'mb-0' }, SPAN({ text: 'Shared 2 New Project Files' })),
                    SMALL({ class: 'text-muted' }, SPAN({ text: '6 Day Ago' })),
                  ),
                  P(
                    { class: 'mb-2' },
                    SPAN({ text: 'Sent by Mollie Dixon' }),
                    IMG({
                      src: '../../assets/img/avatars/4.png',
                      class: 'rounded-circle ms-3',
                      alt: 'avatar',
                      height: '20',
                      width: '20',
                    }),
                  ),
                  DIV(
                    { class: 'd-flex flex-wrap gap-2' },
                    A(
                      { href: 'javascript:void(0)', class: 'me-3' },
                      IMG({
                        src: '../../assets/img/icons/misc/pdf.png',
                        alt: 'Document image',
                        width: '20',
                        class: 'me-2',
                      }),
                      SPAN({ class: 'h6' }, SPAN({ text: 'App Guidelines' })),
                    ),
                    A(
                      { href: 'javascript:void(0)' },
                      IMG({
                        src: '../../assets/img/icons/misc/doc.png',
                        alt: 'Excel image',
                        width: '20',
                        class: 'me-2',
                      }),
                      SPAN({ class: 'h6' }, SPAN({ text: 'Testing Results' })),
                    ),
                  ),
                ),
              ),
              LI(
                { class: 'timeline-item timeline-item-transparent' },
                SPAN({ class: 'timeline-point timeline-point-success' }),
                DIV(
                  { class: 'timeline-event pb-0' },
                  DIV(
                    { class: 'timeline-header mb-1' },
                    H6({ class: 'mb-0' }, SPAN({ text: 'Project status updated' })),
                    SMALL({ class: 'text-muted' }, SPAN({ text: '10 Day Ago' })),
                  ),
                  P({ class: 'mb-0' }, SPAN({ text: 'Woocommerce iOS App Completed' })),
                ),
              ),
              LI({ class: 'timeline-end-indicator' }, I({ class: 'bx bx-check-circle' })),
            ),
          ),
        ),
        DIV(
          { class: 'row' },
          DIV(
            { class: 'col-lg-12 col-xl-6' },
            DIV(
              { class: 'card card-action mb-4' },
              DIV(
                { class: 'card-header align-items-center' },
                H5({ class: 'card-action-title mb-0' }, SPAN({ text: 'Connections' })),
                DIV(
                  { class: 'card-action-element' },
                  DIV(
                    { class: 'dropdown' },
                    BUTTON(
                      {
                        type: 'button',
                        class: 'btn dropdown-toggle hide-arrow p-0',
                        'data-bs-toggle': 'dropdown',
                        'aria-expanded': 'false',
                      },
                      I({ class: 'bx bx-dots-vertical-rounded' }),
                    ),
                    UL(
                      { class: 'dropdown-menu dropdown-menu-end' },
                      LI(
                        {},
                        A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share connections' })),
                      ),
                      LI(
                        {},
                        A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Suggest edits' })),
                      ),
                      LI({}, HR({ class: 'dropdown-divider' })),
                      LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Report bug' }))),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'card-body' },
                UL(
                  { class: 'list-unstyled mb-0' },
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-start' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({ src: '../../assets/img/avatars/2.png', alt: 'Avatar', class: 'rounded-circle' }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Cecilia Payne' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '45 Connections' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        BUTTON({ class: 'btn btn-label-primary btn-icon btn-sm' }, I({ class: 'bx bx-user' })),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-start' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({ src: '../../assets/img/avatars/3.png', alt: 'Avatar', class: 'rounded-circle' }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Curtis Fletcher' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '1.32k Connections' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        BUTTON({ class: 'btn btn-primary btn-icon btn-sm' }, I({ class: 'bx bx-user' })),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-start' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({ src: '../../assets/img/avatars/10.png', alt: 'Avatar', class: 'rounded-circle' }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Alice Stone' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '125 Connections' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        BUTTON({ class: 'btn btn-primary btn-icon btn-sm' }, I({ class: 'bx bx-user' })),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-start' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Darrell Barnes' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '456 Connections' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        BUTTON({ class: 'btn btn-label-primary btn-icon btn-sm' }, I({ class: 'bx bx-user' })),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-start' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({ src: '../../assets/img/avatars/12.png', alt: 'Avatar', class: 'rounded-circle' }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Eugenia Moore' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '1.2k Connections' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        BUTTON({ class: 'btn btn-label-primary btn-icon btn-sm' }, I({ class: 'bx bx-user' })),
                      ),
                    ),
                  ),
                  LI({ class: 'text-center' }, A({ href: 'javascript:;' }, SPAN({ text: 'View all connections' }))),
                ),
              ),
            ),
          ),
          DIV(
            { class: 'col-lg-12 col-xl-6' },
            DIV(
              { class: 'card card-action mb-4' },
              DIV(
                { class: 'card-header align-items-center' },
                H5({ class: 'card-action-title mb-0' }, SPAN({ text: 'Teams' })),
                DIV(
                  { class: 'card-action-element' },
                  DIV(
                    { class: 'dropdown' },
                    BUTTON(
                      {
                        type: 'button',
                        class: 'btn dropdown-toggle hide-arrow p-0',
                        'data-bs-toggle': 'dropdown',
                        'aria-expanded': 'false',
                      },
                      I({ class: 'bx bx-dots-vertical-rounded' }),
                    ),
                    UL(
                      { class: 'dropdown-menu dropdown-menu-end' },
                      LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share teams' }))),
                      LI(
                        {},
                        A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Suggest edits' })),
                      ),
                      LI({}, HR({ class: 'dropdown-divider' })),
                      LI({}, A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Report bug' }))),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'card-body' },
                UL(
                  { class: 'list-unstyled mb-0' },
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-center' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({
                            src: '../../assets/img/icons/brands/react-label.png',
                            alt: 'Avatar',
                            class: 'rounded-circle',
                          }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'React Developers' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '72 Members' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        A(
                          { href: 'javascript:;' },
                          SPAN({ class: 'badge bg-label-danger' }, SPAN({ text: 'Developer' })),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-center' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({
                            src: '../../assets/img/icons/brands/support-label.png',
                            alt: 'Avatar',
                            class: 'rounded-circle',
                          }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Support Team' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '122 Members' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        A(
                          { href: 'javascript:;' },
                          SPAN({ class: 'badge bg-label-primary' }, SPAN({ text: 'Support' })),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-center' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({
                            src: '../../assets/img/icons/brands/figma-label.png',
                            alt: 'Avatar',
                            class: 'rounded-circle',
                          }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'UI Designers' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '7 Members' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        A({ href: 'javascript:;' }, SPAN({ class: 'badge bg-label-info' }, SPAN({ text: 'Designer' }))),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-center' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({
                            src: '../../assets/img/icons/brands/vue-label.png',
                            alt: 'Avatar',
                            class: 'rounded-circle',
                          }),
                        ),
                        DIV(
                          { class: 'me-2' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Vue.js Developers' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '289 Members' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        A(
                          { href: 'javascript:;' },
                          SPAN({ class: 'badge bg-label-danger' }, SPAN({ text: 'Developer' })),
                        ),
                      ),
                    ),
                  ),
                  LI(
                    { class: 'mb-3' },
                    DIV(
                      { class: 'd-flex align-items-center' },
                      DIV(
                        { class: 'd-flex align-items-start' },
                        DIV(
                          { class: 'avatar me-3' },
                          IMG({
                            src: '../../assets/img/icons/brands/twitter-label.png',
                            alt: 'Avatar',
                            class: 'rounded-circle',
                          }),
                        ),
                        DIV(
                          { class: 'me-w' },
                          H6({ class: 'mb-0' }, SPAN({ text: 'Digital Marketing' })),
                          SMALL({ class: 'text-muted' }, SPAN({ text: '24 Members' })),
                        ),
                      ),
                      DIV(
                        { class: 'ms-auto' },
                        A(
                          { href: 'javascript:;' },
                          SPAN({ class: 'badge bg-label-secondary' }, SPAN({ text: 'Marketing' })),
                        ),
                      ),
                    ),
                  ),
                  LI({ class: 'text-center' }, A({ href: 'javascript:;' }, SPAN({ text: 'View all teams' }))),
                ),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'card mb-4' },
          DIV(
            { class: 'card-datatable table-responsive' },
            DIV(
              { id: 'DataTables_Table_0_wrapper', class: 'dataTables_wrapper dt-bootstrap5 no-footer' },
              DIV(
                { class: 'card-header pb-0 pt-sm-0' },
                DIV({ class: 'head-label text-center' }, H5({ class: 'card-title mb-0' }, SPAN({ text: 'Projects' }))),
                DIV(
                  { class: 'd-flex justify-content-center justify-content-md-end' },
                  DIV(
                    { id: 'DataTables_Table_0_filter', class: 'dataTables_filter' },
                    LABEL(
                      {},
                      SPAN({ text: 'Search:' }),
                      INPUT({
                        type: 'search',
                        class: 'form-control',
                        placeholder: '',
                        'aria-controls': 'DataTables_Table_0',
                      }),
                    ),
                  ),
                ),
              ),
              TABLE(
                {
                  class: 'datatables-projects border-top table dataTable no-footer dtr-column collapsed',
                  id: 'DataTables_Table_0',
                  'aria-describedby': 'DataTables_Table_0_info',
                  style: 'width: 838px;',
                },
                THEAD(
                  {},
                  TR(
                    {},
                    TH({
                      class: 'control sorting_disabled',
                      rowspan: '1',
                      colspan: '1',
                      style: 'width: 0px;',
                      'aria-label': '',
                    }),
                    TH(
                      {
                        class: 'sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 18px;',
                        'data-col': '1',
                        'aria-label': '',
                      },
                      INPUT({ type: 'checkbox', class: 'form-check-input' }),
                    ),
                    TH(
                      {
                        class: 'sorting sorting_desc',
                        tabindex: '0',
                        'aria-controls': 'DataTables_Table_0',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 178px;',
                        'aria-label': 'Name: activate to sort column ascending',
                        'aria-sort': 'descending',
                      },
                      SPAN({ text: 'Name' }),
                    ),
                    TH(
                      {
                        class: 'sorting',
                        tabindex: '0',
                        'aria-controls': 'DataTables_Table_0',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 65px;',
                        'aria-label': 'Leader: activate to sort column ascending',
                      },
                      SPAN({ text: 'Leader' }),
                    ),
                    TH(
                      {
                        class: 'sorting_disabled dtr-hidden',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 60px; display: none;',
                        'aria-label': 'Team',
                      },
                      SPAN({ text: 'Team' }),
                    ),
                    TH(
                      {
                        class: 'w-px-200 sorting dtr-hidden',
                        tabindex: '0',
                        'aria-controls': 'DataTables_Table_0',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 200px; display: none;',
                        'aria-label': 'Status: activate to sort column ascending',
                      },
                      SPAN({ text: 'Status' }),
                    ),
                    TH(
                      {
                        class: 'sorting_disabled dtr-hidden',
                        rowspan: '1',
                        colspan: '1',
                        style: 'width: 63px; display: none;',
                        'aria-label': 'Actions',
                      },
                      SPAN({ text: 'Actions' }),
                    ),
                  ),
                ),
                TBODY(
                  {},
                  TR(
                    { class: 'odd' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            SPAN({ class: 'avatar-initial rounded-circle bg-label-primary' }, SPAN({ text: 'WS' })),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Website SEO' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '10 May 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Eileen' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/10.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/3.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/2.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/8.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 38%',
                            'aria-valuenow': '38%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '38%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'even' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/social-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Social Banners' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '03 Jan 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Owen' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/11.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/10.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 45%',
                            'aria-valuenow': '45%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '45%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'odd' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/sketch-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Logo Designs' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '12 Aug 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Keith' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/5.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/7.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/12.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/4.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 92%',
                            'aria-valuenow': '92%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '92%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'even' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/sketch-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'IOS App Design' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '19 Apr 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Merline' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/2.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/8.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/5.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/1.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 56%',
                            'aria-valuenow': '56%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '56%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'odd' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/figma-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Figma Dashboards' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '08 Apr 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Harmonia' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/9.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/2.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/4.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 25%',
                            'aria-valuenow': '25%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '25%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'even' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/html-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Crypto Admin' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '29 Sept 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Allyson' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/7.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/3.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/7.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/2.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 36%',
                            'aria-valuenow': '36%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '36%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                  TR(
                    { class: 'odd' },
                    TD({ class: 'control', tabindex: '0', style: '' }),
                    TD(
                      { class: '  dt-checkboxes-cell' },
                      INPUT({ type: 'checkbox', class: 'dt-checkboxes form-check-input' }),
                    ),
                    TD(
                      { class: 'sorting_1' },
                      DIV(
                        { class: 'd-flex justify-content-left align-items-center' },
                        DIV(
                          { class: 'avatar-wrapper' },
                          DIV(
                            { class: 'avatar me-2' },
                            IMG({
                              src: '../../assets/img/icons/brands/react-label.png',
                              alt: 'Avatar',
                              class: 'rounded-circle',
                            }),
                          ),
                        ),
                        DIV(
                          { class: 'd-flex flex-column' },
                          SPAN({ class: 'text-truncate fw-bold' }, SPAN({ text: 'Create Website' })),
                          SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: '20 Mar 2021' })),
                        ),
                      ),
                    ),
                    TD({}, SPAN({ text: 'Georgie' })),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center avatar-group' },
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/2.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/6.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/5.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                        DIV(
                          { class: 'avatar avatar-xs' },
                          IMG({
                            src: '../../assets/img/avatars/3.png',
                            alt: 'Avatar',
                            class: 'rounded-circle pull-up',
                          }),
                        ),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-flex align-items-center' },
                        DIV(
                          { class: 'progress w-100 me-3', style: 'height: 6px;' },
                          DIV({
                            class: 'progress-bar',
                            style: 'width: 72%',
                            'aria-valuenow': '72%',
                            'aria-valuemin': '0',
                            'aria-valuemax': '100',
                          }),
                        ),
                        SPAN({}, SPAN({ text: '72%' })),
                      ),
                    ),
                    TD(
                      { class: 'dtr-hidden', style: 'display: none;' },
                      DIV(
                        { class: 'd-inline-block' },
                        A(
                          {
                            href: 'javascript:;',
                            class: 'btn btn-sm btn-icon dropdown-toggle hide-arrow',
                            'data-bs-toggle': 'dropdown',
                          },
                          I({ class: 'bx bx-dots-vertical-rounded' }),
                        ),
                        DIV(
                          { class: 'dropdown-menu dropdown-menu-end m-0' },
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Details' })),
                          A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Archive' })),
                          DIV({ class: 'dropdown-divider' }),
                          A(
                            { href: 'javascript:;', class: 'dropdown-item text-danger delete-record' },
                            SPAN({ text: 'Delete' }),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              DIV(
                { class: 'row mx-2' },
                DIV(
                  { class: 'col-sm-12 col-md-6' },
                  DIV(
                    { class: 'dataTables_info', id: 'DataTables_Table_0_info', role: 'status', 'aria-live': 'polite' },
                    SPAN({ text: 'Showing 1 to 7 of 10 entries' }),
                  ),
                ),
                DIV(
                  { class: 'col-sm-12 col-md-6' },
                  DIV(
                    { class: 'dataTables_paginate paging_simple_numbers', id: 'DataTables_Table_0_paginate' },
                    UL(
                      { class: 'pagination' },
                      LI(
                        { class: 'paginate_button page-item previous disabled', id: 'DataTables_Table_0_previous' },
                        A(
                          {
                            href: '#',
                            'aria-controls': 'DataTables_Table_0',
                            'data-dt-idx': 'previous',
                            tabindex: '0',
                            class: 'page-link',
                          },
                          SPAN({ text: 'Previous' }),
                        ),
                      ),
                      LI(
                        { class: 'paginate_button page-item active' },
                        A(
                          {
                            href: '#',
                            'aria-controls': 'DataTables_Table_0',
                            'data-dt-idx': '0',
                            tabindex: '0',
                            class: 'page-link',
                          },
                          SPAN({ text: '1' }),
                        ),
                      ),
                      LI(
                        { class: 'paginate_button page-item ' },
                        A(
                          {
                            href: '#',
                            'aria-controls': 'DataTables_Table_0',
                            'data-dt-idx': '1',
                            tabindex: '0',
                            class: 'page-link',
                          },
                          SPAN({ text: '2' }),
                        ),
                      ),
                      LI(
                        { class: 'paginate_button page-item next', id: 'DataTables_Table_0_next' },
                        A(
                          {
                            href: '#',
                            'aria-controls': 'DataTables_Table_0',
                            'data-dt-idx': 'next',
                            tabindex: '0',
                            class: 'page-link',
                          },
                          SPAN({ text: 'Next' }),
                        ),
                      ),
                    ),
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
