(self.webpackChunkportfolio3=self.webpackChunkportfolio3||[]).push([[678],{8163:function(e,t,i){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=i(1),l=(n=o)&&n.__esModule?n:{default:n};t.default=l.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},l=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=i(2),r=(n=a)&&n.__esModule?n:{default:n},c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return i.smoothScroll=i.smoothScroll.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){i(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var i=function(){return 0};void 0!==this.props.offset&&(i=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var n=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-i(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["offset"]));return r.default.createElement("a",o({},t,{onClick:this.smoothScroll}))}}]),t}(a.Component);t.default=c},function(t,i){t.exports=e},function(e,t,i){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var i,n=e.HTMLElement||e.Element,o={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||r,scrollIntoView:n.prototype.scrollIntoView},l=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,a=(i=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(i)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?p.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):o.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?o.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):p.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;p.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):o.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var i=u(this),n=i.getBoundingClientRect(),l=this.getBoundingClientRect();i!==t.body?(p.call(this,i,i.scrollLeft+l.left-n.left,i.scrollTop+l.top-n.top),"fixed"!==e.getComputedStyle(i).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}else o.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function r(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function s(e,t){return"Y"===t?e.clientHeight+a<e.scrollHeight:"X"===t?e.clientWidth+a<e.scrollWidth:void 0}function m(t,i){var n=e.getComputedStyle(t,null)["overflow"+i];return"auto"===n||"scroll"===n}function d(e){var t=s(e,"Y")&&m(e,"Y"),i=s(e,"X")&&m(e,"X");return t||i}function u(e){var i;do{i=(e=e.parentNode)===t.body}while(!1===i&&!1===d(e));return i=null,e}function f(t){var i,n,o,a,r=(l()-t.startTime)/468;a=r=r>1?1:r,i=.5*(1-Math.cos(Math.PI*a)),n=t.startX+(t.x-t.startX)*i,o=t.startY+(t.y-t.startY)*i,t.method.call(t.scrollable,n,o),n===t.x&&o===t.y||e.requestAnimationFrame(f.bind(e,t))}function p(i,n,a){var c,s,m,d,u=l();i===t.body?(c=e,s=e.scrollX||e.pageXOffset,m=e.scrollY||e.pageYOffset,d=o.scroll):(c=i,s=i.scrollLeft,m=i.scrollTop,d=r),f({scrollable:c,method:d,startTime:u,startX:s,startY:m,x:n,y:a})}}}}()}])},e.exports=n(i(7294))},3049:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return ue}});var n=i(7294),o=i(9),l=o.default.div.withConfig({displayName:"Container",componentId:"sc-1nfj34i-0"})(["max-width:1280px;margin:0 auto;width:90%;@media (min-width:601px){width:90%;}@media (min-width:993px){width:80%;}"]),a=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1cxkzhy-0"})(["background-size:contain;background-position:left top;background-repeat:no-repeat;"]),r=o.default.div.withConfig({displayName:"style__SkillsWrapper",componentId:"sc-1cxkzhy-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column-reverse;}"]),c=o.default.div.withConfig({displayName:"style__Thumbnail",componentId:"sc-1cxkzhy-2"})(["flex:1;width:100%;margin-bottom:2rem;@media (min-width:960px){min-width:500px;}img{width:100%;}"]),s=o.default.div.withConfig({displayName:"style__DetailsWrapper",componentId:"sc-1cxkzhy-3"})(["padding-left:2rem;"]),m=o.default.div.withConfig({displayName:"style__Details",componentId:"sc-1cxkzhy-4"})(["flex:1;display:flex;gap:1.5rem;justify-content:center;flex-wrap:wrap;@media (max-width:960px){padding-left:unset;width:100%;}"]),d=o.default.div.withConfig({displayName:"style__DetailWrapper",componentId:"sc-1cxkzhy-5"})(["font-size:20pt;font-weight:normal;line-height:1.3;color:",";display:flex;gap:1rem;mix-blend-mode:",";}"],(function(e){return"dark"===e.theme?"#c7c7c7":"#707070"}),(function(e){e.theme;return"inherit"})),u=i.p+"static/about-cb4c548f794e0a22b4d599d0fc4e46f2.png",f=i(4199),p=JSON.parse('[{"id":0,"name":"React","icon":"/skillIcons/react.svg"},{"id":1,"name":"Angular","icon":"/skillIcons/angular.svg"},{"id":3,"name":"NextJs","icon":"/skillIcons/nextjs.svg"},{"id":4,"name":"Gatsby","icon":"/skillIcons/gatsby.svg"},{"id":5,"name":"SpringBoot","icon":"/skillIcons/springboot.svg"},{"id":6,"name":"Typescript","icon":"/skillIcons/typescript.svg"},{"id":7,"name":"Javascript","icon":"/skillIcons/javascript.svg"},{"id":8,"name":"FramerMotion","icon":"/skillIcons/framermotion.svg"},{"id":9,"name":"HighCharts","icon":"/skillIcons/highchart.svg"},{"id":10,"name":"ChartJs","icon":"/skillIcons/chartjs.svg"}]'),g=i(3732),h=i.n(g),I=function(){var e=(0,n.useContext)(f.N).theme;return n.createElement(a,{id:"skills"},n.createElement(r,{as:l},n.createElement(c,null,n.createElement("img",{src:u,alt:"I’m Hardik and I’m a software developer"})),n.createElement(s,null,n.createElement("h2",null,"Skills"),n.createElement(m,{theme:e},p.map((function(e){var t=e.id,i=e.name,o=e.icon;return n.createElement(d,{key:t},n.createElement("img",{width:"24",src:""+g.pathPrefix+o,alt:""}),n.createElement("div",null,i))}))))))},y=i(3785),M=JSON.parse('[{"id":0,"name":"Github","link":"https://github.com/mehardiknaik","icon":"/icons/github.svg"},{"id":1,"name":"Twitter","link":"https://twitter.com/hardiknaik7444","icon":"/icons/twitter.svg"}]'),x=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1fu0pwm-0"})(["padding:28rem 0 4rem 0;background-image:url(",");background-size:cover;background-position:top;background-repeat:no-repeat;@media (max-width:1960px){padding:14rem 0 4rem;}"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTIyLjAwMiA0NDguMTQ1Ij4NCiAgPGRlZnM+DQogICAgPHN0eWxlPg0KICAgICAgLmNscy0xLCAuY2xzLTIsIC5jbHMtMyB7DQogICAgICAgIGZpbGw6ICNlZmVlZmY7DQogICAgICB9DQoNCiAgICAgIC5jbHMtMSB7DQogICAgICAgIG9wYWNpdHk6IDAuNDAxOw0KICAgICAgfQ0KDQogICAgICAuY2xzLTIgew0KICAgICAgICBvcGFjaXR5OiAwLjIxNzsNCiAgICAgIH0NCiAgICA8L3N0eWxlPg0KICA8L2RlZnM+DQogIDxnIGlkPSJHcm91cF8yMyIgZGF0YS1uYW1lPSJHcm91cCAyMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xNTggLTMwMzQuMTA0KSI+DQogICAgPHBhdGggaWQ9IlBhdGhfMjkwIiBkYXRhLW5hbWU9IlBhdGggMjkwIiBjbGFzcz0iY2xzLTEiIGQ9Ik0tMTkuMTU4LDMyNjAuMjM3czI1NC43ODQtOTkuMyw2MDMuMjU2LDAsOTgwLjU4Ny0xMTcuODc4LDk4MC41ODctMTE3Ljg3OCw2MS40NTUtMzYuMjQ5LDE4NC44ODctMjEuODc5Yy4xNjcuMDUzLS4yMjIsNDAzLjE1NywwLDQwMi4zM2wtNzk2LjUtMTIuOTc4LTk3Mi4yMjcsMTMuNDE3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTcxIC00MSkiLz4NCiAgICA8cGF0aCBpZD0iUGF0aF8yOTkiIGRhdGEtbmFtZT0iUGF0aCAyOTkiIGNsYXNzPSJjbHMtMiIgZD0iTS0xOS4xNTgsMzI2MC4yMzdzMjU0Ljc4NC05OS4zLDYwMy4yNTYsMCw5ODAuNTg3LTExNy44NzgsOTgwLjU4Ny0xMTcuODc4LDIxNC42ODMtMzYuMjU2LDMzOC4xMTUtMjEuODg3Yy4xNjcuMDUzLS4yMjIsNDAzLjE1NywwLDQwMi4zM2wtOTQ5LjczMS0xMi45NzEtOTcyLjIyNywxMy40MTdaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOSAtODMpIi8+DQogICAgPHBhdGggaWQ9IlBhdGhfMjg5IiBkYXRhLW5hbWU9IlBhdGggMjg5IiBjbGFzcz0iY2xzLTMiIGQ9Ik00NC4yODcsMzI0My44MmM5Ni41LTIyLjk2MSwyOTUuMTgzLTUzLjI4OCw1MzkuODExLDE2LjQxNywzNDguNDcyLDk5LjMsOTgwLjU4Ny0xMTcuODc4LDk4MC41ODctMTE3Ljg3OHMxMTguNTQ5LTc4LjQ5NCwzNTYuOSwyMS4wNDFhMjUzLjk0NywyNTMuOTQ3LDAsMCwxLDQzLjE0NywyMi42OTNjLjI2NywxLjAxOS0uMTM1LDMxNC42NzMsMCwzMTMuNDQ3LS4zODQtLjM2Mi0xOTIwLjQ0NS42MDctMTkyMC40NDUuNjA3UzQ0LjQ0OSwzMjQzLjc5Miw0NC4yODcsMzI0My44MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC00NCAtMTgpIi8+DQogIDwvZz4NCjwvc3ZnPg0K"),w=o.default.div.withConfig({displayName:"style__Flex",componentId:"sc-1fu0pwm-1"})(["display:flex;align-items:flex-end;justify-content:space-between;@media (max-width:680px){flex-direction:column;text-align:center;align-items:center;}"]),v=o.default.div.withConfig({displayName:"style__Links",componentId:"sc-1fu0pwm-2"})(["display:flex;align-items:center;gap:1.5rem;a{margin:0 0.5rem;img{margin:0;}&:first-child,&:last-child{margin:0;}}"]),N=o.default.div.withConfig({displayName:"style__Details",componentId:"sc-1fu0pwm-3"})(["h2,a,span{color:#212121;}@media (max-width:680px){margin-bottom:2rem;}"]),b=function(){return n.createElement(x,null,n.createElement(w,{as:l},n.createElement(N,null,n.createElement("h2",null,"Hardik Naik"),n.createElement("span",null,"© All rights are reserved | ",(new Date).getFullYear()," | Made with"," ",n.createElement("span",{"aria-label":"love",role:"img"},"💖")," ","by"," ","Hardik Naik")),n.createElement(v,null,M.map((function(e){var t=e.id,i=e.name,o=e.link,l=e.icon;return n.createElement("a",{key:t,href:o,target:"_blank",rel:"noopener noreferrer","aria-label":"follow me on "+i},n.createElement("img",{width:"24",src:""+g.pathPrefix+l,alt:i}))})))))},j=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-14ih3p8-0"})(["display:none;cursor:pointer;transition:left 500ms cubic-bezier(0.6,0.05,0.28,0.91);@media (max-width:960px){display:block;}"]),C=o.default.div.withConfig({displayName:"style__Bar",componentId:"sc-14ih3p8-1"})(["width:1.6rem;height:.15rem;margin-bottom:.3rem;background-color:",";transition:transform 500ms cubic-bezier(0.6,0.05,0.28,0.91),opacity 500ms,box-shadow 250ms,background-color 500ms;@media (max-width:600px){width:1.6rem;}"," "," ",""],(function(e){return"light"===e.theme?"#212121":"#fff"}),(function(e){var t=e.top,i=e.sidebar,n=e.theme;return t&&i&&"\n\t\tbackground-color: "+("light"===n?"#212121":"#fff")+";\n\t\ttransform: translateY(8px) rotate(-135deg);\n\t\t\n\t"}),(function(e){var t=e.mid,i=e.sidebar;return t&&i&&"\n\t\ttransform: scale(0);\n\t\t"}),(function(e){var t=e.bottom,i=e.sidebar,n=e.theme;return t&&i&&"\n\t\t\tbackground-color: "+("light"===n?"#212121":"#fff")+";\n\t\t\ttransform: translateY(-6px) rotate(-45deg);\n\t"})),z=function(e){var t=e.sidebar,i=e.toggle,o=(0,n.useContext)(f.N).theme;return n.createElement(j,{sidebar:t,onClick:function(){return i(!t)}},n.createElement(C,{top:!0,sidebar:t,theme:o}),n.createElement(C,{mid:!0,sidebar:t,theme:o}),n.createElement(C,{bottom:!0,sidebar:t,theme:o}))},E=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-k9ywb9-0"})(["display:flex;gap:1.5rem;flex-direction:",";align-items:center;"],(function(e){return e.isMobile?"column":"row"})),L=i(8163),D=i.n(L),k=o.default.button.withConfig({displayName:"style__Wrapper",componentId:"sc-h4xo9p-0"})(["background:none;border:none;cursor:pointer;transition:1s all;&:focus{outline:none;transition:1s all;}"]),T=function(){var e=(0,n.useContext)(f.N),t=e.theme,i=e.toggleTheme;return n.createElement(k,{type:"button",onClick:i},n.createElement("img",{src:"light"===t?"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItbW9vbiI+PHBhdGggZD0iTTIxIDEyLjc5QTkgOSAwIDEgMSAxMS4yMSAzIDcgNyAwIDAgMCAyMSAxMi43OXoiPjwvcGF0aD48L3N2Zz4=":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9IiNmZmYiIGZpbGw9IiNmZmYiIGxpbmU9IiNmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0iZmVhdGhlciBmZWF0aGVyLXN1biI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iNSI+PC9jaXJjbGU+PGxpbmUgeDE9IjEyIiB5MT0iMSIgeDI9IjEyIiB5Mj0iMyI+PC9saW5lPjxsaW5lIHgxPSIxMiIgeTE9IjIxIiB4Mj0iMTIiIHkyPSIyMyI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iNC4yMiIgeDI9IjUuNjQiIHkyPSI1LjY0Ij48L2xpbmU+PGxpbmUgeDE9IjE4LjM2IiB5MT0iMTguMzYiIHgyPSIxOS43OCIgeTI9IjE5Ljc4Ij48L2xpbmU+PGxpbmUgeDE9IjEiIHkxPSIxMiIgeDI9IjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSIyMSIgeTE9IjEyIiB4Mj0iMjMiIHkyPSIxMiI+PC9saW5lPjxsaW5lIHgxPSI0LjIyIiB5MT0iMTkuNzgiIHgyPSI1LjY0IiB5Mj0iMTguMzYiPjwvbGluZT48bGluZSB4MT0iMTguMzYiIHkxPSI1LjY0IiB4Mj0iMTkuNzgiIHkyPSI0LjIyIj48L2xpbmU+PC9zdmc+DQo=",alt:t}))},A=function(e){var t=e.isMobile,i=void 0!==t&&t;return n.createElement(E,{isMobile:i},n.createElement(D(),{offset:70,href:"#skills"},"Skills"),n.createElement(D(),{offset:70,href:"#projects"},"Projects"),n.createElement(D(),{offset:70,href:"#about"},"About"),n.createElement(T,null))},S=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-10h8sam-0"})(["background:",";height:fit-content;position:fixed;border-radius:1rem;top:1rem;padding:20px;left:50%;transform:translatex(-50%);backdrop-filter:blur(10px);a{text-decoration:none;color:",";}max-width:1280px;width:80%;"],(function(e){return"light"===e.theme?"#ffffff9e":"#36363673"}),(function(e){return"light"===e.theme?"#000":"#fff"})),O=o.default.div.withConfig({displayName:"style__MenuWrapper",componentId:"sc-10h8sam-1"})([""]),_=o.default.div.withConfig({displayName:"style__MenuItemWrapper",componentId:"sc-10h8sam-2"})(["@media (max-width:960px){display:none;}"]),P=o.default.div.withConfig({displayName:"style__HeaderWrapper",componentId:"sc-10h8sam-3"})(["display:flex;justify-content:space-between;align-items:center;"]),Y=o.default.div.withConfig({displayName:"style__MobileMenuWrapper",componentId:"sc-10h8sam-4"})(["transition:max-height .6s ease-out;overflow:hidden;max-height:",";@media (min-width:960px){max-height:0;}"],(function(e){return e.isOpen?"500px":"0px"})),G=(0,o.default)(D()).withConfig({displayName:"style__Title",componentId:"sc-10h8sam-5"})(["font-size:1.5rem;font-weight:bold;@media (max-width:960px){font-size:1.2rem;}"]),H=function(){var e=(0,n.useContext)(f.N).theme,t=(0,n.useState)(!1),i=t[0],o=t[1];return n.createElement(S,{theme:e},n.createElement(P,null,n.createElement(G,{href:"#top"},h().defaultTitle),n.createElement(O,null,n.createElement(_,null,n.createElement(A,null)),n.createElement(z,{sidebar:i,toggle:o}))),n.createElement(Y,{isOpen:i,onClick:function(){return o(!1)}},n.createElement(A,{isMobile:!0})))},W=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-13raz1t-0"})(["padding-bottom:4rem;background-image:url(",");background-size:contain;background-position:right top;background-repeat:no-repeat;"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MzcuMyA3MDMuNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2VmZWVmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwczE0Ny44IDEwMC44IDY3LjUgMzAwLjNTNjIwIDM3Ny41IDYyMCAzNzcuNWwtMjQuMiAxODAuNCA0MC42IDEzMS41IDIwMS02Mi44VjB6IiBjbGFzcz0iYSIvPjxwYXRoIGQ9Ik00MzkuNCAzMTAuOWMtNDUuMS0xLjYtODgtMTYuMS0xMjktMzJzLTgxLjUtMzMuNi0xMjUuNS00MmMtMjguMy01LjQtNjAuNy02LjItODMuNCA5LTIyIDE0LjYtMjkgMzkuNy0zMi45IDYzLjEtMi44IDE3LjYtNC41IDM2LjEgMy4zIDUyLjYgNS41IDExLjQgMTUuMiAyMSAyMS45IDMyIDIzLjMgMzggNi44IDg1LTE4LjUgMTIyLjItMTEuOCAxNy41LTI1LjUgMzQuMS0zNC43IDUyLjdzLTEzLjMgMzkuOC01LjMgNTguOEM0My4yIDY0NiA2MiA2NjAuMiA4Mi41IDY3MGM0MS42IDIwLjEgOTAuNSAyNiAxMzguMyAyOS4yIDEwNS43IDcuMiAyMTIgNCAzMTggMWE5MzQgOTM0IDAgMCAwIDExNy4xLTguNGMyMS40LTMuNCA0My41LTguOCA1OS4xLTIxLjZhNDkuNSA0OS41IDAgMCAwIDExLjQtNjQuN2MtMjIuMi0zNC40LTgzLjUtNDMtOTktODAtOC42LTIwLjMuMi00MyAxMi42LTYxLjkgMjYuNi00MC41IDcxLjItNzYgNzMuNi0xMjIuMyAxLjYtMzEuOC0xOS45LTYzLjYtNTMtNzguNkM2MjUuOCAyNDcgNTc3LjYgMjQ5IDU1MiAyNzVjLTI2LjUgMjYuOC03Mi45IDM3LjItMTEyLjYgMzUuOHoiIGNsYXNzPSJhIi8+PC9zdmc+"),B=o.default.div.withConfig({displayName:"style__IntroWrapper",componentId:"sc-13raz1t-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),Z=o.default.div.withConfig({displayName:"style__Details",componentId:"sc-13raz1t-2"})(["flex:1;@media (max-width:960px){width:100%;margin:2rem 0;}h1{margin-bottom:2rem;font-size:36pt;color:",";@media (max-width:960px){mix-blend-mode:",";}@media (max-width:680px){font-size:30pt;}}h4{margin-bottom:2.5rem;font-size:32pt;font-weight:normal;color:",";@media (max-width:960px){mix-blend-mode:",";}@media (max-width:680px){font-size:26pt;}}"],(function(e){return"light"===e.theme?"#212121":"#fff"}),(function(e){return"light"===e.theme?"unset":"difference"}),(function(e){return"light"===e.theme?"#707070":"#e6e6e6"}),(function(e){return"light"===e.theme?"unset":"difference"})),U=o.default.div.withConfig({displayName:"style__Thumbnail",componentId:"sc-13raz1t-3"})(["flex:1;@media (max-width:960px){width:100%;}img{width:100%;}"]),Q=i.p+"static/dev-dda71369b1d83c77ddbf45af57f9630c.svg",R=function(){var e=(0,n.useContext)(f.N).theme;return console.log(e),n.createElement(W,{id:"top"},n.createElement(B,{as:l},n.createElement(Z,{theme:e},n.createElement("h1",null,"Hi There!"),n.createElement("h4",null,"I’m Hardik and I’m a Software Developer")),n.createElement(U,null,n.createElement("img",{src:Q,alt:"I’m John and I’m a JAMStack engineer!"}))))},J=i(3155),X=i(1597),F=o.default.div.withConfig({displayName:"Card",componentId:"sc-xnng1w-0"})(["padding:1rem;background:",";height:100%;"],(function(e){return"light"===e.theme?"#fff":"#181717"})),V=o.default.div.withConfig({displayName:"Card__TitleWrap",componentId:"sc-xnng1w-1"})(["display:flex;flex-direction:row;justify-content:space-between;"]),K=function(e){var t=e.width,i=void 0===t?16:t,o=e.height,l=void 0===o?16:o,a=e.color,r=void 0===a?"#000":a;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:i,height:l},n.createElement("path",{fill:r,fillRule:"evenodd",d:"M12.672.668a.75.75 0 00-1.345 0L8.27 6.865l-6.838.994a.75.75 0 00-.416 1.279l4.948 4.823-1.168 6.811a.75.75 0 001.088.791L12 18.347l6.117 3.216a.75.75 0 001.088-.79l-1.168-6.812 4.948-4.823a.75.75 0 00-.416-1.28l-6.838-.993L12.672.668z"}))},q=function(e){var t=e.width,i=void 0===t?16:t,o=e.height,l=void 0===o?16:o,a=e.color,r=void 0===a?"#000":a;return n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:i,height:l},n.createElement("path",{fill:r,fillRule:"evenodd",d:"M12 21a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zm-3.25-1.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm-3-12.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM2.5 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zM18.25 6.5a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5zM15 4.75a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0z"}),n.createElement("path",{fill:r,fillRule:"evenodd",d:"M6.5 7.75v1A2.25 2.25 0 008.75 11h6.5a2.25 2.25 0 002.25-2.25v-1H19v1a3.75 3.75 0 01-3.75 3.75h-6.5A3.75 3.75 0 015 8.75v-1h1.5z"}),n.createElement("path",{fill:r,fillRule:"evenodd",d:"M11.25 16.25v-5h1.5v5h-1.5z"}))},$=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1m2oyxl-0"})(["padding:2rem 0;"]),ee=o.default.div.withConfig({displayName:"style__Grid",componentId:"sc-1m2oyxl-1"})(["display:grid;align-items:center;grid-template-columns:repeat(3,1fr);grid-template-rows:8fr;gap:1.2rem 1.2rem;@media (max-width:960px){grid-template-columns:repeat(2,1fr);}@media (max-width:680px){grid-template-columns:1fr;}"]),te=o.default.div.withConfig({displayName:"style__Item",componentId:"sc-1m2oyxl-2"})(["width:100%;height:100%;overflow:hidden;box-shadow:0 1px 6px 0 rgba(0,0,0,0.11);h4{color:",";}p{color:",";}"],(function(e){return"light"===e.theme?"#212121":"#fff"}),(function(e){return"light"===e.theme?"#707070":"#c7c7c7"})),ie=o.default.div.withConfig({displayName:"style__Content",componentId:"sc-1m2oyxl-3"})(["padding:1rem 0;min-height:160px;"]),ne=o.default.div.withConfig({displayName:"style__Stats",componentId:"sc-1m2oyxl-4"})(["display:flex;align-items:center;div{display:flex;&:first-child{margin-right:0.5rem;}img{margin:0;}svg path{fill:",";}span{color:",";margin-left:0.5rem;}}"],(function(e){return"light"===e.theme?"#000":"#fff"}),(function(e){return"light"===e.theme?"#000":"#fff"})),oe=o.default.div.withConfig({displayName:"style__Languages",componentId:"sc-1m2oyxl-5"})(["opacity:0.5;font-size:14px;"]),le=function(){var e=(0,n.useContext)(f.N).theme,t=(0,X.useStaticQuery)("942653819").github.viewer.repositories.edges;return n.createElement($,{as:l,id:"projects"},n.createElement("h2",null,"Projects"),n.createElement(ee,null,t.map((function(t){var i=t.node;return n.createElement(te,{key:i.id,as:"a",href:i.url,target:"_blank",rel:"noopener noreferrer",theme:e},n.createElement(F,{theme:e},n.createElement(ie,null,n.createElement("h4",null,i.name),n.createElement("p",null,i.description)),n.createElement(V,null,n.createElement(ne,{theme:e},n.createElement("div",null,n.createElement(K,{color:"light"===e?"#000":"#fff"}),n.createElement("span",null,i.stargazers.totalCount)),n.createElement("div",null,n.createElement(q,{color:"light"===e?"#000":"#fff"}),n.createElement("span",null,i.forkCount))),n.createElement(ne,{theme:e},n.createElement(oe,null,i.languages.nodes.map((function(e){var t=e.id,i=e.name;return n.createElement("span",{key:t},i)})))))))}))))},ae=o.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1mkq0sm-0"})(["background-image:url(",");background-size:contain;background-position:left top;background-repeat:no-repeat;"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTQuNjIyIDc2OC4yNjUiPg0KICA8ZGVmcz4NCiAgICA8c3R5bGU+DQogICAgICAuY2xzLTEgew0KICAgICAgICBmaWxsOiAjZWZlZWZmOw0KICAgICAgfQ0KICAgIDwvc3R5bGU+DQogIDwvZGVmcz4NCiAgPHBhdGggaWQ9IlBhdGhfMjkiIGRhdGEtbmFtZT0iUGF0aCAyOSIgY2xhc3M9ImNscy0xIiBkPSJNMCwxNDY3Ljg2NFMxMC43NSwxNzE3Ljg4LDE2OC42MzUsMTc2Ny41czM3OS45NDcsMTk3Ljk5NSw0NDEuNDIsMzAyLjE1MVMwLDIyOTguMjkzLDAsMjIwMC44NzUtMS4zMjgsMTQ2Ny4zOCwwLDE0NjcuODY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41OSAtMTQ2Ny44NjQpIi8+DQo8L3N2Zz4NCg=="),re=o.default.div.withConfig({displayName:"style__SkillsWrapper",componentId:"sc-1mkq0sm-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),ce=o.default.div.withConfig({displayName:"style__Details",componentId:"sc-1mkq0sm-2"})(["flex:1;padding-left:2rem;@media (max-width:960px){padding-left:unset;width:100%;}h1{margin-bottom:2rem;font-size:26pt;color:",";@media (max-width:960px){mix-blend-mode:",";}}p{margin-bottom:2.5rem;font-size:20pt;font-weight:normal;line-height:1.3;color:",";@media (max-width:960px){mix-blend-mode:",";}}"],(function(e){return"dark"===e.theme?"#fff":"#212121"}),(function(e){return"light"===e.theme?"unset":"difference"}),(function(e){return"dark"===e.theme?"#c7c7c7":"#707070"}),(function(e){return"light"===e.theme?"unset":"difference"})),se=o.default.div.withConfig({displayName:"style__Thumbnail",componentId:"sc-1mkq0sm-3"})(["flex:1;@media (max-width:960px){width:100%;margin-bottom:2rem;}img{width:100%;}"]),me=i.p+"static/skills-48958018a453f7377389adb47f9752e8.svg",de=function(){var e=(0,n.useContext)(f.N).theme;return n.createElement(ae,{id:"about"},n.createElement(re,{as:l},n.createElement(se,null,n.createElement("img",{src:me,alt:"I’m John and I’m a Backend & Devops engineer!"})),n.createElement(ce,{theme:e},n.createElement("h1",null,"More about me"),n.createElement("p",null,"Hi, i am Hardik i like to develope web applications by using REACT and ANGULAR."))))},ue=function(){return n.createElement(f.Z,null,n.createElement(J.Z,null,n.createElement(y.Z,null),n.createElement(H,null),n.createElement(R,null),n.createElement(I,null),n.createElement(le,null),n.createElement(de,null),n.createElement(b,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-04c30deafb210ceea093.js.map