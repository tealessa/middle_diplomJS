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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./src/modules/modal.js\");\n/* harmony import */ var _modules_threeslider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/threeslider */ \"./src/modules/threeslider.js\");\n/* harmony import */ var _modules_swipeUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/swipeUp */ \"./src/modules/swipeUp.js\");\n/* harmony import */ var _modules_twoSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/twoSlider */ \"./src/modules/twoSlider.js\");\n/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calc */ \"./src/modules/calc.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/form */ \"./src/modules/form.js\");\n/* harmony import */ var _modules_imageZoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/imageZoom */ \"./src/modules/imageZoom.js\");\n\r\n\r\n\r\n\r\n\r\n// import validateCalc from './modules/validateCalc'\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_threeslider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_swipeUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_twoSlider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_calc__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n// validateCalc()\r\n;(0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__[\"default\"])('1 may 2022')\r\n;(0,_modules_imageZoom__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n\r\nconst forms = document.querySelectorAll('form')\r\nforms.forEach((form, index) => {\r\n    form.addEventListener('submit', (e) => {\r\n        e.preventDefault()\r\n        form.id = `form${index}`\r\n        \r\n        ;(0,_modules_form__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\r\n            formId: `form${index}`,\r\n            someElem: [\r\n                {\r\n                    type: 'block',\r\n                    id: 'calc-total'\r\n                }\r\n            ] \r\n        })\r\n    })\r\n})\n\n//# sourceURL=webpack://diploma/./src/index.js?");

/***/ }),

/***/ "./src/modules/calc.js":
/*!*****************************!*\
  !*** ./src/modules/calc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper */ \"./src/modules/helper.js\");\n/* harmony import */ var _validate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./validate */ \"./src/modules/validate.js\");\n\r\n\r\n\r\nconst calculatorCounter = () => {\r\n    const calcSection = document.getElementById('calc')\r\n    const calcType = document.getElementById('calc-type')\r\n    const calcMaterial = document.getElementById('calc-type-material')\r\n    const calcSquare = document.getElementById('calc-input')\r\n    const total = document.getElementById('calc-total')\r\n    if (calcSection != null) {\r\n        const countCalc = () => {\r\n            const calcTypeValue = +calcType.options[calcType.selectedIndex].value\r\n            const calcMaterialValue = +calcMaterial.options[calcMaterial.selectedIndex].value\r\n            const calcSquareValue = calcSquare.value\r\n\r\n            let totalValue = 0\r\n\r\n            calcType.options[0].value = '0'\r\n            calcMaterial.options[0].value = '0'\r\n\r\n            if (calcType.value && calcSquare.value && calcMaterial.value){\r\n                totalValue = calcSquareValue * calcTypeValue * calcMaterialValue\r\n\r\n                ;(0,_helper__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n                    duration: 1000,\r\n                    timing(timeFraction) {\r\n                      return timeFraction;\r\n                    },\r\n                    draw(progress) {\r\n                        total.placeholder = Math.round(totalValue * progress)\r\n                    }\r\n                  });\r\n            } \r\n            else{\r\n                totalValue = 0\r\n            }\r\n        }\r\n\r\n        calcSection.addEventListener('change', (e) => {\r\n            if ( e.target === calcSquare ||\r\n                e.target === calcType || e.target === calcMaterial){\r\n                    countCalc()\r\n            }\r\n        })\r\n        ;(0,_validate__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculatorCounter);\n\n//# sourceURL=webpack://diploma/./src/modules/calc.js?");

/***/ }),

/***/ "./src/modules/form.js":
/*!*****************************!*\
  !*** ./src/modules/form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst form = ({ formId, someElem = [] }) => {\r\n    const form = document.getElementById(formId)\r\n    const statusBlock = document.createElement('div')\r\n\r\n    const loadText = 'Загрузка...'\r\n    const errorText = 'Ошибка...'\r\n    const successText = 'Спасибо! Наш менеджер с вами свяжется'\r\n\r\n    const validate = (formElements) => {\r\n        let success = true\r\n        formElements.forEach(input => {\r\n           if (input.name == 'fio') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^а-яА-Я\\^a-zA-Z\\s]/g)) {\r\n                    success = true\r\n                }\r\n            } else if (input.name == 'phone') {\r\n                if (input.value === '') {\r\n                    success = false\r\n                } else if (input.value.match(/[^0-9\\(\\)\\+\\-]/g)) {\r\n                    success = true\r\n                }\r\n            } \r\n        })\r\n        return success\r\n    }\r\n\r\n    const sendData = (data) => {\r\n        return fetch('https://jsonplaceholder.typicode.com/posts', {\r\n            method: 'POST',\r\n            body: JSON.stringify(data),\r\n            headers: {\r\n                \"Content-Type\": \"application/json\"\r\n            }\r\n        }).then(res => res.json())\r\n    }\r\n    \r\n    const submitForm = () => {\r\n        const formElements = form.querySelectorAll('input')\r\n        const formData = new FormData(form)\r\n        const formBody = {}\r\n        statusBlock.textContent = loadText\r\n        form.append(statusBlock)\r\n\r\n        formData.forEach((val, key) => {\r\n            formBody[key] = val\r\n        })\r\n\r\n        \r\n        someElem.forEach(elem => {\r\n            const element = document.getElementById(elem.id)\r\n            if (document.querySelector('body').classList.contains('balkony')) {\r\n                if(element == null) {\r\n                    console.log('Верните блок!');\r\n                } else {\r\n                    if (elem.type === 'block') {\r\n                        formBody[elem.id] = element.value\r\n                    }\r\n                }\r\n            }\r\n            \r\n        })\r\n\r\n        if (validate(formElements)) {\r\n            sendData(formBody)\r\n                .then(data => {\r\n                    statusBlock.textContent = successText\r\n\r\n                    formElements.forEach(input => {\r\n                        input.value = ''\r\n                    })\r\n                    setTimeout(() => {\r\n                        statusBlock.remove()\r\n                    }, 2000)\r\n                })\r\n                .catch(error => {\r\n                    statusBlock.textContent = errorText\r\n                })\r\n            \r\n        } else {\r\n            alert('Поля заполнены неверно!')\r\n            statusBlock.textContent = errorText\r\n        }\r\n    }\r\n\r\n    try {\r\n        if (!form) {\r\n            throw new Error ('Верните форму')\r\n        }\r\n        submitForm()\r\n    } catch (error) {\r\n        console.log(error.message);\r\n    }\r\n    \r\n    \r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);\n\n//# sourceURL=webpack://diploma/./src/modules/form.js?");

/***/ }),

/***/ "./src/modules/helper.js":
/*!*******************************!*\
  !*** ./src/modules/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\n\r\n\r\nconst animate = ({timing, draw, duration}) => {\r\n\r\n    let start = performance.now();\r\n  \r\n    requestAnimationFrame(function animate(time) {\r\n      // timeFraction изменяется от 0 до 1\r\n      let timeFraction = (time - start) / duration;\r\n      if (timeFraction > 1) timeFraction = 1;\r\n  \r\n      // вычисление текущего состояния анимации\r\n      let progress = timing(timeFraction);\r\n  \r\n      draw(progress); // отрисовать её\r\n  \r\n      if (timeFraction < 1) {\r\n        requestAnimationFrame(animate);\r\n      }\r\n  \r\n    });\r\n  }\r\n\r\n  \n\n//# sourceURL=webpack://diploma/./src/modules/helper.js?");

/***/ }),

/***/ "./src/modules/imageZoom.js":
/*!**********************************!*\
  !*** ./src/modules/imageZoom.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst imageZoom = () => {\r\n    const style = '.modal-img { z-index: 99; position: fixed; top: 2%; left: 33%; background: url(../images/documents/original/document4.jpg) center / cover; width: 654px; height: 900px; transition: 200ms;}'\r\n    const styleCreate = document.createElement('style')\r\n    styleCreate.innerText = style\r\n    document.head.appendChild(styleCreate)\r\n\r\n    const overlay = document.querySelector('.overlay')\r\n    const body = document.querySelector('body')\r\n    \r\n    const imgs = document.querySelectorAll('.sertificate-document');\r\n    const disableImgAttributes = document.querySelectorAll('.sertificate-document')\r\n    \r\n    const hoverEffectImgs = document.querySelectorAll('.img-responsive')\r\n    \r\n    hoverEffectImgs.forEach(hoverEffectImg => {\r\n        hoverEffectImg.addEventListener('mouseover', () => {\r\n            hoverEffectImg.style.transition = '0.2'\r\n            hoverEffectImg.style.opacity = \"0.5\"\r\n        })\r\n        hoverEffectImg.addEventListener('mouseout', () => {\r\n            hoverEffectImg.style.transition = '0.2'\r\n            hoverEffectImg.style.opacity = \"0\"\r\n        })\r\n    })\r\n    \r\n    disableImgAttributes.forEach(disableImgAttributes => {\r\n        disableImgAttributes.setAttribute('href', '')\r\n    })\r\n    \r\n    const addModalDocument = () => {\r\n        overlay.style.display = \"block\";\r\n        const modalDiv = document.createElement('div')\r\n        modalDiv.classList.add('modal-img')\r\n        body.append(modalDiv)\r\n        modalDiv.innerHTML = `\r\n        <span title=\"Close\" class=\"header-modal__close\">x</span>\r\n        `\r\n        document.addEventListener('click', (e) => {\r\n            if (e.target.closest('.overlay') || e.target.closest(\".header-modal__close\")) {\r\n                modalDiv.remove()\r\n                overlay.style.display = 'none'\r\n            }\r\n\r\n        })\r\n    }\r\n    \r\n    imgs.forEach(imgDiv => {\r\n        imgDiv.addEventListener('click', (e) => {\r\n            e.preventDefault()            \r\n            addModalDocument()\r\n        })\r\n    })    \r\n}\r\n    \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (imageZoom);\n\n//# sourceURL=webpack://diploma/./src/modules/imageZoom.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nconst modal = () => {\r\n    const headerModal = document.querySelector('.header-modal')\r\n    const serviceModal = document.querySelector('.services-modal')\r\n\r\n    const overlay = document.querySelector('.overlay')\r\n\r\n    const closeHeaderModalBtn = document.querySelector('.header-modal__close')\r\n    const closeServiceModalBtn = document.querySelector('.services-modal__close')\r\n    const fancyBtns = document.querySelectorAll('.fancyboxModal')\r\n\r\n    fancyBtns.forEach(btn => {\r\n        btn.addEventListener('click', (e) => {\r\n            if (btn.hash === '#callback') {\r\n                // console.log('#callback');\r\n                headerModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n            } else if (btn.hash === '#application') {\r\n                // console.log('no application');\r\n                serviceModal.style.display = 'block'\r\n                overlay.style.display = 'block'\r\n                \r\n            }\r\n        })\r\n    })\r\n\r\n    closeHeaderModalBtn.addEventListener('click', () => {\r\n        headerModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n    closeServiceModalBtn.addEventListener('click', () => {\r\n        serviceModal.style.display = 'none'\r\n        overlay.style.display = 'none'\r\n    })\r\n    \r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack://diploma/./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/swipeUp.js":
/*!********************************!*\
  !*** ./src/modules/swipeUp.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst up = () => {\r\n    const smoothScrollBtn = document.querySelector('.smooth-scroll')\r\n\r\n    smoothScrollBtn.style.display = 'none'\r\n    \r\n    const trackingScroll = () => {\r\n        let scrolled = window.scrollY\r\n        let coordinates = document.documentElement.clientHeight\r\n        \r\n        if (scrolled > coordinates) {\r\n            smoothScrollBtn.style.display = 'block'\r\n        }else if (scrolled < coordinates) {\r\n            smoothScrollBtn.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    function topFunction() {\r\n        window.scrollTo({top: 0, behavior: 'smooth'})\r\n    }\r\n\r\n    smoothScrollBtn.addEventListener('click', topFunction)\r\n    window.addEventListener('scroll', trackingScroll)\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (up);\n\n//# sourceURL=webpack://diploma/./src/modules/swipeUp.js?");

/***/ }),

/***/ "./src/modules/threeslider.js":
/*!************************************!*\
  !*** ./src/modules/threeslider.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n    const benefitItems = document.querySelectorAll('.benefits__item')\r\n\r\n    const checkForInnerWidth = () => {\r\n            benefitItems.forEach((benefitItem, i) => {\r\n                if (window.innerWidth >= 576) {\r\n                    if (i > 2) {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                } else {\r\n                    if (i > 0) {\r\n                        benefitItem.classList.add('not-active')\r\n                    }\r\n                }   \r\n            })\r\n    }\r\n\r\n    checkForInnerWidth()\r\n    \r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.benefits__arrow--right')) {\r\n            benefitItems.forEach(benefitItem => {\r\n                if (benefitItem.classList.contains('not-active')) {\r\n                    benefitItem.classList.remove('not-active')\r\n                } else {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            })\r\n        }\r\n        if (e.target.closest('.benefits__arrow--left')) {\r\n            benefitItems.forEach(benefitItem => {\r\n                if (benefitItem.classList.contains('not-active')) {\r\n                    benefitItem.classList.remove('not-active')\r\n                } else {\r\n                    benefitItem.classList.add('not-active')\r\n                }\r\n            })\r\n        }\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://diploma/./src/modules/threeslider.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (discount) => {\r\n    const timerDaysBoxs = document.querySelectorAll('.count_1')\r\n    const timerHoursBoxs = document.querySelectorAll('.count_2')\r\n    const timerMinutesBoxs = document.querySelectorAll('.count_3')\r\n    const timerSecondsBoxs = document.querySelectorAll('.count_4')\r\n\r\n    const timerDaysBoxF = timerDaysBoxs[0]\r\n    const timerHoursBoxF = timerHoursBoxs[0]\r\n    const timerMinutesBoxF = timerMinutesBoxs[0]\r\n    const timerSecondsBoxF = timerSecondsBoxs[0]\r\n    \r\n    const timerDays = timerDaysBoxF.lastElementChild\r\n    const timerHours = timerHoursBoxF.lastElementChild\r\n    const timerMinutes = timerMinutesBoxF.lastElementChild\r\n    const timerSeconds = timerSecondsBoxF.lastElementChild\r\n\r\n    let intervalID\r\n\r\n    const getTimeRemaining = (discount) => {\r\n        let dateStop = new Date(discount).getTime()\r\n        let dateNow = new Date().getTime()\r\n        let timeRemaining = (dateStop - dateNow) / 1000\r\n        let days = Math.floor(timeRemaining / 60 / 60 / 24)\r\n        let hours = Math.floor(timeRemaining / 60 / 60) % 24\r\n        let minutes = Math.floor((timeRemaining / 60) % 60)\r\n        let seconds = Math.floor(timeRemaining % 60)\r\n\r\n        return { timeRemaining, days, hours, minutes, seconds }\r\n    }\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining(discount)\r\n\r\n        timerDays.textContent = getTime.days\r\n        timerHours.textContent = getTime.hours\r\n        timerMinutes.textContent = getTime.minutes\r\n        timerSeconds.textContent = getTime.seconds\r\n\r\n        if (getTime.timeRemaining > 0) {\r\n            intervalID = setInterval(() => {\r\n                            updateClock()\r\n                        }, 1000);\r\n        } else if (getTime.timeRemaining <= 0) {\r\n            timerDays.textContent = '00'\r\n            timerHours.textContent = '00'\r\n            timerMinutes.textContent = '00'\r\n            timerSeconds.textContent = '00'\r\n            clearInterval(intervalID)\r\n        }\r\n        const zeroToNumber = () => {\r\n            if (getTime.days < 10 && getTime.days >= 0) {\r\n                timerDays.textContent = '0' + getTime.days\r\n            } \r\n            if (getTime.hours < 10 && getTime.days >= 0) {\r\n                timerHours.textContent = '0' + getTime.hours\r\n            }\r\n            if (getTime.minutes < 10 && getTime.days >= 0) {\r\n                timerMinutes.textContent = '0' + getTime.minutes\r\n            }\r\n            if (getTime.seconds < 10 && getTime.days >= 0) {\r\n                timerSeconds.textContent = '0' + getTime.seconds\r\n            }\r\n        }\r\n        const timeEqualify = () => {\r\n            timerDaysBoxs[1].lastElementChild.textContent = timerDays.textContent\r\n            timerHoursBoxs[1].lastElementChild.textContent = timerHours.textContent\r\n            timerMinutesBoxs[1].lastElementChild.textContent = timerMinutes.textContent\r\n            timerSecondsBoxs[1].lastElementChild.textContent = timerSeconds.textContent\r\n        }\r\n        zeroToNumber()\r\n        timeEqualify()\r\n    }\r\n    updateClock()\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack://diploma/./src/modules/timer.js?");

/***/ }),

/***/ "./src/modules/twoSlider.js":
/*!**********************************!*\
  !*** ./src/modules/twoSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst two = () => {\r\n    const cards = document.querySelectorAll('.col-md-12.col-lg-6')\r\n\r\n    const checkForInnerWidth = () => {\r\n        cards.forEach((card, i) => {\r\n            if (window.innerWidth >= 576) {\r\n                if (i > 2) {\r\n                    card.classList.add('not-active')\r\n                }\r\n            } else {\r\n                if (i > 0) {\r\n                    card.classList.add('not-active')\r\n                }\r\n            }   \r\n        })\r\n}\r\n\r\ncheckForInnerWidth()\r\n\r\n\r\ndocument.addEventListener('click', (e) => {\r\n    if (e.target.closest('.services__arrow--right')) {\r\n        cards.forEach(card => {\r\n            if (card.classList.contains('not-active')) {\r\n                card.classList.remove('not-active')\r\n            } else {\r\n                card.classList.add('not-active')\r\n            }\r\n        })\r\n    }\r\n    if (e.target.closest('.services__arrow--left')) {\r\n        cards.forEach(card => {\r\n            if (card.classList.contains('not-active')) {\r\n                card.classList.remove('not-active')\r\n            } else {\r\n                card.classList.add('not-active')\r\n            }\r\n        })\r\n    }\r\n})\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (two);\n\n//# sourceURL=webpack://diploma/./src/modules/twoSlider.js?");

/***/ }),

/***/ "./src/modules/validate.js":
/*!*********************************!*\
  !*** ./src/modules/validate.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst validate = () => {\r\n    const calcSquare = document.getElementById('calc-input')\r\n\r\n    const numberEnable = (e) => {\r\n        e.target.value = e.target.value.replace(/\\D+/, \"\")  \r\n    }\r\n    calcSquare.addEventListener('input', numberEnable)\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://diploma/./src/modules/validate.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;