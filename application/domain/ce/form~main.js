({
  config: {
    menu: {
      label: 'Форма компании',
      icon: 'bx bx-building',
    },
  },
  item: { controls: { reload: true, config: { simple: true } } },
  col: 'ce',
  id: function ({ user, query }) {
    if (!query._id) query._id = '63c69b477562e67ed0f515d3';
    return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
  },
  tpl: () => [
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Контакты',
          html: [
            HTML('core/default~phones', {
              name: 'ce_phone',
              links: { ce_phone: { 'ce~main': '__ce' }, 'ce~main': '__phone' },
            }),
            HTML('core/default~emails', {
              name: 'ce_email',
              links: { ce_email: { 'ce~main': '__ce' }, 'ce~main': '__email' },
            }),
            HTML('core/default~card', {
              title: 'Реквизиты',
              html: [HTML('ce~info')],
            }),
          ],
        }),
      ),
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Сотрудники',
          html: [HTML('worker~table', { hideFilters: false })],
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
