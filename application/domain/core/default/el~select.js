({
  select: {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      if (!data.config) data.config = {};
      return [
        [
          'div',
          { code: data.code, class: data.class + ' ' },
          [
            ['label', { text: data.label || '' }],
            [
              'select',
              { value: data.value || '', class: 'el-value' },
              [
                (data.config.element = function (e) {
                  return [
                    ['option', { label: e.l, value: e.v, ...(e.v == data.value ? { selected: 'selected' } : {}) }],
                  ];
                }),
              ],
            ],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (!data.lst) return;

        if (!window.LST[data.lst]) {
          window.LST[data.lst] = [{ v: '', l: '' }];
          window.oLST[data.lst] = {};
        }

        // if (typeof data.value == 'object') {
        //   if (!window.oLST[data.lst][data.value.v]) {
        //     if (data.multiple) {
        //       // пока нет живых кейсов с кастомными multiple-значениями, не совсем понятно что тут делать...
        //     } else {
        //       window.oLST[data.lst][data.value.v] = data.value;
        //       window.LST[data.lst].push(data.value);
        //     }
        //   }

        //   data.value = data.value.v;
        //   $e.attr('value', data.value);
        // }

        const $select = $el.querySelector('select');
        if (typeof data.config.element === 'function') {
          window.LST[data.lst].forEach((l) => {
            if (!l.hide) nativeTplToHTML(data.config.element(l), $select);
          });
        }
      },
    },
  },

  'select+': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~select|select'].tpl.bind(this)(data, config)];
    },
    front: {
      prepare: function (tpl, data, doAfterLoad, realParent) {
        window.el['core/default/el~select|select'].prepare.bind(this)(tpl, data, doAfterLoad, realParent);
      },
    },
  },

  'select-': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~label|label'].tpl.bind(this)(data, config)];
    },
  },

  'select--': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~label|label'].tpl.bind(this)(data, config)];
    },
  },
});
