(()=>{"use strict";function t(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||e(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){if(t){if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}const r=function(n){var r=document.createElement("div"),o=document.getElementById(n),a=[].concat(t(document.querySelectorAll("#".concat(n,">.form-group input"))),t(document.querySelectorAll("#".concat(n,">.form-group textarea"))));o.addEventListener("submit",(function(t){t.preventDefault(),o.append(r),r.textContent="Загрузка...";var n,i,c,l={},u=function(t,n){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=e(t))){r&&(t=r);var o=0,a=function(){};return{s:a,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,i=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw i}}}}(new FormData(o));try{for(u.s();!(n=u.n()).done;){var s=(i=n.value,c=2,function(t){if(Array.isArray(t))return t}(i)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(i,c)||e(i,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),m=s[0],d=s[1];l[m]=d}}catch(t){u.e(t)}finally{u.f()}(function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t),credentials:"include"})})(l).then((function(t){if(console.log(t.status),200!==t.status)throw new Error("Response status code is not 200");r.textContent="Спасибо! Мы скоро с вами свяжемся!"})).catch((function(t){r.textContent="Что-то пошло не так...",console.error(t)})).finally((function(){a.forEach((function(t){return t.value=""})),setTimeout((function(){return r.remove()}),4e3)}))})),o.addEventListener("input",(function(t){var e=t.target;e.matches('input[name="tel"]')&&(e.setAttribute("pattern","^[0-9+]{11,12}$"),e.value=e.value.replace(/[^\d+]/g,"")),e.matches('input[name="fio"]')&&(e.setAttribute("pattern","[А-Яа-яЁё\\s]{2,25}"),e.value=e.value.replace(/[^А-Яа-яЁё/\s-]|/g,"")),e.matches('textarea[name="message"]')&&(e.setAttribute("type","text"),e.value=e.value.replace(/[^А-Яа-яЁё\s().,!?'";:-]/g,""))}))};var o,a,i,c;i=document.querySelector(".modal-callback"),c=document.querySelector(".modal-overlay"),document.addEventListener("click",(function(t){(t.target.matches(".callback-btn")||t.target.closest(".mob-menu-btn")||t.target.matches(".button-services")||t.target.matches(".services-elements a"))&&(i.style.display="block",c.style.display="block"),(t.target.closest(".modal-close")||t.target.matches(".modal-overlay"))&&(i.style.display="none",c.style.display="none")})),o=document.querySelector(".up"),a=document.querySelector(".services-section"),document.addEventListener("click",(function(t){var e,n,r,o;t.target.matches(".top-menu>ul>li>a")&&(t.preventDefault(),e=t.target.getAttribute("href"),n=document.querySelector(e),r=document.querySelector(".header").offsetHeight,o=n.getBoundingClientRect().top-r,window.scrollBy({top:o,behavior:"smooth"})),t.target.matches(".up")&&document.querySelector(".main-wrapper").scrollIntoView({behavior:"smooth",block:"start"})})),window.addEventListener("scroll",(function(){0===document.documentElement.scrollTop&&(o.style.visibility="hidden"),document.documentElement.scrollTop+300>a.getBoundingClientRect().top&&(o.style.visibility="visible")})),r("form-callback"),r("form-feedback"),r("form-application")})();