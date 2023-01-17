({
  tpl: ({ data, parent }, { phonesConfig, emailsConfig }) => {
    return [
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
          HTML(
            'core/default~phones',
            (() => {
              if (!phonesConfig) {
                phonesConfig = {
                  name: 'pp_phone',
                  links: { pp_phone: { [parent.name]: `__${parent.col}` }, [parent.name]: '__phone' },
                };
              }
              return phonesConfig;
            })(),
          ),
          HTML(
            'core/default~emails',
            (() => {
              if (!emailsConfig) {
                emailsConfig = {
                  name: 'pp_email',
                  links: { pp_email: { [parent.name]: `__${parent.col}` }, [parent.name]: '__email' },
                };
              }
              return emailsConfig;
            })(),
          ),
        ),
      ),
    ];
  },
});
