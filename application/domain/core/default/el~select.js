({
  select: {
    tpl: function (data) {
      if (!data.config) data.config = {};
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          data.label === false ? [] : ['label', { class: 'form-label', text: data.label || '' }],
          [
            'select',
            {
              value: data.value || '',
              class: 'form-select el-value',
              ...(data.multiple ? { multiple: 'multiple', size: 5 } : {}),
              ...(data.disabled ? { disabled: '' } : {}),
            },
            [
              (data.config.element = function (e) {
                const selected = (data.value || []).filter(({ value }) => value === e.v).length
                  ? { selected: 'selected' }
                  : {};
                return ['option', { text: e.l, value: e.v, ...selected }];
              }),
            ],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data, addListener = true }) {
        if (!data.lst) return;
        if (typeof data.lst === 'object' && Array.isArray(data.lst)) {
          data.lst = data.lst.map(({ value, label }) => ({ v: value, l: label }));
        } else if (!window.LST[data.lst] || data.lst === 'object') {
          window.LST[data.lst] = [];
          if ((data.value || []).length)
            window.LST[data.lst].push(...data.value.map(({ value, label }) => ({ v: value, l: label })));
          if (window.LST[data.lst].filter(({ v }) => v === '').length === 0)
            window.LST[data.lst].unshift({ v: '', l: 'н/д' });
        }

        const $select = $el.querySelector('select');
        if (typeof data.config.element === 'function') {
          for (const l of window.LST[data.lst] || data.lst) {
            // if (!l.hide) nativeTplToHTML([data.config.element(l)], $select);
            nativeTplToHTML([data.config.element(l)], $select);
          }
        }

        if (addListener) {
          const beforeSave = data.on?.beforeSave && window[data.on.beforeSave];
          const afterSave = data.on?.afterSave && window[data.on.afterSave];
          $select.addEventListener('change', async (event) => {
            const form = $select.closest('[type="form"]').dataset.name;
            const code = $select.closest('.el').dataset.code;
            const value = Array.from($select.options)
              .filter((opt) => opt.selected)
              .map((opt) => ({ label: opt.label, value: opt.value }));
            if (typeof beforeSave === 'function' && (await beforeSave({ value, event })) !== true) return;
            const { result, msg, stack } = await api.markup.saveField({ form, code, value });
            if (result === 'error') console.error({ msg, stack });
            if (typeof afterSave === 'function') await afterSave({ event });
          });
        }
      },
    },
  },

  'select+': {
    tpl: function (data) {
      return [window.el['core/default/el~select|select'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~select|select'].prepare({ $el, data });
      },
    },
  },

  'select-': {
    tpl: function (data) {
      data.disabled = true;
      return [window.el['core/default/el~select|select'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~select|select'].prepare({ $el, data });
      },
    },
  },
});
