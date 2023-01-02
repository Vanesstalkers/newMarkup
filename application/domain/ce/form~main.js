({
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
    COMPLEX(
      {
        name: 'lvl1',
        config: { tag: 'table' },
        item: { add: true, config: { tag: 'tr' } },
        id: async () => {
          return [db.mongo.ObjectID('63ab2965979681e5e8e23a4f'), db.mongo.ObjectID('63aee515b11faaaba5c00306')];
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
              // alert(1);
            },
            load: (a, b, c) => {
              // alert(2);
            },
          },
        }),
        FIELD({ name: 'list', label: 'Список', type: 'select2', lst: { action: 'ce~search' }, multiple: true }),
        FIELD({ name: 'list2', label: 'Список', type: 'select2', lst: 'ce~tutorial' }),
        FUNC(() => {
          console.log(2);
        }),
        IF(true, () => [
          COMPLEX(
            {
              name: 'lvl2',
              id: async () => [true],
              item: { add: { label: '+++' } },
            },
            ({}) => [SPAN({ class: 'col-xs-8' }), IMG({})],
          ),
          COMPLEX(
            {
              name: 'lvl2-1',
              item: { add: { label: '+ lvl2-1' } },
              links: { 'lvl2-1': { lvl1: '__lvl1' }, lvl1: '__lvl2-1' },
            },
            ({ data }) => [
              PPP({ _id: data._id }),
              SPAN({ class: 'col-xs-8' }),
              IMG({}),
              // FIELD({
              //   name: 'num',
              //   label: 'Номер',
              //   type: 'input',
              // }),
            ],
          ),
        ]),
        DIV(
          {
            class: 'row',
          },
          SPAN({ class: 'col-xs-8' }),
          SPAN({ class: 'col-xs-8' }),
          IMG({}),
        ),
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
    .el > label:before {
      content: attr(text);
    }
  `,
});
