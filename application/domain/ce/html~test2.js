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
          item: { add: { label: '+ lvl3' } },
        },
        ({ data }) => [DIV({ text: data?._id }), FIELD({ name: 'test', type: 'input-', label: 'Текстовое поле' })],
      ),
    ];
  },
});
