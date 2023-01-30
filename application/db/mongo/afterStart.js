({
  funcList: [],
  async run (func) {
    if (application.worker.id === 'W1') {
      if (!db.mongo.client) {
        this.funcList.push(func);
      } else {
        await func();
      }
    }
  },
});