({
  file: {
    tpl: function (data) {
      if (!data.value) data.value = {};
      const inputConfig = {};
      if (data.multiple) inputConfig.multiple = true;

      // ['div',{class: data.class+" "},[
      //   !data.label ? [] : ['label',{},[
      //     ['span',{text: data.label}],
      //   ]],
      //   ['div', {type: 'img', style:`
      //     background-image: url(`+(data.value.l||'')+`);
      //     background-size: contain;
      //     background-repeat: no-repeat;
      //     background-position: center center;
      //     width: 100%;
      //     height: 100%;
      //   `}],
      // ]],

      return [
        ['label', { class: 'form-label', for: 'input-' + data.code, text: data.label }],
        [
          'div',
          { code: data.code, class: 'input-group upload-file-input-group ' + data.class },
          [
            data.value.l
              ? data.config?.img
                ? [
                    ['input', { ...inputConfig, type: 'file', class: 'form-control d-none', id: 'input-' + data.code }],
                    ['img', { src: data.value.l, class: 'w-100' }],
                    [
                      'button',
                      { class: 'btn btn-outline-primary edit-btn', type: 'button' },
                      [['i', { class: 'bx bx-edit-alt' }]],
                    ],
                    [
                      'button',
                      { class: 'btn btn-outline-primary delete-btn', type: 'button' },
                      [['i', { class: 'bx bx-trash' }]],
                    ],
                  ]
                : [
                    [
                      'label',
                      { class: 'form-floating input-group-text' },
                      [
                        ['a', { target: '_blank', href: data.value.l, text: data.value.n }],
                        ['input', { ...inputConfig, type: 'file', class: 'form-control', id: 'input-' + data.code }],
                      ],
                    ],
                    [
                      'button',
                      { class: 'btn btn-outline-primary edit-btn', type: 'button' },
                      [['i', { class: 'bx bx-edit-alt' }]],
                    ],
                    [
                      'button',
                      { class: 'btn btn-outline-primary delete-btn', type: 'button' },
                      [['i', { class: 'bx bx-trash' }]],
                    ],
                  ]
              : [['input', { ...inputConfig, type: 'file', class: 'form-control', id: 'input-' + data.code }]],
          ],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const reloadEl = async function (value) {
          const el = JSON.parse($el.dataset.el);
          el.value = value;
          const $parent = $el.closest('.complex-item');
          const { tpl, prepare } = window.el[el.elPath] || {};

          el.class = ['reloaded', 'el', `el-${el.name.replace(/\./g, '_')}`, el.class].join(' ');
          await nativeTplToHTML([tpl(el)], $parent);
          const $newEl = $parent.querySelector(`.reloaded.el[code='${el.code}']`);

          $newEl.setAttribute('markup-code', el.code);
          if (el.on?.load) $newEl.setAttribute('markup-onload', el.on.load);
          $newEl.dataset.el = JSON.stringify(el);
          for (const [key, value] of Object.entries(el)) $newEl.dataset[key] = value;
          if (prepare) prepare({ $el: $newEl, data: el });
          $newEl.classList.remove('reloaded');
          $el.replaceWith($newEl);
        };

        const $input = $el.querySelector('input');
        const $label = $el.querySelector('label.custom-file-label');
        const $editBtn = $el.querySelector('.edit-btn');
        const $deleteBtn = $el.querySelector('.delete-btn');
        $input.onchange = () => {
          const { name: form } = $input.closest('[type="form"]').dataset;
          const { code } = $input.closest('.el').dataset;

          const files = Array.from($input.files);
          files.sort((a, b) => a.size - b.size);
          let i = 0;
          const uploadNext = async () => {
            const file = files[i];
            const {
              uploadPath,
              uploadedFile: { name },
            } = await window.uploadFile(file, { form, code });
            // console.log({ uploadData });
            const value = { l: uploadPath, n: name };
            const { result, msg, stack } = await api.markup.saveField({ form, code, value });
            if (result === 'error') console.error({ msg, stack });
            i++;
            if (i < files.length) return uploadNext();
            await sleep(1000); // ждем пока бэк обновит библиотеку статики
            await reloadEl(value);
            return null;
          };
          uploadNext();
        };
        if ($deleteBtn)
          $deleteBtn.onclick = async () => {
            if (!confirm('Подтвердите удаление')) return false;
            const { name: form } = $input.closest('[type="form"]').dataset;
            const { code } = $input.closest('.el').dataset;
            const { result, msg, stack } = await api.markup.saveField({ form, code, value: null });
            if (result === 'error') console.error({ msg, stack });
            await reloadEl(null);
          };
        if ($label) $label.onclick = () => $input.click();
        if ($editBtn) $editBtn.onclick = () => $input.click();
      },
    },
    func: () => {
      window.uploadFile = async (file, formData = {}) => {
        const uploader = application.metacom.createBlobUploader(file);
        const {
          data: { uploadPath } = {},
          result,
          msg,
        } = await api.markup.upload({ ...formData, streamId: uploader.streamId, name: file.name });
        if (result === 'error') throw new Error(msg);
        await uploader.upload();
        return { uploadedFile: file, uploadPath, result, msg };
      };
    },
    style: `
      .upload-file-input-group > label > input {
        display: none!important;
      }
    `,
  },

  'file+': {
    tpl: function (data) {
      return [window.el['core/default/el~file|file'].tpl(data)];
    },
    front: {
      prepare: function ({ $el, data }) {
        window.el['core/default/el~file|file'].prepare({ $el, data });
      },
    },
  },

  'file-': {
    tpl: function (data) {
      return [
        [
          'div',
          {
            code: data.code,
            class:
              data.class +
              `css
                  position: relative;
              `,
          },
          [
            ['label', { text: data.label || '' }],
            ['a', { target: '_blank', href: data.value.l, text: data.value.n }],
          ],
        ],
      ];
    },
  },
});
