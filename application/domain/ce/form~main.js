({
  config: { disableCardStyle: true },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'ce',
  id: function ({ user, query }) {
    const id = query._id || user.current.link?.v;
    return id ? [this.db.mongo.ObjectID(id)] : [];
  },
  tpl: ({ data }) => [
    HTML('core/default~breadcrumbs', { items: ['Компании', data.name] }),
    FIELD({ name: 'name', type: 'json' }),

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
              hideCols: ['ce'],
              tableId: async ({ user, query = {}, parentData, complex }) => {
                const find = { '__ce.l': { $elemMatch: { $eq: parentData._id } } };
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
              add: {
                modal: { toggleButton: { simple: true } },
                presetFields: { company: true },
                beforeAdd: async function ({ data, parentData }) {
                  data.company = [{ v: parentData._id, l: parentData.name }];
                  return data;
                },
              },
            }),
          ],
        }),
      ),
    ),
  ],
});
