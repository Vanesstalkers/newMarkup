({
  tpl: () => [
    DIV({}),
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
    COMPLEX(
      {
        name: 'lvl1',
        config: { tag: 'table' },
        item: { add: true, config: { tag: 'tr' } },
        id: (cb) => {
          cb([true, true]);
        },
        on: {
          load: (data) => {
            // console.log('onLoad', this, { data });
          },
          itemLoad: (data) => {
            // console.log('onItemLoad', this, { data });
          },
        },
      },
      ({}) => [
        HTML('ce~test'),
        FIELD({
          name: 'num',
          label: 'Номер',
          type: 'input',
          on: {
            save: (a, b, c) => {
              alert(1);
            },
            load: (a, b, c) => {
              alert(2);
            },
          },
        }),
        FUNC(() => {
          console.log(2);
        }),
        IF(true, () => [
          COMPLEX(
            {
              name: 'lvl2',
              id: (cb) => {
                cb([true]);
              },
            },
            ({}) => [SPAN({ class: 'col-xs-8' }), IMG({})],
          ),
          COMPLEX({ name: 'lvl2-1' }, ({}) => [SPAN({ class: 'col-xs-8' }), IMG({})]),
        ]),
        DIV({ class: 'row' }, SPAN({ class: 'col-xs-8' }), SPAN({ class: 'col-xs-8' }), IMG({})),
      ],
    ),
  ],
  func: () => {
    console.log('from export');
  },
  style: `
    .body {
      display: 1px solid black;
    }
    .inline-error:before {
      content: attr(error);
      font-size: 10px;
      color: red;
      text-overflow: ellipsis;
    }
  `,
});
