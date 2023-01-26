({
  tpl: ({ data }, { custom }) => [
    COMPLEX(
      {
        name: 'user',
        add: { label: 'Дать доступы для входа в систему', singleItem: true },
        config: { disableCardStyle: false },
        handlers: {
          beforeAdd: async ({ data, complex }) => {
            if (complex.parent.custom?.userLink) data.link = complex.parent.custom.userLink;
            return data;
          },
        },
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
            config: { content: 'Активен|Заблокирован' },
            label: false,
            name: 'delete_time',
            type: 'check',
            handler: async ({ value, $set }) => {
              $set.delete_time = value ? new Date().toISOString() : '';
            },
          }),
          DIV({ class: 'col-6' }, HTML('user/fields~login')),
          DIV({ class: 'col-6' }, HTML('user/fields~pswd', { showGenBtn: true })),
          DIV({ class: 'col-12' }, HTML('user~roles')),
        ),
      ],
    ),
  ],
});
