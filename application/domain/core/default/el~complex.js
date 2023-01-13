({

  block: {
    tpl: function (data, config) {
      const tag = data.config?.tag || 'div';
      const itemTag = data.item.config?.tag || 'div';

      let add = data.item.add;
      if (add && typeof add != 'object') add = add !== true ? { type: add } : {};

      const controls = data.controls || {};

      if (controls.show || data.l) {
        if (typeof controls.show != 'object') controls.show = { label: controls.show };

        if (data.l != undefined && data.showOnButton) controls.show.type = 'btn';
        if (data.l != undefined && data.showOnScroll) controls.show.type = 'scroll';

        if (!controls.show.label) controls.show.label = 'Показать еще';
        if (!controls.show.type && controls.show.label) controls.show.type = 'btn';
      }

      data.class =
        (data.class || '') +
        ' ' +
        ['complex-block', data.name ? 'complex-' + data.name : undefined, add ? 'has-controls' : undefined]
          .filter((item) => item)
          .join(' ');
      return [
        tag,
        { class: data.class, code: data.code, type: data.type },
        [
          !add
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
                  itemTag,
                  {
                    class: 'complex-controls control-add',
                    addField: add.field,
                    text: !add.type ? add.label || 'Добавить' : undefined,
                  },
                  [
                    add.type != 'file'
                      ? []
                      : [
                          window.el['core/default/el~file|file'].tpl({
                            class: 'el control-el',
                            addLabel: add.label,
                            delete: false,
                          }),
                        ],

                    add.type != 'search'
                      ? []
                      : [
                          window.el['core/default/el~select2|select2'].tpl({
                            class: 'el',
                            label: add.label,
                            onSave: 'addWithSearch',
                            code: data.code,
                            id: false,
                          }),
                        ],
                  ],
                ],
                // ],
              ],
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
        //console.log('prepare complex', { $el, data });

        $el.setAttribute('markup-code', data.code);
        if (data.on?.load) $el.setAttribute('markup-onload', data.on.load);
        for (const [key, value] of Object.entries(data)) $el.dataset[key] = value;
        $el.dataset.itemcount = 0;
        if (data.l) {
          $el.dataset.l = data.l;
          $el.dataset.o = 0;
        }

        /*if(data[1].l != undefined && data[1].showOnScroll){
				doAfterLoad.push(function(){
					realParent.addClass('need-scroll-check');
					realParent.off('scroll').on('scroll', function(e){ window.scrollCheck($(e.target)) });
				});
			}*/

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
        .complex-block:before {
          color: green;
          content: attr(data-name);
        }
        .complex-block {
            position: relative;
            padding: 8px;
            border: 1px solid green;
            box-shadow: inset 0 0 4px 0px green;
        }
        .complex-block.has-controls > .complex-controls {
            // position: absolute;
            // top: 0px;
            // left: 0px;
            width: 100%;
            text-align: center;
            cursor: pointer;
        }
        .complex-block.single-item:not([itemcount='0']) > .complex-controls {
            display: none!important;
        }
        body.editMode .complex-block.has-controls {
            position: relative;
            padding-top: 30px;
            padding-bottom: 30px;
        }
        .complex-block.has-controls > .complex-controls.--add-after {
            top: inherit;
            bottom: 0px;
        }
        .complex-block.has-controls > .complex-controls.control-add {
            // position: absolute;
            // left: 0px;
            // top: -15px;
            // width: auto;
            // height: 100%;
            min-height: 15px;
            color: #1c84c6;
            white-space: nowrap;
            min-width: 100%;
        }
        .complex-block.has-controls > .complex-controls > input[type=file], 
        .complex-block.has-controls > .complex-controls > .el > input[type=file] {
            opacity: 0;
            width: 100%;
        }
        
        .complex-block.has-controls .complex-close {
            color: white;
            font-size: 12px;
            cursor: pointer;
            padding: 6px;
            width: 100%;
            text-align: center;
        }
        .complex-block > .btn-lastitem:hover {
            opacity: 0.5;
            cursor: pointer;
        }
        
        .add-with-search.complex-controls label {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0px;
            z-index: 101;
            color: white;
            line-height: 30px;
            font-weight: normal;
        }
        .add-with-search.complex-controls {
            width: 200px!important;
            height: 30px!important;
            left: auto!important;
            right: 20px!important;
            top: -40px!important;
        }
        .add-with-search.complex-controls .select2-container {
            width: 100%;
            max-width: 200px;
        }
        .add-with-search.complex-controls .select2-container .select2-selection__rendered {
            display: none;
        }
        .add-with-search.complex-controls .select2-selection {
            background-color: #1c84c6;
            border-radius: 3px;
        }
        .add-with-search.complex-controls .select2-selection:before {
            content: '';
            color: white;
            line-height: 26px;
        }
        
        .add-with-sub {
            display: none;
        }
    `,
  },

  item: {
    tpl: function (data, config) {
      const tag = data.config?.tag || 'div';
      const controls = (data.controls || '').split(',').filter((item) => item);
      delete data.controls;

      data.class =
        (data.class || '') +
        ' ' +
        ['complex-item', data.name ? 'complex-' + data.name : undefined, controls.length ? 'has-controls' : undefined]
          .filter((item) => item)
          .join(' ');

      return [
        tag,
        { class: data.class, code: data.code },
        [
          controls.length
            ? [
                'div',
                { class: 'item-controls' },
                [
                  ['div', { class: 'h btn-reload' }],
                  ['div', { class: 'h btn-delete' }],
                ],
              ]
            : [],
        ],
      ];

      // return [
      // [
      // tag,
      // data,
      // [
      //   !controls.length
      //     ? []
      //     : [
      //         itemTag,
      //         {
      //           class: 'item-controls',
      //           code: data.code,
      //           id: false,
      //         },
      //         [controls.indexOf('delete') == -1 ? [] : ['div', { class: 'h btn-delete' }]],
      //       ],

      //   // если добавлять не через concat, то потеряются все (криво вставленные) теги внутри complex-item, кроме первого
      // ].concat(data[2] || []),
      // ],
      // ];
    },
    front: {
      prepare: function ({ $el, data, parent: { $el: $parentEl, data: parentData } }) {
        $el.setAttribute('markup-code', data.code);
        if (parentData.on?.itemLoad) $el.setAttribute('markup-onload', parentData.on.itemLoad);
        for (const [key, value] of Object.entries(data)) $el.dataset[key] = value;
        $parentEl.dataset.itemcount = $parentEl.dataset.itemcount * 1 + 1;
        $parentEl.dataset.o = ($parentEl.dataset.o || 0) * 1 + 1;

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
      .complex-item, .complex-item.has-controls {
          position: relative;
          padding: 8px;
          border: 1px solid blue;
          box-shadow: 0 0 0px 2px blue;
      }
      .complex-item.has-controls > .item-controls {
          position: absolute;
          right: 6px;
          top: 6px;
          z-index: 1;
          text-align: left;
          height: 15px;
          font-size: 10px;
          display: none;
      }
      .complex-item.has-controls > .item-controls > div {
          cursor: pointer;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          background-color: transparent;
      }
      .complex-item.has-controls > .item-controls > div.btn-delete {
          background-image: url(/delete.png);
      }
      .complex-item.has-controls > .item-controls > div.btn-reload {
        background-image: url(/reload.png);
    }

      body.editMode .complex-block.has-controls .complex-item.has-controls > .item-controls {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
      }
      .complex-item.has-controls > .item-controls {
          display: block;
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
