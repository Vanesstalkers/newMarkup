({
  config: {
    menu: {
      label: 'Форма компании',
      icon: 'bx bx-building',
    },
  },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'ce',
  id: function ({ user, query }) {
    if (!query._id) query._id = '63c69b477562e67ed0f515d3';
    return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
  },
  tpl: () => [
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
                const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
                return findData.map(({ _id }) => _id);
              },
              links: { worker: { 'ce~main': '__ce' }, 'ce~main': '__worker' },
            }),
          ],
        }),
      ),
    ),
  ],
});