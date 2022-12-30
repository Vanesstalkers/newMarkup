({
  method: async ({ form, code, value }) => {
    try {
      const user = context.user;
      const result = await lib.markup.actions.showComplex({ form, code, user });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
