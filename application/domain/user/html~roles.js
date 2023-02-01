({
  tpl: ({ data }) => [
    COMPLEX(
      {
        label: 'Роли пользователя',
        add: { label: 'Добавить роль пользователя' },
        name: 'user_role',
        config: { disableCardStyle: true },
        item: { controls: { delete: true, config: { simple: true } } },
        handlers: {
          beforeAdd: async function ({ data, complex, form }) {
            const complexParent = form.fields[complex.parent.complexCode];
            if (complexParent.parent.custom?.userLink) data.link = complexParent.parent.custom.userLink;
            return data;
          },
        },
      },
      ({ data }) => [
        DIV(
          { class: 'row' },
          DIV(
            { class: 'col-6' },

            FIELD({
              label: 'Партнер',
              name: 'link',
              type: 'select2',
              lst: { action: 'ce~search' },
              disabled: !!data.link,
            }),
          ),
          DIV(
            { class: 'col-6' },
            FIELD({
              label: 'Тип доступа',
              name: 'role',
              type: 'select',
              lst:
                user.current.v === 'admin'
                  ? 'user~roles'
                  : domain.user['lst~roles'].filter(({ parentType }) => parentType === user.current.parentType),
            }),
          ),
        ),
      ],
    ),
  ],
});
