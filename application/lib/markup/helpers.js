({
  addProxifiedContextToTplFunc(tplFunc, { prepareCall = false, user, form, data, parent, blockName, handlers }) {
    const appContext = { console, Object, JSON, process, api, lib, db, bus, domain, config };
    const stringifiedFunc = tplFunc.toString();
    const { exports: f } = new npm.metavm.MetaScript(
      '',
      `(...args)=>{
        try{ 
          return ( ${stringifiedFunc})(...args) 
        }catch(err){
          proxifiedError = err;
        }
      }`,
      {
        context: npm.metavm.createContext(
          new Proxy(
            {
              ...appContext,
              user,
              data,
              parent,
              SUBFORM: (data) => {
                return { ...data, type: 'subform', code: lib.markup.helpers.nextCode(form) };
              },
              COMPLEX: (...args) =>
                prepareCall
                  ? (() => {
                      const elPath = `core/default/el~complex|block`;
                      form.elList.push(elPath);
                      const [mainPath, elType] = elPath.split('|');
                      const [corePath, themePath, filePath] = mainPath.split('/');
                      const elFile = domain[corePath][themePath][filePath.replace(/[+-]/g, '')];
                      const el = elType ? elFile?.[elType] : elFile;
                      if (typeof el.tpl === 'function')
                        lib.markup.helpers.addProxifiedContextToElTplFunc(el.tpl, { user, form })(...args);

                      lib.markup.complex.prepare({ user, form, parent, blockName }, ...args);
                    })()
                  : lib.markup.complex.get({ user, form, data, parent, handlers }, ...args),
              HTML: (...args) => {
                if (prepareCall) {
                  lib.markup.html.prepare({ user, form, parent, blockName }, ...args);
                } else {
                  return lib.markup.html.get({ user, form, data, parent, handlers }, ...args);
                }
              },
              FIELD: function (data) {
                if (typeof data != 'object') data = { name: data };
                if (!data.keyvalue) data.keyvalue = data.name;
                if (!data.type) data.type = 'input';
                data.type = data.type.replace('--', '-');
                const baseType = data.type.replace(/[+-]/g, '');
                if (data.type.includes('*')) data.type = data.type.replace('*', 'json');
                const elPath = `core/default/el~${baseType}|${data.type}`;
                const skipArray = ['button'];
                if (prepareCall) {
                  form.elList.push(elPath);
                  if (!skipArray.includes(baseType)) form.markup[parent.linecode].queryFields[data.name] = 1;
                  if (typeof data.lst === 'string') form.lstList.push(data.lst);
                  if (typeof data.handler === 'function') {
                    if (!data.name) throw new Error(`action without name (${parent.linecode})`);
                    if (!form.handlers[parent.linecode]) form.handlers[parent.linecode] = {};
                    if (form.handlers[parent.linecode][data.name])
                      throw new Error(`action linecode dublicates (${parent.linecode}.${data.name})`);
                    form.handlers[parent.linecode][data.name] = data.handler;
                  }
                  if (data.on) form.scriptList.push(...Object.values(data.on));

                  const [mainPath, elType] = elPath.split('|');
                  const [corePath, themePath, filePath] = mainPath.split('/');
                  const elFile = domain[corePath][themePath][filePath.replace(/[+-]/g, '')];
                  const el = elType ? elFile?.[elType] : elFile;

                  if (el && typeof el.tpl === 'function')
                    lib.markup.helpers.addProxifiedContextToElTplFunc(el.tpl, { form })(data);
                } else {
                  const field = {
                    ...data,
                    handler: data.handler ? (typeof data.handler === 'string' ? data.handler : true) : undefined,
                    code: lib.markup.helpers.nextCode(form),
                    parentCode: parent.code,
                    elPath,
                  };
                  form.fields[field.code] = field;
                  const value = skipArray.includes(baseType)
                    ? null
                    : lib.utils.getDeep(form.data[parent.code] || {}, field.keyvalue) || '';
                  return { ...field, value };
                }
              },
              IF: (check, result) => (prepareCall || check ? (typeof result == 'function' ? result() : result) : []),
              FUNC: (f) => {
                if (prepareCall) form.funcList.push(f);
                // f(); // внутри f могут быть объявлены переиспользуемые функции, которые будут вызваны внутри шаблона ???
              },
            },
            {
              get: function (target, name) {
                if (target[name]) return Reflect.get(target, name);
                return function (...args) {
                  return [name, args[0] || {}, Object.values(args).slice(1)];
                };
              },
              set: function (target, name, value) {
                if (name === 'proxifiedError') {
                  console.log(value, `\nat TPL-script: ${stringifiedFunc}`);
                  throw value;
                }
                if (target[name]) return Reflect.set(target, name, value);
              },
            },
          ),
        ),
      },
    );
    return f;
  },
  addProxifiedContextToElTplFunc(tplFunc, { form }) {
    const appContext = { console, JSON, process, api, lib, db, bus, domain };
    const stringifiedFunc = tplFunc.toString();

    const { exports: f } = new npm.metavm.MetaScript(
      '',
      `(...args)=>{
        try{ 
          return ( ${stringifiedFunc})(...args) 
        }catch(err){
          proxifiedError = err;
        }
      }`,
      {
        context: npm.metavm.createContext(
          new Proxy(
            {
              ...appContext,
              window: {
                el: new Proxy(
                  {},
                  {
                    get: function (target, name) {
                      // !!! если совсем правильно, то тут нужно делать рекурсивный вызов addProxifiedContextToElTplFunc
                      form.elList.push(name);
                      return { tpl: () => [] };
                    },
                  },
                ),
              },
            },
            {
              set: function (target, name, value) {
                if (name === 'proxifiedError') {
                  console.log(value, `\nat TPL-script: ${stringifiedFunc}`);
                  throw value;
                }
                if (target[name]) return Reflect.set(target, name, value);
              },
              get: function (target, name) {
                if (target[name]) return Reflect.get(target, name);
                form.funcList.push(`
                  window["${name}"] = function (...args) {
                    return ["${name}", args[0] || {} , Object.values(args).slice(1)]
                  }
                `);
                return function (...args) {
                  return [name, args[0] || {}, Object.values(args).slice(1)];
                };
              },
            },
          ),
        ),
      },
    );
    return f;
  },
  prepareMarkupHandlers: ({ form }) => {
    const handlers = { ids: [], db: {}, tpl: [] };

    async function execHandlers() {
      try {
        if (handlers.tpl.length) {
          const idsHandlers = [...handlers.ids];
          const tplHandlers = [...handlers.tpl];
          handlers.ids.splice(0, handlers.ids.length);
          handlers.tpl.splice(0, handlers.tpl.length);
          for (const handler of idsHandlers) await handler();

          for (const [name, map] of Object.entries(handlers.db)) {
            for (const [linecode, { col, ids }] of Object.entries(map)) {
              const findData = await db.mongo.find(
                col,
                { _id: { $in: ids } },
                { projection: form.markup[linecode].queryFields },
              );
              for (const item of findData) {
                const itemCode = form.data[`${linecode}-${item._id}`];
                form.data[itemCode] = item;
                delete form.data[`${linecode}-${item._id}`];
              }
            }
          }

          for (const handler of tplHandlers) await handler();
          handlers.db = {};
          await execHandlers();
        }
      } catch (err) {
        console.log(err);
      }
    }

    return { handlers, execHandlers };
  },
  nextCode(form) {
    return [++form.codeCount, form.codeSfx].filter((item) => item).join('_');
  },
  prepareData(data, { styleList }) {
    const entries = [];

    for (const [key, value] of Object.entries(data)) {
      let stringifiedValue = '';
      switch (key) {
        case 'tpl':
          stringifiedValue = this.prepareCss(value ? value.toString() : '', styleList);
          break;
        case 'on':
          stringifiedValue = `{${Object.entries(value).map(([key, str]) => `${key}: ${str}`)}}`;
          break;
        default:
          if (typeof value == 'object') stringifiedValue = JSON.stringify(value);
          else stringifiedValue = value ? value.toString() : '';
      }
      if (stringifiedValue) entries.push([key, stringifiedValue]);
    }
    return `{${entries.map(([key, str]) => `${key}: ${str}`)}}`;
  },
  prepareCss(str, styleList) {
    let cssPosStart = str.indexOf('`css');
    let cssPosEnd;
    while (cssPosStart != -1) {
      cssPosStart += 4;
      cssPosEnd = str.indexOf('`', cssPosStart);
      const cssCode = `_${node.crypto.createHash('md5').update(str.substring(cssPosStart, cssPosEnd)).digest('hex')}_`;
      const cssStr = str.substring(cssPosStart, cssPosEnd).replace(/\*css\*/g, cssCode);
      styleList.push(!cssStr.includes(cssCode) ? `.${cssCode} {${cssStr}}` : cssStr); // возможна упрощенная запись css
      str = str.substring(0, cssPosStart - 4) + '" ' + cssCode + '"' + str.substring(cssPosEnd + 1);
      cssPosStart = str.indexOf('`css', cssPosStart + 1);
    }
    return str;
  },
  prepareEl(elPath, { funcList, styleList }) {
    const [mainPath, elType] = elPath.split('|');
    const [corePath, themePath, filePath] = mainPath.split('/');
    const elFile = domain[corePath][themePath][filePath.replace(/[+-]/g, '')];
    const el = elType ? elFile?.[elType] : elFile;

    if (el) {
      const stringifiedEl = [['tpl', this.prepareCss(el.tpl ? el.tpl.toString() : '', styleList)]]
        .concat(Object.entries(el.front || {}))
        .map(([key, value]) => `${key}:${value.toString()}`)
        .join(',');
      funcList.push(`window.el['${elPath}'] = {${stringifiedEl}}`);
      if (el.func) funcList.push(el.func);
      if (el.style) styleList.push(el.style);
    }
  },
});
