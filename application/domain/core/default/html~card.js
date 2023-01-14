({
  tpl: ({ data }, { title, hide, html }) => [
    DIV(
      { class: 'card card-action mb-4' },
      DIV(
        { class: 'card-header ' + (hide ? 'collapsed' : '') },
        DIV({ class: 'card-action-title' }, SPAN({ text: title || '' })),
        DIV(
          { class: 'card-action-element' },
          UL(
            { class: 'list-inline mb-0' },
            LI(
              { class: 'list-inline-item' },
              A(
                { href: 'javascript:void(0);', class: 'card-collapsible', on: { load: 'prepareCollapsableCard' } },
                I({ class: 'tf-icons bx ' + (hide ? 'bx-chevron-up' : 'bx-chevron-down') }),
              ),
            ),
          ),
        ),
      ),
      DIV({ class: 'collapse ' + (hide ? '' : 'show'), style: '' }, DIV({ class: 'card-body pt-0' }, html)),
    ),
  ],
  func: () => {
    window.prepareCollapsableCard = function (el) {
      el.addEventListener('click', async (event) => {
        event.preventDefault();
        new bootstrap.Collapse(el.closest('.card').querySelector('.collapse'));
        el.closest('.card-header').classList.toggle('collapsed');
        Helpers._toggleClass(el.firstElementChild, 'bx-chevron-down', 'bx-chevron-up');
      });
    };
  },
});
