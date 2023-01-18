({
  access: 'public',
  method: async ({ roleId }) => {
    const { user } = context;
    const [dbUser] = await db.mongo.aggregate('user', [
      { $match: { _id: user._id } },
      {
        $lookup: {
          from: 'user_role',
          localField: '__user_role.l',
          foreignField: '_id',
          pipeline: [{ $project: { _id: 1, role: 1, link: 1 } }],
          as: 'roles',
        },
      },
    ]);
    const $set = { current: db.mongo.ObjectID(roleId) };
    db.mongo.updateOne('user', user._id, { $set });
    const {
      role: [{ value: roleCode }],
      link: [link] = [],
    } = dbUser.roles.find(({ _id }) => _id.toString() === roleId);
    const newCurrent = domain.user['lst~roles'].find(({ v }) => v === roleCode) || {};
    newCurrent.link = link;
    context.user = { ...user, current: newCurrent };
    console.log('context.user=', context.user);
    return true;
  },
});
