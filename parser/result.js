[
	DIV({class: "nav-align-top mb-4"},
		UL({class: "nav nav-pills mb-3",role: "tablist"},
			LI({class: "nav-item",role: "presentation"},
				BUTTON({type: "button",class: "nav-link active",role: "tab","data-bs-toggle": "tab","data-bs-target": "#navs-pills-top-home","aria-controls": "navs-pills-top-home","aria-selected": "true"},
					SPAN({text: "Home"})
				)
			),
			LI({class: "nav-item",role: "presentation"},
				BUTTON({type: "button",class: "nav-link",role: "tab","data-bs-toggle": "tab","data-bs-target": "#navs-pills-top-profile","aria-controls": "navs-pills-top-profile","aria-selected": "false",tabindex: "-1"},
					SPAN({text: "Profile"})
				)
			),
			LI({class: "nav-item",role: "presentation"},
				BUTTON({type: "button",class: "nav-link",role: "tab","data-bs-toggle": "tab","data-bs-target": "#navs-pills-top-messages","aria-controls": "navs-pills-top-messages","aria-selected": "false",tabindex: "-1"},
					SPAN({text: "Messages"})
				)
			)
		),
		DIV({class: "tab-content"},
			DIV({class: "tab-pane fade show active",id: "navs-pills-top-home",role: "tabpanel"},
				P({},
					SPAN({text: "Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps powder. Bear\r\n        claw\r\n        candy topping."})
				),
				P({class: "mb-0"},
					SPAN({text: "Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon jelly-o\r\n        jelly-o ice\r\n        cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow jujubes sweet."})
				)
			),
			DIV({class: "tab-pane fade",id: "navs-pills-top-profile",role: "tabpanel"},
				P({},
					SPAN({text: "Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice cream. Gummies\r\n        halvah\r\n        tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream cheesecake fruitcake."})
				),
				P({class: "mb-0"},
					SPAN({text: "Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah cotton candy\r\n        liquorice caramels."})
				)
			),
			DIV({class: "tab-pane fade",id: "navs-pills-top-messages",role: "tabpanel"},
				P({},
					SPAN({text: "Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies cupcake gummi\r\n        bears\r\n        cake chocolate."})
				),
				P({class: "mb-0"},
					SPAN({text: "Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet roll icing\r\n        sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly jelly-o tart brownie\r\n        jelly."})
				)
			)
		)
	)
]