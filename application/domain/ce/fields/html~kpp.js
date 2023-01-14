({
  tpl: ({ data }, { config } = {}) => [
    FIELD({
      name: 'kpp',
      label: 'КПП',
      config: {
        ...(config || {}),
        mask: '000000000',
        errorComment:
          'КПП указан неправильно, значение должно содержать 9 цифр. Для удаления текущего значения оставьте поле пустым.',
      },
      on: {
        beforeSave: ({ value, event }) => {
          if (value == '' || (value && value.length == 9)) {
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
