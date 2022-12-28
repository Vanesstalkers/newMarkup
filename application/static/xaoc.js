PROJECT = 'xaoc';

window.showLogTime = false;

window.el = {};

window.LST = { addobj: [] };
window.oLST = { addobj: {} };

window.formRes = {};
window.formResLoaded = {};
window.formResAfterLoad = {};
window.waitForLoadRes = {};
window.waitForLoadElementByCode = {};
window.doAfterLoadElement = {};
window.afterAllLoaded = [];

/* window.callAfterLoadElement = function(code, f){
	if(!window.doAfterLoadElement[code]){
		window.doAfterLoadElement[code].doAfterLoad = [ f ];
	}else{
		if(window.doAfterLoadElement[code].ready){
			f();
		}else{
			window.doAfterLoadElement[code].doAfterLoad.push( f );
		}
	}
}
window.afterFormLoaded = function($e, f){
	window.callAfterLoadElement($e.closest('[lastquery]').attr('code'), f);
} */

window.afterElementMounted = {};

window.wsCallback = {};
window.wsCallbackM = {};

window.olength = function (o) {
  try {
    return Object.keys(o || {}).length;
  } catch (e) {
    console.error(e);
  }
};

window.ifStatementFromObject = function (o) {
  //console.log('enter', o);
  const res = Object.entries(o).reduce((b, item) => {
    //console.log('item', 'typeof=', typeof item[1], item);
    return Array.isArray(o)
      ? b || (typeof item[1] == 'object' ? window.ifStatementFromObject(item[1]) : item[1])
      : b && (typeof item[1] == 'object' ? window.ifStatementFromObject(item[1]) : item[1]);
  }, !Array.isArray(o));
  //console.log('exit', o, res);
  return res;
};

if (typeof exports != 'undefined') throw new Error('xaoc.js :: Параметр "window" наполнен'); // тут заканчиваем работу для серверного require

/*
Function parameters:

    message: error message (string). Available as event (sic!) in HTML onerror="" handler.
    source: URL of the script where the error was raised (string)
    lineno: Line number where error was raised (number)
    colno: Column number for the line where the error occurred (number)
    error: Error Object (object)

When the function returns true, this prevents the firing of the default event handler.
*/

window.onerror = function (message, source, lineno, colno, error) {
  console.log('window.onerror', arguments);

  if (message.indexOf('TypeError: window[') != -1) {
    if (
      confirm(
        'Возникла ошибка, связанная с последним обновлением системы. ' +
          'Рекомендуется обновить страницу, чтобы устранить данную ошибку. ' +
          '\r\n\r\nОбновить страницу сейчас?',
      )
    )
      location.reload();
  }
};

window.useCache = window.location.hostname != 'localhost';

window.isMobile = false;
window.isMobileBig = false;
window.isMobileSmall = false;
if (
  /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
    navigator.userAgent,
  ) ||
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
    navigator.userAgent.substr(0, 4),
  )
) {
  window.isMobile = true;
  if (window.innerWidth > 500 && window.innerHeight > 500) {
    window.isMobileBig = true;
  } else {
    window.isMobileSmall = true;
  }
}

var extend = function (target, varArgs) {
  // .length of function is 2
  'use strict';
  if (target == null) {
    // TypeError if undefined or null
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var to = Object(target);

  for (var index = 1; index < arguments.length; index++) {
    var nextSource = arguments[index];

    if (nextSource != null) {
      // Skip over if undefined or null
      for (var nextKey in nextSource) {
        // Avoid bugs when hasOwnProperty is shadowed
        if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
          to[nextKey] = nextSource[nextKey];
        }
      }
    }
  }
  return to;
};

Array.prototype.unique = function () {
  var a = this.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1);
    }
  }
  return a;
};

function allResLoaded() {
  // !!! без setTimeout перестает работает tutorial (можно или отловить причину, или лучше всего переписать)

  if (Object.keys(window.waitForLoadRes).length == 0) {
    window.afterAllLoaded.forEach(function (f, i) {
      setTimeout(function () {
        f();
      }, 0);
    });
    setTimeout(function () {
      window.afterAllLoaded = [];
    }, 0);
  }
}

function wsSendCallback(msg, success, failure) {
  msg.x = Date.now() + String(Math.random()).slice(1);
  window.wsCallback[msg.x] = { success: success, failure: failure };
  window.ws.send(JSON.stringify(msg));
}
function wsSendCallbackM(msg, success, failure) {
  msg.x = Date.now() + String(Math.random()).slice(1);
  window.wsCallbackM[msg.x] = { success: success, failure: failure };
  window.ws.send(JSON.stringify(msg));
}

function loadRes(src, onetime, callback, config = {}) {
  var type = 'js';
  if (src.substr(-4) == '.css') type = 'css';

  var load = true;

  // херню сделал, толтько все ломает ((( без нее лучше, но иногда все еще проскакивают проблемы с перекрытием стилей
  /*if(window.formRes[src] != undefined){
		if(onetime){
			if(typeof callback == 'function') callback(); 
			return;
		}else{
			document.head.removeChild( window.formRes[src] );
		}
	}*/

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

  window.formRes[src] = res;
  if (config.waitForLoad !== false)
    // для ресурсов, которые могут "подвесить" вызов скриптов
    window.waitForLoadRes[src] = true;

  res.onload = function (e) {
    delete window.waitForLoadRes[src];
    allResLoaded();
    window.formResLoaded[src] = true;

    if (typeof callback == 'function') {
      callback(function () {
        if (formResAfterLoad[src] != undefined)
          formResAfterLoad[src].forEach(function (f) {
            f();
          });
      });
    } else {
      if (formResAfterLoad[src] != undefined)
        formResAfterLoad[src].forEach(function (f) {
          f();
        });
    }
  };
  res.onerror = function (e) {
    if (config.gotoOnError) location.href = config.gotoOnError;

    delete window.formRes[src];
    delete window.waitForLoadRes[src];
    allResLoaded();

    if (typeof callback == 'function') callback();
  };

  document.head.appendChild(res);
}

$(function () {
  moment.locale('ru');

  function checkHeight() {
    if (!window.isMobile || window.innerHeight >= 600) {
      $('body').removeClass('lowHeight');
    } else {
      $('body').addClass('lowHeight');
    }
  }

  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
  if (isOpera) $('body').addClass('isOpera');
  // Firefox 1.0+
  var isFirefox = typeof InstallTrigger !== 'undefined';
  if (isFirefox) $('body').addClass('isFirefox');
  // Safari 3.0+ "[object HTMLElementConstructor]"
  var isSafari =
    /constructor/i.test(window.HTMLElement) ||
    (function (p) {
      return p.toString() === '[object SafariRemoteNotification]';
    })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
  if (isSafari) $('body').addClass('isSafari');
  // Internet Explorer 6-11
  var isIE = /*@cc_on!@*/ false || !!document.documentMode;
  if (isIE) $('body').addClass('isIE');
  // Edge 20+
  var isEdge = !isIE && !!window.StyleMedia;
  if (isEdge) $('body').addClass('isEdge');
  // Chrome 1 - 71
  var isChrome = !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
  if (isChrome) $('body').addClass('isChrome');
  // Blink engine detection
  var isBlink = (isChrome || isOpera) && !!window.CSS;
  if (isBlink) $('body').addClass('isBlink');

  setTimeout(function () {
    checkHeight();
  }, 0);
  $(window).resize(checkHeight);

  function checkOrientation() {
    $('body').removeClass('isLandscape');

    if (screen.orientation.type.indexOf('landscape') != -1) {
      $('body').addClass('isLandscape');
      if (typeof screen.orientation.onLandscape == 'function') screen.orientation.onLandscape();
    } else {
      if (typeof screen.orientation.onPortrait == 'function') screen.orientation.onPortrait();
    }
  }

  if (screen.orientation) screen.orientation.onchange = checkOrientation;

  if (window.isMobile || window.isMobileBig) {
    setTimeout(function () {
      checkOrientation();
    }, 0);

    $('body').addClass('isMobile');
    if (window.isMobileBig) {
      $('body').addClass('isMobileBig');
    } else {
      $('body').addClass('isMobileSmall');
    }
  }

  $(document).on('click', '.show-complex', function () {
    reloadComplex(this, { show: false });
  });

  document.addEventListener('change', async (event) => {
    const $el = event.target;
    console.log({ $el });
    if ($el.closest('input, textarea, select')) {
      const form = $el.closest('[type="form"]').dataset.name;
      const code = $el.closest('.el').dataset.code;
      const value = $el.value;
      const { result, msg, stack } = await api.markup.saveField({ form, code, value });
      if (result === 'error') console.error({ msg, stack });
    }
  });

  // $(document).on('change', 'input, textarea, select', function (e) {
  //   var $e = $(this);

  //   var type = $e.attr('type');
  //   var stype = $e.attr('stype');

  //   if ($e.attr('fakeChange')) {
  //     // нужно, например, для multiple-значений select2
  //     $e.removeAttr('fakeChange');
  //     return;
  //   }

  //   if (type != 'file') {
  //     var val = $e.val(),
  //       code = $e.attr('code');

  //     var data = { code: code, value: val };

  //     if (data.code && !stype) {
  //       var onSave = $e.attr('onSave');
  //       if (onSave == 'saveTheme' && $e.attr('themepath') && window.el[$e.attr('themepath')]) {
  //         onSave = window.el[$e.attr('themepath')].save;
  //       } else {
  //         onSave = window[onSave];
  //       }

  //       if (typeof onSave == 'function') {
  //         // если ищешь тут ошибку, то для начала проверь, что при объявлении onSave не перенес скобку начала стрелочной функции на новую строку ( тут -> "()=>{" )

  //         onSave($e, data, function (valid, vdata) {
  //           if ((valid && valid.err) || valid === false) {
  //             const err = valid.err || 'Неизвестная ошибка, действие отменено';

  //             if (err != 'with-out-notify') {
  //               if (valid.errTarget) {
  //                 $(valid.errTarget).notify(err, { className: valid.errType || 'error' });
  //               } else {
  //                 $.notify(err, { className: valid.errType || 'error' });
  //               }
  //             }

  //             if ($e.attr('afterSaveError')) window[$e.attr('afterSaveError')]($e, valid);
  //           } else {
  //             if (vdata == undefined) vdata = data;
  //             if ($e.attr('afterSave')) {
  //               wsSendCallback(
  //                 extend({ action: 'save' }, vdata),
  //                 function (answer) {
  //                   window[$e.attr('afterSave')]($e, answer);
  //                 },
  //                 function (answer) {
  //                   if ($e.attr('afterSaveError')) window[$e.attr('afterSaveError')]($e, answer);
  //                 },
  //               );
  //             } else {
  //               wsSendCallback(
  //                 extend({ action: 'save' }, vdata),
  //                 function (answer) {},
  //                 function (answer) {
  //                   if ($e.attr('afterSaveError')) window[$e.attr('afterSaveError')]($e, answer);
  //                 },
  //               );
  //             }
  //           }
  //         });
  //       } else {
  //         if ($e.attr('afterSave')) {
  //           wsSendCallback(
  //             extend({ action: 'save' }, data),
  //             function (answer) {
  //               window[$e.attr('afterSave')]($e, answer);
  //             },
  //             function (answer) {
  //               if ($e.attr('afterSaveError')) window[$e.attr('afterSaveError')]($e, answer);
  //             },
  //           );
  //         } else {
  //           wsSendCallback(
  //             extend({ action: 'save' }, data),
  //             function (answer) {},
  //             function (answer) {
  //               if ($e.attr('afterSaveError')) window[$e.attr('afterSaveError')]($e, answer);
  //             },
  //           );
  //         }
  //       }
  //     } else {
  //       var onFilter = $e.attr('onFilter') || ($e.attr('type') == 'radio' ? $e.closest('.el').attr('onFilter') : false);
  //       if (onFilter) window[onFilter]($e, data);
  //     }
  //   }
  // });

  $(document).on('click', '[query]', function (e) {
    //console.log('query', e, $(e.target));
    //console.log('hasClass', $(e.target).hasClass('tutorial-link'));
    if ($(e.target).hasClass('tutorial-link')) {
      e.preventDefault();
      return false;
    }

    var $this = $(this);

    if ($this.attr('onclick') == undefined && !$this.hasClass('edit-mode')) {
      try {
        if ($this.attr('query')) {
          var query = JSON.parse($this.attr('query'));
          var target = $this.attr('target');

          if (target) {
            $('body').removeClass('loading');

            if (query.container) {
              window.open('?session#' + JSON.stringify({ form: history.state.form, subform: query }), target);
            } else {
              window.open('?session#' + JSON.stringify(query), target);
            }
          } else {
            locationQuery(query);
          }

          return $this.hasClass('toggleCloseEvent') ? true : false;
        } else {
          return false;
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      if (
        $this.attr('onclick') == undefined &&
        $this.hasClass('edit-mode') &&
        $this.attr('query') &&
        $('body').hasClass('editMode')
      ) {
        var $tmplink = $('<span>', { class: 'tmplink', text: 'перейти по ссылке' });
        $this.append($tmplink);
        $tmplink.on('click', function () {
          locationQuery(JSON.parse($this.attr('query')));
        });

        return false;
      }
    }
  });

  $(document).on('click', 'body.editMode .el > [code]', function () {
    var $this = $(this);
    if ($this.parent().find('> .editLogBtn').length == 0) {
      $this.before($('<div>', { class: 'editLogBtn', code: $this.attr('code') }));
    }
  });

  $(document).on('click', 'body.editMode .editLogBtn', function () {
    wsSend({ action: 'fieldlog', code: $(this).attr('code') });
  });

  // в ряде случаев сбрасывается фильтр и история "вперед" для субформ
  if (!window.DISABLE_POPSTATE_CUSTOM_EVENT)
    window.onpopstate = function (e) {
      if (typeof history.stateAction == 'function') {
        history.stateAction();
        delete history.stateAction;
      }
      if (typeof history.stateNextAction == 'function') {
        history.stateAction = history.stateNextAction;
        delete history.stateNextAction;
      }

      if (e.state) {
        var query = JSON.parse(JSON.stringify(e.state));
        if (query.form == history.lastForm && query.subform) {
          query.form = query.subform.form;
          query.container = query.subform.container;
          if (query.subform.filter) query.filter = query.subform.filter;
          delete query.subform;
        }
        locationQuery(extend(query, { h: true }));
      } else {
      }
    };
});

locationQuery = function (query) {
  $('body').addClass('loading');

  if (query.form) {
    function loadJS_2(query) {
      loadRes(
        '/forms/cache/' + query.form + '_func' + window.userCustomSfx + '.js',
        false,
        function () {
          if (query.container) {
            var $parent = $('#' + query.container);
            query.code = $parent.attr('code');

            $parent.trigger('formUpdate');

            wsSend({ action: 'link', query: query, history: $parent.attr('history') }, function (cb) {
              myEmpty($parent);
              $parent.empty();
              $parent.html($('<div />', { id: '_' + query.code + '_1' }));

              addStyleCatcher($parent[0], query.code);

              $parent.addClass('form-block').attr('form', query.form).attr('lastQuery', JSON.stringify(query));

              // для восстановления субформы по прямой ссылке
              if (query.filter == undefined && history.state && history.state.subform && history.state.subform.filter) {
                query.filter = history.state.subform.filter;
                if (query.filter.edit) delete query.filter.edit;
              }

              cb();
            });
          } else {
            wsSend({ action: 'form', query: query }, function (cb) {
              var $body = $('body');
              if (!window.CUSTOM_HTML) {
                myEmpty($body);
                $body.empty();
                $body.html($('<div />', { id: '_1' }));
              }
              $body.addClass('form-block').attr('form', query.form).attr('lastQuery', JSON.stringify(query));

              addStyleCatcher($body[0]);

              cb();
            });
          }
        },
        { importance: 'high' },
      );
    }

    if (window.debugCSS) {
      loadJS_2(query);
    } else {
      loadRes('/forms/cache/' + query.form + '_style' + window.userCustomSfx + '.css', true, function () {
        loadJS_2(query);
      });
    }
  } else {
    if (query.form === false) history.subform = false;
  }
};

elementToHtml = function (o, $parent, code, doAfterLoad, realParent) {
  if (code && o.code == undefined) o.code = code;

  if (o.stype && o.stype == 'filter') {
    o.class = 'filter-field ' + o.class;
  }

  var $e, $el;

  if (o.front)
    Object.keys(o.front).map(function (key) {
      o['front-' + key] = o.front[key];
    });

  if (o.front && o.front.onLoad) window[o.front.onLoad](o);
  if (o.front && o.front.onLoadWT)
    setTimeout(function () {
      window[o.front.onLoadWT](o);
    }, 0);
  if (o.front && o.front.onSave) o.onSave = o.front.onSave;
  if (o.front && o.front.onFilter) o.onFilter = o.front.onFilter;
  if (o.front && o.front.afterSave) o.afterSave = o.front.afterSave;
  if (o.front && o.front.afterSaveError) o.afterSaveError = o.front.afterSaveError;
  if (o.front && o.front.onSub) o.onSub = o.front.onSub;
  if (o.front && o.front.onChange) {
    if (o.type == 'radio') {
      $(document).on('click', '[code=' + code + '] > input', function () {
        window[o.front.onChange]($(this));
      });
    } else {
      $(document).on('change', '[code=' + code + ']', function () {
        window[o.front.onChange]($(this));
      });
    }
  }
  if (o.front && o.front.onKeyUp) {
    $(document).on('keyup', '[code=' + code + ']', function () {
      window[o.front.onKeyUp]($(this));
    });
  }
  if (o.front && o.front.onLoadElement) {
    realParent.find('#_' + code).attr('onLoadElement', o.front.onLoadElement);
  }

  if (o.front && o.front.textMask) o.front.prepareValue = o.front.textMask; // надо все заменить на prepareValue

  if (o.themePath && window.el[o.themePath]) {
    if (o.front && o.front.prepareValue) o.value = window[o.front.prepareValue](o);

    if (!o.config) o.config = {};
    if (!o.class) o.class = '';
    o.class = 'el el-' + o.name.replace(/\./g, '_') + ' ' + o.class;

    var tpl = window.el[o.themePath].tpl(null, null, o, null);
    if (window.el[o.themePath].prepare) window.el[o.themePath].prepare(tpl[0], o, doAfterLoad, realParent, $parent);

    if (o.front && o.front.onSub) realParent.attr('onSub_' + code, o.front.onSub);

    tplToHtml(tpl, $parent, '', doAfterLoad, realParent);
  }
};

nativeTplToHTML = function (deepEl, $parent) {
  if (!deepEl || !$parent) return;
  for (const el of deepEl) {
    if (!el) continue;
    if (el.type) {
      if (el.type === 'complex' || el.type === 'form') {
        const { tpl, prepare } = window.el[el.elPath] || {};
        nativeTplToHTML(tpl(el), $parent);
        const $block = $parent.querySelector(`.complex-block[code='${el.code}']`);
        if (prepare) prepare({ $el: $block, data: el });
        if (el.items) {
          for (const item of Object.values(el.items)) {
            const { tpl, prepare } = window.el[item.elPath] || {};
            nativeTplToHTML(tpl({ ...item, parent: el }), $block);
            const $item = $block.querySelector(`.complex-item[code='${item.code}']`);
            if (prepare) prepare({ $el: $item, data: item, parent: { data: el, $el: $block } });
            nativeTplToHTML(item.content, $item);
          }
        }
      } else {
        const { tpl, prepare } = window.el[el.elPath] || {};
        if (tpl) {
          el.class = `el el-${el.name.replace(/\./g, '_')} ${el.class}`;
          nativeTplToHTML(tpl(el), $parent);
          const $el = $parent.querySelector(`.el[code='${el.code}']`);
          if (prepare) prepare({ $el, data: el });
        }
      }
    } else {
      const el0 = el[0];
      switch (typeof el0) {
        case 'string':
          const [tag, options, items] = el;
          const $el = document.createElement(tag);
          for (const [key, value] of Object.entries(options)) $el.setAttribute(key, value);
          $parent.appendChild($el);
          if (items?.length) nativeTplToHTML(items, $el);
          break;
        case 'object':
          nativeTplToHTML(el, $parent);
          break;
      }
    }
  }
};

tplToHtml = function (o, $parent, code, doAfterLoad, realParent) {
  var waitForCodes = {};

  o.forEach(function (oo) {
    if (oo && oo !== 'null' && oo !== 'undefined') {
      if (oo.type) {
        if (oo.type == 'subform') {
          $parent.attr('code', oo.code);
          $parent.attr('history', oo.history);
          // можно перенести в afterAllLoaded
          if (oo.form != '__blank') locationQuery({ form: oo.form, container: $parent.attr('id') });
        } else {
          elementToHtml(oo, $parent, code, doAfterLoad, realParent);
        }
      } else {
        if (oo[0] && typeof oo[0] == 'string') {
          oo[0] = oo[0]
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');

          if (oo[1] == undefined) oo[1] = {};

          if (oo[1].data) {
            // оптимизация передачи data-параметров
            Object.keys(oo[1].data).forEach((_) => {
              oo[1]['data-' + _] = oo[1].data[_];
            });
            delete oo[1].data;
          }

          // !!! тут проставляется много лишних идентификаторов (например, во внутрь el)
          if (oo[1].code && oo[1].id == undefined) {
            // для control-el лучше везде проставлять id = false
            oo[1].id = '_' + oo[1].code;
            waitForCodes[oo[1].code] = {};
          }

          if (oo[1].complex) {
            if (oo[1].complex == 'block') {
              if (oo[1].front && oo[1].front.beforeLoad) window[oo[1].front.beforeLoad]();
              if (oo[1].front && oo[1].front.onLoad)
                doAfterLoad.push({ f: oo[1].front.onLoad, p: realParent, event: 'onLoad' });
              if (oo[1].front && oo[1].front.onItemLoad) $parent.attr('onItemLoad', oo[1].front.onItemLoad);
              if (oo[1].front && oo[1].front.onLastItem) $parent.attr('onLastItem', oo[1].front.onLastItem);
              if (oo[1].front && oo[1].front.onSubAdd) $parent.attr('onSubAdd', oo[1].front.onSubAdd);
              if (oo[1].front && oo[1].front.onSubDelete) $parent.attr('onSubDelete', oo[1].front.onSubDelete);
              if (oo[1].front && oo[1].front.onDelete) $parent.attr('onDelete', oo[1].front.onDelete);

              // почему тут не учитываются темы?
              var theme = '__tpl~complex_block';

              if (window.el[theme]) {
                oo[1].complex = undefined; // чтобы не получилось рекурсии при отрисовке созданного tpl

                var tpl = window.el[theme].tpl(null, null, oo, null);
                if (window.el[theme].prepare) window.el[theme].prepare(tpl, oo, doAfterLoad, realParent, $parent);

                extend(waitForCodes, tplToHtml(tpl, $parent, '', doAfterLoad, realParent));
              }
            } else {
              // тут создание болванки под item

              realParent.data('item_' + oo[1].code, oo[1]);

              const $newparent = $('<' + oo[0] + ' />', oo[1]);

              if (realParent.attr('l') < 0) $parent.prepend($newparent);
              else $parent.append($newparent);

              // !!! надо перенести в __tpl~complex
              if (oo[1].li && realParent.attr('onLastItem'))
                $newparent.attr('onLastItem', realParent.attr('onLastItem'));
            }
          } else {
            if (oo[0] == 'script' || oo[0] == 'style') {
              if (oo[1] && oo[1].src) loadRes(oo[1].src, true, false, oo[1]);
            } else {
              if (oo[0] == 'a' && oo[1].query && history && history.state) {
                var query = JSON.parse(oo[1].query);
                query = query.container ? JSON.stringify({ form: history.state.form, subform: query }) : oo[1].query;
                oo[1].href = '#' + query;
              }

              if (code) {
                // complex-item

                oo[1].code = code;
                oo[1].realParent = realParent.attr('code');
                oo[1].controls = realParent.attr('ctrl');

                // почему тут не учитываются темы?
                var theme = '__tpl~complex_item';

                if (window.el[theme]) {
                  var tpl = window.el[theme].tpl(null, null, oo, null);
                  if (window.el[theme].prepare) window.el[theme].prepare(tpl, oo, doAfterLoad, realParent, $parent);

                  extend(waitForCodes, tplToHtml(tpl, $parent, '', doAfterLoad, realParent));
                }
              } else {
                let $newparent;
                try {
                  // несмотря на дублирующий функционал, убрать oo[1] нельзя, так как что-то ломается (не проверял что именно, так как приоритетней переписать всю функцию на нативный js)
                  $newparent = $('<' + oo[0] + ' />', oo[1]);
                  // написал так, потому что терялся "d" для элемента "path"
                  Object.keys(oo[1]).forEach((key) => $newparent.attr(key, oo[1][key]));
                } catch (e) {
                  console.log(e, oo);
                  $newparent = $('<div />');
                }
                $parent.append($newparent);

                if (oo[2] && oo[2] !== 'null' && oo[2] !== 'undefined') {
                  extend(waitForCodes, tplToHtml(oo[2], $newparent, '', doAfterLoad, realParent));
                }
              }
            }
          }
        } else {
          if (Array.isArray(oo[0])) {
            extend(waitForCodes, tplToHtml(oo, $parent, code, doAfterLoad, realParent));
          } else {
            //if(typeof oo[0] == 'object') console.log(oo[0], oo);
            if (oo[0] && typeof oo[0] == 'object' && oo[0].type) {
              waitForCodes[code] = {};
              elementToHtml(oo[0], $parent, code, doAfterLoad, realParent);
            } else if (Array.isArray(oo)) {
              extend(waitForCodes, tplToHtml(oo, $parent, code, doAfterLoad, realParent));
            }
          }
        }
      }
    }
  });

  if (waitForCodes[code]) delete waitForCodes[code]; // элемент не может ждать загрузки самого себя
  return waitForCodes;
};

$(document).ready(function () {
  if (!window.isMobile)
    if (window.innerWidth < 1000) {
      $('body').addClass('isMobile');
    } else {
      $('body').removeClass('isMobile');
    }

  // не открываем сокеты для shapshot-файлов
  if (location.href.substr(-5) != '.html' || location.href.indexOf('/forms/html/') == -1) {
    // initWS();
  }
  if (typeof onReady == 'function') onReady();

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
          if (window[funcName]) window[funcName].call(mutation.target);
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

function wsSend(msg, before) {
  if (window.ws && window.ws.readyState == 1) {
    if (typeof before == 'function') {
      before(function () {
        if (msg.action == 'form' || msg.action == 'link') {
          window.waitForLoadRes['/forms/cache/' + msg.query.form + '_script' + window.userCustomSfx + '.js'] = true;
        }
        window.ws.send(JSON.stringify(msg));
      });
    } else {
      if (msg.action == 'form' || msg.action == 'link') {
        window.waitForLoadRes['/forms/cache/' + msg.query.form + '_script' + window.userCustomSfx + '.js'] = true;
      }
      window.ws.send(JSON.stringify(msg));
    }
  } else {
    $.notify('Нет подключения к серверу', { className: 'error' });
  }
}

function doLogin(data, doLoginSuccess, doLoginError) {
  if (!data) data = {};

  data = extend(data, {
    user: localStorage['xaoc_' + PROJECT + '_user'],
    auth: localStorage['xaoc_' + PROJECT + '_auth'],
    session: sessionStorage['xaoc_' + PROJECT + '_session'],
    mobile: window.isMobile,
    cur_enter: moment(localStorage['xaoc_' + PROJECT + '_cur_enter'] * 1).format(),
    last_enter: moment(localStorage['xaoc_' + PROJECT + '_last_enter'] * 1).format(),
    last_err: sessionStorage['xaoc_' + PROJECT + '_last_err'],
    agent: navigator.userAgent,
    demo: data.demo || (location.hostname == 'localhost' && navigator.userAgent.indexOf('PhantomJS') != -1),
    location: {
      hostname: location.hostname,
      pathname: location.pathname,
      search: location.search,
    },
  });

  sessionStorage.removeItem('xaoc_' + PROJECT + '_last_err');

  wsSendCallback(
    data,
    function () {
      clearFormRes(); // при логине точно происходит перезагрузка основной формы

      const callback = doLoginSuccess || window.doLoginSuccess;
      if (typeof callback == 'function') callback(...arguments);
    },
    doLoginError || window.doLoginError,
  );
}

function clearFormRes() {
  Object.keys(window.formRes).forEach((_) => {
    document.head.removeChild(window.formRes[_]);
    delete window.formRes[_];
  });
}

function pingPong() {
  if (!window.ws) {
    setTimeout(function () {
      pingPong();
    }, 1000);
    return;
  }
  window.ws.send('ping');
  setTimeout(function () {
    pingPong();
  }, 30000);
}

function initWS() {
  if (window.ws) return;
  window.wsPath = (location.protocol == 'https:' ? 'wss' : 'ws') + '://' + window.location.host + '/ws';
  window.ws = new WebSocket(window.wsPath);

  window.ws.onerror = function (error) {
    console.error(error);
  };

  window.ws.onclose = function (msg) {
    console.log(msg);
    delete window.ws;
    window.wsReconnect = true;
    sessionStorage.setItem('xaoc_' + PROJECT + '_last_err', msg.code + '(' + moment().format() + ')');
    setTimeout(function () {
      $.notify('Восстановление соединения с сервером...', { className: 'error' });
      initWS();
    }, 3000);
  };

  window.ws.onopen = function () {
    pingPong();

    if (window.wsReconnect) {
      delete window.wsReconnect;
      location.reload();
    } else {
      var userData = location.href.split('#')[0].split('?')[1],
        userDataObj = {};
      if (userData) {
        userData.split('&').forEach(function (p) {
          var pp = p.split('=');
          if (pp[0] == 'key') userDataObj.user = pp[1] || '';
          if (pp[0] == 'auth') userDataObj.auth = pp[1] || '';
          if (pp[0] == 'session') userDataObj.session = pp[1] || '';
        });
      }

      if (localStorage['xaoc_' + PROJECT + '_user'] == undefined) localStorage.setItem('xaoc_' + PROJECT + '_user', '');
      if (userDataObj.user != undefined) localStorage.setItem('xaoc_' + PROJECT + '_user', userDataObj.user);
      if (localStorage['xaoc_' + PROJECT + '_auth'] == undefined) localStorage.setItem('xaoc_' + PROJECT + '_auth', '');
      if (userDataObj.auth != undefined) localStorage.setItem('xaoc_' + PROJECT + '_auth', userDataObj.auth);
      if (sessionStorage['xaoc_' + PROJECT + '_session'] == undefined)
        sessionStorage.setItem('xaoc_' + PROJECT + '_session', '');
      if (userDataObj.session != undefined) sessionStorage.setItem('xaoc_' + PROJECT + '_session', userDataObj.session);

      if (localStorage['xaoc_' + PROJECT + '_cur_enter'] != undefined)
        localStorage.setItem('xaoc_' + PROJECT + '_last_enter', localStorage['xaoc_' + PROJECT + '_cur_enter']);
      if (localStorage['xaoc_' + PROJECT + '_last_enter'] == undefined)
        localStorage.setItem('xaoc_' + PROJECT + '_last_enter', Date.now());
      localStorage.setItem('xaoc_' + PROJECT + '_cur_enter', Date.now());

      doLogin();
    }
  };

  window.ws.onmessage = function (msg) {
    if (msg.data == 'pong') return;

    var data = JSON.parse(msg.data);

    if (data.notify && navigator.serviceWorker) {
      navigator.serviceWorker.getRegistration().then(function (registration) {
        registration.showNotification(data.notify.title, data.notify);
      });
    }

    if (data.answer) {
      if (window.showLogTime && data.answer.logtime) lo('data.answer.logtime', data.answer.logtime);
      if (data.answer.err) {
        if (data.answer.badForm && window.setTutorialComplete) {
          // принудительно закончить обучение
          window.setTutorialComplete({ endTutorial: true });
        }

        // если select2 сам не удаляет функции то, возможно, тут нужно что-то больше, чем просто delete
        if (data.req && data.req.x && window.wsCallback[data.req.x]) {
          // тут ошибка, если в ответе search_addobj {status: 'err', err: 'Строка поиска не может быть пустой.'}
          if (window.wsCallback[data.req.x].failure) window.wsCallback[data.req.x].failure(data.answer);
          delete window.wsCallback[data.req.x];
        }
        if (data.req && data.req.x && window.wsCallbackM[data.req.x]) {
          if (window.wsCallbackM[data.req.x].failure) window.wsCallbackM[data.req.x].failure(data.answer);
          delete window.wsCallbackM[data.req.x];
        }

        // могли уже вызвать уведомления внутри wsCallback
        if (!data.answer.notifyReady) notifyError(data.answer);

        // перенаправление с несуществующей либо запрещенной формы
        if (data.req.query && data.req.action != 'link' && data.req.query.form) {
          if (data.req.loopError !== true) {
            location.hash = '';
            doLogin({ loopError: true });
          }
        } else {
          if (data.req.action == 'link') {
            if (data.answer.badForm) {
              if (data.req.query.badForm) {
                // обновляем main-форму
                locationQuery({ form: history.state.form, badForm: { form: data.req.query.form } });
              } else {
                data.req.query.badForm = { form: data.req.query.form };
                locationQuery(data.req.query);
              }
            }
          } else {
            if (data.answer.reloadItem && data.req.code) reloadItem($(['code=' + data.req.code]));
          }
        }
      } else {
        if (data.req && data.req.x) {
          if (window.wsCallback[data.req.x]) {
            if (data.answer.status == 'err') {
              if (window.wsCallback[data.req.x].failure) window.wsCallback[data.req.x].failure(data.answer);
            } else {
              if (window.wsCallback[data.req.x].success) window.wsCallback[data.req.x].success(data.answer);
            }
            // если select2 сам не удаляет функции то, возможно, тут нужно что-то больше, чем просто delete
            delete window.wsCallback[data.req.x];
          }
          if (window.wsCallbackM[data.req.x]) {
            window.wsCallbackM[data.req.x].success(data.answer);
            if (data.answer.lastMsg) {
              delete window.wsCallbackM[data.req.x];
            }
          }
        }

        if (data.req.session != undefined) {
          window.debugCSS = data.answer.debugCSS;

          if (data.req.user != data.answer.user) localStorage.setItem('xaoc_' + PROJECT + '_user', data.answer.user);
          if (data.req.auth != data.answer.auth) localStorage.setItem('xaoc_' + PROJECT + '_auth', data.answer.auth);
          if (data.req.session != data.answer.session)
            sessionStorage.setItem('xaoc_' + PROJECT + '_session', data.answer.session);

          window.userRole = data.answer.role;
          window.userCustomSfx =
            (window.userRole ? '_' + window.userRole : '') + (data.answer.theme ? '_' + data.answer.theme : '');
          document.cookie = 'xaoc_' + PROJECT + '_session=' + sessionStorage['xaoc_' + PROJECT + '_session'];
          document.cookie = 'xaoc_' + PROJECT + '_role=' + window.userRole;

          if (!data.answer.reload) {
            let query = { form: data.answer.baseForm || HTML_FORM };
            if (data.answer.form) {
              // в частности, для формы логина
              query = { form: data.answer.form, h: true };
            } else {
              if (location.hash)
                try {
                  const hashQuery = JSON.parse(decodeURIComponent(location.hash).slice(1));
                  if (hashQuery.form) query = hashQuery;
                } catch (e) {
                  console.warn(e, 'location.hash=', JSON.stringify(location));
                }
            }

            function loadJS_3(query, callback) {
              loadRes('/forms/cache/' + query.form + '_func' + window.userCustomSfx + '.js', false, callback, {
                gotoOnError: '/',
                importance: 'high',
              });
            }

            var $body = $('body');
            if (!window.CUSTOM_HTML) {
              myEmpty($body);
              $body.empty();
              $body.html($('<div />', { id: '_1' }));
              $body.addClass('form-block').attr('form', query.form).attr('lastQuery', JSON.stringify(query));
            } else {
              var $el = $body.find('> .custom_html_dom');
              myEmpty($el);
              $el.empty();
              $el.replaceWith($('<div />', { id: '_1' }));
            }
            if (data.req.change_role) for (var ll in window.LST) prepareLST(ll);

            addStyleCatcher($body[0]);

            wsSend({ action: 'form', loopError: data.req.loopError, query: query }, function (callback) {
              if (window.debugCSS) {
                loadJS_3(query, callback);
              } else {
                loadRes('/forms/cache/' + query.form + '_style' + window.userCustomSfx + '.css', true, function () {
                  loadJS_3(query, callback);
                });
              }
            });
          }
        }
        if (data.req.query && data.req.query.form && data.answer.load === true) {
          //console.log("data.req.query", data.req.query);
          if (window.setTutorialLinks) window.setTutorialLinks();

          if (data.answer.editMode) {
            $('body').addClass('editMode');
          } else {
            if ($('body').hasClass('editMode')) $('body').removeClass('editMode');
          }

          if (data.req.query.h === true) {
            // кнопки вперед/назад
          } else {
            history.hashNoAction = true;

            if (data.req.history !== false && data.req.history !== 'false') {
              if (data.req.query.code) {
                var query = JSON.parse(
                  history.state
                    ? JSON.stringify(history.state)
                    : decodeURIComponent(location.hash.split('#')[1] || '{}'),
                );

                if (history.state && history.state.subform) {
                  if (query) {
                    query.subform = data.req.query;
                    if (!window.HIDE_LOCATION_HASH) window.location.hash = JSON.stringify(query);
                    history.replaceState(query, JSON.stringify(query));
                  } else {
                    console.warn('Пустой query', history.state, location.hash);
                  }
                } else {
                  if (query) {
                    query.subform = data.req.query;
                    if (!window.HIDE_LOCATION_HASH) window.location.hash = JSON.stringify(query);
                    history.replaceState(query, JSON.stringify(query));
                  } else {
                    console.warn('Пустой query', history.state, location.hash);
                  }
                }
              } else {
                if (!window.HIDE_LOCATION_HASH) window.location.hash = JSON.stringify(data.req.query);

                if (history.subform === false) {
                  delete history.subform;
                  data.req.query.subform = { form: false };
                }
                history.replaceState(data.req.query, JSON.stringify(data.req.query));
              }
            }
          }
          if (!data.req.query.code && history.state) history.lastForm = history.state.form;

          function loadJS_1(d) {
            loadRes(
              '/forms/cache/' + d.req.query.form + '_script' + window.userCustomSfx + '.js',
              false,
              function () {
                if (data.req.history !== false && data.req.history !== 'false') {
                  if (window.updateMenu) window.updateMenu(data);
                }
              },
              { importance: 'high' },
            );
          }

          if (window.debugCSS) {
            const src = '/forms/cache/' + data.req.query.form + '_style' + window.userCustomSfx + '.css';
            if (
              query &&
              query.subform &&
              query.subform.container &&
              $('#' + query.subform.container).attr('staticForceLoad')
            )
              src + '?v=' + Date.now();
            loadRes(src, true, function () {
              loadJS_1(data);
            });
          } else {
            loadJS_1(data);
          }
        }
        if (data.answer.msg) {
          if (data.answer.type) {
            $.notify(data.answer.msg, { className: data.answer.type });
          } else {
            $.notify(data.answer.msg, { className: 'success' });
          }
        }
        if (data.answer.reload != undefined) {
          if (data.answer.reload === true) {
            if (data.req.action == 'logout') {
              localStorage.setItem('xaoc_' + PROJECT + '_user', '');
              localStorage.setItem('xaoc_' + PROJECT + '_auth', '');
              sessionStorage.setItem('xaoc_' + PROJECT + '_session', '');
            }
            location.reload();
          } else {
            window.location.href = data.answer.reload;
          }
        }

        // тут надо дописывать session в параметры ссылки, чтобы в открывшемся окне обнулилась сессия
        if (data.answer.open) {
          window.open(data.answer.open, '_blank');
        }

        if (data.answer.load) {
          var code = data.req.action == 'link' ? data.req.query.code : data.req.code;
          if (
            code &&
            typeof window.waitForLoadElementByCode[code] == 'function' &&
            !window.waitForLoadElementByCode[code].ready
          ) {
            window.waitForLoadElementByCode[code].ready = true;
            window.waitForLoadElementByCode[code]();
          }
          $('body').removeClass('loading');
        }
        if (data.req.action == 'fieldlog') {
          console.info(data.answer);
          $.notify('Данные выведены в консоль (F12)', { className: 'success' });
        }
      }
    } else {
      if (data.tpls) {
        if (Object.keys(data.tpls).length) {
          for (var id in data.tpls) {
            if (data.tpls[id]) {
              var $tmp = $('#_' + id);

              var $realParent = $tmp.parent();
              if ($realParent.length == 0) $realParent = $('[code=' + id + ']');
              var $tmpparent = $('<div />');
              var doAfterLoad = [];

              window.doAfterLoadElement[id] = {
                p: $realParent,
                doAfterLoad: [],
              };

              var waitForCodes = tplToHtml(data.tpls[id], $tmpparent, id, doAfterLoad, $realParent);

              if ($tmp.attr('onLoadElement')) {
                if (Object.keys(waitForCodes).length) {
                  window.doAfterLoadElement[id].doAfterLoad.push({
                    f: $tmp.attr('onLoadElement'),
                    p: $realParent,
                    code: id,
                  });
                } else {
                  // нет вложенных элементов - выполняем сразу
                  doAfterLoad.push({ f: $tmp.attr('onLoadElement'), p: $realParent, code: id });
                }
              }
              // onItemLoad должен срабатывать после onLoadElement
              if ($realParent.attr('onItemLoad') && $realParent.attr('code') != id) {
                if (Object.keys(waitForCodes).length) {
                  window.doAfterLoadElement[id].doAfterLoad.push({
                    f: $realParent.attr('onItemLoad'),
                    p: $realParent,
                    code: id,
                  });
                } else {
                  // нет вложенных элементов - выполняем сразу
                  doAfterLoad.push({ f: $realParent.attr('onItemLoad'), p: $realParent, code: id });
                }
              }

              // onLastItem должен срабатывать после onItemLoad
              if ($tmp.attr('onLastItem') && $realParent.attr('onLastItem') && $realParent.attr('code') != id) {
                if (Object.keys(waitForCodes).length) {
                  window.doAfterLoadElement[id].doAfterLoad.push({
                    f: $realParent.attr('onLastItem'),
                    p: $realParent,
                    code: id,
                  });
                } else {
                  // нет вложенных элементов - выполняем сразу
                  doAfterLoad.push({ f: $realParent.attr('onLastItem'), p: $realParent, code: id });
                }
              }

              // этот блок должен быть в самом конце, чтобы события родителей (то что внутри waitForLoadElementByCode) сработало гарантированно после событий детей (onLoadElement и т.п.)
              if (id && window.waitForLoadElementByCode[id] && window.waitForLoadElementByCode[id].ready != true) {
                window.waitForLoadElementByCode[id].ready = true;
                if (Object.keys(waitForCodes).length) {
                  window.doAfterLoadElement[id].doAfterLoad.push(window.waitForLoadElementByCode[id].f);
                } else {
                  doAfterLoad.push(window.waitForLoadElementByCode[id].f);
                }
              }

              $tmp.replaceWith($tmpparent.html());

              if (Object.keys(waitForCodes).length) {
                window.doAfterLoadElement[id].waitForCodes = {};

                for (var code in waitForCodes) {
                  window.doAfterLoadElement[id].waitForCodes[code] = true;

                  if (window.waitForLoadElementByCode[id] && window.waitForLoadElementByCode[id].w) {
                    window.waitForLoadElementByCode[id].w.forEach(function (w) {
                      if (window.doAfterLoadElement[w] && window.doAfterLoadElement[w].waitForCodes)
                        window.doAfterLoadElement[w].waitForCodes[code] = true;
                    });
                  }

                  const cCode = code;

                  window.waitForLoadElementByCode[cCode] = {
                    w: [id].concat(window.waitForLoadElementByCode[id] ? window.waitForLoadElementByCode[id].w : []),
                  };
                  window.waitForLoadElementByCode[cCode].f = function () {
                    this.w.forEach(function (w) {
                      // надо проверить как работает при подписке (sub)
                      if (window.doAfterLoadElement[w] && window.doAfterLoadElement[w].waitForCodes) {
                        if (
                          window.doAfterLoadElement[w].waitForCodes &&
                          window.doAfterLoadElement[w].waitForCodes[cCode]
                        )
                          delete window.doAfterLoadElement[w].waitForCodes[cCode];

                        if (
                          Object.keys(window.doAfterLoadElement[w].waitForCodes).length == 0 &&
                          window.doAfterLoadElement[w].doAfterLoad.length
                        ) {
                          window.doAfterLoadElement[w].doAfterLoad.forEach(function (f) {
                            if (!f) {
                              console.error('ERROR :: window.doAfterLoadElement code=', w);
                            } else if (typeof f == 'function') {
                              f(window.doAfterLoadElement[w].p);
                            } else {
                              if (f.f && typeof window[f.f] == 'function') {
                                window[f.f](f.p, f.code, f.f);
                              }
                            }
                          });

                          window.doAfterLoadElement[w].ready = true;
                        }
                      }
                    });
                  }.bind(window.waitForLoadElementByCode[cCode]);
                }
              }

              window.afterElementMounted['_' + id] = {
                id: id,
                doAfterLoad: doAfterLoad,
              };
              window.afterElementMounted['_' + id].f = function () {
                (this.doAfterLoad || []).forEach(function (f) {
                  if (typeof f == 'function') {
                    f($realParent);
                  } else if (f && f.f) {
                    if (typeof f.f == 'function') {
                      f.f(f.p, f.code);
                    } else if (typeof window[f.f] == 'function') {
                      window[f.f](f.p, f.code, f.f);
                    }
                  }
                });

                // не должно вызываться больше одного раза
                this.ready = true;
                //delete window.afterElementMounted['_'+this.id];
              }.bind(window.afterElementMounted['_' + id]);
            }
          }
        }
      } else if (data.lst) {
        for (let lst in data.lst) {
          // временно отключил кэширование справочников - проверяю работоспособность branch`ей
          //if(window.LST[lst] == undefined)
          loadLST(lst, data.lst[lst]);
        }
      } else if (data.sub) {
        if (data.sub.code) {
          if (data.sub.action == 'addComplex' && !data.sub.owner) {
            // :first нужно для того, чтобы не генерить ошибки в фреймворках, которые дублируют верстку (например, f7)
            var $controls = $('.complex-controls[code=' + data.sub.code + ']');
            var $add = $controls.find('> .control-add:first');

            if (!$controls.attr('onSubAdd') || window[$controls.attr('onSubAdd')]($controls, data.sub)) {
              $add.addClass('subAction');
              $add.trigger('click');
            }
          }

          if (data.sub.action == 'deleteComplex' && !data.sub.owner) {
            var $item = $('[code=' + data.sub.code + '].item-controls > .btn-delete');
            if (!$item.attr('onSubDelete') || window[$item.attr('onSubDelete')]($item, data.sub)) {
              $item.attr('force', true);
              $item.addClass('subAction');
              $item.trigger('click');
            }
          }

          if (data.sub.action == 'saveField') {
            var $el = $('[onSub_' + data.sub.code + ']');
            if ($el.length) window[$el.attr('onSub_' + data.sub.code)]($el, data.sub);
          }
        }
      } else {
        if (data.err) console.warn(data.err);
        if (data.test) console.info(data.test);
      }
    }
  };
}

function reloadForm(e, filter, callback) {
  try {
    var $e = $(e);
    var $form = $e.closest('.form-block');
    var query = JSON.parse($form.attr('lastQuery') || '{}');
    if (filter) {
      if (!query.filter) query.filter = {};
      query.filter = Object.assign(query.filter, filter);
    }
    locationQuery(query);
  } catch (err) {
    console.log(err);
    $.notify('Ошибка перезагрузки формы');
  }
}

function toShortStr(str, l) {
  var i = str ? str.substring(0, l).lastIndexOf(' ') : false;
  return str ? (str.length <= l ? str : str.substring(0, i) + (i < l ? '...' : '')) : '';
}

function myEmpty($e, callback) {
  // не все очищает, пока не убраны мемлинки (можно этой функцией отловить)
  var $l = $e.find('> *');
  if ($l.length) {
    $l.each(function (i, e) {
      myEmpty($(e), function () {
        if (e.parentNode) e.parentNode.removeChild(e);
      });
    });
  } else {
    if (typeof callback == 'function') callback();
  }
}

function loadLST(lst, url) {
  const ll = lst;
  if (!url) {
    url = '/static/lst/' + lst + '.js';
    if ((lst = lst.split('~')).length > 1) url = '/blocks/' + lst[0] + '/lst/' + lst[1] + '.js';
  }
  loadRes(url, true, function (cb) {
    prepareLST(ll);
    if (typeof cb == 'function') cb();
  });
}

function prepareLST(ll) {
  if (window.LST[ll]) {
    window.oLST[ll] = {};
    window.LST[ll].forEach(function (lll) {
      if (lll._access) {
        if (window.userRole != 'admin' && !lll._access[window.userRole]) {
          lll.hide = true;
        } else {
          if (lll.hide) delete lll.hide;
        }
      }
      window.oLST[ll][lll.v] = lll;
    });
  }
}

function notifyError(msg = {}, $target = []) {
  // if(typeof msg == 'string') msg = {err: msg+''}; - не работает, надо разбираться с ошибкой в notify.js
  if (!msg.err) msg.err = '';
  msg.notifyReady = true;
  console.warn(msg.err);
  if (msg.beep) beep(msg.beep);

  if (window.notify) window.notify(...arguments);
}

$.prototype.d = function (a, v) {
  if (v !== undefined) this.attr('data-' + a, v);
  return this.data(...arguments);
};

function addStyleCatcher(parent, code = '') {
  parent.classList.remove('x_styles_loaded');

  const catcher = document.createElement('div');
  catcher.id = 'style_catcher_' + code;
  catcher.classList.add('style_catcher');
  parent.appendChild(catcher);

  new ResizeObserver(function (entries) {
    entries[0].target.parentNode.classList.add('x_styles_loaded');
    this.unobserve(entries[0].target);
  }).observe(catcher);
}
