(self.webpackChunkeslam_hesham=self.webpackChunkeslam_hesham||[]).push([[126],{9713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},2837:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(1506)),i=r(n(5354)),a=r(n(9713)),c=r(n(7294)),l=r(n(5697)),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,(0,a.default)((0,o.default)(t),"state",{theme:"undefined"!=typeof window?window.__theme:null}),t}(0,i.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__onThemeChange=function(){e.setState({theme:window.__theme})}},n.toggleTheme=function(e){window.__setPreferredTheme(e)},n.render=function(){return c.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(c.default.Component);u.propTypes={children:l.default.func.isRequired};var s=u;t.default=s},7441:function(e,t,n){"use strict";var r=n(5318)(n(2837));t.L=r.default},7364:function(e,t,n){"use strict";n.d(t,{Z:function(){return P}});var r=n(7294);var o=!1;if("undefined"!=typeof window){var i={get passive(){o=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var a="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),c=[],l=!1,u=-1,s=void 0,f=void 0,d=void 0,p=function(e){return c.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},m=function(e){var t=e||window.event;return!!p(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){void 0!==d&&(document.body.style.paddingRight=d,d=void 0),void 0!==s&&(document.body.style.overflow=s,s=void 0)},y=function(){if(void 0!==f){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=f.position,document.body.style.top=f.top,document.body.style.left=f.left,window.scrollTo(t,e),f=void 0}},g=function(e,t){if(e){if(!c.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};c=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(c),[n]),a?window.requestAnimationFrame((function(){if(void 0===f){f={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,r=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=r-window.innerHeight;e&&t>=r&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===d){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var r=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);d=document.body.style.paddingRight,document.body.style.paddingRight=r+n+"px"}}void 0===s&&(s=document.body.style.overflow,document.body.style.overflow="hidden")}(t),a&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(u=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-u;!p(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?m(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",m,o?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},b=n(5444),v=n(7441);function w(){return r.createElement(v.L,null,(function(e){var t=e.theme,n=e.toggleTheme;return r.createElement("label",{className:"w-10 h-10  flex items-center justify-center bg-gray-200 rounded dark:bg-gray-800"},r.createElement("input",{type:"checkbox",className:"hidden",onChange:function(e){return n(e.target.checked?"dark":"light")},checked:"dark"===t}),r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",stroke:"currentColor",className:"w-4 h-4 text-gray-800 dark:text-gray-200"},"dark"===t?r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"}):r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"})))}))}var A=n(4942),E=n(7367),T=function(e){var t=e.color,n=void 0===t?"currentColor":t,o=e.direction,i=void 0===o?"left":o,a=e.distance,c=void 0===a?"md":a,l=e.duration,u=void 0===l?.4:l,s=e.easing,f=void 0===s?"cubic-bezier(0, 0, 0, 1)":s,d=e.hideOutline,p=void 0===d||d,m=e.label,h=e.lines,y=void 0===h?3:h,g=e.onToggle,b=e.render,v=e.rounded,w=void 0!==v&&v,A=e.size,T=void 0===A?32:A,C=e.toggle,O=e.toggled,S=(0,r.useState)(!1),j=(0,E.Z)(S,2),x=j[0],P=j[1],M=Math.max(12,Math.min(48,T)),k=Math.round((48-M)/2),L=M/12,I=Math.round(L),R=M/(y*(("lg"===c?.25:"sm"===c?.75:.5)+(3===y?1:1.25))),N=Math.round(R),Q=I*y+N*(y-1),B=Math.round((48-Q)/2),H=parseFloat((M/(3===y?"lg"===c?4.0425:"sm"===c?5.1625:4.6325:"lg"===c?6.7875:"sm"===c?8.4875:7.6675)-(L-I+(R-N))/(3===y?1:2)/(4/3)).toFixed(2)),Y=Math.max(0,u),D={cursor:"pointer",height:"".concat(48,"px"),position:"relative",transition:"".concat(Y,"s ").concat(f),userSelect:"none",width:"".concat(48,"px")},G={background:n,height:"".concat(I,"px"),left:"".concat(k,"px"),position:"absolute"};p&&(D.outline="none"),w&&(G.borderRadius="9em");var U=C||P,z=void 0!==O?O:x;return b({barHeight:I,barStyles:G,burgerStyles:D,easing:f,handler:function(){U(!z),"function"==typeof g&&g(!z)},isLeft:"left"===i,isToggled:z,label:m,margin:N,move:H,time:Y,topOffset:B,width:M})};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,A.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var j=function(e){return r.createElement(T,S({},e,{render:function(e){return r.createElement("div",{className:"hamburger-react","aria-label":e.label,onClick:e.handler,onKeyUp:function(t){return"Enter"===t.key&&e.handler()},role:"button",style:O(O({},e.burgerStyles),{},{transform:"".concat(e.isToggled?"rotate(".concat(180*(e.isLeft?-1:1),"deg)"):"none")}),tabIndex:0},r.createElement("div",{style:O(O({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?-1:1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(e.move,"px)"):"none")})}),r.createElement("div",{style:O(O({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+e.barHeight+e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),opacity:"".concat(e.isToggled?"0":"1")})}),r.createElement("div",{style:O(O({},e.barStyles),{},{width:"".concat(e.width,"px"),top:"".concat(e.topOffset+2*e.barHeight+2*e.margin,"px"),transition:"".concat(e.time,"s ").concat(e.easing),transform:"".concat(e.isToggled?"rotate(".concat(45*(e.isLeft?1:-1),"deg) translate(").concat(e.move*(e.isLeft?-1:1),"px, ").concat(-1*e.move,"px)"):"none")})}))}}))},x=function(e){var t=e.handleScrollContact,n=e.handleScrollProjects,o=e.open,i=e.setOpen,a=function(){i(!1)};return r.createElement("header",null,r.createElement("nav",{className:"flex items-center justify-between w-11/12  mx-auto pt-14"},r.createElement(b.Link,{to:"/",className:"flex items-center justify-center dark:text-white "},r.createElement("img",{src:"data:image/png;base64,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",alt:"Eslam Hesham",className:"mr-3 sm:mr-4 "}),r.createElement("h2",{className:"font-bold sm:text-2xl "},"Eslam Hesham")),r.createElement("ul",{className:"flex items-center justify-end"},r.createElement("li",{className:"relative  z-40"},r.createElement(w,null)),r.createElement("li",{className:"ml-4"},r.createElement("div",{className:" relative top-0  z-40"},r.createElement(j,{toggled:o,toggle:i,color:"#373737"})),o&&r.createElement("div",{className:"fixed top-0 left-0 z-30  w-full  min-h-screen dark:text-white  transition-all navbar-background-opacity"},r.createElement("div",{className:"text-2xl font-Poppins bg-white transition-all  dark:bg-[#121212] min-h-screen flex flex-col items-center justify-center"},r.createElement("ul",{className:"navbar-animations"},r.createElement("li",{className:" p-4  outline-none focus:outline-none "},r.createElement(b.Link,{to:"/about",onClick:function(){a()}},"About")),r.createElement("li",null,r.createElement("button",{className:"    p-4  outline-none focus:outline-none ",onClick:function(){a(),n?n():(0,b.navigate)("/projects")}},"Projects")),r.createElement("li",{className:""},r.createElement("button",{className:" p-4  outline-none focus:outline-none ",onClick:function(){a(),t?t():(0,b.navigate)("/contact")}},"Let's Talk")),r.createElement("li",{className:"p-4"},r.createElement("a",{href:"https://github.com/eslamheshamm",target:"_blank",rel:"noopener noreferrer"},"GitHub")),r.createElement("li",{className:"p-4"},r.createElement("a",{href:"https://docs.google.com/document/d/e/2PACX-1vRjAfwhkhrz1VnnuoEIf2vj8CV1vr-6R7tK5sGCG4E0oBzcxFDCsRH87-xIFJVGdgZYc4Jz-0URtf-b/pub",target:"_blank",rel:"noopener noreferrer"},"Résumé")))))))))},P=function(e){var t=e.children,n=e.handleScrollContact,i=e.handleScrollProjects,s=(0,r.useRef)(null),f=(0,r.useState)(!1),d=f[0],p=f[1];return(0,r.useEffect)((function(){d?g(s.current):(a&&(c.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",m,o?{passive:!1}:void 0),l=!1),u=-1),a?y():h(),c=[])}),[d]),r.createElement("div",{ref:s,className:"font-Poppins dark:bg-[#121212] duration-500 ease-in-out min-h-screen transition-all dark:text-white"},r.createElement(x,{handleScrollProjects:i,handleScrollContact:n,open:d,setOpen:p}),r.createElement("main",null,t))}},3751:function(e,t,n){"use strict";n.d(t,{Z:function(){return ve}});var r,o,i,a,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),f=n.n(s),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),A="cssText",E="href",T="http-equiv",C="innerHTML",O="itemprop",S="name",j="property",x="rel",P="src",M="target",k={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",I="defer",R="encodeSpecialCharacters",N="onChangeClientState",Q="titleTemplate",B=Object.keys(k).reduce((function(e,t){return e[k[t]]=t,e}),{}),H=[v.NOSCRIPT,v.SCRIPT,v.STYLE],Y="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},F=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=_(e,v.TITLE),n=_(e,Q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=_(e,L);return t||r||void 0},J=function(e){return _(e,N)||function(){}},q=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===x&&"canonical"===e[n].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==C&&c!==A&&c!==O||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},_=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},$=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:n.g.requestAnimationFrame||$,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(f,d);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(Y),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(Y):n.getAttribute(Y)!==a.join(",")&&n.setAttribute(Y,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===A)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(Y,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[k[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[Y]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+F(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+F(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[Y]=!0,r);return Object.keys(t).forEach((function(e){var n=k[e]||e;if(n===C||n===A){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===C||e===A)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+F(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===H.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:K([E,M],e),bodyAttributes:q(y,e),defer:_(e,I),encode:_(e,R),htmlAttributes:q(g,e),linkTags:Z(v.LINK,[x,E],e),metaTags:Z(v.META,[S,w,T,j,O],e),noscriptTags:Z(v.NOSCRIPT,[C],e),onChangeClientState:J(e),scriptTags:Z(v.SCRIPT,[P,C],e),styleTags:Z(v.STYLE,[A],e),title:V(e),titleAttributes:q(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return G(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return z({},o,((t={})[r.type]=a,t.titleAttributes=z({},i),t));case v.BODY:return z({},o,{bodyAttributes:z({},i)});case v.HTML:return z({},o,{htmlAttributes:z({},i)})}return z({},o,((n={})[r.type]=z({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[B[n]||n]=e[n],t}),t)}(X(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=X(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},U(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=n(9499),ge=n(5444),be=function(e){var t=e.title,n=e.description,r=e.image,o=e.article,i=(0,ye.useLocation)().pathname,a=(0,ge.useStaticQuery)(we).site.siteMetadata,l=a.defaultTitle,u=a.titleTemplate,s=a.defaultDescription,f=a.siteUrl,d=a.defaultImage,p=a.twitterUsername,m={title:t||l,description:n||s,image:""+f+(r||d),url:""+f+i};return c.createElement(he,{title:m.title,titleTemplate:u},c.createElement("meta",{name:"description",content:m.description}),c.createElement("meta",{name:"image",content:m.image}),m.url&&c.createElement("meta",{property:"og:url",content:m.url}),!o?null:c.createElement("meta",{property:"og:type",content:"article"}),m.title&&c.createElement("meta",{property:"og:title",content:m.title}),m.description&&c.createElement("meta",{property:"og:description",content:m.description}),m.image&&c.createElement("meta",{property:"og:image",content:m.image}),c.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),p&&c.createElement("meta",{name:"twitter:creator",content:p}),m.title&&c.createElement("meta",{name:"twitter:title",content:m.title}),m.description&&c.createElement("meta",{name:"twitter:description",content:m.description}),m.image&&c.createElement("meta",{name:"twitter:image",content:m.image}))},ve=be;be.defaultProps={title:null,description:null,image:null,article:!1};var we="4202924991"},4942:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:function(){return r}})},7367:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(181);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(l){c=!0,o=l}finally{try{a||null==n.return||n.return()}finally{if(c)throw o}}return i}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=3d15e1eff8bd1c8081e1872b321536cef320afd0-4608ddcb099c2a9b3b6a.js.map