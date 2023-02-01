async ({ data }) => {
  const existCompany = await db.mongo.findOne('ce', { inn: data.inn });
  if (existCompany !== null) throw new Error(`Company with INN='${data.inn}' already exists.`);

  const ce = await db.addComplex({ name: 'ce', data: { name: data.name, inn: data.inn } });
  const company = await db.addComplex({
    name: 'company',
    col: data.type,
    data: { name: data.name },
    parents: [{ name: 'ce', _id: ce._id }],
    links: { company: { ce: '__ce' }, ce: `__${data.type}` },
  });
  const regRequest = await db.addComplex({
    name: 'reg_request',
    parents: [{ name: data.type, _id: company._id }],
    links: { reg_request: { [data.type]: `__${data.type}` }, [data.type]: `__reg_request` },
    data: {
      status: [domain.reg_request['lst~status'].find(({ v }) => v === 'draft')],
      registration: false,
      company_type: data.type,
    },
  });

  const login = Math.random().toString().slice(-5);
  const hash = await metarhia.metautil.hashPassword(data.password);
  const roles = [
    {
      role: 'registrator',
      reg_request_id: regRequest._id,
      link: [{ l: data.name, v: ce._id.toString() }],
    },
  ];

  const user = await db.mongo.insertOne('user', { login, password: hash });
  const pp = await db.addComplex({
    name: 'pp',
    parents: [{ name: 'user', _id: user._id }],
    links: { pp: { user: '__user' }, user: '__pp' },
  });
  for (const { role, link, reg_request_id } of roles) {
    await db.addComplex({
      name: 'user_role',
      parents: [{ name: 'user', _id: user._id }],
      links: { user_role: { user: '__user' }, user: '__user_role' },
      data: { role: [domain.user['lst~roles'].find(({ v }) => v === role)], link, reg_request_id },
    });
  }
  if (data.phone) {
    await db.addComplex({
      name: 'phone',
      parents: [{ name: 'pp', _id: pp._id }],
      links: { phone: { pp: '__pp' }, pp: '__phone' },
      data: { num: data.phone },
    });
  }
  if (data.email) {
    await db.addComplex({
      name: 'email',
      parents: [{ name: 'pp', _id: pp._id }],
      links: { email: { pp: '__pp' }, pp: '__email' },
      data: { mail: data.email },
    });
  }

  await db.addComplex({
    name: 'worker',
    parents: [
      { name: 'pp', _id: pp._id },
      { name: 'ce', _id: ce._id },
    ],
    links: { worker: { pp: '__pp', ce: '__ce' }, pp: '__worker', ce: '__worker' },
    data: {
      type: [domain.worker['lst~type'].find(({ v }) => v === 'manager')],
      company: [{ v: ce._id, l: data.name }],
    },
  });

  return { login, user };
};
