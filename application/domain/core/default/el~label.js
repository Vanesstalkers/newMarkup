({
  label: {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      let text = data.value;
      if (typeof data.value == 'object') {
        if (Array.isArray(data.value)) {
          text = data.value.map(({ label }) => label).join(', ');
        } else {
          text = data.value.label;
        }
      }
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          data.config?.hideLabel ? [] : ['label', { class: 'form-label', text: data.label || '' }],
          ['div', { text, class: 'el-value' }],
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
