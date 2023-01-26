({
  col: 'worker',
  id: function ({ user, query }) {
    return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
  },
  config: { disableCardStyle: true },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Информация',
          html: [
            DIV(
              { class: 'row' },
              DIV({ class: 'col-3' }, FIELD({ name: 'code', label: 'Внутренний код' })),
              DIV({ class: 'col-5' }, FIELD({ name: 'position', label: 'Должность' })),
              DIV(
                { class: 'col-4' },
                FIELD({ name: 'type', type: 'select', lst: 'worker~type', label: 'Тип должности' }),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV({ class: 'col-4' }, FIELD({ name: 'proxy.num', type: 'input', label: 'Доверенность №' })),
              DIV(
                { class: 'col-3' },
                FIELD({ name: 'proxy.from', type: 'input', label: 'выдана с', config: { mask: '00.00.0000' } }),
              ),
              DIV(
                { class: 'col-3' },
                FIELD({ name: 'proxy.to', type: 'input', label: 'по', config: { mask: '00.00.0000' } }),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-12' },
                COMPLEX(
                  {
                    name: 'pp_info',
                    col: 'pp',
                    links: { 'worker~main': '__pp' },
                    add: false,
                    config: { disableCardStyle: true },
                  },
                  ({ data }) => [
                    HTML('pp~info', {
                      phonesConfig: {
                        name: 'pp_phone',
                        links: { pp_phone: { pp_info: `__pp` }, pp_info: '__phone' },
                      },
                      emailsConfig: {
                        name: 'pp_email',
                        links: { pp_email: { pp_info: `__pp` }, pp_info: '__email' },
                      },
                    }),
                  ],
                ),
              ),
            ),
          ],
        }),
      ),
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'График работы',
          html: [
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-12 col-lg-6' },
                FIELD({ label: 'Вид графика работы', name: 'workday', type: 'select', lst: 'worker~workday' }),
              ),
              DIV(
                { class: 'col-12 col-lg-6' },
                FIELD({ label: 'Первый рабочий день', name: 'workdayStart', config: { inputType: 'date' } }),
              ),
            ),
          ],
        }),

        HTML('core/default~card', {
          title: 'Доступы к системе',
          html: [
            FIELD({ name: 'company', type: 'json' }),
            COMPLEX(
              {
                name: 'pp_user',
                col: 'pp',
                links: { 'worker~main': '__pp' },
                add: false,
                config: { disableCardStyle: true },
                item: { custom: { userLink: data.company } },
              },
              ({ data, custom }) => [HTML('pp~user', { custom })],
            ),
          ],
        }),
      ),
    ),
  ],
  func: () => {},
  style: `
  `,
});
