({
  tpl: ({ data }) => [
    FIELD({
      name: 'login',
      label: 'Логин',
      handler: async ({ form, field, parent, user, value, $set }) => {
        const findUser = await db.mongo.findOne('user', { login: value });
        if (findUser)
          throw new Error(`Пользователь с логином ${value} уже зарегистрирован. Укажите другое имя пользователя.`);
      },
    }),
  ],
});
