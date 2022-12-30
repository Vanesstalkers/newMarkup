({
  addProxifiedContextToTplFunc(tplFunc, { prepareCall = false, form, errors, parent, blockName, promises }) {
    const appContext = { console, process, api, lib, db, bus, domain };
    const stringifiedFunc = tplFunc.toString();
    const { exports: f } = new npm.metavm.MetaScript(
      '',
      `(...args)=>{
        try{ 
          return ( ${stringifiedFunc})(...args) 
        }catch(err){
          if(!errors.length){
            console.log(err);
            const stringifiedFunc = \`${stringifiedFunc.replace(/[`]/g, '\\`')}\`;
            // errors.push({message: err.message});
            return [['div', {class: 'inline-error', error: err.message, "error_full": err.message + \` at TPL-script: \` + stringifiedFunc, onclick: "console.log(this.getAttribute('error_full'))"}]];
          }
        }
      }`,
      {
        context: npm.metavm.createContext(
          new Proxy(
            {
              ...appContext,
              parent,
              errors,
              COMPLEX: (...args) =>
                prepareCall
                  ? lib.markup.complex.prepare({ form, errors, parent, blockName }, ...args)
                  : lib.markup.complex.get({ form, parent, errors, promises }, ...args),
              HTML: (...args) => {
                if (prepareCall) {
                  lib.markup.html.prepare({ form, errors, parent, blockName }, ...args);
                } else {
                  return lib.markup.html.get({ form, errors, parent, promises }, ...args);
                }
              },
              FIELD: (data) => {
                if (typeof data != 'object') data = { name: data };
                if (!data.keyvalue) data.keyvalue = data.name;
                if (!data.type) data.type = 'input';
                if (data.type.includes('*')) data.type = data.type.replace('*', 'json');
                const elPath = `core/default/el~${data.type.replace(/[+-]/g, '')}|${data.type}`;
                if (prepareCall) {
                  form.elList.push(elPath);
                  form.markup[parent.linecode].queryFields[data.name] = 1;
                  if (data.lst) form.lstList.push(data.lst);
                  if (data.on) form.scriptList.push(...Object.values(data.on));
                } else {
                  const field = {
                    code: ++form.codeCount,
                    parentCode: parent.code,
                    name: data.name,
                    type: data.type,
                    keyvalue: data.keyvalue,
                    elPath,
                  };
                  form.fields[field.code] = field;
                  const value = form.data[parent.code]?.[field.keyvalue] || '';
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
            },
          ),
        ),
      },
    );
    return f;
  },
  prepareData(data, { styleList }) {
    const entries = [];

    for (const [key, value] of Object.entries(data)) {
      let stringifiedValue = '';
      switch (key) {
        case 'tpl':
          stringifiedValue = this.prepareCss(value ? value.toString() : '', styleList);
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
      const stringifiedEl = [['tpl', el.tpl]]
        .concat(Object.entries(el.front || {}))
        .map(([key, value]) => `${key}:${value.toString()}`)
        .join(',');
      funcList.push(`window.el['${elPath}'] = {${stringifiedEl}}`);
      if (el.func) funcList.push(el.func);
      if (el.style) styleList.push(el.style);

      const regexp = /(window\.el\[[',"])(.*)([',"]\]\.)/g;
      // если элемент переиспользует часть функционала другого элемента, то его тоже нужно загрузить
      for (const path of stringifiedEl.match(regexp) || []) {
        const outElPath = path.replace(regexp, '$2');
        // без следующей проверки может возникнуть рекурсия (см. prepareCustom в el~token для core_game)
        if (outElPath !== elPath) this.prepareEl(outElPath, { funcList, styleList });
      }
    }
  },
});