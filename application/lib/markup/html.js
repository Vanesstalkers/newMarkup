({
  get: ({ user, form, data = {}, parent, handlers }, tplFunc, config) => {
    if (typeof tplFunc === 'string') tplFunc = form.markup[tplFunc].tpl;
    const items = [];
    handlers.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        const proxyData = { user, form, data, parent, handlers };
        try {
          result = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)(
            { data, form, parent, user },
            config || {},
          );
        } catch (err) {
          result = [['div', { class: 'inline-error', error: err.message }]];
        }
      }
      items.push(...result);
    });
    return items;
  },

  prepare: ({ user, form, parent, blockName }, tplFunc, config) => {
    if (typeof tplFunc === 'string') {
      const [block, name] = tplFunc.split('~');
      const { tpl, func, style } = lib.utils.getDeep(domain, block.replace(/\//g, '.') + '.' + `html~${name}`);
      form.markup[tplFunc] = { tpl: tpl.toString() };
      form.markup[parent.linecode].usedHtml.push(tplFunc);
      if (style) form.styleList.push(style);
      if (func) form.funcList.push(func);
      tplFunc = tpl;
    }

    if (typeof tplFunc === 'function') {
      try {
        lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
          prepareCall: true,
          user,
          form,
          data: {},
          parent,
          blockName,
        })({ data: {}, form, parent }, config || {});
      } catch (err) {}
    }
  },
});
