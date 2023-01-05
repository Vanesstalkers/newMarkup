async ({ streamId, name, form, code }) => {
  try {
    const user = context.user;
    const processForm = user.forms[form];
    if (!processForm) return { result: 'error', msg: `Form (form=${form}) not found` };
    const field = processForm.fields[code];
    if (!field) return { result: 'error', msg: `Field (code=${code}) not found` };
    const parent = processForm.fields[field.parentCode];
    const parentData = processForm.data[field.parentCode];
    const fileDir = `upload/${parent.col}/${parentData._id.toString()}/`;
    const fileName = Date.now() + Math.random() + '.' + name.split('.').pop();
    const pathPrefix = './application/static/';
    await node.fsp.mkdir(pathPrefix + fileDir, { recursive: true });

    const readable = context.client.getStream(streamId);
    const writable = node.fs.createWriteStream(pathPrefix + fileDir + fileName);
    readable.pipe(writable);
    return { result: 'success', data: { uploadPath: fileDir + fileName } };
  } catch (err) {
    return { result: 'error', msg: err.message, stack: err.stack };
  }
};
