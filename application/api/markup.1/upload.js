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
    const fileName = `${Date.now()}_${name}`;
    const uploadPath = `./application/static/${fileDir}`;
    await node.fsp.mkdir(uploadPath, { recursive: true });

    const readable = context.client.getStream(streamId);
    const writable = node.fs.createWriteStream(uploadPath + fileName);
    readable.pipe(writable);
    return { result: 'success', data: { uploadPath: fileDir + fileName } };
  } catch (err) {
    return { result: 'error', msg: err.message, stack: err.stack };
  }
};
