(self.webpackChunkportfolio3=self.webpackChunkportfolio3||[]).push([[351],{2993:function(t){var e="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var l,c,d,s;if(Array.isArray(t)){if((l=t.length)!=a.length)return!1;for(c=l;0!=c--;)if(!o(t[c],a[c]))return!1;return!0}if(n&&t instanceof Map&&a instanceof Map){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;for(s=t.entries();!(c=s.next()).done;)if(!o(c.value[1],a.get(c.value[0])))return!1;return!0}if(r&&t instanceof Set&&a instanceof Set){if(t.size!==a.size)return!1;for(s=t.entries();!(c=s.next()).done;)if(!a.has(c.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(a)){if((l=t.length)!=a.length)return!1;for(c=l;0!=c--;)if(t[c]!==a[c])return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((l=(d=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(c=l;0!=c--;)if(!Object.prototype.hasOwnProperty.call(a,d[c]))return!1;if(e&&t instanceof Element)return!1;for(c=l;0!=c--;)if(("_owner"!==d[c]&&"__v"!==d[c]&&"__o"!==d[c]||!t.$$typeof)&&!o(t[d[c]],a[d[c]]))return!1;return!0}return t!=t&&a!=a}t.exports=function(t,e){try{return o(t,e)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(t,e,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=!("undefined"==typeof window||!window.document||!window.document.createElement);t.exports=function(t,e,n){if("function"!=typeof t)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof e)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c,d=[];function s(){c=t(d.map((function(t){return t.props}))),u.canUseDOM?e(c):n&&(c=n(c))}var u=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n,i.peek=function(){return c},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var t=c;return c=void 0,d=[],t};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){d.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var t=d.indexOf(this);d.splice(t,1),s()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(u,"displayName","SideEffect("+function(t){return t.displayName||t.name||"Component"}(r)+")"),a(u,"canUseDOM",l),u}}},3155:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(7294),i=n(4199),o=(0,n(9).createGlobalStyle)(["html{font-family:'Roboto',Helvetica,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;}audio:not([controls]){display:none;height:0;}progress{vertical-align:baseline;}[hidden],template{display:none;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}a:active,a:hover{outline-width:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;font-weight:bolder;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}svg:not(:root){overflow:hidden;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}button,input,optgroup,select,textarea{font:inherit;margin:0;}optgroup{font-weight:700;}button,input{overflow:visible;}button,select{text-transform:none;}[type='reset'],[type='submit'],button,html [type='button']{-webkit-appearance:button;}[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}fieldset{border:1px solid silver;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}h1{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:2.25rem;line-height:1.1;}h2{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.62671rem;line-height:1.1;}h3{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.38316rem;line-height:1.1;}h4{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.1;}h5{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.85028rem;line-height:1.1;}h6{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.78405rem;line-height:1.1;}hgroup{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}ul{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}ol{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}dl{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}dd{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}p{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}figure{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}form{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}noscript{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}iframe{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}hr{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:calc(1.45rem - 1px);background:hsla(0,0%,0%,0.2);border:none;height:1px;}address{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}b{font-weight:bold;}strong{font-weight:bold;}dt{font-weight:bold;}th{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li > ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li > ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li > p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}kbd{font-size:0.85rem;line-height:1.45rem;}samp{font-size:0.85rem;line-height:1.45rem;}abbr{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}acronym{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}abbr[title]{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;text-decoration:none;}thead{text-align:left;}td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:'tnum';-moz-font-feature-settings:'tnum';-ms-font-feature-settings:'tnum';-webkit-font-feature-settings:'tnum';padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}th:first-child,td:first-child{padding-left:0;}th:last-child,td:last-child{padding-right:0;}tt,code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:'SFMono-Regular',Consolas,'Roboto Mono','Droid Sans Mono','Liberation Mono',Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:' ';}pre code:before,pre code:after,pre tt:before,pre tt:after{content:'';}@media only screen and (max-width:480px){html{font-size:100%;}}body{margin:0;padding:0;font-family:'Roboto',Helvetica,sans-serif;color:",";background-color:",";transition:.3s all;font-weight:normal;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:'kern','liga','clig','calt';-ms-font-feature-settings:'kern','liga','clig','calt';-webkit-font-feature-settings:'kern','liga','clig','calt';font-feature-settings:'kern','liga','clig','calt';}a{text-decoration:none;}input,select,textarea,button{&:focus{outline:none;}}}"],(function(t){return"light"===t.theme?"hsla(0, 0%, 0%, 0.8)":"#fff"}),(function(t){return"light"===t.theme?"#fff":"#212121"})),a=function(t){var e=t.children,n=(0,r.useContext)(i.N).theme;return r.createElement(r.Fragment,null,r.createElement(o,{theme:n}),e)}},3785:function(t,e,n){"use strict";n.d(e,{Z:function(){return wt}});var r,i,o,a,l=n(7294),c=n(5697),d=n.n(c),s=n(4839),u=n.n(s),p=n(2993),m=n.n(p),g=n(6494),f=n.n(g),h="bodyAttributes",b="htmlAttributes",y="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(t){return w[t]})),"charset"),T="cssText",k="href",x="http-equiv",E="innerHTML",C="itemprop",A="name",S="property",O="rel",L="src",j="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",M="encodeSpecialCharacters",N="onChangeClientState",R="titleTemplate",D=Object.keys(z).reduce((function(t,e){return t[z[e]]=e,t}),{}),H=[w.NOSCRIPT,w.SCRIPT,w.STYLE],_="data-react-helmet",q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},B=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},F=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),Y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},U=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},K=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},Z=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===e?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(t){var e=Q(t,w.TITLE),n=Q(t,R);if(n&&e)return n.replace(/%s/g,(function(){return Array.isArray(e)?e.join(""):e}));var r=Q(t,P);return e||r||void 0},W=function(t){return Q(t,N)||function(){}},G=function(t,e){return e.filter((function(e){return void 0!==e[t]})).map((function(e){return e[t]})).reduce((function(t,e){return Y({},t,e)}),{})},$=function(t,e){return e.filter((function(t){return void 0!==t[w.BASE]})).map((function(t){return t[w.BASE]})).reverse().reduce((function(e,n){if(!e.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==t.indexOf(o)&&n[o])return e.concat(n)}return e}),[])},J=function(t,e,n){var r={};return n.filter((function(e){return!!Array.isArray(e[t])||(void 0!==e[t]&&rt("Helmet: "+t+' should be of type "Array". Instead found type "'+q(e[t])+'"'),!1)})).map((function(e){return e[t]})).reverse().reduce((function(t,n){var i={};n.filter((function(t){for(var n=void 0,o=Object.keys(t),a=0;a<o.length;a++){var l=o[a],c=l.toLowerCase();-1===e.indexOf(c)||n===O&&"canonical"===t[n].toLowerCase()||c===O&&"stylesheet"===t[c].toLowerCase()||(n=c),-1===e.indexOf(l)||l!==E&&l!==T&&l!==C||(n=l)}if(!n||!t[n])return!1;var d=t[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][d]&&(i[n][d]=!0,!0)})).reverse().forEach((function(e){return t.push(e)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var l=o[a],c=f()({},r[l],i[l]);r[l]=c}return t}),[]).reverse()},Q=function(t,e){for(var n=t.length-1;n>=0;n--){var r=t[n];if(r.hasOwnProperty(e))return r[e]}return null},X=(r=Date.now(),function(t){var e=Date.now();e-r>16?(r=e,t(e)):setTimeout((function(){X(t)}),0)}),tt=function(t){return clearTimeout(t)},et="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:n.g.requestAnimationFrame||X,nt="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||tt:n.g.cancelAnimationFrame||tt,rt=function(t){return console&&"function"==typeof console.warn&&console.warn(t)},it=null,ot=function(t,e){var n=t.baseTag,r=t.bodyAttributes,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.onChangeClientState,d=t.scriptTags,s=t.styleTags,u=t.title,p=t.titleAttributes;ct(w.BODY,r),ct(w.HTML,i),lt(u,p);var m={baseTag:dt(w.BASE,n),linkTags:dt(w.LINK,o),metaTags:dt(w.META,a),noscriptTags:dt(w.NOSCRIPT,l),scriptTags:dt(w.SCRIPT,d),styleTags:dt(w.STYLE,s)},g={},f={};Object.keys(m).forEach((function(t){var e=m[t],n=e.newTags,r=e.oldTags;n.length&&(g[t]=n),r.length&&(f[t]=m[t].oldTags)})),e&&e(),c(t,g,f)},at=function(t){return Array.isArray(t)?t.join(""):t},lt=function(t,e){void 0!==t&&document.title!==t&&(document.title=at(t)),ct(w.TITLE,e)},ct=function(t,e){var n=document.getElementsByTagName(t)[0];if(n){for(var r=n.getAttribute(_),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(e),l=0;l<a.length;l++){var c=a[l],d=e[c]||"";n.getAttribute(c)!==d&&n.setAttribute(c,d),-1===i.indexOf(c)&&i.push(c);var s=o.indexOf(c);-1!==s&&o.splice(s,1)}for(var u=o.length-1;u>=0;u--)n.removeAttribute(o[u]);i.length===o.length?n.removeAttribute(_):n.getAttribute(_)!==a.join(",")&&n.setAttribute(_,a.join(","))}},dt=function(t,e){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(t+"["+"data-react-helmet]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return e&&e.length&&e.forEach((function(e){var n=document.createElement(t);for(var r in e)if(e.hasOwnProperty(r))if(r===E)n.innerHTML=e.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=e.cssText:n.appendChild(document.createTextNode(e.cssText));else{var l=void 0===e[r]?"":e[r];n.setAttribute(r,l)}n.setAttribute(_,"true"),i.some((function(t,e){return a=e,n.isEqualNode(t)}))?i.splice(a,1):o.push(n)})),i.forEach((function(t){return t.parentNode.removeChild(t)})),o.forEach((function(t){return n.appendChild(t)})),{oldTags:i,newTags:o}},st=function(t){return Object.keys(t).reduce((function(e,n){var r=void 0!==t[n]?n+'="'+t[n]+'"':""+n;return e?e+" "+r:r}),"")},ut=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[z[n]||n]=t[n],e}),e)},pt=function(t,e,n){switch(t){case w.TITLE:return{toComponent:function(){return t=e.title,n=e.titleAttributes,(r={key:t})[_]=!0,i=ut(n,r),[l.createElement(w.TITLE,i,t)];var t,n,r,i},toString:function(){return function(t,e,n,r){var i=st(n),o=at(e);return i?"<"+t+' data-react-helmet="true" '+i+">"+Z(o,r)+"</"+t+">":"<"+t+' data-react-helmet="true">'+Z(o,r)+"</"+t+">"}(t,e.title,e.titleAttributes,n)}};case h:case b:return{toComponent:function(){return ut(e)},toString:function(){return st(e)}};default:return{toComponent:function(){return function(t,e){return e.map((function(e,n){var r,i=((r={key:n})[_]=!0,r);return Object.keys(e).forEach((function(t){var n=z[t]||t;if(n===E||n===T){var r=e.innerHTML||e.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=e[t]})),l.createElement(t,i)}))}(t,e)},toString:function(){return function(t,e,n){return e.reduce((function(e,r){var i=Object.keys(r).filter((function(t){return!(t===E||t===T)})).reduce((function(t,e){var i=void 0===r[e]?e:e+'="'+Z(r[e],n)+'"';return t?t+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===H.indexOf(t);return e+"<"+t+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+t+">")}),"")}(t,e,n)}}}},mt=function(t){var e=t.baseTag,n=t.bodyAttributes,r=t.encode,i=t.htmlAttributes,o=t.linkTags,a=t.metaTags,l=t.noscriptTags,c=t.scriptTags,d=t.styleTags,s=t.title,u=void 0===s?"":s,p=t.titleAttributes;return{base:pt(w.BASE,e,r),bodyAttributes:pt(h,n,r),htmlAttributes:pt(b,i,r),link:pt(w.LINK,o,r),meta:pt(w.META,a,r),noscript:pt(w.NOSCRIPT,l,r),script:pt(w.SCRIPT,c,r),style:pt(w.STYLE,d,r),title:pt(w.TITLE,{title:u,titleAttributes:p},r)}},gt=u()((function(t){return{baseTag:$([k,j],t),bodyAttributes:G(h,t),defer:Q(t,I),encode:Q(t,M),htmlAttributes:G(b,t),linkTags:J(w.LINK,[O,k],t),metaTags:J(w.META,[A,v,x,S,C],t),noscriptTags:J(w.NOSCRIPT,[E],t),onChangeClientState:W(t),scriptTags:J(w.SCRIPT,[L,E],t),styleTags:J(w.STYLE,[T],t),title:V(t),titleAttributes:G(y,t)}}),(function(t){it&&nt(it),t.defer?it=et((function(){ot(t,(function(){it=null}))})):(ot(t),it=null)}),mt)((function(){return null})),ft=(i=gt,a=o=function(t){function e(){return B(this,e),K(this,t.apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.shouldComponentUpdate=function(t){return!m()(this.props,t)},e.prototype.mapNestedChildrenToProps=function(t,e){if(!e)return null;switch(t.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:e};case w.STYLE:return{cssText:e}}throw new Error("<"+t.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},e.prototype.flattenArrayTypeChildren=function(t){var e,n=t.child,r=t.arrayTypeChildren,i=t.newChildProps,o=t.nestedChildren;return Y({},r,((e={})[n.type]=[].concat(r[n.type]||[],[Y({},i,this.mapNestedChildrenToProps(n,o))]),e))},e.prototype.mapObjectTypeChildren=function(t){var e,n,r=t.child,i=t.newProps,o=t.newChildProps,a=t.nestedChildren;switch(r.type){case w.TITLE:return Y({},i,((e={})[r.type]=a,e.titleAttributes=Y({},o),e));case w.BODY:return Y({},i,{bodyAttributes:Y({},o)});case w.HTML:return Y({},i,{htmlAttributes:Y({},o)})}return Y({},i,((n={})[r.type]=Y({},o),n))},e.prototype.mapArrayTypeChildrenToProps=function(t,e){var n=Y({},e);return Object.keys(t).forEach((function(e){var r;n=Y({},n,((r={})[e]=t[e],r))})),n},e.prototype.warnOnInvalidChildren=function(t,e){return!0},e.prototype.mapChildrenToProps=function(t,e){var n=this,r={};return l.Children.forEach(t,(function(t){if(t&&t.props){var i=t.props,o=i.children,a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(t).reduce((function(e,n){return e[D[n]||n]=t[n],e}),e)}(U(i,["children"]));switch(n.warnOnInvalidChildren(t,o),t.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:t,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:e=n.mapObjectTypeChildren({child:t,newProps:e,newChildProps:a,nestedChildren:o})}}})),e=this.mapArrayTypeChildrenToProps(r,e)},e.prototype.render=function(){var t=this.props,e=t.children,n=U(t,["children"]),r=Y({},n);return e&&(r=this.mapChildrenToProps(e,r)),l.createElement(i,r)},F(e,null,[{key:"canUseDOM",set:function(t){i.canUseDOM=t}}]),e}(l.Component),o.propTypes={base:d().object,bodyAttributes:d().object,children:d().oneOfType([d().arrayOf(d().node),d().node]),defaultTitle:d().string,defer:d().bool,encodeSpecialCharacters:d().bool,htmlAttributes:d().object,link:d().arrayOf(d().object),meta:d().arrayOf(d().object),noscript:d().arrayOf(d().object),onChangeClientState:d().func,script:d().arrayOf(d().object),style:d().arrayOf(d().object),title:d().string,titleAttributes:d().object,titleTemplate:d().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var t=i.rewind();return t||(t=mt({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},a);ft.renderStatic=ft.rewind;var ht=ft,bt=n.p+"static/thumbnail-41e447f85ac43bf9b5a985768a7fd591.png",yt=n(3732),wt=function(t){var e=t.title,n=void 0===e?yt.defaultTitle:e,r=t.description,i=void 0===r?yt.defaultDescription:r,o=t.location,a=void 0===o?"":o,c='{ \n\t\t"@context": "http://schema.org",\n\t\t"@type": "Organization",\n\t\t"legalName": "'+yt.legalName+'",\n\t\t"url": "'+yt.url+'",\n\t\t"logo": "'+yt.logo+'",\n\t\t"foundingDate": "'+yt.foundingDate+'",\n\t\t"founders": [{\n\t\t\t"@type": "Person",\n\t\t\t"name": "'+yt.legalName+'"\n\t\t}],\n\t\t"contactPoint": [{\n\t\t\t"@type": "ContactPoint",\n\t\t\t"email": "'+yt.contact.email+'",\n\t\t\t"telephone": "'+yt.contact.phone+'",\n\t\t\t"contactType": "customer service"\n\t\t}],\n\t\t"address": {\n\t\t\t"@type": "PostalAddress",\n\t\t\t"addressLocality": "'+yt.address.city+'",\n\t\t\t"addressRegion": "'+yt.address.region+'",\n\t\t\t"addressCountry": "'+yt.address.country+'",\n\t\t\t"postalCode": "'+yt.address.zipCode+'"\n\t\t},\n\t\t"sameAs": [\n\t\t\t"'+yt.socialLinks.twitter+'",\n\t\t\t"'+yt.socialLinks.google+'",\n\t\t\t"'+yt.socialLinks.youtube+'",\n\t\t\t"'+yt.socialLinks.linkedin+'",\n\t\t\t"'+yt.socialLinks.instagram+'",\n\t\t\t"'+yt.socialLinks.github+'"\n\t\t]\n  \t}';return l.createElement(ht,null,l.createElement("meta",{name:"description",content:i}),l.createElement("meta",{name:"image",content:bt}),l.createElement("meta",{property:"og:url",content:""+yt.url+a+"/?ref=smakosh.com"}),l.createElement("meta",{property:"og:type",content:"website"}),l.createElement("meta",{property:"og:title",content:n}),l.createElement("meta",{property:"og:description",content:i}),l.createElement("meta",{property:"og:image",content:bt}),l.createElement("meta",{property:"fb:app_id",content:yt.social.facebook}),l.createElement("meta",{name:"twitter:card",content:"summary"}),l.createElement("meta",{name:"twitter:creator",content:yt.socialLinks.twitter}),l.createElement("meta",{name:"twitter:site",content:yt.social.twitter}),l.createElement("meta",{name:"twitter:title",content:n}),l.createElement("meta",{name:"twitter:description",content:i}),l.createElement("meta",{name:"twitter:image:src",content:bt}),l.createElement("script",{type:"application/ld+json"},c),l.createElement("link",{rel:"publisher",href:yt.socialLinks.google}),l.createElement("title",null,n),l.createElement("html",{lang:"en",dir:"ltr"}))}},3732:function(t){t.exports={defaultTitle:"Hardik Naik",logo:"https://portfolio.smakosh.com/favicon/favicon-512.png",author:"Hardik Naik",url:"https://portfolio.smakosh.com",legalName:"Hardik Naik",defaultDescription:"I’m Hardik and I’m a Software Developer!",socialLinks:{twitter:"http://www.twitter.com/smakosh",github:"https://github.com/smakosh",linkedin:"https://www.linkedin.com/in/ismail-ghallou-630149122/",instagram:"https://instagram.com/smakosh19",youtube:"https://www.youtube.com/user/smakoshthegamer",google:"https://plus.google.com/u/0/+IsmailSmakoshGhallou"},googleAnalyticsID:"UA-88875900-4",themeColor:"#6b63ff",backgroundColor:"#6b63ff",social:{facebook:"appId",twitter:"@smakosh"},address:{city:"City",region:"Region",country:"Country",zipCode:"ZipCode"},contact:{email:"email",phone:"phone number"},foundingDate:"2018"}},4199:function(t,e,n){"use strict";n.d(e,{N:function(){return a},Z:function(){return l}});var r=n(7294),i=function(t,e,n){var i=(0,r.useState)(null),o=i[0],a=i[1];return(0,r.useEffect)((function(){var r=t.map((function(t){return window.matchMedia(t)})),i=function(){var t=r.findIndex((function(t){return t.matches}));return void 0!==e[t]?e[t]:n};a(i);var o=function(){return a(i)};return r.forEach((function(t){return t.addListener(o)})),function(){return r.forEach((function(t){return t.removeListener(o)}))}}),[n,t,e]),o},o=function(){var t=(0,r.useState)("light"),e=t[0],n=t[1],o=i(["(prefers-color-scheme: dark)"],[!0],!1);return(0,r.useEffect)((function(){var t=window.localStorage.getItem("theme");t?(window.localStorage.setItem("theme",t),n(t)):n(o?"dark":"light")}),[o]),[e,function(){"light"===e?(window.localStorage.setItem("theme","dark"),n("dark")):(window.localStorage.setItem("theme","light"),n("light"))}]},a=(0,r.createContext)("dark"),l=function(t){var e=t.children,n=o(),i=n[0],l=n[1];return r.createElement(a.Provider,{value:{theme:i,toggleTheme:l}},e)}}}]);
//# sourceMappingURL=commons-c2c43d51f037cfb42729.js.map