({
  col: 'user',
  config: { disableCardStyle: true },
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: () => [
    DIV(
      { class: 'container-xxl' },
      DIV(
        { class: 'authentication-wrapper authentication-basic container-p-y' },
        DIV(
          { class: 'authentication-inner' },
          DIV(
            { class: 'card' },
            DIV(
              { class: 'card-body' },
              DIV(
                { class: 'app-brand justify-content-center' },
                A(
                  { href: 'index.html', class: 'app-brand-link gap-2' },
                  SPAN(
                    { class: 'app-brand-logo demo' },
                    SVG(
                      {
                        width: '25',
                        viewBox: '0 0 25 42',
                        version: '1.1',
                        xmlns: 'http://www.w3.org/2000/svg',
                        'xmlns:xlink': 'http://www.w3.org/1999/xlink',
                      },
                      DEFS(
                        {},
                        PATH({
                          d: 'M13.7918663,0.358365126 L3.39788168,7.44174259 C0.566865006,9.69408886 -0.379795268,12.4788597 0.557900856,15.7960551 C0.68998853,16.2305145 1.09562888,17.7872135 3.12357076,19.2293357 C3.8146334,19.7207684 5.32369333,20.3834223 7.65075054,21.2172976 L7.59773219,21.2525164 L2.63468769,24.5493413 C0.445452254,26.3002124 0.0884951797,28.5083815 1.56381646,31.1738486 C2.83770406,32.8170431 5.20850219,33.2640127 7.09180128,32.5391577 C8.347334,32.0559211 11.4559176,30.0011079 16.4175519,26.3747182 C18.0338572,24.4997857 18.6973423,22.4544883 18.4080071,20.2388261 C17.963753,17.5346866 16.1776345,15.5799961 13.0496516,14.3747546 L10.9194936,13.4715819 L18.6192054,7.984237 L13.7918663,0.358365126 Z',
                          id: 'path-1',
                        }),
                        PATH({
                          d: 'M5.47320593,6.00457225 C4.05321814,8.216144 4.36334763,10.0722806 6.40359441,11.5729822 C8.61520715,12.571656 10.0999176,13.2171421 10.8577257,13.5094407 L15.5088241,14.433041 L18.6192054,7.984237 C15.5364148,3.11535317 13.9273018,0.573395879 13.7918663,0.358365126 C13.5790555,0.511491653 10.8061687,2.3935607 5.47320593,6.00457225 Z',
                          id: 'path-3',
                        }),
                        PATH({
                          d: 'M7.50063644,21.2294429 L12.3234468,23.3159332 C14.1688022,24.7579751 14.397098,26.4880487 13.008334,28.506154 C11.6195701,30.5242593 10.3099883,31.790241 9.07958868,32.3040991 C5.78142938,33.4346997 4.13234973,34 4.13234973,34 C4.13234973,34 2.75489982,33.0538207 2.37032616e-14,31.1614621 C-0.55822714,27.8186216 -0.55822714,26.0572515 -4.05231404e-15,25.8773518 C0.83734071,25.6075023 2.77988457,22.8248993 3.3049379,22.52991 C3.65497346,22.3332504 5.05353963,21.8997614 7.50063644,21.2294429 Z',
                          id: 'path-4',
                        }),
                        PATH({
                          d: 'M20.6,7.13333333 L25.6,13.8 C26.2627417,14.6836556 26.0836556,15.9372583 25.2,16.6 C24.8538077,16.8596443 24.4327404,17 24,17 L14,17 C12.8954305,17 12,16.1045695 12,15 C12,14.5672596 12.1403557,14.1461923 12.4,13.8 L17.4,7.13333333 C18.0627417,6.24967773 19.3163444,6.07059163 20.2,6.73333333 C20.3516113,6.84704183 20.4862915,6.981722 20.6,7.13333333 Z',
                          id: 'path-5',
                        }),
                      ),
                      G(
                        {
                          id: 'g-app-brand',
                          stroke: 'none',
                          'stroke-width': '1',
                          fill: 'none',
                          'fill-rule': 'evenodd',
                        },
                        G(
                          { id: 'Brand-Logo', transform: 'translate(-27.000000, -15.000000)' },
                          G(
                            { id: 'Icon', transform: 'translate(27.000000, 15.000000)' },
                            G(
                              { id: 'Mask', transform: 'translate(0.000000, 8.000000)' },
                              MASK({ id: 'mask-2', fill: 'white' }, USE({ 'xlink:href': '#path-1' })),
                              USE({ fill: '#696cff', 'xlink:href': '#path-1' }),
                              G(
                                { id: 'Path-3', mask: 'url(#mask-2)' },
                                USE({ fill: '#696cff', 'xlink:href': '#path-3' }),
                                USE({ 'fill-opacity': '0.2', fill: '#FFFFFF', 'xlink:href': '#path-3' }),
                              ),
                              G(
                                { id: 'Path-4', mask: 'url(#mask-2)' },
                                USE({ fill: '#696cff', 'xlink:href': '#path-4' }),
                                USE({ 'fill-opacity': '0.2', fill: '#FFFFFF', 'xlink:href': '#path-4' }),
                              ),
                            ),
                            G(
                              {
                                id: 'Triangle',
                                transform:
                                  'translate(19.000000, 11.000000) rotate(-300.000000) translate(-19.000000, -11.000000) ',
                              },
                              USE({ fill: '#696cff', 'xlink:href': '#path-5' }),
                              USE({ 'fill-opacity': '0.2', fill: '#FFFFFF', 'xlink:href': '#path-5' }),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                  SPAN(
                    { class: 'app-brand-text demo text-body fw-bolder' },
                    SPAN({
                      text: 'ИнертТокен',
                      class: `css
                    text-transform: none;
                  `,
                    }),
                  ),
                ),
              ),
              H4({ class: 'mb-2' }, SPAN({ text: 'Добро пожаловать на платформу ИнертТокен!' })),
              P({ class: 'mb-4' }, SPAN({ text: 'Пожалуйста, введите свои учетные данные, чтобы войти в систему' })),
              FORM(
                {
                  id: 'formAuthentication',
                  class: 'mb-3 fv-plugins-bootstrap5 fv-plugins-framework',
                  action: 'index.html',
                  method: 'POST',
                  novalidate: 'novalidate',
                },
                DIV(
                  { class: 'mb-3 fv-plugins-icon-container' },
                  LABEL({ for: 'email', class: 'form-label' }, SPAN({ text: 'Логин' })),
                  INPUT({
                    type: 'text',
                    class: 'form-control',
                    id: 'email',
                    name: 'email-username',
                    placeholder: 'Введите ваш логин',
                    autofocus: '',
                  }),
                  DIV({ class: 'fv-plugins-message-container invalid-feedback' }),
                ),
                DIV(
                  { class: 'mb-3 form-password-toggle fv-plugins-icon-container' },
                  DIV(
                    { class: 'd-flex justify-content-between' },
                    LABEL({ class: 'form-label', for: 'password' }, SPAN({ text: 'Пароль' })),
                    A(
                      { href: 'auth-forgot-password-basic.html', class: 'disabled' },
                      SMALL({}, SPAN({ text: 'Забыли пароль?' })),
                    ),
                  ),
                  DIV(
                    { class: 'input-group input-group-merge has-validation' },
                    INPUT({
                      type: 'password',
                      id: 'password',
                      class: 'form-control',
                      name: 'password',
                      placeholder: '············',
                      'aria-describedby': 'password',
                    }),
                    SPAN({ class: 'input-group-text cursor-pointer' }, I({ class: 'bx bx-hide' })),
                  ),
                  DIV({ class: 'fv-plugins-message-container invalid-feedback' }),
                ),
                DIV(
                  { class: 'mb-3' },
                  DIV(
                    { class: 'form-check' },
                    INPUT({ class: 'form-check-input', type: 'checkbox', id: 'remember-me' }),
                    LABEL({ class: 'form-check-label', for: 'remember-me' }, SPAN({ text: 'Запомнить меня' })),
                  ),
                ),
                DIV(
                  { class: 'mb-3' },
                  //BUTTON({ class: 'btn btn-primary d-grid w-100', type: 'submit' }, SPAN({ text: 'Sign in' })),
                  FIELD({
                    label: 'Войти в систему',
                    name: 'register',
                    type: 'button',
                    class: 'btn btn-primary btn-hover w-100',
                    on: {
                      click: async (event) => {
                        const data = Array.from(event.target.closest('form').querySelectorAll('input')).reduce(
                          (obj, { name, value, type, checked }) => {
                            obj[name] = type === 'checkbox' ? checked : value;
                            return obj;
                          },
                          {},
                        );
                        const res = await api.auth.signin({ login: data['email-username'], password: data.password });
                        if (res.token) {
                          localStorage.setItem('xaoc.session.token', res.token);
                        }
                        document.cookie = `token=${localStorage.getItem('xaoc.session.token')}`;
                        if (res.status === 'logged') location.href = '/core.html';
                      },
                    },
                  }),
                ),
                INPUT({ type: 'hidden' }),
              ),
              P(
                { class: 'text-center' },
                SPAN({}, SPAN({ text: 'Впервые на платформе?' })),
                A(
                  { href: `/index.html#${JSON.stringify({ form: `core/web~register` })}`, class: 'ms-2' },
                  SPAN({}, SPAN({ text: 'Создать аккаунт' })),
                ),
              ),
              // DIV({ class: 'divider my-4' }, DIV({ class: 'divider-text' }, SPAN({ text: 'or' }))),
              // DIV(
              //   { class: 'd-flex justify-content-center' },
              //   A(
              //     { href: 'javascript:;', class: 'btn btn-icon btn-label-facebook me-3' },
              //     I({ class: 'tf-icons bx bxl-facebook' }),
              //   ),
              //   A(
              //     { href: 'javascript:;', class: 'btn btn-icon btn-label-google-plus me-3' },
              //     I({ class: 'tf-icons bx bxl-google-plus' }),
              //   ),
              //   A(
              //     { href: 'javascript:;', class: 'btn btn-icon btn-label-twitter' },
              //     I({ class: 'tf-icons bx bxl-twitter' }),
              //   ),
              // ),
            ),
          ),
        ),
      ),
    ),
  ],
  func: () => {},
  style: `
    .layout-menu-fixed .layout-navbar-full .layout-menu,
    .layout-menu-fixed-offcanvas .layout-navbar-full .layout-menu {
      top: 0px !important;
    }
    .layout-page {
      padding-top: 0px !important;
    }
    .content-wrapper {
      padding-bottom: 0px !important;
    }

    #template-customizer {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
      font-size: inherit !important;
      position: fixed;
      top: 0;
      right: 0;
      height: 100%;
      z-index: 99999999;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      width: 360px;
      background: #fff;
      -webkit-box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
      -webkit-transition: all 0.2s ease-in;
      -o-transition: all 0.2s ease-in;
      transition: all 0.2s ease-in;
      -webkit-transform: translateX(380px);
      -ms-transform: translateX(380px);
      transform: translateX(380px);
    }
    #template-customizer h5 {
      position: relative;
      font-size: 11px;
      font-weight: 600;
    }
    #template-customizer > h5 {
      flex: 0 0 auto;
    }
    #template-customizer .disabled {
      color: #d1d2d3 !important;
    }
    #template-customizer.template-customizer-open {
      -webkit-transition-delay: 0.1s;
      -o-transition-delay: 0.1s;
      transition-delay: 0.1s;
      -webkit-transform: none !important;
      -ms-transform: none !important;
      transform: none !important;
    }
    #template-customizer .template-customizer-open-btn {
      position: absolute;
      top: 180px;
      left: 0;
      z-index: -1;
      display: block;
      width: 42px;
      height: 42px;
      border-top-left-radius: 15%;
      border-bottom-left-radius: 15%;
      background: #333;
      color: #fff !important;
      text-align: center;
      font-size: 18px !important;
      line-height: 42px;
      opacity: 1;
      -webkit-transition: all 0.1s linear 0.2s;
      -o-transition: all 0.1s linear 0.2s;
      transition: all 0.1s linear 0.2s;
      -webkit-transform: translateX(-62px);
      -ms-transform: translateX(-62px);
      transform: translateX(-62px);
    }
    @media (max-width: 991.98px) {
      #template-customizer .template-customizer-open-btn {
        top: 145px;
      }
    }
    .dark-style #template-customizer .template-customizer-open-btn {
      background: #555;
    }
    #template-customizer .template-customizer-open-btn::before {
      content: "";
      width: 22px;
      height: 22px;
      display: block;
      background-size: 100% 100%;
      position: absolute;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABClJREFUaEPtmY1RFEEQhbsjUCIQIhAiUCNQIxAiECIQIxAiECIAIpAMhAiECIQI2vquZqnZvp6fhb3SK5mqq6Ju92b69bzXf6is+dI1t1+eAfztG5z1BsxsU0S+ici2iPB3vm5E5EpEDlSVv2dZswFIxv8UkZcNy+5EZGcuEHMCOBeR951uvVDVD53vVl+bE8DvDu8Pxtyo6ta/BsByg1R15Bwzqz5/LJgn34CZwfnPInI4BUB6/1hV0cSjVxcAM4PbcBZjL0XklIPN7Is3fLCkdQPpPYw/VNXj5IhPIvJWRIhSl6p60ULWBGBm30Vk123EwRxCuIzWkkjNrCZywith10ewE1Xdq4GoAjCz/RTXW44Ynt+LyBEfT43kYfbj86J3w5Q32DNcRQDpwF+dkQXDMey8xem0L3TEqB4g3PZWad8agBMRgZPeu96D1/C2Zbh3X0p80Op1xxloztN48bMQQNoc7+eLEuAoPSPiIDY4Ooo+E6ixeNXM+D3GERz2U3CIqMstLJUgJQDe+7eq6mub0NYEkLAKwEHkiBQDCZtddZCZ8d6r7JDwFkoARklHRPZUFVDVZWbwGuNrC4EfdOzFrRABh3Wnqhv+d70AEBLGFROPmeHlnM81G69UdSd6IUuM0GgUVn1uqWmg5EmMfBeEyB7Pe3txBkY+rGT8j0J+WXq/BgDkUCaqLgEAnwcRog0veMIqFAAwCy2wnw+bI2GaGboBgF9k5N0o0rUSGUb4eO0BeO9j/GYhkSHMHMTIqwGARX6p6a+nlPBl8kZuXMD9j6pKfF9aZuaFOdJCEL5D4eYb9wCYVCanrBmGyii/tIq+SLj/HQBCaM5bLzwfPqdQ6FpVHyra4IbuVbXaY7dETC2ESPNNWiIOi69CcdgSMXsh4tNSUiklMgwmC0aNd08Y5WAES6HHehM4gu97wyhBgWpgqXsrASglprDy7CwhehMZOSbK6JMSma+Fio1KltCmlBIj7gfZOGx8ppQSXrhzFnOhJ/31BDkjFHRvOd09x0mRBA9SFgxUgHpQg0q0t5ymPMlL+EnldFTfDA0NAmf+OTQ0X0sRouf7NNkYGhrOYNrxtIaGg83MNzVDSe3LXLhP7O/yrCsCz1zlWTpjWkuZAOBpX3yVnLqI1yLCOKU6qMrmP7SSrUEw54XF4WBIK5FxCMOr3lVsfGqNSmPzBXUnJTIX1jyVBq9wO6UObOpgC5GjO98vFKnTdQMZXxEsWZlDiCZMIxAbNxQOqlpVZtobejBaZNoBnRDzMFpkxvTQOD36BlrcySZuI6p1ACB6LU3wWuf5581+oHfD1vi89bz3nFUC8Nm7ZlP3nKkFbM4bWPt/MSFwklprYItwt6cmvpWJ2IVcQBCz6bLysSCv3SaANCiTsnaNRrNRqMXVVT1/BrAqz/buu/Y38Ad3KC5PARej0QAAAABJRU5ErkJggg==);
      margin: 10px;
    }
    .customizer-hide #template-customizer .template-customizer-open-btn {
      display: none;
    }
    [dir="rtl"] #template-customizer .template-customizer-open-btn {
      border-radius: 0;
      border-top-right-radius: 15%;
      border-bottom-right-radius: 15%;
    }
    [dir="rtl"] #template-customizer .template-customizer-open-btn::before {
      margin-left: -2px;
    }
    #template-customizer.template-customizer-open .template-customizer-open-btn {
      opacity: 0;
      -webkit-transition-delay: 0s;
      -o-transition-delay: 0s;
      transition-delay: 0s;
      -webkit-transform: none !important;
      -ms-transform: none !important;
      transform: none !important;
    }
    #template-customizer .template-customizer-close-btn {
      position: absolute;
      top: 32px;
      right: 0;
      display: block;
      font-size: 20px;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    #template-customizer .template-customizer-inner {
      position: relative;
      overflow: auto;
      -webkit-box-flex: 0;
      -ms-flex: 0 1 auto;
      flex: 0 1 auto;
      opacity: 1;
      -webkit-transition: opacity 0.2s;
      -o-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }
    #template-customizer .template-customizer-inner > div:first-child > hr:first-of-type {
      display: none !important;
    }
    #template-customizer .template-customizer-inner > div:first-child > h5:first-of-type {
      padding-top: 0 !important;
    }
    #template-customizer .template-customizer-themes-inner {
      position: relative;
      opacity: 1;
      -webkit-transition: opacity 0.2s;
      -o-transition: opacity 0.2s;
      transition: opacity 0.2s;
    }
    #template-customizer .template-customizer-theme-item {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -ms-flex-align: center;
      -webkit-box-flex: 1;
      -ms-flex: 1 1 100%;
      flex: 1 1 100%;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 0 24px;
      width: 100%;
      cursor: pointer;
    }
    #template-customizer .template-customizer-theme-item input {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    #template-customizer .template-customizer-theme-item input ~ span {
      opacity: 0.25;
      -webkit-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;
    }
    #template-customizer .template-customizer-theme-item .template-customizer-theme-checkmark {
      display: inline-block;
      width: 6px;
      height: 12px;
      border-right: 1px solid;
      border-bottom: 1px solid;
      opacity: 0;
      -webkit-transition: all 0.2s;
      -o-transition: all 0.2s;
      transition: all 0.2s;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    [dir="rtl"] #template-customizer .template-customizer-theme-item .template-customizer-theme-checkmark {
      border-right: none;
      border-left: 1px solid;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }
    #template-customizer .template-customizer-theme-item input:checked:not([disabled]) ~ span,
    #template-customizer .template-customizer-theme-item:hover input:not([disabled]) ~ span {
      opacity: 1;
    }
    #template-customizer
      .template-customizer-theme-item
      input:checked:not([disabled])
      ~ span
      .template-customizer-theme-checkmark {
      opacity: 1;
    }
    #template-customizer .template-customizer-theme-colors span {
      display: block;
      margin: 0 1px;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      -webkit-box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1) inset;
    }
    #template-customizer.template-customizer-loading .template-customizer-inner,
    #template-customizer.template-customizer-loading-theme .template-customizer-themes-inner {
      opacity: 0.2;
    }
    #template-customizer.template-customizer-loading .template-customizer-inner::after,
    #template-customizer.template-customizer-loading-theme .template-customizer-themes-inner::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 999;
      display: block;
    }
    .layout-menu-100vh #template-customizer {
      height: 100vh;
    }
    [dir="rtl"] #template-customizer {
      right: auto;
      left: 0;
      -webkit-transform: translateX(-380px);
      -ms-transform: translateX(-380px);
      transform: translateX(-380px);
    }
    [dir="rtl"] #template-customizer .template-customizer-open-btn {
      right: 0;
      left: auto;
      -webkit-transform: translateX(62px);
      -ms-transform: translateX(62px);
      transform: translateX(62px);
    }
    [dir="rtl"] #template-customizer .template-customizer-close-btn {
      right: auto;
      left: 0;
    }
    #template-customizer .template-customizer-layouts-options[disabled] {
      opacity: 0.5;
      pointer-events: none;
    }
    [dir="rtl"] .template-customizer-t-style_switch_light {
      padding-right: 0 !important;
    }
  `,
});
