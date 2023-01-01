({
  method: async ({ lst }) => {
    try {
      const user = context.user;
      const result = await lib.markup.actions.getLst({ lst });
      return { result: 'success', data: JSON.stringify(result) };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
