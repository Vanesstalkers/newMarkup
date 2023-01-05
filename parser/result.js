[
	DIV({class: "col-xl-6"},
		DIV({class: "card"},
			DIV({class: "card-body"},
				DIV({class: "mb-4"},
					H4({class: "card-title"},
						SPAN({text: "Ajax (remote data)"})
					),
					P({},
						SPAN({text: "Select2 comes with AJAX support built in, using jQuery's AJAX methods. In this example, we can search for repositories using GitHub's API:"})
					)
				),
				SELECT({class: "js-data-example-ajax w-100"})
			)
		)
	)
]