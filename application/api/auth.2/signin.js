({
  access: 'public',
  method: async ({ login, password }) => {
    try {
      const user = await api.auth.provider.getUser(login);
      if (!user) throw new Error('Incorrect login or password');
      const { password: hash } = user;
      const valid = await metarhia.metautil.validatePassword(password, hash);
      if (!valid) throw new Error('Incorrect login or password');
      console.log(`Logged user: ${login}`);
      const token = api.auth.provider.generateToken();
      const data = { user };
      const {
        roles: [
          {
            role: [{ value: roleCode }],
            link: [link],
          },
        ],
      } = user;
      user.current = domain.user['lst~roles'].find(({ v }) => v === roleCode) || {};
      user.current.link = link;
      context.client.startSession(token, data);
      const { ip } = context.client;
      api.auth.provider.startSession(token, data, { ip });
      return { status: 'logged', token };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
