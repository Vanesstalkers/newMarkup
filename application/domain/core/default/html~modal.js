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
            //BUTTON({ type: 'button', class: 'btn btn-primary' }, SPAN({ text: 'Save changes' })),
            FIELD({
              name: 'create',
              type: 'button',
              label: 'Добавить объект',
              handler: async ({ form, field, user, data }) => {
                // const table = form.fields[data.tableCode];
                const tmpObj = form.fields[data.tmpObjCode];
                const tmpObjData = form.data[data.tmpObjCode];
                // const complex = form.fields[tmpObj.complexCode];

                const formName = form.fields[[1, form.codeSfx].join('_')]?.name;
                const newItem = await lib.markup.actions.addComplex({
                  form: formName,
                  code: data.tableCode,
                  user,
                  returnId: true,
                  data: { ...tmpObjData, _id: undefined },
                });
                await lib.markup.actions.deleteComplex({ form: formName, code: data.tmpObjCode, user });

                return newItem;
              },
              on: {
                beforeHandler: (event) => {
                  const $modal = event.target.closest('.modal');
                  const $item = $modal.querySelector('.modal-body > .complex-block .complex-item');
                  const $form = event.target.closest('[type="form"]');
                  const $table = $form.querySelector('table > .complex-block');
                  return { tmpObjCode: $item.getAttribute('code'), tableCode: $table.getAttribute('code') };
                },
                afterHandler: (event, data) => {
                  console.log('afterHandler', event, data);
                  location.reload();
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
