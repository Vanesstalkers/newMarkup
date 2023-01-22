({
  config: { disableCardStyle: true },
  col: 'user',
  id: function ({ user, query }) {
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: () => {
    return [
      DIV(
        { class: 'layout-wrapper layout-content-navbar' },
        DIV(
          { class: 'layout-container' },
          HTML('core/default~sidebar'),
          DIV(
            { class: 'layout-page' },
            HTML('core/default~header'),
            DIV(
              { class: 'content-wrapper' },
              DIV({
                class: 'container-xxl flex-grow-1 container-p-y',
                id: 'formContent',
                on: { load: ['initForm', user.current.baseForm] },
              }),

              HTML('core/default~footer'),
              DIV({ class: 'content-backdrop fade' }),
            ),
          ),
        ),
        DIV({ class: 'layout-overlay layout-menu-toggle' }),
        DIV({ class: 'drag-target' }),
      ),

      // _.if(userRoleConfig.tutorial !== false, ()=>['div', {id: 'subFormTutorial'}, [
      //   _.form({name: 'tutorial~main', history: false }),
      // ]]),
    ];
  },
  on: {
    load: (el) => {
      window.loadRes('theme/sneat/main.js');
    },
    itemLoad: () => {},
  },
  func: () => {
    window.initForm = function ($el, form) {
      showForm(location.hash ? JSON.parse(decodeURI(location.hash.substring(1))) : { form, container: $el });
    };
  },
});
