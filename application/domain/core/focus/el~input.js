({
  input: {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [
        'div',
        { code: data.code, class: 'form-group ' + data.class },
        [
          ['label', { text: data.label || '' }],
          ['input', { type: 'input', class: 'form-control el-value', value: data.value }],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const $input = $el.querySelector('input');
        $input.addEventListener('change', async (event) => {
          const form = $input.closest('[type="form"]').dataset.name;
          const code = $input.closest('.el').dataset.code;
          const value = $input.value;
          const { result, msg, stack } = await api.markup.saveField({ form, code, value });
          if (result === 'error') console.error({ msg, stack });
        });

        // if (data.config && data.config.mask)
        //   doAfterLoad.push(function () {
        //     realParent
        //       .find('input[code=' + data.code + ']')
        //       .mask(data.config.mask.m || data.config.mask, data.config.mask.c);
        //   });
      },
    },
  },

  'input+': {
    config: {
      customType: 'html',
    },
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
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return window.el['core/default/el~label|label'].tpl(data);
    },
  },

  'input--': {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return window.el['core/default/el~label|label'].tpl(data);
    },
  },
});
