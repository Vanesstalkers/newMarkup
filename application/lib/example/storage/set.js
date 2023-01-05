({
  values: new Map(),

  method({ key, val }) {
    if (val) {
      return this.values.set(key, val);
    }
    const res = this.values.get(key);
    return res;
  },
});
