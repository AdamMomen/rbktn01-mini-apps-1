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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/index.jsx":
/*!******************************!*\
  !*** ./client/src/index.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App(props) {\n    var _this;\n\n    _classCallCheck(this, App);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));\n    _this.state = {\n      x: 0,\n      y: 0\n    };\n    return _this;\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(Square, {\n        x: 5,\n        y: 0\n      }), React.createElement(Square, {\n        x: 5,\n        y: 1\n      }), React.createElement(Square, {\n        x: 5,\n        y: 2\n      }), React.createElement(Square, {\n        x: 5,\n        y: 2\n      }), React.createElement(Square, {\n        x: 5,\n        y: 2\n      }), React.createElement(Square, {\n        x: 5,\n        y: 2\n      }));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nvar Square =\n/*#__PURE__*/\nfunction (_React$Component2) {\n  _inherits(Square, _React$Component2);\n\n  function Square(props) {\n    _classCallCheck(this, Square);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Square).call(this, props));\n  }\n\n  _createClass(Square, [{\n    key: \"render\",\n    value: function render() {\n      var squares = [];\n\n      for (var i = 0; i < this.props.x; i++) {\n        // need to style them here\n        squares.push(React.createElement(\"div\", {\n          key: i,\n          className: \"col\",\n          \"data-x\": this.props.x,\n          \"data-y\": this.props.y\n        }));\n      }\n\n      return React.createElement(\"div\", {\n        className: \"row\"\n      }, squares);\n    }\n  }]);\n\n  return Square;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('app'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvaW5kZXguanN4P2QwMzAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcblxyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXswfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTcXVhcmUgeD17NX0geT17MX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U3F1YXJlIHg9ezV9IHk9ezJ9IC8+XHJcbiAgICAgICAgICAgICAgICB7LyogPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPlxyXG4gICAgICAgICAgICAgICAgPFNxdWFyZSB4PXs1fSB5PXsyfSAvPiAqL31cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBTcXVhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzcXVhcmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnByb3BzLng7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHN0eWxlIHRoZW0gaGVyZVxyXG4gICAgICAgICAgICBzcXVhcmVzLnB1c2goPCBkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJjb2xcIiBkYXRhLXg9e3RoaXMucHJvcHMueH0gZGF0YS15PXt0aGlzLnByb3BzLnl9PjwvZGl2PilcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXHJcbiAgICAgICAgICAgID57c3F1YXJlc308L2Rpdj5cclxuXHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblJlYWN0RE9NLnJlbmRlcig8QXBwIC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUhBO0FBRkE7QUFPQTtBQUNBOzs7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBYUE7Ozs7QUFoQ0E7QUFDQTtBQW1DQTs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQURBO0FBS0E7Ozs7QUFsQkE7QUFDQTtBQW1CQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });