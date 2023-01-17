({
  access: 'public',
  method: async ({ login, password, roles }) => {
    const hash = await metarhia.metautil.hashPassword(password);
    await api.auth.provider.registerUser({ login, password: hash, roles });
    const token = await context.client.startSession();
    return { status: 'success', token };
  },
});
