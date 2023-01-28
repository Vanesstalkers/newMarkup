({
  file: {
    tpl: function (data) {
      if (!data.value) data.value = {};
      const inputConfig = {};
      if (data.multiple) inputConfig.multiple = true;

      const img = data.config?.img ? (data.config?.img === true ? { class: 'w-100' } : data.config?.img) : null;

      return [
        [
          'div',
          {
            code: data.code,
            class: 'input-group upload-file-input-group ' + data.class + (data.label ? ' has-label' : ''),
          },
          [
            data.label === false ? [] : ['label', { class: 'form-label', for: 'input-' + data.code, text: data.label }],
            data.value.l
              ? img
                ? [
                    ['input', { ...inputConfig, type: 'file', class: 'form-control d-none', id: 'input-' + data.code }],
                    ['img', { style: 'margin: auto', ...img, src: data.value.l }],
                    [
                      'div',
                      {
                        class:
                          'btn-group' +
                          `css
                            .*css* {
                              position: absolute;
                              bottom: 0px;
                              width: 100%;
                            }
                            .*css*:before, .*css*:after {
                              content: '';
                              width: 100%;
                            }
                          `,
                      },
                      [
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
                      ],
                    ],
                  ]
                : [
                    [
                      'label',
                      { class: 'form-floating input-group-text border-0' },
                      [
                        ['a', { target: '_blank', href: data.value.l, text: data.value.n, class: `css
                          text-overflow: ellipsis;
                          overflow: hidden;
                        ` }],
                        ['input', { ...inputConfig, type: 'file', class: 'form-control', id: 'input-' + data.code }],
                      ],
                    ],
                    [
                      'button',
                      { class: 'btn btn-outline-primary btn-xs border-0 edit-btn', type: 'button' },
                      [['i', { class: 'bx bx-edit-alt' }]],
                    ],
                    [
                      'button',
                      { class: 'btn btn-outline-primary btn-xs border-0 delete-btn', type: 'button' },
                      [['i', { class: 'bx bx-trash' }]],
                    ],
                  ]
              : [
                  [
                    'input',
                    {
                      ...inputConfig,
                      type: 'file',
                      class: 'form-control',
                      id: 'input-' + data.code,
                      placeholder: data.placeholder,
                    },
                  ],
                ],
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
          let $el = $input.closest('.el');
          if ($el.classList.contains('el-complex-add')) $el = $el.closest('.complex-block');
          const { code } = $el.dataset;

          const files = Array.from($input.files);
          files.sort((a, b) => a.size - b.size);
          let i = 0;
          const uploadNext = async () => {
            const file = files[i];
            file.name = 'upload.' + file.name.split('.').slice(-1)[0]; // метарихия не переваривает кириллицу
            const {
              uploadPath,
              uploadedFile: { name },
            } = await window.uploadFile(file, { form, code });
            const value = { l: uploadPath, n: name };
            if (data.onChange) {
              await data.onChange(value);
            } else {
              const { result, msg, stack } = await api.markup.saveField({ form, code, value });
              if (result === 'error') console.error({ msg, stack });
            }
            i++;
            if (i < files.length) return uploadNext();
            await sleep(1000); // ждем пока бэк обновит библиотеку статики
            if (!data.onChange) {
              await reloadEl(value);
            }
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
          stack,
        } = await api.markup.upload({ ...formData, streamId: uploader.streamId, name: file.name });
        if (result === 'error') {
          console.error({ msg, stack });
          throw new Error(msg);
        }
        await uploader.upload();
        return { uploadedFile: file, uploadPath, result, msg };
      };
    },
    style: `
      .upload-file-input-group > label > input {
        display: none!important;
      }
      .upload-file-input-group.has-label {
        padding-top: 40px;
      }
      .upload-file-input-group.has-label > label.form-label {
        position: absolute;
        top: 10px;
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
