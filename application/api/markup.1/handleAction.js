({
  method: async ({ form, code, data }) => {
    try {
      console.log('api handler');
      const user = context.user;
      const result = await lib.markup.actions.handler({ form, code, user, data });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
