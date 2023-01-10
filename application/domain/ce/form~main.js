({
  config: {
    menu: {
      label: 'Компании',
      icon: 'bx bx-building',
    },
  },
  col: 'user',
  id: ({ user }) => [user._id],
  tpl: () => [
    FIELD({
      name: 'testAction',
      type: 'button',
      text: '123',
      config: { btnType: 'primary', label: true },
      on: {
        click: (e) => {
          console.log(666, e);
        },
      },
      handler: async (data) => {
        return data;
      },
    }),
    FIELD({
      name: 'testAction2',
      type: 'button',
      text: '456',
      config: { btnType: 'primary', outline: true },
      handler: async (data) => {
        return data;
      },
    }),
    FIELD({
      name: 'email',
      label: 'Email',
      type: 'input',
      placeholder: 'a@b.ru',
      config: { inputType: 'email', float: true, comment: 'Электронная почта', errorComment: 'ВСЕ ПЛОХО !!!' },
    }),
    FIELD({
      name: 'phone',
      label: 'Phone',
      type: 'input',
      config: { inputType: 'password', _mask: '+7 (000) 000-00-00', float: true },
    }),
    COMPLEX(
      {
        name: 'lvl1',
        config: { tag: 'table' },
        item: { add: true || { type: 'file' }, config: { tag: 'tr' } },
        id: () => {
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
      () => [
        HTML('ce~test'),
        // FIELD({
        //   name: 'num',
        //   label: 'Номер',
        //   type: 'input',
        //   on: {
        //     save: (a, b, c) => {
        //       // alert(1);
        //     },
        //     load: ($el) => {
        //       //console.log('onLoad', $el);
        //     },
        //   },
        // }),
        FIELD({
          name: 'file',
          label: 'Файл',
          type: 'file',
          on: {
            save: (a, b, c) => {
              // alert(1);
            },
            load: ($el) => {
              // console.log('onLoad', $el);
            },
          },
        }),
        FIELD({ name: 'file8', label: 'Файл8', type: 'file', multiple: true }),
        FIELD({ name: 'list', label: 'Список', type: 'select2', lst: { action: 'ce~search' }, multiple: true }),
        FIELD({ name: 'list2', label: 'Список', type: 'select2', lst: 'ce~tutorial' }),
        FUNC(() => {
          // console.log(2);
        }),
        IF(true, () => [
          COMPLEX(
            {
              name: 'lvl2',
              // id: () => [true],
              item: { add: { label: '+++' } },
              handlers: {
                beforeAdd: async ({ data }) => {
                  data.test = true;
                  console.log('beforeAdd', data);
                  return data;
                },
                afterAdd: ({ newItem }) => {
                  console.log('beforeAdd', newItem);
                  return newItem;
                },
              },
            },
            () => [SPAN({ class: 'col-xs-8' }), IMG({})],
          ),
          COMPLEX(
            {
              name: 'lvl2-1',
              item: { add: { label: '+ lvl2-1' } },
              links: { 'lvl2-1': { lvl1: '__lvl1' }, lvl1: '__lvl2-1' },
            },
            () => [
              PPP({ _id: data._id }),
              SPAN({ class: 'col-xs-8' }),
              IMG({}),
              FIELD({
                name: 'num666',
                label: 'Номер666',
                type: 'select2',
                lst: { action: 'ce~search' },
                multiple: true,
              }),
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
    // console.log('from export');
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
