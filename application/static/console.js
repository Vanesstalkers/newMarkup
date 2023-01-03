import { Metacom } from './metacom.js';

const { userAgent } = navigator;
const isMobile = () =>
  userAgent.match(/Android/i) ||
  userAgent.match(/webOS/i) ||
  userAgent.match(/iPhone/i) ||
  userAgent.match(/iPad/i) ||
  userAgent.match(/iPod/i) ||
  userAgent.match(/BlackBerry/i) ||
  userAgent.match(/Windows Phone/i);

const sleep = (msec) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, msec);
  });

const uploadFile = async (file) => {
  // createBlobUploader creates streamId and inits file reader for convenience
  const uploader = application.metacom.createBlobUploader(file);
  // Prepare backend file consumer
  await api.files.upload({
    streamId: uploader.streamId,
    name: file.name,
  });
  // Start uploading stream and wait for its end
  await uploader.upload();
  return { uploadedFile: file };
};

const downloadFile = async (name, type) => {
  // Init backend file producer to get streamId
  const { streamId } = await api.files.download({ name });
  // Get metacom readable stream
  const readable = await application.metacom.getStream(streamId);
  // Convert stream to blob to make a file on the client
  const blob = await readable.toBlob(type);
  return new File([blob], name);
};

const upload = () => {
  const element = document.createElement('form');
  element.style.visibility = 'hidden';
  element.innerHTML = '<input id="fileSelect" type="file" multiple />';
  document.body.appendChild(element);
  const fileSelect = document.getElementById('fileSelect');
  fileSelect.click();
  fileSelect.onchange = () => {
    const files = Array.from(fileSelect.files);
    application.print('Uploading ' + files.length + ' file(s)');
    files.sort((a, b) => a.size - b.size);
    let i = 0;
    const uploadNext = async () => {
      const file = files[i];
      await uploadFile(file);
      application.print(`name: ${file.name}, size: ${file.size} done`);
      i++;
      if (i < files.length) return uploadNext();
      document.body.removeChild(element);
      commandLoop();
      return null;
    };
    uploadNext();
  };
};

class Application {
  constructor() {
    const protocol = location.protocol === 'http:' ? 'ws' : 'wss';
    this.metacom = Metacom.create(`${protocol}://${location.host}/api`);
  }
}

window.addEventListener('load', async () => {
  window.application = new Application();
  window.api = window.application.metacom.api;
  await application.metacom.load('auth', 'console', 'example', 'files', 'markup');
  const token = localStorage.getItem('xaoc.session.token');
  let { form } = JSON.parse(decodeURI(location.hash.substring(1)) || '{}');

  let logged = false;
  // if (token) {
  const res = await api.auth.restore({ token });
  logged = res.status === 'logged';
  if (res.token) localStorage.setItem('xaoc.session.token', res.token);
  if (!form) form = res.baseForm;
  // }

  // if (!logged) {
  //   await api.auth.register({ login: 'marcus', password: 'marcus' });
  //   const res = await api.auth.signin({ login: 'marcus', password: 'marcus' });
  //   console.log({ res });
  //   if (res.token) {
  //     localStorage.setItem('xaoc.session.token', res.token);
  //   }
  // }
  document.cookie = `token=${localStorage.getItem('xaoc.session.token')}`;

  await window.api.markup.getForm({ form });
  const getForm = await window.api.markup.getForm({ form });
  if (getForm.result === 'error') return console.error(getForm.msg, getForm.stack);
  loadRes(`cache/${form}.func.js`, false, () => {
    nativeTplToHTML([getForm.data], document.body);
    loadRes(`cache/${form}.css`, false);
  });
});

window.addEventListener('hashchange', async (event) => {
  const routeQuery = JSON.parse(decodeURI(location.hash.substring(1)));
  console.log({ routeQuery });
});
