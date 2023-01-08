({
  tpl: () => [
    DIV(
      { class: 'nav-header' },
      A(
        { href: '/index.html', class: 'brand-logo' },
        IMG({ class: 'logo-abbr', src: '/logo.png', alt: '' }),
        IMG({ class: 'logo-compact', src: '/logo-text.png', alt: '' }),
        IMG({ class: 'brand-title', src: '/logo-text.png', alt: '' }),
      ),
      DIV(
        { class: 'nav-control' },
        DIV({ class: 'hamburger' }, SPAN({ class: 'line' }), SPAN({ class: 'line' }), SPAN({ class: 'line' })),
      ),
    ),
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
  style: ``,
});
