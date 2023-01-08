[
	DIV({class: "profile-tab"},
		DIV({class: "custom-tab-1"},
			UL({class: "nav nav-tabs"},
				LI({class: "nav-item"},
					A({href: "#my-posts","data-toggle": "tab",class: "nav-link active show"},
						SPAN({text: "Posts"})
					)
				),
				LI({class: "nav-item"},
					A({href: "#about-me","data-toggle": "tab",class: "nav-link"},
						SPAN({text: "About Me"})
					)
				),
				LI({class: "nav-item"},
					A({href: "#profile-settings","data-toggle": "tab",class: "nav-link"},
						SPAN({text: "Setting"})
					)
				)
			),
			DIV({class: "tab-content"},
				DIV({id: "my-posts",class: "tab-pane fade active show"},
					DIV({class: "my-post-content pt-3"},
						DIV({class: "post-input"},
							TEXTAREA({name: "textarea",id: "textarea",cols: "30",rows: "5",class: "form-control bg-transparent",placeholder: "Please type what you want...."}),
							A({href: "javascript:void()"},
								I({class: "ti-clip"})
							),
							A({href: "javascript:void()"},
								I({class: "ti-camera"})
							),
							A({href: "javascript:void()",class: "btn btn-primary"},
								SPAN({text: "Post"})
							)
						),
						DIV({class: "profile-uoloaded-post border-bottom-1 pb-5"},
							IMG({src: "images/profile/8.jpg",alt: "",class: "img-fluid"}),
							A({class: "post-title",href: "javascript:void()"},
								H4({},
									SPAN({text: "Collection of textile samples lay spread"})
								)
							),
							P({},
								SPAN({text: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning\r\n                          of spare which enjoy whole heart."})
							),
							BUTTON({class: "btn btn-primary mr-3"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-heart"})
								),
								SPAN({text: "Like"})
							),
							BUTTON({class: "btn btn-secondary"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-reply"})
								),
								SPAN({text: "Reply"})
							)
						),
						DIV({class: "profile-uoloaded-post border-bottom-1 pb-5"},
							IMG({src: "images/profile/9.jpg",alt: "",class: "img-fluid"}),
							A({class: "post-title",href: "javascript:void()"},
								H4({},
									SPAN({text: "Collection of textile samples lay spread"})
								)
							),
							P({},
								SPAN({text: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning\r\n                          of spare which enjoy whole heart."})
							),
							BUTTON({class: "btn btn-primary mr-3"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-heart"})
								),
								SPAN({text: "Like"})
							),
							BUTTON({class: "btn btn-secondary"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-reply"})
								),
								SPAN({text: "Reply"})
							)
						),
						DIV({class: "profile-uoloaded-post pb-5"},
							IMG({src: "images/profile/8.jpg",alt: "",class: "img-fluid"}),
							A({class: "post-title",href: "javascript:void()"},
								H4({},
									SPAN({text: "Collection of textile samples lay spread"})
								)
							),
							P({},
								SPAN({text: "A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning\r\n                          of spare which enjoy whole heart."})
							),
							BUTTON({class: "btn btn-primary mr-3"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-heart"})
								),
								SPAN({text: "Like"})
							),
							BUTTON({class: "btn btn-secondary"},
								SPAN({class: "mr-3"},
									I({class: "fa fa-reply"})
								),
								SPAN({text: "Reply"})
							)
						),
						DIV({class: "text-center mb-2"},
							A({href: "javascript:void()",class: "btn btn-primary"},
								SPAN({text: "Load More"})
							)
						)
					)
				),
				DIV({id: "about-me",class: "tab-pane fade"},
					DIV({class: "profile-about-me"},
						DIV({class: "pt-4 border-bottom-1 pb-4"},
							H4({class: "text-primary"},
								SPAN({text: "About Me"})
							),
							P({},
								SPAN({text: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence was created for the\r\n                          bliss of souls like mine.I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents."})
							),
							P({},
								SPAN({text: "A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it there hung a picture that he had recently cut out of an illustrated magazine and housed\r\n                          in a nice, gilded frame."})
							)
						)
					),
					DIV({class: "profile-skills pt-2 border-bottom-1 pb-2"},
						H4({class: "text-primary mb-4"},
							SPAN({text: "Skills"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Admin"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Dashboard"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Photoshop"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Bootstrap"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Responsive"})
						),
						A({href: "javascript:void()",class: "btn btn-outline-dark btn-rounded pl-4 my-3 my-sm-0 pr-4 mr-3 m-b-10"},
							SPAN({text: "Crypto"})
						)
					),
					DIV({class: "profile-lang pt-5 border-bottom-1 pb-5"},
						H4({class: "text-primary mb-4"},
							SPAN({text: "Language"})
						),
						A({href: "javascript:void()",class: "text-muted pr-3 f-s-16"},
							I({class: "flag-icon flag-icon-us"}),
							SPAN({text: "English"})
						),
						A({href: "javascript:void()",class: "text-muted pr-3 f-s-16"},
							I({class: "flag-icon flag-icon-fr"}),
							SPAN({text: "French"})
						),
						A({href: "javascript:void()",class: "text-muted pr-3 f-s-16"},
							I({class: "flag-icon flag-icon-bd"}),
							SPAN({text: "Bangla"})
						)
					),
					DIV({class: "profile-personal-info"},
						H4({class: "text-primary mb-4"},
							SPAN({text: "Personal Information"})
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Name"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "Mitchell C.Shay"})
								)
							)
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Email"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "example@examplel.com"})
								)
							)
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Availability"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "Full Time (Free Lancer)"})
								)
							)
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Age"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "27"})
								)
							)
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Location"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "Rosemont Avenue Melbourne,\r\n                              Florida"})
								)
							)
						),
						DIV({class: "row mb-4"},
							DIV({class: "col-3"},
								H5({class: "f-w-500"},
									SPAN({text: "Year Experience"}),
									SPAN({class: "pull-right"},
										SPAN({text: ":"})
									)
								)
							),
							DIV({class: "col-9"},
								SPAN({},
									SPAN({text: "07 Year Experiences"})
								)
							)
						)
					)
				),
				DIV({id: "profile-settings",class: "tab-pane fade"},
					DIV({class: "pt-3"},
						DIV({class: "settings-form"},
							H4({class: "text-primary"},
								SPAN({text: "Account Setting"})
							),
							FORM({},
								DIV({class: "form-row"},
									DIV({class: "form-group col-md-6"},
										LABEL({},
											SPAN({text: "Email"})
										),
										INPUT({type: "email",placeholder: "Email",class: "form-control"})
									),
									DIV({class: "form-group col-md-6"},
										LABEL({},
											SPAN({text: "Password"})
										),
										INPUT({type: "password",placeholder: "Password",class: "form-control"})
									)
								),
								DIV({class: "form-group"},
									LABEL({},
										SPAN({text: "Address"})
									),
									INPUT({type: "text",placeholder: "1234 Main St",class: "form-control"})
								),
								DIV({class: "form-group"},
									LABEL({},
										SPAN({text: "Address 2"})
									),
									INPUT({type: "text",placeholder: "Apartment, studio, or floor",class: "form-control"})
								),
								DIV({class: "form-row"},
									DIV({class: "form-group col-md-6"},
										LABEL({},
											SPAN({text: "City"})
										),
										INPUT({type: "text",class: "form-control"})
									),
									DIV({class: "form-group col-md-4"},
										LABEL({},
											SPAN({text: "State"})
										),
										SELECT({class: "form-control",id: "inputState"},
											OPTION({selected: ""},
												SPAN({text: "Choose..."})
											),
											OPTION({},
												SPAN({text: "Option 1"})
											),
											OPTION({},
												SPAN({text: "Option 2"})
											),
											OPTION({},
												SPAN({text: "Option 3"})
											)
										)
									),
									DIV({class: "form-group col-md-2"},
										LABEL({},
											SPAN({text: "Zip"})
										),
										INPUT({type: "text",class: "form-control"})
									)
								),
								DIV({class: "form-group"},
									DIV({class: "form-check"},
										INPUT({type: "checkbox",class: "form-check-input",id: "gridCheck"}),
										LABEL({for: "gridCheck",class: "form-check-label"},
											SPAN({text: "Check me out"})
										)
									)
								),
								BUTTON({class: "btn btn-primary",type: "submit"},
									SPAN({text: "Sign\r\n                              in"})
								)
							)
						)
					)
				)
			)
		)
	)
]