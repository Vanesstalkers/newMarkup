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
});
