({
  tpl: ({ data }) => [
    COMPLEX(
      {
        label: 'Роли пользователя',
        add: { label: 'Добавить роль пользователя' },
        name: 'user_role',
        config: { disableCardStyle: true },
        item: { controls: { delete: true, config: { simple: true } } },
      },
      ({ data }) => [
        DIV(
          { class: 'row' },
          DIV({ text: data._id }),
          IF(user.current.v === 'admin', () => [
            DIV(
              { class: 'col-6' },
              FIELD({ label: 'Партнер', name: 'link', type: 'select2', lst: { action: 'ce~search' } }),
            ),
            DIV({ class: 'col-6' }, FIELD({ label: 'Тип доступа', name: 'role', type: 'select', lst: 'user~roles' })),
          ]),
          IF(user.current.v !== 'admin', () => []),
        ),
      ],
    ),
  ],
});
