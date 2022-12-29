({
  get: async ({ form, name, _id = true, user }) => {
    const cacheFilePath = `application/static/cache/${form}~${name}.js`;
    await node.fsp.access(cacheFilePath + 'null').catch(async () => {
      await lib.markup.form.prepare({ form, name });
    });

    const { exports: formCache } = await npm.metavm.readScript(cacheFilePath, { type: npm.metavm.COMMON_CONTEXT });
    const promises = { db: [], tpl: [] };
    async function execPromises() {
      if (promises.tpl.length) {
        const tplPromises = [...promises.tpl];
        const dbPromises = [...promises.db];
        promises.tpl.splice(0, promises.tpl.length);
        promises.db.splice(0, promises.db.length);
        for (const dbFunc of dbPromises) await dbFunc();
        for (const tplFunc of tplPromises) await tplFunc();
        await execPromises();
      }
    }

    const processForm = {
      ...formCache,
      codeCount: 0,
      data: { 0: { [`__${form}~${name}`]: { l: [true] } } },
      fields: {},
    };
    const result = lib.markup.complex.get(
      {
        form: processForm,
        parent: { linecode: '.', code: 0 },
        errors: [],
        promises,
      },
      { type: 'form', name: `${form}~${name}`, col: form },
    );
    await execPromises();

    if (!user.forms) user.forms = {};
    user.forms[`${form}~${name}`] = processForm;

    return result;
  },

  prepare: async ({ form, name }) => {
    const { tpl, id, func, script, style } = domain[form][`form~${name}`];
    const prepared = await lib.markup.complex.prepare(
      {
        blockName: form,
        tplType: 'form',
        errors: [],
        form: {
          markup: {},
          funcList: [func],
          styleList: [style],
          lstList: [],
          elList: ['core/default/el~complex|block', 'core/default/el~complex|item'],
          htmlList: [],
          scriptList: [],
        },
        parent: { linecode: '.', root: true },
      },
      { name: `${form}~${name}`, col: form, id },
      tpl,
    );

    const cacheList = [];
    // cacheList += 'exports.config = ' + JSON.stringify(SYS.get(__, "process['.'].config"));
    // cacheList += 'exports.lst = ' + JSON.stringify(__.lst);
    const dataEntries = [];
    for (const [key, value] of Object.entries(prepared.markup)) {
      if (value.parent) {
        const parent = JSON.parse(value.parent);
        prepared.markup[parent].tpl = prepared.markup[parent].tpl
          .replace(new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '')
          .replace(/,[\s]*,/g, ',');
        for (const html of prepared.markup[parent].htmlList) {
          prepared.htmlList[html].tpl = prepared.htmlList[html].tpl
            .replace(new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'), '')
            .replace(/,[\s]*,/g, ',');
        }
      }
    }
    for (const [key, value] of Object.entries(prepared.markup)) {
      const stringifiedData = lib.markup.helpers.prepareData(value, { styleList: prepared.styleList });
      dataEntries.push([key, stringifiedData]);
    }
    for (const [key, value] of Object.entries(prepared.htmlList)) {
      const stringifiedData = lib.markup.helpers.prepareData(value, { styleList: prepared.styleList });
      dataEntries.push([key, stringifiedData]);
    }
    cacheList.push(['markup', `{${dataEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    for (const elPath of prepared.elList.filter((value, index, self) => self.indexOf(value) === index)) {
      lib.markup.helpers.prepareEl(elPath, { funcList: prepared.funcList, styleList: prepared.styleList });
    }

    let cacheFile = cacheList.map(([key, value]) => `${key}:${value}`).join(',');
    for (const script of prepared.scriptList) {
      let stringifiedScript = script.toString();
      const scriptCode = node.crypto.createHash('md5').update(stringifiedScript).digest('hex');
      cacheFile = cacheFile.replace(
        new RegExp(stringifiedScript.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
        '"f_' + scriptCode + '"',
      );

      const splitedScript = stringifiedScript.split('{');
      if (splitedScript[0].includes('=>')) {
        splitedScript[0] = splitedScript[0].replace(
          /([a-zA-Z]\w*|\([a-zA-Z]\w*(,\s*[a-zA-Z]\w*)*\)) => /,
          'function $1',
        );
        stringifiedScript = splitedScript.join('{');
      }

      prepared.funcList.push(`window.f_${scriptCode} = ${stringifiedScript}`);
    }

    await node.fsp.writeFile(`application/static/cache/${form}~${name}.js`, `({${cacheFile}})`);
    await node.fsp.writeFile(
      `application/static/cache/${form}~${name}.css`,
      prepared.styleList.map((value) => `${value}\n\n`),
    );
    await node.fsp.writeFile(
      `application/static/cache/${form}~${name}_func.js`,
      prepared.funcList.map(
        (value) =>
          `${
            typeof value === 'function'
              ? value
                  .toString()
                  .trim()
                  .match(/{([\s\S]*)}/gm)[0]
                  ?.slice(1, -1)
              : value.toString()
          }\n\n`,
      ),
    );
  },
});
