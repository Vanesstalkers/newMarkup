[
  { v: '', l: '\xa0' },
  { v: 'guest', l: 'Гостевой доступ', baseForm: 'ce~main', hide: true, tutorial: true, helper: true },
  { v: 'admin', l: 'Супервизор', access: { admin: true }, baseForm: 'ce~list', tutorial: true, helper: true },
  { v: 'head', l: 'Администратор', access: { head: true }, tutorial: true, helper: true },
  // { v: 'fabricator_initial', l: 'Регистрация (производитель)', baseForm: 'fabricator~main', tutorial: true, helper: true },
  // { v: 'customer_initial', l: 'Регистрация (покупатель)', baseForm: 'customer~main', tutorial: true, helper: true },
  { v: 'fabricator_manager', l: 'Менеджер производителя', baseForm: 'ce~main', tutorial: true, helper: true, parentType: 'fabricator' },
  { v: 'customer_manager', l: 'Менеджер покупателя', baseForm: 'ce~main', tutorial: true, helper: true, parentType: 'customer' },
];
