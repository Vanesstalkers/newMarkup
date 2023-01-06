({
  get: ({ form, data = {}, parent, handlers }, path, config) => {
    const tplFunc = form.markup[path].tpl;
    const items = [];
    handlers.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        const proxyData = { form, data, parent, handlers };
        try {
          result = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)(config);
        } catch (err) {
          result = [['div', { class: 'inline-error', error: err.message }]];
        }
      }
      items.push(...result);
    });
    return items;
  },

  prepare: ({ form, parent, blockName }, path, config) => {
    const [block, name] = path.split('~');
    const { tpl: tplFunc, func, style } = lib.utils.getDeep(domain, block.replace(/\//g, '.') + '.' + `html~${name}`);
    form.markup[path] = { tpl: tplFunc.toString() };
    form.markup[parent.linecode].usedHtml.push(path);
    if (style) form.styleList.push(style);
    if (func) form.funcList.push(func);

    if (typeof tplFunc === 'function') {
      try {
        lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
          prepareCall: true,
          form,
          data: {},
          parent,
          blockName,
        })(config);
      } catch (err) {}
    }
  },
});
