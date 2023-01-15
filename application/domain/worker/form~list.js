({
  config: {
    menu: {
      label: 'Сотрудники',
      icon: 'bx bx-user-badge',
    },
  },
  col: 'worker',
  id: ({ query }) => [query._id],
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [HTML('worker~table')],
  func: () => {},
  style: `
  `,
});
