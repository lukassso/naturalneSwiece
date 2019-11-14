!function(n){var e={};function o(i){if(e[i])return e[i].exports;var a=e[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=n,o.c=e,o.d=function(n,e,i){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,e){if(1&e&&(n=o(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)o.d(i,a,function(e){return n[e]}.bind(null,a));return i},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="",o(o.s=0)}([function(n,e,o){"use strict";o(1),o(2),o(3);var i=document.querySelector(".product-image .active");function a(n){i.src=n.target.src}document.querySelectorAll(".image-list img").forEach((function(n){return n.addEventListener("click",a)}))},function(n,e,o){},function(n,e){n.exports='<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  \x3c!-- <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> --\x3e\n  <meta name="description" content="Świece sojowe z naturalnych składników | Nature Organic" />\n  <title>Natural & Organic - naturalne świece sojowe</title>\n  \x3c!-- document-specific social tags --\x3e\n  <meta property="og:title" content="Natural Organic - naturalneswiece.com">\n  <meta property="og:url" content="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">\n  <meta name="twitter:url" content="https://developer.mozilla.org/en-US/docs/Web/CSS/Universal_selectors">\n  <meta name="twitter:title" content="Natural & Organic - naturalneswiece.com">\n  <meta property="og:description"\n    content="Świece robione są ręcznie z wosku sojowego i naturalnych olejków zapachowych.">\n  <meta name="description" content="Świece robione są ręcznie z wosku sojowego i naturalnych olejków zapachowych.">\n  <meta name="twitter:description"\n    content="Świece robione są ręcznie z wosku sojowego i naturalnych olejków zapachowych.">\n</head>\n\n<body>\n  <div class="container">\n    <div class="grid menu shake slower infinite">\n      <div class="cc-profile-image column-xs-12 column-md-12">\n        <img src="/src/images/logo-v1-1.svg">\n      </div>\n      <div class="column-xs-12 column-md-12">\n        <div class="social">\n          <a href="https://www.facebook.com/naturalneswiece/" class="facebook">\n            <svg viewBox="0 0 35 40">\n              <g>\n                <path\n                  d="M 17.996,32L 12,32 L 12,16 l-4,0 l0-5.514 l 4-0.002l-0.006-3.248C 11.993,2.737, 13.213,0, 18.512,0l 4.412,0 l0,5.515 l-2.757,0 c-2.063,0-2.163,0.77-2.163,2.209l-0.008,2.76l 4.959,0 l-0.585,5.514L 18,16L 17.996,32z">\n                </path>\n              </g>\n            </svg>\n          </a>\n          <a href="https://www.instagram.com/naturalneswiece/" class="Instagram">\n            <svg viewBox="0 0 40 40">\n              <g fill="none" fill-rule="evenodd">\n                <rect />\n                <path\n                  d="M27.5 5c1.988 0 3.872.787 5.297 2.203A7.433 7.433 0 0 1 35 12.5v15a7.488 7.488 0 0 1-2.203 5.297A7.433 7.433 0 0 1 27.5 35h-15a7.488 7.488 0 0 1-5.297-2.203A7.433 7.433 0 0 1 5 27.5v-15c0-1.988.787-3.872 2.203-5.297A7.433 7.433 0 0 1 12.5 5h15zm0-3h-15C6.725 2 2 6.725 2 12.5v15C2 33.275 6.725 38 12.5 38h15C33.275 38 38 33.275 38 27.5v-15C38 6.725 33.275 2 27.5 2z"\n                  fill="#000" fill-rule="nonzero" />\n                <path\n                  d="M29.75 12.5a2.245 2.245 0 0 1-2.25-2.25 2.25 2.25 0 1 1 2.25 2.25zM20 14c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0-3c-4.969 0-9 4.031-9 9s4.031 9 9 9 9-4.031 9-9-4.031-9-9-9z"\n                  fill="#000" fill-rule="nonzero" />\n              </g>\n            </svg>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <main>\n    <div class="container">\n      <div class="grid product">\n        <div class="column-xs-12 column-md-7">\n          <div class="product-gallery">\n            <div class="product-image">\n              <img class="active" src="/src/images/photo3.jpg">\n            </div>\n            <ul class="image-list">\n              <li class="image-item"><img src="/src/images/photo3.jpg"></li>\n              <li class="image-item"><img src="/src/images/photo2.jpg"></li>\n              <li class="image-item"><img src="/src/images/photo1.jpg"></li>\n            </ul>\n          </div>\n        </div>\n        <div class="column-xs-12 column-md-5">\n          <h1>Świece ręcznie robione </h1>\n          <h2>w cenie od 40 PLN</h2>\n          <div class="description">\n            <p>🌿 Świece Sojowe robione są ręcznie z Naturalnego czystego w 100% wosku sojowego i naturalnych olejków zapachowych. Knoty są z czystej, ekologicznej bawełnyc🎍\n            </p>\n            \x3c!-- <p>Spalanie wosku sojowego emituje jony ujemne, dzięki czemu w sposób naturalny oczyszcza się powietrze. Wosk ten pali się zdecydowanie dłużej niż zwykłe świece. </p> --\x3e\n            <p>\n              Świece sojowe są bezpieczne dla alergików, astmatyków i dzieci. Gdy Świeca się pali nie wydziela ona żadnych szkodliwych substancji. Wosk Sojowy spala się wolno Nasze świece 120 ml palą się około 20h.</p>\n            <p>\n              Świece są Naturalne i zdrowe dają efekt pięknego zapachu. Będą pasowały również jako dodatek do wnętrz i świetny pomysł na prezent.\n            </p>\n          </div>\n          <button class="add-to-cart">Zapytaj o ofertę</button>\n        </div>\n      </div>\n      <div class="grid related-products">\n        <div class="column-xs-12">\n          <h3>Inne propozycje z tej serii</h3>\n        </div>\n        <div class="column-xs-12 column-md-6">\n          <img src="/src/images/photo4.jpg">\n          <h4>Figa z wanilią</h4>\n          <p class="price">40 PLN</p>\n        </div>\n        <div class="column-xs-12 column-md-6">\n          <img src="/src/images/photo5.jpg">\n          <h4>Drzewo sandałowe z wanilii</h4>\n          <p class="price">40 PLN</p>\n        </div>\n      </div>\n\n      <div class="grid offer-box">\n        <div class="offer-block icon-capacity column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s"\n          data-wow-delay="0s">\n          <img src="/src/images/icon-capacity.svg">\n          <h4>Pojemność 120 ml</h4>\n\n        </div>\n        <div class="offer-block column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s" data-wow-delay="1s">\n          <img src="/src/images/icon-price.svg">\n          <h4>Promocyjna cena</h4>\n\n        </div>\n        <div class="offer-block column-xs-6 column-md-3 wow animated tada" data-wow-duration="1s" data-wow-delay="2s">\n          <img src="/src/images/icon-transport.svg">\n          <h4>Przesyłka gratis*</h4>\n\n        </div>\n        <div class="offer-block column-xs-6 column-md-3 wow animated pulse" data-wow-duration="1s" data-wow-delay="3s">\n          <img src="/src/images/icon-nature.svg"">\n          <h4>Naturalny wosk sojowy</h4>\n          \n        </div>\n      </div>\n      <div class=" aster1 column-xs12 column-md-12">\n          <p>*przy zamówieniu powyżej 100 PLN</p>\n        </div>\n        <div class="b2 column-xs12 column-md-12">\n          <button class="add-to-cart">Zarezerwuj swoje zapachy</button>\n        </div>\n      </div>\n  </main>\n  <footer>\n    <div class="grid">\n      <div class="column-xs-12">\n        <p class="copyright">&copy; Copyright 2019 <a href="/" title="Natural Organic" target="_blank">Natural & Organic</a></p>\n      </div>\n    </div>\n  </footer>\n</body>\n</html>'},function(n,e,o){}]);