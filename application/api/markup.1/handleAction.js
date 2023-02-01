({
  access: 'public',
  method: async ({ form, code, handler, data }) => {
    try {
      const user = context.user;
      const result = await lib.markup.actions.handler({ form, code, user, handler, data });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
