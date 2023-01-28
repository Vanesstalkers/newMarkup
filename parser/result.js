[
	DIV({class: "d-flex col-lg-8 align-items-center justify-content-center authentication-bg p-sm-5 p-3"},
		DIV({class: "w-px-700"},
			DIV({id: "multiStepsValidation",class: "bs-stepper shadow-none linear"},
				DIV({class: "bs-stepper-header border-bottom-0"},
					DIV({class: "step active","data-target": "#accountDetailsValidation"},
						BUTTON({type: "button",class: "step-trigger","aria-selected": "true"},
							SPAN({class: "bs-stepper-circle"},
								I({class: "bx bx-home-alt"})
							),
							SPAN({class: "bs-stepper-label mt-1"},
								SPAN({class: "bs-stepper-title"},
									SPAN({text: "Account"})
								),
								SPAN({class: "bs-stepper-subtitle"},
									SPAN({text: "Account Details"})
								)
							)
						)
					),
					DIV({class: "line"},
						I({class: "bx bx-chevron-right"})
					),
					DIV({class: "step","data-target": "#personalInfoValidation"},
						BUTTON({type: "button",class: "step-trigger","aria-selected": "false",disabled: "disabled"},
							SPAN({class: "bs-stepper-circle"},
								I({class: "bx bx-user"})
							),
							SPAN({class: "bs-stepper-label mt-1"},
								SPAN({class: "bs-stepper-title"},
									SPAN({text: "Personal"})
								),
								SPAN({class: "bs-stepper-subtitle"},
									SPAN({text: "Enter Information"})
								)
							)
						)
					),
					DIV({class: "line"},
						I({class: "bx bx-chevron-right"})
					),
					DIV({class: "step","data-target": "#billingLinksValidation"},
						BUTTON({type: "button",class: "step-trigger","aria-selected": "false",disabled: "disabled"},
							SPAN({class: "bs-stepper-circle"},
								I({class: "bx bx-detail"})
							),
							SPAN({class: "bs-stepper-label mt-1"},
								SPAN({class: "bs-stepper-title"},
									SPAN({text: "Billing"})
								),
								SPAN({class: "bs-stepper-subtitle"},
									SPAN({text: "Payment Details"})
								)
							)
						)
					)
				),
				DIV({class: "bs-stepper-content"},
					FORM({id: "multiStepsForm",onsubmit: "return false"},
						DIV({id: "accountDetailsValidation",class: "content active dstepper-block fv-plugins-bootstrap5 fv-plugins-framework"},
							DIV({class: "content-header mb-3"},
								H3({class: "mb-1"},
									SPAN({text: "Account Information"})
								),
								SPAN({},
									SPAN({text: "Enter Your Account Details"})
								)
							),
							DIV({class: "row g-3"},
								DIV({class: "col-sm-6 fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid"},
									LABEL({class: "form-label",for: "multiStepsUsername"},
										SPAN({text: "Username"})
									),
									INPUT({type: "text",name: "multiStepsUsername",id: "multiStepsUsername",class: "form-control is-invalid",placeholder: "johndoe"}),
									DIV({class: "fv-plugins-message-container invalid-feedback"},
										DIV({"data-field": "multiStepsUsername","data-validator": "notEmpty"},
											SPAN({text: "Please enter username"})
										)
									)
								),
								DIV({class: "col-sm-6 fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid"},
									LABEL({class: "form-label",for: "multiStepsEmail"},
										SPAN({text: "Email"})
									),
									INPUT({type: "email",name: "multiStepsEmail",id: "multiStepsEmail",class: "form-control is-invalid",placeholder: "john.doe@email.com","aria-label": "john.doe"}),
									DIV({class: "fv-plugins-message-container invalid-feedback"},
										DIV({"data-field": "multiStepsEmail","data-validator": "notEmpty"},
											SPAN({text: "Please enter email address"})
										)
									)
								),
								DIV({class: "col-sm-6 form-password-toggle fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid"},
									LABEL({class: "form-label",for: "multiStepsPass"},
										SPAN({text: "Password"})
									),
									DIV({class: "input-group input-group-merge has-validation"},
										INPUT({type: "password",id: "multiStepsPass",name: "multiStepsPass",class: "form-control is-invalid",placeholder: "············","aria-describedby": "multiStepsPass2"}),
										SPAN({class: "input-group-text cursor-pointer",id: "multiStepsPass2"},
											I({class: "bx bx-hide"})
										)
									),
									DIV({class: "fv-plugins-message-container invalid-feedback"},
										DIV({"data-field": "multiStepsPass","data-validator": "notEmpty"},
											SPAN({text: "Please enter password"})
										)
									)
								),
								DIV({class: "col-sm-6 form-password-toggle fv-plugins-icon-container fv-plugins-bootstrap5-row-invalid"},
									LABEL({class: "form-label",for: "multiStepsConfirmPass"},
										SPAN({text: "Confirm Password"})
									),
									DIV({class: "input-group input-group-merge has-validation"},
										INPUT({type: "password",id: "multiStepsConfirmPass",name: "multiStepsConfirmPass",class: "form-control is-invalid",placeholder: "············","aria-describedby": "multiStepsConfirmPass2"}),
										SPAN({class: "input-group-text cursor-pointer",id: "multiStepsConfirmPass2"},
											I({class: "bx bx-hide"})
										)
									),
									DIV({class: "fv-plugins-message-container invalid-feedback"},
										DIV({"data-field": "multiStepsConfirmPass","data-validator": "notEmpty"},
											SPAN({text: "Confirm Password is required"})
										)
									)
								),
								DIV({class: "col-md-12"},
									LABEL({class: "form-label",for: "multiStepsURL"},
										SPAN({text: "Profile Link"})
									),
									INPUT({type: "text",name: "multiStepsURL",id: "multiStepsURL",class: "form-control",placeholder: "johndoe/profile","aria-label": "johndoe"})
								),
								DIV({class: "col-12 d-flex justify-content-between"},
									BUTTON({class: "btn btn-label-secondary btn-prev",disabled: ""},
										I({class: "bx bx-chevron-left bx-sm ms-sm-n2"}),
										SPAN({class: "align-middle d-sm-inline-block d-none"},
											SPAN({text: "Previous"})
										)
									),
									BUTTON({class: "btn btn-primary btn-next"},
										SPAN({class: "align-middle d-sm-inline-block d-none me-sm-1 me-0"},
											SPAN({text: "Next"})
										),
										I({class: "bx bx-chevron-right bx-sm me-sm-n2"})
									)
								)
							)
						),
						DIV({id: "personalInfoValidation",class: "content fv-plugins-bootstrap5 fv-plugins-framework"},
							DIV({class: "content-header mb-3"},
								H3({class: "mb-1"},
									SPAN({text: "Personal Information"})
								),
								SPAN({},
									SPAN({text: "Enter Your Personal Information"})
								)
							),
							DIV({class: "row g-3"},
								DIV({class: "col-sm-6 fv-plugins-icon-container"},
									LABEL({class: "form-label",for: "multiStepsFirstName"},
										SPAN({text: "First Name"})
									),
									INPUT({type: "text",id: "multiStepsFirstName",name: "multiStepsFirstName",class: "form-control",placeholder: "John"}),
									DIV({class: "fv-plugins-message-container invalid-feedback"})
								),
								DIV({class: "col-sm-6"},
									LABEL({class: "form-label",for: "multiStepsLastName"},
										SPAN({text: "Last Name"})
									),
									INPUT({type: "text",id: "multiStepsLastName",name: "multiStepsLastName",class: "form-control",placeholder: "Doe"})
								),
								DIV({class: "col-sm-6"},
									LABEL({class: "form-label",for: "multiStepsMobile"},
										SPAN({text: "Mobile"})
									),
									DIV({class: "input-group input-group-merge"},
										SPAN({class: "input-group-text"},
											SPAN({text: "US (+1)"})
										),
										INPUT({type: "text",id: "multiStepsMobile",name: "multiStepsMobile",class: "form-control multi-steps-mobile",placeholder: "202 555 0111"})
									)
								),
								DIV({class: "col-sm-6"},
									LABEL({class: "form-label",for: "multiStepsPincode"},
										SPAN({text: "Pincode"})
									),
									INPUT({type: "text",id: "multiStepsPincode",name: "multiStepsPincode",class: "form-control multi-steps-pincode",placeholder: "Postal Code",maxlength: "6"})
								),
								DIV({class: "col-md-12 fv-plugins-icon-container"},
									LABEL({class: "form-label",for: "multiStepsAddress"},
										SPAN({text: "Address"})
									),
									INPUT({type: "text",id: "multiStepsAddress",name: "multiStepsAddress",class: "form-control",placeholder: "Address"}),
									DIV({class: "fv-plugins-message-container invalid-feedback"})
								),
								DIV({class: "col-md-12"},
									LABEL({class: "form-label",for: "multiStepsArea"},
										SPAN({text: "Landmark"})
									),
									INPUT({type: "text",id: "multiStepsArea",name: "multiStepsArea",class: "form-control",placeholder: "Area/Landmark"})
								),
								DIV({class: "col-sm-6"},
									LABEL({class: "form-label",for: "multiStepsCity"},
										SPAN({text: "City"})
									),
									INPUT({type: "text",id: "multiStepsCity",class: "form-control",placeholder: "Jackson"})
								),
								DIV({class: "col-sm-6"},
									LABEL({class: "form-label",for: "multiStepsState"},
										SPAN({text: "State"})
									),
									DIV({class: "position-relative"},
										SELECT({id: "multiStepsState",class: "select2 form-select select2-hidden-accessible","data-allow-clear": "true","data-select2-id": "multiStepsState",tabindex: "-1","aria-hidden": "true"},
											OPTION({value: "","data-select2-id": "2"},
												SPAN({text: "Select"})
											),
											OPTION({value: "AL"},
												SPAN({text: "Alabama"})
											),
											OPTION({value: "AK"},
												SPAN({text: "Alaska"})
											),
											OPTION({value: "AZ"},
												SPAN({text: "Arizona"})
											),
											OPTION({value: "AR"},
												SPAN({text: "Arkansas"})
											),
											OPTION({value: "CA"},
												SPAN({text: "California"})
											),
											OPTION({value: "CO"},
												SPAN({text: "Colorado"})
											),
											OPTION({value: "CT"},
												SPAN({text: "Connecticut"})
											),
											OPTION({value: "DE"},
												SPAN({text: "Delaware"})
											),
											OPTION({value: "DC"},
												SPAN({text: "District Of Columbia"})
											),
											OPTION({value: "FL"},
												SPAN({text: "Florida"})
											),
											OPTION({value: "GA"},
												SPAN({text: "Georgia"})
											),
											OPTION({value: "HI"},
												SPAN({text: "Hawaii"})
											),
											OPTION({value: "ID"},
												SPAN({text: "Idaho"})
											),
											OPTION({value: "IL"},
												SPAN({text: "Illinois"})
											),
											OPTION({value: "IN"},
												SPAN({text: "Indiana"})
											),
											OPTION({value: "IA"},
												SPAN({text: "Iowa"})
											),
											OPTION({value: "KS"},
												SPAN({text: "Kansas"})
											),
											OPTION({value: "KY"},
												SPAN({text: "Kentucky"})
											),
											OPTION({value: "LA"},
												SPAN({text: "Louisiana"})
											),
											OPTION({value: "ME"},
												SPAN({text: "Maine"})
											),
											OPTION({value: "MD"},
												SPAN({text: "Maryland"})
											),
											OPTION({value: "MA"},
												SPAN({text: "Massachusetts"})
											),
											OPTION({value: "MI"},
												SPAN({text: "Michigan"})
											),
											OPTION({value: "MN"},
												SPAN({text: "Minnesota"})
											),
											OPTION({value: "MS"},
												SPAN({text: "Mississippi"})
											),
											OPTION({value: "MO"},
												SPAN({text: "Missouri"})
											),
											OPTION({value: "MT"},
												SPAN({text: "Montana"})
											),
											OPTION({value: "NE"},
												SPAN({text: "Nebraska"})
											),
											OPTION({value: "NV"},
												SPAN({text: "Nevada"})
											),
											OPTION({value: "NH"},
												SPAN({text: "New Hampshire"})
											),
											OPTION({value: "NJ"},
												SPAN({text: "New Jersey"})
											),
											OPTION({value: "NM"},
												SPAN({text: "New Mexico"})
											),
											OPTION({value: "NY"},
												SPAN({text: "New York"})
											),
											OPTION({value: "NC"},
												SPAN({text: "North Carolina"})
											),
											OPTION({value: "ND"},
												SPAN({text: "North Dakota"})
											),
											OPTION({value: "OH"},
												SPAN({text: "Ohio"})
											),
											OPTION({value: "OK"},
												SPAN({text: "Oklahoma"})
											),
											OPTION({value: "OR"},
												SPAN({text: "Oregon"})
											),
											OPTION({value: "PA"},
												SPAN({text: "Pennsylvania"})
											),
											OPTION({value: "RI"},
												SPAN({text: "Rhode Island"})
											),
											OPTION({value: "SC"},
												SPAN({text: "South Carolina"})
											),
											OPTION({value: "SD"},
												SPAN({text: "South Dakota"})
											),
											OPTION({value: "TN"},
												SPAN({text: "Tennessee"})
											),
											OPTION({value: "TX"},
												SPAN({text: "Texas"})
											),
											OPTION({value: "UT"},
												SPAN({text: "Utah"})
											),
											OPTION({value: "VT"},
												SPAN({text: "Vermont"})
											),
											OPTION({value: "VA"},
												SPAN({text: "Virginia"})
											),
											OPTION({value: "WA"},
												SPAN({text: "Washington"})
											),
											OPTION({value: "WV"},
												SPAN({text: "West Virginia"})
											),
											OPTION({value: "WI"},
												SPAN({text: "Wisconsin"})
											),
											OPTION({value: "WY"},
												SPAN({text: "Wyoming"})
											)
										),
										SPAN({class: "select2 select2-container select2-container--default",dir: "ltr","data-select2-id": "1",style: "width: auto;"},
											SPAN({class: "selection"},
												SPAN({class: "select2-selection select2-selection--single",role: "combobox","aria-haspopup": "true","aria-expanded": "false",tabindex: "0","aria-disabled": "false","aria-labelledby": "select2-multiStepsState-container"},
													SPAN({class: "select2-selection__rendered",id: "select2-multiStepsState-container",role: "textbox","aria-readonly": "true"},
														SPAN({class: "select2-selection__placeholder"},
															SPAN({text: "Select an country"})
														)
													),
													SPAN({class: "select2-selection__arrow",role: "presentation"},
														B({role: "presentation"})
													)
												)
											),
											SPAN({class: "dropdown-wrapper","aria-hidden": "true"})
										)
									)
								),
								DIV({class: "col-12 d-flex justify-content-between"},
									BUTTON({class: "btn btn-primary btn-prev"},
										I({class: "bx bx-chevron-left bx-sm ms-sm-n2"}),
										SPAN({class: "align-middle d-sm-inline-block d-none"},
											SPAN({text: "Previous"})
										)
									),
									BUTTON({class: "btn btn-primary btn-next"},
										SPAN({class: "align-middle d-sm-inline-block d-none me-sm-1 me-0"},
											SPAN({text: "Next"})
										),
										I({class: "bx bx-chevron-right bx-sm me-sm-n2"})
									)
								)
							)
						),
						DIV({id: "billingLinksValidation",class: "content fv-plugins-bootstrap5 fv-plugins-framework"},
							DIV({class: "content-header mb-3"},
								H3({class: "mb-1"},
									SPAN({text: "Select Plan"})
								),
								SPAN({},
									SPAN({text: "Select plan as per your requirement"})
								)
							),
							DIV({class: "row gap-md-0 gap-3 mb-4"},
								DIV({class: "col-md"},
									DIV({class: "form-check custom-option custom-option-icon"},
										LABEL({class: "form-check-label custom-option-content",for: "basicOption"},
											SPAN({class: "custom-option-body"},
												H4({class: "mb-2"},
													SPAN({text: "Basic"})
												),
												P({class: "mb-2"},
													SPAN({text: "A simple start for start ups &amp; Students"})
												),
												SPAN({class: "d-flex justify-content-center"},
													SUP({class: "text-primary fs-big lh-1 mt-3"},
														SPAN({text: "$"})
													),
													SPAN({class: "display-5 text-primary"},
														SPAN({text: "0"})
													),
													SUB({class: "lh-1 fs-big mt-auto mb-2 text-muted"},
														SPAN({text: "/month"})
													)
												)
											),
											INPUT({name: "customRadioIcon",class: "form-check-input",type: "radio",value: "",id: "basicOption"})
										)
									)
								),
								DIV({class: "col-md"},
									DIV({class: "form-check custom-option custom-option-icon checked"},
										LABEL({class: "form-check-label custom-option-content",for: "standardOption"},
											SPAN({class: "custom-option-body"},
												H4({class: "mb-2"},
													SPAN({text: "Standard"})
												),
												P({class: "mb-2"},
													SPAN({text: "For small to medium businesses"})
												),
												SPAN({class: "d-flex justify-content-center"},
													SUP({class: "text-primary fs-big lh-1 mt-3"},
														SPAN({text: "$"})
													),
													SPAN({class: "display-5 text-primary"},
														SPAN({text: "99"})
													),
													SUB({class: "lh-1 fs-big mt-auto mb-2 text-muted"},
														SPAN({text: "/month"})
													)
												)
											),
											INPUT({name: "customRadioIcon",class: "form-check-input",type: "radio",value: "",id: "standardOption",checked: ""})
										)
									)
								),
								DIV({class: "col-md"},
									DIV({class: "form-check custom-option custom-option-icon"},
										LABEL({class: "form-check-label custom-option-content",for: "enterpriseOption"},
											SPAN({class: "custom-option-body"},
												H4({class: "mb-2"},
													SPAN({text: "Enterprise"})
												),
												P({class: "mb-2"},
													SPAN({text: "Solution for enterprise &amp; organizations"})
												),
												SPAN({class: "d-flex justify-content-center"},
													SUP({class: "text-primary fs-big lh-1 mt-3"},
														SPAN({text: "$"})
													),
													SPAN({class: "display-5 text-primary"},
														SPAN({text: "499"})
													),
													SUB({class: "lh-1 fs-big mt-auto mb-2 text-muted"},
														SPAN({text: "/year"})
													)
												)
											),
											INPUT({name: "customRadioIcon",class: "form-check-input",type: "radio",value: "",id: "enterpriseOption"})
										)
									)
								)
							),
							DIV({class: "content-header mb-3"},
								H3({class: "mb-1"},
									SPAN({text: "Payment Information"})
								),
								SPAN({},
									SPAN({text: "Enter your card information"})
								)
							),
							DIV({class: "row g-3"},
								DIV({class: "col-md-12 fv-plugins-icon-container"},
									LABEL({class: "form-label w-100",for: "multiStepsCard"},
										SPAN({text: "Card Number"})
									),
									DIV({class: "input-group input-group-merge has-validation"},
										INPUT({id: "multiStepsCard",class: "form-control multi-steps-card",name: "multiStepsCard",type: "text",placeholder: "1356 3215 6548 7898","aria-describedby": "multiStepsCardImg"}),
										SPAN({class: "input-group-text cursor-pointer",id: "multiStepsCardImg"},
											SPAN({class: "card-type"})
										)
									),
									DIV({class: "fv-plugins-message-container invalid-feedback"})
								),
								DIV({class: "col-md-5"},
									LABEL({class: "form-label",for: "multiStepsName"},
										SPAN({text: "Name On Card"})
									),
									INPUT({type: "text",id: "multiStepsName",class: "form-control",name: "multiStepsName",placeholder: "John Doe"})
								),
								DIV({class: "col-6 col-md-4"},
									LABEL({class: "form-label",for: "multiStepsExDate"},
										SPAN({text: "Expiry Date"})
									),
									INPUT({type: "text",id: "multiStepsExDate",class: "form-control multi-steps-exp-date",name: "multiStepsExDate",placeholder: "MM/YY"})
								),
								DIV({class: "col-6 col-md-3"},
									LABEL({class: "form-label",for: "multiStepsCvv"},
										SPAN({text: "CVV Code"})
									),
									DIV({class: "input-group input-group-merge"},
										INPUT({type: "text",id: "multiStepsCvv",class: "form-control multi-steps-cvv",name: "multiStepsCvv",maxlength: "3",placeholder: "654"}),
										SPAN({class: "input-group-text cursor-pointer",id: "multiStepsCvvHelp"},
											I({class: "bx bx-help-circle text-muted","data-bs-toggle": "tooltip","data-bs-placement": "top","aria-label": "Card Verification Value","data-bs-original-title": "Card Verification Value"})
										)
									)
								),
								DIV({class: "col-12 d-flex justify-content-between"},
									BUTTON({class: "btn btn-primary btn-prev"},
										I({class: "bx bx-chevron-left bx-sm ms-sm-n2"}),
										SPAN({class: "align-middle d-sm-inline-block d-none"},
											SPAN({text: "Previous"})
										)
									),
									BUTTON({type: "submit",class: "btn btn-success btn-next btn-submit"},
										SPAN({text: "Submit"})
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