({
  tpl: ({ data }) => [
    DIV(
      { class: 'form-group' },
      DIV(
        {},
        COMPLEX(
          {
            label: 'Документы',
            name: 'pp_doc',
            add: { type: 'search', label: false, placeholder: 'Добавить документ', lst: 'pp~doc_type', field: 'type' },
            config: { disableCardStyle: true },
            controls: { collapse: true },
            item: { controls: { delete: true, config: { simple: true } } },
          },
          ({ data }) => {
            if (!data.type) data.type = [{}];
            const {
              type: [{ v: docType }],
            } = data;
            return [
              DIV(
                { class: 'row' },

                DIV({ class: 'col-3' }, FIELD({ name: 'type', label: 'Тип', type: 'select', lst: 'pp~doc_type' })),
                IF(docType == 'passport', () => [
                  DIV(
                    { class: 'col-3' },

                    FIELD({
                      name: 'num',
                      label: 'Номер',
                      front: {
                        onSave: function ($e, data, callback) {
                          callback(
                            data.value && data.value.length == 11 ? true : { err: 'Номер указан неправильно' },
                            data,
                          );
                        },
                        onLoad: function (o) {
                          o.config = { mask: '0000 000000' };
                        },
                      },
                    }),
                  ),
                  DIV(
                    { class: 'col-3' },
                    FIELD({
                      name: 'date',
                      label: 'Дата выдачи',
                      front: {
                        onLoad: function (o) {
                          o.config = { mask: '00.00.0000' };
                        },
                      },
                    }),
                  ),
                  DIV(
                    { class: 'col-3' },
                    FIELD({
                      name: 'place_code',
                      label: 'Код подр-я',
                      front: {
                        onLoad: function (o) {
                          o.config = { mask: '000-000' };
                        },
                      },
                    }),
                  ),
                  DIV({ class: 'col-12' }, FIELD({ name: 'place', label: 'Место выдачи' })),
                ]),

                IF(docType == 'snils', () => [
                  DIV(
                    { class: 'col-4' },
                    FIELD({
                      name: 'num',
                      label: 'Номер',
                      front: {
                        onSave: function ($e, data, callback) {
                          callback(
                            data.value && data.value.length == 14 ? true : { err: 'Номер указан неправильно' },
                            data,
                          );
                        },
                        onLoad: function (o) {
                          o.config = { mask: '000-000-000 00' };
                        },
                      },
                    }),
                  ),
                ]),

                IF(docType == 'inn', () => [
                  DIV(
                    { class: 'col-4 form-group' },
                    FIELD({
                      name: 'num',
                      label: 'Номер',
                      front: {
                        onSave: function ($e, data, callback) {
                          callback(
                            data.value && data.value.length == 12 ? true : { err: 'Номер указан неправильно' },
                            data,
                          );
                        },
                        onLoad: function (o) {
                          o.config = { mask: '000000000000' };
                        },
                      },
                    }),
                  ),
                ]),

                IF(docType == 'drice' || docType == 'army' || docType == 'i_passport', () => [
                  DIV({ class: 'col-8 col-offset-1 form-group' }, FIELD({ name: 'num', label: 'Номер' })),
                ]),
              ),
            ];
          },
        ),
      ),
    ),
  ],
});
