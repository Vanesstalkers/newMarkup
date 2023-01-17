({
  tpl: ({ data }, { config } = {}) => [
    FIELD({
      name: 'kpp',
      label: 'КПП',
      config: {
        ...(config || {}),
        mask: '000000000000000',
        errorMsg:
          'ОГРН указан неправильно, значение должно содержать 13 или 15 цифр. Для удаления текущего значения оставьте поле пустым.',
      },
      on: {
        beforeSave: ({ value, event }) => {
          if (value == '' || (value && (value.length == 13 || value.length == 15))) {
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
