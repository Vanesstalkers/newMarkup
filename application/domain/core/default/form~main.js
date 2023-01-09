({
  col: 'user',
  id: ({ user }) => [user._id],
  tpl: () => {
    const userRoleConfig = domain.user['lst~roles'].find(({ v }) => v === user.current.role) || {};
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
              DIV({ class: 'container-xxl flex-grow-1 container-p-y', id: 'formContent' }),
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
});
