({
  tpl: (_, d) => [
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12' },
        FIELD({ label: 'Полное наименование', name: 'fullname' }),
        FIELD({ label: 'Наименование', name: 'name' }),
        HTML('ce/fields~inn'),
        HTML('ce/fields~ogrn'),
        HTML('ce/fields~kpp'),
      ),
    ),
  ],
});
