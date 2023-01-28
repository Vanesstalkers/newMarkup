({
  select2: {
    tpl: function (data) {
      return [window.el['core/default/el~select|select'].tpl(data)];
    },
    front: {
      prepare: async function ({ $el, data }) {
        window.el['core/default/el~select|select'].prepare({ $el, data, addListener: false });

        const $select = $el.querySelector('select');
        const form = $select.closest('[type="form"]').dataset.name;
        const $parentModal = $el.closest('.modal');
        const code = $select.closest('.el').dataset.code;

        const $$select = $($select);
        $$select.select2(
          !data.lst.action
            ? {
                placeholder: data.placeholder || 'Искать по...',
                ...($parentModal ? { dropdownParent: $($parentModal) } : {}),
              }
            : {
                ...($parentModal ? { dropdownParent: $($parentModal) } : {}),
                ajax: {
                  transport: function ({ data: { q: query } }, success, failure) {
                    api.markup.search({ form, code, query }).then(({ result, data, msg, stack }) => {
                      if (result === 'error') {
                        console.error({ msg, stack });
                        return failure('Ошибка поиска');
                      }
                      success(data);
                    });
                  },
                  delay: 250,
                  processResults: function (data, params) {
                    return {
                      results: data.map(({ label, value }) => ({ text: label, id: value })),
                      pagination: { more: false },
                    };
                  },
                  cache: false,
                },
                placeholder: 'Искать по...',
                minimumInputLength: 2,
                // templateResult: formatRepo,
                // templateSelection: formatRepoSelection,
              },
        );
        $$select.on('change.select2', async function () {
          const value = $$select.select2('data').map(({ text, id }) => ({ label: text, value: id }));
          if (data.onChange) return await data.onChange(value);
          const { result, msg, stack } = await api.markup.saveField({ form, code, value });
          if (result === 'error') return console.error({ msg, stack });
        });
      },
    },
    func: function () {},
  },

  'select2+': {
    tpl: function (data) {
      return window.el['core/default/el~select2|select2'].tpl(data);
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~select2|select2'].prepare({ $el, data });
      },
    },
  },

  'select2-': {
    tpl: function (data) {
      data.disabled = true;
      return window.el['core/default/el~select2|select2'].tpl(data);
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~select2|select2'].prepare({ $el, data });
      },
    },
  },
});
