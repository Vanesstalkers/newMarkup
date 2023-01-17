({
  tpl: ({ data }, { showGenBtn }) => [
    DIV(
      {
        class: `css
          .*css* {
            position: relative;
          }
          .*css* > button {
            position: absolute;
            top: 6px;
            right: 0px;
          }
        `,
      },
      FIELD({
        label: 'Пароль',
        name: 'pswd',
        handler: async ({ value, $set }) => {
          $set.password = await metarhia.metautil.hashPassword(value.toString());
        },
      }),

      IF(showGenBtn, () => [
        FIELD({
          label: 'Сгенерировать',
          name: 'passgen',
          type: 'button',
          config: { btnType: 'secondary', outline: true, size: 'xs' },
          on: {
            click: (event) => {
              function passgen(len) {
                const ints = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
                // prettier-ignore
                const chars = [
                  "a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", 
                  "n", "o", "p", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                ];
                let out = '';
                for (let i = 0; i < len; i++) {
                  out +=
                    Math.random(1, 2) < 0.5
                      ? ints[Math.floor(Math.random(1, ints.length) * 10)]
                      : chars[Math.floor(Math.random(1, chars.length) * 10)];
                }
                return out;
              }
              const $input = event.target.parentNode.querySelector('input');
              $input.value = passgen(6);
              $input.dispatchEvent(new Event('change'));
            },
          },
        }),
      ]),
    ),
  ],
});
