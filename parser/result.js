[
	DIV({class: "container-xxl flex-grow-1 container-p-y"},
		H4({class: "fw-bold py-3 mb-4"},
			SPAN({class: "text-muted fw-light"},
				SPAN({text: "UI elements /"})
			),
			SPAN({text: "Modals"})
		),
		DIV({class: "card mb-4"},
			H5({class: "card-header"},
				SPAN({text: "Bootstrap modals"})
			),
			DIV({class: "card-body"},
				DIV({class: "row gy-3"},
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Default"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#basicModal"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "basicModal",tabindex: "-1","aria-hidden": "true"},
								DIV({class: "modal-dialog",role: "document"},
									DIV({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "exampleModalLabel1"},
												SPAN({text: "Modal title"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											DIV({class: "row"},
												DIV({class: "col mb-3"},
													LABEL({for: "nameBasic",class: "form-label"},
														SPAN({text: "Name"})
													),
													INPUT({type: "text",id: "nameBasic",class: "form-control",placeholder: "Enter Name"})
												)
											),
											DIV({class: "row g-2"},
												DIV({class: "col mb-0"},
													LABEL({for: "emailBasic",class: "form-label"},
														SPAN({text: "Email"})
													),
													INPUT({type: "email",id: "emailBasic",class: "form-control",placeholder: "xxxx@xxx.xx"})
												),
												DIV({class: "col mb-0"},
													LABEL({for: "dobBasic",class: "form-label"},
														SPAN({text: "DOB"})
													),
													INPUT({type: "date",id: "dobBasic",class: "form-control",placeholder: "DD / MM / YY"})
												)
											)
										),
										DIV({class: "modal-footer"},
											BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
												SPAN({text: "Close"})
											),
											BUTTON({type: "button",class: "btn btn-primary"},
												SPAN({text: "Save changes"})
											)
										)
									)
								)
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Vertically centered"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modalCenter"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "modalCenter",tabindex: "-1","aria-hidden": "true"},
								DIV({class: "modal-dialog modal-dialog-centered",role: "document"},
									DIV({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "modalCenterTitle"},
												SPAN({text: "Modal title"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											DIV({class: "row"},
												DIV({class: "col mb-3"},
													LABEL({for: "nameWithTitle",class: "form-label"},
														SPAN({text: "Name"})
													),
													INPUT({type: "text",id: "nameWithTitle",class: "form-control",placeholder: "Enter Name"})
												)
											),
											DIV({class: "row g-2"},
												DIV({class: "col mb-0"},
													LABEL({for: "emailWithTitle",class: "form-label"},
														SPAN({text: "Email"})
													),
													INPUT({type: "email",id: "emailWithTitle",class: "form-control",placeholder: "xxxx@xxx.xx"})
												),
												DIV({class: "col mb-0"},
													LABEL({for: "dobWithTitle",class: "form-label"},
														SPAN({text: "DOB"})
													),
													INPUT({type: "date",id: "dobWithTitle",class: "form-control",placeholder: "DD / MM / YY"})
												)
											)
										),
										DIV({class: "modal-footer"},
											BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
												SPAN({text: "Close"})
											),
											BUTTON({type: "button",class: "btn btn-primary"},
												SPAN({text: "Save changes"})
											)
										)
									)
								)
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Slide from Top"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modalTop"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal modal-top fade",id: "modalTop",tabindex: "-1"},
								DIV({class: "modal-dialog"},
									FORM({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "modalTopTitle"},
												SPAN({text: "Modal title"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											DIV({class: "row"},
												DIV({class: "col mb-3"},
													LABEL({for: "nameSlideTop",class: "form-label"},
														SPAN({text: "Name"})
													),
													INPUT({type: "text",id: "nameSlideTop",class: "form-control",placeholder: "Enter Name"})
												)
											),
											DIV({class: "row g-2"},
												DIV({class: "col mb-0"},
													LABEL({for: "emailSlideTop",class: "form-label"},
														SPAN({text: "Email"})
													),
													INPUT({type: "email",id: "emailSlideTop",class: "form-control",placeholder: "xxxx@xxx.xx"})
												),
												DIV({class: "col mb-0"},
													LABEL({for: "dobSlideTop",class: "form-label"},
														SPAN({text: "DOB"})
													),
													INPUT({type: "date",id: "dobSlideTop",class: "form-control",placeholder: "DD / MM / YY"})
												)
											)
										),
										DIV({class: "modal-footer"},
											BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
												SPAN({text: "Close"})
											),
											BUTTON({type: "button",class: "btn btn-primary"},
												SPAN({text: "Save"})
											)
										)
									)
								)
							)
						)
					)
				)
			),
			HR({class: "m-0"}),
			DIV({class: "card-body"},
				DIV({class: "row gy-3"},
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "YouTube Video"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#youTubeModal","data-thevideo": "https://www.youtube.com/embed/EngW7tLk6R8"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "youTubeModal",tabindex: "-1","aria-hidden": "true"},
								DIV({class: "modal-dialog",role: "document"},
									DIV({class: "modal-content"},
										IFRAME({height: "350",src: "https://www.youtube.com/embed/EngW7tLk6R8"})
									)
								)
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Toggle Between Modals"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modalToggle"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "modalToggle","aria-labelledby": "modalToggleLabel",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
								DIV({class: "modal-dialog modal-dialog-centered"},
									DIV({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "modalToggleLabel"},
												SPAN({text: "Modal 1"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											SPAN({text: "Show a second modal and hide this one with the button below."})
										),
										DIV({class: "modal-footer"},
											BUTTON({class: "btn btn-primary","data-bs-target": "#modalToggle2","data-bs-toggle": "modal","data-bs-dismiss": "modal"},
												SPAN({text: "Open second modal"})
											)
										)
									)
								)
							),
							DIV({class: "modal fade",id: "modalToggle2","aria-hidden": "true","aria-labelledby": "modalToggleLabel2",tabindex: "-1"},
								DIV({class: "modal-dialog modal-dialog-centered"},
									DIV({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "modalToggleLabel2"},
												SPAN({text: "Modal 2"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											SPAN({text: "Hide this modal and show the first with the button below."})
										),
										DIV({class: "modal-footer"},
											BUTTON({class: "btn btn-primary","data-bs-target": "#modalToggle","data-bs-toggle": "modal","data-bs-dismiss": "modal"},
												SPAN({text: "Back to first"})
											)
										)
									)
								)
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Fullscreen"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#fullscreenModal"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "fullscreenModal",tabindex: "-1","aria-hidden": "true"},
								DIV({class: "modal-dialog modal-fullscreen",role: "document"},
									DIV({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "modalFullTitle"},
												SPAN({text: "Modal title"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											),
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											),
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											),
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											),
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											),
											P({},
												SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                      eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
											),
											P({},
												SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                      laoreet rutrum faucibus dolor auctor."})
											),
											P({},
												SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                      consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
											)
										),
										DIV({class: "modal-footer"},
											BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
												SPAN({text: "Close"})
											),
											BUTTON({type: "button",class: "btn btn-primary"},
												SPAN({text: "Save changes"})
											)
										)
									)
								)
							)
						)
					)
				)
			),
			HR({class: "m-0"}),
			DIV({class: "card-body"},
				DIV({class: "row gy-3"},
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Sizes"})
						),
						DIV({class: "modal fade",id: "smallModal",tabindex: "-1","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-sm",role: "document"},
								DIV({class: "modal-content"},
									DIV({class: "modal-header"},
										H5({class: "modal-title",id: "exampleModalLabel2"},
											SPAN({text: "Modal title"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body"},
										DIV({class: "row"},
											DIV({class: "col mb-3"},
												LABEL({for: "nameSmall",class: "form-label"},
													SPAN({text: "Name"})
												),
												INPUT({type: "text",id: "nameSmall",class: "form-control",placeholder: "Enter Name"})
											)
										),
										DIV({class: "row g-2"},
											DIV({class: "col mb-0"},
												LABEL({class: "form-label",for: "emailSmall"},
													SPAN({text: "Email"})
												),
												INPUT({type: "email",class: "form-control",id: "emailSmall",placeholder: "xxxx@xxx.xx"})
											),
											DIV({class: "col mb-0"},
												LABEL({for: "dobSmall",class: "form-label"},
													SPAN({text: "DOB"})
												),
												INPUT({id: "dobSmall",type: "date",class: "form-control",placeholder: "DD / MM / YY"})
											)
										)
									),
									DIV({class: "modal-footer"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Save changes"})
										)
									)
								)
							)
						),
						DIV({class: "modal fade",id: "largeModal",tabindex: "-1","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-lg",role: "document"},
								DIV({class: "modal-content"},
									DIV({class: "modal-header"},
										H5({class: "modal-title",id: "exampleModalLabel3"},
											SPAN({text: "Modal title"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body"},
										DIV({class: "row"},
											DIV({class: "col mb-3"},
												LABEL({for: "nameLarge",class: "form-label"},
													SPAN({text: "Name"})
												),
												INPUT({type: "text",id: "nameLarge",class: "form-control",placeholder: "Enter Name"})
											)
										),
										DIV({class: "row g-2"},
											DIV({class: "col mb-0"},
												LABEL({for: "emailLarge",class: "form-label"},
													SPAN({text: "Email"})
												),
												INPUT({type: "email",id: "emailLarge",class: "form-control",placeholder: "xxxx@xxx.xx"})
											),
											DIV({class: "col mb-0"},
												LABEL({for: "dobLarge",class: "form-label"},
													SPAN({text: "DOB"})
												),
												INPUT({type: "date",id: "dobLarge",class: "form-control",placeholder: "DD / MM / YY"})
											)
										)
									),
									DIV({class: "modal-footer"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Save changes"})
										)
									)
								)
							)
						),
						DIV({class: "modal fade",id: "exLargeModal",tabindex: "-1","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-xl",role: "document"},
								DIV({class: "modal-content"},
									DIV({class: "modal-header"},
										H5({class: "modal-title",id: "exampleModalLabel4"},
											SPAN({text: "Modal title"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body"},
										DIV({class: "row"},
											DIV({class: "col mb-3"},
												LABEL({for: "nameExLarge",class: "form-label"},
													SPAN({text: "Name"})
												),
												INPUT({type: "text",id: "nameExLarge",class: "form-control",placeholder: "Enter Name"})
											)
										),
										DIV({class: "row g-2"},
											DIV({class: "col mb-0"},
												LABEL({for: "emailExLarge",class: "form-label"},
													SPAN({text: "Email"})
												),
												INPUT({type: "email",id: "emailExLarge",class: "form-control",placeholder: "xxxx@xxx.xx"})
											),
											DIV({class: "col mb-0"},
												LABEL({for: "dobExLarge",class: "form-label"},
													SPAN({text: "DOB"})
												),
												INPUT({type: "date",id: "dobExLarge",class: "form-control",placeholder: "DD / MM / YY"})
											)
										)
									),
									DIV({class: "modal-footer"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Save changes"})
										)
									)
								)
							)
						),
						DIV({class: "demo-inline-spacing"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#smallModal"},
								SPAN({text: "Small"})
							),
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#largeModal"},
								SPAN({text: "Large"})
							),
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#exLargeModal"},
								SPAN({text: "Extra Large"})
							)
						)
					),
					DIV({class: "col-lg-4 col-md-3"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Scrolling long content"})
						),
						DIV({class: "modal fade",id: "modalLong",tabindex: "-1","aria-hidden": "true"},
							DIV({class: "modal-dialog",role: "document"},
								DIV({class: "modal-content"},
									DIV({class: "modal-header"},
										H5({class: "modal-title",id: "modalLongTitle"},
											SPAN({text: "Modal title"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body"},
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										)
									),
									DIV({class: "modal-footer"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Save changes"})
										)
									)
								)
							)
						),
						DIV({class: "modal fade",id: "modalScrollable",tabindex: "-1","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-dialog-scrollable",role: "document"},
								DIV({class: "modal-content"},
									DIV({class: "modal-header"},
										H5({class: "modal-title",id: "modalScrollableTitle"},
											SPAN({text: "Modal title"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body"},
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										),
										P({},
											SPAN({text: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas\r\n                    eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros."})
										),
										P({},
											SPAN({text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue\r\n                    laoreet rutrum faucibus dolor auctor."})
										),
										P({},
											SPAN({text: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl\r\n                    consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."})
										)
									),
									DIV({class: "modal-footer"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Save changes"})
										)
									)
								)
							)
						),
						DIV({class: "demo-inline-spacing"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modalLong"},
								SPAN({text: "Option 1"})
							),
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modalScrollable"},
								SPAN({text: "Option 2"})
							)
						)
					),
					DIV({class: "col-lg-4 col-md-3"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Backdrop"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#backDropModal"},
								SPAN({text: "Launch modal"})
							),
							DIV({class: "modal fade",id: "backDropModal","data-bs-backdrop": "static",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
								DIV({class: "modal-dialog"},
									FORM({class: "modal-content"},
										DIV({class: "modal-header"},
											H5({class: "modal-title",id: "backDropModalTitle"},
												SPAN({text: "Modal title"})
											),
											BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
										),
										DIV({class: "modal-body"},
											DIV({class: "row"},
												DIV({class: "col mb-3"},
													LABEL({for: "nameBackdrop",class: "form-label"},
														SPAN({text: "Name"})
													),
													INPUT({type: "text",id: "nameBackdrop",class: "form-control",placeholder: "Enter Name"})
												)
											),
											DIV({class: "row g-2"},
												DIV({class: "col mb-0"},
													LABEL({for: "emailBackdrop",class: "form-label"},
														SPAN({text: "Email"})
													),
													INPUT({type: "email",id: "emailBackdrop",class: "form-control",placeholder: "xxxx@xxx.xx"})
												),
												DIV({class: "col mb-0"},
													LABEL({for: "dobBackdrop",class: "form-label"},
														SPAN({text: "DOB"})
													),
													INPUT({type: "date",id: "dobBackdrop",class: "form-control",placeholder: "DD / MM / YY"})
												)
											)
										),
										DIV({class: "modal-footer"},
											BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
												SPAN({text: "Close"})
											),
											BUTTON({type: "button",class: "btn btn-primary"},
												SPAN({text: "Save"})
											)
										)
									)
								)
							)
						)
					)
				)
			)
		),
		DIV({class: "card mb-4"},
			H5({class: "card-header"},
				SPAN({text: "Animation"})
			),
			DIV({class: "card-body"},
				SMALL({class: "text-light fw-semibold"},
					SPAN({text: "Animation Options"})
				),
				DIV({class: "d-flex mt-3"},
					SELECT({class: "form-select animation-dropdown me-2 w-25",id: "animation-dropdown"},
						OPTGROUP({label: "Attention Seekers"},
							OPTION({value: "animate__fade"},
								SPAN({text: "fade"})
							),
							OPTION({value: "animate__bounce"},
								SPAN({text: "bounce"})
							),
							OPTION({value: "animate__flash"},
								SPAN({text: "flash"})
							),
							OPTION({value: "animate__pulse"},
								SPAN({text: "pulse"})
							),
							OPTION({value: "animate__rubberBand"},
								SPAN({text: "rubberBand"})
							),
							OPTION({value: "animate__shakeX"},
								SPAN({text: "shake"})
							),
							OPTION({value: "animate__swing"},
								SPAN({text: "swing"})
							),
							OPTION({value: "animate__tada"},
								SPAN({text: "tada"})
							),
							OPTION({value: "animate__wobble"},
								SPAN({text: "wobble"})
							),
							OPTION({value: "animate__jello"},
								SPAN({text: "jello"})
							),
							OPTION({value: "animate__heartBeat"},
								SPAN({text: "heartBeat"})
							)
						),
						OPTGROUP({label: "Bouncing Entrances"},
							OPTION({value: "animate__bounceIn"},
								SPAN({text: "bounceIn"})
							),
							OPTION({value: "animate__bounceInDown"},
								SPAN({text: "bounceInDown"})
							),
							OPTION({value: "animate__bounceInLeft"},
								SPAN({text: "bounceInLeft"})
							),
							OPTION({value: "animate__bounceInRight"},
								SPAN({text: "bounceInRight"})
							),
							OPTION({value: "animate__bounceInUp"},
								SPAN({text: "bounceInUp"})
							)
						),
						OPTGROUP({label: "Fading Entrances"},
							OPTION({value: "animate__fadeIn",selected: ""},
								SPAN({text: "fadeIn"})
							),
							OPTION({value: "animate__fadeInDown"},
								SPAN({text: "fadeInDown"})
							),
							OPTION({value: "animate__fadeInDownBig"},
								SPAN({text: "fadeInDownBig"})
							),
							OPTION({value: "animate__fadeInLeft"},
								SPAN({text: "fadeInLeft"})
							),
							OPTION({value: "animate__fadeInLeftBig"},
								SPAN({text: "fadeInLeftBig"})
							),
							OPTION({value: "animate__fadeInRight"},
								SPAN({text: "fadeInRight"})
							),
							OPTION({value: "animate__fadeInRightBig"},
								SPAN({text: "fadeInRightBig"})
							),
							OPTION({value: "animate__fadeInUp"},
								SPAN({text: "fadeInUp"})
							),
							OPTION({value: "animate__fadeInUpBig"},
								SPAN({text: "fadeInUpBig"})
							)
						),
						OPTGROUP({label: "Flippers"},
							OPTION({value: "animate__flip"},
								SPAN({text: "flip"})
							),
							OPTION({value: "animate__flipInX"},
								SPAN({text: "flipInX"})
							),
							OPTION({value: "animate__flipInY"},
								SPAN({text: "flipInY"})
							)
						),
						OPTGROUP({label: "Lightspeed"},
							OPTION({value: "animate__lightSpeedInRight"},
								SPAN({text: "lightSpeedIn"})
							)
						),
						OPTGROUP({label: "Rotating Entrances"},
							OPTION({value: "animate__rotateIn"},
								SPAN({text: "rotateIn"})
							),
							OPTION({value: "animate__rotateInDownLeft"},
								SPAN({text: "rotateInDownLeft"})
							),
							OPTION({value: "animate__rotateInDownRight"},
								SPAN({text: "rotateInDownRight"})
							),
							OPTION({value: "animate__rotateInUpLeft"},
								SPAN({text: "rotateInUpLeft"})
							),
							OPTION({value: "animate__rotateInUpRight"},
								SPAN({text: "rotateInUpRight"})
							)
						),
						OPTGROUP({label: "Sliding Entrances"},
							OPTION({value: "animate__slideInUp"},
								SPAN({text: "slideInUp"})
							),
							OPTION({value: "animate__slideInDown"},
								SPAN({text: "slideInDown"})
							),
							OPTION({value: "animate__slideInLeft"},
								SPAN({text: "slideInLeft"})
							),
							OPTION({value: "animate__slideInRight"},
								SPAN({text: "slideInRight"})
							)
						),
						OPTGROUP({label: "Zoom Entrances"},
							OPTION({value: "animate__zoomIn"},
								SPAN({text: "zoomIn"})
							),
							OPTION({value: "animate__zoomInDown"},
								SPAN({text: "zoomInDown"})
							),
							OPTION({value: "animate__zoomInLeft"},
								SPAN({text: "zoomInLeft"})
							),
							OPTION({value: "animate__zoomInRight"},
								SPAN({text: "zoomInRight"})
							),
							OPTION({value: "animate__zoomInUp"},
								SPAN({text: "zoomInUp"})
							)
						),
						OPTGROUP({label: "Specials"},
							OPTION({value: "animate__jackInTheBox"},
								SPAN({text: "jackInTheBox"})
							),
							OPTION({value: "animate__rollIn"},
								SPAN({text: "rollIn"})
							)
						)
					),
					BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#animationModal"},
						SPAN({text: "Launch modal"})
					),
					DIV({class: "modal fade animate__animated fadeIn",id: "animationModal",tabindex: "-1","aria-hidden": "true"},
						DIV({class: "modal-dialog modal-dialog-centered",role: "document"},
							DIV({class: "modal-content"},
								DIV({class: "modal-header"},
									H5({class: "modal-title",id: "exampleModalLabel5"},
										SPAN({text: "Modal title"})
									),
									BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
								),
								DIV({class: "modal-body"},
									DIV({class: "row"},
										DIV({class: "col mb-3"},
											LABEL({for: "nameAnimation",class: "form-label"},
												SPAN({text: "Name"})
											),
											INPUT({type: "text",id: "nameAnimation",class: "form-control",placeholder: "Enter Name"})
										)
									),
									DIV({class: "row g-2"},
										DIV({class: "col mb-0"},
											LABEL({for: "emailAnimation",class: "form-label"},
												SPAN({text: "Email"})
											),
											INPUT({type: "email",id: "emailAnimation",class: "form-control",placeholder: "xxxx@xxx.xx"})
										),
										DIV({class: "col mb-0"},
											LABEL({for: "dobAnimation",class: "form-label"},
												SPAN({text: "DOB"})
											),
											INPUT({type: "date",id: "dobAnimation",class: "form-control",placeholder: "DD / MM / YY"})
										)
									)
								),
								DIV({class: "modal-footer"},
									BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
										SPAN({text: "Close"})
									),
									BUTTON({type: "button",class: "btn btn-primary"},
										SPAN({text: "Save changes"})
									)
								)
							)
						)
					)
				)
			)
		),
		DIV({class: "card"},
			H5({class: "card-header"},
				SPAN({text: "Extended Modals"})
			),
			DIV({class: "card-body"},
				DIV({class: "row gy-3"},
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Onboarding Modals"})
						),
						DIV({class: "modal-onboarding modal fade animate__animated",id: "onboardingSlideModal",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
							DIV({class: "modal-dialog",role: "document"},
								DIV({class: "modal-content text-center"},
									DIV({class: "modal-header border-0"},
										A({class: "text-muted close-label",href: "javascript:void(0);","data-bs-dismiss": "modal"},
											SPAN({text: "Skip Intro"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({id: "modalCarouselControls",class: "carousel slide pb-4 mb-2","data-bs-interval": "false"},
										OL({class: "carousel-indicators"},
											LI({"data-bs-target": "#modalCarouselControls","data-bs-slide-to": "0",class: ""}),
											LI({"data-bs-target": "#modalCarouselControls","data-bs-slide-to": "1",class: ""}),
											LI({"data-bs-target": "#modalCarouselControls","data-bs-slide-to": "2",class: "active","aria-current": "true"})
										),
										DIV({class: "carousel-inner",style: "height: 591.297px;"},
											DIV({class: "carousel-item"},
												DIV({class: "onboarding-media"},
													DIV({class: "mx-2"},
														IMG({src: "../../assets/img/illustrations/girl-with-laptop-light.png",alt: "girl-with-laptop-light",width: "335",class: "img-fluid","data-app-dark-img": "illustrations/girl-with-laptop-dark.png","data-app-light-img": "illustrations/girl-with-laptop-light.png"})
													)
												),
												DIV({class: "onboarding-content"},
													H4({class: "onboarding-title text-body"},
														SPAN({text: "Example Request Information"})
													),
													FORM({},
														DIV({class: "row"},
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "nameEx",class: "form-label"},
																		SPAN({text: "Your Full Name"})
																	),
																	INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx"})
																)
															),
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "roleEx",class: "form-label"},
																		SPAN({text: "Your Role"})
																	),
																	SELECT({class: "form-select",tabindex: "0",id: "roleEx"},
																		OPTION({},
																			SPAN({text: "Web Developer"})
																		),
																		OPTION({},
																			SPAN({text: "Business Owner"})
																		),
																		OPTION({},
																			SPAN({text: "Other"})
																		)
																	)
																)
															)
														)
													)
												)
											),
											DIV({class: "carousel-item",style: ""},
												DIV({class: "onboarding-media"},
													DIV({class: "mx-2"},
														IMG({src: "../../assets/img/illustrations/boy-with-laptop-light.png",alt: "boy-with-laptop-light",width: "300",class: "img-fluid","data-app-dark-img": "illustrations/boy-with-laptop-dark.png","data-app-light-img": "illustrations/boy-with-laptop-light.png"})
													)
												),
												DIV({class: "onboarding-content"},
													H4({class: "onboarding-title text-body"},
														SPAN({text: "Example Request Information"})
													),
													DIV({class: "onboarding-info"},
														SPAN({text: "In this example you can see a form where you can request some\r\n                          additional information from the customer when they land on the app page."})
													),
													FORM({},
														DIV({class: "row"},
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "nameEx1",class: "form-label"},
																		SPAN({text: "Your Full Name"})
																	),
																	INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx1"})
																)
															),
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "roleEx1",class: "form-label"},
																		SPAN({text: "Your Role"})
																	),
																	SELECT({class: "form-select",tabindex: "0",id: "roleEx1"},
																		OPTION({},
																			SPAN({text: "Web Developer"})
																		),
																		OPTION({},
																			SPAN({text: "Business Owner"})
																		),
																		OPTION({},
																			SPAN({text: "Other"})
																		)
																	)
																)
															)
														)
													)
												)
											),
											DIV({class: "carousel-item active",style: ""},
												DIV({class: "onboarding-media"},
													DIV({class: "mx-2"},
														IMG({src: "../../assets/img/illustrations/girl-verify-password-light.png",alt: "girl-verify-password-light",width: "300",class: "img-fluid","data-app-dark-img": "illustrations/girl-verify-password-dark.png","data-app-light-img": "illustrations/girl-verify-password-light.png"})
													)
												),
												DIV({class: "onboarding-content"},
													H4({class: "onboarding-title text-body"},
														SPAN({text: "Example Request Information"})
													),
													DIV({class: "onboarding-info"},
														SPAN({text: "In this example you can see a form where you can request some\r\n                          additional information from the customer when they land on the app page."})
													),
													FORM({},
														DIV({class: "row"},
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "nameEx2",class: "form-label"},
																		SPAN({text: "Your Full Name"})
																	),
																	INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx2"})
																)
															),
															DIV({class: "col-sm-6"},
																DIV({class: "mb-3"},
																	LABEL({for: "roleEx2",class: "form-label"},
																		SPAN({text: "Your Role"})
																	),
																	SELECT({class: "form-select",tabindex: "0",id: "roleEx2"},
																		OPTION({},
																			SPAN({text: "Web Developer"})
																		),
																		OPTION({},
																			SPAN({text: "Business Owner"})
																		),
																		OPTION({},
																			SPAN({text: "Other"})
																		)
																	)
																)
															)
														)
													)
												)
											)
										),
										A({class: "carousel-control-prev",href: "#modalCarouselControls",role: "button","data-bs-slide": "prev"},
											I({class: "bx bx-chevrons-left lh-1"}),
											SPAN({},
												SPAN({text: "Previous"})
											)
										),
										A({class: "carousel-control-next",href: "#modalCarouselControls",role: "button","data-bs-slide": "next"},
											SPAN({},
												SPAN({text: "Next"})
											),
											I({class: "bx bx-chevrons-right lh-1"})
										)
									)
								)
							)
						),
						DIV({class: "modal-onboarding modal fade animate__animated",id: "onboardImageModal",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
							DIV({class: "modal-dialog",role: "document"},
								DIV({class: "modal-content text-center"},
									DIV({class: "modal-header border-0"},
										A({class: "text-muted close-label",href: "javascript:void(0);","data-bs-dismiss": "modal"},
											SPAN({text: "Skip Intro"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body p-0"},
										DIV({class: "onboarding-media"},
											DIV({class: "mx-2"},
												IMG({src: "../../assets/img/illustrations/girl-unlock-password-light.png",alt: "girl-unlock-password-light",width: "335",class: "img-fluid","data-app-dark-img": "illustrations/girl-unlock-password-dark.png","data-app-light-img": "illustrations/girl-unlock-password-light.png"})
											)
										),
										DIV({class: "onboarding-content mb-0"},
											H4({class: "onboarding-title text-body"},
												SPAN({text: "Example Request Information"})
											),
											DIV({class: "onboarding-info"},
												SPAN({text: "In this example you can see a form where you can request some additional\r\n                      information from the customer when they land on the app page."})
											),
											FORM({},
												DIV({class: "row"},
													DIV({class: "col-sm-6"},
														DIV({class: "mb-3"},
															LABEL({for: "nameEx3",class: "form-label"},
																SPAN({text: "Your Full Name"})
															),
															INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx3"})
														)
													),
													DIV({class: "col-sm-6"},
														DIV({class: "mb-3"},
															LABEL({for: "roleEx3",class: "form-label"},
																SPAN({text: "Your Role"})
															),
															SELECT({class: "form-select",tabindex: "0",id: "roleEx3"},
																OPTION({},
																	SPAN({text: "Web Developer"})
																),
																OPTION({},
																	SPAN({text: "Business Owner"})
																),
																OPTION({},
																	SPAN({text: "Other"})
																)
															)
														)
													)
												)
											)
										)
									),
									DIV({class: "modal-footer border-0"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Submit"})
										)
									)
								)
							)
						),
						DIV({class: "demo-inline-spacing"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#onboardingSlideModal"},
								SPAN({text: "Multistep\r\n              Slider modal"})
							),
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#onboardImageModal"},
								SPAN({text: "Modal with form"})
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Horizontal Onboarding Modals"})
						),
						DIV({class: "modal-onboarding modal fade animate__animated",id: "onboardingHorizontalSlideModal",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-xl",role: "document"},
								DIV({class: "modal-content text-center"},
									DIV({class: "modal-header border-0"},
										A({class: "text-muted close-label",href: "javascript:void(0);","data-bs-dismiss": "modal"},
											SPAN({text: "Skip Intro"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({id: "modalHorizontalCarouselControls",class: "carousel slide pb-4 mb-2","data-bs-interval": "false"},
										OL({class: "carousel-indicators"},
											LI({"data-bs-target": "#modalHorizontalCarouselControls","data-bs-slide-to": "0",class: ""}),
											LI({"data-bs-target": "#modalHorizontalCarouselControls","data-bs-slide-to": "1",class: "active","aria-current": "true"}),
											LI({"data-bs-target": "#modalHorizontalCarouselControls","data-bs-slide-to": "2"})
										),
										DIV({class: "carousel-inner",style: "height: 266.359px;"},
											DIV({class: "carousel-item"},
												DIV({class: "onboarding-horizontal"},
													DIV({class: "onboarding-media"},
														IMG({src: "../../assets/img/illustrations/boy-with-rocket-light.png",alt: "boy-with-rocket-light",width: "273",class: "img-fluid","data-app-dark-img": "illustrations/boy-with-rocket-dark.png","data-app-light-img": "illustrations/boy-with-rocket-light.png"})
													),
													DIV({class: "onboarding-content"},
														H4({class: "onboarding-title text-body"},
															SPAN({text: "Example Request Information"})
														),
														DIV({class: "onboarding-info"},
															SPAN({text: "In this example you can see a form where you can request some\r\n                            additional information from the customer when they land on the app page."})
														),
														FORM({},
															DIV({class: "row"},
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "nameEx4",class: "form-label"},
																			SPAN({text: "Your Full Name"})
																		),
																		INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx4"})
																	)
																),
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "roleEx4",class: "form-label"},
																			SPAN({text: "Your Role"})
																		),
																		SELECT({class: "form-select",tabindex: "0",id: "roleEx4"},
																			OPTION({},
																				SPAN({text: "Web Developer"})
																			),
																			OPTION({},
																				SPAN({text: "Business Owner"})
																			),
																			OPTION({},
																				SPAN({text: "Other"})
																			)
																		)
																	)
																)
															)
														)
													)
												)
											),
											DIV({class: "carousel-item active",style: ""},
												DIV({class: "onboarding-horizontal"},
													DIV({class: "onboarding-media"},
														IMG({src: "../../assets/img/illustrations/girl-doing-yoga-light.png",alt: "boy-with-rocket-light",width: "273",class: "img-fluid","data-app-dark-img": "illustrations/girl-doing-yoga-dark.png","data-app-light-img": "illustrations/girl-doing-yoga-light.png"})
													),
													DIV({class: "onboarding-content"},
														H4({class: "onboarding-title text-body"},
															SPAN({text: "Example Request Information"})
														),
														DIV({class: "onboarding-info"},
															SPAN({text: "In this example you can see a form where you can request some\r\n                            additional information from the customer when they land on the app page."})
														),
														FORM({},
															DIV({class: "row"},
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "nameEx5",class: "form-label"},
																			SPAN({text: "Your Full Name"})
																		),
																		INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx5"})
																	)
																),
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "roleEx5",class: "form-label"},
																			SPAN({text: "Your Role"})
																		),
																		SELECT({class: "form-select",tabindex: "0",id: "roleEx5"},
																			OPTION({},
																				SPAN({text: "Web Developer"})
																			),
																			OPTION({},
																				SPAN({text: "Business Owner"})
																			),
																			OPTION({},
																				SPAN({text: "Other"})
																			)
																		)
																	)
																)
															)
														)
													)
												)
											),
											DIV({class: "carousel-item"},
												DIV({class: "onboarding-horizontal"},
													DIV({class: "onboarding-media"},
														IMG({src: "../../assets/img/illustrations/boy-with-laptop-light.png",alt: "boy-with-laptop-light",width: "273",class: "img-fluid","data-app-dark-img": "illustrations/boy-with-laptop-dark.png","data-app-light-img": "illustrations/boy-with-laptop-light.png"})
													),
													DIV({class: "onboarding-content"},
														H4({class: "onboarding-title text-body"},
															SPAN({text: "Example Request Information"})
														),
														DIV({class: "onboarding-info"},
															SPAN({text: "In this example you can see a form where you can request some\r\n                            additional information from the customer when they land on the app page."})
														),
														FORM({},
															DIV({class: "row"},
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "nameEx6",class: "form-label"},
																			SPAN({text: "Your Full Name"})
																		),
																		INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx6"})
																	)
																),
																DIV({class: "col-sm-6"},
																	DIV({class: "mb-3"},
																		LABEL({for: "roleEx6",class: "form-label"},
																			SPAN({text: "Your Role"})
																		),
																		SELECT({class: "form-select",tabindex: "0",id: "roleEx6"},
																			OPTION({},
																				SPAN({text: "Web Developer"})
																			),
																			OPTION({},
																				SPAN({text: "Business Owner"})
																			),
																			OPTION({},
																				SPAN({text: "Other"})
																			)
																		)
																	)
																)
															)
														)
													)
												)
											)
										),
										A({class: "carousel-control-prev",href: "#modalHorizontalCarouselControls",role: "button","data-bs-slide": "prev"},
											I({class: "bx bx-chevrons-left lh-1"}),
											SPAN({},
												SPAN({text: "Previous"})
											)
										),
										A({class: "carousel-control-next",href: "#modalHorizontalCarouselControls",role: "button","data-bs-slide": "next"},
											SPAN({},
												SPAN({text: "Next"})
											),
											I({class: "bx bx-chevrons-right lh-1"})
										)
									)
								)
							)
						),
						DIV({class: "modal-onboarding modal fade animate__animated",id: "onboardHorizontalImageModal",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
							DIV({class: "modal-dialog modal-xl",role: "document"},
								DIV({class: "modal-content text-center"},
									DIV({class: "modal-header border-0"},
										A({class: "text-muted close-label",href: "javascript:void(0);","data-bs-dismiss": "modal"},
											SPAN({text: "Skip Intro"})
										),
										BUTTON({type: "button",class: "btn-close","data-bs-dismiss": "modal","aria-label": "Close"})
									),
									DIV({class: "modal-body onboarding-horizontal p-0"},
										DIV({class: "onboarding-media"},
											IMG({src: "../../assets/img/illustrations/boy-verify-email-light.png",alt: "boy-verify-email-light",width: "273",class: "img-fluid","data-app-dark-img": "illustrations/boy-verify-email-dark.png","data-app-light-img": "illustrations/boy-verify-email-light.png"})
										),
										DIV({class: "onboarding-content mb-0"},
											H4({class: "onboarding-title text-body"},
												SPAN({text: "Example Request Information"})
											),
											DIV({class: "onboarding-info"},
												SPAN({text: "In this example you can see a form where you can request some additional\r\n                      information from the customer when they land on the app page."})
											),
											FORM({},
												DIV({class: "row"},
													DIV({class: "col-sm-6"},
														DIV({class: "mb-3"},
															LABEL({for: "nameEx7",class: "form-label"},
																SPAN({text: "Your Full Name"})
															),
															INPUT({class: "form-control",placeholder: "Enter your full name...",type: "text",value: "",tabindex: "0",id: "nameEx7"})
														)
													),
													DIV({class: "col-sm-6"},
														DIV({class: "mb-3"},
															LABEL({for: "roleEx7",class: "form-label"},
																SPAN({text: "Your Role"})
															),
															SELECT({class: "form-select",tabindex: "0",id: "roleEx7"},
																OPTION({},
																	SPAN({text: "Web Developer"})
																),
																OPTION({},
																	SPAN({text: "Business Owner"})
																),
																OPTION({},
																	SPAN({text: "Other"})
																)
															)
														)
													)
												)
											)
										)
									),
									DIV({class: "modal-footer border-0"},
										BUTTON({type: "button",class: "btn btn-label-secondary","data-bs-dismiss": "modal"},
											SPAN({text: "Close"})
										),
										BUTTON({type: "button",class: "btn btn-primary"},
											SPAN({text: "Submit"})
										)
									)
								)
							)
						),
						DIV({class: "demo-inline-spacing"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#onboardingHorizontalSlideModal"},
								SPAN({text: "Multistep Slider modal"})
							),
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#onboardHorizontalImageModal"},
								SPAN({text: "Modal with form"})
							)
						)
					),
					DIV({class: "col-lg-4 col-md-6"},
						SMALL({class: "text-light fw-semibold"},
							SPAN({text: "Transparent Modal"})
						),
						DIV({class: "mt-3"},
							BUTTON({type: "button",class: "btn btn-primary","data-bs-toggle": "modal","data-bs-target": "#modals-transparent"},
								SPAN({text: "Show"})
							),
							DIV({class: "modal modal-transparent fade",id: "modals-transparent",tabindex: "-1",style: "display: none;","aria-hidden": "true"},
								DIV({class: "modal-dialog"},
									DIV({class: "modal-content"},
										DIV({class: "modal-body"},
											A({href: "javascript:void(0);",class: "btn-close text-white","data-bs-dismiss": "modal","aria-label": "Close"}),
											P({class: "text-white text-large fw-light mb-3"},
												SPAN({text: "Subscribe to get latest updates"})
											),
											DIV({class: "input-group input-group-lg mb-3"},
												INPUT({type: "text",class: "form-control bg-white border-0",placeholder: "Your email","aria-describedby": "subscribe"}),
												BUTTON({class: "btn btn-primary",type: "button",id: "subscribe"},
													SPAN({text: "Subscribe"})
												)
											),
											DIV({class: "text-start text-white opacity-50"},
												SPAN({text: "We won't share your email address"})
											)
										)
									)
								)
							)
						)
					)
				)
			)
		)
	)
]