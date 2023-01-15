({
  radio: {
    tpl: function (data) {
      if (!data.config) data.config = {};
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          [
            'label',
            {
              class: ['form-label', data.config.inline ? 'w-100' : ''].join(' '),
              text: data.label || '',
            },
          ],
          (data.config.element = function (e) {
            const checked = (data.value || []).filter(({ value }) => value === e.v).length
              ? { checked: 'checked' }
              : {};
            return [
              [
                'div',
                { class: ['form-check', data.config.inline ? 'form-check-inline' : ''].join(' ') },
                [
                  [
                    'input',
                    {
                      type: 'radio',
                      class: 'form-check-input el-value',
                      name: `${data.name}_${data.code}`,
                      id: `${data.code}_${e.v}`,
                      value: e.v,
                      ...checked,
                      ...(data.disabled ? { disabled: '' } : {}),
                    },
                  ],
                  ['label', { class: 'form-check-label', for: `${data.code}_${e.v}`, text: e.l }],
                ],
              ],
            ];
          }),
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (!data.lst) return;

        if (typeof data.lst === 'object' || !window.LST[data.lst]) {
          window.LST[data.lst] = [];
          if ((data.value || []).length)
            window.LST[data.lst].push(...data.value.map(({ value, label }) => ({ v: value, l: label })));
          if (window.LST[data.lst].filter(({ v }) => v === '').length === 0)
            window.LST[data.lst].unshift({ v: '', l: 'н/д' });
        }

        if (typeof data.config.element === 'function') {
          for (const l of window.LST[data.lst]) {
            if (!l.hide) nativeTplToHTML([data.config.element(l)], $el);
          }
        }

        const $radioArr = $el.querySelectorAll('input');
        for (const $radio of Array.from($radioArr)) {
          $radio.addEventListener('change', async (event) => {
            const form = $radio.closest('[type="form"]').dataset.name;
            const code = $radio.closest('.el').dataset.code;
            const value = Array.from($radioArr)
              .filter((opt) => opt.checked)
              .map((opt) => ({ label: opt.parentElement.querySelector('label').innerHTML, value: opt.value }));
            const { result, msg, stack } = await api.markup.saveField({ form, code, value });
            if (result === 'error') console.error({ msg, stack });
          });
        }
      },
    },
  },

  'radio+': {
    tpl: function (data) {
      return [window.el['core/default/el~radio|radio'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~radio|radio'].prepare({ $el, data });
      },
    },
  },

  'radio-': {
    tpl: function (data) {
      data.disabled = true;
      return [window.el['core/default/el~radio|radio'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~radio|radio'].prepare({ $el, data });
      },
    },
  },
});
