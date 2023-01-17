({
  tpl: ({ data }, { config } = {}) => [
    FIELD({
      name: 'inn',
      label: 'ИНН',
      config: {
        ...(config || {}),
        mask: '000000000000',
        errorMsg:
          'ИНН указан неправильно, значение должно содержать 10 или 12 цифр. Для удаления текущего значения оставьте поле пустым.',
      },
      handler: async ({ form, field, parent, user, value }) => {
        // !!! отключено, пока не научусь выводить правильную ошибку
        // const searchData = await domain.ce['action~search']({ query: value });
        // if(searchData.length) throw new Error('Юридическое лицо с ИНН "' + saveData.value + '" уже зарегистрировано. Нельзя создавать юридические лица с одинаковым ИНН.');
      },
      on: {
        beforeSave: ({ value, event }) => {
          if (value == '' || (value && (value.length == 10 || value.length == 12))) {
            return true;
          } else {
            event.target.setCustomValidity(true);
            return false;
          }
        },
      },
    }),
  ],
});
