({
  tpl: ({}, config) => {
    const filters = config.filter?.items || [];
    const table = config.table || {};
    return [
      DIV(
        { class: 'card' },
        // H5(
        //   { class: 'card-header', text: filters.length ? 'Фильтры поиска' : '' },
        // ),
        // HR(),
        DIV(
          { class: 'row p-3' },
          DIV(
            { class: 'col-10 col-lg-8' },
            IF(filters.length, () => [
              DIV(
                { class: 'row' },
                ...filters
                  .map((item) => DIV({ class: item.class }, FIELD(item.f)))
                  .concat([
                    DIV(
                      { class: 'col-auto d-flex align-items-center' },
                      FIELD({
                        type: 'button',
                        label: 'Найти',
                        on: {
                          click: async (event) => {
                            const $header = event.target.closest('.card-header');
                            const $filters = $header.querySelectorAll('input');
                            const $card = $header.parentNode;
                            const $table = $card.querySelector('tbody.complex-block');
                            const form = $card.closest('[type="form"]').dataset.name;
                            const code = $table.dataset.code;
                            const query = Object.fromEntries(
                              Array.from($filters).map(($filter) => [
                                $filter.closest('.el').dataset.name,
                                $filter.type === 'checkbox' ? $filter.checked : $filter.value,
                              ]),
                            );
                            const {
                              result,
                              data: el,
                              msg,
                              stack,
                            } = await api.markup.showComplex({ form, code, query });
                            if (result === 'error') console.error({ msg, stack });
                            else if (result === 'success') {
                              const $parent = $table.parentNode;
                              el.class = (el.class || '') + ' reloaded';
                              const { tpl, prepare } = window.el[el.elPath] || {};
                              await nativeTplToHTML([tpl(el)], $parent);
                              const $newEl = $parent.querySelector(`.reloaded.complex-block[code='${el.code}']`);
                              if (prepare) prepare({ $el: $newEl, data: el });
                              if (el.items) {
                                for (const item of Object.values(el.items)) {
                                  const { tpl, prepare } = window.el[item.elPath] || {};
                                  if (typeof tpl === 'function') {
                                    await nativeTplToHTML([tpl({ ...item, parent: el })], $newEl);
                                    const $item = $newEl.querySelector(`.complex-item[code='${item.code}']`);
                                    if (prepare) prepare({ $el: $item, data: item, parent: { data: el, $el: $newEl } });
                                    await nativeTplToHTML(item.content, $item);
                                  }
                                }
                              }
                              $newEl.classList.remove('reloaded');
                              $table.replaceWith($newEl);
                            }
                          },
                        },
                      }),
                    ),
                  ]),
              ),
            ]),
          ),
          DIV(
            { class: 'col-2 col-lg-4 d-flex align-items-start justify-content-end' },
            IF(config.add?.modal, () => {
              return [
                HTML('core/default~modal', {
                  title: `Новый объект '${config.col}'`,
                  id: `${config.col}-add`,
                  html: {
                    body: [
                      COMPLEX(
                        {
                          name: 'tmp_obj_' + config.col,
                          col: 'tmp_obj',
                          add: { auto: true },
                          controls: { reload: true, config: { hide: true } },
                          item: { controls: {}, custom: { items: config.add?.items || [] } },
                        },
                        ({ custom }) => {
                          return [
                            DIV(
                              {},
                              ...custom.items
                                .filter((item) => item)
                                .map((item) =>
                                  [].concat(item.f ? [FIELD(item.f)] : []).concat(item.html ? [HTML(item.html)] : []),
                                ),
                            ),
                          ];
                        },
                      )
                    ],
                  },
                  button: {
                    html: [
                      BUTTON(
                        {
                          class: 'btn btn-sm btn-primary',
                          'data-bs-toggle': 'modal',
                          'data-bs-target': `#${config.col}-add-modal`,
                        },
                        SPAN(
                          { class: 'tf-icons bx bx-plus' },
                          SPAN({ class: 'd-none d-lg-inline ml-2', text: 'Добавить' }),
                        ),
                      ),
                    ],
                  },
                }),
              ];
            }),
          ),
        ),
        DIV(
          { class: 'table-responsive text-nowrap' },
          TABLE(
            { class: 'table' },
            THEAD(
              {},
              TR(
                {},
                table.addRowLink ? TH() : undefined,
                ...table.cols.filter(({ label }) => label).map((col) => TH({ text: col.label })),
                //.concat(table.addRowLink ? [TH()] : []),
              ),
            ),
            COMPLEX(
              {
                name: config.col,
                add: false,
                links: config.links,
                config: { tag: 'tbody', disableCardView: true },
                controls: { reload: true, config: { hide: true } },
                class: 'table-border-bottom-0',
                item: {
                  config: { tag: 'tr' },
                  controls: {},
                  custom: { col: config.col, addRowLink: table.addRowLink, cols: table.cols },
                },
                id: table.id,
                filter: { ...(table.filter || {}) },
              },
              ({ data, custom }) => {
                const { cols } = custom;
                return [
                  custom.addRowLink
                    ? TD(
                        {},
                        A(
                          {
                            href: `#${JSON.stringify({
                              form: `${custom.col}~main`,
                              container: 'formContent',
                              _id: data._id,
                            })}`,
                          },
                          I({ class: 'bx bx-link-alt me-1' }),
                        ),
                      )
                    : undefined,
                  ...cols
                    .filter(({ label }) => label)
                    .map((col) =>
                      TD(
                        { class: col.class || '' },
                        ...[]
                          .concat(col.f ? [FIELD(col.f)] : [])
                          .concat(
                            col.c
                              ? [
                                  COMPLEX(
                                    { name: col.c.name, item: { custom: { content: col.c.f } } },
                                    ({ custom }) => {
                                      const { content } = custom;
                                      return [FIELD(content)];
                                    },
                                  ),
                                ]
                              : [],
                          )
                          .concat(col.html ? [HTML(col.html, { test: true })] : []),
                      ),
                    ),
                ];
              },
            ),
          ),
        ),
      ),
    ];
  },
});
