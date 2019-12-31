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

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\client\\\\src\\\\index.jsx: Unexpected reserved word 'let' (30:16)\\n\\n\\u001b[0m \\u001b[90m 28 | \\u001b[39m        \\u001b[36mreturn\\u001b[39m {\\u001b[0m\\n\\u001b[0m \\u001b[90m 29 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 30 | \\u001b[39m            \\u001b[36mfor\\u001b[39m(let i \\u001b[33m=\\u001b[39m \\u001b[35m0\\u001b[39m \\u001b[33m;\\u001b[39m i\\u001b[33m<\\u001b[39m\\u001b[33mrow\\u001b[39m \\u001b[33m;\\u001b[39m i\\u001b[33m++\\u001b[39m) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m                \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 31 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 32 | \\u001b[39m        }\\u001b[0m\\n\\u001b[0m \\u001b[90m 33 | \\u001b[39m    }\\u001b[0m\\n    at Object.raise (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:7012:17)\\n    at Object.checkReservedWord (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10407:14)\\n    at Object.parseIdentifierName (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10367:12)\\n    at Object.parseIdentifier (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10339:23)\\n    at Object.parseBindingAtom (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8762:17)\\n    at Object.parseMaybeDefault (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8822:25)\\n    at Object.parseAssignableListItem (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8804:23)\\n    at Object.parseBindingList (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8796:24)\\n    at Object.parseFunctionParams (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11421:24)\\n    at Object.parseMethod (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10178:10)\\n    at Object.parseObjectMethod (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10096:19)\\n    at Object.parseObjPropValue (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10138:23)\\n    at Object.parseObjectMember (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10062:10)\\n    at Object.parseObj (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9982:25)\\n    at Object.parseExprAtom (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9604:28)\\n    at Object.parseExprAtom (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:4126:20)\\n    at Object.parseExprSubscripts (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9237:23)\\n    at Object.parseMaybeUnary (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9217:21)\\n    at Object.parseExprOps (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9083:23)\\n    at Object.parseMaybeConditional (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9056:23)\\n    at Object.parseMaybeAssign (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:9015:21)\\n    at Object.parseExpression (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:8965:23)\\n    at Object.parseReturnStatement (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11059:28)\\n    at Object.parseStatementContent (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10738:21)\\n    at Object.parseStatement (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10690:17)\\n    at Object.parseBlockOrModuleBlockBody (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11266:25)\\n    at Object.parseBlockBody (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11253:10)\\n    at Object.parseBlock (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:11237:10)\\n    at Object.parseFunctionBody (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10256:24)\\n    at Object.parseFunctionBodyAndFinish (C:\\\\Users\\\\ADAM\\\\Desktop\\\\GitHub Local Repos\\\\rbktn01-mini-apps-1\\\\challenge_4\\\\node_modules\\\\@babel\\\\parser\\\\lib\\\\index.js:10226:10)\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2luZGV4LmpzeC5qcyIsInNvdXJjZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/index.jsx\n");

/***/ })

/******/ });