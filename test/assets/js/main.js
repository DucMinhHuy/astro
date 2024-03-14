/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function common(context) {
  context.keys().forEach(context);
}

common(__webpack_require__("./src/js/modules sync recursive \\.js$"));

/***/ }),

/***/ "./src/js/modules sync recursive \\.js$":
/*!***********************************!*\
  !*** ./src/js/modules sync \.js$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./base/focus-visible.js": "./src/js/modules/base/focus-visible.js",
	"./base/is-scrolled.js": "./src/js/modules/base/is-scrolled.js",
	"./base/lazyload.js": "./src/js/modules/base/lazyload.js",
	"./base/object-fit-images.js": "./src/js/modules/base/object-fit-images.js",
	"./base/svg4everybody.js": "./src/js/modules/base/svg4everybody.js",
	"./base/userAgent.js": "./src/js/modules/base/userAgent.js",
	"./common/accordion.js": "./src/js/modules/common/accordion.js",
	"./common/animation.js": "./src/js/modules/common/animation.js",
	"./common/autoHeightItem.js": "./src/js/modules/common/autoHeightItem.js",
	"./common/cursor.js": "./src/js/modules/common/cursor.js",
	"./common/datepicker.js": "./src/js/modules/common/datepicker.js",
	"./common/form.js": "./src/js/modules/common/form.js",
	"./common/fullScreenMenu.js": "./src/js/modules/common/fullScreenMenu.js",
	"./common/highlight.js": "./src/js/modules/common/highlight.js",
	"./common/imageGuard.js": "./src/js/modules/common/imageGuard.js",
	"./common/loader.js": "./src/js/modules/common/loader.js",
	"./common/megamenu.js": "./src/js/modules/common/megamenu.js",
	"./common/multiEventLister.js": "./src/js/modules/common/multiEventLister.js",
	"./common/screenWidth.js": "./src/js/modules/common/screenWidth.js",
	"./common/scroll.js": "./src/js/modules/common/scroll.js",
	"./common/smoothScroll.js": "./src/js/modules/common/smoothScroll.js",
	"./common/tab.js": "./src/js/modules/common/tab.js",
	"./common/tablefix.js": "./src/js/modules/common/tablefix.js",
	"./common/tel.js": "./src/js/modules/common/tel.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/js/modules sync recursive \\.js$";

/***/ }),

/***/ "./src/js/modules/base/focus-visible.js":
/*!**********************************************!*\
  !*** ./src/js/modules/base/focus-visible.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! focus-visible */ "./node_modules/focus-visible/dist/focus-visible.js");
/* harmony import */ var focus_visible__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(focus_visible__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/modules/base/is-scrolled.js":
/*!********************************************!*\
  !*** ./src/js/modules/base/is-scrolled.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import '../../plugins/jquery.hasClasses.js';

//スクロールしたらbodyにis-scrolledを付与
window.addEventListener("scroll", function () {
  if (window.scrollY >= 1) {
    document.querySelector('body').classList.add("is-scrolled");

    // console.log($(window).scrollTop());
  } else {
    document.querySelector('body').classList.remove("is-scrolled");
    // setTimeout(function() {
    //   // if(!$('body').hasClass('is-open')) {
    //   //   $('body').removeClass("is-scrolled");
    //   // }
    //   if(!$('body').hasClasses(['is-open', 'is-searchContent--showPage'], true)) {
    //     $('body').removeClass("is-scrolled");
    //   }

    // }, 100);
  }
});

// $(window).scroll(function() {
//   if($(window).scrollTop() >= 1) {

//     $('body').addClass("is-scrolled");
//     // console.log($(window).scrollTop());
//   } else {
//     // setTimeout(function() {
//     //   // if(!$('body').hasClass('is-open')) {
//     //   //   $('body').removeClass("is-scrolled");
//     //   // }
//     //   if(!$('body').hasClasses(['is-open', 'is-searchContent--showPage'], true)) {
//     //     $('body').removeClass("is-scrolled");
//     //   }

//     // }, 100);
//     $('body').removeClass("is-scrolled");
//   }
// });

/***/ }),

/***/ "./src/js/modules/base/lazyload.js":
/*!*****************************************!*\
  !*** ./src/js/modules/base/lazyload.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lazyload */ "./node_modules/lazyload/lazyload.js");
/* harmony import */ var lazyload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lazyload__WEBPACK_IMPORTED_MODULE_0__);
// import 'nodelist-foreach-polyfill';


var images = document.querySelectorAll(".lazyload");
lazyload(images, {
  rootMargin: "300px"
});

//ajax後に実行
$(document).ajaxSuccess(function (event, xhr, settings) {
  var images = document.querySelectorAll(".lazyload");
  lazyload(images, {
    rootMargin: "300px"
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/base/object-fit-images.js":
/*!**************************************************!*\
  !*** ./src/js/modules/base/object-fit-images.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_0__);

object_fit_images__WEBPACK_IMPORTED_MODULE_0___default()(); //object-fitのie対応

/***/ }),

/***/ "./src/js/modules/base/svg4everybody.js":
/*!**********************************************!*\
  !*** ./src/js/modules/base/svg4everybody.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_0__);

svg4everybody__WEBPACK_IMPORTED_MODULE_0___default()(); //svgをieで表示

/***/ }),

/***/ "./src/js/modules/base/userAgent.js":
/*!******************************************!*\
  !*** ./src/js/modules/base/userAgent.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/userAgent.js */ "./src/js/plugins/userAgent.js");


_plugins_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"].init();

/***/ }),

/***/ "./src/js/modules/common/accordion.js":
/*!********************************************!*\
  !*** ./src/js/modules/common/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_accordion_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/accordion.js */ "./src/js/plugins/accordion.js");

var elements = document.querySelectorAll(".js-accordion");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;

    var accordion2 = new _plugins_accordion_js__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
      defaultOpenPanels: [0],
      multipleOpen: true,
      onOpen: test,
      onClose: fuga
    });
  }

  // let accordion = new Accordion(".js-accordion2", {
  //   defaultOpenPanels: [0],
  //   onOpen: hoge,
  //   onClose: fuga
  // });
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function test(trigger, panel) {
  trigger.style.color = '#f00';
}
function fuga(trigger, panel) {
  trigger.style.color = '#000';
}

// accordion.destroy()
// accordion.init()

/***/ }),

/***/ "./src/js/modules/common/animation.js":
/*!********************************************!*\
  !*** ./src/js/modules/common/animation.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {

function fadeAnime() {
  // シャッ（背景色が伸びて出現）   左から右
  $('.bgLRextendTrigger').each(function () {
    //bgLRextendTriggerというクラス名が
    // var elemPos = $(this).offset().top + 10;//要素より、10px上の
    // var scroll = $(window).scrollTop();
    // var windowHeight = $(window).height();
    // if (scroll >= elemPos - windowHeight){
    //   $(this).addClass('bgLRextend');// 画面内に入ったらbgLRextendというクラス名を追記
    // }else{
    //   $(this).removeClass('bgLRextend');// 画面外に出たらbgLRextendというクラス名を外す
    // }

    $(this).addClass('bgLRextend');
  });
}

function fadeAnime2() {
  // シャッ（背景色が伸びて出現）   右から左
  $('.bgRLextendTrigger').each(function () {
    //bgLRextendTriggerというクラス名が
    //  var elemPos = $(this).offset().top + 10;//要素より、10px上の
    //  var scroll = $(window).scrollTop();
    //  var windowHeight = $(window).height();
    //  if (scroll >= elemPos - windowHeight){
    //    $(this).addClass('bgRLextend');// 画面内に入ったらbgLRextendというクラス名を追記
    //  }else{
    //    $(this).removeClass('bgRLextend');// 画面外に出たらbgLRextendというクラス名を外す
    //  }

    $(this).addClass('bgRLextend');
  });
}

function fadeAnime3() {
  // じわっ
  $('.blurTrigger').each(function () {
    //blurTriggerというクラス名が
    //  var elemPos = $(this).offset().top + 10;//要素より、10px上の
    //  var scroll = $(window).scrollTop();
    //  var windowHeight = $(window).height();
    //  if (scroll >= elemPos - windowHeight){
    //    $(this).addClass('blur');// 画面内に入ったらblurというクラス名を追記
    //  }else{
    //    $(this).removeClass('blur');// 画面外に出たらblurというクラス名を外す
    //  }

    $(this).addClass('blur');
  });
}

function EachTextAnimeControl_span() {
  //spanタグを追加する
  var element = $(".text-anime01");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }
      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
}

function EachTextAnimeControl() {
  $('.text-anime01').each(function () {
    var elemPos = $(this).offset().top + 10;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight) {
      $(this).addClass("appeartext");
    }
    //  else {
    //   $(this).removeClass("appeartext");
    // }
    //$(this).addClass("appeartext");
  });
}

/*--------------------------------------
実行
----------------------------------------*/

//画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  fadeAnime();
  fadeAnime2();
  fadeAnime3();
  //EachTextAnimeControl();
  EachTextAnimeControl_span();
});

// 画面をスクロールをしたら動かしたい場合はこっちに
$(window).scroll(function () {
  // fadeAnime();
  // fadeAnime2();
  // fadeAnime3();
  EachTextAnimeControl();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/common/autoHeightItem.js":
/*!*************************************************!*\
  !*** ./src/js/modules/common/autoHeightItem.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import autoHeightItem from '../../plugins/autoHeightItem.js';

/*
    autoHeightItem
    高さ揃え（レスポンシブ対応）のプラグインです

    autoHeightParentsClass   高さを揃えたい要素が全て内包されている親のユニークなclass名
    autoHeightClass   高さを揃えたい要素のユニークなclass名
    column   デフォルトで揃えたい数
    breakpoints   設定したポイントで揃えたいカラム数を再指定

    ※カラム数を1以下に設定した場合は高さ揃えは行われません。
    ※１を設定しない限り高さ揃えは行われるので注意してください。
*/

var options = [{
  autoHeightParentsClass: "c-card-list",
  autoHeightClass: "c-card-list__item-box-title",
  column: 3,
  breakpoints: {
    // breakPoint1
    768: {
      column: 2
    },
    // breakPoint2
    375: {
      column: 1
    }
  }
}, {
  autoHeightParentsClass: "c-card-list2",
  autoHeightClass: "c-card-list__item-box-title2",
  column: 4,
  breakpoints: {
    // breakPoint1
    768: {
      column: 3
    },
    // breakPoint2
    375: {
      column: 2
    }
  }
}];

// window.addEventListener('load', function() {
//   autoHeightItem.init(
//     options
//   );
// })


/* 
    デフォルト 
    js-autoHeightItem-parents   高さを揃えたい要素が全て内包されている親につける
    js-autoHeightItem   揃えたい要素につける
    768px以上はカラム数2、以下（スマホ時）は高さ揃えなし
*/
// window.addEventListener('load', function() {
//   autoHeightItem.init({});
// })

/***/ }),

/***/ "./src/js/modules/common/cursor.js":
/*!*****************************************!*\
  !*** ./src/js/modules/common/cursor.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_cursor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/cursor.js */ "./src/js/plugins/cursor.js");


// cursor.init();

/***/ }),

/***/ "./src/js/modules/common/datepicker.js":
/*!*********************************************!*\
  !*** ./src/js/modules/common/datepicker.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var whatwg_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");

// var holidays = [];

var getHoliday = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, holidays, holidayOriginal;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch('https://holidays-jp.github.io/api/v1/date.json');

          case 2:
            response = _context.sent;
            holidays = [];
            _context.prev = 4;
            _context.next = 7;
            return response.json();

          case 7:
            holidayOriginal = _context.sent;
            // パース

            // 日付のみにして / 区切り
            holidays = $.map(holidayOriginal, function (v, i) {
              var reg = new RegExp("-", "g");
              return i.replace(reg, '/');
            });
            // console.log(holidays)
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context['catch'](4);

            console.log("Holidays are not found.");

          case 14:
            _context.next = 16;
            return promiseDatepicker(holidays);

          case 16:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 11]]);
  }));

  return function getHoliday() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


__webpack_require__(/*! jquery-ui/ui/widgets/datepicker */ "./node_modules/jquery-ui/ui/widgets/datepicker.js");

var dateFormat = 'yy/mm/dd';

getHoliday();

function promiseDatepicker(holidays) {
  $.datepicker.setDefaults({
    // 日本語へローカライズ
    // Cf. //jquery.nj-clucker.com/jquery-ui-datepicker/
    closeText: '閉じる',
    prevText: '',
    nextText: '',
    currentText: '今日',
    monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    monthNamesShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    dayNames: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'],
    dayNamesShort: ['日', '月', '火', '水', '木', '金', '土'],
    dayNamesMin: ['日', '月', '火', '水', '木', '金', '土'],
    weekHeader: '週',
    dateFormat: 'yy/mm/dd',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: '年'
  });
  $(".js-datepicker").datepicker({
    showOtherMonths: true,
    showButtonPanel: true,
    minDate: '+3d',
    maxDate: '+6m',
    // dateFormat: 'yy/mm/dd',
    beforeShow: function beforeShow(input, inst) {
      var date = new Date();
      // debugger
      // GCalHolidays.datepicker(date.getFullYear(), date.getMonth() + 1, inst);
      // console.log(input);
      // debugger
      if ($(window).width() <= 640) {
        $("body").append('<div id=.js-datepicker-overlay" data-handler="hide"></div>');
        var ScrTop = $(document).scrollTop();
        setTimeout(function () {
          $("#ui-datepicker-div").offset({ top: ScrTop + $(window).height() / 2 - $("#ui-datepicker-div").outerHeight() / 2 });
          // console.log($("#ui-datepicker-div").outerHeight());
        }, 1);

        // $("#ui-datepicker-div").offset( { top : ScrTop + ($(window).height() / 2) - 170} );
      }
    },
    beforeShowDay: function beforeShowDay(date) {
      var holiday = $.datepicker.formatDate(dateFormat, date);
      // console.log(holidays.indexOf(holiday) == -1);
      return [holidays.indexOf(holiday), holidays.indexOf(holiday) == -1 ? "" : "gcal-holiday"];
      // var holidayList = ["20171114", "20171128", "20171212", "20171226", "20171229", "20171230", "20171231"];
      // var result;
      // var dtDay = $.format.date( day, "yyyyMMdd" );
      // if( $.inArray( dtDay, holidayList ) != -1 ){
      // 	result = [false];
      // } else {
      // 	result = [true];
      // }
      // return result;
      // // 日曜日
      // if (date.getDay() == 0) {
      //     return [true, 'gcal-sunday'];
      // }
      // // 土曜日
      // if (date.getDay() == 6) {
      //     return [true, 'gcal-saturday'];
      // }
      // // 火曜日
      // if (date.getDay() == 2) {
      //     var holidays = GCalHolidays.get(2017, 3)
      //     // debugger
      //     return [false, ''];
      // }
      // // 平日
      // return [true, ''];
    },
    onClose: function onClose(dateText) {
      $('.js-datepicker-overlay').fadeOut("500", function () {
        $('.js-datepicker-overlay').remove();
      });
    }
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/common/form.js":
/*!***************************************!*\
  !*** ./src/js/modules/common/form.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//テキストエリア自動サイズ変更
(function () {

  var targets = [].concat(_toConsumableArray(document.querySelectorAll(".js-autoResize-textarea")));

  if (!targets) return;

  targets.forEach(function (textarea) {
    textarea.addEventListener("input", function (event) {
      resizeTextarea(textarea);
    });
  });

  window.addEventListener("resize", function (event) {
    targets.forEach(function (textarea) {
      resizeTextarea(textarea);
    });
  });

  function resizeTextarea(textarea) {
    var textareaHeight = getTextareaHeight(textarea, textarea.value);
    var textareaMaxHeight = textarea.dataset.maxHeight;
    if (textareaMaxHeight) {
      if (textareaMaxHeight <= textareaHeight) {
        textarea.style.minHeight = textareaMaxHeight + "px";
        textarea.style.overflowY = "scroll";
      } else {
        textarea.style.minHeight = textareaHeight + "px";
        textarea.style.overflowY = "";
      }
    } else {
      textarea.style.minHeight = textareaHeight + "px";
    }
  }

  function getTextareaHeight(textarea, input) {
    var textareaClassName = textarea.getAttribute("class");
    var ghostElement = document.createElement("div");
    ghostElement.className = textareaClassName;
    ghostElement.setAttribute("aria-hidden", true);
    ghostElement.textContent = input;

    // パネルの親ノードに挿入
    textarea.parentNode.appendChild(ghostElement);
    // ひとまずみえなくする
    ghostElement.style.cssText = "display:block; height:auto; visibility: hidden; white-space: pre-wrap;";
    // コピーの高さを調べる
    var textareaHeight = ghostElement.offsetHeight;
    // コピーした要素を削除する
    textarea.parentNode.removeChild(ghostElement);
    // console.log(textareaHeight)
    return textareaHeight;
  }
})();

//モーダル内のチェックボックス、ラジオのvalueを取得して表示
(function () {
  var targets = [].concat(_toConsumableArray(document.querySelectorAll(".js-getCheckValue")));

  if (!targets) return;

  function getValue(target) {
    var value = [];
    var inputs = target.querySelectorAll("input");

    inputs.forEach(function (input) {
      if (input.checked) {
        value.push(input.value);
      }
    });
    return value;
  }

  function addEvent() {
    targets.forEach(function (target) {
      var buttons = target.querySelectorAll('[data-simplemodal-trigger]');

      buttons.forEach(function (button) {
        button.addEventListener('click', function () {
          var p = document.createElement("p");
          var postElement = target.parentNode.querySelector('.js-postCheckValue');
          var inputValue = getValue(target);

          while (postElement.firstChild) {
            postElement.removeChild(postElement.firstChild);
          }

          if (inputValue.length > 0) {
            p.textContent = inputValue.join(',');
            postElement.appendChild(p);
          }

          // console.log(getValue(target))
        });
      });
    });
  }

  addEvent();
})();

//ファイル名を出力
(function () {
  var targets = [].concat(_toConsumableArray(document.querySelectorAll(".js-flie-output-fileName")));

  if (!targets) return;

  targets.forEach(function (target) {
    var input = target.querySelector('input[type="file"]');
    var nameElement = document.createElement("p");
    nameElement.className = "__js-fileName";

    input.addEventListener("input", function (event) {
      target.insertBefore(nameElement, null);
      nameElement.innerHTML = event.target.files[0].name;
    });
  });
})();

/***/ }),

/***/ "./src/js/modules/common/fullScreenMenu.js":
/*!*************************************************!*\
  !*** ./src/js/modules/common/fullScreenMenu.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_simplemodal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/simplemodal.js */ "./src/js/plugins/simplemodal.js");


var fullScreenMenu = new _plugins_simplemodal_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
  trigger: "data-fullScreenMenu-trigger",
  clickOutSideClose: true
});

/***/ }),

/***/ "./src/js/modules/common/highlight.js":
/*!********************************************!*\
  !*** ./src/js/modules/common/highlight.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highlight.js/lib/highlight */ "./node_modules/highlight.js/lib/highlight.js");
/* harmony import */ var highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highlight.js/lib/languages/javascript */ "./node_modules/highlight.js/lib/languages/javascript.js");
/* harmony import */ var highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highlight.js/lib/languages/css */ "./node_modules/highlight.js/lib/languages/css.js");
/* harmony import */ var highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "./node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "./node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4__);
var highlightingAsync = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return highlightingResolve();

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function highlightingAsync() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }








highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("javascript", highlight_js_lib_languages_javascript__WEBPACK_IMPORTED_MODULE_1___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("css", highlight_js_lib_languages_css__WEBPACK_IMPORTED_MODULE_2___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("scss", highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_3___default.a);
highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.registerLanguage("xml", highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_4___default.a);

// highlightingResolve()をawaitしているため、Promiseの結果が返されるまで処理が一時停止される

function highlightingResolve() {
  return new Promise(function (resolve) {
    resolve(highlight_js_lib_highlight__WEBPACK_IMPORTED_MODULE_0___default.a.initHighlighting());
    // setTimeout(() => {
    // }, 2000);
  });
}

highlightingAsync().then(function (abc) {
  // console.log(abc)
  $('code.hljs').each(function () {
    var code_lang = $(this).attr('data-lang') != undefined ? $(this).attr('data-lang') : $(this).attr("class").split(' ').splice(1, 1);
    // var code_lang = $(this).attr("class").split(' ').splice(1, 1)
    // console.log(code_lang)
    $(this).before('<div class="c-code__lang"><span>' + code_lang + '</span></div>');
  });
});

// hljs.initHighlighting();
// $('code.hljs').each(function() {
//   var code_lang = $(this).attr('data-lang') != undefined ? $(this).attr('data-lang') : $(this).attr("class").split(' ').splice(1, 1)
//   // var code_lang = $(this).attr("class").split(' ').splice(1, 1)
//   // console.log(code_lang)
//   $(this).before('<div class="c-code__lang"><span>' + code_lang + '</span></div>')
// })
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/common/imageGuard.js":
/*!*********************************************!*\
  !*** ./src/js/modules/common/imageGuard.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function imageGuard(selector) {

  var guard_selector = document.querySelectorAll(selector);

  for (var n = 0; n < guard_selector.length; n++) {
    guard_selector[n].addEventListener("contextmenu", function (e) {
      e.preventDefault();
    }, false);
  }

  var guard_style = {
    'pointer-events': 'none',
    '-webkit-touch-callout': 'none',
    '-moz-touch-callout': 'none',
    'touch-callout': 'none',
    '-webkit-user-select': 'none',
    '-moz-user-select': 'none',
    'user-select': 'none'
  };

  Object.keys(guard_style).forEach(function (v, i, a) {
    for (var n = 0; n < guard_selector.length; n++) {
      guard_selector[n].style[v] = guard_style[v];
    }
  });
}

//実行
// document.addEventListener("DOMContentLoaded", function() {
//   imageGuard('img');
// });


// var selector = [
//   '.photo-layout',//写真詳細
//   '.articleDetail-content'//記事詳細
// ]

//特定のclassがあれば右クリック禁止
// selector.map(function(v) {
//   if($(v).length) {
//     imgGuard('img');
//   }
// });

/***/ }),

/***/ "./src/js/modules/common/loader.js":
/*!*****************************************!*\
  !*** ./src/js/modules/common/loader.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import loader from '../../plugins/loader.js';
// loader.init();

//上のコメントを外すとローディングが有効になります。


//その後HTMLに以下を追記（どこでもOK）
//<div class="js-loader">
//  <div class="js-loader-progress">
//    <div class="js-loader-progress-bar"></div>
//    <div class="js-loader-progress-number"></div>
//  </div>
//</div>

/***/ }),

/***/ "./src/js/modules/common/megamenu.js":
/*!*******************************************!*\
  !*** ./src/js/modules/common/megamenu.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_is_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/is-mobile.js */ "./src/js/plugins/is-mobile.js");
/* harmony import */ var _multiEventLister_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./multiEventLister.js */ "./src/js/modules/common/multiEventLister.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MegaMenu = function () {
  function MegaMenu(options) {
    _classCallCheck(this, MegaMenu);

    this.body = document.querySelector('body');
    this.targets = document.querySelectorAll('.megamenu-wrapper');
    this.autoClose = options.autoClose;
  }

  _createClass(MegaMenu, [{
    key: 'init',
    value: function init() {
      this.attachEvent();
    }
  }, {
    key: 'toggle',
    value: function toggle(target) {
      target.classList.toggle('is-megaMenu--show');
      this.body.classList.add('is-megaMenu--showPage');
    }
  }, {
    key: 'toggleSP',
    value: function toggleSP(target) {
      if (target.classList.contains('is-megaMenu--show')) {
        target.classList.remove('is-megaMenu--show');
      } else {
        if (this.autoClose) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _target = _step.value;

              _target.classList.remove('is-megaMenu--show');
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        }
        target.classList.add('is-megaMenu--show');
      }
    }
  }, {
    key: 'attachEvent',
    value: function attachEvent() {
      var _this = this;

      var _loop = function _loop(target) {
        if (!Object(_plugins_is_mobile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(768)) {
          Object(_multiEventLister_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target, 'mouseenter touchstart', function () {
            _this.toggle(target);
            target.nextElementSibling.lastElementChild.style.zIndex = '500';
            target.previousElementSibling.lastElementChild.style.zIndex = '500';
          }, false);
          Object(_multiEventLister_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target, 'mouseleave touchend', function () {
            _this.toggle(target);
            _this.body.classList.remove('is-megaMenu--showPage');
            target.nextElementSibling.lastElementChild.removeAttribute('style');
            target.previousElementSibling.lastElementChild.removeAttribute('style');
          }, false);
        } else {
          Object(_multiEventLister_js__WEBPACK_IMPORTED_MODULE_1__["default"])(target, 'click', function (e) {
            _this.toggleSP(target);
            if (e.target.classList.contains("megamenu-main-link")) {
              e.preventDefault();
            }
          }, false);
        }
      };

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.targets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var target = _step2.value;

          _loop(target);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }
  }]);

  return MegaMenu;
}();

var options = {
  'autoClose': 1
};
var megaMenu = new MegaMenu(options);
megaMenu.init();

/***/ }),

/***/ "./src/js/modules/common/multiEventLister.js":
/*!***************************************************!*\
  !*** ./src/js/modules/common/multiEventLister.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addEventListenerMultiType; });
function addEventListenerMultiType(element, types, listener, useCapture) {
  for (var i = 0, types = types.trim().split(/\s+/), len = types.length; i < len; ++i) {
    element.addEventListener(types[i], listener, useCapture);
  }
}

/***/ }),

/***/ "./src/js/modules/common/screenWidth.js":
/*!**********************************************!*\
  !*** ./src/js/modules/common/screenWidth.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(window).on("resize", function () {
  var w = $(window).width();
  $(".js-screenWidth").each(function () {
    $(this).css({
      'margin-right': -(w - $(this).outerWidth(true)) / 2 + 'px',
      'margin-left': -(w - $(this).outerWidth(true)) / 2 + 'px'
    });
  });
}).trigger("resize");
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/common/scroll.js":
/*!*****************************************!*\
  !*** ./src/js/modules/common/scroll.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scrollmagic */ "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
/* harmony import */ var scrollmagic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var imports_loader_define_false_scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js */ "./node_modules/imports-loader/index.js?define=>false!./node_modules/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js");
/* harmony import */ var imports_loader_define_false_scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(imports_loader_define_false_scrollmagic_scrollmagic_uncompressed_plugins_debug_addIndicators_js__WEBPACK_IMPORTED_MODULE_1__);
// import {TweenMax} from "gsap/TweenMax";

// import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';


var controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Controller();

var scene_hero = new scrollmagic__WEBPACK_IMPORTED_MODULE_0___default.a.Scene({
  triggerElement: "body",
  triggerHook: 'onEnter',
  // duration: 800,
  offset: 0
})
// .addIndicators()
.addTo(controller);

scene_hero.on('enter', function () {
  //triggerElementを過ぎたとき
});
scene_hero.on('leave', function () {
  //triggerElementを抜けたとき
});

/***/ }),

/***/ "./src/js/modules/common/smoothScroll.js":
/*!***********************************************!*\
  !*** ./src/js/modules/common/smoothScroll.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js");
/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);

var options = {
  speed: 500,
  offset: window.innerWidth >= 1024 ? 0 : 50
};

var scroll = new smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default.a('a[href*="#"]', options);

// var hash = location.hash;

// if ($(hash).length > 0) {
//   $(window).scrollTop(0);
//   setTimeout(function () {
//     scroll.animateScroll(document.querySelector(target), options);
//   }, 700);
// }

/***/ }),

/***/ "./src/js/modules/common/tab.js":
/*!**************************************!*\
  !*** ./src/js/modules/common/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/tab.js */ "./src/js/plugins/tab.js");

var elements = document.querySelectorAll(".js-tab");
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var element = _step.value;

    new _plugins_tab_js__WEBPACK_IMPORTED_MODULE_0__["default"](element, {
      defaultOpenPanel: 1
    });
  }

  // accordion.init();
  // new Tab($(".js-tab"), {
  //   defaultOpenPanel: 0
  // });

  // $(".js-tab").each(function(i, v){
  //   var $that = $(this);
  //   new Tab($that, {
  //     defaultOpenPanel: 0
  //   });
  // })
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),

/***/ "./src/js/modules/common/tablefix.js":
/*!*******************************************!*\
  !*** ./src/js/modules/common/tablefix.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _plugins_jquery_tablefix_1_0_1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/jquery.tablefix_1.0.1.js */ "./src/js/plugins/jquery.tablefix_1.0.1.js");
/* harmony import */ var _plugins_jquery_tablefix_1_0_1_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_plugins_jquery_tablefix_1_0_1_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _plugins_is_mobile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../plugins/is-mobile.js */ "./src/js/plugins/is-mobile.js");



$(window).on("resize", function () {
  if (!$(".js-tablefix").length && Object(_plugins_is_mobile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(768)) {
    $('.js-fixedTable').tablefix({ width: $(".js-fixedTable-wrap").width(), fixCols: 1 });
  } else if (!Object(_plugins_is_mobile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(768)) {
    $(".js-tablefix").contents().unwrap();
    $(".js-tablefix-data").remove();
  }
}).trigger("resize");

//使い方html
//tableタグを.js-fixedTable-wrapで囲む
//tableタグに.js-fixedTableを付与
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/modules/common/tel.js":
/*!**************************************!*\
  !*** ./src/js/modules/common/tel.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _plugins_userAgent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../plugins/userAgent.js */ "./src/js/plugins/userAgent.js");


//電話番号スマホのみ掛ける
// document.querySelector("a[href*='tel:']")

// $("a[href*='tel:']").on("click", function(e){
//   if(ua.getDevice() == 'pc'){
//     e.preventDefault();
//   }
// });

var targets = document.querySelectorAll("a[href*='tel:']");

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = targets[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var target = _step.value;

    target.addEventListener("click", function (e) {
      if (_plugins_userAgent_js__WEBPACK_IMPORTED_MODULE_0__["default"].getDevice() == 'pc') {
        e.preventDefault();
      }
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

/***/ }),

/***/ "./src/js/plugins/accordion.js":
/*!*************************************!*\
  !*** ./src/js/plugins/accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @usage
 * Accordion
 * アコーディオンプラグインです。
 *
 * 読み込み
 * import Accordion from '../../plugins/accordion.js';
 *
 * 実行
 * const accordion = new Accordion(".js-accordion", {options}); //アコーディオン全体を囲ってる枠を指定
 *
 * -options
 * trigger: ".js-accordion-trigger", //トリガー
 * panel: ".js-accordion-panel", //パネル
 * easing: "ease-out", //イージング(CSS)
 * duration: '.3s', //パネルが開く時間(CSS)
 * multipleOpen: true, //パネルを複数開くことができるかどうか
 * defaultOpenPanels: [0,1], //デフォルトで開きたいパネルをindexで指定
 * onOpen: function, パネルを開いたときの処理
 * onClose: function パネルを閉じたときの処理
 *
 * 最初から開く
 * js-accordion-panelにdata-accordion-default-openを付与
 *
 * 最初から閉じる
 * js-accordion-panelにdata-accordion-default-closeを付与
 *
 * 破棄
 * accordion.destroy()
 * 
 * 
 * @template
 * <div class="js-accordion">
 *  <div>
 *    <div>
 *      <button type="button" class="js-accordion-trigger">
 *        アコーディオンのトリガー
 *      </button>
 *    </div>
 *    <div class="js-accordion-panel">
 *      アコーディオンの中身
 *    </div>
 *  </div>
 *  <div>
 *    <div>
 *      <button type="button" class="js-accordion-trigger">
 *        アコーディオンのトリガー
 *      </button>
 *    </div>
 *    <div class="js-accordion-panel">
 *      アコーディオンの中身
 *    </div>
 *  </div>
 * </div>
*/

var accordion = function () {
  return function () {
    /**
     * Creates an instance of Accordion.
     * @param {string} [rootElement=".js-accordion"]
     * @param {*} options
     */
    function Accordion() {
      var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".js-accordion";
      var options = arguments[1];

      _classCallCheck(this, Accordion);

      this.accordionRootElement = convertElement(rootElement);
      //アコーディオンの親要素がない場合は終了
      if (!this.accordionRootElement) return;

      var defaultOptions = {
        triggers: [],
        panels: [],
        trigger: ".js-accordion-trigger",
        panel: ".js-accordion-panel",
        easing: "ease-out",
        duration: '.3s',
        multipleOpen: true,
        defaultOpenPanels: [],
        onOpen: function onOpen() {},
        onClose: function onClose() {}
      };

      this.options = this.mergeOptions(defaultOptions, options);

      this.initialized = false;

      this.triggerEvent = [];
      this.windowResizeEvent = null;

      this.transitionendEvent = null;

      this.expanded = new Set(); //開いてるパネルのindexを格納

      this.init();
    }

    _createClass(Accordion, [{
      key: "init",
      value: function init() {
        if (this.initialized) return;
        //トリガーとパネルに属性を付与
        this.setUpAttribute(this.options.triggers, this.options.panels);

        this.removeEvents();

        this.triggerEvent = this.registerTriggerEvent();
        this.windowResizeEvent = this.registerResizeEvent();

        this.initialized = true;
      }
    }, {
      key: "registerTriggerEvent",
      value: function registerTriggerEvent() {
        var _this = this;

        //トリガーをクリックしたときのイベント設定
        var register = [];
        this.options.triggers.forEach(function (trigger, index) {
          register.push(_this.attachEvent(trigger, 'click', _this.triggerClick.bind(_this, trigger)));
          register[index].addEvent();
        });
        return register;
      }
    }, {
      key: "registerResizeEvent",
      value: function registerResizeEvent() {
        //リサイズ時パネル再計算イベント設定
        var register = "";
        register = this.attachEvent(window, 'resize', this.windowResizePanelHeightRecalculation.bind(this));
        register.addEvent();
        return register;
      }
    }, {
      key: "removeEvents",
      value: function removeEvents() {

        if (!this.triggerEvent.length || !this.windowResizeEvent) return;

        this.triggerEvent.forEach(function (trigger) {
          trigger.removeEvent();
        });
        this.windowResizeEvent.removeEvent();

        this.triggerEvent = [];
        this.windowResizeEvent = null;
      }
    }, {
      key: "mergeOptions",
      value: function mergeOptions(defaultOptions, options) {
        var mergeOptions = Object.assign(defaultOptions, options || {});
        mergeOptions.triggers = [].concat(_toConsumableArray(this.accordionRootElement.querySelectorAll(mergeOptions.trigger)));
        mergeOptions.panels = [].concat(_toConsumableArray(this.accordionRootElement.querySelectorAll(mergeOptions.panel)));

        return mergeOptions;
      }
    }, {
      key: "setUpAttribute",
      value: function setUpAttribute(triggers, panels) {
        var _this2 = this;

        var randomId = Math.random().toString(36).slice(2);
        var pinpointOpen = [];
        var pinpointClose = [];
        triggers.forEach(function (trigger, index) {
          trigger.setAttribute('id', "accordion-trigger-" + randomId + "-" + index);
          trigger.setAttribute('aria-expanded', "false");
          trigger.setAttribute('aria-controls', "accordion-panel-" + randomId + "-" + index);
        });
        panels.forEach(function (panel, index) {
          panel.setAttribute('id', "accordion-panel-" + randomId + "-" + index);
          panel.setAttribute('aria-hidden', "true");
          panel.style.boxSizing = 'border-box';
          panel.style.overflow = 'hidden';
          panel.style.height = '0px';
          if (panel.hasAttribute("data-accordion-default-open")) {
            pinpointOpen.push(index);
          }
          if (panel.hasAttribute("data-accordion-default-close")) {
            pinpointClose.push(index);
          }
        });
        //最初に開きたいパネルがあれば開く
        this.options.defaultOpenPanels.forEach(function (index) {
          _this2.defaultOpenPanel(index, false);
        });

        pinpointOpen.forEach(function (index) {
          _this2.pinpointOpenPanel(index);
        });
        pinpointClose.forEach(function (index) {
          _this2.pinpointClosePanel(index);
        });
      }
    }, {
      key: "defaultOpenPanel",
      value: function defaultOpenPanel(index) {
        var trigger = this.options.triggers[index];
        var panel = this.options.panels[index];
        this.panelOpen(trigger, panel);
      }
    }, {
      key: "pinpointOpenPanel",
      value: function pinpointOpenPanel(index) {
        var trigger = this.options.triggers[index];
        var panel = this.options.panels[index];
        this.panelOpen(trigger, panel);
      }
    }, {
      key: "pinpointClosePanel",
      value: function pinpointClosePanel(index) {
        var trigger = this.options.triggers[index];
        var panel = this.options.panels[index];
        this.panelClose(trigger, panel);
      }
    }, {
      key: "triggerClick",
      value: function triggerClick(trigger, e) {
        var _this3 = this;

        e.preventDefault();
        // const trigger = e.target;
        var panel = document.querySelector("#" + trigger.getAttribute('aria-controls'));

        if (!this.options.multipleOpen) {
          this.expanded.forEach(function (index) {
            if (!_this3.expanded.has(_this3.getItemIndex(trigger))) {
              _this3.otherPanelClose(index);
            }
          });
        }

        if (trigger.getAttribute('aria-expanded') == "false") {
          this.panelOpen(trigger, panel, true, e);
        } else {
          this.panelClose(trigger, panel, e);
        }
      }
    }, {
      key: "panelOpen",
      value: function panelOpen(trigger, panel, notTransition, event) {
        trigger.setAttribute('aria-expanded', "true");
        panel.setAttribute('aria-hidden', "false");
        panel.style.height = this.getPanelHeight(panel) + "px";
        panel.style.visibility = "visible";
        panel.style.transition = notTransition ? "height " + this.options.easing + " " + this.options.duration + ", visibility " + this.options.duration : "";
        this.expanded.add(this.getItemIndex(trigger));

        if (event) {
          if (this.options.duration == 0) {
            this.onOpen(trigger, panel);
          } else {
            this.transitionendEvent = this.attachEvent(panel, 'transitionend', this.onOpen.bind(this, trigger, panel));
            this.transitionendEvent.addEvent();
          }
        }
      }
    }, {
      key: "onOpen",
      value: function onOpen(trigger, panel) {
        this.options.onOpen(trigger, panel);
        if (!(this.options.duration == 0)) {
          this.transitionendEvent.removeEvent();
        }
      }
    }, {
      key: "panelClose",
      value: function panelClose(trigger, panel, event) {
        trigger.setAttribute('aria-expanded', "false");
        panel.setAttribute('aria-hidden', "true");
        panel.style.height = "0px";
        panel.style.visibility = "hidden";
        panel.style.transition = "height " + this.options.easing + " " + this.options.duration + ", visibility " + this.options.duration;
        this.expanded.delete(this.getItemIndex(trigger));

        if (event) {
          if (this.options.duration == 0) {
            this.onClose(trigger, panel);
          } else {
            this.transitionendEvent = this.attachEvent(panel, 'transitionend', this.onClose.bind(this, trigger, panel));
            this.transitionendEvent.addEvent();
          }
        }
      }
    }, {
      key: "onClose",
      value: function onClose(trigger, panel) {
        this.options.onClose(trigger, panel);
        if (!(this.options.duration == 0)) {
          this.transitionendEvent.removeEvent();
        }
      }
    }, {
      key: "otherPanelClose",
      value: function otherPanelClose(index) {
        var trigger = this.options.triggers[index];
        var panel = this.options.panels[index];
        this.panelClose(trigger, panel);
      }
    }, {
      key: "getItemIndex",
      value: function getItemIndex(trigger) {
        return this.options.triggers.indexOf(trigger);
      }
    }, {
      key: "getPanelHeight",
      value: function getPanelHeight(panel) {
        // パネルのコピーを作る
        var ghostPanel = panel.cloneNode(true);
        // パネルの親ノードに挿入
        panel.parentNode.appendChild(ghostPanel);
        // ひとまずみえなくする
        ghostPanel.style.cssText = "display:block; height:auto; visibility:hidden;";
        // コピーの高さを調べる
        var ghostPanelHeight = ghostPanel.offsetHeight;
        // コピーした要素を削除する
        panel.parentNode.removeChild(ghostPanel);
        // console.log(ghostPanelHeight)
        return ghostPanelHeight;
      }
    }, {
      key: "windowResizePanelHeightRecalculation",
      value: function windowResizePanelHeightRecalculation() {
        var _this4 = this;

        this.expanded.forEach(function (index) {
          var panel = _this4.options.panels[index];
          var resizedHeight = _this4.getPanelHeight(panel);
          panel.style.height = resizedHeight + 'px';
        });
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this5 = this;

        if (this.initialized) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.triggerEvent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var trigger = _step.value;

              trigger.removeEvent();
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          this.triggerEvent = [];
          this.windowResizeEvent.removeEvent();
          this.windowResizeEvent = null;

          this.options.triggers.forEach(function (v, i) {
            var trigger = _this5.options.triggers[i];
            var panel = _this5.options.panels[i];
            _this5.panelOpen(trigger, panel, false);
            panel.removeAttribute("style");
          });
          // this.options.triggers = ""
          // this.options.panels = ""
          this.expanded = new Set();
          this.initialized = false;
        }
      }
    }, {
      key: "attachEvent",
      value: function attachEvent(element, type, listener, options) {
        return {
          addEvent: function addEvent() {
            element.addEventListener(type, listener, options);
          },
          removeEvent: function removeEvent() {
            element.removeEventListener(type, listener);
          }
        };
      }
    }]);

    return Accordion;
  }();

  function convertElement(obj) {
    if (obj instanceof HTMLElement) {
      return obj;
    }
    if (obj instanceof jQuery) {
      return obj[0];
    }
    return document.querySelector(obj);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (accordion);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/plugins/cursor.js":
/*!**********************************!*\
  !*** ./src/js/plugins/cursor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap/TweenMax */ "./node_modules/gsap/TweenMax.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var cursor = function () {
  var Cursor = function () {
    function Cursor() {
      _classCallCheck(this, Cursor);

      var el = '\n    <div class="js-cursor">\n      <div class="js-cursor__main"></div>\n      <div class="js-cursor__option"></div>\n    </div>';
      document.body.insertAdjacentHTML('beforeend', el);

      this.wrap_el = document.querySelector('.js-cursor');
      this.main_el = document.querySelector('.js-cursor__main');
      this.option_el = document.querySelector('.js-cursor__option');

      this.position = {
        mouseX: 0,
        mouseY: 0,
        currentX: 0,
        currentY: 0
      };
      this.eventStatus = {
        click: false,
        hover: false
      };
    }

    _createClass(Cursor, [{
      key: 'init',
      value: function init() {
        this.attachEvent();
        this.tween();
      }

      // setup(options) {
      //   this.settings = Object.assign({
      //     target: this.settings.target,
      //     addClassName: this.settings.addClassName,
      //     triggerHook: this.settings.triggerHook,
      //     offset: this.settings.offset
      //   }, options || {});
      // }

    }, {
      key: 'attachEvent',
      value: function attachEvent() {
        var _this = this;

        //カーソルの位置を取得
        document.addEventListener('mousemove', function (e) {
          _this.position.mouseX = e.clientX;
          _this.position.mouseY = e.clientY;
          _this.wrap_el.classList.add('is-moved');
        });

        //画面外判定
        document.body.addEventListener("mouseleave", function () {
          _this.wrap_el.classList.add('is-outside');
        }, false);
        document.body.addEventListener("mouseenter", function () {
          _this.wrap_el.classList.remove('is-outside');
        }, false);

        //クリック判定
        document.addEventListener('mousedown', function (e) {
          _this.eventStatus.click = true;
        });
        document.addEventListener('mouseup', function (e) {
          _this.eventStatus.click = false;
        });

        // aタグホバー判定
        // 監視ターゲットの取得
        var body = document.body;
        // オブザーバーの作成
        var observer = new MutationObserver(function (records) {
          var link = document.querySelectorAll('a');
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = link[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var target = _step.value;

              target.addEventListener('mouseenter', function (e) {
                _this.eventStatus.hover = true;
                _this.wrap_el.classList.add('is-hover');
              });
              target.addEventListener('mouseleave', function (e) {
                _this.eventStatus.hover = false;
                _this.wrap_el.classList.remove('is-hover');
              });
            }
            // 変化が発生したときの処理を記述
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }
        });
        // 監視の開始
        observer.observe(body, {
          childList: true
        });
      }
    }, {
      key: 'tween',
      value: function tween() {
        var _this2 = this;

        gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to({}, .001, {
          repeat: -1,
          onRepeat: function onRepeat() {

            //減速処理
            _this2.position.currentX += (_this2.position.mouseX - _this2.position.currentX) * 0.5;
            _this2.position.currentY += (_this2.position.mouseY - _this2.position.currentY) * 0.5;

            gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].set(_this2.main_el, {
              css: {
                x: _this2.position.currentX - 5,
                y: _this2.position.currentY - 5
              }
            });
            gsap_TweenMax__WEBPACK_IMPORTED_MODULE_0__["TweenMax"].to(_this2.option_el, 0.3, {
              css: {
                x: _this2.position.currentX - 20,
                y: _this2.position.currentY - 20,
                scale: _this2.scale(_this2.eventStatus)
              }
            });
          }
        });
      }
    }, {
      key: 'scale',
      value: function scale(v) {
        if (v.hover == true && v.click == false) {
          return 1.6;
        } else if (v.hover == false && v.click == true) {
          return 0.6;
        } else if (v.hover == true && v.click == true) {
          return 0.6;
        } else {
          return 1;
        }
      }
    }]);

    return Cursor;
  }();

  return new Cursor();
}();

/* harmony default export */ __webpack_exports__["default"] = (cursor);

/***/ }),

/***/ "./src/js/plugins/is-mobile.js":
/*!*************************************!*\
  !*** ./src/js/plugins/is-mobile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isMobile; });
function isMobile(breakpoint) {
  return $(window).width() <= breakpoint ? true : false;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/plugins/jquery.tablefix_1.0.1.js":
/*!*************************************************!*\
  !*** ./src/js/plugins/jquery.tablefix_1.0.1.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*
 * jQuery TableFix plugin ver 1.0.1
 * Copyright (c) 2010 Otchy
 * This source file is subject to the MIT license.
 * http://www.otchy.net
 */
(function ($) {
	$.fn.tablefix = function (options) {
		return this.each(function (index) {
			// 処理継続の判定
			var opts = $.extend({}, options);
			var baseTable = $(this);
			var baseWidth = opts.width;

			var withWidth = baseWidth > 0;
			var withHeight = opts.height > 0;
			if (withWidth) {
				withWidth = baseWidth < baseTable.width();
			} else {
				baseWidth = baseTable.width();
			}
			if (withHeight) {
				withHeight = opts.height < baseTable.height();
			} else {
				opts.height = baseTable.height();
			}
			if (withWidth || withHeight) {
				if (withWidth && withHeight) {
					baseWidth -= 40;
					opts.height -= 40;
				} else if (withWidth) {
					baseWidth -= 20;
				} else {
					opts.height -= 20;
				}
			} else {
				return;
			}
			// 外部 div の設定
			baseTable.wrap('<div class="js-tablefix"></div>');
			var div = baseTable.parent();
			div.css({ position: "relative" });

			// テーブルの分割と初期化
			var crossTable = baseTable.wrap('<div class="js-tablefix js-tablefix-cross"></div>');
			var rowTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-row"></div>');
			var colTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-col"></div>');
			var bodyTable = baseTable.clone().wrap('<div class="js-tablefix js-tablefix-body"></div>');
			var crossDiv = crossTable.parent().css({ position: "absolute", overflow: "hidden" });
			var rowDiv = rowTable.parent().css({ position: "absolute", overflow: "hidden" });
			var colDiv = colTable.parent().css({ position: "absolute", overflow: "hidden", "z-index": "1000" });
			var bodyDiv = bodyTable.parent().css({ position: "absolute", overflow: "auto" });
			div.append(rowDiv).append(colDiv).append(bodyDiv);

			$(window).on("resize", function () {
				// スクロール部オフセットの取得
				var fixRows = opts.fixRows > 0 ? opts.fixRows : 0;
				var fixCols = opts.fixCols > 0 ? opts.fixCols : 0;
				var offsetX = 0;
				var offsetY = 0;
				baseTable.find('tr').each(function (indexY) {
					$(this).find('td,th').each(function (indexX) {
						if (indexY == fixRows && indexX == fixCols) {
							var cell = $(this);
							offsetX = cell.position().left;
							offsetY = cell.parent('tr').position().top;
							return false;
						}
					});
					if (indexY == fixRows) {
						return false;
					}
				});

				baseWidth = $(".js-fixedTable-wrap").width();
				// クリップ領域の設定
				var bodyWidth = baseWidth - offsetX;
				var bodyHeight = opts.height - offsetY;
				crossDiv.width(offsetX).height(offsetY);
				rowDiv.width(bodyWidth + (withWidth ? 20 : 0) + (withHeight ? 20 : 0)).height(offsetY).css({ left: offsetX + 'px' });
				rowTable.css({
					marginLeft: -offsetX + 'px',
					marginRight: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
				}).addClass("js-tablefix-data");
				colDiv.width(offsetX + 2).height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0)).css({ top: offsetY + 'px' });
				colTable.css({
					marginTop: -offsetY + 'px',
					marginBottom: (withWidth ? 20 : 0) + (withHeight ? 20 : 0) + 'px'
				}).addClass("js-tablefix-data");
				bodyDiv.width(bodyWidth + (withWidth ? 0 : 0) + (withHeight ? 20 : 0) + offsetX).height(bodyHeight + (withWidth ? 20 : 0) + (withHeight ? 20 : 0)).css({ left: '0px', top: offsetY + 'px' });
				bodyTable.css({
					marginLeft: '0px',
					marginTop: -offsetY + 'px',
					marginRight: (withWidth ? 20 : 0) + 'px',
					marginBottom: (withHeight ? 20 : 0) + 'px'
				}).addClass("js-tablefix-data");
				if (withHeight) {
					rowTable.width(bodyTable.width());
				}
			}).trigger("resize");

			// スクロール連動
			bodyDiv.scroll(function () {
				rowDiv.scrollLeft(bodyDiv.scrollLeft());
				colDiv.scrollTop(bodyDiv.scrollTop());
			});
			// 外部 div の設定
			div.width(baseWidth + (withWidth ? 0 : 0) + (withHeight ? 20 : 0)).height(opts.height + (withWidth ? 20 : 0) + (withHeight ? 20 : 0));
		});
	};
})(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/plugins/simplemodal.js":
/*!***************************************!*\
  !*** ./src/js/plugins/simplemodal.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
    Simplemodal
    モーダルプラグインです
    HTMLの属性を切り替えるだけです。モーダル表示・非表示はCSSで行う
    ※CSSは自分で書いてください

    読み込み
    import Simplemodal from '../../plugins/simplemodal.js';

    HTML
    <button data-simplemodal-trigger="modal-id-01">モーダルを開く</button>

    <div id="modal-id-01">
      モーダルの中身
    <div>

    実行
    default
    const simplemodal = new Simplemodal();

    custom Example
    const simplemodal = new Simplemodal(".hoge",{
      trigger: "data-hoge-trigger",
      backFixed: false,
    });
*/

var simplemodal = function () {
  //https://gist.github.com/ark-tds/cf5e0ecbf9311043823c869defa70b28
  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  return function () {
    function Simplemodal(options) {
      _classCallCheck(this, Simplemodal);

      var defaultOptions = {
        triggers: [],
        trigger: "data-simplemodal-trigger",
        backFixed: true,
        multipleOpen: false,
        clickOutSideClose: false,
        onOpen: function onOpen() {},
        onClose: function onClose() {}
      };

      this.options = this.mergeOptions(defaultOptions, options);

      this.initialized = false;

      this.triggerEvent = [];
      this.windowResizeEvent = null;
      this.onKeydown = this.onKeydown.bind(this);

      this.transitionendEvent = null;

      this.clickOutSideCloseEvent = null;

      this.expanded = {
        trigger: [],
        content: []
      };

      this.popoverUpdateReizeEvent = null;
      this.popoverUpdateScrollEvent = null;

      this.init();
    }

    _createClass(Simplemodal, [{
      key: 'init',
      value: function init() {
        //トリガーとパネルに属性を付与
        this.setUpAttribute(this.options.triggers);

        this.triggerEvent = [];
        this.triggerEvent = this.registerTriggerEvent();

        this.initialized = true;
      }
    }, {
      key: 'mergeOptions',
      value: function mergeOptions(defaultOptions, options) {
        var mergeOptions = Object.assign(defaultOptions, options || {});
        mergeOptions.triggers = [].concat(_toConsumableArray(document.querySelectorAll('[' + mergeOptions.trigger + ']')));

        return mergeOptions;
      }
    }, {
      key: 'setUpAttribute',
      value: function setUpAttribute(triggers) {
        var _this = this;

        triggers.forEach(function (trigger, index) {
          var id = trigger.getAttribute(_this.options.trigger);
          var content = document.getElementById(id);
          if (!id || !content) return;
          trigger.setAttribute('aria-expanded', "false");
          trigger.setAttribute('aria-controls', id);
          content.setAttribute('aria-hidden', "true");
        });
      }
    }, {
      key: 'registerTriggerEvent',
      value: function registerTriggerEvent() {
        var _this2 = this;

        //トリガーをクリックしたときのイベント設定
        var register = [];
        this.options.triggers.forEach(function (trigger, index) {
          register.push(_this2.attachEvent(trigger, 'click', _this2.triggerClick.bind(_this2, trigger)));
          register[index].addEvent();
        });
        return register;
      }
    }, {
      key: 'triggerClick',
      value: function triggerClick(trigger, event) {
        //defaultのクリックイベントを無効にするか
        if (!event.currentTarget.dataset.prevent) {
          event.preventDefault();
        }
        // const trigger = event.target;
        var content = document.querySelector('#' + trigger.getAttribute('aria-controls'));

        if (trigger.getAttribute('aria-expanded') == "false") {
          this.modalOpen(trigger, content, event);
        } else {
          this.modalClose(trigger, content, event);
        }
      }
    }, {
      key: 'modalOpen',
      value: function modalOpen(trigger, content, event) {

        //複数モーダルを開かない場合は全てのモーダルを閉じる
        if (!this.options.multipleOpen) this.closeAllModal();

        this.attachEvent(document, "keydown", this.onKeydown).addEvent();

        if (event) {
          if (event.currentTarget.dataset.popover) this.popover(true, trigger, content, event);
        }

        //モーダル外側クリック時のイベント登録
        if (this.options.clickOutSideClose) {
          this.clickOutSideCloseEvent = this.attachEvent(document, "click", this.clickOutSideClose.bind(this, trigger, content));
          this.clickOutSideCloseEvent.addEvent();
        }

        this.options.triggers.forEach(function (t, index) {
          if (t.getAttribute('aria-controls') == trigger.getAttribute('aria-controls')) {
            t.setAttribute('aria-expanded', "true");
            t.classList.remove("is-close");
            t.classList.add("is-open");
          }
        });
        content.setAttribute('aria-hidden', "false");
        content.classList.remove("is-close");
        content.classList.add("is-open");

        if (this.options.backFixed) this.backFixed(true);

        this.expanded.trigger.push(trigger);
        this.expanded.content.push(content);

        this.options.onOpen(trigger, content);
      }
    }, {
      key: 'popover',
      value: function popover(_popover, trigger, content, event) {

        if (_popover) {

          content.style.position = "absolute";
          // content.style.zIndex = "1000"
          // content.style.width = "200px"

          this.setPopoverPosition(trigger, content);

          // `${event.currentTarget.getBoundingClientRect().left + event.currentTarget.clientWidth - content.getBoundingClientRect().width + 1}px`
          this.popoverUpdateReizeEvent = this.attachEvent(window, "resize", this.setPopoverPosition.bind(this, trigger, content));
          this.popoverUpdateScrollevent = this.attachEvent(window, "scroll", this.setPopoverPosition.bind(this, trigger, content));

          this.popoverUpdateReizeEvent.addEvent();
          this.popoverUpdateScrollevent.addEvent();
        } else {
          if (this.popoverUpdateReizeEvent) this.popoverUpdateReizeEvent.removeEvent();
          if (this.popoverUpdateScrollevent) this.popoverUpdateScrollevent.removeEvent();
          content.style.position = "";
          content.style.top = "";
          content.style.left = "";
        }
      }
    }, {
      key: 'setPopoverPosition',
      value: function setPopoverPosition(trigger, content) {
        // console.log(event.currentTarget.clientHeight + this.getScrollY())
        var triggerWidth = trigger.getBoundingClientRect().width;
        var triggerHeight = trigger.getBoundingClientRect().height;
        var triggerLeft = trigger.getBoundingClientRect().left;
        var triggerRight = window.innerWidth - trigger.getBoundingClientRect().right;
        var triggerTop = trigger.getBoundingClientRect().top;

        var offset = trigger.dataset.popoverOffset ? Number(trigger.dataset.popoverOffset) : 0;

        var scrollPosition = this.getScrollY();

        var contentWidth = content.getBoundingClientRect().width;

        //画面外にはみ出た分のモーダル（popover）の長さ
        var rightOffScreenContent = contentWidth / 2 - (triggerRight + triggerWidth / 2) >= 0 ? contentWidth / 2 - (triggerRight + triggerWidth / 2) : 0;
        var leftOffScreenContent = contentWidth / 2 - (triggerLeft + triggerWidth / 2) >= 0 ? contentWidth / 2 - (triggerLeft + triggerWidth / 2) : 0;

        // console.log(rightOffScreenContent)
        // console.log(leftOffScreenContent)

        content.style.top = triggerTop + triggerHeight + scrollPosition + offset + "px";
        content.style.left = triggerLeft + triggerWidth - (triggerWidth / 2 + contentWidth / 2) - rightOffScreenContent + leftOffScreenContent + "px";
      }
    }, {
      key: 'modalClose',
      value: function modalClose(trigger, content, event) {

        this.options.triggers.forEach(function (t, index) {
          if (t.getAttribute('aria-controls') == trigger.getAttribute('aria-controls')) {
            t.setAttribute('aria-expanded', "false");
            t.classList.remove("is-open");
            t.classList.add("is-close");
          }
        });

        content.setAttribute('aria-hidden', "true");
        content.classList.remove("is-open");
        content.classList.add("is-close");

        if (this.options.backFixed) this.backFixed();

        this.expanded.trigger.pop();
        this.expanded.content.pop();

        if (!this.expanded.content.length) {
          this.attachEvent(document, "keydown", this.onKeydown).removeEvent();
        }

        //モーダル外側クリック時のイベント削除
        if (this.options.clickOutSideClose) {
          this.clickOutSideCloseEvent.removeEvent();
        }

        this.popover(false, trigger, content, event);

        this.options.onClose(trigger, content);
      }
    }, {
      key: 'closeAllModal',
      value: function closeAllModal() {
        var _this3 = this;

        // console.log(this.expanded.trigger.length)
        if (this.expanded.trigger.length) {
          this.expanded.trigger.forEach(function (trigger) {
            var content = document.querySelector('#' + trigger.getAttribute('aria-controls'));
            _this3.modalClose(trigger, content);
          });
        }
      }
    }, {
      key: 'onKeydown',
      value: function onKeydown(event) {
        // esc
        if (event.keyCode === 27) {
          // console.log(this.expanded.content[this.expanded.content.length - 1])
          this.expanded.trigger[this.expanded.trigger.length - 1].focus();
          this.modalClose(this.expanded.trigger[this.expanded.trigger.length - 1], this.expanded.content[this.expanded.content.length - 1], event);
        }
        //tab
        if (event.keyCode === 9) {
          this.retainFocus(event);
        }
      }
    }, {
      key: 'retainFocus',
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes();

        if (focusableNodes.length === 0) return;

        var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

        //外側にフォーカスしている場合は強制的にモーダルの最初の要素をフォーカス
        if (focusedItemIndex === -1) {
          focusableNodes[0].focus();
          event.preventDefault();
        }

        if (event.shiftKey && focusedItemIndex === 0) {
          focusableNodes[focusableNodes.length - 1].focus();
          event.preventDefault();
        }

        if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
          focusableNodes[0].focus();
          event.preventDefault();
        }
      }
    }, {
      key: 'getFocusableNodes',
      value: function getFocusableNodes() {
        var nodes = this.expanded.content[this.expanded.content.length - 1].querySelectorAll(FOCUSABLE_ELEMENTS);
        return [].concat(_toConsumableArray(nodes));
      }
    }, {
      key: 'backFixed',
      value: function backFixed(fixed) {

        //固定するスクロール要素を取得(htmlもしくはbody)
        /**
        * @see {@link https://canonono.com/web/js/scrolling-element}
        */
        var scrollElement = 'scrollingElement' in document ? document.scrollingElement : document.documentElement;

        //現在のスクロール量をセット、すでに固定されている場合はscrollElementにセットされているtopの値を使用
        var scrollY = fixed ? this.getScrollY() : parseInt(scrollElement.style.top);

        //固定用CSS
        var styles = {
          position: 'fixed',
          top: scrollY * -1 + 'px',
          width: '100%',
          height: '100%',
          overflow: 'hidden'
        };

        //scrollElementに固定用CSSを反映
        for (var key in styles) {
          scrollElement.style[key] = fixed ? styles[key] : '';
        }

        !fixed ? scrollElement.classList.remove("is-backFixed") : scrollElement.classList.add("is-backFixed");

        //固定解除で元の位置にスクロール
        if (!fixed) window.scrollTo(0, scrollY * -1);
      }
    }, {
      key: 'open',
      value: function open(modalID, options) {
        if (!document.querySelector('[' + this.options.trigger + '="' + modalID + '"]')) return;
        // console.log(document.querySelector(`[${this.options.trigger}="${modalID}"]`))
        var trigger = document.querySelector('[' + this.options.trigger + '="' + modalID + '"]');
        var content = document.querySelector('#' + trigger.getAttribute('aria-controls'));
        // console.log(this.options);
        this.options = this.mergeOptions(this.options, options);
        this.modalOpen(trigger, content);
      }
    }, {
      key: 'close',
      value: function close(modalID, options) {
        if (!document.querySelector('[' + this.options.trigger + '="' + modalID + '"]')) return;
        // console.log(document.querySelector(`[${this.options.trigger}="${modalID}"]`))
        var trigger = document.querySelector('[' + this.options.trigger + '="' + modalID + '"]');
        var content = document.querySelector('#' + trigger.getAttribute('aria-controls'));
        // console.log(this.options);
        this.options = this.mergeOptions(this.options, options);
        this.modalClose(trigger, content);
      }
    }, {
      key: 'updateOptions',
      value: function updateOptions(modalID, options) {
        if (!document.querySelector('[' + this.options.trigger + '="' + modalID + '"]')) return;
        this.options = this.mergeOptions(this.options, options);
      }
    }, {
      key: 'clickOutSideClose',
      value: function clickOutSideClose(trigger, content, e) {

        var id = trigger.getAttribute(this.options.trigger);

        if (!e.target.closest('#' + id) && !e.target.closest('[' + this.options.trigger + ']')) {

          if (!this.expanded.content.includes(content)) return;

          this.modalClose(trigger, content);
        }
      }

      /**
      * @see {@link https://gist.github.com/think49/4431f6909b31b0c154c2054f94c546c0}
      */

    }, {
      key: 'getScrollY',
      value: function getScrollY() {
        if ('scrollY' in window) return window.scrollY;
        if ('pageYOffset' in window) return window.pageYOffset;

        var doc = window.document;

        return doc.compatMode === 'CSS1Compat' ? doc.documentElement.scrollTop : doc.body.scrollTop;
      }
    }, {
      key: 'attachEvent',
      value: function attachEvent(element, type, listener, options) {
        return {
          addEvent: function addEvent() {
            element.addEventListener(type, listener, options);
          },
          removeEvent: function removeEvent() {
            element.removeEventListener(type, listener);
          }
        };
      }
    }]);

    return Simplemodal;
  }();

  function convertElement(obj) {
    if (obj instanceof HTMLElement) {
      return obj;
    }
    if (obj instanceof jQuery) {
      return obj[0];
    }
    return document.querySelector(obj);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (simplemodal);

// const simplemodal = new Simplemodal()
// window.simplemodal = simplemodal


// const simplepopover = new Simplemodal({
//   trigger : "data-popover-trigger",
//   clickOutSideClose : true,
//   backFixed : false
// })

// const fullScreenMenu = new Simplemodal({
//   trigger : "data-fullScreenMenu-trigger",
//   clickOutSideClose : true
// })

// const sideFixedMenuButtons = new Simplemodal({
//   trigger : "data-sideFixedMenuButtons-trigger",
//   clickOutSideClose : true,
//   backFixed : false
// })
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/plugins/tab.js":
/*!*******************************!*\
  !*** ./src/js/plugins/tab.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tab = function () {
  return function () {
    function Tab() {
      var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ".js-tab";
      var options = arguments[1];

      _classCallCheck(this, Tab);

      // console.log(isElement(rootElement[0]))
      this.tabRootElement = convertElement(rootElement);
      this.options = {
        tabWrapper: ".js-tab-list",
        tabs: ".js-tab-button",
        panelWrapper: ".js-tab-panel-wrapper",
        panels: ".js-tab-panel",
        defaultOpenPanel: 0
      };
      this.tabEvent = [];

      this.initialized = false;

      //外部から入力された設定をマージ
      this.mergedOptions(options);

      //タブの親要素がない場合は終了
      if (!this.tabRootElement) return;

      this.init();
    }

    _createClass(Tab, [{
      key: "init",
      value: function init() {
        var _this = this;

        this.options.tabWrapper = this.tabRootElement.querySelector(this.options.tabWrapper);
        this.options.tabs = [].concat(_toConsumableArray(this.tabRootElement.querySelectorAll(this.options.tabs)));
        this.options.panelWrapper = this.tabRootElement.querySelector(this.options.panelWrapper);
        this.options.panels = [].concat(_toConsumableArray(this.tabRootElement.querySelectorAll(this.options.panels)));

        //トリガーとパネルに属性を付与
        this.setUpAttribute(this.options.tabs, this.options.panels);

        if (!(this.tabEvent.length == this.options.tabs.length)) {
          //トリガーをクリックしたときのイベント設定
          this.options.tabs.forEach(function (tab, index) {
            _this.tabEvent.push(_this.attachEvent(tab, 'click', _this.switchContent.bind(_this)));
            _this.tabEvent[index].addEvent();
          });
        }

        this.initialized = true;
      }
    }, {
      key: "mergedOptions",
      value: function mergedOptions(options) {
        this.options = Object.assign(this.options, options || {});
      }
    }, {
      key: "setUpAttribute",
      value: function setUpAttribute(tabs, panels) {
        var randomId = Math.random().toString(36).slice(2);
        this.options.tabWrapper.setAttribute("role", "tab-list");
        tabs.forEach(function (tab, index) {
          tab.setAttribute("id", "tab-button-" + randomId + "-" + index);
          tab.setAttribute("role", "tab");
          tab.setAttribute("aria-controls", "tab-panel-" + randomId + "-" + index);
          tab.setAttribute("aria-selected", "false");
        });
        panels.forEach(function (panel, index) {
          panel.setAttribute("id", "tab-panel-" + randomId + "-" + index);
          panel.setAttribute("role", "tab-panel");
          panel.setAttribute("aria-hidden", "true");
          panel.style.display = "none";
        });
        //最初に開きたいパネルを開く
        this.defaultOpenPanel(this.options.defaultOpenPanel);
      }
    }, {
      key: "switchContent",
      value: function switchContent(e) {
        e.preventDefault();
        var tab = e.target;
        var panel = document.querySelector("#" + e.target.getAttribute('aria-controls'));

        if (tab.getAttribute('aria-selected') == "false") {
          this.hideContents();
          this.showContent(tab, panel);
        }
      }
    }, {
      key: "showContent",
      value: function showContent(tab, panel) {
        tab.setAttribute("aria-selected", "true");
        panel.setAttribute("aria-hidden", "false");
        panel.style.display = "";
      }
    }, {
      key: "hideContents",
      value: function hideContents() {
        this.options.tabs.forEach(function (tab, index) {
          tab.setAttribute("aria-selected", "false");
        });
        this.options.panels.forEach(function (panel, index) {
          panel.setAttribute("aria-hidden", "true");
          panel.style.display = "none";
        });
      }
    }, {
      key: "defaultOpenPanel",
      value: function defaultOpenPanel(index) {
        var tab = this.options.tabs[index];
        var panel = this.options.panels[index];
        this.showContent(tab, panel);
      }
    }, {
      key: "attachEvent",
      value: function attachEvent(element, type, listener, options) {
        return {
          addEvent: function addEvent() {
            element.addEventListener(type, listener, options);
          },
          removeEvent: function removeEvent() {
            element.removeEventListener(type, listener);
          }
        };
      }
    }]);

    return Tab;
  }();

  function convertElement(obj) {
    if (obj instanceof HTMLElement) {
      return obj;
    }
    if (obj instanceof jQuery) {
      return obj[0];
    }
    return document.querySelector(obj);
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (tab);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/plugins/userAgent.js":
/*!*************************************!*\
  !*** ./src/js/plugins/userAgent.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UAParser = __webpack_require__(/*! ua-parser-js */ "./node_modules/ua-parser-js/src/ua-parser.js");

var ua = function () {
  var UA = function () {
    function UA() {
      _classCallCheck(this, UA);

      this.uaParser = UAParser();
      this.body = document.querySelector('body');
    }

    _createClass(UA, [{
      key: 'init',
      value: function init() {
        this.setUA();
      }
    }, {
      key: 'getBrowser',
      value: function getBrowser() {
        return this.uaParser.browser.name.replace(/\s+/g, "").toLowerCase();
      }
    }, {
      key: 'getDevice',
      value: function getDevice() {
        var type = this.uaParser.device.type;
        var type_result = "";
        if (type == 'mobile') {
          type_result = 'sp';
        } else if (type == 'tablet') {
          type_result = 'tb';
        } else {
          type_result = 'pc';
        }
        return type_result;
      }
    }, {
      key: 'getModel',
      value: function getModel() {
        return this.uaParser.device.model ? this.uaParser.device.model.replace(/\s+/g, "").toLowerCase() : "";
      }
    }, {
      key: 'getOS',
      value: function getOS() {
        return this.uaParser.os.name.replace(/\s+/g, "").toLowerCase();
      }
    }, {
      key: 'setUA',
      value: function setUA() {
        this.body.classList.add('ua-' + this.getBrowser());
        this.body.classList.add('ua-' + this.getDevice());
        if (this.getModel()) {
          this.body.classList.add('ua-' + this.getModel());
        }
        this.body.classList.add('ua-' + this.getOS());
      }
    }]);

    return UA;
  }();

  return new UA();
}();

/* harmony default export */ __webpack_exports__["default"] = (ua);

//使い方
// import ua from '../../plugins/userAgent.js';
// ua.init();


// var result = UAParser();
// console.log(result)
// console.log(result.browser.name.replace(/\s+/g, "").toLowerCase())


// var bs = result.browser.name.replace(/\s+/g, "").toLowerCase();
// var ua_type = function () {
//   var type = result.device.type;
//   var type_result = "";
//   if (type == 'mobile') {
//     type_result = 'sp';
//   } else if (type == 'tablet') {
//     type_result = 'tb';
//   } else {
//     type_result = 'pc';
//   }
//   return type_result;
// }
// var ua_model = result.device.model ? result.device.model.replace(/\s+/g, "").toLowerCase() : "";
// var ua_os = result.os.name.replace(/\s+/g, "").toLowerCase();

// $("body").addClass("ua-" + bs);
// $("body").addClass("ua-" + ua_type());
// if (ua_model) {
//   $("body").addClass("ua-" + ua_model);
// }
// $("body").addClass("ua-" + ua_os);

/***/ }),

/***/ "./src/js/polyfill/closest.js":
/*!************************************!*\
  !*** ./src/js/polyfill/closest.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//https://developer.mozilla.org/ja/docs/Web/API/Element/closest#Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

/***/ }),

/***/ "./src/ts/app.ts":
/*!***********************!*\
  !*** ./src/ts/app.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function common(context) {
    context.keys().forEach(context);
}
common(__webpack_require__("./src/ts/modules sync recursive \\.ts$"));

/***/ }),

/***/ "./src/ts/modules sync recursive \\.ts$":
/*!***********************************!*\
  !*** ./src/ts/modules sync \.ts$ ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./common/hoge.ts": "./src/ts/modules/common/hoge.ts"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/ts/modules sync recursive \\.ts$";

/***/ }),

/***/ "./src/ts/modules/common/hoge.ts":
/*!***************************************!*\
  !*** ./src/ts/modules/common/hoge.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import pagePositionNav from '../../plugins/pagePositionNav';
// pagePositionNav.init();
// class Hoge {
//   aaaa;
//   b: string;
//   constructor() {
//     this.aaaa = document.querySelectorAll(".js-scrollNav-section")
//     this.b = "3"
//   }
//   init() {
//       console.log(this.b)
//   }
// }
// let ccc = new Hoge;
// ccc.init();
// type Coin = 10 | 50 | 100 | 500;
// type Bill = 1000;
// type Money = Coin | Bill;
// function insertMoney (money: Money) { 
//   console.log(money);
// }
// insertMoney(1000);

/***/ }),

/***/ 0:
/*!********************************************************************************************************************!*\
  !*** multi @babel/polyfill nodelist-foreach-polyfill ./src/js/polyfill/closest.js ./src/js/app.js ./src/ts/app.ts ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"./node_modules/@babel/polyfill/lib/index.js");
__webpack_require__(/*! nodelist-foreach-polyfill */"./node_modules/nodelist-foreach-polyfill/index.js");
__webpack_require__(/*! ./src/js/polyfill/closest.js */"./src/js/polyfill/closest.js");
__webpack_require__(/*! ./src/js/app.js */"./src/js/app.js");
module.exports = __webpack_require__(/*! ./src/ts/app.ts */"./src/ts/app.ts");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map