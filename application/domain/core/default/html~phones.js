({
  tpl: ({ data, parent }, { links, name, config = {} } = {}) => [
    COMPLEX(
      {
        label: 'Телефоны',
        name: name || 'phone',
        col: 'phone',
        config: { inline: true, ...config },
        add: { label: 'Добавить телефон' },
        item: { bodyClass: 'p-0', controls: { delete: true, config: { simple: true } } },
        links,
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
