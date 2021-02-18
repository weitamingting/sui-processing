(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["SuiProcessing"] = factory();
	else
		root["SuiProcessing"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

__webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 使用方法：
// sp.show().toSuccess({
//     text: '处理成功'
// }).hide()
/**
 * 组件主类
 * @class SuiProcessing
 * @constructor
 * @param {Object} options 实例化参数
 */
var SuiProcessing = function () {
    function SuiProcessing(options) {
        _classCallCheck(this, SuiProcessing);

        var defaultOptions = {
            // 初始化默认状态
            defaultStatus: 'loading',
            // 初始化默认提示文字
            tipsText: '处理中，请稍后',
            hideDelay: 2000
        };
        this.options = Object.assign(defaultOptions, options);

        this.randomString = this.randomString(9);
        this.wrapperId = 'spid-' + this.randomString;
        this.circleWrapId = 'spcwid-' + this.randomString;
        this.textId = 'sptxt-' + this.randomString;
        this.checkmarkId = 'spcheckmark-' + this.randomString;
        this.crossmarkId = 'spcrossmark-' + this.randomString;

        this.wrapperDom = null;
        this.circleWrapDom = null;
        this.textDom = null;

        this.initHtml();
    }

    _createClass(SuiProcessing, [{
        key: 'initHtml',
        value: function initHtml() {
            var warpper = document.createElement("div");
            warpper.classList.add("sui-processing", 'sp-status-' + this.options.defaultStatus);
            warpper.id = this.wrapperId;
            var html = '\n        <div class="sui-processing-inner">\n            <div class="sui-processing-icon">\n                <div class="sp-loading-icon">\n                    <div class="sk-chase">\n                        <div class="sk-chase-dot"></div>\n                        <div class="sk-chase-dot"></div>\n                        <div class="sk-chase-dot"></div>\n                        <div class="sk-chase-dot"></div>\n                        <div class="sk-chase-dot"></div>\n                        <div class="sk-chase-dot"></div>\n                    </div>\n                </div>\n                <div class="sp-circle-icon">\n                    <div class="sp-circle-wrap" id=' + this.circleWrapId + '>\n                        <div class="sp-checkmark" id="' + this.checkmarkId + '"></div>\n                        <div class="sp-crossmark" id="' + this.crossmarkId + '"></div>\n                        <div class="sp-circle-part sp-cp-left">\n                            <div class="sp-circle sp-circle-left"></div>\n                        </div>\n                        <div class="sp-circle-part sp-cp-right">\n                            <div class="sp-circle sp-circle-right"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sui-processing-text" id=' + this.textId + '>\n                ' + this.options.tipsText + '\n            </div>\n        </div>\n        ';
            warpper.innerHTML = html;
            document.body.appendChild(warpper);

            this.wrapperDom = document.getElementById(this.wrapperId);
            this.circleWrapDom = document.getElementById(this.circleWrapId);
            this.textDom = document.getElementById(this.textId);
            this.checkmarkDom = document.getElementById(this.checkmarkId);
            this.crossmarkDom = document.getElementById(this.crossmarkId);
        }
        /**
         * 显示提示框方法
         * @method show
         * @for SuiProcessing
         * @param {Object} options {callback：显示窗口后触发的回调函数}
         * @return {Object} 返回实例自身，用于链式调用
         */

    }, {
        key: 'show',
        value: function show(options) {
            this.wrapperDom.classList.add('sp-show');
            if (options && options.callback) {
                var callback = options.callback;

                callback && Object.prototype.toString.call(callback) === '[object Function]' ? callback(this) : void 0;
            }
            return this;
        }
        /**
         * 隐藏提示框方法
         * @method hide
         * @for SuiProcessing
         * @param {Object} options {hideDelay：延迟多久后隐藏窗口，callback：隐藏窗口后触发的回调函数}
         * @return {Object} 返回实例自身，用于链式调用
         */

    }, {
        key: 'hide',
        value: function hide(options) {
            var _this = this;

            var hideDelay = this.options.hideDelay;
            if (options && options.hasOwnProperty('hideDelay')) {
                hideDelay = options.hideDelay;
            }
            setTimeout(function () {
                _this.wrapperDom.classList.remove('sp-show');
                if (options && options.callback) {
                    options.callback && Object.prototype.toString.call(options.callback) === '[object Function]' ? options.callback(_this) : void 0;
                }
            }, hideDelay);

            return this;
        }
        /**
         * 更改提示框状态为加载中
         * @method toLoading
         * @for SuiProcessing
         * @param {Object} data {text：窗口提示文字}
         * @return {Object} 返回实例自身，用于链式调用
         */

    }, {
        key: 'toLoading',
        value: function toLoading(data) {
            this.wrapperDom.classList.remove('sp-status-success', 'sp-status-error', 'sp-status-warning');
            this.wrapperDom.classList.add('sp-status-loading');
            this.textDom.innerText = data.text ? data.text : '处理中，请稍后...';

            return this;
        }
        /**
         * 更改提示框状态为成功
         * @method toLoading
         * @for SuiProcessing
         * @param {Object} data {text：窗口提示文字}
         * @return {Object} 返回实例自身，用于链式调用
         */

    }, {
        key: 'toSuccess',
        value: function toSuccess(data) {
            this.wrapperDom.classList.remove('sp-status-loading', 'sp-status-error', 'sp-status-warning');
            this.wrapperDom.classList.add('sp-status-success');

            this.circleWrapDom.classList.remove('sp-error');
            this.circleWrapDom.classList.add('sp-success');

            this.textDom.innerText = data.text ? data.text : '处理成功！';

            return this;
        }
        /**
         * 更改提示框状态为失败
         * @method toLoading
         * @for SuiProcessing
         * @param {Object} data {text：窗口提示文字}
         * @return {Object} 返回实例自身，用于链式调用
         */

    }, {
        key: 'toError',
        value: function toError(data) {
            this.wrapperDom.classList.remove('sp-status-loading', 'sp-status-warning', 'sp-status-success');
            this.wrapperDom.classList.add('sp-status-error');

            this.circleWrapDom.classList.remove('sp-success');
            this.circleWrapDom.classList.add('sp-error');

            this.textDom.innerText = data.text ? data.text : '处理失败！';

            return this;
        }
        // 生成随机id序列

    }, {
        key: 'randomString',
        value: function randomString(len) {
            len = len || 32;
            var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'; //把这些容易混淆的字符oOLl,9gq,Vv,Uu,I1  排除掉他们，以防混淆和错乱
            var maxPos = $chars.length;
            var rand = '';
            for (var i = 0; i < len; i++) {
                rand += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return rand;
        }
    }]);

    return SuiProcessing;
}();

exports.default = SuiProcessing;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".sui-processing {\n  display: flex;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 9999;\n  background-color: transparent;\n  visibility: hidden;\n  justify-content: center;\n  align-items: center;\n  pointer-events: none; }\n  .sui-processing.sp-show {\n    visibility: visible;\n    pointer-events: auto; }\n    .sui-processing.sp-show .sui-processing-inner {\n      transform: translateY(0);\n      opacity: 1; }\n  .sui-processing.sp-status-loading .sui-processing-inner {\n    background-color: #00bcd4;\n    box-shadow: 0px 10px 20px rgba(0, 188, 212, 0.5); }\n  .sui-processing.sp-status-loading .sp-loading-icon {\n    display: flex; }\n  .sui-processing.sp-status-loading .sp-circle-icon {\n    display: none; }\n  .sui-processing.sp-status-success .sui-processing-inner {\n    background-color: #51d457;\n    box-shadow: 0px 10px 20px rgba(81, 212, 87, 0.5); }\n  .sui-processing.sp-status-success .sp-loading-icon {\n    display: none; }\n  .sui-processing.sp-status-success .sp-circle-icon {\n    display: flex; }\n  .sui-processing.sp-status-error .sui-processing-inner {\n    background-color: #f44336;\n    box-shadow: 0px 10px 20px rgba(244, 67, 54, 0.5); }\n  .sui-processing.sp-status-error .sp-loading-icon {\n    display: none; }\n  .sui-processing.sp-status-error .sp-circle-icon {\n    display: flex; }\n  .sui-processing.sp-status-warning .sui-processing-inner {\n    background-color: #ff9900;\n    box-shadow: 0px 10px 20px rgba(255, 153, 0, 0.5); }\n  .sui-processing.sp-status-warning .sp-loading-icon {\n    display: none; }\n  .sui-processing.sp-status-warning .sp-circle-icon {\n    display: flex; }\n  .sui-processing .sui-processing-inner {\n    display: flex;\n    align-items: center;\n    width: 300px;\n    height: 120px;\n    padding: 10px;\n    border-radius: 10px;\n    transform: translateY(100px);\n    opacity: 0;\n    transition: all .6s; }\n    .sui-processing .sui-processing-inner .sui-processing-icon {\n      flex: 0 120px;\n      height: 100%;\n      position: relative; }\n    .sui-processing .sui-processing-inner .sui-processing-text {\n      flex: 1 1;\n      color: #ffffff;\n      font-size: 16px; }\n\n.sp-loading-icon, .sp-circle-icon {\n  height: 100%;\n  display: none;\n  justify-content: center;\n  align-items: center; }\n\n.sp-circle-wrap {\n  position: relative;\n  width: 90px;\n  height: 90px; }\n  .sp-circle-wrap .sp-circle-part {\n    position: absolute;\n    overflow: hidden; }\n    .sp-circle-wrap .sp-circle-part.sp-cp-left {\n      left: 0;\n      width: 50%;\n      height: 90px; }\n    .sp-circle-wrap .sp-circle-part.sp-cp-right {\n      right: 0;\n      width: 50%;\n      height: 90px; }\n  .sp-circle-wrap .sp-circle {\n    position: absolute;\n    width: 90px;\n    height: 90px;\n    border-radius: 50%;\n    border: 3px solid transparent;\n    transform: rotate(45deg);\n    box-sizing: border-box; }\n    .sp-circle-wrap .sp-circle.sp-circle-left {\n      left: 0;\n      transform: rotate(225deg); }\n    .sp-circle-wrap .sp-circle.sp-circle-right {\n      right: 0;\n      transform: rotate(225deg); }\n  .sp-circle-wrap .sp-checkmark {\n    position: absolute;\n    left: 30%;\n    top: 10%;\n    right: 10%;\n    bottom: 10%;\n    width: 40%;\n    height: 60%;\n    transform: rotate(45deg);\n    overflow: hidden;\n    display: none; }\n    .sp-circle-wrap .sp-checkmark::before {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: 0px;\n      left: 0px;\n      width: 100%;\n      height: 3px;\n      transform: translateX(-100%); }\n    .sp-circle-wrap .sp-checkmark::after {\n      content: '';\n      display: block;\n      position: absolute;\n      right: 0px;\n      width: 3px;\n      height: 100%;\n      transform: translateY(100%); }\n  .sp-circle-wrap .sp-crossmark {\n    position: absolute;\n    left: 15%;\n    top: 15%;\n    width: 70%;\n    height: 70%;\n    overflow: hidden;\n    display: none; }\n    .sp-circle-wrap .sp-crossmark::before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 0px;\n      width: 100%;\n      height: 3px;\n      transform: rotate(45deg) translateX(-120%); }\n    .sp-circle-wrap .sp-crossmark::after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: 50%;\n      left: 0px;\n      width: 100%;\n      height: 3px;\n      transform: rotate(-45deg) translateX(120%); }\n  .sp-circle-wrap.sp-success .sp-checkmark {\n    display: block; }\n    .sp-circle-wrap.sp-success .sp-checkmark::before, .sp-circle-wrap.sp-success .sp-checkmark::after {\n      background-color: #ffffff; }\n  .sp-circle-wrap.sp-success .sp-crossmark {\n    display: none; }\n    .sp-circle-wrap.sp-success .sp-crossmark::before, .sp-circle-wrap.sp-success .sp-crossmark::after {\n      background-color: #ffffff; }\n  .sp-circle-wrap.sp-success .sp-circle-left {\n    border-bottom-color: #ffffff;\n    border-left-color: #ffffff; }\n  .sp-circle-wrap.sp-success .sp-circle-right {\n    border-top-color: #ffffff;\n    border-right-color: #ffffff; }\n  .sp-circle-wrap.sp-success .sp-circle.sp-circle-left {\n    animation: sp-progress 0.3s linear 0s 1 forwards; }\n  .sp-circle-wrap.sp-success .sp-circle.sp-circle-right {\n    animation: sp-progress 0.3s linear 0.3s 1 forwards; }\n  .sp-circle-wrap.sp-success .sp-checkmark::before {\n    animation: sp-checkmark-left 0.15s linear 0.6s 1 forwards; }\n  .sp-circle-wrap.sp-success .sp-checkmark::after {\n    animation: sp-checkmark-right 0.15s linear 0.75s 1 forwards; }\n  .sp-circle-wrap.sp-success .sp-crossmark::before {\n    animation: sp-crossmark-left 0.15s linear 0.6s 1 forwards; }\n  .sp-circle-wrap.sp-success .sp-crossmark::after {\n    animation: sp-crossmark-right 0.15s linear 0.75s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-crossmark {\n    display: block; }\n    .sp-circle-wrap.sp-error .sp-crossmark::before, .sp-circle-wrap.sp-error .sp-crossmark::after {\n      background-color: #ffffff; }\n  .sp-circle-wrap.sp-error .sp-checkmark {\n    display: none; }\n    .sp-circle-wrap.sp-error .sp-checkmark::before, .sp-circle-wrap.sp-error .sp-checkmark::after {\n      background-color: #ffffff; }\n  .sp-circle-wrap.sp-error .sp-circle-left {\n    border-bottom-color: #ffffff;\n    border-left-color: #ffffff; }\n  .sp-circle-wrap.sp-error .sp-circle-right {\n    border-top-color: #ffffff;\n    border-right-color: #ffffff; }\n  .sp-circle-wrap.sp-error .sp-circle.sp-circle-left {\n    animation: sp-progress 0.3s linear 0s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-circle.sp-circle-right {\n    animation: sp-progress 0.3s linear 0.3s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-checkmark::before {\n    animation: sp-checkmark-left 0.15s linear 0.6s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-checkmark::after {\n    animation: sp-checkmark-right 0.15s linear 0.75s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-crossmark::before {\n    animation: sp-crossmark-left 0.15s linear 0.6s 1 forwards; }\n  .sp-circle-wrap.sp-error .sp-crossmark::after {\n    animation: sp-crossmark-right 0.15s linear 0.75s 1 forwards; }\n\n@keyframes sp-progress {\n  from {\n    transform: rotate(225deg); }\n  to {\n    transform: rotate(45deg); } }\n\n@keyframes sp-checkmark-left {\n  from {\n    transform: translateX(-100%); }\n  to {\n    transform: translateX(0px); } }\n\n@keyframes sp-checkmark-right {\n  from {\n    transform: translateY(100%); }\n  to {\n    transform: translateY(0px); } }\n\n@keyframes sp-crossmark-left {\n  from {\n    transform: rotate(45deg) translateX(-120%); }\n  to {\n    transform: rotate(45deg) translateX(0px); } }\n\n@keyframes sp-crossmark-right {\n  from {\n    transform: rotate(-45deg) translateX(120%); }\n  to {\n    transform: rotate(-45deg) translateX(0px); } }\n\n.sk-chase {\n  width: 60px;\n  height: 60px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both; }\n\n.sk-chase-dot {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  animation: sk-chase-dot 2.0s infinite ease-in-out both; }\n\n.sk-chase-dot:before {\n  content: '';\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #ffffff;\n  border-radius: 100%;\n  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; }\n\n.sk-chase-dot:nth-child(1) {\n  animation-delay: -1.1s; }\n\n.sk-chase-dot:nth-child(2) {\n  animation-delay: -1.0s; }\n\n.sk-chase-dot:nth-child(3) {\n  animation-delay: -0.9s; }\n\n.sk-chase-dot:nth-child(4) {\n  animation-delay: -0.8s; }\n\n.sk-chase-dot:nth-child(5) {\n  animation-delay: -0.7s; }\n\n.sk-chase-dot:nth-child(6) {\n  animation-delay: -0.6s; }\n\n.sk-chase-dot:nth-child(1):before {\n  animation-delay: -1.1s; }\n\n.sk-chase-dot:nth-child(2):before {\n  animation-delay: -1.0s; }\n\n.sk-chase-dot:nth-child(3):before {\n  animation-delay: -0.9s; }\n\n.sk-chase-dot:nth-child(4):before {\n  animation-delay: -0.8s; }\n\n.sk-chase-dot:nth-child(5):before {\n  animation-delay: -0.7s; }\n\n.sk-chase-dot:nth-child(6):before {\n  animation-delay: -0.6s; }\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg); } }\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg); } }\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4); }\n  100%, 0% {\n    transform: scale(1); } }\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ })
/******/ ])["default"];
});