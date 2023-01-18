({
  access: 'public',
  method: async ({ roleId }) => {
    db.mongo.updateOne('user', context.user._id, { $set: { current: db.mongo.ObjectID(roleId) } });
    // const {
    //   roles: [
    //     {
    //       role: [{ value: roleCode }],
    //     },
    //   ],
    // } = user;
    const role = context.user.roles.find(({ _id }) => _id.toString() === roleId);
    const {
      role: [{ value: roleCode }],
    } = context.user.roles.find(({ _id }) => _id.toString() === roleId);
    context.user = { ...context.user, current: domain.user['lst~roles'].find(({ v }) => v === roleCode) || {} };
    console.log({ roleId, role, roleCode, current: context.user.current });
    return true;
    // const user = await api.auth.provider.getUser(login);
    // if (!user) throw new Error('Incorrect login or password');
    // const { password: hash } = user;
    // const valid = await metarhia.metautil.validatePassword(password, hash);
    // if (!valid) throw new Error('Incorrect login or password');
    // console.log(`Logged user: ${login}`);
    // const token = api.auth.provider.generateToken();
    // const data = { user };
    // const {
    //   roles: [
    //     {
    //       role: [{ value: roleCode }],
    //     },
    //   ],
    // } = user;
    // user.current = domain.user['lst~roles'].find(({ v }) => v === roleCode) || {};
    // context.client.startSession(token, data);
    // const { ip } = context.client;
    // api.auth.provider.startSession(token, data, { ip });
    // return { status: 'logged', token };
  },
});
