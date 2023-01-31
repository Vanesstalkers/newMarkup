async () => {
  await db.mongo.afterStart.run(async () => {
    const adminUser = await db.mongo.findOne('user', { login: 'admin' });
    if (!adminUser) {
      const login = 'admin';
      const password = await metarhia.metautil.hashPassword('admin');
      const roles = ['admin'];

      const user = await db.mongo.insertOne('user', { login, password });
      await db.addComplex({
        name: 'pp',
        parents: [{ name: 'user', _id: user._id }],
        links: { pp: { user: '__user' }, user: '__pp' },
      });
      for (const role of roles) {
        await db.addComplex({
          name: 'user_role',
          parents: [{ name: 'user', _id: user._id }],
          links: { user_role: { user: '__user' }, user: '__user_role' },
          data: { role: [domain.user['lst~roles'].find(({ v }) => v === role)] },
        });
      }
    }
  });
};
