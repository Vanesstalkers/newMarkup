async ({ form, name, parent, queryFields = {} }) => {
  let cache;
  try {
    throw 123;
    const { exports } = await npm.metavm.readScript(`cache/${form}~${name}.js`, { type: npm.metavm.COMMON_CONTEXT });
    cache = exports;
  } catch (err) {
    const prepared = await lib.markup.prepareComplex(
      { blockName: form, tplType: 'form' },
      { name },
      domain[form][`form~${name}`].tpl,
    );
    cache = prepared.markup;

    const cacheList = [];
    // cacheList += 'exports.config = ' + JSON.stringify(SYS.get(__, "process['.'].config"));
    // cacheList += 'exports.lst = ' + JSON.stringify(__.lst);
    cacheList.push(['fields', JSON.stringify(prepared.form.queryFields)]);
    const dataEntries = [];
    for (const [key, value] of Object.entries(prepared.form.data)) {
      const stringifiedData = lib.markup.prepareHelper.prepareData(value, { styleList: prepared.form.styleList });
      dataEntries.push([key, stringifiedData]);
    }
    cacheList.push(['data', `{${dataEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    for (const elPath of prepared.form.elList.filter((value, index, self) => self.indexOf(value) === index)) {
      lib.markup.prepareHelper.prepareEl(elPath, { funcList: prepared.form.funcList });
    }

    let cacheFile = cacheList.map(([key, value]) => `${key}:${value}`).join(',');
    for (const script of prepared.form.scriptList) {
      const stringifiedScript = script.toString();
      const scriptCode = node.crypto.createHash('md5').update(stringifiedScript).digest('hex');
      cacheFile = cacheFile.replace(
        new RegExp(stringifiedScript.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1'), 'g'),
        '"f_' + scriptCode + '"',
      );
      prepared.form.funcList.push(`window.f_${scriptCode} = ${stringifiedScript}`);
    }

    await node.fsp.writeFile(`cache/${form}~${name}.js`, `({${cacheFile}})`);
    await node.fsp.writeFile(
      `cache/${form}~${name}.css`,
      prepared.form.styleList.map((value) => `${value}\n\n`),
    );
    await node.fsp.writeFile(
      `cache/${form}~${name}_func.js`,
      prepared.form.funcList.map(
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

    console.log({ cache: JSON.stringify(cache), cacheList });
    const { exports } = await npm.metavm.readScript(`cache/${form}~${name}.js`, { type: npm.metavm.COMMON_CONTEXT });
    cache = exports;
  }

  return cache;
  // await lib.markup.getComplex({
  //   parent: { linecode: '.' },
  //   queryFields: {},
  //   ...cache,
  // });
};
