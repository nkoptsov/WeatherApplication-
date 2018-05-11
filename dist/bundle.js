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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_ulils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ulils */ \"./src/utils/ulils.js\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ \"./src/framework/index.js\");\n/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/api */ \"./src/utils/api.js\");\n/* harmony import */ var _components_TodayForcast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/TodayForcast */ \"./src/components/TodayForcast.js\");\n/* harmony import */ var _components_LocationSearchForcast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LocationSearchForcast */ \"./src/components/LocationSearchForcast.js\");\n// main components who run all files\n\n\n\n// import form from './components/LocationSearchForcast';\n\n\n\nclass App extends _framework__WEBPACK_IMPORTED_MODULE_1__[\"Component\"] {\n  constructor(root) {\n    super();\n    this.state = {\n      city: '',\n      todayForcast: null,\n      // new URLSearchParams(window.location.search).get('city'),\n    };\n    this.host = root;\n    this.host.classList.add('host');\n    // bind function for this\n    Object(_utils_ulils__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, 'getCity', 'getForcast', 'updateState');\n\n    this._locationSearchForcast = new _components_LocationSearchForcast__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n      city: this.state.city,\n    });\n    this._renderTodayForcast = new _components_TodayForcast__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  }\n\n  getCity(city) {\n    this.getForcastOnDay({ city });\n  }\n  getForcast(value) {\n    // this.state.todayForcast = value;\n    // return value;\n    return {\n      city: value.name,\n      todayForcast: value,\n    };\n  }\n  getForcastOnDay(newCity) {\n    // const { city } = newCity;\n\n    return Object(_utils_api__WEBPACK_IMPORTED_MODULE_2__[\"getWeatherOnDay\"])(newCity)\n      .then(this.getForcast)\n      .then(this.updateState);\n  }\n  render() {\n    const { city, todayForcast } = this.state;\n    console.log(this.host);\n    const obj = [];\n\n    obj.push(\n      this._locationSearchForcast.update({ city, onSubmit: this.getCity }),\n    );\n    if (!!todayForcast) {\n      obj.push(this._renderTodayForcast.update({ forcast: todayForcast }));\n    }\n    // this.host.appendChild(\n    //   this._locationSearchForcast.update({ city, onSubmit: this.getCity }),\n    // );\n    // if (!!forcast) {\n    //   this.host.appendChild(this._renderTodayForcast.update({ forcast }));\n    // }\n    // return [\n    //   this._locationSearchForcast.update({ city, onSubmit: this.getCity }),\n    //   this._renderTodayForcast.udate({ forcast }),\n    // ];\n    return obj;\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/LocationSearchForcast.js":
/*!*************************************************!*\
  !*** ./src/components/LocationSearchForcast.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.js\");\n// import App from '../App';\n\n\n// const form = document.querySelector('.weather-form');\nclass LocationSearchForcast extends _framework__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor(props) {\n    super();\n    this.props = props;\n    this.state = {\n      // date inside thsi components\n      isValid: true,\n    };\n    // bind this\n    this.eventHandler = this.eventHandler.bind(this);\n    this.host = document.createElement('div');\n    this.host.classList.add('search-form');\n    this.host.addEventListener('submit', this.eventHandler);\n  }\n  // updateState(nextState) {\n  //   this.state = Object.assign({}, this.state, nextState);\n  //   this.render();\n  // }\n  // update(nextProps) {\n  //   this.props = nextProps;\n  //   return this.render();\n  // }\n  // updateState() {}\n  eventHandler(event) {\n    event.preventDefault();\n    const sitySearch = event.target.elements.nameCity.value.trim();\n    if (!!sitySearch) {\n      this.props.onSubmit(sitySearch);\n    }\n  }\n  render() {\n    const { city } = this.props;\n    return `<form class=\"weather-form\">\n      <label for=\"city\">City</label>\n      <input type=\"text\" name=\"nameCity\" id=\"city\" required value=\"${city}\">\n      <button class=\"weather-search-submit\">find</button>\n    </form>`;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LocationSearchForcast);\n\n\n//# sourceURL=webpack:///./src/components/LocationSearchForcast.js?");

/***/ }),

/***/ "./src/components/TodayForcast.js":
/*!****************************************!*\
  !*** ./src/components/TodayForcast.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.js\");\n// const todayForcast = document.querySelector('.today-forcast');\n\n// const renderTodayForcast = data => {\n//   const element = document.createElement('h1');\n//   element.innerText = `Temperatura = ${data.main.temp - 273.15}`;\n//   //  const element = `<h4>Temperatura = ${data.main.temp}</h4>`;\n//   todayForcast.appendChild(element);\n// };\n\nclass RenderTodayForcast extends _framework__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  constructor() {\n    super();\n\n    this.host = document.createElement('div');\n    this.host.classList.add('today-foracst');\n  }\n\n  // update(newProps) {\n  //   this.props = newProps;\n  //   return this.render();\n  // }\n  render() {\n    return `<h1>Temperatura = ${this.props.forcast.main.temp} </h1>`;\n    // return this.root;\n    // - 273.15\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (RenderTodayForcast);\n\n\n//# sourceURL=webpack:///./src/components/TodayForcast.js?");

/***/ }),

/***/ "./src/framework/Component.js":
/*!************************************!*\
  !*** ./src/framework/Component.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Component {\n  constructor(props) {\n    this.state = {};\n    this.props = props || {};\n    this.host = null;\n  }\n  update(newProps) {\n    this.props = newProps;\n    return this._render();\n  }\n  updateState(newState) {\n    const nextState = Object.assign({}, this.state, newState);\n    this.state = nextState;\n    this._render();\n    // return nextState;\n  }\n  // array or string\n  _render() {\n    const element = this.render();\n    console.log(typeof element);\n    if (!element && this.host) {\n      this.host;\n    }\n    switch (typeof element) {\n      case 'string':\n        this.host.innerHTML = element;\n        break;\n      default:\n        this.host.append(...element);\n    }\n    return this.host;\n  }\n  render() {}\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component);\n\n\n//# sourceURL=webpack:///./src/framework/Component.js?");

/***/ }),

/***/ "./src/framework/index.js":
/*!********************************!*\
  !*** ./src/framework/index.js ***!
  \********************************/
/*! exports provided: Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Component */ \"./src/framework/Component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Component\", function() { return _Component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n\n//# sourceURL=webpack:///./src/framework/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\n\nconst app = new _App__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.querySelector('div'));\napp.update();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/api.js":
/*!**************************!*\
  !*** ./src/utils/api.js ***!
  \**************************/
/*! exports provided: getWeatherOnDay, getWeatherOnFiveDay, getAllWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherOnDay\", function() { return getWeatherOnDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getWeatherOnFiveDay\", function() { return getWeatherOnFiveDay; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllWeather\", function() { return getAllWeather; });\nconst BASE_URL = 'http://api.openweathermap.org/data/2.5/';\nconst KEY = '592af2e7e3e8a9544e5ac3833f5d27da';\n\nconst request = (type, query) => {\n  return fetch(`${BASE_URL}${type}${query}&units=metric`).then(response => {\n    if (!response.ok) {\n      throw new Error('fdslkflsd');\n    }\n    return response.json();\n  });\n};\n// city it's object with one property q : city\n// key it's global variable for access\nconst getWeatherOnDay = ({ city }) => {\n  const urlSearchCity = new URLSearchParams();\n  urlSearchCity.append('q', city);\n  urlSearchCity.append('APPID', KEY);\n\n  return request(`weather?`, urlSearchCity);\n};\n\n// weather on day\n\nconst getWeatherOnFiveDay = city => {\n  const urlSearchCity = new URLSearchParams();\n  urlSearchCity.append('q', city);\n  urlSearchCity.append('APPID', KEY);\n  return request(`forecast?`, urlSearchCity);\n};\n// weather on all\n\nconst getAllWeather = city =>\n  Promise.all([getWeatherOnFiveDay(city), getWeatherOnDay(city)]);\n\n\n//# sourceURL=webpack:///./src/utils/api.js?");

/***/ }),

/***/ "./src/utils/ulils.js":
/*!****************************!*\
  !*** ./src/utils/ulils.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction allBind(area, ...func) {\n  func.forEach(element => {\n    if (typeof area[element] === 'function') {\n      area[element] = area[element].bind(area);\n    } else {\n      console.log('not a function');\n    }\n  });\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (allBind);\n\n\n//# sourceURL=webpack:///./src/utils/ulils.js?");

/***/ })

/******/ });