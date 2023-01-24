({
  tpl: ({ data }, { hideFilters, tableId, links, add = {} } = {}) => [
    HTML('core/default~table', {
      col: 'token',
      links: links,
      filter: {
        items: hideFilters
          ? []
          : [
              { class: 'col-6 col-sm-3', f: { label: 'Должность', name: 'find_type', type: 'select', lst: 'worker~type' } },
              { class: 'col-6 col-sm-3', f: { label: 'Имя/Фамилия', name: 'find_text' } },
              { class: 'col-6 col-sm-3', f: { label: 'Показывать\x0aуволенных', name: 'is_delete', type: 'check' } },
            ], // prettier-ignore
      },
      table: {
        addRowLink: true,
        id: tableId,
        cols: [
          { label: 'Добавлен', f: { name: 'add_time', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Кем выпущен', c: { name: 'fabricator', f: { name: 'name', label: false } } },
          { label: 'Качество', f: { name: 'type', lst: 'token~quality' } },
          { label: 'Цена', f: { name: 'price' } },
          { label: 'Количество', f: { name: 'count' } },
        ],
      },
      add: {
        modal: add.modal || false,
        items: [
          { f: { label: 'Количество', name: 'count' } },
          { f: { label: 'Качество', name: 'type', type: 'select', lst: 'token~quality' } },
        ],
      },
    }),
  ],
});
