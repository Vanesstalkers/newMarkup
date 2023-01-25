({
  button: {
    tpl: function (data) {
      const config = data.config || { btnType: 'secondary', label: true };
      if (data.label) data.text = data.label;
      let btnStyle = '';
      if (config.outline) btnStyle = 'outline-';
      if (config.label) btnStyle = 'label-';
      data.class +=
        ' ' + ['btn', `btn-${btnStyle}${config.btnType || ''}`, config.size ? `btn-${config.size}` : ''].join(' ');

      const popover = {};
      if (config.popover) {
        config.popover.toggle = 'popover';
        config.popover.offset = '0,14';
        for (const [key, val] of Object.entries(config.popover)) popover[`data-bs-${key}`] = val;
      }
      return [
        ['button', { ...data, ...popover }],
        // [
        //   'div',
        //   { class: 'd-none alert alert-danger alert-dismissible', role: 'alert', text: '123' },
        //   [['button', { type: 'button', class: 'btn-close', 'data-bs-dismiss': 'alert', 'aria-label': 'Close' }]],
        // ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (data.handler) {
          const beforeHandler = data.on?.beforeHandler;
          const afterHandler = data.on?.afterHandler;
          $el.addEventListener('click', async function (event) {
            try {
              if (data.config?.popover) $(event.target).popover('dispose');
              event.target.setAttribute('disabled', '');
              const $btn = event.target;
              const form = $btn.closest('[type="form"]').dataset.name;
              const code = $btn.dataset.code;
              let handlerData = {};
              if (typeof window[beforeHandler] === 'function') handlerData = await window[beforeHandler](event);
              const handleActionData = await api.markup.handleAction({ form, code, data: handlerData });
              const { result, data: actionData, msg, stack } = handleActionData;
              if (result === 'error') throw new Error(msg);
              if (typeof window[afterHandler] === 'function') await window[afterHandler](event, actionData);
              event.target.removeAttribute('disabled');
            } catch (err) {
              console.error({ err });
              event.target.removeAttribute('disabled');
              if (data.config?.popover) {
                event.target.setAttribute('data-bs-content', err.message);
                new bootstrap.Popover(event.target, { html: !0, sanitize: !1 });
                $(event.target).popover('show');
                setTimeout(() => {
                  $(event.target).popover('dispose');
                }, 3000);
              }
            }
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
