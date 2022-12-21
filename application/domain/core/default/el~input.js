({
  config: {
    multi: true,
    customName: (key) => 'el_' + key,
  },

  input: {
    config: {
      customType: 'html',
    },
    tpl: function (_, d, data, tpl) {
      return [
        [
          'div',
          { class: data.class + ' ' },
          [
            ['label', {}, [['span', { text: data.label }]]],
            ['input', Object.assign({}, data, { class: 'el-value' })],
          ],
        ],
      ];
    },
    front: {
      prepare: function (tpl, data, doAfterLoad, realParent) {
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
    tpl: function (_, d, data, tpl) {
      return [window.el['__tpl~el_input'].tpl.bind(this)(_, d, data, tpl)];
    },
    front: {
      prepare: function (tpl, data, doAfterLoad, realParent) {
        window.el['__tpl~el_input'].prepare.bind(this)(tpl, data, doAfterLoad, realParent);
      },
    },
  },

  'input-': {
    config: {
      customType: 'html',
    },
    tpl: function (_, d, data, tpl) {
      return [window.el['__tpl~el_label'].tpl.bind(this)(_, d, data, tpl)];
    },
  },

  'input--': {
    config: {
      customType: 'html',
    },
    tpl: function (_, d, data, tpl) {
      return [window.el['__tpl~el_label'].tpl.bind(this)(_, d, data, tpl)];
    },
  },
});
