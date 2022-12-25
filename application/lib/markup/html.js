({
  get: ({ form, data, errors, parent, promises }, path) => {
    const tplFunc = form.markup[path].tpl;
    const items = [];
    promises.tpl.push(
      new Promise((resolve, reject) => {
        let result = [];
        if (typeof tplFunc === 'function') {
          const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
            form,
            data,
            errors,
            parent,
            promises,
          });
          result = tplFuncWithProxifiedContext({ data: {} });
          if (errors.length) throw errors[0];
        }
        items.push(...result);
        resolve();
      }),
    );
    return items;
  },

  prepare: ({ form, parent, errors, blockName }, path) => {
    const [block, name] = path.split('~');
    const { tpl: tplFunc, func, script, style } = domain[block][`html~${name}`];
    form.htmlList[path] = { tpl: tplFunc.toString() };
    form.markup[parent.linecode].htmlList.push(path);
    if (style) form.styleList.push(style);
    if (func) form.funcList.push(func);

    if (typeof tplFunc === 'function') {
      const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
        prepareCall: true,
        form,
        errors,
        parent,
        blockName,
      });
      tplFuncWithProxifiedContext({ parent, data: {} });
      if (errors.length) throw errors[0];
    }
  },
});
