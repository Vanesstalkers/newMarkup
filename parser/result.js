[
	DIV({class: "card card-action mb-4"},
		DIV({class: "card-header collapsed"},
			DIV({class: "card-action-title"},
				SPAN({text: "Collapsible Card"})
			),
			DIV({class: "card-action-element"},
				UL({class: "list-inline mb-0"},
					LI({class: "list-inline-item"},
						A({href: "javascript:void(0);",class: "card-collapsible"},
							I({class: "tf-icons bx bx-chevron-down"})
						)
					)
				)
			)
		),
		DIV({class: "collapse",style: ""},
			DIV({class: "card-body pt-0"},
				P({class: "card-text"},
					SPAN({text: "To create a collapsible card, use"}),
					CODE({},
						SPAN({text: ".card-collapsible"})
					),
					SPAN({text: "class with action item. To show the collapsible content default use"}),
					CODE({},
						SPAN({text: ".show"})
					),
					SPAN({text: "class with"}),
					CODE({},
						SPAN({text: ".collapse"})
					),
					SPAN({text: "."})
				),
				P({class: "card-text"},
					SPAN({text: "Click on"}),
					I({class: "tf-icons bx bx-chevron-up"}),
					SPAN({text: "to see card collapse in action."})
				)
			)
		)
	)
]