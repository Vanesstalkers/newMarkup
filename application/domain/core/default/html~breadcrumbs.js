({
  tpl: ({ data }, { items = [] }) => [
    H4({ class: 'fw-bold py-3 mb-4' }, SPAN({ class: 'text-muted fw-light', text: items.join(' / ') })),
  ],
});
