({
  tpl: ({ data }, { name = '', items }) => [
    DIV(
      { class: 'nav-align-top mb-4' },
      UL(
        { class: 'nav nav-pills mb-3', role: 'tablist' },
        ...items.map(({ button }, index) => [
          LI(
            { class: 'nav-item', role: 'presentation' },
            BUTTON(
              {
                type: 'button',
                class: 'nav-link ' + (index === 0 ? 'active' : ''),
                role: 'tab',
                'data-bs-toggle': 'tab',
                'data-bs-target': '#navs-pills-' + name + index,
              },
              button.icon ? I({ class: button.icon }) : [],
              SPAN({ text: button.text || 'tab' + index }),
            ),
          ),
        ]),
      ),
      DIV(
        { class: 'tab-content' },
        ...items.map(({ content }, index) => [
          DIV(
            {
              class: 'tab-pane fade ' + (index === 0 ? 'show active' : ''),
              id: 'navs-pills-' + name + index,
              role: 'tabpanel',
            },
            ...content,
          ),
        ]),
      ),
    ),
  ],
});
