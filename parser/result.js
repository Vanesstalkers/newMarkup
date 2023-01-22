[
  DIV(
    { class: 'row' },
    DIV(
      { class: 'col-md-6 col-lg-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex align-items-center justify-content-between' },
          H5({ class: 'card-title m-0 me-2' }, SPAN({ text: 'Customer Ratings' })),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn p-0',
                type: 'button',
                id: 'customerRatings',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-dots-vertical-rounded' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'customerRatings' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Featured Ratings' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Based on Task' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'See All' })),
            ),
          ),
        ),
        DIV(
          { class: 'card-body pb-0' },
          DIV(
            { class: 'd-flex align-items-center gap-3 mb-3' },
            H1({ class: 'display-3 mb-0' }, SPAN({ text: '4.0' })),
            DIV(
              { class: 'ratings' },
              I({ class: 'bx bxs-star bx-sm text-warning' }),
              I({ class: 'bx bxs-star bx-sm text-warning' }),
              I({ class: 'bx bxs-star bx-sm text-warning' }),
              I({ class: 'bx bxs-star bx-sm text-warning' }),
              I({ class: 'bx bxs-star bx-sm text-lighter' }),
            ),
          ),
          DIV(
            { class: 'd-flex align-items-center' },
            SPAN({ class: 'badge bg-label-primary me-3' }, SPAN({ text: '+5.0' })),
            SPAN({}, SPAN({ text: 'Points from last month' })),
          ),
        ),
        DIV({ id: 'customerRatingsChart' }),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header' },
          H5({ class: 'card-title mb-0' }, SPAN({ text: 'Overview & Sales Activity' })),
          SMALL({ class: 'card-subtitle' }, SPAN({ text: 'Check out each column for more details' })),
        ),
        DIV({ id: 'salesActivityChart' }),
      ),
    ),
    DIV(
      { class: 'col-12 col-md-12 col-lg-4' },
      DIV(
        { class: 'row' },
        DIV(
          { class: 'col-sm-6 col-md-3 col-lg-6 mb-4' },
          DIV(
            { class: 'card' },
            DIV(
              { class: 'card-body pb-0' },
              SPAN({ class: 'd-block fw-semibold mb-1' }, SPAN({ text: 'Sessions' })),
              H3({ class: 'card-title mb-2' }, SPAN({ text: '2,845' })),
            ),
            DIV({ id: 'sessionsChart', class: 'mb-3' }),
          ),
        ),
        DIV(
          { class: 'col-sm-6 col-md-3 col-lg-6 mb-4' },
          DIV(
            { class: 'card' },
            DIV(
              { class: 'card-body' },
              DIV(
                { class: 'card-title d-flex align-items-start justify-content-between mb-4' },
                DIV(
                  { class: 'avatar flex-shrink-0' },
                  IMG({ src: '../../assets/img/icons/unicons/cube-secondary.png', alt: 'cube', class: 'rounded' }),
                ),
                DIV(
                  { class: 'dropdown' },
                  BUTTON(
                    {
                      class: 'btn p-0',
                      type: 'button',
                      id: 'cardOpt2',
                      'data-bs-toggle': 'dropdown',
                      'aria-haspopup': 'true',
                      'aria-expanded': 'false',
                    },
                    I({ class: 'bx bx-dots-vertical-rounded' }),
                  ),
                  DIV(
                    { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'cardOpt2' },
                    A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'View More' })),
                    A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Delete' })),
                  ),
                ),
              ),
              SPAN({ class: 'fw-semibold d-block mb-1' }, SPAN({ text: 'Order' })),
              H4({ class: 'card-title mb-2' }, SPAN({ text: '$1,286' })),
              SMALL(
                { class: 'text-danger fw-semibold' },
                I({ class: 'bx bx-down-arrow-alt' }),
                SPAN({ text: '-13.24%' }),
              ),
            ),
          ),
        ),
        DIV(
          { class: 'col-12 col-md-6 col-lg-12 mb-4' },
          DIV(
            { class: 'card' },
            DIV(
              { class: 'card-body' },
              DIV(
                { class: 'd-flex justify-content-between' },
                DIV(
                  { class: 'd-flex flex-column' },
                  DIV(
                    { class: 'card-title mb-auto' },
                    H5({ class: 'mb-0' }, SPAN({ text: 'Generated Leads' })),
                    SMALL({}, SPAN({ text: 'Monthly Report' })),
                  ),
                  DIV(
                    { class: 'chart-statistics' },
                    H3({ class: 'card-title mb-1' }, SPAN({ text: '4,230' })),
                    SMALL(
                      { class: 'text-success text-nowrap fw-semibold' },
                      I({ class: 'bx bx-up-arrow-alt' }),
                      SPAN({ text: '+12.8%' }),
                    ),
                  ),
                ),
                DIV({ id: 'leadsReportChart' }),
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
      { class: 'col-12 col-lg-8 mb-4' },
      DIV(
        { class: 'card' },
        DIV(
          { class: 'row row-bordered g-0' },
          DIV(
            { class: 'col-md-6' },
            DIV(
              { class: 'card-header d-flex align-items-center justify-content-between mb-4' },
              H5(
                { class: 'card-title m-0 me-2' },
                SPAN({ text: 'Top Products by' }),
                SPAN({ class: 'text-primary' }, SPAN({ text: 'Sales' })),
              ),
              DIV(
                { class: 'dropdown' },
                BUTTON(
                  {
                    class: 'btn p-0',
                    type: 'button',
                    id: 'topSales',
                    'data-bs-toggle': 'dropdown',
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false',
                  },
                  I({ class: 'bx bx-dots-vertical-rounded' }),
                ),
                DIV(
                  { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'topSales' },
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last 28 Days' })),
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Month' })),
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Year' })),
                ),
              ),
            ),
            DIV(
              { class: 'card-body' },
              UL(
                { class: 'p-0 m-0' },
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/oneplus.png', alt: 'oneplus' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Oneplus Nord' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Oneplus' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-1' },
                      SPAN({ class: 'fw-bold' }, SPAN({ text: '$98,348' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/watch-primary.png', alt: 'smart band' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Smart Band 4' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Xiaomi' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-1' },
                      SPAN({ class: 'fw-bold' }, SPAN({ text: '$15,459' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/surface.png', alt: 'Surface' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Surface Pro X' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Miscrosoft' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-1' },
                      SPAN({ class: 'fw-bold' }, SPAN({ text: '$4,589' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/iphone.png', alt: 'iphone' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'iphone 13' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Apple' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-1' },
                      SPAN({ class: 'fw-bold' }, SPAN({ text: '$84,345' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/earphone.png', alt: 'Bluetooth Earphone' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Bluetooth Earphone' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Beats' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-1' },
                      SPAN({ class: 'fw-bold' }, SPAN({ text: '$10,374' })),
                    ),
                  ),
                ),
              ),
            ),
          ),
          DIV(
            { class: 'col-md-6' },
            DIV(
              { class: 'card-header d-flex align-items-center justify-content-between mb-4' },
              H5(
                { class: 'card-title m-0 me-2' },
                SPAN({ text: 'Top Products by' }),
                SPAN({ class: 'text-primary' }, SPAN({ text: 'Volume' })),
              ),
              DIV(
                { class: 'dropdown' },
                BUTTON(
                  {
                    class: 'btn p-0',
                    type: 'button',
                    id: 'topVolume',
                    'data-bs-toggle': 'dropdown',
                    'aria-haspopup': 'true',
                    'aria-expanded': 'false',
                  },
                  I({ class: 'bx bx-dots-vertical-rounded' }),
                ),
                DIV(
                  { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'topVolume' },
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last 28 Days' })),
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Month' })),
                  A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Year' })),
                ),
              ),
            ),
            DIV(
              { class: 'card-body' },
              UL(
                { class: 'p-0 m-0' },
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({
                      src: '../../assets/img/icons/unicons/laptop-secondary.png',
                      alt: 'ENVY Laptop',
                      class: 'rounded',
                    }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'ENVY Laptop' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'HP' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-3' },
                      SPAN({ class: 'fw-semibold' }, SPAN({ text: '124k' })),
                      SPAN({ class: 'badge bg-label-success' }, SPAN({ text: '+12.4%' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/computer.png', alt: 'Apple', class: 'rounded' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Apple' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'iMac Pro' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-3' },
                      SPAN({ class: 'fw-semibold' }, SPAN({ text: '74.9k' })),
                      SPAN({ class: 'badge bg-label-danger' }, SPAN({ text: '-8.5%' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/watch.png', alt: 'Smart Watch', class: 'rounded' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Smart Watch' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Fitbit' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-3' },
                      SPAN({ class: 'fw-semibold' }, SPAN({ text: '4.4k' })),
                      SPAN({ class: 'badge bg-label-success' }, SPAN({ text: '+62.6%' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex mb-4 pb-1' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({
                      src: '../../assets/img/icons/unicons/oneplus-success.png',
                      alt: 'Oneplus RT',
                      class: 'rounded',
                    }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Oneplus RT' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Oneplus' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-3' },
                      SPAN({ class: 'fw-semibold' }, SPAN({ text: '12,3k.71' })),
                      SPAN({ class: 'badge bg-label-success' }, SPAN({ text: '+16.7%' })),
                    ),
                  ),
                ),
                LI(
                  { class: 'd-flex' },
                  DIV(
                    { class: 'avatar flex-shrink-0 me-3' },
                    IMG({ src: '../../assets/img/icons/unicons/pixel.png', alt: 'Pixel 4a', class: 'rounded' }),
                  ),
                  DIV(
                    { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                    DIV(
                      { class: 'me-2' },
                      H6({ class: 'mb-0' }, SPAN({ text: 'Pixel 4a' })),
                      SMALL({ class: 'text-muted d-block mb-1' }, SPAN({ text: 'Google' })),
                    ),
                    DIV(
                      { class: 'user-progress d-flex align-items-center gap-3' },
                      SPAN({ class: 'fw-semibold' }, SPAN({ text: '834k' })),
                      SPAN({ class: 'badge bg-label-danger' }, SPAN({ text: '-12.9%' })),
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
      { class: 'col-md-6 col-lg-4 col-xl-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex justify-content-between' },
          DIV(
            { class: 'card-title mb-0' },
            H5({ class: 'm-0 me-2' }, SPAN({ text: 'Earning Reports' })),
            SMALL({ class: 'text-muted' }, SPAN({ text: 'Weekly Earnings Overview' })),
          ),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn p-0',
                type: 'button',
                id: 'earningReports',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-dots-vertical-rounded' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'earningReports' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Select All' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Refresh' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share' })),
            ),
          ),
        ),
        DIV(
          { class: 'card-body pb-0' },
          UL(
            { class: 'p-0 m-0' },
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                SPAN({ class: 'avatar-initial rounded bg-label-primary' }, I({ class: 'bx bx-trending-up' })),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  H6({ class: 'mb-0' }, SPAN({ text: 'Net Profit' })),
                  SMALL({ class: 'text-muted' }, SPAN({ text: '12.4k Sales' })),
                ),
                DIV(
                  { class: 'user-progress' },
                  SMALL({ class: 'fw-semibold' }, SPAN({ text: '$1,619' })),
                  I({ class: 'bx bx-chevron-up text-success ms-1' }),
                  SMALL({ class: 'text-muted' }, SPAN({ text: '18.6%' })),
                ),
              ),
            ),
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                SPAN({ class: 'avatar-initial rounded bg-label-success' }, I({ class: 'bx bx-dollar' })),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  H6({ class: 'mb-0' }, SPAN({ text: 'Total Income' })),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'Sales, Affiliation' })),
                ),
                DIV(
                  { class: 'user-progress' },
                  SMALL({ class: 'fw-semibold' }, SPAN({ text: '$3,571' })),
                  I({ class: 'bx bx-chevron-up text-success ms-1' }),
                  SMALL({ class: 'text-muted' }, SPAN({ text: '39.6%' })),
                ),
              ),
            ),
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                SPAN({ class: 'avatar-initial rounded bg-label-secondary' }, I({ class: 'bx bx-credit-card' })),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  H6({ class: 'mb-0' }, SPAN({ text: 'Total Expenses' })),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'ADVT, Marketing' })),
                ),
                DIV(
                  { class: 'user-progress' },
                  SMALL({ class: 'fw-semibold' }, SPAN({ text: '$430' })),
                  I({ class: 'bx bx-chevron-up text-success ms-1' }),
                  SMALL({ class: 'text-muted' }, SPAN({ text: '52.8%' })),
                ),
              ),
            ),
          ),
          DIV({ id: 'reportBarChart' }),
        ),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex align-items-start justify-content-between' },
          DIV(
            {},
            H5({ class: 'card-title m-0 me-2 mb-2' }, SPAN({ text: 'Sales Analytics' })),
            SPAN({ class: 'badge bg-label-success me-1' }, SPAN({ text: '+42.6%' })),
            SPAN({}, SPAN({ text: 'Than last year' })),
          ),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn btn-sm btn-label-primary dropdown-toggle',
                type: 'button',
                id: 'salesAnalyticsId',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              SPAN({ text: '2022' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'salesAnalyticsId' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: '2021' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: '2020' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: '2019' })),
            ),
          ),
        ),
        DIV({ class: 'card-body pb-0' }, DIV({ id: 'salesAnalyticsChart' })),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-4 col-xl-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex justify-content-between mb-3' },
          DIV(
            { class: 'card-title mb-0' },
            H5({ class: 'm-0 me-2' }, SPAN({ text: 'Sales by Countries' })),
            SMALL({ class: 'text-muted' }, SPAN({ text: 'Monthly Sales Overview' })),
          ),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn p-0',
                type: 'button',
                id: 'salesByCountry',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-dots-vertical-rounded' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'salesByCountry' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Select All' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Refresh' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share' })),
            ),
          ),
        ),
        DIV(
          { class: 'card-body' },
          UL(
            { class: 'p-0 m-0' },
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                IMG({ src: '../../assets/svg/flags/us.svg', alt: 'User', class: 'rounded-circle' }),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  DIV(
                    { class: 'd-flex align-items-center' },
                    H6({ class: 'mb-0 me-1' }, SPAN({ text: '$8,567k' })),
                    SMALL(
                      { class: 'text-success fw-semibold' },
                      I({ class: 'bx bx-chevron-up' }),
                      SPAN({ text: '25.8%' }),
                    ),
                  ),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'United states of america' })),
                ),
                DIV({ class: 'user-progress' }, H6({ class: 'mb-0' }, SPAN({ text: '884k' }))),
              ),
            ),
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                IMG({ src: '../../assets/svg/flags/br.svg', alt: 'User', class: 'rounded-circle' }),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  DIV(
                    { class: 'd-flex align-items-center' },
                    H6({ class: 'mb-0 me-1' }, SPAN({ text: '$2,415k' })),
                    SMALL(
                      { class: 'text-danger fw-semibold' },
                      I({ class: 'bx bx-chevron-down' }),
                      SPAN({ text: '6.2%' }),
                    ),
                  ),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'Brazil' })),
                ),
                DIV({ class: 'user-progress' }, H6({ class: 'mb-0' }, SPAN({ text: '645k' }))),
              ),
            ),
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                IMG({ src: '../../assets/svg/flags/in.svg', alt: 'User', class: 'rounded-circle' }),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  DIV(
                    { class: 'd-flex align-items-center' },
                    H6({ class: 'mb-0 me-1' }, SPAN({ text: '$865k' })),
                    SMALL(
                      { class: 'text-success fw-semibold' },
                      I({ class: 'bx bx-chevron-up' }),
                      SPAN({ text: '12.4%' }),
                    ),
                  ),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'India' })),
                ),
                DIV({ class: 'user-progress' }, H6({ class: 'mb-0' }, SPAN({ text: '148k' }))),
              ),
            ),
            LI(
              { class: 'd-flex mb-4 pb-1' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                IMG({ src: '../../assets/svg/flags/au.svg', alt: 'User', class: 'rounded-circle' }),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  DIV(
                    { class: 'd-flex align-items-center' },
                    H6({ class: 'mb-0 me-1' }, SPAN({ text: '$745k' })),
                    SMALL(
                      { class: 'text-danger fw-semibold' },
                      I({ class: 'bx bx-chevron-down' }),
                      SPAN({ text: '11.9%' }),
                    ),
                  ),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'Australia' })),
                ),
                DIV({ class: 'user-progress' }, H6({ class: 'mb-0' }, SPAN({ text: '86k' }))),
              ),
            ),
            LI(
              { class: 'd-flex' },
              DIV(
                { class: 'avatar flex-shrink-0 me-3' },
                IMG({ src: '../../assets/svg/flags/fr.svg', alt: 'User', class: 'rounded-circle' }),
              ),
              DIV(
                { class: 'd-flex w-100 flex-wrap align-items-center justify-content-between gap-2' },
                DIV(
                  { class: 'me-2' },
                  DIV(
                    { class: 'd-flex align-items-center' },
                    H6({ class: 'mb-0 me-1' }, SPAN({ text: '$45' })),
                    SMALL(
                      { class: 'text-success fw-semibold' },
                      I({ class: 'bx bx-chevron-up' }),
                      SPAN({ text: '16.2%' }),
                    ),
                  ),
                  SMALL({ class: 'text-muted' }, SPAN({ text: 'France' })),
                ),
                DIV({ class: 'user-progress' }, H6({ class: 'mb-0' }, SPAN({ text: '42k' }))),
              ),
            ),
          ),
        ),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-4 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex align-items-center justify-content-between mb-30' },
          H5({ class: 'card-title m-0 me-2' }, SPAN({ text: 'Sales Stats' })),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn p-0',
                type: 'button',
                id: 'salesStatsID',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-dots-vertical-rounded' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'salesStatsID' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last 28 Days' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Month' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Last Year' })),
            ),
          ),
        ),
        DIV({ id: 'salesStats' }),
        DIV(
          { class: 'card-body' },
          DIV(
            { class: 'd-flex justify-content-around' },
            DIV(
              { class: 'd-flex align-items-center lh-1 mb-3 mb-sm-0' },
              SPAN({ class: 'badge badge-dot bg-success me-2' }),
              SPAN({ text: 'Conversion Ratio' }),
            ),
            DIV(
              { class: 'd-flex align-items-center lh-1 mb-3 mb-sm-0' },
              SPAN({ class: 'badge badge-dot bg-label-secondary me-2' }),
              SPAN({ text: 'Total requirements' }),
            ),
          ),
        ),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-5 mb-md-0 mb-4' },
      DIV(
        { class: 'card h-100' },
        DIV(
          { class: 'card-header d-flex align-items-center justify-content-between' },
          H5({ class: 'card-title m-0 me-2' }, SPAN({ text: 'Team Members' })),
          DIV(
            { class: 'dropdown' },
            BUTTON(
              {
                class: 'btn p-0',
                type: 'button',
                id: 'teamMemberList',
                'data-bs-toggle': 'dropdown',
                'aria-haspopup': 'true',
                'aria-expanded': 'false',
              },
              I({ class: 'bx bx-dots-vertical-rounded' }),
            ),
            DIV(
              { class: 'dropdown-menu dropdown-menu-end', 'aria-labelledby': 'teamMemberList' },
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Select All' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Refresh' })),
              A({ class: 'dropdown-item', href: 'javascript:void(0);' }, SPAN({ text: 'Share' })),
            ),
          ),
        ),
        DIV(
          { class: 'table-responsive' },
          TABLE(
            { class: 'table table-borderless' },
            THEAD(
              {},
              TR(
                {},
                TH({}, SPAN({ text: 'Name' })),
                TH({}, SPAN({ text: 'Project' })),
                TH({}, SPAN({ text: 'Task' })),
                TH({}, SPAN({ text: 'Progress' })),
              ),
            ),
            TBODY(
              {},
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar me-2' },
                      IMG({ src: '../../assets/img/avatars/17.png', alt: 'Avatar', class: 'rounded-circle' }),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      H6({ class: 'mb-0 text-truncate' }, SPAN({ text: 'Nathan Wagner' })),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'iOS Developer' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ class: 'badge bg-label-primary rounded-pill text-uppercase' }, SPAN({ text: 'Zipcar' }))),
                TD({}, SMALL({ class: 'fw-semibold' }, SPAN({ text: '87/135' }))),
                TD({}, DIV({ class: 'chart-progress', 'data-color': 'primary', 'data-series': '65' })),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar me-2' },
                      IMG({ src: '../../assets/img/avatars/8.png', alt: 'Avatar', class: 'rounded-circle' }),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      H6({ class: 'mb-0 text-truncate' }, SPAN({ text: 'Emma Bowen' })),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'UI/UX Designer' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ class: 'badge bg-label-danger rounded-pill text-uppercase' }, SPAN({ text: 'Bitbank' }))),
                TD({}, SMALL({ class: 'fw-semibold' }, SPAN({ text: '320/440' }))),
                TD({}, DIV({ class: 'chart-progress', 'data-color': 'danger', 'data-series': '85' })),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar me-2' },
                      SPAN({ class: 'avatar-initial rounded-circle bg-label-warning' }, SPAN({ text: 'AM' })),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      H6({ class: 'mb-0 text-truncate' }, SPAN({ text: 'Adrian McGuire' })),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'PHP Developer' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ class: 'badge bg-label-warning rounded-pill text-uppercase' }, SPAN({ text: 'Payers' }))),
                TD({}, SMALL({ class: 'fw-semibold' }, SPAN({ text: '50/82' }))),
                TD({}, DIV({ class: 'chart-progress', 'data-color': 'warning', 'data-series': '73' })),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar me-2' },
                      IMG({ src: '../../assets/img/avatars/2.png', alt: 'Avatar', class: 'rounded-circle' }),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      H6({ class: 'mb-0 text-truncate' }, SPAN({ text: 'Alma Gonzalez' })),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'Product Manager' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ class: 'badge bg-label-info rounded-pill text-uppercase' }, SPAN({ text: 'Brandi' }))),
                TD({}, SMALL({ class: 'fw-semibold' }, SPAN({ text: '98/260' }))),
                TD({}, DIV({ class: 'chart-progress', 'data-color': 'info', 'data-series': '61' })),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar me-2' },
                      IMG({ src: '../../assets/img/avatars/11.png', alt: 'Avatar', class: 'rounded-circle' }),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      H6({ class: 'mb-0 text-truncate' }, SPAN({ text: 'Allan kristian' })),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'Frontend Designer' })),
                    ),
                  ),
                ),
                TD(
                  {},
                  SPAN({ class: 'badge bg-label-success rounded-pill text-uppercase' }, SPAN({ text: 'Crypter' })),
                ),
                TD({}, SMALL({ class: 'fw-semibold' }, SPAN({ text: '690/760' }))),
                TD({}, DIV({ class: 'chart-progress', 'data-color': 'success', 'data-series': '77' })),
              ),
            ),
          ),
        ),
      ),
    ),
    DIV(
      { class: 'col-md-6 col-lg-7 mb-0' },
      DIV(
        { class: 'card' },
        DIV(
          { class: 'card-datatable table-responsive' },
          TABLE(
            { class: 'invoice-list-table table border-top' },
            THEAD(
              {},
              TR(
                {},
                TH({}, SPAN({ text: 'Customer' })),
                TH({}, SPAN({ text: 'Amount' })),
                TH({}, SPAN({ text: 'Status' })),
                TH({ class: 'cell-fit' }, SPAN({ text: 'Paid By' })),
                TH({ class: 'cell-fit' }, SPAN({ text: 'Actions' })),
              ),
            ),
            TBODY(
              { class: 'table-border-bottom-0' },
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        IMG({ src: '../../assets/img/avatars/7.png', alt: 'Avatar', class: 'rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'Henry Barnes' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'jok@puc.co.uk' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$459.65' })),
                TD({}, SPAN({ class: 'badge bg-label-success' }, SPAN({ text: 'Paid' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/master-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'masterCard',
                    'data-app-light-img': 'icons/payments/master-light.png',
                    'data-app-dark-img': 'icons/payments/master-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        IMG({ src: '../../assets/img/avatars/20.png', alt: 'Avatar', class: 'rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'Hallie Warner' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'hellie@war.co.uk' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$93.81' })),
                TD({}, SPAN({ class: 'badge bg-label-warning' }, SPAN({ text: 'Pending' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/visa-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'visaCard',
                    'data-app-light-img': 'icons/payments/visa-light.png',
                    'data-app-dark-img': 'icons/payments/visa-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        IMG({ src: '../../assets/img/avatars/9.png', alt: 'Avatar', class: 'rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'Gerald Flowers' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'initus@odemi.com' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$934.35' })),
                TD({}, SPAN({ class: 'badge bg-label-warning' }, SPAN({ text: 'Pending' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/visa-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'visaCard',
                    'data-app-light-img': 'icons/payments/visa-light.png',
                    'data-app-dark-img': 'icons/payments/visa-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        IMG({ src: '../../assets/img/avatars/14.png', alt: 'Avatar', class: 'rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'John Davidson' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'jtum@upkesja.gov' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$794.97' })),
                TD({}, SPAN({ class: 'badge bg-label-success' }, SPAN({ text: 'Paid' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/paypal-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'paypalCard',
                    'data-app-light-img': 'icons/payments/paypal-light.png',
                    'data-app-dark-img': 'icons/payments/paypal-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        SPAN({ class: 'avatar-initial rounded-circle bg-label-warning' }, SPAN({ text: 'JH' })),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'Jayden Harris' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'wipare@tin.com' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$19.49' })),
                TD({}, SPAN({ class: 'badge bg-label-success' }, SPAN({ text: 'Paid' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/master-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'masterCard',
                    'data-app-light-img': 'icons/payments/master-light.png',
                    'data-app-dark-img': 'icons/payments/master-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              TR(
                {},
                TD(
                  {},
                  DIV(
                    { class: 'd-flex justify-content-start align-items-center' },
                    DIV(
                      { class: 'avatar-wrapper' },
                      DIV(
                        { class: 'avatar avatar-sm me-2' },
                        IMG({ src: '../../assets/img/avatars/8.png', alt: 'Avatar', class: 'rounded-circle' }),
                      ),
                    ),
                    DIV(
                      { class: 'd-flex flex-column' },
                      A(
                        { href: 'pages-profile-user.html', class: 'text-body text-truncate fw-semibold' },
                        SPAN({ text: 'Rena Ferguson' }),
                      ),
                      SMALL({ class: 'text-truncate text-muted' }, SPAN({ text: 'nur@kaomor.edu' })),
                    ),
                  ),
                ),
                TD({}, SPAN({ text: '$636.27' })),
                TD({}, SPAN({ class: 'badge bg-label-danger' }, SPAN({ text: 'Failed' }))),
                TD(
                  {},
                  IMG({
                    src: '../../assets/img/icons/payments/paypal-light.png',
                    class: 'img-fluid',
                    width: '50',
                    alt: 'paypalCard',
                    'data-app-light-img': 'icons/payments/paypal-light.png',
                    'data-app-dark-img': 'icons/payments/paypal-dark.png',
                  }),
                ),
                TD(
                  {},
                  DIV(
                    { class: 'd-flex align-items-center' },
                    DIV(
                      { class: 'dropdown' },
                      A(
                        {
                          href: 'javascript:;',
                          class: 'btn dropdown-toggle hide-arrow text-body p-0',
                          'data-bs-toggle': 'dropdown',
                        },
                        I({ class: 'bx bx-dots-vertical-rounded' }),
                      ),
                      DIV(
                        { class: 'dropdown-menu dropdown-menu-end' },
                        A({ href: 'javascript:void(0);', class: 'dropdown-item' }, SPAN({ text: 'Edit' })),
                        A({ href: 'javascript:;', class: 'dropdown-item' }, SPAN({ text: 'Duplicate' })),
                        DIV({ class: 'dropdown-divider' }),
                        A(
                          { href: 'javascript:;', class: 'dropdown-item delete-record text-danger' },
                          SPAN({ text: 'Delete' }),
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
  ),
];
