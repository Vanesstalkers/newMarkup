({
  tpl: ({ data }, { id, title, html: { body: bodyHtml, footer: footerHtml } = {}, toggleButton = {} }) => [
    toggleButton.html ||
      BUTTON({
        class: `btn btn-${button.type} ` + button.cls,
        'data-bs-toggle': 'modal',
        'data-bs-target': `#${id || ''}-modal`,
        text: button.label || 'Открыть',
      }),
    DIV(
      {
        class: 'modal fade',
        id: `${id || ''}-modal`,
        'aria-hidden': 'true',
        on: { load: 'prepareModal' },
      },
      DIV(
        { class: 'modal-dialog', role: 'document' },
        DIV(
          { class: 'modal-content' },
          DIV(
            { class: 'modal-header' },
            H5({ class: 'modal-title', id: 'exampleModalLabel1' }, SPAN({ text: title || 'Modal title' })),
            BUTTON({ type: 'button', class: 'btn-close', 'data-bs-dismiss': 'modal', 'aria-label': 'Close' }),
          ),
          DIV({ class: 'modal-body' }, bodyHtml),
          DIV(
            { class: 'modal-footer' },
            footerHtml || [
              BUTTON(
                { type: 'button', class: 'btn btn-label-secondary', 'data-bs-dismiss': 'modal' },
                SPAN({ text: 'Close' }),
              ),
            ],
          ),
        ),
      ),
    ),
  ],
  func: () => {
    window.prepareModal = function (el) {
      $(el).on('show.bs.modal', function (event) {
        console.log({ event });
      });
      $(el).on('hidden.bs.modal', function (event) {
        console.log({ event });
      });
    };
  },
  style: `
    .modal input.select2-search__field {
      width: auto!important;
    }
    .select2-container--open {
      z-index: 9999;
    }
  `,
});
