/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrician_landing_project"]("main",{

/***/ "./src/components/scroll.js":
/*!**********************************!*\
  !*** ./src/components/scroll.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n// Скролл от якорных ссылок в навигации до целевых элементов\nvar scroll = function scroll() {\n  var anchorLinks = document.querySelectorAll('.top-menu>ul>li>a');\n  var upButton = document.querySelector('.up');\n  console.log(upButton); // функция плавного скролла для header\n\n  var toggleHeaderScroll = function toggleHeaderScroll(offsetPosition) {\n    window.scrollBy({\n      top: offsetPosition,\n      behavior: 'smooth'\n    });\n  }; // функция плавного скролла вверх от элемента .up\n\n\n  var toggleShevronScroll = function toggleShevronScroll(target) {\n    target.scrollIntoView({\n      behavior: 'smooth',\n      block: 'start'\n    });\n  };\n\n  anchorLinks.forEach(function (item) {\n    item.addEventListener('click', function (e) {\n      e.preventDefault();\n      var targetLink = e.target.getAttribute('href'); // ссылка на элемент\n\n      var scrollTarget = document.querySelector(targetLink); // целевой элемент\n      // высота header для отступа сверху\n\n      var topOffset = document.querySelector('.header').offsetHeight; // позиция целевого элемента относительно видимой части страницы\n      // scrollTarget.getBoundingClientRect() - возвращает объект со свойствами\n      // визуально это прямоугольник, в котором содержится целевой элемент\n      // свойство top - считает расстояние от верхнего левого угла window до целевого элемента\n\n      var elementPosition = scrollTarget.getBoundingClientRect().top; // от общей высоты документа отнимем высоту header и получим необходимое смещение в пикселях по оси Y.\n      // это количество пикселей для прокрутки по оси Y\n\n      var offsetPosition = elementPosition - topOffset;\n      toggleHeaderScroll(offsetPosition);\n    });\n  });\n  upButton.addEventListener('click', function (e) {\n    e.preventDefault();\n    var scrollTarget = document.querySelector('.header');\n    console.log(scrollTarget);\n    toggleShevronScroll(scrollTarget);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://electrician-landing-project/./src/components/scroll.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "1bbeb55abafb6b164515"
/******/ 	})();
/******/ 	
/******/ }
);