/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./core/compile.js":
/*!*************************!*\
  !*** ./core/compile.js ***!
  \*************************/
/*! exports provided: compile, compileNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compile\", function() { return compile; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compileNode\", function() { return compileNode; });\n/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ \"./core/watcher.js\");\n\nfunction compile(el, vm) {\n  var fragment = document.createDocumentFragment();\n  var node;\n\n  while (node = el.firstChild) {\n    compileNode(vm, node);\n    fragment.append(node);\n  }\n\n  return fragment;\n}\nvar reg = /\\{\\{(.*)\\}\\}/;\nfunction compileNode(vm, node) {\n  var nodeType = node.nodeType,\n      nodeValue = node.nodeValue,\n      nodeName = node.nodeName;\n\n  switch (nodeType) {\n    case 1:\n      if (nodeName == 'INPUT') {\n        var bindName;\n        var attributes = node.attributes;\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = attributes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var attr = _step.value;\n\n            if (attr.name === 'v-model') {\n              bindName = attr.value;\n            }\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        if (bindName) {\n          node.addEventListener('input', function (e) {\n            vm[bindName] = e.target.value;\n          });\n          new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vm, node, 'value', bindName);\n        }\n      }\n\n      break;\n\n    case 3:\n      var isModal = reg.test(nodeValue);\n\n      if (isModal) {\n        var _bindName = RegExp.$1 && RegExp.$1.trim();\n\n        new _watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](vm, node, 'nodeValue', _bindName);\n      }\n\n      break;\n  }\n}\n\n//# sourceURL=webpack:///./core/compile.js?");

/***/ }),

/***/ "./core/dep.js":
/*!*********************!*\
  !*** ./core/dep.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Dep =\n/*#__PURE__*/\nfunction () {\n  function Dep() {\n    _classCallCheck(this, Dep);\n\n    this.watchers = [];\n  }\n\n  _createClass(Dep, [{\n    key: \"addSub\",\n    value: function addSub(watcher) {\n      this.watchers.push(watcher);\n    }\n  }, {\n    key: \"notify\",\n    value: function notify() {\n      this.watchers.forEach(function (watcher) {\n        watcher.update();\n      });\n    }\n  }]);\n\n  return Dep;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n//# sourceURL=webpack:///./core/dep.js?");

/***/ }),

/***/ "./core/index.js":
/*!***********************!*\
  !*** ./core/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./core/dep.js\");\n/* harmony import */ var _observe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observe */ \"./core/observe.js\");\n/* harmony import */ var _compile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./compile */ \"./core/compile.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\n\n\n\nvar Vue = function Vue(opts) {\n  _classCallCheck(this, Vue);\n\n  var data = this.data = opts.data;\n  Object(_observe__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, this);\n  var el = document.getElementById(opts.el);\n  var documentFragment = Object(_compile__WEBPACK_IMPORTED_MODULE_2__[\"compile\"])(el, this);\n  el.appendChild(documentFragment);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n//# sourceURL=webpack:///./core/index.js?");

/***/ }),

/***/ "./core/observe.js":
/*!*************************!*\
  !*** ./core/observe.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return observe; });\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dep */ \"./core/dep.js\");\n\nfunction observe(data, vm) {\n  Object.keys(data).forEach(function (key) {\n    defineReactive(vm, key, data[key]);\n  });\n}\n\nfunction defineReactive(vm, key, val) {\n  var dep = new _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  Object.defineProperty(vm, key, {\n    enumerable: true,\n    configurable: true,\n    get: function get() {\n      _dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target && dep.addSub(_dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target);\n      return val;\n    },\n    set: function set(newVal) {\n      if (val === newVal) return;\n      val = newVal;\n      dep.notify();\n      return val;\n    }\n  });\n}\n\n//# sourceURL=webpack:///./core/observe.js?");

/***/ }),

/***/ "./core/watcher.js":
/*!*************************!*\
  !*** ./core/watcher.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uid */ \"./node_modules/uid/index.js\");\n/* harmony import */ var uid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uid__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dep__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dep */ \"./core/dep.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Watcher =\n/*#__PURE__*/\nfunction () {\n  function Watcher(vm, node, type, bindName) {\n    _classCallCheck(this, Watcher);\n\n    _dep__WEBPACK_IMPORTED_MODULE_1__[\"default\"].target = this;\n    this.id = uid__WEBPACK_IMPORTED_MODULE_0___default()();\n    this.node = node;\n    this.type = type;\n    this.bindName = bindName;\n    this.vm = vm;\n    this.update();\n    _dep__WEBPACK_IMPORTED_MODULE_1__[\"default\"].target = null;\n  }\n\n  _createClass(Watcher, [{\n    key: \"update\",\n    value: function update() {\n      this.node[this.type] = this.vm[this.bindName];\n    }\n  }]);\n\n  return Watcher;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./core/watcher.js?");

/***/ }),

/***/ "./example.js":
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ \"./core/index.js\");\n\nnew _core__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  el: 'app',\n  data: {\n    name: 'xuqiang'\n  }\n});\n\n//# sourceURL=webpack:///./example.js?");

/***/ }),

/***/ "./node_modules/uid/index.js":
/*!***********************************!*\
  !*** ./node_modules/uid/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Export `uid`\n */\n\nmodule.exports = uid;\n\n/**\n * Create a `uid`\n *\n * @param {String} len\n * @return {String} uid\n */\n\nfunction uid(len) {\n  len = len || 7;\n  return Math.random().toString(35).substr(2, len);\n}\n\n\n//# sourceURL=webpack:///./node_modules/uid/index.js?");

/***/ })

/******/ });