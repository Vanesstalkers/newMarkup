({
  button: {
    tpl: function (data) {
      const config = data.config || {};
      if (data.label) data.text = data.label;
      data.class +=
        'btn btn-' + (config.outline ? 'outline-' : '') + (config.label ? 'label-' : '') + (config.btnType || '');
      return [['button', data]];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (data.on?.click && typeof window[data.on.click] === 'function') {
          $el.addEventListener('click', window[data.on.click]);
        }
      },
    },
    func: () => {
      window.handleAction = async function (event) {
        const $btn = event.target;
        const form = $btn.closest('[type="form"]').dataset.name;
        const code = $btn.dataset.code;
        const { result, data, msg, stack } = await api.markup.handleAction({ form, code, data: { test: 123 } });
        console.log({ result, data });
        if (result === 'error') console.error({ msg, stack });
        // const { result, data: item, msg, stack } = await api.markup.addComplex({ form, code });
        // if (result === 'error') {
        //   console.error({ msg, stack });
        // }
      };
    },
  },
  'button+': {
    tpl: function (data) {
      return [window.el['core/default/el~button|button'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~button|button'].prepare({ $el, data });
      },
    },
  },
  'button-': {
    tpl: function (data) {
      return [window.el['core/default/el~button|button'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~button|button'].prepare({ $el, data });
      },
    },
  },
  'button--': {
    tpl: function (data) {
      return [window.el['core/default/el~button|button-'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~button|button-'].prepare({ $el, data });
      },
    },
  },
});
