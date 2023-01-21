({
  label: {
    tpl: function (data) {
      if (!data.label && data.label !== false) data.label = {};
      if (typeof data.label === 'string') data.label = { text: data.label };
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
        data.config?.tag || 'div',
        { code: data.code, class: ['form-group', data.config?.inline ? 'd-inline' : '', data.class || ''].join(' ') },
        [
          data.label === false
            ? []
            : ['label', { class: 'form-label ' + data.label.class, text: data.label.text || '' }],
          [
            'div',
            { class: ['el-value', data.config?.inline ? 'd-inline ms-2' : ''].join(' ') },
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
