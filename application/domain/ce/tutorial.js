[
  {
    v: 'fake',
    l: 'fake',
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
