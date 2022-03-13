"use strict";(self.webpackChunkportfolio3=self.webpackChunkportfolio3||[]).push([[678],{2257:function(t,e,i){i.r(e),i.d(e,{default:function(){return M}});var n=i(7294),o=function(t,e,i){var o=(0,n.useState)(null),r=o[0],a=o[1];return(0,n.useEffect)((function(){var n=t.map((function(t){return window.matchMedia(t)})),o=function(){var t=n.findIndex((function(t){return t.matches}));return void 0!==e[t]?e[t]:i};a(o);var r=function(){return a(o)};return n.forEach((function(t){return t.addListener(r)})),function(){return n.forEach((function(t){return t.removeListener(r)}))}}),[i,t,e]),r},r=function(){var t=(0,n.useState)("dark"),e=t[0],i=t[1],r=o(["(prefers-color-scheme: dark)"],[!0],!1);return(0,n.useEffect)((function(){var t=window.localStorage.getItem("theme");t?(window.localStorage.setItem("theme",t),i(t)):i(r?"dark":"light")}),[r]),[e,function(){"light"===e?(window.localStorage.setItem("theme","dark"),i("dark")):(window.localStorage.setItem("theme","light"),i("light"))}]},a=(0,n.createContext)("dark"),g=function(t){var e=t.children,i=r(),o=i[0],g=i[1];return n.createElement(a.Provider,{value:{theme:o,toggleTheme:g}},e)},d=i(9),m=d.default.div.withConfig({displayName:"Container",componentId:"sc-1nfj34i-0"})(["max-width:1280px;margin:0 auto;width:90%;@media (min-width:601px){width:90%;}@media (min-width:993px){width:80%;}"]),l=d.default.div.withConfig({displayName:"style__Wrapper",componentId:"sc-13raz1t-0"})(["padding-bottom:4rem;background-image:url(",");background-size:contain;background-position:right top;background-repeat:no-repeat;"],"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4MzcuMyA3MDMuNyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6I2VmZWVmZn08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwczE0Ny44IDEwMC44IDY3LjUgMzAwLjNTNjIwIDM3Ny41IDYyMCAzNzcuNWwtMjQuMiAxODAuNCA0MC42IDEzMS41IDIwMS02Mi44VjB6IiBjbGFzcz0iYSIvPjxwYXRoIGQ9Ik00MzkuNCAzMTAuOWMtNDUuMS0xLjYtODgtMTYuMS0xMjktMzJzLTgxLjUtMzMuNi0xMjUuNS00MmMtMjguMy01LjQtNjAuNy02LjItODMuNCA5LTIyIDE0LjYtMjkgMzkuNy0zMi45IDYzLjEtMi44IDE3LjYtNC41IDM2LjEgMy4zIDUyLjYgNS41IDExLjQgMTUuMiAyMSAyMS45IDMyIDIzLjMgMzggNi44IDg1LTE4LjUgMTIyLjItMTEuOCAxNy41LTI1LjUgMzQuMS0zNC43IDUyLjdzLTEzLjMgMzkuOC01LjMgNTguOEM0My4yIDY0NiA2MiA2NjAuMiA4Mi41IDY3MGM0MS42IDIwLjEgOTAuNSAyNiAxMzguMyAyOS4yIDEwNS43IDcuMiAyMTIgNCAzMTggMWE5MzQgOTM0IDAgMCAwIDExNy4xLTguNGMyMS40LTMuNCA0My41LTguOCA1OS4xLTIxLjZhNDkuNSA0OS41IDAgMCAwIDExLjQtNjQuN2MtMjIuMi0zNC40LTgzLjUtNDMtOTktODAtOC42LTIwLjMuMi00MyAxMi42LTYxLjkgMjYuNi00MC41IDcxLjItNzYgNzMuNi0xMjIuMyAxLjYtMzEuOC0xOS45LTYzLjYtNTMtNzguNkM2MjUuOCAyNDcgNTc3LjYgMjQ5IDU1MiAyNzVjLTI2LjUgMjYuOC03Mi45IDM3LjItMTEyLjYgMzUuOHoiIGNsYXNzPSJhIi8+PC9zdmc+"),p=d.default.div.withConfig({displayName:"style__IntroWrapper",componentId:"sc-13raz1t-1"})(["padding:4rem 0;display:flex;align-items:center;justify-content:space-between;@media (max-width:960px){flex-direction:column;}"]),f=d.default.div.withConfig({displayName:"style__Details",componentId:"sc-13raz1t-2"})(["flex:1;@media (max-width:960px){width:100%;margin-bottom:2rem;}h1{margin-bottom:2rem;font-size:36pt;color:",";@media (max-width:960px){mix-blend-mode:",";}@media (max-width:680px){font-size:30pt;}}h4{margin-bottom:2.5rem;font-size:32pt;font-weight:normal;color:",";@media (max-width:960px){mix-blend-mode:",";}@media (max-width:680px){font-size:26pt;}}"],(function(t){return"light"===t.theme?"#212121":"#fff"}),(function(t){return"light"===t.theme?"unset":"difference"}),(function(t){return"light"===t.theme?"#707070":"#e6e6e6"}),(function(t){return"light"===t.theme?"unset":"difference"})),h=d.default.div.withConfig({displayName:"style__Thumbnail",componentId:"sc-13raz1t-3"})(["flex:1;@media (max-width:960px){width:100%;}img{width:100%;}"]),c=i.p+"static/dev-dda71369b1d83c77ddbf45af57f9630c.svg",s=function(){var t=(0,n.useContext)(a).theme;return console.log(t),n.createElement(l,null,n.createElement(p,{as:m},n.createElement(f,{theme:t},n.createElement("h1",null,"Hi There!"),n.createElement("h4",null,"I’m Hardik and I’m a Software Developer")),n.createElement(h,null,n.createElement("img",{src:c,alt:"I’m John and I’m a JAMStack engineer!"}))))},u=(0,d.createGlobalStyle)(["html{font-family:'Roboto',Helvetica,sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;article,aside,details,figcaption,figure,footer,header,main,menu,nav,section,summary{display:block;}audio,canvas,progress,video{display:inline-block;}audio:not([controls]){display:none;height:0;}progress{vertical-align:baseline;}[hidden],template{display:none;}a{background-color:transparent;-webkit-text-decoration-skip:objects;}a:active,a:hover{outline-width:0;}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted;}b,strong{font-weight:inherit;font-weight:bolder;}dfn{font-style:italic;}h1{font-size:2em;margin:0.67em 0;}mark{background-color:#ff0;color:#000;}small{font-size:80%;}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline;}sub{bottom:-0.25em;}sup{top:-0.5em;}img{border-style:none;}svg:not(:root){overflow:hidden;}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em;}figure{margin:1em 40px;}hr{box-sizing:content-box;height:0;overflow:visible;}button,input,optgroup,select,textarea{font:inherit;margin:0;}optgroup{font-weight:700;}button,input{overflow:visible;}button,select{text-transform:none;}[type='reset'],[type='submit'],button,html [type='button']{-webkit-appearance:button;}[type='button']::-moz-focus-inner,[type='reset']::-moz-focus-inner,[type='submit']::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0;}[type='button']:-moz-focusring,[type='reset']:-moz-focusring,[type='submit']:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText;}fieldset{border:1px solid silver;margin:0 2px;padding:0.35em 0.625em 0.75em;}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal;}textarea{overflow:auto;}[type='checkbox'],[type='radio']{box-sizing:border-box;padding:0;}[type='number']::-webkit-inner-spin-button,[type='number']::-webkit-outer-spin-button{height:auto;}[type='search']{-webkit-appearance:textfield;outline-offset:-2px;}[type='search']::-webkit-search-cancel-button,[type='search']::-webkit-search-decoration{-webkit-appearance:none;}::-webkit-input-placeholder{color:inherit;opacity:0.54;}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit;}html{font:112.5%/1.45em georgia,serif;box-sizing:border-box;overflow-y:scroll;}*{box-sizing:inherit;}*:before{box-sizing:inherit;}*:after{box-sizing:inherit;}img{max-width:100%;margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}h1{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:2.25rem;line-height:1.1;}h2{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.62671rem;line-height:1.1;}h3{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1.38316rem;line-height:1.1;}h4{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:1rem;line-height:1.1;}h5{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.85028rem;line-height:1.1;}h6{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;color:inherit;font-weight:bold;text-rendering:optimizeLegibility;font-size:0.78405rem;line-height:1.1;}hgroup{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}ul{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}ol{margin-left:1.45rem;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;list-style-position:outside;list-style-image:none;}dl{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}dd{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}p{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}figure{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}pre{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:0.85rem;line-height:1.42;background:hsla(0,0%,0%,0.04);border-radius:3px;overflow:auto;word-wrap:normal;padding:1.45rem;}table{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;font-size:1rem;line-height:1.45rem;border-collapse:collapse;width:100%;}fieldset{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}blockquote{margin-left:1.45rem;margin-right:1.45rem;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}form{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}noscript{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}iframe{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}hr{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:calc(1.45rem - 1px);background:hsla(0,0%,0%,0.2);border:none;height:1px;}address{margin-left:0;margin-right:0;margin-top:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;margin-bottom:1.45rem;}b{font-weight:bold;}strong{font-weight:bold;}dt{font-weight:bold;}th{font-weight:bold;}li{margin-bottom:calc(1.45rem / 2);}ol li{padding-left:0;}ul li{padding-left:0;}li > ol{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}li > ul{margin-left:1.45rem;margin-bottom:calc(1.45rem / 2);margin-top:calc(1.45rem / 2);}blockquote *:last-child{margin-bottom:0;}li *:last-child{margin-bottom:0;}p *:last-child{margin-bottom:0;}li > p{margin-bottom:calc(1.45rem / 2);}code{font-size:0.85rem;line-height:1.45rem;}kbd{font-size:0.85rem;line-height:1.45rem;}samp{font-size:0.85rem;line-height:1.45rem;}abbr{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}acronym{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;}abbr[title]{border-bottom:1px dotted hsla(0,0%,0%,0.5);cursor:help;text-decoration:none;}thead{text-align:left;}td,th{text-align:left;border-bottom:1px solid hsla(0,0%,0%,0.12);font-feature-settings:'tnum';-moz-font-feature-settings:'tnum';-ms-font-feature-settings:'tnum';-webkit-font-feature-settings:'tnum';padding-left:0.96667rem;padding-right:0.96667rem;padding-top:0.725rem;padding-bottom:calc(0.725rem - 1px);}th:first-child,td:first-child{padding-left:0;}th:last-child,td:last-child{padding-right:0;}tt,code{background-color:hsla(0,0%,0%,0.04);border-radius:3px;font-family:'SFMono-Regular',Consolas,'Roboto Mono','Droid Sans Mono','Liberation Mono',Menlo,Courier,monospace;padding:0;padding-top:0.2em;padding-bottom:0.2em;}pre code{background:none;line-height:1.42;}code:before,code:after,tt:before,tt:after{letter-spacing:-0.2em;content:' ';}pre code:before,pre code:after,pre tt:before,pre tt:after{content:'';}@media only screen and (max-width:480px){html{font-size:100%;}}body{margin:0;padding:0;font-family:'Roboto',Helvetica,sans-serif;color:",";background-color:",";transition:.3s all;font-weight:normal;word-wrap:break-word;font-kerning:normal;-moz-font-feature-settings:'kern','liga','clig','calt';-ms-font-feature-settings:'kern','liga','clig','calt';-webkit-font-feature-settings:'kern','liga','clig','calt';font-feature-settings:'kern','liga','clig','calt';}a{text-decoration:none;}input,select,textarea,button{&:focus{outline:none;}}}"],(function(t){return"light"===t.theme?"hsla(0, 0%, 0%, 0.8)":"#fff"}),(function(t){return"light"===t.theme?"#fff":"#212121"})),b=function(t){var e=t.children,i=(0,n.useContext)(a).theme;return n.createElement(n.Fragment,null,n.createElement(u,{theme:i}),e)},M=function(){return n.createElement(g,null,n.createElement(b,null,n.createElement(s,null)))}}}]);
//# sourceMappingURL=component---src-pages-index-js-595cd0bfa6c5dfdb685b.js.map