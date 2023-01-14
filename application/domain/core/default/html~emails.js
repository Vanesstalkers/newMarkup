({
  tpl: ({ data }, { links, name } = {}) => [
    COMPLEX(
      {
        name: name || 'email',
        col: 'email',
        label: 'Электронные адреса',
        config: { inline: true },
        links,
        item: { add: { label: 'Добавить адрес' }, controls: { delete: true, config: { simple: true } } },
      },
      () => [
        FIELD({
          name: 'mail',
          label: 'Адрес',
          placeholder: 'mail@mail.ru',
          config: { inputType: 'email', float: true },
        }),
      ],
    ),
  ],
});
