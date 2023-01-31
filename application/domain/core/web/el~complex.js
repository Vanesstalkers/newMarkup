({
  block: {
    tpl: function (data) {
      // add: { type: 'search', label: false, placeholder: 'Добавить документ', lst: 'pp~doc_type', field: 'type' },
      // add: { type: 'file', multiple: true, placeholder: 'Добавить документ', field: 'file' },
      const disableCardStyle = data.config?.disableCardStyle;

      if (!data.controls) data.controls = {};
      if (data.add && !data.add.auto) {
        if (typeof data.add === true) data.add = {};
        else if (typeof data.add === 'string') data.add = { type: data.add };
        data.controls.add = data.add;
      }
      const hasControls = Object.keys(data.controls).length;

      // if (controls.show || data.l) {
      //   if (typeof controls.show != 'object') controls.show = { label: controls.show };

      //   if (data.l != undefined && data.showOnButton) controls.show.type = 'btn';
      //   if (data.l != undefined && data.showOnScroll) controls.show.type = 'scroll';

      //   if (!controls.show.label) controls.show.label = 'Показать еще';
      //   if (!controls.show.type && controls.show.label) controls.show.type = 'btn';
      // }

      data.class =
        (data.class || '') +
        ' ' +
        [
          !disableCardStyle ? 'card shadow-none' : 'content-holder',
          'complex-block',
          data.name ? 'complex-' + data.name : undefined,
          hasControls ? 'has-controls' : undefined,
          data.controls.config?.simple ? 'simple-controls' : undefined,
          data.config?.inline ? 'inline-style' : undefined,
          data.controls.add?.singleItem ? 'single-item' : undefined,
        ]
          .filter((item) => item)
          .join(' ');

      return [
        data.config?.tag || 'div',
        { class: data.class, code: data.code, type: data.type },
        [
          !hasControls
            ? []
            : [
                [
                  'div',
                  {
                    'parent-code': data.code,
                    class: 'card-header header-elements p-0 ' + (data.controls.config?.hide ? ' d-none' : ''),
                  },
                  [
                    data.label === false ? [] : ['h5', { class: 'm-3', text: data.label }],
                    [
                      'div',
                      { class: 'card-title-elements m-3 ms-auto' },
                      [
                        !data.controls.add
                          ? []
                          : data.controls.add.type === 'search'
                          ? [
                              !data.controls.add.field
                                ? ['span', { text: 'Add field is not defined', style: 'color: #ff3e1d;' }]
                                : ((add) => {
                                    add.class = 'el el-complex-add';
                                    add.code = data.code;
                                    return window.el['core/default/el~select2|select2'].tpl(add); // ссылка на add не должна пропасть из-за data.config.element
                                  })(data.controls.add),
                            ]
                          : data.controls.add.type === 'file'
                          ? [
                              !data.controls.add.field
                                ? ['span', { text: 'Add field is not defined', style: 'color: #ff3e1d;' }]
                                : ((add) => {
                                    add.class = 'el el-complex-add';
                                    add.code = data.code;
                                    return window.el['core/default/el~file|file'].tpl(add);
                                  })(data.controls.add),
                            ]
                          : [
                              'button',
                              {
                                type: 'button',
                                class: 'btn btn-sm btn-primary me-4 btn-add',
                                text: data.controls.add.label || 'Добавить',
                              },
                              [['span', { class: 'tf-icons bx bx-plus ms-1' }]],
                            ],

                        !data.controls.reload
                          ? []
                          : [
                              'a',
                              { class: 'card-reload btn-reload' },
                              [['i', { class: 'tf-icons bx bx-rotate-left scaleX-n1-rtl' }]],
                            ],
                        !data.controls.expand
                          ? []
                          : ['a', { class: 'card-expand' }, [['i', { class: 'tf-icons bx bx-fullscreen' }]]],
                        ['a', { class: 'card-collapsible' }, [['i', { class: 'tf-icons bx bx-chevron-up' }]]],
                      ],
                    ],
                  ],
                ],
              ],
          !disableCardStyle ? ['div', { class: 'card-body collapse show p-0 content-holder' }] : [],
        ],

        // !controls.show
        //   ? []
        //   : [
        //       // все lastitem изначально hidden, который снимается только если сервер скажет что кнопка нужна (ищи по "lli")
        //       controls.show.type != 'btn'
        //         ? []
        //         : [tag, { class: 'hidden lastitem btn-lastitem' }, [[itemTag, { text: controls.show.label }]]],
        //       controls.show.type != 'scroll' ? [] : [tag, { class: 'hidden lastitem scroll-lastitem' }],
        //     ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        $el.setAttribute('markup-code', data.code);
        if (data.on?.load) $el.setAttribute('markup-onload', data.on.load);
        for (const [key, value] of Object.entries(data)) {
          $el.dataset[key] = FIELD_JSON_KEYS.includes(key) ? JSON.stringify(value) : value;
        }
        $el.dataset.itemcount = 0;
        if (data.l) {
          $el.dataset.l = data.l;
          $el.dataset.o = 0;
        }

        for (const $toggle of $el.querySelectorAll('.card-collapsible')) {
          $toggle.addEventListener('click', async (event) => {
            event.preventDefault();
            new bootstrap.Collapse($toggle.closest('.card').querySelector('.collapse'));
            $toggle.closest('.card-header').classList.toggle('collapsed');
            Helpers._toggleClass($toggle.firstElementChild, 'bx-chevron-down', 'bx-chevron-up');
          });
        }
        const $expand = $el.querySelector('.card-expand');
        if ($expand) {
          $expand.addEventListener('click', async (event) => {
            event.preventDefault();
            Helpers._toggleClass($expand.firstElementChild, 'bx-fullscreen', 'bx-exit-fullscreen'),
              $expand.closest('.card').classList.toggle('card-fullscreen');
          });
        }

        // if (data[1].l != undefined && data[1].showOnScroll) {
        //   doAfterLoad.push(function () {
        //     realParent.addClass('need-scroll-check');
        //     realParent.off('scroll').on('scroll', function (e) {
        //       window.scrollCheck($(e.target));
        //     });
        //   });
        // }

        if (data.controls.add) {
          if (data.controls.add.type) {
            if (!data.controls.add.field) console.error('Add field is not defined', data);
            data.controls.add.onChange = async (value) => {
              if (!value?.[0]?.v && !value?.l) return;
              const form = $el.closest('[type="form"]').dataset.name;
              const {
                result,
                data: item,
                msg,
                stack,
              } = await api.markup.addComplex({ form, code: data.code, data: { [data.controls.add.field]: value } });
              if (result === 'error') {
                console.error({ msg, stack });
              } else {
                const { tpl, prepare } = window.el[item.elPath] || {};
                const $contentHolder = $el.classList.contains('content-holder')
                  ? $el
                  : $el.querySelector(`.content-holder`);
                await nativeTplToHTML([tpl({ ...item, parent: data })], $contentHolder);
                const $item = $contentHolder.querySelector(`.complex-item[code='${item.code}']`);
                const $itemContentHolder = $item.classList.contains('content-holder')
                  ? $item
                  : $item.querySelector(`.content-holder`);
                if (prepare) prepare({ $el: $item, data: item, parent: { data, $el } });
                await nativeTplToHTML(item.content, $itemContentHolder);
              }
              if (data.controls.add.type === 'search') {
                $($el.querySelector('select')).val('').trigger('change.select2');
              }
            };
            const $add = $el.querySelector('.el');
            if ($add) {
              // может отсутствовать, если передан неправильный конфиг для add
              let elPath;
              if (data.controls.add.type === 'search') elPath = 'core/default/el~select2|select2';
              if (data.controls.add.type === 'file') elPath = 'core/default/el~file|file';
              if (elPath) window.el[elPath].prepare({ $el: $add, data: data.controls.add });
            }
          } else {
            const $add = $el.querySelector('.btn-add');
            if ($add) {
              $add.addEventListener('click', async (event) => {
                event.preventDefault();
                const form = $el.closest('[type="form"]').dataset.name;
                const { result, data: item, msg, stack } = await api.markup.addComplex({ form, code: data.code });
                if (result === 'error') {
                  console.error({ msg, stack });
                } else {
                  const { tpl, prepare } = window.el[item.elPath] || {};
                  const $contentHolder = $el.classList.contains('content-holder')
                    ? $el
                    : $el.querySelector(`.content-holder`);
                  await nativeTplToHTML([tpl({ ...item, parent: data })], $contentHolder);
                  const $item = $contentHolder.querySelector(`.complex-item[code='${item.code}']`);
                  const $itemContentHolder = $item.classList.contains('content-holder')
                    ? $item
                    : $item.querySelector(`.content-holder`);
                  if (prepare) prepare({ $el: $item, data: item, parent: { data, $el } });
                  await nativeTplToHTML(item.content, $itemContentHolder);
                }
              });
            }
          }
        }
      },
    },
    script: () => {
      /*       window.moreComplex = function (e, filter, replace) {
        try {
          var $e = $(e);
          var $block = $e.closest('.complex-block');
          var data = { code: $block.attr('code') };

          if (filter) {
            data.filter = filter;
            var lastFilter = $block.attr('lastfilter');
            if (lastFilter) {
              extend(data.filter, JSON.parse(lastFilter));
              delete data.filter.force;
            }
          }

          if (!replace) {
            $e.addClass('hidden');
            $e.before($('<div />', { id: '_' + data.code }));
          } else {
            data.replace = true;
            $e.replaceWith($('<div />', { id: '_' + data.code }));
          }
          wsSendCallback(extend({ action: 'show' }, data), function () {
            setTimeout(function () {
              allResLoaded();
              if (typeof callback == 'function') callback($block);
            }, 0);
          });
        } catch (e) {}
      };

      $(document)
        .off('click', '.btn-lastitem')
        .on('click', '.btn-lastitem', function () {
          var $lastitem = $(this);
          var $parent = $lastitem.closest('.complex-block');
          var l = $parent.attr('l') * 1,
            o = $parent.attr('o') * 1;
          window.moreComplex($lastitem, { l: l, o: o, showOnButton: true });
        });
 */
      /*window.scrollCheck = function($p){

			var $items = $p ? $p.find('.scroll-lastitem') : $('.scroll-lastitem');
			if(!$p) $p = $(window);
			
			$items.each(function(){
				var $lastitem = $(this);
				if(
					($lastitem.is(':visible') && $p.height() > 0 && $lastitem[0].offsetTop - $p.scrollTop() <= $p.height()) ||
					(window.isMobile && ($lastitem[0].offsetTop - $p.scrollTop() <= window.innerHeight))
				){
					var $parent = $lastitem.closest('.complex-block');
					var l = $parent.attr('l')*1, o = $parent.attr('o')*1;
					window.moreComplex($lastitem, {l: l, o: o, showOnScroll: true});
				}
			});
		}

		//$(window).off('scroll').on('scroll', function(){ window.scrollCheck() });
		window.afterAllLoaded.push(function(){
			$(document).find('.need-scroll-check').each(function(){
				window.scrollCheck( $(this).removeClass('need-scroll-check') );
			});
		});*/
    },
    style: `

      .complex-block.single-item:not([data-itemcount="0"]) > .card-header {
        display: none!important;
      }

      .complex-block.simple-controls {
        position: relative;
      }
      .complex-block.simple-controls > .card-body > .card-header, .complex-block.simple-controls > .card-header {
        position: absolute;
        z-index: 1;
        right: 0px;
        top: 0px;
        padding: 0;
      }
      .complex-block.inline-style .card-body {
        display: flex;
        flex-wrap: wrap;
        padding: 0px;
      }
      .complex-block.inline-style .card-body.collapse:not(.show) {
        display: none;
      }

      .complex-block .card-header.collapsed .btn-add {
        display: none;
      }

      .complex-block.has-controls .el-complex-add .select2-selection {
        background-color: #696cff;
        border-color: #696cff;
        box-shadow: 0 0.125rem 0.25rem 0 rgb(105 108 255 / 40%);
        margin-right: 1.5rem;
      }
      .complex-block.has-controls .el-complex-add .select2-selection .select2-selection__arrow {
        display: none;
      }
      .complex-block.has-controls .el-complex-add .select2-selection .select2-selection__placeholder {
        color: #fff;
      }
      .complex-block.has-controls .el-complex-add .select2-selection .select2-selection__placeholder:after {
        content: "";
        margin-left: 0.25rem;
        font-family: "boxicons" !important;
        line-height: 1.15;
        font-size: 18px;
        vertical-align: middle;
      }

      .complex-block.has-controls .el-complex-add {
        width: auto;
      }
      .complex-block.has-controls .el-complex-add.upload-file-input-group input {
        color: white;
        background-color: #696cff;
        border-color: #696cff;
        box-shadow: 0 0.125rem 0.25rem 0 rgb(105 108 255 / 40%);
        width: 100%;
        height: 30px;
      }
      .complex-block.has-controls .el-complex-add.upload-file-input-group input:before {
        content: attr(placeholder);
        font-size: 12px;
        position: absolute;
        top: 0px;
        left: 0px;
        background-color: #696cff;
        width: 100%;
        height: 100%;
        padding: 5px;
        padding-left: 12px;
      }
      .complex-block.has-controls .el-complex-add.upload-file-input-group input:after {
        font-size: 18px;
        font-family: "boxicons" !important;
        content: "";
        position: absolute;
        right: 0px;
        top: 0px;
        padding: 1px;
        padding-right: 8px;
      }
    `,
  },

  item: {
    tpl: function (data, config) {
      const disableCardStyle = data.parent.config?.disableCardStyle;
      if (!data.controls) data.controls = {};
      const hasControls = Object.keys(data.controls).length;
      data.class =
        (data.class || '') +
        ' ' +
        [
          !disableCardStyle ? 'card mb-3' : 'content-holder',
          'complex-item',
          data.name ? 'complex-' + data.name : undefined,
          hasControls ? 'has-controls' : undefined,
          data.controls.config?.simple ? 'simple-controls' : undefined,
          data.parent.config?.inline ? 'inline-style' : undefined,
        ]
          .filter((item) => item)
          .join(' ');

      return [
        data.config?.tag || 'div',
        { code: data.code, class: data.class },
        [
          !hasControls
            ? []
            : [
                data.controls.config?.tag || 'div',
                {
                  'parent-code': data.code,
                  class:
                    'card-header d-flex align-items-center justify-content-between complex-controls' +
                    (data.controls.config?.hide ? ' d-none' : ''),
                },
                [
                  [
                    'div',
                    { class: 'dropdown' },
                    [
                      [
                        'button',
                        {
                          class: 'btn p-0',
                          type: 'button ',
                          'data-bs-toggle': 'dropdown',
                          'aria-haspopup': true,
                          'aria-expanded': false,
                        },
                        [['i', { class: 'bx bx-dots-vertical-rounded' }]],
                      ],
                      // ['a', { class: 'card-collapsible' }, [['i', { class: 'tf-icons bx bx-chevron-up' }]]],
                      [
                        'div',
                        { class: 'dropdown-menu dropdown-menu-end' },
                        [
                          data.controls.reload
                            ? [
                                'a',
                                { class: 'dropdown-item btn-reload', href: 'javascript:void(0);', text: 'Обновить' },
                              ]
                            : [],
                          data.controls.delete
                            ? ['a', { class: 'dropdown-item btn-delete', href: 'javascript:void(0);', text: 'Удалить' }]
                            : [],
                        ],
                      ],
                    ],
                  ],
                ],
              ],
          !disableCardStyle ? ['div', { class: 'card-body collapse show content-holder' }] : [],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data, parent: { $el: $parentEl, data: parentData } }) {
        $el.setAttribute('markup-code', data.code);
        if (parentData.on?.itemLoad) $el.setAttribute('markup-onload', parentData.on.itemLoad);
        for (const [key, value] of Object.entries(data)) {
          $el.dataset[key] = FIELD_JSON_KEYS.includes(key) ? JSON.stringify(value) : value;
        }
        $parentEl.dataset.itemcount = $parentEl.dataset.itemcount * 1 + 1;
        $parentEl.dataset.o = ($parentEl.dataset.o || 0) * 1 + 1;

        for (const $toggle of $el.querySelectorAll('.card-collapsible')) {
          $toggle.addEventListener('click', async (event) => {
            event.preventDefault();
            new bootstrap.Collapse($toggle.closest('.card').querySelector('.collapse'));
            $toggle.closest('.card-header').classList.toggle('collapsed');
            Helpers._toggleClass($toggle.firstElementChild, 'bx-chevron-down', 'bx-chevron-up');
          });
        }

        // // без этого lastitem отображается после добавления нового item
        // const l = Math.abs(realParent.attr('l') || 0);
        // l && realParent.attr('o') * 1 >= l
        //   ? realParent.find('> .btn-lastitem').removeClass('hidden')
        //   : realParent.find('> .btn-lastitem').addClass('hidden');
      },
    },
    style: `
      .complex-item.simple-controls {
        position: relative;
      }
      .complex-item.simple-controls > .card-body > .card-header, .complex-item.simple-controls > .card-header {
        position: absolute;
        z-index: 1;
        right: 0px;
        top: 0px;
        padding: 0;
      }
      .complex-item.inline-style {
        margin-right: 1rem;
      }
      .complex-item.inline-style > .card-body {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-end;
      }
      .complex-item.inline-style > .card-body.collapse:not(.show) {
        display: none;
      }
      .complex-item.inline-style > .card-body > .card-header, .complex-item.inline-style > .card-header {
        padding: 0px;
      }
    `,
  },

  addobj: {
    config: {
      customType: 'action',
    },
    api: {
      alias: ['search_addobj'],
    },
    f: function (conn, data, callback) {
      try {
        if (!data.msg.q) {
          callback({ status: 'err', err: 'Строка поиска не может быть пустой.' });
        } else {
          ROUTER.route(
            conn,
            { action: 'search_' + data.field.col, q: data.msg.q, addEmpty: data.field.add.addEmpty },
            (res) => {
              callback(res.answer);
            },
            true,
          );
        }
      } catch (e) {
        console.log(e);
        callback({ status: 'err', err: 'Ошибка' });
      }
    },
  },
});
