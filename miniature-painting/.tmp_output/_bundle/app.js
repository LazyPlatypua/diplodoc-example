(()=>{var e,t={62437:(e,t,r)=>{"use strict";var n=r(96540),o=r(5338),a=r(64467),c=r(51436),i=r(21776),u=r(73955),s=(r(20553),(0,n.createContext)(null));s.displayName="SearchContext";var l=s.Provider,f=(0,n.createContext)({pathname:"/",depth:0});f.displayName="RouterContext";var d=f.Provider,m=r(2919),p=r(89394),h=r(78184),g={theme:h.Sx.Light,textSize:h.ov.M,showMiniToc:!0,wideFormat:!0,fullScreen:!1},v=["ar","arc","ckb","dv","fa","ha","he","khw","ks","ps","sd","ur","uz_AF","yi"],b=function(e){return e.RTL="rtl",e.LTR="ltr",e}({});function w(){return"undefined"!=typeof document}function y(e){var t=e.theme;"undefined"!=typeof document&&document.querySelectorAll(".g-root").forEach((function(e){e.classList.toggle("g-root_theme_light","light"===t),e.classList.toggle("g-root_theme_dark","dark"===t)}))}function O(e){if(w()){document.body.classList.add("g-root");var t=function(e,t){return document.body.classList.toggle(e,Boolean(t))};Object.keys(e).forEach((function(r){switch(r){case"wideFormat":t("dc-root_wide-format",e[r]);break;case"focusSearch":t("dc-root_focused-search",e[r]);break;case"fullScreen":t("dc-root_full-screen",e[r]);break;case"landingPage":t("dc-root_document-page",!e[r]),t("dc-root_landing-page",e[r]);break;case"mobileView":t("mobile",e[r]),t("desktop",!e[r])}}))}}(0,p.A)(new Set([].concat(["href"],["src","url","href","icon","image","desktop","mobile","tablet","previewImg","image","avatar","logo","light","dark"])));var E=function(e){return"boolean"==typeof e?e:!!e&&"true"===e};function S(){var e=C("theme"),t=C("textSize"),r=C("showMiniToc"),n=C("wideFormat"),o=C("fullScreen");return{theme:e,textSize:t,showMiniToc:E(r),wideFormat:E(n),fullScreen:E(o)}}function j(e){return"PAGE_CONSTRUCTOR"===(0,m.M5)(e)}function k(){return!!w()&&document.body.clientWidth<769}function C(e){if(!w())return g[e];try{return sessionStorage.getItem(e)||g[e]}catch(t){return g[e]}}var P=(0,n.createContext)(h.JA.En);P.displayName="Lang";var M=P.Provider;r(44186);var A=r(80045),x=r(47658),T=r(18647),_=r(23614);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=(0,_.A)("Layout");function F(){return null}function z(){return null}function I(){return null}var R={doc:!1},H=function(e){var t,r,o,a=N(N({},R),e),c=a.children,i=a.doc,u=a.headerHeight,s=void 0===u?0:u;return n.Children.forEach(c,(function(e){switch(e.type){case F:t=e.props.children;break;case z:r=e.props.children;break;case I:o=e.props.children}})),n.createElement("div",{className:L({"full-header":s>0})},t&&n.createElement("div",{className:L("header")},t),n.createElement("div",{className:L("body")},r&&n.createElement("div",{className:L("content")},r),o&&n.createElement("div",{className:L("footer",{doc:i})},o)))};H.displayName="Layout",H.Header=F,H.Content=z,H.Footer=I;var U=r(98058),W=r(12445),B=r(79568),q=r(3259),V=r(61998),$=r(62945),K=r(61531),Z=(0,_.A)("pc-page-constructor"),G=(0,_.A)("pc-constructor-row"),J=function(e){var t=e.children;return t?n.createElement(U.f,{className:G()},n.createElement(W.f,null,t)):null};function Q(e){var t=e.background,r=e.blocks,o=(0,B.D)(),a=(0,q.d)(t,o);return n.createElement("div",{className:Z("docs")},n.createElement("div",{className:Z("wrapper")},r&&a&&n.createElement(V.A,Object.assign({},a,{className:Z("background")})),n.createElement($.x,null,n.createElement(J,null,n.createElement(K.F,{items:r})))))}var X=function(e,t){var r=(0,m.M5)(e)===h.KG.PageConstructor&&"data"in e&&"fullScreen"in e.data&&e.data.fullScreen,o=(0,n.useMemo)((function(){return r?e.data:{blocks:[{type:"page",resetPaddings:!0}]}}),[r,e]);return(0,n.useMemo)((function(){return{custom:{page:t},layout:o}}),[t,o])},Y=r(29139),ee=r(29504),te=r(84941),re=r(10467),ne=r(23029),oe=r(92901),ae=r(54756),ce=r.n(ae);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var se=function(){return(0,oe.A)((function e(t){var r=this;(0,ne.A)(this,e),(0,a.A)(this,"worker",void 0),(0,a.A)(this,"config",void 0),(0,a.A)(this,"init",(function(){r.worker=function(e){return me.apply(this,arguments)}(ue(ue({},r.config),{},{base:r.base,mark:"Suggest__Item__Marker"}))})),(0,a.A)(this,"link",(function(){return null})),this.config=t}),[{key:"suggest",value:(r=(0,re.A)(ce().mark((function e(t){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request({type:"suggest",query:t}));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"search",value:(t=(0,re.A)(ce().mark((function e(t){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request({type:"search",query:t}));case 1:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"base",get:function(){return window.location.href.split("/").slice(0,-this.config.depth).join("/")}},{key:"request",value:(e=(0,re.A)(ce().mark((function e(t){return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=pe,e.next=3,this.worker;case 3:return e.t1=e.sent,e.t2=t,e.abrupt("return",(0,e.t0)(e.t1,e.t2));case 6:case"end":return e.stop()}}),e,this)}))),function(t){return e.apply(this,arguments)})}]);var e,t,r}(),le=/Script at '(.*?)' cannot be accessed from origin/;function fe(){return de.apply(this,arguments)}function de(){return(de=(0,re.A)(ce().mark((function e(){var t,n,o;return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.abrupt("return",new Worker(new URL(r.p+r.u(350),r.b)));case 4:if(e.prev=4,e.t0=e.catch(0),!(e.t0 instanceof DOMException)){e.next=12;break}if(!(t=le.exec(e.t0.message))){e.next=12;break}return n=t[1],o=new Blob(["importScripts('".concat(n,"');")],{type:"text/javascript"}),e.abrupt("return",new Worker(URL.createObjectURL(o)));case 12:throw e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,4]])})))).apply(this,arguments)}function me(){return me=(0,re.A)(ce().mark((function e(t){var r;return ce().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe();case 2:return r=e.sent,e.next=5,pe(r,ue(ue({},t),{},{type:"init"}));case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)}))),me.apply(this,arguments)}function pe(e,t){var r=new MessageChannel;return new Promise((function(n,o){r.port1.onmessage=function(e){e.data.error?(console.error(e.data.error),o(e.data.error)):n(e.data.result)},r.port1.onmessageerror=function(e){o(e.data.error)},e.postMessage(t,[r.port2])}))}function he(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ge(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?he(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=(0,_.A)("Suggest");function be(){return n.createElement(ee.I,{data:te.A,className:ve("end"),size:24})}function we(){var e,t,r,o,a=(e=(0,n.useContext)(P),t=(0,n.useContext)(f).depth,r=void 0===t?0:t,o=(0,n.useContext)(s),(0,n.useMemo)((function(){return o?new se(ge(ge({},o),{},{depth:r,lang:e})):null}),[e,r,o])),c=(0,n.useRef)(null),i=(0,n.useCallback)((function(){O({focusSearch:!0})}),[]),u=(0,n.useCallback)((function(){O({focusSearch:!1}),setTimeout((function(){c.current&&c.current.close()}),100)}),[]);return a?n.createElement(Y.$,{ref:c,provider:a,onFocus:i,onBlur:u,endContent:n.createElement(be,null),className:ve("input"),classNameContainer:ve(),classNameClose:ve("close"),closeButton:!0}):null}var ye=r(26141),Oe=r(24065),Ee=(0,n.memo)((function(e){var t=e.mobileView,r=e.theme,o=e.onChangeTheme,a=e.textSize,c=e.onChangeTextSize,i=e.wideFormat,u=e.onChangeWideFormat,s=e.showMiniToc,l=e.onChangeShowMiniToc,f=e.lang,d=e.langs,m=e.onChangeLang;return n.createElement(ye.n,{controlClassName:"Control",controlSize:h.Uv.L,isWideView:t,isMobileView:t},n.createElement(Oe.A,{className:"Controls",theme:r,onChangeTheme:o,wideFormat:i,onChangeWideFormat:u,showMiniToc:s,onChangeShowMiniToc:l,textSize:a,onChangeTextSize:c,lang:f,langs:d,onChangeLang:m}))}));Ee.displayName="HeaderControls";var Se=r(88976),je=r(45823);function ke(e,t,r){return e.some((function(e){return e.type===r}))||t.some((function(e){return e.type===r}))}var Ce=["data"];function Pe(e){var t=e.data,r=(0,A.A)(e,Ce),o=(0,m.M5)(t),a=(0,m.$T)(o);return n.createElement(H,{headerHeight:r.headerHeight},n.createElement(H.Content,null,n.createElement(a,Object.assign({},t,r))))}function Me(e){var t=e.data,r=e.props,o=e.controls,a=r.theme,c=(0,n.useCallback)((function(){return n.createElement(Q,t.data)}),[t]),i=X(t,c),u=(0,n.useMemo)((function(){return{blocks:i.custom}}),[i]);return n.createElement(Pe,Object.assign({data:t,headerHeight:0},r,o),n.createElement(x.Z,{theme:a},n.createElement(T.i,{custom:u,content:i.layout})))}function Ae(e){var t=e.data,r=e.props,o=e.controls,a=r.theme,c=r.fullScreen,i=(0,n.useCallback)((function(){return n.createElement(we,null)}),[]),u=(0,n.useCallback)((function(){return n.createElement(Ee,o)}),[o]),l=function(e,t,r,o){var a=e.toc,c=a.navigation,i=c.header,u=void 0===i?{}:i,l=c.logo,d=u,m=d.leftItems,p=void 0===m?[]:m,g=d.rightItems,v=void 0===g?[]:g,b=ke(v,p,"controls"),w=ke(v,p,"search"),y=(0,n.useContext)(s),O=(0,n.useContext)(f);y&&!w&&v.unshift({type:"search"});var E=(0,n.useMemo)((function(){return{withBorder:!0,leftItems:p,rightItems:v,customMobileHeaderItems:[{type:"search"}]}}),[p,v]),S=(0,n.useMemo)((function(){return{toc:a,router:O,headerHeight:64}}),[a,O]),j=(0,n.useMemo)((function(){return{controlSize:h.Uv.L,userSettings:t}}),[t]),k=(0,n.useMemo)((function(){return{header:{leftItems:[]},renderNavigation:function(){return n.createElement(Se.A,{logo:l,data:E,navigationTocData:S,mobileControlsData:j})},logo:l}}),[E,S,j,l]);return(0,n.useMemo)((function(){return{custom:{search:o,controls:r,MobileDropdown:je.A},layout:k,withControls:b}}),[o,r,k,b])}(t,o,u,i),d=(0,n.useCallback)((function(){return n.createElement(Pe,Object.assign({data:t,headerHeight:c?0:64},r,l.withControls?function(e,t){return Object.keys(e).reduce((function(r,n){return t.includes(n)||(r[n]=e[n]),r}),{})}(o,["theme","onChangeTheme","textSize","onChangeTextSize","wideFormat","onChangeWideFormat","showMiniToc","onChangeShowMiniToc","langs","onChangeLang"]):o),n.createElement(Q,t.data))}),[t,l,r,o,c]),m=X(t,d),p=(0,n.useMemo)((function(){return{navigation:l.custom,blocks:m.custom}}),[l,m]);return n.createElement(x.Z,{theme:a},n.createElement(T.i,{custom:p,content:m.layout,navigation:c?void 0:l.layout}))}var xe=r(58498),Te=r(89457),_e=r(57016),De=r(65277);function Ne(){var e=(0,De.D)();return n.createElement(n.Fragment,null,n.createElement(_e.v,null),n.createElement(Te.l,null),n.createElement(xe.A,{theme:e===h.Sx.Dark?"dark":"neutral",zoom:{showMenu:!0,bindKeys:!0}}))}var Le=r(3453);function Fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ze(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ie(e,t){var r=(0,n.useState)(t[e]),o=(0,Le.A)(r,2),c=o[0],i=o[1],u=(0,n.useMemo)((function(){return t=e,r=i,function(e){!function(e,t){if(w())try{sessionStorage.setItem(e,String(t))}catch(e){}}(t,e),r(e)};var t,r}),[e,i]);return(0,n.useMemo)((function(){return(0,a.A)((0,a.A)({},e,c),"onChange"+e.replace(/^./,(function(e){return e.toUpperCase()})),u)}),[e,c,u])}function Re(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function He(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Re(Object(r),!0).forEach((function(t){(0,a.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Re(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Ue(e){var t,r,o=e.data,a=e.router,s=e.lang,f=e.search,p=e.analytics;(0,i.jK)({lang:s});var h=function(){var e=S(),t=Ie("theme",e),r=Ie("textSize",e),o=Ie("wideFormat",e),a=Ie("fullScreen",e),c=Ie("showMiniToc",e);return(0,n.useMemo)((function(){return ze(ze(ze(ze(ze({},t),r),o),c),a)}),[t,r,o,c,a])}(),g=function(e){var t=e.router,r=e.lang,o=e.langs,a=(0,n.useCallback)((function(e){var r=(0,m.UZ)(t,e);window.location.replace(r)}),[t]);return(0,n.useMemo)((function(){return{lang:r,langs:o,onChangeLang:a}}),[r,o,a])}(e),w=function(){var e=(0,n.useState)(k()),t=(0,Le.A)(e,2),r=t[0],o=t[1],a=(0,n.useCallback)((function(){o(k())}),[]);return(0,n.useEffect)(a,[a]),(0,n.useEffect)((function(){return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[a]),r}(),E=h.theme,C=h.textSize,P=h.wideFormat,A=h.fullScreen,x=h.showMiniToc,T=(0,n.useMemo)((function(){return{router:a,theme:E,textSize:C,wideFormat:P,fullScreen:A,showMiniToc:x}}),[a,E,C,P,A,x]),_=(0,n.useMemo)((function(){return He(He(He({},h),g),{},{mobileView:w})}),[g,h,w]),D=function(e){return v.includes(e)?b.RTL:b.LTR}(s),N=j(o);return(0,n.useEffect)((function(){O({mobileView:w,wideFormat:P,fullScreen:A,landingPage:N}),y({theme:E})}),[E,w,P,A,N]),n.createElement("div",{className:"App"},n.createElement(c.N,{theme:E,direction:D},n.createElement(M,{value:s},n.createElement(d,{value:a},n.createElement(l,{value:f},function(e){return Boolean(e.toc.navigation)}(o)?n.createElement(Ae,{data:o,props:T,controls:_}):n.createElement(Me,{data:o,props:T,controls:_}),p&&n.createElement(u.A,{router:a,gtmId:(null==p||null===(t=p.gtm)||void 0===t?void 0:t.id)||"",consentMode:null==p||null===(r=p.gtm)||void 0===r?void 0:r.mode}),n.createElement(Ne,null))))))}var We,Be,qe,Ve,$e,Ke=document.getElementById("root"),Ze=window.__DATA__;if(!Ke)throw new Error("Root element not found!");We=Ze,qe=(Be=S()).theme,Ve=Be.wideFormat,$e=Be.fullScreen,O({mobileView:k(),wideFormat:Ve,fullScreen:$e,landingPage:j(We.data)}),y({theme:qe}),window.STATIC_CONTENT?(0,o.c)(Ke,n.createElement(Ue,Ze)):(0,o.H)(Ke).render(n.createElement(Ue,Ze))},44186:()=>{var e,t;"undefined"!=typeof Element&&(t=(e=Element.prototype).matches||e.matchesSelector||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector,e.matches=e.matchesSelector=t||function(e){var t=this;return Array.prototype.some.call(document.querySelectorAll(e),(function(e){return e===t}))}),"undefined"!=typeof document&&document.addEventListener("click",(function(e){var t=e.target.href,r=window.location.origin;if(e.target.matches(".dc-doc-layout__center a")&&t.startsWith(r)){e.preventDefault();var n=".html";if(t.endsWith("/"))return void(window.location.href="".concat(t).concat("index").concat(n));var o=t.split("#");if(o.length>0&&!o[0].endsWith(n))return o[0]+=n,void(window.location.href=o.join("#"));window.location.href=t}}))},87040:(e,t,r)=>{"use strict";function n(){}r.d(t,{A:()=>n})},42634:()=>{}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={id:e,loaded:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=t,n.amdO={},e=[],n.O=(t,r,o,a)=>{if(!r){var c=1/0;for(l=0;l<e.length;l++){for(var[r,o,a]=e[l],i=!0,u=0;u<r.length;u++)(!1&a||c>=a)&&Object.keys(n.O).every((e=>n.O[e](r[u])))?r.splice(u--,1):(i=!1,a<c&&(c=a));if(i){e.splice(l--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.u=e=>e+".js",n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),n.j=524,(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{n.b=document.baseURI||self.location.href;var e={524:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[c,i,u]=r,s=0;if(c.some((t=>0!==e[t]))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(u)var l=u(n)}for(t&&t(r);s<c.length;s++)a=c[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self.webpackChunk_diplodoc_client=self.webpackChunk_diplodoc_client||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=n.O(void 0,[644,121],(()=>n(62437)));o=n.O(o)})();
//# sourceMappingURL=app.js.map