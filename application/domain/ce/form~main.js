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
    FUNC(function () {
      console.log(1);
    }),
    COMPLEX({ name: 'lvl1' }, ({}) => [
      HTML('ce~test'),
      FIELD({
        name: 'num',
        label: 'Номер',
        type: 'input',
        front: {
          onSave: (a, b, c) => {
            alert(1);
          },
          onLoad: function (a, b, c) {
            alert(2);
          },
        },
      }),
      FUNC(() => {
        console.log(2);
      }),
      IF(false, () => [COMPLEX({ name: 'lvl2' }, ({ parent, data }) => [console.log({ parent, data })])]),
      DIV({ class: 'row' }, SPAN({ class: 'col-xs-8' }), SPAN({ class: 'col-xs-8' }), IMG({})),
    ]),
  ],
  func: () => {
    console.log('from export');
  },
  style: `
    .body {
      display: 1px solid black;
    }
  `,
});
