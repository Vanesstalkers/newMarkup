({
  config: {
    menu: {
      label: 'Форма компании',
      icon: 'bx bx-building',
    },
  },
  item: { controls: { reload: true, config: { simple: true } } },
  //   col: 'ce',
  col: 'user',
  id: function ({ user, query }) {
    // return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
    return [this.db.mongo.ObjectID(user._id)];
  },
  tpl: () => [
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-xs-4' },
        HTML('core/default~card', {
          title: 'Контакты',
          html: [
            HTML('core/default~phones', {
              name: 'user_phone',
              links: { user_phone: { 'ce~main': '__user' }, 'ce~main': '__phone' },
            }),
            HTML('core/default~emails', {
              name: 'user_email',
              links: { user_email: { 'ce~main': '__user' }, 'ce~main': '__email' },
            }),
            HTML('core/default~card', {
              title: 'Реквизиты',
              html: [HTML('ce~info')],
            }),
          ],
        }),
      ),
    ),
  ],
});
/* 
exports.access = (__, data, callback)=>SYS.requireFile('func', 'user~access').f(__, {
	allow: ['ce']
}, callback);
*/
// exports.tpl = (_, d) => {
//   return [
//     DIV(
//       { class: 'row' },
//       DIV(
//         { class: 'col-xs-4' },
//         HTML('code/default~card', { title: 'Контакты', html: [DIV({ text: 123 })] }),
//         // _.html('__tpl~ibox', _, d, {
//         //   title: 'Контакты',
//         //   titleClass: 'contacts-block',
//         //   content: (_, d) => [
//         // _.html('__tpl~phone_block', _, d, { c: { name: 'ce_phone', sub: true, config: { bClass: 'col-xs-6' } } }),
//         // _.html('__tpl~email_block', _, d, { c: { name: 'ce_email', sub: true, config: { bClass: 'col-xs-6' } } }),

//         // !!! надо добавить правильные links к phone и email (сейчас не работает как нужно)
//         // links: {
//         // ce_email: {ce: '__ce'},
//         // ce: '__email',
//         // },
//         //   ],
//         // }),
//         // _.html('__tpl~ibox', _, d, { title: 'Реквизиты', content: (_, d) => [_.html('ce~info', _, d)] }),
//       ),
//       /* ["div",{"class": "col-xs-8"},[
// 				["div",{"class": "row"},[
// 					["div",{"class": "col-xs-12"},[
// 						_.html('__tpl~ibox', _, d, {title: 'Контактные лица и сотрудники', content: (_,d)=>
// 						[
// 							["div",{class:`css
// 								.*css* .bPageFilters {
// 									margin-top: -40px;
// 									margin-right: 20px;
// 								}
// 							`},[
// 								_.html('worker~table', _, d, {filter: {}}),
// 							]]
// 						]}),
// 					]],
// 					["div",{"class": "col-xs-12"},[
// 						_.c({name: 'client', add: false, process: {
// 							tpl: (_, d)=>[
// 								_.html('__tpl~ibox', _, d, {title: 'Анкеты клиента', hide: true, content: (_,d)=>
// 								[
// 									_.html('app~list', _, d, {parent: _.__.pre || d._id}),
// 								]}),
// 							],
// 						}}),
// 					]],
// 				]],
// 			]] */
//     ),
//   ];
// };
/*
exports.func = ()=>{

}

exports.script = ()=>{

	window.updateMenuCustom = function (info)
	{
		if (!window.breadcrumb.length)
			window.breadcrumb.push({text: "Юридические лица", query: { form: "ce~list", container: "formContent" } });

		let $nameField = $("#formContent .el-name:not(.no-breadcrumb) .el-value");
		
		window.breadcrumb.push({
			text: $nameField.text() || $nameField.val(),
			query: history.state.subform, active: true,
		});
	};
} */
