({
  tpl: () => {
    return [
      Z({
        class:
          'col-xs-8' +
          `css
            .*css* {
              border-color: black;
            }
            .*css* > div {
              border-color: green;
            }
            body .*css* > div {
              border-color: yellow;
            }
        `,
      }),
      COMPLEX(
        {
          name: 'lvl3',
        },
        () => [FIELD({ name: 'test' })],
      ),
    ];
  },
});
