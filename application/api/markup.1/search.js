({
  method: async ({ form, code, query }) => {
    try {
      const user = context.user;
      const field = user.forms[form]?.fields[code];
      if (!field) return { result: 'error', msg: `Field (code=${code}) not found` };
      if (!field.lst?.action) return { result: 'error', msg: `Action (code=${code}) not found` };
      const [block, name] = field.lst.action.split('~');
      if (typeof domain[block]?.[`action~${name}`] !== 'function')
        return { result: 'error', msg: `Action (code=${code}) not found` };
      const result = await domain[block][`action~${name}`]({ query });
      return { result: 'success', data: result };
    } catch (err) {
      return { result: 'error', msg: err.message, stack: err.stack };
    }
  },
});
