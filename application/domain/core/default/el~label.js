({
  label: {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          ['label', { class: 'form-label', text: data.label || '' }],
          ['div', { text: typeof data.value == 'object' ? data.value.l : data.value, class: 'el-value' }],
        ],
      ];
    },
  },
  'label+': {
    tpl: function (data) {
      return [window.el['core/default/el~label|label'].tpl(data)];
    },
  },
  'label-': {
    tpl: function (data) {
      return [window.el['core/default/el~label|label'].tpl(data)];
    },
  },
});
