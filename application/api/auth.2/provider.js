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

  async registerUser({ login, password, roles }) {
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
    return user;
  },

  async getUser(login) {
    // return db.pg.row('Account', { login });
    const [user] = await db.mongo.aggregate("user", [
      {$match: {login}},
      {
        $lookup: {
          from: "user_role",
          let: {roleIds: "$__user_role.l"},
          pipeline: [
            {
              $match: {
                $expr: {$in: ["$_id", "$$roleIds"]},
              },
            },
            {$project: {_id: 1, role: 1, link: 1, reg_request_id: 1}},
          ],
          as: "roles",
        },
      },
    ]);
    return user;
  },
});
