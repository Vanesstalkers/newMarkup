({
  tpl: ({ data }, { id, title, html: { body: bodyHTML } = {}, button = {} }) => [
    button.html ||
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
        tabindex: '-1',
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
          DIV({ class: 'modal-body' }, bodyHTML),
          DIV(
            { class: 'modal-footer' },
            BUTTON(
              { type: 'button', class: 'btn btn-label-secondary', 'data-bs-dismiss': 'modal' },
              SPAN({ text: 'Close' }),
            ),
            FIELD({
              name: 'create',
              type: 'button',
              label: 'Добавить объект',
              handler: async ({ form, field, user, data }) => {
                const tmpObjData = form.data[data.tmpObjCode];
                const formName = form.name;
                const newItem = await lib.markup.actions.addComplex({
                  form: formName,
                  code: data.tableCode,
                  user,
                  returnId: true,
                  data: tmpObjData,
                });
                await lib.markup.actions.deleteComplex({ form: formName, code: data.tmpObjCode, user });

                return newItem;
              },
              on: {
                beforeHandler: (event) => {
                  const $modal = event.target.closest('.modal');
                  const $item = $modal.querySelector('.modal-body > .complex-block .complex-item');
                  const $card = event.target.closest('.card');
                  const $table = $card.querySelector('table > .complex-block');
                  return { tmpObjCode: $item.getAttribute('code'), tableCode: $table.getAttribute('code') };
                },
                afterHandler: (event, data) => {
                  const $modal = event.target.closest('.modal');
                  const $card = event.target.closest('.card');
                  const $table = $card.querySelector('table > .complex-block');
                  const $tableReloadBtn = $table.querySelector(
                    `.card-header[parent-code="${$table.getAttribute('code')}"] .btn-reload`,
                  );
                  if ($tableReloadBtn) $tableReloadBtn.click();
                  const $tmpObj = $modal.querySelector('.complex-block');
                  const $tmpObjReloadBtn = $tmpObj.querySelector(
                    `.card-header[parent-code="${$tmpObj.getAttribute('code')}"] .btn-reload`,
                  );
                  if ($tmpObjReloadBtn) $tmpObjReloadBtn.click();
                  $($modal).modal('hide');
                },
              },
            }),
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
