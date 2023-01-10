({
  method: async ({ form, code, data }) => {
    try {
      const user = context.user;
      const result = await lib.markup.actions.addComplex({ form, code, user, data });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
