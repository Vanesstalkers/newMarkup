({
  tpl: ({ data }, { links, name, config = {} } = {}) => [
    COMPLEX(
      {
        label: 'Электронные адреса',
        name: name || 'email',
        col: 'email',
        config: { inline: true, ...config },
        controls: { collapse: true },
        add: { label: 'Добавить адрес' },
        item: { bodyClass: 'p-0', controls: { delete: true, config: { simple: true } } },
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
