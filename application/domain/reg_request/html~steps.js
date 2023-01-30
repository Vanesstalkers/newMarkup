({
  tpl: ({ data }) => [
    DIV(
      { id: 'multiStepsValidation', class: 'bs-stepper shadow-none linear' },
      DIV(
        { class: 'bs-stepper-header border-bottom-0' },
        DIV(
          { class: 'step active', 'data-target': '#accountDetailsValidation' },
          BUTTON(
            { type: 'button', class: 'step-trigger', 'aria-selected': 'true' },
            SPAN({ class: 'bs-stepper-circle' }, I({ class: 'bx bx-home-alt' })),
            SPAN(
              { class: 'bs-stepper-label mt-1' },
              SPAN({ class: 'bs-stepper-title' }, SPAN({ text: 'Компания' })),
              SPAN({ class: 'bs-stepper-subtitle' }, SPAN({ text: 'Данные юр.лица' })),
            ),
          ),
        ),
        DIV({ class: 'line' }, I({ class: 'bx bx-chevron-right' })),
        DIV(
          { class: 'step', 'data-target': '#personalInfoValidation' },
          BUTTON(
            { type: 'button', class: 'step-trigger', 'aria-selected': 'false', disabled: 'disabled' },
            SPAN({ class: 'bs-stepper-circle' }, I({ class: 'bx bx-user' })),
            SPAN(
              { class: 'bs-stepper-label mt-1' },
              SPAN({ class: 'bs-stepper-title' }, SPAN({ text: 'Участники' })),
              SPAN({ class: 'bs-stepper-subtitle' }, SPAN({ text: 'Документы учредителей' })),
            ),
          ),
        ),
        DIV({ class: 'line' }, I({ class: 'bx bx-chevron-right' })),
        DIV(
          { class: 'step', 'data-target': '#billingLinksValidation' },
          BUTTON(
            { type: 'button', class: 'step-trigger', 'aria-selected': 'false', disabled: 'disabled' },
            SPAN({ class: 'bs-stepper-circle' }, I({ class: 'bx bx-detail' })),
            SPAN(
              { class: 'bs-stepper-label mt-1' },
              SPAN({ class: 'bs-stepper-title' }, SPAN({ text: 'Тариф' })),
              SPAN({ class: 'bs-stepper-subtitle' }, SPAN({ text: 'Выбор тарифного плана' })),
            ),
          ),
        ),
      ),
      DIV(
        { class: 'bs-stepper-content' },
        FORM(
          { id: 'multiStepsForm', onsubmit: 'return false' },
          DIV(
            {
              id: 'accountDetailsValidation',
              class: 'content active dstepper-block fv-plugins-bootstrap5 fv-plugins-framework',
            },
            DIV(
              { class: 'content-header mb-3' },
              H3({ class: 'mb-1' }, SPAN({ text: 'Данные юридического лица' })),
              SPAN({}, SPAN({ text: 'Введите данные юридического лица' })),
            ),
            DIV(
              { class: 'row g-3' },

              COMPLEX(
                {
                  name: 'ce_contacts',
                  col: 'ce',
                  links: { fabricator: '__ce', customer: '__ce' },
                  config: { disableCardView: true },
                },
                () => [
                  HTML('ce~info', {
                    cls: `css
                      display: grid !important;
                      grid-template-columns: repeat(3, 1fr);
                      gap: 10px;
                      grid-auto-rows: minmax(100px, auto);
                    `,
                  }),
                  HTML('core/default~phones', {
                    name: 'ce_phone',
                    links: { ce_phone: { ce_contacts: '__ce' }, ce_contacts: '__phone' },
                  }),
                  HTML('core/default~emails', {
                    name: 'ce_email',
                    links: { ce_email: { ce_contacts: '__ce' }, ce_contacts: '__email' },
                  }),
                  HR({}),
                  H5({ text: 'Список документов для регистрации' }),
                  FIELD({ label: 'Анкета-заявка', name: 'anketa', type: 'file' }),
                  FIELD({ label: 'Выписка из ЕГРЮЛ', name: 'egrul', type: 'file' }),
                ],
              ),

              DIV(
                { class: 'col-12 d-flex justify-content-between' },
                // BUTTON(
                //   { class: 'btn btn-label-secondary btn-prev', disabled: '' },
                //   I({ class: 'bx bx-chevron-left bx-sm ms-sm-n2' }),
                //   SPAN({ class: 'align-middle d-sm-inline-block d-none' }, SPAN({ text: 'Previous' })),
                // ),
                // BUTTON(
                //   { class: 'btn btn-primary btn-next' },
                //   SPAN({ class: 'align-middle d-sm-inline-block d-none me-sm-1 me-0' }, SPAN({ text: 'Next' })),
                //   I({ class: 'bx bx-chevron-right bx-sm me-sm-n2' }),
                // ),
                FIELD({
                  name: 'prevStep1',
                  type: 'button',
                  label: 'Назад',
                  config: { btnType: 'secondary' },
                  disabled: true,
                }),
                FIELD({
                  name: 'nextStep1',
                  type: 'button',
                  label: 'Дальше',
                  config: { btnType: 'primary' },
                  on: {
                    click: (e) => {
                      window.form.stepper.next();
                    },
                  },
                }),
              ),
            ),
          ),
          DIV(
            { id: 'personalInfoValidation', class: 'content fv-plugins-bootstrap5 fv-plugins-framework' },
            DIV(
              { class: 'content-header mb-3' },
              H3({ class: 'mb-1' }, SPAN({ text: 'Персональная информация о руководителях' })),
              SPAN({}, SPAN({ text: 'Введите информацию о руководителях' })),
            ),
            DIV(
              { class: 'row g-3' },

              DIV(
                { class: 'col-12' },
                COMPLEX(
                  {
                    name: 'ce_workers',
                    col: 'ce',
                    links: { fabricator: '__ce', customer: '__ce' },
                    config: { disableCardView: true },
                  },
                  () => [
                    COMPLEX(
                      {
                        label: 'Руководители',
                        name: 'worker',
                        links: { worker: { ce_workers: '__ce' }, ce_workers: '__worker' },
                        // config: { disableCardView: true },
                        add: {
                          placeholder: 'Добавить руководителя',
                          type: 'search',
                          lst: 'worker~type',
                          field: 'type',
                        },
                        item: { class: 'm-2' },
                      },
                      () => [
                        DIV(
                          { class: 'row' },
                          DIV({ class: 'col-6' }, FIELD({ name: 'position', label: 'Должность' })),
                          DIV(
                            { class: 'col-6' },
                            FIELD({ name: 'type', type: 'select', lst: 'worker~type', label: 'Тип должности' }),
                          ),
                          DIV(
                            { class: 'col-12' },
                            COMPLEX(
                              {
                                name: 'pp',
                                // links: { pp: { ce_workers: '__worker' }, ce_workers: '__pp' },
                                add: { auto: true },
                                config: { disableCardStyle: true },
                              },
                              () => [
                                DIV(
                                  { class: 'row' },
                                  DIV({ class: 'col-4' }, FIELD({ label: 'Фамилия', name: 'second_name' })),
                                  DIV({ class: 'col-4' }, FIELD({ label: 'Имя', name: 'first_name' })),
                                  DIV({ class: 'col-4' }, FIELD({ label: 'Отчество', name: 'third_name' })),
                                ),
                              ],
                            ),
                          ),
                          DIV(
                            { class: 'col-12' },
                            COMPLEX(
                              {
                                name: 'top_docs',
                                col: 'file',
                                label: 'Документы руководителя',
                                add: { type: 'file', placeholder: 'Добавить документ', field: 'file', multiple: true },
                                config: { disableCardStyle: true },
                                item: { controls: { delete: true, config: { simple: true } } },
                              },
                              () => [
                                DIV(
                                  { class: 'row' },
                                  DIV(
                                    { class: 'col-6' },
                                    FIELD({ name: 'info', placeholder: 'Описание документа', label: false }),
                                  ),
                                  DIV({ class: 'col-6 pe-5' }, FIELD({ name: 'file', type: 'file', label: false })),
                                ),
                              ],
                            ),
                          ),
                          // DIV(
                          //   { class: 'col-12' },
                          //   COMPLEX(
                          //     {
                          //       name: 'pp',
                          //       // links: { pp: { ce_workers: '__worker' }, ce_workers: '__pp' },
                          //       add: { auto: true },
                          //       config: { disableCardStyle: true },
                          //     },
                          //     ({ data }) => [
                          //       HTML('pp~info', {
                          //         phonesConfig: {
                          //           name: 'pp_phone',
                          //           links: { pp_phone: { pp_info: `__pp` }, pp_info: '__phone' },
                          //         },
                          //         emailsConfig: {
                          //           name: 'pp_email',
                          //           links: { pp_email: { pp_info: `__pp` }, pp_info: '__email' },
                          //         },
                          //       }),
                          //     ],
                          //   ),
                          // ),
                        ),
                      ],
                    ),
                  ],
                ),
              ),

              DIV(
                { class: 'col-12 d-flex justify-content-between' },
                // BUTTON(
                //   { class: 'btn btn-primary btn-prev' },
                //   I({ class: 'bx bx-chevron-left bx-sm ms-sm-n2' }),
                //   SPAN({ class: 'align-middle d-sm-inline-block d-none' }, SPAN({ text: 'Previous' })),
                // ),
                // BUTTON(
                //   { class: 'btn btn-primary btn-next' },
                //   SPAN({ class: 'align-middle d-sm-inline-block d-none me-sm-1 me-0' }, SPAN({ text: 'Next' })),
                //   I({ class: 'bx bx-chevron-right bx-sm me-sm-n2' }),
                // ),
                FIELD({
                  name: 'prevStep2',
                  type: 'button',
                  label: 'Назад',
                  config: { btnType: 'primary' },
                  on: {
                    click: (e) => {
                      window.form.stepper.previous();
                    },
                  },
                }),
                FIELD({
                  name: 'nextStep2',
                  type: 'button',
                  label: 'Дальше',
                  config: { btnType: 'primary' },
                  on: {
                    click: (e) => {
                      window.form.stepper.next();
                    },
                  },
                }),
              ),
            ),
          ),
          DIV(
            { id: 'billingLinksValidation', class: 'content fv-plugins-bootstrap5 fv-plugins-framework' },
            DIV(
              { class: 'content-header mb-3' },
              H3({ class: 'mb-1' }, SPAN({ text: 'Select Plan' })),
              SPAN({}, SPAN({ text: 'Select plan as per your requirement' })),
            ),
            DIV(
              { class: 'row gap-md-0 gap-3 mb-4' },
              DIV(
                { class: 'col-md' },
                DIV(
                  { class: 'form-check custom-option custom-option-icon' },
                  LABEL(
                    { class: 'form-check-label custom-option-content', for: 'basicOption' },
                    SPAN(
                      { class: 'custom-option-body' },
                      H4({ class: 'mb-2' }, SPAN({ text: 'Basic' })),
                      P({ class: 'mb-2' }, SPAN({ text: 'A simple start for start ups &amp; Students' })),
                      SPAN(
                        { class: 'd-flex justify-content-center' },
                        SUP({ class: 'text-primary fs-big lh-1 mt-3' }, SPAN({ text: '$' })),
                        SPAN({ class: 'display-5 text-primary' }, SPAN({ text: '0' })),
                        SUB({ class: 'lh-1 fs-big mt-auto mb-2 text-muted' }, SPAN({ text: '/month' })),
                      ),
                    ),
                    INPUT({
                      name: 'customRadioIcon',
                      class: 'form-check-input',
                      type: 'radio',
                      value: '',
                      id: 'basicOption',
                    }),
                  ),
                ),
              ),
              DIV(
                { class: 'col-md' },
                DIV(
                  { class: 'form-check custom-option custom-option-icon checked' },
                  LABEL(
                    { class: 'form-check-label custom-option-content', for: 'standardOption' },
                    SPAN(
                      { class: 'custom-option-body' },
                      H4({ class: 'mb-2' }, SPAN({ text: 'Standard' })),
                      P({ class: 'mb-2' }, SPAN({ text: 'For small to medium businesses' })),
                      SPAN(
                        { class: 'd-flex justify-content-center' },
                        SUP({ class: 'text-primary fs-big lh-1 mt-3' }, SPAN({ text: '$' })),
                        SPAN({ class: 'display-5 text-primary' }, SPAN({ text: '99' })),
                        SUB({ class: 'lh-1 fs-big mt-auto mb-2 text-muted' }, SPAN({ text: '/month' })),
                      ),
                    ),
                    INPUT({
                      name: 'customRadioIcon',
                      class: 'form-check-input',
                      type: 'radio',
                      value: '',
                      id: 'standardOption',
                      checked: '',
                    }),
                  ),
                ),
              ),
              DIV(
                { class: 'col-md' },
                DIV(
                  { class: 'form-check custom-option custom-option-icon' },
                  LABEL(
                    { class: 'form-check-label custom-option-content', for: 'enterpriseOption' },
                    SPAN(
                      { class: 'custom-option-body' },
                      H4({ class: 'mb-2' }, SPAN({ text: 'Enterprise' })),
                      P({ class: 'mb-2' }, SPAN({ text: 'Solution for enterprise &amp; organizations' })),
                      SPAN(
                        { class: 'd-flex justify-content-center' },
                        SUP({ class: 'text-primary fs-big lh-1 mt-3' }, SPAN({ text: '$' })),
                        SPAN({ class: 'display-5 text-primary' }, SPAN({ text: '499' })),
                        SUB({ class: 'lh-1 fs-big mt-auto mb-2 text-muted' }, SPAN({ text: '/year' })),
                      ),
                    ),
                    INPUT({
                      name: 'customRadioIcon',
                      class: 'form-check-input',
                      type: 'radio',
                      value: '',
                      id: 'enterpriseOption',
                    }),
                  ),
                ),
              ),
            ),
            DIV(
              { class: 'content-header mb-3' },
              H3({ class: 'mb-1' }, SPAN({ text: 'Payment Information' })),
              SPAN({}, SPAN({ text: 'Enter your card information' })),
            ),
            DIV(
              { class: 'row g-3' },
              DIV(
                { class: 'col-md-12 fv-plugins-icon-container' },
                LABEL({ class: 'form-label w-100', for: 'multiStepsCard' }, SPAN({ text: 'Card Number' })),
                DIV(
                  { class: 'input-group input-group-merge has-validation' },
                  INPUT({
                    id: 'multiStepsCard',
                    class: 'form-control multi-steps-card',
                    name: 'multiStepsCard',
                    type: 'text',
                    placeholder: '1356 3215 6548 7898',
                    'aria-describedby': 'multiStepsCardImg',
                  }),
                  SPAN(
                    { class: 'input-group-text cursor-pointer', id: 'multiStepsCardImg' },
                    SPAN({ class: 'card-type' }),
                  ),
                ),
                DIV({ class: 'fv-plugins-message-container invalid-feedback' }),
              ),
              DIV(
                { class: 'col-md-5' },
                LABEL({ class: 'form-label', for: 'multiStepsName' }, SPAN({ text: 'Name On Card' })),
                INPUT({
                  type: 'text',
                  id: 'multiStepsName',
                  class: 'form-control',
                  name: 'multiStepsName',
                  placeholder: 'John Doe',
                }),
              ),
              DIV(
                { class: 'col-6 col-md-4' },
                LABEL({ class: 'form-label', for: 'multiStepsExDate' }, SPAN({ text: 'Expiry Date' })),
                INPUT({
                  type: 'text',
                  id: 'multiStepsExDate',
                  class: 'form-control multi-steps-exp-date',
                  name: 'multiStepsExDate',
                  placeholder: 'MM/YY',
                }),
              ),
              DIV(
                { class: 'col-6 col-md-3' },
                LABEL({ class: 'form-label', for: 'multiStepsCvv' }, SPAN({ text: 'CVV Code' })),
                DIV(
                  { class: 'input-group input-group-merge' },
                  INPUT({
                    type: 'text',
                    id: 'multiStepsCvv',
                    class: 'form-control multi-steps-cvv',
                    name: 'multiStepsCvv',
                    maxlength: '3',
                    placeholder: '654',
                  }),
                  SPAN(
                    { class: 'input-group-text cursor-pointer', id: 'multiStepsCvvHelp' },
                    I({
                      class: 'bx bx-help-circle text-muted',
                      'data-bs-toggle': 'tooltip',
                      'data-bs-placement': 'top',
                      'aria-label': 'Card Verification Value',
                      'data-bs-original-title': 'Card Verification Value',
                    }),
                  ),
                ),
              ),
              DIV(
                { class: 'col-12 d-flex justify-content-between' },
                // BUTTON(
                //   { class: 'btn btn-primary btn-prev' },
                //   I({ class: 'bx bx-chevron-left bx-sm ms-sm-n2' }),
                //   SPAN({ class: 'align-middle d-sm-inline-block d-none' }, SPAN({ text: 'Previous' })),
                // ),
                // BUTTON({ type: 'submit', class: 'btn btn-success btn-next btn-submit' }, SPAN({ text: 'Submit' })),
                FIELD({
                  name: 'prevStep3',
                  type: 'button',
                  label: 'Назад',
                  config: { btnType: 'primary' },
                  on: {
                    click: (e) => {
                      window.form.stepper.previous();
                    },
                  },
                }),
                FIELD({
                  name: 'nextStep3',
                  type: 'button',
                  label: 'Завершить регистрацию',
                  config: { btnType: 'success' },
                  handler: async ({ user }) => {
                    const req = await db.mongo.findOne('reg_request', user.current.reg_request_id);
                    const role = `${req.company_type}_manager`;
                    const { l: label, v: value } = domain.user['lst~roles'].find(({ v }) => v === role) || {};
                    await db.mongo.updateOne('user_role', user.current._id, { $set: { role: [{ label, value }] } });
                    return { roleId: user.current._id };
                  },
                  on: {
                    afterHandler: async (e, data) => {
                      await api.auth.changeRole({ roleId: data.roleId });
                      location.href = '';
                    },
                  },
                }),
              ),
            ),
          ),
        ),
      ),
    ),
  ],
  // on: {
  //   load: (el) => {
  //     window.loadRes('/theme/sneat/bs-stepper.js');
  //     window.loadRes('/theme/sneat/bs-stepper.css');
  //     window.runAfterResLoaded('/theme/sneat/bs-stepper.js', () => {
  //       window.form = {
  //         stepper: new Stepper(document.querySelector('#multiStepsValidation'), {
  //           linear: !0,
  //         }),
  //       };
  //     });
  //   },
  //   itemLoad: () => {},
  // },
});
