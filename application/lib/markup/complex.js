({
  get: ({ user, form, parent = {}, handlers }, data) => {
    const { name, col, links, id, custom } = data;
    if (!parent.linecode) parent.linecode = ''; // самый верхний уровень
    const complex = { ...data, code: lib.markup.helpers.nextCode(form), parent, items: {} };
    form.fields[complex.code] = complex;

    complex.name = name;
    complex.col = col || name;
    complex.links = links || { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;
    const idFunc =
      id ||
      async function () {
        let ids = form.data[parent.code]?.[complex.links[parent.name]]?.l || [];
        if (ids.length === 0 && complex.add?.auto === true) {
          const _id = await lib.markup.actions.addComplex({
            form: form.fields[[1, form.codeSfx].join('_')]?.name,
            code: complex.code,
            user,
            returnId: true,
          });
          ids = [_id];
        }
        return ids;
      };
    const tplFunc = form.markup[linecode].tpl;
    handlers.ids.push(async () => {
      const ids = await idFunc.call(
        { db },
        { user, query: custom?.query, form, complex, parentData: form.data[complex.parent.code] },
      );
      const findIds = [];
      if (typeof complex.handlers?.customData === 'function') {
        const customItems = await complex.handlers.customData.call(
          { db },
          { user, query: custom?.query, form, complex, parentData: form.data[complex.parent.code] },
        );
        for (const item of customItems) {
          const itemCode = lib.markup.helpers.nextCode(form);
          form.data[itemCode] = item;
          complex.items[itemCode] = {};
        }
      } else {
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
            if(!form.data[`${linecode}-${id}`]) form.data[`${linecode}-${id}`] = [];
            form.data[`${linecode}-${id}`].push(itemCode);
            complex.items[itemCode] = {};
          }
          if (!handlers.db[complex.name]) handlers.db[complex.name] = {};
          if (!handlers.db[complex.name][linecode]) handlers.db[complex.name][linecode] = { col: complex.col, ids: [] };
          handlers.db[complex.name][linecode].ids.push(...findIds);
        }
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
            result = lib.markup.helpers.addProxifiedContextToTplFunc(
              tplFunc,
              proxyData,
            )({ data: form.data[code] || {}, custom: item.custom || {} });
          } catch (err) {
            result = [['div', { class: 'inline-error', error: err.message }]];
          }
          complex.items[code] = { ...item, content: result };
        }
      }
    });
    return { ...complex, elPath: 'core/default/el~complex|block' };
  },
  prepare: ({ user, form, parent = {}, blockName }, data, tplFunc) => {
    const { name, col, config, item, filter, queryFields = {} } = data;
    let links = data.links;
    if (!parent.linecode) parent.linecode = ''; // самый верхний уровень
    if (!data.on) data.on = {};
    if (!data.handlers) data.handlers = {};
    const complex = { ...data, parent, items: {} };
    complex.name = name;
    complex.col = col || name;
    if (!links) links = { [parent.name]: `__${complex.name}` };
    const linecode = `${parent.linecode}__${complex.name}`;
    complex.linecode = linecode;

    if (form.markup[linecode]) throw new Error(`linecode dublicates (${linecode})`);
    form.markup[linecode] = {
      parent: parent.root ? null : JSON.stringify(parent.linecode),
      usedHtml: [],
      queryFields: { _id: 1, ...queryFields }, // без этого не воспринимает slice и забирает весь объект
      tpl: tplFunc.toString(),
      col: JSON.stringify(col),
      config: JSON.stringify(config),
      item: JSON.stringify(item),
      id: data.id?.toString(),
      on: Object.fromEntries(Object.entries(data.on).map(([key, func]) => [key, func.toString()])),
      links,
    };
    if (Object.keys(data.handlers).length) form.handlers[linecode] = data.handlers;
    if (data.on) form.scriptList.push(...Object.values(data.on));

    complex.parentDataNotRequired = data.config?.parentDataNotRequired;
    if (!complex.parentDataNotRequired && form.markup[parent.linecode]) {
      const childLink = links[parent.name];
      form.markup[parent.linecode].queryFields[childLink + '.l'] =
        filter?.l !== undefined ? { $slice: filter.l < 0 ? [filter.l, -1 * filter.l] : [0, filter.l] } : 1;
      form.markup[parent.linecode].queryFields[childLink + '.c'] = true;
      // form.queryFields[parent.linecode][childLink + '.data'] = 1; ???
    }

    if (typeof tplFunc === 'function') {
      const proxyData = { prepareCall: true, user, form, data: {}, parent: complex, blockName };
      try {
        lib.markup.helpers.addProxifiedContextToTplFunc(
          tplFunc,
          proxyData,
        )({ data: {}, custom: complex.item.custom || {} });
      } catch (err) {
        console.log(err);
      }
      return form;
    }
  },
});
