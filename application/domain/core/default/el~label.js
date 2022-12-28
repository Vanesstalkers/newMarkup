({
  label: {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [
        [
          'div',
          { class: data.class + ' ' },
          [
            !data.label ? [] : ['label', { class: 'el-label' }, [['span', { text: data.label }]]],
            ['div', { text: typeof data.value == 'object' ? data.value.l : data.value, class: 'el-value' }],
          ],
        ],
      ];
    },
  },
  'label+': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['__tpl~el_label'].tpl.bind(this)(data, config)];
    },
  },
  'label-': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['__tpl~el_label'].tpl.bind(this)(data, config)];
    },
  },
  'label--': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['__tpl~el_label'].tpl.bind(this)(data, config)];
    },
  },
});
