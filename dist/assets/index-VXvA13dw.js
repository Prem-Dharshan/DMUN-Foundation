(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function r(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=r(o);fetch(o.href,c)}})();function dD(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Vg={exports:{}},Wc={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x2;function fD(){if(x2)return Wc;x2=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function r(a,o,c){var u=null;if(c!==void 0&&(u=""+c),o.key!==void 0&&(u=""+o.key),"key"in o){c={};for(var f in o)f!=="key"&&(c[f]=o[f])}else c=o;return o=c.ref,{$$typeof:n,type:a,key:u,ref:o!==void 0?o:null,props:c}}return Wc.Fragment=e,Wc.jsx=r,Wc.jsxs=r,Wc}var y2;function hD(){return y2||(y2=1,Vg.exports=fD()),Vg.exports}var d=hD(),$g={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b2;function mD(){if(b2)return je;b2=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function y(S){return S===null||typeof S!="object"?null:(S=x&&S[x]||S["@@iterator"],typeof S=="function"?S:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j=Object.assign,T={};function E(S,I,te){this.props=S,this.context=I,this.refs=T,this.updater=te||b}E.prototype.isReactComponent={},E.prototype.setState=function(S,I){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,I,"setState")},E.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function C(){}C.prototype=E.prototype;function M(S,I,te){this.props=S,this.context=I,this.refs=T,this.updater=te||b}var k=M.prototype=new C;k.constructor=M,j(k,E.prototype),k.isPureReactComponent=!0;var z=Array.isArray,D={H:null,A:null,T:null,S:null,V:null},L=Object.prototype.hasOwnProperty;function O(S,I,te,ne,oe,ge){return te=ge.ref,{$$typeof:n,type:S,key:I,ref:te!==void 0?te:null,props:ge}}function U(S,I){return O(S.type,I,void 0,void 0,void 0,S.props)}function H(S){return typeof S=="object"&&S!==null&&S.$$typeof===n}function W(S){var I={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(te){return I[te]})}var ae=/\/+/g;function Z(S,I){return typeof S=="object"&&S!==null&&S.key!=null?W(""+S.key):I.toString(36)}function se(){}function fe(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(se,se):(S.status="pending",S.then(function(I){S.status==="pending"&&(S.status="fulfilled",S.value=I)},function(I){S.status==="pending"&&(S.status="rejected",S.reason=I)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function le(S,I,te,ne,oe){var ge=typeof S;(ge==="undefined"||ge==="boolean")&&(S=null);var ce=!1;if(S===null)ce=!0;else switch(ge){case"bigint":case"string":case"number":ce=!0;break;case"object":switch(S.$$typeof){case n:case e:ce=!0;break;case v:return ce=S._init,le(ce(S._payload),I,te,ne,oe)}}if(ce)return oe=oe(S),ce=ne===""?"."+Z(S,0):ne,z(oe)?(te="",ce!=null&&(te=ce.replace(ae,"$&/")+"/"),le(oe,I,te,"",function(Fe){return Fe})):oe!=null&&(H(oe)&&(oe=U(oe,te+(oe.key==null||S&&S.key===oe.key?"":(""+oe.key).replace(ae,"$&/")+"/")+ce)),I.push(oe)),1;ce=0;var Me=ne===""?".":ne+":";if(z(S))for(var Se=0;Se<S.length;Se++)ne=S[Se],ge=Me+Z(ne,Se),ce+=le(ne,I,te,ge,oe);else if(Se=y(S),typeof Se=="function")for(S=Se.call(S),Se=0;!(ne=S.next()).done;)ne=ne.value,ge=Me+Z(ne,Se++),ce+=le(ne,I,te,ge,oe);else if(ge==="object"){if(typeof S.then=="function")return le(fe(S),I,te,ne,oe);throw I=String(S),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return ce}function V(S,I,te){if(S==null)return S;var ne=[],oe=0;return le(S,ne,"","",function(ge){return I.call(te,ge,oe++)}),ne}function G(S){if(S._status===-1){var I=S._result;I=I(),I.then(function(te){(S._status===0||S._status===-1)&&(S._status=1,S._result=te)},function(te){(S._status===0||S._status===-1)&&(S._status=2,S._result=te)}),S._status===-1&&(S._status=0,S._result=I)}if(S._status===1)return S._result.default;throw S._result}var ee=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)};function re(){}return je.Children={map:V,forEach:function(S,I,te){V(S,function(){I.apply(this,arguments)},te)},count:function(S){var I=0;return V(S,function(){I++}),I},toArray:function(S){return V(S,function(I){return I})||[]},only:function(S){if(!H(S))throw Error("React.Children.only expected to receive a single React element child.");return S}},je.Component=E,je.Fragment=r,je.Profiler=o,je.PureComponent=M,je.StrictMode=a,je.Suspense=m,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,je.__COMPILER_RUNTIME={__proto__:null,c:function(S){return D.H.useMemoCache(S)}},je.cache=function(S){return function(){return S.apply(null,arguments)}},je.cloneElement=function(S,I,te){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ne=j({},S.props),oe=S.key,ge=void 0;if(I!=null)for(ce in I.ref!==void 0&&(ge=void 0),I.key!==void 0&&(oe=""+I.key),I)!L.call(I,ce)||ce==="key"||ce==="__self"||ce==="__source"||ce==="ref"&&I.ref===void 0||(ne[ce]=I[ce]);var ce=arguments.length-2;if(ce===1)ne.children=te;else if(1<ce){for(var Me=Array(ce),Se=0;Se<ce;Se++)Me[Se]=arguments[Se+2];ne.children=Me}return O(S.type,oe,void 0,void 0,ge,ne)},je.createContext=function(S){return S={$$typeof:u,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:c,_context:S},S},je.createElement=function(S,I,te){var ne,oe={},ge=null;if(I!=null)for(ne in I.key!==void 0&&(ge=""+I.key),I)L.call(I,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(oe[ne]=I[ne]);var ce=arguments.length-2;if(ce===1)oe.children=te;else if(1<ce){for(var Me=Array(ce),Se=0;Se<ce;Se++)Me[Se]=arguments[Se+2];oe.children=Me}if(S&&S.defaultProps)for(ne in ce=S.defaultProps,ce)oe[ne]===void 0&&(oe[ne]=ce[ne]);return O(S,ge,void 0,void 0,null,oe)},je.createRef=function(){return{current:null}},je.forwardRef=function(S){return{$$typeof:f,render:S}},je.isValidElement=H,je.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:G}},je.memo=function(S,I){return{$$typeof:p,type:S,compare:I===void 0?null:I}},je.startTransition=function(S){var I=D.T,te={};D.T=te;try{var ne=S(),oe=D.S;oe!==null&&oe(te,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(re,ee)}catch(ge){ee(ge)}finally{D.T=I}},je.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},je.use=function(S){return D.H.use(S)},je.useActionState=function(S,I,te){return D.H.useActionState(S,I,te)},je.useCallback=function(S,I){return D.H.useCallback(S,I)},je.useContext=function(S){return D.H.useContext(S)},je.useDebugValue=function(){},je.useDeferredValue=function(S,I){return D.H.useDeferredValue(S,I)},je.useEffect=function(S,I,te){var ne=D.H;if(typeof te=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return ne.useEffect(S,I)},je.useId=function(){return D.H.useId()},je.useImperativeHandle=function(S,I,te){return D.H.useImperativeHandle(S,I,te)},je.useInsertionEffect=function(S,I){return D.H.useInsertionEffect(S,I)},je.useLayoutEffect=function(S,I){return D.H.useLayoutEffect(S,I)},je.useMemo=function(S,I){return D.H.useMemo(S,I)},je.useOptimistic=function(S,I){return D.H.useOptimistic(S,I)},je.useReducer=function(S,I,te){return D.H.useReducer(S,I,te)},je.useRef=function(S){return D.H.useRef(S)},je.useState=function(S){return D.H.useState(S)},je.useSyncExternalStore=function(S,I,te){return D.H.useSyncExternalStore(S,I,te)},je.useTransition=function(){return D.H.useTransition()},je.version="19.1.0",je}var w2;function xx(){return w2||(w2=1,$g.exports=mD()),$g.exports}var P=xx();const Ei=dD(P);var Pg={exports:{}},Kc={},Hg={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _2;function pD(){return _2||(_2=1,function(n){function e(V,G){var ee=V.length;V.push(G);e:for(;0<ee;){var re=ee-1>>>1,S=V[re];if(0<o(S,G))V[re]=G,V[ee]=S,ee=re;else break e}}function r(V){return V.length===0?null:V[0]}function a(V){if(V.length===0)return null;var G=V[0],ee=V.pop();if(ee!==G){V[0]=ee;e:for(var re=0,S=V.length,I=S>>>1;re<I;){var te=2*(re+1)-1,ne=V[te],oe=te+1,ge=V[oe];if(0>o(ne,ee))oe<S&&0>o(ge,ne)?(V[re]=ge,V[oe]=ee,re=oe):(V[re]=ne,V[te]=ee,re=te);else if(oe<S&&0>o(ge,ee))V[re]=ge,V[oe]=ee,re=oe;else break e}}return G}function o(V,G){var ee=V.sortIndex-G.sortIndex;return ee!==0?ee:V.id-G.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var u=Date,f=u.now();n.unstable_now=function(){return u.now()-f}}var m=[],p=[],v=1,x=null,y=3,b=!1,j=!1,T=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,k=typeof setImmediate<"u"?setImmediate:null;function z(V){for(var G=r(p);G!==null;){if(G.callback===null)a(p);else if(G.startTime<=V)a(p),G.sortIndex=G.expirationTime,e(m,G);else break;G=r(p)}}function D(V){if(T=!1,z(V),!j)if(r(m)!==null)j=!0,L||(L=!0,Z());else{var G=r(p);G!==null&&le(D,G.startTime-V)}}var L=!1,O=-1,U=5,H=-1;function W(){return E?!0:!(n.unstable_now()-H<U)}function ae(){if(E=!1,L){var V=n.unstable_now();H=V;var G=!0;try{e:{j=!1,T&&(T=!1,M(O),O=-1),b=!0;var ee=y;try{t:{for(z(V),x=r(m);x!==null&&!(x.expirationTime>V&&W());){var re=x.callback;if(typeof re=="function"){x.callback=null,y=x.priorityLevel;var S=re(x.expirationTime<=V);if(V=n.unstable_now(),typeof S=="function"){x.callback=S,z(V),G=!0;break t}x===r(m)&&a(m),z(V)}else a(m);x=r(m)}if(x!==null)G=!0;else{var I=r(p);I!==null&&le(D,I.startTime-V),G=!1}}break e}finally{x=null,y=ee,b=!1}G=void 0}}finally{G?Z():L=!1}}}var Z;if(typeof k=="function")Z=function(){k(ae)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,fe=se.port2;se.port1.onmessage=ae,Z=function(){fe.postMessage(null)}}else Z=function(){C(ae,0)};function le(V,G){O=C(function(){V(n.unstable_now())},G)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(V){V.callback=null},n.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<V?Math.floor(1e3/V):5},n.unstable_getCurrentPriorityLevel=function(){return y},n.unstable_next=function(V){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var ee=y;y=G;try{return V()}finally{y=ee}},n.unstable_requestPaint=function(){E=!0},n.unstable_runWithPriority=function(V,G){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var ee=y;y=V;try{return G()}finally{y=ee}},n.unstable_scheduleCallback=function(V,G,ee){var re=n.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?re+ee:re):ee=re,V){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=ee+S,V={id:v++,callback:G,priorityLevel:V,startTime:ee,expirationTime:S,sortIndex:-1},ee>re?(V.sortIndex=ee,e(p,V),r(m)===null&&V===r(p)&&(T?(M(O),O=-1):T=!0,le(D,ee-re))):(V.sortIndex=S,e(m,V),j||b||(j=!0,L||(L=!0,Z()))),V},n.unstable_shouldYield=W,n.unstable_wrapCallback=function(V){var G=y;return function(){var ee=y;y=G;try{return V.apply(this,arguments)}finally{y=ee}}}}(Yg)),Yg}var S2;function gD(){return S2||(S2=1,Hg.exports=pD()),Hg.exports}var Fg={exports:{}},Sn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T2;function vD(){if(T2)return Sn;T2=1;var n=xx();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var a={d:{f:r,r:function(){throw Error(e(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(m,p,v){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:x==null?null:""+x,children:m,containerInfo:p,implementation:v}}var u=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Sn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Sn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,v)},Sn.flushSync=function(m){var p=u.T,v=a.p;try{if(u.T=null,a.p=2,m)return m()}finally{u.T=p,a.p=v,a.d.f()}},Sn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,a.d.C(m,p))},Sn.prefetchDNS=function(m){typeof m=="string"&&a.d.D(m)},Sn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,x=f(v,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?a.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:y,fetchPriority:b}):v==="script"&&a.d.X(m,{crossOrigin:x,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Sn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=f(p.as,p.crossOrigin);a.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&a.d.M(m)},Sn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,x=f(v,p.crossOrigin);a.d.L(m,v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Sn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=f(p.as,p.crossOrigin);a.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else a.d.m(m)},Sn.requestFormReset=function(m){a.d.r(m)},Sn.unstable_batchedUpdates=function(m,p){return m(p)},Sn.useFormState=function(m,p,v){return u.H.useFormState(m,p,v)},Sn.useFormStatus=function(){return u.H.useHostTransitionStatus()},Sn.version="19.1.0",Sn}var j2;function xD(){if(j2)return Fg.exports;j2=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Fg.exports=vD(),Fg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A2;function yD(){if(A2)return Kc;A2=1;var n=gD(),e=xx(),r=xD();function a(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var i=t,s=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(s=i.return),t=i.return;while(t)}return i.tag===3?s:null}function u(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function f(t){if(c(t)!==t)throw Error(a(188))}function m(t){var i=t.alternate;if(!i){if(i=c(t),i===null)throw Error(a(188));return i!==t?null:t}for(var s=t,l=i;;){var h=s.return;if(h===null)break;var g=h.alternate;if(g===null){if(l=h.return,l!==null){s=l;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===s)return f(h),t;if(g===l)return f(h),i;g=g.sibling}throw Error(a(188))}if(s.return!==l.return)s=h,l=g;else{for(var _=!1,A=h.child;A;){if(A===s){_=!0,s=h,l=g;break}if(A===l){_=!0,l=h,s=g;break}A=A.sibling}if(!_){for(A=g.child;A;){if(A===s){_=!0,s=g,l=h;break}if(A===l){_=!0,l=g,s=h;break}A=A.sibling}if(!_)throw Error(a(189))}}if(s.alternate!==l)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?t:i}function p(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=p(t),i!==null)return i;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),k=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),D=Symbol.for("react.suspense"),L=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),H=Symbol.for("react.activity"),W=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function Z(t){return t===null||typeof t!="object"?null:(t=ae&&t[ae]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function fe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case j:return"Fragment";case E:return"Profiler";case T:return"StrictMode";case D:return"Suspense";case L:return"SuspenseList";case H:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case k:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case O:return i=t.displayName||null,i!==null?i:fe(t.type)||"Memo";case U:i=t._payload,t=t._init;try{return fe(t(i))}catch{}}return null}var le=Array.isArray,V=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},re=[],S=-1;function I(t){return{current:t}}function te(t){0>S||(t.current=re[S],re[S]=null,S--)}function ne(t,i){S++,re[S]=t.current,t.current=i}var oe=I(null),ge=I(null),ce=I(null),Me=I(null);function Se(t,i){switch(ne(ce,i),ne(ge,t),ne(oe,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?qw(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=qw(i),t=Iw(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}te(oe),ne(oe,t)}function Fe(){te(oe),te(ge),te(ce)}function bn(t){t.memoizedState!==null&&ne(Me,t);var i=oe.current,s=Iw(i,t.type);i!==s&&(ne(ge,t),ne(oe,s))}function dt(t){ge.current===t&&(te(oe),te(ge)),Me.current===t&&(te(Me),Fc._currentValue=ee)}var it=Object.prototype.hasOwnProperty,Ne=n.unstable_scheduleCallback,ft=n.unstable_cancelCallback,wn=n.unstable_shouldYield,Rn=n.unstable_requestPaint,X=n.unstable_now,zn=n.unstable_getCurrentPriorityLevel,zi=n.unstable_ImmediatePriority,cr=n.unstable_UserBlockingPriority,rt=n.unstable_NormalPriority,ur=n.unstable_LowPriority,dr=n.unstable_IdlePriority,Zr=n.log,Bt=n.unstable_setDisableYieldValue,qn=null,$e=null;function Vt(t){if(typeof Zr=="function"&&Bt(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(qn,t)}catch{}}var st=Math.clz32?Math.clz32:jt,fr=Math.log,Do=Math.LN2;function jt(t){return t>>>=0,t===0?32:31-(fr(t)/Do|0)|0}var Qr=256,In=4194304;function Xn(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hr(t,i,s){var l=t.pendingLanes;if(l===0)return 0;var h=0,g=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=l&134217727;return A!==0?(l=A&~g,l!==0?h=Xn(l):(_&=A,_!==0?h=Xn(_):s||(s=A&~t,s!==0&&(h=Xn(s))))):(A=l&~g,A!==0?h=Xn(A):_!==0?h=Xn(_):s||(s=l&~t,s!==0&&(h=Xn(s)))),h===0?0:i!==0&&i!==h&&(i&g)===0&&(g=h&-h,s=i&-i,g>=s||g===32&&(s&4194048)!==0)?i:h}function Wn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function Jr(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ae(){var t=Qr;return Qr<<=1,(Qr&4194048)===0&&(Qr=256),t}function wr(){var t=In;return In<<=1,(In&62914560)===0&&(In=4194304),t}function On(t){for(var i=[],s=0;31>s;s++)i.push(t);return i}function fn(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,i,s,l,h,g){var _=t.pendingLanes;t.pendingLanes=s,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=s,t.entangledLanes&=s,t.errorRecoveryDisabledLanes&=s,t.shellSuspendCounter=0;var A=t.entanglements,R=t.expirationTimes,Y=t.hiddenUpdates;for(s=_&~s;0<s;){var K=31-st(s),J=1<<K;A[K]=0,R[K]=-1;var F=Y[K];if(F!==null)for(Y[K]=null,K=0;K<F.length;K++){var q=F[K];q!==null&&(q.lane&=-536870913)}s&=~J}l!==0&&_r(t,l,0),g!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=g&~(_&~i))}function _r(t,i,s){t.pendingLanes|=i,t.suspendedLanes&=~i;var l=31-st(i);t.entangledLanes|=i,t.entanglements[l]=t.entanglements[l]|1073741824|s&4194090}function ea(t,i){var s=t.entangledLanes|=i;for(t=t.entanglements;s;){var l=31-st(s),h=1<<l;h&i|t[l]&i&&(t[l]|=i),s&=~h}}function ci(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function ta(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Te(){var t=G.p;return t!==0?t:(t=window.event,t===void 0?32:f2(t.type))}function ve(t,i){var s=G.p;try{return G.p=t,i()}finally{G.p=s}}var Ee=Math.random().toString(36).slice(2),ie="__reactFiber$"+Ee,me="__reactProps$"+Ee,he="__reactContainer$"+Ee,_e="__reactEvents$"+Ee,$t="__reactListeners$"+Ee,Le="__reactHandles$"+Ee,gt="__reactResources$"+Ee,At="__reactMarker$"+Ee;function lt(t){delete t[ie],delete t[me],delete t[_e],delete t[$t],delete t[Le]}function Ie(t){var i=t[ie];if(i)return i;for(var s=t.parentNode;s;){if(i=s[he]||s[ie]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(t=Zw(t);t!==null;){if(s=t[ie])return s;t=Zw(t)}return i}t=s,s=t.parentNode}return null}function He(t){if(t=t[ie]||t[he]){var i=t.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return t}return null}function hn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(a(33))}function We(t){var i=t[gt];return i||(i=t[gt]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Ge(t){t[At]=!0}var ui=new Set,Pt={};function ht(t,i){yt(t,i),yt(t+"Capture",i)}function yt(t,i){for(Pt[t]=i,t=0;t<i.length;t++)ui.add(i[t])}var na=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ko={},Wt={};function kt(t){return it.call(Wt,t)?!0:it.call(ko,t)?!1:na.test(t)?Wt[t]=!0:(ko[t]=!0,!1)}function Nn(t,i,s){if(kt(i))if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+s)}}function Oa(t,i,s){if(s===null)t.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+s)}}function Oi(t,i,s,l){if(l===null)t.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(s);return}t.setAttributeNS(i,s,""+l)}}var ia,di;function Ni(t){if(ia===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ia=i&&i[1]||"",di=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+t+di}var Na=!1;function Li(t,i){if(!t||Na)return"";Na=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var J=function(){throw Error()};if(Object.defineProperty(J.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(J,[])}catch(q){var F=q}Reflect.construct(t,[],J)}else{try{J.call()}catch(q){F=q}t.call(J.prototype)}}else{try{throw Error()}catch(q){F=q}(J=t())&&typeof J.catch=="function"&&J.catch(function(){})}}catch(q){if(q&&F&&typeof q.stack=="string")return[q.stack,F.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var g=l.DetermineComponentFrameRoot(),_=g[0],A=g[1];if(_&&A){var R=_.split(`
`),Y=A.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<Y.length&&!Y[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===Y.length)for(l=R.length-1,h=Y.length-1;1<=l&&0<=h&&R[l]!==Y[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==Y[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==Y[h]){var K=`
`+R[l].replace(" at new "," at ");return t.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",t.displayName)),K}while(1<=l&&0<=h);break}}}finally{Na=!1,Error.prepareStackTrace=s}return(s=t?t.displayName||t.name:"")?Ni(s):""}function a5(t){switch(t.tag){case 26:case 27:case 5:return Ni(t.type);case 16:return Ni("Lazy");case 13:return Ni("Suspense");case 19:return Ni("SuspenseList");case 0:case 15:return Li(t.type,!1);case 11:return Li(t.type.render,!1);case 1:return Li(t.type,!0);case 31:return Ni("Activity");default:return""}}function $y(t){try{var i="";do i+=a5(t),t=t.return;while(t);return i}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}function Ui(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Py(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function o5(t){var i=Py(t)?"checked":"value",s=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var h=s.get,g=s.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){l=""+_,g.call(this,_)}}),Object.defineProperty(t,i,{enumerable:s.enumerable}),{getValue:function(){return l},setValue:function(_){l=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function wd(t){t._valueTracker||(t._valueTracker=o5(t))}function Hy(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return t&&(l=Py(t)?t.checked?"true":"false":t.value),t=l,t!==s?(i.setValue(t),!0):!1}function _d(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var s5=/[\n"\\]/g;function Bi(t){return t.replace(s5,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Lm(t,i,s,l,h,g,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Ui(i)):t.value!==""+Ui(i)&&(t.value=""+Ui(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?Um(t,_,Ui(i)):s!=null?Um(t,_,Ui(s)):l!=null&&t.removeAttribute("value"),h==null&&g!=null&&(t.defaultChecked=!!g),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Ui(A):t.removeAttribute("name")}function Yy(t,i,s,l,h,g,_,A){if(g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.type=g),i!=null||s!=null){if(!(g!=="submit"&&g!=="reset"||i!=null))return;s=s!=null?""+Ui(s):"",i=i!=null?""+Ui(i):s,A||i===t.value||(t.value=i),t.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,t.checked=A?t.checked:!!l,t.defaultChecked=!!l,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_)}function Um(t,i,s){i==="number"&&_d(t.ownerDocument)===t||t.defaultValue===""+s||(t.defaultValue=""+s)}function Es(t,i,s,l){if(t=t.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<t.length;s++)h=i.hasOwnProperty("$"+t[s].value),t[s].selected!==h&&(t[s].selected=h),h&&l&&(t[s].defaultSelected=!0)}else{for(s=""+Ui(s),i=null,h=0;h<t.length;h++){if(t[h].value===s){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Fy(t,i,s){if(i!=null&&(i=""+Ui(i),i!==t.value&&(t.value=i),s==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=s!=null?""+Ui(s):""}function Gy(t,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(a(92));if(le(l)){if(1<l.length)throw Error(a(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=Ui(i),t.defaultValue=s,l=t.textContent,l===s&&l!==""&&l!==null&&(t.value=l)}function Cs(t,i){if(i){var s=t.firstChild;if(s&&s===t.lastChild&&s.nodeType===3){s.nodeValue=i;return}}t.textContent=i}var l5=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qy(t,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":l?t.setProperty(i,s):typeof s!="number"||s===0||l5.has(i)?i==="float"?t.cssFloat=s:t[i]=(""+s).trim():t[i]=s+"px"}function Iy(t,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(t=t.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?t.setProperty(l,""):l==="float"?t.cssFloat="":t[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&s[h]!==l&&qy(t,h,l)}else for(var g in i)i.hasOwnProperty(g)&&qy(t,g,i[g])}function Bm(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var c5=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),u5=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sd(t){return u5.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var Vm=null;function $m(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ms=null,Ds=null;function Xy(t){var i=He(t);if(i&&(t=i.stateNode)){var s=t[me]||null;e:switch(t=i.stateNode,i.type){case"input":if(Lm(t,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=t;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+Bi(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==t&&l.form===t.form){var h=l[me]||null;if(!h)throw Error(a(90));Lm(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===t.form&&Hy(l)}break e;case"textarea":Fy(t,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Es(t,!!s.multiple,i,!1)}}}var Pm=!1;function Wy(t,i,s){if(Pm)return t(i,s);Pm=!0;try{var l=t(i);return l}finally{if(Pm=!1,(Ms!==null||Ds!==null)&&(cf(),Ms&&(i=Ms,t=Ds,Ds=Ms=null,Xy(i),t)))for(i=0;i<t.length;i++)Xy(t[i])}}function ic(t,i){var s=t.stateNode;if(s===null)return null;var l=s[me]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hm=!1;if(ra)try{var rc={};Object.defineProperty(rc,"passive",{get:function(){Hm=!0}}),window.addEventListener("test",rc,rc),window.removeEventListener("test",rc,rc)}catch{Hm=!1}var La=null,Ym=null,Td=null;function Ky(){if(Td)return Td;var t,i=Ym,s=i.length,l,h="value"in La?La.value:La.textContent,g=h.length;for(t=0;t<s&&i[t]===h[t];t++);var _=s-t;for(l=1;l<=_&&i[s-l]===h[g-l];l++);return Td=h.slice(t,1<l?1-l:void 0)}function jd(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Ad(){return!0}function Zy(){return!1}function Kn(t){function i(s,l,h,g,_){this._reactName=s,this._targetInst=h,this.type=l,this.nativeEvent=g,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(s=t[A],this[A]=s?s(g):g[A]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Ad:Zy,this.isPropagationStopped=Zy,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ad)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ad)},persist:function(){},isPersistent:Ad}),i}var Ro={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ed=Kn(Ro),ac=v({},Ro,{view:0,detail:0}),d5=Kn(ac),Fm,Gm,oc,Cd=v({},ac,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Im,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==oc&&(oc&&t.type==="mousemove"?(Fm=t.screenX-oc.screenX,Gm=t.screenY-oc.screenY):Gm=Fm=0,oc=t),Fm)},movementY:function(t){return"movementY"in t?t.movementY:Gm}}),Qy=Kn(Cd),f5=v({},Cd,{dataTransfer:0}),h5=Kn(f5),m5=v({},ac,{relatedTarget:0}),qm=Kn(m5),p5=v({},Ro,{animationName:0,elapsedTime:0,pseudoElement:0}),g5=Kn(p5),v5=v({},Ro,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),x5=Kn(v5),y5=v({},Ro,{data:0}),Jy=Kn(y5),b5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},w5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function S5(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_5[t])?!!i[t]:!1}function Im(){return S5}var T5=v({},ac,{key:function(t){if(t.key){var i=b5[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=jd(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?w5[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Im,charCode:function(t){return t.type==="keypress"?jd(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?jd(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j5=Kn(T5),A5=v({},Cd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eb=Kn(A5),E5=v({},ac,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Im}),C5=Kn(E5),M5=v({},Ro,{propertyName:0,elapsedTime:0,pseudoElement:0}),D5=Kn(M5),k5=v({},Cd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),R5=Kn(k5),z5=v({},Ro,{newState:0,oldState:0}),O5=Kn(z5),N5=[9,13,27,32],Xm=ra&&"CompositionEvent"in window,sc=null;ra&&"documentMode"in document&&(sc=document.documentMode);var L5=ra&&"TextEvent"in window&&!sc,tb=ra&&(!Xm||sc&&8<sc&&11>=sc),nb=" ",ib=!1;function rb(t,i){switch(t){case"keyup":return N5.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ab(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function U5(t,i){switch(t){case"compositionend":return ab(i);case"keypress":return i.which!==32?null:(ib=!0,nb);case"textInput":return t=i.data,t===nb&&ib?null:t;default:return null}}function B5(t,i){if(ks)return t==="compositionend"||!Xm&&rb(t,i)?(t=Ky(),Td=Ym=La=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return tb&&i.locale!=="ko"?null:i.data;default:return null}}var V5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ob(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!V5[t.type]:i==="textarea"}function sb(t,i,s,l){Ms?Ds?Ds.push(l):Ds=[l]:Ms=l,i=pf(i,"onChange"),0<i.length&&(s=new Ed("onChange","change",null,s,l),t.push({event:s,listeners:i}))}var lc=null,cc=null;function $5(t){Pw(t,0)}function Md(t){var i=hn(t);if(Hy(i))return t}function lb(t,i){if(t==="change")return i}var cb=!1;if(ra){var Wm;if(ra){var Km="oninput"in document;if(!Km){var ub=document.createElement("div");ub.setAttribute("oninput","return;"),Km=typeof ub.oninput=="function"}Wm=Km}else Wm=!1;cb=Wm&&(!document.documentMode||9<document.documentMode)}function db(){lc&&(lc.detachEvent("onpropertychange",fb),cc=lc=null)}function fb(t){if(t.propertyName==="value"&&Md(cc)){var i=[];sb(i,cc,t,$m(t)),Wy($5,i)}}function P5(t,i,s){t==="focusin"?(db(),lc=i,cc=s,lc.attachEvent("onpropertychange",fb)):t==="focusout"&&db()}function H5(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Md(cc)}function Y5(t,i){if(t==="click")return Md(i)}function F5(t,i){if(t==="input"||t==="change")return Md(i)}function G5(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var fi=typeof Object.is=="function"?Object.is:G5;function uc(t,i){if(fi(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var s=Object.keys(t),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var h=s[l];if(!it.call(i,h)||!fi(t[h],i[h]))return!1}return!0}function hb(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function mb(t,i){var s=hb(t);t=0;for(var l;s;){if(s.nodeType===3){if(l=t+s.textContent.length,t<=i&&l>=i)return{node:s,offset:i-t};t=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=hb(s)}}function pb(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?pb(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function gb(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_d(t.document);i instanceof t.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)t=i.contentWindow;else break;i=_d(t.document)}return i}function Zm(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var q5=ra&&"documentMode"in document&&11>=document.documentMode,Rs=null,Qm=null,dc=null,Jm=!1;function vb(t,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;Jm||Rs==null||Rs!==_d(l)||(l=Rs,"selectionStart"in l&&Zm(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),dc&&uc(dc,l)||(dc=l,l=pf(Qm,"onSelect"),0<l.length&&(i=new Ed("onSelect","select",null,i,s),t.push({event:i,listeners:l}),i.target=Rs)))}function zo(t,i){var s={};return s[t.toLowerCase()]=i.toLowerCase(),s["Webkit"+t]="webkit"+i,s["Moz"+t]="moz"+i,s}var zs={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionrun:zo("Transition","TransitionRun"),transitionstart:zo("Transition","TransitionStart"),transitioncancel:zo("Transition","TransitionCancel"),transitionend:zo("Transition","TransitionEnd")},ep={},xb={};ra&&(xb=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function Oo(t){if(ep[t])return ep[t];if(!zs[t])return t;var i=zs[t],s;for(s in i)if(i.hasOwnProperty(s)&&s in xb)return ep[t]=i[s];return t}var yb=Oo("animationend"),bb=Oo("animationiteration"),wb=Oo("animationstart"),I5=Oo("transitionrun"),X5=Oo("transitionstart"),W5=Oo("transitioncancel"),_b=Oo("transitionend"),Sb=new Map,tp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");tp.push("scrollEnd");function mr(t,i){Sb.set(t,i),ht(i,[t])}var Tb=new WeakMap;function Vi(t,i){if(typeof t=="object"&&t!==null){var s=Tb.get(t);return s!==void 0?s:(i={value:t,source:i,stack:$y(i)},Tb.set(t,i),i)}return{value:t,source:i,stack:$y(i)}}var $i=[],Os=0,np=0;function Dd(){for(var t=Os,i=np=Os=0;i<t;){var s=$i[i];$i[i++]=null;var l=$i[i];$i[i++]=null;var h=$i[i];$i[i++]=null;var g=$i[i];if($i[i++]=null,l!==null&&h!==null){var _=l.pending;_===null?h.next=h:(h.next=_.next,_.next=h),l.pending=h}g!==0&&jb(s,h,g)}}function kd(t,i,s,l){$i[Os++]=t,$i[Os++]=i,$i[Os++]=s,$i[Os++]=l,np|=l,t.lanes|=l,t=t.alternate,t!==null&&(t.lanes|=l)}function ip(t,i,s,l){return kd(t,i,s,l),Rd(t)}function Ns(t,i){return kd(t,null,null,i),Rd(t)}function jb(t,i,s){t.lanes|=s;var l=t.alternate;l!==null&&(l.lanes|=s);for(var h=!1,g=t.return;g!==null;)g.childLanes|=s,l=g.alternate,l!==null&&(l.childLanes|=s),g.tag===22&&(t=g.stateNode,t===null||t._visibility&1||(h=!0)),t=g,g=g.return;return t.tag===3?(g=t.stateNode,h&&i!==null&&(h=31-st(s),t=g.hiddenUpdates,l=t[h],l===null?t[h]=[i]:l.push(i),i.lane=s|536870912),g):null}function Rd(t){if(50<Lc)throw Lc=0,cg=null,Error(a(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ls={};function K5(t,i,s,l){this.tag=t,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(t,i,s,l){return new K5(t,i,s,l)}function rp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aa(t,i){var s=t.alternate;return s===null?(s=hi(t.tag,i,t.key,t.mode),s.elementType=t.elementType,s.type=t.type,s.stateNode=t.stateNode,s.alternate=t,t.alternate=s):(s.pendingProps=i,s.type=t.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=t.flags&65011712,s.childLanes=t.childLanes,s.lanes=t.lanes,s.child=t.child,s.memoizedProps=t.memoizedProps,s.memoizedState=t.memoizedState,s.updateQueue=t.updateQueue,i=t.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=t.sibling,s.index=t.index,s.ref=t.ref,s.refCleanup=t.refCleanup,s}function Ab(t,i){t.flags&=65011714;var s=t.alternate;return s===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=s.childLanes,t.lanes=s.lanes,t.child=s.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=s.memoizedProps,t.memoizedState=s.memoizedState,t.updateQueue=s.updateQueue,t.type=s.type,i=s.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function zd(t,i,s,l,h,g){var _=0;if(l=t,typeof t=="function")rp(t)&&(_=1);else if(typeof t=="string")_=QM(t,s,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case H:return t=hi(31,s,i,h),t.elementType=H,t.lanes=g,t;case j:return No(s.children,h,g,i);case T:_=8,h|=24;break;case E:return t=hi(12,s,i,h|2),t.elementType=E,t.lanes=g,t;case D:return t=hi(13,s,i,h),t.elementType=D,t.lanes=g,t;case L:return t=hi(19,s,i,h),t.elementType=L,t.lanes=g,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:case k:_=10;break e;case M:_=9;break e;case z:_=11;break e;case O:_=14;break e;case U:_=16,l=null;break e}_=29,s=Error(a(130,t===null?"null":typeof t,"")),l=null}return i=hi(_,s,i,h),i.elementType=t,i.type=l,i.lanes=g,i}function No(t,i,s,l){return t=hi(7,t,l,i),t.lanes=s,t}function ap(t,i,s){return t=hi(6,t,null,i),t.lanes=s,t}function op(t,i,s){return i=hi(4,t.children!==null?t.children:[],t.key,i),i.lanes=s,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Us=[],Bs=0,Od=null,Nd=0,Pi=[],Hi=0,Lo=null,oa=1,sa="";function Uo(t,i){Us[Bs++]=Nd,Us[Bs++]=Od,Od=t,Nd=i}function Eb(t,i,s){Pi[Hi++]=oa,Pi[Hi++]=sa,Pi[Hi++]=Lo,Lo=t;var l=oa;t=sa;var h=32-st(l)-1;l&=~(1<<h),s+=1;var g=32-st(i)+h;if(30<g){var _=h-h%5;g=(l&(1<<_)-1).toString(32),l>>=_,h-=_,oa=1<<32-st(i)+h|s<<h|l,sa=g+t}else oa=1<<g|s<<h|l,sa=t}function sp(t){t.return!==null&&(Uo(t,1),Eb(t,1,0))}function lp(t){for(;t===Od;)Od=Us[--Bs],Us[Bs]=null,Nd=Us[--Bs],Us[Bs]=null;for(;t===Lo;)Lo=Pi[--Hi],Pi[Hi]=null,sa=Pi[--Hi],Pi[Hi]=null,oa=Pi[--Hi],Pi[Hi]=null}var Ln=null,Et=null,Xe=!1,Bo=null,Sr=!1,cp=Error(a(519));function Vo(t){var i=Error(a(418,""));throw mc(Vi(i,t)),cp}function Cb(t){var i=t.stateNode,s=t.type,l=t.memoizedProps;switch(i[ie]=t,i[me]=l,s){case"dialog":Be("cancel",i),Be("close",i);break;case"iframe":case"object":case"embed":Be("load",i);break;case"video":case"audio":for(s=0;s<Bc.length;s++)Be(Bc[s],i);break;case"source":Be("error",i);break;case"img":case"image":case"link":Be("error",i),Be("load",i);break;case"details":Be("toggle",i);break;case"input":Be("invalid",i),Yy(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0),wd(i);break;case"select":Be("invalid",i);break;case"textarea":Be("invalid",i),Gy(i,l.value,l.defaultValue,l.children),wd(i)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||Gw(i.textContent,s)?(l.popover!=null&&(Be("beforetoggle",i),Be("toggle",i)),l.onScroll!=null&&Be("scroll",i),l.onScrollEnd!=null&&Be("scrollend",i),l.onClick!=null&&(i.onclick=gf),i=!0):i=!1,i||Vo(t)}function Mb(t){for(Ln=t.return;Ln;)switch(Ln.tag){case 5:case 13:Sr=!1;return;case 27:case 3:Sr=!0;return;default:Ln=Ln.return}}function fc(t){if(t!==Ln)return!1;if(!Xe)return Mb(t),Xe=!0,!1;var i=t.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=t.type,s=!(s!=="form"&&s!=="button")||jg(t.type,t.memoizedProps)),s=!s),s&&Et&&Vo(t),Mb(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8)if(s=t.data,s==="/$"){if(i===0){Et=gr(t.nextSibling);break e}i--}else s!=="$"&&s!=="$!"&&s!=="$?"||i++;t=t.nextSibling}Et=null}}else i===27?(i=Et,Qa(t.type)?(t=Mg,Mg=null,Et=t):Et=i):Et=Ln?gr(t.stateNode.nextSibling):null;return!0}function hc(){Et=Ln=null,Xe=!1}function Db(){var t=Bo;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Bo=null),t}function mc(t){Bo===null?Bo=[t]:Bo.push(t)}var up=I(null),$o=null,la=null;function Ua(t,i,s){ne(up,i._currentValue),i._currentValue=s}function ca(t){t._currentValue=up.current,te(up)}function dp(t,i,s){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===s)break;t=t.return}}function fp(t,i,s,l){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var g=h.dependencies;if(g!==null){var _=h.child;g=g.firstContext;e:for(;g!==null;){var A=g;g=h;for(var R=0;R<i.length;R++)if(A.context===i[R]){g.lanes|=s,A=g.alternate,A!==null&&(A.lanes|=s),dp(g.return,s,t),l||(_=null);break e}g=A.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(a(341));_.lanes|=s,g=_.alternate,g!==null&&(g.lanes|=s),dp(_,s,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function pc(t,i,s,l){t=null;for(var h=i,g=!1;h!==null;){if(!g){if((h.flags&524288)!==0)g=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(a(387));if(_=_.memoizedProps,_!==null){var A=h.type;fi(h.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(h===Me.current){if(_=h.alternate,_===null)throw Error(a(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(Fc):t=[Fc])}h=h.return}t!==null&&fp(i,t,s,l),i.flags|=262144}function Ld(t){for(t=t.firstContext;t!==null;){if(!fi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Po(t){$o=t,la=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function _n(t){return kb($o,t)}function Ud(t,i){return $o===null&&Po(t),kb(t,i)}function kb(t,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},la===null){if(t===null)throw Error(a(308));la=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else la=la.next=i;return s}var Z5=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(s,l){t.push(l)}};this.abort=function(){i.aborted=!0,t.forEach(function(s){return s()})}},Q5=n.unstable_scheduleCallback,J5=n.unstable_NormalPriority,Kt={$$typeof:k,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hp(){return{controller:new Z5,data:new Map,refCount:0}}function gc(t){t.refCount--,t.refCount===0&&Q5(J5,function(){t.controller.abort()})}var vc=null,mp=0,Vs=0,$s=null;function eM(t,i){if(vc===null){var s=vc=[];mp=0,Vs=gg(),$s={status:"pending",value:void 0,then:function(l){s.push(l)}}}return mp++,i.then(Rb,Rb),i}function Rb(){if(--mp===0&&vc!==null){$s!==null&&($s.status="fulfilled");var t=vc;vc=null,Vs=0,$s=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function tM(t,i){var s=[],l={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return t.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),l}var zb=V.S;V.S=function(t,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&eM(t,i),zb!==null&&zb(t,i)};var Ho=I(null);function pp(){var t=Ho.current;return t!==null?t:ct.pooledCache}function Bd(t,i){i===null?ne(Ho,Ho.current):ne(Ho,i.pool)}function Ob(){var t=pp();return t===null?null:{parent:Kt._currentValue,pool:t}}var xc=Error(a(460)),Nb=Error(a(474)),Vd=Error(a(542)),gp={then:function(){}};function Lb(t){return t=t.status,t==="fulfilled"||t==="rejected"}function $d(){}function Ub(t,i,s){switch(s=t[s],s===void 0?t.push(i):s!==i&&(i.then($d,$d),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vb(t),t;default:if(typeof i.status=="string")i.then($d,$d);else{if(t=ct,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=i,t.status="pending",t.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Vb(t),t}throw yc=i,xc}}var yc=null;function Bb(){if(yc===null)throw Error(a(459));var t=yc;return yc=null,t}function Vb(t){if(t===xc||t===Vd)throw Error(a(483))}var Ba=!1;function vp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function xp(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Va(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function $a(t,i,s){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Qe&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Rd(t),jb(t,null,s),i}return kd(t,l,i,s),Rd(t)}function bc(t,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ea(t,s)}}function yp(t,i){var s=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var h=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var _={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};g===null?h=g=_:g=g.next=_,s=s.next}while(s!==null);g===null?h=g=i:g=g.next=i}else h=g=i;s={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:l.shared,callbacks:l.callbacks},t.updateQueue=s;return}t=s.lastBaseUpdate,t===null?s.firstBaseUpdate=i:t.next=i,s.lastBaseUpdate=i}var bp=!1;function wc(){if(bp){var t=$s;if(t!==null)throw t}}function _c(t,i,s,l){bp=!1;var h=t.updateQueue;Ba=!1;var g=h.firstBaseUpdate,_=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var R=A,Y=R.next;R.next=null,_===null?g=Y:_.next=Y,_=R;var K=t.alternate;K!==null&&(K=K.updateQueue,A=K.lastBaseUpdate,A!==_&&(A===null?K.firstBaseUpdate=Y:A.next=Y,K.lastBaseUpdate=R))}if(g!==null){var J=h.baseState;_=0,K=Y=R=null,A=g;do{var F=A.lane&-536870913,q=F!==A.lane;if(q?(Ye&F)===F:(l&F)===F){F!==0&&F===Vs&&(bp=!0),K!==null&&(K=K.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var be=t,xe=A;F=i;var nt=s;switch(xe.tag){case 1:if(be=xe.payload,typeof be=="function"){J=be.call(nt,J,F);break e}J=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=xe.payload,F=typeof be=="function"?be.call(nt,J,F):be,F==null)break e;J=v({},J,F);break e;case 2:Ba=!0}}F=A.callback,F!==null&&(t.flags|=64,q&&(t.flags|=8192),q=h.callbacks,q===null?h.callbacks=[F]:q.push(F))}else q={lane:F,tag:A.tag,payload:A.payload,callback:A.callback,next:null},K===null?(Y=K=q,R=J):K=K.next=q,_|=F;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;q=A,A=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);K===null&&(R=J),h.baseState=R,h.firstBaseUpdate=Y,h.lastBaseUpdate=K,g===null&&(h.shared.lanes=0),Xa|=_,t.lanes=_,t.memoizedState=J}}function $b(t,i){if(typeof t!="function")throw Error(a(191,t));t.call(i)}function Pb(t,i){var s=t.callbacks;if(s!==null)for(t.callbacks=null,t=0;t<s.length;t++)$b(s[t],i)}var Ps=I(null),Pd=I(0);function Hb(t,i){t=ga,ne(Pd,t),ne(Ps,i),ga=t|i.baseLanes}function wp(){ne(Pd,ga),ne(Ps,Ps.current)}function _p(){ga=Pd.current,te(Ps),te(Pd)}var Pa=0,De=null,et=null,Ht=null,Hd=!1,Hs=!1,Yo=!1,Yd=0,Sc=0,Ys=null,nM=0;function Rt(){throw Error(a(321))}function Sp(t,i){if(i===null)return!1;for(var s=0;s<i.length&&s<t.length;s++)if(!fi(t[s],i[s]))return!1;return!0}function Tp(t,i,s,l,h,g){return Pa=g,De=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,V.H=t===null||t.memoizedState===null?j1:A1,Yo=!1,g=s(l,h),Yo=!1,Hs&&(g=Fb(i,s,l,h)),Yb(t),g}function Yb(t){V.H=Wd;var i=et!==null&&et.next!==null;if(Pa=0,Ht=et=De=null,Hd=!1,Sc=0,Ys=null,i)throw Error(a(300));t===null||tn||(t=t.dependencies,t!==null&&Ld(t)&&(tn=!0))}function Fb(t,i,s,l){De=t;var h=0;do{if(Hs&&(Ys=null),Sc=0,Hs=!1,25<=h)throw Error(a(301));if(h+=1,Ht=et=null,t.updateQueue!=null){var g=t.updateQueue;g.lastEffect=null,g.events=null,g.stores=null,g.memoCache!=null&&(g.memoCache.index=0)}V.H=cM,g=i(s,l)}while(Hs);return g}function iM(){var t=V.H,i=t.useState()[0];return i=typeof i.then=="function"?Tc(i):i,t=t.useState()[0],(et!==null?et.memoizedState:null)!==t&&(De.flags|=1024),i}function jp(){var t=Yd!==0;return Yd=0,t}function Ap(t,i,s){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~s}function Ep(t){if(Hd){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}Hd=!1}Pa=0,Ht=et=De=null,Hs=!1,Sc=Yd=0,Ys=null}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ht===null?De.memoizedState=Ht=t:Ht=Ht.next=t,Ht}function Yt(){if(et===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=et.next;var i=Ht===null?De.memoizedState:Ht.next;if(i!==null)Ht=i,et=t;else{if(t===null)throw De.alternate===null?Error(a(467)):Error(a(310));et=t,t={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},Ht===null?De.memoizedState=Ht=t:Ht=Ht.next=t}return Ht}function Cp(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Tc(t){var i=Sc;return Sc+=1,Ys===null&&(Ys=[]),t=Ub(Ys,t,i),i=De,(Ht===null?i.memoizedState:Ht.next)===null&&(i=i.alternate,V.H=i===null||i.memoizedState===null?j1:A1),t}function Fd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Tc(t);if(t.$$typeof===k)return _n(t)}throw Error(a(438,String(t)))}function Mp(t){var i=null,s=De.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=De.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Cp(),De.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(t),l=0;l<t;l++)s[l]=W;return i.index++,s}function ua(t,i){return typeof i=="function"?i(t):i}function Gd(t){var i=Yt();return Dp(i,et,t)}function Dp(t,i,s){var l=t.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=s;var h=t.baseQueue,g=l.pending;if(g!==null){if(h!==null){var _=h.next;h.next=g.next,g.next=_}i.baseQueue=h=g,l.pending=null}if(g=t.baseState,h===null)t.memoizedState=g;else{i=h.next;var A=_=null,R=null,Y=i,K=!1;do{var J=Y.lane&-536870913;if(J!==Y.lane?(Ye&J)===J:(Pa&J)===J){var F=Y.revertLane;if(F===0)R!==null&&(R=R.next={lane:0,revertLane:0,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),J===Vs&&(K=!0);else if((Pa&F)===F){Y=Y.next,F===Vs&&(K=!0);continue}else J={lane:0,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},R===null?(A=R=J,_=g):R=R.next=J,De.lanes|=F,Xa|=F;J=Y.action,Yo&&s(g,J),g=Y.hasEagerState?Y.eagerState:s(g,J)}else F={lane:J,revertLane:Y.revertLane,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},R===null?(A=R=F,_=g):R=R.next=F,De.lanes|=J,Xa|=J;Y=Y.next}while(Y!==null&&Y!==i);if(R===null?_=g:R.next=A,!fi(g,t.memoizedState)&&(tn=!0,K&&(s=$s,s!==null)))throw s;t.memoizedState=g,t.baseState=_,t.baseQueue=R,l.lastRenderedState=g}return h===null&&(l.lanes=0),[t.memoizedState,l.dispatch]}function kp(t){var i=Yt(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=t;var l=s.dispatch,h=s.pending,g=i.memoizedState;if(h!==null){s.pending=null;var _=h=h.next;do g=t(g,_.action),_=_.next;while(_!==h);fi(g,i.memoizedState)||(tn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),s.lastRenderedState=g}return[g,l]}function Gb(t,i,s){var l=De,h=Yt(),g=Xe;if(g){if(s===void 0)throw Error(a(407));s=s()}else s=i();var _=!fi((et||h).memoizedState,s);_&&(h.memoizedState=s,tn=!0),h=h.queue;var A=Xb.bind(null,l,h,t);if(jc(2048,8,A,[t]),h.getSnapshot!==i||_||Ht!==null&&Ht.memoizedState.tag&1){if(l.flags|=2048,Fs(9,qd(),Ib.bind(null,l,h,s,i),null),ct===null)throw Error(a(349));g||(Pa&124)!==0||qb(l,i,s)}return s}function qb(t,i,s){t.flags|=16384,t={getSnapshot:i,value:s},i=De.updateQueue,i===null?(i=Cp(),De.updateQueue=i,i.stores=[t]):(s=i.stores,s===null?i.stores=[t]:s.push(t))}function Ib(t,i,s,l){i.value=s,i.getSnapshot=l,Wb(i)&&Kb(t)}function Xb(t,i,s){return s(function(){Wb(i)&&Kb(t)})}function Wb(t){var i=t.getSnapshot;t=t.value;try{var s=i();return!fi(t,s)}catch{return!0}}function Kb(t){var i=Ns(t,2);i!==null&&xi(i,t,2)}function Rp(t){var i=Zn();if(typeof t=="function"){var s=t;if(t=s(),Yo){Vt(!0);try{s()}finally{Vt(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:t},i}function Zb(t,i,s,l){return t.baseState=s,Dp(t,et,typeof l=="function"?l:ua)}function rM(t,i,s,l,h){if(Xd(t))throw Error(a(485));if(t=i.action,t!==null){var g={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){g.listeners.push(_)}};V.T!==null?s(!0):g.isTransition=!1,l(g),s=i.pending,s===null?(g.next=i.pending=g,Qb(i,g)):(g.next=s.next,i.pending=s.next=g)}}function Qb(t,i){var s=i.action,l=i.payload,h=t.state;if(i.isTransition){var g=V.T,_={};V.T=_;try{var A=s(h,l),R=V.S;R!==null&&R(_,A),Jb(t,i,A)}catch(Y){zp(t,i,Y)}finally{V.T=g}}else try{g=s(h,l),Jb(t,i,g)}catch(Y){zp(t,i,Y)}}function Jb(t,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){e1(t,i,l)},function(l){return zp(t,i,l)}):e1(t,i,s)}function e1(t,i,s){i.status="fulfilled",i.value=s,t1(i),t.state=s,i=t.pending,i!==null&&(s=i.next,s===i?t.pending=null:(s=s.next,i.next=s,Qb(t,s)))}function zp(t,i,s){var l=t.pending;if(t.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,t1(i),i=i.next;while(i!==l)}t.action=null}function t1(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function n1(t,i){return i}function i1(t,i){if(Xe){var s=ct.formState;if(s!==null){e:{var l=De;if(Xe){if(Et){t:{for(var h=Et,g=Sr;h.nodeType!==8;){if(!g){h=null;break t}if(h=gr(h.nextSibling),h===null){h=null;break t}}g=h.data,h=g==="F!"||g==="F"?h:null}if(h){Et=gr(h.nextSibling),l=h.data==="F!";break e}}Vo(l)}l=!1}l&&(i=s[0])}}return s=Zn(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n1,lastRenderedState:i},s.queue=l,s=_1.bind(null,De,l),l.dispatch=s,l=Rp(!1),g=Bp.bind(null,De,!1,l.queue),l=Zn(),h={state:i,dispatch:null,action:t,pending:null},l.queue=h,s=rM.bind(null,De,h,g,s),h.dispatch=s,l.memoizedState=t,[i,s,!1]}function r1(t){var i=Yt();return a1(i,et,t)}function a1(t,i,s){if(i=Dp(t,i,n1)[0],t=Gd(ua)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Tc(i)}catch(_){throw _===xc?Vd:_}else l=i;i=Yt();var h=i.queue,g=h.dispatch;return s!==i.memoizedState&&(De.flags|=2048,Fs(9,qd(),aM.bind(null,h,s),null)),[l,g,t]}function aM(t,i){t.action=i}function o1(t){var i=Yt(),s=et;if(s!==null)return a1(i,s,t);Yt(),i=i.memoizedState,s=Yt();var l=s.queue.dispatch;return s.memoizedState=t,[i,l,!1]}function Fs(t,i,s,l){return t={tag:t,create:s,deps:l,inst:i,next:null},i=De.updateQueue,i===null&&(i=Cp(),De.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=t.next=t:(l=s.next,s.next=t,t.next=l,i.lastEffect=t),t}function qd(){return{destroy:void 0,resource:void 0}}function s1(){return Yt().memoizedState}function Id(t,i,s,l){var h=Zn();l=l===void 0?null:l,De.flags|=t,h.memoizedState=Fs(1|i,qd(),s,l)}function jc(t,i,s,l){var h=Yt();l=l===void 0?null:l;var g=h.memoizedState.inst;et!==null&&l!==null&&Sp(l,et.memoizedState.deps)?h.memoizedState=Fs(i,g,s,l):(De.flags|=t,h.memoizedState=Fs(1|i,g,s,l))}function l1(t,i){Id(8390656,8,t,i)}function c1(t,i){jc(2048,8,t,i)}function u1(t,i){return jc(4,2,t,i)}function d1(t,i){return jc(4,4,t,i)}function f1(t,i){if(typeof i=="function"){t=t();var s=i(t);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function h1(t,i,s){s=s!=null?s.concat([t]):null,jc(4,4,f1.bind(null,i,t),s)}function Op(){}function m1(t,i){var s=Yt();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Sp(i,l[1])?l[0]:(s.memoizedState=[t,i],t)}function p1(t,i){var s=Yt();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Sp(i,l[1]))return l[0];if(l=t(),Yo){Vt(!0);try{t()}finally{Vt(!1)}}return s.memoizedState=[l,i],l}function Np(t,i,s){return s===void 0||(Pa&1073741824)!==0?t.memoizedState=i:(t.memoizedState=s,t=xw(),De.lanes|=t,Xa|=t,s)}function g1(t,i,s,l){return fi(s,i)?s:Ps.current!==null?(t=Np(t,s,l),fi(t,i)||(tn=!0),t):(Pa&42)===0?(tn=!0,t.memoizedState=s):(t=xw(),De.lanes|=t,Xa|=t,i)}function v1(t,i,s,l,h){var g=G.p;G.p=g!==0&&8>g?g:8;var _=V.T,A={};V.T=A,Bp(t,!1,i,s);try{var R=h(),Y=V.S;if(Y!==null&&Y(A,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var K=tM(R,l);Ac(t,i,K,vi(t))}else Ac(t,i,l,vi(t))}catch(J){Ac(t,i,{then:function(){},status:"rejected",reason:J},vi())}finally{G.p=g,V.T=_}}function oM(){}function Lp(t,i,s,l){if(t.tag!==5)throw Error(a(476));var h=x1(t).queue;v1(t,h,i,ee,s===null?oM:function(){return y1(t),s(l)})}function x1(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:ee},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:s},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function y1(t){var i=x1(t).next.queue;Ac(t,i,{},vi())}function Up(){return _n(Fc)}function b1(){return Yt().memoizedState}function w1(){return Yt().memoizedState}function sM(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var s=vi();t=Va(s);var l=$a(i,t,s);l!==null&&(xi(l,i,s),bc(l,i,s)),i={cache:hp()},t.payload=i;return}i=i.return}}function lM(t,i,s){var l=vi();s={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null},Xd(t)?S1(i,s):(s=ip(t,i,s,l),s!==null&&(xi(s,t,l),T1(s,i,l)))}function _1(t,i,s){var l=vi();Ac(t,i,s,l)}function Ac(t,i,s,l){var h={lane:l,revertLane:0,action:s,hasEagerState:!1,eagerState:null,next:null};if(Xd(t))S1(i,h);else{var g=t.alternate;if(t.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var _=i.lastRenderedState,A=g(_,s);if(h.hasEagerState=!0,h.eagerState=A,fi(A,_))return kd(t,i,h,0),ct===null&&Dd(),!1}catch{}finally{}if(s=ip(t,i,h,l),s!==null)return xi(s,t,l),T1(s,i,l),!0}return!1}function Bp(t,i,s,l){if(l={lane:2,revertLane:gg(),action:l,hasEagerState:!1,eagerState:null,next:null},Xd(t)){if(i)throw Error(a(479))}else i=ip(t,s,l,2),i!==null&&xi(i,t,2)}function Xd(t){var i=t.alternate;return t===De||i!==null&&i===De}function S1(t,i){Hs=Hd=!0;var s=t.pending;s===null?i.next=i:(i.next=s.next,s.next=i),t.pending=i}function T1(t,i,s){if((s&4194048)!==0){var l=i.lanes;l&=t.pendingLanes,s|=l,i.lanes=s,ea(t,s)}}var Wd={readContext:_n,use:Fd,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt,useHostTransitionStatus:Rt,useFormState:Rt,useActionState:Rt,useOptimistic:Rt,useMemoCache:Rt,useCacheRefresh:Rt},j1={readContext:_n,use:Fd,useCallback:function(t,i){return Zn().memoizedState=[t,i===void 0?null:i],t},useContext:_n,useEffect:l1,useImperativeHandle:function(t,i,s){s=s!=null?s.concat([t]):null,Id(4194308,4,f1.bind(null,i,t),s)},useLayoutEffect:function(t,i){return Id(4194308,4,t,i)},useInsertionEffect:function(t,i){Id(4,2,t,i)},useMemo:function(t,i){var s=Zn();i=i===void 0?null:i;var l=t();if(Yo){Vt(!0);try{t()}finally{Vt(!1)}}return s.memoizedState=[l,i],l},useReducer:function(t,i,s){var l=Zn();if(s!==void 0){var h=s(i);if(Yo){Vt(!0);try{s(i)}finally{Vt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},l.queue=t,t=t.dispatch=lM.bind(null,De,t),[l.memoizedState,t]},useRef:function(t){var i=Zn();return t={current:t},i.memoizedState=t},useState:function(t){t=Rp(t);var i=t.queue,s=_1.bind(null,De,i);return i.dispatch=s,[t.memoizedState,s]},useDebugValue:Op,useDeferredValue:function(t,i){var s=Zn();return Np(s,t,i)},useTransition:function(){var t=Rp(!1);return t=v1.bind(null,De,t.queue,!0,!1),Zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,s){var l=De,h=Zn();if(Xe){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),ct===null)throw Error(a(349));(Ye&124)!==0||qb(l,i,s)}h.memoizedState=s;var g={value:s,getSnapshot:i};return h.queue=g,l1(Xb.bind(null,l,g,t),[t]),l.flags|=2048,Fs(9,qd(),Ib.bind(null,l,g,s,i),null),s},useId:function(){var t=Zn(),i=ct.identifierPrefix;if(Xe){var s=sa,l=oa;s=(l&~(1<<32-st(l)-1)).toString(32)+s,i="«"+i+"R"+s,s=Yd++,0<s&&(i+="H"+s.toString(32)),i+="»"}else s=nM++,i="«"+i+"r"+s.toString(32)+"»";return t.memoizedState=i},useHostTransitionStatus:Up,useFormState:i1,useActionState:i1,useOptimistic:function(t){var i=Zn();i.memoizedState=i.baseState=t;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Bp.bind(null,De,!0,s),s.dispatch=i,[t,i]},useMemoCache:Mp,useCacheRefresh:function(){return Zn().memoizedState=sM.bind(null,De)}},A1={readContext:_n,use:Fd,useCallback:m1,useContext:_n,useEffect:c1,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:d1,useMemo:p1,useReducer:Gd,useRef:s1,useState:function(){return Gd(ua)},useDebugValue:Op,useDeferredValue:function(t,i){var s=Yt();return g1(s,et.memoizedState,t,i)},useTransition:function(){var t=Gd(ua)[0],i=Yt().memoizedState;return[typeof t=="boolean"?t:Tc(t),i]},useSyncExternalStore:Gb,useId:b1,useHostTransitionStatus:Up,useFormState:r1,useActionState:r1,useOptimistic:function(t,i){var s=Yt();return Zb(s,et,t,i)},useMemoCache:Mp,useCacheRefresh:w1},cM={readContext:_n,use:Fd,useCallback:m1,useContext:_n,useEffect:c1,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:d1,useMemo:p1,useReducer:kp,useRef:s1,useState:function(){return kp(ua)},useDebugValue:Op,useDeferredValue:function(t,i){var s=Yt();return et===null?Np(s,t,i):g1(s,et.memoizedState,t,i)},useTransition:function(){var t=kp(ua)[0],i=Yt().memoizedState;return[typeof t=="boolean"?t:Tc(t),i]},useSyncExternalStore:Gb,useId:b1,useHostTransitionStatus:Up,useFormState:o1,useActionState:o1,useOptimistic:function(t,i){var s=Yt();return et!==null?Zb(s,et,t,i):(s.baseState=t,[t,s.queue.dispatch])},useMemoCache:Mp,useCacheRefresh:w1},Gs=null,Ec=0;function Kd(t){var i=Ec;return Ec+=1,Gs===null&&(Gs=[]),Ub(Gs,t,i)}function Cc(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zd(t,i){throw i.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(i),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function E1(t){var i=t._init;return i(t._payload)}function C1(t){function i(B,N){if(t){var $=B.deletions;$===null?(B.deletions=[N],B.flags|=16):$.push(N)}}function s(B,N){if(!t)return null;for(;N!==null;)i(B,N),N=N.sibling;return null}function l(B){for(var N=new Map;B!==null;)B.key!==null?N.set(B.key,B):N.set(B.index,B),B=B.sibling;return N}function h(B,N){return B=aa(B,N),B.index=0,B.sibling=null,B}function g(B,N,$){return B.index=$,t?($=B.alternate,$!==null?($=$.index,$<N?(B.flags|=67108866,N):$):(B.flags|=67108866,N)):(B.flags|=1048576,N)}function _(B){return t&&B.alternate===null&&(B.flags|=67108866),B}function A(B,N,$,Q){return N===null||N.tag!==6?(N=ap($,B.mode,Q),N.return=B,N):(N=h(N,$),N.return=B,N)}function R(B,N,$,Q){var de=$.type;return de===j?K(B,N,$.props.children,Q,$.key):N!==null&&(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===U&&E1(de)===N.type)?(N=h(N,$.props),Cc(N,$),N.return=B,N):(N=zd($.type,$.key,$.props,null,B.mode,Q),Cc(N,$),N.return=B,N)}function Y(B,N,$,Q){return N===null||N.tag!==4||N.stateNode.containerInfo!==$.containerInfo||N.stateNode.implementation!==$.implementation?(N=op($,B.mode,Q),N.return=B,N):(N=h(N,$.children||[]),N.return=B,N)}function K(B,N,$,Q,de){return N===null||N.tag!==7?(N=No($,B.mode,Q,de),N.return=B,N):(N=h(N,$),N.return=B,N)}function J(B,N,$){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return N=ap(""+N,B.mode,$),N.return=B,N;if(typeof N=="object"&&N!==null){switch(N.$$typeof){case y:return $=zd(N.type,N.key,N.props,null,B.mode,$),Cc($,N),$.return=B,$;case b:return N=op(N,B.mode,$),N.return=B,N;case U:var Q=N._init;return N=Q(N._payload),J(B,N,$)}if(le(N)||Z(N))return N=No(N,B.mode,$,null),N.return=B,N;if(typeof N.then=="function")return J(B,Kd(N),$);if(N.$$typeof===k)return J(B,Ud(B,N),$);Zd(B,N)}return null}function F(B,N,$,Q){var de=N!==null?N.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return de!==null?null:A(B,N,""+$,Q);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===de?R(B,N,$,Q):null;case b:return $.key===de?Y(B,N,$,Q):null;case U:return de=$._init,$=de($._payload),F(B,N,$,Q)}if(le($)||Z($))return de!==null?null:K(B,N,$,Q,null);if(typeof $.then=="function")return F(B,N,Kd($),Q);if($.$$typeof===k)return F(B,N,Ud(B,$),Q);Zd(B,$)}return null}function q(B,N,$,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return B=B.get($)||null,A(N,B,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return B=B.get(Q.key===null?$:Q.key)||null,R(N,B,Q,de);case b:return B=B.get(Q.key===null?$:Q.key)||null,Y(N,B,Q,de);case U:var Re=Q._init;return Q=Re(Q._payload),q(B,N,$,Q,de)}if(le(Q)||Z(Q))return B=B.get($)||null,K(N,B,Q,de,null);if(typeof Q.then=="function")return q(B,N,$,Kd(Q),de);if(Q.$$typeof===k)return q(B,N,$,Ud(N,Q),de);Zd(N,Q)}return null}function be(B,N,$,Q){for(var de=null,Re=null,pe=N,ye=N=0,rn=null;pe!==null&&ye<$.length;ye++){pe.index>ye?(rn=pe,pe=null):rn=pe.sibling;var qe=F(B,pe,$[ye],Q);if(qe===null){pe===null&&(pe=rn);break}t&&pe&&qe.alternate===null&&i(B,pe),N=g(qe,N,ye),Re===null?de=qe:Re.sibling=qe,Re=qe,pe=rn}if(ye===$.length)return s(B,pe),Xe&&Uo(B,ye),de;if(pe===null){for(;ye<$.length;ye++)pe=J(B,$[ye],Q),pe!==null&&(N=g(pe,N,ye),Re===null?de=pe:Re.sibling=pe,Re=pe);return Xe&&Uo(B,ye),de}for(pe=l(pe);ye<$.length;ye++)rn=q(pe,B,ye,$[ye],Q),rn!==null&&(t&&rn.alternate!==null&&pe.delete(rn.key===null?ye:rn.key),N=g(rn,N,ye),Re===null?de=rn:Re.sibling=rn,Re=rn);return t&&pe.forEach(function(io){return i(B,io)}),Xe&&Uo(B,ye),de}function xe(B,N,$,Q){if($==null)throw Error(a(151));for(var de=null,Re=null,pe=N,ye=N=0,rn=null,qe=$.next();pe!==null&&!qe.done;ye++,qe=$.next()){pe.index>ye?(rn=pe,pe=null):rn=pe.sibling;var io=F(B,pe,qe.value,Q);if(io===null){pe===null&&(pe=rn);break}t&&pe&&io.alternate===null&&i(B,pe),N=g(io,N,ye),Re===null?de=io:Re.sibling=io,Re=io,pe=rn}if(qe.done)return s(B,pe),Xe&&Uo(B,ye),de;if(pe===null){for(;!qe.done;ye++,qe=$.next())qe=J(B,qe.value,Q),qe!==null&&(N=g(qe,N,ye),Re===null?de=qe:Re.sibling=qe,Re=qe);return Xe&&Uo(B,ye),de}for(pe=l(pe);!qe.done;ye++,qe=$.next())qe=q(pe,B,ye,qe.value,Q),qe!==null&&(t&&qe.alternate!==null&&pe.delete(qe.key===null?ye:qe.key),N=g(qe,N,ye),Re===null?de=qe:Re.sibling=qe,Re=qe);return t&&pe.forEach(function(uD){return i(B,uD)}),Xe&&Uo(B,ye),de}function nt(B,N,$,Q){if(typeof $=="object"&&$!==null&&$.type===j&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:e:{for(var de=$.key;N!==null;){if(N.key===de){if(de=$.type,de===j){if(N.tag===7){s(B,N.sibling),Q=h(N,$.props.children),Q.return=B,B=Q;break e}}else if(N.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===U&&E1(de)===N.type){s(B,N.sibling),Q=h(N,$.props),Cc(Q,$),Q.return=B,B=Q;break e}s(B,N);break}else i(B,N);N=N.sibling}$.type===j?(Q=No($.props.children,B.mode,Q,$.key),Q.return=B,B=Q):(Q=zd($.type,$.key,$.props,null,B.mode,Q),Cc(Q,$),Q.return=B,B=Q)}return _(B);case b:e:{for(de=$.key;N!==null;){if(N.key===de)if(N.tag===4&&N.stateNode.containerInfo===$.containerInfo&&N.stateNode.implementation===$.implementation){s(B,N.sibling),Q=h(N,$.children||[]),Q.return=B,B=Q;break e}else{s(B,N);break}else i(B,N);N=N.sibling}Q=op($,B.mode,Q),Q.return=B,B=Q}return _(B);case U:return de=$._init,$=de($._payload),nt(B,N,$,Q)}if(le($))return be(B,N,$,Q);if(Z($)){if(de=Z($),typeof de!="function")throw Error(a(150));return $=de.call($),xe(B,N,$,Q)}if(typeof $.then=="function")return nt(B,N,Kd($),Q);if($.$$typeof===k)return nt(B,N,Ud(B,$),Q);Zd(B,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,N!==null&&N.tag===6?(s(B,N.sibling),Q=h(N,$),Q.return=B,B=Q):(s(B,N),Q=ap($,B.mode,Q),Q.return=B,B=Q),_(B)):s(B,N)}return function(B,N,$,Q){try{Ec=0;var de=nt(B,N,$,Q);return Gs=null,de}catch(pe){if(pe===xc||pe===Vd)throw pe;var Re=hi(29,pe,null,B.mode);return Re.lanes=Q,Re.return=B,Re}finally{}}}var qs=C1(!0),M1=C1(!1),Yi=I(null),Tr=null;function Ha(t){var i=t.alternate;ne(Zt,Zt.current&1),ne(Yi,t),Tr===null&&(i===null||Ps.current!==null||i.memoizedState!==null)&&(Tr=t)}function D1(t){if(t.tag===22){if(ne(Zt,Zt.current),ne(Yi,t),Tr===null){var i=t.alternate;i!==null&&i.memoizedState!==null&&(Tr=t)}}else Ya()}function Ya(){ne(Zt,Zt.current),ne(Yi,Yi.current)}function da(t){te(Yi),Tr===t&&(Tr=null),te(Zt)}var Zt=I(0);function Qd(t){for(var i=t;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||Cg(s)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function Vp(t,i,s,l){i=t.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),t.memoizedState=s,t.lanes===0&&(t.updateQueue.baseState=s)}var $p={enqueueSetState:function(t,i,s){t=t._reactInternals;var l=vi(),h=Va(l);h.payload=i,s!=null&&(h.callback=s),i=$a(t,h,l),i!==null&&(xi(i,t,l),bc(i,t,l))},enqueueReplaceState:function(t,i,s){t=t._reactInternals;var l=vi(),h=Va(l);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=$a(t,h,l),i!==null&&(xi(i,t,l),bc(i,t,l))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var s=vi(),l=Va(s);l.tag=2,i!=null&&(l.callback=i),i=$a(t,l,s),i!==null&&(xi(i,t,s),bc(i,t,s))}};function k1(t,i,s,l,h,g,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,g,_):i.prototype&&i.prototype.isPureReactComponent?!uc(s,l)||!uc(h,g):!0}function R1(t,i,s,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==t&&$p.enqueueReplaceState(i,i.state,null)}function Fo(t,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(t=t.defaultProps){s===i&&(s=v({},s));for(var h in t)s[h]===void 0&&(s[h]=t[h])}return s}var Jd=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function z1(t){Jd(t)}function O1(t){console.error(t)}function N1(t){Jd(t)}function ef(t,i){try{var s=t.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function L1(t,i,s){try{var l=t.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Pp(t,i,s){return s=Va(s),s.tag=3,s.payload={element:null},s.callback=function(){ef(t,i)},s}function U1(t){return t=Va(t),t.tag=3,t}function B1(t,i,s,l){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=l.value;t.payload=function(){return h(g)},t.callback=function(){L1(i,s,l)}}var _=s.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){L1(i,s,l),typeof h!="function"&&(Wa===null?Wa=new Set([this]):Wa.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function uM(t,i,s,l,h){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&pc(i,s,h,!0),s=Yi.current,s!==null){switch(s.tag){case 13:return Tr===null?dg():s.alternate===null&&Ct===0&&(Ct=3),s.flags&=-257,s.flags|=65536,s.lanes=h,l===gp?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),hg(t,l,h)),!1;case 22:return s.flags|=65536,l===gp?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),hg(t,l,h)),!1}throw Error(a(435,s.tag))}return hg(t,l,h),dg(),!1}if(Xe)return i=Yi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==cp&&(t=Error(a(422),{cause:l}),mc(Vi(t,s)))):(l!==cp&&(i=Error(a(423),{cause:l}),mc(Vi(i,s))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,l=Vi(l,s),h=Pp(t.stateNode,l,h),yp(t,h),Ct!==4&&(Ct=2)),!1;var g=Error(a(520),{cause:l});if(g=Vi(g,s),Nc===null?Nc=[g]:Nc.push(g),Ct!==4&&(Ct=2),i===null)return!0;l=Vi(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,t=h&-h,s.lanes|=t,t=Pp(s.stateNode,l,t),yp(s,t),!1;case 1:if(i=s.type,g=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Wa===null||!Wa.has(g))))return s.flags|=65536,h&=-h,s.lanes|=h,h=U1(h),B1(h,t,s,l),yp(s,h),!1}s=s.return}while(s!==null);return!1}var V1=Error(a(461)),tn=!1;function mn(t,i,s,l){i.child=t===null?M1(i,null,s,l):qs(i,t.child,s,l)}function $1(t,i,s,l,h){s=s.render;var g=i.ref;if("ref"in l){var _={};for(var A in l)A!=="ref"&&(_[A]=l[A])}else _=l;return Po(i),l=Tp(t,i,s,_,g,h),A=jp(),t!==null&&!tn?(Ap(t,i,h),fa(t,i,h)):(Xe&&A&&sp(i),i.flags|=1,mn(t,i,l,h),i.child)}function P1(t,i,s,l,h){if(t===null){var g=s.type;return typeof g=="function"&&!rp(g)&&g.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=g,H1(t,i,g,l,h)):(t=zd(s.type,null,l,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(g=t.child,!Wp(t,h)){var _=g.memoizedProps;if(s=s.compare,s=s!==null?s:uc,s(_,l)&&t.ref===i.ref)return fa(t,i,h)}return i.flags|=1,t=aa(g,l),t.ref=i.ref,t.return=i,i.child=t}function H1(t,i,s,l,h){if(t!==null){var g=t.memoizedProps;if(uc(g,l)&&t.ref===i.ref)if(tn=!1,i.pendingProps=l=g,Wp(t,h))(t.flags&131072)!==0&&(tn=!0);else return i.lanes=t.lanes,fa(t,i,h)}return Hp(t,i,s,l,h)}function Y1(t,i,s){var l=i.pendingProps,h=l.children,g=t!==null?t.memoizedState:null;if(l.mode==="hidden"){if((i.flags&128)!==0){if(l=g!==null?g.baseLanes|s:s,t!==null){for(h=i.child=t.child,g=0;h!==null;)g=g|h.lanes|h.childLanes,h=h.sibling;i.childLanes=g&~l}else i.childLanes=0,i.child=null;return F1(t,i,l,s)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Bd(i,g!==null?g.cachePool:null),g!==null?Hb(i,g):wp(),D1(i);else return i.lanes=i.childLanes=536870912,F1(t,i,g!==null?g.baseLanes|s:s,s)}else g!==null?(Bd(i,g.cachePool),Hb(i,g),Ya(),i.memoizedState=null):(t!==null&&Bd(i,null),wp(),Ya());return mn(t,i,h,s),i.child}function F1(t,i,s,l){var h=pp();return h=h===null?null:{parent:Kt._currentValue,pool:h},i.memoizedState={baseLanes:s,cachePool:h},t!==null&&Bd(i,null),wp(),D1(i),t!==null&&pc(t,i,l,!0),null}function tf(t,i){var s=i.ref;if(s===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(t===null||t.ref!==s)&&(i.flags|=4194816)}}function Hp(t,i,s,l,h){return Po(i),s=Tp(t,i,s,l,void 0,h),l=jp(),t!==null&&!tn?(Ap(t,i,h),fa(t,i,h)):(Xe&&l&&sp(i),i.flags|=1,mn(t,i,s,h),i.child)}function G1(t,i,s,l,h,g){return Po(i),i.updateQueue=null,s=Fb(i,l,s,h),Yb(t),l=jp(),t!==null&&!tn?(Ap(t,i,g),fa(t,i,g)):(Xe&&l&&sp(i),i.flags|=1,mn(t,i,s,g),i.child)}function q1(t,i,s,l,h){if(Po(i),i.stateNode===null){var g=Ls,_=s.contextType;typeof _=="object"&&_!==null&&(g=_n(_)),g=new s(l,g),i.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,g.updater=$p,i.stateNode=g,g._reactInternals=i,g=i.stateNode,g.props=l,g.state=i.memoizedState,g.refs={},vp(i),_=s.contextType,g.context=typeof _=="object"&&_!==null?_n(_):Ls,g.state=i.memoizedState,_=s.getDerivedStateFromProps,typeof _=="function"&&(Vp(i,s,_,l),g.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(_=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),_!==g.state&&$p.enqueueReplaceState(g,g.state,null),_c(i,l,g,h),wc(),g.state=i.memoizedState),typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(t===null){g=i.stateNode;var A=i.memoizedProps,R=Fo(s,A);g.props=R;var Y=g.context,K=s.contextType;_=Ls,typeof K=="object"&&K!==null&&(_=_n(K));var J=s.getDerivedStateFromProps;K=typeof J=="function"||typeof g.getSnapshotBeforeUpdate=="function",A=i.pendingProps!==A,K||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(A||Y!==_)&&R1(i,g,l,_),Ba=!1;var F=i.memoizedState;g.state=F,_c(i,l,g,h),wc(),Y=i.memoizedState,A||F!==Y||Ba?(typeof J=="function"&&(Vp(i,s,J,l),Y=i.memoizedState),(R=Ba||k1(i,s,R,l,F,Y,_))?(K||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(i.flags|=4194308)):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=Y),g.props=l,g.state=Y,g.context=_,l=R):(typeof g.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{g=i.stateNode,xp(t,i),_=i.memoizedProps,K=Fo(s,_),g.props=K,J=i.pendingProps,F=g.context,Y=s.contextType,R=Ls,typeof Y=="object"&&Y!==null&&(R=_n(Y)),A=s.getDerivedStateFromProps,(Y=typeof A=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(_!==J||F!==R)&&R1(i,g,l,R),Ba=!1,F=i.memoizedState,g.state=F,_c(i,l,g,h),wc();var q=i.memoizedState;_!==J||F!==q||Ba||t!==null&&t.dependencies!==null&&Ld(t.dependencies)?(typeof A=="function"&&(Vp(i,s,A,l),q=i.memoizedState),(K=Ba||k1(i,s,K,l,F,q,R)||t!==null&&t.dependencies!==null&&Ld(t.dependencies))?(Y||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(l,q,R),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(l,q,R)),typeof g.componentDidUpdate=="function"&&(i.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=q),g.props=l,g.state=q,g.context=R,l=K):(typeof g.componentDidUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(i.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&F===t.memoizedState||(i.flags|=1024),l=!1)}return g=l,tf(t,i),l=(i.flags&128)!==0,g||l?(g=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:g.render(),i.flags|=1,t!==null&&l?(i.child=qs(i,t.child,null,h),i.child=qs(i,null,s,h)):mn(t,i,s,h),i.memoizedState=g.state,t=i.child):t=fa(t,i,h),t}function I1(t,i,s,l){return hc(),i.flags|=256,mn(t,i,s,l),i.child}var Yp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Fp(t){return{baseLanes:t,cachePool:Ob()}}function Gp(t,i,s){return t=t!==null?t.childLanes&~s:0,i&&(t|=Fi),t}function X1(t,i,s){var l=i.pendingProps,h=!1,g=(i.flags&128)!==0,_;if((_=g)||(_=t!==null&&t.memoizedState===null?!1:(Zt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Xe){if(h?Ha(i):Ya(),Xe){var A=Et,R;if(R=A){e:{for(R=A,A=Sr;R.nodeType!==8;){if(!A){A=null;break e}if(R=gr(R.nextSibling),R===null){A=null;break e}}A=R}A!==null?(i.memoizedState={dehydrated:A,treeContext:Lo!==null?{id:oa,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},R=hi(18,null,null,0),R.stateNode=A,R.return=i,i.child=R,Ln=i,Et=null,R=!0):R=!1}R||Vo(i)}if(A=i.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return Cg(A)?i.lanes=32:i.lanes=536870912,null;da(i)}return A=l.children,l=l.fallback,h?(Ya(),h=i.mode,A=nf({mode:"hidden",children:A},h),l=No(l,h,s,null),A.return=i,l.return=i,A.sibling=l,i.child=A,h=i.child,h.memoizedState=Fp(s),h.childLanes=Gp(t,_,s),i.memoizedState=Yp,l):(Ha(i),qp(i,A))}if(R=t.memoizedState,R!==null&&(A=R.dehydrated,A!==null)){if(g)i.flags&256?(Ha(i),i.flags&=-257,i=Ip(t,i,s)):i.memoizedState!==null?(Ya(),i.child=t.child,i.flags|=128,i=null):(Ya(),h=l.fallback,A=i.mode,l=nf({mode:"visible",children:l.children},A),h=No(h,A,s,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,qs(i,t.child,null,s),l=i.child,l.memoizedState=Fp(s),l.childLanes=Gp(t,_,s),i.memoizedState=Yp,i=h);else if(Ha(i),Cg(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var Y=_.dgst;_=Y,l=Error(a(419)),l.stack="",l.digest=_,mc({value:l,source:null,stack:null}),i=Ip(t,i,s)}else if(tn||pc(t,i,s,!1),_=(s&t.childLanes)!==0,tn||_){if(_=ct,_!==null&&(l=s&-s,l=(l&42)!==0?1:ci(l),l=(l&(_.suspendedLanes|s))!==0?0:l,l!==0&&l!==R.retryLane))throw R.retryLane=l,Ns(t,l),xi(_,t,l),V1;A.data==="$?"||dg(),i=Ip(t,i,s)}else A.data==="$?"?(i.flags|=192,i.child=t.child,i=null):(t=R.treeContext,Et=gr(A.nextSibling),Ln=i,Xe=!0,Bo=null,Sr=!1,t!==null&&(Pi[Hi++]=oa,Pi[Hi++]=sa,Pi[Hi++]=Lo,oa=t.id,sa=t.overflow,Lo=i),i=qp(i,l.children),i.flags|=4096);return i}return h?(Ya(),h=l.fallback,A=i.mode,R=t.child,Y=R.sibling,l=aa(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,Y!==null?h=aa(Y,h):(h=No(h,A,s,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,A=t.child.memoizedState,A===null?A=Fp(s):(R=A.cachePool,R!==null?(Y=Kt._currentValue,R=R.parent!==Y?{parent:Y,pool:Y}:R):R=Ob(),A={baseLanes:A.baseLanes|s,cachePool:R}),h.memoizedState=A,h.childLanes=Gp(t,_,s),i.memoizedState=Yp,l):(Ha(i),s=t.child,t=s.sibling,s=aa(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=s,i.memoizedState=null,s)}function qp(t,i){return i=nf({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function nf(t,i){return t=hi(22,t,null,i),t.lanes=0,t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},t}function Ip(t,i,s){return qs(i,t.child,null,s),t=qp(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function W1(t,i,s){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),dp(t.return,i,s)}function Xp(t,i,s,l,h){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=l,g.tail=s,g.tailMode=h)}function K1(t,i,s){var l=i.pendingProps,h=l.revealOrder,g=l.tail;if(mn(t,i,l.children,s),l=Zt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&W1(t,s,i);else if(t.tag===19)W1(t,s,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}switch(ne(Zt,l),h){case"forwards":for(s=i.child,h=null;s!==null;)t=s.alternate,t!==null&&Qd(t)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),Xp(i,!1,h,s,g);break;case"backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&Qd(t)===null){i.child=h;break}t=h.sibling,h.sibling=s,s=h,h=t}Xp(i,!0,s,null,g);break;case"together":Xp(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function fa(t,i,s){if(t!==null&&(i.dependencies=t.dependencies),Xa|=i.lanes,(s&i.childLanes)===0)if(t!==null){if(pc(t,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(a(153));if(i.child!==null){for(t=i.child,s=aa(t,t.pendingProps),i.child=s,s.return=i;t.sibling!==null;)t=t.sibling,s=s.sibling=aa(t,t.pendingProps),s.return=i;s.sibling=null}return i.child}function Wp(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ld(t)))}function dM(t,i,s){switch(i.tag){case 3:Se(i,i.stateNode.containerInfo),Ua(i,Kt,t.memoizedState.cache),hc();break;case 27:case 5:bn(i);break;case 4:Se(i,i.stateNode.containerInfo);break;case 10:Ua(i,i.type,i.memoizedProps.value);break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(i),i.flags|=128,null):(s&i.child.childLanes)!==0?X1(t,i,s):(Ha(i),t=fa(t,i,s),t!==null?t.sibling:null);Ha(i);break;case 19:var h=(t.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(pc(t,i,s,!1),l=(s&i.childLanes)!==0),h){if(l)return K1(t,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ne(Zt,Zt.current),l)break;return null;case 22:case 23:return i.lanes=0,Y1(t,i,s);case 24:Ua(i,Kt,t.memoizedState.cache)}return fa(t,i,s)}function Z1(t,i,s){if(t!==null)if(t.memoizedProps!==i.pendingProps)tn=!0;else{if(!Wp(t,s)&&(i.flags&128)===0)return tn=!1,dM(t,i,s);tn=(t.flags&131072)!==0}else tn=!1,Xe&&(i.flags&1048576)!==0&&Eb(i,Nd,i.index);switch(i.lanes=0,i.tag){case 16:e:{t=i.pendingProps;var l=i.elementType,h=l._init;if(l=h(l._payload),i.type=l,typeof l=="function")rp(l)?(t=Fo(l,t),i.tag=1,i=q1(null,i,l,t,s)):(i.tag=0,i=Hp(null,i,l,t,s));else{if(l!=null){if(h=l.$$typeof,h===z){i.tag=11,i=$1(null,i,l,t,s);break e}else if(h===O){i.tag=14,i=P1(null,i,l,t,s);break e}}throw i=fe(l)||l,Error(a(306,i,""))}}return i;case 0:return Hp(t,i,i.type,i.pendingProps,s);case 1:return l=i.type,h=Fo(l,i.pendingProps),q1(t,i,l,h,s);case 3:e:{if(Se(i,i.stateNode.containerInfo),t===null)throw Error(a(387));l=i.pendingProps;var g=i.memoizedState;h=g.element,xp(t,i),_c(i,l,null,s);var _=i.memoizedState;if(l=_.cache,Ua(i,Kt,l),l!==g.cache&&fp(i,[Kt],s,!0),wc(),l=_.element,g.isDehydrated)if(g={element:l,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){i=I1(t,i,l,s);break e}else if(l!==h){h=Vi(Error(a(424)),i),mc(h),i=I1(t,i,l,s);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Et=gr(t.firstChild),Ln=i,Xe=!0,Bo=null,Sr=!0,s=M1(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(hc(),l===h){i=fa(t,i,s);break e}mn(t,i,l,s)}i=i.child}return i;case 26:return tf(t,i),t===null?(s=t2(i.type,null,i.pendingProps,null))?i.memoizedState=s:Xe||(s=i.type,t=i.pendingProps,l=vf(ce.current).createElement(s),l[ie]=i,l[me]=t,gn(l,s,t),Ge(l),i.stateNode=l):i.memoizedState=t2(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return bn(i),t===null&&Xe&&(l=i.stateNode=Qw(i.type,i.pendingProps,ce.current),Ln=i,Sr=!0,h=Et,Qa(i.type)?(Mg=h,Et=gr(l.firstChild)):Et=h),mn(t,i,i.pendingProps.children,s),tf(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Xe&&((h=l=Et)&&(l=VM(l,i.type,i.pendingProps,Sr),l!==null?(i.stateNode=l,Ln=i,Et=gr(l.firstChild),Sr=!1,h=!0):h=!1),h||Vo(i)),bn(i),h=i.type,g=i.pendingProps,_=t!==null?t.memoizedProps:null,l=g.children,jg(h,g)?l=null:_!==null&&jg(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Tp(t,i,iM,null,null,s),Fc._currentValue=h),tf(t,i),mn(t,i,l,s),i.child;case 6:return t===null&&Xe&&((t=s=Et)&&(s=$M(s,i.pendingProps,Sr),s!==null?(i.stateNode=s,Ln=i,Et=null,t=!0):t=!1),t||Vo(i)),null;case 13:return X1(t,i,s);case 4:return Se(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=qs(i,null,l,s):mn(t,i,l,s),i.child;case 11:return $1(t,i,i.type,i.pendingProps,s);case 7:return mn(t,i,i.pendingProps,s),i.child;case 8:return mn(t,i,i.pendingProps.children,s),i.child;case 12:return mn(t,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,Ua(i,i.type,l.value),mn(t,i,l.children,s),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Po(i),h=_n(h),l=l(h),i.flags|=1,mn(t,i,l,s),i.child;case 14:return P1(t,i,i.type,i.pendingProps,s);case 15:return H1(t,i,i.type,i.pendingProps,s);case 19:return K1(t,i,s);case 31:return l=i.pendingProps,s=i.mode,l={mode:l.mode,children:l.children},t===null?(s=nf(l,s),s.ref=i.ref,i.child=s,s.return=i,i=s):(s=aa(t.child,l),s.ref=i.ref,i.child=s,s.return=i,i=s),i;case 22:return Y1(t,i,s);case 24:return Po(i),l=_n(Kt),t===null?(h=pp(),h===null&&(h=ct,g=hp(),h.pooledCache=g,g.refCount++,g!==null&&(h.pooledCacheLanes|=s),h=g),i.memoizedState={parent:l,cache:h},vp(i),Ua(i,Kt,h)):((t.lanes&s)!==0&&(xp(t,i),_c(i,null,null,s),wc()),h=t.memoizedState,g=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ua(i,Kt,l)):(l=g.cache,Ua(i,Kt,l),l!==h.cache&&fp(i,[Kt],s,!0))),mn(t,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function ha(t){t.flags|=4}function Q1(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!o2(i)){if(i=Yi.current,i!==null&&((Ye&4194048)===Ye?Tr!==null:(Ye&62914560)!==Ye&&(Ye&536870912)===0||i!==Tr))throw yc=gp,Nb;t.flags|=8192}}function rf(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?wr():536870912,t.lanes|=i,Ks|=i)}function Mc(t,i){if(!Xe)switch(t.tailMode){case"hidden":i=t.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?t.tail=null:s.sibling=null;break;case"collapsed":s=t.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function bt(t){var i=t.alternate!==null&&t.alternate.child===t.child,s=0,l=0;if(i)for(var h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)s|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=s,i}function fM(t,i,s){var l=i.pendingProps;switch(lp(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(i),null;case 1:return bt(i),null;case 3:return s=i.stateNode,l=null,t!==null&&(l=t.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),ca(Kt),Fe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(t===null||t.child===null)&&(fc(i)?ha(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Db())),bt(i),null;case 26:return s=i.memoizedState,t===null?(ha(i),s!==null?(bt(i),Q1(i,s)):(bt(i),i.flags&=-16777217)):s?s!==t.memoizedState?(ha(i),bt(i),Q1(i,s)):(bt(i),i.flags&=-16777217):(t.memoizedProps!==l&&ha(i),bt(i),i.flags&=-16777217),null;case 27:dt(i),s=ce.current;var h=i.type;if(t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ha(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return bt(i),null}t=oe.current,fc(i)?Cb(i):(t=Qw(h,l,s),i.stateNode=t,ha(i))}return bt(i),null;case 5:if(dt(i),s=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==l&&ha(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return bt(i),null}if(t=oe.current,fc(i))Cb(i);else{switch(h=vf(ce.current),t){case 1:t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case 2:t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;default:switch(s){case"svg":t=h.createElementNS("http://www.w3.org/2000/svg",s);break;case"math":t=h.createElementNS("http://www.w3.org/1998/Math/MathML",s);break;case"script":t=h.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof l.is=="string"?h.createElement("select",{is:l.is}):h.createElement("select"),l.multiple?t.multiple=!0:l.size&&(t.size=l.size);break;default:t=typeof l.is=="string"?h.createElement(s,{is:l.is}):h.createElement(s)}}t[ie]=i,t[me]=l;e:for(h=i.child;h!==null;){if(h.tag===5||h.tag===6)t.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===i)break e;for(;h.sibling===null;){if(h.return===null||h.return===i)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}i.stateNode=t;e:switch(gn(t,s,l),s){case"button":case"input":case"select":case"textarea":t=!!l.autoFocus;break e;case"img":t=!0;break e;default:t=!1}t&&ha(i)}}return bt(i),i.flags&=-16777217,null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==l&&ha(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(t=ce.current,fc(i)){if(t=i.stateNode,s=i.memoizedProps,l=null,h=Ln,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}t[ie]=i,t=!!(t.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||Gw(t.nodeValue,s)),t||Vo(i)}else t=vf(t).createTextNode(l),t[ie]=i,i.stateNode=t}return bt(i),null;case 13:if(l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=fc(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[ie]=i}else hc(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;bt(i),h=!1}else h=Db(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(da(i),i):(da(i),null)}if(da(i),(i.flags&128)!==0)return i.lanes=s,i;if(s=l!==null,t=t!==null&&t.memoizedState!==null,s){l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool);var g=null;l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(g=l.memoizedState.cachePool.pool),g!==h&&(l.flags|=2048)}return s!==t&&s&&(i.child.flags|=8192),rf(i,i.updateQueue),bt(i),null;case 4:return Fe(),t===null&&bg(i.stateNode.containerInfo),bt(i),null;case 10:return ca(i.type),bt(i),null;case 19:if(te(Zt),h=i.memoizedState,h===null)return bt(i),null;if(l=(i.flags&128)!==0,g=h.rendering,g===null)if(l)Mc(h,!1);else{if(Ct!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(g=Qd(t),g!==null){for(i.flags|=128,Mc(h,!1),t=g.updateQueue,i.updateQueue=t,rf(i,t),i.subtreeFlags=0,t=s,s=i.child;s!==null;)Ab(s,t),s=s.sibling;return ne(Zt,Zt.current&1|2),i.child}t=t.sibling}h.tail!==null&&X()>sf&&(i.flags|=128,l=!0,Mc(h,!1),i.lanes=4194304)}else{if(!l)if(t=Qd(g),t!==null){if(i.flags|=128,l=!0,t=t.updateQueue,i.updateQueue=t,rf(i,t),Mc(h,!0),h.tail===null&&h.tailMode==="hidden"&&!g.alternate&&!Xe)return bt(i),null}else 2*X()-h.renderingStartTime>sf&&s!==536870912&&(i.flags|=128,l=!0,Mc(h,!1),i.lanes=4194304);h.isBackwards?(g.sibling=i.child,i.child=g):(t=h.last,t!==null?t.sibling=g:i.child=g,h.last=g)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=X(),i.sibling=null,t=Zt.current,ne(Zt,l?t&1|2:t&1),i):(bt(i),null);case 22:case 23:return da(i),_p(),l=i.memoizedState!==null,t!==null?t.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(bt(i),i.subtreeFlags&6&&(i.flags|=8192)):bt(i),s=i.updateQueue,s!==null&&rf(i,s.retryQueue),s=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),t!==null&&te(Ho),null;case 24:return s=null,t!==null&&(s=t.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),ca(Kt),bt(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function hM(t,i){switch(lp(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ca(Kt),Fe(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return dt(i),null;case 13:if(da(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(a(340));hc()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return te(Zt),null;case 4:return Fe(),null;case 10:return ca(i.type),null;case 22:case 23:return da(i),_p(),t!==null&&te(Ho),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return ca(Kt),null;case 25:return null;default:return null}}function J1(t,i){switch(lp(i),i.tag){case 3:ca(Kt),Fe();break;case 26:case 27:case 5:dt(i);break;case 4:Fe();break;case 13:da(i);break;case 19:te(Zt);break;case 10:ca(i.type);break;case 22:case 23:da(i),_p(),t!==null&&te(Ho);break;case 24:ca(Kt)}}function Dc(t,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var h=l.next;s=h;do{if((s.tag&t)===t){l=void 0;var g=s.create,_=s.inst;l=g(),_.destroy=l}s=s.next}while(s!==h)}}catch(A){at(i,i.return,A)}}function Fa(t,i,s){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var g=h.next;l=g;do{if((l.tag&t)===t){var _=l.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,h=i;var R=s,Y=A;try{Y()}catch(K){at(h,R,K)}}}l=l.next}while(l!==g)}}catch(K){at(i,i.return,K)}}function ew(t){var i=t.updateQueue;if(i!==null){var s=t.stateNode;try{Pb(i,s)}catch(l){at(t,t.return,l)}}}function tw(t,i,s){s.props=Fo(t.type,t.memoizedProps),s.state=t.memoizedState;try{s.componentWillUnmount()}catch(l){at(t,i,l)}}function kc(t,i){try{var s=t.ref;if(s!==null){switch(t.tag){case 26:case 27:case 5:var l=t.stateNode;break;case 30:l=t.stateNode;break;default:l=t.stateNode}typeof s=="function"?t.refCleanup=s(l):s.current=l}}catch(h){at(t,i,h)}}function jr(t,i){var s=t.ref,l=t.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(h){at(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){at(t,i,h)}else s.current=null}function nw(t){var i=t.type,s=t.memoizedProps,l=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(h){at(t,t.return,h)}}function Kp(t,i,s){try{var l=t.stateNode;OM(l,t.type,s,i),l[me]=i}catch(h){at(t,t.return,h)}}function iw(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function Zp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qp(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(t,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(t),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=gf));else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode,i=null),t=t.child,t!==null))for(Qp(t,i,s),t=t.sibling;t!==null;)Qp(t,i,s),t=t.sibling}function af(t,i,s){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?s.insertBefore(t,i):s.appendChild(t);else if(l!==4&&(l===27&&Qa(t.type)&&(s=t.stateNode),t=t.child,t!==null))for(af(t,i,s),t=t.sibling;t!==null;)af(t,i,s),t=t.sibling}function rw(t){var i=t.stateNode,s=t.memoizedProps;try{for(var l=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);gn(i,l,s),i[ie]=t,i[me]=s}catch(g){at(t,t.return,g)}}var ma=!1,zt=!1,Jp=!1,aw=typeof WeakSet=="function"?WeakSet:Set,nn=null;function mM(t,i){if(t=t.containerInfo,Sg=Sf,t=gb(t),Zm(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else e:{s=(s=t.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var h=l.anchorOffset,g=l.focusNode;l=l.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var _=0,A=-1,R=-1,Y=0,K=0,J=t,F=null;t:for(;;){for(var q;J!==s||h!==0&&J.nodeType!==3||(A=_+h),J!==g||l!==0&&J.nodeType!==3||(R=_+l),J.nodeType===3&&(_+=J.nodeValue.length),(q=J.firstChild)!==null;)F=J,J=q;for(;;){if(J===t)break t;if(F===s&&++Y===h&&(A=_),F===g&&++K===l&&(R=_),(q=J.nextSibling)!==null)break;J=F,F=J.parentNode}J=q}s=A===-1||R===-1?null:{start:A,end:R}}else s=null}s=s||{start:0,end:0}}else s=null;for(Tg={focusedElem:t,selectionRange:s},Sf=!1,nn=i;nn!==null;)if(i=nn,t=i.child,(i.subtreeFlags&1024)!==0&&t!==null)t.return=i,nn=t;else for(;nn!==null;){switch(i=nn,g=i.alternate,t=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&g!==null){t=void 0,s=i,h=g.memoizedProps,g=g.memoizedState,l=s.stateNode;try{var be=Fo(s.type,h,s.elementType===s.type);t=l.getSnapshotBeforeUpdate(be,g),l.__reactInternalSnapshotBeforeUpdate=t}catch(xe){at(s,s.return,xe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,s=t.nodeType,s===9)Eg(t);else if(s===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Eg(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=i.sibling,t!==null){t.return=i.return,nn=t;break}nn=i.return}}function ow(t,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:Ga(t,s),l&4&&Dc(5,s);break;case 1:if(Ga(t,s),l&4)if(t=s.stateNode,i===null)try{t.componentDidMount()}catch(_){at(s,s.return,_)}else{var h=Fo(s.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){at(s,s.return,_)}}l&64&&ew(s),l&512&&kc(s,s.return);break;case 3:if(Ga(t,s),l&64&&(t=s.updateQueue,t!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{Pb(t,i)}catch(_){at(s,s.return,_)}}break;case 27:i===null&&l&4&&rw(s);case 26:case 5:Ga(t,s),i===null&&l&4&&nw(s),l&512&&kc(s,s.return);break;case 12:Ga(t,s);break;case 13:Ga(t,s),l&4&&cw(t,s),l&64&&(t=s.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(s=SM.bind(null,s),PM(t,s))));break;case 22:if(l=s.memoizedState!==null||ma,!l){i=i!==null&&i.memoizedState!==null||zt,h=ma;var g=zt;ma=l,(zt=i)&&!g?qa(t,s,(s.subtreeFlags&8772)!==0):Ga(t,s),ma=h,zt=g}break;case 30:break;default:Ga(t,s)}}function sw(t){var i=t.alternate;i!==null&&(t.alternate=null,sw(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&lt(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var vt=null,Qn=!1;function pa(t,i,s){for(s=s.child;s!==null;)lw(t,i,s),s=s.sibling}function lw(t,i,s){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(qn,s)}catch{}switch(s.tag){case 26:zt||jr(s,i),pa(t,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:zt||jr(s,i);var l=vt,h=Qn;Qa(s.type)&&(vt=s.stateNode,Qn=!1),pa(t,i,s),$c(s.stateNode),vt=l,Qn=h;break;case 5:zt||jr(s,i);case 6:if(l=vt,h=Qn,vt=null,pa(t,i,s),vt=l,Qn=h,vt!==null)if(Qn)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(s.stateNode)}catch(g){at(s,i,g)}else try{vt.removeChild(s.stateNode)}catch(g){at(s,i,g)}break;case 18:vt!==null&&(Qn?(t=vt,Kw(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,s.stateNode),Xc(t)):Kw(vt,s.stateNode));break;case 4:l=vt,h=Qn,vt=s.stateNode.containerInfo,Qn=!0,pa(t,i,s),vt=l,Qn=h;break;case 0:case 11:case 14:case 15:zt||Fa(2,s,i),zt||Fa(4,s,i),pa(t,i,s);break;case 1:zt||(jr(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&tw(s,i,l)),pa(t,i,s);break;case 21:pa(t,i,s);break;case 22:zt=(l=zt)||s.memoizedState!==null,pa(t,i,s),zt=l;break;default:pa(t,i,s)}}function cw(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Xc(t)}catch(s){at(i,i.return,s)}}function pM(t){switch(t.tag){case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new aw),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new aw),i;default:throw Error(a(435,t.tag))}}function eg(t,i){var s=pM(t);i.forEach(function(l){var h=TM.bind(null,t,l);s.has(l)||(s.add(l),l.then(h,h))})}function mi(t,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var h=s[l],g=t,_=i,A=_;e:for(;A!==null;){switch(A.tag){case 27:if(Qa(A.type)){vt=A.stateNode,Qn=!1;break e}break;case 5:vt=A.stateNode,Qn=!1;break e;case 3:case 4:vt=A.stateNode.containerInfo,Qn=!0;break e}A=A.return}if(vt===null)throw Error(a(160));lw(g,_,h),vt=null,Qn=!1,g=h.alternate,g!==null&&(g.return=null),h.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)uw(i,t),i=i.sibling}var pr=null;function uw(t,i){var s=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:mi(i,t),pi(t),l&4&&(Fa(3,t,t.return),Dc(3,t),Fa(5,t,t.return));break;case 1:mi(i,t),pi(t),l&512&&(zt||s===null||jr(s,s.return)),l&64&&ma&&(t=t.updateQueue,t!==null&&(l=t.callbacks,l!==null&&(s=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var h=pr;if(mi(i,t),pi(t),l&512&&(zt||s===null||jr(s,s.return)),l&4){var g=s!==null?s.memoizedState:null;if(l=t.memoizedState,s===null)if(l===null)if(t.stateNode===null){e:{l=t.type,s=t.memoizedProps,h=h.ownerDocument||h;t:switch(l){case"title":g=h.getElementsByTagName("title")[0],(!g||g[At]||g[ie]||g.namespaceURI==="http://www.w3.org/2000/svg"||g.hasAttribute("itemprop"))&&(g=h.createElement(l),h.head.insertBefore(g,h.querySelector("head > title"))),gn(g,l,s),g[ie]=t,Ge(g),l=g;break e;case"link":var _=r2("link","href",h).get(l+(s.href||""));if(_){for(var A=0;A<_.length;A++)if(g=_[A],g.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&g.getAttribute("rel")===(s.rel==null?null:s.rel)&&g.getAttribute("title")===(s.title==null?null:s.title)&&g.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){_.splice(A,1);break t}}g=h.createElement(l),gn(g,l,s),h.head.appendChild(g);break;case"meta":if(_=r2("meta","content",h).get(l+(s.content||""))){for(A=0;A<_.length;A++)if(g=_[A],g.getAttribute("content")===(s.content==null?null:""+s.content)&&g.getAttribute("name")===(s.name==null?null:s.name)&&g.getAttribute("property")===(s.property==null?null:s.property)&&g.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&g.getAttribute("charset")===(s.charSet==null?null:s.charSet)){_.splice(A,1);break t}}g=h.createElement(l),gn(g,l,s),h.head.appendChild(g);break;default:throw Error(a(468,l))}g[ie]=t,Ge(g),l=g}t.stateNode=l}else a2(h,t.type,t.stateNode);else t.stateNode=i2(h,l,t.memoizedProps);else g!==l?(g===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):g.count--,l===null?a2(h,t.type,t.stateNode):i2(h,l,t.memoizedProps)):l===null&&t.stateNode!==null&&Kp(t,t.memoizedProps,s.memoizedProps)}break;case 27:mi(i,t),pi(t),l&512&&(zt||s===null||jr(s,s.return)),s!==null&&l&4&&Kp(t,t.memoizedProps,s.memoizedProps);break;case 5:if(mi(i,t),pi(t),l&512&&(zt||s===null||jr(s,s.return)),t.flags&32){h=t.stateNode;try{Cs(h,"")}catch(q){at(t,t.return,q)}}l&4&&t.stateNode!=null&&(h=t.memoizedProps,Kp(t,h,s!==null?s.memoizedProps:h)),l&1024&&(Jp=!0);break;case 6:if(mi(i,t),pi(t),l&4){if(t.stateNode===null)throw Error(a(162));l=t.memoizedProps,s=t.stateNode;try{s.nodeValue=l}catch(q){at(t,t.return,q)}}break;case 3:if(bf=null,h=pr,pr=xf(i.containerInfo),mi(i,t),pr=h,pi(t),l&4&&s!==null&&s.memoizedState.isDehydrated)try{Xc(i.containerInfo)}catch(q){at(t,t.return,q)}Jp&&(Jp=!1,dw(t));break;case 4:l=pr,pr=xf(t.stateNode.containerInfo),mi(i,t),pi(t),pr=l;break;case 12:mi(i,t),pi(t);break;case 13:mi(i,t),pi(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(og=X()),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,eg(t,l)));break;case 22:h=t.memoizedState!==null;var R=s!==null&&s.memoizedState!==null,Y=ma,K=zt;if(ma=Y||h,zt=K||R,mi(i,t),zt=K,ma=Y,pi(t),l&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||R||ma||zt||Go(t)),s=null,i=t;;){if(i.tag===5||i.tag===26){if(s===null){R=s=i;try{if(g=R.stateNode,h)_=g.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=R.stateNode;var J=R.memoizedProps.style,F=J!=null&&J.hasOwnProperty("display")?J.display:null;A.style.display=F==null||typeof F=="boolean"?"":(""+F).trim()}}catch(q){at(R,R.return,q)}}}else if(i.tag===6){if(s===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(q){at(R,R.return,q)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=t.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,eg(t,s))));break;case 19:mi(i,t),pi(t),l&4&&(l=t.updateQueue,l!==null&&(t.updateQueue=null,eg(t,l)));break;case 30:break;case 21:break;default:mi(i,t),pi(t)}}function pi(t){var i=t.flags;if(i&2){try{for(var s,l=t.return;l!==null;){if(iw(l)){s=l;break}l=l.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,g=Zp(t);af(t,g,h);break;case 5:var _=s.stateNode;s.flags&32&&(Cs(_,""),s.flags&=-33);var A=Zp(t);af(t,A,_);break;case 3:case 4:var R=s.stateNode.containerInfo,Y=Zp(t);Qp(t,Y,R);break;default:throw Error(a(161))}}catch(K){at(t,t.return,K)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function dw(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;dw(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Ga(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)ow(t,i.alternate,i),i=i.sibling}function Go(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:Fa(4,i,i.return),Go(i);break;case 1:jr(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&tw(i,i.return,s),Go(i);break;case 27:$c(i.stateNode);case 26:case 5:jr(i,i.return),Go(i);break;case 22:i.memoizedState===null&&Go(i);break;case 30:Go(i);break;default:Go(i)}t=t.sibling}}function qa(t,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=t,g=i,_=g.flags;switch(g.tag){case 0:case 11:case 15:qa(h,g,s),Dc(4,g);break;case 1:if(qa(h,g,s),l=g,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(Y){at(l,l.return,Y)}if(l=g,h=l.updateQueue,h!==null){var A=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)$b(R[h],A)}catch(Y){at(l,l.return,Y)}}s&&_&64&&ew(g),kc(g,g.return);break;case 27:rw(g);case 26:case 5:qa(h,g,s),s&&l===null&&_&4&&nw(g),kc(g,g.return);break;case 12:qa(h,g,s);break;case 13:qa(h,g,s),s&&_&4&&cw(h,g);break;case 22:g.memoizedState===null&&qa(h,g,s),kc(g,g.return);break;case 30:break;default:qa(h,g,s)}i=i.sibling}}function tg(t,i){var s=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==s&&(t!=null&&t.refCount++,s!=null&&gc(s))}function ng(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&gc(t))}function Ar(t,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)fw(t,i,s,l),i=i.sibling}function fw(t,i,s,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ar(t,i,s,l),h&2048&&Dc(9,i);break;case 1:Ar(t,i,s,l);break;case 3:Ar(t,i,s,l),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&gc(t)));break;case 12:if(h&2048){Ar(t,i,s,l),t=i.stateNode;try{var g=i.memoizedProps,_=g.id,A=g.onPostCommit;typeof A=="function"&&A(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(R){at(i,i.return,R)}}else Ar(t,i,s,l);break;case 13:Ar(t,i,s,l);break;case 23:break;case 22:g=i.stateNode,_=i.alternate,i.memoizedState!==null?g._visibility&2?Ar(t,i,s,l):Rc(t,i):g._visibility&2?Ar(t,i,s,l):(g._visibility|=2,Is(t,i,s,l,(i.subtreeFlags&10256)!==0)),h&2048&&tg(_,i);break;case 24:Ar(t,i,s,l),h&2048&&ng(i.alternate,i);break;default:Ar(t,i,s,l)}}function Is(t,i,s,l,h){for(h=h&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var g=t,_=i,A=s,R=l,Y=_.flags;switch(_.tag){case 0:case 11:case 15:Is(g,_,A,R,h),Dc(8,_);break;case 23:break;case 22:var K=_.stateNode;_.memoizedState!==null?K._visibility&2?Is(g,_,A,R,h):Rc(g,_):(K._visibility|=2,Is(g,_,A,R,h)),h&&Y&2048&&tg(_.alternate,_);break;case 24:Is(g,_,A,R,h),h&&Y&2048&&ng(_.alternate,_);break;default:Is(g,_,A,R,h)}i=i.sibling}}function Rc(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=t,l=i,h=l.flags;switch(l.tag){case 22:Rc(s,l),h&2048&&tg(l.alternate,l);break;case 24:Rc(s,l),h&2048&&ng(l.alternate,l);break;default:Rc(s,l)}i=i.sibling}}var zc=8192;function Xs(t){if(t.subtreeFlags&zc)for(t=t.child;t!==null;)hw(t),t=t.sibling}function hw(t){switch(t.tag){case 26:Xs(t),t.flags&zc&&t.memoizedState!==null&&eD(pr,t.memoizedState,t.memoizedProps);break;case 5:Xs(t);break;case 3:case 4:var i=pr;pr=xf(t.stateNode.containerInfo),Xs(t),pr=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=zc,zc=16777216,Xs(t),zc=i):Xs(t));break;default:Xs(t)}}function mw(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function Oc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];nn=l,gw(l,t)}mw(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)pw(t),t=t.sibling}function pw(t){switch(t.tag){case 0:case 11:case 15:Oc(t),t.flags&2048&&Fa(9,t,t.return);break;case 3:Oc(t);break;case 12:Oc(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,of(t)):Oc(t);break;default:Oc(t)}}function of(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];nn=l,gw(l,t)}mw(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:Fa(8,i,i.return),of(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,of(i));break;default:of(i)}t=t.sibling}}function gw(t,i){for(;nn!==null;){var s=nn;switch(s.tag){case 0:case 11:case 15:Fa(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:gc(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,nn=l;else e:for(s=t;nn!==null;){l=nn;var h=l.sibling,g=l.return;if(sw(l),l===s){nn=null;break e}if(h!==null){h.return=g,nn=h;break e}nn=g}}}var gM={getCacheForType:function(t){var i=_n(Kt),s=i.data.get(t);return s===void 0&&(s=t(),i.data.set(t,s)),s}},vM=typeof WeakMap=="function"?WeakMap:Map,Qe=0,ct=null,Ue=null,Ye=0,Je=0,gi=null,Ia=!1,Ws=!1,ig=!1,ga=0,Ct=0,Xa=0,qo=0,rg=0,Fi=0,Ks=0,Nc=null,Jn=null,ag=!1,og=0,sf=1/0,lf=null,Wa=null,pn=0,Ka=null,Zs=null,Qs=0,sg=0,lg=null,vw=null,Lc=0,cg=null;function vi(){if((Qe&2)!==0&&Ye!==0)return Ye&-Ye;if(V.T!==null){var t=Vs;return t!==0?t:gg()}return Te()}function xw(){Fi===0&&(Fi=(Ye&536870912)===0||Xe?Ae():536870912);var t=Yi.current;return t!==null&&(t.flags|=32),Fi}function xi(t,i,s){(t===ct&&(Je===2||Je===9)||t.cancelPendingCommit!==null)&&(Js(t,0),Za(t,Ye,Fi,!1)),fn(t,s),((Qe&2)===0||t!==ct)&&(t===ct&&((Qe&2)===0&&(qo|=s),Ct===4&&Za(t,Ye,Fi,!1)),Er(t))}function yw(t,i,s){if((Qe&6)!==0)throw Error(a(327));var l=!s&&(i&124)===0&&(i&t.expiredLanes)===0||Wn(t,i),h=l?bM(t,i):fg(t,i,!0),g=l;do{if(h===0){Ws&&!l&&Za(t,i,0,!1);break}else{if(s=t.current.alternate,g&&!xM(s)){h=fg(t,i,!1),g=!1;continue}if(h===2){if(g=i,t.errorRecoveryDisabledLanes&g)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var A=t;h=Nc;var R=A.current.memoizedState.isDehydrated;if(R&&(Js(A,_).flags|=256),_=fg(A,_,!1),_!==2){if(ig&&!R){A.errorRecoveryDisabledLanes|=g,qo|=g,h=4;break e}g=Jn,Jn=h,g!==null&&(Jn===null?Jn=g:Jn.push.apply(Jn,g))}h=_}if(g=!1,h!==2)continue}}if(h===1){Js(t,0),Za(t,i,0,!0);break}e:{switch(l=t,g=h,g){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Za(l,i,Fi,!Ia);break e;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=og+300-X(),10<h)){if(Za(l,i,Fi,!Ia),hr(l,0,!0)!==0)break e;l.timeoutHandle=Xw(bw.bind(null,l,s,Jn,lf,ag,i,Fi,qo,Ks,Ia,g,2,-0,0),h);break e}bw(l,s,Jn,lf,ag,i,Fi,qo,Ks,Ia,g,0,-0,0)}}break}while(!0);Er(t)}function bw(t,i,s,l,h,g,_,A,R,Y,K,J,F,q){if(t.timeoutHandle=-1,J=i.subtreeFlags,(J&8192||(J&16785408)===16785408)&&(Yc={stylesheets:null,count:0,unsuspend:JM},hw(i),J=tD(),J!==null)){t.cancelPendingCommit=J(Ew.bind(null,t,i,g,s,l,h,_,A,R,K,1,F,q)),Za(t,g,_,!Y);return}Ew(t,i,g,s,l,h,_,A,R)}function xM(t){for(var i=t;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var h=s[l],g=h.getSnapshot;h=h.value;try{if(!fi(g(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Za(t,i,s,l){i&=~rg,i&=~qo,t.suspendedLanes|=i,t.pingedLanes&=~i,l&&(t.warmLanes|=i),l=t.expirationTimes;for(var h=i;0<h;){var g=31-st(h),_=1<<g;l[g]=-1,h&=~_}s!==0&&_r(t,s,i)}function cf(){return(Qe&6)===0?(Uc(0),!1):!0}function ug(){if(Ue!==null){if(Je===0)var t=Ue.return;else t=Ue,la=$o=null,Ep(t),Gs=null,Ec=0,t=Ue;for(;t!==null;)J1(t.alternate,t),t=t.return;Ue=null}}function Js(t,i){var s=t.timeoutHandle;s!==-1&&(t.timeoutHandle=-1,LM(s)),s=t.cancelPendingCommit,s!==null&&(t.cancelPendingCommit=null,s()),ug(),ct=t,Ue=s=aa(t.current,null),Ye=i,Je=0,gi=null,Ia=!1,Ws=Wn(t,i),ig=!1,Ks=Fi=rg=qo=Xa=Ct=0,Jn=Nc=null,ag=!1,(i&8)!==0&&(i|=i&32);var l=t.entangledLanes;if(l!==0)for(t=t.entanglements,l&=i;0<l;){var h=31-st(l),g=1<<h;i|=t[h],l&=~g}return ga=i,Dd(),s}function ww(t,i){De=null,V.H=Wd,i===xc||i===Vd?(i=Bb(),Je=3):i===Nb?(i=Bb(),Je=4):Je=i===V1?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,Ue===null&&(Ct=1,ef(t,Vi(i,t.current)))}function _w(){var t=V.H;return V.H=Wd,t===null?Wd:t}function Sw(){var t=V.A;return V.A=gM,t}function dg(){Ct=4,Ia||(Ye&4194048)!==Ye&&Yi.current!==null||(Ws=!0),(Xa&134217727)===0&&(qo&134217727)===0||ct===null||Za(ct,Ye,Fi,!1)}function fg(t,i,s){var l=Qe;Qe|=2;var h=_w(),g=Sw();(ct!==t||Ye!==i)&&(lf=null,Js(t,i)),i=!1;var _=Ct;e:do try{if(Je!==0&&Ue!==null){var A=Ue,R=gi;switch(Je){case 8:ug(),_=6;break e;case 3:case 2:case 9:case 6:Yi.current===null&&(i=!0);var Y=Je;if(Je=0,gi=null,el(t,A,R,Y),s&&Ws){_=0;break e}break;default:Y=Je,Je=0,gi=null,el(t,A,R,Y)}}yM(),_=Ct;break}catch(K){ww(t,K)}while(!0);return i&&t.shellSuspendCounter++,la=$o=null,Qe=l,V.H=h,V.A=g,Ue===null&&(ct=null,Ye=0,Dd()),_}function yM(){for(;Ue!==null;)Tw(Ue)}function bM(t,i){var s=Qe;Qe|=2;var l=_w(),h=Sw();ct!==t||Ye!==i?(lf=null,sf=X()+500,Js(t,i)):Ws=Wn(t,i);e:do try{if(Je!==0&&Ue!==null){i=Ue;var g=gi;t:switch(Je){case 1:Je=0,gi=null,el(t,i,g,1);break;case 2:case 9:if(Lb(g)){Je=0,gi=null,jw(i);break}i=function(){Je!==2&&Je!==9||ct!==t||(Je=7),Er(t)},g.then(i,i);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:Lb(g)?(Je=0,gi=null,jw(i)):(Je=0,gi=null,el(t,i,g,7));break;case 5:var _=null;switch(Ue.tag){case 26:_=Ue.memoizedState;case 5:case 27:var A=Ue;if(!_||o2(_)){Je=0,gi=null;var R=A.sibling;if(R!==null)Ue=R;else{var Y=A.return;Y!==null?(Ue=Y,uf(Y)):Ue=null}break t}}Je=0,gi=null,el(t,i,g,5);break;case 6:Je=0,gi=null,el(t,i,g,6);break;case 8:ug(),Ct=6;break e;default:throw Error(a(462))}}wM();break}catch(K){ww(t,K)}while(!0);return la=$o=null,V.H=l,V.A=h,Qe=s,Ue!==null?0:(ct=null,Ye=0,Dd(),Ct)}function wM(){for(;Ue!==null&&!wn();)Tw(Ue)}function Tw(t){var i=Z1(t.alternate,t,ga);t.memoizedProps=t.pendingProps,i===null?uf(t):Ue=i}function jw(t){var i=t,s=i.alternate;switch(i.tag){case 15:case 0:i=G1(s,i,i.pendingProps,i.type,void 0,Ye);break;case 11:i=G1(s,i,i.pendingProps,i.type.render,i.ref,Ye);break;case 5:Ep(i);default:J1(s,i),i=Ue=Ab(i,ga),i=Z1(s,i,ga)}t.memoizedProps=t.pendingProps,i===null?uf(t):Ue=i}function el(t,i,s,l){la=$o=null,Ep(i),Gs=null,Ec=0;var h=i.return;try{if(uM(t,h,i,s,Ye)){Ct=1,ef(t,Vi(s,t.current)),Ue=null;return}}catch(g){if(h!==null)throw Ue=h,g;Ct=1,ef(t,Vi(s,t.current)),Ue=null;return}i.flags&32768?(Xe||l===1?t=!0:Ws||(Ye&536870912)!==0?t=!1:(Ia=t=!0,(l===2||l===9||l===3||l===6)&&(l=Yi.current,l!==null&&l.tag===13&&(l.flags|=16384))),Aw(i,t)):uf(i)}function uf(t){var i=t;do{if((i.flags&32768)!==0){Aw(i,Ia);return}t=i.return;var s=fM(i.alternate,i,ga);if(s!==null){Ue=s;return}if(i=i.sibling,i!==null){Ue=i;return}Ue=i=t}while(i!==null);Ct===0&&(Ct=5)}function Aw(t,i){do{var s=hM(t.alternate,t);if(s!==null){s.flags&=32767,Ue=s;return}if(s=t.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(t=t.sibling,t!==null)){Ue=t;return}Ue=t=s}while(t!==null);Ct=6,Ue=null}function Ew(t,i,s,l,h,g,_,A,R){t.cancelPendingCommit=null;do df();while(pn!==0);if((Qe&6)!==0)throw Error(a(327));if(i!==null){if(i===t.current)throw Error(a(177));if(g=i.lanes|i.childLanes,g|=np,li(t,s,g,_,A,R),t===ct&&(Ue=ct=null,Ye=0),Zs=i,Ka=t,Qs=s,sg=g,lg=h,vw=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,jM(rt,function(){return Rw(),null})):(t.callbackNode=null,t.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=V.T,V.T=null,h=G.p,G.p=2,_=Qe,Qe|=4;try{mM(t,i,s)}finally{Qe=_,G.p=h,V.T=l}}pn=1,Cw(),Mw(),Dw()}}function Cw(){if(pn===1){pn=0;var t=Ka,i=Zs,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=V.T,V.T=null;var l=G.p;G.p=2;var h=Qe;Qe|=4;try{uw(i,t);var g=Tg,_=gb(t.containerInfo),A=g.focusedElem,R=g.selectionRange;if(_!==A&&A&&A.ownerDocument&&pb(A.ownerDocument.documentElement,A)){if(R!==null&&Zm(A)){var Y=R.start,K=R.end;if(K===void 0&&(K=Y),"selectionStart"in A)A.selectionStart=Y,A.selectionEnd=Math.min(K,A.value.length);else{var J=A.ownerDocument||document,F=J&&J.defaultView||window;if(F.getSelection){var q=F.getSelection(),be=A.textContent.length,xe=Math.min(R.start,be),nt=R.end===void 0?xe:Math.min(R.end,be);!q.extend&&xe>nt&&(_=nt,nt=xe,xe=_);var B=mb(A,xe),N=mb(A,nt);if(B&&N&&(q.rangeCount!==1||q.anchorNode!==B.node||q.anchorOffset!==B.offset||q.focusNode!==N.node||q.focusOffset!==N.offset)){var $=J.createRange();$.setStart(B.node,B.offset),q.removeAllRanges(),xe>nt?(q.addRange($),q.extend(N.node,N.offset)):($.setEnd(N.node,N.offset),q.addRange($))}}}}for(J=[],q=A;q=q.parentNode;)q.nodeType===1&&J.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<J.length;A++){var Q=J[A];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Sf=!!Sg,Tg=Sg=null}finally{Qe=h,G.p=l,V.T=s}}t.current=i,pn=2}}function Mw(){if(pn===2){pn=0;var t=Ka,i=Zs,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=V.T,V.T=null;var l=G.p;G.p=2;var h=Qe;Qe|=4;try{ow(t,i.alternate,i)}finally{Qe=h,G.p=l,V.T=s}}pn=3}}function Dw(){if(pn===4||pn===3){pn=0,Rn();var t=Ka,i=Zs,s=Qs,l=vw;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?pn=5:(pn=0,Zs=Ka=null,kw(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Wa=null),ta(s),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(qn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=V.T,h=G.p,G.p=2,V.T=null;try{for(var g=t.onRecoverableError,_=0;_<l.length;_++){var A=l[_];g(A.value,{componentStack:A.stack})}}finally{V.T=i,G.p=h}}(Qs&3)!==0&&df(),Er(t),h=t.pendingLanes,(s&4194090)!==0&&(h&42)!==0?t===cg?Lc++:(Lc=0,cg=t):Lc=0,Uc(0)}}function kw(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,gc(i)))}function df(t){return Cw(),Mw(),Dw(),Rw()}function Rw(){if(pn!==5)return!1;var t=Ka,i=sg;sg=0;var s=ta(Qs),l=V.T,h=G.p;try{G.p=32>s?32:s,V.T=null,s=lg,lg=null;var g=Ka,_=Qs;if(pn=0,Zs=Ka=null,Qs=0,(Qe&6)!==0)throw Error(a(331));var A=Qe;if(Qe|=4,pw(g.current),fw(g,g.current,_,s),Qe=A,Uc(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(qn,g)}catch{}return!0}finally{G.p=h,V.T=l,kw(t,i)}}function zw(t,i,s){i=Vi(s,i),i=Pp(t.stateNode,i,2),t=$a(t,i,2),t!==null&&(fn(t,2),Er(t))}function at(t,i,s){if(t.tag===3)zw(t,t,s);else for(;i!==null;){if(i.tag===3){zw(i,t,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Wa===null||!Wa.has(l))){t=Vi(s,t),s=U1(2),l=$a(i,s,2),l!==null&&(B1(s,l,i,t),fn(l,2),Er(l));break}}i=i.return}}function hg(t,i,s){var l=t.pingCache;if(l===null){l=t.pingCache=new vM;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(s)||(ig=!0,h.add(s),t=_M.bind(null,t,i,s),i.then(t,t))}function _M(t,i,s){var l=t.pingCache;l!==null&&l.delete(i),t.pingedLanes|=t.suspendedLanes&s,t.warmLanes&=~s,ct===t&&(Ye&s)===s&&(Ct===4||Ct===3&&(Ye&62914560)===Ye&&300>X()-og?(Qe&2)===0&&Js(t,0):rg|=s,Ks===Ye&&(Ks=0)),Er(t)}function Ow(t,i){i===0&&(i=wr()),t=Ns(t,i),t!==null&&(fn(t,i),Er(t))}function SM(t){var i=t.memoizedState,s=0;i!==null&&(s=i.retryLane),Ow(t,s)}function TM(t,i){var s=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(s=h.retryLane);break;case 19:l=t.stateNode;break;case 22:l=t.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),Ow(t,s)}function jM(t,i){return Ne(t,i)}var ff=null,tl=null,mg=!1,hf=!1,pg=!1,Io=0;function Er(t){t!==tl&&t.next===null&&(tl===null?ff=tl=t:tl=tl.next=t),hf=!0,mg||(mg=!0,EM())}function Uc(t,i){if(!pg&&hf){pg=!0;do for(var s=!1,l=ff;l!==null;){if(t!==0){var h=l.pendingLanes;if(h===0)var g=0;else{var _=l.suspendedLanes,A=l.pingedLanes;g=(1<<31-st(42|t)+1)-1,g&=h&~(_&~A),g=g&201326741?g&201326741|1:g?g|2:0}g!==0&&(s=!0,Bw(l,g))}else g=Ye,g=hr(l,l===ct?g:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(g&3)===0||Wn(l,g)||(s=!0,Bw(l,g));l=l.next}while(s);pg=!1}}function AM(){Nw()}function Nw(){hf=mg=!1;var t=0;Io!==0&&(NM()&&(t=Io),Io=0);for(var i=X(),s=null,l=ff;l!==null;){var h=l.next,g=Lw(l,i);g===0?(l.next=null,s===null?ff=h:s.next=h,h===null&&(tl=s)):(s=l,(t!==0||(g&3)!==0)&&(hf=!0)),l=h}Uc(t)}function Lw(t,i){for(var s=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,g=t.pendingLanes&-62914561;0<g;){var _=31-st(g),A=1<<_,R=h[_];R===-1?((A&s)===0||(A&l)!==0)&&(h[_]=Jr(A,i)):R<=i&&(t.expiredLanes|=A),g&=~A}if(i=ct,s=Ye,s=hr(t,t===i?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l=t.callbackNode,s===0||t===i&&(Je===2||Je===9)||t.cancelPendingCommit!==null)return l!==null&&l!==null&&ft(l),t.callbackNode=null,t.callbackPriority=0;if((s&3)===0||Wn(t,s)){if(i=s&-s,i===t.callbackPriority)return i;switch(l!==null&&ft(l),ta(s)){case 2:case 8:s=cr;break;case 32:s=rt;break;case 268435456:s=dr;break;default:s=rt}return l=Uw.bind(null,t),s=Ne(s,l),t.callbackPriority=i,t.callbackNode=s,i}return l!==null&&l!==null&&ft(l),t.callbackPriority=2,t.callbackNode=null,2}function Uw(t,i){if(pn!==0&&pn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var s=t.callbackNode;if(df()&&t.callbackNode!==s)return null;var l=Ye;return l=hr(t,t===ct?l:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),l===0?null:(yw(t,l,i),Lw(t,X()),t.callbackNode!=null&&t.callbackNode===s?Uw.bind(null,t):null)}function Bw(t,i){if(df())return null;yw(t,i,!0)}function EM(){UM(function(){(Qe&6)!==0?Ne(zi,AM):Nw()})}function gg(){return Io===0&&(Io=Ae()),Io}function Vw(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Sd(""+t)}function $w(t,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,t.id&&s.setAttribute("form",t.id),i.parentNode.insertBefore(s,i),t=new FormData(t),s.parentNode.removeChild(s),t}function CM(t,i,s,l,h){if(i==="submit"&&s&&s.stateNode===h){var g=Vw((h[me]||null).action),_=l.submitter;_&&(i=(i=_[me]||null)?Vw(i.formAction):_.getAttribute("formAction"),i!==null&&(g=i,_=null));var A=new Ed("action","action",null,l,h);t.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Io!==0){var R=_?$w(h,_):new FormData(h);Lp(s,{pending:!0,data:R,method:h.method,action:g},null,R)}}else typeof g=="function"&&(A.preventDefault(),R=_?$w(h,_):new FormData(h),Lp(s,{pending:!0,data:R,method:h.method,action:g},g,R))},currentTarget:h}]})}}for(var vg=0;vg<tp.length;vg++){var xg=tp[vg],MM=xg.toLowerCase(),DM=xg[0].toUpperCase()+xg.slice(1);mr(MM,"on"+DM)}mr(yb,"onAnimationEnd"),mr(bb,"onAnimationIteration"),mr(wb,"onAnimationStart"),mr("dblclick","onDoubleClick"),mr("focusin","onFocus"),mr("focusout","onBlur"),mr(I5,"onTransitionRun"),mr(X5,"onTransitionStart"),mr(W5,"onTransitionCancel"),mr(_b,"onTransitionEnd"),yt("onMouseEnter",["mouseout","mouseover"]),yt("onMouseLeave",["mouseout","mouseover"]),yt("onPointerEnter",["pointerout","pointerover"]),yt("onPointerLeave",["pointerout","pointerover"]),ht("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ht("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ht("onBeforeInput",["compositionend","keypress","textInput","paste"]),ht("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ht("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bc));function Pw(t,i){i=(i&4)!==0;for(var s=0;s<t.length;s++){var l=t[s],h=l.event;l=l.listeners;e:{var g=void 0;if(i)for(var _=l.length-1;0<=_;_--){var A=l[_],R=A.instance,Y=A.currentTarget;if(A=A.listener,R!==g&&h.isPropagationStopped())break e;g=A,h.currentTarget=Y;try{g(h)}catch(K){Jd(K)}h.currentTarget=null,g=R}else for(_=0;_<l.length;_++){if(A=l[_],R=A.instance,Y=A.currentTarget,A=A.listener,R!==g&&h.isPropagationStopped())break e;g=A,h.currentTarget=Y;try{g(h)}catch(K){Jd(K)}h.currentTarget=null,g=R}}}}function Be(t,i){var s=i[_e];s===void 0&&(s=i[_e]=new Set);var l=t+"__bubble";s.has(l)||(Hw(i,t,2,!1),s.add(l))}function yg(t,i,s){var l=0;i&&(l|=4),Hw(s,t,l,i)}var mf="_reactListening"+Math.random().toString(36).slice(2);function bg(t){if(!t[mf]){t[mf]=!0,ui.forEach(function(s){s!=="selectionchange"&&(kM.has(s)||yg(s,!1,t),yg(s,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[mf]||(i[mf]=!0,yg("selectionchange",!1,i))}}function Hw(t,i,s,l){switch(f2(i)){case 2:var h=rD;break;case 8:h=aD;break;default:h=Og}s=h.bind(null,i,s,t),h=void 0,!Hm||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(i,s,{capture:!0,passive:h}):t.addEventListener(i,s,!0):h!==void 0?t.addEventListener(i,s,{passive:h}):t.addEventListener(i,s,!1)}function wg(t,i,s,l,h){var g=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var _=l.tag;if(_===3||_===4){var A=l.stateNode.containerInfo;if(A===h)break;if(_===4)for(_=l.return;_!==null;){var R=_.tag;if((R===3||R===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;A!==null;){if(_=Ie(A),_===null)return;if(R=_.tag,R===5||R===6||R===26||R===27){l=g=_;continue e}A=A.parentNode}}l=l.return}Wy(function(){var Y=g,K=$m(s),J=[];e:{var F=Sb.get(t);if(F!==void 0){var q=Ed,be=t;switch(t){case"keypress":if(jd(s)===0)break e;case"keydown":case"keyup":q=j5;break;case"focusin":be="focus",q=qm;break;case"focusout":be="blur",q=qm;break;case"beforeblur":case"afterblur":q=qm;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Qy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=h5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=C5;break;case yb:case bb:case wb:q=g5;break;case _b:q=D5;break;case"scroll":case"scrollend":q=d5;break;case"wheel":q=R5;break;case"copy":case"cut":case"paste":q=x5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=eb;break;case"toggle":case"beforetoggle":q=O5}var xe=(i&4)!==0,nt=!xe&&(t==="scroll"||t==="scrollend"),B=xe?F!==null?F+"Capture":null:F;xe=[];for(var N=Y,$;N!==null;){var Q=N;if($=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||$===null||B===null||(Q=ic(N,B),Q!=null&&xe.push(Vc(N,Q,$))),nt)break;N=N.return}0<xe.length&&(F=new q(F,be,null,s,K),J.push({event:F,listeners:xe}))}}if((i&7)===0){e:{if(F=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",F&&s!==Vm&&(be=s.relatedTarget||s.fromElement)&&(Ie(be)||be[he]))break e;if((q||F)&&(F=K.window===K?K:(F=K.ownerDocument)?F.defaultView||F.parentWindow:window,q?(be=s.relatedTarget||s.toElement,q=Y,be=be?Ie(be):null,be!==null&&(nt=c(be),xe=be.tag,be!==nt||xe!==5&&xe!==27&&xe!==6)&&(be=null)):(q=null,be=Y),q!==be)){if(xe=Qy,Q="onMouseLeave",B="onMouseEnter",N="mouse",(t==="pointerout"||t==="pointerover")&&(xe=eb,Q="onPointerLeave",B="onPointerEnter",N="pointer"),nt=q==null?F:hn(q),$=be==null?F:hn(be),F=new xe(Q,N+"leave",q,s,K),F.target=nt,F.relatedTarget=$,Q=null,Ie(K)===Y&&(xe=new xe(B,N+"enter",be,s,K),xe.target=$,xe.relatedTarget=nt,Q=xe),nt=Q,q&&be)t:{for(xe=q,B=be,N=0,$=xe;$;$=nl($))N++;for($=0,Q=B;Q;Q=nl(Q))$++;for(;0<N-$;)xe=nl(xe),N--;for(;0<$-N;)B=nl(B),$--;for(;N--;){if(xe===B||B!==null&&xe===B.alternate)break t;xe=nl(xe),B=nl(B)}xe=null}else xe=null;q!==null&&Yw(J,F,q,xe,!1),be!==null&&nt!==null&&Yw(J,nt,be,xe,!0)}}e:{if(F=Y?hn(Y):window,q=F.nodeName&&F.nodeName.toLowerCase(),q==="select"||q==="input"&&F.type==="file")var de=lb;else if(ob(F))if(cb)de=F5;else{de=H5;var Re=P5}else q=F.nodeName,!q||q.toLowerCase()!=="input"||F.type!=="checkbox"&&F.type!=="radio"?Y&&Bm(Y.elementType)&&(de=lb):de=Y5;if(de&&(de=de(t,Y))){sb(J,de,s,K);break e}Re&&Re(t,F,Y),t==="focusout"&&Y&&F.type==="number"&&Y.memoizedProps.value!=null&&Um(F,"number",F.value)}switch(Re=Y?hn(Y):window,t){case"focusin":(ob(Re)||Re.contentEditable==="true")&&(Rs=Re,Qm=Y,dc=null);break;case"focusout":dc=Qm=Rs=null;break;case"mousedown":Jm=!0;break;case"contextmenu":case"mouseup":case"dragend":Jm=!1,vb(J,s,K);break;case"selectionchange":if(q5)break;case"keydown":case"keyup":vb(J,s,K)}var pe;if(Xm)e:{switch(t){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else ks?rb(t,s)&&(ye="onCompositionEnd"):t==="keydown"&&s.keyCode===229&&(ye="onCompositionStart");ye&&(tb&&s.locale!=="ko"&&(ks||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&ks&&(pe=Ky()):(La=K,Ym="value"in La?La.value:La.textContent,ks=!0)),Re=pf(Y,ye),0<Re.length&&(ye=new Jy(ye,t,null,s,K),J.push({event:ye,listeners:Re}),pe?ye.data=pe:(pe=ab(s),pe!==null&&(ye.data=pe)))),(pe=L5?U5(t,s):B5(t,s))&&(ye=pf(Y,"onBeforeInput"),0<ye.length&&(Re=new Jy("onBeforeInput","beforeinput",null,s,K),J.push({event:Re,listeners:ye}),Re.data=pe)),CM(J,t,Y,s,K)}Pw(J,i)})}function Vc(t,i,s){return{instance:t,listener:i,currentTarget:s}}function pf(t,i){for(var s=i+"Capture",l=[];t!==null;){var h=t,g=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||g===null||(h=ic(t,s),h!=null&&l.unshift(Vc(t,h,g)),h=ic(t,i),h!=null&&l.push(Vc(t,h,g))),t.tag===3)return l;t=t.return}return[]}function nl(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Yw(t,i,s,l,h){for(var g=i._reactName,_=[];s!==null&&s!==l;){var A=s,R=A.alternate,Y=A.stateNode;if(A=A.tag,R!==null&&R===l)break;A!==5&&A!==26&&A!==27||Y===null||(R=Y,h?(Y=ic(s,g),Y!=null&&_.unshift(Vc(s,Y,R))):h||(Y=ic(s,g),Y!=null&&_.push(Vc(s,Y,R)))),s=s.return}_.length!==0&&t.push({event:i,listeners:_})}var RM=/\r\n?/g,zM=/\u0000|\uFFFD/g;function Fw(t){return(typeof t=="string"?t:""+t).replace(RM,`
`).replace(zM,"")}function Gw(t,i){return i=Fw(i),Fw(t)===i}function gf(){}function tt(t,i,s,l,h,g){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Cs(t,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Cs(t,""+l);break;case"className":Oa(t,"class",l);break;case"tabIndex":Oa(t,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Oa(t,s,l);break;case"style":Iy(t,l,g);break;case"data":if(i!=="object"){Oa(t,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){t.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sd(""+l),t.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){t.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof g=="function"&&(s==="formAction"?(i!=="input"&&tt(t,i,"name",h.name,h,null),tt(t,i,"formEncType",h.formEncType,h,null),tt(t,i,"formMethod",h.formMethod,h,null),tt(t,i,"formTarget",h.formTarget,h,null)):(tt(t,i,"encType",h.encType,h,null),tt(t,i,"method",h.method,h,null),tt(t,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){t.removeAttribute(s);break}l=Sd(""+l),t.setAttribute(s,l);break;case"onClick":l!=null&&(t.onclick=gf);break;case"onScroll":l!=null&&Be("scroll",t);break;case"onScrollEnd":l!=null&&Be("scrollend",t);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"multiple":t.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":t.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){t.removeAttribute("xlink:href");break}s=Sd(""+l),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""+l):t.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,""):t.removeAttribute(s);break;case"capture":case"download":l===!0?t.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?t.setAttribute(s,l):t.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?t.setAttribute(s,l):t.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?t.removeAttribute(s):t.setAttribute(s,l);break;case"popover":Be("beforetoggle",t),Be("toggle",t),Nn(t,"popover",l);break;case"xlinkActuate":Oi(t,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Oi(t,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Oi(t,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Oi(t,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Oi(t,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Oi(t,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Oi(t,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Oi(t,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Oi(t,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":Nn(t,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=c5.get(s)||s,Nn(t,s,l))}}function _g(t,i,s,l,h,g){switch(s){case"style":Iy(t,l,g);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(s=l.__html,s!=null){if(h.children!=null)throw Error(a(60));t.innerHTML=s}}break;case"children":typeof l=="string"?Cs(t,l):(typeof l=="number"||typeof l=="bigint")&&Cs(t,""+l);break;case"onScroll":l!=null&&Be("scroll",t);break;case"onScrollEnd":l!=null&&Be("scrollend",t);break;case"onClick":l!=null&&(t.onclick=gf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Pt.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),g=t[me]||null,g=g!=null?g[s]:null,typeof g=="function"&&t.removeEventListener(i,g,h),typeof l=="function")){typeof g!="function"&&g!==null&&(s in t?t[s]=null:t.hasAttribute(s)&&t.removeAttribute(s)),t.addEventListener(i,l,h);break e}s in t?t[s]=l:l===!0?t.setAttribute(s,""):Nn(t,s,l)}}}function gn(t,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",t),Be("load",t);var l=!1,h=!1,g;for(g in s)if(s.hasOwnProperty(g)){var _=s[g];if(_!=null)switch(g){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(t,i,g,_,s,null)}}h&&tt(t,i,"srcSet",s.srcSet,s,null),l&&tt(t,i,"src",s.src,s,null);return;case"input":Be("invalid",t);var A=g=_=h=null,R=null,Y=null;for(l in s)if(s.hasOwnProperty(l)){var K=s[l];if(K!=null)switch(l){case"name":h=K;break;case"type":_=K;break;case"checked":R=K;break;case"defaultChecked":Y=K;break;case"value":g=K;break;case"defaultValue":A=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,i));break;default:tt(t,i,l,K,s,null)}}Yy(t,g,A,R,Y,_,h,!1),wd(t);return;case"select":Be("invalid",t),l=_=g=null;for(h in s)if(s.hasOwnProperty(h)&&(A=s[h],A!=null))switch(h){case"value":g=A;break;case"defaultValue":_=A;break;case"multiple":l=A;default:tt(t,i,h,A,s,null)}i=g,s=_,t.multiple=!!l,i!=null?Es(t,!!l,i,!1):s!=null&&Es(t,!!l,s,!0);return;case"textarea":Be("invalid",t),g=h=l=null;for(_ in s)if(s.hasOwnProperty(_)&&(A=s[_],A!=null))switch(_){case"value":l=A;break;case"defaultValue":h=A;break;case"children":g=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:tt(t,i,_,A,s,null)}Gy(t,l,h,g),wd(t);return;case"option":for(R in s)if(s.hasOwnProperty(R)&&(l=s[R],l!=null))switch(R){case"selected":t.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:tt(t,i,R,l,s,null)}return;case"dialog":Be("beforetoggle",t),Be("toggle",t),Be("cancel",t),Be("close",t);break;case"iframe":case"object":Be("load",t);break;case"video":case"audio":for(l=0;l<Bc.length;l++)Be(Bc[l],t);break;case"image":Be("error",t),Be("load",t);break;case"details":Be("toggle",t);break;case"embed":case"source":case"link":Be("error",t),Be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in s)if(s.hasOwnProperty(Y)&&(l=s[Y],l!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:tt(t,i,Y,l,s,null)}return;default:if(Bm(i)){for(K in s)s.hasOwnProperty(K)&&(l=s[K],l!==void 0&&_g(t,i,K,l,s,void 0));return}}for(A in s)s.hasOwnProperty(A)&&(l=s[A],l!=null&&tt(t,i,A,l,s,null))}function OM(t,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,g=null,_=null,A=null,R=null,Y=null,K=null;for(q in s){var J=s[q];if(s.hasOwnProperty(q)&&J!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":R=J;default:l.hasOwnProperty(q)||tt(t,i,q,null,l,J)}}for(var F in l){var q=l[F];if(J=s[F],l.hasOwnProperty(F)&&(q!=null||J!=null))switch(F){case"type":g=q;break;case"name":h=q;break;case"checked":Y=q;break;case"defaultChecked":K=q;break;case"value":_=q;break;case"defaultValue":A=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(a(137,i));break;default:q!==J&&tt(t,i,F,q,l,J)}}Lm(t,_,A,R,Y,K,g,h);return;case"select":q=_=A=F=null;for(g in s)if(R=s[g],s.hasOwnProperty(g)&&R!=null)switch(g){case"value":break;case"multiple":q=R;default:l.hasOwnProperty(g)||tt(t,i,g,null,l,R)}for(h in l)if(g=l[h],R=s[h],l.hasOwnProperty(h)&&(g!=null||R!=null))switch(h){case"value":F=g;break;case"defaultValue":A=g;break;case"multiple":_=g;default:g!==R&&tt(t,i,h,g,l,R)}i=A,s=_,l=q,F!=null?Es(t,!!s,F,!1):!!l!=!!s&&(i!=null?Es(t,!!s,i,!0):Es(t,!!s,s?[]:"",!1));return;case"textarea":q=F=null;for(A in s)if(h=s[A],s.hasOwnProperty(A)&&h!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:tt(t,i,A,null,l,h)}for(_ in l)if(h=l[_],g=s[_],l.hasOwnProperty(_)&&(h!=null||g!=null))switch(_){case"value":F=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==g&&tt(t,i,_,h,l,g)}Fy(t,F,q);return;case"option":for(var be in s)if(F=s[be],s.hasOwnProperty(be)&&F!=null&&!l.hasOwnProperty(be))switch(be){case"selected":t.selected=!1;break;default:tt(t,i,be,null,l,F)}for(R in l)if(F=l[R],q=s[R],l.hasOwnProperty(R)&&F!==q&&(F!=null||q!=null))switch(R){case"selected":t.selected=F&&typeof F!="function"&&typeof F!="symbol";break;default:tt(t,i,R,F,l,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var xe in s)F=s[xe],s.hasOwnProperty(xe)&&F!=null&&!l.hasOwnProperty(xe)&&tt(t,i,xe,null,l,F);for(Y in l)if(F=l[Y],q=s[Y],l.hasOwnProperty(Y)&&F!==q&&(F!=null||q!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(a(137,i));break;default:tt(t,i,Y,F,l,q)}return;default:if(Bm(i)){for(var nt in s)F=s[nt],s.hasOwnProperty(nt)&&F!==void 0&&!l.hasOwnProperty(nt)&&_g(t,i,nt,void 0,l,F);for(K in l)F=l[K],q=s[K],!l.hasOwnProperty(K)||F===q||F===void 0&&q===void 0||_g(t,i,K,F,l,q);return}}for(var B in s)F=s[B],s.hasOwnProperty(B)&&F!=null&&!l.hasOwnProperty(B)&&tt(t,i,B,null,l,F);for(J in l)F=l[J],q=s[J],!l.hasOwnProperty(J)||F===q||F==null&&q==null||tt(t,i,J,F,l,q)}var Sg=null,Tg=null;function vf(t){return t.nodeType===9?t:t.ownerDocument}function qw(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Iw(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function jg(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ag=null;function NM(){var t=window.event;return t&&t.type==="popstate"?t===Ag?!1:(Ag=t,!0):(Ag=null,!1)}var Xw=typeof setTimeout=="function"?setTimeout:void 0,LM=typeof clearTimeout=="function"?clearTimeout:void 0,Ww=typeof Promise=="function"?Promise:void 0,UM=typeof queueMicrotask=="function"?queueMicrotask:typeof Ww<"u"?function(t){return Ww.resolve(null).then(t).catch(BM)}:Xw;function BM(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function Kw(t,i){var s=i,l=0,h=0;do{var g=s.nextSibling;if(t.removeChild(s),g&&g.nodeType===8)if(s=g.data,s==="/$"){if(0<l&&8>l){s=l;var _=t.ownerDocument;if(s&1&&$c(_.documentElement),s&2&&$c(_.body),s&4)for(s=_.head,$c(s),_=s.firstChild;_;){var A=_.nextSibling,R=_.nodeName;_[At]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&_.rel.toLowerCase()==="stylesheet"||s.removeChild(_),_=A}}if(h===0){t.removeChild(g),Xc(i);return}h--}else s==="$"||s==="$?"||s==="$!"?h++:l=s.charCodeAt(0)-48;else l=0;s=g}while(s);Xc(i)}function Eg(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Eg(s),lt(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}t.removeChild(s)}}function VM(t,i,s,l){for(;t.nodeType===1;){var h=s;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(l){if(!t[At])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(g=t.getAttribute("rel"),g==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(g!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(g=t.getAttribute("src"),(g!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&g&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var g=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===g)return t}else return t;if(t=gr(t.nextSibling),t===null)break}return null}function $M(t,i,s){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!s||(t=gr(t.nextSibling),t===null))return null;return t}function Cg(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState==="complete"}function PM(t,i){var s=t.ownerDocument;if(t.data!=="$?"||s.readyState==="complete")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),t._reactRetry=l}}function gr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return t}var Mg=null;function Zw(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var s=t.data;if(s==="$"||s==="$!"||s==="$?"){if(i===0)return t;i--}else s==="/$"&&i++}t=t.previousSibling}return null}function Qw(t,i,s){switch(i=vf(s),t){case"html":if(t=i.documentElement,!t)throw Error(a(452));return t;case"head":if(t=i.head,!t)throw Error(a(453));return t;case"body":if(t=i.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function $c(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);lt(t)}var Gi=new Map,Jw=new Set;function xf(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var va=G.d;G.d={f:HM,r:YM,D:FM,C:GM,L:qM,m:IM,X:WM,S:XM,M:KM};function HM(){var t=va.f(),i=cf();return t||i}function YM(t){var i=He(t);i!==null&&i.tag===5&&i.type==="form"?y1(i):va.r(t)}var il=typeof document>"u"?null:document;function e2(t,i,s){var l=il;if(l&&typeof i=="string"&&i){var h=Bi(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),Jw.has(h)||(Jw.add(h),t={rel:t,crossOrigin:s,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),gn(i,"link",t),Ge(i),l.head.appendChild(i)))}}function FM(t){va.D(t),e2("dns-prefetch",t,null)}function GM(t,i){va.C(t,i),e2("preconnect",t,i)}function qM(t,i,s){va.L(t,i,s);var l=il;if(l&&t&&i){var h='link[rel="preload"][as="'+Bi(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+Bi(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+Bi(s.imageSizes)+'"]')):h+='[href="'+Bi(t)+'"]';var g=h;switch(i){case"style":g=rl(t);break;case"script":g=al(t)}Gi.has(g)||(t=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:t,as:i},s),Gi.set(g,t),l.querySelector(h)!==null||i==="style"&&l.querySelector(Pc(g))||i==="script"&&l.querySelector(Hc(g))||(i=l.createElement("link"),gn(i,"link",t),Ge(i),l.head.appendChild(i)))}}function IM(t,i){va.m(t,i);var s=il;if(s&&t){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+Bi(l)+'"][href="'+Bi(t)+'"]',g=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":g=al(t)}if(!Gi.has(g)&&(t=v({rel:"modulepreload",href:t},i),Gi.set(g,t),s.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Hc(g)))return}l=s.createElement("link"),gn(l,"link",t),Ge(l),s.head.appendChild(l)}}}function XM(t,i,s){va.S(t,i,s);var l=il;if(l&&t){var h=We(l).hoistableStyles,g=rl(t);i=i||"default";var _=h.get(g);if(!_){var A={loading:0,preload:null};if(_=l.querySelector(Pc(g)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":i},s),(s=Gi.get(g))&&Dg(t,s);var R=_=l.createElement("link");Ge(R),gn(R,"link",t),R._p=new Promise(function(Y,K){R.onload=Y,R.onerror=K}),R.addEventListener("load",function(){A.loading|=1}),R.addEventListener("error",function(){A.loading|=2}),A.loading|=4,yf(_,i,l)}_={type:"stylesheet",instance:_,count:1,state:A},h.set(g,_)}}}function WM(t,i){va.X(t,i);var s=il;if(s&&t){var l=We(s).hoistableScripts,h=al(t),g=l.get(h);g||(g=s.querySelector(Hc(h)),g||(t=v({src:t,async:!0},i),(i=Gi.get(h))&&kg(t,i),g=s.createElement("script"),Ge(g),gn(g,"link",t),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(h,g))}}function KM(t,i){va.M(t,i);var s=il;if(s&&t){var l=We(s).hoistableScripts,h=al(t),g=l.get(h);g||(g=s.querySelector(Hc(h)),g||(t=v({src:t,async:!0,type:"module"},i),(i=Gi.get(h))&&kg(t,i),g=s.createElement("script"),Ge(g),gn(g,"link",t),s.head.appendChild(g)),g={type:"script",instance:g,count:1,state:null},l.set(h,g))}}function t2(t,i,s,l){var h=(h=ce.current)?xf(h):null;if(!h)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=rl(s.href),s=We(h).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){t=rl(s.href);var g=We(h).hoistableStyles,_=g.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},g.set(t,_),(g=h.querySelector(Pc(t)))&&!g._p&&(_.instance=g,_.state.loading=5),Gi.has(t)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Gi.set(t,s),g||ZM(h,t,s,_.state))),i&&l===null)throw Error(a(528,""));return _}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=al(s),s=We(h).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function rl(t){return'href="'+Bi(t)+'"'}function Pc(t){return'link[rel="stylesheet"]['+t+"]"}function n2(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function ZM(t,i,s,l){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=t.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),gn(i,"link",s),Ge(i),t.head.appendChild(i))}function al(t){return'[src="'+Bi(t)+'"]'}function Hc(t){return"script[async]"+t}function i2(t,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=t.querySelector('style[data-href~="'+Bi(s.href)+'"]');if(l)return i.instance=l,Ge(l),l;var h=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(t.ownerDocument||t).createElement("style"),Ge(l),gn(l,"style",h),yf(l,s.precedence,t),i.instance=l;case"stylesheet":h=rl(s.href);var g=t.querySelector(Pc(h));if(g)return i.state.loading|=4,i.instance=g,Ge(g),g;l=n2(s),(h=Gi.get(h))&&Dg(l,h),g=(t.ownerDocument||t).createElement("link"),Ge(g);var _=g;return _._p=new Promise(function(A,R){_.onload=A,_.onerror=R}),gn(g,"link",l),i.state.loading|=4,yf(g,s.precedence,t),i.instance=g;case"script":return g=al(s.src),(h=t.querySelector(Hc(g)))?(i.instance=h,Ge(h),h):(l=s,(h=Gi.get(g))&&(l=v({},s),kg(l,h)),t=t.ownerDocument||t,h=t.createElement("script"),Ge(h),gn(h,"link",l),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,yf(l,s.precedence,t));return i.instance}function yf(t,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,g=h,_=0;_<l.length;_++){var A=l[_];if(A.dataset.precedence===i)g=A;else if(g!==h)break}g?g.parentNode.insertBefore(t,g.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(t,i.firstChild))}function Dg(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function kg(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var bf=null;function r2(t,i,s){if(bf===null){var l=new Map,h=bf=new Map;h.set(s,l)}else h=bf,l=h.get(s),l||(l=new Map,h.set(s,l));if(l.has(t))return l;for(l.set(t,null),s=s.getElementsByTagName(t),h=0;h<s.length;h++){var g=s[h];if(!(g[At]||g[ie]||t==="link"&&g.getAttribute("rel")==="stylesheet")&&g.namespaceURI!=="http://www.w3.org/2000/svg"){var _=g.getAttribute(i)||"";_=t+_;var A=l.get(_);A?A.push(g):l.set(_,[g])}}return l}function a2(t,i,s){t=t.ownerDocument||t,t.head.insertBefore(s,i==="title"?t.querySelector("head > title"):null)}function QM(t,i,s){if(s===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function o2(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Yc=null;function JM(){}function eD(t,i,s){if(Yc===null)throw Error(a(475));var l=Yc;if(i.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var h=rl(s.href),g=t.querySelector(Pc(h));if(g){t=g._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(l.count++,l=wf.bind(l),t.then(l,l)),i.state.loading|=4,i.instance=g,Ge(g);return}g=t.ownerDocument||t,s=n2(s),(h=Gi.get(h))&&Dg(s,h),g=g.createElement("link"),Ge(g);var _=g;_._p=new Promise(function(A,R){_.onload=A,_.onerror=R}),gn(g,"link",s),i.instance=g}l.stylesheets===null&&(l.stylesheets=new Map),l.stylesheets.set(i,t),(t=i.state.preload)&&(i.state.loading&3)===0&&(l.count++,i=wf.bind(l),t.addEventListener("load",i),t.addEventListener("error",i))}}function tD(){if(Yc===null)throw Error(a(475));var t=Yc;return t.stylesheets&&t.count===0&&Rg(t,t.stylesheets),0<t.count?function(i){var s=setTimeout(function(){if(t.stylesheets&&Rg(t,t.stylesheets),t.unsuspend){var l=t.unsuspend;t.unsuspend=null,l()}},6e4);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(s)}}:null}function wf(){if(this.count--,this.count===0){if(this.stylesheets)Rg(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var _f=null;function Rg(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,_f=new Map,i.forEach(nD,t),_f=null,wf.call(t))}function nD(t,i){if(!(i.state.loading&4)){var s=_f.get(t);if(s)var l=s.get(null);else{s=new Map,_f.set(t,s);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),g=0;g<h.length;g++){var _=h[g];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(s.set(_.dataset.precedence,_),l=_)}l&&s.set(null,l)}h=i.instance,_=h.getAttribute("data-precedence"),g=s.get(_)||l,g===l&&s.set(null,h),s.set(_,h),this.count++,l=wf.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),g?g.parentNode.insertBefore(h,g.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var Fc={$$typeof:k,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function iD(t,i,s,l,h,g,_,A){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=On(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=On(0),this.hiddenUpdates=On(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=g,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function s2(t,i,s,l,h,g,_,A,R,Y,K,J){return t=new iD(t,i,s,_,A,R,Y,J),i=1,g===!0&&(i|=24),g=hi(3,null,null,i),t.current=g,g.stateNode=t,i=hp(),i.refCount++,t.pooledCache=i,i.refCount++,g.memoizedState={element:l,isDehydrated:s,cache:i},vp(g),t}function l2(t){return t?(t=Ls,t):Ls}function c2(t,i,s,l,h,g){h=l2(h),l.context===null?l.context=h:l.pendingContext=h,l=Va(i),l.payload={element:s},g=g===void 0?null:g,g!==null&&(l.callback=g),s=$a(t,l,i),s!==null&&(xi(s,t,i),bc(s,t,i))}function u2(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var s=t.retryLane;t.retryLane=s!==0&&s<i?s:i}}function zg(t,i){u2(t,i),(t=t.alternate)&&u2(t,i)}function d2(t){if(t.tag===13){var i=Ns(t,67108864);i!==null&&xi(i,t,67108864),zg(t,67108864)}}var Sf=!0;function rD(t,i,s,l){var h=V.T;V.T=null;var g=G.p;try{G.p=2,Og(t,i,s,l)}finally{G.p=g,V.T=h}}function aD(t,i,s,l){var h=V.T;V.T=null;var g=G.p;try{G.p=8,Og(t,i,s,l)}finally{G.p=g,V.T=h}}function Og(t,i,s,l){if(Sf){var h=Ng(l);if(h===null)wg(t,i,l,Tf,s),h2(t,l);else if(sD(h,t,i,s,l))l.stopPropagation();else if(h2(t,l),i&4&&-1<oD.indexOf(t)){for(;h!==null;){var g=He(h);if(g!==null)switch(g.tag){case 3:if(g=g.stateNode,g.current.memoizedState.isDehydrated){var _=Xn(g.pendingLanes);if(_!==0){var A=g;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var R=1<<31-st(_);A.entanglements[1]|=R,_&=~R}Er(g),(Qe&6)===0&&(sf=X()+500,Uc(0))}}break;case 13:A=Ns(g,2),A!==null&&xi(A,g,2),cf(),zg(g,2)}if(g=Ng(l),g===null&&wg(t,i,l,Tf,s),g===h)break;h=g}h!==null&&l.stopPropagation()}else wg(t,i,l,null,s)}}function Ng(t){return t=$m(t),Lg(t)}var Tf=null;function Lg(t){if(Tf=null,t=Ie(t),t!==null){var i=c(t);if(i===null)t=null;else{var s=i.tag;if(s===13){if(t=u(i),t!==null)return t;t=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Tf=t,null}function f2(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zn()){case zi:return 2;case cr:return 8;case rt:case ur:return 32;case dr:return 268435456;default:return 32}default:return 32}}var Ug=!1,Ja=null,eo=null,to=null,Gc=new Map,qc=new Map,no=[],oD="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function h2(t,i){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":eo=null;break;case"mouseover":case"mouseout":to=null;break;case"pointerover":case"pointerout":Gc.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":qc.delete(i.pointerId)}}function Ic(t,i,s,l,h,g){return t===null||t.nativeEvent!==g?(t={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:g,targetContainers:[h]},i!==null&&(i=He(i),i!==null&&d2(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function sD(t,i,s,l,h){switch(i){case"focusin":return Ja=Ic(Ja,t,i,s,l,h),!0;case"dragenter":return eo=Ic(eo,t,i,s,l,h),!0;case"mouseover":return to=Ic(to,t,i,s,l,h),!0;case"pointerover":var g=h.pointerId;return Gc.set(g,Ic(Gc.get(g)||null,t,i,s,l,h)),!0;case"gotpointercapture":return g=h.pointerId,qc.set(g,Ic(qc.get(g)||null,t,i,s,l,h)),!0}return!1}function m2(t){var i=Ie(t.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=u(s),i!==null){t.blockedOn=i,ve(t.priority,function(){if(s.tag===13){var l=vi();l=ci(l);var h=Ns(s,l);h!==null&&xi(h,s,l),zg(s,l)}});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){t.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jf(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var s=Ng(t.nativeEvent);if(s===null){s=t.nativeEvent;var l=new s.constructor(s.type,s);Vm=l,s.target.dispatchEvent(l),Vm=null}else return i=He(s),i!==null&&d2(i),t.blockedOn=s,!1;i.shift()}return!0}function p2(t,i,s){jf(t)&&s.delete(i)}function lD(){Ug=!1,Ja!==null&&jf(Ja)&&(Ja=null),eo!==null&&jf(eo)&&(eo=null),to!==null&&jf(to)&&(to=null),Gc.forEach(p2),qc.forEach(p2)}function Af(t,i){t.blockedOn===i&&(t.blockedOn=null,Ug||(Ug=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,lD)))}var Ef=null;function g2(t){Ef!==t&&(Ef=t,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ef===t&&(Ef=null);for(var i=0;i<t.length;i+=3){var s=t[i],l=t[i+1],h=t[i+2];if(typeof l!="function"){if(Lg(l||s)===null)continue;break}var g=He(s);g!==null&&(t.splice(i,3),i-=3,Lp(g,{pending:!0,data:h,method:s.method,action:l},l,h))}}))}function Xc(t){function i(R){return Af(R,t)}Ja!==null&&Af(Ja,t),eo!==null&&Af(eo,t),to!==null&&Af(to,t),Gc.forEach(i),qc.forEach(i);for(var s=0;s<no.length;s++){var l=no[s];l.blockedOn===t&&(l.blockedOn=null)}for(;0<no.length&&(s=no[0],s.blockedOn===null);)m2(s),s.blockedOn===null&&no.shift();if(s=(t.ownerDocument||t).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var h=s[l],g=s[l+1],_=h[me]||null;if(typeof g=="function")_||g2(s);else if(_){var A=null;if(g&&g.hasAttribute("formAction")){if(h=g,_=g[me]||null)A=_.formAction;else if(Lg(h)!==null)continue}else A=_.action;typeof A=="function"?s[l+1]=A:(s.splice(l,3),l-=3),g2(s)}}}function Bg(t){this._internalRoot=t}Cf.prototype.render=Bg.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,l=vi();c2(s,l,t,i,null,null)},Cf.prototype.unmount=Bg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;c2(t.current,2,null,t,null,null),cf(),i[he]=null}};function Cf(t){this._internalRoot=t}Cf.prototype.unstable_scheduleHydration=function(t){if(t){var i=Te();t={blockedOn:null,target:t,priority:i};for(var s=0;s<no.length&&i!==0&&i<no[s].priority;s++);no.splice(s,0,t),s===0&&m2(t)}};var v2=e.version;if(v2!=="19.1.0")throw Error(a(527,v2,"19.1.0"));G.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(i),t=t!==null?p(t):null,t=t===null?null:t.stateNode,t};var cD={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:V,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mf.isDisabled&&Mf.supportsFiber)try{qn=Mf.inject(cD),$e=Mf}catch{}}return Kc.createRoot=function(t,i){if(!o(t))throw Error(a(299));var s=!1,l="",h=z1,g=O1,_=N1,A=null;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(g=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(A=i.unstable_transitionCallbacks)),i=s2(t,1,!1,null,null,s,l,h,g,_,A,null),t[he]=i.current,bg(t),new Bg(i)},Kc.hydrateRoot=function(t,i,s){if(!o(t))throw Error(a(299));var l=!1,h="",g=z1,_=O1,A=N1,R=null,Y=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(g=s.onUncaughtError),s.onCaughtError!==void 0&&(_=s.onCaughtError),s.onRecoverableError!==void 0&&(A=s.onRecoverableError),s.unstable_transitionCallbacks!==void 0&&(R=s.unstable_transitionCallbacks),s.formState!==void 0&&(Y=s.formState)),i=s2(t,1,!0,i,s??null,l,h,g,_,A,R,Y),i.context=l2(null),s=i.current,l=vi(),l=ci(l),h=Va(l),h.callback=null,$a(s,h,l),s=l,i.current.lanes=s,fn(i,s),Er(i),t[he]=i.current,bg(t),new Cf(i)},Kc.version="19.1.0",Kc}var E2;function bD(){if(E2)return Pg.exports;E2=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Pg.exports=yD(),Pg.exports}var wD=bD(),Zc={},C2;function _D(){if(C2)return Zc;C2=1,Object.defineProperty(Zc,"__esModule",{value:!0}),Zc.parse=u,Zc.serialize=p;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,r=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,c=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function u(y,b){const j=new c,T=y.length;if(T<2)return j;const E=(b==null?void 0:b.decode)||v;let C=0;do{const M=y.indexOf("=",C);if(M===-1)break;const k=y.indexOf(";",C),z=k===-1?T:k;if(M>z){C=y.lastIndexOf(";",M-1)+1;continue}const D=f(y,C,M),L=m(y,M,D),O=y.slice(D,L);if(j[O]===void 0){let U=f(y,M+1,z),H=m(y,z,U);const W=E(y.slice(U,H));j[O]=W}C=z+1}while(C<T);return j}function f(y,b,j){do{const T=y.charCodeAt(b);if(T!==32&&T!==9)return b}while(++b<j);return j}function m(y,b,j){for(;b>j;){const T=y.charCodeAt(--b);if(T!==32&&T!==9)return b+1}return j}function p(y,b,j){const T=(j==null?void 0:j.encode)||encodeURIComponent;if(!n.test(y))throw new TypeError(`argument name is invalid: ${y}`);const E=T(b);if(!e.test(E))throw new TypeError(`argument val is invalid: ${b}`);let C=y+"="+E;if(!j)return C;if(j.maxAge!==void 0){if(!Number.isInteger(j.maxAge))throw new TypeError(`option maxAge is invalid: ${j.maxAge}`);C+="; Max-Age="+j.maxAge}if(j.domain){if(!r.test(j.domain))throw new TypeError(`option domain is invalid: ${j.domain}`);C+="; Domain="+j.domain}if(j.path){if(!a.test(j.path))throw new TypeError(`option path is invalid: ${j.path}`);C+="; Path="+j.path}if(j.expires){if(!x(j.expires)||!Number.isFinite(j.expires.valueOf()))throw new TypeError(`option expires is invalid: ${j.expires}`);C+="; Expires="+j.expires.toUTCString()}if(j.httpOnly&&(C+="; HttpOnly"),j.secure&&(C+="; Secure"),j.partitioned&&(C+="; Partitioned"),j.priority)switch(typeof j.priority=="string"?j.priority.toLowerCase():void 0){case"low":C+="; Priority=Low";break;case"medium":C+="; Priority=Medium";break;case"high":C+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${j.priority}`)}if(j.sameSite)switch(typeof j.sameSite=="string"?j.sameSite.toLowerCase():j.sameSite){case!0:case"strict":C+="; SameSite=Strict";break;case"lax":C+="; SameSite=Lax";break;case"none":C+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${j.sameSite}`)}return C}function v(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function x(y){return o.call(y)==="[object Date]"}return Zc}_D();var M2="popstate";function SD(n={}){function e(a,o){let{pathname:c,search:u,hash:f}=a.location;return fv("",{pathname:c,search:u,hash:f},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function r(a,o){return typeof o=="string"?o:qu(o)}return jD(e,r,null,n)}function Tt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function qr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function TD(){return Math.random().toString(36).substring(2,10)}function D2(n,e){return{usr:n.state,key:n.key,idx:e}}function fv(n,e,r=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?Xl(e):e,state:r,key:e&&e.key||a||TD()}}function qu({pathname:n="/",search:e="",hash:r=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Xl(n){let e={};if(n){let r=n.indexOf("#");r>=0&&(e.hash=n.substring(r),n=n.substring(0,r));let a=n.indexOf("?");a>=0&&(e.search=n.substring(a),n=n.substring(0,a)),n&&(e.pathname=n)}return e}function jD(n,e,r,a={}){let{window:o=document.defaultView,v5Compat:c=!1}=a,u=o.history,f="POP",m=null,p=v();p==null&&(p=0,u.replaceState({...u.state,idx:p},""));function v(){return(u.state||{idx:null}).idx}function x(){f="POP";let E=v(),C=E==null?null:E-p;p=E,m&&m({action:f,location:T.location,delta:C})}function y(E,C){f="PUSH";let M=fv(T.location,E,C);p=v()+1;let k=D2(M,p),z=T.createHref(M);try{u.pushState(k,"",z)}catch(D){if(D instanceof DOMException&&D.name==="DataCloneError")throw D;o.location.assign(z)}c&&m&&m({action:f,location:T.location,delta:1})}function b(E,C){f="REPLACE";let M=fv(T.location,E,C);p=v();let k=D2(M,p),z=T.createHref(M);u.replaceState(k,"",z),c&&m&&m({action:f,location:T.location,delta:0})}function j(E){return AD(E)}let T={get action(){return f},get location(){return n(o,u)},listen(E){if(m)throw new Error("A history only accepts one active listener");return o.addEventListener(M2,x),m=E,()=>{o.removeEventListener(M2,x),m=null}},createHref(E){return e(o,E)},createURL:j,encodeLocation(E){let C=j(E);return{pathname:C.pathname,search:C.search,hash:C.hash}},push:y,replace:b,go(E){return u.go(E)}};return T}function AD(n,e=!1){let r="http://localhost";typeof window<"u"&&(r=window.location.origin!=="null"?window.location.origin:window.location.href),Tt(r,"No window.location.(origin|href) available to create URL");let a=typeof n=="string"?n:qu(n);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=r+a),new URL(a,r)}function CT(n,e,r="/"){return ED(n,e,r,!1)}function ED(n,e,r,a){let o=typeof e=="string"?Xl(e):e,c=Ea(o.pathname||"/",r);if(c==null)return null;let u=MT(n);CD(u);let f=null;for(let m=0;f==null&&m<u.length;++m){let p=VD(c);f=UD(u[m],p,a)}return f}function MT(n,e=[],r=[],a=""){let o=(c,u,f)=>{let m={relativePath:f===void 0?c.path||"":f,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};m.relativePath.startsWith("/")&&(Tt(m.relativePath.startsWith(a),`Absolute route path "${m.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(a.length));let p=ja([a,m.relativePath]),v=r.concat(m);c.children&&c.children.length>0&&(Tt(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),MT(c.children,e,v,p)),!(c.path==null&&!c.index)&&e.push({path:p,score:ND(p,c.index),routesMeta:v})};return n.forEach((c,u)=>{var f;if(c.path===""||!((f=c.path)!=null&&f.includes("?")))o(c,u);else for(let m of DT(c.path))o(c,u,m)}),e}function DT(n){let e=n.split("/");if(e.length===0)return[];let[r,...a]=e,o=r.endsWith("?"),c=r.replace(/\?$/,"");if(a.length===0)return o?[c,""]:[c];let u=DT(a.join("/")),f=[];return f.push(...u.map(m=>m===""?c:[c,m].join("/"))),o&&f.push(...u),f.map(m=>n.startsWith("/")&&m===""?"/":m)}function CD(n){n.sort((e,r)=>e.score!==r.score?r.score-e.score:LD(e.routesMeta.map(a=>a.childrenIndex),r.routesMeta.map(a=>a.childrenIndex)))}var MD=/^:[\w-]+$/,DD=3,kD=2,RD=1,zD=10,OD=-2,k2=n=>n==="*";function ND(n,e){let r=n.split("/"),a=r.length;return r.some(k2)&&(a+=OD),e&&(a+=kD),r.filter(o=>!k2(o)).reduce((o,c)=>o+(MD.test(c)?DD:c===""?RD:zD),a)}function LD(n,e){return n.length===e.length&&n.slice(0,-1).every((a,o)=>a===e[o])?n[n.length-1]-e[e.length-1]:0}function UD(n,e,r=!1){let{routesMeta:a}=n,o={},c="/",u=[];for(let f=0;f<a.length;++f){let m=a[f],p=f===a.length-1,v=c==="/"?e:e.slice(c.length)||"/",x=qh({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},v),y=m.route;if(!x&&p&&r&&!a[a.length-1].route.index&&(x=qh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},v)),!x)return null;Object.assign(o,x.params),u.push({params:o,pathname:ja([c,x.pathname]),pathnameBase:YD(ja([c,x.pathnameBase])),route:y}),x.pathnameBase!=="/"&&(c=ja([c,x.pathnameBase]))}return u}function qh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,a]=BD(n.path,n.caseSensitive,n.end),o=e.match(r);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),f=o.slice(1);return{params:a.reduce((p,{paramName:v,isOptional:x},y)=>{if(v==="*"){let j=f[y]||"";u=c.slice(0,c.length-j.length).replace(/(.)\/+$/,"$1")}const b=f[y];return x&&!b?p[v]=void 0:p[v]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:u,pattern:n}}function BD(n,e=!1,r=!0){qr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],o="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,f,m)=>(a.push({paramName:f,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),o+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?o+="\\/*$":n!==""&&n!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),a]}function VD(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return qr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ea(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let r=e.endsWith("/")?e.length-1:e.length,a=n.charAt(r);return a&&a!=="/"?null:n.slice(r)||"/"}function $D(n,e="/"){let{pathname:r,search:a="",hash:o=""}=typeof n=="string"?Xl(n):n;return{pathname:r?r.startsWith("/")?r:PD(r,e):e,search:FD(a),hash:GD(o)}}function PD(n,e){let r=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(o=>{o===".."?r.length>1&&r.pop():o!=="."&&r.push(o)}),r.length>1?r.join("/"):"/"}function Gg(n,e,r,a){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function HD(n){return n.filter((e,r)=>r===0||e.route.path&&e.route.path.length>0)}function kT(n){let e=HD(n);return e.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase)}function RT(n,e,r,a=!1){let o;typeof n=="string"?o=Xl(n):(o={...n},Tt(!o.pathname||!o.pathname.includes("?"),Gg("?","pathname","search",o)),Tt(!o.pathname||!o.pathname.includes("#"),Gg("#","pathname","hash",o)),Tt(!o.search||!o.search.includes("#"),Gg("#","search","hash",o)));let c=n===""||o.pathname==="",u=c?"/":o.pathname,f;if(u==null)f=r;else{let x=e.length-1;if(!a&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),x-=1;o.pathname=y.join("/")}f=x>=0?e[x]:"/"}let m=$D(o,f),p=u&&u!=="/"&&u.endsWith("/"),v=(c||u===".")&&r.endsWith("/");return!m.pathname.endsWith("/")&&(p||v)&&(m.pathname+="/"),m}var ja=n=>n.join("/").replace(/\/\/+/g,"/"),YD=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),FD=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,GD=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function qD(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var zT=["POST","PUT","PATCH","DELETE"];new Set(zT);var ID=["GET",...zT];new Set(ID);var Wl=P.createContext(null);Wl.displayName="DataRouter";var gm=P.createContext(null);gm.displayName="DataRouterState";var OT=P.createContext({isTransitioning:!1});OT.displayName="ViewTransition";var XD=P.createContext(new Map);XD.displayName="Fetchers";var WD=P.createContext(null);WD.displayName="Await";var Xr=P.createContext(null);Xr.displayName="Navigation";var dd=P.createContext(null);dd.displayName="Location";var Wr=P.createContext({outlet:null,matches:[],isDataRoute:!1});Wr.displayName="Route";var yx=P.createContext(null);yx.displayName="RouteError";function KD(n,{relative:e}={}){Tt(fd(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:a}=P.useContext(Xr),{hash:o,pathname:c,search:u}=hd(n,{relative:e}),f=c;return r!=="/"&&(f=c==="/"?r:ja([r,c])),a.createHref({pathname:f,search:u,hash:o})}function fd(){return P.useContext(dd)!=null}function jo(){return Tt(fd(),"useLocation() may be used only in the context of a <Router> component."),P.useContext(dd).location}var NT="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function LT(n){P.useContext(Xr).static||P.useLayoutEffect(n)}function bx(){let{isDataRoute:n}=P.useContext(Wr);return n?uk():ZD()}function ZD(){Tt(fd(),"useNavigate() may be used only in the context of a <Router> component.");let n=P.useContext(Wl),{basename:e,navigator:r}=P.useContext(Xr),{matches:a}=P.useContext(Wr),{pathname:o}=jo(),c=JSON.stringify(kT(a)),u=P.useRef(!1);return LT(()=>{u.current=!0}),P.useCallback((m,p={})=>{if(qr(u.current,NT),!u.current)return;if(typeof m=="number"){r.go(m);return}let v=RT(m,JSON.parse(c),o,p.relative==="path");n==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:ja([e,v.pathname])),(p.replace?r.replace:r.push)(v,p.state,p)},[e,r,c,o,n])}P.createContext(null);function QD(){let{matches:n}=P.useContext(Wr),e=n[n.length-1];return e?e.params:{}}function hd(n,{relative:e}={}){let{matches:r}=P.useContext(Wr),{pathname:a}=jo(),o=JSON.stringify(kT(r));return P.useMemo(()=>RT(n,JSON.parse(o),a,e==="path"),[n,o,a,e])}function JD(n,e){return UT(n,e)}function UT(n,e,r,a){var C;Tt(fd(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=P.useContext(Xr),{matches:c}=P.useContext(Wr),u=c[c.length-1],f=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",v=u&&u.route;{let M=v&&v.path||"";BT(m,!v||M.endsWith("*")||M.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${M}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${M}"> to <Route path="${M==="/"?"*":`${M}/*`}">.`)}let x=jo(),y;if(e){let M=typeof e=="string"?Xl(e):e;Tt(p==="/"||((C=M.pathname)==null?void 0:C.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${M.pathname}" was given in the \`location\` prop.`),y=M}else y=x;let b=y.pathname||"/",j=b;if(p!=="/"){let M=p.replace(/^\//,"").split("/");j="/"+b.replace(/^\//,"").split("/").slice(M.length).join("/")}let T=CT(n,{pathname:j});qr(v||T!=null,`No routes matched location "${y.pathname}${y.search}${y.hash}" `),qr(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${y.pathname}${y.search}${y.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let E=rk(T&&T.map(M=>Object.assign({},M,{params:Object.assign({},f,M.params),pathname:ja([p,o.encodeLocation?o.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?p:ja([p,o.encodeLocation?o.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),c,r,a);return e&&E?P.createElement(dd.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...y},navigationType:"POP"}},E):E}function ek(){let n=ck(),e=qD(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},u=null;return console.error("Error handled by React Router default ErrorBoundary:",n),u=P.createElement(P.Fragment,null,P.createElement("p",null,"💿 Hey developer 👋"),P.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",P.createElement("code",{style:c},"ErrorBoundary")," or"," ",P.createElement("code",{style:c},"errorElement")," prop on your route.")),P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),r?P.createElement("pre",{style:o},r):null,u)}var tk=P.createElement(ek,null),nk=class extends P.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?P.createElement(Wr.Provider,{value:this.props.routeContext},P.createElement(yx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ik({routeContext:n,match:e,children:r}){let a=P.useContext(Wl);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),P.createElement(Wr.Provider,{value:n},r)}function rk(n,e=[],r=null,a=null){if(n==null){if(!r)return null;if(r.errors)n=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let o=n,c=r==null?void 0:r.errors;if(c!=null){let m=o.findIndex(p=>p.route.id&&(c==null?void 0:c[p.route.id])!==void 0);Tt(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,m+1))}let u=!1,f=-1;if(r)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(f=m),p.route.id){let{loaderData:v,errors:x}=r,y=p.route.loader&&!v.hasOwnProperty(p.route.id)&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){u=!0,f>=0?o=o.slice(0,f+1):o=[o[0]];break}}}return o.reduceRight((m,p,v)=>{let x,y=!1,b=null,j=null;r&&(x=c&&p.route.id?c[p.route.id]:void 0,b=p.route.errorElement||tk,u&&(f<0&&v===0?(BT("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,j=null):f===v&&(y=!0,j=p.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,v+1)),E=()=>{let C;return x?C=b:y?C=j:p.route.Component?C=P.createElement(p.route.Component,null):p.route.element?C=p.route.element:C=m,P.createElement(ik,{match:p,routeContext:{outlet:m,matches:T,isDataRoute:r!=null},children:C})};return r&&(p.route.ErrorBoundary||p.route.errorElement||v===0)?P.createElement(nk,{location:r.location,revalidation:r.revalidation,component:b,error:x,children:E(),routeContext:{outlet:null,matches:T,isDataRoute:!0}}):E()},null)}function wx(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ak(n){let e=P.useContext(Wl);return Tt(e,wx(n)),e}function ok(n){let e=P.useContext(gm);return Tt(e,wx(n)),e}function sk(n){let e=P.useContext(Wr);return Tt(e,wx(n)),e}function _x(n){let e=sk(n),r=e.matches[e.matches.length-1];return Tt(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function lk(){return _x("useRouteId")}function ck(){var a;let n=P.useContext(yx),e=ok("useRouteError"),r=_x("useRouteError");return n!==void 0?n:(a=e.errors)==null?void 0:a[r]}function uk(){let{router:n}=ak("useNavigate"),e=_x("useNavigate"),r=P.useRef(!1);return LT(()=>{r.current=!0}),P.useCallback(async(o,c={})=>{qr(r.current,NT),r.current&&(typeof o=="number"?n.navigate(o):await n.navigate(o,{fromRouteId:e,...c}))},[n,e])}var R2={};function BT(n,e,r){!e&&!R2[n]&&(R2[n]=!0,qr(!1,r))}P.memo(dk);function dk({routes:n,future:e,state:r}){return UT(n,void 0,r,e)}function on(n){Tt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fk({basename:n="/",children:e=null,location:r,navigationType:a="POP",navigator:o,static:c=!1}){Tt(!fd(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let u=n.replace(/^\/*/,"/"),f=P.useMemo(()=>({basename:u,navigator:o,static:c,future:{}}),[u,o,c]);typeof r=="string"&&(r=Xl(r));let{pathname:m="/",search:p="",hash:v="",state:x=null,key:y="default"}=r,b=P.useMemo(()=>{let j=Ea(m,u);return j==null?null:{location:{pathname:j,search:p,hash:v,state:x,key:y},navigationType:a}},[u,m,p,v,x,y,a]);return qr(b!=null,`<Router basename="${u}"> is not able to match the URL "${m}${p}${v}" because it does not start with the basename, so the <Router> won't render anything.`),b==null?null:P.createElement(Xr.Provider,{value:f},P.createElement(dd.Provider,{children:e,value:b}))}function hk({children:n,location:e}){return JD(hv(n),e)}function hv(n,e=[]){let r=[];return P.Children.forEach(n,(a,o)=>{if(!P.isValidElement(a))return;let c=[...e,o];if(a.type===P.Fragment){r.push.apply(r,hv(a.props.children,c));return}Tt(a.type===on,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Tt(!a.props.index||!a.props.children,"An index route cannot have child routes.");let u={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(u.children=hv(a.props.children,c)),r.push(u)}),r}var jh="get",Ah="application/x-www-form-urlencoded";function vm(n){return n!=null&&typeof n.tagName=="string"}function mk(n){return vm(n)&&n.tagName.toLowerCase()==="button"}function pk(n){return vm(n)&&n.tagName.toLowerCase()==="form"}function gk(n){return vm(n)&&n.tagName.toLowerCase()==="input"}function vk(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function xk(n,e){return n.button===0&&(!e||e==="_self")&&!vk(n)}var Df=null;function yk(){if(Df===null)try{new FormData(document.createElement("form"),0),Df=!1}catch{Df=!0}return Df}var bk=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function qg(n){return n!=null&&!bk.has(n)?(qr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ah}"`),null):n}function wk(n,e){let r,a,o,c,u;if(pk(n)){let f=n.getAttribute("action");a=f?Ea(f,e):null,r=n.getAttribute("method")||jh,o=qg(n.getAttribute("enctype"))||Ah,c=new FormData(n)}else if(mk(n)||gk(n)&&(n.type==="submit"||n.type==="image")){let f=n.form;if(f==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||f.getAttribute("action");if(a=m?Ea(m,e):null,r=n.getAttribute("formmethod")||f.getAttribute("method")||jh,o=qg(n.getAttribute("formenctype"))||qg(f.getAttribute("enctype"))||Ah,c=new FormData(f,n),!yk()){let{name:p,type:v,value:x}=n;if(v==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,x)}}else{if(vm(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=jh,a=null,o=Ah,u=n}return c&&o==="text/plain"&&(u=c,c=void 0),{action:a,method:r.toLowerCase(),encType:o,formData:c,body:u}}function Sx(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function _k(n,e){if(n.id in e)return e[n.id];try{let r=await import(n.module);return e[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Sk(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function Tk(n,e,r){let a=await Promise.all(n.map(async o=>{let c=e.routes[o.route.id];if(c){let u=await _k(c,r);return u.links?u.links():[]}return[]}));return Ck(a.flat(1).filter(Sk).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function z2(n,e,r,a,o,c){let u=(m,p)=>r[p]?m.route.id!==r[p].route.id:!0,f=(m,p)=>{var v;return r[p].pathname!==m.pathname||((v=r[p].route.path)==null?void 0:v.endsWith("*"))&&r[p].params["*"]!==m.params["*"]};return c==="assets"?e.filter((m,p)=>u(m,p)||f(m,p)):c==="data"?e.filter((m,p)=>{var x;let v=a.routes[m.route.id];if(!v||!v.hasLoader)return!1;if(u(m,p)||f(m,p))return!0;if(m.route.shouldRevalidate){let y=m.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((x=r[0])==null?void 0:x.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function jk(n,e,{includeHydrateFallback:r}={}){return Ak(n.map(a=>{let o=e.routes[a.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),r&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function Ak(n){return[...new Set(n)]}function Ek(n){let e={},r=Object.keys(n).sort();for(let a of r)e[a]=n[a];return e}function Ck(n,e){let r=new Set;return new Set(e),n.reduce((a,o)=>{let c=JSON.stringify(Ek(o));return r.has(c)||(r.add(c),a.push({key:c,link:o})),a},[])}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Mk=new Set([100,101,204,205]);function Dk(n,e){let r=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r.pathname==="/"?r.pathname="_root.data":e&&Ea(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.data`:r.pathname=`${r.pathname.replace(/\/$/,"")}.data`,r}function VT(){let n=P.useContext(Wl);return Sx(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function kk(){let n=P.useContext(gm);return Sx(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Tx=P.createContext(void 0);Tx.displayName="FrameworkContext";function $T(){let n=P.useContext(Tx);return Sx(n,"You must render this element inside a <HydratedRouter> element"),n}function Rk(n,e){let r=P.useContext(Tx),[a,o]=P.useState(!1),[c,u]=P.useState(!1),{onFocus:f,onBlur:m,onMouseEnter:p,onMouseLeave:v,onTouchStart:x}=e,y=P.useRef(null);P.useEffect(()=>{if(n==="render"&&u(!0),n==="viewport"){let T=C=>{C.forEach(M=>{u(M.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return y.current&&E.observe(y.current),()=>{E.disconnect()}}},[n]),P.useEffect(()=>{if(a){let T=setTimeout(()=>{u(!0)},100);return()=>{clearTimeout(T)}}},[a]);let b=()=>{o(!0)},j=()=>{o(!1),u(!1)};return r?n!=="intent"?[c,y,{}]:[c,y,{onFocus:Qc(f,b),onBlur:Qc(m,j),onMouseEnter:Qc(p,b),onMouseLeave:Qc(v,j),onTouchStart:Qc(x,b)}]:[!1,y,{}]}function Qc(n,e){return r=>{n&&n(r),r.defaultPrevented||e(r)}}function zk({page:n,...e}){let{router:r}=VT(),a=P.useMemo(()=>CT(r.routes,n,r.basename),[r.routes,n,r.basename]);return a?P.createElement(Nk,{page:n,matches:a,...e}):null}function Ok(n){let{manifest:e,routeModules:r}=$T(),[a,o]=P.useState([]);return P.useEffect(()=>{let c=!1;return Tk(n,e,r).then(u=>{c||o(u)}),()=>{c=!0}},[n,e,r]),a}function Nk({page:n,matches:e,...r}){let a=jo(),{manifest:o,routeModules:c}=$T(),{basename:u}=VT(),{loaderData:f,matches:m}=kk(),p=P.useMemo(()=>z2(n,e,m,o,a,"data"),[n,e,m,o,a]),v=P.useMemo(()=>z2(n,e,m,o,a,"assets"),[n,e,m,o,a]),x=P.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let j=new Set,T=!1;if(e.forEach(C=>{var k;let M=o.routes[C.route.id];!M||!M.hasLoader||(!p.some(z=>z.route.id===C.route.id)&&C.route.id in f&&((k=c[C.route.id])!=null&&k.shouldRevalidate)||M.hasClientLoader?T=!0:j.add(C.route.id))}),j.size===0)return[];let E=Dk(n,u);return T&&j.size>0&&E.searchParams.set("_routes",e.filter(C=>j.has(C.route.id)).map(C=>C.route.id).join(",")),[E.pathname+E.search]},[u,f,a,o,p,e,n,c]),y=P.useMemo(()=>jk(v,o),[v,o]),b=Ok(v);return P.createElement(P.Fragment,null,x.map(j=>P.createElement("link",{key:j,rel:"prefetch",as:"fetch",href:j,...r})),y.map(j=>P.createElement("link",{key:j,rel:"modulepreload",href:j,...r})),b.map(({key:j,link:T})=>P.createElement("link",{key:j,...T})))}function Lk(...n){return e=>{n.forEach(r=>{typeof r=="function"?r(e):r!=null&&(r.current=e)})}}var PT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{PT&&(window.__reactRouterVersion="7.6.2")}catch{}function Uk({basename:n,children:e,window:r}){let a=P.useRef();a.current==null&&(a.current=SD({window:r,v5Compat:!0}));let o=a.current,[c,u]=P.useState({action:o.action,location:o.location}),f=P.useCallback(m=>{P.startTransition(()=>u(m))},[u]);return P.useLayoutEffect(()=>o.listen(f),[o,f]),P.createElement(fk,{basename:n,children:e,location:c.location,navigationType:c.action,navigator:o})}var HT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ut=P.forwardRef(function({onClick:e,discover:r="render",prefetch:a="none",relative:o,reloadDocument:c,replace:u,state:f,target:m,to:p,preventScrollReset:v,viewTransition:x,...y},b){let{basename:j}=P.useContext(Xr),T=typeof p=="string"&&HT.test(p),E,C=!1;if(typeof p=="string"&&T&&(E=p,PT))try{let H=new URL(window.location.href),W=p.startsWith("//")?new URL(H.protocol+p):new URL(p),ae=Ea(W.pathname,j);W.origin===H.origin&&ae!=null?p=ae+W.search+W.hash:C=!0}catch{qr(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let M=KD(p,{relative:o}),[k,z,D]=Rk(a,y),L=Pk(p,{replace:u,state:f,target:m,preventScrollReset:v,relative:o,viewTransition:x});function O(H){e&&e(H),H.defaultPrevented||L(H)}let U=P.createElement("a",{...y,...D,href:E||M,onClick:C||c?e:O,ref:Lk(b,z),target:m,"data-discover":!T&&r==="render"?"true":void 0});return k&&!T?P.createElement(P.Fragment,null,U,P.createElement(zk,{page:M})):U});Ut.displayName="Link";var Bk=P.forwardRef(function({"aria-current":e="page",caseSensitive:r=!1,className:a="",end:o=!1,style:c,to:u,viewTransition:f,children:m,...p},v){let x=hd(u,{relative:p.relative}),y=jo(),b=P.useContext(gm),{navigator:j,basename:T}=P.useContext(Xr),E=b!=null&&qk(x)&&f===!0,C=j.encodeLocation?j.encodeLocation(x).pathname:x.pathname,M=y.pathname,k=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;r||(M=M.toLowerCase(),k=k?k.toLowerCase():null,C=C.toLowerCase()),k&&T&&(k=Ea(k,T)||k);const z=C!=="/"&&C.endsWith("/")?C.length-1:C.length;let D=M===C||!o&&M.startsWith(C)&&M.charAt(z)==="/",L=k!=null&&(k===C||!o&&k.startsWith(C)&&k.charAt(C.length)==="/"),O={isActive:D,isPending:L,isTransitioning:E},U=D?e:void 0,H;typeof a=="function"?H=a(O):H=[a,D?"active":null,L?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let W=typeof c=="function"?c(O):c;return P.createElement(Ut,{...p,"aria-current":U,className:H,ref:v,style:W,to:u,viewTransition:f},typeof m=="function"?m(O):m)});Bk.displayName="NavLink";var Vk=P.forwardRef(({discover:n="render",fetcherKey:e,navigate:r,reloadDocument:a,replace:o,state:c,method:u=jh,action:f,onSubmit:m,relative:p,preventScrollReset:v,viewTransition:x,...y},b)=>{let j=Fk(),T=Gk(f,{relative:p}),E=u.toLowerCase()==="get"?"get":"post",C=typeof f=="string"&&HT.test(f),M=k=>{if(m&&m(k),k.defaultPrevented)return;k.preventDefault();let z=k.nativeEvent.submitter,D=(z==null?void 0:z.getAttribute("formmethod"))||u;j(z||k.currentTarget,{fetcherKey:e,method:D,navigate:r,replace:o,state:c,relative:p,preventScrollReset:v,viewTransition:x})};return P.createElement("form",{ref:b,method:E,action:T,onSubmit:a?m:M,...y,"data-discover":!C&&n==="render"?"true":void 0})});Vk.displayName="Form";function $k(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function YT(n){let e=P.useContext(Wl);return Tt(e,$k(n)),e}function Pk(n,{target:e,replace:r,state:a,preventScrollReset:o,relative:c,viewTransition:u}={}){let f=bx(),m=jo(),p=hd(n,{relative:c});return P.useCallback(v=>{if(xk(v,e)){v.preventDefault();let x=r!==void 0?r:qu(m)===qu(p);f(n,{replace:x,state:a,preventScrollReset:o,relative:c,viewTransition:u})}},[m,f,p,r,a,e,n,o,c,u])}var Hk=0,Yk=()=>`__${String(++Hk)}__`;function Fk(){let{router:n}=YT("useSubmit"),{basename:e}=P.useContext(Xr),r=lk();return P.useCallback(async(a,o={})=>{let{action:c,method:u,encType:f,formData:m,body:p}=wk(a,e);if(o.navigate===!1){let v=o.fetcherKey||Yk();await n.fetch(v,r,o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||f,flushSync:o.flushSync})}else await n.navigate(o.action||c,{preventScrollReset:o.preventScrollReset,formData:m,body:p,formMethod:o.method||u,formEncType:o.encType||f,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[n,e,r])}function Gk(n,{relative:e}={}){let{basename:r}=P.useContext(Xr),a=P.useContext(Wr);Tt(a,"useFormAction must be used inside a RouteContext");let[o]=a.matches.slice(-1),c={...hd(n||".",{relative:e})},u=jo();if(n==null){c.search=u.search;let f=new URLSearchParams(c.search),m=f.getAll("index");if(m.some(v=>v==="")){f.delete("index"),m.filter(x=>x).forEach(x=>f.append("index",x));let v=f.toString();c.search=v?`?${v}`:""}}return(!n||n===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:ja([r,c.pathname])),qu(c)}function qk(n,e={}){let r=P.useContext(OT);Tt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=YT("useViewTransitionState"),o=hd(n,{relative:e.relative});if(!r.isTransitioning)return!1;let c=Ea(r.currentLocation.pathname,a)||r.currentLocation.pathname,u=Ea(r.nextLocation.pathname,a)||r.nextLocation.pathname;return qh(o.pathname,u)!=null||qh(o.pathname,c)!=null}[...Mk];var Mn=function(){return Mn=Object.assign||function(e){for(var r,a=1,o=arguments.length;a<o;a++){r=arguments[a];for(var c in r)Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c])}return e},Mn.apply(this,arguments)};function Rl(n,e,r){if(r||arguments.length===2)for(var a=0,o=e.length,c;a<o;a++)(c||!(a in e))&&(c||(c=Array.prototype.slice.call(e,0,a)),c[a]=e[a]);return n.concat(c||Array.prototype.slice.call(e))}var mt="-ms-",Eu="-moz-",Ke="-webkit-",FT="comm",xm="rule",jx="decl",Ik="@import",GT="@keyframes",Xk="@layer",qT=Math.abs,Ax=String.fromCharCode,mv=Object.assign;function Wk(n,e){return cn(n,0)^45?(((e<<2^cn(n,0))<<2^cn(n,1))<<2^cn(n,2))<<2^cn(n,3):0}function IT(n){return n.trim()}function xa(n,e){return(n=e.exec(n))?n[0]:n}function Ce(n,e,r){return n.replace(e,r)}function Eh(n,e,r){return n.indexOf(e,r)}function cn(n,e){return n.charCodeAt(e)|0}function zl(n,e,r){return n.slice(e,r)}function kr(n){return n.length}function XT(n){return n.length}function vu(n,e){return e.push(n),n}function Kk(n,e){return n.map(e).join("")}function O2(n,e){return n.filter(function(r){return!xa(r,e)})}var ym=1,Ol=1,WT=0,or=0,Xt=0,Kl="";function bm(n,e,r,a,o,c,u,f){return{value:n,root:e,parent:r,type:a,props:o,children:c,line:ym,column:Ol,length:u,return:"",siblings:f}}function so(n,e){return mv(bm("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function ol(n){for(;n.root;)n=so(n.root,{children:[n]});vu(n,n.siblings)}function Zk(){return Xt}function Qk(){return Xt=or>0?cn(Kl,--or):0,Ol--,Xt===10&&(Ol=1,ym--),Xt}function yr(){return Xt=or<WT?cn(Kl,or++):0,Ol++,Xt===10&&(Ol=1,ym++),Xt}function us(){return cn(Kl,or)}function Ch(){return or}function wm(n,e){return zl(Kl,n,e)}function pv(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jk(n){return ym=Ol=1,WT=kr(Kl=n),or=0,[]}function eR(n){return Kl="",n}function Ig(n){return IT(wm(or-1,gv(n===91?n+2:n===40?n+1:n)))}function tR(n){for(;(Xt=us())&&Xt<33;)yr();return pv(n)>2||pv(Xt)>3?"":" "}function nR(n,e){for(;--e&&yr()&&!(Xt<48||Xt>102||Xt>57&&Xt<65||Xt>70&&Xt<97););return wm(n,Ch()+(e<6&&us()==32&&yr()==32))}function gv(n){for(;yr();)switch(Xt){case n:return or;case 34:case 39:n!==34&&n!==39&&gv(Xt);break;case 40:n===41&&gv(n);break;case 92:yr();break}return or}function iR(n,e){for(;yr()&&n+Xt!==57;)if(n+Xt===84&&us()===47)break;return"/*"+wm(e,or-1)+"*"+Ax(n===47?n:yr())}function rR(n){for(;!pv(us());)yr();return wm(n,or)}function aR(n){return eR(Mh("",null,null,null,[""],n=Jk(n),0,[0],n))}function Mh(n,e,r,a,o,c,u,f,m){for(var p=0,v=0,x=u,y=0,b=0,j=0,T=1,E=1,C=1,M=0,k="",z=o,D=c,L=a,O=k;E;)switch(j=M,M=yr()){case 40:if(j!=108&&cn(O,x-1)==58){Eh(O+=Ce(Ig(M),"&","&\f"),"&\f",qT(p?f[p-1]:0))!=-1&&(C=-1);break}case 34:case 39:case 91:O+=Ig(M);break;case 9:case 10:case 13:case 32:O+=tR(j);break;case 92:O+=nR(Ch()-1,7);continue;case 47:switch(us()){case 42:case 47:vu(oR(iR(yr(),Ch()),e,r,m),m);break;default:O+="/"}break;case 123*T:f[p++]=kr(O)*C;case 125*T:case 59:case 0:switch(M){case 0:case 125:E=0;case 59+v:C==-1&&(O=Ce(O,/\f/g,"")),b>0&&kr(O)-x&&vu(b>32?L2(O+";",a,r,x-1,m):L2(Ce(O," ","")+";",a,r,x-2,m),m);break;case 59:O+=";";default:if(vu(L=N2(O,e,r,p,v,o,f,k,z=[],D=[],x,c),c),M===123)if(v===0)Mh(O,e,L,L,z,c,x,f,D);else switch(y===99&&cn(O,3)===110?100:y){case 100:case 108:case 109:case 115:Mh(n,L,L,a&&vu(N2(n,L,L,0,0,o,f,k,o,z=[],x,D),D),o,D,x,f,a?z:D);break;default:Mh(O,L,L,L,[""],D,0,f,D)}}p=v=b=0,T=C=1,k=O="",x=u;break;case 58:x=1+kr(O),b=j;default:if(T<1){if(M==123)--T;else if(M==125&&T++==0&&Qk()==125)continue}switch(O+=Ax(M),M*T){case 38:C=v>0?1:(O+="\f",-1);break;case 44:f[p++]=(kr(O)-1)*C,C=1;break;case 64:us()===45&&(O+=Ig(yr())),y=us(),v=x=kr(k=O+=rR(Ch())),M++;break;case 45:j===45&&kr(O)==2&&(T=0)}}return c}function N2(n,e,r,a,o,c,u,f,m,p,v,x){for(var y=o-1,b=o===0?c:[""],j=XT(b),T=0,E=0,C=0;T<a;++T)for(var M=0,k=zl(n,y+1,y=qT(E=u[T])),z=n;M<j;++M)(z=IT(E>0?b[M]+" "+k:Ce(k,/&\f/g,b[M])))&&(m[C++]=z);return bm(n,e,r,o===0?xm:f,m,p,v,x)}function oR(n,e,r,a){return bm(n,e,r,FT,Ax(Zk()),zl(n,2,-2),0,a)}function L2(n,e,r,a,o){return bm(n,e,r,jx,zl(n,0,a),zl(n,a+1,-1),a,o)}function KT(n,e,r){switch(Wk(n,e)){case 5103:return Ke+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ke+n+n;case 4789:return Eu+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ke+n+Eu+n+mt+n+n;case 5936:switch(cn(n,e+11)){case 114:return Ke+n+mt+Ce(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ke+n+mt+Ce(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ke+n+mt+Ce(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ke+n+mt+n+n;case 6165:return Ke+n+mt+"flex-"+n+n;case 5187:return Ke+n+Ce(n,/(\w+).+(:[^]+)/,Ke+"box-$1$2"+mt+"flex-$1$2")+n;case 5443:return Ke+n+mt+"flex-item-"+Ce(n,/flex-|-self/g,"")+(xa(n,/flex-|baseline/)?"":mt+"grid-row-"+Ce(n,/flex-|-self/g,""))+n;case 4675:return Ke+n+mt+"flex-line-pack"+Ce(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ke+n+mt+Ce(n,"shrink","negative")+n;case 5292:return Ke+n+mt+Ce(n,"basis","preferred-size")+n;case 6060:return Ke+"box-"+Ce(n,"-grow","")+Ke+n+mt+Ce(n,"grow","positive")+n;case 4554:return Ke+Ce(n,/([^-])(transform)/g,"$1"+Ke+"$2")+n;case 6187:return Ce(Ce(Ce(n,/(zoom-|grab)/,Ke+"$1"),/(image-set)/,Ke+"$1"),n,"")+n;case 5495:case 3959:return Ce(n,/(image-set\([^]*)/,Ke+"$1$`$1");case 4968:return Ce(Ce(n,/(.+:)(flex-)?(.*)/,Ke+"box-pack:$3"+mt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ke+n+n;case 4200:if(!xa(n,/flex-|baseline/))return mt+"grid-column-align"+zl(n,e)+n;break;case 2592:case 3360:return mt+Ce(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(a,o){return e=o,xa(a.props,/grid-\w+-end/)})?~Eh(n+(r=r[e].value),"span",0)?n:mt+Ce(n,"-start","")+n+mt+"grid-row-span:"+(~Eh(r,"span",0)?xa(r,/\d+/):+xa(r,/\d+/)-+xa(n,/\d+/))+";":mt+Ce(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(a){return xa(a.props,/grid-\w+-start/)})?n:mt+Ce(Ce(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return Ce(n,/(.+)-inline(.+)/,Ke+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(kr(n)-1-e>6)switch(cn(n,e+1)){case 109:if(cn(n,e+4)!==45)break;case 102:return Ce(n,/(.+:)(.+)-([^]+)/,"$1"+Ke+"$2-$3$1"+Eu+(cn(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Eh(n,"stretch",0)?KT(Ce(n,"stretch","fill-available"),e,r)+n:n}break;case 5152:case 5920:return Ce(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(a,o,c,u,f,m,p){return mt+o+":"+c+p+(u?mt+o+"-span:"+(f?m:+m-+c)+p:"")+n});case 4949:if(cn(n,e+6)===121)return Ce(n,":",":"+Ke)+n;break;case 6444:switch(cn(n,cn(n,14)===45?18:11)){case 120:return Ce(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ke+(cn(n,14)===45?"inline-":"")+"box$3$1"+Ke+"$2$3$1"+mt+"$2box$3")+n;case 100:return Ce(n,":",":"+mt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(n,"scroll-","scroll-snap-")+n}return n}function Ih(n,e){for(var r="",a=0;a<n.length;a++)r+=e(n[a],a,n,e)||"";return r}function sR(n,e,r,a){switch(n.type){case Xk:if(n.children.length)break;case Ik:case jx:return n.return=n.return||n.value;case FT:return"";case GT:return n.return=n.value+"{"+Ih(n.children,a)+"}";case xm:if(!kr(n.value=n.props.join(",")))return""}return kr(r=Ih(n.children,a))?n.return=n.value+"{"+r+"}":""}function lR(n){var e=XT(n);return function(r,a,o,c){for(var u="",f=0;f<e;f++)u+=n[f](r,a,o,c)||"";return u}}function cR(n){return function(e){e.root||(e=e.return)&&n(e)}}function uR(n,e,r,a){if(n.length>-1&&!n.return)switch(n.type){case jx:n.return=KT(n.value,n.length,r);return;case GT:return Ih([so(n,{value:Ce(n.value,"@","@"+Ke)})],a);case xm:if(n.length)return Kk(r=n.props,function(o){switch(xa(o,a=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ol(so(n,{props:[Ce(o,/:(read-\w+)/,":"+Eu+"$1")]})),ol(so(n,{props:[o]})),mv(n,{props:O2(r,a)});break;case"::placeholder":ol(so(n,{props:[Ce(o,/:(plac\w+)/,":"+Ke+"input-$1")]})),ol(so(n,{props:[Ce(o,/:(plac\w+)/,":"+Eu+"$1")]})),ol(so(n,{props:[Ce(o,/:(plac\w+)/,mt+"input-$1")]})),ol(so(n,{props:[o]})),mv(n,{props:O2(r,a)});break}return""})}}var dR={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},bi={},Nl=typeof process<"u"&&bi!==void 0&&(bi.REACT_APP_SC_ATTR||bi.SC_ATTR)||"data-styled",ZT="active",QT="data-styled-version",_m="6.1.18",Ex=`/*!sc*/
`,Xh=typeof window<"u"&&typeof document<"u",fR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&bi!==void 0&&bi.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&bi.REACT_APP_SC_DISABLE_SPEEDY!==""?bi.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&bi.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&bi!==void 0&&bi.SC_DISABLE_SPEEDY!==void 0&&bi.SC_DISABLE_SPEEDY!==""&&bi.SC_DISABLE_SPEEDY!=="false"&&bi.SC_DISABLE_SPEEDY),hR={},Sm=Object.freeze([]),Ll=Object.freeze({});function JT(n,e,r){return r===void 0&&(r=Ll),n.theme!==r.theme&&n.theme||e||r.theme}var ej=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),mR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,pR=/(^-|-$)/g;function U2(n){return n.replace(mR,"-").replace(pR,"")}var gR=/(a)(d)/gi,kf=52,B2=function(n){return String.fromCharCode(n+(n>25?39:97))};function vv(n){var e,r="";for(e=Math.abs(n);e>kf;e=e/kf|0)r=B2(e%kf)+r;return(B2(e%kf)+r).replace(gR,"$1-$2")}var Xg,tj=5381,pl=function(n,e){for(var r=e.length;r;)n=33*n^e.charCodeAt(--r);return n},nj=function(n){return pl(tj,n)};function Cx(n){return vv(nj(n)>>>0)}function vR(n){return n.displayName||n.name||"Component"}function Wg(n){return typeof n=="string"&&!0}var ij=typeof Symbol=="function"&&Symbol.for,rj=ij?Symbol.for("react.memo"):60115,xR=ij?Symbol.for("react.forward_ref"):60112,yR={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},bR={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},aj={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},wR=((Xg={})[xR]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xg[rj]=aj,Xg);function V2(n){return("type"in(e=n)&&e.type.$$typeof)===rj?aj:"$$typeof"in n?wR[n.$$typeof]:yR;var e}var _R=Object.defineProperty,SR=Object.getOwnPropertyNames,$2=Object.getOwnPropertySymbols,TR=Object.getOwnPropertyDescriptor,jR=Object.getPrototypeOf,P2=Object.prototype;function oj(n,e,r){if(typeof e!="string"){if(P2){var a=jR(e);a&&a!==P2&&oj(n,a,r)}var o=SR(e);$2&&(o=o.concat($2(e)));for(var c=V2(n),u=V2(e),f=0;f<o.length;++f){var m=o[f];if(!(m in bR||r&&r[m]||u&&m in u||c&&m in c)){var p=TR(e,m);try{_R(n,m,p)}catch{}}}}return n}function Ul(n){return typeof n=="function"}function Mx(n){return typeof n=="object"&&"styledComponentId"in n}function rs(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function Wh(n,e){if(n.length===0)return"";for(var r=n[0],a=1;a<n.length;a++)r+=n[a];return r}function Iu(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function xv(n,e,r){if(r===void 0&&(r=!1),!r&&!Iu(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var a=0;a<e.length;a++)n[a]=xv(n[a],e[a]);else if(Iu(e))for(var a in e)n[a]=xv(n[a],e[a]);return n}function Dx(n,e){Object.defineProperty(n,"toString",{value:e})}function md(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var AR=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var r=0,a=0;a<e;a++)r+=this.groupSizes[a];return r},n.prototype.insertRules=function(e,r){if(e>=this.groupSizes.length){for(var a=this.groupSizes,o=a.length,c=o;e>=c;)if((c<<=1)<0)throw md(16,"".concat(e));this.groupSizes=new Uint32Array(c),this.groupSizes.set(a),this.length=c;for(var u=o;u<c;u++)this.groupSizes[u]=0}for(var f=this.indexOfGroup(e+1),m=(u=0,r.length);u<m;u++)this.tag.insertRule(f,r[u])&&(this.groupSizes[e]++,f++)},n.prototype.clearGroup=function(e){if(e<this.length){var r=this.groupSizes[e],a=this.indexOfGroup(e),o=a+r;this.groupSizes[e]=0;for(var c=a;c<o;c++)this.tag.deleteRule(a)}},n.prototype.getGroup=function(e){var r="";if(e>=this.length||this.groupSizes[e]===0)return r;for(var a=this.groupSizes[e],o=this.indexOfGroup(e),c=o+a,u=o;u<c;u++)r+="".concat(this.tag.getRule(u)).concat(Ex);return r},n}(),Dh=new Map,Kh=new Map,kh=1,Rf=function(n){if(Dh.has(n))return Dh.get(n);for(;Kh.has(kh);)kh++;var e=kh++;return Dh.set(n,e),Kh.set(e,n),e},ER=function(n,e){kh=e+1,Dh.set(n,e),Kh.set(e,n)},CR="style[".concat(Nl,"][").concat(QT,'="').concat(_m,'"]'),MR=new RegExp("^".concat(Nl,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),DR=function(n,e,r){for(var a,o=r.split(","),c=0,u=o.length;c<u;c++)(a=o[c])&&n.registerName(e,a)},kR=function(n,e){for(var r,a=((r=e.textContent)!==null&&r!==void 0?r:"").split(Ex),o=[],c=0,u=a.length;c<u;c++){var f=a[c].trim();if(f){var m=f.match(MR);if(m){var p=0|parseInt(m[1],10),v=m[2];p!==0&&(ER(v,p),DR(n,v,m[3]),n.getTag().insertRules(p,o)),o.length=0}else o.push(f)}}},H2=function(n){for(var e=document.querySelectorAll(CR),r=0,a=e.length;r<a;r++){var o=e[r];o&&o.getAttribute(Nl)!==ZT&&(kR(n,o),o.parentNode&&o.parentNode.removeChild(o))}};function RR(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sj=function(n){var e=document.head,r=n||e,a=document.createElement("style"),o=function(f){var m=Array.from(f.querySelectorAll("style[".concat(Nl,"]")));return m[m.length-1]}(r),c=o!==void 0?o.nextSibling:null;a.setAttribute(Nl,ZT),a.setAttribute(QT,_m);var u=RR();return u&&a.setAttribute("nonce",u),r.insertBefore(a,c),a},zR=function(){function n(e){this.element=sj(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var a=document.styleSheets,o=0,c=a.length;o<c;o++){var u=a[o];if(u.ownerNode===r)return u}throw md(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,r){try{return this.sheet.insertRule(r,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var r=this.sheet.cssRules[e];return r&&r.cssText?r.cssText:""},n}(),OR=function(){function n(e){this.element=sj(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,r){if(e<=this.length&&e>=0){var a=document.createTextNode(r);return this.element.insertBefore(a,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),NR=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,r){return e<=this.length&&(this.rules.splice(e,0,r),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),Y2=Xh,LR={isServer:!Xh,useCSSOMInjection:!fR},Zh=function(){function n(e,r,a){e===void 0&&(e=Ll),r===void 0&&(r={});var o=this;this.options=Mn(Mn({},LR),e),this.gs=r,this.names=new Map(a),this.server=!!e.isServer,!this.server&&Xh&&Y2&&(Y2=!1,H2(this)),Dx(this,function(){return function(c){for(var u=c.getTag(),f=u.length,m="",p=function(x){var y=function(C){return Kh.get(C)}(x);if(y===void 0)return"continue";var b=c.names.get(y),j=u.getGroup(x);if(b===void 0||!b.size||j.length===0)return"continue";var T="".concat(Nl,".g").concat(x,'[id="').concat(y,'"]'),E="";b!==void 0&&b.forEach(function(C){C.length>0&&(E+="".concat(C,","))}),m+="".concat(j).concat(T,'{content:"').concat(E,'"}').concat(Ex)},v=0;v<f;v++)p(v);return m}(o)})}return n.registerId=function(e){return Rf(e)},n.prototype.rehydrate=function(){!this.server&&Xh&&H2(this)},n.prototype.reconstructWithOptions=function(e,r){return r===void 0&&(r=!0),new n(Mn(Mn({},this.options),e),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(r){var a=r.useCSSOMInjection,o=r.target;return r.isServer?new NR(o):a?new zR(o):new OR(o)}(this.options),new AR(e)));var e},n.prototype.hasNameForId=function(e,r){return this.names.has(e)&&this.names.get(e).has(r)},n.prototype.registerName=function(e,r){if(Rf(e),this.names.has(e))this.names.get(e).add(r);else{var a=new Set;a.add(r),this.names.set(e,a)}},n.prototype.insertRules=function(e,r,a){this.registerName(e,r),this.getTag().insertRules(Rf(e),a)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Rf(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),UR=/&/g,BR=/^\s*\/\/.*$/gm;function lj(n,e){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(e," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(e," ")),r.props=r.props.map(function(a){return"".concat(e," ").concat(a)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=lj(r.children,e)),r})}function VR(n){var e,r,a,o=Ll,c=o.options,u=c===void 0?Ll:c,f=o.plugins,m=f===void 0?Sm:f,p=function(y,b,j){return j.startsWith(r)&&j.endsWith(r)&&j.replaceAll(r,"").length>0?".".concat(e):y},v=m.slice();v.push(function(y){y.type===xm&&y.value.includes("&")&&(y.props[0]=y.props[0].replace(UR,r).replace(a,p))}),u.prefix&&v.push(uR),v.push(sR);var x=function(y,b,j,T){b===void 0&&(b=""),j===void 0&&(j=""),T===void 0&&(T="&"),e=T,r=b,a=new RegExp("\\".concat(r,"\\b"),"g");var E=y.replace(BR,""),C=aR(j||b?"".concat(j," ").concat(b," { ").concat(E," }"):E);u.namespace&&(C=lj(C,u.namespace));var M=[];return Ih(C,lR(v.concat(cR(function(k){return M.push(k)})))),M};return x.hash=m.length?m.reduce(function(y,b){return b.name||md(15),pl(y,b.name)},tj).toString():"",x}var $R=new Zh,yv=VR(),cj=Ei.createContext({shouldForwardProp:void 0,styleSheet:$R,stylis:yv});cj.Consumer;Ei.createContext(void 0);function bv(){return P.useContext(cj)}var uj=function(){function n(e,r){var a=this;this.inject=function(o,c){c===void 0&&(c=yv);var u=a.name+c.hash;o.hasNameForId(a.id,u)||o.insertRules(a.id,u,c(a.rules,u,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=r,Dx(this,function(){throw md(12,String(a.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=yv),this.name+e.hash},n}(),PR=function(n){return n>="A"&&n<="Z"};function F2(n){for(var e="",r=0;r<n.length;r++){var a=n[r];if(r===1&&a==="-"&&n[0]==="-")return n;PR(a)?e+="-"+a.toLowerCase():e+=a}return e.startsWith("ms-")?"-"+e:e}var dj=function(n){return n==null||n===!1||n===""},fj=function(n){var e,r,a=[];for(var o in n){var c=n[o];n.hasOwnProperty(o)&&!dj(c)&&(Array.isArray(c)&&c.isCss||Ul(c)?a.push("".concat(F2(o),":"),c,";"):Iu(c)?a.push.apply(a,Rl(Rl(["".concat(o," {")],fj(c),!1),["}"],!1)):a.push("".concat(F2(o),": ").concat((e=o,(r=c)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||e in dR||e.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return a};function go(n,e,r,a){if(dj(n))return[];if(Mx(n))return[".".concat(n.styledComponentId)];if(Ul(n)){if(!Ul(c=n)||c.prototype&&c.prototype.isReactComponent||!e)return[n];var o=n(e);return go(o,e,r,a)}var c;return n instanceof uj?r?(n.inject(r,a),[n.getName(a)]):[n]:Iu(n)?fj(n):Array.isArray(n)?Array.prototype.concat.apply(Sm,n.map(function(u){return go(u,e,r,a)})):[n.toString()]}function hj(n){for(var e=0;e<n.length;e+=1){var r=n[e];if(Ul(r)&&!Mx(r))return!1}return!0}var HR=nj(_m),YR=function(){function n(e,r,a){this.rules=e,this.staticRulesId="",this.isStatic=(a===void 0||a.isStatic)&&hj(e),this.componentId=r,this.baseHash=pl(HR,r),this.baseStyle=a,Zh.registerId(r)}return n.prototype.generateAndInjectStyles=function(e,r,a){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,r,a):"";if(this.isStatic&&!a.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))o=rs(o,this.staticRulesId);else{var c=Wh(go(this.rules,e,r,a)),u=vv(pl(this.baseHash,c)>>>0);if(!r.hasNameForId(this.componentId,u)){var f=a(c,".".concat(u),void 0,this.componentId);r.insertRules(this.componentId,u,f)}o=rs(o,u),this.staticRulesId=u}else{for(var m=pl(this.baseHash,a.hash),p="",v=0;v<this.rules.length;v++){var x=this.rules[v];if(typeof x=="string")p+=x;else if(x){var y=Wh(go(x,e,r,a));m=pl(m,y+v),p+=y}}if(p){var b=vv(m>>>0);r.hasNameForId(this.componentId,b)||r.insertRules(this.componentId,b,a(p,".".concat(b),void 0,this.componentId)),o=rs(o,b)}}return o},n}(),kx=Ei.createContext(void 0);kx.Consumer;var Kg={};function FR(n,e,r){var a=Mx(n),o=n,c=!Wg(n),u=e.attrs,f=u===void 0?Sm:u,m=e.componentId,p=m===void 0?function(z,D){var L=typeof z!="string"?"sc":U2(z);Kg[L]=(Kg[L]||0)+1;var O="".concat(L,"-").concat(Cx(_m+L+Kg[L]));return D?"".concat(D,"-").concat(O):O}(e.displayName,e.parentComponentId):m,v=e.displayName,x=v===void 0?function(z){return Wg(z)?"styled.".concat(z):"Styled(".concat(vR(z),")")}(n):v,y=e.displayName&&e.componentId?"".concat(U2(e.displayName),"-").concat(e.componentId):e.componentId||p,b=a&&o.attrs?o.attrs.concat(f).filter(Boolean):f,j=e.shouldForwardProp;if(a&&o.shouldForwardProp){var T=o.shouldForwardProp;if(e.shouldForwardProp){var E=e.shouldForwardProp;j=function(z,D){return T(z,D)&&E(z,D)}}else j=T}var C=new YR(r,y,a?o.componentStyle:void 0);function M(z,D){return function(L,O,U){var H=L.attrs,W=L.componentStyle,ae=L.defaultProps,Z=L.foldedComponentIds,se=L.styledComponentId,fe=L.target,le=Ei.useContext(kx),V=bv(),G=L.shouldForwardProp||V.shouldForwardProp,ee=JT(O,le,ae)||Ll,re=function(ge,ce,Me){for(var Se,Fe=Mn(Mn({},ce),{className:void 0,theme:Me}),bn=0;bn<ge.length;bn+=1){var dt=Ul(Se=ge[bn])?Se(Fe):Se;for(var it in dt)Fe[it]=it==="className"?rs(Fe[it],dt[it]):it==="style"?Mn(Mn({},Fe[it]),dt[it]):dt[it]}return ce.className&&(Fe.className=rs(Fe.className,ce.className)),Fe}(H,O,ee),S=re.as||fe,I={};for(var te in re)re[te]===void 0||te[0]==="$"||te==="as"||te==="theme"&&re.theme===ee||(te==="forwardedAs"?I.as=re.forwardedAs:G&&!G(te,S)||(I[te]=re[te]));var ne=function(ge,ce){var Me=bv(),Se=ge.generateAndInjectStyles(ce,Me.styleSheet,Me.stylis);return Se}(W,re),oe=rs(Z,se);return ne&&(oe+=" "+ne),re.className&&(oe+=" "+re.className),I[Wg(S)&&!ej.has(S)?"class":"className"]=oe,U&&(I.ref=U),P.createElement(S,I)}(k,z,D)}M.displayName=x;var k=Ei.forwardRef(M);return k.attrs=b,k.componentStyle=C,k.displayName=x,k.shouldForwardProp=j,k.foldedComponentIds=a?rs(o.foldedComponentIds,o.styledComponentId):"",k.styledComponentId=y,k.target=a?o.target:n,Object.defineProperty(k,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(z){this._foldedDefaultProps=a?function(D){for(var L=[],O=1;O<arguments.length;O++)L[O-1]=arguments[O];for(var U=0,H=L;U<H.length;U++)xv(D,H[U],!0);return D}({},o.defaultProps,z):z}}),Dx(k,function(){return".".concat(k.styledComponentId)}),c&&oj(k,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),k}function G2(n,e){for(var r=[n[0]],a=0,o=e.length;a<o;a+=1)r.push(e[a],n[a+1]);return r}var q2=function(n){return Object.assign(n,{isCss:!0})};function Rx(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(Ul(n)||Iu(n))return q2(go(G2(Sm,Rl([n],e,!0))));var a=n;return e.length===0&&a.length===1&&typeof a[0]=="string"?go(a):q2(go(G2(a,e)))}function wv(n,e,r){if(r===void 0&&(r=Ll),!e)throw md(1,e);var a=function(o){for(var c=[],u=1;u<arguments.length;u++)c[u-1]=arguments[u];return n(e,r,Rx.apply(void 0,Rl([o],c,!1)))};return a.attrs=function(o){return wv(n,e,Mn(Mn({},r),{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},a.withConfig=function(o){return wv(n,e,Mn(Mn({},r),o))},a}var mj=function(n){return wv(FR,n)},w=mj;ej.forEach(function(n){w[n]=mj(n)});var GR=function(){function n(e,r){this.rules=e,this.componentId=r,this.isStatic=hj(e),Zh.registerId(this.componentId+1)}return n.prototype.createStyles=function(e,r,a,o){var c=o(Wh(go(this.rules,r,a,o)),""),u=this.componentId+e;a.insertRules(u,u,c)},n.prototype.removeStyles=function(e,r){r.clearRules(this.componentId+e)},n.prototype.renderStyles=function(e,r,a,o){e>2&&Zh.registerId(this.componentId+e),this.removeStyles(e,a),this.createStyles(e,r,a,o)},n}();function qR(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var a=Rx.apply(void 0,Rl([n],e,!1)),o="sc-global-".concat(Cx(JSON.stringify(a))),c=new GR(a,o),u=function(m){var p=bv(),v=Ei.useContext(kx),x=Ei.useRef(p.styleSheet.allocateGSInstance(o)).current;return p.styleSheet.server&&f(x,m,p.styleSheet,v,p.stylis),Ei.useLayoutEffect(function(){if(!p.styleSheet.server)return f(x,m,p.styleSheet,v,p.stylis),function(){return c.removeStyles(x,p.styleSheet)}},[x,m,p.styleSheet,v,p.stylis]),null};function f(m,p,v,x,y){if(c.isStatic)c.renderStyles(m,hR,v,y);else{var b=Mn(Mn({},p),{theme:JT(p,x,u.defaultProps)});c.renderStyles(m,b,v,y)}}return Ei.memo(u)}function za(n){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var a=Wh(Rx.apply(void 0,Rl([n],e,!1))),o=Cx(a);return new uj(o,a)}const vo="#002147",pj="#44b8f3",IR=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),XR=w.header`
  background: white;
  color: ${vo};
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  padding: 0 3vw;
  height: 70px;
  margin: 0;
  box-sizing: border-box;
  z-index: 9999 !important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,WR=w(Ut)`
  text-decoration: none;
  color: ${vo};
  display: flex;
  align-items: center;
  height: 100%;
`,KR=w.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`,ZR=w.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
  margin-left: auto;
  margin-right: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`,Jc=w(Ut)`
  text-decoration: none;
  color: ${vo};
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${pj};
  }
`,QR=w.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`,JR=w(Ut)`
  background: ${pj};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;

  &:hover {
    background: ${vo};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
`,e3=w.button`
  background: none;
  border: none;
  color: ${vo};
  font-size: 1.1rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  letter-spacing: 0.01em;

  @media (min-width: 769px) {
    display: none;
  }
`,t3=w.span`
  font-size: 1.1rem; 
  margin-right: 0;
  display: inline-block;

  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
  }
`,n3=w.input`
  border: none;
  border-bottom: 1px solid ${vo};
  background: transparent;
  color: ${vo};
  font-size: 1rem;
  padding: 0.2rem 0.5rem;
  outline: none;
  width: 200px;
  &::placeholder { color: ${vo}; opacity: 0.8; }
  /* Remove default browser search input decorations */
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }
  &::-ms-clear {
    display: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`,i3=({onMenuClick:n})=>{const e=bx(),[r,a]=Ei.useState(""),o=c=>{c.key==="Enter"&&r.trim()&&e(`/newsroom?search=${encodeURIComponent(r.trim())}`)};return d.jsx(d.Fragment,{children:d.jsxs(XR,{children:[d.jsx(WR,{to:"/",children:d.jsx(KR,{src:"/dmun-logo.png",alt:"DMUN Foundation Logo"})}),d.jsxs(ZR,{children:[d.jsx(Jc,{to:"/about",children:"About"}),d.jsx(Jc,{to:"/programs",children:"Programs"}),d.jsx(Jc,{to:"/advocacy",children:"Advocacy"}),d.jsx(Jc,{to:"/research",children:"Research"}),d.jsx(Jc,{to:"/newsroom",children:"Newsroom"})]}),d.jsxs(QR,{children:[d.jsx(n3,{value:r,onChange:c=>a(c.target.value),onKeyDown:o,placeholder:"Search..."}),d.jsx(JR,{to:"/volunteer",children:"Join Us"}),d.jsxs(e3,{"aria-label":"Open menu",onClick:n,children:[d.jsx(t3,{children:d.jsx(IR,{})}),"Menu"]})]})]})})},zx="#002147",Ox="#44b8f3",r3=w.footer`
  background: ${zx};
  color: white;
  padding: 0;
  font-family: var(--andover-font-serif);
  width: 100%;
`,a3=w.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 5vw;
  padding-bottom: 4rem;

  @media (max-width: 768px) {
    padding: 0 3vw;
    padding-bottom: 3rem;
  }
`,o3=w.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  padding-top: 4rem;
  padding-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    padding-top: 2.5rem;
    padding-bottom: 1.5rem;
  }
`,s3=w.h3`
  font-style: italic;
  font-family: var(--andover-font-serif);
  text-align: left;
  margin: 0;
  color: white;
  font-size: 2.2rem;
  white-space: nowrap;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.8rem;
  }
`,l3=w.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Zg=w.a`
  border: 2px solid white;
  border-radius: 50px;
  padding: 1rem 3rem;
  color: white;
  font-size: 1.3rem;
  font-family: var(--andover-font-serif);
  margin: 0;
  background: none;
  cursor: pointer;
  transition: all 0.2s ease;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    background: white;
    color: ${zx};
  }

  @media (max-width: 768px) {
    padding: 0.75rem 2rem;
    font-size: 1.1rem;
  }
`,c3=w.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  margin: 2rem auto;
`,u3=w.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  padding-bottom: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,zf=w.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Qg=w.h4`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  font-weight: 600;
  color: ${Ox};
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,qi=w.a`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  text-decoration: none;
  transition: color 0.2s ease;
  line-height: 1.6;

  &:hover {
    color: ${Ox};
  }
`,I2=w.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-family: var(--andover-font-sans);
  margin: 0 0 0.5rem 0;
  line-height: 1.6;
`,d3=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
  }
`,f3=w.img`
  width: 80px;
  height: 80px;
  margin: 0 0 1rem 0;
  object-fit: contain;

  @media (max-width: 768px) {
    margin: 0 auto 1rem auto;
  }
`,h3=w.div`
  color: white;
  font-family: var(--andover-font-serif);
  margin-bottom: 1rem;
  text-align: left;

  div:first-child {
    font-size: 1.2rem;
    font-weight: normal;
    margin-bottom: 0.2rem;
  }

  div:last-child {
    font-size: 1.6rem;
    font-weight: bold;
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`,m3=w.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`,Jg=w.span`
  width: 40px;
  height: 40px;
  display: inline-block;
  background: transparent;
  border-radius: 50%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: ${Ox};
  }

  img {
    width: 24px;
    height: 24px;
    object-fit: contain;
  }
`,p3=w.div`
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  padding: 2rem 0;
  width: 100%;
  background: ${zx};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,g3=()=>d.jsxs(r3,{children:[d.jsxs(a3,{children:[d.jsxs(o3,{children:[d.jsx(s3,{children:"Take Action…"}),d.jsxs(l3,{children:[d.jsx(Zg,{href:"https://mymun.com",children:"REGISTER"}),d.jsx(Zg,{href:"/volunteer",children:"VOLUNTEER"}),d.jsx(Zg,{href:"/donate",children:"GIVE"})]})]}),d.jsx(c3,{}),d.jsxs(u3,{children:[d.jsxs(zf,{children:[d.jsx(Qg,{children:"About"}),d.jsx(qi,{href:"/about",children:"Our Story"}),d.jsx(qi,{href:"/mandate",children:"Our Mission"}),d.jsx(qi,{href:"/integrity",children:"Integrity"}),d.jsx(qi,{href:"/membership",children:"Membership"})]}),d.jsxs(zf,{children:[d.jsx(Qg,{children:"Programs"}),d.jsx(qi,{href:"/programs",children:"Youth Leadership"}),d.jsx(qi,{href:"/programs",children:"Community Service"}),d.jsx(qi,{href:"/programs",children:"Global Education"}),d.jsx(qi,{href:"/programs",children:"Model UN"})]}),d.jsxs(zf,{children:[d.jsx(Qg,{children:"Get Involved"}),d.jsx(qi,{href:"/volunteer",children:"Volunteer"}),d.jsx(qi,{href:"/donate",children:"Donate"}),d.jsx(qi,{href:"/partner",children:"Partner"}),d.jsx(qi,{href:"/take-action",children:"Take Action"})]}),d.jsx(zf,{children:d.jsxs(d3,{children:[d.jsx(f3,{src:"/dmun-white-logo.png",alt:"DMUN Foundation Logo"}),d.jsx(h3,{children:d.jsx("div",{children:"DMUN Foundation"})}),d.jsx(I2,{children:"enquiries@dmun.org"}),d.jsx(I2,{children:"+1 (339) 927 8826"}),d.jsxs(m3,{children:[d.jsx(Jg,{as:"a",href:"https://www.instagram.com/discovermun/",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:"/instagram-icon.png",alt:"Instagram"})}),d.jsx(Jg,{as:"a",href:"https://www.linkedin.com/company/dmun-foundation/",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:"/linkedin-icon.png",alt:"LinkedIn"})}),d.jsx(Jg,{as:"a",href:"https://www.youtube.com/@dmunfoundation",target:"_blank",rel:"noopener noreferrer",children:d.jsx("img",{src:"/Youtube-icon.png",alt:"YouTube"})})]})]})})]})]}),d.jsx(p3,{children:"© 2025 DMUN Foundation, All Rights Reserved."})]}),v3=za`
  from { opacity: 0; transform: translateY(-40px); }
  to { opacity: 1; transform: translateY(0); }
`,gj="#002147",Zl="#44b8f3",x3=w.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 2000;
  display: ${({open:n})=>n?"flex":"none"};
  animation: ${v3} 0.4s cubic-bezier(0.4,0,0.2,1);
  font-family: var(--andover-font-serif);
  background: ${gj};
  color: white;
  overflow-y: auto;
`,y3=w.div`
  width: 100%;
  padding: 4rem 5vw;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (max-width: 768px) {
    padding: 2rem 3vw;
    gap: 2rem;
  }
`,b3=w.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`,w3=w.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  letter-spacing: 0.01em;
  transition: color 0.2s ease;

  &:hover {
    color: ${Zl};
  }
`,_3=w.div`
  display: flex;
  align-items: center;
  flex: 1;
  max-width: 400px;
`,S3=w.input`
  border: none;
  border-bottom: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1.1rem;
  padding: 0.5rem 0;
  outline: none;
  width: 100%;
  font-family: var(--andover-font-sans);

  &::placeholder { 
    color: rgba(255, 255, 255, 0.7); 
  }

  &:focus {
    border-bottom-color: ${Zl};
  }
`,T3=w.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`,e0=w(Ut)`
  background: ${Zl};
  color: white;
  border: none;
  border-radius: 4px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.2s ease;
  text-align: center;

  &:hover {
    background: white;
    color: ${gj};
  }
`,j3=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`,Of=w.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Nf=w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Tn=w(Ut)`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-weight: 400;
  transition: color 0.2s ease;
  padding: 0.5rem 0;

  &:hover { 
    color: ${Zl};
  }
`,A3=w.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`,t0=w.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`,n0=w.h4`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  font-weight: 600;
  color: ${Zl};
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,Ii=w(Ut)`
  display: block;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-weight: 400;
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &:hover { 
    color: ${Zl};
  }
`,E3=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),C3=({open:n,onClose:e})=>{const r=bx(),[a,o]=Ei.useState(""),c=u=>{u.key==="Enter"&&a.trim()&&(r(`/newsroom?search=${encodeURIComponent(a.trim())}`),e())};return d.jsx(x3,{open:n,children:d.jsxs(y3,{children:[d.jsxs(b3,{children:[d.jsxs(w3,{onClick:e,children:[d.jsx(E3,{})," Close"]}),d.jsx(_3,{children:d.jsx(S3,{placeholder:"What are you looking for?",value:a,onChange:u=>o(u.target.value),onKeyDown:c})})]}),d.jsxs(T3,{children:[d.jsx(e0,{to:"/volunteer",onClick:e,children:"Volunteer"}),d.jsx(e0,{to:"/donate",onClick:e,children:"Donate"}),d.jsx(e0,{to:"/partner",onClick:e,children:"Partner With Us"})]}),d.jsxs(j3,{children:[d.jsxs(Of,{children:[d.jsx(Nf,{children:"About"}),d.jsx(Tn,{to:"/about",onClick:e,children:"Our Story"}),d.jsx(Tn,{to:"/mandate",onClick:e,children:"Our Mission"}),d.jsx(Tn,{to:"/integrity",onClick:e,children:"Integrity"}),d.jsx(Tn,{to:"/membership",onClick:e,children:"Membership"})]}),d.jsxs(Of,{children:[d.jsx(Nf,{children:"Programs"}),d.jsx(Tn,{to:"/programs",onClick:e,children:"Youth Leadership"}),d.jsx(Tn,{to:"/programs",onClick:e,children:"Community Service"}),d.jsx(Tn,{to:"/programs",onClick:e,children:"Global Education"}),d.jsx(Tn,{to:"/programs",onClick:e,children:"Model UN"})]}),d.jsxs(Of,{children:[d.jsx(Nf,{children:"Advocacy"}),d.jsx(Tn,{to:"/advocacy",onClick:e,children:"Education"}),d.jsx(Tn,{to:"/advocacy",onClick:e,children:"Environment"}),d.jsx(Tn,{to:"/advocacy",onClick:e,children:"Social Justice"}),d.jsx(Tn,{to:"/take-action",onClick:e,children:"Take Action"})]}),d.jsxs(Of,{children:[d.jsx(Nf,{children:"Research"}),d.jsx(Tn,{to:"/research",onClick:e,children:"Publications"}),d.jsx(Tn,{to:"/research",onClick:e,children:"Projects"}),d.jsx(Tn,{to:"/research",onClick:e,children:"Partners"}),d.jsx(Tn,{to:"/newsroom",onClick:e,children:"Newsroom"})]})]}),d.jsxs(A3,{children:[d.jsxs(t0,{children:[d.jsx(n0,{children:"Get Involved"}),d.jsx(Ii,{to:"/volunteer",onClick:e,children:"Volunteer"}),d.jsx(Ii,{to:"/donate",onClick:e,children:"Donate"}),d.jsx(Ii,{to:"/partner",onClick:e,children:"Partner"}),d.jsx(Ii,{to:"/membership",onClick:e,children:"Join"})]}),d.jsxs(t0,{children:[d.jsx(n0,{children:"Resources"}),d.jsx(Ii,{to:"/publications",onClick:e,children:"Publications"}),d.jsx(Ii,{to:"/newsroom",onClick:e,children:"News"}),d.jsx(Ii,{to:"/donor-relations",onClick:e,children:"Donor Relations"}),d.jsx(Ii,{to:"/integrity",onClick:e,children:"Integrity"})]}),d.jsxs(t0,{children:[d.jsx(n0,{children:"Connect"}),d.jsx(Ii,{to:"/about",onClick:e,children:"Contact Us"}),d.jsx(Ii,{href:"https://www.instagram.com/discovermun/",target:"_blank",children:"Instagram"}),d.jsx(Ii,{href:"https://www.linkedin.com/company/dmun-foundation/",target:"_blank",children:"LinkedIn"}),d.jsx(Ii,{href:"https://www.youtube.com/@dmunfoundation",target:"_blank",children:"YouTube"})]})]})]})})},vj=P.createContext({});function Nx(n){const e=P.useRef(null);return e.current===null&&(e.current=n()),e.current}const Lx=typeof window<"u",xj=Lx?P.useLayoutEffect:P.useEffect,Ux=P.createContext(null);function Bx(n,e){n.indexOf(e)===-1&&n.push(e)}function Vx(n,e){const r=n.indexOf(e);r>-1&&n.splice(r,1)}const Ca=(n,e,r)=>r>e?e:r<n?n:r;let $x=()=>{};const Ma={},yj=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function bj(n){return typeof n=="object"&&n!==null}const wj=n=>/^0[^.\s]+$/u.test(n);function Px(n){let e;return()=>(e===void 0&&(e=n()),e)}const ir=n=>n,M3=(n,e)=>r=>e(n(r)),pd=(...n)=>n.reduce(M3),Xu=(n,e,r)=>{const a=e-n;return a===0?1:(r-n)/a};class Hx{constructor(){this.subscriptions=[]}add(e){return Bx(this.subscriptions,e),()=>Vx(this.subscriptions,e)}notify(e,r,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,r,a);else for(let c=0;c<o;c++){const u=this.subscriptions[c];u&&u(e,r,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Nr=n=>n*1e3,Lr=n=>n/1e3;function _j(n,e){return e?n*(1e3/e):0}const Sj=(n,e,r)=>(((1-3*r+3*e)*n+(3*r-6*e))*n+3*e)*n,D3=1e-7,k3=12;function R3(n,e,r,a,o){let c,u,f=0;do u=e+(r-e)/2,c=Sj(u,a,o)-n,c>0?r=u:e=u;while(Math.abs(c)>D3&&++f<k3);return u}function gd(n,e,r,a){if(n===e&&r===a)return ir;const o=c=>R3(c,0,1,n,r);return c=>c===0||c===1?c:Sj(o(c),e,a)}const Tj=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,jj=n=>e=>1-n(1-e),Aj=gd(.33,1.53,.69,.99),Yx=jj(Aj),Ej=Tj(Yx),Cj=n=>(n*=2)<1?.5*Yx(n):.5*(2-Math.pow(2,-10*(n-1))),Fx=n=>1-Math.sin(Math.acos(n)),Mj=jj(Fx),Dj=Tj(Fx),z3=gd(.42,0,1,1),O3=gd(0,0,.58,1),kj=gd(.42,0,.58,1),N3=n=>Array.isArray(n)&&typeof n[0]!="number",Rj=n=>Array.isArray(n)&&typeof n[0]=="number",L3={linear:ir,easeIn:z3,easeInOut:kj,easeOut:O3,circIn:Fx,circInOut:Dj,circOut:Mj,backIn:Yx,backInOut:Ej,backOut:Aj,anticipate:Cj},U3=n=>typeof n=="string",X2=n=>{if(Rj(n)){$x(n.length===4);const[e,r,a,o]=n;return gd(e,r,a,o)}else if(U3(n))return L3[n];return n},Lf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function B3(n,e){let r=new Set,a=new Set,o=!1,c=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function m(v){u.has(v)&&(p.schedule(v),n()),v(f)}const p={schedule:(v,x=!1,y=!1)=>{const j=y&&o?r:a;return x&&u.add(v),j.has(v)||j.add(v),v},cancel:v=>{a.delete(v),u.delete(v)},process:v=>{if(f=v,o){c=!0;return}o=!0,[r,a]=[a,r],r.forEach(m),r.clear(),o=!1,c&&(c=!1,p.process(v))}};return p}const V3=40;function zj(n,e){let r=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>r=!0,u=Lf.reduce((k,z)=>(k[z]=B3(c),k),{}),{setup:f,read:m,resolveKeyframes:p,preUpdate:v,update:x,preRender:y,render:b,postRender:j}=u,T=()=>{const k=Ma.useManualTiming?o.timestamp:performance.now();r=!1,Ma.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(k-o.timestamp,V3),1)),o.timestamp=k,o.isProcessing=!0,f.process(o),m.process(o),p.process(o),v.process(o),x.process(o),y.process(o),b.process(o),j.process(o),o.isProcessing=!1,r&&e&&(a=!1,n(T))},E=()=>{r=!0,a=!0,o.isProcessing||n(T)};return{schedule:Lf.reduce((k,z)=>{const D=u[z];return k[z]=(L,O=!1,U=!1)=>(r||E(),D.schedule(L,O,U)),k},{}),cancel:k=>{for(let z=0;z<Lf.length;z++)u[Lf[z]].cancel(k)},state:o,steps:u}}const{schedule:pt,cancel:Da,state:vn,steps:i0}=zj(typeof requestAnimationFrame<"u"?requestAnimationFrame:ir,!0);let Rh;function $3(){Rh=void 0}const ni={now:()=>(Rh===void 0&&ni.set(vn.isProcessing||Ma.useManualTiming?vn.timestamp:performance.now()),Rh),set:n=>{Rh=n,queueMicrotask($3)}},Oj=n=>e=>typeof e=="string"&&e.startsWith(n),Gx=Oj("--"),P3=Oj("var(--"),qx=n=>P3(n)?H3.test(n.split("/*")[0].trim()):!1,H3=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Ql={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Wu={...Ql,transform:n=>Ca(0,1,n)},Uf={...Ql,default:1},Cu=n=>Math.round(n*1e5)/1e5,Ix=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function Y3(n){return n==null}const F3=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Xx=(n,e)=>r=>!!(typeof r=="string"&&F3.test(r)&&r.startsWith(n)||e&&!Y3(r)&&Object.prototype.hasOwnProperty.call(r,e)),Nj=(n,e,r)=>a=>{if(typeof a!="string")return a;const[o,c,u,f]=a.match(Ix);return{[n]:parseFloat(o),[e]:parseFloat(c),[r]:parseFloat(u),alpha:f!==void 0?parseFloat(f):1}},G3=n=>Ca(0,255,n),r0={...Ql,transform:n=>Math.round(G3(n))},as={test:Xx("rgb","red"),parse:Nj("red","green","blue"),transform:({red:n,green:e,blue:r,alpha:a=1})=>"rgba("+r0.transform(n)+", "+r0.transform(e)+", "+r0.transform(r)+", "+Cu(Wu.transform(a))+")"};function q3(n){let e="",r="",a="",o="";return n.length>5?(e=n.substring(1,3),r=n.substring(3,5),a=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),r=n.substring(2,3),a=n.substring(3,4),o=n.substring(4,5),e+=e,r+=r,a+=a,o+=o),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const _v={test:Xx("#"),parse:q3,transform:as.transform},vd=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),lo=vd("deg"),Ur=vd("%"),we=vd("px"),I3=vd("vh"),X3=vd("vw"),W2={...Ur,parse:n=>Ur.parse(n)/100,transform:n=>Ur.transform(n*100)},gl={test:Xx("hsl","hue"),parse:Nj("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:r,alpha:a=1})=>"hsla("+Math.round(n)+", "+Ur.transform(Cu(e))+", "+Ur.transform(Cu(r))+", "+Cu(Wu.transform(a))+")"},Gt={test:n=>as.test(n)||_v.test(n)||gl.test(n),parse:n=>as.test(n)?as.parse(n):gl.test(n)?gl.parse(n):_v.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?as.transform(n):gl.transform(n),getAnimatableNone:n=>{const e=Gt.parse(n);return e.alpha=0,Gt.transform(e)}},W3=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function K3(n){var e,r;return isNaN(n)&&typeof n=="string"&&(((e=n.match(Ix))==null?void 0:e.length)||0)+(((r=n.match(W3))==null?void 0:r.length)||0)>0}const Lj="number",Uj="color",Z3="var",Q3="var(",K2="${}",J3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ku(n){const e=n.toString(),r=[],a={color:[],number:[],var:[]},o=[];let c=0;const f=e.replace(J3,m=>(Gt.test(m)?(a.color.push(c),o.push(Uj),r.push(Gt.parse(m))):m.startsWith(Q3)?(a.var.push(c),o.push(Z3),r.push(m)):(a.number.push(c),o.push(Lj),r.push(parseFloat(m))),++c,K2)).split(K2);return{values:r,split:f,indexes:a,types:o}}function Bj(n){return Ku(n).values}function Vj(n){const{split:e,types:r}=Ku(n),a=e.length;return o=>{let c="";for(let u=0;u<a;u++)if(c+=e[u],o[u]!==void 0){const f=r[u];f===Lj?c+=Cu(o[u]):f===Uj?c+=Gt.transform(o[u]):c+=o[u]}return c}}const ez=n=>typeof n=="number"?0:Gt.test(n)?Gt.getAnimatableNone(n):n;function tz(n){const e=Bj(n);return Vj(n)(e.map(ez))}const wo={test:K3,parse:Bj,createTransformer:Vj,getAnimatableNone:tz};function a0(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(e-n)*6*r:r<1/2?e:r<2/3?n+(e-n)*(2/3-r)*6:n}function nz({hue:n,saturation:e,lightness:r,alpha:a}){n/=360,e/=100,r/=100;let o=0,c=0,u=0;if(!e)o=c=u=r;else{const f=r<.5?r*(1+e):r+e-r*e,m=2*r-f;o=a0(m,f,n+1/3),c=a0(m,f,n),u=a0(m,f,n-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(u*255),alpha:a}}function Qh(n,e){return r=>r>0?e:n}const _t=(n,e,r)=>n+(e-n)*r,o0=(n,e,r)=>{const a=n*n,o=r*(e*e-a)+a;return o<0?0:Math.sqrt(o)},iz=[_v,as,gl],rz=n=>iz.find(e=>e.test(n));function Z2(n){const e=rz(n);if(!e)return!1;let r=e.parse(n);return e===gl&&(r=nz(r)),r}const Q2=(n,e)=>{const r=Z2(n),a=Z2(e);if(!r||!a)return Qh(n,e);const o={...r};return c=>(o.red=o0(r.red,a.red,c),o.green=o0(r.green,a.green,c),o.blue=o0(r.blue,a.blue,c),o.alpha=_t(r.alpha,a.alpha,c),as.transform(o))},Sv=new Set(["none","hidden"]);function az(n,e){return Sv.has(n)?r=>r<=0?n:e:r=>r>=1?e:n}function oz(n,e){return r=>_t(n,e,r)}function Wx(n){return typeof n=="number"?oz:typeof n=="string"?qx(n)?Qh:Gt.test(n)?Q2:cz:Array.isArray(n)?$j:typeof n=="object"?Gt.test(n)?Q2:sz:Qh}function $j(n,e){const r=[...n],a=r.length,o=n.map((c,u)=>Wx(c)(c,e[u]));return c=>{for(let u=0;u<a;u++)r[u]=o[u](c);return r}}function sz(n,e){const r={...n,...e},a={};for(const o in r)n[o]!==void 0&&e[o]!==void 0&&(a[o]=Wx(n[o])(n[o],e[o]));return o=>{for(const c in a)r[c]=a[c](o);return r}}function lz(n,e){const r=[],a={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],u=n.indexes[c][a[c]],f=n.values[u]??0;r[o]=f,a[c]++}return r}const cz=(n,e)=>{const r=wo.createTransformer(e),a=Ku(n),o=Ku(e);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?Sv.has(n)&&!o.values.length||Sv.has(e)&&!a.values.length?az(n,e):pd($j(lz(a,o),o.values),r):Qh(n,e)};function Pj(n,e,r){return typeof n=="number"&&typeof e=="number"&&typeof r=="number"?_t(n,e,r):Wx(n)(n,e)}const uz=n=>{const e=({timestamp:r})=>n(r);return{start:(r=!0)=>pt.update(e,r),stop:()=>Da(e),now:()=>vn.isProcessing?vn.timestamp:ni.now()}},Hj=(n,e,r=10)=>{let a="";const o=Math.max(Math.round(e/r),2);for(let c=0;c<o;c++)a+=Math.round(n(c/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Jh=2e4;function Kx(n){let e=0;const r=50;let a=n.next(e);for(;!a.done&&e<Jh;)e+=r,a=n.next(e);return e>=Jh?1/0:e}function dz(n,e=100,r){const a=r({...n,keyframes:[0,e]}),o=Math.min(Kx(a),Jh);return{type:"keyframes",ease:c=>a.next(o*c).value/e,duration:Lr(o)}}const fz=5;function Yj(n,e,r){const a=Math.max(e-fz,0);return _j(r-n(a),e-a)}const Mt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},J2=.001;function hz({duration:n=Mt.duration,bounce:e=Mt.bounce,velocity:r=Mt.velocity,mass:a=Mt.mass}){let o,c,u=1-e;u=Ca(Mt.minDamping,Mt.maxDamping,u),n=Ca(Mt.minDuration,Mt.maxDuration,Lr(n)),u<1?(o=p=>{const v=p*u,x=v*n,y=v-r,b=Tv(p,u),j=Math.exp(-x);return J2-y/b*j},c=p=>{const x=p*u*n,y=x*r+r,b=Math.pow(u,2)*Math.pow(p,2)*n,j=Math.exp(-x),T=Tv(Math.pow(p,2),u);return(-o(p)+J2>0?-1:1)*((y-b)*j)/T}):(o=p=>{const v=Math.exp(-p*n),x=(p-r)*n+1;return-.001+v*x},c=p=>{const v=Math.exp(-p*n),x=(r-p)*(n*n);return v*x});const f=5/n,m=pz(o,c,f);if(n=Nr(n),isNaN(m))return{stiffness:Mt.stiffness,damping:Mt.damping,duration:n};{const p=Math.pow(m,2)*a;return{stiffness:p,damping:u*2*Math.sqrt(a*p),duration:n}}}const mz=12;function pz(n,e,r){let a=r;for(let o=1;o<mz;o++)a=a-n(a)/e(a);return a}function Tv(n,e){return n*Math.sqrt(1-e*e)}const gz=["duration","bounce"],vz=["stiffness","damping","mass"];function e_(n,e){return e.some(r=>n[r]!==void 0)}function xz(n){let e={velocity:Mt.velocity,stiffness:Mt.stiffness,damping:Mt.damping,mass:Mt.mass,isResolvedFromDuration:!1,...n};if(!e_(n,vz)&&e_(n,gz))if(n.visualDuration){const r=n.visualDuration,a=2*Math.PI/(r*1.2),o=a*a,c=2*Ca(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Mt.mass,stiffness:o,damping:c}}else{const r=hz(n);e={...e,...r,mass:Mt.mass},e.isResolvedFromDuration=!0}return e}function em(n=Mt.visualDuration,e=Mt.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:a,restDelta:o}=r;const c=r.keyframes[0],u=r.keyframes[r.keyframes.length-1],f={done:!1,value:c},{stiffness:m,damping:p,mass:v,duration:x,velocity:y,isResolvedFromDuration:b}=xz({...r,velocity:-Lr(r.velocity||0)}),j=y||0,T=p/(2*Math.sqrt(m*v)),E=u-c,C=Lr(Math.sqrt(m/v)),M=Math.abs(E)<5;a||(a=M?Mt.restSpeed.granular:Mt.restSpeed.default),o||(o=M?Mt.restDelta.granular:Mt.restDelta.default);let k;if(T<1){const D=Tv(C,T);k=L=>{const O=Math.exp(-T*C*L);return u-O*((j+T*C*E)/D*Math.sin(D*L)+E*Math.cos(D*L))}}else if(T===1)k=D=>u-Math.exp(-C*D)*(E+(j+C*E)*D);else{const D=C*Math.sqrt(T*T-1);k=L=>{const O=Math.exp(-T*C*L),U=Math.min(D*L,300);return u-O*((j+T*C*E)*Math.sinh(U)+D*E*Math.cosh(U))/D}}const z={calculatedDuration:b&&x||null,next:D=>{const L=k(D);if(b)f.done=D>=x;else{let O=D===0?j:0;T<1&&(O=D===0?Nr(j):Yj(k,D,L));const U=Math.abs(O)<=a,H=Math.abs(u-L)<=o;f.done=U&&H}return f.value=f.done?u:L,f},toString:()=>{const D=Math.min(Kx(z),Jh),L=Hj(O=>z.next(D*O).value,D,30);return D+"ms "+L},toTransition:()=>{}};return z}em.applyToOptions=n=>{const e=dz(n,100,em);return n.ease=e.ease,n.duration=Nr(e.duration),n.type="keyframes",n};function jv({keyframes:n,velocity:e=0,power:r=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:u,min:f,max:m,restDelta:p=.5,restSpeed:v}){const x=n[0],y={done:!1,value:x},b=U=>f!==void 0&&U<f||m!==void 0&&U>m,j=U=>f===void 0?m:m===void 0||Math.abs(f-U)<Math.abs(m-U)?f:m;let T=r*e;const E=x+T,C=u===void 0?E:u(E);C!==E&&(T=C-x);const M=U=>-T*Math.exp(-U/a),k=U=>C+M(U),z=U=>{const H=M(U),W=k(U);y.done=Math.abs(H)<=p,y.value=y.done?C:W};let D,L;const O=U=>{b(y.value)&&(D=U,L=em({keyframes:[y.value,j(y.value)],velocity:Yj(k,U,y.value),damping:o,stiffness:c,restDelta:p,restSpeed:v}))};return O(0),{calculatedDuration:null,next:U=>{let H=!1;return!L&&D===void 0&&(H=!0,z(U),O(U)),D!==void 0&&U>=D?L.next(U-D):(!H&&z(U),y)}}}function yz(n,e,r){const a=[],o=r||Ma.mix||Pj,c=n.length-1;for(let u=0;u<c;u++){let f=o(n[u],n[u+1]);if(e){const m=Array.isArray(e)?e[u]||ir:e;f=pd(m,f)}a.push(f)}return a}function Fj(n,e,{clamp:r=!0,ease:a,mixer:o}={}){const c=n.length;if($x(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[c-1]&&(n=[...n].reverse(),e=[...e].reverse());const f=yz(e,a,o),m=f.length,p=v=>{if(u&&v<n[0])return e[0];let x=0;if(m>1)for(;x<n.length-2&&!(v<n[x+1]);x++);const y=Xu(n[x],n[x+1],v);return f[x](y)};return r?v=>p(Ca(n[0],n[c-1],v)):p}function bz(n,e){const r=n[n.length-1];for(let a=1;a<=e;a++){const o=Xu(0,e,a);n.push(_t(r,1,o))}}function wz(n){const e=[0];return bz(e,n.length-1),e}function _z(n,e){return n.map(r=>r*e)}function Sz(n,e){return n.map(()=>e||kj).splice(0,n.length-1)}function Mu({duration:n=300,keyframes:e,times:r,ease:a="easeInOut"}){const o=N3(a)?a.map(X2):X2(a),c={done:!1,value:e[0]},u=_z(r&&r.length===e.length?r:wz(e),n),f=Fj(u,e,{ease:Array.isArray(o)?o:Sz(e,o)});return{calculatedDuration:n,next:m=>(c.value=f(m),c.done=m>=n,c)}}const Tz=n=>n!==null;function Zx(n,{repeat:e,repeatType:r="loop"},a,o=1){const c=n.filter(Tz),f=o<0||e&&r!=="loop"&&e%2===1?0:c.length-1;return!f||a===void 0?c[f]:a}const jz={decay:jv,inertia:jv,tween:Mu,keyframes:Mu,spring:em};function Gj(n){typeof n.type=="string"&&(n.type=jz[n.type])}class Qx{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,r){return this.finished.then(e,r)}}const Az=n=>n/100;class Tm extends Qx{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var a,o;const{motionValue:r}=this.options;r&&r.updatedAt!==ni.now()&&this.tick(ni.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(a=this.options).onStop)==null||o.call(a))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Gj(e);const{type:r=Mu,repeat:a=0,repeatDelay:o=0,repeatType:c,velocity:u=0}=e;let{keyframes:f}=e;const m=r||Mu;m!==Mu&&typeof f[0]!="number"&&(this.mixKeyframes=pd(Az,Pj(f[0],f[1])),f=[0,100]);const p=m({...e,keyframes:f});c==="mirror"&&(this.mirroredGenerator=m({...e,keyframes:[...f].reverse(),velocity:-u})),p.calculatedDuration===null&&(p.calculatedDuration=Kx(p));const{calculatedDuration:v}=p;this.calculatedDuration=v,this.resolvedDuration=v+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=p}updateTime(e){const r=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=r}tick(e,r=!1){const{generator:a,totalDuration:o,mixKeyframes:c,mirroredGenerator:u,resolvedDuration:f,calculatedDuration:m}=this;if(this.startTime===null)return a.next(0);const{delay:p=0,keyframes:v,repeat:x,repeatType:y,repeatDelay:b,type:j,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),r?this.currentTime=e:this.updateTime(e);const C=this.currentTime-p*(this.playbackSpeed>=0?1:-1),M=this.playbackSpeed>=0?C<0:C>o;this.currentTime=Math.max(C,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let k=this.currentTime,z=a;if(x){const U=Math.min(this.currentTime,o)/f;let H=Math.floor(U),W=U%1;!W&&U>=1&&(W=1),W===1&&H--,H=Math.min(H,x+1),!!(H%2)&&(y==="reverse"?(W=1-W,b&&(W-=b/f)):y==="mirror"&&(z=u)),k=Ca(0,1,W)*f}const D=M?{done:!1,value:v[0]}:z.next(k);c&&(D.value=c(D.value));let{done:L}=D;!M&&m!==null&&(L=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&L);return O&&j!==jv&&(D.value=Zx(v,this.options,E,this.speed)),T&&T(D.value),O&&this.finish(),D}then(e,r){return this.finished.then(e,r)}get duration(){return Lr(this.calculatedDuration)}get time(){return Lr(this.currentTime)}set time(e){var r;e=Nr(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(r=this.driver)==null||r.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(ni.now());const r=this.playbackSpeed!==e;this.playbackSpeed=e,r&&(this.time=Lr(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:e=uz,startTime:r}=this.options;this.driver||(this.driver=e(u=>this.tick(u))),(c=(o=this.options).onPlay)==null||c.call(o);const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=r??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ni.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,r;this.notifyFinished(),this.teardown(),this.state="finished",(r=(e=this.options).onComplete)==null||r.call(e)}cancel(){var e,r;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(r=(e=this.options).onCancel)==null||r.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var r;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(r=this.driver)==null||r.stop(),e.observe(this)}}function Ez(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const os=n=>n*180/Math.PI,Av=n=>{const e=os(Math.atan2(n[1],n[0]));return Ev(e)},Cz={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Av,rotateZ:Av,skewX:n=>os(Math.atan(n[1])),skewY:n=>os(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Ev=n=>(n=n%360,n<0&&(n+=360),n),t_=Av,n_=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),i_=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Mz={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:n_,scaleY:i_,scale:n=>(n_(n)+i_(n))/2,rotateX:n=>Ev(os(Math.atan2(n[6],n[5]))),rotateY:n=>Ev(os(Math.atan2(-n[2],n[0]))),rotateZ:t_,rotate:t_,skewX:n=>os(Math.atan(n[4])),skewY:n=>os(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function Cv(n){return n.includes("scale")?1:0}function Mv(n,e){if(!n||n==="none")return Cv(e);const r=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let a,o;if(r)a=Mz,o=r;else{const f=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);a=Cz,o=f}if(!o)return Cv(e);const c=a[e],u=o[1].split(",").map(kz);return typeof c=="function"?c(u):u[c]}const Dz=(n,e)=>{const{transform:r="none"}=getComputedStyle(n);return Mv(r,e)};function kz(n){return parseFloat(n.trim())}const Jl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ec=new Set(Jl),r_=n=>n===Ql||n===we,Rz=new Set(["x","y","z"]),zz=Jl.filter(n=>!Rz.has(n));function Oz(n){const e=[];return zz.forEach(r=>{const a=n.getValue(r);a!==void 0&&(e.push([r,a.get()]),a.set(r.startsWith("scale")?1:0))}),e}const ds={width:({x:n},{paddingLeft:e="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),height:({y:n},{paddingTop:e="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(e)-parseFloat(r),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Mv(e,"x"),y:(n,{transform:e})=>Mv(e,"y")};ds.translateX=ds.x;ds.translateY=ds.y;const fs=new Set;let Dv=!1,kv=!1,Rv=!1;function qj(){if(kv){const n=Array.from(fs).filter(a=>a.needsMeasurement),e=new Set(n.map(a=>a.element)),r=new Map;e.forEach(a=>{const o=Oz(a);o.length&&(r.set(a,o),a.render())}),n.forEach(a=>a.measureInitialState()),e.forEach(a=>{a.render();const o=r.get(a);o&&o.forEach(([c,u])=>{var f;(f=a.getValue(c))==null||f.set(u)})}),n.forEach(a=>a.measureEndState()),n.forEach(a=>{a.suspendedScrollY!==void 0&&window.scrollTo(0,a.suspendedScrollY)})}kv=!1,Dv=!1,fs.forEach(n=>n.complete(Rv)),fs.clear()}function Ij(){fs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(kv=!0)})}function Nz(){Rv=!0,Ij(),qj(),Rv=!1}class Jx{constructor(e,r,a,o,c,u=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=r,this.name=a,this.motionValue=o,this.element=c,this.isAsync=u}scheduleResolve(){this.state="scheduled",this.isAsync?(fs.add(this),Dv||(Dv=!0,pt.read(Ij),pt.resolveKeyframes(qj))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:r,element:a,motionValue:o}=this;if(e[0]===null){const c=o==null?void 0:o.get(),u=e[e.length-1];if(c!==void 0)e[0]=c;else if(a&&r){const f=a.readValue(r,u);f!=null&&(e[0]=f)}e[0]===void 0&&(e[0]=u),o&&c===void 0&&o.set(e[0])}Ez(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fs.delete(this)}cancel(){this.state==="scheduled"&&(fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Lz=n=>n.startsWith("--");function Uz(n,e,r){Lz(e)?n.style.setProperty(e,r):n.style[e]=r}const Bz=Px(()=>window.ScrollTimeline!==void 0),Vz={};function $z(n,e){const r=Px(n);return()=>Vz[e]??r()}const Xj=$z(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),xu=([n,e,r,a])=>`cubic-bezier(${n}, ${e}, ${r}, ${a})`,a_={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:xu([0,.65,.55,1]),circOut:xu([.55,0,1,.45]),backIn:xu([.31,.01,.66,-.59]),backOut:xu([.33,1.53,.69,.99])};function Wj(n,e){if(n)return typeof n=="function"?Xj()?Hj(n,e):"ease-out":Rj(n)?xu(n):Array.isArray(n)?n.map(r=>Wj(r,e)||a_.easeOut):a_[n]}function Pz(n,e,r,{delay:a=0,duration:o=300,repeat:c=0,repeatType:u="loop",ease:f="easeOut",times:m}={},p=void 0){const v={[e]:r};m&&(v.offset=m);const x=Wj(f,o);Array.isArray(x)&&(v.easing=x);const y={delay:a,duration:o,easing:Array.isArray(x)?"linear":x,fill:"both",iterations:c+1,direction:u==="reverse"?"alternate":"normal"};return p&&(y.pseudoElement=p),n.animate(v,y)}function Kj(n){return typeof n=="function"&&"applyToOptions"in n}function Hz({type:n,...e}){return Kj(n)&&Xj()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class Yz extends Qx{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,!e)return;const{element:r,name:a,keyframes:o,pseudoElement:c,allowFlatten:u=!1,finalKeyframe:f,onComplete:m}=e;this.isPseudoElement=!!c,this.allowFlatten=u,this.options=e,$x(typeof e.type!="string");const p=Hz(e);this.animation=Pz(r,a,o,p,c),p.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const v=Zx(o,this.options,f,this.speed);this.updateMotionValue?this.updateMotionValue(v):Uz(r,a,v),this.animation.cancel()}m==null||m(),this.notifyFinished()}}play(){this.isStopped||(this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,r;(r=(e=this.animation).finish)==null||r.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var e,r;this.isPseudoElement||(r=(e=this.animation).commitStyles)==null||r.call(e)}get duration(){var r,a;const e=((a=(r=this.animation.effect)==null?void 0:r.getComputedTiming)==null?void 0:a.call(r).duration)||0;return Lr(Number(e))}get time(){return Lr(Number(this.animation.currentTime)||0)}set time(e){this.finishedTime=null,this.animation.currentTime=Nr(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return Number(this.animation.startTime)}set startTime(e){this.animation.startTime=e}attachTimeline({timeline:e,observe:r}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&Bz()?(this.animation.timeline=e,ir):r(this)}}const Zj={anticipate:Cj,backInOut:Ej,circInOut:Dj};function Fz(n){return n in Zj}function Gz(n){typeof n.ease=="string"&&Fz(n.ease)&&(n.ease=Zj[n.ease])}const o_=10;class qz extends Yz{constructor(e){Gz(e),Gj(e),super(e),e.startTime&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:r,onUpdate:a,onComplete:o,element:c,...u}=this.options;if(!r)return;if(e!==void 0){r.set(e);return}const f=new Tm({...u,autoplay:!1}),m=Nr(this.finishedTime??this.time);r.setWithVelocity(f.sample(m-o_).value,f.sample(m).value,o_),f.stop()}}const s_=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(wo.test(n)||n==="0")&&!n.startsWith("url("));function Iz(n){const e=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==e)return!0}function Xz(n,e,r,a){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=n[n.length-1],u=s_(o,e),f=s_(c,e);return!u||!f?!1:Iz(n)||(r==="spring"||Kj(r))&&a}function Qj(n){return bj(n)&&"offsetHeight"in n}const Wz=new Set(["opacity","clipPath","filter","transform"]),Kz=Px(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Zz(n){var p;const{motionValue:e,name:r,repeatDelay:a,repeatType:o,damping:c,type:u}=n;if(!Qj((p=e==null?void 0:e.owner)==null?void 0:p.current))return!1;const{onUpdate:f,transformTemplate:m}=e.owner.getProps();return Kz()&&r&&Wz.has(r)&&(r!=="transform"||!m)&&!f&&!a&&o!=="mirror"&&c!==0&&u!=="inertia"}const Qz=40;class Jz extends Qx{constructor({autoplay:e=!0,delay:r=0,type:a="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:u="loop",keyframes:f,name:m,motionValue:p,element:v,...x}){var j;super(),this.stop=()=>{var T,E;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=ni.now();const y={autoplay:e,delay:r,type:a,repeat:o,repeatDelay:c,repeatType:u,name:m,motionValue:p,element:v,...x},b=(v==null?void 0:v.KeyframeResolver)||Jx;this.keyframeResolver=new b(f,(T,E,C)=>this.onKeyframesResolved(T,E,y,!C),m,p,v),(j=this.keyframeResolver)==null||j.scheduleResolve()}onKeyframesResolved(e,r,a,o){this.keyframeResolver=void 0;const{name:c,type:u,velocity:f,delay:m,isHandoff:p,onUpdate:v}=a;this.resolvedAt=ni.now(),Xz(e,c,u,f)||((Ma.instantAnimations||!m)&&(v==null||v(Zx(e,a,r))),e[0]=e[e.length-1],a.duration=0,a.repeat=0);const y={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>Qz?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:r,...a,keyframes:e},b=!p&&Zz(y)?new qz({...y,element:y.motionValue.owner.current}):new Tm(y);b.finished.then(()=>this.notifyFinished()).catch(ir),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(e,r){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),Nz()),this._animation}get duration(){return this.animation.duration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}const eO=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function tO(n){const e=eO.exec(n);if(!e)return[,];const[,r,a,o]=e;return[`--${r??a}`,o]}function Jj(n,e,r=1){const[a,o]=tO(n);if(!a)return;const c=window.getComputedStyle(e).getPropertyValue(a);if(c){const u=c.trim();return yj(u)?parseFloat(u):u}return qx(o)?Jj(o,e,r+1):o}function ey(n,e){return(n==null?void 0:n[e])??(n==null?void 0:n.default)??n}const eA=new Set(["width","height","top","left","right","bottom",...Jl]),nO={test:n=>n==="auto",parse:n=>n},tA=n=>e=>e.test(n),nA=[Ql,we,Ur,lo,X3,I3,nO],l_=n=>nA.find(tA(n));function iO(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||wj(n):!0}const rO=new Set(["brightness","contrast","saturate","opacity"]);function aO(n){const[e,r]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[a]=r.match(Ix)||[];if(!a)return n;const o=r.replace(a,"");let c=rO.has(e)?1:0;return a!==r&&(c*=100),e+"("+c+o+")"}const oO=/\b([a-z-]*)\(.*?\)/gu,zv={...wo,getAnimatableNone:n=>{const e=n.match(oO);return e?e.map(aO).join(" "):n}},c_={...Ql,transform:Math.round},sO={rotate:lo,rotateX:lo,rotateY:lo,rotateZ:lo,scale:Uf,scaleX:Uf,scaleY:Uf,scaleZ:Uf,skew:lo,skewX:lo,skewY:lo,distance:we,translateX:we,translateY:we,translateZ:we,x:we,y:we,z:we,perspective:we,transformPerspective:we,opacity:Wu,originX:W2,originY:W2,originZ:we},ty={borderWidth:we,borderTopWidth:we,borderRightWidth:we,borderBottomWidth:we,borderLeftWidth:we,borderRadius:we,radius:we,borderTopLeftRadius:we,borderTopRightRadius:we,borderBottomRightRadius:we,borderBottomLeftRadius:we,width:we,maxWidth:we,height:we,maxHeight:we,top:we,right:we,bottom:we,left:we,padding:we,paddingTop:we,paddingRight:we,paddingBottom:we,paddingLeft:we,margin:we,marginTop:we,marginRight:we,marginBottom:we,marginLeft:we,backgroundPositionX:we,backgroundPositionY:we,...sO,zIndex:c_,fillOpacity:Wu,strokeOpacity:Wu,numOctaves:c_},lO={...ty,color:Gt,backgroundColor:Gt,outlineColor:Gt,fill:Gt,stroke:Gt,borderColor:Gt,borderTopColor:Gt,borderRightColor:Gt,borderBottomColor:Gt,borderLeftColor:Gt,filter:zv,WebkitFilter:zv},iA=n=>lO[n];function rA(n,e){let r=iA(n);return r!==zv&&(r=wo),r.getAnimatableNone?r.getAnimatableNone(e):void 0}const cO=new Set(["auto","none","0"]);function uO(n,e,r){let a=0,o;for(;a<n.length&&!o;){const c=n[a];typeof c=="string"&&!cO.has(c)&&Ku(c).values.length&&(o=n[a]),a++}if(o&&r)for(const c of e)n[c]=rA(r,o)}class dO extends Jx{constructor(e,r,a,o,c){super(e,r,a,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:r,name:a}=this;if(!r||!r.current)return;super.readKeyframes();for(let m=0;m<e.length;m++){let p=e[m];if(typeof p=="string"&&(p=p.trim(),qx(p))){const v=Jj(p,r.current);v!==void 0&&(e[m]=v),m===e.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!eA.has(a)||e.length!==2)return;const[o,c]=e,u=l_(o),f=l_(c);if(u!==f)if(r_(u)&&r_(f))for(let m=0;m<e.length;m++){const p=e[m];typeof p=="string"&&(e[m]=parseFloat(p))}else ds[a]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:r}=this,a=[];for(let o=0;o<e.length;o++)(e[o]===null||iO(e[o]))&&a.push(o);a.length&&uO(e,a,r)}measureInitialState(){const{element:e,unresolvedKeyframes:r,name:a}=this;if(!e||!e.current)return;a==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ds[a](e.measureViewportBox(),window.getComputedStyle(e.current)),r[0]=this.measuredOrigin;const o=r[r.length-1];o!==void 0&&e.getValue(a,o).jump(o,!1)}measureEndState(){var f;const{element:e,name:r,unresolvedKeyframes:a}=this;if(!e||!e.current)return;const o=e.getValue(r);o&&o.jump(this.measuredOrigin,!1);const c=a.length-1,u=a[c];a[c]=ds[r](e.measureViewportBox(),window.getComputedStyle(e.current)),u!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=u),(f=this.removedTransforms)!=null&&f.length&&this.removedTransforms.forEach(([m,p])=>{e.getValue(m).set(p)}),this.resolveNoneKeyframes()}}function fO(n,e,r){if(n instanceof EventTarget)return[n];if(typeof n=="string"){let a=document;const o=(r==null?void 0:r[n])??a.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n)}const aA=(n,e)=>e&&typeof n=="number"?e.transform(n):n,u_=30,hO=n=>!isNaN(parseFloat(n)),Du={current:void 0};class mO{constructor(e,r={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=(a,o=!0)=>{var u,f;const c=ni.now();if(this.updatedAt!==c&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&((u=this.events.change)==null||u.notify(this.current),this.dependents))for(const m of this.dependents)m.dirty();o&&((f=this.events.renderRequest)==null||f.notify(this.current))},this.hasAnimated=!1,this.setCurrent(e),this.owner=r.owner}setCurrent(e){this.current=e,this.updatedAt=ni.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=hO(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,r){this.events[e]||(this.events[e]=new Hx);const a=this.events[e].add(r);return e==="change"?()=>{a(),pt.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,r){this.passiveEffect=e,this.stopPassiveEffect=r}set(e,r=!0){!r||!this.passiveEffect?this.updateAndNotify(e,r):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,r,a){this.set(r),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-a}jump(e,r=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return Du.current&&Du.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=ni.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>u_)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,u_);return _j(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(e){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=e(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,r;(e=this.dependents)==null||e.clear(),(r=this.events.destroy)==null||r.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function bs(n,e){return new mO(n,e)}const{schedule:ny}=zj(queueMicrotask,!1),xr={x:!1,y:!1};function oA(){return xr.x||xr.y}function pO(n){return n==="x"||n==="y"?xr[n]?null:(xr[n]=!0,()=>{xr[n]=!1}):xr.x||xr.y?null:(xr.x=xr.y=!0,()=>{xr.x=xr.y=!1})}function sA(n,e){const r=fO(n),a=new AbortController,o={passive:!0,...e,signal:a.signal};return[r,o,()=>a.abort()]}function d_(n){return!(n.pointerType==="touch"||oA())}function gO(n,e,r={}){const[a,o,c]=sA(n,r),u=f=>{if(!d_(f))return;const{target:m}=f,p=e(m,f);if(typeof p!="function"||!m)return;const v=x=>{d_(x)&&(p(x),m.removeEventListener("pointerleave",v))};m.addEventListener("pointerleave",v,o)};return a.forEach(f=>{f.addEventListener("pointerenter",u,o)}),c}const lA=(n,e)=>e?n===e?!0:lA(n,e.parentElement):!1,iy=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,vO=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function xO(n){return vO.has(n.tagName)||n.tabIndex!==-1}const zh=new WeakSet;function f_(n){return e=>{e.key==="Enter"&&n(e)}}function s0(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const yO=(n,e)=>{const r=n.currentTarget;if(!r)return;const a=f_(()=>{if(zh.has(r))return;s0(r,"down");const o=f_(()=>{s0(r,"up")}),c=()=>s0(r,"cancel");r.addEventListener("keyup",o,e),r.addEventListener("blur",c,e)});r.addEventListener("keydown",a,e),r.addEventListener("blur",()=>r.removeEventListener("keydown",a),e)};function h_(n){return iy(n)&&!oA()}function bO(n,e,r={}){const[a,o,c]=sA(n,r),u=f=>{const m=f.currentTarget;if(!h_(f))return;zh.add(m);const p=e(m,f),v=(b,j)=>{window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",y),zh.has(m)&&zh.delete(m),h_(b)&&typeof p=="function"&&p(b,{success:j})},x=b=>{v(b,m===window||m===document||r.useGlobalTarget||lA(m,b.target))},y=b=>{v(b,!1)};window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",y,o)};return a.forEach(f=>{(r.useGlobalTarget?window:f).addEventListener("pointerdown",u,o),Qj(f)&&(f.addEventListener("focus",p=>yO(p,o)),!xO(f)&&!f.hasAttribute("tabindex")&&(f.tabIndex=0))}),c}function cA(n){return bj(n)&&"ownerSVGElement"in n}function wO(n){return cA(n)&&n.tagName==="svg"}function _O(...n){const e=!Array.isArray(n[0]),r=e?0:-1,a=n[0+r],o=n[1+r],c=n[2+r],u=n[3+r],f=Fj(o,c,u);return e?f(a):f}const un=n=>!!(n&&n.getVelocity);function SO(n,e,r){const a=n.get();let o=null,c=a,u;const f=typeof a=="string"?a.replace(/[\d.-]/g,""):void 0,m=()=>{o&&(o.stop(),o=null)},p=()=>{m(),o=new Tm({keyframes:[p_(n.get()),p_(c)],velocity:n.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...r,onUpdate:u})};n.attach((x,y)=>(c=x,u=b=>y(m_(b,f)),pt.postRender(p),n.get()),m);let v;return un(e)&&(v=e.on("change",x=>n.set(m_(x,f))),n.on("destroy",v)),v}function m_(n,e){return e?n+e:n}function p_(n){return typeof n=="number"?n:parseFloat(n)}const TO=[...nA,Gt,wo],jO=n=>TO.find(tA(n)),jm=P.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function AO(n=!0){const e=P.useContext(Ux);if(e===null)return[!0,null];const{isPresent:r,onExitComplete:a,register:o}=e,c=P.useId();P.useEffect(()=>{if(n)return o(c)},[n]);const u=P.useCallback(()=>n&&a&&a(c),[c,a,n]);return!r&&a?[!1,u]:[!0]}const uA=P.createContext({strict:!1}),g_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Bl={};for(const n in g_)Bl[n]={isEnabled:e=>g_[n].some(r=>!!e[r])};function EO(n){for(const e in n)Bl[e]={...Bl[e],...n[e]}}const CO=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function tm(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||CO.has(n)}let dA=n=>!tm(n);function MO(n){typeof n=="function"&&(dA=e=>e.startsWith("on")?!tm(e):n(e))}try{MO(require("@emotion/is-prop-valid").default)}catch{}function DO(n,e,r){const a={};for(const o in n)o==="values"&&typeof n.values=="object"||(dA(o)||r===!0&&tm(o)||!e&&!tm(o)||n.draggable&&o.startsWith("onDrag"))&&(a[o]=n[o]);return a}function kO(n){if(typeof Proxy>"u")return n;const e=new Map,r=(...a)=>n(...a);return new Proxy(r,{get:(a,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Am=P.createContext({});function Em(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Zu(n){return typeof n=="string"||Array.isArray(n)}const ry=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],ay=["initial",...ry];function Cm(n){return Em(n.animate)||ay.some(e=>Zu(n[e]))}function fA(n){return!!(Cm(n)||n.variants)}function RO(n,e){if(Cm(n)){const{initial:r,animate:a}=n;return{initial:r===!1||Zu(r)?r:void 0,animate:Zu(a)?a:void 0}}return n.inherit!==!1?e:{}}function zO(n){const{initial:e,animate:r}=RO(n,P.useContext(Am));return P.useMemo(()=>({initial:e,animate:r}),[v_(e),v_(r)])}function v_(n){return Array.isArray(n)?n.join(" "):n}const OO=Symbol.for("motionComponentSymbol");function vl(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function NO(n,e,r){return P.useCallback(a=>{a&&n.onMount&&n.onMount(a),e&&(a?e.mount(a):e.unmount()),r&&(typeof r=="function"?r(a):vl(r)&&(r.current=a))},[e])}const oy=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),LO="framerAppearId",hA="data-"+oy(LO),mA=P.createContext({});function UO(n,e,r,a,o){var T,E;const{visualElement:c}=P.useContext(Am),u=P.useContext(uA),f=P.useContext(Ux),m=P.useContext(jm).reducedMotion,p=P.useRef(null);a=a||u.renderer,!p.current&&a&&(p.current=a(n,{visualState:e,parent:c,props:r,presenceContext:f,blockInitialAnimation:f?f.initial===!1:!1,reducedMotionConfig:m}));const v=p.current,x=P.useContext(mA);v&&!v.projection&&o&&(v.type==="html"||v.type==="svg")&&BO(p.current,r,o,x);const y=P.useRef(!1);P.useInsertionEffect(()=>{v&&y.current&&v.update(r,f)});const b=r[hA],j=P.useRef(!!b&&!((T=window.MotionHandoffIsComplete)!=null&&T.call(window,b))&&((E=window.MotionHasOptimisedAnimation)==null?void 0:E.call(window,b)));return xj(()=>{v&&(y.current=!0,window.MotionIsMounted=!0,v.updateFeatures(),ny.render(v.render),j.current&&v.animationState&&v.animationState.animateChanges())}),P.useEffect(()=>{v&&(!j.current&&v.animationState&&v.animationState.animateChanges(),j.current&&(queueMicrotask(()=>{var C;(C=window.MotionHandoffMarkAsComplete)==null||C.call(window,b)}),j.current=!1))}),v}function BO(n,e,r,a){const{layoutId:o,layout:c,drag:u,dragConstraints:f,layoutScroll:m,layoutRoot:p,layoutCrossfade:v}=e;n.projection=new r(n.latestValues,e["data-framer-portal-id"]?void 0:pA(n.parent)),n.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!u||f&&vl(f),visualElement:n,animationType:typeof c=="string"?c:"both",initialPromotionConfig:a,crossfade:v,layoutScroll:m,layoutRoot:p})}function pA(n){if(n)return n.options.allowProjection!==!1?n.projection:pA(n.parent)}function VO({preloadedFeatures:n,createVisualElement:e,useRender:r,useVisualState:a,Component:o}){n&&EO(n);function c(f,m){let p;const v={...P.useContext(jm),...f,layoutId:$O(f)},{isStatic:x}=v,y=zO(f),b=a(f,x);if(!x&&Lx){PO();const j=HO(v);p=j.MeasureLayout,y.visualElement=UO(o,b,v,e,j.ProjectionNode)}return d.jsxs(Am.Provider,{value:y,children:[p&&y.visualElement?d.jsx(p,{visualElement:y.visualElement,...v}):null,r(o,f,NO(b,y.visualElement,m),b,x,y.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${o.displayName??o.name??""})`}`;const u=P.forwardRef(c);return u[OO]=o,u}function $O({layoutId:n}){const e=P.useContext(vj).id;return e&&n!==void 0?e+"-"+n:n}function PO(n,e){P.useContext(uA).strict}function HO(n){const{drag:e,layout:r}=Bl;if(!e&&!r)return{};const a={...e,...r};return{MeasureLayout:e!=null&&e.isEnabled(n)||r!=null&&r.isEnabled(n)?a.MeasureLayout:void 0,ProjectionNode:a.ProjectionNode}}const Qu={};function YO(n){for(const e in n)Qu[e]=n[e],Gx(e)&&(Qu[e].isCSSVariable=!0)}function gA(n,{layout:e,layoutId:r}){return ec.has(n)||n.startsWith("origin")||(e||r!==void 0)&&(!!Qu[n]||n==="opacity")}const FO={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},GO=Jl.length;function qO(n,e,r){let a="",o=!0;for(let c=0;c<GO;c++){const u=Jl[c],f=n[u];if(f===void 0)continue;let m=!0;if(typeof f=="number"?m=f===(u.startsWith("scale")?1:0):m=parseFloat(f)===0,!m||r){const p=aA(f,ty[u]);if(!m){o=!1;const v=FO[u]||u;a+=`${v}(${p}) `}r&&(e[u]=p)}}return a=a.trim(),r?a=r(e,o?"":a):o&&(a="none"),a}function sy(n,e,r){const{style:a,vars:o,transformOrigin:c}=n;let u=!1,f=!1;for(const m in e){const p=e[m];if(ec.has(m)){u=!0;continue}else if(Gx(m)){o[m]=p;continue}else{const v=aA(p,ty[m]);m.startsWith("origin")?(f=!0,c[m]=v):a[m]=v}}if(e.transform||(u||r?a.transform=qO(e,n.transform,r):a.transform&&(a.transform="none")),f){const{originX:m="50%",originY:p="50%",originZ:v=0}=c;a.transformOrigin=`${m} ${p} ${v}`}}const ly=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function vA(n,e,r){for(const a in e)!un(e[a])&&!gA(a,r)&&(n[a]=e[a])}function IO({transformTemplate:n},e){return P.useMemo(()=>{const r=ly();return sy(r,e,n),Object.assign({},r.vars,r.style)},[e])}function XO(n,e){const r=n.style||{},a={};return vA(a,r,n),Object.assign(a,IO(n,e)),a}function WO(n,e){const r={},a=XO(n,e);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,a.userSelect=a.WebkitUserSelect=a.WebkitTouchCallout="none",a.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=a,r}const KO={offset:"stroke-dashoffset",array:"stroke-dasharray"},ZO={offset:"strokeDashoffset",array:"strokeDasharray"};function QO(n,e,r=1,a=0,o=!0){n.pathLength=1;const c=o?KO:ZO;n[c.offset]=we.transform(-a);const u=we.transform(e),f=we.transform(r);n[c.array]=`${u} ${f}`}function xA(n,{attrX:e,attrY:r,attrScale:a,pathLength:o,pathSpacing:c=1,pathOffset:u=0,...f},m,p,v){if(sy(n,f,p),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:y}=n;x.transform&&(y.transform=x.transform,delete x.transform),(y.transform||x.transformOrigin)&&(y.transformOrigin=x.transformOrigin??"50% 50%",delete x.transformOrigin),y.transform&&(y.transformBox=(v==null?void 0:v.transformBox)??"fill-box",delete x.transformBox),e!==void 0&&(x.x=e),r!==void 0&&(x.y=r),a!==void 0&&(x.scale=a),o!==void 0&&QO(x,o,c,u,!1)}const yA=()=>({...ly(),attrs:{}}),bA=n=>typeof n=="string"&&n.toLowerCase()==="svg";function JO(n,e,r,a){const o=P.useMemo(()=>{const c=yA();return xA(c,e,bA(a),n.transformTemplate,n.style),{...c.attrs,style:{...c.style}}},[e]);if(n.style){const c={};vA(c,n.style,n),o.style={...c,...o.style}}return o}const e4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cy(n){return typeof n!="string"||n.includes("-")?!1:!!(e4.indexOf(n)>-1||/[A-Z]/u.test(n))}function t4(n=!1){return(r,a,o,{latestValues:c},u)=>{const m=(cy(r)?JO:WO)(a,c,u,r),p=DO(a,typeof r=="string",n),v=r!==P.Fragment?{...p,...m,ref:o}:{},{children:x}=a,y=P.useMemo(()=>un(x)?x.get():x,[x]);return P.createElement(r,{...v,children:y})}}function x_(n){const e=[{},{}];return n==null||n.values.forEach((r,a)=>{e[0][a]=r.get(),e[1][a]=r.getVelocity()}),e}function uy(n,e,r,a){if(typeof e=="function"){const[o,c]=x_(a);e=e(r!==void 0?r:n.custom,o,c)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,c]=x_(a);e=e(r!==void 0?r:n.custom,o,c)}return e}function Oh(n){return un(n)?n.get():n}function n4({scrapeMotionValuesFromProps:n,createRenderState:e},r,a,o){return{latestValues:i4(r,a,o,n),renderState:e()}}const wA=n=>(e,r)=>{const a=P.useContext(Am),o=P.useContext(Ux),c=()=>n4(n,e,a,o);return r?c():Nx(c)};function i4(n,e,r,a){const o={},c=a(n,{});for(const y in c)o[y]=Oh(c[y]);let{initial:u,animate:f}=n;const m=Cm(n),p=fA(n);e&&p&&!m&&n.inherit!==!1&&(u===void 0&&(u=e.initial),f===void 0&&(f=e.animate));let v=r?r.initial===!1:!1;v=v||u===!1;const x=v?f:u;if(x&&typeof x!="boolean"&&!Em(x)){const y=Array.isArray(x)?x:[x];for(let b=0;b<y.length;b++){const j=uy(n,y[b]);if(j){const{transitionEnd:T,transition:E,...C}=j;for(const M in C){let k=C[M];if(Array.isArray(k)){const z=v?k.length-1:0;k=k[z]}k!==null&&(o[M]=k)}for(const M in T)o[M]=T[M]}}}return o}function dy(n,e,r){var c;const{style:a}=n,o={};for(const u in a)(un(a[u])||e.style&&un(e.style[u])||gA(u,n)||((c=r==null?void 0:r.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(o[u]=a[u]);return o}const r4={useVisualState:wA({scrapeMotionValuesFromProps:dy,createRenderState:ly})};function _A(n,e,r){const a=dy(n,e,r);for(const o in n)if(un(n[o])||un(e[o])){const c=Jl.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;a[c]=n[o]}return a}const a4={useVisualState:wA({scrapeMotionValuesFromProps:_A,createRenderState:yA})};function o4(n,e){return function(a,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...cy(a)?a4:r4,preloadedFeatures:n,useRender:t4(o),createVisualElement:e,Component:a};return VO(u)}}function Ju(n,e,r){const a=n.getProps();return uy(a,e,r!==void 0?r:a.custom,n)}const Ov=n=>Array.isArray(n);function s4(n,e,r){n.hasValue(e)?n.getValue(e).set(r):n.addValue(e,bs(r))}function l4(n){return Ov(n)?n[n.length-1]||0:n}function c4(n,e){const r=Ju(n,e);let{transitionEnd:a={},transition:o={},...c}=r||{};c={...c,...a};for(const u in c){const f=l4(c[u]);s4(n,u,f)}}function u4(n){return!!(un(n)&&n.add)}function Nv(n,e){const r=n.getValue("willChange");if(u4(r))return r.add(e);if(!r&&Ma.WillChange){const a=new Ma.WillChange("auto");n.addValue("willChange",a),a.add(e)}}function SA(n){return n.props[hA]}const d4=n=>n!==null;function f4(n,{repeat:e,repeatType:r="loop"},a){const o=n.filter(d4),c=e&&r!=="loop"&&e%2===1?0:o.length-1;return o[c]}const h4={type:"spring",stiffness:500,damping:25,restSpeed:10},m4=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),p4={type:"keyframes",duration:.8},g4={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},v4=(n,{keyframes:e})=>e.length>2?p4:ec.has(n)?n.startsWith("scale")?m4(e[1]):h4:g4;function x4({when:n,delay:e,delayChildren:r,staggerChildren:a,staggerDirection:o,repeat:c,repeatType:u,repeatDelay:f,from:m,elapsed:p,...v}){return!!Object.keys(v).length}const fy=(n,e,r,a={},o,c)=>u=>{const f=ey(a,n)||{},m=f.delay||a.delay||0;let{elapsed:p=0}=a;p=p-Nr(m);const v={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...f,delay:-p,onUpdate:y=>{e.set(y),f.onUpdate&&f.onUpdate(y)},onComplete:()=>{u(),f.onComplete&&f.onComplete()},name:n,motionValue:e,element:c?void 0:o};x4(f)||Object.assign(v,v4(n,v)),v.duration&&(v.duration=Nr(v.duration)),v.repeatDelay&&(v.repeatDelay=Nr(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let x=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(x=!0)),(Ma.instantAnimations||Ma.skipAnimations)&&(x=!0,v.duration=0,v.delay=0),v.allowFlatten=!f.type&&!f.ease,x&&!c&&e.get()!==void 0){const y=f4(v.keyframes,f);if(y!==void 0){pt.update(()=>{v.onUpdate(y),v.onComplete()});return}}return f.isSync?new Tm(v):new Jz(v)};function y4({protectedKeys:n,needsAnimating:e},r){const a=n.hasOwnProperty(r)&&e[r]!==!0;return e[r]=!1,a}function TA(n,e,{delay:r=0,transitionOverride:a,type:o}={}){let{transition:c=n.getDefaultTransition(),transitionEnd:u,...f}=e;a&&(c=a);const m=[],p=o&&n.animationState&&n.animationState.getState()[o];for(const v in f){const x=n.getValue(v,n.latestValues[v]??null),y=f[v];if(y===void 0||p&&y4(p,v))continue;const b={delay:r,...ey(c||{},v)},j=x.get();if(j!==void 0&&!x.isAnimating&&!Array.isArray(y)&&y===j&&!b.velocity)continue;let T=!1;if(window.MotionHandoffAnimation){const C=SA(n);if(C){const M=window.MotionHandoffAnimation(C,v,pt);M!==null&&(b.startTime=M,T=!0)}}Nv(n,v),x.start(fy(v,x,y,n.shouldReduceMotion&&eA.has(v)?{type:!1}:b,n,T));const E=x.animation;E&&m.push(E)}return u&&Promise.all(m).then(()=>{pt.update(()=>{u&&c4(n,u)})}),m}function Lv(n,e,r={}){var m;const a=Ju(n,e,r.type==="exit"?(m=n.presenceContext)==null?void 0:m.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=a||{};r.transitionOverride&&(o=r.transitionOverride);const c=a?()=>Promise.all(TA(n,a,r)):()=>Promise.resolve(),u=n.variantChildren&&n.variantChildren.size?(p=0)=>{const{delayChildren:v=0,staggerChildren:x,staggerDirection:y}=o;return b4(n,e,v+p,x,y,r)}:()=>Promise.resolve(),{when:f}=o;if(f){const[p,v]=f==="beforeChildren"?[c,u]:[u,c];return p().then(()=>v())}else return Promise.all([c(),u(r.delay)])}function b4(n,e,r=0,a=0,o=1,c){const u=[],f=(n.variantChildren.size-1)*a,m=o===1?(p=0)=>p*a:(p=0)=>f-p*a;return Array.from(n.variantChildren).sort(w4).forEach((p,v)=>{p.notify("AnimationStart",e),u.push(Lv(p,e,{...c,delay:r+m(v)}).then(()=>p.notify("AnimationComplete",e)))}),Promise.all(u)}function w4(n,e){return n.sortNodePosition(e)}function _4(n,e,r={}){n.notify("AnimationStart",e);let a;if(Array.isArray(e)){const o=e.map(c=>Lv(n,c,r));a=Promise.all(o)}else if(typeof e=="string")a=Lv(n,e,r);else{const o=typeof e=="function"?Ju(n,e,r.custom):e;a=Promise.all(TA(n,o,r))}return a.then(()=>{n.notify("AnimationComplete",e)})}function jA(n,e){if(!Array.isArray(e))return!1;const r=e.length;if(r!==n.length)return!1;for(let a=0;a<r;a++)if(e[a]!==n[a])return!1;return!0}const S4=ay.length;function AA(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?AA(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const e={};for(let r=0;r<S4;r++){const a=ay[r],o=n.props[a];(Zu(o)||o===!1)&&(e[a]=o)}return e}const T4=[...ry].reverse(),j4=ry.length;function A4(n){return e=>Promise.all(e.map(({animation:r,options:a})=>_4(n,r,a)))}function E4(n){let e=A4(n),r=y_(),a=!0;const o=m=>(p,v)=>{var y;const x=Ju(n,v,m==="exit"?(y=n.presenceContext)==null?void 0:y.custom:void 0);if(x){const{transition:b,transitionEnd:j,...T}=x;p={...p,...T,...j}}return p};function c(m){e=m(n)}function u(m){const{props:p}=n,v=AA(n.parent)||{},x=[],y=new Set;let b={},j=1/0;for(let E=0;E<j4;E++){const C=T4[E],M=r[C],k=p[C]!==void 0?p[C]:v[C],z=Zu(k),D=C===m?M.isActive:null;D===!1&&(j=E);let L=k===v[C]&&k!==p[C]&&z;if(L&&a&&n.manuallyAnimateOnMount&&(L=!1),M.protectedKeys={...b},!M.isActive&&D===null||!k&&!M.prevProp||Em(k)||typeof k=="boolean")continue;const O=C4(M.prevProp,k);let U=O||C===m&&M.isActive&&!L&&z||E>j&&z,H=!1;const W=Array.isArray(k)?k:[k];let ae=W.reduce(o(C),{});D===!1&&(ae={});const{prevResolvedValues:Z={}}=M,se={...Z,...ae},fe=G=>{U=!0,y.has(G)&&(H=!0,y.delete(G)),M.needsAnimating[G]=!0;const ee=n.getValue(G);ee&&(ee.liveStyle=!1)};for(const G in se){const ee=ae[G],re=Z[G];if(b.hasOwnProperty(G))continue;let S=!1;Ov(ee)&&Ov(re)?S=!jA(ee,re):S=ee!==re,S?ee!=null?fe(G):y.add(G):ee!==void 0&&y.has(G)?fe(G):M.protectedKeys[G]=!0}M.prevProp=k,M.prevResolvedValues=ae,M.isActive&&(b={...b,...ae}),a&&n.blockInitialAnimation&&(U=!1),U&&(!(L&&O)||H)&&x.push(...W.map(G=>({animation:G,options:{type:C}})))}if(y.size){const E={};if(typeof p.initial!="boolean"){const C=Ju(n,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(E.transition=C.transition)}y.forEach(C=>{const M=n.getBaseTarget(C),k=n.getValue(C);k&&(k.liveStyle=!0),E[C]=M??null}),x.push({animation:E})}let T=!!x.length;return a&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(T=!1),a=!1,T?e(x):Promise.resolve()}function f(m,p){var x;if(r[m].isActive===p)return Promise.resolve();(x=n.variantChildren)==null||x.forEach(y=>{var b;return(b=y.animationState)==null?void 0:b.setActive(m,p)}),r[m].isActive=p;const v=u(m);for(const y in r)r[y].protectedKeys={};return v}return{animateChanges:u,setActive:f,setAnimateFunction:c,getState:()=>r,reset:()=>{r=y_(),a=!0}}}function C4(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!jA(e,n):!1}function Xo(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function y_(){return{animate:Xo(!0),whileInView:Xo(),whileHover:Xo(),whileTap:Xo(),whileDrag:Xo(),whileFocus:Xo(),exit:Xo()}}class Ao{constructor(e){this.isMounted=!1,this.node=e}update(){}}class M4 extends Ao{constructor(e){super(e),e.animationState||(e.animationState=E4(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Em(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:r}=this.node.prevProps||{};e!==r&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let D4=0;class k4 extends Ao{constructor(){super(...arguments),this.id=D4++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:r}=this.node.presenceContext,{isPresent:a}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===a)return;const o=this.node.animationState.setActive("exit",!e);r&&!e&&o.then(()=>{r(this.id)})}mount(){const{register:e,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const R4={animation:{Feature:M4},exit:{Feature:k4}};function ed(n,e,r,a={passive:!0}){return n.addEventListener(e,r,a),()=>n.removeEventListener(e,r)}function xd(n){return{point:{x:n.pageX,y:n.pageY}}}const z4=n=>e=>iy(e)&&n(e,xd(e));function ku(n,e,r,a){return ed(n,e,z4(r),a)}function EA({top:n,left:e,right:r,bottom:a}){return{x:{min:e,max:r},y:{min:n,max:a}}}function O4({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function N4(n,e){if(!e)return n;const r=e({x:n.left,y:n.top}),a=e({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:a.y,right:a.x}}const CA=1e-4,L4=1-CA,U4=1+CA,MA=.01,B4=0-MA,V4=0+MA;function Gn(n){return n.max-n.min}function $4(n,e,r){return Math.abs(n-e)<=r}function b_(n,e,r,a=.5){n.origin=a,n.originPoint=_t(e.min,e.max,n.origin),n.scale=Gn(r)/Gn(e),n.translate=_t(r.min,r.max,n.origin)-n.originPoint,(n.scale>=L4&&n.scale<=U4||isNaN(n.scale))&&(n.scale=1),(n.translate>=B4&&n.translate<=V4||isNaN(n.translate))&&(n.translate=0)}function Ru(n,e,r,a){b_(n.x,e.x,r.x,a?a.originX:void 0),b_(n.y,e.y,r.y,a?a.originY:void 0)}function w_(n,e,r){n.min=r.min+e.min,n.max=n.min+Gn(e)}function P4(n,e,r){w_(n.x,e.x,r.x),w_(n.y,e.y,r.y)}function __(n,e,r){n.min=e.min-r.min,n.max=n.min+Gn(e)}function zu(n,e,r){__(n.x,e.x,r.x),__(n.y,e.y,r.y)}const S_=()=>({translate:0,scale:1,origin:0,originPoint:0}),xl=()=>({x:S_(),y:S_()}),T_=()=>({min:0,max:0}),Ot=()=>({x:T_(),y:T_()});function Ki(n){return[n("x"),n("y")]}function l0(n){return n===void 0||n===1}function Uv({scale:n,scaleX:e,scaleY:r}){return!l0(n)||!l0(e)||!l0(r)}function es(n){return Uv(n)||DA(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function DA(n){return j_(n.x)||j_(n.y)}function j_(n){return n&&n!=="0%"}function nm(n,e,r){const a=n-r,o=e*a;return r+o}function A_(n,e,r,a,o){return o!==void 0&&(n=nm(n,o,a)),nm(n,r,a)+e}function Bv(n,e=0,r=1,a,o){n.min=A_(n.min,e,r,a,o),n.max=A_(n.max,e,r,a,o)}function kA(n,{x:e,y:r}){Bv(n.x,e.translate,e.scale,e.originPoint),Bv(n.y,r.translate,r.scale,r.originPoint)}const E_=.999999999999,C_=1.0000000000001;function H4(n,e,r,a=!1){const o=r.length;if(!o)return;e.x=e.y=1;let c,u;for(let f=0;f<o;f++){c=r[f],u=c.projectionDelta;const{visualElement:m}=c.options;m&&m.props.style&&m.props.style.display==="contents"||(a&&c.options.layoutScroll&&c.scroll&&c!==c.root&&bl(n,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,kA(n,u)),a&&es(c.latestValues)&&bl(n,c.latestValues))}e.x<C_&&e.x>E_&&(e.x=1),e.y<C_&&e.y>E_&&(e.y=1)}function yl(n,e){n.min=n.min+e,n.max=n.max+e}function M_(n,e,r,a,o=.5){const c=_t(n.min,n.max,o);Bv(n,e,r,c,a)}function bl(n,e){M_(n.x,e.x,e.scaleX,e.scale,e.originX),M_(n.y,e.y,e.scaleY,e.scale,e.originY)}function RA(n,e){return EA(N4(n.getBoundingClientRect(),e))}function Y4(n,e,r){const a=RA(n,r),{scroll:o}=e;return o&&(yl(a.x,o.offset.x),yl(a.y,o.offset.y)),a}const zA=({current:n})=>n?n.ownerDocument.defaultView:null,D_=(n,e)=>Math.abs(n-e);function F4(n,e){const r=D_(n.x,e.x),a=D_(n.y,e.y);return Math.sqrt(r**2+a**2)}class OA{constructor(e,r,{transformPagePoint:a,contextWindow:o,dragSnapToOrigin:c=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=u0(this.lastMoveEventInfo,this.history),y=this.startEvent!==null,b=F4(x.offset,{x:0,y:0})>=3;if(!y&&!b)return;const{point:j}=x,{timestamp:T}=vn;this.history.push({...j,timestamp:T});const{onStart:E,onMove:C}=this.handlers;y||(E&&E(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,x)},this.handlePointerMove=(x,y)=>{this.lastMoveEvent=x,this.lastMoveEventInfo=c0(y,this.transformPagePoint),pt.update(this.updatePoint,!0)},this.handlePointerUp=(x,y)=>{this.end();const{onEnd:b,onSessionEnd:j,resumeAnimation:T}=this.handlers;if(this.dragSnapToOrigin&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const E=u0(x.type==="pointercancel"?this.lastMoveEventInfo:c0(y,this.transformPagePoint),this.history);this.startEvent&&b&&b(x,E),j&&j(x,E)},!iy(e))return;this.dragSnapToOrigin=c,this.handlers=r,this.transformPagePoint=a,this.contextWindow=o||window;const u=xd(e),f=c0(u,this.transformPagePoint),{point:m}=f,{timestamp:p}=vn;this.history=[{...m,timestamp:p}];const{onSessionStart:v}=r;v&&v(e,u0(f,this.history)),this.removeListeners=pd(ku(this.contextWindow,"pointermove",this.handlePointerMove),ku(this.contextWindow,"pointerup",this.handlePointerUp),ku(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Da(this.updatePoint)}}function c0(n,e){return e?{point:e(n.point)}:n}function k_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function u0({point:n},e){return{point:n,delta:k_(n,NA(e)),offset:k_(n,G4(e)),velocity:q4(e,.1)}}function G4(n){return n[0]}function NA(n){return n[n.length-1]}function q4(n,e){if(n.length<2)return{x:0,y:0};let r=n.length-1,a=null;const o=NA(n);for(;r>=0&&(a=n[r],!(o.timestamp-a.timestamp>Nr(e)));)r--;if(!a)return{x:0,y:0};const c=Lr(o.timestamp-a.timestamp);if(c===0)return{x:0,y:0};const u={x:(o.x-a.x)/c,y:(o.y-a.y)/c};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}function I4(n,{min:e,max:r},a){return e!==void 0&&n<e?n=a?_t(e,n,a.min):Math.max(n,e):r!==void 0&&n>r&&(n=a?_t(r,n,a.max):Math.min(n,r)),n}function R_(n,e,r){return{min:e!==void 0?n.min+e:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function X4(n,{top:e,left:r,bottom:a,right:o}){return{x:R_(n.x,r,o),y:R_(n.y,e,a)}}function z_(n,e){let r=e.min-n.min,a=e.max-n.max;return e.max-e.min<n.max-n.min&&([r,a]=[a,r]),{min:r,max:a}}function W4(n,e){return{x:z_(n.x,e.x),y:z_(n.y,e.y)}}function K4(n,e){let r=.5;const a=Gn(n),o=Gn(e);return o>a?r=Xu(e.min,e.max-a,n.min):a>o&&(r=Xu(n.min,n.max-o,e.min)),Ca(0,1,r)}function Z4(n,e){const r={};return e.min!==void 0&&(r.min=e.min-n.min),e.max!==void 0&&(r.max=e.max-n.min),r}const Vv=.35;function Q4(n=Vv){return n===!1?n=0:n===!0&&(n=Vv),{x:O_(n,"left","right"),y:O_(n,"top","bottom")}}function O_(n,e,r){return{min:N_(n,e),max:N_(n,r)}}function N_(n,e){return typeof n=="number"?n:n[e]||0}const J4=new WeakMap;class eN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ot(),this.visualElement=e}start(e,{snapToCursor:r=!1}={}){const{presenceContext:a}=this.visualElement;if(a&&a.isPresent===!1)return;const o=v=>{const{dragSnapToOrigin:x}=this.getProps();x?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(xd(v).point)},c=(v,x)=>{const{drag:y,dragPropagation:b,onDragStart:j}=this.getProps();if(y&&!b&&(this.openDragLock&&this.openDragLock(),this.openDragLock=pO(y),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ki(E=>{let C=this.getAxisMotionValue(E).get()||0;if(Ur.test(C)){const{projection:M}=this.visualElement;if(M&&M.layout){const k=M.layout.layoutBox[E];k&&(C=Gn(k)*(parseFloat(C)/100))}}this.originPoint[E]=C}),j&&pt.postRender(()=>j(v,x)),Nv(this.visualElement,"transform");const{animationState:T}=this.visualElement;T&&T.setActive("whileDrag",!0)},u=(v,x)=>{const{dragPropagation:y,dragDirectionLock:b,onDirectionLock:j,onDrag:T}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:E}=x;if(b&&this.currentDirection===null){this.currentDirection=tN(E),this.currentDirection!==null&&j&&j(this.currentDirection);return}this.updateAxis("x",x.point,E),this.updateAxis("y",x.point,E),this.visualElement.render(),T&&T(v,x)},f=(v,x)=>this.stop(v,x),m=()=>Ki(v=>{var x;return this.getAnimationState(v)==="paused"&&((x=this.getAxisMotionValue(v).animation)==null?void 0:x.play())}),{dragSnapToOrigin:p}=this.getProps();this.panSession=new OA(e,{onSessionStart:o,onStart:c,onMove:u,onSessionEnd:f,resumeAnimation:m},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,contextWindow:zA(this.visualElement)})}stop(e,r){const a=this.isDragging;if(this.cancel(),!a)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:c}=this.getProps();c&&pt.postRender(()=>c(e,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:r}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:a}=this.getProps();!a&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(e,r,a){const{drag:o}=this.getProps();if(!a||!Bf(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let u=this.originPoint[e]+a[e];this.constraints&&this.constraints[e]&&(u=I4(u,this.constraints[e],this.elastic[e])),c.set(u)}resolveConstraints(){var c;const{dragConstraints:e,dragElastic:r}=this.getProps(),a=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;e&&vl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&a?this.constraints=X4(a.layoutBox,e):this.constraints=!1,this.elastic=Q4(r),o!==this.constraints&&a&&this.constraints&&!this.hasMutatedConstraints&&Ki(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=Z4(a.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!vl(e))return!1;const a=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const c=Y4(a,o.root,this.visualElement.getTransformPagePoint());let u=W4(o.layout.layoutBox,c);if(r){const f=r(O4(u));this.hasMutatedConstraints=!!f,f&&(u=EA(f))}return u}startAnimation(e){const{drag:r,dragMomentum:a,dragElastic:o,dragTransition:c,dragSnapToOrigin:u,onDragTransitionEnd:f}=this.getProps(),m=this.constraints||{},p=Ki(v=>{if(!Bf(v,r,this.currentDirection))return;let x=m&&m[v]||{};u&&(x={min:0,max:0});const y=o?200:1e6,b=o?40:1e7,j={type:"inertia",velocity:a?e[v]:0,bounceStiffness:y,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...c,...x};return this.startAxisValueAnimation(v,j)});return Promise.all(p).then(f)}startAxisValueAnimation(e,r){const a=this.getAxisMotionValue(e);return Nv(this.visualElement,e),a.start(fy(e,a,0,r,this.visualElement,!1))}stopAnimation(){Ki(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){Ki(e=>{var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.pause()})}getAnimationState(e){var r;return(r=this.getAxisMotionValue(e).animation)==null?void 0:r.state}getAxisMotionValue(e){const r=`_drag${e.toUpperCase()}`,a=this.visualElement.getProps(),o=a[r];return o||this.visualElement.getValue(e,(a.initial?a.initial[e]:void 0)||0)}snapToCursor(e){Ki(r=>{const{drag:a}=this.getProps();if(!Bf(r,a,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(r);if(o&&o.layout){const{min:u,max:f}=o.layout.layoutBox[r];c.set(e[r]-_t(u,f,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:r}=this.getProps(),{projection:a}=this.visualElement;if(!vl(r)||!a||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ki(u=>{const f=this.getAxisMotionValue(u);if(f&&this.constraints!==!1){const m=f.get();o[u]=K4({min:m,max:m},this.constraints[u])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",a.root&&a.root.updateScroll(),a.updateLayout(),this.resolveConstraints(),Ki(u=>{if(!Bf(u,e,null))return;const f=this.getAxisMotionValue(u),{min:m,max:p}=this.constraints[u];f.set(_t(m,p,o[u]))})}addListeners(){if(!this.visualElement.current)return;J4.set(this.visualElement,this);const e=this.visualElement.current,r=ku(e,"pointerdown",m=>{const{drag:p,dragListener:v=!0}=this.getProps();p&&v&&this.start(m)}),a=()=>{const{dragConstraints:m}=this.getProps();vl(m)&&m.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,c=o.addEventListener("measure",a);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),pt.read(a);const u=ed(window,"resize",()=>this.scalePositionWithinConstraints()),f=o.addEventListener("didUpdate",({delta:m,hasLayoutChanged:p})=>{this.isDragging&&p&&(Ki(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=m[v].translate,x.set(x.get()+m[v].translate))}),this.visualElement.render())});return()=>{u(),r(),c(),f&&f()}}getProps(){const e=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:a=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:u=Vv,dragMomentum:f=!0}=e;return{...e,drag:r,dragDirectionLock:a,dragPropagation:o,dragConstraints:c,dragElastic:u,dragMomentum:f}}}function Bf(n,e,r){return(e===!0||e===n)&&(r===null||r===n)}function tN(n,e=10){let r=null;return Math.abs(n.y)>e?r="y":Math.abs(n.x)>e&&(r="x"),r}class nN extends Ao{constructor(e){super(e),this.removeGroupControls=ir,this.removeListeners=ir,this.controls=new eN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ir}unmount(){this.removeGroupControls(),this.removeListeners()}}const L_=n=>(e,r)=>{n&&pt.postRender(()=>n(e,r))};class iN extends Ao{constructor(){super(...arguments),this.removePointerDownListener=ir}onPointerDown(e){this.session=new OA(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:zA(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:r,onPan:a,onPanEnd:o}=this.node.getProps();return{onSessionStart:L_(e),onStart:L_(r),onMove:a,onEnd:(c,u)=>{delete this.session,o&&pt.postRender(()=>o(c,u))}}}mount(){this.removePointerDownListener=ku(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const Nh={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function U_(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const eu={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(we.test(n))n=parseFloat(n);else return n;const r=U_(n,e.target.x),a=U_(n,e.target.y);return`${r}% ${a}%`}},rN={correct:(n,{treeScale:e,projectionDelta:r})=>{const a=n,o=wo.parse(n);if(o.length>5)return a;const c=wo.createTransformer(n),u=typeof o[0]!="number"?1:0,f=r.x.scale*e.x,m=r.y.scale*e.y;o[0+u]/=f,o[1+u]/=m;const p=_t(f,m,.5);return typeof o[2+u]=="number"&&(o[2+u]/=p),typeof o[3+u]=="number"&&(o[3+u]/=p),c(o)}};class aN extends P.Component{componentDidMount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a,layoutId:o}=this.props,{projection:c}=e;YO(oN),c&&(r.group&&r.group.add(c),a&&a.register&&o&&a.register(c),c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,onExitComplete:()=>this.safeToRemove()})),Nh.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:r,visualElement:a,drag:o,isPresent:c}=this.props,{projection:u}=a;return u&&(u.isPresent=c,o||e.layoutDependency!==r||r===void 0||e.isPresent!==c?u.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?u.promote():u.relegate()||pt.postRender(()=>{const f=u.getStack();(!f||!f.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ny.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:r,switchLayoutGroup:a}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(o),a&&a.deregister&&a.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function LA(n){const[e,r]=AO(),a=P.useContext(vj);return d.jsx(aN,{...n,layoutGroup:a,switchLayoutGroup:P.useContext(mA),isPresent:e,safeToRemove:r})}const oN={borderRadius:{...eu,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:eu,borderTopRightRadius:eu,borderBottomLeftRadius:eu,borderBottomRightRadius:eu,boxShadow:rN};function sN(n,e,r){const a=un(n)?n:bs(n);return a.start(fy("",a,e,r)),a.animation}const lN=(n,e)=>n.depth-e.depth;class cN{constructor(){this.children=[],this.isDirty=!1}add(e){Bx(this.children,e),this.isDirty=!0}remove(e){Vx(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(lN),this.isDirty=!1,this.children.forEach(e)}}function uN(n,e){const r=ni.now(),a=({timestamp:o})=>{const c=o-r;c>=e&&(Da(a),n(c-e))};return pt.setup(a,!0),()=>Da(a)}const UA=["TopLeft","TopRight","BottomLeft","BottomRight"],dN=UA.length,B_=n=>typeof n=="string"?parseFloat(n):n,V_=n=>typeof n=="number"||we.test(n);function fN(n,e,r,a,o,c){o?(n.opacity=_t(0,r.opacity??1,hN(a)),n.opacityExit=_t(e.opacity??1,0,mN(a))):c&&(n.opacity=_t(e.opacity??1,r.opacity??1,a));for(let u=0;u<dN;u++){const f=`border${UA[u]}Radius`;let m=$_(e,f),p=$_(r,f);if(m===void 0&&p===void 0)continue;m||(m=0),p||(p=0),m===0||p===0||V_(m)===V_(p)?(n[f]=Math.max(_t(B_(m),B_(p),a),0),(Ur.test(p)||Ur.test(m))&&(n[f]+="%")):n[f]=p}(e.rotate||r.rotate)&&(n.rotate=_t(e.rotate||0,r.rotate||0,a))}function $_(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const hN=BA(0,.5,Mj),mN=BA(.5,.95,ir);function BA(n,e,r){return a=>a<n?0:a>e?1:r(Xu(n,e,a))}function P_(n,e){n.min=e.min,n.max=e.max}function Xi(n,e){P_(n.x,e.x),P_(n.y,e.y)}function H_(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function Y_(n,e,r,a,o){return n-=e,n=nm(n,1/r,a),o!==void 0&&(n=nm(n,1/o,a)),n}function pN(n,e=0,r=1,a=.5,o,c=n,u=n){if(Ur.test(e)&&(e=parseFloat(e),e=_t(u.min,u.max,e/100)-u.min),typeof e!="number")return;let f=_t(c.min,c.max,a);n===c&&(f-=e),n.min=Y_(n.min,e,r,f,o),n.max=Y_(n.max,e,r,f,o)}function F_(n,e,[r,a,o],c,u){pN(n,e[r],e[a],e[o],e.scale,c,u)}const gN=["x","scaleX","originX"],vN=["y","scaleY","originY"];function G_(n,e,r,a){F_(n.x,e,gN,r?r.x:void 0,a?a.x:void 0),F_(n.y,e,vN,r?r.y:void 0,a?a.y:void 0)}function q_(n){return n.translate===0&&n.scale===1}function VA(n){return q_(n.x)&&q_(n.y)}function I_(n,e){return n.min===e.min&&n.max===e.max}function xN(n,e){return I_(n.x,e.x)&&I_(n.y,e.y)}function X_(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function $A(n,e){return X_(n.x,e.x)&&X_(n.y,e.y)}function W_(n){return Gn(n.x)/Gn(n.y)}function K_(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class yN{constructor(){this.members=[]}add(e){Bx(this.members,e),e.scheduleRender()}remove(e){if(Vx(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(e){const r=this.members.findIndex(o=>e===o);if(r===0)return!1;let a;for(let o=r;o>=0;o--){const c=this.members[o];if(c.isPresent!==!1){a=c;break}}return a?(this.promote(a),!0):!1}promote(e,r){const a=this.lead;if(e!==a&&(this.prevLead=a,this.lead=e,e.show(),a)){a.instance&&a.scheduleRender(),e.scheduleRender(),e.resumeFrom=a,r&&(e.resumeFrom.preserveOpacity=!0),a.snapshot&&(e.snapshot=a.snapshot,e.snapshot.latestValues=a.animationValues||a.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&a.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:r,resumingFrom:a}=e;r.onExitComplete&&r.onExitComplete(),a&&a.options.onExitComplete&&a.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function bN(n,e,r){let a="";const o=n.x.translate/e.x,c=n.y.translate/e.y,u=(r==null?void 0:r.z)||0;if((o||c||u)&&(a=`translate3d(${o}px, ${c}px, ${u}px) `),(e.x!==1||e.y!==1)&&(a+=`scale(${1/e.x}, ${1/e.y}) `),r){const{transformPerspective:p,rotate:v,rotateX:x,rotateY:y,skewX:b,skewY:j}=r;p&&(a=`perspective(${p}px) ${a}`),v&&(a+=`rotate(${v}deg) `),x&&(a+=`rotateX(${x}deg) `),y&&(a+=`rotateY(${y}deg) `),b&&(a+=`skewX(${b}deg) `),j&&(a+=`skewY(${j}deg) `)}const f=n.x.scale*e.x,m=n.y.scale*e.y;return(f!==1||m!==1)&&(a+=`scale(${f}, ${m})`),a||"none"}const d0=["","X","Y","Z"],wN={visibility:"hidden"},_N=1e3;let SN=0;function f0(n,e,r,a){const{latestValues:o}=e;o[n]&&(r[n]=o[n],e.setStaticValue(n,0),a&&(a[n]=0))}function PA(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const r=SA(e);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:o,layoutId:c}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",pt,!(o||c))}const{parent:a}=n;a&&!a.hasCheckedOptimisedAppear&&PA(a)}function HA({attachResizeListener:n,defaultParent:e,measureScroll:r,checkIsScrollRoot:a,resetTransform:o}){return class{constructor(u={},f=e==null?void 0:e()){this.id=SN++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(AN),this.nodes.forEach(kN),this.nodes.forEach(RN),this.nodes.forEach(EN)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=f?f.root||f:this,this.path=f?[...f.path,f]:[],this.parent=f,this.depth=f?f.depth+1:0;for(let m=0;m<this.path.length;m++)this.path[m].shouldResetTransform=!0;this.root===this&&(this.nodes=new cN)}addEventListener(u,f){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new Hx),this.eventHandlers.get(u).add(f)}notifyListeners(u,...f){const m=this.eventHandlers.get(u);m&&m.notify(...f)}hasListeners(u){return this.eventHandlers.has(u)}mount(u){if(this.instance)return;this.isSVG=cA(u)&&!wO(u),this.instance=u;const{layoutId:f,layout:m,visualElement:p}=this.options;if(p&&!p.current&&p.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(m||f)&&(this.isLayoutDirty=!0),n){let v;const x=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,v&&v(),v=uN(x,250),Nh.hasAnimatedSinceResize&&(Nh.hasAnimatedSinceResize=!1,this.nodes.forEach(Q_))})}f&&this.root.registerSharedNode(f,this),this.options.animate!==!1&&p&&(f||m)&&this.addEventListener("didUpdate",({delta:v,hasLayoutChanged:x,hasRelativeLayoutChanged:y,layout:b})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||p.getDefaultTransition()||UN,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=p.getProps(),C=!this.targetLayout||!$A(this.targetLayout,b),M=!x&&y;if(this.options.layoutRoot||this.resumeFrom||M||x&&(C||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const k={...ey(j,"layout"),onPlay:T,onComplete:E};(p.shouldReduceMotion||this.options.layoutRoot)&&(k.delay=0,k.type=!1),this.startAnimation(k),this.setAnimationOrigin(v,M)}else x||Q_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=b})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Da(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(zN),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&PA(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const x=this.path[v];x.shouldResetTransform=!0,x.updateScroll("snapshot"),x.options.layoutRoot&&x.willUpdate(!1)}const{layoutId:f,layout:m}=this.options;if(f===void 0&&!m)return;const p=this.getTransformTemplate();this.prevTransformTemplateValue=p?p(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Z_);return}this.isUpdating||this.nodes.forEach(MN),this.isUpdating=!1,this.nodes.forEach(DN),this.nodes.forEach(TN),this.nodes.forEach(jN),this.clearAllSnapshots();const f=ni.now();vn.delta=Ca(0,1e3/60,f-vn.timestamp),vn.timestamp=f,vn.isProcessing=!0,i0.update.process(vn),i0.preRender.process(vn),i0.render.process(vn),vn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ny.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(CN),this.sharedNodes.forEach(ON)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,pt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){pt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Gn(this.snapshot.measuredBox.x)&&!Gn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let m=0;m<this.path.length;m++)this.path[m].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ot(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:f}=this.options;f&&f.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let f=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(f=!1),f&&this.instance){const m=a(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:m,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:m}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,f=this.projectionDelta&&!VA(this.projectionDelta),m=this.getTransformTemplate(),p=m?m(this.latestValues,""):void 0,v=p!==this.prevTransformTemplateValue;u&&this.instance&&(f||es(this.latestValues)||v)&&(o(this.instance,p),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const f=this.measurePageBox();let m=this.removeElementScroll(f);return u&&(m=this.removeTransform(m)),BN(m),{animationId:this.root.animationId,measuredBox:f,layoutBox:m,latestValues:{},source:this.id}}measurePageBox(){var p;const{visualElement:u}=this.options;if(!u)return Ot();const f=u.measureViewportBox();if(!(((p=this.scroll)==null?void 0:p.wasRoot)||this.path.some(VN))){const{scroll:v}=this.root;v&&(yl(f.x,v.offset.x),yl(f.y,v.offset.y))}return f}removeElementScroll(u){var m;const f=Ot();if(Xi(f,u),(m=this.scroll)!=null&&m.wasRoot)return f;for(let p=0;p<this.path.length;p++){const v=this.path[p],{scroll:x,options:y}=v;v!==this.root&&x&&y.layoutScroll&&(x.wasRoot&&Xi(f,u),yl(f.x,x.offset.x),yl(f.y,x.offset.y))}return f}applyTransform(u,f=!1){const m=Ot();Xi(m,u);for(let p=0;p<this.path.length;p++){const v=this.path[p];!f&&v.options.layoutScroll&&v.scroll&&v!==v.root&&bl(m,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),es(v.latestValues)&&bl(m,v.latestValues)}return es(this.latestValues)&&bl(m,this.latestValues),m}removeTransform(u){const f=Ot();Xi(f,u);for(let m=0;m<this.path.length;m++){const p=this.path[m];if(!p.instance||!es(p.latestValues))continue;Uv(p.latestValues)&&p.updateSnapshot();const v=Ot(),x=p.measurePageBox();Xi(v,x),G_(f,p.latestValues,p.snapshot?p.snapshot.layoutBox:void 0,v)}return es(this.latestValues)&&G_(f,this.latestValues),f}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==vn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var y;const f=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=f.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=f.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=f.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==f;if(!(u||m&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:v,layoutId:x}=this.options;if(!(!this.layout||!(v||x))){if(this.resolvedRelativeTargetAt=vn.timestamp,!this.targetDelta&&!this.relativeTarget){const b=this.getClosestProjectingParent();b&&b.layout&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),zu(this.relativeTargetOrigin,this.layout.layoutBox,b.layout.layoutBox),Xi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Ot(),this.targetWithTransforms=Ot()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),P4(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Xi(this.target,this.layout.layoutBox),kA(this.target,this.targetDelta)):Xi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const b=this.getClosestProjectingParent();b&&!!b.resumingFrom==!!this.resumingFrom&&!b.options.layoutScroll&&b.target&&this.animationProgress!==1?(this.relativeParent=b,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ot(),this.relativeTargetOrigin=Ot(),zu(this.relativeTargetOrigin,this.target,b.target),Xi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||Uv(this.parent.latestValues)||DA(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var j;const u=this.getLead(),f=!!this.resumingFrom||this!==u;let m=!0;if((this.isProjectionDirty||(j=this.parent)!=null&&j.isProjectionDirty)&&(m=!1),f&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===vn.timestamp&&(m=!1),m)return;const{layout:p,layoutId:v}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(p||v))return;Xi(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,y=this.treeScale.y;H4(this.layoutCorrected,this.treeScale,this.path,f),u.layout&&!u.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(u.target=u.layout.layoutBox,u.targetWithTransforms=Ot());const{target:b}=u;if(!b){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(H_(this.prevProjectionDelta.x,this.projectionDelta.x),H_(this.prevProjectionDelta.y,this.projectionDelta.y)),Ru(this.projectionDelta,this.layoutCorrected,b,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==y||!K_(this.projectionDelta.x,this.prevProjectionDelta.x)||!K_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",b))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var f;if((f=this.options.visualElement)==null||f.scheduleRender(),u){const m=this.getStack();m&&m.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xl(),this.projectionDelta=xl(),this.projectionDeltaWithTransform=xl()}setAnimationOrigin(u,f=!1){const m=this.snapshot,p=m?m.latestValues:{},v={...this.latestValues},x=xl();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!f;const y=Ot(),b=m?m.source:void 0,j=this.layout?this.layout.source:void 0,T=b!==j,E=this.getStack(),C=!E||E.members.length<=1,M=!!(T&&!C&&this.options.crossfade===!0&&!this.path.some(LN));this.animationProgress=0;let k;this.mixTargetDelta=z=>{const D=z/1e3;J_(x.x,u.x,D),J_(x.y,u.y,D),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(zu(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),NN(this.relativeTarget,this.relativeTargetOrigin,y,D),k&&xN(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=Ot()),Xi(k,this.relativeTarget)),T&&(this.animationValues=v,fN(v,p,this.latestValues,D,M,C)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=D},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){var f,m,p;this.notifyListeners("animationStart"),(f=this.currentAnimation)==null||f.stop(),(p=(m=this.resumingFrom)==null?void 0:m.currentAnimation)==null||p.stop(),this.pendingAnimation&&(Da(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=pt.update(()=>{Nh.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=bs(0)),this.currentAnimation=sN(this.motionValue,[0,1e3],{...u,velocity:0,isSync:!0,onUpdate:v=>{this.mixTargetDelta(v),u.onUpdate&&u.onUpdate(v)},onStop:()=>{},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_N),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:f,target:m,layout:p,latestValues:v}=u;if(!(!f||!m||!p)){if(this!==u&&this.layout&&p&&YA(this.options.animationType,this.layout.layoutBox,p.layoutBox)){m=this.target||Ot();const x=Gn(this.layout.layoutBox.x);m.x.min=u.target.x.min,m.x.max=m.x.min+x;const y=Gn(this.layout.layoutBox.y);m.y.min=u.target.y.min,m.y.max=m.y.min+y}Xi(f,m),bl(f,v),Ru(this.projectionDeltaWithTransform,this.layoutCorrected,f,v)}}registerSharedNode(u,f){this.sharedNodes.has(u)||this.sharedNodes.set(u,new yN),this.sharedNodes.get(u).add(f);const p=f.options.initialPromotionConfig;f.promote({transition:p?p.transition:void 0,preserveFollowOpacity:p&&p.shouldPreserveFollowOpacity?p.shouldPreserveFollowOpacity(f):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var f;const{layoutId:u}=this.options;return u?((f=this.getStack())==null?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:u}=this.options;return u?(f=this.getStack())==null?void 0:f.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:f,preserveFollowOpacity:m}={}){const p=this.getStack();p&&p.promote(this,m),u&&(this.projectionDelta=void 0,this.needsReset=!0),f&&this.setOptions({transition:f})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let f=!1;const{latestValues:m}=u;if((m.z||m.rotate||m.rotateX||m.rotateY||m.rotateZ||m.skewX||m.skewY)&&(f=!0),!f)return;const p={};m.z&&f0("z",u,p,this.animationValues);for(let v=0;v<d0.length;v++)f0(`rotate${d0[v]}`,u,p,this.animationValues),f0(`skew${d0[v]}`,u,p,this.animationValues);u.render();for(const v in p)u.setStaticValue(v,p[v]),this.animationValues&&(this.animationValues[v]=p[v]);u.scheduleRender()}getProjectionStyles(u){if(!this.instance||this.isSVG)return;if(!this.isVisible)return wN;const f={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,f.opacity="",f.pointerEvents=Oh(u==null?void 0:u.pointerEvents)||"",f.transform=m?m(this.latestValues,""):"none",f;const p=this.getLead();if(!this.projectionDelta||!this.layout||!p.target){const b={};return this.options.layoutId&&(b.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,b.pointerEvents=Oh(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!es(this.latestValues)&&(b.transform=m?m({},""):"none",this.hasProjected=!1),b}const v=p.animationValues||p.latestValues;this.applyTransformsToTarget(),f.transform=bN(this.projectionDeltaWithTransform,this.treeScale,v),m&&(f.transform=m(v,f.transform));const{x,y}=this.projectionDelta;f.transformOrigin=`${x.origin*100}% ${y.origin*100}% 0`,p.animationValues?f.opacity=p===this?v.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:v.opacityExit:f.opacity=p===this?v.opacity!==void 0?v.opacity:"":v.opacityExit!==void 0?v.opacityExit:0;for(const b in Qu){if(v[b]===void 0)continue;const{correct:j,applyTo:T,isCSSVariable:E}=Qu[b],C=f.transform==="none"?v[b]:j(v[b],p);if(T){const M=T.length;for(let k=0;k<M;k++)f[T[k]]=C}else E?this.options.visualElement.renderState.vars[b]=C:f[b]=C}return this.options.layoutId&&(f.pointerEvents=p===this?Oh(u==null?void 0:u.pointerEvents)||"":"none"),f}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var f;return(f=u.currentAnimation)==null?void 0:f.stop()}),this.root.nodes.forEach(Z_),this.root.sharedNodes.clear()}}}function TN(n){n.updateLayout()}function jN(n){var r;const e=((r=n.resumeFrom)==null?void 0:r.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:o}=n.layout,{animationType:c}=n.options,u=e.source!==n.layout.source;c==="size"?Ki(x=>{const y=u?e.measuredBox[x]:e.layoutBox[x],b=Gn(y);y.min=a[x].min,y.max=y.min+b}):YA(c,e.layoutBox,a)&&Ki(x=>{const y=u?e.measuredBox[x]:e.layoutBox[x],b=Gn(a[x]);y.max=y.min+b,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[x].max=n.relativeTarget[x].min+b)});const f=xl();Ru(f,a,e.layoutBox);const m=xl();u?Ru(m,n.applyTransform(o,!0),e.measuredBox):Ru(m,a,e.layoutBox);const p=!VA(f);let v=!1;if(!n.resumeFrom){const x=n.getClosestProjectingParent();if(x&&!x.resumeFrom){const{snapshot:y,layout:b}=x;if(y&&b){const j=Ot();zu(j,e.layoutBox,y.layoutBox);const T=Ot();zu(T,a,b.layoutBox),$A(j,T)||(v=!0),x.options.layoutRoot&&(n.relativeTarget=T,n.relativeTargetOrigin=j,n.relativeParent=x)}}}n.notifyListeners("didUpdate",{layout:a,snapshot:e,delta:m,layoutDelta:f,hasLayoutChanged:p,hasRelativeLayoutChanged:v})}else if(n.isLead()){const{onExitComplete:a}=n.options;a&&a()}n.options.transition=void 0}function AN(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function EN(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function CN(n){n.clearSnapshot()}function Z_(n){n.clearMeasurements()}function MN(n){n.isLayoutDirty=!1}function DN(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Q_(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function kN(n){n.resolveTargetDelta()}function RN(n){n.calcProjection()}function zN(n){n.resetSkewAndRotation()}function ON(n){n.removeLeadSnapshot()}function J_(n,e,r){n.translate=_t(e.translate,0,r),n.scale=_t(e.scale,1,r),n.origin=e.origin,n.originPoint=e.originPoint}function eS(n,e,r,a){n.min=_t(e.min,r.min,a),n.max=_t(e.max,r.max,a)}function NN(n,e,r,a){eS(n.x,e.x,r.x,a),eS(n.y,e.y,r.y,a)}function LN(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const UN={duration:.45,ease:[.4,0,.1,1]},tS=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),nS=tS("applewebkit/")&&!tS("chrome/")?Math.round:ir;function iS(n){n.min=nS(n.min),n.max=nS(n.max)}function BN(n){iS(n.x),iS(n.y)}function YA(n,e,r){return n==="position"||n==="preserve-aspect"&&!$4(W_(e),W_(r),.2)}function VN(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const $N=HA({attachResizeListener:(n,e)=>ed(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),h0={current:void 0},FA=HA({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!h0.current){const n=new $N({});n.mount(window),n.setOptions({layoutScroll:!0}),h0.current=n}return h0.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),PN={pan:{Feature:iN},drag:{Feature:nN,ProjectionNode:FA,MeasureLayout:LA}};function rS(n,e,r){const{props:a}=n;n.animationState&&a.whileHover&&n.animationState.setActive("whileHover",r==="Start");const o="onHover"+r,c=a[o];c&&pt.postRender(()=>c(e,xd(e)))}class HN extends Ao{mount(){const{current:e}=this.node;e&&(this.unmount=gO(e,(r,a)=>(rS(this.node,a,"Start"),o=>rS(this.node,o,"End"))))}unmount(){}}class YN extends Ao{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=pd(ed(this.node.current,"focus",()=>this.onFocus()),ed(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function aS(n,e,r){const{props:a}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&a.whileTap&&n.animationState.setActive("whileTap",r==="Start");const o="onTap"+(r==="End"?"":r),c=a[o];c&&pt.postRender(()=>c(e,xd(e)))}class FN extends Ao{mount(){const{current:e}=this.node;e&&(this.unmount=bO(e,(r,a)=>(aS(this.node,a,"Start"),(o,{success:c})=>aS(this.node,o,c?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const $v=new WeakMap,m0=new WeakMap,GN=n=>{const e=$v.get(n.target);e&&e(n)},qN=n=>{n.forEach(GN)};function IN({root:n,...e}){const r=n||document;m0.has(r)||m0.set(r,{});const a=m0.get(r),o=JSON.stringify(e);return a[o]||(a[o]=new IntersectionObserver(qN,{root:n,...e})),a[o]}function XN(n,e,r){const a=IN(e);return $v.set(n,r),a.observe(n),()=>{$v.delete(n),a.unobserve(n)}}const WN={some:0,all:1};class KN extends Ao{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:r,margin:a,amount:o="some",once:c}=e,u={root:r?r.current:void 0,rootMargin:a,threshold:typeof o=="number"?o:WN[o]},f=m=>{const{isIntersecting:p}=m;if(this.isInView===p||(this.isInView=p,c&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),y=p?v:x;y&&y(m)};return XN(this.node.current,u,f)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:r}=this.node;["amount","margin","root"].some(ZN(e,r))&&this.startObserver()}unmount(){}}function ZN({viewport:n={}},{viewport:e={}}={}){return r=>n[r]!==e[r]}const QN={inView:{Feature:KN},tap:{Feature:FN},focus:{Feature:YN},hover:{Feature:HN}},JN={layout:{ProjectionNode:FA,MeasureLayout:LA}},Pv={current:null},GA={current:!1};function e6(){if(GA.current=!0,!!Lx)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Pv.current=n.matches;n.addListener(e),e()}else Pv.current=!1}const t6=new WeakMap;function n6(n,e,r){for(const a in e){const o=e[a],c=r[a];if(un(o))n.addValue(a,o);else if(un(c))n.addValue(a,bs(o,{owner:n}));else if(c!==o)if(n.hasValue(a)){const u=n.getValue(a);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(a);n.addValue(a,bs(u!==void 0?u:o,{owner:n}))}}for(const a in r)e[a]===void 0&&n.removeValue(a);return e}const oS=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class i6{scrapeMotionValuesFromProps(e,r,a){return{}}constructor({parent:e,props:r,presenceContext:a,reducedMotionConfig:o,blockInitialAnimation:c,visualState:u},f={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Jx,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=ni.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,pt.render(this.render,!1,!0))};const{latestValues:m,renderState:p}=u;this.latestValues=m,this.baseTarget={...m},this.initialValues=r.initial?{...m}:{},this.renderState=p,this.parent=e,this.props=r,this.presenceContext=a,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=f,this.blockInitialAnimation=!!c,this.isControllingVariants=Cm(r),this.isVariantNode=fA(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const y in x){const b=x[y];m[y]!==void 0&&un(b)&&b.set(m[y],!1)}}mount(e){this.current=e,t6.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,a)=>this.bindToMotionValue(a,r)),GA.current||e6(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Pv.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),Da(this.notifyUpdate),Da(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const r=this.features[e];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(e,r){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const a=ec.has(e);a&&this.onBindTransform&&this.onBindTransform();const o=r.on("change",f=>{this.latestValues[e]=f,this.props.onUpdate&&pt.preRender(this.notifyUpdate),a&&this.projection&&(this.projection.isTransformDirty=!0)}),c=r.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,r)),this.valueSubscriptions.set(e,()=>{o(),c(),u&&u(),r.owner&&r.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Bl){const r=Bl[e];if(!r)continue;const{isEnabled:a,Feature:o}=r;if(!this.features[e]&&o&&a(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ot()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,r){this.latestValues[e]=r}update(e,r){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let a=0;a<oS.length;a++){const o=oS[a];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,u=e[c];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=n6(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(e),()=>r.variantChildren.delete(e)}addValue(e,r){const a=this.values.get(e);r!==a&&(a&&this.removeValue(e),this.bindToMotionValue(e,r),this.values.set(e,r),this.latestValues[e]=r.get())}removeValue(e){this.values.delete(e);const r=this.valueSubscriptions.get(e);r&&(r(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,r){if(this.props.values&&this.props.values[e])return this.props.values[e];let a=this.values.get(e);return a===void 0&&r!==void 0&&(a=bs(r===null?void 0:r,{owner:this}),this.addValue(e,a)),a}readValue(e,r){let a=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return a!=null&&(typeof a=="string"&&(yj(a)||wj(a))?a=parseFloat(a):!jO(a)&&wo.test(r)&&(a=rA(e,r)),this.setBaseTarget(e,un(a)?a.get():a)),un(a)?a.get():a}setBaseTarget(e,r){this.baseTarget[e]=r}getBaseTarget(e){var c;const{initial:r}=this.props;let a;if(typeof r=="string"||typeof r=="object"){const u=uy(this.props,r,(c=this.presenceContext)==null?void 0:c.custom);u&&(a=u[e])}if(r&&a!==void 0)return a;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!un(o)?o:this.initialValues[e]!==void 0&&a===void 0?void 0:this.baseTarget[e]}on(e,r){return this.events[e]||(this.events[e]=new Hx),this.events[e].add(r)}notify(e,...r){this.events[e]&&this.events[e].notify(...r)}}class qA extends i6{constructor(){super(...arguments),this.KeyframeResolver=dO}sortInstanceNodePosition(e,r){return e.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(e,r){return e.style?e.style[r]:void 0}removeValueFromRenderState(e,{vars:r,style:a}){delete r[e],delete a[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;un(e)&&(this.childSubscription=e.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function IA(n,{style:e,vars:r},a,o){Object.assign(n.style,e,o&&o.getProjectionStyles(a));for(const c in r)n.style.setProperty(c,r[c])}function r6(n){return window.getComputedStyle(n)}class a6 extends qA{constructor(){super(...arguments),this.type="html",this.renderInstance=IA}readValueFromInstance(e,r){var a;if(ec.has(r))return(a=this.projection)!=null&&a.isProjecting?Cv(r):Dz(e,r);{const o=r6(e),c=(Gx(r)?o.getPropertyValue(r):o[r])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:r}){return RA(e,r)}build(e,r,a){sy(e,r,a.transformTemplate)}scrapeMotionValuesFromProps(e,r,a){return dy(e,r,a)}}const XA=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function o6(n,e,r,a){IA(n,e,void 0,a);for(const o in e.attrs)n.setAttribute(XA.has(o)?o:oy(o),e.attrs[o])}class s6 extends qA{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ot}getBaseTargetFromProps(e,r){return e[r]}readValueFromInstance(e,r){if(ec.has(r)){const a=iA(r);return a&&a.default||0}return r=XA.has(r)?r:oy(r),e.getAttribute(r)}scrapeMotionValuesFromProps(e,r,a){return _A(e,r,a)}build(e,r,a){xA(e,r,this.isSVGTag,a.transformTemplate,a.style)}renderInstance(e,r,a,o){o6(e,r,a,o)}mount(e){this.isSVGTag=bA(e.tagName),super.mount(e)}}const l6=(n,e)=>cy(n)?new s6(e):new a6(e,{allowProjection:n!==P.Fragment}),c6=o4({...R4,...QN,...PN,...JN},l6),er=kO(c6);function wl(n){const e=Nx(()=>bs(n)),{isStatic:r}=P.useContext(jm);if(r){const[,a]=P.useState(n);P.useEffect(()=>e.on("change",a),[])}return e}function WA(n,e){const r=wl(e()),a=()=>r.set(e());return a(),xj(()=>{const o=()=>pt.preRender(a,!1,!0),c=n.map(u=>u.on("change",o));return()=>{c.forEach(u=>u()),Da(a)}}),r}function u6(n){Du.current=[],n();const e=WA(Du.current,n);return Du.current=void 0,e}function d6(n,e,r,a){if(typeof n=="function")return u6(n);const o=_O(e,r,a);return Array.isArray(n)?sS(n,o):sS([n],([c])=>o(c))}function sS(n,e){const r=Nx(()=>[]);return WA(n,()=>{r.length=0;const a=n.length;for(let o=0;o<a;o++)r[o]=n[o].get();return e(r)})}function tu(n,e={}){const{isStatic:r}=P.useContext(jm),a=()=>un(n)?n.get():n;if(r)return d6(a);const o=wl(a());return P.useInsertionEffect(()=>SO(o,n,e),[o,JSON.stringify(e)]),o}const p0={damping:30,stiffness:100,mass:2};function g0({imageSrc:n,altText:e="Tilted card image",captionText:r="",containerHeight:a="300px",containerWidth:o="100%",imageHeight:c="300px",imageWidth:u="300px",scaleOnHover:f=1.1,rotateAmplitude:m=14,showMobileWarning:p=!0,showTooltip:v=!0,overlayContent:x=null,displayOverlayContent:y=!1}){const b=P.useRef(null),j=wl(),T=wl(),E=tu(wl(0),p0),C=tu(wl(0),p0),M=tu(1,p0),k=tu(0),z=tu(0,{stiffness:350,damping:30,mass:1}),[D,L]=P.useState(0);function O(W){if(!b.current)return;const ae=b.current.getBoundingClientRect(),Z=W.clientX-ae.left-ae.width/2,se=W.clientY-ae.top-ae.height/2,fe=se/(ae.height/2)*-m,le=Z/(ae.width/2)*m;E.set(fe),C.set(le),j.set(W.clientX-ae.left),T.set(W.clientY-ae.top);const V=se-D;z.set(-V*.6),L(se)}function U(){M.set(f),k.set(1)}function H(){k.set(0),M.set(1),E.set(0),C.set(0),z.set(0)}return d.jsxs("figure",{ref:b,className:"tilted-card-figure",style:{height:a,width:o},onMouseMove:O,onMouseEnter:U,onMouseLeave:H,children:[p&&d.jsx("div",{className:"tilted-card-mobile-alert",children:"This effect is not optimized for mobile. Check on desktop."}),d.jsxs(er.div,{className:"tilted-card-inner",style:{width:u,height:c,rotateX:E,rotateY:C,scale:M},children:[d.jsx(er.img,{src:n,alt:e,className:"tilted-card-img",style:{width:u,height:c}}),y&&x&&d.jsx(er.div,{className:"tilted-card-overlay",children:x})]}),v&&d.jsx(er.figcaption,{className:"tilted-card-caption",style:{x:j,y:T,opacity:k,rotate:z},children:r})]})}function ya(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function KA(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Vl={duration:.5,overwrite:!1,delay:0},hy,yn,xt,Br=1e8,Dn=1/Br,Hv=Math.PI*2,f6=Hv/4,h6=0,ZA=Math.sqrt,m6=Math.cos,p6=Math.sin,dn=function(e){return typeof e=="string"},Dt=function(e){return typeof e=="function"},ka=function(e){return typeof e=="number"},my=function(e){return typeof e>"u"},Ir=function(e){return typeof e=="object"},ii=function(e){return e!==!1},py=function(){return typeof window<"u"},Vf=function(e){return Dt(e)||dn(e)},QA=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,Yv=/(?:-?\.?\d|\.)+/gi,JA=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,_l=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,v0=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,eE=/[+-]=-?[.\d]+/,tE=/[^,'"\[\]\s]+/gi,g6=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,wt,Mr,Fv,gy,Di={},im={},nE,iE=function(e){return(im=$l(e,Di))&&si},vy=function(e,r){return console.warn("Invalid property",e,"set to",r,"Missing plugin? gsap.registerPlugin()")},td=function(e,r){return!r&&console.warn(e)},rE=function(e,r){return e&&(Di[e]=r)&&im&&(im[e]=r)||Di},nd=function(){return 0},v6={suppressEvents:!0,isStart:!0,kill:!1},Lh={suppressEvents:!0,kill:!1},x6={suppressEvents:!0},xy={},xo=[],Gv={},aE,Si={},x0={},lS=30,Uh=[],yy="",by=function(e){var r=e[0],a,o;if(Ir(r)||Dt(r)||(e=[e]),!(a=(r._gsap||{}).harness)){for(o=Uh.length;o--&&!Uh[o].targetTest(r););a=Uh[o]}for(o=e.length;o--;)e[o]&&(e[o]._gsap||(e[o]._gsap=new ME(e[o],a)))||e.splice(o,1);return e},hs=function(e){return e._gsap||by(tr(e))[0]._gsap},oE=function(e,r,a){return(a=e[r])&&Dt(a)?e[r]():my(a)&&e.getAttribute&&e.getAttribute(r)||a},ri=function(e,r){return(e=e.split(",")).forEach(r)||e},Nt=function(e){return Math.round(e*1e5)/1e5||0},It=function(e){return Math.round(e*1e7)/1e7||0},Al=function(e,r){var a=r.charAt(0),o=parseFloat(r.substr(2));return e=parseFloat(e),a==="+"?e+o:a==="-"?e-o:a==="*"?e*o:e/o},y6=function(e,r){for(var a=r.length,o=0;e.indexOf(r[o])<0&&++o<a;);return o<a},rm=function(){var e=xo.length,r=xo.slice(0),a,o;for(Gv={},xo.length=0,a=0;a<e;a++)o=r[a],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},wy=function(e){return!!(e._initted||e._startAt||e.add)},sE=function(e,r,a,o){xo.length&&!yn&&rm(),e.render(r,a,!!(yn&&r<0&&wy(e))),xo.length&&!yn&&rm()},lE=function(e){var r=parseFloat(e);return(r||r===0)&&(e+"").match(tE).length<2?r:dn(e)?e.trim():e},cE=function(e){return e},ki=function(e,r){for(var a in r)a in e||(e[a]=r[a]);return e},b6=function(e){return function(r,a){for(var o in a)o in r||o==="duration"&&e||o==="ease"||(r[o]=a[o])}},$l=function(e,r){for(var a in r)e[a]=r[a];return e},cS=function n(e,r){for(var a in r)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(e[a]=Ir(r[a])?n(e[a]||(e[a]={}),r[a]):r[a]);return e},am=function(e,r){var a={},o;for(o in e)o in r||(a[o]=e[o]);return a},Ou=function(e){var r=e.parent||wt,a=e.keyframes?b6(kn(e.keyframes)):ki;if(ii(e.inherit))for(;r;)a(e,r.vars.defaults),r=r.parent||r._dp;return e},w6=function(e,r){for(var a=e.length,o=a===r.length;o&&a--&&e[a]===r[a];);return a<0},uE=function(e,r,a,o,c){var u=e[o],f;if(c)for(f=r[c];u&&u[c]>f;)u=u._prev;return u?(r._next=u._next,u._next=r):(r._next=e[a],e[a]=r),r._next?r._next._prev=r:e[o]=r,r._prev=u,r.parent=r._dp=e,r},Mm=function(e,r,a,o){a===void 0&&(a="_first"),o===void 0&&(o="_last");var c=r._prev,u=r._next;c?c._next=u:e[a]===r&&(e[a]=u),u?u._prev=c:e[o]===r&&(e[o]=c),r._next=r._prev=r.parent=null},_o=function(e,r){e.parent&&(!r||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ms=function(e,r){if(e&&(!r||r._end>e._dur||r._start<0))for(var a=e;a;)a._dirty=1,a=a.parent;return e},_6=function(e){for(var r=e.parent;r&&r.parent;)r._dirty=1,r.totalDuration(),r=r.parent;return e},qv=function(e,r,a,o){return e._startAt&&(yn?e._startAt.revert(Lh):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(r,!0,o))},S6=function n(e){return!e||e._ts&&n(e.parent)},uS=function(e){return e._repeat?Pl(e._tTime,e=e.duration()+e._rDelay)*e:0},Pl=function(e,r){var a=Math.floor(e=It(e/r));return e&&a===e?a-1:a},om=function(e,r){return(e-r._start)*r._ts+(r._ts>=0?0:r._dirty?r.totalDuration():r._tDur)},Dm=function(e){return e._end=It(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dn)||0))},km=function(e,r){var a=e._dp;return a&&a.smoothChildTiming&&e._ts&&(e._start=It(a._time-(e._ts>0?r/e._ts:((e._dirty?e.totalDuration():e._tDur)-r)/-e._ts)),Dm(e),a._dirty||ms(a,e)),e},dE=function(e,r){var a;if((r._time||!r._dur&&r._initted||r._start<e._time&&(r._dur||!r.add))&&(a=om(e.rawTime(),r),(!r._dur||yd(0,r.totalDuration(),a)-r._tTime>Dn)&&r.render(a,!0)),ms(e,r)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(a=e;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;e._zTime=-1e-8}},Rr=function(e,r,a,o){return r.parent&&_o(r),r._start=It((ka(a)?a:a||e!==wt?Zi(e,a,r):e._time)+r._delay),r._end=It(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),uE(e,r,"_first","_last",e._sort?"_start":0),Iv(r)||(e._recent=r),o||dE(e,r),e._ts<0&&km(e,e._tTime),e},fE=function(e,r){return(Di.ScrollTrigger||vy("scrollTrigger",r))&&Di.ScrollTrigger.create(r,e)},hE=function(e,r,a,o,c){if(Sy(e,r,c),!e._initted)return 1;if(!a&&e._pt&&!yn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&aE!==ji.frame)return xo.push(e),e._lazy=[c,o],1},T6=function n(e){var r=e.parent;return r&&r._ts&&r._initted&&!r._lock&&(r.rawTime()<0||n(r))},Iv=function(e){var r=e.data;return r==="isFromStart"||r==="isStart"},j6=function(e,r,a,o){var c=e.ratio,u=r<0||!r&&(!e._start&&T6(e)&&!(!e._initted&&Iv(e))||(e._ts<0||e._dp._ts<0)&&!Iv(e))?0:1,f=e._rDelay,m=0,p,v,x;if(f&&e._repeat&&(m=yd(0,e._tDur,r),v=Pl(m,f),e._yoyo&&v&1&&(u=1-u),v!==Pl(e._tTime,f)&&(c=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==c||yn||o||e._zTime===Dn||!r&&e._zTime){if(!e._initted&&hE(e,r,o,a,m))return;for(x=e._zTime,e._zTime=r||(a?Dn:0),a||(a=r&&!x),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=m,p=e._pt;p;)p.r(u,p.d),p=p._next;r<0&&qv(e,r,a,!0),e._onUpdate&&!a&&Ci(e,"onUpdate"),m&&e._repeat&&!a&&e.parent&&Ci(e,"onRepeat"),(r>=e._tDur||r<0)&&e.ratio===u&&(u&&_o(e,1),!a&&!yn&&(Ci(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=r)},A6=function(e,r,a){var o;if(a>r)for(o=e._first;o&&o._start<=a;){if(o.data==="isPause"&&o._start>r)return o;o=o._next}else for(o=e._last;o&&o._start>=a;){if(o.data==="isPause"&&o._start<r)return o;o=o._prev}},Hl=function(e,r,a,o){var c=e._repeat,u=It(r)||0,f=e._tTime/e._tDur;return f&&!o&&(e._time*=u/e._dur),e._dur=u,e._tDur=c?c<0?1e10:It(u*(c+1)+e._rDelay*c):u,f>0&&!o&&km(e,e._tTime=e._tDur*f),e.parent&&Dm(e),a||ms(e.parent,e),e},dS=function(e){return e instanceof Yn?ms(e):Hl(e,e._dur)},E6={_start:0,endTime:nd,totalDuration:nd},Zi=function n(e,r,a){var o=e.labels,c=e._recent||E6,u=e.duration()>=Br?c.endTime(!1):e._dur,f,m,p;return dn(r)&&(isNaN(r)||r in o)?(m=r.charAt(0),p=r.substr(-1)==="%",f=r.indexOf("="),m==="<"||m===">"?(f>=0&&(r=r.replace(/=/,"")),(m==="<"?c._start:c.endTime(c._repeat>=0))+(parseFloat(r.substr(1))||0)*(p?(f<0?c:a).totalDuration()/100:1)):f<0?(r in o||(o[r]=u),o[r]):(m=parseFloat(r.charAt(f-1)+r.substr(f+1)),p&&a&&(m=m/100*(kn(a)?a[0]:a).totalDuration()),f>1?n(e,r.substr(0,f-1),a)+m:u+m)):r==null?u:+r},Nu=function(e,r,a){var o=ka(r[1]),c=(o?2:1)+(e<2?0:1),u=r[c],f,m;if(o&&(u.duration=r[1]),u.parent=a,e){for(f=u,m=a;m&&!("immediateRender"in f);)f=m.vars.defaults||{},m=ii(m.vars.inherit)&&m.parent;u.immediateRender=ii(f.immediateRender),e<2?u.runBackwards=1:u.startAt=r[c-1]}return new qt(r[0],u,r[c+1])},Eo=function(e,r){return e||e===0?r(e):r},yd=function(e,r,a){return a<e?e:a>r?r:a},En=function(e,r){return!dn(e)||!(r=g6.exec(e))?"":r[1]},C6=function(e,r,a){return Eo(a,function(o){return yd(e,r,o)})},Xv=[].slice,mE=function(e,r){return e&&Ir(e)&&"length"in e&&(!r&&!e.length||e.length-1 in e&&Ir(e[0]))&&!e.nodeType&&e!==Mr},M6=function(e,r,a){return a===void 0&&(a=[]),e.forEach(function(o){var c;return dn(o)&&!r||mE(o,1)?(c=a).push.apply(c,tr(o)):a.push(o)})||a},tr=function(e,r,a){return xt&&!r&&xt.selector?xt.selector(e):dn(e)&&!a&&(Fv||!Yl())?Xv.call((r||gy).querySelectorAll(e),0):kn(e)?M6(e,a):mE(e)?Xv.call(e,0):e?[e]:[]},Wv=function(e){return e=tr(e)[0]||td("Invalid scope")||{},function(r){var a=e.current||e.nativeElement||e;return tr(r,a.querySelectorAll?a:a===e?td("Invalid scope")||gy.createElement("div"):e)}},pE=function(e){return e.sort(function(){return .5-Math.random()})},gE=function(e){if(Dt(e))return e;var r=Ir(e)?e:{each:e},a=ps(r.ease),o=r.from||0,c=parseFloat(r.base)||0,u={},f=o>0&&o<1,m=isNaN(o)||f,p=r.axis,v=o,x=o;return dn(o)?v=x={center:.5,edges:.5,end:1}[o]||0:!f&&m&&(v=o[0],x=o[1]),function(y,b,j){var T=(j||r).length,E=u[T],C,M,k,z,D,L,O,U,H;if(!E){if(H=r.grid==="auto"?0:(r.grid||[1,Br])[1],!H){for(O=-1e8;O<(O=j[H++].getBoundingClientRect().left)&&H<T;);H<T&&H--}for(E=u[T]=[],C=m?Math.min(H,T)*v-.5:o%H,M=H===Br?0:m?T*x/H-.5:o/H|0,O=0,U=Br,L=0;L<T;L++)k=L%H-C,z=M-(L/H|0),E[L]=D=p?Math.abs(p==="y"?z:k):ZA(k*k+z*z),D>O&&(O=D),D<U&&(U=D);o==="random"&&pE(E),E.max=O-U,E.min=U,E.v=T=(parseFloat(r.amount)||parseFloat(r.each)*(H>T?T-1:p?p==="y"?T/H:H:Math.max(H,T/H))||0)*(o==="edges"?-1:1),E.b=T<0?c-T:c,E.u=En(r.amount||r.each)||0,a=a&&T<0?AE(a):a}return T=(E[y]-E.min)/E.max||0,It(E.b+(a?a(T):T)*E.v)+E.u}},Kv=function(e){var r=Math.pow(10,((e+"").split(".")[1]||"").length);return function(a){var o=It(Math.round(parseFloat(a)/e)*e*r);return(o-o%1)/r+(ka(a)?0:En(a))}},vE=function(e,r){var a=kn(e),o,c;return!a&&Ir(e)&&(o=a=e.radius||Br,e.values?(e=tr(e.values),(c=!ka(e[0]))&&(o*=o)):e=Kv(e.increment)),Eo(r,a?Dt(e)?function(u){return c=e(u),Math.abs(c-u)<=o?c:u}:function(u){for(var f=parseFloat(c?u.x:u),m=parseFloat(c?u.y:0),p=Br,v=0,x=e.length,y,b;x--;)c?(y=e[x].x-f,b=e[x].y-m,y=y*y+b*b):y=Math.abs(e[x]-f),y<p&&(p=y,v=x);return v=!o||p<=o?e[v]:u,c||v===u||ka(u)?v:v+En(u)}:Kv(e))},xE=function(e,r,a,o){return Eo(kn(e)?!r:a===!0?!!(a=0):!o,function(){return kn(e)?e[~~(Math.random()*e.length)]:(a=a||1e-5)&&(o=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((e-a/2+Math.random()*(r-e+a*.99))/a)*a*o)/o})},D6=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return function(o){return r.reduce(function(c,u){return u(c)},o)}},k6=function(e,r){return function(a){return e(parseFloat(a))+(r||En(a))}},R6=function(e,r,a){return bE(e,r,0,1,a)},yE=function(e,r,a){return Eo(a,function(o){return e[~~r(o)]})},z6=function n(e,r,a){var o=r-e;return kn(e)?yE(e,n(0,e.length),r):Eo(a,function(c){return(o+(c-e)%o)%o+e})},O6=function n(e,r,a){var o=r-e,c=o*2;return kn(e)?yE(e,n(0,e.length-1),r):Eo(a,function(u){return u=(c+(u-e)%c)%c||0,e+(u>o?c-u:u)})},id=function(e){for(var r=0,a="",o,c,u,f;~(o=e.indexOf("random(",r));)u=e.indexOf(")",o),f=e.charAt(o+7)==="[",c=e.substr(o+7,u-o-7).match(f?tE:Yv),a+=e.substr(r,o-r)+xE(f?c:+c[0],f?0:+c[1],+c[2]||1e-5),r=u+1;return a+e.substr(r,e.length-r)},bE=function(e,r,a,o,c){var u=r-e,f=o-a;return Eo(c,function(m){return a+((m-e)/u*f||0)})},N6=function n(e,r,a,o){var c=isNaN(e+r)?0:function(b){return(1-b)*e+b*r};if(!c){var u=dn(e),f={},m,p,v,x,y;if(a===!0&&(o=1)&&(a=null),u)e={p:e},r={p:r};else if(kn(e)&&!kn(r)){for(v=[],x=e.length,y=x-2,p=1;p<x;p++)v.push(n(e[p-1],e[p]));x--,c=function(j){j*=x;var T=Math.min(y,~~j);return v[T](j-T)},a=r}else o||(e=$l(kn(e)?[]:{},e));if(!v){for(m in r)_y.call(f,e,m,"get",r[m]);c=function(j){return Ay(j,f)||(u?e.p:e)}}}return Eo(a,c)},fS=function(e,r,a){var o=e.labels,c=Br,u,f,m;for(u in o)f=o[u]-r,f<0==!!a&&f&&c>(f=Math.abs(f))&&(m=u,c=f);return m},Ci=function(e,r,a){var o=e.vars,c=o[r],u=xt,f=e._ctx,m,p,v;if(c)return m=o[r+"Params"],p=o.callbackScope||e,a&&xo.length&&rm(),f&&(xt=f),v=m?c.apply(p,m):c.call(p),xt=u,v},yu=function(e){return _o(e),e.scrollTrigger&&e.scrollTrigger.kill(!!yn),e.progress()<1&&Ci(e,"onInterrupt"),e},Sl,wE=[],_E=function(e){if(e)if(e=!e.name&&e.default||e,py()||e.headless){var r=e.name,a=Dt(e),o=r&&!a&&e.init?function(){this._props=[]}:e,c={init:nd,render:Ay,add:_y,kill:Z6,modifier:K6,rawVars:0},u={targetTest:0,get:0,getSetter:jy,aliases:{},register:0};if(Yl(),e!==o){if(Si[r])return;ki(o,ki(am(e,c),u)),$l(o.prototype,$l(c,am(e,u))),Si[o.prop=r]=o,e.targetTest&&(Uh.push(o),xy[r]=1),r=(r==="css"?"CSS":r.charAt(0).toUpperCase()+r.substr(1))+"Plugin"}rE(r,o),e.register&&e.register(si,o,ai)}else wE.push(e)},ot=255,bu={aqua:[0,ot,ot],lime:[0,ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ot],navy:[0,0,128],white:[ot,ot,ot],olive:[128,128,0],yellow:[ot,ot,0],orange:[ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ot,0,0],pink:[ot,192,203],cyan:[0,ot,ot],transparent:[ot,ot,ot,0]},y0=function(e,r,a){return e+=e<0?1:e>1?-1:0,(e*6<1?r+(a-r)*e*6:e<.5?a:e*3<2?r+(a-r)*(2/3-e)*6:r)*ot+.5|0},SE=function(e,r,a){var o=e?ka(e)?[e>>16,e>>8&ot,e&ot]:0:bu.black,c,u,f,m,p,v,x,y,b,j;if(!o){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),bu[e])o=bu[e];else if(e.charAt(0)==="#"){if(e.length<6&&(c=e.charAt(1),u=e.charAt(2),f=e.charAt(3),e="#"+c+c+u+u+f+f+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return o=parseInt(e.substr(1,6),16),[o>>16,o>>8&ot,o&ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),o=[e>>16,e>>8&ot,e&ot]}else if(e.substr(0,3)==="hsl"){if(o=j=e.match(Yv),!r)m=+o[0]%360/360,p=+o[1]/100,v=+o[2]/100,u=v<=.5?v*(p+1):v+p-v*p,c=v*2-u,o.length>3&&(o[3]*=1),o[0]=y0(m+1/3,c,u),o[1]=y0(m,c,u),o[2]=y0(m-1/3,c,u);else if(~e.indexOf("="))return o=e.match(JA),a&&o.length<4&&(o[3]=1),o}else o=e.match(Yv)||bu.transparent;o=o.map(Number)}return r&&!j&&(c=o[0]/ot,u=o[1]/ot,f=o[2]/ot,x=Math.max(c,u,f),y=Math.min(c,u,f),v=(x+y)/2,x===y?m=p=0:(b=x-y,p=v>.5?b/(2-x-y):b/(x+y),m=x===c?(u-f)/b+(u<f?6:0):x===u?(f-c)/b+2:(c-u)/b+4,m*=60),o[0]=~~(m+.5),o[1]=~~(p*100+.5),o[2]=~~(v*100+.5)),a&&o.length<4&&(o[3]=1),o},TE=function(e){var r=[],a=[],o=-1;return e.split(yo).forEach(function(c){var u=c.match(_l)||[];r.push.apply(r,u),a.push(o+=u.length+1)}),r.c=a,r},hS=function(e,r,a){var o="",c=(e+o).match(yo),u=r?"hsla(":"rgba(",f=0,m,p,v,x;if(!c)return e;if(c=c.map(function(y){return(y=SE(y,r,1))&&u+(r?y[0]+","+y[1]+"%,"+y[2]+"%,"+y[3]:y.join(","))+")"}),a&&(v=TE(e),m=a.c,m.join(o)!==v.c.join(o)))for(p=e.replace(yo,"1").split(_l),x=p.length-1;f<x;f++)o+=p[f]+(~m.indexOf(f)?c.shift()||u+"0,0,0,0)":(v.length?v:c.length?c:a).shift());if(!p)for(p=e.split(yo),x=p.length-1;f<x;f++)o+=p[f]+c[f];return o+p[x]},yo=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in bu)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),L6=/hsl[a]?\(/,jE=function(e){var r=e.join(" "),a;if(yo.lastIndex=0,yo.test(r))return a=L6.test(r),e[1]=hS(e[1],a),e[0]=hS(e[0],a,TE(e[1])),!0},rd,ji=function(){var n=Date.now,e=500,r=33,a=n(),o=a,c=1e3/240,u=c,f=[],m,p,v,x,y,b,j=function T(E){var C=n()-o,M=E===!0,k,z,D,L;if((C>e||C<0)&&(a+=C-r),o+=C,D=o-a,k=D-u,(k>0||M)&&(L=++x.frame,y=D-x.time*1e3,x.time=D=D/1e3,u+=k+(k>=c?4:c-k),z=1),M||(m=p(T)),z)for(b=0;b<f.length;b++)f[b](D,y,L,E)};return x={time:0,frame:0,tick:function(){j(!0)},deltaRatio:function(E){return y/(1e3/(E||60))},wake:function(){nE&&(!Fv&&py()&&(Mr=Fv=window,gy=Mr.document||{},Di.gsap=si,(Mr.gsapVersions||(Mr.gsapVersions=[])).push(si.version),iE(im||Mr.GreenSockGlobals||!Mr.gsap&&Mr||{}),wE.forEach(_E)),v=typeof requestAnimationFrame<"u"&&requestAnimationFrame,m&&x.sleep(),p=v||function(E){return setTimeout(E,u-x.time*1e3+1|0)},rd=1,j(2))},sleep:function(){(v?cancelAnimationFrame:clearTimeout)(m),rd=0,p=nd},lagSmoothing:function(E,C){e=E||1/0,r=Math.min(C||33,e)},fps:function(E){c=1e3/(E||240),u=x.time*1e3+c},add:function(E,C,M){var k=C?function(z,D,L,O){E(z,D,L,O),x.remove(k)}:E;return x.remove(E),f[M?"unshift":"push"](k),Yl(),k},remove:function(E,C){~(C=f.indexOf(E))&&f.splice(C,1)&&b>=C&&b--},_listeners:f},x}(),Yl=function(){return!rd&&ji.wake()},Pe={},U6=/^[\d.\-M][\d.\-,\s]/,B6=/["']/g,V6=function(e){for(var r={},a=e.substr(1,e.length-3).split(":"),o=a[0],c=1,u=a.length,f,m,p;c<u;c++)m=a[c],f=c!==u-1?m.lastIndexOf(","):m.length,p=m.substr(0,f),r[o]=isNaN(p)?p.replace(B6,"").trim():+p,o=m.substr(f+1).trim();return r},$6=function(e){var r=e.indexOf("(")+1,a=e.indexOf(")"),o=e.indexOf("(",r);return e.substring(r,~o&&o<a?e.indexOf(")",a+1):a)},P6=function(e){var r=(e+"").split("("),a=Pe[r[0]];return a&&r.length>1&&a.config?a.config.apply(null,~e.indexOf("{")?[V6(r[1])]:$6(e).split(",").map(lE)):Pe._CE&&U6.test(e)?Pe._CE("",e):a},AE=function(e){return function(r){return 1-e(1-r)}},EE=function n(e,r){for(var a=e._first,o;a;)a instanceof Yn?n(a,r):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==r&&(a.timeline?n(a.timeline,r):(o=a._ease,a._ease=a._yEase,a._yEase=o,a._yoyo=r)),a=a._next},ps=function(e,r){return e&&(Dt(e)?e:Pe[e]||P6(e))||r},js=function(e,r,a,o){a===void 0&&(a=function(m){return 1-r(1-m)}),o===void 0&&(o=function(m){return m<.5?r(m*2)/2:1-r((1-m)*2)/2});var c={easeIn:r,easeOut:a,easeInOut:o},u;return ri(e,function(f){Pe[f]=Di[f]=c,Pe[u=f.toLowerCase()]=a;for(var m in c)Pe[u+(m==="easeIn"?".in":m==="easeOut"?".out":".inOut")]=Pe[f+"."+m]=c[m]}),c},CE=function(e){return function(r){return r<.5?(1-e(1-r*2))/2:.5+e((r-.5)*2)/2}},b0=function n(e,r,a){var o=r>=1?r:1,c=(a||(e?.3:.45))/(r<1?r:1),u=c/Hv*(Math.asin(1/o)||0),f=function(v){return v===1?1:o*Math.pow(2,-10*v)*p6((v-u)*c)+1},m=e==="out"?f:e==="in"?function(p){return 1-f(1-p)}:CE(f);return c=Hv/c,m.config=function(p,v){return n(e,p,v)},m},w0=function n(e,r){r===void 0&&(r=1.70158);var a=function(u){return u?--u*u*((r+1)*u+r)+1:0},o=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:CE(a);return o.config=function(c){return n(e,c)},o};ri("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var r=e<5?e+1:e;js(n+",Power"+(r-1),e?function(a){return Math.pow(a,r)}:function(a){return a},function(a){return 1-Math.pow(1-a,r)},function(a){return a<.5?Math.pow(a*2,r)/2:1-Math.pow((1-a)*2,r)/2})});Pe.Linear.easeNone=Pe.none=Pe.Linear.easeIn;js("Elastic",b0("in"),b0("out"),b0());(function(n,e){var r=1/e,a=2*r,o=2.5*r,c=function(f){return f<r?n*f*f:f<a?n*Math.pow(f-1.5/e,2)+.75:f<o?n*(f-=2.25/e)*f+.9375:n*Math.pow(f-2.625/e,2)+.984375};js("Bounce",function(u){return 1-c(1-u)},c)})(7.5625,2.75);js("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});js("Circ",function(n){return-(ZA(1-n*n)-1)});js("Sine",function(n){return n===1?1:-m6(n*f6)+1});js("Back",w0("in"),w0("out"),w0());Pe.SteppedEase=Pe.steps=Di.SteppedEase={config:function(e,r){e===void 0&&(e=1);var a=1/e,o=e+(r?0:1),c=r?1:0,u=1-Dn;return function(f){return((o*yd(0,u,f)|0)+c)*a}}};Vl.ease=Pe["quad.out"];ri("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return yy+=n+","+n+"Params,"});var ME=function(e,r){this.id=h6++,e._gsap=this,this.target=e,this.harness=r,this.get=r?r.get:oE,this.set=r?r.getSetter:jy},ad=function(){function n(r){this.vars=r,this._delay=+r.delay||0,(this._repeat=r.repeat===1/0?-2:r.repeat||0)&&(this._rDelay=r.repeatDelay||0,this._yoyo=!!r.yoyo||!!r.yoyoEase),this._ts=1,Hl(this,+r.duration,1,1),this.data=r.data,xt&&(this._ctx=xt,xt.data.push(this)),rd||ji.wake()}var e=n.prototype;return e.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},e.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},e.totalDuration=function(a){return arguments.length?(this._dirty=0,Hl(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(a,o){if(Yl(),!arguments.length)return this._tTime;var c=this._dp;if(c&&c.smoothChildTiming&&this._ts){for(km(this,a),!c._dp||c.parent||dE(c,this);c&&c.parent;)c.parent._time!==c._start+(c._ts>=0?c._tTime/c._ts:(c.totalDuration()-c._tTime)/-c._ts)&&c.totalTime(c._tTime,!0),c=c.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&Rr(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===Dn||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),sE(this,a,o)),this},e.time=function(a,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+uS(this))%(this._dur+this._rDelay)||(a?this._dur:0),o):this._time},e.totalProgress=function(a,o){return arguments.length?this.totalTime(this.totalDuration()*a,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(a,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+uS(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(a,o){var c=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*c,o):this._repeat?Pl(this._tTime,c)+1:1},e.timeScale=function(a,o){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===a)return this;var c=this.parent&&this._ts?om(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-1e-8?0:this._rts,this.totalTime(yd(-Math.abs(this._delay),this.totalDuration(),c),o!==!1),Dm(this),_6(this)},e.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Yl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dn&&(this._tTime-=Dn)))),this):this._ps},e.startTime=function(a){if(arguments.length){this._start=a;var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&Rr(o,this,a-this._delay),this}return this._start},e.endTime=function(a){return this._start+(ii(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(a){var o=this.parent||this._dp;return o?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?om(o.rawTime(a),this):this._tTime:this._tTime},e.revert=function(a){a===void 0&&(a=x6);var o=yn;return yn=a,wy(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),yn=o,this},e.globalTime=function(a){for(var o=this,c=arguments.length?a:o.rawTime();o;)c=o._start+c/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(a):c},e.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,dS(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(a){if(arguments.length){var o=this._time;return this._rDelay=a,dS(this),o?this.time(o):this}return this._rDelay},e.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},e.seek=function(a,o){return this.totalTime(Zi(this,a),ii(o))},e.restart=function(a,o){return this.play().totalTime(a?-this._delay:0,ii(o)),this._dur||(this._zTime=-1e-8),this},e.play=function(a,o){return a!=null&&this.seek(a,o),this.reversed(!1).paused(!1)},e.reverse=function(a,o){return a!=null&&this.seek(a||this.totalDuration(),o),this.reversed(!0).paused(!1)},e.pause=function(a,o){return a!=null&&this.seek(a,o),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var a=this.parent||this._dp,o=this._start,c;return!!(!a||this._ts&&this._initted&&a.isActive()&&(c=a.rawTime(!0))>=o&&c<this.endTime(!0)-Dn)},e.eventCallback=function(a,o,c){var u=this.vars;return arguments.length>1?(o?(u[a]=o,c&&(u[a+"Params"]=c),a==="onUpdate"&&(this._onUpdate=o)):delete u[a],this):u[a]},e.then=function(a){var o=this;return new Promise(function(c){var u=Dt(a)?a:cE,f=function(){var p=o.then;o.then=null,Dt(u)&&(u=u(o))&&(u.then||u===o)&&(o.then=p),c(u),o.then=p};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?f():o._prom=f})},e.kill=function(){yu(this)},n}();ki(ad.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Yn=function(n){KA(e,n);function e(a,o){var c;return a===void 0&&(a={}),c=n.call(this,a)||this,c.labels={},c.smoothChildTiming=!!a.smoothChildTiming,c.autoRemoveChildren=!!a.autoRemoveChildren,c._sort=ii(a.sortChildren),wt&&Rr(a.parent||wt,ya(c),o),a.reversed&&c.reverse(),a.paused&&c.paused(!0),a.scrollTrigger&&fE(ya(c),a.scrollTrigger),c}var r=e.prototype;return r.to=function(o,c,u){return Nu(0,arguments,this),this},r.from=function(o,c,u){return Nu(1,arguments,this),this},r.fromTo=function(o,c,u,f){return Nu(2,arguments,this),this},r.set=function(o,c,u){return c.duration=0,c.parent=this,Ou(c).repeatDelay||(c.repeat=0),c.immediateRender=!!c.immediateRender,new qt(o,c,Zi(this,u),1),this},r.call=function(o,c,u){return Rr(this,qt.delayedCall(0,o,c),u)},r.staggerTo=function(o,c,u,f,m,p,v){return u.duration=c,u.stagger=u.stagger||f,u.onComplete=p,u.onCompleteParams=v,u.parent=this,new qt(o,u,Zi(this,m)),this},r.staggerFrom=function(o,c,u,f,m,p,v){return u.runBackwards=1,Ou(u).immediateRender=ii(u.immediateRender),this.staggerTo(o,c,u,f,m,p,v)},r.staggerFromTo=function(o,c,u,f,m,p,v,x){return f.startAt=u,Ou(f).immediateRender=ii(f.immediateRender),this.staggerTo(o,c,f,m,p,v,x)},r.render=function(o,c,u){var f=this._time,m=this._dirty?this.totalDuration():this._tDur,p=this._dur,v=o<=0?0:It(o),x=this._zTime<0!=o<0&&(this._initted||!p),y,b,j,T,E,C,M,k,z,D,L,O;if(this!==wt&&v>m&&o>=0&&(v=m),v!==this._tTime||u||x){if(f!==this._time&&p&&(v+=this._time-f,o+=this._time-f),y=v,z=this._start,k=this._ts,C=!k,x&&(p||(f=this._zTime),(o||!c)&&(this._zTime=o)),this._repeat){if(L=this._yoyo,E=p+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(E*100+o,c,u);if(y=It(v%E),v===m?(T=this._repeat,y=p):(D=It(v/E),T=~~D,T&&T===D&&(y=p,T--),y>p&&(y=p)),D=Pl(this._tTime,E),!f&&this._tTime&&D!==T&&this._tTime-D*E-this._dur<=0&&(D=T),L&&T&1&&(y=p-y,O=1),T!==D&&!this._lock){var U=L&&D&1,H=U===(L&&T&1);if(T<D&&(U=!U),f=U?0:v%p?p:v,this._lock=1,this.render(f||(O?0:It(T*E)),c,!p)._lock=0,this._tTime=v,!c&&this.parent&&Ci(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),f&&f!==this._time||C!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(p=this._dur,m=this._tDur,H&&(this._lock=2,f=U?p:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!C)return this;EE(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=A6(this,It(f),It(y)),M&&(v-=y-(y=M._start))),this._tTime=v,this._time=y,this._act=!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,f=0),!f&&v&&!c&&!D&&(Ci(this,"onStart"),this._tTime!==v))return this;if(y>=f&&o>=0)for(b=this._first;b;){if(j=b._next,(b._act||y>=b._start)&&b._ts&&M!==b){if(b.parent!==this)return this.render(o,c,u);if(b.render(b._ts>0?(y-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(y-b._start)*b._ts,c,u),y!==this._time||!this._ts&&!C){M=0,j&&(v+=this._zTime=-1e-8);break}}b=j}else{b=this._last;for(var W=o<0?o:y;b;){if(j=b._prev,(b._act||W<=b._end)&&b._ts&&M!==b){if(b.parent!==this)return this.render(o,c,u);if(b.render(b._ts>0?(W-b._start)*b._ts:(b._dirty?b.totalDuration():b._tDur)+(W-b._start)*b._ts,c,u||yn&&wy(b)),y!==this._time||!this._ts&&!C){M=0,j&&(v+=this._zTime=W?-1e-8:Dn);break}}b=j}}if(M&&!c&&(this.pause(),M.render(y>=f?0:-1e-8)._zTime=y>=f?1:-1,this._ts))return this._start=z,Dm(this),this.render(o,c,u);this._onUpdate&&!c&&Ci(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&f)&&(z===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((o||!p)&&(v===m&&this._ts>0||!v&&this._ts<0)&&_o(this,1),!c&&!(o<0&&!f)&&(v||f||!m)&&(Ci(this,v===m&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(v<m&&this.timeScale()>0)&&this._prom())))}return this},r.add=function(o,c){var u=this;if(ka(c)||(c=Zi(this,c,o)),!(o instanceof ad)){if(kn(o))return o.forEach(function(f){return u.add(f,c)}),this;if(dn(o))return this.addLabel(o,c);if(Dt(o))o=qt.delayedCall(0,o);else return this}return this!==o?Rr(this,o,c):this},r.getChildren=function(o,c,u,f){o===void 0&&(o=!0),c===void 0&&(c=!0),u===void 0&&(u=!0),f===void 0&&(f=-1e8);for(var m=[],p=this._first;p;)p._start>=f&&(p instanceof qt?c&&m.push(p):(u&&m.push(p),o&&m.push.apply(m,p.getChildren(!0,c,u)))),p=p._next;return m},r.getById=function(o){for(var c=this.getChildren(1,1,1),u=c.length;u--;)if(c[u].vars.id===o)return c[u]},r.remove=function(o){return dn(o)?this.removeLabel(o):Dt(o)?this.killTweensOf(o):(o.parent===this&&Mm(this,o),o===this._recent&&(this._recent=this._last),ms(this))},r.totalTime=function(o,c){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=It(ji.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),n.prototype.totalTime.call(this,o,c),this._forcing=0,this):this._tTime},r.addLabel=function(o,c){return this.labels[o]=Zi(this,c),this},r.removeLabel=function(o){return delete this.labels[o],this},r.addPause=function(o,c,u){var f=qt.delayedCall(0,c||nd,u);return f.data="isPause",this._hasPause=1,Rr(this,f,Zi(this,o))},r.removePause=function(o){var c=this._first;for(o=Zi(this,o);c;)c._start===o&&c.data==="isPause"&&_o(c),c=c._next},r.killTweensOf=function(o,c,u){for(var f=this.getTweensOf(o,u),m=f.length;m--;)uo!==f[m]&&f[m].kill(o,c);return this},r.getTweensOf=function(o,c){for(var u=[],f=tr(o),m=this._first,p=ka(c),v;m;)m instanceof qt?y6(m._targets,f)&&(p?(!uo||m._initted&&m._ts)&&m.globalTime(0)<=c&&m.globalTime(m.totalDuration())>c:!c||m.isActive())&&u.push(m):(v=m.getTweensOf(f,c)).length&&u.push.apply(u,v),m=m._next;return u},r.tweenTo=function(o,c){c=c||{};var u=this,f=Zi(u,o),m=c,p=m.startAt,v=m.onStart,x=m.onStartParams,y=m.immediateRender,b,j=qt.to(u,ki({ease:c.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:c.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale())||Dn,onStart:function(){if(u.pause(),!b){var E=c.duration||Math.abs((f-(p&&"time"in p?p.time:u._time))/u.timeScale());j._dur!==E&&Hl(j,E,0,1).render(j._time,!0,!0),b=1}v&&v.apply(j,x||[])}},c));return y?j.render(0):j},r.tweenFromTo=function(o,c,u){return this.tweenTo(c,ki({startAt:{time:Zi(this,o)}},u))},r.recent=function(){return this._recent},r.nextLabel=function(o){return o===void 0&&(o=this._time),fS(this,Zi(this,o))},r.previousLabel=function(o){return o===void 0&&(o=this._time),fS(this,Zi(this,o),1)},r.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+Dn)},r.shiftChildren=function(o,c,u){u===void 0&&(u=0);for(var f=this._first,m=this.labels,p;f;)f._start>=u&&(f._start+=o,f._end+=o),f=f._next;if(c)for(p in m)m[p]>=u&&(m[p]+=o);return ms(this)},r.invalidate=function(o){var c=this._first;for(this._lock=0;c;)c.invalidate(o),c=c._next;return n.prototype.invalidate.call(this,o)},r.clear=function(o){o===void 0&&(o=!0);for(var c=this._first,u;c;)u=c._next,this.remove(c),c=u;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),ms(this)},r.totalDuration=function(o){var c=0,u=this,f=u._last,m=Br,p,v,x;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-o:o));if(u._dirty){for(x=u.parent;f;)p=f._prev,f._dirty&&f.totalDuration(),v=f._start,v>m&&u._sort&&f._ts&&!u._lock?(u._lock=1,Rr(u,f,v-f._delay,1)._lock=0):m=v,v<0&&f._ts&&(c-=v,(!x&&!u._dp||x&&x.smoothChildTiming)&&(u._start+=v/u._ts,u._time-=v,u._tTime-=v),u.shiftChildren(-v,!1,-1/0),m=0),f._end>c&&f._ts&&(c=f._end),f=p;Hl(u,u===wt&&u._time>c?u._time:c,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(o){if(wt._ts&&(sE(wt,om(o,wt)),aE=ji.frame),ji.frame>=lS){lS+=Mi.autoSleep||120;var c=wt._first;if((!c||!c._ts)&&Mi.autoSleep&&ji._listeners.length<2){for(;c&&!c._ts;)c=c._next;c||ji.sleep()}}},e}(ad);ki(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var H6=function(e,r,a,o,c,u,f){var m=new ai(this._pt,e,r,0,1,NE,null,c),p=0,v=0,x,y,b,j,T,E,C,M;for(m.b=a,m.e=o,a+="",o+="",(C=~o.indexOf("random("))&&(o=id(o)),u&&(M=[a,o],u(M,e,r),a=M[0],o=M[1]),y=a.match(v0)||[];x=v0.exec(o);)j=x[0],T=o.substring(p,x.index),b?b=(b+1)%5:T.substr(-5)==="rgba("&&(b=1),j!==y[v++]&&(E=parseFloat(y[v-1])||0,m._pt={_next:m._pt,p:T||v===1?T:",",s:E,c:j.charAt(1)==="="?Al(E,j)-E:parseFloat(j)-E,m:b&&b<4?Math.round:0},p=v0.lastIndex);return m.c=p<o.length?o.substring(p,o.length):"",m.fp=f,(eE.test(o)||C)&&(m.e=0),this._pt=m,m},_y=function(e,r,a,o,c,u,f,m,p,v){Dt(o)&&(o=o(c||0,e,u));var x=e[r],y=a!=="get"?a:Dt(x)?p?e[r.indexOf("set")||!Dt(e["get"+r.substr(3)])?r:"get"+r.substr(3)](p):e[r]():x,b=Dt(x)?p?I6:zE:Ty,j;if(dn(o)&&(~o.indexOf("random(")&&(o=id(o)),o.charAt(1)==="="&&(j=Al(y,o)+(En(y)||0),(j||j===0)&&(o=j))),!v||y!==o||Zv)return!isNaN(y*o)&&o!==""?(j=new ai(this._pt,e,r,+y||0,o-(y||0),typeof x=="boolean"?W6:OE,0,b),p&&(j.fp=p),f&&j.modifier(f,this,e),this._pt=j):(!x&&!(r in e)&&vy(r,o),H6.call(this,e,r,y,o,b,m||Mi.stringFilter,p))},Y6=function(e,r,a,o,c){if(Dt(e)&&(e=Lu(e,c,r,a,o)),!Ir(e)||e.style&&e.nodeType||kn(e)||QA(e))return dn(e)?Lu(e,c,r,a,o):e;var u={},f;for(f in e)u[f]=Lu(e[f],c,r,a,o);return u},DE=function(e,r,a,o,c,u){var f,m,p,v;if(Si[e]&&(f=new Si[e]).init(c,f.rawVars?r[e]:Y6(r[e],o,c,u,a),a,o,u)!==!1&&(a._pt=m=new ai(a._pt,c,e,0,1,f.render,f,0,f.priority),a!==Sl))for(p=a._ptLookup[a._targets.indexOf(c)],v=f._props.length;v--;)p[f._props[v]]=m;return f},uo,Zv,Sy=function n(e,r,a){var o=e.vars,c=o.ease,u=o.startAt,f=o.immediateRender,m=o.lazy,p=o.onUpdate,v=o.runBackwards,x=o.yoyoEase,y=o.keyframes,b=o.autoRevert,j=e._dur,T=e._startAt,E=e._targets,C=e.parent,M=C&&C.data==="nested"?C.vars.targets:E,k=e._overwrite==="auto"&&!hy,z=e.timeline,D,L,O,U,H,W,ae,Z,se,fe,le,V,G;if(z&&(!y||!c)&&(c="none"),e._ease=ps(c,Vl.ease),e._yEase=x?AE(ps(x===!0?c:x,Vl.ease)):0,x&&e._yoyo&&!e._repeat&&(x=e._yEase,e._yEase=e._ease,e._ease=x),e._from=!z&&!!o.runBackwards,!z||y&&!o.stagger){if(Z=E[0]?hs(E[0]).harness:0,V=Z&&o[Z.prop],D=am(o,xy),T&&(T._zTime<0&&T.progress(1),r<0&&v&&f&&!b?T.render(-1,!0):T.revert(v&&j?Lh:v6),T._lazy=0),u){if(_o(e._startAt=qt.set(E,ki({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:!T&&ii(m),startAt:null,delay:0,onUpdate:p&&function(){return Ci(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,r<0&&(yn||!f&&!b)&&e._startAt.revert(Lh),f&&j&&r<=0&&a<=0){r&&(e._zTime=r);return}}else if(v&&j&&!T){if(r&&(f=!1),O=ki({overwrite:!1,data:"isFromStart",lazy:f&&!T&&ii(m),immediateRender:f,stagger:0,parent:C},D),V&&(O[Z.prop]=V),_o(e._startAt=qt.set(E,O)),e._startAt._dp=0,e._startAt._sat=e,r<0&&(yn?e._startAt.revert(Lh):e._startAt.render(-1,!0)),e._zTime=r,!f)n(e._startAt,Dn,Dn);else if(!r)return}for(e._pt=e._ptCache=0,m=j&&ii(m)||m&&!j,L=0;L<E.length;L++){if(H=E[L],ae=H._gsap||by(E)[L]._gsap,e._ptLookup[L]=fe={},Gv[ae.id]&&xo.length&&rm(),le=M===E?L:M.indexOf(H),Z&&(se=new Z).init(H,V||D,e,le,M)!==!1&&(e._pt=U=new ai(e._pt,H,se.name,0,1,se.render,se,0,se.priority),se._props.forEach(function(ee){fe[ee]=U}),se.priority&&(W=1)),!Z||V)for(O in D)Si[O]&&(se=DE(O,D,e,le,H,M))?se.priority&&(W=1):fe[O]=U=_y.call(e,H,O,"get",D[O],le,M,0,o.stringFilter);e._op&&e._op[L]&&e.kill(H,e._op[L]),k&&e._pt&&(uo=e,wt.killTweensOf(H,fe,e.globalTime(r)),G=!e.parent,uo=0),e._pt&&m&&(Gv[ae.id]=1)}W&&LE(e),e._onInit&&e._onInit(e)}e._onUpdate=p,e._initted=(!e._op||e._pt)&&!G,y&&r<=0&&z.render(Br,!0,!0)},F6=function(e,r,a,o,c,u,f,m){var p=(e._pt&&e._ptCache||(e._ptCache={}))[r],v,x,y,b;if(!p)for(p=e._ptCache[r]=[],y=e._ptLookup,b=e._targets.length;b--;){if(v=y[b][r],v&&v.d&&v.d._pt)for(v=v.d._pt;v&&v.p!==r&&v.fp!==r;)v=v._next;if(!v)return Zv=1,e.vars[r]="+=0",Sy(e,f),Zv=0,m?td(r+" not eligible for reset"):1;p.push(v)}for(b=p.length;b--;)x=p[b],v=x._pt||x,v.s=(o||o===0)&&!c?o:v.s+(o||0)+u*v.c,v.c=a-v.s,x.e&&(x.e=Nt(a)+En(x.e)),x.b&&(x.b=v.s+En(x.b))},G6=function(e,r){var a=e[0]?hs(e[0]).harness:0,o=a&&a.aliases,c,u,f,m;if(!o)return r;c=$l({},r);for(u in o)if(u in c)for(m=o[u].split(","),f=m.length;f--;)c[m[f]]=c[u];return c},q6=function(e,r,a,o){var c=r.ease||o||"power1.inOut",u,f;if(kn(r))f=a[e]||(a[e]=[]),r.forEach(function(m,p){return f.push({t:p/(r.length-1)*100,v:m,e:c})});else for(u in r)f=a[u]||(a[u]=[]),u==="ease"||f.push({t:parseFloat(e),v:r[u],e:c})},Lu=function(e,r,a,o,c){return Dt(e)?e.call(r,a,o,c):dn(e)&&~e.indexOf("random(")?id(e):e},kE=yy+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",RE={};ri(kE+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return RE[n]=1});var qt=function(n){KA(e,n);function e(a,o,c,u){var f;typeof o=="number"&&(c.duration=o,o=c,c=null),f=n.call(this,u?o:Ou(o))||this;var m=f.vars,p=m.duration,v=m.delay,x=m.immediateRender,y=m.stagger,b=m.overwrite,j=m.keyframes,T=m.defaults,E=m.scrollTrigger,C=m.yoyoEase,M=o.parent||wt,k=(kn(a)||QA(a)?ka(a[0]):"length"in o)?[a]:tr(a),z,D,L,O,U,H,W,ae;if(f._targets=k.length?by(k):td("GSAP target "+a+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=b,j||y||Vf(p)||Vf(v)){if(o=f.vars,z=f.timeline=new Yn({data:"nested",defaults:T||{},targets:M&&M.data==="nested"?M.vars.targets:k}),z.kill(),z.parent=z._dp=ya(f),z._start=0,y||Vf(p)||Vf(v)){if(O=k.length,W=y&&gE(y),Ir(y))for(U in y)~kE.indexOf(U)&&(ae||(ae={}),ae[U]=y[U]);for(D=0;D<O;D++)L=am(o,RE),L.stagger=0,C&&(L.yoyoEase=C),ae&&$l(L,ae),H=k[D],L.duration=+Lu(p,ya(f),D,H,k),L.delay=(+Lu(v,ya(f),D,H,k)||0)-f._delay,!y&&O===1&&L.delay&&(f._delay=v=L.delay,f._start+=v,L.delay=0),z.to(H,L,W?W(D,H,k):0),z._ease=Pe.none;z.duration()?p=v=0:f.timeline=0}else if(j){Ou(ki(z.vars.defaults,{ease:"none"})),z._ease=ps(j.ease||o.ease||"none");var Z=0,se,fe,le;if(kn(j))j.forEach(function(V){return z.to(k,V,">")}),z.duration();else{L={};for(U in j)U==="ease"||U==="easeEach"||q6(U,j[U],L,j.easeEach);for(U in L)for(se=L[U].sort(function(V,G){return V.t-G.t}),Z=0,D=0;D<se.length;D++)fe=se[D],le={ease:fe.e,duration:(fe.t-(D?se[D-1].t:0))/100*p},le[U]=fe.v,z.to(k,le,Z),Z+=le.duration;z.duration()<p&&z.to({},{duration:p-z.duration()})}}p||f.duration(p=z.duration())}else f.timeline=0;return b===!0&&!hy&&(uo=ya(f),wt.killTweensOf(k),uo=0),Rr(M,ya(f),c),o.reversed&&f.reverse(),o.paused&&f.paused(!0),(x||!p&&!j&&f._start===It(M._time)&&ii(x)&&S6(ya(f))&&M.data!=="nested")&&(f._tTime=-1e-8,f.render(Math.max(0,-v)||0)),E&&fE(ya(f),E),f}var r=e.prototype;return r.render=function(o,c,u){var f=this._time,m=this._tDur,p=this._dur,v=o<0,x=o>m-Dn&&!v?m:o<Dn?0:o,y,b,j,T,E,C,M,k,z;if(!p)j6(this,o,c,u);else if(x!==this._tTime||!o||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==v||this._lazy){if(y=x,k=this.timeline,this._repeat){if(T=p+this._rDelay,this._repeat<-1&&v)return this.totalTime(T*100+o,c,u);if(y=It(x%T),x===m?(j=this._repeat,y=p):(E=It(x/T),j=~~E,j&&j===E?(y=p,j--):y>p&&(y=p)),C=this._yoyo&&j&1,C&&(z=this._yEase,y=p-y),E=Pl(this._tTime,T),y===f&&!u&&this._initted&&j===E)return this._tTime=x,this;j!==E&&(k&&this._yEase&&EE(k,C),this.vars.repeatRefresh&&!C&&!this._lock&&y!==T&&this._initted&&(this._lock=u=1,this.render(It(T*j),!0).invalidate()._lock=0))}if(!this._initted){if(hE(this,v?o:y,u,c,x))return this._tTime=0,this;if(f!==this._time&&!(u&&this.vars.repeatRefresh&&j!==E))return this;if(p!==this._dur)return this.render(o,c,u)}if(this._tTime=x,this._time=y,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(z||this._ease)(y/p),this._from&&(this.ratio=M=1-M),!f&&x&&!c&&!E&&(Ci(this,"onStart"),this._tTime!==x))return this;for(b=this._pt;b;)b.r(M,b.d),b=b._next;k&&k.render(o<0?o:k._dur*k._ease(y/this._dur),c,u)||this._startAt&&(this._zTime=o),this._onUpdate&&!c&&(v&&qv(this,o,c,u),Ci(this,"onUpdate")),this._repeat&&j!==E&&this.vars.onRepeat&&!c&&this.parent&&Ci(this,"onRepeat"),(x===this._tDur||!x)&&this._tTime===x&&(v&&!this._onUpdate&&qv(this,o,!0,!0),(o||!p)&&(x===this._tDur&&this._ts>0||!x&&this._ts<0)&&_o(this,1),!c&&!(v&&!f)&&(x||f||C)&&(Ci(this,x===m?"onComplete":"onReverseComplete",!0),this._prom&&!(x<m&&this.timeScale()>0)&&this._prom()))}return this},r.targets=function(){return this._targets},r.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),n.prototype.invalidate.call(this,o)},r.resetTo=function(o,c,u,f,m){rd||ji.wake(),this._ts||this.play();var p=Math.min(this._dur,(this._dp._time-this._start)*this._ts),v;return this._initted||Sy(this,p),v=this._ease(p/this._dur),F6(this,o,c,u,f,v,p,m)?this.resetTo(o,c,u,f,1):(km(this,0),this.parent||uE(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},r.kill=function(o,c){if(c===void 0&&(c="all"),!o&&(!c||c==="all"))return this._lazy=this._pt=0,this.parent?yu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!yn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(o,c,uo&&uo.vars.overwrite!==!0)._first||yu(this),this.parent&&u!==this.timeline.totalDuration()&&Hl(this,this._dur*this.timeline._tDur/u,0,1),this}var f=this._targets,m=o?tr(o):f,p=this._ptLookup,v=this._pt,x,y,b,j,T,E,C;if((!c||c==="all")&&w6(f,m))return c==="all"&&(this._pt=0),yu(this);for(x=this._op=this._op||[],c!=="all"&&(dn(c)&&(T={},ri(c,function(M){return T[M]=1}),c=T),c=G6(f,c)),C=f.length;C--;)if(~m.indexOf(f[C])){y=p[C],c==="all"?(x[C]=c,j=y,b={}):(b=x[C]=x[C]||{},j=c);for(T in j)E=y&&y[T],E&&((!("kill"in E.d)||E.d.kill(T)===!0)&&Mm(this,E,"_pt"),delete y[T]),b!=="all"&&(b[T]=1)}return this._initted&&!this._pt&&v&&yu(this),this},e.to=function(o,c){return new e(o,c,arguments[2])},e.from=function(o,c){return Nu(1,arguments)},e.delayedCall=function(o,c,u,f){return new e(c,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:c,onReverseComplete:c,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:f})},e.fromTo=function(o,c,u){return Nu(2,arguments)},e.set=function(o,c){return c.duration=0,c.repeatDelay||(c.repeat=0),new e(o,c)},e.killTweensOf=function(o,c,u){return wt.killTweensOf(o,c,u)},e}(ad);ki(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ri("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Yn,r=Xv.call(arguments,0);return r.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,r)}});var Ty=function(e,r,a){return e[r]=a},zE=function(e,r,a){return e[r](a)},I6=function(e,r,a,o){return e[r](o.fp,a)},X6=function(e,r,a){return e.setAttribute(r,a)},jy=function(e,r){return Dt(e[r])?zE:my(e[r])&&e.setAttribute?X6:Ty},OE=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e6)/1e6,r)},W6=function(e,r){return r.set(r.t,r.p,!!(r.s+r.c*e),r)},NE=function(e,r){var a=r._pt,o="";if(!e&&r.b)o=r.b;else if(e===1&&r.e)o=r.e;else{for(;a;)o=a.p+(a.m?a.m(a.s+a.c*e):Math.round((a.s+a.c*e)*1e4)/1e4)+o,a=a._next;o+=r.c}r.set(r.t,r.p,o,r)},Ay=function(e,r){for(var a=r._pt;a;)a.r(e,a.d),a=a._next},K6=function(e,r,a,o){for(var c=this._pt,u;c;)u=c._next,c.p===o&&c.modifier(e,r,a),c=u},Z6=function(e){for(var r=this._pt,a,o;r;)o=r._next,r.p===e&&!r.op||r.op===e?Mm(this,r,"_pt"):r.dep||(a=1),r=o;return!a},Q6=function(e,r,a,o){o.mSet(e,r,o.m.call(o.tween,a,o.mt),o)},LE=function(e){for(var r=e._pt,a,o,c,u;r;){for(a=r._next,o=c;o&&o.pr>r.pr;)o=o._next;(r._prev=o?o._prev:u)?r._prev._next=r:c=r,(r._next=o)?o._prev=r:u=r,r=a}e._pt=c},ai=function(){function n(r,a,o,c,u,f,m,p,v){this.t=a,this.s=c,this.c=u,this.p=o,this.r=f||OE,this.d=m||this,this.set=p||Ty,this.pr=v||0,this._next=r,r&&(r._prev=this)}var e=n.prototype;return e.modifier=function(a,o,c){this.mSet=this.mSet||this.set,this.set=Q6,this.m=a,this.mt=c,this.tween=o},n}();ri(yy+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return xy[n]=1});Di.TweenMax=Di.TweenLite=qt;Di.TimelineLite=Di.TimelineMax=Yn;wt=new Yn({sortChildren:!1,defaults:Vl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=jE;var gs=[],Bh={},J6=[],mS=0,e8=0,_0=function(e){return(Bh[e]||J6).map(function(r){return r()})},Qv=function(){var e=Date.now(),r=[];e-mS>2&&(_0("matchMediaInit"),gs.forEach(function(a){var o=a.queries,c=a.conditions,u,f,m,p;for(f in o)u=Mr.matchMedia(o[f]).matches,u&&(m=1),u!==c[f]&&(c[f]=u,p=1);p&&(a.revert(),m&&r.push(a))}),_0("matchMediaRevert"),r.forEach(function(a){return a.onMatch(a,function(o){return a.add(null,o)})}),mS=e,_0("matchMedia"))},UE=function(){function n(r,a){this.selector=a&&Wv(a),this.data=[],this._r=[],this.isReverted=!1,this.id=e8++,r&&this.add(r)}var e=n.prototype;return e.add=function(a,o,c){Dt(a)&&(c=o,o=a,a=Dt);var u=this,f=function(){var p=xt,v=u.selector,x;return p&&p!==u&&p.data.push(u),c&&(u.selector=Wv(c)),xt=u,x=o.apply(u,arguments),Dt(x)&&u._r.push(x),xt=p,u.selector=v,u.isReverted=!1,x};return u.last=f,a===Dt?f(u,function(m){return u.add(null,m)}):a?u[a]=f:f},e.ignore=function(a){var o=xt;xt=null,a(this),xt=o},e.getTweens=function(){var a=[];return this.data.forEach(function(o){return o instanceof n?a.push.apply(a,o.getTweens()):o instanceof qt&&!(o.parent&&o.parent.data==="nested")&&a.push(o)}),a},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(a,o){var c=this;if(a?function(){for(var f=c.getTweens(),m=c.data.length,p;m--;)p=c.data[m],p.data==="isFlip"&&(p.revert(),p.getChildren(!0,!0,!1).forEach(function(v){return f.splice(f.indexOf(v),1)}));for(f.map(function(v){return{g:v._dur||v._delay||v._sat&&!v._sat.vars.immediateRender?v.globalTime(0):-1/0,t:v}}).sort(function(v,x){return x.g-v.g||-1/0}).forEach(function(v){return v.t.revert(a)}),m=c.data.length;m--;)p=c.data[m],p instanceof Yn?p.data!=="nested"&&(p.scrollTrigger&&p.scrollTrigger.revert(),p.kill()):!(p instanceof qt)&&p.revert&&p.revert(a);c._r.forEach(function(v){return v(a,c)}),c.isReverted=!0}():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),o)for(var u=gs.length;u--;)gs[u].id===this.id&&gs.splice(u,1)},e.revert=function(a){this.kill(a||{})},n}(),t8=function(){function n(r){this.contexts=[],this.scope=r,xt&&xt.data.push(this)}var e=n.prototype;return e.add=function(a,o,c){Ir(a)||(a={matches:a});var u=new UE(0,c||this.scope),f=u.conditions={},m,p,v;xt&&!u.selector&&(u.selector=xt.selector),this.contexts.push(u),o=u.add("onMatch",o),u.queries=a;for(p in a)p==="all"?v=1:(m=Mr.matchMedia(a[p]),m&&(gs.indexOf(u)<0&&gs.push(u),(f[p]=m.matches)&&(v=1),m.addListener?m.addListener(Qv):m.addEventListener("change",Qv)));return v&&o(u,function(x){return u.add(null,x)}),this},e.revert=function(a){this.kill(a||{})},e.kill=function(a){this.contexts.forEach(function(o){return o.kill(a,!0)})},n}(),sm={registerPlugin:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];r.forEach(function(o){return _E(o)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,r){return wt.getTweensOf(e,r)},getProperty:function(e,r,a,o){dn(e)&&(e=tr(e)[0]);var c=hs(e||{}).get,u=a?cE:lE;return a==="native"&&(a=""),e&&(r?u((Si[r]&&Si[r].get||c)(e,r,a,o)):function(f,m,p){return u((Si[f]&&Si[f].get||c)(e,f,m,p))})},quickSetter:function(e,r,a){if(e=tr(e),e.length>1){var o=e.map(function(v){return si.quickSetter(v,r,a)}),c=o.length;return function(v){for(var x=c;x--;)o[x](v)}}e=e[0]||{};var u=Si[r],f=hs(e),m=f.harness&&(f.harness.aliases||{})[r]||r,p=u?function(v){var x=new u;Sl._pt=0,x.init(e,a?v+a:v,Sl,0,[e]),x.render(1,x),Sl._pt&&Ay(1,Sl)}:f.set(e,m);return u?p:function(v){return p(e,m,a?v+a:v,f,1)}},quickTo:function(e,r,a){var o,c=si.to(e,ki((o={},o[r]="+=0.1",o.paused=!0,o.stagger=0,o),a||{})),u=function(m,p,v){return c.resetTo(r,m,p,v)};return u.tween=c,u},isTweening:function(e){return wt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ps(e.ease,Vl.ease)),cS(Vl,e||{})},config:function(e){return cS(Mi,e||{})},registerEffect:function(e){var r=e.name,a=e.effect,o=e.plugins,c=e.defaults,u=e.extendTimeline;(o||"").split(",").forEach(function(f){return f&&!Si[f]&&!Di[f]&&td(r+" effect requires "+f+" plugin.")}),x0[r]=function(f,m,p){return a(tr(f),ki(m||{},c),p)},u&&(Yn.prototype[r]=function(f,m,p){return this.add(x0[r](f,Ir(m)?m:(p=m)&&{},this),p)})},registerEase:function(e,r){Pe[e]=ps(r)},parseEase:function(e,r){return arguments.length?ps(e,r):Pe},getById:function(e){return wt.getById(e)},exportRoot:function(e,r){e===void 0&&(e={});var a=new Yn(e),o,c;for(a.smoothChildTiming=ii(e.smoothChildTiming),wt.remove(a),a._dp=0,a._time=a._tTime=wt._time,o=wt._first;o;)c=o._next,(r||!(!o._dur&&o instanceof qt&&o.vars.onComplete===o._targets[0]))&&Rr(a,o,o._start-o._delay),o=c;return Rr(wt,a,0),a},context:function(e,r){return e?new UE(e,r):xt},matchMedia:function(e){return new t8(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var r=e.conditions,a,o;for(o in r)r[o]&&(r[o]=!1,a=1);a&&e.revert()})||Qv()},addEventListener:function(e,r){var a=Bh[e]||(Bh[e]=[]);~a.indexOf(r)||a.push(r)},removeEventListener:function(e,r){var a=Bh[e],o=a&&a.indexOf(r);o>=0&&a.splice(o,1)},utils:{wrap:z6,wrapYoyo:O6,distribute:gE,random:xE,snap:vE,normalize:R6,getUnit:En,clamp:C6,splitColor:SE,toArray:tr,selector:Wv,mapRange:bE,pipe:D6,unitize:k6,interpolate:N6,shuffle:pE},install:iE,effects:x0,ticker:ji,updateRoot:Yn.updateRoot,plugins:Si,globalTimeline:wt,core:{PropTween:ai,globals:rE,Tween:qt,Timeline:Yn,Animation:ad,getCache:hs,_removeLinkedListItem:Mm,reverting:function(){return yn},context:function(e){return e&&xt&&(xt.data.push(e),e._ctx=xt),xt},suppressOverwrites:function(e){return hy=e}}};ri("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return sm[n]=qt[n]});ji.add(Yn.updateRoot);Sl=sm.to({},{duration:0});var n8=function(e,r){for(var a=e._pt;a&&a.p!==r&&a.op!==r&&a.fp!==r;)a=a._next;return a},i8=function(e,r){var a=e._targets,o,c,u;for(o in r)for(c=a.length;c--;)u=e._ptLookup[c][o],u&&(u=u.d)&&(u._pt&&(u=n8(u,o)),u&&u.modifier&&u.modifier(r[o],e,a[c],o))},S0=function(e,r){return{name:e,headless:1,rawVars:1,init:function(o,c,u){u._onInit=function(f){var m,p;if(dn(c)&&(m={},ri(c,function(v){return m[v]=1}),c=m),r){m={};for(p in c)m[p]=r(c[p]);c=m}i8(f,c)}}}},si=sm.registerPlugin({name:"attr",init:function(e,r,a,o,c){var u,f,m;this.tween=a;for(u in r)m=e.getAttribute(u)||"",f=this.add(e,"setAttribute",(m||0)+"",r[u],o,c,0,0,u),f.op=u,f.b=m,this._props.push(u)},render:function(e,r){for(var a=r._pt;a;)yn?a.set(a.t,a.p,a.b,a):a.r(e,a.d),a=a._next}},{name:"endArray",headless:1,init:function(e,r){for(var a=r.length;a--;)this.add(e,a,e[a]||0,r[a],0,0,0,0,0,1)}},S0("roundProps",Kv),S0("modifiers"),S0("snap",vE))||sm;qt.version=Yn.version=si.version="3.13.0";nE=1;py()&&Yl();Pe.Power0;Pe.Power1;Pe.Power2;Pe.Power3;Pe.Power4;Pe.Linear;Pe.Quad;Pe.Cubic;Pe.Quart;Pe.Quint;Pe.Strong;Pe.Elastic;Pe.Back;Pe.SteppedEase;Pe.Bounce;Pe.Sine;Pe.Expo;Pe.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var pS,fo,El,Ey,ss,gS,Cy,r8=function(){return typeof window<"u"},Ra={},ts=180/Math.PI,Cl=Math.PI/180,sl=Math.atan2,vS=1e8,My=/([A-Z])/g,a8=/(left|right|width|margin|padding|x)/i,o8=/[\s,\(]\S/,zr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jv=function(e,r){return r.set(r.t,r.p,Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},s8=function(e,r){return r.set(r.t,r.p,e===1?r.e:Math.round((r.s+r.c*e)*1e4)/1e4+r.u,r)},l8=function(e,r){return r.set(r.t,r.p,e?Math.round((r.s+r.c*e)*1e4)/1e4+r.u:r.b,r)},c8=function(e,r){var a=r.s+r.c*e;r.set(r.t,r.p,~~(a+(a<0?-.5:.5))+r.u,r)},BE=function(e,r){return r.set(r.t,r.p,e?r.e:r.b,r)},VE=function(e,r){return r.set(r.t,r.p,e!==1?r.b:r.e,r)},u8=function(e,r,a){return e.style[r]=a},d8=function(e,r,a){return e.style.setProperty(r,a)},f8=function(e,r,a){return e._gsap[r]=a},h8=function(e,r,a){return e._gsap.scaleX=e._gsap.scaleY=a},m8=function(e,r,a,o,c){var u=e._gsap;u.scaleX=u.scaleY=a,u.renderTransform(c,u)},p8=function(e,r,a,o,c){var u=e._gsap;u[r]=a,u.renderTransform(c,u)},St="transform",oi=St+"Origin",g8=function n(e,r){var a=this,o=this.target,c=o.style,u=o._gsap;if(e in Ra&&c){if(this.tfm=this.tfm||{},e!=="transform")e=zr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(f){return a.tfm[f]=ba(o,f)}):this.tfm[e]=u.x?u[e]:ba(o,e),e===oi&&(this.tfm.zOrigin=u.zOrigin);else return zr.transform.split(",").forEach(function(f){return n.call(a,f,r)});if(this.props.indexOf(St)>=0)return;u.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(oi,r,"")),e=St}(c||r)&&this.props.push(e,r,c[e])},$E=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},v8=function(){var e=this.props,r=this.target,a=r.style,o=r._gsap,c,u;for(c=0;c<e.length;c+=3)e[c+1]?e[c+1]===2?r[e[c]](e[c+2]):r[e[c]]=e[c+2]:e[c+2]?a[e[c]]=e[c+2]:a.removeProperty(e[c].substr(0,2)==="--"?e[c]:e[c].replace(My,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)o[u]=this.tfm[u];o.svg&&(o.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),c=Cy(),(!c||!c.isStart)&&!a[St]&&($E(a),o.zOrigin&&a[oi]&&(a[oi]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},PE=function(e,r){var a={target:e,props:[],revert:v8,save:g8};return e._gsap||si.core.getCache(e),r&&e.style&&e.nodeType&&r.split(",").forEach(function(o){return a.save(o)}),a},HE,ex=function(e,r){var a=fo.createElementNS?fo.createElementNS((r||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):fo.createElement(e);return a&&a.style?a:fo.createElement(e)},nr=function n(e,r,a){var o=getComputedStyle(e);return o[r]||o.getPropertyValue(r.replace(My,"-$1").toLowerCase())||o.getPropertyValue(r)||!a&&n(e,Fl(r)||r,1)||""},xS="O,Moz,ms,Ms,Webkit".split(","),Fl=function(e,r,a){var o=r||ss,c=o.style,u=5;if(e in c&&!a)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(xS[u]+e in c););return u<0?null:(u===3?"ms":u>=0?xS[u]:"")+e},tx=function(){r8()&&window.document&&(pS=window,fo=pS.document,El=fo.documentElement,ss=ex("div")||{style:{}},ex("div"),St=Fl(St),oi=St+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",HE=!!Fl("perspective"),Cy=si.core.reverting,Ey=1)},yS=function(e){var r=e.ownerSVGElement,a=ex("svg",r&&r.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=e.cloneNode(!0),c;o.style.display="block",a.appendChild(o),El.appendChild(a);try{c=o.getBBox()}catch{}return a.removeChild(o),El.removeChild(a),c},bS=function(e,r){for(var a=r.length;a--;)if(e.hasAttribute(r[a]))return e.getAttribute(r[a])},YE=function(e){var r,a;try{r=e.getBBox()}catch{r=yS(e),a=1}return r&&(r.width||r.height)||a||(r=yS(e)),r&&!r.width&&!r.x&&!r.y?{x:+bS(e,["x","cx","x1"])||0,y:+bS(e,["y","cy","y1"])||0,width:0,height:0}:r},FE=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&YE(e))},ws=function(e,r){if(r){var a=e.style,o;r in Ra&&r!==oi&&(r=St),a.removeProperty?(o=r.substr(0,2),(o==="ms"||r.substr(0,6)==="webkit")&&(r="-"+r),a.removeProperty(o==="--"?r:r.replace(My,"-$1").toLowerCase())):a.removeAttribute(r)}},ho=function(e,r,a,o,c,u){var f=new ai(e._pt,r,a,0,1,u?VE:BE);return e._pt=f,f.b=o,f.e=c,e._props.push(a),f},wS={deg:1,rad:1,turn:1},x8={grid:1,flex:1},So=function n(e,r,a,o){var c=parseFloat(a)||0,u=(a+"").trim().substr((c+"").length)||"px",f=ss.style,m=a8.test(r),p=e.tagName.toLowerCase()==="svg",v=(p?"client":"offset")+(m?"Width":"Height"),x=100,y=o==="px",b=o==="%",j,T,E,C;if(o===u||!c||wS[o]||wS[u])return c;if(u!=="px"&&!y&&(c=n(e,r,a,"px")),C=e.getCTM&&FE(e),(b||u==="%")&&(Ra[r]||~r.indexOf("adius")))return j=C?e.getBBox()[m?"width":"height"]:e[v],Nt(b?c/j*x:c/100*j);if(f[m?"width":"height"]=x+(y?u:o),T=o!=="rem"&&~r.indexOf("adius")||o==="em"&&e.appendChild&&!p?e:e.parentNode,C&&(T=(e.ownerSVGElement||{}).parentNode),(!T||T===fo||!T.appendChild)&&(T=fo.body),E=T._gsap,E&&b&&E.width&&m&&E.time===ji.time&&!E.uncache)return Nt(c/E.width*x);if(b&&(r==="height"||r==="width")){var M=e.style[r];e.style[r]=x+o,j=e[v],M?e.style[r]=M:ws(e,r)}else(b||u==="%")&&!x8[nr(T,"display")]&&(f.position=nr(e,"position")),T===e&&(f.position="static"),T.appendChild(ss),j=ss[v],T.removeChild(ss),f.position="absolute";return m&&b&&(E=hs(T),E.time=ji.time,E.width=T[v]),Nt(y?j*c/x:j&&c?x/j*c:0)},ba=function(e,r,a,o){var c;return Ey||tx(),r in zr&&r!=="transform"&&(r=zr[r],~r.indexOf(",")&&(r=r.split(",")[0])),Ra[r]&&r!=="transform"?(c=sd(e,o),c=r!=="transformOrigin"?c[r]:c.svg?c.origin:cm(nr(e,oi))+" "+c.zOrigin+"px"):(c=e.style[r],(!c||c==="auto"||o||~(c+"").indexOf("calc("))&&(c=lm[r]&&lm[r](e,r,a)||nr(e,r)||oE(e,r)||(r==="opacity"?1:0))),a&&!~(c+"").trim().indexOf(" ")?So(e,r,c,a)+a:c},y8=function(e,r,a,o){if(!a||a==="none"){var c=Fl(r,e,1),u=c&&nr(e,c,1);u&&u!==a?(r=c,a=u):r==="borderColor"&&(a=nr(e,"borderTopColor"))}var f=new ai(this._pt,e.style,r,0,1,NE),m=0,p=0,v,x,y,b,j,T,E,C,M,k,z,D;if(f.b=a,f.e=o,a+="",o+="",o.substring(0,6)==="var(--"&&(o=nr(e,o.substring(4,o.indexOf(")")))),o==="auto"&&(T=e.style[r],e.style[r]=o,o=nr(e,r)||o,T?e.style[r]=T:ws(e,r)),v=[a,o],jE(v),a=v[0],o=v[1],y=a.match(_l)||[],D=o.match(_l)||[],D.length){for(;x=_l.exec(o);)E=x[0],M=o.substring(m,x.index),j?j=(j+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(j=1),E!==(T=y[p++]||"")&&(b=parseFloat(T)||0,z=T.substr((b+"").length),E.charAt(1)==="="&&(E=Al(b,E)+z),C=parseFloat(E),k=E.substr((C+"").length),m=_l.lastIndex-k.length,k||(k=k||Mi.units[r]||z,m===o.length&&(o+=k,f.e+=k)),z!==k&&(b=So(e,r,T,k)||0),f._pt={_next:f._pt,p:M||p===1?M:",",s:b,c:C-b,m:j&&j<4||r==="zIndex"?Math.round:0});f.c=m<o.length?o.substring(m,o.length):""}else f.r=r==="display"&&o==="none"?VE:BE;return eE.test(o)&&(f.e=0),this._pt=f,f},_S={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},b8=function(e){var r=e.split(" "),a=r[0],o=r[1]||"50%";return(a==="top"||a==="bottom"||o==="left"||o==="right")&&(e=a,a=o,o=e),r[0]=_S[a]||a,r[1]=_S[o]||o,r.join(" ")},w8=function(e,r){if(r.tween&&r.tween._time===r.tween._dur){var a=r.t,o=a.style,c=r.u,u=a._gsap,f,m,p;if(c==="all"||c===!0)o.cssText="",m=1;else for(c=c.split(","),p=c.length;--p>-1;)f=c[p],Ra[f]&&(m=1,f=f==="transformOrigin"?oi:St),ws(a,f);m&&(ws(a,St),u&&(u.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",sd(a,1),u.uncache=1,$E(o)))}},lm={clearProps:function(e,r,a,o,c){if(c.data!=="isFromStart"){var u=e._pt=new ai(e._pt,r,a,0,0,w8);return u.u=o,u.pr=-10,u.tween=c,e._props.push(a),1}}},od=[1,0,0,1,0,0],GE={},qE=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},SS=function(e){var r=nr(e,St);return qE(r)?od:r.substr(7).match(JA).map(Nt)},Dy=function(e,r){var a=e._gsap||hs(e),o=e.style,c=SS(e),u,f,m,p;return a.svg&&e.getAttribute("transform")?(m=e.transform.baseVal.consolidate().matrix,c=[m.a,m.b,m.c,m.d,m.e,m.f],c.join(",")==="1,0,0,1,0,0"?od:c):(c===od&&!e.offsetParent&&e!==El&&!a.svg&&(m=o.display,o.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(p=1,f=e.nextElementSibling,El.appendChild(e)),c=SS(e),m?o.display=m:ws(e,"display"),p&&(f?u.insertBefore(e,f):u?u.appendChild(e):El.removeChild(e))),r&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},nx=function(e,r,a,o,c,u){var f=e._gsap,m=c||Dy(e,!0),p=f.xOrigin||0,v=f.yOrigin||0,x=f.xOffset||0,y=f.yOffset||0,b=m[0],j=m[1],T=m[2],E=m[3],C=m[4],M=m[5],k=r.split(" "),z=parseFloat(k[0])||0,D=parseFloat(k[1])||0,L,O,U,H;a?m!==od&&(O=b*E-j*T)&&(U=z*(E/O)+D*(-T/O)+(T*M-E*C)/O,H=z*(-j/O)+D*(b/O)-(b*M-j*C)/O,z=U,D=H):(L=YE(e),z=L.x+(~k[0].indexOf("%")?z/100*L.width:z),D=L.y+(~(k[1]||k[0]).indexOf("%")?D/100*L.height:D)),o||o!==!1&&f.smooth?(C=z-p,M=D-v,f.xOffset=x+(C*b+M*T)-C,f.yOffset=y+(C*j+M*E)-M):f.xOffset=f.yOffset=0,f.xOrigin=z,f.yOrigin=D,f.smooth=!!o,f.origin=r,f.originIsAbsolute=!!a,e.style[oi]="0px 0px",u&&(ho(u,f,"xOrigin",p,z),ho(u,f,"yOrigin",v,D),ho(u,f,"xOffset",x,f.xOffset),ho(u,f,"yOffset",y,f.yOffset)),e.setAttribute("data-svg-origin",z+" "+D)},sd=function(e,r){var a=e._gsap||new ME(e);if("x"in a&&!r&&!a.uncache)return a;var o=e.style,c=a.scaleX<0,u="px",f="deg",m=getComputedStyle(e),p=nr(e,oi)||"0",v,x,y,b,j,T,E,C,M,k,z,D,L,O,U,H,W,ae,Z,se,fe,le,V,G,ee,re,S,I,te,ne,oe,ge;return v=x=y=T=E=C=M=k=z=0,b=j=1,a.svg=!!(e.getCTM&&FE(e)),m.translate&&((m.translate!=="none"||m.scale!=="none"||m.rotate!=="none")&&(o[St]=(m.translate!=="none"?"translate3d("+(m.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(m.rotate!=="none"?"rotate("+m.rotate+") ":"")+(m.scale!=="none"?"scale("+m.scale.split(" ").join(",")+") ":"")+(m[St]!=="none"?m[St]:"")),o.scale=o.rotate=o.translate="none"),O=Dy(e,a.svg),a.svg&&(a.uncache?(ee=e.getBBox(),p=a.xOrigin-ee.x+"px "+(a.yOrigin-ee.y)+"px",G=""):G=!r&&e.getAttribute("data-svg-origin"),nx(e,G||p,!!G||a.originIsAbsolute,a.smooth!==!1,O)),D=a.xOrigin||0,L=a.yOrigin||0,O!==od&&(ae=O[0],Z=O[1],se=O[2],fe=O[3],v=le=O[4],x=V=O[5],O.length===6?(b=Math.sqrt(ae*ae+Z*Z),j=Math.sqrt(fe*fe+se*se),T=ae||Z?sl(Z,ae)*ts:0,M=se||fe?sl(se,fe)*ts+T:0,M&&(j*=Math.abs(Math.cos(M*Cl))),a.svg&&(v-=D-(D*ae+L*se),x-=L-(D*Z+L*fe))):(ge=O[6],ne=O[7],S=O[8],I=O[9],te=O[10],oe=O[11],v=O[12],x=O[13],y=O[14],U=sl(ge,te),E=U*ts,U&&(H=Math.cos(-U),W=Math.sin(-U),G=le*H+S*W,ee=V*H+I*W,re=ge*H+te*W,S=le*-W+S*H,I=V*-W+I*H,te=ge*-W+te*H,oe=ne*-W+oe*H,le=G,V=ee,ge=re),U=sl(-se,te),C=U*ts,U&&(H=Math.cos(-U),W=Math.sin(-U),G=ae*H-S*W,ee=Z*H-I*W,re=se*H-te*W,oe=fe*W+oe*H,ae=G,Z=ee,se=re),U=sl(Z,ae),T=U*ts,U&&(H=Math.cos(U),W=Math.sin(U),G=ae*H+Z*W,ee=le*H+V*W,Z=Z*H-ae*W,V=V*H-le*W,ae=G,le=ee),E&&Math.abs(E)+Math.abs(T)>359.9&&(E=T=0,C=180-C),b=Nt(Math.sqrt(ae*ae+Z*Z+se*se)),j=Nt(Math.sqrt(V*V+ge*ge)),U=sl(le,V),M=Math.abs(U)>2e-4?U*ts:0,z=oe?1/(oe<0?-oe:oe):0),a.svg&&(G=e.getAttribute("transform"),a.forceCSS=e.setAttribute("transform","")||!qE(nr(e,St)),G&&e.setAttribute("transform",G))),Math.abs(M)>90&&Math.abs(M)<270&&(c?(b*=-1,M+=T<=0?180:-180,T+=T<=0?180:-180):(j*=-1,M+=M<=0?180:-180)),r=r||a.uncache,a.x=v-((a.xPercent=v&&(!r&&a.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-v)?-50:0)))?e.offsetWidth*a.xPercent/100:0)+u,a.y=x-((a.yPercent=x&&(!r&&a.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-x)?-50:0)))?e.offsetHeight*a.yPercent/100:0)+u,a.z=y+u,a.scaleX=Nt(b),a.scaleY=Nt(j),a.rotation=Nt(T)+f,a.rotationX=Nt(E)+f,a.rotationY=Nt(C)+f,a.skewX=M+f,a.skewY=k+f,a.transformPerspective=z+u,(a.zOrigin=parseFloat(p.split(" ")[2])||!r&&a.zOrigin||0)&&(o[oi]=cm(p)),a.xOffset=a.yOffset=0,a.force3D=Mi.force3D,a.renderTransform=a.svg?S8:HE?IE:_8,a.uncache=0,a},cm=function(e){return(e=e.split(" "))[0]+" "+e[1]},T0=function(e,r,a){var o=En(r);return Nt(parseFloat(r)+parseFloat(So(e,"x",a+"px",o)))+o},_8=function(e,r){r.z="0px",r.rotationY=r.rotationX="0deg",r.force3D=0,IE(e,r)},Wo="0deg",nu="0px",Ko=") ",IE=function(e,r){var a=r||this,o=a.xPercent,c=a.yPercent,u=a.x,f=a.y,m=a.z,p=a.rotation,v=a.rotationY,x=a.rotationX,y=a.skewX,b=a.skewY,j=a.scaleX,T=a.scaleY,E=a.transformPerspective,C=a.force3D,M=a.target,k=a.zOrigin,z="",D=C==="auto"&&e&&e!==1||C===!0;if(k&&(x!==Wo||v!==Wo)){var L=parseFloat(v)*Cl,O=Math.sin(L),U=Math.cos(L),H;L=parseFloat(x)*Cl,H=Math.cos(L),u=T0(M,u,O*H*-k),f=T0(M,f,-Math.sin(L)*-k),m=T0(M,m,U*H*-k+k)}E!==nu&&(z+="perspective("+E+Ko),(o||c)&&(z+="translate("+o+"%, "+c+"%) "),(D||u!==nu||f!==nu||m!==nu)&&(z+=m!==nu||D?"translate3d("+u+", "+f+", "+m+") ":"translate("+u+", "+f+Ko),p!==Wo&&(z+="rotate("+p+Ko),v!==Wo&&(z+="rotateY("+v+Ko),x!==Wo&&(z+="rotateX("+x+Ko),(y!==Wo||b!==Wo)&&(z+="skew("+y+", "+b+Ko),(j!==1||T!==1)&&(z+="scale("+j+", "+T+Ko),M.style[St]=z||"translate(0, 0)"},S8=function(e,r){var a=r||this,o=a.xPercent,c=a.yPercent,u=a.x,f=a.y,m=a.rotation,p=a.skewX,v=a.skewY,x=a.scaleX,y=a.scaleY,b=a.target,j=a.xOrigin,T=a.yOrigin,E=a.xOffset,C=a.yOffset,M=a.forceCSS,k=parseFloat(u),z=parseFloat(f),D,L,O,U,H;m=parseFloat(m),p=parseFloat(p),v=parseFloat(v),v&&(v=parseFloat(v),p+=v,m+=v),m||p?(m*=Cl,p*=Cl,D=Math.cos(m)*x,L=Math.sin(m)*x,O=Math.sin(m-p)*-y,U=Math.cos(m-p)*y,p&&(v*=Cl,H=Math.tan(p-v),H=Math.sqrt(1+H*H),O*=H,U*=H,v&&(H=Math.tan(v),H=Math.sqrt(1+H*H),D*=H,L*=H)),D=Nt(D),L=Nt(L),O=Nt(O),U=Nt(U)):(D=x,U=y,L=O=0),(k&&!~(u+"").indexOf("px")||z&&!~(f+"").indexOf("px"))&&(k=So(b,"x",u,"px"),z=So(b,"y",f,"px")),(j||T||E||C)&&(k=Nt(k+j-(j*D+T*O)+E),z=Nt(z+T-(j*L+T*U)+C)),(o||c)&&(H=b.getBBox(),k=Nt(k+o/100*H.width),z=Nt(z+c/100*H.height)),H="matrix("+D+","+L+","+O+","+U+","+k+","+z+")",b.setAttribute("transform",H),M&&(b.style[St]=H)},T8=function(e,r,a,o,c){var u=360,f=dn(c),m=parseFloat(c)*(f&&~c.indexOf("rad")?ts:1),p=m-o,v=o+p+"deg",x,y;return f&&(x=c.split("_")[1],x==="short"&&(p%=u,p!==p%(u/2)&&(p+=p<0?u:-360)),x==="cw"&&p<0?p=(p+u*vS)%u-~~(p/u)*u:x==="ccw"&&p>0&&(p=(p-u*vS)%u-~~(p/u)*u)),e._pt=y=new ai(e._pt,r,a,o,p,s8),y.e=v,y.u="deg",e._props.push(a),y},TS=function(e,r){for(var a in r)e[a]=r[a];return e},j8=function(e,r,a){var o=TS({},a._gsap),c="perspective,force3D,transformOrigin,svgOrigin",u=a.style,f,m,p,v,x,y,b,j;o.svg?(p=a.getAttribute("transform"),a.setAttribute("transform",""),u[St]=r,f=sd(a,1),ws(a,St),a.setAttribute("transform",p)):(p=getComputedStyle(a)[St],u[St]=r,f=sd(a,1),u[St]=p);for(m in Ra)p=o[m],v=f[m],p!==v&&c.indexOf(m)<0&&(b=En(p),j=En(v),x=b!==j?So(a,m,p,j):parseFloat(p),y=parseFloat(v),e._pt=new ai(e._pt,f,m,x,y-x,Jv),e._pt.u=j||0,e._props.push(m));TS(f,o)};ri("padding,margin,Width,Radius",function(n,e){var r="Top",a="Right",o="Bottom",c="Left",u=(e<3?[r,a,o,c]:[r+c,r+a,o+a,o+c]).map(function(f){return e<2?n+f:"border"+f+n});lm[e>1?"border"+n:n]=function(f,m,p,v,x){var y,b;if(arguments.length<4)return y=u.map(function(j){return ba(f,j,p)}),b=y.join(" "),b.split(y[0]).length===5?y[0]:b;y=(v+"").split(" "),b={},u.forEach(function(j,T){return b[j]=y[T]=y[T]||y[(T-1)/2|0]}),f.init(m,b,x)}});var XE={name:"css",register:tx,targetTest:function(e){return e.style&&e.nodeType},init:function(e,r,a,o,c){var u=this._props,f=e.style,m=a.vars.startAt,p,v,x,y,b,j,T,E,C,M,k,z,D,L,O,U;Ey||tx(),this.styles=this.styles||PE(e),U=this.styles.props,this.tween=a;for(T in r)if(T!=="autoRound"&&(v=r[T],!(Si[T]&&DE(T,r,a,o,e,c)))){if(b=typeof v,j=lm[T],b==="function"&&(v=v.call(a,o,e,c),b=typeof v),b==="string"&&~v.indexOf("random(")&&(v=id(v)),j)j(this,e,T,v,a)&&(O=1);else if(T.substr(0,2)==="--")p=(getComputedStyle(e).getPropertyValue(T)+"").trim(),v+="",yo.lastIndex=0,yo.test(p)||(E=En(p),C=En(v)),C?E!==C&&(p=So(e,T,p,C)+C):E&&(v+=E),this.add(f,"setProperty",p,v,o,c,0,0,T),u.push(T),U.push(T,0,f[T]);else if(b!=="undefined"){if(m&&T in m?(p=typeof m[T]=="function"?m[T].call(a,o,e,c):m[T],dn(p)&&~p.indexOf("random(")&&(p=id(p)),En(p+"")||p==="auto"||(p+=Mi.units[T]||En(ba(e,T))||""),(p+"").charAt(1)==="="&&(p=ba(e,T))):p=ba(e,T),y=parseFloat(p),M=b==="string"&&v.charAt(1)==="="&&v.substr(0,2),M&&(v=v.substr(2)),x=parseFloat(v),T in zr&&(T==="autoAlpha"&&(y===1&&ba(e,"visibility")==="hidden"&&x&&(y=0),U.push("visibility",0,f.visibility),ho(this,f,"visibility",y?"inherit":"hidden",x?"inherit":"hidden",!x)),T!=="scale"&&T!=="transform"&&(T=zr[T],~T.indexOf(",")&&(T=T.split(",")[0]))),k=T in Ra,k){if(this.styles.save(T),b==="string"&&v.substring(0,6)==="var(--"&&(v=nr(e,v.substring(4,v.indexOf(")"))),x=parseFloat(v)),z||(D=e._gsap,D.renderTransform&&!r.parseTransform||sd(e,r.parseTransform),L=r.smoothOrigin!==!1&&D.smooth,z=this._pt=new ai(this._pt,f,St,0,1,D.renderTransform,D,0,-1),z.dep=1),T==="scale")this._pt=new ai(this._pt,D,"scaleY",D.scaleY,(M?Al(D.scaleY,M+x):x)-D.scaleY||0,Jv),this._pt.u=0,u.push("scaleY",T),T+="X";else if(T==="transformOrigin"){U.push(oi,0,f[oi]),v=b8(v),D.svg?nx(e,v,0,L,0,this):(C=parseFloat(v.split(" ")[2])||0,C!==D.zOrigin&&ho(this,D,"zOrigin",D.zOrigin,C),ho(this,f,T,cm(p),cm(v)));continue}else if(T==="svgOrigin"){nx(e,v,1,L,0,this);continue}else if(T in GE){T8(this,D,T,y,M?Al(y,M+v):v);continue}else if(T==="smoothOrigin"){ho(this,D,"smooth",D.smooth,v);continue}else if(T==="force3D"){D[T]=v;continue}else if(T==="transform"){j8(this,v,e);continue}}else T in f||(T=Fl(T)||T);if(k||(x||x===0)&&(y||y===0)&&!o8.test(v)&&T in f)E=(p+"").substr((y+"").length),x||(x=0),C=En(v)||(T in Mi.units?Mi.units[T]:E),E!==C&&(y=So(e,T,p,C)),this._pt=new ai(this._pt,k?D:f,T,y,(M?Al(y,M+x):x)-y,!k&&(C==="px"||T==="zIndex")&&r.autoRound!==!1?c8:Jv),this._pt.u=C||0,E!==C&&C!=="%"&&(this._pt.b=p,this._pt.r=l8);else if(T in f)y8.call(this,e,T,p,M?M+v:v);else if(T in e)this.add(e,T,p||e[T],M?M+v:v,o,c);else if(T!=="parseTransform"){vy(T,v);continue}k||(T in f?U.push(T,0,f[T]):typeof e[T]=="function"?U.push(T,2,e[T]()):U.push(T,1,p||e[T])),u.push(T)}}O&&LE(this)},render:function(e,r){if(r.tween._time||!Cy())for(var a=r._pt;a;)a.r(e,a.d),a=a._next;else r.styles.revert()},get:ba,aliases:zr,getSetter:function(e,r,a){var o=zr[r];return o&&o.indexOf(",")<0&&(r=o),r in Ra&&r!==oi&&(e._gsap.x||ba(e,"x"))?a&&gS===a?r==="scale"?h8:f8:(gS=a||{})&&(r==="scale"?m8:p8):e.style&&!my(e.style[r])?u8:~r.indexOf("-")?d8:jy(e,r)},core:{_removeProperty:ws,_getMatrix:Dy}};si.utils.checkPrefix=Fl;si.core.getStyleSaver=PE;(function(n,e,r,a){var o=ri(n+","+e+","+r,function(c){Ra[c]=1});ri(e,function(c){Mi.units[c]="deg",GE[c]=1}),zr[o[13]]=n+","+e,ri(a,function(c){var u=c.split(":");zr[u[1]]=o[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ri("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"});si.registerPlugin(XE);var WE=si.registerPlugin(XE)||si;WE.core.Tween;function A8(n,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}function E8(n,e,r){return e&&A8(n.prototype,e),n}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Vh,Ai,mo,po,Ml,KE,ns,Uu,ZE,_a,vr,QE,JE=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},eC=1,Tl=[],Oe=[],Vr=[],Bu=Date.now,ix=function(e,r){return r},C8=function(){var e=Uu.core,r=e.bridge||{},a=e._scrollers,o=e._proxies;a.push.apply(a,Oe),o.push.apply(o,Vr),Oe=a,Vr=o,ix=function(u,f){return r[u](f)}},bo=function(e,r){return~Vr.indexOf(e)&&Vr[Vr.indexOf(e)+1][r]},Vu=function(e){return!!~ZE.indexOf(e)},Vn=function(e,r,a,o,c){return e.addEventListener(r,a,{passive:o!==!1,capture:!!c})},Un=function(e,r,a,o){return e.removeEventListener(r,a,!!o)},$f="scrollLeft",Pf="scrollTop",rx=function(){return _a&&_a.isPressed||Oe.cache++},um=function(e,r){var a=function o(c){if(c||c===0){eC&&(Ai.history.scrollRestoration="manual");var u=_a&&_a.isPressed;c=o.v=Math.round(c)||(_a&&_a.iOS?1:0),e(c),o.cacheID=Oe.cache,u&&ix("ss",c)}else(r||Oe.cache!==o.cacheID||ix("ref"))&&(o.cacheID=Oe.cache,o.v=e());return o.v+o.offset};return a.offset=0,e&&a},Fn={s:$f,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:um(function(n){return arguments.length?Ai.scrollTo(n,Jt.sc()):Ai.pageXOffset||mo[$f]||po[$f]||Ml[$f]||0})},Jt={s:Pf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Fn,sc:um(function(n){return arguments.length?Ai.scrollTo(Fn.sc(),n):Ai.pageYOffset||mo[Pf]||po[Pf]||Ml[Pf]||0})},ti=function(e,r){return(r&&r._ctx&&r._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},M8=function(e,r){for(var a=r.length;a--;)if(r[a]===e||r[a].contains(e))return!0;return!1},To=function(e,r){var a=r.s,o=r.sc;Vu(e)&&(e=mo.scrollingElement||po);var c=Oe.indexOf(e),u=o===Jt.sc?1:2;!~c&&(c=Oe.push(e)-1),Oe[c+u]||Vn(e,"scroll",rx);var f=Oe[c+u],m=f||(Oe[c+u]=um(bo(e,a),!0)||(Vu(e)?o:um(function(p){return arguments.length?e[a]=p:e[a]})));return m.target=e,f||(m.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),m},ax=function(e,r,a){var o=e,c=e,u=Bu(),f=u,m=r||50,p=Math.max(500,m*3),v=function(j,T){var E=Bu();T||E-u>m?(c=o,o=j,f=u,u=E):a?o+=j:o=c+(j-c)/(E-f)*(u-f)},x=function(){c=o=a?0:o,f=u=0},y=function(j){var T=f,E=c,C=Bu();return(j||j===0)&&j!==o&&v(j),u===f||C-f>p?0:(o+(a?E:-E))/((a?C:u)-T)*1e3};return{update:v,reset:x,getVelocity:y}},iu=function(e,r){return r&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},jS=function(e){var r=Math.max.apply(Math,e),a=Math.min.apply(Math,e);return Math.abs(r)>=Math.abs(a)?r:a},tC=function(){Uu=xn.core.globals().ScrollTrigger,Uu&&Uu.core&&C8()},nC=function(e){return xn=e||JE(),!Vh&&xn&&typeof document<"u"&&document.body&&(Ai=window,mo=document,po=mo.documentElement,Ml=mo.body,ZE=[Ai,mo,po,Ml],xn.utils.clamp,QE=xn.core.context||function(){},ns="onpointerenter"in Ml?"pointer":"mouse",KE=Lt.isTouch=Ai.matchMedia&&Ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,vr=Lt.eventTypes=("ontouchstart"in po?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in po?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return eC=0},500),tC(),Vh=1),Vh};Fn.op=Jt;Oe.cache=0;var Lt=function(){function n(r){this.init(r)}var e=n.prototype;return e.init=function(a){Vh||nC(xn)||console.warn("Please gsap.registerPlugin(Observer)"),Uu||tC();var o=a.tolerance,c=a.dragMinimum,u=a.type,f=a.target,m=a.lineHeight,p=a.debounce,v=a.preventDefault,x=a.onStop,y=a.onStopDelay,b=a.ignore,j=a.wheelSpeed,T=a.event,E=a.onDragStart,C=a.onDragEnd,M=a.onDrag,k=a.onPress,z=a.onRelease,D=a.onRight,L=a.onLeft,O=a.onUp,U=a.onDown,H=a.onChangeX,W=a.onChangeY,ae=a.onChange,Z=a.onToggleX,se=a.onToggleY,fe=a.onHover,le=a.onHoverEnd,V=a.onMove,G=a.ignoreCheck,ee=a.isNormalizer,re=a.onGestureStart,S=a.onGestureEnd,I=a.onWheel,te=a.onEnable,ne=a.onDisable,oe=a.onClick,ge=a.scrollSpeed,ce=a.capture,Me=a.allowClicks,Se=a.lockAxis,Fe=a.onLockAxis;this.target=f=ti(f)||po,this.vars=a,b&&(b=xn.utils.toArray(b)),o=o||1e-9,c=c||0,j=j||1,ge=ge||1,u=u||"wheel,touch,pointer",p=p!==!1,m||(m=parseFloat(Ai.getComputedStyle(Ml).lineHeight)||22);var bn,dt,it,Ne,ft,wn,Rn,X=this,zn=0,zi=0,cr=a.passive||!v&&a.passive!==!1,rt=To(f,Fn),ur=To(f,Jt),dr=rt(),Zr=ur(),Bt=~u.indexOf("touch")&&!~u.indexOf("pointer")&&vr[0]==="pointerdown",qn=Vu(f),$e=f.ownerDocument||mo,Vt=[0,0,0],st=[0,0,0],fr=0,Do=function(){return fr=Bu()},jt=function(ve,Ee){return(X.event=ve)&&b&&M8(ve.target,b)||Ee&&Bt&&ve.pointerType!=="touch"||G&&G(ve,Ee)},Qr=function(){X._vx.reset(),X._vy.reset(),dt.pause(),x&&x(X)},In=function(){var ve=X.deltaX=jS(Vt),Ee=X.deltaY=jS(st),ie=Math.abs(ve)>=o,me=Math.abs(Ee)>=o;ae&&(ie||me)&&ae(X,ve,Ee,Vt,st),ie&&(D&&X.deltaX>0&&D(X),L&&X.deltaX<0&&L(X),H&&H(X),Z&&X.deltaX<0!=zn<0&&Z(X),zn=X.deltaX,Vt[0]=Vt[1]=Vt[2]=0),me&&(U&&X.deltaY>0&&U(X),O&&X.deltaY<0&&O(X),W&&W(X),se&&X.deltaY<0!=zi<0&&se(X),zi=X.deltaY,st[0]=st[1]=st[2]=0),(Ne||it)&&(V&&V(X),it&&(E&&it===1&&E(X),M&&M(X),it=0),Ne=!1),wn&&!(wn=!1)&&Fe&&Fe(X),ft&&(I(X),ft=!1),bn=0},Xn=function(ve,Ee,ie){Vt[ie]+=ve,st[ie]+=Ee,X._vx.update(ve),X._vy.update(Ee),p?bn||(bn=requestAnimationFrame(In)):In()},hr=function(ve,Ee){Se&&!Rn&&(X.axis=Rn=Math.abs(ve)>Math.abs(Ee)?"x":"y",wn=!0),Rn!=="y"&&(Vt[2]+=ve,X._vx.update(ve,!0)),Rn!=="x"&&(st[2]+=Ee,X._vy.update(Ee,!0)),p?bn||(bn=requestAnimationFrame(In)):In()},Wn=function(ve){if(!jt(ve,1)){ve=iu(ve,v);var Ee=ve.clientX,ie=ve.clientY,me=Ee-X.x,he=ie-X.y,_e=X.isDragging;X.x=Ee,X.y=ie,(_e||(me||he)&&(Math.abs(X.startX-Ee)>=c||Math.abs(X.startY-ie)>=c))&&(it=_e?2:1,_e||(X.isDragging=!0),hr(me,he))}},Jr=X.onPress=function(Te){jt(Te,1)||Te&&Te.button||(X.axis=Rn=null,dt.pause(),X.isPressed=!0,Te=iu(Te),zn=zi=0,X.startX=X.x=Te.clientX,X.startY=X.y=Te.clientY,X._vx.reset(),X._vy.reset(),Vn(ee?f:$e,vr[1],Wn,cr,!0),X.deltaX=X.deltaY=0,k&&k(X))},Ae=X.onRelease=function(Te){if(!jt(Te,1)){Un(ee?f:$e,vr[1],Wn,!0);var ve=!isNaN(X.y-X.startY),Ee=X.isDragging,ie=Ee&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),me=iu(Te);!ie&&ve&&(X._vx.reset(),X._vy.reset(),v&&Me&&xn.delayedCall(.08,function(){if(Bu()-fr>300&&!Te.defaultPrevented){if(Te.target.click)Te.target.click();else if($e.createEvent){var he=$e.createEvent("MouseEvents");he.initMouseEvent("click",!0,!0,Ai,1,me.screenX,me.screenY,me.clientX,me.clientY,!1,!1,!1,!1,0,null),Te.target.dispatchEvent(he)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,x&&Ee&&!ee&&dt.restart(!0),it&&In(),C&&Ee&&C(X),z&&z(X,ie)}},wr=function(ve){return ve.touches&&ve.touches.length>1&&(X.isGesturing=!0)&&re(ve,X.isDragging)},On=function(){return(X.isGesturing=!1)||S(X)},fn=function(ve){if(!jt(ve)){var Ee=rt(),ie=ur();Xn((Ee-dr)*ge,(ie-Zr)*ge,1),dr=Ee,Zr=ie,x&&dt.restart(!0)}},li=function(ve){if(!jt(ve)){ve=iu(ve,v),I&&(ft=!0);var Ee=(ve.deltaMode===1?m:ve.deltaMode===2?Ai.innerHeight:1)*j;Xn(ve.deltaX*Ee,ve.deltaY*Ee,0),x&&!ee&&dt.restart(!0)}},_r=function(ve){if(!jt(ve)){var Ee=ve.clientX,ie=ve.clientY,me=Ee-X.x,he=ie-X.y;X.x=Ee,X.y=ie,Ne=!0,x&&dt.restart(!0),(me||he)&&hr(me,he)}},ea=function(ve){X.event=ve,fe(X)},ci=function(ve){X.event=ve,le(X)},ta=function(ve){return jt(ve)||iu(ve,v)&&oe(X)};dt=X._dc=xn.delayedCall(y||.25,Qr).pause(),X.deltaX=X.deltaY=0,X._vx=ax(0,50,!0),X._vy=ax(0,50,!0),X.scrollX=rt,X.scrollY=ur,X.isDragging=X.isGesturing=X.isPressed=!1,QE(this),X.enable=function(Te){return X.isEnabled||(Vn(qn?$e:f,"scroll",rx),u.indexOf("scroll")>=0&&Vn(qn?$e:f,"scroll",fn,cr,ce),u.indexOf("wheel")>=0&&Vn(f,"wheel",li,cr,ce),(u.indexOf("touch")>=0&&KE||u.indexOf("pointer")>=0)&&(Vn(f,vr[0],Jr,cr,ce),Vn($e,vr[2],Ae),Vn($e,vr[3],Ae),Me&&Vn(f,"click",Do,!0,!0),oe&&Vn(f,"click",ta),re&&Vn($e,"gesturestart",wr),S&&Vn($e,"gestureend",On),fe&&Vn(f,ns+"enter",ea),le&&Vn(f,ns+"leave",ci),V&&Vn(f,ns+"move",_r)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=Ne=it=!1,X._vx.reset(),X._vy.reset(),dr=rt(),Zr=ur(),Te&&Te.type&&Jr(Te),te&&te(X)),X},X.disable=function(){X.isEnabled&&(Tl.filter(function(Te){return Te!==X&&Vu(Te.target)}).length||Un(qn?$e:f,"scroll",rx),X.isPressed&&(X._vx.reset(),X._vy.reset(),Un(ee?f:$e,vr[1],Wn,!0)),Un(qn?$e:f,"scroll",fn,ce),Un(f,"wheel",li,ce),Un(f,vr[0],Jr,ce),Un($e,vr[2],Ae),Un($e,vr[3],Ae),Un(f,"click",Do,!0),Un(f,"click",ta),Un($e,"gesturestart",wr),Un($e,"gestureend",On),Un(f,ns+"enter",ea),Un(f,ns+"leave",ci),Un(f,ns+"move",_r),X.isEnabled=X.isPressed=X.isDragging=!1,ne&&ne(X))},X.kill=X.revert=function(){X.disable();var Te=Tl.indexOf(X);Te>=0&&Tl.splice(Te,1),_a===X&&(_a=0)},Tl.push(X),ee&&Vu(f)&&(_a=X),X.enable(T)},E8(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Lt.version="3.13.0";Lt.create=function(n){return new Lt(n)};Lt.register=nC;Lt.getAll=function(){return Tl.slice()};Lt.getById=function(n){return Tl.filter(function(e){return e.vars.id===n})[0]};JE()&&xn.registerPlugin(Lt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ue,hl,ze,ut,Ti,Ze,ky,dm,ld,$u,wu,Hf,jn,Rm,ox,Pn,AS,ES,ml,iC,j0,rC,$n,sx,aC,oC,co,lx,Ry,Dl,zy,fm,cx,A0,Yf=1,An=Date.now,E0=An(),rr=0,_u=0,CS=function(e,r,a){var o=_i(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return a["_"+r+"Clamp"]=o,o?e.substr(6,e.length-7):e},MS=function(e,r){return r&&(!_i(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},D8=function n(){return _u&&requestAnimationFrame(n)},DS=function(){return Rm=1},kS=function(){return Rm=0},Dr=function(e){return e},Su=function(e){return Math.round(e*1e5)/1e5||0},sC=function(){return typeof window<"u"},lC=function(){return ue||sC()&&(ue=window.gsap)&&ue.registerPlugin&&ue},_s=function(e){return!!~ky.indexOf(e)},cC=function(e){return(e==="Height"?zy:ze["inner"+e])||Ti["client"+e]||Ze["client"+e]},uC=function(e){return bo(e,"getBoundingClientRect")||(_s(e)?function(){return Fh.width=ze.innerWidth,Fh.height=zy,Fh}:function(){return wa(e)})},k8=function(e,r,a){var o=a.d,c=a.d2,u=a.a;return(u=bo(e,"getBoundingClientRect"))?function(){return u()[o]}:function(){return(r?cC(c):e["client"+c])||0}},R8=function(e,r){return!r||~Vr.indexOf(e)?uC(e):function(){return Fh}},Or=function(e,r){var a=r.s,o=r.d2,c=r.d,u=r.a;return Math.max(0,(a="scroll"+o)&&(u=bo(e,a))?u()-uC(e)()[c]:_s(e)?(Ti[a]||Ze[a])-cC(o):e[a]-e["offset"+o])},Ff=function(e,r){for(var a=0;a<ml.length;a+=3)(!r||~r.indexOf(ml[a+1]))&&e(ml[a],ml[a+1],ml[a+2])},_i=function(e){return typeof e=="string"},Cn=function(e){return typeof e=="function"},Tu=function(e){return typeof e=="number"},is=function(e){return typeof e=="object"},ru=function(e,r,a){return e&&e.progress(r?0:1)&&a&&e.pause()},C0=function(e,r){if(e.enabled){var a=e._ctx?e._ctx.add(function(){return r(e)}):r(e);a&&a.totalTime&&(e.callbackAnimation=a)}},ll=Math.abs,dC="left",fC="top",Oy="right",Ny="bottom",vs="width",xs="height",Pu="Right",Hu="Left",Yu="Top",Fu="Bottom",Ft="padding",Qi="margin",Gl="Width",Ly="Height",Qt="px",Ji=function(e){return ze.getComputedStyle(e)},z8=function(e){var r=Ji(e).position;e.style.position=r==="absolute"||r==="fixed"?r:"relative"},RS=function(e,r){for(var a in r)a in e||(e[a]=r[a]);return e},wa=function(e,r){var a=r&&Ji(e)[ox]!=="matrix(1, 0, 0, 1, 0, 0)"&&ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),o=e.getBoundingClientRect();return a&&a.progress(0).kill(),o},hm=function(e,r){var a=r.d2;return e["offset"+a]||e["client"+a]||0},hC=function(e){var r=[],a=e.labels,o=e.duration(),c;for(c in a)r.push(a[c]/o);return r},O8=function(e){return function(r){return ue.utils.snap(hC(e),r)}},Uy=function(e){var r=ue.utils.snap(e),a=Array.isArray(e)&&e.slice(0).sort(function(o,c){return o-c});return a?function(o,c,u){u===void 0&&(u=.001);var f;if(!c)return r(o);if(c>0){for(o-=u,f=0;f<a.length;f++)if(a[f]>=o)return a[f];return a[f-1]}else for(f=a.length,o+=u;f--;)if(a[f]<=o)return a[f];return a[0]}:function(o,c,u){u===void 0&&(u=.001);var f=r(o);return!c||Math.abs(f-o)<u||f-o<0==c<0?f:r(c<0?o-e:o+e)}},N8=function(e){return function(r,a){return Uy(hC(e))(r,a.direction)}},Gf=function(e,r,a,o){return a.split(",").forEach(function(c){return e(r,c,o)})},ln=function(e,r,a,o,c){return e.addEventListener(r,a,{passive:!o,capture:!!c})},sn=function(e,r,a,o){return e.removeEventListener(r,a,!!o)},qf=function(e,r,a){a=a&&a.wheelHandler,a&&(e(r,"wheel",a),e(r,"touchmove",a))},zS={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},If={toggleActions:"play",anticipatePin:0},mm={top:0,left:0,center:.5,bottom:1,right:1},$h=function(e,r){if(_i(e)){var a=e.indexOf("="),o=~a?+(e.charAt(a-1)+1)*parseFloat(e.substr(a+1)):0;~a&&(e.indexOf("%")>a&&(o*=r/100),e=e.substr(0,a-1)),e=o+(e in mm?mm[e]*r:~e.indexOf("%")?parseFloat(e)*r/100:parseFloat(e)||0)}return e},Xf=function(e,r,a,o,c,u,f,m){var p=c.startColor,v=c.endColor,x=c.fontSize,y=c.indent,b=c.fontWeight,j=ut.createElement("div"),T=_s(a)||bo(a,"pinType")==="fixed",E=e.indexOf("scroller")!==-1,C=T?Ze:a,M=e.indexOf("start")!==-1,k=M?p:v,z="border-color:"+k+";font-size:"+x+";color:"+k+";font-weight:"+b+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return z+="position:"+((E||m)&&T?"fixed;":"absolute;"),(E||m||!T)&&(z+=(o===Jt?Oy:Ny)+":"+(u+parseFloat(y))+"px;"),f&&(z+="box-sizing:border-box;text-align:left;width:"+f.offsetWidth+"px;"),j._isStart=M,j.setAttribute("class","gsap-marker-"+e+(r?" marker-"+r:"")),j.style.cssText=z,j.innerText=r||r===0?e+"-"+r:e,C.children[0]?C.insertBefore(j,C.children[0]):C.appendChild(j),j._offset=j["offset"+o.op.d2],Ph(j,0,o,M),j},Ph=function(e,r,a,o){var c={display:"block"},u=a[o?"os2":"p2"],f=a[o?"p2":"os2"];e._isFlipped=o,c[a.a+"Percent"]=o?-100:0,c[a.a]=o?"1px":0,c["border"+u+Gl]=1,c["border"+f+Gl]=0,c[a.p]=r+"px",ue.set(e,c)},ke=[],ux={},cd,OS=function(){return An()-rr>34&&(cd||(cd=requestAnimationFrame(Aa)))},cl=function(){(!$n||!$n.isPressed||$n.startX>Ze.clientWidth)&&(Oe.cache++,$n?cd||(cd=requestAnimationFrame(Aa)):Aa(),rr||Ts("scrollStart"),rr=An())},M0=function(){oC=ze.innerWidth,aC=ze.innerHeight},ju=function(e){Oe.cache++,(e===!0||!jn&&!rC&&!ut.fullscreenElement&&!ut.webkitFullscreenElement&&(!sx||oC!==ze.innerWidth||Math.abs(ze.innerHeight-aC)>ze.innerHeight*.25))&&dm.restart(!0)},Ss={},L8=[],mC=function n(){return sn(Ve,"scrollEnd",n)||ls(!0)},Ts=function(e){return Ss[e]&&Ss[e].map(function(r){return r()})||L8},wi=[],pC=function(e){for(var r=0;r<wi.length;r+=5)(!e||wi[r+4]&&wi[r+4].query===e)&&(wi[r].style.cssText=wi[r+1],wi[r].getBBox&&wi[r].setAttribute("transform",wi[r+2]||""),wi[r+3].uncache=1)},By=function(e,r){var a;for(Pn=0;Pn<ke.length;Pn++)a=ke[Pn],a&&(!r||a._ctx===r)&&(e?a.kill(1):a.revert(!0,!0));fm=!0,r&&pC(r),r||Ts("revert")},gC=function(e,r){Oe.cache++,(r||!Hn)&&Oe.forEach(function(a){return Cn(a)&&a.cacheID++&&(a.rec=0)}),_i(e)&&(ze.history.scrollRestoration=Ry=e)},Hn,ys=0,NS,U8=function(){if(NS!==ys){var e=NS=ys;requestAnimationFrame(function(){return e===ys&&ls(!0)})}},vC=function(){Ze.appendChild(Dl),zy=!$n&&Dl.offsetHeight||ze.innerHeight,Ze.removeChild(Dl)},LS=function(e){return ld(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(r){return r.style.display=e?"none":"block"})},ls=function(e,r){if(Ti=ut.documentElement,Ze=ut.body,ky=[ze,ut,Ti,Ze],rr&&!e&&!fm){ln(Ve,"scrollEnd",mC);return}vC(),Hn=Ve.isRefreshing=!0,Oe.forEach(function(o){return Cn(o)&&++o.cacheID&&(o.rec=o())});var a=Ts("refreshInit");iC&&Ve.sort(),r||By(),Oe.forEach(function(o){Cn(o)&&(o.smooth&&(o.target.style.scrollBehavior="auto"),o(0))}),ke.slice(0).forEach(function(o){return o.refresh()}),fm=!1,ke.forEach(function(o){if(o._subPinOffset&&o.pin){var c=o.vars.horizontal?"offsetWidth":"offsetHeight",u=o.pin[c];o.revert(!0,1),o.adjustPinSpacing(o.pin[c]-u),o.refresh()}}),cx=1,LS(!0),ke.forEach(function(o){var c=Or(o.scroller,o._dir),u=o.vars.end==="max"||o._endClamp&&o.end>c,f=o._startClamp&&o.start>=c;(u||f)&&o.setPositions(f?c-1:o.start,u?Math.max(f?c:o.start+1,c):o.end,!0)}),LS(!1),cx=0,a.forEach(function(o){return o&&o.render&&o.render(-1)}),Oe.forEach(function(o){Cn(o)&&(o.smooth&&requestAnimationFrame(function(){return o.target.style.scrollBehavior="smooth"}),o.rec&&o(o.rec))}),gC(Ry,1),dm.pause(),ys++,Hn=2,Aa(2),ke.forEach(function(o){return Cn(o.vars.onRefresh)&&o.vars.onRefresh(o)}),Hn=Ve.isRefreshing=!1,Ts("refresh")},dx=0,Hh=1,Gu,Aa=function(e){if(e===2||!Hn&&!fm){Ve.isUpdating=!0,Gu&&Gu.update(0);var r=ke.length,a=An(),o=a-E0>=50,c=r&&ke[0].scroll();if(Hh=dx>c?-1:1,Hn||(dx=c),o&&(rr&&!Rm&&a-rr>200&&(rr=0,Ts("scrollEnd")),wu=E0,E0=a),Hh<0){for(Pn=r;Pn-- >0;)ke[Pn]&&ke[Pn].update(0,o);Hh=1}else for(Pn=0;Pn<r;Pn++)ke[Pn]&&ke[Pn].update(0,o);Ve.isUpdating=!1}cd=0},fx=[dC,fC,Ny,Oy,Qi+Fu,Qi+Pu,Qi+Yu,Qi+Hu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yh=fx.concat([vs,xs,"boxSizing","max"+Gl,"max"+Ly,"position",Qi,Ft,Ft+Yu,Ft+Pu,Ft+Fu,Ft+Hu]),B8=function(e,r,a){kl(a);var o=e._gsap;if(o.spacerIsNative)kl(o.spacerState);else if(e._gsap.swappedIn){var c=r.parentNode;c&&(c.insertBefore(e,r),c.removeChild(r))}e._gsap.swappedIn=!1},D0=function(e,r,a,o){if(!e._gsap.swappedIn){for(var c=fx.length,u=r.style,f=e.style,m;c--;)m=fx[c],u[m]=a[m];u.position=a.position==="absolute"?"absolute":"relative",a.display==="inline"&&(u.display="inline-block"),f[Ny]=f[Oy]="auto",u.flexBasis=a.flexBasis||"auto",u.overflow="visible",u.boxSizing="border-box",u[vs]=hm(e,Fn)+Qt,u[xs]=hm(e,Jt)+Qt,u[Ft]=f[Qi]=f[fC]=f[dC]="0",kl(o),f[vs]=f["max"+Gl]=a[vs],f[xs]=f["max"+Ly]=a[xs],f[Ft]=a[Ft],e.parentNode!==r&&(e.parentNode.insertBefore(r,e),r.appendChild(e)),e._gsap.swappedIn=!0}},V8=/([A-Z])/g,kl=function(e){if(e){var r=e.t.style,a=e.length,o=0,c,u;for((e.t._gsap||ue.core.getCache(e.t)).uncache=1;o<a;o+=2)u=e[o+1],c=e[o],u?r[c]=u:r[c]&&r.removeProperty(c.replace(V8,"-$1").toLowerCase())}},Wf=function(e){for(var r=Yh.length,a=e.style,o=[],c=0;c<r;c++)o.push(Yh[c],a[Yh[c]]);return o.t=e,o},$8=function(e,r,a){for(var o=[],c=e.length,u=a?8:0,f;u<c;u+=2)f=e[u],o.push(f,f in r?r[f]:e[u+1]);return o.t=e.t,o},Fh={left:0,top:0},US=function(e,r,a,o,c,u,f,m,p,v,x,y,b,j){Cn(e)&&(e=e(m)),_i(e)&&e.substr(0,3)==="max"&&(e=y+(e.charAt(4)==="="?$h("0"+e.substr(3),a):0));var T=b?b.time():0,E,C,M;if(b&&b.seek(0),isNaN(e)||(e=+e),Tu(e))b&&(e=ue.utils.mapRange(b.scrollTrigger.start,b.scrollTrigger.end,0,y,e)),f&&Ph(f,a,o,!0);else{Cn(r)&&(r=r(m));var k=(e||"0").split(" "),z,D,L,O;M=ti(r,m)||Ze,z=wa(M)||{},(!z||!z.left&&!z.top)&&Ji(M).display==="none"&&(O=M.style.display,M.style.display="block",z=wa(M),O?M.style.display=O:M.style.removeProperty("display")),D=$h(k[0],z[o.d]),L=$h(k[1]||"0",a),e=z[o.p]-p[o.p]-v+D+c-L,f&&Ph(f,L,o,a-L<20||f._isStart&&L>20),a-=a-L}if(j&&(m[j]=e||-.001,e<0&&(e=0)),u){var U=e+a,H=u._isStart;E="scroll"+o.d2,Ph(u,U,o,H&&U>20||!H&&(x?Math.max(Ze[E],Ti[E]):u.parentNode[E])<=U+1),x&&(p=wa(f),x&&(u.style[o.op.p]=p[o.op.p]-o.op.m-u._offset+Qt))}return b&&M&&(E=wa(M),b.seek(y),C=wa(M),b._caScrollDist=E[o.p]-C[o.p],e=e/b._caScrollDist*y),b&&b.seek(T),b?e:Math.round(e)},P8=/(webkit|moz|length|cssText|inset)/i,BS=function(e,r,a,o){if(e.parentNode!==r){var c=e.style,u,f;if(r===Ze){e._stOrig=c.cssText,f=Ji(e);for(u in f)!+u&&!P8.test(u)&&f[u]&&typeof c[u]=="string"&&u!=="0"&&(c[u]=f[u]);c.top=a,c.left=o}else c.cssText=e._stOrig;ue.core.getCache(e).uncache=1,r.appendChild(e)}},xC=function(e,r,a){var o=r,c=o;return function(u){var f=Math.round(e());return f!==o&&f!==c&&Math.abs(f-o)>3&&Math.abs(f-c)>3&&(u=f,a&&a()),c=o,o=Math.round(u),o}},Kf=function(e,r,a){var o={};o[r.p]="+="+a,ue.set(e,o)},VS=function(e,r){var a=To(e,r),o="_scroll"+r.p2,c=function u(f,m,p,v,x){var y=u.tween,b=m.onComplete,j={};p=p||a();var T=xC(a,p,function(){y.kill(),u.tween=0});return x=v&&x||0,v=v||f-p,y&&y.kill(),m[o]=f,m.inherit=!1,m.modifiers=j,j[o]=function(){return T(p+v*y.ratio+x*y.ratio*y.ratio)},m.onUpdate=function(){Oe.cache++,u.tween&&Aa()},m.onComplete=function(){u.tween=0,b&&b.call(y)},y=u.tween=ue.to(e,m),y};return e[o]=a,a.wheelHandler=function(){return c.tween&&c.tween.kill()&&(c.tween=0)},ln(e,"wheel",a.wheelHandler),Ve.isTouch&&ln(e,"touchmove",a.wheelHandler),c},Ve=function(){function n(r,a){hl||n.register(ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),lx(this),this.init(r,a)}var e=n.prototype;return e.init=function(a,o){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_u){this.update=this.refresh=this.kill=Dr;return}a=RS(_i(a)||Tu(a)||a.nodeType?{trigger:a}:a,If);var c=a,u=c.onUpdate,f=c.toggleClass,m=c.id,p=c.onToggle,v=c.onRefresh,x=c.scrub,y=c.trigger,b=c.pin,j=c.pinSpacing,T=c.invalidateOnRefresh,E=c.anticipatePin,C=c.onScrubComplete,M=c.onSnapComplete,k=c.once,z=c.snap,D=c.pinReparent,L=c.pinSpacer,O=c.containerAnimation,U=c.fastScrollEnd,H=c.preventOverlaps,W=a.horizontal||a.containerAnimation&&a.horizontal!==!1?Fn:Jt,ae=!x&&x!==0,Z=ti(a.scroller||ze),se=ue.core.getCache(Z),fe=_s(Z),le=("pinType"in a?a.pinType:bo(Z,"pinType")||fe&&"fixed")==="fixed",V=[a.onEnter,a.onLeave,a.onEnterBack,a.onLeaveBack],G=ae&&a.toggleActions.split(" "),ee="markers"in a?a.markers:If.markers,re=fe?0:parseFloat(Ji(Z)["border"+W.p2+Gl])||0,S=this,I=a.onRefreshInit&&function(){return a.onRefreshInit(S)},te=k8(Z,fe,W),ne=R8(Z,fe),oe=0,ge=0,ce=0,Me=To(Z,W),Se,Fe,bn,dt,it,Ne,ft,wn,Rn,X,zn,zi,cr,rt,ur,dr,Zr,Bt,qn,$e,Vt,st,fr,Do,jt,Qr,In,Xn,hr,Wn,Jr,Ae,wr,On,fn,li,_r,ea,ci;if(S._startClamp=S._endClamp=!1,S._dir=W,E*=45,S.scroller=Z,S.scroll=O?O.time.bind(O):Me,dt=Me(),S.vars=a,o=o||a.animation,"refreshPriority"in a&&(iC=1,a.refreshPriority===-9999&&(Gu=S)),se.tweenScroll=se.tweenScroll||{top:VS(Z,Jt),left:VS(Z,Fn)},S.tweenTo=Se=se.tweenScroll[W.p],S.scrubDuration=function(ie){wr=Tu(ie)&&ie,wr?Ae?Ae.duration(ie):Ae=ue.to(o,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:wr,paused:!0,onComplete:function(){return C&&C(S)}}):(Ae&&Ae.progress(1).kill(),Ae=0)},o&&(o.vars.lazy=!1,o._initted&&!S.isReverted||o.vars.immediateRender!==!1&&a.immediateRender!==!1&&o.duration()&&o.render(0,!0,!0),S.animation=o.pause(),o.scrollTrigger=S,S.scrubDuration(x),Wn=0,m||(m=o.vars.id)),z&&((!is(z)||z.push)&&(z={snapTo:z}),"scrollBehavior"in Ze.style&&ue.set(fe?[Ze,Ti]:Z,{scrollBehavior:"auto"}),Oe.forEach(function(ie){return Cn(ie)&&ie.target===(fe?ut.scrollingElement||Ti:Z)&&(ie.smooth=!1)}),bn=Cn(z.snapTo)?z.snapTo:z.snapTo==="labels"?O8(o):z.snapTo==="labelsDirectional"?N8(o):z.directional!==!1?function(ie,me){return Uy(z.snapTo)(ie,An()-ge<500?0:me.direction)}:ue.utils.snap(z.snapTo),On=z.duration||{min:.1,max:2},On=is(On)?$u(On.min,On.max):$u(On,On),fn=ue.delayedCall(z.delay||wr/2||.1,function(){var ie=Me(),me=An()-ge<500,he=Se.tween;if((me||Math.abs(S.getVelocity())<10)&&!he&&!Rm&&oe!==ie){var _e=(ie-Ne)/rt,$t=o&&!ae?o.totalProgress():_e,Le=me?0:($t-Jr)/(An()-wu)*1e3||0,gt=ue.utils.clamp(-_e,1-_e,ll(Le/2)*Le/.185),At=_e+(z.inertia===!1?0:gt),lt,Ie,He=z,hn=He.onStart,We=He.onInterrupt,Ge=He.onComplete;if(lt=bn(At,S),Tu(lt)||(lt=At),Ie=Math.max(0,Math.round(Ne+lt*rt)),ie<=ft&&ie>=Ne&&Ie!==ie){if(he&&!he._initted&&he.data<=ll(Ie-ie))return;z.inertia===!1&&(gt=lt-_e),Se(Ie,{duration:On(ll(Math.max(ll(At-$t),ll(lt-$t))*.185/Le/.05||0)),ease:z.ease||"power3",data:ll(Ie-ie),onInterrupt:function(){return fn.restart(!0)&&We&&We(S)},onComplete:function(){S.update(),oe=Me(),o&&!ae&&(Ae?Ae.resetTo("totalProgress",lt,o._tTime/o._tDur):o.progress(lt)),Wn=Jr=o&&!ae?o.totalProgress():S.progress,M&&M(S),Ge&&Ge(S)}},ie,gt*rt,Ie-ie-gt*rt),hn&&hn(S,Se.tween)}}else S.isActive&&oe!==ie&&fn.restart(!0)}).pause()),m&&(ux[m]=S),y=S.trigger=ti(y||b!==!0&&b),ci=y&&y._gsap&&y._gsap.stRevert,ci&&(ci=ci(S)),b=b===!0?y:ti(b),_i(f)&&(f={targets:y,className:f}),b&&(j===!1||j===Qi||(j=!j&&b.parentNode&&b.parentNode.style&&Ji(b.parentNode).display==="flex"?!1:Ft),S.pin=b,Fe=ue.core.getCache(b),Fe.spacer?ur=Fe.pinState:(L&&(L=ti(L),L&&!L.nodeType&&(L=L.current||L.nativeElement),Fe.spacerIsNative=!!L,L&&(Fe.spacerState=Wf(L))),Fe.spacer=Bt=L||ut.createElement("div"),Bt.classList.add("pin-spacer"),m&&Bt.classList.add("pin-spacer-"+m),Fe.pinState=ur=Wf(b)),a.force3D!==!1&&ue.set(b,{force3D:!0}),S.spacer=Bt=Fe.spacer,hr=Ji(b),Do=hr[j+W.os2],$e=ue.getProperty(b),Vt=ue.quickSetter(b,W.a,Qt),D0(b,Bt,hr),Zr=Wf(b)),ee){zi=is(ee)?RS(ee,zS):zS,X=Xf("scroller-start",m,Z,W,zi,0),zn=Xf("scroller-end",m,Z,W,zi,0,X),qn=X["offset"+W.op.d2];var ta=ti(bo(Z,"content")||Z);wn=this.markerStart=Xf("start",m,ta,W,zi,qn,0,O),Rn=this.markerEnd=Xf("end",m,ta,W,zi,qn,0,O),O&&(ea=ue.quickSetter([wn,Rn],W.a,Qt)),!le&&!(Vr.length&&bo(Z,"fixedMarkers")===!0)&&(z8(fe?Ze:Z),ue.set([X,zn],{force3D:!0}),Qr=ue.quickSetter(X,W.a,Qt),Xn=ue.quickSetter(zn,W.a,Qt))}if(O){var Te=O.vars.onUpdate,ve=O.vars.onUpdateParams;O.eventCallback("onUpdate",function(){S.update(0,0,1),Te&&Te.apply(O,ve||[])})}if(S.previous=function(){return ke[ke.indexOf(S)-1]},S.next=function(){return ke[ke.indexOf(S)+1]},S.revert=function(ie,me){if(!me)return S.kill(!0);var he=ie!==!1||!S.enabled,_e=jn;he!==S.isReverted&&(he&&(li=Math.max(Me(),S.scroll.rec||0),ce=S.progress,_r=o&&o.progress()),wn&&[wn,Rn,X,zn].forEach(function($t){return $t.style.display=he?"none":"block"}),he&&(jn=S,S.update(he)),b&&(!D||!S.isActive)&&(he?B8(b,Bt,ur):D0(b,Bt,Ji(b),jt)),he||S.update(he),jn=_e,S.isReverted=he)},S.refresh=function(ie,me,he,_e){if(!((jn||!S.enabled)&&!me)){if(b&&ie&&rr){ln(n,"scrollEnd",mC);return}!Hn&&I&&I(S),jn=S,Se.tween&&!he&&(Se.tween.kill(),Se.tween=0),Ae&&Ae.pause(),T&&o&&(o.revert({kill:!1}).invalidate(),o.getChildren&&o.getChildren(!0,!0,!1).forEach(function(Li){return Li.vars.immediateRender&&Li.render(0,!0,!0)})),S.isReverted||S.revert(!0,!0),S._subPinOffset=!1;var $t=te(),Le=ne(),gt=O?O.duration():Or(Z,W),At=rt<=.01||!rt,lt=0,Ie=_e||0,He=is(he)?he.end:a.end,hn=a.endTrigger||y,We=is(he)?he.start:a.start||(a.start===0||!y?0:b?"0 0":"0 100%"),Ge=S.pinnedContainer=a.pinnedContainer&&ti(a.pinnedContainer,S),ui=y&&Math.max(0,ke.indexOf(S))||0,Pt=ui,ht,yt,na,ko,Wt,kt,Nn,Oa,Oi,ia,di,Ni,Na;for(ee&&is(he)&&(Ni=ue.getProperty(X,W.p),Na=ue.getProperty(zn,W.p));Pt-- >0;)kt=ke[Pt],kt.end||kt.refresh(0,1)||(jn=S),Nn=kt.pin,Nn&&(Nn===y||Nn===b||Nn===Ge)&&!kt.isReverted&&(ia||(ia=[]),ia.unshift(kt),kt.revert(!0,!0)),kt!==ke[Pt]&&(ui--,Pt--);for(Cn(We)&&(We=We(S)),We=CS(We,"start",S),Ne=US(We,y,$t,W,Me(),wn,X,S,Le,re,le,gt,O,S._startClamp&&"_startClamp")||(b?-.001:0),Cn(He)&&(He=He(S)),_i(He)&&!He.indexOf("+=")&&(~He.indexOf(" ")?He=(_i(We)?We.split(" ")[0]:"")+He:(lt=$h(He.substr(2),$t),He=_i(We)?We:(O?ue.utils.mapRange(0,O.duration(),O.scrollTrigger.start,O.scrollTrigger.end,Ne):Ne)+lt,hn=y)),He=CS(He,"end",S),ft=Math.max(Ne,US(He||(hn?"100% 0":gt),hn,$t,W,Me()+lt,Rn,zn,S,Le,re,le,gt,O,S._endClamp&&"_endClamp"))||-.001,lt=0,Pt=ui;Pt--;)kt=ke[Pt],Nn=kt.pin,Nn&&kt.start-kt._pinPush<=Ne&&!O&&kt.end>0&&(ht=kt.end-(S._startClamp?Math.max(0,kt.start):kt.start),(Nn===y&&kt.start-kt._pinPush<Ne||Nn===Ge)&&isNaN(We)&&(lt+=ht*(1-kt.progress)),Nn===b&&(Ie+=ht));if(Ne+=lt,ft+=lt,S._startClamp&&(S._startClamp+=lt),S._endClamp&&!Hn&&(S._endClamp=ft||-.001,ft=Math.min(ft,Or(Z,W))),rt=ft-Ne||(Ne-=.01)&&.001,At&&(ce=ue.utils.clamp(0,1,ue.utils.normalize(Ne,ft,li))),S._pinPush=Ie,wn&&lt&&(ht={},ht[W.a]="+="+lt,Ge&&(ht[W.p]="-="+Me()),ue.set([wn,Rn],ht)),b&&!(cx&&S.end>=Or(Z,W)))ht=Ji(b),ko=W===Jt,na=Me(),st=parseFloat($e(W.a))+Ie,!gt&&ft>1&&(di=(fe?ut.scrollingElement||Ti:Z).style,di={style:di,value:di["overflow"+W.a.toUpperCase()]},fe&&Ji(Ze)["overflow"+W.a.toUpperCase()]!=="scroll"&&(di.style["overflow"+W.a.toUpperCase()]="scroll")),D0(b,Bt,ht),Zr=Wf(b),yt=wa(b,!0),Oa=le&&To(Z,ko?Fn:Jt)(),j?(jt=[j+W.os2,rt+Ie+Qt],jt.t=Bt,Pt=j===Ft?hm(b,W)+rt+Ie:0,Pt&&(jt.push(W.d,Pt+Qt),Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=Pt+Qt)),kl(jt),Ge&&ke.forEach(function(Li){Li.pin===Ge&&Li.vars.pinSpacing!==!1&&(Li._subPinOffset=!0)}),le&&Me(li)):(Pt=hm(b,W),Pt&&Bt.style.flexBasis!=="auto"&&(Bt.style.flexBasis=Pt+Qt)),le&&(Wt={top:yt.top+(ko?na-Ne:Oa)+Qt,left:yt.left+(ko?Oa:na-Ne)+Qt,boxSizing:"border-box",position:"fixed"},Wt[vs]=Wt["max"+Gl]=Math.ceil(yt.width)+Qt,Wt[xs]=Wt["max"+Ly]=Math.ceil(yt.height)+Qt,Wt[Qi]=Wt[Qi+Yu]=Wt[Qi+Pu]=Wt[Qi+Fu]=Wt[Qi+Hu]="0",Wt[Ft]=ht[Ft],Wt[Ft+Yu]=ht[Ft+Yu],Wt[Ft+Pu]=ht[Ft+Pu],Wt[Ft+Fu]=ht[Ft+Fu],Wt[Ft+Hu]=ht[Ft+Hu],dr=$8(ur,Wt,D),Hn&&Me(0)),o?(Oi=o._initted,j0(1),o.render(o.duration(),!0,!0),fr=$e(W.a)-st+rt+Ie,In=Math.abs(rt-fr)>1,le&&In&&dr.splice(dr.length-2,2),o.render(0,!0,!0),Oi||o.invalidate(!0),o.parent||o.totalTime(o.totalTime()),j0(0)):fr=rt,di&&(di.value?di.style["overflow"+W.a.toUpperCase()]=di.value:di.style.removeProperty("overflow-"+W.a));else if(y&&Me()&&!O)for(yt=y.parentNode;yt&&yt!==Ze;)yt._pinOffset&&(Ne-=yt._pinOffset,ft-=yt._pinOffset),yt=yt.parentNode;ia&&ia.forEach(function(Li){return Li.revert(!1,!0)}),S.start=Ne,S.end=ft,dt=it=Hn?li:Me(),!O&&!Hn&&(dt<li&&Me(li),S.scroll.rec=0),S.revert(!1,!0),ge=An(),fn&&(oe=-1,fn.restart(!0)),jn=0,o&&ae&&(o._initted||_r)&&o.progress()!==_r&&o.progress(_r||0,!0).render(o.time(),!0,!0),(At||ce!==S.progress||O||T||o&&!o._initted)&&(o&&!ae&&(o._initted||ce||o.vars.immediateRender!==!1)&&o.totalProgress(O&&Ne<-.001&&!ce?ue.utils.normalize(Ne,ft,0):ce,!0),S.progress=At||(dt-Ne)/rt===ce?0:ce),b&&j&&(Bt._pinOffset=Math.round(S.progress*fr)),Ae&&Ae.invalidate(),isNaN(Ni)||(Ni-=ue.getProperty(X,W.p),Na-=ue.getProperty(zn,W.p),Kf(X,W,Ni),Kf(wn,W,Ni-(_e||0)),Kf(zn,W,Na),Kf(Rn,W,Na-(_e||0))),At&&!Hn&&S.update(),v&&!Hn&&!cr&&(cr=!0,v(S),cr=!1)}},S.getVelocity=function(){return(Me()-it)/(An()-wu)*1e3||0},S.endAnimation=function(){ru(S.callbackAnimation),o&&(Ae?Ae.progress(1):o.paused()?ae||ru(o,S.direction<0,1):ru(o,o.reversed()))},S.labelToScroll=function(ie){return o&&o.labels&&(Ne||S.refresh()||Ne)+o.labels[ie]/o.duration()*rt||0},S.getTrailing=function(ie){var me=ke.indexOf(S),he=S.direction>0?ke.slice(0,me).reverse():ke.slice(me+1);return(_i(ie)?he.filter(function(_e){return _e.vars.preventOverlaps===ie}):he).filter(function(_e){return S.direction>0?_e.end<=Ne:_e.start>=ft})},S.update=function(ie,me,he){if(!(O&&!he&&!ie)){var _e=Hn===!0?li:S.scroll(),$t=ie?0:(_e-Ne)/rt,Le=$t<0?0:$t>1?1:$t||0,gt=S.progress,At,lt,Ie,He,hn,We,Ge,ui;if(me&&(it=dt,dt=O?Me():_e,z&&(Jr=Wn,Wn=o&&!ae?o.totalProgress():Le)),E&&b&&!jn&&!Yf&&rr&&(!Le&&Ne<_e+(_e-it)/(An()-wu)*E?Le=1e-4:Le===1&&ft>_e+(_e-it)/(An()-wu)*E&&(Le=.9999)),Le!==gt&&S.enabled){if(At=S.isActive=!!Le&&Le<1,lt=!!gt&&gt<1,We=At!==lt,hn=We||!!Le!=!!gt,S.direction=Le>gt?1:-1,S.progress=Le,hn&&!jn&&(Ie=Le&&!gt?0:Le===1?1:gt===1?2:3,ae&&(He=!We&&G[Ie+1]!=="none"&&G[Ie+1]||G[Ie],ui=o&&(He==="complete"||He==="reset"||He in o))),H&&(We||ui)&&(ui||x||!o)&&(Cn(H)?H(S):S.getTrailing(H).forEach(function(na){return na.endAnimation()})),ae||(Ae&&!jn&&!Yf?(Ae._dp._time-Ae._start!==Ae._time&&Ae.render(Ae._dp._time-Ae._start),Ae.resetTo?Ae.resetTo("totalProgress",Le,o._tTime/o._tDur):(Ae.vars.totalProgress=Le,Ae.invalidate().restart())):o&&o.totalProgress(Le,!!(jn&&(ge||ie)))),b){if(ie&&j&&(Bt.style[j+W.os2]=Do),!le)Vt(Su(st+fr*Le));else if(hn){if(Ge=!ie&&Le>gt&&ft+1>_e&&_e+1>=Or(Z,W),D)if(!ie&&(At||Ge)){var Pt=wa(b,!0),ht=_e-Ne;BS(b,Ze,Pt.top+(W===Jt?ht:0)+Qt,Pt.left+(W===Jt?0:ht)+Qt)}else BS(b,Bt);kl(At||Ge?dr:Zr),In&&Le<1&&At||Vt(st+(Le===1&&!Ge?fr:0))}}z&&!Se.tween&&!jn&&!Yf&&fn.restart(!0),f&&(We||k&&Le&&(Le<1||!A0))&&ld(f.targets).forEach(function(na){return na.classList[At||k?"add":"remove"](f.className)}),u&&!ae&&!ie&&u(S),hn&&!jn?(ae&&(ui&&(He==="complete"?o.pause().totalProgress(1):He==="reset"?o.restart(!0).pause():He==="restart"?o.restart(!0):o[He]()),u&&u(S)),(We||!A0)&&(p&&We&&C0(S,p),V[Ie]&&C0(S,V[Ie]),k&&(Le===1?S.kill(!1,1):V[Ie]=0),We||(Ie=Le===1?1:3,V[Ie]&&C0(S,V[Ie]))),U&&!At&&Math.abs(S.getVelocity())>(Tu(U)?U:2500)&&(ru(S.callbackAnimation),Ae?Ae.progress(1):ru(o,He==="reverse"?1:!Le,1))):ae&&u&&!jn&&u(S)}if(Xn){var yt=O?_e/O.duration()*(O._caScrollDist||0):_e;Qr(yt+(X._isFlipped?1:0)),Xn(yt)}ea&&ea(-_e/O.duration()*(O._caScrollDist||0))}},S.enable=function(ie,me){S.enabled||(S.enabled=!0,ln(Z,"resize",ju),fe||ln(Z,"scroll",cl),I&&ln(n,"refreshInit",I),ie!==!1&&(S.progress=ce=0,dt=it=oe=Me()),me!==!1&&S.refresh())},S.getTween=function(ie){return ie&&Se?Se.tween:Ae},S.setPositions=function(ie,me,he,_e){if(O){var $t=O.scrollTrigger,Le=O.duration(),gt=$t.end-$t.start;ie=$t.start+gt*ie/Le,me=$t.start+gt*me/Le}S.refresh(!1,!1,{start:MS(ie,he&&!!S._startClamp),end:MS(me,he&&!!S._endClamp)},_e),S.update()},S.adjustPinSpacing=function(ie){if(jt&&ie){var me=jt.indexOf(W.d)+1;jt[me]=parseFloat(jt[me])+ie+Qt,jt[1]=parseFloat(jt[1])+ie+Qt,kl(jt)}},S.disable=function(ie,me){if(S.enabled&&(ie!==!1&&S.revert(!0,!0),S.enabled=S.isActive=!1,me||Ae&&Ae.pause(),li=0,Fe&&(Fe.uncache=1),I&&sn(n,"refreshInit",I),fn&&(fn.pause(),Se.tween&&Se.tween.kill()&&(Se.tween=0)),!fe)){for(var he=ke.length;he--;)if(ke[he].scroller===Z&&ke[he]!==S)return;sn(Z,"resize",ju),fe||sn(Z,"scroll",cl)}},S.kill=function(ie,me){S.disable(ie,me),Ae&&!me&&Ae.kill(),m&&delete ux[m];var he=ke.indexOf(S);he>=0&&ke.splice(he,1),he===Pn&&Hh>0&&Pn--,he=0,ke.forEach(function(_e){return _e.scroller===S.scroller&&(he=1)}),he||Hn||(S.scroll.rec=0),o&&(o.scrollTrigger=null,ie&&o.revert({kill:!1}),me||o.kill()),wn&&[wn,Rn,X,zn].forEach(function(_e){return _e.parentNode&&_e.parentNode.removeChild(_e)}),Gu===S&&(Gu=0),b&&(Fe&&(Fe.uncache=1),he=0,ke.forEach(function(_e){return _e.pin===b&&he++}),he||(Fe.spacer=0)),a.onKill&&a.onKill(S)},ke.push(S),S.enable(!1,!1),ci&&ci(S),o&&o.add&&!rt){var Ee=S.update;S.update=function(){S.update=Ee,Oe.cache++,Ne||ft||S.refresh()},ue.delayedCall(.01,S.update),rt=.01,Ne=ft=0}else S.refresh();b&&U8()},n.register=function(a){return hl||(ue=a||lC(),sC()&&window.document&&n.enable(),hl=_u),hl},n.defaults=function(a){if(a)for(var o in a)If[o]=a[o];return If},n.disable=function(a,o){_u=0,ke.forEach(function(u){return u[o?"kill":"disable"](a)}),sn(ze,"wheel",cl),sn(ut,"scroll",cl),clearInterval(Hf),sn(ut,"touchcancel",Dr),sn(Ze,"touchstart",Dr),Gf(sn,ut,"pointerdown,touchstart,mousedown",DS),Gf(sn,ut,"pointerup,touchend,mouseup",kS),dm.kill(),Ff(sn);for(var c=0;c<Oe.length;c+=3)qf(sn,Oe[c],Oe[c+1]),qf(sn,Oe[c],Oe[c+2])},n.enable=function(){if(ze=window,ut=document,Ti=ut.documentElement,Ze=ut.body,ue&&(ld=ue.utils.toArray,$u=ue.utils.clamp,lx=ue.core.context||Dr,j0=ue.core.suppressOverwrites||Dr,Ry=ze.history.scrollRestoration||"auto",dx=ze.pageYOffset||0,ue.core.globals("ScrollTrigger",n),Ze)){_u=1,Dl=document.createElement("div"),Dl.style.height="100vh",Dl.style.position="absolute",vC(),D8(),Lt.register(ue),n.isTouch=Lt.isTouch,co=Lt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),sx=Lt.isTouch===1,ln(ze,"wheel",cl),ky=[ze,ut,Ti,Ze],ue.matchMedia?(n.matchMedia=function(p){var v=ue.matchMedia(),x;for(x in p)v.add(x,p[x]);return v},ue.addEventListener("matchMediaInit",function(){return By()}),ue.addEventListener("matchMediaRevert",function(){return pC()}),ue.addEventListener("matchMedia",function(){ls(0,1),Ts("matchMedia")}),ue.matchMedia().add("(orientation: portrait)",function(){return M0(),M0})):console.warn("Requires GSAP 3.11.0 or later"),M0(),ln(ut,"scroll",cl);var a=Ze.hasAttribute("style"),o=Ze.style,c=o.borderTopStyle,u=ue.core.Animation.prototype,f,m;for(u.revert||Object.defineProperty(u,"revert",{value:function(){return this.time(-.01,!0)}}),o.borderTopStyle="solid",f=wa(Ze),Jt.m=Math.round(f.top+Jt.sc())||0,Fn.m=Math.round(f.left+Fn.sc())||0,c?o.borderTopStyle=c:o.removeProperty("border-top-style"),a||(Ze.setAttribute("style",""),Ze.removeAttribute("style")),Hf=setInterval(OS,250),ue.delayedCall(.5,function(){return Yf=0}),ln(ut,"touchcancel",Dr),ln(Ze,"touchstart",Dr),Gf(ln,ut,"pointerdown,touchstart,mousedown",DS),Gf(ln,ut,"pointerup,touchend,mouseup",kS),ox=ue.utils.checkPrefix("transform"),Yh.push(ox),hl=An(),dm=ue.delayedCall(.2,ls).pause(),ml=[ut,"visibilitychange",function(){var p=ze.innerWidth,v=ze.innerHeight;ut.hidden?(AS=p,ES=v):(AS!==p||ES!==v)&&ju()},ut,"DOMContentLoaded",ls,ze,"load",ls,ze,"resize",ju],Ff(ln),ke.forEach(function(p){return p.enable(0,1)}),m=0;m<Oe.length;m+=3)qf(sn,Oe[m],Oe[m+1]),qf(sn,Oe[m],Oe[m+2])}},n.config=function(a){"limitCallbacks"in a&&(A0=!!a.limitCallbacks);var o=a.syncInterval;o&&clearInterval(Hf)||(Hf=o)&&setInterval(OS,o),"ignoreMobileResize"in a&&(sx=n.isTouch===1&&a.ignoreMobileResize),"autoRefreshEvents"in a&&(Ff(sn)||Ff(ln,a.autoRefreshEvents||"none"),rC=(a.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(a,o){var c=ti(a),u=Oe.indexOf(c),f=_s(c);~u&&Oe.splice(u,f?6:2),o&&(f?Vr.unshift(ze,o,Ze,o,Ti,o):Vr.unshift(c,o))},n.clearMatchMedia=function(a){ke.forEach(function(o){return o._ctx&&o._ctx.query===a&&o._ctx.kill(!0,!0)})},n.isInViewport=function(a,o,c){var u=(_i(a)?ti(a):a).getBoundingClientRect(),f=u[c?vs:xs]*o||0;return c?u.right-f>0&&u.left+f<ze.innerWidth:u.bottom-f>0&&u.top+f<ze.innerHeight},n.positionInViewport=function(a,o,c){_i(a)&&(a=ti(a));var u=a.getBoundingClientRect(),f=u[c?vs:xs],m=o==null?f/2:o in mm?mm[o]*f:~o.indexOf("%")?parseFloat(o)*f/100:parseFloat(o)||0;return c?(u.left+m)/ze.innerWidth:(u.top+m)/ze.innerHeight},n.killAll=function(a){if(ke.slice(0).forEach(function(c){return c.vars.id!=="ScrollSmoother"&&c.kill()}),a!==!0){var o=Ss.killAll||[];Ss={},o.forEach(function(c){return c()})}},n}();Ve.version="3.13.0";Ve.saveStyles=function(n){return n?ld(n).forEach(function(e){if(e&&e.style){var r=wi.indexOf(e);r>=0&&wi.splice(r,5),wi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),ue.core.getCache(e),lx())}}):wi};Ve.revert=function(n,e){return By(!n,e)};Ve.create=function(n,e){return new Ve(n,e)};Ve.refresh=function(n){return n?ju(!0):(hl||Ve.register())&&ls(!0)};Ve.update=function(n){return++Oe.cache&&Aa(n===!0?2:0)};Ve.clearScrollMemory=gC;Ve.maxScroll=function(n,e){return Or(n,e?Fn:Jt)};Ve.getScrollFunc=function(n,e){return To(ti(n),e?Fn:Jt)};Ve.getById=function(n){return ux[n]};Ve.getAll=function(){return ke.filter(function(n){return n.vars.id!=="ScrollSmoother"})};Ve.isScrolling=function(){return!!rr};Ve.snapDirectional=Uy;Ve.addEventListener=function(n,e){var r=Ss[n]||(Ss[n]=[]);~r.indexOf(e)||r.push(e)};Ve.removeEventListener=function(n,e){var r=Ss[n],a=r&&r.indexOf(e);a>=0&&r.splice(a,1)};Ve.batch=function(n,e){var r=[],a={},o=e.interval||.016,c=e.batchMax||1e9,u=function(p,v){var x=[],y=[],b=ue.delayedCall(o,function(){v(x,y),x=[],y=[]}).pause();return function(j){x.length||b.restart(!0),x.push(j.trigger),y.push(j),c<=x.length&&b.progress(1)}},f;for(f in e)a[f]=f.substr(0,2)==="on"&&Cn(e[f])&&f!=="onRefreshInit"?u(f,e[f]):e[f];return Cn(c)&&(c=c(),ln(Ve,"refresh",function(){return c=e.batchMax()})),ld(n).forEach(function(m){var p={};for(f in a)p[f]=a[f];p.trigger=m,r.push(Ve.create(p))}),r};var $S=function(e,r,a,o){return r>o?e(o):r<0&&e(0),a>o?(o-r)/(a-r):a<0?r/(r-a):1},k0=function n(e,r){r===!0?e.style.removeProperty("touch-action"):e.style.touchAction=r===!0?"auto":r?"pan-"+r+(Lt.isTouch?" pinch-zoom":""):"none",e===Ti&&n(Ze,r)},Zf={auto:1,scroll:1},H8=function(e){var r=e.event,a=e.target,o=e.axis,c=(r.changedTouches?r.changedTouches[0]:r).target,u=c._gsap||ue.core.getCache(c),f=An(),m;if(!u._isScrollT||f-u._isScrollT>2e3){for(;c&&c!==Ze&&(c.scrollHeight<=c.clientHeight&&c.scrollWidth<=c.clientWidth||!(Zf[(m=Ji(c)).overflowY]||Zf[m.overflowX]));)c=c.parentNode;u._isScroll=c&&c!==a&&!_s(c)&&(Zf[(m=Ji(c)).overflowY]||Zf[m.overflowX]),u._isScrollT=f}(u._isScroll||o==="x")&&(r.stopPropagation(),r._gsapAllow=!0)},yC=function(e,r,a,o){return Lt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:r,onWheel:o=o&&H8,onPress:o,onDrag:o,onScroll:o,onEnable:function(){return a&&ln(ut,Lt.eventTypes[0],HS,!1,!0)},onDisable:function(){return sn(ut,Lt.eventTypes[0],HS,!0)}})},Y8=/(input|label|select|textarea)/i,PS,HS=function(e){var r=Y8.test(e.target.tagName);(r||PS)&&(e._gsapAllow=!0,PS=r)},F8=function(e){is(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var r=e,a=r.normalizeScrollX,o=r.momentum,c=r.allowNestedScroll,u=r.onRelease,f,m,p=ti(e.target)||Ti,v=ue.core.globals().ScrollSmoother,x=v&&v.get(),y=co&&(e.content&&ti(e.content)||x&&e.content!==!1&&!x.smooth()&&x.content()),b=To(p,Jt),j=To(p,Fn),T=1,E=(Lt.isTouch&&ze.visualViewport?ze.visualViewport.scale*ze.visualViewport.width:ze.outerWidth)/ze.innerWidth,C=0,M=Cn(o)?function(){return o(f)}:function(){return o||2.8},k,z,D=yC(p,e.type,!0,c),L=function(){return z=!1},O=Dr,U=Dr,H=function(){m=Or(p,Jt),U=$u(co?1:0,m),a&&(O=$u(0,Or(p,Fn))),k=ys},W=function(){y._gsap.y=Su(parseFloat(y._gsap.y)+b.offset)+"px",y.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(y._gsap.y)+", 0, 1)",b.offset=b.cacheID=0},ae=function(){if(z){requestAnimationFrame(L);var ee=Su(f.deltaY/2),re=U(b.v-ee);if(y&&re!==b.v+b.offset){b.offset=re-b.v;var S=Su((parseFloat(y&&y._gsap.y)||0)-b.offset);y.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+S+", 0, 1)",y._gsap.y=S+"px",b.cacheID=Oe.cache,Aa()}return!0}b.offset&&W(),z=!0},Z,se,fe,le,V=function(){H(),Z.isActive()&&Z.vars.scrollY>m&&(b()>m?Z.progress(1)&&b(m):Z.resetTo("scrollY",m))};return y&&ue.set(y,{y:"+=0"}),e.ignoreCheck=function(G){return co&&G.type==="touchmove"&&ae()||T>1.05&&G.type!=="touchstart"||f.isGesturing||G.touches&&G.touches.length>1},e.onPress=function(){z=!1;var G=T;T=Su((ze.visualViewport&&ze.visualViewport.scale||1)/E),Z.pause(),G!==T&&k0(p,T>1.01?!0:a?!1:"x"),se=j(),fe=b(),H(),k=ys},e.onRelease=e.onGestureStart=function(G,ee){if(b.offset&&W(),!ee)le.restart(!0);else{Oe.cache++;var re=M(),S,I;a&&(S=j(),I=S+re*.05*-G.velocityX/.227,re*=$S(j,S,I,Or(p,Fn)),Z.vars.scrollX=O(I)),S=b(),I=S+re*.05*-G.velocityY/.227,re*=$S(b,S,I,Or(p,Jt)),Z.vars.scrollY=U(I),Z.invalidate().duration(re).play(.01),(co&&Z.vars.scrollY>=m||S>=m-1)&&ue.to({},{onUpdate:V,duration:re})}u&&u(G)},e.onWheel=function(){Z._ts&&Z.pause(),An()-C>1e3&&(k=0,C=An())},e.onChange=function(G,ee,re,S,I){if(ys!==k&&H(),ee&&a&&j(O(S[2]===ee?se+(G.startX-G.x):j()+ee-S[1])),re){b.offset&&W();var te=I[2]===re,ne=te?fe+G.startY-G.y:b()+re-I[1],oe=U(ne);te&&ne!==oe&&(fe+=oe-ne),b(oe)}(re||ee)&&Aa()},e.onEnable=function(){k0(p,a?!1:"x"),Ve.addEventListener("refresh",V),ln(ze,"resize",V),b.smooth&&(b.target.style.scrollBehavior="auto",b.smooth=j.smooth=!1),D.enable()},e.onDisable=function(){k0(p,!0),sn(ze,"resize",V),Ve.removeEventListener("refresh",V),D.kill()},e.lockAxis=e.lockAxis!==!1,f=new Lt(e),f.iOS=co,co&&!b()&&b(1),co&&ue.ticker.add(Dr),le=f._dc,Z=ue.to(f,{ease:"power4",paused:!0,inherit:!1,scrollX:a?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:xC(b,b(),function(){return Z.pause()})},onUpdate:Aa,onComplete:le.vars.onComplete}),f};Ve.sort=function(n){if(Cn(n))return ke.sort(n);var e=ze.pageYOffset||0;return Ve.getAll().forEach(function(r){return r._sortY=r.trigger?e+r.trigger.getBoundingClientRect().top:r.start+ze.innerHeight}),ke.sort(n||function(r,a){return(r.vars.refreshPriority||0)*-1e6+(r.vars.containerAnimation?1e6:r._sortY)-((a.vars.containerAnimation?1e6:a._sortY)+(a.vars.refreshPriority||0)*-1e6)})};Ve.observe=function(n){return new Lt(n)};Ve.normalizeScroll=function(n){if(typeof n>"u")return $n;if(n===!0&&$n)return $n.enable();if(n===!1){$n&&$n.kill(),$n=n;return}var e=n instanceof Lt?n:F8(n);return $n&&$n.target===e.target&&$n.kill(),_s(e.target)&&($n=e),e};Ve.core={_getVelocityProp:ax,_inputObserver:yC,_scrollers:Oe,_proxies:Vr,bridge:{ss:function(){rr||Ts("scrollStart"),rr=An()},ref:function(){return jn}}};lC()&&ue.registerPlugin(Ve);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let au,ul,hx,G8=()=>hx||SC.register(window.gsap),YS=typeof Intl<"u"?new Intl.Segmenter:0,pm=n=>typeof n=="string"?pm(document.querySelectorAll(n)):"length"in n?Array.from(n):[n],FS=n=>pm(n).filter(e=>e instanceof HTMLElement),mx=[],R0=function(){},q8=/\s+/g,GS=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),qS={left:0,top:0,width:0,height:0},IS=(n,e)=>{if(e){let r=new Set(n.join("").match(e)||mx),a=n.length,o,c,u,f;if(r.size)for(;--a>-1;){c=n[a];for(u of r)if(u.startsWith(c)&&u.length>c.length){for(o=0,f=c;u.startsWith(f+=n[a+ ++o])&&f.length<u.length;);if(o&&f.length===u.length){n[a]=u,n.splice(a+1,o);break}}}}return n},XS=n=>window.getComputedStyle(n).display==="inline"&&(n.style.display="inline-block"),dl=(n,e,r)=>e.insertBefore(typeof n=="string"?document.createTextNode(n):n,r),px=(n,e,r)=>{let a=e[n+"sClass"]||"",{tag:o="div",aria:c="auto",propIndex:u=!1}=e,f=n==="line"?"block":"inline-block",m=a.indexOf("++")>-1,p=v=>{let x=document.createElement(o),y=r.length+1;return a&&(x.className=a+(m?" "+a+y:"")),u&&x.style.setProperty("--"+n,y+""),c!=="none"&&x.setAttribute("aria-hidden","true"),o!=="span"&&(x.style.position="relative",x.style.display=f),x.textContent=v,r.push(x),x};return m&&(a=a.replace("++","")),p.collection=r,p},I8=(n,e,r,a)=>{let o=px("line",r,a),c=window.getComputedStyle(n).textAlign||"left";return(u,f)=>{let m=o("");for(m.style.textAlign=c,n.insertBefore(m,e[u]);u<f;u++)m.appendChild(e[u]);m.normalize()}},bC=(n,e,r,a,o,c,u,f,m,p)=>{var v;let x=Array.from(n.childNodes),y=0,{wordDelimiter:b,reduceWhiteSpace:j=!0,prepareText:T}=e,E=n.getBoundingClientRect(),C=E,M=!j&&window.getComputedStyle(n).whiteSpace.substring(0,3)==="pre",k=0,z=r.collection,D,L,O,U,H,W,ae,Z,se,fe,le,V,G,ee,re,S,I,te;for(typeof b=="object"?(O=b.delimiter||b,L=b.replaceWith||""):L=b===""?"":b||" ",D=L!==" ";y<x.length;y++)if(U=x[y],U.nodeType===3){for(re=U.textContent||"",j?re=re.replace(q8," "):M&&(re=re.replace(/\n/g,L+`
`)),T&&(re=T(re,n)),U.textContent=re,H=L||O?re.split(O||L):re.match(f)||mx,I=H[H.length-1],Z=D?I.slice(-1)===" ":!I,I||H.pop(),C=E,ae=D?H[0].charAt(0)===" ":!H[0],ae&&dl(" ",n,U),H[0]||H.shift(),IS(H,m),c&&p||(U.textContent=""),se=1;se<=H.length;se++)if(S=H[se-1],!j&&M&&S.charAt(0)===`
`&&((v=U.previousSibling)==null||v.remove(),dl(document.createElement("br"),n,U),S=S.slice(1)),!j&&S==="")dl(L,n,U);else if(S===" ")n.insertBefore(document.createTextNode(" "),U);else{if(D&&S.charAt(0)===" "&&dl(" ",n,U),k&&se===1&&!ae&&z.indexOf(k.parentNode)>-1?(W=z[z.length-1],W.appendChild(document.createTextNode(a?"":S))):(W=r(a?"":S),dl(W,n,U),k&&se===1&&!ae&&W.insertBefore(k,W.firstChild)),a)for(le=YS?IS([...YS.segment(S)].map(ne=>ne.segment),m):S.match(f)||mx,te=0;te<le.length;te++)W.appendChild(le[te]===" "?document.createTextNode(" "):a(le[te]));if(c&&p){if(re=U.textContent=re.substring(S.length+1,re.length),fe=W.getBoundingClientRect(),fe.top>C.top&&fe.left<=C.left){for(V=n.cloneNode(),G=n.childNodes[0];G&&G!==W;)ee=G,G=G.nextSibling,V.appendChild(ee);n.parentNode.insertBefore(V,n),o&&XS(V)}C=fe}(se<H.length||Z)&&dl(se>=H.length?" ":D&&S.slice(-1)===" "?" "+L:L,n,U)}n.removeChild(U),k=0}else U.nodeType===1&&(u&&u.indexOf(U)>-1?(z.indexOf(U.previousSibling)>-1&&z[z.length-1].appendChild(U),k=U):(bC(U,e,r,a,o,c,u,f,m,!0),k=0),o&&XS(U))};const wC=class _C{constructor(e,r){this.isSplit=!1,G8(),this.elements=FS(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=r,this._split=()=>this.isSplit&&this.split(this.vars);let a=[],o,c=()=>{let u=a.length,f;for(;u--;){f=a[u];let m=f.element.offsetWidth;if(m!==f.width){f.width=m,this._split();return}}};this._data={orig:a,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(o),o=setTimeout(c,200)})},R0(this),this.split(r)}split(e){this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:r="chars,words,lines",aria:a="auto",deepSlice:o=!0,smartWrap:c,onSplit:u,autoSplit:f=!1,specialChars:m,mask:p}=this.vars,v=r.indexOf("lines")>-1,x=r.indexOf("chars")>-1,y=r.indexOf("words")>-1,b=x&&!y&&!v,j=m&&("push"in m?new RegExp("(?:"+m.join("|")+")","gu"):m),T=j?new RegExp(j.source+"|"+GS.source,"gu"):GS,E=!!e.ignore&&FS(e.ignore),{orig:C,animTime:M,obs:k}=this._data,z;return(x||y||v)&&(this.elements.forEach((D,L)=>{C[L]={element:D,html:D.innerHTML,ariaL:D.getAttribute("aria-label"),ariaH:D.getAttribute("aria-hidden")},a==="auto"?D.setAttribute("aria-label",(D.textContent||"").trim()):a==="hidden"&&D.setAttribute("aria-hidden","true");let O=[],U=[],H=[],W=x?px("char",e,O):null,ae=px("word",e,U),Z,se,fe,le;if(bC(D,e,ae,W,b,o&&(v||b),E,T,j,!1),v){let V=pm(D.childNodes),G=I8(D,V,e,H),ee,re=[],S=0,I=V.map(ne=>ne.nodeType===1?ne.getBoundingClientRect():qS),te=qS;for(Z=0;Z<V.length;Z++)ee=V[Z],ee.nodeType===1&&(ee.nodeName==="BR"?(re.push(ee),G(S,Z+1),S=Z+1,te=I[S]):(Z&&I[Z].top>te.top&&I[Z].left<=te.left&&(G(S,Z),S=Z),te=I[Z]));S<Z&&G(S,Z),re.forEach(ne=>{var oe;return(oe=ne.parentNode)==null?void 0:oe.removeChild(ne)})}if(!y){for(Z=0;Z<U.length;Z++)if(se=U[Z],x||!se.nextSibling||se.nextSibling.nodeType!==3)if(c&&!v){for(fe=document.createElement("span"),fe.style.whiteSpace="nowrap";se.firstChild;)fe.appendChild(se.firstChild);se.replaceWith(fe)}else se.replaceWith(...se.childNodes);else le=se.nextSibling,le&&le.nodeType===3&&(le.textContent=(se.textContent||"")+(le.textContent||""),se.remove());U.length=0,D.normalize()}this.lines.push(...H),this.words.push(...U),this.chars.push(...O)}),p&&this[p]&&this.masks.push(...this[p].map(D=>{let L=D.cloneNode();return D.replaceWith(L),L.appendChild(D),D.className&&(L.className=D.className.replace(/(\b\w+\b)/g,"$1-mask")),L.style.overflow="clip",L}))),this.isSplit=!0,ul&&(f?ul.addEventListener("loadingdone",this._split):ul.status==="loading"&&console.warn("SplitText called before fonts loaded")),(z=u&&u(this))&&z.totalTime&&(this._data.anim=M?z.totalTime(M):z),v&&f&&this.elements.forEach((D,L)=>{C[L].width=D.offsetWidth,k&&k.observe(D)}),this}revert(){var e,r;let{orig:a,anim:o,obs:c}=this._data;return c&&c.disconnect(),a.forEach(({element:u,html:f,ariaL:m,ariaH:p})=>{u.innerHTML=f,m?u.setAttribute("aria-label",m):u.removeAttribute("aria-label"),p?u.setAttribute("aria-hidden",p):u.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=a.length=this.masks.length=0,this.isSplit=!1,ul==null||ul.removeEventListener("loadingdone",this._split),o&&(this._data.animTime=o.totalTime(),o.revert()),(r=(e=this.vars).onRevert)==null||r.call(e,this),this}static create(e,r){return new _C(e,r)}static register(e){au=au||e||window.gsap,au&&(pm=au.utils.toArray,R0=au.core.context||R0),!hx&&window.innerWidth>0&&(ul=document.fonts,hx=!0)}};wC.version="3.13.0";let SC=wC;WE.registerPlugin(Ve,SC);const $r="#44b8f3",en="#002147",Qf={hidden:{opacity:0,y:50},visible:{opacity:1,y:0,transition:{duration:.4,ease:"easeOut",when:"beforeChildren",staggerChildren:.05}}},z0={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}}},X8=w.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  border-left: 17px solid ${$r};
  border-right: 17px solid ${$r};
  box-sizing: border-box;
  /* overflow: hidden; */ /* Temporarily removed to diagnose folder visibility */
  background-color: white;
  @media (max-width: 600px) {
    border-left: 0;
    border-right: 0;
  }
`,W8=w.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
  width: 100%;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
    width: 100vw;
  }
`,K8=w.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: url('/hero-home.jpeg') center/cover no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
  z-index: 1;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 2;
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 768px) {
    min-height: 100vh;
    height: 100vh;
    padding: 0;
    align-items: center;
    justify-content: center;
    background-position: center center;
    background-size: cover;
    text-align: center;
    h1, h2, h3, h4, h5, h6, p, span, div {
      text-align: center !important;
      word-break: break-word;
    }
  }
`,Z8=w.div`
  text-align: center;
  max-width: 90vw;
  z-index: 3;
`,Q8=w.h1`
  color: #FFFFFF;
  font-size: clamp(3rem, 8vw, 8rem);
  font-family: 'Benton Sans Bold, var(--andover-font-sans)';
  font-weight: 700;
  letter-spacing: 0.02em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  line-height: 1.1;
  margin: 0 0 1rem 0;
  text-transform: none;

  @media (max-width: 768px) {
    font-size: clamp(2.5rem, 6vw, 4rem);
    letter-spacing: 0.01em;
  }
`,J8=w.p`
  color: #FFFFFF;
  font-size: clamp(1.2rem, 2.5vw, 2rem);
  font-family: var(--andover-font-serif);
  font-weight: 400;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  line-height: 1.3;
  margin: 0;
  opacity: 0.95;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2vw, 1.5rem);
  }
`,eL=w.section`
  margin: 4rem 0;
  padding: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  border: 2px dotted ${$r};
  @media (max-width: 768px) {
    margin: 1rem 0;
    padding: 0.5rem 0.2rem;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border-width: 1.5px;
  }
`,tL=w.div`
  border-right: 1px dashed ${$r};
  border-bottom: 1px dashed ${$r};
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: var(--andover-font-serif);
  color: ${en};
  text-align: center;
  grid-column: ${n=>n.gridColumn||"span 3"};
  grid-row: ${n=>n.gridRow||"auto"};

  @media (max-width: 768px) {
    grid-column: span 3;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    grid-column: unset !important;
    grid-row: unset !important;
    width: 100%;
    border-right: none;
    border-bottom: 1px dashed ${$r};
    border-radius: 0.7rem;
    margin-bottom: 0.5rem;
    padding: 0.7rem 0.2rem;
    font-size: 0.98rem;
    min-width: 0;
    box-shadow: 0 1px 2px rgba(0,0,0,0.04);
    &:last-child {
      border-bottom: none;
      margin-bottom: 0;
    }
  }
`,nL=w.div`
  font-size: 3rem;
  margin-bottom: 0.8rem;
  color: ${en};
`,WS=w.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  color: ${en};
  font-family: 'Roboto', var(--andover-font-sans);
`,KS=w.div`
  font-size: 1rem;
  text-align: center;
  color: ${en};
  font-family: var(--andover-font-sans);
`,iL=({percentage:n})=>{const r=2*Math.PI*45,a=r-n/100*r;return d.jsxs("svg",{width:"100",height:"100",viewBox:"0 0 100 100",style:{transform:"rotate(-90deg)",marginBottom:"0.8rem"},children:[d.jsx("circle",{cx:"50",cy:"50",r:45,fill:"none",stroke:en,strokeWidth:"10"}),d.jsx(er.circle,{cx:"50",cy:"50",r:45,fill:"none",stroke:$r,strokeWidth:"10",strokeLinecap:"round",strokeDasharray:r,initial:{strokeDashoffset:r},animate:{strokeDashoffset:a},transition:{duration:.5,ease:"easeOut"}})]})},rL=w.div`
  font-size: 1.3rem;
  font-family: 'Roboto', var(--andover-font-sans);
  font-weight: 700;
  color: ${en};
  margin-bottom: 0.4rem;
  letter-spacing: 0.02em;
  text-align: center;
`,aL=w.div`
  font-size: 0.8rem;
  color: ${en};
  text-align: center;
  font-family: var(--andover-font-sans);
`,oL=()=>d.jsx("span",{children:"🌐"}),sL=()=>d.jsx("span",{children:"🇺🇳"}),lL=()=>d.jsx("span",{children:"🏛️"}),cL=()=>d.jsx("span",{children:"📖"}),uL=()=>d.jsx("span",{children:"✋"}),dL=()=>d.jsx("span",{children:"🏙️"}),fL=()=>d.jsx("span",{role:"img","aria-label":"money",children:"💸"}),hL=[{id:1,type:"pie",percentage:46,label:"Members",number:"26,927",pieLabel:"49% Male, 48% Female, 3% Others",gridColumn:"span 3",gridRow:"1"},{id:2,type:"icon",icon:d.jsx(oL,{}),label:"Countries",number:"161",gridColumn:"span 3",gridRow:"1"},{id:3,type:"icon",icon:d.jsx(sL,{}),label:"Intergovermental Bodies Engaged",number:"37",gridColumn:"span 3",gridRow:"1"},{id:4,type:"icon",icon:d.jsx(lL,{}),label:"Year of Founding",number:"2021",gridColumn:"span 3",gridRow:"1"},{id:6,type:"icon",icon:d.jsx(uL,{}),label:"Inputs,Statements<br/>and Interventions Produced in 2024",number:"32",gridColumn:"span 3",gridRow:"2"},{id:7,type:"icon",icon:d.jsx(cL,{}),label:"Programs",number:"12",gridColumn:"span 3",gridRow:"2"},{id:8,type:"icon",icon:d.jsx(dL,{}),label:"Raised in 2024",number:"$24K",gridColumn:"span 3",gridRow:"2"},{id:5,type:"icon",icon:d.jsx(fL,{}),label:"Membership Fee",number:"$0",gridColumn:"span 3",gridRow:"2"}],mL=w(er.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    padding: 1rem 0.2rem;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
  }
`,pL=w.h2`
  grid-column: 1 / -1;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${en};
  font-family: var(--andover-font-serif);
  text-align: center;
`,gL=w.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  justify-items: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 1.2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,O0=w.div`
  grid-column: span 4;
  text-align: center;
  color: ${en};
  padding: 1.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    grid-column: span 12;
  }
  @media (max-width: 600px) {
    grid-column: span 1;
    padding: 0.7rem 0.2rem;
    font-size: 0.98rem;
  }

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${en};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1.1rem;
    margin: 0;
    color: ${en};
    line-height: 1.6;
  }
`,vL=w.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3rem;
  padding: 0 4rem;
  align-items: stretch;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 0.5rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
  }
`,xL=w(er.section)`
  margin: 4rem 0; /* Add margin to the section */
  background: white; /* Add white background */
  border-radius: 1rem; /* Add rounded corners */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* Add shadow */
  overflow: hidden;
`,yL=w.div`
  grid-column: span 6;
  min-width: 0;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    @media (max-width: 768px) {
      max-width: 100vw;
      width: 100vw;
      height: auto;
      object-fit: cover;
      display: block;
      margin: 0 auto;
    }
  }
`,bL=w.div`
  grid-column: span 6;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
  @media (max-width: 600px) {
    grid-column: span 1;
    gap: 1rem;
  }
`,wL=w.div`
  text-transform: uppercase; /* Equivalent to uppercase */
  font-size: 0.875rem; /* Equivalent to text-sm */
  letter-spacing: 0.05em; /* Equivalent to tracking-wider */
  color: #a0a0a0; /* Equivalent to text-gray-400 */
  margin-bottom: 2rem; /* Space below the header */
`,_L=w.div`
  cursor: pointer;
  border: 1.5px solid #e0e0e0;
  border-radius: 0.75rem;
  padding: 1.5rem;
  transition: all 300ms ease-in-out;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  border-left: ${({$isHovered:n})=>n?`4px solid ${$r}`:"1.5px solid #e0e0e0"};

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    letter-spacing: -0.025em;
    margin-bottom: 0.75rem;
    transition: color 300ms ease-in-out;
  }
/* This is the new part for the link */
  h3 a {
    color: inherit;
    text-decoration: none;
  }
  p {
    font-size: 1rem;
    color: #777;
    margin-top: 0.5rem;
    line-height: 1.6;
  }

  &:hover {
    border-color: ${$r};
    background-color: #f9f9f9;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    h3 {
      color: ${$r};
    }
  }
`,SL=w(er.section)`
  margin: 4rem 0;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    margin: 1.5rem 0;
  }
`,TL=w.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${en};
  font-family: var(--andover-font-serif);
`,jL=w.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,AL=w.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 300ms ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.08);
  }
`,EL=w.div`
  background: url(${n=>n.imageSrc||"https://via.placeholder.com/260x140?text=News"}) center/cover no-repeat;
  height: 140px;

  @media (max-width: 600px) {
    height: 120px;
  }
`,CL=w.div`
  padding: 1.5rem;
  color: ${en};

  h3 {
    font-family: var(--andover-font-serif);
    font-size: 1.2rem;
    margin-bottom: 0.75rem;
    color: ${en};
  }

  p {
    font-family: var(--andover-font-sans);
    font-size: 1rem;
    margin: 0;
    color: ${en};
    line-height: 1.6;
  }

  @media (max-width: 600px) {
    padding: 0.7rem 0.2rem;
    h3 { font-size: 1rem; }
    p { font-size: 0.95rem; }
  }
`,ML=w(er.section)`
  margin: 4rem 0 0 0; /* Removed bottom margin */
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 2rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 2rem;
  }
  @media (max-width: 600px) {
    padding: 1rem 0.2rem;
    margin: 1.5rem 0 0 0;
  }
`,DL=w.h2`
  grid-column: 1 / -1;
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${en};
  font-family: var(--andover-font-serif);
`,kL=w.div`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`,RL=w.a`
  display: block;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 300ms ease-in-out;
  color: ${en};
  text-decoration: none;
  background: #fff; /* Or use ${en} for a dark card */
  padding-top: 3px;
  padding-bottom: 3px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-10px);
    color: #000;
  }

  @media (max-width: 600px) {
    border-radius: 0.5rem;
    padding: 0.5rem 0.2rem;
    width: 100%;
  }
`,zL=w.div`
  padding: 0; /* Or a small value if you want a little horizontal gap */
  position: static; /* Remove absolute positioning if present */
  background: white;

  @media (max-width: 600px) {
    padding: 0.5rem 0.2rem;
  }
`,OL=w.h4`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    font-size: 1rem;
  }
`,NL=w.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  font-family: var(--andover-font-sans);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  opacity: 0.9;
  color:rgb(54, 59, 54);

  @media (max-width: 600px) {
    font-size: 0.85rem;
    gap: 0.2rem;
    margin-bottom: 0.5rem;
  }
`,LL=w.div`
  background-color: rgba(165, 156, 156, 0.9);
  color: ${en};
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  font-size: 0.875rem;
  transition: background-color 0.2s;
  width: fit-content;
  margin-top: 1rem;

  &:hover {
    background-color: white;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
    margin-top: 0.5rem;
  }
`,UL=[{title:"DMUN Moot Court 2025",date:"Jun 28, 2025",mode:"Online",imageUrl:"/moot-court.jpeg",link:"https://mymun.com/conferences/dmun-moot-court-2025"},{title:"The DMUN Foundation Sustainability Forum",date:"Jul 12, 2025",mode:"Online",imageUrl:"/sustainability-forum.jpeg",link:"https://mymun.com/conferences/dmunsf-2025"},{title:"DMUN ANNUAL MEETINGS 2025",date:"Jul 19, 2025",mode:"Online",imageUrl:"/annual-meetings.jpeg",link:"https://mymun.com/conferences/dmun-debate-2025"},{title:"DMUN Debate 2025",date:"Jul 15, 2025",mode:"Online",imageUrl:"/debate.jpeg",link:"https://mymun.com/conferences/dmun-debate-2025"}],N0=[{id:1,title:"Programs",path:"/programs",subtext:"Our immersive initiatives empower students to engage with diplomacy, leadership, and public speaking — preparing them for impact far beyond the classroom.",imageUrl:"/programshome.jpeg"},{id:2,title:"Advocacy",path:"/advocacy",subtext:"We champion youth voices by equipping students with the tools to articulate ideas, challenge norms, and represent communities with confidence and clarity.",imageUrl:"advocacy.jpeg"},{id:3,title:"Research",path:"/research",subtext:"From policy papers to global simulations, students explore complex issues through inquiry, collaboration, and innovation — fostering real-world readiness.",imageUrl:"/researchhome.jpeg"},{id:4,title:"Integrity",path:"/integrity",subtext:"Grounded in ethics and empathy, our mission is to cultivate principled leaders who lead with purpose and act with responsibility in every forum they enter.",imageUrl:"/integrityhome.jpeg"}],BL=[{id:1,title:"YouthCubed Nominates 2 Global Youth Representatives for the Summit of the Future",summary:"View photos, videos and a recap of the Summit of the Future.",imageUrl:"/Article-1.jpeg",path:"/newsroom/1"},{id:2,title:"DMUN Foundation @ FfD4",summary:"Learn more about our invitation by the UNGA President to participate in the Fourth International Conference on Financing for Development.",imageUrl:"/Article-2.jpeg",path:"/newsroom/2"},{id:3,title:"COP28 UAE",summary:"Learn more about our engagement at COP28 UAE as a youth-led civil society stakeholder.",imageUrl:"/Article-3.jpeg",path:"/newsroom/3"}],VL=()=>{const[n,e]=P.useState(N0[0].imageUrl),[r,a]=P.useState(null);return d.jsxs(X8,{children:[d.jsx(K8,{className:"dmun-hero-section",children:d.jsxs(Z8,{children:[d.jsx(Q8,{children:"Representing Youth, Building Leaders"}),d.jsx(J8,{children:"Empowering the next generation of global leaders since 2021"})]})}),d.jsxs(W8,{children:[d.jsx(eL,{children:hL.map(o=>d.jsxs(tL,{style:{gridColumn:o.gridColumn,gridRow:o.gridRow},children:[o.type==="pie"&&d.jsxs(d.Fragment,{children:[d.jsx(iL,{percentage:o.percentage}),d.jsx(rL,{children:o.pieLabel}),o.subLabel&&d.jsx(aL,{children:o.subLabel})]}),o.type==="icon"&&d.jsx(nL,{children:o.icon}),(o.type==="icon"||o.type==="text"||o.type==="pie")&&d.jsxs(d.Fragment,{children:[(o.type==="icon"||o.type==="text")&&d.jsx(WS,{dangerouslySetInnerHTML:{__html:o.number}}),(o.type==="icon"||o.type==="text")&&d.jsx(KS,{dangerouslySetInnerHTML:{__html:o.label}}),o.id===1&&d.jsxs(d.Fragment,{children:[d.jsx(WS,{dangerouslySetInnerHTML:{__html:o.number}}),d.jsx(KS,{dangerouslySetInnerHTML:{__html:o.label}})]})]})]},o.id))}),d.jsx(xL,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Qf,children:d.jsxs(vL,{children:[d.jsx(yL,{children:d.jsx("img",{src:n,alt:""})}),d.jsxs(bL,{children:[d.jsx(wL,{children:"At a Glance"}),N0.map(o=>d.jsxs(_L,{$isHovered:r===o.id,onMouseEnter:()=>{e(o.imageUrl),a(o.id)},onMouseLeave:()=>{e(N0[0].imageUrl),a(null)},children:[d.jsx("h3",{children:d.jsx(Ut,{to:o.path,children:o.title})}),d.jsx("p",{children:o.subtext})]},o.id))]})]})}),d.jsxs(mL,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Qf,children:[d.jsx(pL,{children:"The DMUN Difference"}),d.jsxs(gL,{children:[d.jsxs(er.div,{variants:z0,children:[" ",d.jsx(g0,{imageSrc:"/dmundifference.jpeg",imageAlt:"Student 1",title:"Free",text:"The day begins bright and early with morning classes and engaging discussions.",containerHeight:"300px",containerWidth:"300px",imageHeight:"300px",imageWidth:"300px",rotateAmplitude:5,scaleOnHover:1.05,boxShadow:"0 8px 16px rgba(0,0,0,0.2)",borderRadius:"10px"})]}),d.jsxs(er.div,{variants:z0,children:[" ",d.jsx(g0,{imageSrc:"/online.jpeg",imageAlt:"Student 2",title:"Free",text:"After classes, students participate in a wide range of extracurricular activities.",containerHeight:"300px",containerWidth:"300px",imageHeight:"300px",imageWidth:"300px",rotateAmplitude:5,scaleOnHover:1.05,boxShadow:"0 8px 16px rgba(0,0,0,0.2)",borderRadius:"10px"})]}),d.jsxs(er.div,{variants:z0,children:[" ",d.jsx(g0,{imageSrc:"/youth-led.jpeg",imageAlt:"Student 3",title:"Evening Programs",text:"Evenings are filled with study groups, club meetings, and social events.",containerHeight:"300px",containerWidth:"300px",imageHeight:"300px",imageWidth:"300px",rotateAmplitude:5,scaleOnHover:1.05,boxShadow:"0 8px 16px rgba(0,0,0,0.2)",borderRadius:"10px"})]})]}),d.jsxs(O0,{children:[d.jsx("h3",{children:"Free"}),d.jsx("p",{children:"Access to DMUN is completely free — because opportunity should never come with a price tag. We believe every student deserves a seat at the table, regardless of background."})]}),d.jsxs(O0,{children:[d.jsx("h3",{children:"Youth Led"}),d.jsx("p",{children:"DMUN is built by students, for students. From designing agendas to leading sessions, young voices shape every step — making leadership real, not rehearsed."})]}),d.jsxs(O0,{children:[d.jsx("h3",{children:"Online"}),d.jsx("p",{children:"Our online platform connects students across the globe in real time. With accessibility at its core, DMUN removes barriers and brings diplomacy to your screen."})]})]}),d.jsxs(SL,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Qf,children:[d.jsx(TL,{children:d.jsx(Ut,{to:"/newsroom",style:{color:"black",textDecoration:"none"},children:"DMUN NEWS"})}),d.jsx(jL,{children:BL.map(o=>d.jsxs(AL,{children:[d.jsx(EL,{imageSrc:o.imageUrl}),d.jsxs(CL,{children:[d.jsx("h3",{children:d.jsx(Ut,{to:o.path,style:{color:"inherit",textDecoration:"none"},children:o.title})}),d.jsx("p",{children:o.summary})]})]},o.id))})]}),d.jsxs(ML,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.3},variants:Qf,children:[d.jsx(DL,{children:"Upcoming Events"}),d.jsx(kL,{children:UL.map((o,c)=>d.jsx(RL,{href:o.link,imageSrc:o.imageUrl,children:d.jsxs(zL,{children:[d.jsx(OL,{children:o.title}),d.jsxs(NL,{children:[d.jsx("span",{children:o.mode}),d.jsx("span",{children:o.date})]}),d.jsx(LL,{children:"Apply Now"})]})},c))})]})]})]})},ud="#44b8f3",Co="#002147",ar="#97e1e6",TC="#E7F1FA",jC="#555",$L="#FFD700",PL=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/Youth-Advocacy.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,HL=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,YL=w.div`
  border-left: 17px solid ${ud}; /* Set border to 17px */
  border-right: 17px solid ${ud}; /* Set border to 17px */
  box-sizing: border-box; /* Include border in element's total width */
  padding-left: 20px; /* Add some padding inside the border */
  padding-right: 20px; /* Add some padding inside the border */
  overflow: hidden; /* Prevent content from overflowing the border */
`,FL=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${TC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,GL=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${Co};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`,qL=w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${Co};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`,ro=w.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${Co};
  border: none; /* Ensure no border on SectionTitle */
  scroll-margin-top: 100px; /* Adjust this value based on your header's height */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }
`,fl=w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${Co};
  border: none; /* Ensure no border on Fact */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`,AC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`,IL=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${Co};
  color: ${ar} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${AC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`,XL=w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`,WL=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`,KL=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${ar} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${ar};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${ar} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${ar};
    color: ${Co} !important;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem 2rem;
    max-width: 20rem;
  }
`;const ZL=w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`,QL=w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${AC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
`,L0=w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${ar} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
  @media (max-width: 768px) {
    width: 280px;
  }
`,U0=w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
`,B0=w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${ar} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`,V0=w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${ar} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,$0=w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${ar} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`,P0=w.a`
  color: ${ar} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 0.8rem; /* Adjusted for smaller arrow size */
    height: auto;
    margin-left: 0.3em; /* Space between text and arrow */
    vertical-align: middle;
    stroke: ${ar}; /* Match color to link */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`;w.span`
  color: ${ar};
  font-size: 2rem;
  position: absolute;
  bottom: 2.5rem;
  left: ${({right:n})=>n?"unset":"2.5rem"};
  right: ${({right:n})=>n?"2.5rem":"unset"};
  cursor: pointer;
  user-select: none;
  border: none; /* Ensure no border on NavArrow */
`;w.section`
  margin: 2.5rem 0;
  border: none; /* Ensure no border on LandAck */
`;const JL=w.section`
  border-left: 17px solid ${ud}; /* Set all borders to 17px */
  border-right: 17px solid ${ud}; /* Set all borders to 17px */
  width: 100%;
  background-color: ${TC}; /* Changed to blend with general page color */
  padding: 2.5rem 0; /* Reduced top padding to bring content higher */
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }
`,eU=w.div`
  max-width: 1200px; /* Constrain content width */
  margin: 0 auto; /* Center the content */
  padding: 0 3vw; /* Horizontal padding */

  @media (max-width: 768px) {
    padding: 0 2vw;
  }
`,tU=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
`,nU=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`,ou=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${jC};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${Co}; /* Darker on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`,iU=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${$L};
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 1.5rem auto 0.5rem auto;
  }
`,su=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),lu=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${jC}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,rU=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:d.jsx("path",{d:"M12 2L3 7v14h18V7L12 2zm0 2.236l7 3.889V9H5V6.125l7-3.889zM5 11h14v8H5v-8zm2 2h2v4H7v-4zm4 0h2v4h-2v-4zm4 0h2v4h-2v-4z"})}),aU=w(Ut)`
  display: inline-block;
  background-color: ${ud};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${Co};
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    display: block;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`,oU=w.a`
  display: inline-block;
  background-color: black;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  text-align: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
    display: block;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
  }
`,sU=()=>d.jsxs(d.Fragment,{children:[d.jsx(PL,{children:d.jsx(HL,{children:"About Us"})}),d.jsx(JL,{children:d.jsxs(eU,{children:[d.jsx(iU,{children:d.jsx(rU,{})}),d.jsx(tU,{children:"ABOUT"}),d.jsxs(nU,{children:[d.jsxs(ou,{href:"#what-we-do",children:["What We Do ",d.jsx(lu,{children:d.jsx(su,{})})]}),d.jsxs(ou,{href:"#our-history",children:["Our History ",d.jsx(lu,{children:d.jsx(su,{})})]}),d.jsxs(ou,{href:"#our-philosophy",children:["Our Philosophy ",d.jsx(lu,{children:d.jsx(su,{})})]}),d.jsxs(ou,{href:"#annual-reports",children:["Annual Reports ",d.jsx(lu,{children:d.jsx(su,{})})]}),d.jsxs(ou,{href:"#our-impact",children:["Impact ",d.jsx(lu,{children:d.jsx(su,{})})]})]})]})}),d.jsxs(YL,{children:[d.jsxs(FL,{children:[d.jsxs(GL,{children:[d.jsx(ro,{id:"what-we-do",children:"WHAT WE DO"}),d.jsx("p",{children:"The DMUN Foundation is a youth-led, non-profit, non-governmental organisation."}),d.jsx("p",{children:"We empower youths to be active and valid stakeholders."}),d.jsx("p",{children:"We provide opportunities for youths to learn about international relations, diplomacy, legislative bodies, social entrepreneurship, sustainability, and greater youth participation in the intergovernmental system."}),d.jsx(ro,{children:"Our Vision"}),d.jsx("p",{children:"Our vision is to enable youths to become active global citizens and future leaders through our programs and opportunities, receiving necessary skills and resources for them contribute effectively and meaningfully to the objectives of sustainable development, peace, multilateralism, and the overall betterment of the world."}),d.jsx(ro,{children:"Our Mission"}),d.jsxs("ul",{style:{marginBottom:"2rem",marginTop:"0.5rem"},children:[d.jsx("li",{children:"Equip young people with opportunities to be informed of global events, helping young people express their perspectives on said issues."}),d.jsx("li",{children:"Provide support to ensure that young people are given effective representation in multilateral and intergovernmental engagements, with particular concentration towards youths of underrepresented backgrounds."}),d.jsx("li",{children:"Demonstrate that youth-led organizations are well-capable of fulfilling any and all obligations expected of civil society stakeholders expected by society."})]}),d.jsx(ro,{id:"our-history",children:"Our History and Origins"}),d.jsx("p",{children:"Our journey began with a middle school student's ​vision to democratize education and make ​programs like Model United Nations (MUN) ​accessible to all. Inspired by the exclusivity and ​high costs of such programs, this young visionary ​embarked on creating a platform that would break ​down financial barriers and provide equal learning ​opportunities in politics, governance, and ​international relations. Through dedication and a commitment to ​inclusivity, our organization quickly grew, ​connecting students worldwide. Today, we stand ​as a testament to the power of youth-driven ​initiatives and the belief that education should ​know no bounds."}),d.jsx(ro,{id:"our-philosophy",children:"OUR PHILOSOPHY OF CHANGE"}),d.jsx("p",{children:"We create a linear platform to identify, nurture, and support young leaders."}),d.jsx("p",{children:"All of our programs and initiatives support each other in coherence. We believe that through our philosophy of change, our youth education programs, policy research, and policy advocacy form a trifecta of youth-led leadership and change."}),d.jsxs("p",{children:["•   If youth receive the opportunities to learn about global issues,",d.jsx("br",{}),"•   Then, they will want to create action to address these issues.",d.jsx("br",{}),"•   If we provide platforms of advocacy for youths willing to take action,",d.jsx("br",{}),"•   Then, they are able to create meaningful progress.",d.jsx("br",{}),"•   If this cycle of change continues,",d.jsx("br",{}),"•   Then, more youths will be involved in creating positive contributions,",d.jsx("br",{}),"•   As a combined result, the world becomes a better place."]}),d.jsx(ro,{id:"annual-reports",children:"Our Annual Reports"}),d.jsx("p",{children:"View Our Annual Reports"}),d.jsx(oU,{href:"https://drive.google.com/drive/folders/1Xe3NVwjf3lCdN7QVOaR2WDlJW-Hxrzfi?usp=share_link",target:"_blank",rel:"noopener noreferrer",children:"Annual Reports"}),d.jsx(ro,{children:"Our Milestones"}),d.jsx("p",{children:"Our milestones speak louder than words."}),d.jsx("p",{children:"Throughout our journey, we've proudly set new records and marked historic firsts that reflect our commitment to youth empowerment and innovation. These accomplishments are proof of what's possible when young people lead with purpose."}),d.jsxs("ul",{children:[d.jsx("li",{children:"We operate the world's largest virtual Model UN conference."}),d.jsx("li",{children:"We are the first organization to nominate people under the age of 18 to participate in 6 UN conferences."}),d.jsx("li",{children:"Our advocacy eliminated the minimum age requirement in the United Nations Financing for Development Conferences."}),d.jsx("li",{children:"We are the first youth-led organization to participate as Observer in 3 Intergovernmental Bodies and Organizations. (AHC Tax, OPCW, IPBES)"}),d.jsx("li",{children:"We are the first NGO dedicated in intergovernmental advocacy to have a leadership body comprised of majority people under the age of 18."}),d.jsx("br",{}),d.jsx("br",{})]})]}),d.jsxs(qL,{children:[d.jsx(ro,{id:"our-impact",children:"OUR IMPACT IN NUMBERS"}),d.jsxs(fl,{children:[d.jsx("strong",{children:"26k"}),d.jsx("br",{}),"Total participants in our program."]}),d.jsxs(fl,{children:[d.jsx("strong",{children:"24k"}),d.jsx("br",{}),"Raised for the Foundation in FY 2024 (in USD)"]}),d.jsxs(fl,{children:[d.jsx("strong",{children:"161"}),d.jsx("br",{}),"Countries represented"]}),d.jsxs(fl,{children:[d.jsx("strong",{children:"37"}),d.jsx("br",{}),"Intergovernmental bodies and conferences engaged"]}),d.jsxs(fl,{children:[d.jsx("strong",{children:"32"}),d.jsx("br",{}),"Inputs, statement, and interventions produced in 2024"]}),d.jsxs(fl,{children:[d.jsx("strong",{children:"12"}),d.jsx("br",{}),"Programs operated in 2025"]}),d.jsx(aU,{to:"/take-action",children:"Take Action"})]})]}),d.jsx(IL,{children:d.jsxs(XL,{children:[d.jsxs(WL,{children:[d.jsx(KL,{children:"Leadership"}),d.jsx(ZL,{children:"Meet the dedicated individuals who guide our mission and inspire our community."})]}),d.jsxs(QL,{children:[d.jsxs(L0,{children:[d.jsx(U0,{style:{backgroundImage:'url("/jaewon-picture.jpg")'},$isColor:!0}),d.jsx(B0,{children:"Jaewon Choi"}),d.jsx(V0,{children:"Executive Director"}),d.jsx($0,{children:"Jaewon leads the organization with strategic vision, guiding its mission and overseeing all key initiatives."}),d.jsx(P0,{href:"https://www.linkedin.com/in/jaewonchoidmun/",children:"Learn More"})]}),d.jsxs(L0,{children:[d.jsx(U0,{style:{backgroundImage:'url("/atharv-singh-professional.jpeg")'},$isColor:!0}),d.jsx(B0,{children:"Atharv Singh"}),d.jsx(V0,{children:"Deputy Executive Director"}),d.jsx($0,{children:"Atharv supports overall operations, drives program development, and strengthens community engagement."}),d.jsx(P0,{href:"https://www.linkedin.com/in/atharv-singh-b21159369/",children:"Learn More"})]}),d.jsxs(L0,{children:[d.jsx(U0,{style:{backgroundImage:'url("/lily-picture.png")'},$isColor:!0}),d.jsx(B0,{children:"Lily Yang Liu"}),d.jsx(V0,{children:"Deputy Executive Director"}),d.jsx($0,{children:"Lily Y. YangLiu is the Deputy Executive Director of the DMUN Foundation, overseeing internal operations and strategic program coordination."}),d.jsx(P0,{href:"https://www.linkedin.com/in/lily-yangliu-9b7471262/",children:"Learn More"})]})]})]})})]})]}),ql="#44b8f3",Ri="#002147",Pr="#97e1e6",EC="#E7F1FA",CC="#555",lU="#FFD700",cU=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/AdvocacyPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,uU=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,dU=w.div`
  border-left: 17px solid ${ql}; /* Set border to 17px */
  border-right: 17px solid ${ql}; /* Set border to 17px */
  box-sizing: border-box; /* Include border in element's total width */
  padding-left: 20px; /* Add some padding inside the border */
  padding-right: 20px; /* Add some padding inside the border */
  overflow: hidden; /* Prevent content from overflowing the border */
`,fU=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 8rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${EC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,hU=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${Ri};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`,mU=w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${Ri};
  margin-left: 0;
  border: 4px solid #e6f0fa; /* Increased border width for emphasis */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`,Wi=w.h2`
  font-size: 2rem;
  margin: 1rem 0 0.8rem 0;
  font-family: var(--andover-font-serif);
  color: ${Ri};
  border: none; /* Ensure no border on SectionTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem 0;
    text-align: center;
  }
`,Bn=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`,pU=w.h2`
  font-size: 2rem;
  margin: 1rem 0 0.8rem 0;
  font-family: var(--andover-font-serif);
  color: ${Ri};
  border: none;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1rem 0 0.5rem 0;
    text-align: center;
  }
`,H0=w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${Ri};
  border: none; /* Ensure no border on Fact */
  padding-left: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding-left: 0;
    text-align: center;
  }
`,ZS=w(Ut)`
  display: block;
  background-color: ${Ri};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--andover-font-serif);
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${ql};
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,gU=w.a`
  display: block;
  background-color: ${Ri};
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-family: var(--andover-font-serif);
  font-weight: 600;
  font-size: 1.1rem;
  text-align: center;
  margin-bottom: 0.5rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${ql};
  }
  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,Y0=w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: #555;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`,MC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${Ri};
  color: ${Pr} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${MC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${Pr} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${Pr};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${Pr} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${Pr};
    color: ${Ri} !important;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem 2rem;
    max-width: 20rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${MC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${Pr} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
  @media (max-width: 768px) {
    width: 280px;
  }
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Pr} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${Pr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${Pr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;w.a`
  color: ${Pr} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;w.a`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  color: ${Ri};
  text-decoration: none;
  font-weight: 400;
  border: none; /* Ensure no border on StyledLink */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: ${Ri};
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none; /* Ensure no border on SmallSectionTitle */
`;const Jf=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),vU=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),xU=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${EC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
padding-left: 20px;
  padding-right: 20px;
 border-left: 24px solid ${ql}; /* Set border to 17px */
  border-right: 25px solid ${ql}; /* Set border to 17px */
`,yU=w.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,bU=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${Ri}; /* Dark blue for heading */
  margin-bottom: 0.8rem;
  font-weight: 400;
`,wU=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`,eh=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${CC};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${Ri}; /* Darker on hover */
  }
`,_U=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${lU};
  }
`,th=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${CC}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,QS=w.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,ao=w.div`
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`,SU=()=>d.jsxs(d.Fragment,{children:[d.jsx(cU,{children:d.jsx(uU,{children:"Advocacy"})}),d.jsx(xU,{children:d.jsxs(yU,{children:[d.jsx(_U,{children:d.jsx(vU,{})}),d.jsx(bU,{children:"ADVOCACY"}),d.jsxs(wU,{children:[d.jsxs(eh,{href:"#about",children:["ABOUT OUR ADVOCACY ",d.jsx(th,{children:d.jsx(Jf,{})})]}),d.jsxs(eh,{href:"#what-we-advocate",children:["WHAT WE ADVOCATE FOR ",d.jsx(th,{children:d.jsx(Jf,{})})]}),d.jsxs(eh,{href:"#strategies",children:["OUR ADVOCACY STRATEGIES ",d.jsx(th,{children:d.jsx(Jf,{})})]}),d.jsxs(eh,{href:"#ethics",children:["ETHICAL ADVOCACY ",d.jsx(th,{children:d.jsx(Jf,{})})]})]})]})}),d.jsx(dU,{children:d.jsxs(fU,{children:[d.jsxs(hU,{children:[d.jsx(Wi,{id:"about",style:{scrollMarginTop:"100px"},children:"ABOUT OUR ADVOCACY"}),d.jsx(Bn,{children:"We champion youth through direct advocacy. We champion the voices of youth, ensuring their perspectives shape policies and decisions. Our advocacy efforts are rooted in the belief that young people have the creativity, insight, and drive to address the world's most pressing issues."}),d.jsx(Bn,{children:"Direct engagement is at the heart of our advocacy work. We connect young leaders with opportunities to influence and participate in decision-making processes at an intergovernmental level."}),d.jsx(Wi,{id:"what-we-advocate",style:{scrollMarginTop:"100px"},children:"What We Advocate For"}),d.jsxs(QS,{children:[d.jsxs(ao,{children:[d.jsx(Wi,{children:"Stakeholder Recognition"}),d.jsx(Bn,{children:"We believe that young people are vital stakeholders in the political arena and should be recognized as such. We ensure that youth have a seat at the table in decision-making processes at all levels, from local communities to global platforms."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Youth Empowerment"}),d.jsx(Bn,{children:"We believe that providing the necessary skillsets for youths to succeed is a fundamental right. We advocate for greater expansion and creation of diverse and inclusive youth capacity-building programs provided to marginalised youths."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Sustainable Futures"}),d.jsx(Bn,{children:"We believe that sustainability is a generational promise. Our advocacy centers on building sustainable futures where young people are leaders in shaping resilient, inclusive, and equitable societies."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Inclusive Policies"}),d.jsx(Bn,{children:"We advocate for policies that are inclusive and responsive to the needs and perspectives of young people. This includes pushing for educational reforms, social justice, DEI (diversity, equity, and inclusion), and economic opportunities that directly benefit youth."})]})]}),d.jsx(Wi,{id:"strategies",style:{scrollMarginTop:"100px"},children:"Our Advocacy Strategies"}),d.jsxs(QS,{children:[d.jsxs(ao,{children:[d.jsx(Wi,{children:"High-Level Interventions"}),d.jsx(Bn,{children:"We actively participate in high-level international and national conferences, presenting written and oral interventions to highlight the importance of youth perspectives."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Stakeholder Bilaterals"}),d.jsx(Bn,{children:"We conduct bilateral meetings with key stakeholders, including diplomats, NGOs, and policymakers. These one-on-one interactions allow us to directly advocate and foster strong relationships with influential decision-makers."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Written Submissions"}),d.jsx(Bn,{children:"We provide written submissions and detailed input on key conventions, treaties, and legislation. Our contributions are based on rigorous research and the lived experiences of young people, ensuring that the policies being developed are informed by youth needs and perspectives."})]}),d.jsxs(ao,{children:[d.jsx(Wi,{children:"Side Events"}),d.jsx(Bn,{children:"We use side events as powerful platforms to advance our advocacy, elevate youth voices, and influence global dialogue. We organize and participate in these events alongside major conferences to spotlight critical issues, present youth-led solutions, and engage directly with decision-makers."})]})]}),d.jsx(Wi,{id:"ethics",style:{scrollMarginTop:"100px"},children:"Ethical Advocacy"}),d.jsx(Bn,{children:"Guided by principles of neutrality, integrity, respect, and lawfulness, we ensure that our work upholds the highest moral standards."}),d.jsx(Bn,{children:"We remain politically neutral, advocating for policies — not parties or countries — that serve youth interests."}),d.jsx(Bn,{children:"Honesty, fairness, and ethical conduct guide every decision we make."}),d.jsx(Bn,{children:"We engage with all individuals and institutions with dignity and respect, even when perspectives differ."}),d.jsx(Bn,{children:"We adhere to all relevant rules, regulations, and frameworks in every space we engage."})]}),d.jsxs(mU,{children:[d.jsx(pU,{children:"Get Involved"}),d.jsxs(H0,{children:[d.jsx(gU,{href:"https://mymun.com/dmun",target:"_blank",rel:"noopener noreferrer",children:"Join Our Network"}),d.jsx(Y0,{children:"Connect with other advocates and stay updated on our initiatives"})]}),d.jsxs(H0,{children:[d.jsx(ZS,{to:"/take-action",children:"Take Action"}),d.jsx(Y0,{children:"Participate in our advocacy campaigns and make your voice heard"})]}),d.jsxs(H0,{children:[d.jsx(ZS,{to:"/research",children:"Learn More"}),d.jsx(Y0,{children:"Explore our research and resources on youth advocacy"})]})]})]})})]}),jl="#44b8f3",Mo="#002147",Hr="#97e1e6",DC="#E7F1FA",kC="#555",TU="#FFD700",jU=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/ProgramPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,AU=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,EU=w.div`
  border-left: 24px solid ${jl};
  border-right: 25px solid ${jl};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`,CU=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${DC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 31px solid ${jl};
  border-right: 33px solid ${jl};
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
    border-left: 15px solid ${jl};
    border-right: 15px solid ${jl};
  }
`,MU=w.div`
  max-width: 1200px; /* Max width for content alignment */
  margin: 0 auto;
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,DU=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${Mo}; /* Dark blue for heading */
  margin-bottom: 0.8rem;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
`,kU=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`,nh=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${kC};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${Mo}; /* Darker on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`,RU=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${TU};
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 1.5rem auto 0.5rem auto;
  }
`,ih=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${kC}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,zU=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${DC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,OU=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${Mo};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`;w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${Mo};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`;const cu=w.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${Mo};
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }
`;w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${Mo};
  border: none; /* Ensure no border on Fact */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;const RC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${Mo};
  color: ${Hr} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${RC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${Hr} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${Hr};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${Hr} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${Hr};
    color: ${Mo} !important;
  }
  @media (max-width: 768px) {
    font-size: 1.1rem;
    padding: 1.5rem 2rem;
    max-width: 20rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${RC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${Hr} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
  @media (max-width: 768px) {
    width: 280px;
  }
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Hr} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${Hr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${Hr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;w.a`
  color: ${Hr} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;const rh=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),NU=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});za`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;const LU=w.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin: 3rem 0;
  justify-items: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin: 2rem 0;
  }
`,UU=()=>d.jsxs(d.Fragment,{children:[d.jsx(jU,{children:d.jsx(AU,{children:"Programs"})}),d.jsx(CU,{children:d.jsxs(MU,{children:[d.jsx(RU,{children:d.jsx(NU,{})}),d.jsx(DU,{children:"PROGRAMS"}),d.jsxs(kU,{children:[d.jsxs(nh,{href:"#model-un-workshops",children:["What Makes Us Unique ",d.jsx(ih,{children:d.jsx(rh,{})})]}),d.jsxs(nh,{href:"#leadership-training",children:["Unbiased & Independent ",d.jsx(ih,{children:d.jsx(rh,{})})]}),d.jsxs(nh,{href:"#seminars",children:["Seminars ",d.jsx(ih,{children:d.jsx(rh,{})})]}),d.jsxs(nh,{href:"#community-projects",children:["Community Projects ",d.jsx(ih,{children:d.jsx(rh,{})})]})]})]})}),d.jsx(EU,{children:d.jsx(zU,{children:d.jsxs(OU,{children:[d.jsx(cu,{children:"Our Programs"}),d.jsx("p",{children:"DMUN offers a diverse range of programs designed to empower youth with the skills and knowledge needed to become effective global leaders. Our initiatives focus on interactive learning, practical application, and fostering a deep understanding of international relations."}),d.jsx("p",{children:"We are committed to providing accessible and high-quality educational experiences that prepare young individuals for meaningful engagement in the world."}),d.jsx(cu,{id:"model-un-workshops",children:"What Makes Our Programs Unique"}),d.jsxs("ul",{style:{marginBottom:"2rem",marginTop:"0.5rem"},children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Academic Excellence:"})," We prioritize academic excellence by providing meticulously crafted programs that challenge and inspire students to excel. Our programs are designed to be approachable for all, while allowing for rigorous academic inquiry."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Global and Inclusive:"})," Our programs are accessible to everyone, regardless of socioeconomic background, ensuring that diverse voices are heard and valued. We foster a rich, multicultural environment that promotes cross-cultural understanding."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Real Impact:"})," The discussions and outcomes of each program are infused into real-world impact, through our engagement in multilateral bodies and institutions, allowing for tangible impact."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Continued Growth:"})," Beyond the initial conference experience, we offer a range of follow-up programs, resources, and opportunities designed to support continued learning and growth. Our alumni network provides a platform for former participants to stay connected, share experiences, and collaborate on initiatives."]})]}),d.jsx(cu,{id:"leadership-training",children:"Unbiased & Independent"}),d.jsxs("ul",{style:{marginBottom:"2rem",marginTop:"0.5rem"},children:[d.jsx("li",{children:"Our strict policies on our education programs ensures that our decisions and actions are driven solely by our mission to empower young leaders and foster global understanding."}),d.jsx("li",{children:"We do not receive funding from any national government or intergovernmental organization."}),d.jsx("li",{children:"No donor can influence the educational materials provided to participants in our program."}),d.jsx("li",{children:"Our programs are developed under an independent group of subject matter experts nominated by our members."}),d.jsx("li",{children:"All of our programs are evaluated by an independent members at an annual basis to confirm program integrity."})]}),d.jsx(LU,{children:["https://mymun.com/dmun","https://mymun.com/conferences/dmunp-2025","https://mymun.com/conferences/dmun-model-eu-2025","https://mymun.com/conferences/dmun-moot-court-2025","https://mymun.com/conferences/dmun-debate-2025","https://mymun.com/conferences/dmun-arab-league-2025","https://mymun.com/conferences/dmun-model-league-of-nations-2026","https://mymun.com/conferences/dmun-annual-meetings-2025","https://mymun.com/conferences/khni-dmun-youth-representatives-i-2025","https://mymun.com/conferences/dmun-crisis-2025","https://mymun.com/conferences/dmun-model-african-union-2025","https://mymun.com/conferences/dmunsf-2025","https://mymun.com/conferences/khni-dmun-youth-inputs-i-2025"].map((n,e)=>{const r=e+1,a=r<=5?"jpeg":"png";return d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",background:"#fff",borderRadius:"18px",boxShadow:"0 4px 16px #0001",padding:"2rem 1rem",width:"100%",maxWidth:"320px"},children:[d.jsx("img",{src:`/Logo${r}.${a}`,alt:`Program Logo ${r}`,style:{width:"200px",height:"200px",objectFit:"contain",marginBottom:"1.5rem",borderRadius:"16px",background:"#f7f7f7",boxShadow:"0 2px 8px #0001"}}),d.jsx("a",{href:n,target:"_blank",rel:"noopener noreferrer",style:{textDecoration:"none",width:"100%"},children:d.jsx("button",{style:{background:"#44b8f3",color:"white",border:"none",borderRadius:"8px",padding:"0.9rem 0",fontWeight:700,fontFamily:"var(--andover-font-sans)",cursor:"pointer",fontSize:"1.15rem",width:"100%"},children:"Register"})})]},e)})}),d.jsx(cu,{children:"Program Categories"}),d.jsx("p",{children:"Our programs are broadly categorized into:"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Model UN Simulation & Training"}),d.jsx("li",{children:"Youth Leadership & Development"}),d.jsx("li",{children:"Global Issues & Policy Workshops"}),d.jsx("li",{children:"Cross-Cultural Exchange & Dialogue"}),d.jsx("li",{children:"Advocacy & Community Action"})]}),d.jsx(cu,{children:"Program Benefits"}),d.jsx("p",{children:"Participating in DMUN programs offers numerous benefits, including:"}),d.jsxs("p",{children:[d.jsx("li",{children:"Global collaboration with delegates from diverse regions and backgrounds."}),d.jsx("li",{children:"Enhancement of public speaking, negotiation, and leadership skills."}),d.jsx("li",{children:"Engagement in real-time debate on current global challenges."}),d.jsx("li",{children:"Flexible participation from anywhere at minimal cost."}),d.jsx("li",{children:"Access to expert mentorship and valuable recognition through certifications."})]}),d.jsx("p",{children:d.jsx("a",{href:"https://mymun.com/dmun",children:d.jsx("button",{children:"Register Now"})})})]})})})]}),cs="#44b8f3",tc="#002147",As="#97e1e6",zC="#E7F1FA",OC="#555",BU="#FFD700",VU=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/ResearchPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,$U=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,PU=w.div`
  border-left: 24px solid ${cs};
  border-right: 25px solid ${cs};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`,HU=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${zC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${cs};
  border-right: 33px solid ${cs};
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
    border-left: 15px solid ${cs};
    border-right: 15px solid ${cs};
  }
`,YU=w.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,FU=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
`,GU=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`,F0=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${OC};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${tc}; /* Darker on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`,qU=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${BU};
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 1.5rem auto 0.5rem auto;
  }
`,G0=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),q0=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${OC}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,IU=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),XU=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${zC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,WU=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${tc};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`,KU=w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${tc};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`,ah=w.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${tc};
  border: none; /* Ensure no border on SectionTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }
`,oh=w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${tc};
  border: none; /* Ensure no border on Fact */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`,NC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${tc};
  color: ${As} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${NC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.8rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  color: #fff;
  text-align: center;
  margin: 0;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  font-weight: 400;
  color: ${As};
  text-align: center;
  margin-top: 0.5rem;
  margin-bottom: 3.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    padding: 0 1rem;
  }
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${NC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 1.5rem;
    align-items: center;
  }
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${As} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
  @media (max-width: 768px) {
    width: 280px;
  }
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 1rem;
  }
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${As} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${As} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${As} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin-bottom: 0.5rem;
  }
`;w(Ut)`
  color: ${As};
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }

  svg {
    width: 0.8rem; /* Adjusted for smaller arrow size */
    height: auto;
    margin-top: 3px;
    transition: transform 0.2s ease-in-out;
  }

  &:hover svg {
    transform: translateX(5px) translateY(3px);
  }
`;w.span`
  white-space: nowrap;
`;const ZU=w(Ut)`
  font-size: 1.1rem;
  padding: 0.7rem 2rem;
  color: #fff;
  background: ${cs};
  border: none;
  outline: none;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-weight: 600;
  cursor: pointer;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(68, 184, 243, 0.08);
  margin-top: 1.5rem;
  margin-left: 0;
  display: inline-block;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: #2496c7;
    color: #fff;
    box-shadow: 0 4px 16px rgba(68, 184, 243, 0.15);
    text-decoration: none;
  }
`,QU=()=>{const n=(e,r)=>{e.preventDefault();const a=document.getElementById(r);if(a){const c=a.getBoundingClientRect().top+window.pageYOffset+-120;window.scrollTo({top:c,behavior:"smooth"})}};return d.jsxs(d.Fragment,{children:[d.jsx(VU,{children:d.jsx($U,{children:"Research"})}),d.jsx(HU,{children:d.jsxs(YU,{children:[d.jsx(qU,{children:d.jsx(IU,{})}),d.jsx(FU,{children:"RESEARCH"}),d.jsxs(GU,{children:[d.jsxs(F0,{as:Ut,to:"/Publications",children:["PUBLICATIONS ",d.jsx(q0,{children:d.jsx(G0,{})})]}),d.jsxs(F0,{href:"#researchareas",onClick:e=>n(e,"researchareas"),children:["RESEARCH AREAS ",d.jsx(q0,{children:d.jsx(G0,{})})]}),d.jsxs(F0,{href:"#researchbenefits",onClick:e=>n(e,"researchbenefits"),children:["DATA & INSIGHTS ",d.jsx(q0,{children:d.jsx(G0,{})})]})]})]})}),d.jsx(PU,{children:d.jsxs(XU,{children:[d.jsxs(WU,{children:[d.jsx(ah,{children:"Our Research"}),d.jsx("p",{children:"DMUN conducts in-depth research to inform our advocacy and programmatic work. Our research initiatives aim to provide valuable insights into youth engagement, education, and global issues."}),d.jsx("p",{children:"We are dedicated to producing high-quality research that contributes to the understanding of youth perspectives and needs."}),d.jsx(ah,{id:"researchareas",children:"Research Areas"}),d.jsx("p",{children:"Our research covers a wide range of topics, including:"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Youth Engagement in Global Governance"}),d.jsx("li",{children:"Educational Access and Equity"}),d.jsx("li",{children:"Youth Leadership and Development"}),d.jsx("li",{children:"Cross-Cultural Exchange and Dialogue"}),d.jsx("li",{children:"Advocacy and Community Action"})]}),d.jsx(ah,{id:"researchbenefits",children:"Research Benefits"}),d.jsx("p",{children:"Engaging with our research offers numerous benefits, including:"}),d.jsxs("p",{children:[d.jsx("li",{children:"Access to cutting-edge insights on youth issues."}),d.jsx("li",{children:"Opportunities to contribute to ongoing research projects."}),d.jsx("li",{children:"Enhanced understanding of global challenges and solutions."}),d.jsx("li",{children:"Networking with researchers and practitioners in the field."}),d.jsx("li",{children:"Recognition through publications and presentations."})]}),d.jsx("p",{children:d.jsx(ZU,{to:"/Publications",children:"View all research"})})]}),d.jsxs(KU,{children:[d.jsx(ah,{children:"Research Highlights"}),d.jsxs(oh,{children:[d.jsx("strong",{children:"30+"})," Research publications"]}),d.jsxs(oh,{children:[d.jsx("strong",{children:"25"})," Inputs to Multilateral Institutions"]}),d.jsxs(oh,{children:[d.jsx("strong",{children:"4"})," Policy Researchers"]}),d.jsxs(oh,{children:[d.jsx("strong",{children:"100%"})," Youth Led"]})]})]})})]})},Il="#44b8f3",br="#002147",Yr="#97e1e6",LC="#E7F1FA",Vy="#555",JU="#FFD700",e7=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/IntegrityPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`,t7=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,n7=w.div`
  /* border-left: 24px solid ${Il}; */
  /* border-right: 25px solid ${Il}; */
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
`,i7=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${LC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  /* border-left: 32px solid ${Il}; */
  /* border-right: 33px solid ${Il}; */
`,r7=w.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`,a7=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0; /* Adjusted mobile padding */
    padding-bottom: 1rem; /* Adjusted mobile padding */
    margin-top: -0.75rem; /* Adjusted mobile margin-top */
  }
`,o7=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem; /* Adjusted mobile gap */
    margin-bottom: 2rem;
    flex-direction: column; /* Stack on very small screens */
    align-items: center;
  }
`,uu=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${Vy};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${br}; /* Darker on hover */
  }
`,s7=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${JU};
  }
`,du=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),fu=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${Vy}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,l7=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})});w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${LC}; /* Set background to match page color */
`;w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${br};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
`;w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${br};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
`;const hu=w.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${br};
  border: none; /* Ensure no border on SectionTitle */
`;w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${br};
  border: none; /* Ensure no border on Fact */
`;const UC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${br};
  color: ${Yr} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${UC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${Yr} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${Yr};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${Yr} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${Yr};
    color: ${br} !important;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${UC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${Yr} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Yr} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${Yr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${Yr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
`;w.a`
  color: ${Yr} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;const mu=w.section`
  background: none;
  padding: 0;
  border-radius: 0;
  margin-bottom: 2.5rem;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.8rem;
  color: ${br};
  margin: 2rem 0 1rem;
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${br};
  margin-bottom: 1.5rem;
`;w.span`
  color: ${Il};
  font-weight: 600;
`;w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0;
`;w(Ut)`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-decoration: none;
  color: ${br};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
  }
`;w.h4`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.9rem;
  color: ${Vy};
`;const JS=w.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.5rem;
`,an=w.a`
  background: ${Il};
  color: #fff;
  font-weight: 600;
  padding: 0.9rem 1.7rem;
  border: none;
  border-radius: 6px;
  font-size: 1.1rem;
  text-decoration: none;
  transition: background 0.2s;
  /* box-shadow: 0 1px 4px rgba(0,0,0,0.07); */
  &:hover {
    background: ${br};
    color: #fff;
  }
`,c7=w.div`
  height: 3rem;
`,u7=()=>{const n=(e,r)=>{e.preventDefault();const a=document.getElementById(r);if(a){const c=a.getBoundingClientRect().top+window.pageYOffset+-120;window.scrollTo({top:c,behavior:"smooth"})}};return d.jsxs(d.Fragment,{children:[d.jsx(e7,{children:d.jsx(t7,{children:"Integrity"})}),d.jsx(i7,{children:d.jsxs(r7,{children:[d.jsx(s7,{children:d.jsx(l7,{})}),d.jsx(a7,{children:"INTEGRITY"}),d.jsxs(o7,{children:[d.jsxs(uu,{href:"#ourwork",onClick:e=>n(e,"ourwork"),children:["Our Work ",d.jsx(fu,{children:d.jsx(du,{})})]}),d.jsxs(uu,{href:"#procedures",onClick:e=>n(e,"procedures"),children:["Procedures & Mandates ",d.jsx(fu,{children:d.jsx(du,{})})]}),d.jsxs(uu,{href:"#dei",onClick:e=>n(e,"dei"),children:["Diversity, Equity, and Inclusion ",d.jsx(fu,{children:d.jsx(du,{})})]}),d.jsxs(uu,{href:"#compliance",onClick:e=>n(e,"compliance"),children:["Compliance Requirements ",d.jsx(fu,{children:d.jsx(du,{})})]}),d.jsxs(uu,{href:"#forms",onClick:e=>n(e,"forms"),children:["Compliance & Integrity Forms ",d.jsx(fu,{children:d.jsx(du,{})})]})]})]})}),d.jsx(c7,{}),d.jsxs(n7,{children:[d.jsxs(mu,{id:"ourwork",children:[d.jsx(hu,{children:"We must do our work, the right way."}),d.jsx("p",{children:"We believe that ethical principles are ​fundamental to our mission and vision. ​"}),d.jsx("p",{children:"We hold ourselves to the ​highest standards, ensuring that every ​decision and action aligns with our core ​values and serves the best interests of ​our global community."}),d.jsx("p",{children:"We maintain an independent Inspector-General and Ombudsman, appointed by voting through the individual members of the Foundation."})]}),d.jsxs(mu,{id:"procedures",children:[d.jsx(hu,{children:"Procedures and Mandates"}),d.jsx("h3",{children:"Governance & Accountability"}),d.jsx("p",{children:"Our Board of Trustees actively oversees our efforts to uphold ethical standards. They ensure that our policies are effectively implemented and that we are accountable for our actions. Regular audits and reports are conducted to monitor compliance and assess the effectiveness of our measures."}),d.jsx("h3",{children:"Reporting Mechanisms"}),d.jsx("p",{children:"We have established clear and confidential reporting mechanisms for employees, partners, and stakeholders to report any suspected unethical practices. We will not retaliate, nor tolerate such behavior, against any individual for reporting or investigating a concern or complaint of good-faith."}),d.jsx("h3",{children:"Training & Awareness"}),d.jsx("p",{children:"We provide extensive training programs for our employees and partners to raise awareness about ethical business practices, conflict of interest, transparency, and the importance of reporting any unethical behavior."}),d.jsx("h3",{children:"Due Diligence & Risk Assessment"}),d.jsx("p",{children:"We conduct comprehensive risk assessments and due diligence processes to identify and mitigate potential ethical issues within our supply chains. This includes evaluating suppliers for compliance with labor laws and ethical standards."})]}),d.jsxs(mu,{id:"dei",children:[d.jsx(hu,{children:"Diversity, Equity, and Inclusion"}),d.jsx("p",{children:"Everyone gets a seat at our table. No exceptions."}),d.jsx("p",{children:"We pride ourselves on ​fostering a diverse and inclusive environment where ​every individual is valued and respected."}),d.jsxs("ul",{children:[d.jsx("li",{children:"We utilize blind recruitment techniques, ensuring that applicants are not discriminated from their backgrounds."}),d.jsx("li",{children:"New employees receive comprehensive onboarding that includes training on our diversity, equity, and inclusion (DEI) policies."}),d.jsx("li",{children:"We support various employee resource groups (ERGs) that provide a sense of community and a platform for employees from different backgrounds to voice their perspectives."}),d.jsx("li",{children:"We encourage open dialogue through regular ​town hall meetings, anonymous feedback ​channels, and open-door policies."})]})]}),d.jsxs(mu,{id:"compliance",children:[d.jsx(hu,{children:"Documentation of Compliance Requirements"}),d.jsx("p",{children:"Our strong commitment to ethics is reflected ​in our transparency, accountability, and ​dedication to fostering a culture of ​integrity."}),d.jsx("p",{children:"Henceforth, the Foundation publishes, and reviews, documentation that outlines our stance and policies on major issues of ethical business and compliance. These documents are updated in an annual or biannual basis by the Inspector-General, with advice and consent through the Board of Trustees and the Governing Body of the Foundation."}),d.jsxs(JS,{children:[d.jsx(an,{href:"https://docs.google.com/document/d/1L76zIeX6bfJPVDGx9umz5Rh3ne12NxFh_dJYdfLm_TY/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Ethical Advocacy Policy"}),d.jsx(an,{href:"https://docs.google.com/document/d/1AfiyFt6x6h80kcJfoR5Hs1O2SSOnHMYiZrgkDGRtx4o/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Academic Integrity Policy"}),d.jsx(an,{href:"https://docs.google.com/document/d/11v70qjw3qDlEVDD6AapUHQEtZqYyb0Ua4_1T8wBTnj8/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Diversity, Equity, and Inclusion and Non-Discrimination Policy"}),d.jsx(an,{href:"https://docs.google.com/document/d/18HmqvR-1YNcLWvdiUO8-rKB-Tm7PjCuoOZRRDveTugA/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Universal Code of Conduct"}),d.jsx(an,{href:"https://docs.google.com/document/d/1MFOmBTzZlNMGs8i_WSk0rVnmAPpFAo_GLSMHHDi6JCE/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Statement on Anti-Corruption"}),d.jsx(an,{href:"https://docs.google.com/document/d/1ypbleyMl8kdnHRxn0oX5GPVUANl0a4bbR0EQ0bi2g94/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Statement on Our Efforts to Prevent Human Trafficking, Involuntary Labor, and Modern Slavery"}),d.jsx(an,{href:"https://docs.google.com/document/d/16iQhjzuxRA6S7SAAzNWO79wo8DAXzKOBEj84gxyJkhM/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Statement on Compliance of International and National Regulations"}),d.jsx(an,{href:"https://docs.google.com/document/d/19Vqa8ElIUf42opNbiI7YoU9PjYqQO5Aq-XJ_zxNSaE8/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Guidelines for Partners of the Foundation"}),d.jsx(an,{href:"https://docs.google.com/document/d/19Vqa8ElIUf42opNbiI7YoU9PjYqQO5Aq-XJ_zxNSaE8/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Declaration on Political Independence and Neutrality"}),d.jsx(an,{href:"https://docs.google.com/document/d/1ukF4vFS-7P5adS4BNjhtroZVSLEFM43C0cxt4eS39vQ/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Temporary Procedures on Artificial Generative Intelligence"})]})]}),d.jsxs(mu,{id:"forms",children:[d.jsx(hu,{children:"Database of Compliance and Integrity Forms"}),d.jsx("p",{children:"Members of the Foundation, staff, members of the public, governments, law enforcement, and other stakeholders can request the Foundation for further support or information on certain matters defined by the Foundation or relevant regulations."}),d.jsxs("p",{children:["Such requests can be downloaded from our database below. All forms must be submitted digitally as a .pdf file to ",d.jsx("a",{href:"mailto:enquiries@dmun.org",children:"enquiries@dmun.org"}),' under the header "Compliance and Integrity Request". The Foundation will avail every effort to deliver the information or support requested within 1 month from the submission of the form.']}),d.jsx("p",{children:d.jsx("em",{children:"Please note that some information cannot be disclosed due to relevant regulation. This includes personally-identifiable information of members that are not the requestor, or any other information that can jeopardize other individuals' privacy and safety."})}),d.jsxs(JS,{children:[d.jsx(an,{href:"https://docs.google.com/document/d/1ClafUExgnWyJDoQBPuLPx5WNr2GLO7kti4zmtnFTnoA/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E1 - Request for Investigation by the Office of the Inspector-General"}),d.jsx(an,{href:"https://docs.google.com/document/d/1mwJhQ53FPRDrXDXoieU8IomeZForTwGyqZpvPBSoGsc/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E2 - Employee Request for Mediation by the Office of the Ombudsman"}),d.jsx(an,{href:"https://docs.google.com/document/d/1jYkW1D3zCAWMTZ1SiV6V4yOHS4Qg8ccRcLedrh4le3s/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E3 - Public Information Request"}),d.jsx(an,{href:"https://docs.google.com/document/d/13pWq13WL2e4skul_DLF9ygIIZ-_0qJd6AqDoarhmgSk/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E4 - Government and Law Enforcement Information Request"}),d.jsx(an,{href:"https://docs.google.com/document/d/1X70uOoFt3suU8p4hr2hJhgihzVu81luker8U8wfFIQc/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E5 - Request for Removal of All Associated Data of a Individual Member"}),d.jsx(an,{href:"https://docs.google.com/document/d/1cNZJ0xGJv-1Gg8wNaq2TFpqgd09F2mlcZgWto9tK8IA/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E6 - Request for Deletion of Unauthorized Intellectual Property"}),d.jsx(an,{href:"https://docs.google.com/document/d/1Iz4ocLvjsH5VdxzGxS1VMbNHvXv0uPxYSqgaYUtXtto/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E7 - Request Access to Personal Data"}),d.jsx(an,{href:"https://docs.google.com/document/d/1_Zo9vJQFgmgcw8gSpj14IpZurizeZ7n3SaXngqH1Ebw/edit?tab=t.0",target:"_blank",rel:"noopener noreferrer",children:"Form E8 - Employee Request on Advisory Opinion"})]})]})]})]})},Sa="#44b8f3",sr="#002147",Fr="#97e1e6",BC="#E7F1FA",VC="#555",d7="#FFD700",f7=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/MandatePageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,h7=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,m7=w.div`
  border-left: 24px solid ${Sa};
  border-right: 25px solid ${Sa};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
    border-left: 12px solid ${Sa};
    border-right: 12px solid ${Sa};
  }
`,p7=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${BC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${Sa};
  border-right: 33px solid ${Sa};
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
    border-left: 15px solid ${Sa};
    border-right: 15px solid ${Sa};
  }
`,g7=w.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,v7=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000; /* Pure black as per image for heading */
  font-size: 2.5rem; /* Matches ~26-32px range */
  text-align: center;
  margin: -1rem 0 0 0; /* Adjusted margin-top to create more space */
  padding-top: 0rem; /* Already at its minimum, so no change */
  padding-bottom: 2rem; /* Adjusted bottom padding to bring links closer to heading */

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
    margin-top: -0.75rem;
  }
`,x7=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* Allow links to wrap on smaller screens */
  gap: 3.2rem; /* Further increased gap to visually match image */
  margin-bottom: 2rem; /* Increased space below links */
  margin-top: 0.5rem; /* Reduced top margin to bring links closer to heading */

  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,I0=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600; /* Semibold */
  color: ${VC};
  text-decoration: none;
  white-space: nowrap; /* Prevent breaking for individual links */
  display: flex;
  align-items: center;
  gap: 0.3em; /* Space between text and arrow */
  transition: color 0.2s ease-in-out;
  font-size: 1rem; /* Adjusted font size for links */

  &:hover {
    text-decoration: underline;
    color: ${sr}; /* Darker on hover */
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`,y7=w.div`
  width: 65px; /* Adjusted width for icon */
  height: 65px; /* Adjusted height for icon */
  margin: 2rem auto 0.5rem auto; /* Adjusted bottom margin to create more space */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${d7};
  }
`,X0=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),W0=w.span`
  display: inline-block;
  font-size: 1.1rem; /* Keeping font-size for consistency if needed, but SVG sizing is primary */
  margin-left: 0.3em; /* Space between text and arrow */
  vertical-align: middle;

  svg {
    width: 1.2rem; /* Adjusted SVG width to match header's arrow size */
    height: auto;
    vertical-align: middle; /* Ensure aligned with text */
    stroke: ${VC}; /* Match color to subnav text */
    transform: translateY(-1px); /* Adjusted to raise the arrow by 2 points */
  }
`,b7=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),w7=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${BC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,_7=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${sr};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`,S7=w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${sr};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`,pu=w.h2`
  font-size: 2rem;
  margin: 1rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${sr};
  border: none; /* Ensure no border on SectionTitle */
  scroll-margin-top: 100px;
`,sh=w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${sr};
  border: none;
`;w.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${sr};
`;w.div`
  font-size: 1rem;
  line-height: 1.4;
`;const $C=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${sr};
  color: ${Fr} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${$C} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${Fr} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${Fr};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${Fr} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${Fr};
    color: ${sr} !important;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${$C} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${Fr} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Fr} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${Fr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${Fr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
`;w.a`
  color: ${Fr} !important;
  text-decoration: none;
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.8;
  }
`;w.section`
  margin: 4rem 0;
  padding: 0 2rem;
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.8rem;
  color: ${sr};
  margin: 2rem 0 1rem;
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${sr};
  margin-bottom: 1.5rem;
`;w.span`
  color: ${Sa};
  font-weight: 600;
`;w.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  margin-bottom: 2rem;
`;w.h4`
  font-family: var(--andover-font-serif);
  font-size: 1.4rem;
  color: ${sr};
  margin-bottom: 1rem;
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${sr};
`;const T7=()=>d.jsxs(d.Fragment,{children:[d.jsx(f7,{children:d.jsx(h7,{children:"Mandate"})}),d.jsx(p7,{children:d.jsxs(g7,{children:[d.jsx(y7,{children:d.jsx(b7,{})}),d.jsx(v7,{children:"MANDATE"}),d.jsxs(x7,{children:[d.jsxs(I0,{href:"#Mission",children:["MISSION & VISION ",d.jsx(W0,{children:d.jsx(X0,{})})]}),d.jsxs(I0,{href:"#Goals",children:["STRATEGIC GOALS ",d.jsx(W0,{children:d.jsx(X0,{})})]}),d.jsxs(I0,{href:"#Value",children:["CORE VALUES ",d.jsx(W0,{children:d.jsx(X0,{})})]})]})]})}),d.jsx(m7,{children:d.jsxs(w7,{children:[d.jsxs(_7,{children:[d.jsx(pu,{children:"Our Mandate"}),d.jsx("p",{children:"DMUN's mandate is to empower youth globally through education in diplomacy, leadership, and international relations. We are committed to fostering a new generation of leaders who can navigate complex global challenges with integrity and effectiveness."}),d.jsx("p",{children:"Our mandate is rooted in the belief that informed and engaged youth are essential for building a more peaceful and sustainable world."}),d.jsx(pu,{id:"Mission",children:"Mission & Vision"}),d.jsx("p",{children:"Our mission is to provide unparalleled opportunities for young people to engage in global discourse, develop critical skills, and contribute to meaningful change. Our vision is a world where every young person has the opportunity to become a global citizen and leader."}),d.jsx(pu,{id:"Goals",children:"Strategic Goals"}),d.jsx("p",{children:"To fulfill our mandate, we focus on the following strategic goals:"}),d.jsxs("ul",{children:[d.jsx("li",{children:"Expand access to Model UN and related educational programs."}),d.jsx("li",{children:"Enhance leadership and diplomatic skills among youth."}),d.jsx("li",{children:"Foster cross-cultural understanding and collaboration."}),d.jsx("li",{children:"Promote youth participation in global decision-making processes."}),d.jsx("li",{children:"Build a sustainable and impactful organization."})]}),d.jsx(pu,{id:"Value",children:"Core Values"}),d.jsx("p",{children:"Our work is guided by a set of core values:"}),d.jsxs("p",{children:[d.jsx("li",{children:"Integrity and Ethics"}),d.jsx("li",{children:"Inclusivity and Diversity"}),d.jsx("li",{children:"Excellence and Innovation"}),d.jsx("li",{children:"Collaboration and Respect"}),d.jsx("li",{children:"Impact and Sustainability"})]}),d.jsx("p",{})]}),d.jsxs(S7,{children:[d.jsx(pu,{children:"Mandate Highlights"}),d.jsxs(sh,{children:[d.jsx("strong",{children:"5"})," Years of empowering youth"]}),d.jsxs(sh,{children:[d.jsx("strong",{children:"158"})," Countries reached"]}),d.jsxs(sh,{children:[d.jsx("strong",{children:"23,129"})," Youth impacted"]}),d.jsxs(sh,{children:[d.jsx("strong",{children:"62%"})," of budget was used for youth youth and advocacy"]}),d.jsx("br",{}),d.jsx("a",{href:"/Constitution.pdf",target:"_blank",rel:"noopener noreferrer",children:d.jsx("button",{children:d.jsx("strong",{children:"Our Constitution"})})})]})]})})]}),Ta="#44b8f3",lr="#002147",Gr="#97e1e6",PC="#E7F1FA",HC="#555",j7="#FFD700",A7=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/TakeActionPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
  @media (max-width: 768px) {
    height: 200px;
    min-height: 200px;
    max-height: 200px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`,E7=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    text-align: center;
    word-break: break-word;
  }
`,C7=w.div`
  border-left: 24px solid ${Ta};
  border-right: 25px solid ${Ta};
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  overflow: hidden;
  @media (max-width: 768px) {
    padding-left: 8px;
    padding-right: 8px;
    border-left: 12px solid ${Ta};
    border-right: 12px solid ${Ta};
  }
`,M7=w.main`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  margin: 2.5rem 0 0 0;
  align-items: flex-start;
  padding-left: 15vw;
  padding-right: 15vw;
  border: none; /* Ensure no border on Main */
  background-color: ${PC}; /* Set background to match page color */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 1rem 0 0 0;
  }
`,D7=w.section`
  flex: 2 1 480px;
  min-width: 340px;
  font-size: 1.18rem;
  color: ${lr};
  font-family: var(--andover-font-sans);
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on Left */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    font-size: 1rem;
  }
`,k7=w.aside`
  flex: 1 1 320px;
  min-width: 260px;
  background: var(--andover-accent);
  border-radius: 1rem;
  padding: 2.5rem 1.5rem;
  box-shadow: 0 2px 8px #0001;
  height: fit-content;
  font-family: var(--andover-font-serif);
  color: ${lr};
  margin-left: 0;
  border: none; /* Ensure no border on Right */
  @media (max-width: 768px) {
    min-width: auto;
    width: 100%;
    padding: 1.5rem 1rem;
  }
`,K0=w.section`
  margin-bottom: 2rem;
  scroll-margin-top: 100px; /* Add scroll margin for header offset */
  @media (max-width: 768px) {
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`,lh=w.button`
  display: block;
  background: ${lr};
  color: white;
  font-family: var(--andover-font-serif);
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 2rem;         /* More rounded edges */
  padding: 0.7rem 2rem;        /* More horizontal padding for a pill look */
  margin: 0.5rem auto 0.5rem auto; /* Center the button and add vertical spacing */
  cursor: pointer;
  transition: background 0.2s;
  text-align: center;
  width: fit-content;          /* Button only as wide as its content */
  min-width: 160px;            /* Optional: minimum width for consistency */

  &:hover {
    background: ${Ta};
  }
`,ch=w.h2`
  font-size: 2rem;
  margin: 2.5rem 0 1.2rem 0;
  font-family: var(--andover-font-serif);
  color: ${lr};
  border: none; /* Ensure no border on SectionTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 1.5rem 0 1rem 0;
    text-align: center;
  }
`,uh=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`,dh=w.div`
  font-size: 1.2rem;
  margin-bottom: 1.2rem;
  font-family: var(--andover-font-serif);
  color: ${lr};
  border: none; /* Ensure no border on Fact */
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.3rem;
  color: ${lr};
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.3rem;
  }
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: #555;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;const YC=za`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${lr};
  color: ${Gr} !important;
  padding: 4rem 0 2.5rem 0;
  animation: ${YC} 0.8s cubic-bezier(0.4,0,0.2,1);
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 0;
  border: none; /* Ensure no border on LeadershipSection */
  @media (max-width: 768px) {
    padding: 2rem 0 1.5rem 0;
  }
`;w.div`
  width: 100%;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
  border: none; /* Ensure no border on LeadershipContainer */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  border: none; /* Ensure no border on LeadershipTitleRow */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  font-weight: 800;
  letter-spacing: 0.01em;
  color: ${Gr} !important;
  margin: 0;
  text-align: center;
  border: none; /* Ensure no border on LeadershipTitle */
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;w.a`
  font-size: 1.4rem;
  letter-spacing: 0.9px;
  padding: 2rem 4rem;
  border: 1px solid ${Gr};
  text-transform: uppercase;
  cursor: pointer;
  background: 0;
  transition: background 0.3s ease;
  max-width: 25rem;
  white-space: normal;
  text-align: center;
  text-decoration: none;
  color: ${Gr} !important;
  font-family: var(--andover-font-sans);
  font-style: normal;
  font-stretch: extra-condensed;
  border-radius: 0;
  display: inline-block;
  margin-top: 2rem;
  margin-left: 0;
  &:hover {
    background: ${Gr};
    color: ${lr} !important;
  }
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.25rem;
  color: #bfc5c9 !important;
  margin-bottom: 3.5rem;
  max-width: 900px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  border: none; /* Ensure no border on LeadershipSubtitle */
`;w.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.5rem;
  animation: ${YC} 1.2s cubic-bezier(0.4,0,0.2,1);
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  overflow-x: auto;
  border: none; /* Ensure no border on LeadershipCardsRow */
`;w.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  background: transparent;
  color: ${Gr} !important;
  box-sizing: border-box;
  text-align: center;
  border: none; /* Ensure no border on LeadershipCard */
`;w.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: #6c7a89 url('https://via.placeholder.com/120x120?text=Photo') center/cover no-repeat;
  margin-bottom: 1.2rem;
  filter: ${({$isColor:n})=>n?"none":"grayscale(1) contrast(1.1)"};
  border: none; /* Ensure no border on LeaderImg */
`;w.div`
  font-family: var(--andover-font-serif);
  font-size: 1.25rem;
  font-weight: 700;
  color: ${Gr} !important;
  margin-bottom: 0.2rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderName */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: ${Gr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderRole */
`;w.div`
  font-family: var(--andover-font-sans);
  font-size: 1.05rem;
  color: ${Gr} !important;
  margin-bottom: 0.7rem;
  text-align: center;
  border: none; /* Ensure no border on LeaderDesc */
`;w.a`
  color: ${Gr} !important;
  text-decoration: underline;
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  border: none; /* Ensure no border on LeaderLink */
`;w.a`
  font-family: var(--andover-font-sans);
  color: ${Ta};
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;

  &:hover {
    text-decoration: underline;
    color: ${lr};
  }

  svg {
    width: 0.8rem; /* Adjusted for even smaller arrow size */
    height: auto;
    stroke: ${Ta};
    transition: stroke 0.2s ease-in-out;
  }
`;w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: ${lr};
  margin-top: 2rem;
  margin-bottom: 1rem;
  border: none; /* Ensure no border on SmallSectionTitle */
`;const R7=w.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 100%;
    height: 100%;
    fill: ${j7};
  }
`,fh=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),hh=w.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;

  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${HC};
    transform: translateY(-1px);
  }
`,z7=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),O7=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${PC};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  border-left: 32px solid ${Ta};
  border-right: 33px solid ${Ta};
`,N7=w.div`
  /* Max width for content alignment */
  /* Center the content */
  padding: 0; /* Horizontal padding */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0;
  }
`,L7=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${lr};
  margin-bottom: 0.8rem;
  font-weight: 400;
`,U7=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,mh=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${HC};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
    color: ${lr};
  }
`,B7=()=>d.jsxs(d.Fragment,{children:[d.jsx(A7,{children:d.jsx(E7,{children:"Take Action"})}),d.jsx(O7,{children:d.jsxs(N7,{children:[d.jsx(R7,{children:d.jsx(z7,{})}),d.jsx(L7,{children:"TAKE ACTION"}),d.jsxs(U7,{children:[d.jsxs(mh,{href:"#get-involved",children:["GET INVOLVED ",d.jsx(hh,{children:d.jsx(fh,{})})]}),d.jsxs(mh,{href:"#ways-to-take-action",children:["WAYS TO TAKE ACTION ",d.jsx(hh,{children:d.jsx(fh,{})})]}),d.jsxs(mh,{href:"#support-our-mission",children:["SUPPORT OUR MISSION ",d.jsx(hh,{children:d.jsx(fh,{})})]}),d.jsxs(mh,{href:"https://donorbox.org/giving-dmun",target:"_blank",rel:"noopener noreferrer",children:["DONATE ONLINE ",d.jsx(hh,{children:d.jsx(fh,{})})]})]})]})}),d.jsx(C7,{children:d.jsxs(M7,{children:[d.jsxs(D7,{children:[d.jsxs(K0,{id:"get-involved",children:[d.jsx(ch,{children:"Get Involved"}),d.jsx(uh,{children:"Join us in our mission to empower youth and create positive change in our communities. There are many ways to get involved and make a difference."})]}),d.jsxs(K0,{id:"ways-to-take-action",children:[d.jsx(ch,{children:"Ways to Take Action"}),d.jsx(uh,{children:"Whether you're interested in advocacy, research, or direct community involvement, we have opportunities that match your interests and skills."})]}),d.jsxs(K0,{id:"support-our-mission",children:[d.jsx(ch,{children:"Support Our Mission"}),d.jsx(uh,{children:"Your support empowers us to continue our mission of empowering youth and providing quality education for all. By donating, you directly contribute to global education initiatives, offering scholarships, mentorship programs, and leadership opportunities to young people from diverse backgrounds, ensuring they have the resources to succeed."}),d.jsx(uh,{children:d.jsx("a",{href:"https://donorbox.org/giving-dmun",children:d.jsx("button",{children:"Donate Now  "})})})]})]}),d.jsxs(k7,{children:[d.jsx(ch,{children:"Quick Actions"}),d.jsx(dh,{children:d.jsx(lh,{onClick:()=>window.open("https://mymun.com/dmun","_blank"),children:"Join Our Programs"})}),d.jsx(dh,{children:d.jsx(lh,{onClick:()=>window.location.href="/volunteer",children:"Volunteer"})}),d.jsx(dh,{children:d.jsx(lh,{onClick:()=>window.location.href="/donate",children:"Support Our Work"})}),d.jsx(dh,{children:d.jsx(lh,{onClick:()=>window.location.href="/membership",children:"Stay Connected"})})]})]})})]}),zm="#002147",V7="#E7F1FA",eT=w.div`
  background-color: ${V7};
  padding: 4rem 15vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`,tT=w.h1`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  color: ${zm};
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`,nT=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`,iT=w(Ut)`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`,$7=w.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,rT=w.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,aT=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.6rem;
  color: ${zm};
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-weight: bold;
`,oT=w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: ${zm};
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`,P7=w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.85rem;
  color: ${zm};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: 0;
`,FC=[{id:"8",image:"/Article8img.jpeg",title:"Executive Director Highlights Critical Role of Multi-Stakeholder Collaboration and Youth Empowerment at FfD4 Multistakeholder Hearing",summary:"Mr. Jaewon Choi, Executive Director of the DMUN Foundation, emphasized the importance of multi-stakeholder partnerships and youth engagement at the FfD4 Multistakeholder Hearing in New York, a key preparatory event for the 2025 FfD4 conference.",date:"June 22, 2025"},{id:"7",image:"/Article7img.jpeg",title:"DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee  to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation",date:"August 10th, 2024"},{id:"1",image:"/Article-1.jpeg",title:"YouthCubed Nominates 2 Global Youth ​Representative for the Summit of the Future",summary:"We're proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.",date:"August 7 2024"},{id:"4",image:"/Article-4.jpeg",title:"Founder's Analysis: End of Online MUN?",summary:"Learn more about our Executive Director & Founder, Mr. Jaewon Choi's analysis on the future of virtual Model UN.",date:"July 22, 2024"},{id:"5",image:"/online.jpeg",title:"Executive Director Jaewon Choi Elevates Youth Voices at HLPF 2024",summary:"Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF)",date:"July 17, 2024"},{id:"6",image:"/Article6img.jpeg",title:"Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development",date:"March 15th, 2024"},{id:"3",image:"/Article-3.jpeg",title:"COP28 UAE",summary:"Learn more about our engagement at COP28 UAE as a ​youth-led civil society stakeholder.",date:"Dec 13, 2023"},{id:"2",image:"/Article-2.jpeg",title:"DMUN Foundation @ FfD4",summary:"Learn more about how we have been invited by the UNGA ​President to participate in the Fourth International ​Conference on Financing for Development.",date:"July 19, 2023"}],H7=[{title:"Home",path:"/",content:["Representing Youth, Building Leaders.","At a Glance","Programs","Advocacy","Research","Integrity","DMUN NEWS","Upcoming Events","Access to DMUN is completely free","DMUN is built by students, for students","Our online platform connects students across the globe"].join(" ")},{title:"About",path:"/about",content:["About Us","Our Mission","Our History and Origins","Our Philosophy","Annual Reports","Impact","Leadership","Meet the dedicated individuals who guide our mission","Total participants in our program","Raised for the Foundation","Countries represented","Intergovernmental bodies and conferences engaged","Inputs, statement, and interventions produced","Programs operated"].join(" ")},{title:"Programs",path:"/programs",content:["Programs","Model UN Workshops","Leadership Training","Global Citizen Seminars","Youth Exchange Initiatives","Youth Leadership","Community Service","Global Education","Program Highlights","Program Impact"].join(" ")},{title:"Advocacy",path:"/advocacy",content:["Advocacy","What We Advocate For","Our Advocacy Strategies","Ethical Advocacy Statement","Get Involved","Ways to Take Action","Support Our Mission","Donate Online"].join(" ")},{title:"Research",path:"/research",content:["Research","Our Research","Research Areas","Research Benefits","Research Highlights","Research publications","Citations in academic literature","International research collaborations","Research impact score","Data & Insights","Publications"].join(" ")},{title:"Integrity",path:"/integrity",content:["Integrity","Ethics, Integrity, and Transparency","We must do our work, the right way.","Procedures and Mandates","Diversity, Equity, and Inclusion","Documentation of Compliance Requirements","Database of Compliance and Integrity Forms","Ethical Advocacy Policy","Academic Integrity Policy","Diversity, Equity, and Inclusion and Non-Discrimination Policy","Universal Code of Conduct","Statement on Anti-Corruption","Statement on Our Efforts to Prevent Human Trafficking, Involuntary Labor, and Modern Slavery","Statement on Compliance of International and National Regulations","Guidelines for Partners of the Foundation","Declaration on Political Independence and Neutrality","Temporary Procedures on Artificial Generative Intelligence","Form E1","Form E2","Form E3","Form E4","Form E5","Form E6","Form E7","Form E8"].join(" ")},{title:"Mandate",path:"/mandate",content:["Mandate","Mission & Vision","Strategic Goals","Core Values","Our Constitution"].join(" ")},{title:"Donor Relations",path:"/donor-relations",content:["Donor Relations","Donor Integrity","Donor Transparency","Partner","If you donate to an organization, you deserve to know where and how your contributions are used.","We ensure complete transparency in our financial operations.","We actively communicate donor impact.","Our donor relations team is always ready for questions."].join(" ")},{title:"Donate",path:"/donate",content:["Donate","How to Give","Why Give to Us?","Where Are My Funds Used?","How Are Donors Honored?","Your support enables us to continue our mission of empowering youth","Donate Online"].join(" ")},{title:"Volunteer",path:"/volunteer",content:["Volunteer","Why Volunteer","Values of Volunteering","Apply Now","Volunteering with us offers a unique opportunity","Volunteer Application"].join(" ")},{title:"Membership",path:"/Membership",content:["Membership","Categories of Membership","Individual Members","Organizational Members","Honorary Members","Admission Process","Membership Application Form","Foundation program","Membership Committee","Board of Trustees"].join(" ")},{title:"Take Action",path:"/take-action",content:["Take Action","Get Involved","Ways to Take Action","Support Our Mission","Donate Online","Volunteer","Advocacy","Programs"].join(" ")},{title:"Newsroom",path:"/newsroom",content:["Newsroom","Latest News","Articles","Press Releases","Events","Updates"].join(" ")},{title:"Article Page",path:"/newsroom/:id",content:["Article","News","Press Release","Event","Update"].join(" ")},{title:"Test Page",path:"/test",content:["Test Page","Sample Content","Testing"].join(" ")}],Y7=FC.map(n=>({title:n.title,path:`/newsroom/${n.id}`,content:[n.title,n.summary||"",n.date||""].join(" ")})),F7=()=>{const{search:n}=jo();return Ei.useMemo(()=>new URLSearchParams(n),[n])},G7=()=>{var r;const e=((r=F7().get("search"))==null?void 0:r.toLowerCase())||"";if(e){const o=[...H7,...Y7].filter(c=>c.content.toLowerCase().includes(e));return d.jsxs(eT,{children:[d.jsxs(tT,{children:['Search Results for "',e,'"']}),o.length===0?d.jsx("p",{children:"No results found."}):d.jsx(nT,{children:o.map((c,u)=>d.jsx(iT,{to:c.path,children:d.jsxs(rT,{children:[d.jsx(aT,{children:c.title}),d.jsx(oT,{children:c.path})]})},c.path+u))})]})}return d.jsxs(eT,{children:[d.jsx(tT,{children:"Newsroom"}),d.jsx(nT,{children:FC.map(a=>d.jsxs(iT,{to:`/newsroom/${a.id}`,children:[d.jsx($7,{src:a.image,alt:a.title}),d.jsxs(rT,{children:[d.jsx(aT,{children:a.title}),d.jsx(oT,{children:a.summary}),d.jsx(P7,{children:a.date})]})]},a.id))})]})},q7="#44b8f3",Om="#002147",I7="#E7F1FA",sT=w.div`
  background-color: ${I7};
  padding: 4rem 30vw;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 15vw;
  }
`,lT=w(Ut)`
  display: inline-block;
  color: ${Om};
  text-decoration: none;
  margin-bottom: 2rem;
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  
  &:hover {
    color: ${q7};
  }
`,X7=w.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 2rem;
`,cT=w.h1`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${Om};
  margin-bottom: 0.5rem;
  font-weight: bold;
`,W7=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  color: ${Om};
  opacity: 1;
  margin-bottom: 0.2rem;
  font-weight: bold;
`,uT=w.div`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  line-height: 1.7;
  color: ${Om};

  strong {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 1.5rem;
    font-size: 1.1rem;
  }

  p {
    font-weight: normal;
    margin-bottom: 1em;
  }
`,K7=[{id:"8",image:"/Article8img.jpeg",title:"Executive Director Highlights Critical Role of Multi-Stakeholder Collaboration and Youth Empowerment at FfD4 Multistakeholder Hearing",summary:"Mr. Jaewon Choi, Executive Director of the DMUN Foundation, emphasized the importance of multi-stakeholder partnerships and youth engagement at the FfD4 Multistakeholder Hearing in New York, a key preparatory event for the 2025 FfD4 conference.",date:"June 22, 2025",content:`<p>New York, New York – June 22, 2025 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation highlighted the role of multi-stakeholder partnerships and robust youth engagement in achieving sustainable development.</p>
<p>This emphasis follows its active and impactful participation in the Fourth International Conference on Financing for Development (FfD4) Multistakeholder Hearing, held in preparation for the main FfD4 conference in Seville, Spain, from June 30 to July 3, 2025.</p>
<p>The hearing, a crucial preparatory event, convened diverse voices from civil society, the private sector, academia, and philanthropic organizations to contribute to the global dialogue on financing the 2030 Agenda for Sustainable Development. The DMUN Foundation, dedicated to fostering global cooperation and empowering young people in international affairs, presented key interventions during the hearing. The Foundation highlighted how collaborative efforts across sectors are vital to mobilizing the necessary resources and expertise to address pressing global challenges, from climate change and poverty to inequality and health crises.</p>
<p>"As a youth-led organization, the DMUN Foundation believes deeply that the voices and innovative potential of young people are not just beneficiaries, but essential drivers of sustainable development," said Mr. Choi.</p>
<p>The FfD4 Multistakeholder Hearing provided a vital platform for non-state actors, especially youth, to shape the future of development finance. We are at a critical juncture where traditional financing models alone are insufficient to meet the ambitious targets of the Sustainable Development Goals. The collective wisdom and resources of governments, civil society, and the private sector—including the dynamic energy of youth—are essential to unlocking new pathways for sustainable and inclusive growth."</p>
<p>During its interventions, the DMUN Foundation, drawing on its experience advocating for greater youth participation in UN FfD conferences, specifically called for:</p>
<ul>
  <li><strong>Meaningful Youth Participation and Inclusion:</strong> Ensuring young people are not only present but actively involved in the design, implementation, and monitoring of financing for development strategies and programs.</li>
  <li><strong>Strengthening North-South and South-South Cooperation:</strong> Promoting inclusive partnerships that leverage diverse experiences and resources to address global challenges equitably.</li>
  <li><strong>Innovating Financing Instruments:</strong> Exploring blended finance, impact investing, and other mechanisms to de-risk investments and attract private capital into sustainable development projects, particularly those led by or benefiting youth.</li>
  <li><strong>Enhancing Debt Sustainability:</strong> Advocating for comprehensive solutions to the growing debt burden faced by many developing countries, which hinders their ability to invest in essential services and future generations.</li>
  <li><strong>Promoting Digital Inclusion and Literacy:</strong> Recognizing the potential of digital technologies to bridge development gaps, ensure equitable access to financial services, and empower young entrepreneurs and innovators.</li>
  <li><strong>Empowering Local Communities and Marginalized Groups:</strong> Ensuring that development finance strategies are inclusive and address the specific needs and aspirations of all segments of society, with a particular focus on local, youth-led initiatives.</li>
</ul>
<p>The DMUN Foundation remains committed to working with all stakeholders to advocate for a transformative FfD4 outcome that prioritizes people, planet, and the vital role of youth. The insights and recommendations gathered from the Multistakeholder Hearing will inform the intergovernmental negotiations for the FfD4 outcome document, which is expected to outline a comprehensive framework for financing sustainable development.</p>
<p>View the Interventions Here:<br/>
<a href="https://www.instagram.com/p/DBwSEe3vYES/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DBwSEe3vYES/</a><br/>
<a href="https://www.instagram.com/p/DBrYD8ovvkf/" target="_blank" rel="noopener noreferrer">https://www.instagram.com/p/DBrYD8ovvkf/</a></p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`},{id:"7",image:"/Article7img.jpeg",title:"DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation",summary:"Three DMUN Foundation representatives are participating in the Second Session of the Ad Hoc Committee at the United Nations Headquarters, advocating for youth and developing-country perspectives in global tax cooperation.",date:"August 10th, 2024",content:`<p><strong>DMUN Foundation Sends 3 Representatives to the 2024 Ad Hoc Committee to Draft a Terms of Reference to the United Nations Framework Convention on International Tax Cooperation</strong></p>
<p>New York, NY – 10 August 2024 – Three official representatives of the DMUN Foundation—Executive Director Mr. Jaewon Choi, Trustee Mr. Avi Contractor, and Global Youth Delegate Mr. Matthew Kartavov—are participating in the Second Session of the Ad Hoc Committee to Draft Terms of Reference for a United Nations Framework Convention on International Tax Cooperation, taking place at United Nations Headquarters in New York from 29 July to 16 August 2024.</p>
<p>Building on its commitment to inclusive global governance, the DMUN delegation will:</p>
<ul>
  <li><strong>Deliver Plenary Interventions:</strong> Advocate for the explicit inclusion of youth and developing-country perspectives in the Convention's governance and dispute-resolution mechanisms.</li>
  <li><strong>Propose SDG-Aligned Commitments:</strong> Recommend anchoring the Convention's objectives in the Sustainable Development Goals to secure predictable financing for development, climate action, and social welfare.</li>
</ul>
<p>"A fair international tax framework is vital for sustainable development and equity," said Mr. Choi. "We're proud to ensure that youth voices and the priorities of emerging economies are heard at the heart of these negotiations."</p>
<p>The Committee aims to finalize and adopt the Terms of Reference by vote on 16 August 2024, setting the stage for the negotiation of a binding Convention that could reshape global tax cooperation and bolster revenue mobilization for all nations.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`},{id:"1",image:"/Article-1.jpeg",title:"Two Youth Changemakers Selected to Attend the UN's High-Level Summit for the Next Generation",summary:"We're proud to announce the nomination of Fale Andrew ​Lesa JP and Alexa Dominique Pascual to the Summit of the ​Future as Global Youth Representatives.",date:"August 7 2024",content:`YouthCubed, a member organization of the DMUN Foundation, is proud to announce the nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual as Global Youth Representatives for the upcoming Summit of the Future. These individuals were selected for their exceptional leadership and unwavering commitment to addressing critical global challenges, making them ideal candidates to represent the voices of youth at this pivotal international gathering.\\n\\n<strong>Fale Andrew Lesa JP</strong>\\nFale Andrew Lesa, hailing from Samoa, is a highly respected indigenous leader and policy consultant. He has a distinguished track record of advocating for climate justice, particularly for small island developing states (SIDS), which are among the most vulnerable to the impacts of climate change. Fale\\'s work spans various high-profile roles, including serving on the Auckland Conservation Board and as a commissioner on the Child & Youth Mortality Review Committee in New Zealand. His expertise in public policy and his deep commitment to integrating traditional knowledge into modern climate solutions have positioned him as a key figure in the global climate movement. As a Global Youth Representative, Fale aims to elevate the concerns of SIDS and indigenous communities, ensuring that their unique challenges and perspectives are central to the discussions at the Summit of the Future.\\n\\n<strong>Alexa Dominique Pascual</strong>\\nAlexa Dominique Pascual, from the United States, is a dynamic youth leader with a strong focus on women\\'s rights and climate activism. She has represented various organizations, including the Major Group for Children and Youth (MGCY) and UNA-USA, at international forums such as the United Nations General Assembly. Alexa is deeply involved in advocacy for gender equity and has been a vocal proponent of increasing youth participation in diplomacy and policy-making. Her experience in leading discussions on global sustainability and human rights makes her an invaluable voice at the Summit of the Future. Alexa\\'s commitment to diversifying the field of international relations and ensuring that young women are at the forefront of global decision-making processes aligns with the core values of YouthCubed.\\n\\n<strong>YouthCubed\\'s Vision for the Summit of the Future</strong>\\nThe nomination of Fale Andrew Lesa JP and Alexa Dominique Pascual underscores YouthCubed\\'s dedication to fostering youth leadership in global governance. By amplifying the voices of young leaders who are deeply connected to their communities and passionate about sustainable development, YouthCubed is working to ensure that the outcomes of the Summit of the Future are inclusive and equitable. These representatives will bring crucial insights to the table, advocating for the rights and futures of marginalized groups and pushing for policies that reflect the aspirations of the younger generation.\\n\\nJaewon Choi, the founder of YouthCubed and the Executive Director of the DMUN Foundation, expressed his confidence in the nominees: "Fale and Alexa embody the spirit of YouthCubed—bold, innovative, and unyielding in their pursuit of a better world. Their participation in the Summit of the Future is a testament to the power of youth to drive meaningful change on the global stage."\\n\\nAs the world prepares for the Summit of the Future, YouthCubed remains committed to supporting these young leaders in their mission to create a more just and sustainable world.`},{id:"4",image:"/Article-4.jpeg",title:"Founder's Analysis: End of Online MUN?",summary:"An analysis exploring the current decline of online MUNs as in-person conferences regain popularity.",date:"July 22, 2024",content:`<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>Introduction</p>
<p>As the COVID-19 pandemic subsides and life starts to return to a semblance of normalcy, many aspects of our lives are undergoing changes, and the world of Model United Nations (MUN) is no exception. While online MUN conferences played a crucial role in keeping the spirit of diplomacy alive during the pandemic, they now face challenges that could lead to their decline as in-person conferences regain popularity. In this analysis, we will explore the current downfall of online MUNs and the factors contributing to their diminishing allure.</p>
<p>"The shift"</p>
<p>The COVID-19 pandemic disrupted the traditional MUN landscape, prompting organizers to quickly transition to online platforms to continue these essential learning experiences. Online MUN conferences saw a surge in participation as students and organisers adapted to virtual settings to maintain the momentum of global engagement.</p>
<p>Factors to downfall</p>
<p>"Zoom Fatigue" and Virtual Burnout</p>
<p>A major challenge faced during the pandemic was the prevalence of "Zoom fatigue" and virtual burnout. As online learning and virtual meetings became the norm, students increasingly experienced exhaustion from extensive screen time, leading to a lack of enthusiasm for additional virtual commitments like online MUN conferences.</p>
<p>Impersonal Interaction</p>
<p>Online MUNs, while accessible, lack the personal interaction and camaraderie that in-person conferences offer. The spontaneous conversations, networking opportunities, and social bonding that occur during traditional MUN events contribute to the overall MUN experience, and their absence in the virtual setting is keenly felt.</p>
<p>Simulation Realism</p>
<p>While online MUN conferences demonstrated adaptability and creativity, some participants found that the realism of in-person MUN simulations could not be fully replicated online. Physical presence often lends an authentic sense of diplomacy and urgency to the proceedings, which virtual platforms struggle to match.</p>
<p>Time Zone Constraints</p>
<p>Time zone differences have been a significant hurdle for global participants in online MUNs. Coordinating sessions that accommodate diverse time zones can be challenging, affecting the inclusivity and participation of students from certain regions.</p>
<p>The Resurgence of In-Person MUN Conferences</p>
<p>As the world reopens, many students and organizers are eager to return to the cherished experience of in-person MUN conferences. The allure of reconnecting with friends and colleagues, engaging in dynamic face-to-face debates, and exploring new cities enhances the appeal of traditional MUN events.</p>
<p>What's next?</p>
<p>While the current decline of online MUNs is evident, it is essential to recognize their invaluable contributions during challenging times. Online MUNs will likely continue to exist, serving as a supplementary option for those facing logistical constraints or seeking a cost-effective alternative. The future of MUN conferences lies in striking a balance between in-person and online events, offering participants the best of both worlds.</p>
<p>To conclude</p>
<p>As we bid farewell to the height of online MUNs amidst the waning pandemic, it is essential to appreciate the role they played in sustaining global dialogue and learning during unprecedented times. As in-person conferences regain their allure, organizers and participants must envision a future that incorporates both traditional and virtual settings to create a dynamic, inclusive, and enriching MUN experience. By striking this balance, we can preserve the essence of diplomacy while embracing the opportunities that technology provides, ensuring the continued growth and impact of the MUN community in a post-COVID world.</p>`},{id:"5",image:"/online.jpeg",title:"Executive Director Jaewon Choi Elevates Youth Voices at HLPF 2024",summary:"Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF) at the United Nations Headquarters in New York.",date:"July 17, 2024",content:`<p>New York, NY – July 17, 2024 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation, participated as the youngest delegate at the 2024 UN High-Level Political Forum on Sustainable Development (HLPF), held at United Nations Headquarters in New York from 8 to 17 July 2024 under the auspices of the UN Economic and Social Council.</p>
<p>Invited by the United Nations Major Group on Children and Youth, Mr. Choi represented three youth-led non-profit organisations—the DMUN Foundation, the Katija Hyoungjoo Neuber Institute, and YouthCubed—bringing a unified youth perspective to the world's foremost platform for reviewing progress on the 2030 Agenda and the Sustainable Development Goals (SDGs).</p>
<p>Mr. Choi delivered a powerful intervention during a session on SDG Acceleration as a Civil Society Delegate. He pointed out some of the systemic barriers and discrimination faced by youths, especially minors in effective engagement with the United Nations.</p>
<p>Participants and speakers in this session included the State Minister of Spain, H.E. Amina J. Mohammed, Deputy Secretary-General of the United Nations, and 193 Member States and other observers of the United Nations.</p>
<p>"This generation's insights and innovations are indispensable for achieving transformative, sustainable solutions," said Mr. Choi. "At HLPF 2024, youth leaders moved from the margins to the centre of global policymaking."</p>
<p>The HLPF is the UN's central platform for follow-up and review of the 2030 Agenda and its 17 SDGs, bringing together Member States, UN entities, civil society, the private sector, and other stakeholders. The outcomes of the 2024 forum—including the Youth Report—will feed into the upcoming Declaration of the Future and the Summit of the Future to be convened at UN Headquarters later this year.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`},{id:"6",image:"/Article6img.jpeg",title:"Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development",summary:"Mr. Jaewon Choi, Executive Director of the DMUN Foundation, joined delegates at the 2024 UNECE Regional Forum on Sustainable Development in Geneva, delivering strategic interventions and co-authoring a global Youth Report.",date:"March 15th, 2024",content:`<p><strong>Press Release - The United Nations Economic Commission for Europe Regional Forum on Sustainable Development</strong></p>
<p>Geneva, Switzerland – March 15, 2024 – Mr. Jaewon Choi, Executive Director of the DMUN Foundation, joined delegates at the 2024 United Nations Economic Commission for Europe (UNECE) Regional Forum on Sustainable Development (RFSD), held in Geneva from 13 to 14 March 2024, with preparatory meetings on 11 and 12 March 2024.</p>
<p>Invited by the United Nations Major Group on Children and Youth, Mr. Choi represented three youth-led non-profit organizations—the DMUN Foundation, the Katija Hyoungjoo Neuber Institute, and YouthCubed—as the youngest participant in the entire forum.</p>
<p>Throughout the Forum, Mr. Choi delivered nine strategic interventions:</p>
<ul>
  <li><strong>Public Plenary and Roundtable Speeches:</strong> Four live-broadcast interventions (in English, French, and Russian) on UN Web TV, covering the region's progress on SDGs, youth engagement in policymaking, and innovative financing for resilience.</li>
  <li><strong>Civil Society Pre-Meeting Contributions:</strong> Five focused interventions during the Civil Society Pre-Meeting, collaborating with other NGO representatives to strengthen youth participation in UNECE processes.</li>
</ul>
<p>In partnership with the Major Group on Children and Youth, Mr. Choi co-authored a comprehensive Youth Report, consolidating global youth recommendations. This report, approved by RFSD Co-Chairs—the Permanent Representatives of Armenia and the Czech Republic—will be presented to the Summit of the Future later in 2024, influencing negotiations among all 193 UN Member States.</p>
<p>"Our generation holds the key to transformative, sustainable policies," said Mr. Choi. "RFSD 2024 proved that youth are not merely observers but essential drivers of change in the global arena."</p>
<p>The UNECE RFSD engages ambassadors of its 56 member States, along with civil society and youth constituencies, to review regional SDG implementation and feed outcomes into key UN mechanisms. The Forum's outputs, including the Youth Report, will inform the forthcoming Declaration of the Future and the Summit of the Future at UN Headquarters.</p>
<p><strong>About the DMUN Foundation</strong></p>
<p>The DMUN Foundation is a youth-led NGO empowering young people through education, capacity‐building, and advocacy on multilateral affairs and sustainable development. Learn more at www.dmun.org</p>
<p><strong>Contact:</strong></p>
<p>Department of External Affairs<br/>Email: enquiries@dmun.org<br/>Phone: +82 10 5696 8302</p>`},{id:"3",image:"/Article-3.jpeg",title:"COP28 UAE",summary:"Our latest research explores how young people view and engage with digital governance frameworks worldwide.",date:"December 13, 2023",content:`<p>Dubai, United Arab Emirates - The DMUN Foundation is thrilled to announce its inaugural participation in COP28 UAE, a significant step in our journey towards active involvement with the United Nations. This milestone marks our first major engagement in the UN's global environmental initiatives, where we will bring the perspectives of youth to the forefront of critical discussions on climate change and sustainability.</p>
<p><strong>Empowering Youth at COP28</p>
<p>At COP28, our delegation, consisting of young leaders from diverse backgrounds, will engage directly with policymakers, experts, and international organizations. Our focus is to ensure that the voices of youth are not only heard but are integral to shaping the policies and strategies that will determine the future of our planet. By participating in this global forum, the DMUN Foundation is fulfilling its mission to empower young people to become active stakeholders in the world's most pressing issues.</p>
<p><strong>Reflecting on Our Experience</p>
<p>Reflecting on our visit to COP28, we are proud to have contributed to meaningful dialogues that address the challenges of climate change. Our representatives participated in various panels, workshops, and roundtable discussions, where they shared innovative ideas and youth-led solutions. The experience reinforced the importance of youth involvement in global decision-making processes and highlighted the critical role that education and empowerment play in fostering a sustainable future.</p>
<p><strong>Looking Ahead</p>
<p>Our participation in COP28 is just the beginning. The DMUN Foundation is committed to continuing its engagement with the United Nations and other international bodies. We will build on the momentum from COP28 to further our efforts in advocating for youth-led initiatives and promoting sustainable development. Our journey towards greater involvement in the REAL UN is a testament to our belief that young people have the power to drive positive change on a global scale.</p>
<p><strong>For media inquiries or more information about our participation in COP28 UAE, please Membership:</p>
<p><strong>Department of External Affairs<br/>enquiries@dmun.org</p>
<p><strong>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`},{id:"2",image:"/Article-2.jpeg",title:"DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement",summary:"The DMUN Foundation is proud to announce its nomination to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4).",date:"3rd June 2024",content:`<strong>FOR IMMEDIATE RELEASE</strong><br/><br/>
<p>DMUN Foundation Secures Special Accreditation for FfD4: A Significant Step Towards Global Engagement</p>
<p>New York City, NY – The DMUN Foundation is proud to announce its nomination by H.E. Dennis Francis, President of the 78th Session of the United Nations General Assembly, to participate as a civil society stakeholder in the Fourth International Conference on Financing for Development (FfD4). This nomination, made under paragraph 4(b) of Resolution 78/271, marks a significant milestone in our commitment to advocating for youth-led initiatives on a global stage.</p>
<p>Special Accreditation and Its Significance</p>
<p>The United Nations has established a process for special accreditation that allows non-governmental organizations (NGOs), civil society organizations (CSOs), academic institutions, and private sector entities to contribute to key conferences like FfD4. This accreditation is crucial for ensuring that a diverse array of voices, particularly those not traditionally included in UN processes, can participate in shaping global policies on financing for development. The procedure involves a nomination from the President of the General Assembly, where the President creates a list of stakeholders that he determines to be of close affiliation and value to the event, and places it under a "non-objective procedure", which will be elaborated below.</p>
<p>For the DMUN Foundation, this special accreditation represents more than just participation; it is a recognition of our ongoing efforts to bring youth perspectives into critical global discussions. Through this platform, we aim to highlight the innovative solutions and unique insights that young people can offer, particularly in addressing the pressing financial challenges that impact sustainable development worldwide.</p>
<p>Understanding the Non-Objective Procedure</p>
<p>The nomination process for FfD4 includes what is known as a "non-objective procedure." This procedure comes after an organization is nominated by the President of the General Assembly, in which the President circulates the list of stakeholder organizations he has selected to all Member States and Observer States, in which it requires unanimous approval. Even one objection from a Member State or a Observer State will completely exclude that organization from the nominated list.</p>
<p>The Importance of Paragraph 4(b) of Resolution 78/271</p>
<p>Paragraph 4(b) of Resolution 78/271 is a key element in enabling the participation of NGOs, CSOs, academic institutions, and the private sector in FfD4. It formally approves their involvement in both the conference and its preparatory processes, recognizing their critical role in shaping the global financing framework for sustainable development. The inclusion of these entities is vital for ensuring that the discussions and outcomes of FfD4 are comprehensive and inclusive, incorporating insights from across different sectors and regions.</p>
<p>DMUN Foundation's Commitment to Global Advocacy</p>
<p>Our participation in FfD4 aligns with the DMUN Foundation's broader mission to empower youth and promote sustainable development through education and advocacy. By engaging directly in this international forum, we are taking a significant step towards influencing global financial policies that affect young people and future generations.</p>
<p>We are committed to using this platform to advocate for policies that prioritize equitable financing, sustainable development, and the empowerment of marginalized communities. The insights and contributions we bring to FfD4 will reflect our deep commitment to creating a more just and sustainable world, where young people are recognized as essential stakeholders in global decision-making processes.</p>
<p>For media inquiries or more information about our participation in FfD4, please Membership:</p>
<p>Department of External Affairs<br/>enquiries@dmun.org</p>
<p>About DMUN Foundation</p>
<p>The DMUN Foundation is a youth-focused nonprofit organization dedicated to providing accessible education in politics, governance, and international relations. We empower young people to become active global citizens through innovative programs, leadership opportunities, and participation in international forums. Our mission is to ensure that the voices of youth are heard in shaping a brighter, more equitable future.</p>`}],Z7=()=>{const{id:n}=QD(),e=K7.find(r=>r.id===n);return Ei.useEffect(()=>{e&&e.pdf&&(window.location.href=e.pdf)},[e]),e?e.pdf?null:d.jsxs(sT,{children:[d.jsx(lT,{to:"/newsroom",children:"← Back to Newsroom"}),d.jsx(X7,{src:e.image,alt:e.title}),d.jsx(cT,{children:e.title}),d.jsx(W7,{children:e.date}),d.jsx(uT,{dangerouslySetInnerHTML:{__html:e.content}})]}):d.jsxs(sT,{children:[d.jsx(lT,{to:"/newsroom",children:"← Back to Newsroom"}),d.jsx(cT,{children:"Article Not Found"}),d.jsx(uT,{children:"The article you're looking for doesn't exist. Please return to the newsroom to browse our articles."})]})},GC="#E7F1FA",Kr="#002147",qC="#44b8f3",IC="#555",Q7="#FFD700",J7=w.div`
  background-color: ${GC};
  padding: 4rem 15vw;
  min-height: 100vh;
  color: ${Kr};

  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`;w.h1`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;const ph=w.section`
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 0;
  }
`,gh=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  color: ${Kr};
  margin-bottom: 1.5rem;
  text-align: center;
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;w.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;w.div`
  text-align: center;
  font-family: var(--andover-font-sans);
  font-size: 1.2rem;
  color: ${Kr};
  font-weight: bold;
`;const Z0=w.div`
  width: 100%;
  height: 1px;
  background-color: ${Kr};
  opacity: 0.2;
  margin: 3rem 0;
`,dT=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`,Zo=w.div`
  background-color: #fff;
  border: 1px solid ${Kr};
  border-radius: 0;
  box-shadow: none;
  padding: 2rem;
  text-align: left;
  font-family: var(--andover-font-sans);
`,Qo=w.h3`
  font-family: var(--andover-font-serif);
  font-size: 2.8rem;
  color: ${Kr};
  margin-bottom: 1rem;
  font-weight: bold;
`,Jo=w.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${Kr};
  opacity: 1;
`;w(Ut)`
  display: block;
  color: ${Kr};
  text-decoration: none;
  margin-top: 1rem;
  font-weight: bold;

  &:hover {
    color: ${qC};
  }
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  opacity: 0.7;
`;const oo=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1em;
`;w.div`
  position: relative;
  width: 100%;
  height: 500px; /* Adjust height as needed */
  background-image: url('/hero-home.jpeg'); /* Use the same image as the header */
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  margin-bottom: 3rem; /* Add margin to separate from content below */
`;w.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 33, 71, 0.7); /* Dark blue overlay with 70% opacity */
`;w.h2`
  font-family: var(--andover-font-serif);
  font-size: 3.5rem;
  margin-bottom: 1rem;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  line-height: 1.6;
  z-index: 1;
  max-width: 700px;
  padding: 0 20px;
  text-align: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;const eB=w.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    fill: ${Q7};
  }
`,tB=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),vh=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),xh=w.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;
  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${IC};
    transform: translateY(-1px);
  }
`,nB=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${GC};
  padding: 2.5rem 0 0 0;
  padding-left: 20px;
  padding-right: 20px;
`,iB=w.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,rB=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${Kr};
  margin-bottom: 0.8rem;
  font-weight: 400;
`,aB=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,yh=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${IC};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: ${Kr};
  }
`,oB=w.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/DonatePageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`,sB=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,lB=()=>d.jsxs(d.Fragment,{children:[d.jsx(oB,{children:d.jsx(sB,{children:"Donate"})}),d.jsxs(J7,{children:[d.jsx(nB,{children:d.jsxs(iB,{children:[d.jsx(eB,{children:d.jsx(tB,{})}),d.jsx(rB,{children:"DONATE"}),d.jsxs(aB,{children:[d.jsxs(yh,{href:"#how",children:["How to Give ",d.jsx(xh,{children:d.jsx(vh,{})})]}),d.jsxs(yh,{href:"#why",children:["Why Give to Us? ",d.jsx(xh,{children:d.jsx(vh,{})})]}),d.jsxs(yh,{href:"#where",children:["Where Are My Funds Used? ",d.jsx(xh,{children:d.jsx(vh,{})})]}),d.jsxs(yh,{href:"#honor",children:["How Are Donors Honored? ",d.jsx(xh,{children:d.jsx(vh,{})})]})]})]})}),d.jsxs(ph,{id:"how",children:[d.jsx(gh,{children:"How to Give"}),d.jsxs(dT,{children:[d.jsxs(Zo,{children:[d.jsx("a",{href:"https://donorbox.org/giving-dmun",children:d.jsx(Qo,{children:"Direct Online Giving"})}),d.jsx(Jo,{children:`Make a quick and secure donation through our online platform. Visit our website, select the "Donate" option, and follow the prompts to make your gift. Whether it's a one-time donation or a recurring contribution, your support makes a significant difference.`})]}),d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Institutional Giving"}),d.jsx(Jo,{children:"Institutions, including corporations, foundations, and other organizations, can support our mission through grants, sponsorships, and partnership opportunities. Institutional giving allows for larger-scale contributions that can significantly impact our projects and advocacy efforts."})]}),d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Giving Assets or Securities"}),d.jsx(Jo,{children:"Institutions, including corporations, foundations, and other organizations, can support our mission through grants, sponsorships, and partnership opportunities. Institutional giving allows for larger-scale contributions that can significantly impact our projects."})]}),d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Bank Transfer"}),d.jsx(Jo,{children:"We also offer International Bank Transfer and accept mailed checks please contact our Devlopment Office to receive information on transfers"})]})]}),d.jsx(oo,{style:{textAlign:"center",marginTop:"2rem"},children:d.jsxs("strong",{children:[" For institutional giving or assets or securities donation, please Membership our development office at ",d.jsx("a",{href:"mailto:give@dmun.org",style:{color:qC,textDecoration:"none",fontWeight:"bold"},children:"give@dmun.org"})]})})]}),d.jsx(Z0,{}),d.jsxs(ph,{id:"why",children:[d.jsx(gh,{children:"Why give to us?"}),d.jsx(oo,{children:"Your support enables us to continue our mission of empowering youth and making quality education accessible to all. By donating to our network, you are directly contributing to global education initiatives that provide innovative and inclusive programs in politics, governance, and international relations. Your generosity helps us offer scholarships, mentorship programs, and leadership opportunities to young people from diverse backgrounds, ensuring they have the resources they need to succeed."}),d.jsx(oo,{children:"Your contribution also amplifies our efforts in policy advocacy, enabling us to influence international platforms and drive meaningful change. We collaborate with diverse NGOs, sharing resources and expertise to tackle educational disparities and promote sustainable development. Your support strengthens these partnerships, allowing us to expand our reach and impact."}),d.jsx(oo,{children:"Moreover, your donation is an investment in the future. By empowering today's youth, you are fostering the leaders of tomorrow who will shape a better, more inclusive world. Every contribution, no matter the size, plays a crucial role in our mission."})]}),d.jsx(Z0,{}),d.jsxs(ph,{id:"where",children:[d.jsx(gh,{children:"Where are my funds used?"}),d.jsx(oo,{children:"Your funds are used to support the different programs and opportunities provided by our Member Organizations. While the exact usage of the funds and the nature of programs offered is different by each member organization, they all contribute to the overall mission and vision of the DMUN Foundation itself."}),d.jsx(oo,{children:"Here are some ways your funds are used by each of our Member Organizations:"}),d.jsxs("ul",{children:[d.jsxs("li",{children:[d.jsx("strong",{children:"Discover Model United Nations:"})," Your funds will be used to fund educational programs on international relations and capacity-building for sustainable development. This could be through a sustainability forum, a Model UN conference, or a essay competition."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"Katija Hyoungjoo Neuber Institute:"})," Your funds will be used to fund groundbreaking policy research on youth stakeholder recognition and youth participation in global governance. Your funds will also be used to advocate for youth and youth-led civil society participation in the United Nations."]}),d.jsxs("li",{children:[d.jsx("strong",{children:"YouthCubed:"})," Your funds will be used to fund programs that encourage and educate youth entrepreneurs, provide valuable opportunities for external youth representatives to participate in international policymaking venues, and recognize outstanding youth enterprises."]})]})]}),d.jsx(Z0,{}),d.jsxs(ph,{id:"honor",children:[d.jsx(gh,{children:"How are donors honored?"}),d.jsxs(dT,{children:[d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Naming Opportunities"}),d.jsx(Jo,{children:"As a valued supporter of the DMUN Foundation, you have the opportunity to leave a lasting legacy through our naming opportunities. By contributing at a significant level, you can have a program, scholarship, or event named in your honor or in recognition of someone special."})]}),d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Personalised Reports"}),d.jsx(Jo,{children:"To show our appreciation, we provide personalized reports to our major donors. These reports offer detailed insights into the impact of your contributions, including stories of participants who have benefited from your support and updates on the programs and initiatives you have helped fund."})]}),d.jsxs(Zo,{children:[d.jsx(Qo,{children:"Exclusive Events"}),d.jsx(Jo,{children:"Join us at exclusive events designed to honor and celebrate our top supporters. These events provide a unique opportunity to meet the young leaders you are helping to empower, connect with other like-minded donors, and hear directly from our team about the latest developments and successes at our Foundation."})]})]}),d.jsx(oo,{style:{textAlign:"center",marginTop:"2rem"},children:"For specific program funding partners, we offer the opportunity to integrate their company or entity's work with our events, pending the approval of the Board of Trustees."}),d.jsx(oo,{style:{textAlign:"center",fontSize:"0.9rem",opacity:"0.7",marginTop:"1rem"},children:"Donating to the DMUN Foundation is not a legally-binding contract for the DMUN Foundation provide any services or products. These donor recognition are given by the Board of Trustees as-is and is not guaranteed."})]})]})]}),XC="#E7F1FA",cB="#000000",nc="#002147",WC="#555",uB="#FFD700",dB=w.div`
  background-color: ${XC};
  color: ${nc};
  font-family: var(--andover-font-sans);
`,fB=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/DonorRelationsPageHeader.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`,hB=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
`,mB=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${XC};
  padding: 2.5rem 0;
  box-sizing: border-box;
`,pB=w.div`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,gB=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: ${nc};
  font-size: 2.5rem;
  text-align: center;
  margin: 1rem 0;
  text-transform: uppercase;
`,vB=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin: 1.5rem 0;
`,Au=w(Ut)`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${WC};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5em;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${nc};
  }
`,bh=w.span`
  display: inline-block;
  vertical-align: middle;
  svg {
    width: 1rem;
    height: auto;
    stroke: ${WC};
    transition: stroke 0.2s ease-in-out;
  }
  ${Au}:hover & svg {
    stroke: ${nc};
  }
`,xB=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yB=w.div`
  width: 80px;
  height: 80px;
  color: ${uB};

  svg {
    width: 100%;
    height: 100%;
  }
`,wh=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),bB=w.div`
    padding: 2rem 10vw;
`,wB=w.section`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;

  @media (max-width: 992px) {
    flex-direction: column;
  }
`,_B=w.img`
  width: 50%;
  max-width: 600px;
  object-fit: cover;
  filter: grayscale(100%);

  @media (max-width: 992px) {
    width: 100%;
  }
`,SB=w.div`
  width: 50%;
  @media (max-width: 992px) {
    width: 100%;
  }
`,fT=w.section`
    text-align: center;
    margin-bottom: 5rem;
`,gx=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${nc};
  margin-bottom: 1.5rem;
  text-align: center;
`,TB=w(gx)`
  text-align: left;
`,Cr=w.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
`,jB=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  text-align: left;
`,_h=w.div`
  border: 2px solid ${cB};
  padding: 2.5rem;
`,Sh=w.h3`
  font-family: var(--andover-font-serif);
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`,AB=w.a`
  color: ${nc};
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`,EB=()=>{const n=e=>{const r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})};return d.jsxs(dB,{children:[d.jsx(fB,{children:d.jsx(hB,{children:"Donor Relations"})}),d.jsx(mB,{children:d.jsxs(pB,{children:[d.jsx(yB,{children:d.jsx(xB,{})}),d.jsx(gB,{children:"DONOR RELATIONS"}),d.jsxs(vB,{children:[d.jsxs(Au,{to:"/integrity",children:["DONOR INTEGRITY ",d.jsx(bh,{children:d.jsx(wh,{})})]}),d.jsxs(Au,{to:"/donor-relations",children:["DONOR RELATIONS ",d.jsx(bh,{children:d.jsx(wh,{})})]}),d.jsxs(Au,{to:"#questions",onClick:e=>{e.preventDefault(),n("questions-section")},children:["DONOR TRANSPARENCY ",d.jsx(bh,{children:d.jsx(wh,{})})]}),d.jsxs(Au,{to:"https://donorbox.org/giving-dmun",children:["Donate Online ",d.jsx(bh,{children:d.jsx(wh,{})})]})]})]})}),d.jsxs(bB,{children:[d.jsxs(wB,{children:[d.jsx(_B,{src:"/Children.jpeg",alt:"Happy children"}),d.jsxs(SB,{children:[d.jsx(TB,{children:"If you donate to an organization, you deserve to know where and how it is used."}),d.jsx(Cr,{children:"If you donate to an organization, you deserve to know where and how your contributions are used."}),d.jsx(Cr,{children:"At the DMUN Foundation, we ensure complete transparency in our financial operations. Donors receive detailed reports on the allocation and impact of their donations, including specific programs and initiatives funded."}),d.jsx(Cr,{children:"We are committed to maintaining trust with our supporters by providing clear, accessible information on our financial stewardship and the tangible outcomes achieved through their generosity."})]})]}),d.jsxs(fT,{children:[d.jsx(gx,{children:"We actively communicate donor impact."}),d.jsx(Cr,{style:{maxWidth:"800px",margin:"0 auto 3rem auto"},children:"At the DMUN Foundation, we believe that if you donate to an organization, you deserve to know where and how your contributions are used. Our commitment to transparency and accountability ensures that donors are regularly informed about the impact of their contributions."}),d.jsxs(jB,{children:[d.jsxs(_h,{children:[d.jsx(Sh,{children:d.jsx("strong",{children:"Regular Updates"})}),d.jsx(Cr,{children:"We provide frequent updates through newsletters, emails, and our website, sharing stories of impact, progress, and developments within our programs. This keeps our donors engaged and connected to our mission."})]}),d.jsxs(_h,{children:[d.jsx(Sh,{children:d.jsx("strong",{children:"Detailed Reports"})}),d.jsx(Cr,{children:"Donors receive comprehensive reports outlining the allocation of funds and the specific programs and initiatives they support. These reports highlight the tangible outcomes and successes achieved through their contributions."})]}),d.jsxs(_h,{children:[d.jsx(Sh,{children:d.jsx("strong",{children:"Feedback Mechanisms"})}),d.jsx(Cr,{children:"We actively seek and incorporate feedback from our donors to improve our programs and communication strategies. This ensures that our donors' voices are heard and valued."})]}),d.jsxs(_h,{children:[d.jsx(Sh,{children:d.jsx("strong",{children:"Personal Engagement"})}),d.jsx(Cr,{children:"Donors are invited to events, webinars, and meetings where they can interact with our team, beneficiaries, and other supporters. This engagement fosters a sense of community and shared purpose."})]})]})]}),d.jsxs(fT,{id:"questions-section",children:[d.jsx(gx,{children:"Our donor relations team is always ready for questions."}),d.jsx(Cr,{style:{maxWidth:"800px",margin:"0 auto 1.5rem auto"},children:"Our donor relations team is always ready to answer questions and provide additional information. We are dedicated to ensuring that donors feel valued and informed, and we are here to assist with any inquiries. Your support is vital to our success, and we are committed to demonstrating the significant impact of your generosity. Feel free to reach out to us with any questions or for more information on how your contributions are making a difference."}),d.jsxs(Cr,{children:["Email us: ",d.jsx(AB,{href:"mailto:development@dmun.org",children:"development@dmun.org"})]})]})]})]})},CB=w.div`
  background: #e7f1fa;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,KC="#555",MB="#FFD700",DB="#E7F1FA",ZC="#002147",kB=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),Q0=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),J0=w.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;

  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${KC};
    transform: translateY(-1px);
  }
`,RB=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${ZC};
  margin-bottom: 0.8rem;
  font-weight: 400;
`,zB=w.section`
  max-width: 1100px;
  width: 100%;
  margin: 4rem auto;
  padding: 0 1.5rem;
  @media (max-width: 768px) {
    margin: 2rem 0;
    padding: 0 0.5rem;
  }
`,OB=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,ev=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${KC};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: ${ZC};
  }
  @media (max-width: 768px) {
    font-size: 0.9rem;
    white-space: normal;
    text-align: center;
  }
`,NB=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${DB};
  padding: 2.5rem 0 0 0;
  padding-left: 20px;
  padding-right: 20px;
  @media (max-width: 768px) {
    padding: 1.5rem 0 0 0;
    padding-left: 10px;
    padding-right: 10px;
  }
`,LB=w.h1`
  font-family: var(--andover-font-serif);
  font-size: 2.6rem;
  color: #000;
  text-align: center;
  margin-bottom: 1.5rem;
  scroll-margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`,UB=w.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`,hT=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 1.5rem;
  color: #000;
  text-align: center;
  margin: 3rem 0 1rem;
  scroll-margin-top: 100px;
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin: 2rem 0 0.5rem;
  }
`,BB=w.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    fill: ${MB};
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    margin: 1.5rem auto 0.5rem auto;
  }
`,tv=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: #222;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 2rem;
  line-height: 1.6;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`,VB=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-top: 1rem;
  }
`,nv=w.div`
  background: #ffffff;
  border: 1px solid #d4e4f4;
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateY(-4px);
  }
  @media (max-width: 768px) {
    padding: 1.2rem 0.7rem;
  }
`,iv=w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.2rem;
  color: #000;
  margin-bottom: 0.7rem;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
`,rv=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1rem;
  color: #333;
  text-align: center;
  line-height: 1.5;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,$B=w.a`
  color: #0077cc;
  font-weight: 600;
  text-decoration: underline;
  word-break: break-word;
  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`,PB=w.a`
  display: inline-block;
  margin: 3rem auto 0 auto;
  background: #44b8f3;
  color: #fff;
  font-family: var(--andover-font-sans);
  font-size: 1.2rem;
  font-weight: 700;
  padding: 1rem 2.8rem;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(68, 184, 243, 0.15);
  transition: background 0.3s ease;

  &:hover {
    background: #002147;
  }
`,HB=w.div`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/VolunteerPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  /* z-index removed to avoid stacking above header */
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    /* z-index removed to avoid stacking above header */
    pointer-events: none;
  }
`,YB=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,FB=()=>d.jsxs(CB,{children:[d.jsx(HB,{children:d.jsx(YB,{children:"Volunteer"})}),d.jsx(NB,{children:d.jsxs(UB,{children:[d.jsx(BB,{children:d.jsx(kB,{})}),d.jsx(RB,{children:"Volunteer"}),d.jsxs(OB,{children:[d.jsxs(ev,{href:"#why",children:["Why Volunteer ",d.jsx(J0,{children:d.jsx(Q0,{})})]}),d.jsxs(ev,{href:"#value",children:["Values of Volunteering ",d.jsx(J0,{children:d.jsx(Q0,{})})]}),d.jsxs(ev,{href:"#apply",children:["Apply Now",d.jsx(J0,{children:d.jsx(Q0,{})})]})]})]})}),d.jsxs(zB,{children:[d.jsx(LB,{id:"why",children:"Why volunteer for us?"}),d.jsx(tv,{children:"Volunteering with us offers a unique opportunity to make a meaningful impact on a global scale. As a volunteer, you will help shape the next generation of leaders by contributing to programs that educate and inspire youth worldwide. You'll gain valuable experience in areas like education, governance, and nonprofit management while collaborating with passionate individuals and organizations dedicated to positive change. Your efforts directly contribute to making education accessible and empowering young people globally, making a real difference in their lives and futures. Join us to be part of a mission that transforms lives and builds a brighter future."}),d.jsx(hT,{id:"value",children:"Values of Volunteering"}),d.jsx(tv,{children:"Your time volunteering for the DMUN Foundation is rewarding. We provide exceptional personal development and career development opportunities with an altruistic mindset."}),d.jsxs(VB,{children:[d.jsxs(nv,{children:[d.jsx(iv,{children:"Skill Development"}),d.jsx(rv,{children:"Through hands-on experience in areas such as education, nonprofit management, and global advocacy, volunteers acquire and hone valuable skills. These experiences enhance their professional and personal growth, equipping them with tools that are beneficial in any future endeavor."})]}),d.jsxs(nv,{children:[d.jsx(iv,{children:"Career Development"}),d.jsx(rv,{children:"Volunteering with us offers valuable career development opportunities by providing hands-on experience in project management, education, and advocacy. You'll build a strong professional network, enhance your leadership skills, and gain cultural competency by working with diverse international teams."})]}),d.jsxs(nv,{children:[d.jsx(iv,{children:"Meaningful Work"}),d.jsx(rv,{children:"Volunteering with us provides the opportunity to engage in truly meaningful work. By contributing your time and skills, you directly impact the lives of young people, helping to shape their futures and empower them as global citizens."})]})]}),d.jsxs(tv,{children:["For institutional giving or assets or securities donation, please contact our development office at ",d.jsx($B,{href:"mailto:give@dmun.org",children:"give@dmun.org"})]}),d.jsx(hT,{id:"apply",children:"iVolunteer Application"}),d.jsx("div",{id:"apply",style:{textAlign:"center",scrollMarginTop:"100px"},children:d.jsx(PB,{href:"https://forms.office.com/pages/responsepage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGFfN2BURUtCOURWRzI5Q1dVTUtaNzg0TVk4NEdTUy4u&route=shorturl",target:"_blank",rel:"noopener noreferrer",children:"VOLUNTEER"})})]})]}),GB=()=>d.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[d.jsx("h1",{children:"Test Page"}),d.jsx("p",{children:"This is a test page to verify routing is working."})]}),QC="#44b8f3",JC="#002147",e5="#E7F1FA",qB=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/Youth-Advocacy.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`,IB=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,XB=w.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 2.5rem auto;
  max-width: 1200px;
  padding: 0 2rem;
  background-color: ${e5};
`,av=w.section`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`,ov=w.h2`
  color: ${JC};
  font-family: var(--andover-font-serif);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid ${QC};
  padding-bottom: 0.5rem;
`,sv=w.div`
  margin-bottom: 2rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`,lv=w.h3`
  color: ${JC};
  font-family: var(--andover-font-sans);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`,Th=w.ul`
  list-style-type: none;
  padding-left: 0;
`,yi=w.li`
  margin-bottom: 0.75rem;
  padding-left: 1.5rem;
  position: relative;
  line-height: 1.6;
  
  &:before {
    content: "•";
    color: ${QC};
    position: absolute;
    left: 0;
    font-weight: bold;
  }
`,WB=w.div`
  background: ${e5};
  padding: 2rem;
  border-radius: 8px;
  margin-top: 2rem;
`,KB=()=>d.jsxs(d.Fragment,{children:[d.jsx(qB,{children:d.jsx(IB,{children:"Membership"})}),d.jsxs(XB,{children:[d.jsxs(av,{children:[d.jsx(ov,{children:"Categories of Membership"}),d.jsxs(sv,{children:[d.jsx(lv,{children:"Individual Members"}),d.jsxs(Th,{children:[d.jsx(yi,{children:"Youth or adult individuals who support the mission and values of the Foundation"}),d.jsx(yi,{children:"Have the right to vote on membership matters, serve on certain committees, and stand for election as officers"})]})]}),d.jsxs(sv,{children:[d.jsx(lv,{children:"Organizational Members"}),d.jsxs(Th,{children:[d.jsx(yi,{children:"Youth-led organizations, academic clubs, or civil society groups that align with the Foundation's mission"}),d.jsx(yi,{children:"Must apply, demonstrate alignment with core values, and agree to a memorandum of understanding detailing roles and responsibilities"}),d.jsx(yi,{children:"Shall designate one representative to serve as a liaison to the Foundation"}),d.jsx(yi,{children:"Have the right to vote on membership matters, serve on certain committees, and stand for election as officers"})]})]}),d.jsxs(sv,{children:[d.jsx(lv,{children:"Honorary Members"}),d.jsxs(Th,{children:[d.jsx(yi,{children:"Individuals recognized for extraordinary contributions to the Foundation or to youth empowerment more broadly"}),d.jsx(yi,{children:"Nominated by the Board of Trustees and approved by a simple majority of the Board"}),d.jsx(yi,{children:"Have the right to vote on membership matters, serve on certain committees, and stand for election as officers"})]})]})]}),d.jsxs(av,{children:[d.jsx(ov,{children:"Admission Process"}),d.jsx(WB,{children:d.jsxs(Th,{children:[d.jsx(yi,{children:"Individual Membership: Register for a Foundation program to be considered for membership"}),d.jsx(yi,{children:"Organizational Membership: Submit an application determined by the Trustees to the Membership Committee"}),d.jsx(yi,{children:"The Membership Committee reviews applications within 60 days and recommends approval or denial to the Board of Trustees"}),d.jsx(yi,{children:"Upon Board approval, the applicant becomes a Member in good standing"})]})})]}),d.jsxs(av,{children:[d.jsx(ov,{children:"Membership Application Form"}),d.jsx("div",{style:{width:"100%",display:"flex",justifyContent:"center"},children:d.jsx("iframe",{width:"640px",height:"480px",src:"https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAMAAGFfN2BUNzFJSFBYV0NaRUNPOTVHUjFLWUY0M1BNVi4u&embed=true",frameBorder:"0",marginWidth:"0",marginHeight:"0",style:{border:"none",maxWidth:"100%",maxHeight:"100vh"},allowFullScreen:!0,webkitallowfullscreen:"true",mozallowfullscreen:"true",msallowfullscreen:"true",title:"Membership Form"})})]})]})]}),t5="#E7F1FA",ZB="#44b8f3",Nm="#002147",n5="#555",QB=w.div`
  background: ${t5};
  min-height: 100vh;
  padding-bottom: 4rem;
`,JB=w.section`
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/ProgramPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    pointer-events: none;
  }
`,eV=w.h1`
  position: relative;
  z-index: 2;
  color: #fff;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,tV=w.main`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 1.5rem 0 1.5rem;
`,cv=w.h2`
  color: ${Nm};
  font-family: var(--andover-font-serif);
  font-size: 2.1rem;
  margin-bottom: 1.2rem;
  text-align: left;
  margin-left: 0.5rem;
`,mT=w.h3`
  color: ${Nm};
  font-family: var(--andover-font-serif);
  font-size: 1.3rem;
  margin: 2.5rem 0 1rem 0;
  text-align: left;
`,gu=w.p`
  font-family: var(--andover-font-sans);
  font-size: 1.1rem;
  color: #222;
  margin-bottom: 1.5rem;
  text-align: left;
`,vx=w.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.07);
  padding: 2rem 1.5rem;
  margin: 2rem 0;
`,pT=w.ul`
  margin: 1.2rem 0 1.5rem 1.5rem;
  padding: 0;
  font-size: 1.08rem;
  color: #222;
`,ei=w.li`
  margin-bottom: 0.7rem;
  line-height: 1.7;
`,nV=w.a`
  color: ${ZB};
  font-weight: 600;
  text-decoration: underline;
`,iV=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${t5};
  padding: 2.5rem 0 0 0;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
`,rV=w.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`,aV=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000;
  font-size: 2.5rem;
  text-align: center;
  margin: -1rem 0 0 0;
  padding-top: 0rem;
  padding-bottom: 2rem;
`,oV=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
`,Gh=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${n5};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: ${Nm};
  }
`,sV=w.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    fill: #FFD700;
  }
`,uv=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),dv=w.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;
  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${n5};
    transform: translateY(-1px);
    transition: stroke 0.2s;
  }
  ${Gh}:hover & svg {
    stroke: ${Nm};
  }
`,lV=w.div`
  display: flex;
  gap: 2rem;
  margin: 2.5rem 0 2rem 0;
  flex-wrap: wrap;
  justify-content: center;
`,gT=w(vx)`
  flex: 1 1 340px;
  min-width: 300px;
  max-width: 420px;
  margin: 0;
`,cV=()=>d.jsxs(QB,{children:[d.jsx(JB,{children:d.jsx(eV,{children:"Partner With Us"})}),d.jsx(iV,{children:d.jsxs(rV,{children:[d.jsx(sV,{children:d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}),d.jsx(aV,{children:"PARTNER"}),d.jsxs(oV,{children:[d.jsxs(Gh,{href:"#types",children:["Types of Partnership ",d.jsx(dv,{children:d.jsx(uv,{})})]}),d.jsxs(Gh,{href:"#process",children:["How to Partner ",d.jsx(dv,{children:d.jsx(uv,{})})]}),d.jsxs(Gh,{href:"#evaluation",children:["Evaluation Criteria ",d.jsx(dv,{children:d.jsx(uv,{})})]})]})]})}),d.jsxs(tV,{children:[d.jsx(cv,{id:"types",children:"We offer 2 partnerships. Program & Strategic."}),d.jsx(gu,{children:"We offer two types of partnerships to organizations aligned with our mission and values:"}),d.jsxs(lV,{children:[d.jsxs(gT,{children:[d.jsx(mT,{style:{textAlign:"center"},children:"Program Partnerships"}),d.jsx(gu,{style:{textAlign:"center"},children:"Program partnerships are designed to collaborate with organizations ​that share our commitment to providing high-quality, inclusive educational experiences. These ​partnerships involve co-developing and co-delivering programs, sharing resources, and ​leveraging each other's strengths to maximize impact."})]}),d.jsxs(gT,{children:[d.jsx(mT,{style:{textAlign:"center"},children:"Strategic Partnerships"}),d.jsx(gu,{style:{textAlign:"center"},children:"Strategic partnerships focus on long-term collaborations aimed at ​achieving shared strategic goals. These partnerships involve joint initiatives and combined ​efforts to drive significant, sustainable change in the education sector. Strategic partners play a ​key role in shaping the direction and impact of our organization, working closely with us to ​achieve mutual objectives."})]})]}),d.jsx(cv,{id:"process",style:{marginTop:"3.5rem"},children:"Partnering with us is simple and easy."}),d.jsx(gu,{children:"We strive to make the partnership process straightforward and accessible:"}),d.jsx(vx,{children:d.jsxs(pT,{children:[d.jsxs(ei,{children:[d.jsx("strong",{children:"Contact us:"})," Email us at ",d.jsx(nV,{href:"mailto:development@dmun.org",children:"development@dmun.org"}),"."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Initial Discussion:"})," Start with a conversation to explore mutual goals and potential collaboration areas."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Proposal Development:"})," Work together to develop a detailed partnership proposal outlining roles, responsibilities, and expected outcomes."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Ethics & Compliance Submission:"})," Submit necessary information on legal compliance, fair and ethical business for your organization."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Board of Trustees Review:"})," The partnership proposal will be nominated into a draft Board of Trustees resolution, and will be approved by a simple majority vote."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Agreement:"})," Formalize the partnership with clear, written agreements to ensure both parties are aligned."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Implementation:"})," Begin collaborating, with ongoing support and communication to ensure the partnership's success."]})]})}),d.jsx(cv,{id:"evaluation",style:{marginTop:"3.5rem"},children:"Transparency in our partnership evaluation is critical."}),d.jsx(gu,{children:"Transparency in our partnership evaluation is critical. Here's how we evaluate prospective partners:"}),d.jsx(vx,{children:d.jsxs(pT,{children:[d.jsxs(ei,{children:[d.jsx("strong",{children:"Alignment of Values:"})," Assess if the prospective partner's values and mission align with those of the DMUN Foundation."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Impact Potential:"})," Evaluate the potential impact of the partnership on our target communities and overall mission."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Resource and Capability Assessment:"})," Examine the resources and capabilities that the partner brings to the table, ensuring they complement our own."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Track Record:"})," Consider the partner's past performance and reputation in their field."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Sustainability:"})," Ensure the partnership promotes long-term, sustainable outcomes."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Ethics & Compliance:"})," Evaluate the organization's compliance on ethical, moral, and fair business practices, and compliance to local, national, and international regulations."]}),d.jsxs(ei,{children:[d.jsx("strong",{children:"Transparency:"})," Evaluate the organization's transparency."]})]})})]})]}),bd="#002147",i5="#E7F1FA",r5="#555",uV="#FFD700",dV=w.section`
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  height: 350px;
  background: url('/ResearchPageHeader.jpeg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
  &::before {
    content: " ";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background-color: rgba(0,0,0,0.4);
    z-index: 2;
  }
`,fV=w.h1`
  position: relative;
  z-index: 3;
  color: #fff !important;
  font-size: 4vw;
  font-family: var(--andover-font-serif);
  font-weight: 400;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px #0008;
  text-align: center;
  padding-left: 3vw;
  padding-right: 3vw;
`,hV=w.section`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background: ${i5};
  padding: 2.5rem 0 0 0;

  padding-left: 20px;
  padding-right: 20px;
 
`,mV=w.div`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    padding: 0;
  }
`,pV=w.div`
  width: 65px;
  height: 65px;
  margin: 2rem auto 0.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    fill: ${uV};
  }
`,gV=w.h2`
  font-family: var(--andover-font-serif);
  font-weight: bold;
  color: #000;
  font-size: 2.5rem;
  text-align: center;
  margin: -1rem 0 0 0;
  padding-top: 0rem;
  padding-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 2rem;
    padding-top: 0;
    padding-bottom: 1rem;
    margin-top: -0.75rem;
  }
`,vV=w.nav`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
  margin-bottom: 2rem;
  margin-top: 0.5rem;
  @media (max-width: 768px) {
    gap: 1.8rem;
    margin-bottom: 2rem;
    flex-direction: column;
    align-items: center;
  }
`,vT=w.a`
  font-family: var(--andover-font-sans);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  color: ${r5};
  text-decoration: none;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 0.3em;
  transition: color 0.2s ease-in-out;
  font-size: 1rem;
  &:hover {
    text-decoration: underline;
    color: ${bd};
  }
`,xT=w.span`
  display: inline-block;
  font-size: 1.1rem;
  margin-left: 0.3em;
  vertical-align: middle;
  svg {
    width: 1.2rem;
    height: auto;
    vertical-align: middle;
    stroke: ${r5};
    transform: translateY(-1px);
  }
`,yT=()=>d.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 14",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"butt",strokeLinejoin:"miter",children:d.jsx("polyline",{points:"2 2 12 12 22 2"})}),xV=()=>d.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:d.jsx("path",{d:"M3 21H21M3 21V7L10 3V21M3 21H10M10 21V11H14V21M10 21H14M14 21H21V11L14 7V21Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),yV=w.div`
  background-color: ${i5};
  padding: 4rem 15vw;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 2rem 5vw;
  }
`,bT=w.h2`
  font-family: var(--andover-font-serif);
  font-size: 2.2rem;
  color: ${bd};
  margin-bottom: 2rem;
  margin-top: 3rem;
  text-align: left;
`,wT=w.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
`,_T=w.a`
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`,ST=w.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,TT=w.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,jT=w.h3`
  font-family: var(--andover-font-serif);
  font-size: 1.6rem;
  color: ${bd};
  margin-top: 0;
  margin-bottom: 0.8rem;
  font-weight: bold;
`,AT=w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.95rem;
  color: ${bd};
  opacity: 0.7;
  line-height: 1.5;
  margin-bottom: 1rem;
  flex-grow: 1;
`,ET=w.p`
  font-family: var(--andover-font-sans);
  font-size: 0.85rem;
  color: ${bd};
  opacity: 0.5;
  margin-top: auto;
  margin-bottom: 0;
`,bV=[{id:"s-6",image:null,title:"Intervention SDG 6 Water Action Agenda: High-level Launch of the SDG 6 Country Acceleration Case Studies",date:"22nd July, 2025",link:"/Statement-6.pdf"},{id:"s-5",image:null,title:"Intervention Interactive Multistakeholder Hearing on the 30th Anniversary of the Beijing Declaration and Platform for Action",date:"18th July, 2025",link:"/Statement-5.pdf"},{id:"s-4",image:null,title:"Intervention 2025 Sustainability Forum DMUN Foundation Jaewon Choi Executive Director DMUN Foundation CHECK AGAINST DELIVERY SEUL LE TEXTE PRONONCÉ FAIT FOI",date:"12th July, 2025",link:"/Statement-4.pdf"},{id:"s-3",image:null,title:"Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream I of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.",summary:"A joint submission addressing the Draft Issue Note of Workstream I of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.",date:"11th July, 2025",link:"/Statement-3.pdf"},{id:"s-2",image:null,title:"Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream II of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.",summary:"A joint submission addressing the Draft Issue Note of Workstream II regarding taxation of income derived from cross-border services in a digitalized and globalized economy.",date:"11th July, 2025",link:"/Statement-2.pdf"},{id:"s-1",image:null,title:" Joint civil society and trade unions submission regarding the Draft Issue Note of Workstream III of the Intergovernmental Negotiating Committee on the UN Framework Convention on International Tax Cooperation.",summary:"A joint submission addressing the Draft Outline of Issues Overview and Scope of Workstream III regarding prevention and resolution of tax disputes.",date:"11th July, 2025",link:"/Statement-1.pdf"},{id:"s0",image:null,title:"Joint Statement of Youth for Privacy and the DMUN Foundation for the Eleventh Session of the Open-Ended Working Group on ICTs",summary:"The final report, and the forthcoming permanent mechanism, represent a significant milestone in multilaeral cooperation on ICT security. We commend the recognition of cross-cutting issues like capacity-building, inclusivity,...",date:"J July, 2025",link:"https://docs-library.unoda.org/Open-Ended_Working_Group_on_Information_and_Communication_Technologies_-_(2021)/YfP_and_DMUN_-_Joint_Statement_-_Eleventh_OEWG.pdf"},{id:"s1",image:null,title:"Intervention H.E. Mr. Jaewon Choi Executive Director DMUN Foundation",summary:"High-Level Opening Plenary Global Youth COnference on Financing for Development",date:"28th June, 2025",link:"/Statement11.pdf"},{id:"s2",image:null,title:"MSP3: Investments in reducing risk and building resilience to accelerate progress in sustainable development",summary:"A statement on investing in risk reduction and resilience to accelerate sustainable development progress.",date:"5th June, 2025",link:"https://globalplatform.undrr.org/publication/msp3-investments-reducing-risk-and-building-resilience-accelerate-progress-3"},{id:"s3",image:null,title:"Joint Written Statement on Technical Assistance and International Cooperation 3",summary:"25 years after the adoption of the UNTOC: an assessment of the impact and added value of the Convention in the prevention of and fight against transnational organized crime, including through collaboration with civil societ",date:"2nd June, 2025",link:"https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_4_prevention.pdf"},{id:"s4",image:null,title:"Joint Written Statement on Technical Assistance and International Cooperation 2",summary:"Intervention on the Exchange of good practices in international cooperation to freeze and confiscate proceeds of crime in the form of virtual currencies.",date:"2nd June, 2025",link:"https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_3_prevention.pdf"},{id:"s4",image:null,title:"Joint Written Statement on Technical Assistance and International Cooperation",summary:"Intervention on the Prevention of organized crime through public-private partnerships and socioeconomic, cultural and behavioural pathways, with a focus on organized fraud.",date:"2nd June, 2025",link:"https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_2_prevention.pdf"},{id:"s6",image:null,title:"Joint Constructive Dialogue on the UNTOC Review Process",summary:"A statement emphasizing the urgent need to center youth and community engagement in the UNTOC review process, with recommendations to institutionalize youth participation.",date:"2nd June, 2025",link:"https://www.unodc.org/documents/organized-crime/constructive-dialogues/IC_TA_2025/Statements/DMUN_Foundation_1.pdf"},{id:"s7",image:null,title:"Statement to the 2025 UN Firearms Protocol Constructive Dialogue",summary:"Highlighting the critical need for youth participation in implementing the UN Firearms Protocol, particularly concerning gender-based armed violence and young victims.",date:"30th April, 2025",link:"https://www.unodc.org/documents/organized-crime/constructive-dialogues/FA_2025/Statements/DMUN_Foundation.pdf"},{id:"s8",image:null,title:"Statement to the Candidate for President of the 80th UN General Assembly",summary:"A joint question on behalf of seven youth-led organizations, asking the candidate for President of the 80th UNGA how they will ensure genuine youth participation beyond tokenization.",date:"15th May, 2025",link:"https://estatements.unmeetings.org/estatements/10.0010/20250515100000000/p_PMmovcqn/eDpSL_pnlhhEC_nyc_en.pdf"},{id:"s9",image:null,title:"Written Statement to the 29th Conference of States Parties (CSP29)",summary:"Engaging the Next Generation and Youth Stakeholders: Ensuring a Future Without Chemical Weapons for the Next Generation.",date:"1st November, 2024",link:"https://www.opcw.org/sites/default/files/documents/2024/11/Written%20Statement%20of%20the%20DMUN%20Foundation%20to%20the%2029th%20Conference%20of%20States%20Parties%20%28CSP29%29%20of%20the%20Organisation%20for%20the%20Prohibition%20of%20Chemical%20Weapons%20.pdf"},{id:"s10",image:null,title:"Inputs for the Elements Paper on Financing for Development",summary:"Submitted by DMUN Foundation, an specially accredited organization to the Fourth International Conference on Financing for Developmentt",date:"3nd June, 2024",link:"https://financing.desa.un.org/sites/default/files/2024-10/DMUN_Input%20for%20the%20Elements%20Paper%20on%20Financing%20for%20Development.pdf"},{id:"s11",image:null,title:"Joint Submission to the Committee on Economic, Social and Cultural Rights (CESCR)",summary:"A joint written submission by the DMUN Foundation to the UN Committee on Economic, Social and Cultural Rights.",date:"1st March, 2024",link:"https://www.ohchr.org/sites/default/files/documents/hrbodies/cescr/cfis/generalcomments/submissions/subm-cescr-written-cso-11-dmun-joint-submission-sion-en.docx"}],wV=[{id:"r1",image:null,title:"Protecting the Digital Generation: Advancing Public-Private Action Against AI-Driven Trafficking of Women and Youth",summary:"The application of Artificial Intelligence (AI) now stands at the forefront of strategies aimed at combating human trafficking and violence, creating both opportunities and risks. The adverse effects of AI are increasingly recognized, especially its role in online exploitation and human trafficking.",date:"18th June, 2025",link:"https://docs.google.com/document/d/1bY_-7_XjuaM1Kyxd1Py8UQyKFrRI-2pewij2elksczs/edit?usp=sharing"},{id:"r2",title:"State of Youth Stakeholder Participation - 2025",image:null,summary:"This report provides a comprehensive assessment of global youth engagement, analyzing both progress and persistent challenges in achieving meaningful participation across all levels of governance. Focusing on the United Nations system, national policies, and grassroots movements, the study examines structural barriers while highlighting innovative approaches that demonstrate the transformative potential of genuine youth inclusion. The analysis draws on policy documents, case studies, and quantitative data to present actionable recommendations for institutional reform.",date:"",link:"https://docs.google.com/document/d/1hMRo13E3hTUlIiAAnRymYJyd5sXgQPXB/edit?tab=t.0"},{id:"r3",image:null,title:"Request for Observer Status with the International Seabed Authority",summary:"The Office of the Executive Director of the DMUN Foundation presents its compliments to the Secretariat of the International Seabed Authority and has the honour to formally submit this request for observer status for the DMUN Foundation",link:"https://docs.google.com/document/d/1csf4HCxsSW80xMPJzGSIlJCZPUXVUlhd/edit?tab=t.0"},{id:"r4",title:"Establishing a Youth Engagement Platform at the World Bank-IMF: A Policy Proposal for Structured Youth-Civil Society Participation",summary:"The proposal suggests creating a Youth Engagement Platform at the World Bank to integrate young leaders from civil society organizations, experts in global development, and academics into policy conversations.",link:"https://docs.google.com/document/d/1BH7VuT8b2sENV0iek04cSVAHWRe4gKilurU_2RI1tiA/edit?tab=t.0"},{id:"r5",title:"DMUN DELEGATE REPORT – UN OCEAN CONFERENCE, NICE 2025 BY SISAY LUKAS",summary:"UN Ocean Conference, Nice 2025",link:"/Report5.pdf"},{id:"r6",title:"DMUN Annual Meetings 2024",summary:"Online,July 10th 2024",link:"/Report6.pdf"},{id:"r7",title:"DMUN Outcome Report: High-Level Political Forum 2025",summary:"July 2025",link:"/Report7.pdf"},{id:"r8",title:"Commitments + Children and Youth Positions",summary:"August 2025",link:"/Report8.pdf"}],_V=()=>{const n=(e,r)=>{e.preventDefault();const a=document.getElementById(r);if(a){const c=a.getBoundingClientRect().top+window.pageYOffset+-120;window.scrollTo({top:c,behavior:"smooth"})}};return d.jsxs(d.Fragment,{children:[d.jsx(dV,{children:d.jsx(fV,{children:"Publications"})}),d.jsx(hV,{children:d.jsxs(mV,{children:[d.jsx(pV,{children:d.jsx(xV,{})}),d.jsx(gV,{children:"PUBLICATIONS"}),d.jsxs(vV,{children:[d.jsxs(vT,{href:"#statements",onClick:e=>n(e,"statements"),children:["STATEMENTS ",d.jsx(xT,{children:d.jsx(yT,{})})]}),d.jsxs(vT,{href:"#reports",onClick:e=>n(e,"reports"),children:["REPORTS ",d.jsx(xT,{children:d.jsx(yT,{})})]})]})]})}),d.jsxs(yV,{children:[d.jsx(bT,{id:"statements",children:"Statements"}),d.jsx(wT,{children:bV.map(e=>d.jsxs(_T,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[e.image&&d.jsx(ST,{src:e.image,alt:e.title}),d.jsxs(TT,{children:[d.jsx(jT,{children:e.title}),d.jsx(AT,{children:e.summary}),d.jsx(ET,{children:e.date})]})]},e.id))}),d.jsx(bT,{id:"reports",children:"Reports"}),d.jsx(wT,{children:wV.map(e=>d.jsxs(_T,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[e.image&&d.jsx(ST,{src:e.image,alt:e.title}),d.jsxs(TT,{children:[d.jsx(jT,{children:e.title}),d.jsx(AT,{children:e.summary}),d.jsx(ET,{children:e.date})]})]},e.id))})]})]})},SV=qR`
  body, h1, h2, h3, h4, h5, h6, p, a, span, div, li, label, input, th, td {
    /* color: #002147; */ /* Removed this line */
  }
  body {
    font-family: 'Georgia', 'Times New Roman', Times, serif;
    background: #e6f0fa;
    margin: 0;
    padding: 0;
  }
`;function TV(){const[n,e]=P.useState(!1);return d.jsxs(Uk,{children:[d.jsx(SV,{}),d.jsx(i3,{onMenuClick:()=>e(!0)}),d.jsx(C3,{open:n,onClose:()=>e(!1)}),d.jsx("main",{className:"main-content",children:d.jsxs(hk,{children:[d.jsx(on,{path:"/",element:d.jsx(VL,{})}),d.jsx(on,{path:"/about",element:d.jsx(sU,{})}),d.jsx(on,{path:"/advocacy",element:d.jsx(SU,{})}),d.jsx(on,{path:"/programs",element:d.jsx(UU,{})}),d.jsx(on,{path:"/research",element:d.jsx(QU,{})}),d.jsx(on,{path:"/Publications",element:d.jsx(_V,{})}),d.jsx(on,{path:"/Membership",element:d.jsx(KB,{menuOpen:n})}),d.jsx(on,{path:"/integrity",element:d.jsx(u7,{})}),d.jsx(on,{path:"/mandate",element:d.jsx(T7,{})}),d.jsx(on,{path:"/take-action",element:d.jsx(B7,{})}),d.jsx(on,{path:"/newsroom",element:d.jsx(G7,{})}),d.jsx(on,{path:"/newsroom/:id",element:d.jsx(Z7,{})}),d.jsx(on,{path:"/donate",element:d.jsx(lB,{})}),d.jsx(on,{path:"/donor-relations",element:d.jsx(EB,{})}),d.jsx(on,{path:"/volunteer",element:d.jsx(FB,{})}),d.jsx(on,{path:"/test",element:d.jsx(GB,{})}),d.jsx(on,{path:"/partner",element:d.jsx(cV,{})})]})}),d.jsx(g3,{})]})}wD.createRoot(document.getElementById("root")).render(d.jsx(P.StrictMode,{children:d.jsx(TV,{})}));
