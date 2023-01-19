({
  get: async ({ form, _id, codeSfx, user }) => {
    const cacheFilePath = `application/static/cache/${form}.js`;
    // await node.fsp.access(cacheFilePath).catch(async () => {
    //   try {
    await lib.markup.form.prepare({ form, user });
    //   } catch (err) {
    //     console.log(err);
    //   }
    // });

    const { exports: formCache } = await npm.metavm.readScript(cacheFilePath, { type: npm.metavm.COMMON_CONTEXT });
    const processForm = { ...formCache, ...{ data: {}, codeCount: 0, codeSfx, fields: {} } };
    if (!user.forms) user.forms = {};
    user.forms[form] = processForm;

    let { col, id, on = {}, item = {}, config } = processForm.markup[`__${form}`];
    const { handlers, execHandlers } = lib.markup.helpers.prepareMarkupHandlers({ form: processForm });
    const result = lib.markup.complex.get(
      { user, form: processForm, parent: { code: 0 }, handlers },
      {
        type: 'form',
        name: form,
        col,
        id,
        on,
        item,
        config,
        custom: { query: { _id } },
      },
    );
    await execHandlers();

    return result;
  },

  prepare: async ({ form, user }) => {
    const [block, name] = form.split('~');
    const {
      tpl,
      col,
      config,
      id,
      on,
      item = {},
      links,
      func,
      style,
    } = lib.utils.getDeep(domain, block.replace(/\//g, '.') + '.' + `form~${name}`);
    console.log("links=", links, form);
    const prepared = await lib.markup.complex.prepare(
      {
        user,
        blockName: block,
        tplType: 'form',
        form: {
          markup: {},
          handlers: {},
          funcList: [func],
          styleList: [style],
          lstList: [],
          elList: ['core/default/el~complex|block', 'core/default/el~complex|item'],
          scriptList: [],
        },
        parent: { root: true },
      },
      { name: form, col, config, id, on, item, links },
      tpl,
    );

    const cacheList = [];
    cacheList.push(['name', `"${form}"`]);

    const tplEntries = [];
    for (const [key, value] of Object.entries(prepared.markup)) {
      if (value.parent) {
        const parent = JSON.parse(value.parent);
        prepared.markup[parent].tpl = prepared.markup[parent].tpl
          .replace(new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '')
          .replace(/,[\s]*,/g, ',');
        for (const html of prepared.markup[parent].usedHtml) {
          prepared.markup[html].tpl = prepared.markup[html].tpl
            .replace(new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '')
            .replace(/,[\s]*,/g, ',');
        }
      }
    }
    for (const [key, value] of Object.entries(prepared.markup)) {
      const stringifiedData = lib.markup.helpers.prepareData(value, { styleList: prepared.styleList });
      tplEntries.push([key, stringifiedData]);
    }
    cacheList.push(['markup', `{${tplEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    const handlersCachePath = `./application/domain/${form.split('~')[0]}/cache`;
    await node.fsp.mkdir(handlersCachePath, { recursive: true });
    const handlerEntries = [];
    for (const [linecode, handlers] of Object.entries(prepared.handlers)) {
      const stringifiedData = Object.entries(handlers).map(
        ([key, handler]) => `"${key}":${typeof handler === 'string' ? `"${handler}"` : handler.toString()}`,
      );
      handlerEntries.push([linecode, stringifiedData.join(',')]);
    }
    await node.fsp.writeFile(
      `${handlersCachePath}/handlers.js`,
      `({${handlerEntries.map(([key, value]) => `"${key}":{${value}}`).join(',')}})`,
    );

    prepared.funcList.push('window.el = {}');
    prepared.elList = prepared.elList.filter((value, index, self) => self.indexOf(value) === index);
    for (const elPath of prepared.elList) {
      lib.markup.helpers.prepareEl(elPath, {
        funcList: prepared.funcList,
        styleList: prepared.styleList,
        elList: prepared.elList,
      });
    }
    const lstEntries = [];
    prepared.funcList.push('window.LST = {}');
    for (const lstCode of prepared.lstList.filter((value, index, self) => self.indexOf(value) === index)) {
      const [path, name] = lstCode.split('~');
      const lst = lib.utils.getDeep(domain, path.replace(/\//g, '.') + '.lst~' + name);
      lstEntries.push([
        lstCode,
        JSON.stringify(lst, (key, value) => {
          return typeof value === 'function' ? '***function*** ' + value.toString() : value;
        }),
      ]);

      const lstFunc = {};
      let sLst = `window.LST["${lstCode}"] = ${JSON.stringify(lst, (key, value) => {
        if (typeof value === 'function') {
          const str = value.toString();
          const code = node.crypto.createHash('md5').update(str).digest('hex');
          lstFunc[code] = str;
          return code;
        }
        return value;
      })}`;
      try {
        for (const [code, str] of Object.entries(lstFunc)) sLst = sLst.replace(new RegExp(`"${code}"`, 'g'), str);
      } catch (err) {
        console.log(err);
      }
      prepared.funcList.push(sLst);
    }
    // cacheList.push(['lst', `{${lstEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    let cacheFile = cacheList.map(([key, value]) => `${key}:${value}`).join(',');
    for (const script of prepared.scriptList) {
      if (typeof script === 'function') {
        let stringifiedScript = script.toString();
        const scriptCode = node.crypto.createHash('md5').update(stringifiedScript).digest('hex');
        cacheFile = cacheFile.replace(
          new RegExp(stringifiedScript.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
          '"f_' + scriptCode + '"',
        );
        stringifiedScript = lib.utils.convertArrowFunction(stringifiedScript);
        prepared.funcList.push(`window.f_${scriptCode} = ${stringifiedScript}`);
      }
    }

    const formCachePath = `application/static/cache/${form}`;
    await node.fsp.mkdir(formCachePath.split('/').slice(0, -1).join('/'), { recursive: true });
    await node.fsp.writeFile(`${formCachePath}.js`, `({${cacheFile}})`);
    await node.fsp.writeFile(
      `${formCachePath}.css`,
      prepared.styleList.map((value) => (value ? `${value}\n\n` : '')),
    );
    await node.fsp.writeFile(
      `${formCachePath}.func.js`,
      prepared.funcList.map(
        (item) =>
          `${
            typeof item === 'function'
              ? item
                  .toString()
                  .trim()
                  .match(/{([\s\S]*)}/gm)[0]
                  ?.slice(1, -1)
              : (item || '').toString()
          }\n\n`,
      ),
    );
  },
});
