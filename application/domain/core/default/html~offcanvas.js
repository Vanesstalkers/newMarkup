({
  tpl: ({ data }, { id, title, html: { body: bodyHtml, footer: footerHtml } = {}, toggleButton = {}, button = {} }) => [
    toggleButton.html ||
      BUTTON({
        class: `btn btn-${button.type} ` + button.cls,
        'data-bs-toggle': 'offcanvas',
        'data-bs-target': `#offcanvas-${id || ''}`,
        text: button.label || 'Открыть',
      }),
    DIV(
      {
        class: 'offcanvas offcanvas-end',
        tabindex: '-1',
        id: `offcanvas-${id || ''}`,
        'aria-labelledby': 'offcanvasEndLabel',
        on: { load: 'prepareOffcanvas' },
      },
      DIV(
        { class: 'offcanvas-header' },
        H5({ id: 'offcanvasEndLabel', class: 'offcanvas-title' }, SPAN({ text: title || 'Offcanvas End' })),
        BUTTON({
          type: 'button',
          class: 'btn-close text-reset',
          'data-bs-dismiss': 'offcanvas',
          'aria-label': 'Close',
        }),
      ),
      DIV(
        { class: 'offcanvas-body my-auto mx-0 flex-grow-0' },
        bodyHtml,
        // P(
        //   { class: 'text-center' },
        //   SPAN({
        //     text: "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.",
        //   }),
        // ),
        // BUTTON({ type: 'button', class: 'btn btn-primary mb-2 d-grid w-100' }, SPAN({ text: 'Continue' })),
        // BUTTON(
        //   { type: 'button', class: 'btn btn-label-secondary d-grid w-100', 'data-bs-dismiss': 'offcanvas' },
        //   SPAN({ text: 'Cancel' }),
        // ),
      ),
    ),
  ],
  func: () => {
    window.prepareOffcanvas = function (el) {
      $(el).on('show.bs.offcanvas', function (event) {
        console.log({ event });
      });
      $(el).on('hidden.bs.offcanvas', function (event) {
        console.log({ event });
      });
    };
  },
  style: `
  `,
});
