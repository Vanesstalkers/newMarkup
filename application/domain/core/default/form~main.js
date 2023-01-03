({
  tpl: () => [
    // var userLST = SYS.get(LST, 'user~roles.list.obj.'+_.__.user.role) || {};

    // _.__.global.baseForm = userLST.baseForm || 'client~list';

    // ['style', {src:'XAOC/bootstrap/bootstrap.min.css'}],
    // ['style', {src:'https://use.fontawesome.com/releases/v5.1.0/css/all.css', integrity:"sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt",crossorigin:"anonymous"}],
    // ['style', {src:'blocks/__tpl/theme_inspinia/static/build.css'}],

    // ['script', {src:'blocks/__tpl/theme_inspinia/static/js/plugins/metisMenu/jquery.metisMenu.js'}],
    // ['script', {src:'blocks/__tpl/theme_inspinia/static/js/plugins/slimscroll/jquery.slimscroll.min.js'}],
    // ['script', {src:'XAOC/notify/notify.min.js'}],

    DIV(
      { id: 'wrapper' },
      // _.html('__tpl~sidebar', _, {}),

      DIV(
        { id: 'page-wrapper', class: 'gray-bg' },
        DIV({ class: 'row border-bottom' }, [
          // _.html('__tpl~navbar', _, {}),
        ]),

        DIV(
          { class: 'row wrapper border-bottom white-bg page-heading' },
          DIV({ class: 'col-lg-10' }, H2({ text: '' }), OL({ class: 'breadcrumb' })),
        ),

        DIV({id: 'formContent'/* , class: 'role-'+_.__.user.role+' wrapper wrapper-content animated fadeIn' */},
          FORM({name: 'ce~main' /* SYS.get(_.__, 'user.query.subform.form') || _.__.global.baseForm */}),
        ),

        // _.html('__tpl~footer', _, {}),
      ),
    ),

    // _.if(userLST.tutorial !== false, ()=>['div', {id: 'subFormTutorial'}, [
    //   _.form({name: 'tutorial~main', history: false }),
    // ]]),
  ],
  func: () => {
    // window.notify = function(msg = {}, $target = []){
    //   if($.notify)
    //   {
    //     if($target.length){
    //       $target.notify(msg.err, Object.assign({position: $target.attr('notifyPosition')}, msg.notify || {className: 'error'}));
    //     }else{
    //       $.notify(msg.err, msg.notify || {className: 'error'});
    //     }
    //   }
    // }
  },
  style: `
    .body {
      display: 1px solid black;
    }
    .inline-error:before {
      content: attr(error);
      font-size: 10px;
      color: red;
      text-overflow: ellipsis;
    }
  `,
});
