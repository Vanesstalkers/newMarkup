({
  addProxifiedContextToTplFunc(tplFunc, { complex, form, errors }) {
    const stringifiedFunc = tplFunc.toString();
    const { exports: f } = new npm.metavm.MetaScript(
      '',
      `(...args)=>{
        try{ 
          return ( ${stringifiedFunc})(...args) 
        }catch(err){
          if(!errors.length){
            console.log(err);
            err.message += \` at TPL-script: ${stringifiedFunc.replace(/[`]/g, '\\`')}\`; 
            errors.push({message: err.message});
          }
        }
      }`,
      {
        context: npm.metavm.createContext(
          new Proxy(
            {
              parent: complex,
              errors,
              COMPLEX: (...args) => lib.markup.prepareComplex({ form, errors, parent: complex }, ...args).markup,
              console,
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
  fillData(data, { stylesFile }) {
    const entries = [];

    for (const [key, value] of Object.entries(data)) {
      let stringifiedValue = '';
      switch (key) {
        case 'tpl':
          stringifiedValue = this.prepareCss(value ? value.toString() : '', stylesFile);
          break;
        default:
          if (typeof value == 'object') stringifiedValue = JSON.stringify(value);
          else stringifiedValue = value ? value.toString() : '';
      }
      if (stringifiedValue) entries.push([key, stringifiedValue]);

      if (key == 'style' || key == 'script' || key == 'func' || key == 'stringFunc') {
        //         if (key == 'stringFunc') funcFile += value.trim() + '\n\n';
        //         if (key == 'style') style += value.toString().trim().substr(7).slice(0, -3).trim() + '\n\n';
        //         if (key == 'script' || key == 'func') {
        //           result += "exports.process['" + i + "']['" + key + "'] = {}\n";
        //           if (typeof data[key] == 'function') data[key] = [data[key]];
        //           data[key].forEach((f) => {
        //             if (key == 'func') {
        //               funcFile += f.toString().trim().substr(5).slice(0, -1).trim() + '\n\n';
        //             } else {
        //               let scriptText = f
        //                 .toString()
        //                 .trim()
        //                 .match(/{([\s\S]*)}/gm)[0]
        //                 .trim();
        //               let scriptCode = md5(scriptText);
        //               if ((f.config || {}).sfx) scriptCode += '_' + f.config.sfx;
        //               scriptFile += `
        // ((data) => ${scriptText}).call(null,
        //   JSON.parse(document.querySelector('[script_code="${scriptCode}"]')?.dataset?.script || '{}'),
        //   JSON.parse(document.querySelector('[script_code="${scriptCode}"]')?.dataset?.config || '{}')
        // );\n\n
        // `;
        //             }
        //           });
        //         }
      } else {
      }
    }

    // эксперимент с именованием внутренних путей внутри темы
    //if(data.theme) style = style.replace(/\/BLOCK\//g, '/blocks/'+data.theme[0]+'/');

    return `{${entries.map(([key, str]) => `${key}: ${str}`)}}`;
  },
  prepareCss(str, styles) {
    let cssPosStart = str.indexOf('`css');
    let cssPosEnd;
    while (cssPosStart != -1) {
      cssPosStart += 4;
      cssPosEnd = str.indexOf('`', cssPosStart);
      const cssCode = `_${node.crypto.createHash('md5').update(str.substring(cssPosStart, cssPosEnd)).digest('hex')}_`;
      const cssStr = str.substring(cssPosStart, cssPosEnd).replace(/\*css\*/g, cssCode);
      // if (this.styleIndex[cssCode] == undefined) { // если потребуется, то это надо переделать на formStyleIndex
      // this.styleIndex[cssCode] = cssStr;
      styles.push(!cssStr.includes(cssCode) ? `.${cssCode} {${cssStr}}` : cssStr); // возможна упрощенная запись css
      // }
      str = str.substring(0, cssPosStart - 4) + '" ' + cssCode + '"' + str.substring(cssPosEnd + 1);
      cssPosStart = str.indexOf('`css', cssPosStart + 1);
    }
    return str;
  },
});
