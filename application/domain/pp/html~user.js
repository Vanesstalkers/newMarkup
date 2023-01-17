({
  tpl: ({ data }) => [
    COMPLEX(
      {
        name: 'user',
        add: { label: 'Дать доступы для входа в систему', singleItem: true },
        config: { disableCardView: true },
      },
      ({ data }) => [
        DIV(
          {
            class:
              'row bottom-xs m-b' +
              `css
              .*css* {
                padding-top: 20px;
              }
              .*css* > .el-delete_time {
                position: absolute;
                left: 0px;
                top: 0px;
                width: auto;
                padding: 10px 25px;
              }
            `,
          },
          FIELD({
          config: { content: 'Активен|Заблокирован' }, label: false, name: 'delete_time', type: 'check',
          handler: async ({ value, $set }) => {
            $set.delete_time = value ? new Date().toISOString() : '';
          },
        }), // prettier-ignore
          DIV({ class: 'col-6' }, HTML('user/fields~login')),
          DIV({ class: 'col-6' }, HTML('user/fields~pswd', { showGenBtn: true })),
          DIV(
            { class: 'col-12' },
            COMPLEX(
              {
                label: 'Роли пользователя',
                add: { label: 'Добавить роль пользователя' },
                name: 'user_roles',
                config: { disableCardView: true },
              },
              ({ data }) => [
                DIV(
                  { class: 'row' },
                  DIV(
                    { class: 'col-6' },
                    FIELD({ label: 'Партнер', name: 'link', type: 'select', lst: 'partner~list' }),
                  ),
                  DIV(
                    { class: 'col-6' },
                    FIELD({ label: 'Тип доступа', name: 'role', type: 'select', lst: 'user~roles' }),
                  ),
                ),
              ],
            ),
          ),
        ),
      ],
    ),
  ],
});
