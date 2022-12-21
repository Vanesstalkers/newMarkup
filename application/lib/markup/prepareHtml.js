({ form, parent, errors, blockName }, path) => {
  const [block, name] = path.split('~');
  const { tpl: tplFunc, func, script, style } = domain[block][`html~${name}`];
  if (style) form.styleList.push(style);
  if (func) form.funcList.push(func);

  if (typeof tplFunc === 'function') {
    const tplFuncWithProxifiedContext = lib.markup.prepareHelper.addProxifiedContextToTplFunc(tplFunc, {
      parent,
      errors,
      COMPLEX: (...args) => lib.markup.prepareComplex({ form, errors, parent, blockName }, ...args).markup,
      IF: (check, result) => (typeof result == 'function' ? result() : result),
      FUNC: (f) => {
        form.funcList.push(f);
        // f(); // внутри f могут быть объявлены переиспользуемые функции, которые будут вызваны внутри шаблона ???
        return [];
      },
      // SCRIPT: (f) => {
      //   return [];
      // },
      FIELD: (data) => {
        if (typeof data != 'object') data = { name: data, keyvalue: data };
        if (!data.type) data.type = 'input';
        if (data.type.includes('*')) data.type = data.type.replace('*', 'json');
        const elPath = `core/default/el~${data.type.replace(/[+-]/g, '')}|${data.type}`;
        form.elList.push(elPath);
        form.queryFields[linecode][data.name] = 1;
        if (data.lst) form.lstList.push(data.lst);
        if (data.front) form.scriptList.push(...Object.values(data.front));
      },
      HTML: (...args) => {
        return lib.markup.prepareHtml({ form, errors, parent, blockName }, ...args).markup;
      },
    });

    const markup = tplFuncWithProxifiedContext({ parent, data: {} });
    if (errors.length) throw errors[0];
    return { markup, form };
  }
};
