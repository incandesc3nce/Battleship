/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/SpecialElite/SpecialElite-Regular.ttf */ \"./assets/fonts/SpecialElite/SpecialElite-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf */ \"./assets/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `@font-face {\n  font-family: \"Special Elite\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___})\n    format(\"truetype\");\n}\n@font-face {\n  font-family: \"Libre Baskerville\";\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___})\n    format(\"truetype\");\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n:root {\n  --header-color: #121435;\n  --main-color: #1e204a;\n  --text-color: #ffffff;\n}\n\nbody {\n  min-height: 100vh;\n\n  display: grid;\n  grid-template-rows: 0.5fr 5fr 0.5fr;\n}\n\nheader {\n  font-family: \"Special Elite\", \"Times New Roman\", Times, serif;\n  font-size: min(5vw, 1.8em);\n\n  background-color: var(--header-color);\n  color: var(--text-color);\n\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nmain {\n  background-color: var(--main-color);\n\n  grid-row: 2/3;\n}\n\n#content {\n  display: grid;\n  grid-template-columns: 1fr max(20vw, 300px) 1fr;\n  grid-template-rows: 0.8fr 0.1fr;\n\n  height: 100%;\n}\n\n.board {\n  width: clamp(350px, 30vw, 40vw);\n  height: clamp(350px, 30vw, 40vw);\n\n  justify-self: center;\n  align-self: center;\n\n  background-color: transparent;\n  border: 3px solid var(--text-color);\n\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.content-left {\n  grid-column: 1/2;\n  grid-row: 1/2;\n}\n\n.content-right {\n  grid-column: 3/4;\n  grid-row: 1/2;\n}\n\n.cell {\n  border: 1px solid var(--text-color);\n\n  width: 10%;\n  height: 10%;\n\n  \n  transition-duration: 0.2s;\n  \n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.enemy-cell:hover {\n  background-color: #008000;\n  cursor: crosshair;\n}\n\n.player-tag {\n  font-family: \"Libre Baskerville\", \"Times New Roman\", Times, serif;\n  font-size: min(2vw, 2em);\n\n  color: var(--text-color);\n  text-align: center;\n}\n\n.board-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  gap: 1em;\n}\n\n.miss, .hit {\n  border-radius: 50%;\n\n  width: 50%;\n  height: 50%;\n  cursor: default;\n  border: 4px solid #dbdbdb;\n}\n\n.miss {\n  background-color: #888888;\n}\n\n.hit {\n  background-color: #aa2f2f;\n}\n\n.ship {\n  background-color: #4690fd;\n}\n\ndialog {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n\n  transform: translate(-50%, -50%);\n\n  padding: 1em;\n  border-radius: 15px;\n  border: 0;\n\n  background-color: var(--header-color);\n  color: var(--text-color);\n\n  font-family: \"Libre Baskerville\", serif;\n  font-size: min(3vw, 5em);\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\ndialog button {\n  font-family: \"Libre Baskerville\", \"Times New Roman\", Times, serif;\n  font-size: min(2vw, 1.5em);\n  padding: 0.2em 0.5em;\n  border-radius: 15px;\n  border: 0;\n\n  color: var(--text-color);\n  background-color: #4690fd;\n}\n\ndialog::backdrop {\n  background-color: rgba(0, 0, 0, 0.5);\n\n  backdrop-filter: blur(7px);\n}\n\n.button-container {\n  grid-column: 1/2;\n  grid-row: 2/3;\n\n  justify-self: center;\n}\n\n.reset-button {\n  font-family: \"Libre Baskerville\", \"Times New Roman\", Times, serif;\n  font-size: min(2vw, 1.5em);\n  padding: 0.2em 0.5em;\n  border-radius: 15px;\n  border: 0;\n\n  color: var(--text-color);\n  background-color: #4690fd;\n\n  cursor: pointer;\n}\n\nfooter {\n  grid-row: 3/4;\n\n  background-color: var(--header-color);\n  color: var(--text-color);\n\n  font-family: \"Libre Baskerville\", serif;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nfooter a {\n  text-decoration: none;\n  color: #4690fd;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/favicon/battleship.png */ \"./assets/favicon/battleship.png\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ \"./src/style.css?1315\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n  <head>\\n    <meta charset=\\\"UTF-8\\\" />\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\n    <title>Battleship</title>\\n    <link\\n      rel=\\\"icon\\\"\\n      type=\\\"image/x-icon\\\"\\n      href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" />\\n    <link rel=\\\"stylesheet\\\" href=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\" />\\n  </head>\\n  <body>\\n    <header>\\n      <h1>Battleship</h1>\\n    </header>\\n    <main>\\n      <div id=\\\"content\\\">\\n        <div class=\\\"content-left board-container\\\">\\n          <p class=\\\"player-tag tag-left\\\">Player 1</p>\\n          <div class=\\\"board board-left\\\"></div>\\n        </div>\\n        <div class=\\\"button-container\\\">\\n          <button class=\\\"reset-button\\\">Randomize</button>\\n        </div>\\n        <div class=\\\"content-right board-container\\\">\\n          <p class=\\\"player-tag tag-right\\\">Opponent</p>\\n          <div class=\\\"board board-right\\\"></div>\\n        </div>\\n      </div>\\n    </main>\\n    <footer>\\n      <p>\\n        2024 © Built by\\n        <a href=\\\"https://github.com/incandesc3nce\\\">incandesc3nce</a>\\n      </p>\\n      <a\\n        href=\\\"https://www.flaticon.com/free-icons/battleship\\\"\\n        title=\\\"battleship icons\\\"\\n        >Battleship icons created by max.icons - Flaticon</a\\n      >\\n    </footer>\\n  </body>\\n</html>\\n\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://battleship/./src/index.html?");

/***/ }),

/***/ "./src/style.css?7163":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"609a232ab53e413e38d2.css\";\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./assets/favicon/battleship.png":
/*!***************************************!*\
  !*** ./assets/favicon/battleship.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cb9b97f2b99cf8eff4a1.png\";\n\n//# sourceURL=webpack://battleship/./assets/favicon/battleship.png?");

/***/ }),

/***/ "./assets/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf":
/*!********************************************************************!*\
  !*** ./assets/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"715e9cea90f54d5a4093.ttf\";\n\n//# sourceURL=webpack://battleship/./assets/fonts/LibreBaskerville/LibreBaskerville-Regular.ttf?");

/***/ }),

/***/ "./assets/fonts/SpecialElite/SpecialElite-Regular.ttf":
/*!************************************************************!*\
  !*** ./assets/fonts/SpecialElite/SpecialElite-Regular.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cefed1373df28714f8e5.ttf\";\n\n//# sourceURL=webpack://battleship/./assets/fonts/SpecialElite/SpecialElite-Regular.ttf?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css?7163\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _modules_game_reset_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/game/reset.js */ \"./src/modules/game/reset.js\");\n\n\n\n(0,_modules_game_reset_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\ndocument.querySelector(\".reset-button\").addEventListener(\"click\", () => {\n  (0,_modules_game_reset_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/classes/Cell.js":
/*!*************************************!*\
  !*** ./src/modules/classes/Cell.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cell)\n/* harmony export */ });\nclass Cell {\n  constructor() {\n    this.isHit = false;\n    this.ship = null;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/classes/Cell.js?");

/***/ }),

/***/ "./src/modules/classes/Gameboard.js":
/*!******************************************!*\
  !*** ./src/modules/classes/Gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Gameboard)\n/* harmony export */ });\n/* harmony import */ var _Cell_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Cell.js */ \"./src/modules/classes/Cell.js\");\n/* harmony import */ var _Ship_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship.js */ \"./src/modules/classes/Ship.js\");\n\n\nclass Gameboard {\n  constructor(n) {\n    this.playingField = Array.from({\n      length: n\n    }, () => Array.from({\n      length: n\n    }, () => new _Cell_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()));\n    this.amountOfShips = 0;\n  }\n  placeShip(length, row, col, isHorizontal) {\n    const ship = new _Ship_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](length);\n    if (col + length > this.playingField.length || row + length > this.playingField.length) {\n      throw new Error(\"Ship is out of bounds\");\n    }\n    if (isHorizontal) {\n      for (let i = 0; i < length; i++) {\n        if (this.playingField[row][col + i].ship) {\n          throw new Error(\"Ship is horizontally overlapping\");\n        }\n      }\n    } else {\n      for (let i = 0; i < length; i++) {\n        if (this.playingField[row + i][col].ship) {\n          throw new Error(\"Ship is vertically overlapping\");\n        }\n      }\n    }\n    if (isHorizontal) {\n      for (let i = 0; i < length; i++) {\n        this.playingField[row][col + i].ship = ship;\n      }\n    } else {\n      for (let i = 0; i < length; i++) {\n        this.playingField[row + i][col].ship = ship;\n      }\n    }\n    this.amountOfShips += 1;\n  }\n  receiveAttack(row, col) {\n    const cell = this.playingField[row][col];\n    if (cell.ship) {\n      cell.ship.hit();\n      cell.ship.hasSunk ? this.amountOfShips -= 1 : null;\n      cell.isHit = true;\n      return true;\n    }\n    cell.isHit = true;\n    return false;\n  }\n  tryPlacingShip(length) {\n    const row = Math.floor(Math.random() * 10);\n    const col = Math.floor(Math.random() * 10);\n    let direction = Math.floor(Math.random() * 2);\n    direction === 1 ? direction = true : direction = false;\n    try {\n      this.placeShip(length, row, col, direction);\n    } catch {\n      this.tryPlacingShip(length);\n    }\n  }\n  randomizeShips() {\n    const ships = [5, 4, 3, 3, 2];\n    ships.forEach(length => {\n      this.tryPlacingShip(length);\n    });\n  }\n  allShipsSunk() {\n    return this.amountOfShips === 0;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/classes/Gameboard.js?");

/***/ }),

/***/ "./src/modules/classes/Ship.js":
/*!*************************************!*\
  !*** ./src/modules/classes/Ship.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hits = 0;\n    this.hasSunk = false;\n  }\n  hit() {\n    this.hits += 1;\n    this.isSunk();\n  }\n  isSunk() {\n    const enoughHits = this.hits === this.length;\n    this.hasSunk = enoughHits;\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/classes/Ship.js?");

/***/ }),

/***/ "./src/modules/components/fillOpponentBoard.js":
/*!*****************************************************!*\
  !*** ./src/modules/components/fillOpponentBoard.js ***!
  \*****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fillOpponentBoard)\n/* harmony export */ });\n/* harmony import */ var _listeners_hitDetector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../listeners/hitDetector.js */ \"./src/modules/listeners/hitDetector.js\");\n\nfunction fillOpponentBoard(boardElement, gameboard, gameboard2) {\n  for (let i = 0; i < 100; i++) {\n    const cell = document.createElement(\"div\");\n    cell.classList.add(\"cell\");\n    cell.classList.add(\"enemy-cell\");\n    cell.addEventListener(\"click\", () => {\n      (0,_listeners_hitDetector_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cell, i, gameboard, gameboard2);\n    }, {\n      once: true\n    });\n    boardElement.appendChild(cell);\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/components/fillOpponentBoard.js?");

/***/ }),

/***/ "./src/modules/components/fillPlayerBoard.js":
/*!***************************************************!*\
  !*** ./src/modules/components/fillPlayerBoard.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fillPlayerBoard)\n/* harmony export */ });\nfunction fillPlayerBoard(boardElement) {\n  for (let i = 0; i < 100; i++) {\n    const cell = document.createElement(\"div\");\n    cell.classList.add(\"cell\");\n    cell.classList.add(\"player-cell\");\n    boardElement.appendChild(cell);\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/components/fillPlayerBoard.js?");

/***/ }),

/***/ "./src/modules/components/showPlayerShips.js":
/*!***************************************************!*\
  !*** ./src/modules/components/showPlayerShips.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showPlayerShips)\n/* harmony export */ });\nfunction showPlayerShips(gameboard) {\n  const cells = document.querySelectorAll(\".player-cell\");\n  for (let i = 0; i < 100; i++) {\n    if (gameboard.playingField[Math.floor(i / 10)][i % 10].ship) {\n      cells[i].classList.add(\"ship\");\n    }\n  }\n}\n\n//# sourceURL=webpack://battleship/./src/modules/components/showPlayerShips.js?");

/***/ }),

/***/ "./src/modules/components/showResetDialog.js":
/*!***************************************************!*\
  !*** ./src/modules/components/showResetDialog.js ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ showResetDialog)\n/* harmony export */ });\n/* harmony import */ var _game_reset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/reset.js */ \"./src/modules/game/reset.js\");\n\nfunction showResetDialog(playerWon) {\n  const dialog = document.createElement(\"dialog\");\n  dialog.classList.add(\"show\");\n  if (playerWon) {\n    dialog.textContent = \"You won!\";\n  } else {\n    dialog.textContent = \"You lost!\";\n  }\n  const resetButton = document.createElement(\"button\");\n  resetButton.addEventListener(\"click\", () => {\n    (0,_game_reset_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    dialog.close();\n    dialog.remove();\n  });\n  dialog.appendChild(resetButton);\n  resetButton.textContent = \"Play again\";\n  document.body.appendChild(dialog);\n  dialog.showModal();\n}\n\n//# sourceURL=webpack://battleship/./src/modules/components/showResetDialog.js?");

/***/ }),

/***/ "./src/modules/game/opponentsTurn.js":
/*!*******************************************!*\
  !*** ./src/modules/game/opponentsTurn.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ opponentsTurn)\n/* harmony export */ });\n/* harmony import */ var _components_showResetDialog_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/showResetDialog.js */ \"./src/modules/components/showResetDialog.js\");\n\nfunction opponentsTurn(gameboard) {\n  const row = Math.floor(Math.random() * 10);\n  const col = Math.floor(Math.random() * 10);\n  const cells = document.querySelectorAll(\".player-cell\");\n  if (gameboard.playingField[row][col].isHit) {\n    return opponentsTurn(gameboard);\n  }\n  const madeHit = gameboard.receiveAttack(row, col);\n  if (madeHit) {\n    const hitElement = document.createElement(\"div\");\n    hitElement.classList.add(\"hit\");\n    cells[row * 10 + col].appendChild(hitElement);\n  } else {\n    const missElement = document.createElement(\"div\");\n    missElement.classList.add(\"miss\");\n    cells[row * 10 + col].appendChild(missElement);\n  }\n  if (gameboard.allShipsSunk()) (0,_components_showResetDialog_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(false);\n}\n\n//# sourceURL=webpack://battleship/./src/modules/game/opponentsTurn.js?");

/***/ }),

/***/ "./src/modules/game/reset.js":
/*!***********************************!*\
  !*** ./src/modules/game/reset.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ reset)\n/* harmony export */ });\n/* harmony import */ var _classes_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Gameboard.js */ \"./src/modules/classes/Gameboard.js\");\n/* harmony import */ var _components_fillPlayerBoard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fillPlayerBoard.js */ \"./src/modules/components/fillPlayerBoard.js\");\n/* harmony import */ var _components_fillOpponentBoard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fillOpponentBoard.js */ \"./src/modules/components/fillOpponentBoard.js\");\n/* harmony import */ var _components_showPlayerShips_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/showPlayerShips.js */ \"./src/modules/components/showPlayerShips.js\");\n\n\n\n\nfunction reset() {\n  document.querySelectorAll(\".cell\").forEach(cell => {\n    cell.remove();\n  });\n  const board1 = document.querySelector(\".board.board-left\");\n  const board2 = document.querySelector(\".board.board-right\");\n  const gameboard1 = new _classes_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  const gameboard2 = new _classes_Gameboard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10);\n  gameboard1.randomizeShips();\n  gameboard2.randomizeShips();\n  (0,_components_fillPlayerBoard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(board1, gameboard1);\n  (0,_components_fillOpponentBoard_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(board2, gameboard2, gameboard1);\n  (0,_components_showPlayerShips_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(gameboard1);\n}\n\n//# sourceURL=webpack://battleship/./src/modules/game/reset.js?");

/***/ }),

/***/ "./src/modules/listeners/hitDetector.js":
/*!**********************************************!*\
  !*** ./src/modules/listeners/hitDetector.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ hitDetector)\n/* harmony export */ });\n/* harmony import */ var _game_opponentsTurn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/opponentsTurn.js */ \"./src/modules/game/opponentsTurn.js\");\n/* harmony import */ var _components_showResetDialog_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/showResetDialog.js */ \"./src/modules/components/showResetDialog.js\");\n\n\nfunction hitDetector(cell, i, gameboard, gameboard2) {\n  const row = Math.floor(i / 10);\n  const col = i % 10;\n  const madeHit = gameboard.receiveAttack(row, col);\n  const hitElement = document.createElement(\"div\");\n  if (madeHit) {\n    hitElement.classList.add(\"hit\");\n    cell.appendChild(hitElement);\n  } else {\n    hitElement.classList.add(\"miss\");\n    cell.appendChild(hitElement);\n  }\n  cell.className = \"cell\";\n  if (gameboard.allShipsSunk()) (0,_components_showResetDialog_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(true);\n  (0,_game_opponentsTurn_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(gameboard2);\n}\n\n//# sourceURL=webpack://battleship/./src/modules/listeners/hitDetector.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;