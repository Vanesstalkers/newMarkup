({
  input: {
    tpl: function (data) {
      const config = data.config || {};
      const float = config.float;
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class + (float ? ' form-floating' : '') },
        [
          [
            float
              ? []
              : data.label === false
              ? []
              : ['label', { class: 'form-label', for: 'input-' + data.code, text: data.label || '' }],
            [
              'input',
              {
                type: config.inputType || 'text',
                class: 'form-control el-value',
                value: data.value,
                id: 'input-' + data.code,
                placeholder: data.placeholder || ' ',
                ...(data.disabled ? { disabled: '' } : {}),
              },
            ],
            float ? ['label', { for: 'input-' + data.code, text: data.label || '' }] : [],
          ],
          config.comment ? ['div', { class: 'form-text', for: 'input-' + data.code, text: config.comment }] : [],
          [
            'div',
            {
              class: 'form-text error-text',
              for: 'input-' + data.code,
              msg: config.errorMsg || 'Поле заполнено с ошибкой',
            },
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const $input = $el.querySelector('input');
        const beforeSave = data.on?.beforeSave && window[data.on.beforeSave];
        $input.addEventListener('change', async (event) => {
          const form = $input.closest('[type="form"]').dataset.name;
          const code = $input.closest('.el').dataset.code;
          const value = $input.value;
          event.target.setCustomValidity('');
          if (typeof beforeSave === 'function' && (await beforeSave({ value, event })) !== true) return;
          const { result, msg, stack } = await api.markup.saveField({ form, code, value });
          if (result === 'error') {
            event.target.setCustomValidity(msg);
            $el.querySelector('.error-text').setAttribute('msg', msg);
            console.error({ msg, stack });
          }
        });

        if (data.config?.mask) {
          if (!Array.isArray(data.config.mask)) data.config.mask = [data.config.mask];
          $($input).mask(...data.config.mask);
        }
      },
    },
    style: `
      input.el-value:invalid {
        border-color: #ff3e1d;
      }
      input.el-value:invalid ~ .form-text, input.el-value ~ .error-text {
        display: none;
      }
      input.el-value:invalid ~ .error-text {
        position: absolute;
        display: block;
        color: #ff3e1d;
        z-index: 1;
      }
      input.el-value:invalid ~ .error-text:after {
        content: attr(msg);
      }
    `,
  },

  'input+': {
    tpl: function (data) {
      return window.el['core/default/el~input|input'].tpl(data);
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~input|input'].prepare({ $el, data });
      },
    },
  },

  'input-': {
    tpl: function (data) {
      // data.disabled = true;
      return window.el['core/default/el~input|input'].tpl(data);
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~input|input'].prepare({ $el, data });
        $el.querySelector('input').disabled = true;
      },
    },
  },
});
