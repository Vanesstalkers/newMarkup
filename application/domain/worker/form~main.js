({
  col: 'worker',
  id: function ({ user, query }) {
    return query._id ? [this.db.mongo.ObjectID(query._id)] : [];
  },
  item: { controls: { reload: true, config: { simple: true } } },
  tpl: ({ data }) => [
    DIV(
      { class: 'row' },
      DIV(
        { class: 'col-12 col-lg-6' },
        HTML('core/default~card', {
          title: 'Информация',
          html: [
            DIV(
              { class: 'row' },
              DIV({ class: 'col-3' }, FIELD({ name: 'code', label: 'Внутренний код' })),
              DIV({ class: 'col-5' }, FIELD({ name: 'position', label: 'Должность' })),
              DIV(
                { class: 'col-4' },
                FIELD({ name: 'type', type: 'select', lst: 'worker~type', label: 'Тип должности' }),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV({ class: 'col-4' }, FIELD({ name: 'proxy.num', type: 'input', label: 'Доверенность №' })),
              DIV(
                { class: 'col-3' },
                FIELD({ name: 'proxy.from', type: 'input', label: 'выдана с', config: { mask: '00.00.0000' } }),
              ),
              DIV(
                { class: 'col-3' },
                FIELD({ name: 'proxy.to', type: 'input', label: 'по', config: { mask: '00.00.0000' } }),
              ),
            ),
            DIV(
              { class: 'row' },
              DIV(
                { class: 'col-12' },
                COMPLEX(
                  {
                    name: 'pp_info',
                    col: 'pp',
                    links: { 'worker~main': '__pp' },
                    add: false,
                    config: { disableCardView: true },
                  },
                  ({ data }) => [HTML('pp~info')],
                ),
              ),
            ),
          ],
        }),
      ),
      DIV({ class: 'col-12 col-lg-6' }, HTML('core/default~card', { title: 'Доступы к системе', html: [] })),
    ),
  ],
  func: () => {},
  style: `
  `,
});

// exports.access = (__, data, callback)=>SYS.requireFile('func', 'user~access').f(__, {
// 	allow: ['worker']
// }, callback);

// exports.id = (__, code, callback)=>{
// 	__.fields[code].col = 'worker';
// 	__.queryIds[code] = (__.user.query && __.user.query.filter && __.user.query.filter.id) ? [__.user.query.filter.id] : [];
// 	callback();
// }

// exports.tpl = (_, d)=>{ return [

// 	_.html('__tpl~form', _, d, { content: (_, d)=>
// 	[

// 		["div",{"class": "row"},[
// 			["div",{"class": "col-xs-6"},[
// 				["div",{"class": "ibox float-e-margins"},[
// 					["div",{"class": "ibox-title"},[
// 						["h5",{},[
// 							["span",{"text": "Информация"}]
// 						]],
// 						_.if(_.editMode, ()=>[
// 							["div",{class: `css
// 								position: absolute;
// 								right: 30px;
// 							`},[
// 								_.f({name: 'delete_time', type: 'check_btn', value: '', label: 'Уволен', config: {saveTime: true}, process: {
// 									save: (conn, field, parent, saveData, callback)=>{ // включаем/выключаем user
// 										async.waterfall([(cb)=>{
// 											conn.db
// 												.collection('worker')
// 												.findOne(ObjectId(parent._id), {__pp: 1}, (err, worker)=>{
// 													if(SYS.get(worker, '__pp.l[0]')){
// 														conn.db
// 															.collection('pp')
// 															.findOne(ObjectId(SYS.get(worker, '__pp.l[0]')), {__user: 1}, (err, pp)=>{
// 																if(SYS.get(pp, '__user.l[0]')){
// 																	DB.saveField(conn, {name: 'delete_time'}, {col: 'user', _id: SYS.get(pp, '__user.l[0]')}, {value: saveData.value}, cb);
// 																}else{ cb() }
// 															});
// 													}else{ cb() }
// 												});
// 										}], ()=>{
// 											DB.saveField(conn, field, parent, saveData, callback);
// 										});
// 									},
// 								}, front: {
// 									afterSave: (e, d)=>{
// 										reloadComplex($('#formContent .complex-pp_user'));
// 									}
// 								}}),
// 							]],
// 						]),
// 					]],
// 					["div",{"class": "ibox-content"},[
// 						["div",{"class": "row"},[
// 							["div",{"class": "col-xs-3"},[
// 								_.f({name: 'code', type: 'text-', label: 'Внутренний код'}),
// 							]],
// 							["div",{"class": "col-xs-5"},[
// 								_.f({name: 'position', type: 'input-', label: 'Должность'}),
// 							]],
// 							["div",{"class": "col-xs-4"},[
// 								_.f({name: 'type', type: 'select-', lst: 'worker~type', label: 'Тип должности'}),
// 							]],
// 						]],
// 						["div",{"class": "row"},[
// 							["div",{"class": "col-xs-4"},[
// 								_.f({name: 'proxy.num', type: 'input-', label: 'Доверенность №'}),
// 							]],
// 							["div",{"class": "col-xs-3"},[
// 								_.f({name: 'proxy.from', type: 'input-', label: 'выдана с', config: {
// 									mask: '00.00.0000',
// 								}}),
// 							]],
// 							["div",{"class": "col-xs-3"},[
// 								_.f({name: 'proxy.to', type: 'input-', label: 'по', config: {
// 									mask: '00.00.0000',
// 								}}),
// 							]],
// 						]],
// 						["div",{"class": "row"},[
// 							["div",{"class": "col-xs-12"},[
// 								_.c({name: 'pp_info', col: 'pp', link: ['__pp'], add: false, process: {
// 									tpl: (_, d)=>[
// 										_.html('pp~info', _, d),
// 									],
// 								}}),
// 							]],
// 						]],
// 					]]
// 				]]
// 			]],
// 			["div",{"class": "col-xs-6"},[
// 				["div",{"class": "row"},[

// 					_.if(_.__.user.access.admin || _.__.user.access.user, ()=>[
// 						["div",{"class": "col-xs-12"},[
// 							["div",{"class": "ibox float-e-margins"},[
// 								["div",{"class": "ibox-title"},[
// 									["h5",{},[
// 										["span",{"text": "Доступы к системе"}]
// 									]]
// 								]],
// 								["div",{"class": "ibox-content"},[
// 									_.c({name: 'pp_user', col: 'pp', link: ['__pp'], add: false, process: {
// 										tpl: (_, d)=>[
// 											_.html('pp~user', _, d),
// 										],
// 									}}),
// 								]],
// 							]],
// 						]],
// 					]),
// 					["div",{"class": "col-xs-12"},[
// 						["div",{"class": "ibox float-e-margins"},[
// 							["div",{"class": "ibox-title"},[
// 								["h5",{},[
// 									["span",{"text": "График работы"}]
// 								]]
// 							]],
// 							["div",{"class": "ibox-content"},[
// 								["div",{"class": "row"},[
// 									["div",{"class": "col-xs-6"},[
// 										_.f({name: 'workday', label: 'Вид графика работы', type: 'select-', lst: 'worker~workday', value: ''}),
// 									]],
// 									["div",{"class": "col-xs-6"},[
// 										_.f({name: 'workdayStart', label: 'Первый рабочий день', type: 'date', value: ''}),
// 									]],
// 								]],
// 							]],
// 						]],
// 					]],
// 				]],
// 			]]
// 		]],
// 	]}),
// ]}

// exports.func = ()=>{

// }

// exports.script = ()=>{

// 	window.updateMenuCustom = function (info)
// 	{

// 		let $nameField = $("#formContent .el-second_name .el-value, #formContent .el-first_name .el-value");

// 		window.breadcrumb.push({
// 			text: 'Сотрудник '+($nameField.text() || $nameField.val())+' '+($nameField.text() || $nameField.val()),
// 			query: history.state.subform, active: true,
// 		});
// 	};
// }

// exports.style = ()=>{/*

// */}
