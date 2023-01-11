({
  check: {
    tpl: function (data) {
      const checked = data.value ? { checked: 'checked' } : {};

      const content = {};
      if (!data.config) data.config = {};
      if (data.config.content === undefined) data.config.content = 'Нет|Да'; // может прийти false (без content)
      if (data.config.content) {
        data.config.content = data.config.content.split('|');
        content['content-text'] = data.config.content[0];
        content['content-text-checked'] = data.config.content[1] || data.config.content[0];
      }
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          ['label', { class: 'form-label', text: data.label || '' }],
          [
            'div',
            { class: 'form-check' + (data.config.switch ? ' form-switch' : '') },
            [
              [
                'input',
                {
                  type: 'checkbox',
                  class: 'form-check-input el-value',
                  name: [data.name, data.code].join('_'),
                  id: 'input-' + data.code,
                  ...checked,
                  ...(data.disabled ? { disabled: '' } : {}),
                },
              ],
              ['label', { class: 'form-check-label', for: 'input-' + data.code, ...content }],
            ],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const $input = $el.querySelector('input');
        $input.addEventListener('change', async (event) => {
          const form = $input.closest('[type="form"]').dataset.name;
          const code = $input.closest('.el').dataset.code;
          const value = $input.checked;
          const { result, msg, stack } = await api.markup.saveField({ form, code, value });
          if (result === 'error') console.error({ msg, stack });
        });
      },
    },
    style: `
      .el > .form-check > input[type=checkbox] ~ label:after {
        content: attr(content-text);
      }
      .el > .form-check > input[type=checkbox]:checked ~ label:after {
        content: attr(content-text-checked);
      }
    `,
  },

  'check+': {
    tpl: function (data) {
      return [window.el['core/default/el~check|check'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~check|check'].prepare({ $el, data });
      },
    },
  },

  'check-': {
    tpl: function (data) {
      data.disabled = true;
      return [window.el['core/default/el~check|check'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~check|check'].prepare({ $el, data });
      },
    },
  },
});
