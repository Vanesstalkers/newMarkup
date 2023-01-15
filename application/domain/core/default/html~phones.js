({
  tpl: ({ data }, { links, name } = {}) => [
    COMPLEX(
      {
        name: name || 'phone',
        col: 'phone',
        label: 'Телефоны',
        config: { inline: true },
        links,
        add: { label: 'Добавить телефон' },
        item: { controls: { delete: true, config: { simple: true } } },
      },
      () => [
        FIELD({
          name: 'num',
          label: 'Номер',
          placeholder: '+7 (000) 000-00-00',
          config: { inputType: 'phone', mask: '+7 (000) 000-00-00', float: true },
        }),
      ],
    ),
  ],
});
