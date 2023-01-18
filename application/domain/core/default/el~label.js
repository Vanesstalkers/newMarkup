({
  label: {
    tpl: function (data) {
      let text;
      if (typeof window[data.on?.prepareValue] === 'function') {
        text = window[data.on.prepareValue](data);
      } else {
        text = data.value;
        if (typeof data.value == 'object') {
          if (Array.isArray(data.value)) {
            text = data.value.map(({ label }) => label).join(', ');
          } else {
            text = data.value.label;
          }
        }
      }
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          data.label === false ? [] : ['label', { class: 'form-label', text: data.label || '' }],
          [
            'div',
            { class: 'el-value' },
            [data.config?.callto ? ['a', { href: `callto:${text}`, text }] : ['span', { text }]],
          ],
        ],
      ];
    },
    func: () => {
      window.toLocaleString = (data) => (data.value ? new Date(data.value).toLocaleString() : '');
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
