({
  method: async ({ form, code, query }) => {
    try {
      const user = context.user;
      const result = await lib.markup.actions.showComplex({ form, code, user, query });
      return { result: 'success', data: result };
    } catch (err) {
      console.log(err);
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
