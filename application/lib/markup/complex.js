({
  get: ({ form, parent, errors, promiseList }, { name, col, link, filter, config }) => {
    const isRootComplex = !parent;
    const complex = { items: [] };
    complex.name = name;
    complex.col = col || name;
    const linecode = isRootComplex ? '.' : `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;
    const tplFunc = form.data[linecode].tpl;

    promiseList.push(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          let result = [];
          if (typeof tplFunc === 'function') {
            const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
              form,
              parent: complex,
              errors,
              promiseList,
            });
            result = tplFuncWithProxifiedContext({ data: {} });
            if (errors.length) throw errors[0];
          }
          console.log('resolve', { result });
          complex.items.push(...result);
          resolve();
        }, 100);
      }),
    );

    return { type: 'complex', name: complex.name, items: complex.items };
  },
  prepare: ({ form, parent, errors, blockName, tplType }, { name, col, link, filter, config }, tplFunc) => {
    const isRootComplex = !parent;
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
    form.data[linecode] = { parent: JSON.stringify(parent?.linecode), tpl: tplFunc.toString(), htmlList: [] };
    form.queryFields[linecode] = { _id: 1 }; // без этого не воспринимает slice и забирает весь объект

    complex.hasNoParent = config?.hasNoParent;
    if (!isRootComplex && !complex.hasNoParent) {
      const childLink = link || `__${complex.name}`;
      form.queryFields[parent.linecode][childLink + '.l'] =
        filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
      // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
    }

    if (typeof tplFunc === 'function') {
      const tplFuncWithProxifiedContext = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, {
        prepareCall: true,
        form,
        errors,
        parent: complex,
        blockName,
      });

      tplFuncWithProxifiedContext({ data: {} });
      if (errors.length) throw errors[0];
      return form;
    }
  },
});
