/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateelectrician_landing_project"]("main",{

/***/ "./src/components/sendForm.js":
/*!************************************!*\
  !*** ./src/components/sendForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n// Отправка данных формы на сервер\nvar sendForm = function sendForm(formName) {\n  // сообщения о статусе отправки\n  var errorMessage = 'Что-то пошло не так...';\n  var loadMessage = 'Загрузка...';\n  var successMessage = 'Спасибо! Мы скоро с вами свяжемся!'; // сообщение о статусе отправки данных\n\n  var message = document.createElement('div'); // форма\n\n  var form = document.getElementById(formName); // все инпуты внутри формы\n\n  var inputs = [].concat(_toConsumableArray(document.querySelectorAll(\"#\".concat(formName, \">.form-group input\"))), _toConsumableArray(document.querySelectorAll(\"#\".concat(formName, \">.form-group textarea\")))); // функция отправки данных на сервер\n\n  var postData = function postData(body) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body),\n      credentials: 'include'\n    });\n  }; // Отправка данных\n\n\n  form.addEventListener('submit', function (e) {\n    e.preventDefault(); // добавляем сообщение в документ\n\n    form.append(message);\n    message.textContent = loadMessage; // создаем объект Form\n\n    var formData = new FormData(form); // готовим тело запроса для отправки\n\n    var body = {};\n\n    var _iterator = _createForOfIteratorHelper(formData),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var _step$value = _slicedToArray(_step.value, 2),\n            key = _step$value[0],\n            value = _step$value[1];\n\n        body[key] = value;\n      } // отправляем данные на сервер\n\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n\n    postData(body).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error('Response status code is not 200');\n      }\n\n      message.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      message.textContent = errorMessage;\n      console.error(error);\n      console.log(response.status);\n    })[\"finally\"](function () {\n      // очистка инптутов\n      inputs.forEach(function (item) {\n        return item.value = '';\n      }); // удаление сообщения о статусе отправки\n\n      setTimeout(function () {\n        return message.remove();\n      }, 4000);\n    });\n  }); // Валидация данных\n\n  form.addEventListener('input', function (e) {\n    var target = e.target; // Валидация данных при вводе телефона\n\n    if (target.matches('input[name=\"tel\"]')) {\n      target.setAttribute('pattern', '^[0-9+]{11,12}$');\n      target.value = target.value.replace(/[^\\d+]/g, '');\n    } // Валидация данных при вводе имени\n\n\n    if (target.matches('input[name=\"fio\"]')) {\n      target.setAttribute('pattern', '[А-Яа-яЁё\\\\s]{2,25}');\n      target.value = target.value.replace(/[^А-Яа-яЁё/\\s-]|/g, '');\n    } // Валидация данных при вводе сообщения\n\n\n    if (target.matches('textarea[name=\"message\"]')) {\n      target.setAttribute('type', 'text');\n      target.value = target.value.replace(/[^А-Яа-яЁё\\s().,!?'\";:-]/g, '');\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://electrician-landing-project/./src/components/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "c56d3cbbcc9612064509"
/******/ 	})();
/******/ 	
/******/ }
);