({
  tpl: () => [
    DIV(
      { class: 'quixnav' },
      DIV(
        { class: 'quixnav-scroll ps mm-active' },
        UL(
          { class: 'metismenu mm-show', id: 'menu' },
          LI({ class: 'nav-label first' }, SPAN({ text: 'Main Menu' })),
          LI(
            {},
            A(
              { class: 'has-arrow', href: 'javascript:void()', 'aria-expanded': 'false' },
              I({ class: 'icon icon-single-04' }),
              SPAN({ class: 'nav-text' }, SPAN({ text: 'Dashboard' })),
            ),
            UL(
              { 'aria-expanded': 'false', class: 'mm-collapse' },
              LI({}, A({ href: 'https://demo.themefisher.com/focus/index.html' }, SPAN({ text: 'Dashboard 1' }))),
              LI({}, A({ href: 'https://demo.themefisher.com/focus/index2.html' }, SPAN({ text: 'Dashboard 2' }))),
            ),
          ),
          (() => {
            const items = [];
            for (const [block, form] of Object.entries(domain)) {
              for (const [name, { config }] of Object.entries(form)) {
                if (config?.menu) {
                  const { icon, label } = config.menu;
                  items.push([
                    LI(
                      {},
                      A(
                        {
                          href: `#${JSON.stringify({
                            form: name.replace('form~', `${block}~`),
                            container: 'formContent',
                          })}`,
                          'aria-expanded': 'false',
                        },
                        I({ class: icon }),
                        SPAN({ text: label, class: 'nav-text' }),
                      ),
                    ),
                  ]);
                }
              }
            }
            return items;
          })(),
        ),
      ),
    ),
  ],
  func: () => {
    // window.breadcrumb = [];
    // window.updateMenu = function (data) {
    //   if (data.req.action == 'link' && data.req.history !== false && data.req.history !== 'false') {
    //     var info = {};
    //     var $p = $('#page-wrapper > .page-heading');
    //     var $b = $p.find('.breadcrumb');
    //     if (typeof window.updateMenuCustom == 'function') {
    //       var l = window.breadcrumb.length,
    //         q = JSON.stringify(history.state.subform);
    //       if (l > 0 && window.breadcrumb.filter((_) => JSON.stringify(_.query) == q).length == 0) {
    //         delete window.breadcrumb[l - 1].active;
    //       } else {
    //         window.breadcrumb = [];
    //       }
    //       window.updateMenuCustom(info);
    //       window.updateMenuCustom = undefined;
    //     } else {
    //       window.breadcrumb = [];
    //     }
    //     $b.html('');
    //     window.breadcrumb.forEach(function (b) {
    //       if (b.active) {
    //         $b.append($('<li />', { class: 'active' }).append($('<strong />', { text: b.text })));
    //       } else {
    //         $b.append($('<li />', {}).append($('<a />', { query: JSON.stringify(b.query), text: b.text })));
    //       }
    //       if (!info.form && b.query && b.query.form) info.form = b.query.form;
    //       if (!info.text && b.text) info.text = b.text;
    //     });
    //     if (!info.form) info.form = data.req.query.form;
    //     let $menu = $('#side-menu');
    //     $menu.find('li.active').removeClass('active');
    //     $menu.find('ul.in').removeClass('in');
    //     $menu.find('li > a').each(function () {
    //       let $item = $(this);
    //       let $li = $item.closest('li');
    //       if (($item.attr('query') || '').indexOf('"form":"' + info.form + '"') != -1) {
    //         $li.addClass('active');
    //         if ($li.parent().hasClass('collapse')) {
    //           $li.parent().addClass('in');
    //           $li.parent().closest('li').addClass('active');
    //         }
    //         let $label = $item.find('> .nav-label > span');
    //         info.text = ($label.length ? $label.text() : $item.text()) || info.text;
    //       }
    //     });
    //     $p.find('h2').text(info.text);
    //   }
    // };
  },
  style: `
  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  
  html {
    height: -webkit-fill-available;
  }
  
  main {
    display: flex;
    flex-wrap: nowrap;
    height: 100vh;
    height: -webkit-fill-available;
    max-height: 100vh;
    overflow-x: auto;
    overflow-y: hidden;
  }
  
  .b-example-divider {
    flex-shrink: 0;
    width: 1.5rem;
    height: 100vh;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
  }
  
  .bi {
    vertical-align: -.125em;
    pointer-events: none;
    fill: currentColor;
  }
  
  .dropdown-toggle { outline: 0; }
  
  .nav-flush .nav-link {
    border-radius: 0;
  }
  
  .btn-toggle {
    display: inline-flex;
    align-items: center;
    padding: .25rem .5rem;
    font-weight: 600;
    color: rgba(0, 0, 0, .65);
    background-color: transparent;
    border: 0;
  }
  .btn-toggle:hover,
  .btn-toggle:focus {
    color: rgba(0, 0, 0, .85);
    background-color: #d2f4ea;
  }
  
  .btn-toggle::before {
    width: 1.25em;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform .35s ease;
    transform-origin: .5em 50%;
  }
  
  .btn-toggle[aria-expanded="true"] {
    color: rgba(0, 0, 0, .85);
  }
  .btn-toggle[aria-expanded="true"]::before {
    transform: rotate(90deg);
  }
  
  .btn-toggle-nav a {
    display: inline-flex;
    padding: .1875rem .5rem;
    margin-top: .125rem;
    margin-left: 1.25rem;
    text-decoration: none;
  }
  .btn-toggle-nav a:hover,
  .btn-toggle-nav a:focus {
    background-color: #d2f4ea;
  }
  
  .scrollarea {
    overflow-y: auto;
  }
  
  .fw-semibold { font-weight: 600; }
  .lh-tight { line-height: 1.25; }
  `,
});
