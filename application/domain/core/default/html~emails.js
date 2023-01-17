({
  tpl: ({ data }, { links, name } = {}) => [
    COMPLEX(
      {
        label: 'Электронные адреса',
        name: name || 'email',
        col: 'email',
        config: { inline: true, disableCardView: true },
        add: { label: 'Добавить адрес' },
        item: { controls: { delete: true, config: { simple: true } } },
        links,
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
