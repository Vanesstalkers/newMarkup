({
  method: async ({ form, name }) => {
    try {
      const result = await lib.markup.form.get({ form, name });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
