({
  get: ({ form, errors, parent, promiseList }, path) => {
    const tplFunc = form.data[path].tpl;
    let result = [];
    if (typeof tplFunc === 'function') {
      const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
        form,
        errors,
        parent,
      });
      result = tplFuncWithProxifiedContext({ data: {} });
      if (errors.length) throw errors[0];
    }
    return result;
  },

  prepare: ({ form, parent, errors, blockName }, path) => {
    const [block, name] = path.split('~');
    const { tpl: tplFunc, func, script, style } = domain[block][`html~${name}`];
    form.htmlList[path] = { tpl: tplFunc.toString() };
    form.data[parent.linecode].htmlList.push(path);
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
