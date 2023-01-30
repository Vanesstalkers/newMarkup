async () => {
  if (application.worker.id === 'W1') {
    console.debug('Connect to mongo');
  }

  const client = new npm.mongodb.MongoClient(config.mongo.url, {
    // useUnifiedTopology: true
  });
  await client.connect();
  db.mongo.client = client.db('xaoc');
  db.mongo.ObjectID = npm.mongodb.ObjectID;

  if (application.worker.id === 'W1') {
    console.debug('Connected to mongo');
    for (const func of db.mongo.afterStart.funcList) await func();
  }
};
