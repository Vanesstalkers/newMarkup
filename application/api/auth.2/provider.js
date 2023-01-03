({
  generateToken() {
    // const { _id } = await db.mongo.insertOne('user_session');
    const { characters, secret, length } = config.sessions;
    return metarhia.metautil.generateToken(secret, characters, length);
  },

  saveSession(token, data) {
    // db.pg.update('Session', { data: JSON.stringify(data) }, { token });
    console.log('saveSession', { token, data });
    db.mongo.updateOne('user_session', { token }, { $set: { data } });
  },

  async startSession(token, data, fields = {}) {
    const record = { token, data, ...fields };
    // db.pg.insert('Session', record);
    await db.mongo.insertOne('user_session', record);
  },

  async restoreSession(token) {
    // const record = await db.pg.row('Session', ['data'], { token });
    const record = await db.mongo.findOne('user_session', { token });
    if (record && record.data) return record.data;
    return null;
  },

  deleteSession(token) {
    // db.pg.delete('Session', { token });
    db.mongo.deleteOne('session', record);
  },

  async registerUser(login, password) {
    // return db.pg.insert('Account', { login, password });
    const user = await db.mongo.insertOne('user', { login, password });

    await db.addComplex({
      name: 'user_role',
      parent: { name: 'user', _id: user._id },
      links: { user_role: { user: '__user' }, user: '__user_role' },
    });

    return user;
  },

  async getUser(login) {
    // return db.pg.row('Account', { login });
    return await db.mongo.findOne('user', { login });

// {
//   from: "user_role",
//   localField: "__user_role.l",
//   foreignField: "_id",
//     "pipeline": [
//       { "$project": { "_id": 1, "role": 1 }}
//     ],
//   as: "roles"
// }

  },
});
