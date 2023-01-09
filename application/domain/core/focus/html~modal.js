({
  tpl: ({ id, title }) => [
    DIV(
      { class: 'modal fade', id: id || 'basicModal' },
      DIV(
        { class: 'modal-dialog', role: 'document' },
        DIV(
          { class: 'modal-content' },
          DIV(
            { class: 'modal-header' },
            H5({ class: 'modal-title' }, SPAN({ text: title || 'Modal title' })),
            BUTTON({ type: 'button', class: 'close', 'data-dismiss': 'modal' }, SPAN({}, SPAN({ text: '×' }))),
          ),
          DIV(
            { class: 'modal-body' },
            SPAN({ text: 'Modal body text goes here.' }),
            SELECT({ class: 'js-data-example-ajax w-100' }),
          ),
          DIV(
            { class: 'modal-footer' },
            BUTTON({ type: 'button', class: 'btn btn-secondary', 'data-dismiss': 'modal' }, SPAN({ text: 'Close' })),
            BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
          ),
        ),
      ),
    ),
  ],
});
