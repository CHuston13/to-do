(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>u});var r=t(645),o=t.n(r),i=t(667),a=t.n(i),c=t(846),d=o()((function(e){return e[1]})),s=a()(c);d.push([e.id,"\nhtml{\n    margin: 0;\n    padding: 0;\n}\nbody{\n    margin: 0;\n    padding: 0;\n}\n\n.background{\n    margin: 0;\n    padding: 0;\n    white-space: none;\n    background: url("+s+");\n   height: 70vh;\n    position: absolute;\n}\n\n\n.innerSection{\n    width: 60vw;\n    height: 60vh;\n    background: black;\n    position: absolute;\n    margin-left: 20vw;\n    margin-top: 25vh;\n}\n\n.homebutton{\n    background:transparent;\n    background-repeat: no-repeat;\n    border: none;\n    color: aqua;\n    margin-top: 5vh;\n    margin-left: 5vw;\n\n}",""]);const u=d},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),i=[];function a(e){for(var n=-1,t=0;t<i.length;t++)if(i[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],s=t[d]||0,u="".concat(d," ").concat(s);t[d]=s+1;var l=a(u),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(i[l].references++,i[l].updater(p)):i.push({identifier:u,updater:m(p,n),references:1}),r.push(u)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var s,u=(s=[],function(e,n){return s[e]=n,s.filter(Boolean).join("\n")});function l(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function m(e,n){var t,r,o;if(n.singleton){var i=h++;t=f||(f=d(n)),r=l.bind(null,t,i,!1),o=l.bind(null,t,i,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var d=c(e,n),s=0;s<t.length;s++){var u=a(t[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}t=d}}}},987:(e,n,t)=>{var r=t(379),o=t.n(r),i=t(426);o()(i.Z,{insert:"head",singleton:!1}),i.Z.locals;var a=t(846),c=t(497);document.body.appendChild(function(){const e=document.createElement("div");e.id="first-born";const n=document.createElement("div");n.id="second-born";const t=document.createElement("button"),r=document.createTextNode("Home"),o=document.createElement("button");o.innerHTML="Add";const i=new Image;return i.src=a,e.appendChild(n),e.appendChild(i),n.appendChild(t),t.appendChild(r),n.appendChild(o),e.classList.add("background","html","body"),n.classList.add("innerSection","*"),t.classList.add("homebutton"),o.onclick=c.Z,e}())},497:(e,n,t)=>{function r(){const e=document.createElement("div");e.id="containers";const n=document.createElement("input");n.id="first",n.setAttribute("type","text");const t=document.createElement("input");t.id="second",t.setAttribute("type","date");const r=document.getElementById("second-born"),i=document.createElement("button");return i.innerHTML="submit",i.onclick=o,r.appendChild(e),e.appendChild(n),e.appendChild(t),e.appendChild(i),i}function o(){document.getElementById("containers").innerHTML=""}t.d(n,{Z:()=>r})},846:(e,n,t)=>{e.exports=t.p+"02c2d963ae35e76c6f28.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,t(987),t(497)})();