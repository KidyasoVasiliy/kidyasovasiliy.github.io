!function(t){var r={};function n(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=r,n.d=function(t,r,e){n.o(t,r)||Object.defineProperty(t,r,{enumerable:!0,get:e})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,r){if(1&r&&(t=n(t)),8&r)return t;if(4&r&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&r&&"string"!=typeof t)for(var o in t)n.d(e,o,function(r){return t[r]}.bind(null,o));return e},n.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(r,"a",r),r},n.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},n.p="dist-js/",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src-js/parts/main-slider.js\nfunction mainSlider() {\r\n\r\n\t//Слайдер\r\n\tlet slideIndex\t= 1,\r\n\t\tslides \t\t= document.querySelectorAll('.a-slide'),\r\n\t\tdotsWrap \t= document.querySelector('.slider-dots'),\r\n\t\tdot \t\t= document.getElementsByClassName('dot');\r\n\t\t\r\n\t\tshowSlides(slideIndex);\r\n\t\t\r\n\t\t\tfunction showSlides(n) {\r\n\t\t\t\tif (n > slides.length) \t{\r\n\t\t\t\t\tslideIndex = 1;\r\n\t\t\t\t} else if (n < 1) {\r\n\t\t\t\t\tslideIndex = slides.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\t\t\tslides[i].style.display = 'none';\r\n\t\t\t\t}\r\n\t\t\t\tfor (let i = 0; i < dot.length; i++) {\r\n\t\t\t\t\tdot[i].classList.remove('dot-active');\r\n\t\t\t\t}\r\n\r\n\t\t\t\tslides[slideIndex - 1].style.display = 'block';\r\n\t\t\t\tdot[slideIndex - 1].classList.add('dot-active');\r\n\t\t\t}\r\n\r\n\t\tfunction plusSliders (n) {\r\n\t\t\tshowSlides(slideIndex += n);\r\n\t\t}\r\n\r\n\t\tfunction currentSlide(n) {\r\n\t\t\tshowSlides(slideIndex = n);\r\n\t\t}\r\n\r\n\t\tfunction autoSlide(){\r\n\t\t\tsetTimeout( () => {\r\n\t\t\t\tplusSliders(1);\r\n\t\t\t}, 3000);\r\n\t\t\tsetTimeout(autoSlide, 3000);\r\n\t\t}\r\n\t\tautoSlide();\r\n\r\n\t\tdotsWrap.addEventListener('click', function(event) {\r\n\t\t\tfor (let i = 0; i < dot.length + 1; i++) {\r\n\t\t\t\tif (event.target.classList.contains('dot') && event.target == dot[i-1]) currentSlide(i);\r\n\t\t\t}\r\n\t\t});\t\r\n}\r\n/* harmony default export */ var main_slider = (mainSlider);\n// CONCATENATED MODULE: ./src-js/parts/getIntoTheAccount.js\nfunction getIntoTheAccount() {\r\n\t\t// подложка\r\n\tlet overlay \t\t\t= document.querySelector('.overlay'),\r\n\t\t//кнопки \"Войти\"\r\n\t\theaderGetInThAcBtn \t= document.querySelector('.header-login__button'),\r\n\t\tfooterGetInThAcBtn \t= document.querySelector('.footer-login__button'),\r\n\t\t//кнопка закрыть\r\n\t\tcloseBtnForm \t\t= document.querySelector('.popup-close'),\r\n\t\tloading = document.querySelector('.loading-modal'),\r\n\t\tthank = document.querySelector('.thank-modal'),\r\n\t\tfailure = document.querySelector('.failure-modal');\r\n\r\n\r\n\theaderGetInThAcBtn.onclick = ()=> { \t// открываем форму, если клик в header-\"Войти\"\r\n\t\tzeroAjax();\r\n\t\topenForm();\r\n\t};\r\n\tfooterGetInThAcBtn.onclick = ()=> { \t// открываем форму, если клик в footer-\"Войти\"\r\n\t\tzeroAjax();\r\n\t\topenForm();\r\n\t};\r\n\tcloseBtnForm.onclick = () => { \t\t\t// закрываем форму, если клик на крестик\r\n\t\tcloseForm();\r\n\t};\r\n\r\n\t\r\n\r\n\tfunction openForm() { \t\t// func Открываем форму, если клик на кнопку \"Войти\"\r\n\t\toverlay.style.display = 'block';\r\n\t\tdocument.body.style.overflow = 'hidden';\r\n\t\teventOutside();\r\n\t}\r\n\tfunction closeForm() {\t\t// func Закрываем форму, если клик на крестик\r\n\t\toverlay.style.display = 'none';\r\n\t\tdocument.body.style.overflow = '';\t\r\n\t}\r\n\tfunction eventOutside() {   // func Закрываем форму, если клик вне формы\r\n\t\toverlay.onclick = (e) => {\r\n\t\t\tif (e.path.length===5) {closeForm();}\r\n\t\t};\r\n\t}\r\n\r\n\tfunction zeroAjax(){\r\n\t\tconsole.log('обнуляем форму входа/регистрации');\r\n\t\tdocument.querySelector('.popup-form').style.backgroundColor = \"#fff\"\r\n\t\tdocument.querySelector('.popup .popup-form_form').style.display = 'block';\r\n\t\tloading.style.display = 'none';\r\n\t\tthank.style.display = 'none';\r\n\t\tfailure.style.display = 'none';\r\n\t}\r\n}\r\n\r\n/* harmony default export */ var parts_getIntoTheAccount = (getIntoTheAccount);\n// CONCATENATED MODULE: ./src-js/parts/goToCustomizationPage.js\nfunction goToCustomizationPage(){\r\n\tlet createYourSite = document.querySelector('.portfolio-button__main'),\r\n\t\tcreateAWebsite = document.querySelector('.header-button__main');\r\n\r\n\r\n\tcreateYourSite.onclick = ()=>{\r\n\t\tdocument.location.href = \"site-builder.php\";\r\n\t};\r\n\tcreateAWebsite.onclick = ()=>{\r\n\t\tdocument.location.href = \"site-builder.php\";\r\n\t};\r\n}\r\n/* harmony default export */ var parts_goToCustomizationPage = (goToCustomizationPage);\n// CONCATENATED MODULE: ./src-js/parts/windowWithTariff.js\nfunction windowWithTariff() {\r\n\t\t// подложка\r\n\tlet overlayThankYou = document.querySelector('.js-overlay-thank-you'),\r\n\t\t//не отмеченные inputs\r\n\t\tpopupRadio \t\t= document.querySelectorAll('.popup-radio input'),\r\n\t\t//кнопки с прайса\r\n\t\tbasicBtn\t\t= document.querySelector('.pricing-block__button_basic'),\r\n\t\tsilverBtn\t\t= document.querySelector('.pricing-block__button_silver'),\r\n\t\tgoldBtn\t\t\t= document.querySelector('.pricing-block__button_gold'),\r\n\t\t//кнопка закрыть\r\n\t\tcloseBtnForm \t= document.querySelector('.js-overlay-thank-you .popup-close');\r\n\r\n\r\n\r\n\tbasicBtn.onclick = () => {\t\t\t\t\t\t\t// открываем форму с отмеченным input(соот. кнопке) \r\n\t\topenForm();\r\n\t\tpopupRadio[0].checked=\"checked\";\r\n\t};\r\n\r\n\tsilverBtn.onclick = () => {\t\t\t\t\t\t\t// открываем форму с отмеченным input(соот. кнопке) \r\n\t\topenForm();\r\n\t\tpopupRadio[1].checked=\"checked\";\r\n\t};\r\n\r\n\tgoldBtn.onclick = () => {\t\t\t\t\t\t\t// открываем форму с отмеченным input(соот. кнопке) \r\n\t\topenForm();\r\n\t\tpopupRadio[2].checked=\"checked\";\r\n\t};\r\n\r\n \tcloseBtnForm.addEventListener('click', () => {\t\t// закрываем форму, если клик на крестик\r\n \t\tcloseForm();\r\n \t});\r\n\r\n\r\n\r\n\r\n// ОТКРЫТЬ - ЗАКРЫТЬ\r\n \tfunction openForm() { \t\t\t\t\t\t\t// func Открываем форму, если клик на кнопки с прайсом\r\n\t\toverlayThankYou.style.display = 'block';\r\n\t\tdocument.body.style.overflow = 'hidden';\r\n\t\teventOutside();\r\n\t\tzeroAjax();\r\n\t}\r\n\tfunction closeForm() {\t\t\t\t\t\t\t// func Закрываем форму, если клик на крестик\r\n\t\toverlayThankYou.style.display = 'none';\r\n \t\tdocument.body.style.overflow = '';\t\t\r\n\t}\r\n\tfunction eventOutside() {   \t\t\t\t\t// func Закрываем форму, если клик вне формы\r\n\t\toverlayThankYou.onclick = (e) => {\r\n\t\t\tif (e.path.length===5) { closeForm(); }\r\n\t\t};\r\n\t}\r\n\r\n\r\n\tfunction zeroAjax(){\r\n\t\tconsole.log('обнуляем форму заказа');\r\n\t\tdocument.querySelector('.js-overlay-popup .popup-form').style.display = 'block';\r\n\t}\r\n}\r\n/* harmony default export */ var parts_windowWithTariff = (windowWithTariff);\n// CONCATENATED MODULE: ./src-js/parts/scrollHeader.js\nfunction scrollHeader() {\r\n\r\n\tlet navigation = document.querySelectorAll('.header-nav-menu ul')[0],\t\t\t\t\t// получаем панель навигации header\r\n\t\theaderButtonMouse = document.querySelector('.header-button-mouse'),\t\t\t\t\t// получаем нашу mouse\r\n\t\tstartPos = 0,\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// стартовая позиция (для mouse)\r\n\t\tmove = null;\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// движение анимации\r\n\t//Плавная прокрутка\r\n\tfunction animate(draw, duration) { \t\t\t\t\t\t\t\t\t\t\t\t\t\t// ф-ция animate draw-что рисовать duranion - сколько времени это будет занимать(аргументы дефолту)\r\n\t\tlet start = performance.now();\t\t\t\t\t\t\t\t\t\t\t\t\t\t// получить текущее время в мс с помощью performance.now()-сколько времени прошло с начала прогрузки страницы(точнее с того момента, когда с памяти удалилась предыдущая страница и начала отрисовываться текущая)\r\n\t\trequestAnimationFrame( function animate(time) { \t\t\t\t\t\t\t\t\t// передаем браузеру нашу анимацию requestAnimationFrame, и в качестве callback мы будем возвращать ф-цию animate(аргумент time-сколько времени идет наша анимация)\r\n\t\t\tlet timePassed = time - start; \t\t\t\t\t\t\t\t\t\t\t\t\t// time-встроенная ф-ция в reqAniFr, которая отвечает за время, которое прошло после события, в нашем случае click на header \r\n\r\n\t\t\tif (timePassed > duration) timePassed = duration; \t\t\t\t\t\t\t\t// если прошедшее время > длительности анимации; // прерываем нашу анимацию\r\n\r\n\t\t\tdraw(timePassed); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// метод для нарисования анимации\r\n\t\t\t\tif (timePassed < duration) requestAnimationFrame(animate);  \t\t\t\t// если прошедшее время < длительности (или анимация еще не закончилась) // вызываем reqAnFr\r\n\t\t});\r\n\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\r\n\tnavigation.addEventListener('click', function(event) { \t\t\t\t\t\t\t\t\t// при нажатии на навигацию\r\n\t\tevent.preventDefault();\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// отменим стандартный скрипт браузера #\r\n\r\n\t\tanimate( function(timePassed) { \t\t\t\t\t\t\t\t\t\t\t\t\t// описываем саму ф-цию-анимацию(сайчас описываем сам параметр drow. Будет в качестве ф-ции(timePassed))\r\n\t\t\tlet target \t= event.target;\t\t\t\t\t\t\t\t\t\t\t\t\t\t// теперь надо получить элемент навигации на который мы кликнули. То есть на саму ссылку\r\n\t\t\tlet section = document.getElementById(target.getAttribute('href').slice(1));\t// куда таргет ссылается, надо получить все id у которых есть атрибут href, и выризаем #\r\n\r\n\t\t\twindow.scrollBy(0, section.getBoundingClientRect().top / 20 + 3);\t\t\t\t// описываем плавную прокрутку. Метод scrollBy, определяем куда будет перемещаться экран. 20(18) - размер header, 3- вниз +3px\r\n\t\t}, 1500); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t});\r\n\r\n\r\n\r\n\theaderButtonMouse.onclick =  () =>{\t\t\t// клик на mouse \r\n\t\tevent.preventDefault();\t\t\t\t\t// снимает стандартное событие браузера\r\n\t\trequestAnimationFrame(myAnimated);\t\t// запускаем анимацию\r\n\t\tstartPos = 0;\t\t\t\t\t\t\t// обнуляем стартовую позицию, чтобы не накапливалось\r\n\t};\r\n\r\n\tfunction myAnimated(){\t\t\t\t\t\t\t\t// funс нашей анимации на mouse\r\n\t\tstartPos += 0.5;\t\t\t\t\t\t\t\t// накапливаем стартовую поцизию по 0.5\r\n\t\twindow.scrollTo(0,window.scrollY+startPos); \t// прибавляем к нашей позиции startPos\r\n\t\tmove = requestAnimationFrame(myAnimated);\t\t// запускаем снова анимацию\r\n\t\tif(window.scrollY>900){\t\t\t\t\t\t\t// работает до тех пор, пока мы не оказались на 900px вниз от начала документа\r\n\t\t\tcancelAnimationFrame(move);\t\t\t\t\t// как только дошли до 900px останавливаем нашу анимацию\r\n\t\t}\r\n\t}\r\n}\r\n/* harmony default export */ var parts_scrollHeader = (scrollHeader);\n// CONCATENATED MODULE: ./src-js/parts/scrollFooter.js\nfunction scrollFooter() {\r\n\r\n\tlet navigationFooter = document.querySelectorAll('.footer-nav-menu ul')[0];\t\t\t\t// получаем панель навигации footer\r\n\r\n\t//Плавная прокрутка\r\n\tfunction animate(draw, duration) { \t\t\t\t\t\t\t\t\t\t\t\t\t\t// ф-ция animate draw-что рисовать duranion - сколько времени это будет занимать(аргументы дефолту)\r\n\t\tlet start = performance.now();\t\t\t\t\t\t\t\t\t\t\t\t\t\t// получить текущее время в мс с помощью performance.now()-сколько времени прошло с начала прогрузки страницы(точнее с того момента, когда с памяти удалилась предыдущая страница и начала отрисовываться текущая)\r\n\t\trequestAnimationFrame( function animate(time) { \t\t\t\t\t\t\t\t\t// передаем браузеру нашу анимацию requestAnimationFrame, и в качестве callback мы будем возвращать ф-цию animate(аргумент time-сколько времени идет наша анимация)\r\n\t\t\tlet timePassed = time - start; \t\t\t\t\t\t\t\t\t\t\t\t\t// time-встроенная ф-ция в reqAniFr, которая отвечает за время, которое прошло после события, в нашем случае click на header \r\n\r\n\t\t\tif (timePassed > duration) timePassed = duration; \t\t\t\t\t\t\t\t// если прошедшее время > длительности анимации; // прерываем нашу анимацию\r\n\r\n\t\t\tdraw(timePassed); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// метод для нарисования анимации\r\n\t\t\t\tif (timePassed < duration) requestAnimationFrame(animate);  \t\t\t\t// если прошедшее время < длительности (или анимация еще не закончилась) // вызываем reqAnFr\r\n\t\t});\r\n\t}\r\n\r\n\t\t\t\t\t\t\t\t\t\r\n\r\n\tnavigationFooter.addEventListener('click', function(event) { \t\t\t\t\t\t\t// при нажатии на навигацию\r\n\t\tevent.preventDefault();\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t// отменим стандартный скрипт браузера #\r\n\r\n\t\tanimate( function(timePassed) { \t\t\t\t\t\t\t\t\t\t\t\t\t// описываем саму ф-цию-анимацию(сайчас описываем сам параметр drow. Будет в качестве ф-ции(timePassed))\r\n\t\t\tlet target \t= event.target;\t\t\t\t\t\t\t\t\t\t\t\t\t\t// теперь надо получить элемент навигации на который мы кликнули. То есть на саму ссылку\r\n\t\t\tlet section = document.getElementById(target.getAttribute('href').slice(1));\t// куда таргет ссылается, надо получить все id у которых есть атрибут href, и выризаем #\r\n\r\n\t\t\twindow.scrollBy(0, section.getBoundingClientRect().top / 20 + 2);\t\t\t\t// описываем плавную прокрутку. Метод scrollBy, определяем куда будет перемещаться экран. 20(18) - размер header, 3- вниз +3px\r\n\t\t}, 1500); \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t});\r\n\r\n}\r\n/* harmony default export */ var parts_scrollFooter = (scrollFooter);\n// CONCATENATED MODULE: ./src-js/parts/formMask.js\nfunction formMask() {\r\n\r\n\tlet popupFormBox = document.querySelectorAll('.popup-form-box input'),\r\n\t\tmainFormBox = document.querySelectorAll('.form-box input');\r\n\r\n\tpopupFormBox[0].onkeyup = function(input) {  \t\t\t\t\t\t// Проверка на ввод только Русских букв входа/регистрации\r\n\t\treturn this.value = this.value.replace(/[^а-я, А-Я]/g, '');\r\n\t};\r\n\tpopupFormBox[3].onkeyup = function(input) {  \t\t\t\t\t\t// Проверка на ввод только Русских букв оформления заказа\r\n\t\treturn this.value = this.value.replace(/[^а-я, А-Я]/g, '');\r\n\t};\r\n\tmainFormBox[0].onkeyup = function(input) {  \t\t\t\t\t\t// Проверка на ввод только Русских букв главной формы\r\n\t\treturn this.value = this.value.replace(/[^а-я, А-Я]/g, '');\r\n\t};\r\n\r\n\r\n\tlet inputReg = popupFormBox[1],\t\t\t\t\t\t\t\t\t\t// Проверка на ввод номера телефона входа/регистрации\r\n\t\tinputOrder =   popupFormBox[4];\t\t\t\t\t\t\t\t\t// Проверка на ввод номера телефона\tоформления заказа\r\n\tinputReg.addEventListener('input', mask, false);\r\n\tinputOrder.addEventListener('input', mask, false);\r\n\r\n\t\tfunction mask(event) {\r\n\t\t    let matrix = this.defaultValue,\r\n\t\t        i = 0,\r\n\t\t        def = matrix.replace(/\\D/g, ''),\r\n\t\t        val = this.value.replace(/\\D/g, '');\r\n\t\t        def.length >= val.length && (val = def);\r\n\t\t    matrix = matrix.replace(/[_\\d]/g, function(a) {\r\n\t\t        return val.charAt(i++) || '_'\r\n\t\t    });\r\n\t\t    this.value = matrix;\r\n\t\t    i = matrix.lastIndexOf(val.substr(-1));\r\n\t\t    i < matrix.length && matrix != this.defaultValue ? i++ : i = matrix.indexOf('_');\r\n\t\t    setCursorPosition(i, this)\r\n\t\t}\r\n\t\t\r\n\t\t\tfunction setCursorPosition(pos, elem) {\r\n\t\t\t  elem.focus();\r\n\t\t\t  if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\r\n\t\t\t  else if (elem.createTextRange) {\r\n\t\t\t      let range = elem.createTextRange();\r\n\r\n\t\t\t      range.collapse(true);\r\n\t\t\t      range.moveEnd('character', pos);\r\n\t\t\t      range.moveStart('character', pos);\r\n\t\t\t      range.select()\r\n\t\t\t  }\r\n\t\t\t}\r\n\r\n}\r\n/* harmony default export */ var parts_formMask = (formMask);\n// CONCATENATED MODULE: ./src-js/parts/authorizationAjax.js\n\r\nfunction authorizationAjax() {\r\n\r\n\r\n\tlet form\t= document.querySelector('.popup-form_form'),\r\n\t\tinputs \t= document.querySelectorAll('.popup-form-box input'),//[1,2,3];\r\n\t\tpopupFormForm = document.querySelector('.popup .popup-form_form'),\r\n\r\n\t\tloading = document.querySelector('.loading-modal'),\r\n\t\tthank \t= document.querySelector('.thank-modal'),\r\n\t\tfailure = document.querySelector('.failure-modal');\r\n\r\n\t\t// popupFormForm.style.display = 'block';\r\n\t\t\r\n\t\tform.addEventListener('submit', function(event){\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\t//AJAX\r\n\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\trequest.open('POST', 'server.php');\r\n\r\n\t\t\trequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\t\t\tlet formData = new FormData(form);\r\n\t\t\trequest.send(formData);\r\n\r\n\t\t\trequest.onreadystatechange = function() {\r\n\t\t\t\tif (request.readyState < 4) {\r\n\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\tdocument.querySelector('.popup-form').style.backgroundColor = \"#C6C5C5\";\r\n\t\t\t\t\tloading.style.display = 'block';\r\n\t\t\t\t} else if (request.readyState === 4) {\r\n\r\n\t\t\t\t\tif (request.status === 200 && request.status <300) {\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\tthank.style.display = 'block';\r\n\t\t\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\t\t\tloading.style.display = 'none';\r\n\t\t\t\t\t\t\t}, 1500)\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\tfailure.style.display = 'block';\r\n\t\t\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\t\t\tloading.style.display = 'none';\r\n\t\t\t\t\t\t\t}, 1500)\r\n\t\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\tfor(let i = 0; i < 3; i++){\t\t\t//Чистим поля ввода\r\n\t\t\t\tinputs[i].value = '';\r\n\t\t\t}\r\n\t\t}); \r\n\r\n\r\n}\r\n/* harmony default export */ var parts_authorizationAjax = (authorizationAjax);\r\n\n// CONCATENATED MODULE: ./src-js/parts/orderAjax.js\nfunction orderAjax() {\r\n\r\n\r\n\tlet form\t= document.querySelector('.js-overlay-popup .popup-form form'),\r\n\t\tinputs \t= document.querySelectorAll('.popup-form-box input'),//[4,5];\r\n\t\tpopupFormForm = document.querySelector('.js-overlay-popup .popup-form'),\r\n\r\n\t\tjsOverlayOrder = document.querySelector('.js-overlay-order'),\r\n\t\tthankOrderModal = jsOverlayOrder.querySelector('div .popup-form-header');\r\n\r\n\t\t\r\n\r\n\t\tform.addEventListener('submit', function(event){\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\t//AJAX\r\n\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\trequest.open('POST', 'server.php');\r\n\r\n\t\t\trequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\t\t\tlet formData = new FormData(form);\r\n\t\t\trequest.send(formData);\r\n\r\n\t\t\trequest.onreadystatechange = function() {\r\n\t\t\t\tif (request.readyState < 4) {\r\n\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\tjsOverlayOrder.style.display = 'block';\r\n\t\t\t\t\tthankOrderModal.textContent = `Мы думаем...`;\r\n\t\t\t\t} else if (request.readyState === 4) {\r\n\t\t\t\t\tif (request.status === 200 && request.status <300) {\r\n\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\t\t\t\tjsOverlayOrder.style.display = 'block';\r\n\t\t\t\t\t\t\t\tthankOrderModal.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течении 5 минут.';\r\n\t\t\t\t\t\t\t}, 1000)\r\n\t\t\t\t\t\t\tconsole.log('Успех')\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\t\tpopupFormForm.style.display = 'none';\r\n\t\t\t\t\t\t\t\tjsOverlayOrder.style.display = 'block';\r\n\t\t\t\t\t\t\t\tthankOrderModal.textContent = `Ошибка! Простите, что-то пошло не так...`;\r\n\t\t\t\t\t\t\t}, 1000)\r\n\t\t\t\t\t\t\tconsole.log('Ошибка')\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\tfor(let i = 3; i <= 4; i++){\t\t\t\t//Чистим поля ввода\r\n\t\t\t\tinputs[i].value = '';\r\n\t\t\t}\r\n\t\t}); \r\n\r\n\r\n\t\tlet thankOrderModalClose = document.querySelectorAll('.js-order div')[0]; \t\r\n\t\tthankOrderModalClose.onclick = function(){\r\n\t\t\tjsOverlayOrder.style.display = 'none';\r\n\t\t\tdocument.querySelector('.js-overlay-thank-you').style.display = 'none';\r\n\t\t\tdocument.body.style.overflow = '';\r\n\t\t}\r\n\r\n}\r\n/* harmony default export */ var parts_orderAjax = (orderAjax);\r\n\r\n\r\n\n// CONCATENATED MODULE: ./src-js/parts/youtube.js\nfunction youtube(){\r\n\r\n\tlet youtube = document.querySelector('#q_th_D4VHC0'),\r\n\t\tyoutubeAppStyle = document.querySelectorAll('#q_th_D4VHC0')[0],\r\n\t\tframeVideo = document.querySelector('.d-flex iframe');\r\n\r\n\r\n\tyoutube.addEventListener('click', function(){\r\n\t\tyoutubeAppStyle.classList.add('fadeOut');\r\n\t\tsetTimeout(() => {\r\n\t\t\tyoutube.style.display = 'none';\r\n\t\t\tframeVideo.style.display = 'block';\r\n\t\t}, 400);\r\n\t})\r\n\r\n\t\r\n}\r\n/* harmony default export */ var parts_youtube = (youtube);\r\n\r\n\n// CONCATENATED MODULE: ./src-js/parts/mainFormAjax.js\nfunction mainFormAjax() {\r\n\r\n\tconsole.log(document.querySelector('.form-box-button button'))\r\n\tlet form\t= document.querySelector('.form-group'),\r\n\t\tformGroupOff = form.querySelectorAll('.form-group-box'),\r\n\t\tmainFormBox = formGroupOff[0].querySelectorAll('.form-box input'),\r\n\t\tmainFormBoxText = formGroupOff[0].querySelector('.form-box textarea');\r\n\t\t\r\n\t\tfunction newEl(){\r\n\t\t\tform.insertAdjacentHTML(\r\n\t\t\t\t'afterbegin', \r\n\t\t\t\t`<div style=\r\n\t\t\t\t\t\"display: none;\r\n\t\t\t\t\t padding-top: 50px; \r\n\t\t\t\t\t margin: 0 auto;\r\n\t\t\t\t\t width:1110px; \r\n\t\t\t\t\t height: 290px; \r\n\t\t\t\t\t font-family: Amsdamcyr;\r\n\t\t\t\t\t text-align: center; \r\n\t\t\t\t\t font-size: 24px;\"\r\n\t\t\t\t></div>`\r\n\t\t\t\t);\t\r\n\t\t}\r\n\t\tnewEl();\r\n\t\tlet newElDiv = document.querySelectorAll('.form-group div')[0];\r\n\t\t\r\n\t\tform.addEventListener('submit', function(event){\r\n\t\t\tevent.preventDefault();\r\n\r\n\t\t\t//AJAX\r\n\t\t\tlet request = new XMLHttpRequest();\r\n\t\t\trequest.open('POST', 'server.php');\r\n\r\n\t\t\trequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');\r\n\t\t\tlet formData = new FormData(form);\r\n\t\t\trequest.send(formData);\r\n\r\n\t\t\trequest.onreadystatechange = function() {\r\n\t\t\t\tif (request.readyState < 4) {\r\n\t\t\t\t\tformGroupOff[0].classList.add('bounceOut');\r\n\t\t\t\t\tdocument.querySelectorAll('.form-box-button button')[0].classList.add('flipOutX')\r\n\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\tformGroupOff[0].style.display = 'none';\r\n\t\t\t\t\t\tdocument.querySelectorAll('.form-box-button button')[0].style.display = 'none';\r\n\t\t\t\t\t\tnewElDiv.style.display = 'block';\r\n\t\t\t\t\t\tnewElDiv.textContent = 'Пожалуйста, подождите...';\r\n\t\t\t\t\t}, 600);\r\n\t\t\t\t\t\r\n\t\t\t\t} else if (request.readyState === 4) {\r\n\r\n\t\t\t\t\tif (request.status === 200 && request.status <300) {\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\t\tnewElDiv.innerHTML = 'Спасибо за обращение! <br> Наш консультант свяжется с Вами в течении 5 минут.';\r\n\t\t\t\t\t\t}, 1000);\r\n\t\t\t\t\t} else {\r\n\t\t\t\t\t\tsetTimeout(()=>{\r\n\t\t\t\t\t\tnewElDiv.innerHTML = 'Ошибка! <br> Что-то пошло не так...';\r\n\t\t\t\t\t\t}, 1000);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t};\r\n\r\n\t\t\tmainFormBoxText.value = '';\t\t\t\t\t\t//Чистим поля ввода\r\n\t\t\tfor(let i = 0; i < mainFormBox.length; i++){\t//Чистим поля ввода\t\t\r\n\t\t\t\t mainFormBox[i].value = '';\r\n\t\t\t}\r\n\t\t}); \r\n\r\n\r\n}\r\n/* harmony default export */ var parts_mainFormAjax = (mainFormAjax);\r\n\n// CONCATENATED MODULE: ./src-js/index.js\n\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\t\r\n\r\n\r\n\tmain_slider();\r\n\tparts_getIntoTheAccount();\r\n\tparts_goToCustomizationPage();\r\n\tparts_windowWithTariff();\r\n\tparts_scrollHeader();\r\n\tparts_scrollFooter();\r\n\tparts_formMask();\r\n\tparts_authorizationAjax();\r\n\tparts_orderAjax();\r\n\tparts_youtube();\r\n\tparts_mainFormAjax();\n\n//# sourceURL=webpack:///./src-js/index.js_+_11_modules?")}]);