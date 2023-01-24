({
  config: { disableCardStyle: true },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'ce',
  id: function ({ user, query }) {
    const id = query._id || user.current.link.value;
    return id ? [this.db.mongo.ObjectID(id)] : [];
  },
  tpl: () => [
    HTML('core/default~breadcrumbs', { items: ['Компании', data.name] }),
    FIELD({ name: 'name', type: 'json' }),

    DIV(
      { class: 'row mb-4 reg-block' },
      DIV(
        { class: 'col-12' },
        COMPLEX(
          {
            // label: 'Регистрация в системе',
            name: 'reg_request',
            add: false,
          },
          ({ data }) => {
            const ready = data.status?.find(({ value }) => value === 'ready');
            return [
              IF(ready, () => [
                FUNC(() => {
                  window.hideAfterTimeout = ($el) => {
                    $el.closest('.reg-block').classList.add('d-none');
                  };
                }),
                DIV({
                  class: 'alert alert-success',
                  text: 'Регистрация завершена',
                  on: { load: 'hideAfterTimeout' },
                }),
              ]),
              IF(!ready, () => [
                FIELD({ label: 'Статус регистрации', name: 'status', type: 'label', lst: 'reg_request~status' }),
                FIELD({ label: 'Тип производителя', name: 'type', type: 'select', lst: 'fabricator~type' }),
                H4({ text: 'Список документов для регистрации' }),
                FIELD({ label: 'Анкета-заявка', name: 'anketa', type: 'file' }),
                FIELD({ label: 'Выписка из ЕГРЮЛ', name: 'anketa', type: 'file' }),
                COMPLEX(
                  {
                    name: 'top_docs',
                    col: 'file',
                    label: 'Документы руководителей',
                    add: { type: 'file', placeholder: 'Добавить документ', field: 'file', multiple: true },
                    config: { disableCardStyle: true },
                    item: { controls: { delete: true, config: { simple: true } } },
                  },
                  () => [
                    DIV(
                      { class: 'row' },
                      DIV({ class: 'col-6' }, FIELD({ name: 'info', placeholder: 'Описание документа', label: false })),
                      DIV({ class: 'col-6 pe-5' }, FIELD({ name: 'file', type: 'file', label: false })),
                    ),
                  ],
                ),
              ]),
            ];
          },
        ),
      ),
    ),

    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Контакты',
          html: [
            HTML('core/default~phones', {
              name: 'ce_phone',
              links: { ce_phone: { 'ce~main': '__ce' }, 'ce~main': '__phone' },
            }),
            HTML('core/default~emails', {
              name: 'ce_email',
              links: { ce_email: { 'ce~main': '__ce' }, 'ce~main': '__email' },
            }),
            HTML('core/default~card', {
              title: 'Реквизиты',
              html: [HTML('ce~info')],
            }),
          ],
        }),
      ),
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Сотрудники',
          html: [
            HTML('worker~table', {
              hideFilters: true,
              tableId: async ({ user, query = {}, parentData, complex }) => {
                const find = { _id: { $in: parentData[complex.links[complex.parent.name]]?.l || [] } };
                const findData = await db.mongo.find(
                  complex.col,
                  find,
                  { projection: { _id: 1 } },
                  { ...complex.filter, ...(query.filter || {}) },
                );
                return findData.map(({ _id }) => _id);
              },
              tableFilter: { limit: 2 },
              links: { worker: { 'ce~main': '__ce' }, 'ce~main': '__worker' },
              add: { modal: { toggleButton: { simple: true } } },
            }),
          ],
        }),
      ),
    ),
  ],
});
