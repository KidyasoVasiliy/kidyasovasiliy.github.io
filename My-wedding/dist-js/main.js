!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist-js/",n(n.s=0)}([function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src-js/parts/main-slider.js\nfunction mainSlider() {\r\n\r\n\t//Слайдер\r\n\tlet slideIndex\t= 1,\r\n\t\tslides \t\t= document.querySelectorAll('.a-slide'),\r\n\t\tdotsWrap \t= document.querySelector('.slider-dots'),\r\n\t\tdot \t\t= document.getElementsByClassName('dot');\r\n\t\t\r\n\t\tshowSlides(slideIndex);\r\n\t\t\r\n\t\t\tfunction showSlides(n) {\r\n\t\t\t\tif (n > slides.length) \t{\r\n\t\t\t\t\tslideIndex = 1;\r\n\t\t\t\t} else if (n < 1) {\r\n\t\t\t\t\tslideIndex = slides.length;\r\n\t\t\t\t}\r\n\r\n\t\t\t\tfor (let i = 0; i < slides.length; i++) {\r\n\t\t\t\t\tslides[i].style.display = 'none';\r\n\t\t\t\t}\r\n\t\t\t\tfor (let i = 0; i < dot.length; i++) {\r\n\t\t\t\t\tdot[i].classList.remove('dot-active');\r\n\t\t\t\t}\r\n\r\n\t\t\t\tslides[slideIndex - 1].style.display = 'block';\r\n\t\t\t\tdot[slideIndex - 1].classList.add('dot-active');\r\n\t\t\t}\r\n\r\n\t\tfunction plusSliders (n) {\r\n\t\t\tshowSlides(slideIndex += n);\r\n\t\t}\r\n\r\n\t\tfunction currentSlide(n) {\r\n\t\t\tshowSlides(slideIndex = n);\r\n\t\t}\r\n\r\n\t\tfunction autoSlide(){\r\n\t\t\tsetTimeout(()=>{\r\n\t\t\t\tplusSliders(1);\r\n\t\t\t},3000);\r\n\t\t\tsetTimeout(autoSlide,3000);\r\n\t\t}\r\n\t\tautoSlide();\r\n\r\n\t\tdotsWrap.addEventListener('click', function(event) {\r\n\t\t\tfor (let i = 0; i < dot.length + 1; i++) {\r\n\t\t\t\tif (event.target.classList.contains('dot') && event.target == dot[i-1]) currentSlide(i);\r\n\t\t\t}\r\n\t\t});\t\r\n}\r\n/* harmony default export */ var main_slider = (mainSlider);\n// CONCATENATED MODULE: ./src-js/parts/getIntoTheAccount.js\nfunction getIntoTheAccount(){\r\n\tlet headerGetInThAcBtn = document.querySelector('.header-login__button'),\r\n\t\tfooterGetInThAcBtn = document.querySelector('.footer-login__button'),\r\n\t\toverlay = document.querySelector('.overlay'),\r\n\t\tcloseBtnForm = document.querySelector('.popup-close'),\r\n\t\tpopupForm = document.querySelector('.popup');\r\n\r\n\theaderGetInThAcBtn.addEventListener('click', ()=>{ // Открываем окно, если нажали \"Войти\"\r\n\t\toverlay.style.display = 'block';\r\n\t\tdocument.body.style.overflow = 'hidden'\r\n\t\teventOutside()\r\n\t})\t\r\n\tfooterGetInThAcBtn.addEventListener('click', ()=>{ // Открываем окно, если нажали \"Войти\"\r\n\t\toverlay.style.display = 'block';\r\n\t\tdocument.body.style.overflow = 'hidden'\r\n\t\teventOutside()\r\n\t})\r\n\tcloseBtnForm.onclick = function(){ // Закрываем модальное окно, если клик на крестик\r\n\t\toverlay.style.display = 'none';\r\n\t\tdocument.body.style.overflow = '';\r\n\t}\r\n\r\n\tfunction eventOutside() {   //Закрываем модальное окно, если клик вне формы\r\n\t\toverlay.onclick = (e) => {\r\n\t\t\tconsole.log('Тык')\r\n\t\t\tif (e.path.length===5) {\r\n\t\t\t\toverlay.style.display = 'none';\r\n\t\t\t\tdocument.body.style.overflow = '';\r\n\t\t\t\tconsole.log('Опа, закрыли модалку)')\r\n\t\t\t}\r\n\t\t}\t\r\n\t}\r\n\t//AJAX\r\n\t// ...body\r\n}\r\n\r\n/* harmony default export */ var parts_getIntoTheAccount = (getIntoTheAccount);\n// CONCATENATED MODULE: ./src-js/parts/goToCustomizationPage.js\nfunction goToCustomizationPage(){\r\n\tlet createYourSite = document.querySelector('.portfolio-button__main'),\r\n\t\tcreateAWebsite = document.querySelector('.header-button__main');\r\n\r\n\r\n\tcreateYourSite.onclick = ()=>{\r\n\t\tdocument.location.href = \"site-builder.php\";\r\n\t};\r\n\tcreateAWebsite.onclick = ()=>{\r\n\t\tdocument.location.href = \"site-builder.php\";\r\n\t};\r\n\tconsole.log('1') \r\n}\r\n/* harmony default export */ var parts_goToCustomizationPage = (goToCustomizationPage);\n// CONCATENATED MODULE: ./src-js/index.js\n\r\n\t\r\n\t\r\n\t\r\n\r\n\r\n\tmain_slider();\r\n\tparts_getIntoTheAccount();\r\n\tparts_goToCustomizationPage();\n\n//# sourceURL=webpack:///./src-js/index.js_+_3_modules?")}]);