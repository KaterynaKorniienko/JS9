/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./themes */ \"./src/themes.js\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_themes__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // import template from './templates/main.handlebars';\n\n//# sourceURL=webpack://js9/./src/index.js?");

        /***/
}),

/***/ "./src/themes.js":
/*!***********************!*\
  !*** ./src/themes.js ***!
  \***********************/
/***/ (() => {

        eval("// Тема\nvar Theme = {\n  LIGHT: 'light-theme',\n  DARK: 'dark-theme'\n}; // Тема по умолчанию\n\nfunction currentTheme() {\n  var savedTheme = localStorage.getItem('theme');\n\n  if (savedTheme === Theme.LIGHT || savedTheme === null) {\n    notCheckedInput();\n    return;\n  }\n\n  if (savedTheme === Theme.DARK) {\n    checkedInput();\n    return;\n  }\n} // Переключатель тем\n\n\ncurrentTheme();\nvar inputRef = document.querySelector('#theme-switch-toggle'); //Темная тема\n\nfunction checkedInput() {\n  document.body.classList.add(Theme.DARK);\n  document.body.classList.remove(Theme.LIGHT);\n  localStorage.setItem('theme', Theme.DARK);\n  inputRef.checked = true;\n} //Светлая тема\n\n\nfunction notCheckedInput() {\n  document.body.classList.add(Theme.LIGHT);\n  document.body.classList.remove(Theme.DARK);\n  localStorage.setItem('theme', Theme.LIGHT);\n  inputRef.checked = false;\n}\n\n//# sourceURL=webpack://js9/./src/themes.js?");

        /***/
}),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss ***!
  \*********************************************************************************************************************************************************************************************/
/***/ (() => {

        eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://js9/./src/scss/styles.scss?./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet%5B1%5D.rules%5B2%5D.use%5B1%5D!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

        /***/
}),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

        "use strict";
        eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js??ruleSet[1].rules[2].use[1]!./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/styles.scss\");\n/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};\n/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__) if(__WEBPACK_IMPORT_KEY__ !== \"default\") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[__WEBPACK_IMPORT_KEY__]\n/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()), options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6___default()) && (_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) ? (_node_modules_mini_css_extract_plugin_dist_loader_js_ruleSet_1_rules_2_use_1_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6___default().locals) : undefined);\n\n\n//# sourceURL=webpack://js9/./src/scss/styles.scss?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

        "use strict";
        eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

        "use strict";
        eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

        "use strict";
        eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

        "use strict";
        eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

        "use strict";
        eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

        /***/
}),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

        "use strict";
        eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js9/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

        /***/
}),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

        "use strict";
        eval("module.exports = JSON.parse('[{\"id\":\"XWaQXcbk0\",\"name\":\"Картофель, запеченный в мундире\",\"description\":\"Ароматный, сытный, шипящий домашний картофель, фаршированный сметанно-беконной начинкой, — это очень простой и очень эффектный способ накормить большое количество человек, практически не потратив на готовку ни сил, ни времени. Обычную картошку при желании тут можно заменить на сладкий батат, а в начинку добавить, к примеру, кукурузу или сладкий красный перец.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/140812180013/140820212258/p_O.jpg\",\"price\":100,\"ingredients\":[\"Картофель\",\"Чеснок\",\"Сметана\",\"Бекон\",\"Твердый сыр\",\"Зеленый лук\"]},{\"id\":\"pkXzyRp1P\",\"name\":\"Томатный магрибский суп\",\"description\":\"Томатный магрибский суп особенно распространен в Марокко и Тунисе. Он весьма прост в приготовлении и сам по себе легкий — в основе томаты и куриный бульон. Кроме них в супе только необходимые специи, мед и лимон, которые все вместе и передают тот самый восточный колорит. Вкус супа всецело зависит от качества томатов. Дополнят блюдо свежая кинза и отдельные дольки лимона.\",\"image\":\"https://www.go-cook.ru/wp-content/uploads/2014/11/magribskij-tomatnyj-sup.jpg\",\"price\":150,\"ingredients\":[\"Помидоры\",\"Куриный бульон\",\"Мед\",\"Петрушка\",\"Кинза\",\"Паприка\"]},{\"id\":\"QMom9q4Ku\",\"name\":\"Крем-суп из тыквы\",\"description\":\"Портрет этой оранжевой похлебки украшает обложку книги «La Cuisine du Marché» Поля Бокюза. Бокюз, придумавший так называемую новую кухню, считал тыкву одной из основ этого миропорядка, а тыквенный суп — эдакой околоплодной водой гастрономии.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/121114213720/151024152626/p_O.png\",\"price\":100,\"ingredients\":[\"Тыква\",\"Петрушка\",\"Сливки\",\"Бренди\",\"Куриный бульон\"]},{\"id\":\"k2k0UrjZG\",\"name\":\"Салат из красной фасоли с творожным сыром\",\"description\":\"Тосканский салат, выдержанный в колористике итальянского флага. Буквально нескольких ложек хватает, чтобы в желудке образовалась приятная тяжесть. Очень полезная штука с точки зрения утра, когда трудно запихнуть в себя крупные дозы биомассы, а есть при этом хочется.\",\"image\":\"https://s.mediasole.ru/cache/content/data/images/1393/1393226/original.jpg\",\"price\":150,\"ingredients\":[\"Фасоль\",\"Соль\",\"Чеснок\",\"Оливковое масло\",\"Творожный сыр\",\"Красный лук\"]},{\"id\":\"j2k8U1jZd\",\"name\":\"Классический греческий салат \",\"description\":\"Это рецепт из старой, привезенной из Греции, кулинарной книги. Секрет салата — свежайшие овощи и хорошая фета. Для салата используют только оливковое масло, а такие специи, как орегано и базилик, являются визитной карточкой греческой кухни.\",\"image\":\"https://dietdo.ru/wp-content/uploads/2017/03/Grecheskiy-salat-retsept-klassicheskiy-s-foto-poshagovo-min.jpg\",\"price\":350,\"ingredients\":[\"Оливковое масло\",\"Лимонный сок\",\"Чеснок\",\"Помидоры\",\"Красный лук\",\"Сыр фета\",\"Маслины\"]},{\"id\":\"X2aQ7cvkd\",\"name\":\"Маффины с голубикой и мускатным орехом\",\"description\":\"Культовая ягода, которую научились производить круглый год, в сочетании с рыхлым тестом — это абсолютно беспроигрышный вариант. Маффины с голубикой стали популярным десертом в Англии и Америке, хотя происхождение их французское. Да и вообще эти маленькие сладкие кексы, какими мы их знаем сейчас, задумывались как обычный хлеб и на вкус были нейтральны.\",\"image\":\"https://s1.eda.ru/StaticContent/Photos/120131111301/140324110953/p_O.jpg\",\"price\":170,\"ingredients\":[\"Сливочное масло\",\"Пшеничная мука\",\"Голубика\",\"Ванильный экстракт\",\"Мускатный орех\"]},{\"id\":\"nk3zy1pf8\",\"name\":\"Азу по‑татарски\",\"description\":\"Одно из немногих блюд, удостоившихся в советской продуктовой традиции продажи с именной нарезкой. И до сих пор в кулинариях и супермаркетах можно найти говядину, которую режут соломкой и продают как азу. Насчет самого блюда до сих пор идут споры, как и с чем готовить: использовать говядину или баранину, топленое или обычное масло, тушить в казане или сотейнике с толстым дном. Редакций этого блюда может быть много, но основа его всегда неизменна — это нарезанное соломкой мясо, картофель и томатный соус.\",\"image\":\"https://s2.eda.ru/StaticContent/Photos/160105153525/160110193232/p_O.jpg\",\"price\":270,\"ingredients\":[\"Говядина\",\"Соленые огурцы\",\"Картофель\",\"Мясной бульон\",\"Чеснок\"]},{\"id\":\"b7k2U13fd\",\"name\":\"Жареный рис с яйцом по‑китайски\",\"description\":\"Жареный рис — довольно распространенный ингредиент блюд восточноазиатской кухни — готовить, в сущности, можно из остатков вчерашнего ужина. Только хорошо остывший, заранее сваренный рис, в идеале простоявший всю ночь в холодильнике, при попадании в раскаленный вок не расползется до состояния каши и не превратит содержимое сковородки в неповоротливый бесформенный ком.\",\"image\":\"https://s2.eda.ru/StaticContent/Photos/150428090447/150505141508/p_O.jpg\",\"price\":240,\"ingredients\":[\"Круглый рис\",\"Мини цукини\",\"Тертый имбирь\",\"Грибы шиитаке\",\"Соевый соус\",\"Кунжутное масло\"]}]');\n\n//# sourceURL=webpack://js9/./src/menu.json?");

        /***/
})

    /******/
});
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
      /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
      /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
    /******/
}
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
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
          /******/
}
        /******/
}
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
    /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
      /******/
};
    /******/
})();
/******/
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
    /******/
})();
/******/
/************************************************************************/
/******/
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})()
  ;