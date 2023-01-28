({
  config: {
    menu: { label: 'Карточка регистрации', icon: 'fa-solid fa-file-lines' },
    access: ['registrator'],
    disableCardStyle: true,
  },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'reg_request',
  id: function ({ user, query }) {
    const id = user.current.reg_request_id || query._id;
    return id ? [this.db.mongo.ObjectID(id)] : [];
  },
  tpl: ({ data }) => [
    HTML('core/default~breadcrumbs', { items: ['Запросы на регистрацию', `Запрос № ${data._id}`] }),
    FIELD({ name: 'company_type', type: 'json' }),

    IF(data.company_type === 'fabricator', () => [
      COMPLEX(
        {
          name: 'fabricator',
          links: { 'reg_request~main': '__fabricator' },
          config: { disableCardView: true },
          class: 'd-flex align-items-center justify-content-center authentication-bg p-sm-5 p-3',
          item: { class: 'w-px-700' },
        },
        () => [HTML('reg_request~steps')],
      ),
    ]),
    IF(data.company_type === 'customer', () => [
      COMPLEX(
        {
          name: 'customer',
          links: { 'reg_request~main': '__customer' },
          config: { disableCardView: true },
          class: 'd-flex align-items-center justify-content-center authentication-bg p-sm-5 p-3',
          item: { class: 'w-px-700' },
        },
        () => [HTML('reg_request~steps')],
      ),
    ]),
  ],
  on: {
    load: (el) => {
      window.loadRes('/theme/sneat/bs-stepper.js');
      window.loadRes('/theme/sneat/bs-stepper.css');
      window.runAfterResLoaded('/theme/sneat/bs-stepper.js', () => {
        window.form = {
          stepper: new Stepper(document.querySelector('#multiStepsValidation'), {
            linear: !0,
          }),
        };
      });
    },
    itemLoad: () => {},
  },
});
