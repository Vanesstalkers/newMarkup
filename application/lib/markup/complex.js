({
  get: ({ form, parent, errors, promises }, { name, col, link, filter, config = {}, item = {}, id, on }) => {
    const complex = { items: {}, code: ++form.codeCount, config, item, on };
    complex.name = name;
    complex.col = col || name;
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;
    const idFunc =
      id ||
      async function (cb) {
        return form.data[parent.code][`__${complex.name}`]?.l || [];
      };
    const tplFunc = form.markup[linecode].tpl;

    promises.db.push(async () => {
      const ids = await idFunc();
      const findIds = [];
      for (const id of ids) {
        if (id === true) {
          const itemCode = ++form.codeCount;
          form.data[itemCode] = {};
          complex.items[itemCode] = {};
        } else {
          findIds.push(id);
        }
      }
      if (findIds.length) {
        const findData = await db.mongo.find(complex.col, {}, { projection: form.fields[linecode] });
        for (const item of findData) {
          const itemCode = ++form.codeCount;
          form.data[itemCode] = item;
          complex.items[itemCode] = {};
        }
      }
    });
    promises.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        for (const code of Object.keys(complex.items)) {
          const item = { ...complex.item, code, linecode, elPath: 'core/default/el~complex|item' };
          const proxyData = { form, parent: item, errors, promises };
          result = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data: form.data[code] });
          complex.items[code] = { ...item, content: result };
        }
        if (errors.length) throw errors[0];
      }
    });

    return {
      ...complex,
      type: 'complex',
      elPath: 'core/default/el~complex|block',
    };
  },
  prepare: ({ form, parent, errors, blockName }, { name, col, link, filter, config, id, on }, tplFunc) => {
    const complex = {};
    complex.name = name;
    complex.col = col || name;
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;

    if (form.markup[linecode]) throw new Error(`linecode dublicates (${linecode})`);
    form.markup[linecode] = {
      parent: parent.root ? null : JSON.stringify(parent.linecode),
      tpl: tplFunc.toString(),
      htmlList: [],
    };
    form.queryFields[linecode] = { _id: 1 }; // без этого не воспринимает slice и забирает весь объект
    if (on) form.scriptList.push(...Object.values(on));

    complex.parentDataNotRequired = config?.parentDataNotRequired;
    if (!complex.parentDataNotRequired && form.queryFields[parent.linecode]) {
      const childLink = link || `__${complex.name}`;
      form.queryFields[parent.linecode][childLink + '.l'] =
        filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
      // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
    }

    if (typeof tplFunc === 'function') {
      const proxyData = { prepareCall: true, form, errors, parent: complex, blockName };
      lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data: {} });
      if (errors.length) throw errors[0];
      return form;
    }
  },
});
