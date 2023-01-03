({
  get: ({ form, parent, handlers }, { type = 'complex', name, col, links, filter, config = {}, item = {}, id, on }) => {
    const complex = { code: lib.markup.helpers.nextCode(form), type, parent, items: {}, config, item, on };
    form.fields[complex.code] = complex;

    complex.name = name;
    complex.col = col || name;
    complex.links = links || { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;
    const idFunc =
      id ||
      async function (cb) {
        return form.data[parent.code][`__${complex.name}`]?.l || [];
      };
    const tplFunc = form.markup[linecode].tpl;

    handlers.ids.push(async () => {
      const ids = await idFunc();
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
        if (!handlers.db[complex.col]) handlers.db[complex.col] = {};
        if (!handlers.db[complex.col][linecode]) handlers.db[complex.col][linecode] = [];
        handlers.db[complex.col][linecode].push(...findIds);
      }
    });
    handlers.tpl.push(async () => {
      let result = [];
      if (typeof tplFunc === 'function') {
        for (const code of Object.keys(complex.items)) {
          const item = {
            ...complex.item,
            code,
            blockCode: complex.code,
            name: complex.name,
            col: complex.col,
            linecode,
            elPath: 'core/default/el~complex|item',
          };
          form.fields[code] = item;
          const proxyData = { form, parent: item, handlers };
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
  prepare: ({ form, parent, blockName }, { name, col, links, filter, config, id, on }, tplFunc) => {
    const complex = {};
    complex.name = name;
    complex.col = col || name;
    if (!links) links = { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;

    if (form.markup[linecode]) throw new Error(`linecode dublicates (${linecode})`);
    form.markup[linecode] = {
      parent: parent.root ? null : JSON.stringify(parent.linecode),
      tpl: tplFunc.toString(),
      usedHtml: [],
      queryFields: { _id: 1 }, // без этого не воспринимает slice и забирает весь объект
      links,
    };
    if (on) form.scriptList.push(...Object.values(on));

    complex.parentDataNotRequired = config?.parentDataNotRequired;
    if (!complex.parentDataNotRequired && form.markup[parent.linecode]) {
      const childLink = links[parent.name];
      form.markup[parent.linecode].queryFields[childLink + '.l'] =
        filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
      // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
    }

    if (typeof tplFunc === 'function') {
      const proxyData = { prepareCall: true, form, parent: complex, blockName };
      try {
        lib.markup.helpers.addProxifiedContextToTplFunc(tplFunc, proxyData)({ data: {} });
      } catch (err) {}
      return form;
    }
  },
});
