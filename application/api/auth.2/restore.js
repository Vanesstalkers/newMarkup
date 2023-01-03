({
  access: 'public',
  method: async ({ token }) => {
    const restored = context.client.restoreSession(token);
    if (restored) return { status: 'logged', baseForm: config.markup.baseForm };
    const data = await api.auth.provider.restoreSession(token);
    // if (!data) return { status: 'not logged' };
    if (!data) {
      const login = Math.random();
      const password = '';
      const fullName = 'demouser';
      const hash = await metarhia.metautil.hashPassword(password);
      const user = await api.auth.provider.registerUser({ login, hash, fullName, demo: true });
      user.accountId = user._id;

      const token = api.auth.provider.generateToken();
      const data = { ...user };
      context.client.startSession(token, data);
      const { ip } = context.client;
      api.auth.provider.startSession(token, data, { ip });

      return { status: 'success', token, baseForm: config.markup.baseForm };
    }
    context.client.startSession(token, data);
    return { status: 'logged', baseForm: config.markup.baseForm };
  },
});
