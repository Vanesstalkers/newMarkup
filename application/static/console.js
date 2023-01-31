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

window.sleep = (msec) =>
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

window.FIELD_JSON_KEYS = ['config', 'controls'];
window.waitForLoadRes = {};

window.resOnLoad = function () {
  const src = new URL(this.src).pathname;
  while (window.waitForLoadRes?.[src]?.length) {
    window.waitForLoadRes[src].shift()();
  }
  window.waitForLoadRes[src] = true;
};

window.runAfterResLoaded = (waitForRes, func) => {
  if (window.waitForLoadRes[waitForRes] === true) return func();
  if (!window.waitForLoadRes[waitForRes]) window.waitForLoadRes[waitForRes] = [];
  window.waitForLoadRes[waitForRes].push(func);
};

window.loadRes = function (src, config = {}) {
  return new Promise((resolve, reject) => {
    let type = 'js';
    if (src.substr(-4) == '.css') type = 'css';
    let res;
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
    res.onload = () => {
      while (window.waitForLoadRes?.[src]?.length) {
        window.waitForLoadRes[src].shift()();
      }
      window.waitForLoadRes[src] = true;
      resolve();
    };
    res.onerror = reject;
    document.head.appendChild(res);
  });
};

window.showForm = async ({ form, container, _id }) => {
  const $container = container
    ? container instanceof HTMLElement
      ? container
      : document.getElementById(container)
    : document.body;
  console.log('window.showForm', { form, $container });
  const $parentForm = $container.closest(`[type="form"]`);
  const getForm = await window.api.markup.getForm({ form, _id, codeSfx: $parentForm?.dataset.code });
  if (getForm.result === 'error') return console.error(getForm.msg, getForm.stack);
  $container.innerHTML = '';
  await sleep(1000); // только для дебага - без этого не успевает  обновиться статика на сервере
  await loadRes(`cache/${form}.func.js`);
  await nativeTplToHTML([getForm.data], $container);
  await loadRes(`cache/${form}.css`);
};

window.nativeTplToHTML = async function (deepEl, $parent) {
  if (!deepEl || !$parent) return;
  for (const el of deepEl) {
    if (!el) continue;
    if (el.type) {
      if (el.type === 'complex' || el.type === 'form') {
        const { tpl, prepare } = window.el[el.elPath] || {};
        await nativeTplToHTML([tpl(el)], $parent);
        const $block = $parent.querySelector(`.complex-block[code='${el.code}']`);
        if (prepare) prepare({ $el: $block, data: el });
        if (el.items) {
          const $contentHolder = $block.className.match(/\bcontent-holder\b/)
            ? $block
            : $block.querySelector(`.content-holder`);
          for (const item of Object.values(el.items)) {
            const { tpl, prepare } = window.el[item.elPath] || {};
            if (typeof tpl === 'function') {
              await nativeTplToHTML([tpl({ ...item, parent: el })], $contentHolder);
              const $item = $contentHolder.querySelector(`.complex-item[code='${item.code}']`);
              if (prepare) prepare({ $el: $item, data: item, parent: { data: el, $el: $block } });
              const $itemContentHolder = $item.className.match(/\bcontent-holder\b/)
                ? $item
                : $item.querySelector(`.content-holder`);
              await nativeTplToHTML(item.content, $itemContentHolder);
            }
          }
        }
      } else {
        const { tpl, prepare } = window.el[el.elPath] || {};
        if (tpl) {
          el.class = ['el', el.name ? `el-${el.name.replace(/\./g, '_')}` : '', el.class].join(' ');
          await nativeTplToHTML([tpl(el)], $parent);
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
          if (options.src) $el.onload = window.resOnLoad;
          async function init() {
            $parent.appendChild($el);
            if (options.on?.load) $el.setAttribute('markup-onload', options.on.load);
            if (options.text) $el.appendChild(document.createTextNode(options.text));
            if (items?.length) await nativeTplToHTML(items, $el);
          }
          if (options.waitForResLoaded) window.runAfterResLoaded(options.waitForResLoaded, init);
          else await init();
          break;
        case 'object':
          await nativeTplToHTML(el, $parent);
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

window.addEventListener('hashchange', async (event) => {
  let routeQuery;
  try {
    routeQuery = JSON.parse(decodeURI(location.hash.substring(1)));
  } catch (err) {
    location.href = '';
    return;
  }
  await showForm(routeQuery);
});

window.addEventListener('load', async () => {
  window.application = new Application();
  window.api = window.application.metacom.api;
  await application.metacom.load('auth', 'console', 'example', 'files', 'markup');
  const token = localStorage.getItem('xaoc.session.token');

  let logged = false;
  if (token) {
    const res = await api.auth.restore({ token });
    logged = res.status === 'logged';
    if (res.token) localStorage.setItem('xaoc.session.token', res.token);
  }

  if (!logged) {
    const demoUser = { login: Math.random(), password: 'guest', roles: ['guest'] };
    await api.auth.register({ ...demoUser });
    const res = await api.auth.signin({ login: demoUser.login, password: demoUser.password });
    if (res.token) localStorage.setItem('xaoc.session.token', res.token);
    if (location.pathname !== '/' && !location.href.includes('/index.html') && !location.href.includes('/login.html')) {
      location.href = '/login.html';
      return;
    }
  } else {
    document.cookie = `token=${localStorage.getItem('xaoc.session.token')}`;
  }

  new MutationObserver(async function (mutationsList, observer) {
    //console.log({ mutationsList });
    for (const mutation of mutationsList) {
      if (mutation.type === 'childList') {
      } else if (mutation.type === 'attributes') {
        if (mutation.attributeName === 'markup-code') {
          // console.log('mutation', { code: mutation.target.getAttribute('markup-code'), mutation });
        }
        if (mutation.attributeName === 'markup-onload') {
          const [funcName, ...args] = mutation.target.getAttribute('markup-onload').split(',');
          await new Promise((resolve) => setTimeout(resolve, 0)); // ждем пока все элементы будут добавлены в DOM
          if (window[funcName]) window[funcName](mutation.target, ...args);
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

  await showForm({ form: INIT_FORM });
});
