({
  select2: {
    config: {
      customType: 'html',
      dependencies: ['slimselect'],
    },
    tpl: function (data) {
      return window.el['core/default/el~select|select'].tpl(data);
    },
    front: {
      prepare: async function ({ $el, data }) {
        window.el['core/default/el~select|select'].prepare({ $el, data, addListener: false });

        const $select = $el.querySelector('select');
        const form = $select.closest('[type="form"]').dataset.name;
        const code = $select.closest('.el').dataset.code;
        console.log(
          Array.from($select.options).map((opt) => ({
            text: opt.label,
            value: opt.value,
            selected: opt.selected,
          })),
        );
        new SlimSelect({
          select: $select,
          settings: {
            searchText: 'Ничего не найдено',
            searchPlaceholder: 'Искать по...',
          },
          data: Array.from($select.options).map((opt) => ({
            text: opt.label,
            value: opt.value,
            selected: opt.selected,
          })),
          events: {
            search:
              typeof data.lst !== 'object'
                ? undefined
                : (search, currentData) => {
                    return new Promise((resolve, reject) => {
                      const searchLimit = 2;
                      if (search.length < searchLimit) return reject(`Требуется символов: ${searchLimit}`);
                      api.markup.search({ form, code, query: search }).then(({ result, data, msg, stack }) => {
                        if (result === 'error') {
                          console.error({ msg, stack });
                          return reject('Ошибка поиска');
                        }
                        resolve(
                          data
                            .filter(({ value: val }) => currentData.filter(({ value }) => value === val).length === 0)
                            .map(({ label, value }) => ({ text: label, value })),
                        );
                      });
                    });
                  },
            afterChange: async () => {
              const value = $select.slim
                .getData()
                .filter(({ selected }) => selected === true)
                .map(({ text, value }) => ({ label: text, value }));
              console.log({ value });
              const { result, msg, stack } = await api.markup.saveField({ form, code, value });
              if (result === 'error') return console.error({ msg, stack });
            },
          },
        });

        $select.addEventListener('search', async function (event) {
          // const { result, data, msg, stack } = await api.markup.search({ form, code, query: event.detail.value });
          // if (result === 'error') return console.error({ msg, stack });
          // const values = select2.getValue(true);
          // select2.setChoices(
          //   data.filter(({ value }) => !values.includes(value)),
          //   'value',
          //   'label',
          //   true,
          // );
        });
      },
    },
  },

  'select2+': {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [window.el['core/default/el~select2|select2'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~select2|select2'].prepare({ $el, data });
      },
    },
  },

  'select2-': {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [window.el['core/default/el~label|label'].tpl(data)];
    },
  },

  'select2--': {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [window.el['core/default/el~label|label'].tpl(data)];
    },
  },
});
