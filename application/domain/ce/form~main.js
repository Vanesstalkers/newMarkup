({
  config: {
    menu: {
      label: 'Форма компании',
      icon: 'bx bx-building',
    },
  },
  col: 'user',
  id: ({ user }) => [user._id],
  tpl: () => [
    FIELD({
      name: 'testAction',
      type: 'button',
      label: '1234',
      config: { btnType: 'primary', label: true },
      handler: async (data) => {
        console.log(777);
        return data;
      },
    }),
    FIELD({
      name: 'testAction2',
      type: 'button',
      label: '456',
      config: { btnType: 'primary', outline: true, size: 'xl' },
      handler: 'ce~search',
    }),
    FIELD({
      name: 'testAction3',
      type: 'button',
      label: '789',
      config: { btnType: 'warning', outline: true, size: 'xs' },
      on: {
        click: (e) => {
          console.log(666, e, this);
        },
      },
    }),
    FIELD({
      name: 'email',
      label: 'Email',
      type: 'input',
      placeholder: 'a@b.ru',
      config: { inputType: 'email', comment: 'Электронная почта', errorComment: 'ВСЕ ПЛОХО !!!' },
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
        FIELD({ name: 'date', label: 'datetime-local', type: 'input', config: { inputType: 'date' } }),
        FIELD({ name: 'text666', type: 'textarea', label: 'Textarea', config: { rows: 1 }, disabled: true }),
        FIELD({ name: 'text777', type: 'textarea', label: 'Textarea' }),
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
        FIELD({
          name: 'list',
          label: 'select2-cписок',
          type: 'select2-',
          lst: { action: 'ce~search' },
          multiple: true,
        }),
        FIELD({ name: 'list2', label: 'Список', type: 'radio', lst: 'ce~tutorial' }),
        FIELD({
          name: 'check',
          _label: 'Галочка',
          type: 'check-',
          config: { content: 'Едем в Казань', switch: false },
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
                  console.log('afterAdd', newItem);
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
