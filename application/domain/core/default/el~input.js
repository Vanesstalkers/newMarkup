({
  input: {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [
        [
          'div',
          { code: data.code, class: data.class + ' ' },
          [
            ['label', { text: data.label || '' }],
            ['input', { type: 'input', class: 'el-value', value: data.value }],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        if (data.config && data.config.mask)
          doAfterLoad.push(function () {
            realParent
              .find('input[code=' + data.code + ']')
              .mask(data.config.mask.m || data.config.mask, data.config.mask.c);
          });
      },
    },
  },

  'input+': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~input|input'].tpl.bind(this)(data, config)];
    },
    front: {
      prepare: function (tpl, data, doAfterLoad, realParent) {
        window.el['core/default/el~input|input'].prepare.bind(this)(tpl, data, doAfterLoad, realParent);
      },
    },
  },

  'input-': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~label|label'].tpl.bind(this)(data, config)];
    },
  },

  'input--': {
    config: {
      customType: 'html',
    },
    tpl: function (data, config) {
      return [window.el['core/default/el~label|label'].tpl.bind(this)(data, config)];
    },
  },
});
