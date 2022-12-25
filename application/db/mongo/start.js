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
};
