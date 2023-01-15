({
  tpl: ({ data }) => [
    DIV(
      { class: 'form-group' },
      LABEL({}, SPAN({ text: 'Документы' })),

      DIV(
        {
          class: `css
			.*css* {
				position: relative;
				display: flex;
				flex-wrap: wrap;
				padding-top: 10px;
			}
			.*css* > .complex-item > .item-controls {
				display: block;
			}
			.*css* > .complex-item {
				width: 100%;
			}
			.*css* > .complex-controls {
				top: -20px!important;
			}
		`,
        },

        COMPLEX(
          {
            name: 'pp_doc',
            add: { type: 'search', label: 'Добавить документ', lst: 'pp~doc_type', field: 'type' },
            item: { controls: { delete: true, config: { simple: true } } },
          },
          ({ data }) => {
            if (!data.type) data.type = [{}];
            const {
              type: [{ value: docType }],
            } = data;
            return [
              DIV(
                { class: 'row' },

                DIV(
                  { class: 'col-2' },
                  FIELD({ name: 'type', label: 'Тип', type: 'select', lst: 'pp~doc_type', value: '' }),
                ),
                IF(docType == 'passport', () => [
                  DIV(
                    { class: 'col-4' },

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
