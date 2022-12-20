({ form, parent, errors }, { name, col, link, filter, config }, tplFunc) => {
  const isRootComplex = !parent;
  if (!form) form = { data: {}, queryFields: {} };
  if (!errors) errors = [];
  const complex = {};
  complex.name = name;
  complex.col = col || name;
  const linecode = isRootComplex ? '.' : `${parent.linecode}__${complex.name}`;
  complex.linecode = linecode;

  if (form.data[linecode]) throw new Error(`linecode dublicates (${linecode})`);
  form.data[linecode] = { tpl: tplFunc, test: { a: 1, b: { c: 2 } } };
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
      complex,
      form,
      errors,
    });
    const markup = tplFuncWithProxifiedContext({ parent, data: {} });
    if (errors.length) throw errors[0];
    return { markup, form };
  }
};
