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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/hello_react.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/javascript/packs/hello_react.jsx":
/*!**********************************************!*\
  !*** ./app/javascript/packs/hello_react.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: /home/sashie_dashie/projects/alignment_assignment/app/javascript/packs/hello_react.jsx: super() is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class? (34:4)\n\n  32 | class App  {\n  33 |   constructor(props) {\n> 34 |     super(props);\n     |     ^\n  35 |     this.state = {\n  36 |       hits: [],\n  37 |     };\n    at Object.raise (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:6387:17)\n    at Object.parseExprAtom (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8738:16)\n    at Object.parseExprAtom (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:3609:20)\n    at Object.parseExprSubscripts (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8483:23)\n    at Object.parseMaybeUnary (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8463:21)\n    at Object.parseExprOps (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8329:23)\n    at Object.parseMaybeConditional (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8302:23)\n    at Object.parseMaybeAssign (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8249:21)\n    at Object.parseExpression (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:8197:23)\n    at Object.parseStatementContent (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10029:23)\n    at Object.parseStatement (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Object.parseBlockOrModuleBlockBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Object.parseBlockBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Object.parseBlock (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10447:10)\n    at Object.parseFunctionBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9495:24)\n    at Object.parseFunctionBodyAndFinish (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9465:10)\n    at Object.parseMethod (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9419:10)\n    at Object.pushClassMethod (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10875:30)\n    at Object.parseClassMemberWithIsStatic (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10800:12)\n    at Object.parseClassMember (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10739:10)\n    at withTopicForbiddingContext (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10694:14)\n    at Object.withTopicForbiddingContext (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9773:14)\n    at Object.parseClassBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10671:10)\n    at Object.parseClass (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10645:22)\n    at Object.parseStatementContent (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9942:21)\n    at Object.parseStatement (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9900:17)\n    at Object.parseBlockOrModuleBlockBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10476:25)\n    at Object.parseBlockBody (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:10463:10)\n    at Object.parseTopLevel (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:9829:10)\n    at Object.parse (/home/sashie_dashie/projects/alignment_assignment/node_modules/@babel/parser/lib/index.js:11341:17)");

/***/ })

/******/ });
//# sourceMappingURL=hello_react-089773dd026fb38d2147.js.map