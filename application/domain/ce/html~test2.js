({
  id: () => {},
  tpl: () => {
    return [
      Z({
        class: 'col-xs-8',
        data: form.data,
      }),
      COMPLEX({ name: 'lvl3' }, ({ parent, data }) => [console.log({ parent, data })])
    ];
  },
});
