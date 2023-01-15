({
  block: {
    tpl: function (data) {
      const disableCardView = data.config?.disableCardView;

      if (!data.controls)
        data.controls = {
          /* reload: true, expand: true */
        };
      if (data.add && !data.add.auto) {
        if (typeof data.add === true) data.add = {};
        else if (typeof data.add === 'string') data.add = { type: data.add };
        data.controls.add = data.add;
      }

      const hasControls = Object.keys(data.controls).length;
      if (hasControls) {
      }

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
          !disableCardView ? 'card card-action shadow-none' : 'content-holder',
          'complex-block',
          data.name ? 'complex-' + data.name : undefined,
          hasControls ? 'has-controls' : undefined,
          data.controls.config?.simple ? 'simple-controls' : undefined,
          data.config?.inline ? 'inline-style' : undefined,
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
                // itemTag,
                // Object.assign(
                //   {
                //     class: 'complex-controls' + (add.type ? ' add-with-' + add.type : ' add-simple'),
                //     addField: add.field,
                //     code: data.code,
                //     id: false, // без id: false элемент подменит собой комплексный блок
                //   },
                //   data.front || {},
                // ),
                // [
                [
                  'div',
                  {
                    'parent-code': data.code,
                    class: 'card-header header-elements' + (data.controls.config?.hide ? ' d-none' : ''),
                  },
                  [
                    data.label ? ['h5', { class: 'm-3', text: data.label }] : [],
                    [
                      'div',
                      { class: 'card-title-elements m-3 ms-auto' },
                      [
                        !data.controls.add
                          ? []
                          : data.controls.add.type === 'search'
                          ? [
                              ((data.controls.add.class = 'el'),
                              (data.controls.add.code = data.code),
                              window.el['core/default/el~select2|select2'].tpl(data.controls.add)),
                            ].filter((item) => item)
                          : [
                              'button',
                              {
                                type: 'button',
                                class: 'btn btn-sm btn-primary me-4 btn-add',
                                text: add.label || 'Добавить',
                              },
                            ],

                        //   add.type != 'file'
                        //   ? []
                        //   : [
                        //       window.el['core/default/el~file|file'].tpl({
                        //         class: 'el control-el',
                        //         addLabel: add.label,
                        //         delete: false,
                        //       }),
                        //     ],

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
          !disableCardView ? ['div', { class: 'card-body collapse show p-0 content-holder' }] : [],
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
          if (data.controls.add.type === 'search') {
            const $select = $el.querySelector('.el');
            data.controls.add.onChange = async (value) => {
              const form = $el.closest('[type="form"]').dataset.name;
              const {
                result,
                data: item,
                msg,
                stack,
              } = await api.markup.addComplex({ form, code: data.code, data: { type: value } });
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
            };
            window.el['core/default/el~select2|select2'].prepare({ $el: $select, data: data.controls.add });
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

        // if (data[1].add) {
        //   $parent.addClass('has-controls');
        //   if (data[1].add.singleItem) $parent.addClass('single-item');

        //   switch (data[1].add.type) {
        //     case 'file':
        //       if (window.el['core/default/el~file|file'].prepare)
        //         window.el['core/default/el~file|file'].prepare.bind(this)(tpl, {}, doAfterLoad, realParent);
        //       break;
        //     case 'search':
        //       window.el['core/default/el~select2|select2'].prepare.bind(this)(
        //         tpl,
        //         {
        //           lst: data[1].add.lst || 'addobj',
        //           ajax: data[1].add.lst == undefined,
        //           prepare: data[1].add.lst ? 'select2_obj_0' : 'select2_obj',
        //           addOption: data[1].add.option,
        //           code: data[1].code,
        //           addEmpty: (data[1].add || {}).addEmpty,
        //         },
        //         doAfterLoad,
        //         realParent,
        //       );
        //       break;
        //   }
        // }

        // if (!data[1].controls) data[1].controls = {};
        // // controls зарезервировано html (((
        // $parent.attr(
        //   'ctrl',
        //   Object.keys(data[1].controls)
        //     .filter((c) => data[1].controls[c])
        //     .concat([data[1].add ? 'add' : ''])
        //     .join(','),
        // );
      },
    },
    script: () => {
      $(document)
        .off('click', '.complex-controls.add-with-search label')
        .on('click', '.complex-controls.add-with-search label', function (e) {
          var $parent = $(this).closest('label').parent();
          $parent.find('select').select2(false ? 'close' : 'open'); // надо заменить на проверку уже открытого блока
        });

      window.addWithSearch = function ($e, data, callback) {
        var $controls = $e.closest('.complex-controls');

        if (data.value !== null) {
          var complexAddValues = {},
            complexProcessData = {};

          if (data.value.indexOf('process_') == 0) {
            if (data.value == 'process_new') {
              //delete processData.cid;
              //complexAddValues = processData;
            } else {
              var processData = JSON.parse(data.value.replace('process_', ''));
              complexProcessData = processData;
            }
          } else {
            complexAddValues[$controls.attr('addField') || 'existId'] = data.value;
          }
          $controls.attr('complexProcessData', JSON.stringify(complexProcessData));
          $controls.attr('complexAddValues', JSON.stringify(complexAddValues));

          window.addComplex($controls.find('> .control-add')); // сюда не передается callback, чтобы не вызывать сохранение поля (но если он будет нужен, то можно добавить параметр stype в инициирующий el)

          $e.val('').trigger('change.select2'); // без этого нельзя повторно добавлять item с тем же значением, что и предыдущий (было подозрение, что будет вызываться лишний onchange, то пока такой ошибки не замечено)
        } else {
          $e.val('').trigger('change.select2');
          if (typeof callback == 'function') callback({ err: 'with-out-notify' });
        }
      };

      $(document)
        .off('change', '.control-el input[type=file]')
        .on('change', '.control-el input[type=file]', function (e) {
          // !!! не будет работать, если complex вставлен в другой complex без html-прослойки (обернуть в div)

          function addItemFromFiles(files, $e) {
            if (!files.length) return;

            window.addComplex($e, function (answer) {
              var $item = $('.complex-item[code=' + answer.codes[1] + ']');
              var addField = $e.closest('.complex-controls').attr('addField') || 'file';
              var $field = $item.find('[name=' + addField + ']'); // это надо заменить на подстановку поля из конфига

              // асинхронно загружаем файл в созданный complex-item
              uploadFile(files.shift(), $field, function () {
                reloadItem($item);
              });

              addItemFromFiles(files, $e);
            });
          }

          addItemFromFiles(Array.from(e.currentTarget.files), $(this));
        });

      window.addComplex = function ($e, callback) {
        if ($e.hasClass('tutorial-link-target')) return;

        var $controls = $e.closest('.complex-controls'),
          $complex = $e.closest('.complex-block.has-controls');
        var data = { code: $e.closest('.complex-controls').attr('code') };

        var sub = $e.hasClass('subAction');
        if (sub) {
          data.sub = true;
          $e.removeClass('subAction');
        }

        $complex[$complex.attr('l') * 1 < 0 ? 'prepend' : 'append']($('<div />', { id: '_' + data.code }));

        if ($controls.attr('complexAddValues')) {
          data.values = JSON.parse($controls.attr('complexAddValues'));
          $controls.attr('complexAddValues', false);
        }
        if ($controls.attr('complexProcessData')) {
          data.process = JSON.parse($controls.attr('complexProcessData'));
          $controls.attr('complexProcessData', false);
        }

        wsSendCallback(Object.assign({ action: 'add' }, data), function (answer) {
          if (!sub) if ($controls.attr('onAdd')) window[$controls.attr('onAdd')]($complex, answer);

          if (typeof callback == 'function') callback(answer);
        });
      };

      $(document)
        .off('click', '.complex-controls.add-simple > .control-add')
        .on('click', '.complex-controls.add-simple > .control-add', function () {
          window.addComplex($(this));
        })
        .off('click', '.complex-controls.add-with-sub > .control-add')
        .on('click', '.complex-controls.add-with-sub > .control-add', function () {
          window.addComplex($(this));
        });

      window.moreComplex = function (e, filter, replace) {
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

      window.reloadComplex = function (e, filter, callback) {
        var $e = $(e);
        var $block = $e.closest('.complex-block');
        var data = { code: $block.attr('code') };
        if (filter) {
          data.filter = filter;
          if (filter.force) {
            $block.attr('o', 0);
            $block.attr('lastfilter', JSON.stringify(filter));
          }
        }

        var $tmp = $('<div >');
        $block.find('> .complex-controls, > .save-on-reload, > .lastitem').appendTo($tmp);
        myEmpty($block);
        if ($block.html()) $block.html('');
        $tmp.find('> .complex-controls, > .save-on-reload, > .lastitem').appendTo($block);
        $block.append($('<div />', { id: '_' + data.code }));

        wsSendCallback(extend({ action: 'show' }, data), function () {
          setTimeout(function () {
            allResLoaded();
            if (typeof callback == 'function') callback($block);
          }, 0);
        });
      };

      window.reloadItem = function (e, filter, callback) {
        // item обязательно должен быть обернут в собственный div, иначе херит всю разметку
        var $e = $(e);
        var $item = $e.closest('.complex-item');
        var itemCode = $item.attr('code'),
          $parent = $item.parent(),
          realParent = $item.attr('realParent');
        var $block = realParent ? $('.complex-block[code=' + realParent + ']') : $e.parent().closest('.complex-block');
        $block.attr('itemcount', $block.attr('itemcount') * 1 - 1);
        var data = { code: $block.attr('code'), itemCodes: [itemCode] };
        if (filter) data.filter = filter;
        var onItemLoad = $block.attr('onItemLoad');
        var onLastItem = $block.attr('onLastItem');
        data.itemCodes.forEach(function (code) {
          $item
            .attr('id', '_' + code)
            .attr('onItemLoad', onItemLoad)
            .attr('onLastItem', onLastItem);
        });
        wsSendCallback(extend({ action: 'show' }, data), function () {
          setTimeout(function () {
            allResLoaded();
            if (realParent) $parent.find('.complex-item[code=' + itemCode + ']').attr('realParent', realParent);
            if (typeof callback == 'function') callback($block, data);
          }, 0);
        });
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
    `,
  },

  item: {
    tpl: function (data, config) {
      const disableCardView = data.parent.config?.disableCardView;
      if (!data.controls)
        data.controls = {
          /* reload: true, expand: true, delete: true */
        };
      const hasControls = Object.keys(data.controls).length;
      data.class =
        (data.class || '') +
        ' ' +
        [
          !disableCardView ? 'card mb-3' : 'content-holder',
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
                  // ['h5', { class: 'card-title m-0 me-2' }],
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
          !disableCardView ? ['div', { class: 'card-body collapse show content-holder' }] : [],
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
    script: () => {
      $(document).off('click', '.item-controls > div.custom-action');
      $(document).on('click', '.item-controls > div.custom-action', function () {
        var $e = $(this);
        var type = $e.attr('action');
        var text = '';

        if ($e.hasClass('with-comment')) {
          if (!(text = prompt('Добавьте комментарий к действию', ''))) return false;
        } else {
          if (!confirm('Подтвердите действие "' + type + '"')) return false;
        }

        var data = {
          action: 'control',
          type: type,
          code: $e.closest('.item-controls').attr('code'),
          text: text,
        };
        wsSendCallback(data, function () {
          $e.addClass('ready');
        });
      });

      $(document).off('click', '.item-controls > div.btn-delete');
      $(document).on('click', '.item-controls > div.btn-delete', function () {
        var $e = $(this);

        if ($e.hasClass('tutorial-link-target')) return false;

        if (!$e.attr('force') && !confirm('Подтвердите удаление')) return false;

        var data = { code: $e.closest('.item-controls').attr('code') };
        if ($e.hasClass('subAction')) data.sub = true;

        wsSendCallback(extend({ action: 'delete' }, data), function (data) {
          $e.closest('.complex-item')
            .addClass('just-deleted')
            .hide(500, function () {
              var $complex = $(this).parent().closest('.complex-block');
              if ($complex.attr('onDelete')) window[$complex.attr('onDelete')]($e);
              if ($complex.attr('itemcount')) $complex.attr('itemcount', $complex.attr('itemcount') * 1 - 1);
            });
        });

        return false;
      });
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
