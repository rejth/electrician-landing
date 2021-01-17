/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrician_landing_project"]("main",{

/***/ "./src/components/sliderCarousel.js":
/*!******************************************!*\
  !*** ./src/components/sliderCarousel.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SliderCarousel\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel() {\n    _classCallCheck(this, SliderCarousel);\n\n    this.servicesMain = document.querySelector('.our-services'); // main container (+ buttons)\n\n    this.carouselWrapper = document.querySelector('.services-carousel'); // carousel wrapper\n\n    this.slides = document.querySelectorAll('.services-carousel .element'); // слайды\n\n    this.prev = document.querySelector('.services-arrow .arrow-left'); // кнопка назад\n\n    this.next = document.querySelector('.services-arrow .arrow-right'); // кнопка вперед\n\n    this.slidesToShow = 3;\n    this.options = {\n      position: 0,\n      widthSlide: 100 / Math.floor(this.slidesToShow),\n      infinity: Infinity,\n      maxPosition: this.slides.length - this.slidesToShow\n    };\n    this.responsive = [{\n      breakpoint: 1024,\n      slideToShow: 3\n    }, {\n      breakpoint: 768,\n      slideToShow: 2\n    }, {\n      breakpoint: 576,\n      slideToShow: 1\n    }];\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addCustomClass();\n      this.addCustomStyle();\n      this.constrolSlider();\n      this.responsiveInit();\n    }\n  }, {\n    key: \"responsiveInit\",\n    value: function responsiveInit() {\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max();\n    }\n  }, {\n    key: \"constrolSlider\",\n    value: function constrolSlider() {\n      var _this = this;\n\n      this.prev.addEventListener('click', function () {\n        return _this.prevSlide();\n      });\n      this.next.addEventListener('click', function () {\n        return _this.nextSlide();\n      });\n    }\n  }, {\n    key: \"prevSlide\",\n    value: function prevSlide() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxPosition;\n        }\n\n        this.carouselWrapper.style.transform = \"translateX(-\".concat(this.options.widthSlide * this.options.position, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlide\",\n    value: function nextSlide() {\n      if (this.options.infinity || this.options.position < this.options.maxPosition) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxPosition) {\n          this.options.position = 0;\n        }\n\n        this.carouselWrapper.style.transform = \"translateX(-\".concat(this.options.widthSlide * this.options.position, \"%)\");\n      }\n    }\n  }, {\n    key: \"addCustomClass\",\n    value: function addCustomClass() {\n      this.servicesMain.classList.add('our-services-custom');\n      this.carouselWrapper.classList.add('services-carousel-custom');\n      this.slides.forEach(function (item) {\n        return item.classList.add('element-custom');\n      });\n    }\n  }, {\n    key: \"addCustomStyle\",\n    value: function addCustomStyle() {\n      // создаем тэг style с id\n      var style = document.createElement('style');\n      style.id = 'slider-carousel-style';\n      style.textContent = \"\\n      .our-services-custom {\\n        overflow: hidden;\\n      }\\n      .services-carousel-custom {\\n        display: flex;\\n        transition: transform 0.5s;\\n      }\\n      .element-custom {\\n        flex: 0 0 \".concat(this.options.widthSlide, \"%;\\n      }\\n    \");\n      document.head.appendChild(style);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n\n\n//# sourceURL=webpack://electrician-landing-project/./src/components/sliderCarousel.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "21cb7d31d6721da1a645"
/******/ 	})();
/******/ 	
/******/ }
);