({
  json: {
    tpl: function (data) {
      return [['span', {}]];
    },
    front: {
      prepare: function ({ $el, data }) {
        $el.parent.setAttribute(
          'f-' + (data.name || '').replace(/\./g, '_'),
          JSON.stringify({ code: data.code, value: data.value }),
        );
        $el.parent.dataset[data.name] = data.value;
        $el.remove();
      },
    },
  },
  'json+': {
    tpl: function (data) {
      return [window.el['core/default/el~json|json'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~json|json'].prepare({ $el, data });
      },
    },
  },
  'json-': {
    tpl: function (data) {
      return [window.el['core/default/el~json|json'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~json|json'].prepare({ $el, data });
      },
    },
  },
});
