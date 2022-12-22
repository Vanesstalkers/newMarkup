({
  get: async ({ form, name }) => {
    const cacheFilePath = `cache/${form}~${name}.js`;
    await node.fsp.access(cacheFilePath + 'null').catch(async () => {
      await lib.markup.form.prepare({ form, name });
    });

    const { exports: formCache } = await npm.metavm.readScript(cacheFilePath, { type: npm.metavm.COMMON_CONTEXT });
    const promiseList = [];
    async function execPromises() {
      if (promiseList.length) {
        const promisesToExec = [...promiseList];
        promiseList.splice(0, promiseList.length);
        await Promise.all(promisesToExec);
        await execPromises();
      }
    }
    const result = lib.markup.complex.get({ form: formCache, errors: [], promiseList }, {});
    await execPromises();
    return result;
  },

  prepare: async ({ form, name }) => {
    const prepared = await lib.markup.complex.prepare(
      {
        blockName: form,
        tplType: 'form',
        errors: [],
        form: {
          data: {},
          queryFields: {},
          funcList: [],
          styleList: [],
          lstList: [],
          elList: [
            /* 'core/default/el~complex|block', 'core/default/el~complex|item' */
          ],
          htmlList: [],
          scriptList: [],
        },
      },
      { name },
      domain[form][`form~${name}`].tpl,
    );

    const cacheList = [];
    // cacheList += 'exports.config = ' + JSON.stringify(SYS.get(__, "process['.'].config"));
    // cacheList += 'exports.lst = ' + JSON.stringify(__.lst);
    cacheList.push(['fields', JSON.stringify(prepared.queryFields)]);
    const dataEntries = [];
    for (const [key, value] of Object.entries(prepared.data)) {
      if (value.parent) {
        const parent = JSON.parse(value.parent);
        prepared.data[parent].tpl = prepared.data[parent].tpl.replace(
          new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
          '',
        );
        for (const html of prepared.data[parent].htmlList) {
          prepared.htmlList[html].tpl = prepared.htmlList[html].tpl.replace(
            new RegExp(value.tpl.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
            '',
          );
        }
      }
    }
    for (const [key, value] of Object.entries(prepared.data)) {
      const stringifiedData = lib.markup.helpers.prepareData(value, { styleList: prepared.styleList });
      dataEntries.push([key, stringifiedData]);
    }
    for (const [key, value] of Object.entries(prepared.htmlList)) {
      const stringifiedData = lib.markup.helpers.prepareData(value, { styleList: prepared.styleList });
      dataEntries.push([key, stringifiedData]);
    }
    cacheList.push(['data', `{${dataEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    for (const elPath of prepared.elList.filter((value, index, self) => self.indexOf(value) === index)) {
      lib.markup.helpers.prepareEl(elPath, { funcList: prepared.funcList });
    }

    let cacheFile = cacheList.map(([key, value]) => `${key}:${value}`).join(',');
    for (const script of prepared.scriptList) {
      const stringifiedScript = script.toString();
      const scriptCode = node.crypto.createHash('md5').update(stringifiedScript).digest('hex');
      cacheFile = cacheFile.replace(
        new RegExp(stringifiedScript.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
        '"f_' + scriptCode + '"',
      );
      prepared.funcList.push(`window.f_${scriptCode} = ${stringifiedScript}`);
    }

    await node.fsp.writeFile(`cache/${form}~${name}.js`, `({${cacheFile}})`);
    await node.fsp.writeFile(
      `cache/${form}~${name}.css`,
      prepared.styleList.map((value) => `${value}\n\n`),
    );
    await node.fsp.writeFile(
      `cache/${form}~${name}_func.js`,
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
