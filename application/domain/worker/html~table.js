({
  tpl: ({ data }, { hideFilters, tableId, links, add = {} } = {}) => [
    HTML('core/default~table', {
      col: 'worker',
      links: links,
      filter: {
        items: hideFilters
          ? []
          : [
              {
                class: 'col-6 col-sm-3',
                f: { label: 'Должность', name: 'find_type', type: 'select', lst: 'worker~type' },
              },
              { class: 'col-6 col-sm-3', f: { label: 'Имя/Фамилия', name: 'find_text' } },
              { class: 'col-6 col-sm-3', f: { name: 'is_delete', type: 'check+', label: 'Показывать\x0aуволенных' } },
            ],
      },
      table: {
        addRowLink: true,
        id: tableId,
        cols: [
          { label: 'Добавлен', f: { name: 'add_time', type: 'label', on: { prepareValue: 'toLocaleString' } } },
          { label: 'Должность', f: { name: 'position', type: 'label', label: false } },
          {
            label: 'ФИО',
            html: ({ data }) => [
              COMPLEX({ name: 'pp', add: false, config: { disableCardView: true } }, () => [
                FIELD({ name: 'second_name', type: 'json' }),
                FIELD({ name: 'first_name', type: 'json' }),
                SPAN({ text: `${data.second_name} ${data.first_name}` }),
              ]),
            ],
          },
          {
            label: 'Телефоны',
            html: () => [
              COMPLEX(
                {
                  name: 'pp_phone',
                  col: 'pp',
                  links: { worker: '__pp' },
                  add: false,
                  config: { disableCardView: true },
                },
                () => [
                  COMPLEX({ name: 'phone', add: false, config: { disableCardView: true } }, ({ data }) => [
                    FIELD({ name: 'num', type: 'label', label: false, config: { callto: true } }),
                  ]),
                ],
              ),
            ],
          },
        ],
      },
      add: {
        modal: add.modal || { toggleButton: { label: 'Добавить сотрудника' } },
        items: [
          {
            html: () => [
              COMPLEX(
                {
                  name: 'pp',
                  add: { auto: true },
                  config: { disableCardView: true },
                  links: { pp: { tmp_obj_worker: '__worker' }, tmp_obj_worker: '__pp' },
                },
                () => [FIELD({ label: 'Фамилия', name: 'second_name' }), FIELD({ label: 'Имя', name: 'first_name' })],
              ),
            ],
          },
          { f: { label: 'Тип должности', name: 'type', type: 'select', lst: 'worker~type' } },
          { f: { label: 'Название должности', name: 'position' } },
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
