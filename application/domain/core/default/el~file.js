({
  file: {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [
        'div',
        {
          code: data.code,
          class:
            data.class +
            `css
              .*css* {
                position: relative;
              }
              .*css* > a:before {
                content: attr(text);
              }
              .*css* > input {
                display: none;
              }
              .*css* > label {
                display: flex;
              }
              .*css* > label > span {
                width: 100%;
              }
              .*css* > label > .edit-btn {
                top: 0px;
                padding: 0px;
                right: 0px;
                font-size: 90%;
              }
              .*css* > label > .btn-link {
                height: 15px;
                min-width: 15px;
                padding: 0px;
                background-color: white;
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                cursor: pointer;
              }
              .*css* > label > .btn-link.edit-btn  {
                background-image: url(/edit.png);
              }
              .*css* > label > .btn-link.delete-btn {
                background-image: url(/delete.png);
              }
            `,
        },
        [
          [
            'label',
            { text: data.label || '' },
            [
              ['div', { class: 'btn btn-link edit-btn' }],
              data.delete === false ? [] : ['div', { class: 'btn btn-link delete-btn' }],
            ],
          ],
          ['a', { target: '_blank', href: data.value.l, text: data.value.n }],
          ['input', { type: 'file', multiple: true }],
        ],
      ];
    },
    front: {
      prepare: function ({ $el, data }) {
        const $input = $el.querySelector('input');
        const $editBtn = $el.querySelector('.edit-btn');
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

            const el = Object.fromEntries(Object.entries($el.dataset));
            el.value = value;
            const $parent = $el.closest('.complex-item');
            const { tpl, prepare } = window.el[el.elPath] || {};

            el.class = ['reloaded', 'el', `el-${el.name.replace(/\./g, '_')}`, el.class].join(' ');
            nativeTplToHTML([tpl(el)], $parent);
            const $newEl = $parent.querySelector(`.reloaded.el[code='${el.code}']`);

            console.log({ $parent, $el, $newEl });
            $newEl.setAttribute('markup-code', el.code);
            if (el.on?.load) $newEl.setAttribute('markup-onload', el.on.load);
            for (const [key, value] of Object.entries(el)) $newEl.dataset[key] = value;
            if (prepare) prepare({ $el: $newEl, data: el });
            $newEl.classList.remove('reloaded');
            $el.replaceWith($newEl);

            return null;
          };
          uploadNext();
        };
        $editBtn.onclick = () => $input.click();
      },
    },
    func: () => {
      window.uploadFile = async (file, formData = {}) => {
        const uploader = application.metacom.createBlobUploader(file);
        const {
          data: { uploadPath },
        } = await api.markup.upload({ ...formData, streamId: uploader.streamId, name: file.name });
        await uploader.upload();
        return { uploadedFile: file, uploadPath };
      };
    },
  },

  'file+': {
    config: {
      customType: 'html',
    },
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
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [
        [
          'div',
          {
            code: data.code,
            class:
              data.class +
              `css
                .*css* {
                  position: relative;
                }
                .*css* > a:before {
                  content: attr(text);
                }
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

  'file--': {
    config: {
      customType: 'html',
    },
    tpl: function (data) {
      return [window.el['core/default/el~file|file-'].tpl(data)];
    },
  },
});
