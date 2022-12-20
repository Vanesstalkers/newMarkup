async ({ form, name, parent, queryFields = {} }) => {
  let cache;
  try {
    throw 123;
    const { exports } = await npm.metavm.readScript(`cache/${form}~${name}.js`, { type: npm.metavm.COMMON_CONTEXT });
    cache = exports;
  } catch (err) {
    const prepared = await lib.markup.prepareComplex(
      {},
      {
        data: { name, blockName: form, tplType: 'form' },
      },
      domain[form][`form~${name}`].tpl,
    );
    cache = prepared.markup;

    const cacheFile = [];
    const stylesFile = [];
    // cacheFile += 'exports.config = ' + JSON.stringify(SYS.get(__, "process['.'].config"));
    // cacheFile += 'exports.lst = ' + JSON.stringify(__.lst);
    cacheFile.push(['fields', JSON.stringify(prepared.form.queryFields)]);
    const dataEntries = [];
    for (const [key, value] of Object.entries(prepared.form.data)) {
      const stringifiedData = lib.markup.prepareHelper.fillData(value, { stylesFile });
      dataEntries.push([key, stringifiedData]);
      // cacheFile += `exports.data['${key}'] = ${stringifiedData}\n`;
    }
    cacheFile.push(['data', `{${dataEntries.map(([key, value]) => `"${key}":${value}`).join(',')}}`]);

    // !!! el не должны загружаться много раз

    await node.fsp.writeFile(`cache/${form}~${name}.js`, `({${cacheFile.map(([key, value]) => `${key}:${value}`)}})`);
    await node.fsp.writeFile(
      `cache/${form}~${name}.css`,
      stylesFile.map((value) => `${value}\n\n`),
    );

    console.log({ cache: JSON.stringify(cache), cacheFile });
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
