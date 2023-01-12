({
  get: (
    { user, form, parent = {}, handlers },
    { type = 'complex', name, col, links, config = {}, item = {}, id, on, filter, custom } = {},
  ) => {
    if (!parent.linecode) parent.linecode = ''; // самый верхний уровень
    const complex = { code: lib.markup.helpers.nextCode(form), type, parent, items: {}, config, item, id, on };
    form.fields[complex.code] = complex;

    complex.name = name;
    complex.col = col || name;
    complex.links = links || { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;
    const idFunc =
      id ||
      async function () {
        return form.data[parent.code][complex.links[parent.name]]?.l || [];
      };
    const tplFunc = form.markup[linecode].tpl;

    handlers.ids.push(async () => {
      const ids = await idFunc({ user, form, complex, query: custom?.query });
      const findIds = [];
      for (const id of ids) {
        if (id === true) {
          const itemCode = lib.markup.helpers.nextCode(form);
          form.data[itemCode] = {};
          complex.items[itemCode] = {};
        } else {
          findIds.push(id);
        }
      }
      if (findIds.length) {
        for (const id of findIds) {
          const itemCode = lib.markup.helpers.nextCode(form);
          form.data[`${linecode}-${id}`] = itemCode;
          complex.items[itemCode] = {};
        }
        if (!handlers.db[complex.name]) handlers.db[complex.name] = {};
        if (!handlers.db[complex.name][linecode]) handlers.db[complex.name][linecode] = { col: complex.col, ids: [] };
        handlers.db[complex.name][linecode].ids.push(...findIds);
      }
    });
    handlers.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        for (const code of Object.keys(complex.items)) {
          const item = {
            ...complex.item,
            code,
            complexCode: complex.code,
            name: complex.name,
            col: complex.col,
            linecode,
            elPath: 'core/default/el~complex|item',
          };
          form.fields[code] = item;
          const proxyData = { user, form, data: form.data[code], parent: item, handlers };
          try {
            result = lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data: form.data[code] });
          } catch (err) {
            result = [['div', { class: 'inline-error', error: err.message }]];
          }
          complex.items[code] = { ...item, content: result };
        }
      }
    });

    return { ...complex, elPath: 'core/default/el~complex|block' };
  },
  prepare: (
    { user, form, parent = {}, blockName },
    { type = 'complex', name, col, links, filter, config = {}, item = {}, id, on = {}, handlers = {} } = {},
    tplFunc,
  ) => {
    if (!parent.linecode) parent.linecode = ''; // самый верхний уровень
    const complex = { type, parent, items: {}, config, item, on };
    complex.name = name;
    complex.col = col || name;
    if (!links) links = { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;

    if (form.markup[linecode]) throw new Error(`linecode dublicates (${linecode})`);
    form.markup[linecode] = {
      parent: parent.root ? null : JSON.stringify(parent.linecode),
      usedHtml: [],
      queryFields: { _id: 1 }, // без этого не воспринимает slice и забирает весь объект
      tpl: tplFunc.toString(),
      col: JSON.stringify(col),
      id: id?.toString(),
      on: Object.fromEntries(Object.entries(on).map(([key, func]) => [key, func.toString()])),
      links,
    };
    if (Object.keys(handlers).length) form.handlers[linecode] = handlers;
    if (on) form.scriptList.push(...Object.values(on));

    complex.parentDataNotRequired = config?.parentDataNotRequired;
    if (!complex.parentDataNotRequired && form.markup[parent.linecode]) {
      const childLink = links[parent.name];
      form.markup[parent.linecode].queryFields[childLink + '.l'] =
        filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
      // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
    }

    if (typeof tplFunc === 'function') {
      const proxyData = { prepareCall: true, user, form, data: {}, parent: complex, blockName };
      try {
        lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data: {} });
      } catch (err) {
        console.log(err);
      }
      return form;
    }
  },
});
