({
  tpl: ({ data }) => [
    DIV(
      { class: 'row' },

      DIV(
        { class: 'col-8' },
        FIELD({ label: 'Пол', name: 'gender', type: 'radio', lst: 'pp~gender', config: { inline: true } }),
        FIELD({ label: 'Фамилия', name: 'second_name' }),
        FIELD({ label: 'Имя', name: 'first_name' }),
        FIELD({ label: 'Отчество', name: 'third_name' }),
      ),
      DIV({ class: 'col-4' }, FIELD({ name: 'foto', type: 'file', label: 'Фотография', config: { img: true } })),

      DIV(
        { class: 'col-12' },
        FIELD({ label: 'Адрес регистрации', name: 'reg_adrs' }),
        FIELD({ label: 'Адрес проживания', name: 'home_adrs' }),
        HTML('pp~docs'),

        // _.html('__tpl~phone_block', _, d, { c: { name: 'pp_phone' } }),

        // _.html('__tpl~email_block', _, d, { c: { name: 'pp_email' } }),
      ),
    ),
  ],
});
