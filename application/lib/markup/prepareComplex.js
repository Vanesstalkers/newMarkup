({ form, parent, errors, blockName, tplType }, { name, col, link, filter, config }, tplFunc) => {
  const isRootComplex = !parent;
  if (!form)
    form = {
      data: {},
      queryFields: {},
      funcList: [],
      styleList: [],
      lstList: [],
      elList: ['core/default/el~complex|block', 'core/default/el~complex|item'],
      scriptList: [],
    };
  if (!errors) errors = [];
  const complex = {};
  complex.name = name;
  complex.col = col || name;
  const linecode = isRootComplex ? '.' : `${parent.linecode}__${complex.name}`;
  complex.linecode = linecode;

  if (tplType) {
    const { func, script, style } = domain[blockName][`${tplType}~${complex.name}`];
    if (style) form.styleList.push(style);
    if (func) form.funcList.push(func);
  }

  if (form.data[linecode]) throw new Error(`linecode dublicates (${linecode})`);
  form.data[linecode] = { tpl: tplFunc };
  form.queryFields[linecode] = { _id: 1 }; // без этого не воспринимает slice и забирает весь объект

  complex.hasNoParent = config?.hasNoParent;
  if (!isRootComplex && !complex.hasNoParent) {
    const childLink = link || `__${complex.name}`;
    form.queryFields[parent.linecode][childLink + '.l'] =
      filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
    // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
  }

  if (typeof tplFunc === 'function') {
    const tplFuncWithProxifiedContext = lib.markup.prepareHelper.addProxifiedContextToTplFunc(tplFunc, {
      parent: complex,
      errors,
      COMPLEX: (...args) => lib.markup.prepareComplex({ form, errors, parent: complex, blockName }, ...args).markup,
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
      HTML: (...args) => lib.markup.prepareHtml({ form, errors, parent: complex, blockName }, ...args).markup,
      // COMPLEX: (...args) =>
      // const [block, name] = path.split('~');
      // const html = domain[block][`html~${name}`];
      // html.tpl();
      // },
    });

    const markup = tplFuncWithProxifiedContext({ parent, data: {} });
    if (errors.length) throw errors[0];
    return { markup, form };
  }
};
