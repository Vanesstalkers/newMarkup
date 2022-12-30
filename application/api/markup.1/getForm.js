({
  method: async ({ form, name }) => {
    try {
      if(!context.user) context.user = {};
      const user = context.user;
      const result = await lib.markup.form.get({ form, name, user });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});