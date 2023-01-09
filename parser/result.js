[
	DIV({},
		LABEL({for: "defaultFormControlInput",class: "form-label"},
			SPAN({text: "Name"})
		),
		INPUT({type: "text",class: "form-control",id: "defaultFormControlInput",placeholder: "John Doe","aria-describedby": "defaultFormControlHelp"}),
		DIV({id: "defaultFormControlHelp",class: "form-text"},
			SPAN({text: "We'll never share your details with anyone else."})
		)
	)
]