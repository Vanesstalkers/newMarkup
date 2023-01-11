({
  textarea: {
    tpl: function (data) {
      const config = data.config || {};
      const float = config.float;
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class + (float ? ' form-floating' : '') },
        [
          [
            ['label', { class: 'form-label', text: data.label || '' }],
            [
              'textarea',
              {
                class: 'form-control el-value',
                text: data.value,
                rows: config.rows || 3,
                ...(data.disabled ? { disabled: '' } : {}),
              },
            ],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const $input = $el.querySelector('textarea');
        window.resizeTextarea($input);

        $input.addEventListener('change', async (event) => {
          const form = $input.closest('[type="form"]').dataset.name;
          const code = $input.closest('.el').dataset.code;
          const value = $input.value;
          const { result, msg, stack } = await api.markup.saveField({ form, code, value });
          if (result === 'error') console.error({ msg, stack });
        });
        $input.addEventListener('keyup', async (event) => {
          window.resizeTextarea($input);
        });
      },
    },
    func: () => {
      window.resizeTextarea = function ($textarea) {
        $textarea.style.height = 'auto';
        let h = $textarea.scrollHeight + 3;
        let min_h = parseInt($textarea.style.minHeight);
        if (h < min_h) h = min_h;
        $textarea.style.height = h + 'px';
        const $parent = $textarea.parentNode;
        $parent.style.height = 'auto';
        h = $parent.scrollHeight + 3;
        if (h < min_h) h = min_h;
        $parent.style.height = h + 'px';
      };
      window.resizeAllTextareas = function ($el) {
        for (const $textarea of Array.from($el.querySelectorAll('textarea'))) {
          window.resizeTextarea($textarea);
        }
      };
    },
  },

  'textarea+': {
    tpl: function (data) {
      return window.el['core/default/el~textarea|textarea'].tpl(data);
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~textarea|textarea'].prepare({ $el, data });
      },
    },
  },

  'textarea-': {
    tpl: function (data) {
      data.disabled = true;
      return window.el['core/default/el~textarea|textarea'].tpl(data);
    },
  },
});
