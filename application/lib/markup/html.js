({
  get: ({ form, data = {}, errors, parent, promises }, path) => {
    const tplFunc = form.markup[path].tpl;
    const items = [];
    promises.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        const proxyData = { form, data, errors, parent, promises };
        result = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data });
        if (errors.length) throw errors[0];
      }
      items.push(...result);
    });
    return items;
  },

  prepare: ({ form, parent, errors, blockName }, path) => {
    const [block, name] = path.split('~');
    const { tpl: tplFunc, func, style } = domain[block][`html~${name}`];
    form.markup[path] = { tpl: tplFunc.toString() };
    form.markup[parent.linecode].usedHtml.push(path);
    if (style) form.styleList.push(style);
    if (func) form.funcList.push(func);

    if (typeof tplFunc === 'function') {
      const proxyData = { prepareCall: true, form, errors, parent, blockName };
      const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData);
      tplFuncWithProxifiedContext({ parent, data: {} });
      if (errors.length) throw errors[0];
    }
  },
});
