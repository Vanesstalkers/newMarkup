({
  UNITS: ['', ' Kb', ' Mb', ' Gb', ' Tb', ' Pb', ' Eb', ' Zb', ' Yb'],

  bytesToSize(bytes) {
    if (bytes === 0) return '0';
    const exp = Math.floor(Math.log(bytes) / Math.log(1000));
    const size = bytes / 1000 ** exp;
    const short = Math.round(size, 2);
    const unit = this.UNITS[exp];
    return short + unit;
  },

  UNIT_SIZES: {
    yb: 24, // yottabyte
    zb: 21, // zettabyte
    eb: 18, // exabyte
    pb: 15, // petabyte
    tb: 12, // terabyte
    gb: 9, // gigabyte
    mb: 6, // megabyte
    kb: 3, // kilobyte
  },

  sizeToBytes(size) {
    if (typeof size === 'number') return size;
    const [num, unit] = size.toLowerCase().split(' ');
    const exp = this.UNIT_SIZES[unit];
    const value = parseInt(num, 10);
    if (!exp) return value;
    return value * 10 ** exp;
  },

  isObjectID(value) {
    return value && typeof value === 'object' && value._bsontype === 'ObjectID';
  },
  getDeep(obj, path) {
    let result = obj;
    for (const key of path.split('.')) result = result?.[key];
    return result;
  },
  // setDeep(path, value) {
  //   var schema = obj; // a moving reference to internal objects within obj
  //   var pList = path.split('.');
  //   var len = pList.length;
  //   for (var i = 0; i < len - 1; i++) {
  //     var elem = pList[i];
  //     if (!schema[elem]) schema[elem] = {};
  //     schema = schema[elem];
  //   }

  //   schema[pList[len - 1]] = value;
  // },
  convertArrowFunction(stringifiedArrowFunc) {
    // Check if the input is a stringified arrow function
    let arrowIndex = stringifiedArrowFunc.indexOf('=>');
    if (arrowIndex === -1) {
      // throw new Error('Input is not a stringified arrow function');
      return stringifiedArrowFunc;
    }
    let async = false;
    if (stringifiedArrowFunc.startsWith('async')) {
      async = true;
      stringifiedArrowFunc = stringifiedArrowFunc.slice(6).trim();
      arrowIndex = stringifiedArrowFunc.indexOf('=>');
    }
    // Extract the function arguments
    let argsStart = stringifiedArrowFunc.slice(0, arrowIndex).trim();
    let args = argsStart;
    // Check if the arguments are wrapped and wrap them
    if (!(argsStart.startsWith('(') && argsStart.endsWith(')')) && argsStart.indexOf('=') === -1) {
      args = '(' + argsStart + ')';
    }
    // Extract the function body
    let body = stringifiedArrowFunc.slice(arrowIndex + 2).trim();
    // Check if the body is wrapped and wrap it
    if (!(body.startsWith('{') && body.endsWith('}'))) {
      body = '{ return ' + body + '; }';
    }
    // Create the classic function
    let classicFunc = (async ? "async " : "") + "function " + args + " " + body;
    return classicFunc;
  },
});
