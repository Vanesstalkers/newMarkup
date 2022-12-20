({
  id: () => {},
  tpl: () => [
    A({
      class:
        'col-xs-8' +
        `css
          border-color: red;
        `,
    }),
    A({
      class: `css
        .*css* {
          border-color: black;
        }
        .*css* > div {
          border-color: green;
        }
        body .*css* > div {
          border-color: orange;
        }
    `,
    }),
    COMPLEX({ name: 'lvl1' }, ({ parent }) => [
      COMPLEX({ name: 'lvl2' }, ({ parent, data }) => [console.log({ parent, data })]),
      DIV({ class: 'row' }, SPAN({ class: 'col-xs-8' }), SPAN({ class: 'col-xs-8' }), IMG({})),
    ]),
  ],
});
