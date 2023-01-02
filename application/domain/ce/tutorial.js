[
  {
    v: 'fake1',
    l: 'fake111',
  },{
    v: 'fake2',
    l: 'fake222',
  },{
    v: 'fake',
    l: 'fake333',
    action: function (callback) {
      waitForLoadElementByCode[$('#formContent').attr('code')] = function () {
        callback();
      };
      $('#side-menu li[form="ce~list"] > a').trigger('click');
    },
    text: [
      {
        active: '#formContent .print-block .ibox-title',
        t: 'Это обучение будет доступно позже...',
        controls: {
          exit: {
            t: 'Спасибо',
            f: function () {
              window.setTutorialComplete({ endTutorial: true });
            },
          },
        },
      },
    ],
    position: 'bottomRight',
  },
];
