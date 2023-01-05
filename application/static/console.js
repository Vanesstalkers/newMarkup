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

window.waitForLoadRes = {};
const loadRes = function (src, onetime, callback, config = {}) {
  var type = 'js';
  if (src.substr(-4) == '.css') type = 'css';
  var res;
  if (type == 'js') {
    res = document.createElement('script');
    res.setAttribute('src', src);
    if (config.importance) res.setAttribute('importance', config.importance);
  } else if (type == 'css') {
    res = document.createElement('link');
    res.rel = 'stylesheet';
    res.type = 'text/css';
    res.href = src;
    res.media = 'all';
    if (config.id) res.id = config.id;
  }

  res.onload = function (e) {
    if (typeof callback == 'function') callback();
  };
  res.onerror = function (e) {
    if (typeof callback == 'function') callback();
  };

  document.head.appendChild(res);
};

const showForm = async ({ form, container, _id }) => {
  const $container = container ? document.getElementById(container) : document.body;
  const getForm = await window.api.markup.getForm({ form, _id });
  if (getForm.result === 'error') return console.error(getForm.msg, getForm.stack);
  loadRes(`cache/${form}.func.js`, false, () => {
    nativeTplToHTML([getForm.data], $container);
    loadRes(`cache/${form}.css`, false);
  });
};

window.nativeTplToHTML = function (deepEl, $parent) {
  if (!deepEl || !$parent) return;
  for (const el of deepEl) {
    if (!el) continue;
    if (el.type) {
      if (el.type === 'subform') {
        (async () => {
          const form = el.name;
          if (form) {
            const getForm = await window.api.markup.getForm({ form, codeSfx: el.code });
            if (getForm.result === 'error') return console.error(getForm.msg, getForm.stack);
            loadRes(`cache/${form}.func.js`, false, () => {
              nativeTplToHTML([getForm.data], $parent);
              loadRes(`cache/${form}.css`, false);
            });
          }
        })();
      } else if (el.type === 'complex' || el.type === 'form') {
        const { tpl, prepare } = window.el[el.elPath] || {};
        nativeTplToHTML([tpl(el)], $parent);
        const $block = $parent.querySelector(`.complex-block[code='${el.code}']`);
        if (prepare) prepare({ $el: $block, data: el });
        if (el.items) {
          for (const item of Object.values(el.items)) {
            const { tpl, prepare } = window.el[item.elPath] || {};
            if (typeof tpl === 'function') {
              nativeTplToHTML([tpl({ ...item, parent: el })], $block);
              const $item = $block.querySelector(`.complex-item[code='${item.code}']`);
              if (prepare) prepare({ $el: $item, data: item, parent: { data: el, $el: $block } });
              nativeTplToHTML(item.content, $item);
            }
          }
        }
      } else {
        const { tpl, prepare } = window.el[el.elPath] || {};
        if (tpl) {
          el.class = ['el', `el-${el.name.replace(/\./g, '_')}`, el.class].join(' ');
          nativeTplToHTML([tpl(el)], $parent);
          const $el = $parent.querySelector(`.el[code='${el.code}']`);

          if ($el) {
            $el.setAttribute('markup-code', el.code);
            if (el.on?.load) $el.setAttribute('markup-onload', el.on.load);
            $el.dataset.el = JSON.stringify(el);
            for (const [key, value] of Object.entries(el)) $el.dataset[key] = value;

            if (prepare) prepare({ $el, data: el });
          }
        }
      }
    } else {
      const el0 = el[0];
      switch (typeof el0) {
        case 'string':
          const [tag, options = {}, items] = el;
          const $el = document.createElement(tag);
          for (const [key, value] of Object.entries(options))
            $el.setAttribute(key, typeof value === 'object' ? JSON.stringify(value) : value);
          if (options.src) {
            $el.onload = () => {
              while (window.waitForLoadRes?.[options.src]?.length) {
                window.waitForLoadRes[options.src].shift()();
              }
            };
          }
          $parent.appendChild($el);
          if (options.text) $el.appendChild(document.createTextNode(options.text));
          if (items?.length) nativeTplToHTML(items, $el);
          break;
        case 'object':
          nativeTplToHTML(el, $parent);
          break;
      }
    }
  }
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

  console.log({ form });
  await window.api.markup.getForm({ form });
  await showForm({ form });

  new MutationObserver(function (mutationsList, observer) {
    console.log({ mutationsList });
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
      } else if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'markup-code') {
          // console.log('mutation', { code: mutation.target.getAttribute('markup-code'), mutation });
        }
        if (mutation.attributeName === 'markup-onload') {
          const funcName = mutation.target.getAttribute('markup-onload');
          if (window[funcName]) window[funcName](mutation.target);
        }
      }
    }
  }).observe(document.querySelector('body'), {
    attributes: true,
    attributeFilter: [/* 'markup-code',  */ 'markup-onload'],
    // childList: true,
    subtree: true,
    attributeOldValue: true,
  });
});

window.addEventListener('hashchange', async (event) => {
  const routeQuery = JSON.parse(decodeURI(location.hash.substring(1)));
  await showForm(routeQuery);
});

document.addEventListener('click', async (event) => {
  const $el = event.target;
  if ($el.closest('.complex-controls.control-add')) {
    const form = $el.closest('[type="form"]').dataset.name;
    const $block = $el.closest('.complex-block');
    const code = $block.dataset.code;
    const { result, data: item, msg, stack } = await api.markup.addComplex({ form, code });
    if (result === 'error') {
      console.error({ msg, stack });
    } else {
      const { tpl, prepare } = window.el[item.elPath] || {};
      nativeTplToHTML([tpl({ ...item, parent: $block.dataset })], $block);
      const $item = $block.querySelector(`.complex-item[code='${item.code}']`);
      if (prepare) prepare({ $el: $item, data: item, parent: { data: $block.dataset, $el: $block } });
      nativeTplToHTML(item.content, $item);
    }
  }
  if ($el.closest('.btn-delete')) {
    const form = $el.closest('[type="form"]').dataset.name;
    const $item = $el.closest('.complex-item');
    const code = $item.dataset.code;
    const { result, msg, stack } = await api.markup.deleteComplex({ form, code });
    if (result === 'error') console.error({ msg, stack });
    else if (result === 'success') $item.remove();
  }
  if ($el.closest('.btn-reload')) {
    const form = $el.closest('[type="form"]').dataset.name;
    const $block = $el.closest('.complex-block');
    const $item = $el.closest('.complex-item');
    const code = $item.dataset.code;
    const { result, data: item, msg, stack } = await api.markup.showComplex({ form, code });
    if (result === 'error') console.error({ msg, stack });
    else if (result === 'success') {
      item.class = (item.class || '') + ' reloaded';
      const { tpl, prepare } = window.el[item.elPath] || {};
      nativeTplToHTML([tpl({ ...item, parent: $block.dataset })], $block);
      const $newItem = $block.querySelector(`.reloaded.complex-item[code='${item.code}']`);
      if (prepare) prepare({ $el: $newItem, data: item, parent: { data: $block.dataset, $el: $block } });
      nativeTplToHTML(item.content, $newItem);
      $newItem.classList.remove('reloaded');
      $item.replaceWith($newItem);
    }
  }
});