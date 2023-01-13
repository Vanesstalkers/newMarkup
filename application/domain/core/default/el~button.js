({
  button: {
    tpl: function (data) {
      const config = data.config || { btnType: 'secondary', label: true };
      if (data.label) data.text = data.label;
      let btnStyle = '';
      if (config.outline) btnStyle = 'outline-';
      if (config.label) btnStyle = 'label-';
      data.class += ['btn', `btn-${btnStyle}${config.btnType || ''}`, config.size ? `btn-${config.size}` : ''].join(
        ' ',
      );
      return [['button', data]];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (data.handler) {
          const beforeHandler = data.on?.beforeHandler;
          const afterHandler = data.on?.afterHandler;
          $el.addEventListener('click', async function (event) {
            event.target.setAttribute('disabled', '');
            const $btn = event.target;
            const form = $btn.closest('[type="form"]').dataset.name;
            const code = $btn.dataset.code;
            let handlerData = {};
            if (typeof window[beforeHandler] === 'function') handlerData = await window[beforeHandler](event);
            const { result, data, msg, stack } = await api.markup.handleAction({ form, code, data: handlerData });
            if (result === 'error') console.error({ msg, stack });
            if (typeof window[afterHandler] === 'function') await window[afterHandler](event, data);
            event.target.removeAttribute('disabled');
          });
        } else if (data.on?.click && typeof window[data.on.click] === 'function') {
          $el.addEventListener('click', async function (event) {
            event.target.setAttribute('disabled', '');
            await window[data.on.click](event);
            event.target.removeAttribute('disabled');
          });
        }
      },
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
});
