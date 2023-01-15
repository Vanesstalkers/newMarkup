({
  tpl: ({ data }, { hideFilters } = {}) => [
    HTML('core/default~table', {
      col: 'worker',
      filter: {
        items: hideFilters
          ? []
          : [
              {
                class: 'col-3 col-sm-6',
                f: { label: 'Должность', name: 'find_type', type: 'select', lst: 'worker~type' },
              },
              { class: 'col-3 col-sm-6', f: { label: 'Имя/Фамилия', name: 'find_text' } },
              { class: 'col-3 col-sm-6', f: { name: 'is_delete', type: 'check+', label: 'Показывать\x0aуволенных' } },
            ],
      },
      table: {
        id: async ({ user, complex, query = {} }) => {
          const find = {};
          if (query['filter.find_text']) find.second_name = { $regex: query['filter.find_text'] || '' };
          const findData = await db.mongo.find(complex.col, find, { projection: { _id: 1 } });
          return findData.map(({ _id }) => _id);
        },
        cols: [
          //   { class: 'hidden', f: { name: 'delete_time' } },
          { label: 'Добавлен', f: { name: 'add_time', type: 'label', config: { hideLabel: true } } },
          {
            label: 'Должность',
            f: { name: 'position', type: 'label', config: { hideLabel: true } },
          },
          {
            label: 'ФИО',
            html: ({ data }) => [
              COMPLEX(
                { name: 'pp', add: false, controls: {}, item: { controls: {reload: true} }, config: { disableCardView: true } },
                () => [
                  FIELD({ name: 'second_name', type: 'json' }),
                  FIELD({ name: 'first_name', type: 'json' }),
                  SPAN({ text: `${data.second_name} ${data.first_name}` }),
                ],
              ),
            ],
          },
          //   {
          //     label: 'Телефоны',
          //     html: (_, d) => [
          //       _.c({
          //         name: 'pp_phone',
          //         col: 'pp',
          //         link: '__pp',
          //         add: false,
          //         process: {
          //           tpl: (_, d) => [
          //             _.c({
          //               name: 'phone',
          //               add: false,
          //               process: {
          //                 tpl: (_, d) => [_.f({ name: 'num', type: 'phone--', config: { callLink: true } }), ['br']],
          //               },
          //             }),
          //           ],
          //         },
          //       }),
          //     ],
          //   },
        ],
      },
      add: {
        modal: true,
        items: [
          {
            html: () => [
              COMPLEX(
                {
                  name: 'pp',
                  add: { auto: true },
                  controls: {},
                  item: { controls: {} },
                  config: { disableCardView: true },
                },
                () => [FIELD({ label: 'Фамилия', name: 'second_name' }), FIELD({ label: 'Имя', name: 'first_name' })],
              ),
            ],
          },
          { f: { label: 'Должность', name: 'position', type: 'select', lst: 'worker~type' } },
        ],
      },
    }),
  ],
});

// exports.tpl = (_, d, c)=>{ return [

// 	_.html('__tpl~table', _, d, {
// 		hasParent: true,
// 		col: 'worker',
// 		label: 'Сотрудник',
// 		misc: {
// 			print: {
// 				html: [
// 					["div",{"class": "col-xs-4 text-right"},[
// 						["div",{"class": "btn btn-info"},[
// 							["span",{"text": "Печатать пропусков"}],
// 							_.f({name: 'print_pass', type: 'action', front: {
// 								onClick: ()=>{
// 									var ids = [];
// 									$('#worker-table input[name=checkItem]:checked').each(function(){
// 										ids.push($(this).closest('[itemId]').attr('itemId'));
// 									});
// 									if(ids.length){
// 										window.open('?session#{"form":"worker/print~permit", "filter": {"ids": ["'+ids.join('","')+'"]}}','print_pass','height=400, width=600, toolbar=no, location=no, status=no, menubar=no, scrollbars=yes, resizable=yes');
// 									}else{
// 										$.notify('Должен быть выбран хотя бы один сотрудник');
// 									}
// 								},
// 							}})
// 						]],
// 					]],
// 				]
// 			},
// 		},
// 		add: {
// 			modal: true,
// 			items: [
// 				{f: {name: 'second_name', label: "Фамилия"}},
// 				{f: {name: 'first_name', label: "Имя"}},
// 				{f: {name: 'third_name', label: "Отчество"}},
// 				{f: {name: 'type', label: "Тип должности", type: 'select', lst: 'worker~type'}},
// 				{f: {name: 'position', label: "Должность"}},
// 			],
// 			afterValid: (conn, data, parents, cb)=>{
// 				cb();
// 			},
// 			beforeAdd: (conn, data, parents, callback)=>{

// 				async.waterfall([(cb)=>{

// 					DB.addComplex( conn, { col: 'pp' }, [], {
// 						first_name: data.tmp_obj.first_name,
// 						second_name: data.tmp_obj.second_name,
// 						third_name: data.tmp_obj.third_name,
// 					}, (err, pp) => {

// 						delete data.tmp_obj.first_name;
// 						delete data.tmp_obj.second_name;
// 						delete data.tmp_obj.third_name;

// 						parents.push(pp);

// 						cb();
// 					});
// 				},(cb)=>{

// 					conn.db.collection('ce')
// 						.findAndModify(
// 							{ _id: ObjectId(data.parent.parent._id) }, [], {$inc: {'counters.worker': 1}}, {},
// 							(err, ce)=>{try{
// 								console.log(err, ce, data.parent.parent._id);
// 								data.tmp_obj.code = ce.value.code+'-'+((SYS.get(ce, 'value.counters.worker')||0) + 1);
// 								cb();
// 							}catch(err){
// 								console.log(err);
// 								cb({status: 'err', err: 'Ошибка получения кода сотрудника'})
// 							}
// 					});
// 				}], (err)=>{ callback(err) });
// 			},
// 		},
// 		table: {
// 			itemLink: {
// 				type: 'col',
// 			},
// 			prepareItem: (_, d, item)=>{
// 				if(d.delete_time){
// 					item[1].class = (item[1].class||'')+' deleted';
// 					item[1].help = 'Уволен '+moment(d.delete_time).format('LL');
// 				}
// 				return item;
// 			},
// 			checkItems: true,
// 			items: [
// 				{class: 'hidden', f: {name: 'delete_time', type: 'datetime--', value: ''}},
// 				{label: 'Добавлен', f: {name: 'add_time', type: 'datetime--', value: ''}},
// 				{label: 'Должность', f: {name: 'position', type: 'text--', value: ''}},
// 				{label: 'ФИО', html: (_, d)=>[
// 					_.html('pp~fio', _, d, {complex: {col: 'pp', link: '__pp'}}),
// 				]},
// 				{label: 'Телефоны', html: (_, d)=>[
// 					_.c({name: 'pp_phone', col: 'pp', link: '__pp', add: false, process: {
// 						tpl: (_, d)=>[
// 							_.c({name: 'phone', add: false, process: {
// 								tpl: (_, d)=>[
// 									_.f({name: 'num', type: 'phone--', config: {callLink: true}}),
// 									['br'],
// 								],
// 							}}),
// 						],
// 					}}),
// 				]},
// 			],
// 			id: {
// 				baseField: 'add_time',
// 				prepare: (select)=>{

// 					select.join.push("LEFT JOIN worker__delete_time ON worker__delete_time.id = "+select.config.col+"__"+select.config.table.id.baseField+".id");
// 					if(!select.filter.is_delete) select.where.push("worker__delete_time.f = 0");

// 					if(select.filter.find_text){
// 						select.join.push("LEFT JOIN worker_links__pp ON worker_links__pp.id = "+select.config.col+"__"+select.config.table.id.baseField+".id");
// 						select.join.push("LEFT JOIN pp__second_name ON pp__second_name.id = worker_links__pp.p");
// 						select.where.push("pp__second_name.f LIKE ?");
// 						select.escape.push('%'+select.filter.find_text.trim()+'%');
// 					}
// 					if(select.filter.find_type){
// 						select.join.push("LEFT JOIN worker__type ON worker__type.id = "+select.config.col+"__"+select.config.table.id.baseField+".id");
// 						select.where.push("worker__type.f = ?");
// 						select.escape.push(select.filter.find_type);
// 					}

// 				},
// 			},
// 		}
// 	}),
// ]}

// exports.script = ()=>{

// }

// exports.style = ()=>{/*

// */}
