({
  tpl: ({ data, parent }, { links, name } = {}) => [
    COMPLEX(
      {
        label: 'Телефоны',
        name: name || 'phone',
        col: 'phone',
        config: { inline: true, disableCardView: true },
        add: { label: 'Добавить телефон' },
        item: { controls: { delete: true, config: { simple: true } } },
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
