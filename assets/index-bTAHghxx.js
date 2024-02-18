function fx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function aw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var lw={exports:{}},If={},uw={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vl=Symbol.for("react.element"),dx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),px=Symbol.for("react.strict_mode"),mx=Symbol.for("react.profiler"),gx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),vx=Symbol.for("react.forward_ref"),_x=Symbol.for("react.suspense"),wx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),kv=Symbol.iterator;function Tx(t){return t===null||typeof t!="object"?null:(t=kv&&t[kv]||t["@@iterator"],typeof t=="function"?t:null)}var cw={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},fw=Object.assign,dw={};function So(t,e,n){this.props=t,this.context=e,this.refs=dw,this.updater=n||cw}So.prototype.isReactComponent={};So.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};So.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hw(){}hw.prototype=So.prototype;function Bm(t,e,n){this.props=t,this.context=e,this.refs=dw,this.updater=n||cw}var Hm=Bm.prototype=new hw;Hm.constructor=Bm;fw(Hm,So.prototype);Hm.isPureReactComponent=!0;var Av=Array.isArray,pw=Object.prototype.hasOwnProperty,Wm={current:null},mw={key:!0,ref:!0,__self:!0,__source:!0};function gw(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)pw.call(e,r)&&!mw.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:vl,type:t,key:s,ref:o,props:i,_owner:Wm.current}}function Ix(t,e){return{$$typeof:vl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function qm(t){return typeof t=="object"&&t!==null&&t.$$typeof===vl}function Sx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xv=/\/+/g;function Vd(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sx(""+t.key):e.toString(36)}function Uu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vl:case dx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vd(o,0):r,Av(i)?(n="",t!=null&&(n=t.replace(xv,"$&/")+"/"),Uu(i,e,n,"",function(u){return u})):i!=null&&(qm(i)&&(i=Ix(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(xv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Av(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vd(s,a);o+=Uu(s,e,n,l,i)}else if(l=Tx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vd(s,a++),o+=Uu(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function tu(t,e,n){if(t==null)return t;var r=[],i=0;return Uu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function kx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Lt={current:null},zu={transition:null},Ax={ReactCurrentDispatcher:Lt,ReactCurrentBatchConfig:zu,ReactCurrentOwner:Wm};oe.Children={map:tu,forEach:function(t,e,n){tu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return tu(t,function(){e++}),e},toArray:function(t){return tu(t,function(e){return e})||[]},only:function(t){if(!qm(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=So;oe.Fragment=hx;oe.Profiler=mx;oe.PureComponent=Bm;oe.StrictMode=px;oe.Suspense=_x;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ax;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=fw({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Wm.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)pw.call(e,l)&&!mw.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:vl,type:t.type,key:i,ref:s,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:gx,_context:t},t.Consumer=t};oe.createElement=gw;oe.createFactory=function(t){var e=gw.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:vx,render:t}};oe.isValidElement=qm;oe.lazy=function(t){return{$$typeof:Ex,_payload:{_status:-1,_result:t},_init:kx}};oe.memo=function(t,e){return{$$typeof:wx,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=zu.transition;zu.transition={};try{t()}finally{zu.transition=e}};oe.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};oe.useCallback=function(t,e){return Lt.current.useCallback(t,e)};oe.useContext=function(t){return Lt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return Lt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return Lt.current.useEffect(t,e)};oe.useId=function(){return Lt.current.useId()};oe.useImperativeHandle=function(t,e,n){return Lt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return Lt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return Lt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return Lt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return Lt.current.useReducer(t,e,n)};oe.useRef=function(t){return Lt.current.useRef(t)};oe.useState=function(t){return Lt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return Lt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return Lt.current.useTransition()};oe.version="18.2.0";uw.exports=oe;var C=uw.exports;const je=aw(C),xx=fx({__proto__:null,default:je},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cx=C,Px=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),bx=Object.prototype.hasOwnProperty,Nx=Cx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ox={key:!0,ref:!0,__self:!0,__source:!0};function yw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)bx.call(e,r)&&!Ox.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Px,type:t,key:s,ref:o,props:i,_owner:Nx.current}}If.Fragment=Rx;If.jsx=yw;If.jsxs=yw;lw.exports=If;var y=lw.exports,Hh={},vw={exports:{}},Zt={},_w={exports:{}},ww={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,B){var Q=L.length;L.push(B);e:for(;0<Q;){var he=Q-1>>>1,ce=L[he];if(0<i(ce,B))L[he]=B,L[Q]=ce,Q=he;else break e}}function n(L){return L.length===0?null:L[0]}function r(L){if(L.length===0)return null;var B=L[0],Q=L.pop();if(Q!==B){L[0]=Q;e:for(var he=0,ce=L.length,xn=ce>>>1;he<xn;){var Mt=2*(he+1)-1,Cn=L[Mt],yt=Mt+1,dn=L[yt];if(0>i(Cn,Q))yt<ce&&0>i(dn,Cn)?(L[he]=dn,L[yt]=Q,he=yt):(L[he]=Cn,L[Mt]=Q,he=Mt);else if(yt<ce&&0>i(dn,Q))L[he]=dn,L[yt]=Q,he=yt;else break e}}return B}function i(L,B){var Q=L.sortIndex-B.sortIndex;return Q!==0?Q:L.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,v=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(L){for(var B=n(u);B!==null;){if(B.callback===null)r(u);else if(B.startTime<=L)r(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(L){if(w=!1,m(L),!v)if(n(l)!==null)v=!0,gt(I);else{var B=n(u);B!==null&&We(E,B.startTime-L)}}function I(L,B){v=!1,w&&(w=!1,g(V),V=-1),p=!0;var Q=d;try{for(m(B),f=n(l);f!==null&&(!(f.expirationTime>B)||L&&!Je());){var he=f.callback;if(typeof he=="function"){f.callback=null,d=f.priorityLevel;var ce=he(f.expirationTime<=B);B=t.unstable_now(),typeof ce=="function"?f.callback=ce:f===n(l)&&r(l),m(B)}else r(l);f=n(l)}if(f!==null)var xn=!0;else{var Mt=n(u);Mt!==null&&We(E,Mt.startTime-B),xn=!1}return xn}finally{f=null,d=Q,p=!1}}var x=!1,k=null,V=-1,G=5,H=-1;function Je(){return!(t.unstable_now()-H<G)}function ee(){if(k!==null){var L=t.unstable_now();H=L;var B=!0;try{B=k(!0,L)}finally{B?ie():(x=!1,k=null)}}else x=!1}var ie;if(typeof h=="function")ie=function(){h(ee)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,$e=de.port2;de.port1.onmessage=ee,ie=function(){$e.postMessage(null)}}else ie=function(){T(ee,0)};function gt(L){k=L,x||(x=!0,ie())}function We(L,B){V=T(function(){L(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){v||p||(v=!0,gt(I))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var B=3;break;default:B=d}var Q=d;d=B;try{return L()}finally{d=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,B){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Q=d;d=L;try{return B()}finally{d=Q}},t.unstable_scheduleCallback=function(L,B,Q){var he=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?he+Q:he):Q=he,L){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=Q+ce,L={id:c++,callback:B,priorityLevel:L,startTime:Q,expirationTime:ce,sortIndex:-1},Q>he?(L.sortIndex=Q,e(u,L),n(l)===null&&L===n(u)&&(w?(g(V),V=-1):w=!0,We(E,Q-he))):(L.sortIndex=ce,e(l,L),v||p||(v=!0,gt(I))),L},t.unstable_shouldYield=Je,t.unstable_wrapCallback=function(L){var B=d;return function(){var Q=d;d=B;try{return L.apply(this,arguments)}finally{d=Q}}}})(ww);_w.exports=ww;var Dx=_w.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ew=C,Xt=Dx;function b(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Tw=new Set,Ca={};function is(t,e){eo(t,e),eo(t+"Capture",e)}function eo(t,e){for(Ca[t]=e,t=0;t<e.length;t++)Tw.add(e[t])}var fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wh=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cv={},Pv={};function Vx(t){return Wh.call(Pv,t)?!0:Wh.call(Cv,t)?!1:Lx.test(t)?Pv[t]=!0:(Cv[t]=!0,!1)}function Mx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $x(t,e,n,r){if(e===null||typeof e>"u"||Mx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Vt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){mt[t]=new Vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];mt[e]=new Vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){mt[t]=new Vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){mt[t]=new Vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){mt[t]=new Vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){mt[t]=new Vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){mt[t]=new Vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){mt[t]=new Vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){mt[t]=new Vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Km=/[\-:]([a-z])/g;function Gm(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Km,Gm);mt[e]=new Vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Km,Gm);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Km,Gm);mt[e]=new Vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!1,!1)});mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){mt[t]=new Vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Qm(t,e,n,r){var i=mt.hasOwnProperty(e)?mt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($x(e,n,i,r)&&(n=null),r||i===null?Vx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ir=Ew.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,nu=Symbol.for("react.element"),Is=Symbol.for("react.portal"),Ss=Symbol.for("react.fragment"),Ym=Symbol.for("react.strict_mode"),qh=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),Sw=Symbol.for("react.context"),Xm=Symbol.for("react.forward_ref"),Kh=Symbol.for("react.suspense"),Gh=Symbol.for("react.suspense_list"),Jm=Symbol.for("react.memo"),br=Symbol.for("react.lazy"),kw=Symbol.for("react.offscreen"),Rv=Symbol.iterator;function Mo(t){return t===null||typeof t!="object"?null:(t=Rv&&t[Rv]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,Md;function Qo(t){if(Md===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Md=e&&e[1]||""}return`
`+Md+t}var $d=!1;function Fd(t,e){if(!t||$d)return"";$d=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{$d=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function Fx(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Fd(t.type,!1),t;case 11:return t=Fd(t.type.render,!1),t;case 1:return t=Fd(t.type,!0),t;default:return""}}function Qh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ss:return"Fragment";case Is:return"Portal";case qh:return"Profiler";case Ym:return"StrictMode";case Kh:return"Suspense";case Gh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sw:return(t.displayName||"Context")+".Consumer";case Iw:return(t._context.displayName||"Context")+".Provider";case Xm:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Jm:return e=t.displayName||null,e!==null?e:Qh(t.type)||"Memo";case br:e=t._payload,t=t._init;try{return Qh(t(e))}catch{}}return null}function jx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Qh(e);case 8:return e===Ym?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function si(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Aw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Ux(t){var e=Aw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ru(t){t._valueTracker||(t._valueTracker=Ux(t))}function xw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Aw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Yh(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=si(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cw(t,e){e=e.checked,e!=null&&Qm(t,"checked",e,!1)}function Xh(t,e){Cw(t,e);var n=si(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Jh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Jh(t,e.type,si(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Nv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Jh(t,e,n){(e!=="number"||yc(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Yo=Array.isArray;function zs(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+si(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Zh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(b(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ov(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(b(92));if(Yo(n)){if(1<n.length)throw Error(b(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:si(n)}}function Pw(t,e){var n=si(e.value),r=si(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Dv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ep(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var iu,bw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(iu=iu||document.createElement("div"),iu.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=iu.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Pa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zx=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Nw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function Ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Bx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function tp(t,e){if(e){if(Bx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(b(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(b(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(b(61))}if(e.style!=null&&typeof e.style!="object")throw Error(b(62))}}function np(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rp=null;function Zm(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ip=null,Bs=null,Hs=null;function Lv(t){if(t=El(t)){if(typeof ip!="function")throw Error(b(280));var e=t.stateNode;e&&(e=Cf(e),ip(t.stateNode,t.type,e))}}function Dw(t){Bs?Hs?Hs.push(t):Hs=[t]:Bs=t}function Lw(){if(Bs){var t=Bs,e=Hs;if(Hs=Bs=null,Lv(t),e)for(t=0;t<e.length;t++)Lv(e[t])}}function Vw(t,e){return t(e)}function Mw(){}var jd=!1;function $w(t,e,n){if(jd)return t(e,n);jd=!0;try{return Vw(t,e,n)}finally{jd=!1,(Bs!==null||Hs!==null)&&(Mw(),Lw())}}function Ra(t,e){var n=t.stateNode;if(n===null)return null;var r=Cf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(b(231,e,typeof n));return n}var sp=!1;if(fr)try{var $o={};Object.defineProperty($o,"passive",{get:function(){sp=!0}}),window.addEventListener("test",$o,$o),window.removeEventListener("test",$o,$o)}catch{sp=!1}function Hx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ua=!1,vc=null,_c=!1,op=null,Wx={onError:function(t){ua=!0,vc=t}};function qx(t,e,n,r,i,s,o,a,l){ua=!1,vc=null,Hx.apply(Wx,arguments)}function Kx(t,e,n,r,i,s,o,a,l){if(qx.apply(this,arguments),ua){if(ua){var u=vc;ua=!1,vc=null}else throw Error(b(198));_c||(_c=!0,op=u)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vv(t){if(ss(t)!==t)throw Error(b(188))}function Gx(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(b(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Vv(i),t;if(s===r)return Vv(i),e;s=s.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?t:e}function jw(t){return t=Gx(t),t!==null?Uw(t):null}function Uw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Uw(t);if(e!==null)return e;t=t.sibling}return null}var zw=Xt.unstable_scheduleCallback,Mv=Xt.unstable_cancelCallback,Qx=Xt.unstable_shouldYield,Yx=Xt.unstable_requestPaint,Me=Xt.unstable_now,Xx=Xt.unstable_getCurrentPriorityLevel,eg=Xt.unstable_ImmediatePriority,Bw=Xt.unstable_UserBlockingPriority,wc=Xt.unstable_NormalPriority,Jx=Xt.unstable_LowPriority,Hw=Xt.unstable_IdlePriority,Sf=null,zn=null;function Zx(t){if(zn&&typeof zn.onCommitFiberRoot=="function")try{zn.onCommitFiberRoot(Sf,t,void 0,(t.current.flags&128)===128)}catch{}}var wn=Math.clz32?Math.clz32:nC,eC=Math.log,tC=Math.LN2;function nC(t){return t>>>=0,t===0?32:31-(eC(t)/tC|0)|0}var su=64,ou=4194304;function Xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Xo(a):(s&=o,s!==0&&(r=Xo(s)))}else o=n&~i,o!==0?r=Xo(o):s!==0&&(r=Xo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-wn(e),i=1<<n,r|=t[n],e&=~i;return r}function rC(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function iC(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-wn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=rC(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ap(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ww(){var t=su;return su<<=1,!(su&4194240)&&(su=64),t}function Ud(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _l(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-wn(e),t[e]=n}function sC(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-wn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function tg(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-wn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function qw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Kw,ng,Gw,Qw,Yw,lp=!1,au=[],qr=null,Kr=null,Gr=null,ba=new Map,Na=new Map,Or=[],oC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $v(t,e){switch(t){case"focusin":case"focusout":qr=null;break;case"dragenter":case"dragleave":Kr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":ba.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Na.delete(e.pointerId)}}function Fo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=El(e),e!==null&&ng(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function aC(t,e,n,r,i){switch(e){case"focusin":return qr=Fo(qr,t,e,n,r,i),!0;case"dragenter":return Kr=Fo(Kr,t,e,n,r,i),!0;case"mouseover":return Gr=Fo(Gr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ba.set(s,Fo(ba.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Na.set(s,Fo(Na.get(s)||null,t,e,n,r,i)),!0}return!1}function Xw(t){var e=xi(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Fw(n),e!==null){t.blockedOn=e,Yw(t.priority,function(){Gw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=up(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);rp=r,n.target.dispatchEvent(r),rp=null}else return e=El(n),e!==null&&ng(e),t.blockedOn=n,!1;e.shift()}return!0}function Fv(t,e,n){Bu(t)&&n.delete(e)}function lC(){lp=!1,qr!==null&&Bu(qr)&&(qr=null),Kr!==null&&Bu(Kr)&&(Kr=null),Gr!==null&&Bu(Gr)&&(Gr=null),ba.forEach(Fv),Na.forEach(Fv)}function jo(t,e){t.blockedOn===e&&(t.blockedOn=null,lp||(lp=!0,Xt.unstable_scheduleCallback(Xt.unstable_NormalPriority,lC)))}function Oa(t){function e(i){return jo(i,t)}if(0<au.length){jo(au[0],t);for(var n=1;n<au.length;n++){var r=au[n];r.blockedOn===t&&(r.blockedOn=null)}}for(qr!==null&&jo(qr,t),Kr!==null&&jo(Kr,t),Gr!==null&&jo(Gr,t),ba.forEach(e),Na.forEach(e),n=0;n<Or.length;n++)r=Or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Or.length&&(n=Or[0],n.blockedOn===null);)Xw(n),n.blockedOn===null&&Or.shift()}var Ws=Ir.ReactCurrentBatchConfig,Tc=!0;function uC(t,e,n,r){var i=me,s=Ws.transition;Ws.transition=null;try{me=1,rg(t,e,n,r)}finally{me=i,Ws.transition=s}}function cC(t,e,n,r){var i=me,s=Ws.transition;Ws.transition=null;try{me=4,rg(t,e,n,r)}finally{me=i,Ws.transition=s}}function rg(t,e,n,r){if(Tc){var i=up(t,e,n,r);if(i===null)Xd(t,e,r,Ic,n),$v(t,r);else if(aC(i,t,e,n,r))r.stopPropagation();else if($v(t,r),e&4&&-1<oC.indexOf(t)){for(;i!==null;){var s=El(i);if(s!==null&&Kw(s),s=up(t,e,n,r),s===null&&Xd(t,e,r,Ic,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Xd(t,e,r,null,n)}}var Ic=null;function up(t,e,n,r){if(Ic=null,t=Zm(r),t=xi(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ic=t,null}function Jw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xx()){case eg:return 1;case Bw:return 4;case wc:case Jx:return 16;case Hw:return 536870912;default:return 16}default:return 16}}var jr=null,ig=null,Hu=null;function Zw(){if(Hu)return Hu;var t,e=ig,n=e.length,r,i="value"in jr?jr.value:jr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Hu=i.slice(t,1<r?1-r:void 0)}function Wu(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lu(){return!0}function jv(){return!1}function en(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lu:jv,this.isPropagationStopped=jv,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lu)},persist:function(){},isPersistent:lu}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sg=en(ko),wl=Re({},ko,{view:0,detail:0}),fC=en(wl),zd,Bd,Uo,kf=Re({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:og,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Uo&&(Uo&&t.type==="mousemove"?(zd=t.screenX-Uo.screenX,Bd=t.screenY-Uo.screenY):Bd=zd=0,Uo=t),zd)},movementY:function(t){return"movementY"in t?t.movementY:Bd}}),Uv=en(kf),dC=Re({},kf,{dataTransfer:0}),hC=en(dC),pC=Re({},wl,{relatedTarget:0}),Hd=en(pC),mC=Re({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),gC=en(mC),yC=Re({},ko,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),vC=en(yC),_C=Re({},ko,{data:0}),zv=en(_C),wC={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},EC={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},TC={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function IC(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=TC[t])?!!e[t]:!1}function og(){return IC}var SC=Re({},wl,{key:function(t){if(t.key){var e=wC[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Wu(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?EC[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:og,charCode:function(t){return t.type==="keypress"?Wu(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wu(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),kC=en(SC),AC=Re({},kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bv=en(AC),xC=Re({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:og}),CC=en(xC),PC=Re({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),RC=en(PC),bC=Re({},kf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NC=en(bC),OC=[9,13,27,32],ag=fr&&"CompositionEvent"in window,ca=null;fr&&"documentMode"in document&&(ca=document.documentMode);var DC=fr&&"TextEvent"in window&&!ca,eE=fr&&(!ag||ca&&8<ca&&11>=ca),Hv=" ",Wv=!1;function tE(t,e){switch(t){case"keyup":return OC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nE(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ks=!1;function LC(t,e){switch(t){case"compositionend":return nE(e);case"keypress":return e.which!==32?null:(Wv=!0,Hv);case"textInput":return t=e.data,t===Hv&&Wv?null:t;default:return null}}function VC(t,e){if(ks)return t==="compositionend"||!ag&&tE(t,e)?(t=Zw(),Hu=ig=jr=null,ks=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return eE&&e.locale!=="ko"?null:e.data;default:return null}}var MC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!MC[t.type]:e==="textarea"}function rE(t,e,n,r){Dw(r),e=Sc(e,"onChange"),0<e.length&&(n=new sg("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fa=null,Da=null;function $C(t){pE(t,0)}function Af(t){var e=Cs(t);if(xw(e))return t}function FC(t,e){if(t==="change")return e}var iE=!1;if(fr){var Wd;if(fr){var qd="oninput"in document;if(!qd){var Kv=document.createElement("div");Kv.setAttribute("oninput","return;"),qd=typeof Kv.oninput=="function"}Wd=qd}else Wd=!1;iE=Wd&&(!document.documentMode||9<document.documentMode)}function Gv(){fa&&(fa.detachEvent("onpropertychange",sE),Da=fa=null)}function sE(t){if(t.propertyName==="value"&&Af(Da)){var e=[];rE(e,Da,t,Zm(t)),$w($C,e)}}function jC(t,e,n){t==="focusin"?(Gv(),fa=e,Da=n,fa.attachEvent("onpropertychange",sE)):t==="focusout"&&Gv()}function UC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Af(Da)}function zC(t,e){if(t==="click")return Af(e)}function BC(t,e){if(t==="input"||t==="change")return Af(e)}function HC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var In=typeof Object.is=="function"?Object.is:HC;function La(t,e){if(In(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Wh.call(e,i)||!In(t[i],e[i]))return!1}return!0}function Qv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yv(t,e){var n=Qv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qv(n)}}function oE(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?oE(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function aE(){for(var t=window,e=yc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yc(t.document)}return e}function lg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WC(t){var e=aE(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&oE(n.ownerDocument.documentElement,n)){if(r!==null&&lg(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yv(n,s);var o=Yv(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var qC=fr&&"documentMode"in document&&11>=document.documentMode,As=null,cp=null,da=null,fp=!1;function Xv(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;fp||As==null||As!==yc(r)||(r=As,"selectionStart"in r&&lg(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&La(da,r)||(da=r,r=Sc(cp,"onSelect"),0<r.length&&(e=new sg("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=As)))}function uu(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:uu("Animation","AnimationEnd"),animationiteration:uu("Animation","AnimationIteration"),animationstart:uu("Animation","AnimationStart"),transitionend:uu("Transition","TransitionEnd")},Kd={},lE={};fr&&(lE=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function xf(t){if(Kd[t])return Kd[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lE)return Kd[t]=e[n];return t}var uE=xf("animationend"),cE=xf("animationiteration"),fE=xf("animationstart"),dE=xf("transitionend"),hE=new Map,Jv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hi(t,e){hE.set(t,e),is(e,[t])}for(var Gd=0;Gd<Jv.length;Gd++){var Qd=Jv[Gd],KC=Qd.toLowerCase(),GC=Qd[0].toUpperCase()+Qd.slice(1);hi(KC,"on"+GC)}hi(uE,"onAnimationEnd");hi(cE,"onAnimationIteration");hi(fE,"onAnimationStart");hi("dblclick","onDoubleClick");hi("focusin","onFocus");hi("focusout","onBlur");hi(dE,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),QC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Jo));function Zv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Kx(r,e,void 0,t),t.currentTarget=null}function pE(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zv(i,a,u),s=l}}}if(_c)throw t=op,_c=!1,op=null,t}function we(t,e){var n=e[gp];n===void 0&&(n=e[gp]=new Set);var r=t+"__bubble";n.has(r)||(mE(e,t,2,!1),n.add(r))}function Yd(t,e,n){var r=0;e&&(r|=4),mE(n,t,r,e)}var cu="_reactListening"+Math.random().toString(36).slice(2);function Va(t){if(!t[cu]){t[cu]=!0,Tw.forEach(function(n){n!=="selectionchange"&&(QC.has(n)||Yd(n,!1,t),Yd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[cu]||(e[cu]=!0,Yd("selectionchange",!1,e))}}function mE(t,e,n,r){switch(Jw(e)){case 1:var i=uC;break;case 4:i=cC;break;default:i=rg}n=i.bind(null,e,n,t),i=void 0,!sp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Xd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=xi(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}$w(function(){var u=s,c=Zm(n),f=[];e:{var d=hE.get(t);if(d!==void 0){var p=sg,v=t;switch(t){case"keypress":if(Wu(n)===0)break e;case"keydown":case"keyup":p=kC;break;case"focusin":v="focus",p=Hd;break;case"focusout":v="blur",p=Hd;break;case"beforeblur":case"afterblur":p=Hd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Uv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=hC;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=CC;break;case uE:case cE:case fE:p=gC;break;case dE:p=RC;break;case"scroll":p=fC;break;case"wheel":p=NC;break;case"copy":case"cut":case"paste":p=vC;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bv}var w=(e&4)!==0,T=!w&&t==="scroll",g=w?d!==null?d+"Capture":null:d;w=[];for(var h=u,m;h!==null;){m=h;var E=m.stateNode;if(m.tag===5&&E!==null&&(m=E,g!==null&&(E=Ra(h,g),E!=null&&w.push(Ma(h,E,m)))),T)break;h=h.return}0<w.length&&(d=new p(d,v,null,n,c),f.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==rp&&(v=n.relatedTarget||n.fromElement)&&(xi(v)||v[dr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=n.relatedTarget||n.toElement,p=u,v=v?xi(v):null,v!==null&&(T=ss(v),v!==T||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(w=Uv,E="onMouseLeave",g="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(w=Bv,E="onPointerLeave",g="onPointerEnter",h="pointer"),T=p==null?d:Cs(p),m=v==null?d:Cs(v),d=new w(E,h+"leave",p,n,c),d.target=T,d.relatedTarget=m,E=null,xi(c)===u&&(w=new w(g,h+"enter",v,n,c),w.target=m,w.relatedTarget=T,E=w),T=E,p&&v)t:{for(w=p,g=v,h=0,m=w;m;m=gs(m))h++;for(m=0,E=g;E;E=gs(E))m++;for(;0<h-m;)w=gs(w),h--;for(;0<m-h;)g=gs(g),m--;for(;h--;){if(w===g||g!==null&&w===g.alternate)break t;w=gs(w),g=gs(g)}w=null}else w=null;p!==null&&e0(f,d,p,w,!1),v!==null&&T!==null&&e0(f,T,v,w,!0)}}e:{if(d=u?Cs(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var I=FC;else if(qv(d))if(iE)I=BC;else{I=UC;var x=jC}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(I=zC);if(I&&(I=I(t,u))){rE(f,I,n,c);break e}x&&x(t,d,u),t==="focusout"&&(x=d._wrapperState)&&x.controlled&&d.type==="number"&&Jh(d,"number",d.value)}switch(x=u?Cs(u):window,t){case"focusin":(qv(x)||x.contentEditable==="true")&&(As=x,cp=u,da=null);break;case"focusout":da=cp=As=null;break;case"mousedown":fp=!0;break;case"contextmenu":case"mouseup":case"dragend":fp=!1,Xv(f,n,c);break;case"selectionchange":if(qC)break;case"keydown":case"keyup":Xv(f,n,c)}var k;if(ag)e:{switch(t){case"compositionstart":var V="onCompositionStart";break e;case"compositionend":V="onCompositionEnd";break e;case"compositionupdate":V="onCompositionUpdate";break e}V=void 0}else ks?tE(t,n)&&(V="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(V="onCompositionStart");V&&(eE&&n.locale!=="ko"&&(ks||V!=="onCompositionStart"?V==="onCompositionEnd"&&ks&&(k=Zw()):(jr=c,ig="value"in jr?jr.value:jr.textContent,ks=!0)),x=Sc(u,V),0<x.length&&(V=new zv(V,t,null,n,c),f.push({event:V,listeners:x}),k?V.data=k:(k=nE(n),k!==null&&(V.data=k)))),(k=DC?LC(t,n):VC(t,n))&&(u=Sc(u,"onBeforeInput"),0<u.length&&(c=new zv("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=k))}pE(f,e)})}function Ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Sc(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ra(t,n),s!=null&&r.unshift(Ma(t,s,i)),s=Ra(t,e),s!=null&&r.push(Ma(t,s,i))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function e0(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ra(n,s),l!=null&&o.unshift(Ma(n,l,a))):i||(l=Ra(n,s),l!=null&&o.push(Ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var YC=/\r\n?/g,XC=/\u0000|\uFFFD/g;function t0(t){return(typeof t=="string"?t:""+t).replace(YC,`
`).replace(XC,"")}function fu(t,e,n){if(e=t0(e),t0(t)!==e&&n)throw Error(b(425))}function kc(){}var dp=null,hp=null;function pp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var mp=typeof setTimeout=="function"?setTimeout:void 0,JC=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,ZC=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(eP)}:mp;function eP(t){setTimeout(function(){throw t})}function Jd(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Oa(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Oa(e)}function Qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ao=Math.random().toString(36).slice(2),Ln="__reactFiber$"+Ao,$a="__reactProps$"+Ao,dr="__reactContainer$"+Ao,gp="__reactEvents$"+Ao,tP="__reactListeners$"+Ao,nP="__reactHandles$"+Ao;function xi(t){var e=t[Ln];if(e)return e;for(var n=t.parentNode;n;){if(e=n[dr]||n[Ln]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r0(t);t!==null;){if(n=t[Ln])return n;t=r0(t)}return e}t=n,n=t.parentNode}return null}function El(t){return t=t[Ln]||t[dr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(b(33))}function Cf(t){return t[$a]||null}var yp=[],Ps=-1;function pi(t){return{current:t}}function Se(t){0>Ps||(t.current=yp[Ps],yp[Ps]=null,Ps--)}function ve(t,e){Ps++,yp[Ps]=t.current,t.current=e}var oi={},xt=pi(oi),zt=pi(!1),Bi=oi;function to(t,e){var n=t.type.contextTypes;if(!n)return oi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Bt(t){return t=t.childContextTypes,t!=null}function Ac(){Se(zt),Se(xt)}function i0(t,e,n){if(xt.current!==oi)throw Error(b(168));ve(xt,e),ve(zt,n)}function gE(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(b(108,jx(t)||"Unknown",i));return Re({},n,r)}function xc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||oi,Bi=xt.current,ve(xt,t),ve(zt,zt.current),!0}function s0(t,e,n){var r=t.stateNode;if(!r)throw Error(b(169));n?(t=gE(t,e,Bi),r.__reactInternalMemoizedMergedChildContext=t,Se(zt),Se(xt),ve(xt,t)):Se(zt),ve(zt,n)}var rr=null,Pf=!1,Zd=!1;function yE(t){rr===null?rr=[t]:rr.push(t)}function rP(t){Pf=!0,yE(t)}function mi(){if(!Zd&&rr!==null){Zd=!0;var t=0,e=me;try{var n=rr;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rr=null,Pf=!1}catch(i){throw rr!==null&&(rr=rr.slice(t+1)),zw(eg,mi),i}finally{me=e,Zd=!1}}return null}var Rs=[],bs=0,Cc=null,Pc=0,rn=[],sn=0,Hi=null,sr=1,or="";function Si(t,e){Rs[bs++]=Pc,Rs[bs++]=Cc,Cc=t,Pc=e}function vE(t,e,n){rn[sn++]=sr,rn[sn++]=or,rn[sn++]=Hi,Hi=t;var r=sr;t=or;var i=32-wn(r)-1;r&=~(1<<i),n+=1;var s=32-wn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,sr=1<<32-wn(e)+i|n<<i|r,or=s+t}else sr=1<<s|n<<i|r,or=t}function ug(t){t.return!==null&&(Si(t,1),vE(t,1,0))}function cg(t){for(;t===Cc;)Cc=Rs[--bs],Rs[bs]=null,Pc=Rs[--bs],Rs[bs]=null;for(;t===Hi;)Hi=rn[--sn],rn[sn]=null,or=rn[--sn],rn[sn]=null,sr=rn[--sn],rn[sn]=null}var Qt=null,Kt=null,xe=!1,yn=null;function _E(t,e){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function o0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Qt=t,Kt=Qr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Qt=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hi!==null?{id:sr,overflow:or}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Qt=t,Kt=null,!0):!1;default:return!1}}function vp(t){return(t.mode&1)!==0&&(t.flags&128)===0}function _p(t){if(xe){var e=Kt;if(e){var n=e;if(!o0(t,e)){if(vp(t))throw Error(b(418));e=Qr(n.nextSibling);var r=Qt;e&&o0(t,e)?_E(r,n):(t.flags=t.flags&-4097|2,xe=!1,Qt=t)}}else{if(vp(t))throw Error(b(418));t.flags=t.flags&-4097|2,xe=!1,Qt=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Qt=t}function du(t){if(t!==Qt)return!1;if(!xe)return a0(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!pp(t.type,t.memoizedProps)),e&&(e=Kt)){if(vp(t))throw wE(),Error(b(418));for(;e;)_E(t,e),e=Qr(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(b(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=Qr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Qt?Qr(t.stateNode.nextSibling):null;return!0}function wE(){for(var t=Kt;t;)t=Qr(t.nextSibling)}function no(){Kt=Qt=null,xe=!1}function fg(t){yn===null?yn=[t]:yn.push(t)}var iP=Ir.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rc=pi(null),bc=null,Ns=null,dg=null;function hg(){dg=Ns=bc=null}function pg(t){var e=Rc.current;Se(Rc),t._currentValue=e}function wp(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function qs(t,e){bc=t,dg=Ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(jt=!0),t.firstContext=null)}function un(t){var e=t._currentValue;if(dg!==t)if(t={context:t,memoizedValue:e,next:null},Ns===null){if(bc===null)throw Error(b(308));Ns=t,bc.dependencies={lanes:0,firstContext:t}}else Ns=Ns.next=t;return e}var Ci=null;function mg(t){Ci===null?Ci=[t]:Ci.push(t)}function EE(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,mg(e)):(n.next=i.next,i.next=n),e.interleaved=n,hr(t,r)}function hr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nr=!1;function gg(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function TE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Yr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ue&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,hr(t,n)}return i=r.interleaved,i===null?(e.next=e,mg(r)):(e.next=i.next,i.next=e),r.interleaved=e,hr(t,n)}function qu(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tg(t,n)}}function l0(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nc(t,e,n,r){var i=t.updateQueue;Nr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,p=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Re({},f,d);break e;case 2:Nr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(!0);if(c===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);qi|=o,t.lanes=o,t.memoizedState=f}}function u0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var IE=new Ew.Component().refs;function Ep(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rf={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Jr(t),s=cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(En(e,t,i,r),qu(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Jr(t),s=cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Yr(t,s,i),e!==null&&(En(e,t,i,r),qu(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Jr(t),i=cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Yr(t,i,r),e!==null&&(En(e,t,r,n),qu(e,t,r))}};function c0(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(n,r)||!La(i,s):!0}function SE(t,e,n){var r=!1,i=oi,s=e.contextType;return typeof s=="object"&&s!==null?s=un(s):(i=Bt(e)?Bi:xt.current,r=e.contextTypes,s=(r=r!=null)?to(t,i):oi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function f0(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Rf.enqueueReplaceState(e,e.state,null)}function Tp(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=IE,gg(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=un(s):(s=Bt(e)?Bi:xt.current,i.context=to(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ep(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Rf.enqueueReplaceState(i,i.state,null),Nc(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===IE&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,t))}return t}function hu(t,e){throw t=Object.prototype.toString.call(e),Error(b(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function d0(t){var e=t._init;return e(t._payload)}function kE(t){function e(g,h){if(t){var m=g.deletions;m===null?(g.deletions=[h],g.flags|=16):m.push(h)}}function n(g,h){if(!t)return null;for(;h!==null;)e(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function i(g,h){return g=Zr(g,h),g.index=0,g.sibling=null,g}function s(g,h,m){return g.index=m,t?(m=g.alternate,m!==null?(m=m.index,m<h?(g.flags|=2,h):m):(g.flags|=2,h)):(g.flags|=1048576,h)}function o(g){return t&&g.alternate===null&&(g.flags|=2),g}function a(g,h,m,E){return h===null||h.tag!==6?(h=oh(m,g.mode,E),h.return=g,h):(h=i(h,m),h.return=g,h)}function l(g,h,m,E){var I=m.type;return I===Ss?c(g,h,m.props.children,E,m.key):h!==null&&(h.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===br&&d0(I)===h.type)?(E=i(h,m.props),E.ref=zo(g,h,m),E.return=g,E):(E=Ju(m.type,m.key,m.props,null,g.mode,E),E.ref=zo(g,h,m),E.return=g,E)}function u(g,h,m,E){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=ah(m,g.mode,E),h.return=g,h):(h=i(h,m.children||[]),h.return=g,h)}function c(g,h,m,E,I){return h===null||h.tag!==7?(h=$i(m,g.mode,E,I),h.return=g,h):(h=i(h,m),h.return=g,h)}function f(g,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=oh(""+h,g.mode,m),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case nu:return m=Ju(h.type,h.key,h.props,null,g.mode,m),m.ref=zo(g,null,h),m.return=g,m;case Is:return h=ah(h,g.mode,m),h.return=g,h;case br:var E=h._init;return f(g,E(h._payload),m)}if(Yo(h)||Mo(h))return h=$i(h,g.mode,m,null),h.return=g,h;hu(g,h)}return null}function d(g,h,m,E){var I=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return I!==null?null:a(g,h,""+m,E);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case nu:return m.key===I?l(g,h,m,E):null;case Is:return m.key===I?u(g,h,m,E):null;case br:return I=m._init,d(g,h,I(m._payload),E)}if(Yo(m)||Mo(m))return I!==null?null:c(g,h,m,E,null);hu(g,m)}return null}function p(g,h,m,E,I){if(typeof E=="string"&&E!==""||typeof E=="number")return g=g.get(m)||null,a(h,g,""+E,I);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case nu:return g=g.get(E.key===null?m:E.key)||null,l(h,g,E,I);case Is:return g=g.get(E.key===null?m:E.key)||null,u(h,g,E,I);case br:var x=E._init;return p(g,h,m,x(E._payload),I)}if(Yo(E)||Mo(E))return g=g.get(m)||null,c(h,g,E,I,null);hu(h,E)}return null}function v(g,h,m,E){for(var I=null,x=null,k=h,V=h=0,G=null;k!==null&&V<m.length;V++){k.index>V?(G=k,k=null):G=k.sibling;var H=d(g,k,m[V],E);if(H===null){k===null&&(k=G);break}t&&k&&H.alternate===null&&e(g,k),h=s(H,h,V),x===null?I=H:x.sibling=H,x=H,k=G}if(V===m.length)return n(g,k),xe&&Si(g,V),I;if(k===null){for(;V<m.length;V++)k=f(g,m[V],E),k!==null&&(h=s(k,h,V),x===null?I=k:x.sibling=k,x=k);return xe&&Si(g,V),I}for(k=r(g,k);V<m.length;V++)G=p(k,g,V,m[V],E),G!==null&&(t&&G.alternate!==null&&k.delete(G.key===null?V:G.key),h=s(G,h,V),x===null?I=G:x.sibling=G,x=G);return t&&k.forEach(function(Je){return e(g,Je)}),xe&&Si(g,V),I}function w(g,h,m,E){var I=Mo(m);if(typeof I!="function")throw Error(b(150));if(m=I.call(m),m==null)throw Error(b(151));for(var x=I=null,k=h,V=h=0,G=null,H=m.next();k!==null&&!H.done;V++,H=m.next()){k.index>V?(G=k,k=null):G=k.sibling;var Je=d(g,k,H.value,E);if(Je===null){k===null&&(k=G);break}t&&k&&Je.alternate===null&&e(g,k),h=s(Je,h,V),x===null?I=Je:x.sibling=Je,x=Je,k=G}if(H.done)return n(g,k),xe&&Si(g,V),I;if(k===null){for(;!H.done;V++,H=m.next())H=f(g,H.value,E),H!==null&&(h=s(H,h,V),x===null?I=H:x.sibling=H,x=H);return xe&&Si(g,V),I}for(k=r(g,k);!H.done;V++,H=m.next())H=p(k,g,V,H.value,E),H!==null&&(t&&H.alternate!==null&&k.delete(H.key===null?V:H.key),h=s(H,h,V),x===null?I=H:x.sibling=H,x=H);return t&&k.forEach(function(ee){return e(g,ee)}),xe&&Si(g,V),I}function T(g,h,m,E){if(typeof m=="object"&&m!==null&&m.type===Ss&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case nu:e:{for(var I=m.key,x=h;x!==null;){if(x.key===I){if(I=m.type,I===Ss){if(x.tag===7){n(g,x.sibling),h=i(x,m.props.children),h.return=g,g=h;break e}}else if(x.elementType===I||typeof I=="object"&&I!==null&&I.$$typeof===br&&d0(I)===x.type){n(g,x.sibling),h=i(x,m.props),h.ref=zo(g,x,m),h.return=g,g=h;break e}n(g,x);break}else e(g,x);x=x.sibling}m.type===Ss?(h=$i(m.props.children,g.mode,E,m.key),h.return=g,g=h):(E=Ju(m.type,m.key,m.props,null,g.mode,E),E.ref=zo(g,h,m),E.return=g,g=E)}return o(g);case Is:e:{for(x=m.key;h!==null;){if(h.key===x)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(g,h.sibling),h=i(h,m.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else e(g,h);h=h.sibling}h=ah(m,g.mode,E),h.return=g,g=h}return o(g);case br:return x=m._init,T(g,h,x(m._payload),E)}if(Yo(m))return v(g,h,m,E);if(Mo(m))return w(g,h,m,E);hu(g,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(g,h.sibling),h=i(h,m),h.return=g,g=h):(n(g,h),h=oh(m,g.mode,E),h.return=g,g=h),o(g)):n(g,h)}return T}var ro=kE(!0),AE=kE(!1),Tl={},Bn=pi(Tl),Fa=pi(Tl),ja=pi(Tl);function Pi(t){if(t===Tl)throw Error(b(174));return t}function yg(t,e){switch(ve(ja,e),ve(Fa,t),ve(Bn,Tl),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ep(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ep(e,t)}Se(Bn),ve(Bn,e)}function io(){Se(Bn),Se(Fa),Se(ja)}function xE(t){Pi(ja.current);var e=Pi(Bn.current),n=ep(e,t.type);e!==n&&(ve(Fa,t),ve(Bn,n))}function vg(t){Fa.current===t&&(Se(Bn),Se(Fa))}var Ce=pi(0);function Oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var eh=[];function _g(){for(var t=0;t<eh.length;t++)eh[t]._workInProgressVersionPrimary=null;eh.length=0}var Ku=Ir.ReactCurrentDispatcher,th=Ir.ReactCurrentBatchConfig,Wi=0,Pe=null,qe=null,tt=null,Dc=!1,ha=!1,Ua=0,sP=0;function vt(){throw Error(b(321))}function wg(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!In(t[n],e[n]))return!1;return!0}function Eg(t,e,n,r,i,s){if(Wi=s,Pe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ku.current=t===null||t.memoizedState===null?uP:cP,t=n(r,i),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(b(301));s+=1,tt=qe=null,e.updateQueue=null,Ku.current=fP,t=n(r,i)}while(ha)}if(Ku.current=Lc,e=qe!==null&&qe.next!==null,Wi=0,tt=qe=Pe=null,Dc=!1,e)throw Error(b(300));return t}function Tg(){var t=Ua!==0;return Ua=0,t}function On(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tt===null?Pe.memoizedState=tt=t:tt=tt.next=t,tt}function cn(){if(qe===null){var t=Pe.alternate;t=t!==null?t.memoizedState:null}else t=qe.next;var e=tt===null?Pe.memoizedState:tt.next;if(e!==null)tt=e,qe=t;else{if(t===null)throw Error(b(310));qe=t,t={memoizedState:qe.memoizedState,baseState:qe.baseState,baseQueue:qe.baseQueue,queue:qe.queue,next:null},tt===null?Pe.memoizedState=tt=t:tt=tt.next=t}return tt}function za(t,e){return typeof e=="function"?e(t):e}function nh(t){var e=cn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=qe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Wi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=r):l=l.next=f,Pe.lanes|=c,qi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,In(r,e.memoizedState)||(jt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Pe.lanes|=s,qi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rh(t){var e=cn(),n=e.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);In(s,e.memoizedState)||(jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function CE(){}function PE(t,e){var n=Pe,r=cn(),i=e(),s=!In(r.memoizedState,i);if(s&&(r.memoizedState=i,jt=!0),r=r.queue,Ig(NE.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||tt!==null&&tt.memoizedState.tag&1){if(n.flags|=2048,Ba(9,bE.bind(null,n,r,i,e),void 0,null),it===null)throw Error(b(349));Wi&30||RE(n,e,i)}return i}function RE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function bE(t,e,n,r){e.value=n,e.getSnapshot=r,OE(e)&&DE(t)}function NE(t,e,n){return n(function(){OE(e)&&DE(t)})}function OE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!In(t,n)}catch{return!0}}function DE(t){var e=hr(t,1);e!==null&&En(e,t,1,-1)}function h0(t){var e=On();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:t},e.queue=t,t=t.dispatch=lP.bind(null,Pe,t),[e.memoizedState,t]}function Ba(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Pe.updateQueue,e===null?(e={lastEffect:null,stores:null},Pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function LE(){return cn().memoizedState}function Gu(t,e,n,r){var i=On();Pe.flags|=t,i.memoizedState=Ba(1|e,n,void 0,r===void 0?null:r)}function bf(t,e,n,r){var i=cn();r=r===void 0?null:r;var s=void 0;if(qe!==null){var o=qe.memoizedState;if(s=o.destroy,r!==null&&wg(r,o.deps)){i.memoizedState=Ba(e,n,s,r);return}}Pe.flags|=t,i.memoizedState=Ba(1|e,n,s,r)}function p0(t,e){return Gu(8390656,8,t,e)}function Ig(t,e){return bf(2048,8,t,e)}function VE(t,e){return bf(4,2,t,e)}function ME(t,e){return bf(4,4,t,e)}function $E(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function FE(t,e,n){return n=n!=null?n.concat([t]):null,bf(4,4,$E.bind(null,e,t),n)}function Sg(){}function jE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wg(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function UE(t,e){var n=cn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&wg(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function zE(t,e,n){return Wi&21?(In(n,e)||(n=Ww(),Pe.lanes|=n,qi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,jt=!0),t.memoizedState=n)}function oP(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=th.transition;th.transition={};try{t(!1),e()}finally{me=n,th.transition=r}}function BE(){return cn().memoizedState}function aP(t,e,n){var r=Jr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},HE(t))WE(e,n);else if(n=EE(t,e,n,r),n!==null){var i=Dt();En(n,t,r,i),qE(n,e,r)}}function lP(t,e,n){var r=Jr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(HE(t))WE(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,In(a,o)){var l=e.interleaved;l===null?(i.next=i,mg(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=EE(t,e,i,r),n!==null&&(i=Dt(),En(n,t,r,i),qE(n,e,r))}}function HE(t){var e=t.alternate;return t===Pe||e!==null&&e===Pe}function WE(t,e){ha=Dc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,tg(t,n)}}var Lc={readContext:un,useCallback:vt,useContext:vt,useEffect:vt,useImperativeHandle:vt,useInsertionEffect:vt,useLayoutEffect:vt,useMemo:vt,useReducer:vt,useRef:vt,useState:vt,useDebugValue:vt,useDeferredValue:vt,useTransition:vt,useMutableSource:vt,useSyncExternalStore:vt,useId:vt,unstable_isNewReconciler:!1},uP={readContext:un,useCallback:function(t,e){return On().memoizedState=[t,e===void 0?null:e],t},useContext:un,useEffect:p0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4194308,4,$E.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Gu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Gu(4,2,t,e)},useMemo:function(t,e){var n=On();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=On();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=aP.bind(null,Pe,t),[r.memoizedState,t]},useRef:function(t){var e=On();return t={current:t},e.memoizedState=t},useState:h0,useDebugValue:Sg,useDeferredValue:function(t){return On().memoizedState=t},useTransition:function(){var t=h0(!1),e=t[0];return t=oP.bind(null,t[1]),On().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Pe,i=On();if(xe){if(n===void 0)throw Error(b(407));n=n()}else{if(n=e(),it===null)throw Error(b(349));Wi&30||RE(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,p0(NE.bind(null,r,s,t),[t]),r.flags|=2048,Ba(9,bE.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=On(),e=it.identifierPrefix;if(xe){var n=or,r=sr;n=(r&~(1<<32-wn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ua++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=sP++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},cP={readContext:un,useCallback:jE,useContext:un,useEffect:Ig,useImperativeHandle:FE,useInsertionEffect:VE,useLayoutEffect:ME,useMemo:UE,useReducer:nh,useRef:LE,useState:function(){return nh(za)},useDebugValue:Sg,useDeferredValue:function(t){var e=cn();return zE(e,qe.memoizedState,t)},useTransition:function(){var t=nh(za)[0],e=cn().memoizedState;return[t,e]},useMutableSource:CE,useSyncExternalStore:PE,useId:BE,unstable_isNewReconciler:!1},fP={readContext:un,useCallback:jE,useContext:un,useEffect:Ig,useImperativeHandle:FE,useInsertionEffect:VE,useLayoutEffect:ME,useMemo:UE,useReducer:rh,useRef:LE,useState:function(){return rh(za)},useDebugValue:Sg,useDeferredValue:function(t){var e=cn();return qe===null?e.memoizedState=t:zE(e,qe.memoizedState,t)},useTransition:function(){var t=rh(za)[0],e=cn().memoizedState;return[t,e]},useMutableSource:CE,useSyncExternalStore:PE,useId:BE,unstable_isNewReconciler:!1};function so(t,e){try{var n="",r=e;do n+=Fx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ih(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ip(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var dP=typeof WeakMap=="function"?WeakMap:Map;function KE(t,e,n){n=cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Mc||(Mc=!0,Op=r),Ip(t,e)},n}function GE(t,e,n){n=cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Ip(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ip(t,e),typeof r!="function"&&(Xr===null?Xr=new Set([this]):Xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function m0(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new dP;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=AP.bind(null,t,e,n),e.then(t,t))}function g0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function y0(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=cr(-1,1),e.tag=2,Yr(n,e,1))),n.lanes|=1),t)}var hP=Ir.ReactCurrentOwner,jt=!1;function bt(t,e,n,r){e.child=t===null?AE(e,null,n,r):ro(e,t.child,n,r)}function v0(t,e,n,r,i){n=n.render;var s=e.ref;return qs(e,i),r=Eg(t,e,n,r,s,i),n=Tg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(xe&&n&&ug(e),e.flags|=1,bt(t,e,r,i),e.child)}function _0(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ng(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,QE(t,e,s,r,i)):(t=Ju(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:La,n(o,r)&&t.ref===e.ref)return pr(t,e,i)}return e.flags|=1,t=Zr(s,r),t.ref=e.ref,t.return=e,e.child=t}function QE(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(La(s,r)&&t.ref===e.ref)if(jt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(jt=!0);else return e.lanes=t.lanes,pr(t,e,i)}return Sp(t,e,n,r,i)}function YE(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Ds,qt),qt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Ds,qt),qt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Ds,qt),qt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Ds,qt),qt|=r;return bt(t,e,i,n),e.child}function XE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sp(t,e,n,r,i){var s=Bt(n)?Bi:xt.current;return s=to(e,s),qs(e,i),n=Eg(t,e,n,r,s,i),r=Tg(),t!==null&&!jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,pr(t,e,i)):(xe&&r&&ug(e),e.flags|=1,bt(t,e,n,i),e.child)}function w0(t,e,n,r,i){if(Bt(n)){var s=!0;xc(e)}else s=!1;if(qs(e,i),e.stateNode===null)Qu(t,e),SE(e,n,r),Tp(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=Bt(n)?Bi:xt.current,u=to(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&f0(e,o,r,u),Nr=!1;var d=e.memoizedState;o.state=d,Nc(e,r,o,i),l=e.memoizedState,a!==r||d!==l||zt.current||Nr?(typeof c=="function"&&(Ep(e,n,c,r),l=e.memoizedState),(a=Nr||c0(e,n,a,r,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,TE(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:mn(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=un(l):(l=Bt(n)?Bi:xt.current,l=to(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&f0(e,o,r,l),Nr=!1,d=e.memoizedState,o.state=d,Nc(e,r,o,i);var v=e.memoizedState;a!==f||d!==v||zt.current||Nr?(typeof p=="function"&&(Ep(e,n,p,r),v=e.memoizedState),(u=Nr||c0(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return kp(t,e,n,r,s,i)}function kp(t,e,n,r,i,s){XE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&s0(e,n,!1),pr(t,e,s);r=e.stateNode,hP.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ro(e,t.child,null,s),e.child=ro(e,null,a,s)):bt(t,e,a,s),e.memoizedState=r.state,i&&s0(e,n,!0),e.child}function JE(t){var e=t.stateNode;e.pendingContext?i0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&i0(t,e.context,!1),yg(t,e.containerInfo)}function E0(t,e,n,r,i){return no(),fg(i),e.flags|=256,bt(t,e,n,r),e.child}var Ap={dehydrated:null,treeContext:null,retryLane:0};function xp(t){return{baseLanes:t,cachePool:null,transitions:null}}function ZE(t,e,n){var r=e.pendingProps,i=Ce.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Ce,i&1),t===null)return _p(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Df(o,r,0,null),t=$i(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=xp(n),e.memoizedState=Ap,t):kg(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return pP(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Zr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Zr(a,s):(s=$i(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?xp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ap,r}return s=t.child,t=s.sibling,r=Zr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kg(t,e){return e=Df({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pu(t,e,n,r){return r!==null&&fg(r),ro(e,t.child,null,n),t=kg(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function pP(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ih(Error(b(422))),pu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Df({mode:"visible",children:r.children},i,0,null),s=$i(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ro(e,t.child,null,o),e.child.memoizedState=xp(o),e.memoizedState=Ap,s);if(!(e.mode&1))return pu(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(b(419)),r=ih(s,r,void 0),pu(t,e,o,r)}if(a=(o&t.childLanes)!==0,jt||a){if(r=it,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,hr(t,i),En(r,t,i,-1))}return bg(),r=ih(Error(b(421))),pu(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xP.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Kt=Qr(i.nextSibling),Qt=e,xe=!0,yn=null,t!==null&&(rn[sn++]=sr,rn[sn++]=or,rn[sn++]=Hi,sr=t.id,or=t.overflow,Hi=e),e=kg(e,r.children),e.flags|=4096,e)}function T0(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),wp(t.return,e,n)}function sh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function eT(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(bt(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,n,e);else if(t.tag===19)T0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Oc(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Oc(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sh(e,!0,n,null,s);break;case"together":sh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function pr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(b(153));if(e.child!==null){for(t=e.child,n=Zr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Zr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function mP(t,e,n){switch(e.tag){case 3:JE(e),no();break;case 5:xE(e);break;case 1:Bt(e.type)&&xc(e);break;case 4:yg(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(Rc,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?ZE(t,e,n):(ve(Ce,Ce.current&1),t=pr(t,e,n),t!==null?t.sibling:null);ve(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return eT(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,YE(t,e,n)}return pr(t,e,n)}var tT,Cp,nT,rT;tT=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cp=function(){};nT=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Pi(Bn.current);var s=null;switch(n){case"input":i=Yh(t,i),r=Yh(t,r),s=[];break;case"select":i=Re({},i,{value:void 0}),r=Re({},r,{value:void 0}),s=[];break;case"textarea":i=Zh(t,i),r=Zh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=kc)}tp(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};rT=function(t,e,n,r){n!==r&&(e.flags|=4)};function Bo(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function _t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function gP(t,e,n){var r=e.pendingProps;switch(cg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _t(e),null;case 1:return Bt(e.type)&&Ac(),_t(e),null;case 3:return r=e.stateNode,io(),Se(zt),Se(xt),_g(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(du(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,yn!==null&&(Vp(yn),yn=null))),Cp(t,e),_t(e),null;case 5:vg(e);var i=Pi(ja.current);if(n=e.type,t!==null&&e.stateNode!=null)nT(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(b(166));return _t(e),null}if(t=Pi(Bn.current),du(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ln]=e,r[$a]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<Jo.length;i++)we(Jo[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":bv(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Ov(r,s),we("invalid",r)}tp(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fu(r.textContent,a,t),i=["children",""+a]):Ca.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":ru(r),Nv(r,s,!0);break;case"textarea":ru(r),Dv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=kc)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ln]=e,t[$a]=r,tT(t,e,!1,!1),e.stateNode=t;e:{switch(o=np(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<Jo.length;i++)we(Jo[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":bv(t,r),i=Yh(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Re({},r,{value:void 0}),we("invalid",t);break;case"textarea":Ov(t,r),i=Zh(t,r),we("invalid",t);break;default:i=r}tp(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ow(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&bw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Pa(t,l):typeof l=="number"&&Pa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&Qm(t,s,l,o))}switch(n){case"input":ru(t),Nv(t,r,!1);break;case"textarea":ru(t),Dv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+si(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?zs(t,!!r.multiple,s,!1):r.defaultValue!=null&&zs(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=kc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return _t(e),null;case 6:if(t&&e.stateNode!=null)rT(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(b(166));if(n=Pi(ja.current),Pi(Bn.current),du(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ln]=e,(s=r.nodeValue!==n)&&(t=Qt,t!==null))switch(t.tag){case 3:fu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fu(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ln]=e,e.stateNode=r}return _t(e),null;case 13:if(Se(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&Kt!==null&&e.mode&1&&!(e.flags&128))wE(),no(),e.flags|=98560,s=!1;else if(s=du(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(b(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(b(317));s[Ln]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;_t(e),s=!1}else yn!==null&&(Vp(yn),yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Ge===0&&(Ge=3):bg())),e.updateQueue!==null&&(e.flags|=4),_t(e),null);case 4:return io(),Cp(t,e),t===null&&Va(e.stateNode.containerInfo),_t(e),null;case 10:return pg(e.type._context),_t(e),null;case 17:return Bt(e.type)&&Ac(),_t(e),null;case 19:if(Se(Ce),s=e.memoizedState,s===null)return _t(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Bo(s,!1);else{if(Ge!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Oc(t),o!==null){for(e.flags|=128,Bo(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Ce,Ce.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>oo&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304)}else{if(!r)if(t=Oc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return _t(e),null}else 2*Me()-s.renderingStartTime>oo&&n!==1073741824&&(e.flags|=128,r=!0,Bo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=Ce.current,ve(Ce,r?n&1|2:n&1),e):(_t(e),null);case 22:case 23:return Rg(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?qt&1073741824&&(_t(e),e.subtreeFlags&6&&(e.flags|=8192)):_t(e),null;case 24:return null;case 25:return null}throw Error(b(156,e.tag))}function yP(t,e){switch(cg(e),e.tag){case 1:return Bt(e.type)&&Ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),Se(zt),Se(xt),_g(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return vg(e),null;case 13:if(Se(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(b(340));no()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ce),null;case 4:return io(),null;case 10:return pg(e.type._context),null;case 22:case 23:return Rg(),null;case 24:return null;default:return null}}var mu=!1,Tt=!1,vP=typeof WeakSet=="function"?WeakSet:Set,$=null;function Os(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Pp(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var I0=!1;function _P(t,e){if(dp=Tc,t=aE(),lg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,d=null;t:for(;;){for(var p;f!==n||i!==0&&f.nodeType!==3||(a=o+i),f!==s||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hp={focusedElem:t,selectionRange:n},Tc=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,T=v.memoizedState,g=e.stateNode,h=g.getSnapshotBeforeUpdate(e.elementType===e.type?w:mn(e.type,w),T);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(E){Ne(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return v=I0,I0=!1,v}function pa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Pp(e,n,s)}i=i.next}while(i!==r)}}function Nf(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rp(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function iT(t){var e=t.alternate;e!==null&&(t.alternate=null,iT(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ln],delete e[$a],delete e[gp],delete e[tP],delete e[nP])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function sT(t){return t.tag===5||t.tag===3||t.tag===4}function S0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||sT(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bp(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=kc));else if(r!==4&&(t=t.child,t!==null))for(bp(t,e,n),t=t.sibling;t!==null;)bp(t,e,n),t=t.sibling}function Np(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Np(t,e,n),t=t.sibling;t!==null;)Np(t,e,n),t=t.sibling}var lt=null,gn=!1;function Ar(t,e,n){for(n=n.child;n!==null;)oT(t,e,n),n=n.sibling}function oT(t,e,n){if(zn&&typeof zn.onCommitFiberUnmount=="function")try{zn.onCommitFiberUnmount(Sf,n)}catch{}switch(n.tag){case 5:Tt||Os(n,e);case 6:var r=lt,i=gn;lt=null,Ar(t,e,n),lt=r,gn=i,lt!==null&&(gn?(t=lt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):lt.removeChild(n.stateNode));break;case 18:lt!==null&&(gn?(t=lt,n=n.stateNode,t.nodeType===8?Jd(t.parentNode,n):t.nodeType===1&&Jd(t,n),Oa(t)):Jd(lt,n.stateNode));break;case 4:r=lt,i=gn,lt=n.stateNode.containerInfo,gn=!0,Ar(t,e,n),lt=r,gn=i;break;case 0:case 11:case 14:case 15:if(!Tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Pp(n,e,o),i=i.next}while(i!==r)}Ar(t,e,n);break;case 1:if(!Tt&&(Os(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}Ar(t,e,n);break;case 21:Ar(t,e,n);break;case 22:n.mode&1?(Tt=(r=Tt)||n.memoizedState!==null,Ar(t,e,n),Tt=r):Ar(t,e,n);break;default:Ar(t,e,n)}}function k0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new vP),e.forEach(function(r){var i=CP.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function hn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:lt=a.stateNode,gn=!1;break e;case 3:lt=a.stateNode.containerInfo,gn=!0;break e;case 4:lt=a.stateNode.containerInfo,gn=!0;break e}a=a.return}if(lt===null)throw Error(b(160));oT(s,o,i),lt=null,gn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)aT(e,t),e=e.sibling}function aT(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(hn(e,t),Nn(t),r&4){try{pa(3,t,t.return),Nf(3,t)}catch(w){Ne(t,t.return,w)}try{pa(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:hn(e,t),Nn(t),r&512&&n!==null&&Os(n,n.return);break;case 5:if(hn(e,t),Nn(t),r&512&&n!==null&&Os(n,n.return),t.flags&32){var i=t.stateNode;try{Pa(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Cw(i,s),np(a,o);var u=np(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?Ow(i,f):c==="dangerouslySetInnerHTML"?bw(i,f):c==="children"?Pa(i,f):Qm(i,c,f,u)}switch(a){case"input":Xh(i,s);break;case"textarea":Pw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?zs(i,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?zs(i,!!s.multiple,s.defaultValue,!0):zs(i,!!s.multiple,s.multiple?[]:"",!1))}i[$a]=s}catch(w){Ne(t,t.return,w)}}break;case 6:if(hn(e,t),Nn(t),r&4){if(t.stateNode===null)throw Error(b(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ne(t,t.return,w)}}break;case 3:if(hn(e,t),Nn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Oa(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:hn(e,t),Nn(t);break;case 13:hn(e,t),Nn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cg=Me())),r&4&&k0(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Tt=(u=Tt)||c,hn(e,t),Tt=u):hn(e,t),Nn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for($=t,c=t.child;c!==null;){for(f=$=c;$!==null;){switch(d=$,p=d.child,d.tag){case 0:case 11:case 14:case 15:pa(4,d,d.return);break;case 1:Os(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:Os(d,d.return);break;case 22:if(d.memoizedState!==null){x0(f);continue}}p!==null?(p.return=d,$=p):x0(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{i=f.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Nw("display",o))}catch(w){Ne(t,t.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:hn(e,t),Nn(t),r&4&&k0(t);break;case 21:break;default:hn(e,t),Nn(t)}}function Nn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(sT(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Pa(i,""),r.flags&=-33);var s=S0(t);Np(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=S0(t);bp(t,a,o);break;default:throw Error(b(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wP(t,e,n){$=t,lT(t)}function lT(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mu;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Tt;a=mu;var u=Tt;if(mu=o,(Tt=l)&&!u)for($=i;$!==null;)o=$,l=o.child,o.tag===22&&o.memoizedState!==null?C0(i):l!==null?(l.return=o,$=l):C0(i);for(;s!==null;)$=s,lT(s),s=s.sibling;$=i,mu=a,Tt=u}A0(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):A0(t)}}function A0(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Tt||Nf(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:mn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&u0(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}u0(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Oa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}Tt||e.flags&512&&Rp(e)}catch(d){Ne(e,e.return,d)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function x0(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function C0(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Nf(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Rp(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Rp(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){$=null;break}var a=e.sibling;if(a!==null){a.return=e.return,$=a;break}$=e.return}}var EP=Math.ceil,Vc=Ir.ReactCurrentDispatcher,Ag=Ir.ReactCurrentOwner,ln=Ir.ReactCurrentBatchConfig,ue=0,it=null,Be=null,dt=0,qt=0,Ds=pi(0),Ge=0,Ha=null,qi=0,Of=0,xg=0,ma=null,$t=null,Cg=0,oo=1/0,tr=null,Mc=!1,Op=null,Xr=null,gu=!1,Ur=null,$c=0,ga=0,Dp=null,Yu=-1,Xu=0;function Dt(){return ue&6?Me():Yu!==-1?Yu:Yu=Me()}function Jr(t){return t.mode&1?ue&2&&dt!==0?dt&-dt:iP.transition!==null?(Xu===0&&(Xu=Ww()),Xu):(t=me,t!==0||(t=window.event,t=t===void 0?16:Jw(t.type)),t):1}function En(t,e,n,r){if(50<ga)throw ga=0,Dp=null,Error(b(185));_l(t,n,r),(!(ue&2)||t!==it)&&(t===it&&(!(ue&2)&&(Of|=n),Ge===4&&Dr(t,dt)),Ht(t,r),n===1&&ue===0&&!(e.mode&1)&&(oo=Me()+500,Pf&&mi()))}function Ht(t,e){var n=t.callbackNode;iC(t,e);var r=Ec(t,t===it?dt:0);if(r===0)n!==null&&Mv(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mv(n),e===1)t.tag===0?rP(P0.bind(null,t)):yE(P0.bind(null,t)),ZC(function(){!(ue&6)&&mi()}),n=null;else{switch(qw(r)){case 1:n=eg;break;case 4:n=Bw;break;case 16:n=wc;break;case 536870912:n=Hw;break;default:n=wc}n=gT(n,uT.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function uT(t,e){if(Yu=-1,Xu=0,ue&6)throw Error(b(327));var n=t.callbackNode;if(Ks()&&t.callbackNode!==n)return null;var r=Ec(t,t===it?dt:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fc(t,r);else{e=r;var i=ue;ue|=2;var s=fT();(it!==t||dt!==e)&&(tr=null,oo=Me()+500,Mi(t,e));do try{SP();break}catch(a){cT(t,a)}while(!0);hg(),Vc.current=s,ue=i,Be!==null?e=0:(it=null,dt=0,e=Ge)}if(e!==0){if(e===2&&(i=ap(t),i!==0&&(r=i,e=Lp(t,i))),e===1)throw n=Ha,Mi(t,0),Dr(t,r),Ht(t,Me()),n;if(e===6)Dr(t,r);else{if(i=t.current.alternate,!(r&30)&&!TP(i)&&(e=Fc(t,r),e===2&&(s=ap(t),s!==0&&(r=s,e=Lp(t,s))),e===1))throw n=Ha,Mi(t,0),Dr(t,r),Ht(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(b(345));case 2:ki(t,$t,tr);break;case 3:if(Dr(t,r),(r&130023424)===r&&(e=Cg+500-Me(),10<e)){if(Ec(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=mp(ki.bind(null,t,$t,tr),e);break}ki(t,$t,tr);break;case 4:if(Dr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-wn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EP(r/1960))-r,10<r){t.timeoutHandle=mp(ki.bind(null,t,$t,tr),r);break}ki(t,$t,tr);break;case 5:ki(t,$t,tr);break;default:throw Error(b(329))}}}return Ht(t,Me()),t.callbackNode===n?uT.bind(null,t):null}function Lp(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(Mi(t,e).flags|=256),t=Fc(t,e),t!==2&&(e=$t,$t=n,e!==null&&Vp(e)),t}function Vp(t){$t===null?$t=t:$t.push.apply($t,t)}function TP(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!In(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Dr(t,e){for(e&=~xg,e&=~Of,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-wn(e),r=1<<n;t[n]=-1,e&=~r}}function P0(t){if(ue&6)throw Error(b(327));Ks();var e=Ec(t,0);if(!(e&1))return Ht(t,Me()),null;var n=Fc(t,e);if(t.tag!==0&&n===2){var r=ap(t);r!==0&&(e=r,n=Lp(t,r))}if(n===1)throw n=Ha,Mi(t,0),Dr(t,e),Ht(t,Me()),n;if(n===6)throw Error(b(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ki(t,$t,tr),Ht(t,Me()),null}function Pg(t,e){var n=ue;ue|=1;try{return t(e)}finally{ue=n,ue===0&&(oo=Me()+500,Pf&&mi())}}function Ki(t){Ur!==null&&Ur.tag===0&&!(ue&6)&&Ks();var e=ue;ue|=1;var n=ln.transition,r=me;try{if(ln.transition=null,me=1,t)return t()}finally{me=r,ln.transition=n,ue=e,!(ue&6)&&mi()}}function Rg(){qt=Ds.current,Se(Ds)}function Mi(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,JC(n)),Be!==null)for(n=Be.return;n!==null;){var r=n;switch(cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ac();break;case 3:io(),Se(zt),Se(xt),_g();break;case 5:vg(r);break;case 4:io();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:pg(r.type._context);break;case 22:case 23:Rg()}n=n.return}if(it=t,Be=t=Zr(t.current,null),dt=qt=e,Ge=0,Ha=null,xg=Of=qi=0,$t=ma=null,Ci!==null){for(e=0;e<Ci.length;e++)if(n=Ci[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Ci=null}return t}function cT(t,e){do{var n=Be;try{if(hg(),Ku.current=Lc,Dc){for(var r=Pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Dc=!1}if(Wi=0,tt=qe=Pe=null,ha=!1,Ua=0,Ag.current=null,n===null||n.return===null){Ge=1,Ha=e,Be=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=dt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=g0(o);if(p!==null){p.flags&=-257,y0(p,o,a,s,e),p.mode&1&&m0(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){m0(s,u,e),bg();break e}l=Error(b(426))}}else if(xe&&a.mode&1){var T=g0(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),y0(T,o,a,s,e),fg(so(l,a));break e}}s=l=so(l,a),Ge!==4&&(Ge=2),ma===null?ma=[s]:ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var g=KE(s,l,e);l0(s,g);break e;case 1:a=l;var h=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Xr===null||!Xr.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=GE(s,a,e);l0(s,E);break e}}s=s.return}while(s!==null)}hT(n)}catch(I){e=I,Be===n&&n!==null&&(Be=n=n.return);continue}break}while(!0)}function fT(){var t=Vc.current;return Vc.current=Lc,t===null?Lc:t}function bg(){(Ge===0||Ge===3||Ge===2)&&(Ge=4),it===null||!(qi&268435455)&&!(Of&268435455)||Dr(it,dt)}function Fc(t,e){var n=ue;ue|=2;var r=fT();(it!==t||dt!==e)&&(tr=null,Mi(t,e));do try{IP();break}catch(i){cT(t,i)}while(!0);if(hg(),ue=n,Vc.current=r,Be!==null)throw Error(b(261));return it=null,dt=0,Ge}function IP(){for(;Be!==null;)dT(Be)}function SP(){for(;Be!==null&&!Qx();)dT(Be)}function dT(t){var e=mT(t.alternate,t,qt);t.memoizedProps=t.pendingProps,e===null?hT(t):Be=e,Ag.current=null}function hT(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yP(n,e),n!==null){n.flags&=32767,Be=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ge=6,Be=null;return}}else if(n=gP(n,e,qt),n!==null){Be=n;return}if(e=e.sibling,e!==null){Be=e;return}Be=e=t}while(e!==null);Ge===0&&(Ge=5)}function ki(t,e,n){var r=me,i=ln.transition;try{ln.transition=null,me=1,kP(t,e,n,r)}finally{ln.transition=i,me=r}return null}function kP(t,e,n,r){do Ks();while(Ur!==null);if(ue&6)throw Error(b(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(b(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(sC(t,s),t===it&&(Be=it=null,dt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||gu||(gu=!0,gT(wc,function(){return Ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=ln.transition,ln.transition=null;var o=me;me=1;var a=ue;ue|=4,Ag.current=null,_P(t,n),aT(n,t),WC(hp),Tc=!!dp,hp=dp=null,t.current=n,wP(n),Yx(),ue=a,me=o,ln.transition=s}else t.current=n;if(gu&&(gu=!1,Ur=t,$c=i),s=t.pendingLanes,s===0&&(Xr=null),Zx(n.stateNode),Ht(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Mc)throw Mc=!1,t=Op,Op=null,t;return $c&1&&t.tag!==0&&Ks(),s=t.pendingLanes,s&1?t===Dp?ga++:(ga=0,Dp=t):ga=0,mi(),null}function Ks(){if(Ur!==null){var t=qw($c),e=ln.transition,n=me;try{if(ln.transition=null,me=16>t?16:t,Ur===null)var r=!1;else{if(t=Ur,Ur=null,$c=0,ue&6)throw Error(b(331));var i=ue;for(ue|=4,$=t.current;$!==null;){var s=$,o=s.child;if($.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:pa(8,c,s)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var d=c.sibling,p=c.return;if(iT(c),c===u){$=null;break}if(d!==null){d.return=p,$=d;break}$=p}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}$=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,$=o;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var g=s.sibling;if(g!==null){g.return=s.return,$=g;break e}$=s.return}}var h=t.current;for($=h;$!==null;){o=$;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,$=m;else e:for(o=h;$!==null;){if(a=$,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Nf(9,a)}}catch(I){Ne(a,a.return,I)}if(a===o){$=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,$=E;break e}$=a.return}}if(ue=i,mi(),zn&&typeof zn.onPostCommitFiberRoot=="function")try{zn.onPostCommitFiberRoot(Sf,t)}catch{}r=!0}return r}finally{me=n,ln.transition=e}}return!1}function R0(t,e,n){e=so(n,e),e=KE(t,e,1),t=Yr(t,e,1),e=Dt(),t!==null&&(_l(t,1,e),Ht(t,e))}function Ne(t,e,n){if(t.tag===3)R0(t,t,n);else for(;e!==null;){if(e.tag===3){R0(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xr===null||!Xr.has(r))){t=so(n,t),t=GE(e,t,1),e=Yr(e,t,1),t=Dt(),e!==null&&(_l(e,1,t),Ht(e,t));break}}e=e.return}}function AP(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,it===t&&(dt&n)===n&&(Ge===4||Ge===3&&(dt&130023424)===dt&&500>Me()-Cg?Mi(t,0):xg|=n),Ht(t,e)}function pT(t,e){e===0&&(t.mode&1?(e=ou,ou<<=1,!(ou&130023424)&&(ou=4194304)):e=1);var n=Dt();t=hr(t,e),t!==null&&(_l(t,e,n),Ht(t,n))}function xP(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),pT(t,n)}function CP(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(e),pT(t,n)}var mT;mT=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return jt=!1,mP(t,e,n);jt=!!(t.flags&131072)}else jt=!1,xe&&e.flags&1048576&&vE(e,Pc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qu(t,e),t=e.pendingProps;var i=to(e,xt.current);qs(e,n),i=Eg(null,e,r,t,i,n);var s=Tg();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(s=!0,xc(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,gg(e),i.updater=Rf,e.stateNode=i,i._reactInternals=e,Tp(e,r,t,n),e=kp(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&ug(e),bt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qu(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RP(r),t=mn(r,t),i){case 0:e=Sp(null,e,r,t,n);break e;case 1:e=w0(null,e,r,t,n);break e;case 11:e=v0(null,e,r,t,n);break e;case 14:e=_0(null,e,r,mn(r.type,t),n);break e}throw Error(b(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Sp(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),w0(t,e,r,i,n);case 3:e:{if(JE(e),t===null)throw Error(b(387));r=e.pendingProps,s=e.memoizedState,i=s.element,TE(t,e),Nc(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=so(Error(b(423)),e),e=E0(t,e,r,n,i);break e}else if(r!==i){i=so(Error(b(424)),e),e=E0(t,e,r,n,i);break e}else for(Kt=Qr(e.stateNode.containerInfo.firstChild),Qt=e,xe=!0,yn=null,n=AE(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(no(),r===i){e=pr(t,e,n);break e}bt(t,e,r,n)}e=e.child}return e;case 5:return xE(e),t===null&&_p(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,pp(r,i)?o=null:s!==null&&pp(r,s)&&(e.flags|=32),XE(t,e),bt(t,e,o,n),e.child;case 6:return t===null&&_p(e),null;case 13:return ZE(t,e,n);case 4:return yg(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ro(e,null,r,n):bt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),v0(t,e,r,i,n);case 7:return bt(t,e,e.pendingProps,n),e.child;case 8:return bt(t,e,e.pendingProps.children,n),e.child;case 12:return bt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(Rc,r._currentValue),r._currentValue=o,s!==null)if(In(s.value,o)){if(s.children===i.children&&!zt.current){e=pr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=cr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),wp(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(b(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),wp(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}bt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,qs(e,n),i=un(i),r=r(i),e.flags|=1,bt(t,e,r,n),e.child;case 14:return r=e.type,i=mn(r,e.pendingProps),i=mn(r.type,i),_0(t,e,r,i,n);case 15:return QE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Qu(t,e),e.tag=1,Bt(r)?(t=!0,xc(e)):t=!1,qs(e,n),SE(e,r,i),Tp(e,r,i,n),kp(null,e,r,!0,t,n);case 19:return eT(t,e,n);case 22:return YE(t,e,n)}throw Error(b(156,e.tag))};function gT(t,e){return zw(t,e)}function PP(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(t,e,n,r){return new PP(t,e,n,r)}function Ng(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RP(t){if(typeof t=="function")return Ng(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xm)return 11;if(t===Jm)return 14}return 2}function Zr(t,e){var n=t.alternate;return n===null?(n=an(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ju(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ng(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ss:return $i(n.children,i,s,e);case Ym:o=8,i|=8;break;case qh:return t=an(12,n,e,i|2),t.elementType=qh,t.lanes=s,t;case Kh:return t=an(13,n,e,i),t.elementType=Kh,t.lanes=s,t;case Gh:return t=an(19,n,e,i),t.elementType=Gh,t.lanes=s,t;case kw:return Df(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iw:o=10;break e;case Sw:o=9;break e;case Xm:o=11;break e;case Jm:o=14;break e;case br:o=16,r=null;break e}throw Error(b(130,t==null?t:typeof t,""))}return e=an(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $i(t,e,n,r){return t=an(7,t,r,e),t.lanes=n,t}function Df(t,e,n,r){return t=an(22,t,r,e),t.elementType=kw,t.lanes=n,t.stateNode={isHidden:!1},t}function oh(t,e,n){return t=an(6,t,null,e),t.lanes=n,t}function ah(t,e,n){return e=an(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bP(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ud(0),this.expirationTimes=Ud(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ud(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Og(t,e,n,r,i,s,o,a,l){return t=new bP(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=an(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gg(s),t}function NP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Is,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function yT(t){if(!t)return oi;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(b(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(b(171))}if(t.tag===1){var n=t.type;if(Bt(n))return gE(t,n,e)}return e}function vT(t,e,n,r,i,s,o,a,l){return t=Og(n,r,!0,t,i,s,o,a,l),t.context=yT(null),n=t.current,r=Dt(),i=Jr(n),s=cr(r,i),s.callback=e??null,Yr(n,s,i),t.current.lanes=i,_l(t,i,r),Ht(t,r),t}function Lf(t,e,n,r){var i=e.current,s=Dt(),o=Jr(i);return n=yT(n),e.context===null?e.context=n:e.pendingContext=n,e=cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Yr(i,e,o),t!==null&&(En(t,i,o,s),qu(t,i,o)),o}function jc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function b0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Dg(t,e){b0(t,e),(t=t.alternate)&&b0(t,e)}function OP(){return null}var _T=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lg(t){this._internalRoot=t}Vf.prototype.render=Lg.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(b(409));Lf(t,e,null,null)};Vf.prototype.unmount=Lg.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ki(function(){Lf(null,t,null,null)}),e[dr]=null}};function Vf(t){this._internalRoot=t}Vf.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Or.length&&e!==0&&e<Or[n].priority;n++);Or.splice(n,0,t),n===0&&Xw(t)}};function Vg(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function N0(){}function DP(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=jc(o);s.call(u)}}var o=vT(e,r,t,0,null,!1,!1,"",N0);return t._reactRootContainer=o,t[dr]=o.current,Va(t.nodeType===8?t.parentNode:t),Ki(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=jc(l);a.call(u)}}var l=Og(t,0,!1,null,null,!1,!1,"",N0);return t._reactRootContainer=l,t[dr]=l.current,Va(t.nodeType===8?t.parentNode:t),Ki(function(){Lf(e,l,n,r)}),l}function $f(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=jc(o);a.call(l)}}Lf(e,o,t,i)}else o=DP(n,e,t,i,r);return jc(o)}Kw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Xo(e.pendingLanes);n!==0&&(tg(e,n|1),Ht(e,Me()),!(ue&6)&&(oo=Me()+500,mi()))}break;case 13:Ki(function(){var r=hr(t,1);if(r!==null){var i=Dt();En(r,t,1,i)}}),Dg(t,1)}};ng=function(t){if(t.tag===13){var e=hr(t,134217728);if(e!==null){var n=Dt();En(e,t,134217728,n)}Dg(t,134217728)}};Gw=function(t){if(t.tag===13){var e=Jr(t),n=hr(t,e);if(n!==null){var r=Dt();En(n,t,e,r)}Dg(t,e)}};Qw=function(){return me};Yw=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};ip=function(t,e,n){switch(e){case"input":if(Xh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cf(r);if(!i)throw Error(b(90));xw(r),Xh(r,i)}}}break;case"textarea":Pw(t,n);break;case"select":e=n.value,e!=null&&zs(t,!!n.multiple,e,!1)}};Vw=Pg;Mw=Ki;var LP={usingClientEntryPoint:!1,Events:[El,Cs,Cf,Dw,Lw,Pg]},Ho={findFiberByHostInstance:xi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},VP={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=jw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||OP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yu.isDisabled&&yu.supportsFiber)try{Sf=yu.inject(VP),zn=yu}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LP;Zt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vg(e))throw Error(b(200));return NP(t,e,null,n)};Zt.createRoot=function(t,e){if(!Vg(t))throw Error(b(299));var n=!1,r="",i=_T;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Og(t,1,!1,null,null,n,!1,r,i),t[dr]=e.current,Va(t.nodeType===8?t.parentNode:t),new Lg(e)};Zt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(b(188)):(t=Object.keys(t).join(","),Error(b(268,t)));return t=jw(e),t=t===null?null:t.stateNode,t};Zt.flushSync=function(t){return Ki(t)};Zt.hydrate=function(t,e,n){if(!Mf(e))throw Error(b(200));return $f(null,t,e,!0,n)};Zt.hydrateRoot=function(t,e,n){if(!Vg(t))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=_T;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=vT(e,null,t,1,n??null,i,!1,s,o),t[dr]=e.current,Va(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vf(e)};Zt.render=function(t,e,n){if(!Mf(e))throw Error(b(200));return $f(null,t,e,!1,n)};Zt.unmountComponentAtNode=function(t){if(!Mf(t))throw Error(b(40));return t._reactRootContainer?(Ki(function(){$f(null,null,t,!1,function(){t._reactRootContainer=null,t[dr]=null})}),!0):!1};Zt.unstable_batchedUpdates=Pg;Zt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Mf(n))throw Error(b(200));if(t==null||t._reactInternals===void 0)throw Error(b(38));return $f(t,e,n,!1,r)};Zt.version="18.2.0-next-9e3b772b8-20220608";function wT(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wT)}catch(t){console.error(t)}}wT(),vw.exports=Zt;var MP=vw.exports,O0=MP;Hh.createRoot=O0.createRoot,Hh.hydrateRoot=O0.hydrateRoot;/**
 * @remix-run/router v1.14.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wa(){return Wa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wa.apply(this,arguments)}var zr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zr||(zr={}));const D0="popstate";function $P(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Mp("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Uc(i)}return jP(e,n,null,t)}function He(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Mg(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function FP(){return Math.random().toString(36).substr(2,8)}function L0(t,e){return{usr:t.state,key:t.key,idx:e}}function Mp(t,e,n,r){return n===void 0&&(n=null),Wa({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xo(e):e,{state:n,key:e&&e.key||r||FP()})}function Uc(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xo(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function jP(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Wa({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=zr.Pop;let T=c(),g=T==null?null:T-u;u=T,l&&l({action:a,location:w.location,delta:g})}function d(T,g){a=zr.Push;let h=Mp(w.location,T,g);n&&n(h,T),u=c()+1;let m=L0(h,u),E=w.createHref(h);try{o.pushState(m,"",E)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function p(T,g){a=zr.Replace;let h=Mp(w.location,T,g);n&&n(h,T),u=c();let m=L0(h,u),E=w.createHref(h);o.replaceState(m,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function v(T){let g=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof T=="string"?T:Uc(T);return He(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let w={get action(){return a},get location(){return t(i,o)},listen(T){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(D0,f),l=T,()=>{i.removeEventListener(D0,f),l=null}},createHref(T){return e(i,T)},createURL:v,encodeLocation(T){let g=v(T);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(T){return o.go(T)}};return w}var V0;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(V0||(V0={}));function UP(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xo(e):e,i=$g(r.pathname||"/",n);if(i==null)return null;let s=ET(t);zP(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=XP(s[a],e2(i));return o}function ET(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(He(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=ei([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(He(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ET(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:QP(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of TT(s.path))i(s,o,l)}),e}function TT(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=TT(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function zP(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:YP(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const BP=/^:\w+$/,HP=3,WP=2,qP=1,KP=10,GP=-2,M0=t=>t==="*";function QP(t,e){let n=t.split("/"),r=n.length;return n.some(M0)&&(r+=GP),e&&(r+=WP),n.filter(i=>!M0(i)).reduce((i,s)=>i+(BP.test(s)?HP:s===""?qP:KP),r)}function YP(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function XP(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=JP({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let f=a.route;s.push({params:r,pathname:ei([i,c.pathname]),pathnameBase:s2(ei([i,c.pathnameBase])),route:f}),c.pathnameBase!=="/"&&(i=ei([i,c.pathnameBase]))}return s}function JP(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ZP(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let w=a[f]||"";o=s.slice(0,s.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[f];return p&&!v?u[d]=void 0:u[d]=t2(v||"",d),u},{}),pathname:s,pathnameBase:o,pattern:t}}function ZP(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Mg(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function e2(t){try{return decodeURI(t)}catch(e){return Mg(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function t2(t,e){try{return decodeURIComponent(t)}catch(n){return Mg(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function $g(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function n2(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xo(t):t;return{pathname:n?n.startsWith("/")?n:r2(n,e):e,search:o2(r),hash:a2(i)}}function r2(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function lh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i2(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function IT(t,e){let n=i2(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function ST(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xo(t):(i=Wa({},t),He(!i.pathname||!i.pathname.includes("?"),lh("?","pathname","search",i)),He(!i.pathname||!i.pathname.includes("#"),lh("#","pathname","hash",i)),He(!i.search||!i.search.includes("#"),lh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let f=e.length-1;if(!r&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;i.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=n2(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const ei=t=>t.join("/").replace(/\/\/+/g,"/"),s2=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),o2=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,a2=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function l2(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const kT=["post","put","patch","delete"];new Set(kT);const u2=["get",...kT];new Set(u2);/**
 * React Router v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function qa(){return qa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},qa.apply(this,arguments)}const Fg=C.createContext(null),c2=C.createContext(null),os=C.createContext(null),Ff=C.createContext(null),as=C.createContext({outlet:null,matches:[],isDataRoute:!1}),AT=C.createContext(null);function f2(t,e){let{relative:n}=e===void 0?{}:e;Il()||He(!1);let{basename:r,navigator:i}=C.useContext(os),{hash:s,pathname:o,search:a}=CT(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:ei([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Il(){return C.useContext(Ff)!=null}function jf(){return Il()||He(!1),C.useContext(Ff).location}function xT(t){C.useContext(os).static||C.useLayoutEffect(t)}function Uf(){let{isDataRoute:t}=C.useContext(as);return t?S2():d2()}function d2(){Il()||He(!1);let t=C.useContext(Fg),{basename:e,future:n,navigator:r}=C.useContext(os),{matches:i}=C.useContext(as),{pathname:s}=jf(),o=JSON.stringify(IT(i,n.v7_relativeSplatPath)),a=C.useRef(!1);return xT(()=>{a.current=!0}),C.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=ST(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:ei([e,f.pathname])),(c.replace?r.replace:r.push)(f,c.state,c)},[e,r,o,s,t])}function CT(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=C.useContext(os),{matches:i}=C.useContext(as),{pathname:s}=jf(),o=JSON.stringify(IT(i,r.v7_relativeSplatPath));return C.useMemo(()=>ST(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function h2(t,e){return p2(t,e)}function p2(t,e,n,r){Il()||He(!1);let{navigator:i}=C.useContext(os),{matches:s}=C.useContext(as),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=jf(),c;if(e){var f;let T=typeof e=="string"?xo(e):e;l==="/"||(f=T.pathname)!=null&&f.startsWith(l)||He(!1),c=T}else c=u;let d=c.pathname||"/",p=l==="/"?d:d.slice(l.length)||"/",v=UP(t,{pathname:p}),w=_2(v&&v.map(T=>Object.assign({},T,{params:Object.assign({},a,T.params),pathname:ei([l,i.encodeLocation?i.encodeLocation(T.pathname).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?l:ei([l,i.encodeLocation?i.encodeLocation(T.pathnameBase).pathname:T.pathnameBase])})),s,n,r);return e&&w?C.createElement(Ff.Provider,{value:{location:qa({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:zr.Pop}},w):w}function m2(){let t=I2(),e=l2(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const g2=C.createElement(m2,null);class y2 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?C.createElement(as.Provider,{value:this.props.routeContext},C.createElement(AT.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v2(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Fg);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(as.Provider,{value:e},r)}function _2(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id]));c>=0||He(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:p}=n,v=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let p,v=!1,w=null,T=null;n&&(p=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||g2,l&&(u<0&&d===0?(k2("route-fallback",!1),v=!0,T=null):u===d&&(v=!0,T=f.route.hydrateFallbackElement||null)));let g=e.concat(o.slice(0,d+1)),h=()=>{let m;return p?m=w:v?m=T:f.route.Component?m=C.createElement(f.route.Component,null):f.route.element?m=f.route.element:m=c,C.createElement(v2,{match:f,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:m})};return n&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?C.createElement(y2,{location:n.location,revalidation:n.revalidation,component:w,error:p,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var PT=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(PT||{}),zc=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(zc||{});function w2(t){let e=C.useContext(Fg);return e||He(!1),e}function E2(t){let e=C.useContext(c2);return e||He(!1),e}function T2(t){let e=C.useContext(as);return e||He(!1),e}function RT(t){let e=T2(),n=e.matches[e.matches.length-1];return n.route.id||He(!1),n.route.id}function I2(){var t;let e=C.useContext(AT),n=E2(zc.UseRouteError),r=RT(zc.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function S2(){let{router:t}=w2(PT.UseNavigateStable),e=RT(zc.UseNavigateStable),n=C.useRef(!1);return xT(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,qa({fromRouteId:e},s)))},[t,e])}const $0={};function k2(t,e,n){!e&&!$0[t]&&($0[t]=!0)}function Zo(t){He(!1)}function A2(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zr.Pop,navigator:s,static:o=!1,future:a}=t;Il()&&He(!1);let l=e.replace(/^\/*/,"/"),u=C.useMemo(()=>({basename:l,navigator:s,static:o,future:qa({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xo(r));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:v="default"}=r,w=C.useMemo(()=>{let T=$g(c,l);return T==null?null:{location:{pathname:T,search:f,hash:d,state:p,key:v},navigationType:i}},[l,c,f,d,p,v,i]);return w==null?null:C.createElement(os.Provider,{value:u},C.createElement(Ff.Provider,{children:n,value:w}))}function x2(t){let{children:e,location:n}=t;return h2($p(e),n)}new Promise(()=>{});function $p(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,$p(r.props.children,s));return}r.type!==Zo&&He(!1),!r.props.index||!r.props.children||He(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=$p(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.21.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fp(){return Fp=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fp.apply(this,arguments)}function C2(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function P2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function R2(t,e){return t.button===0&&(!e||e==="_self")&&!P2(t)}const b2=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],N2="startTransition",F0=xx[N2];function O2(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=$P({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(f=>{u&&F0?F0(()=>l(f)):l(f)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(A2,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const D2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L2=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bT=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:f}=e,d=C2(e,b2),{basename:p}=C.useContext(os),v,w=!1;if(typeof u=="string"&&L2.test(u)&&(v=u,D2))try{let m=new URL(window.location.href),E=u.startsWith("//")?new URL(m.protocol+u):new URL(u),I=$g(E.pathname,p);E.origin===m.origin&&I!=null?u=I+E.search+E.hash:w=!0}catch{}let T=f2(u,{relative:i}),g=V2(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:f});function h(m){r&&r(m),m.defaultPrevented||g(m)}return C.createElement("a",Fp({},d,{href:v||T,onClick:w||s?r:h,ref:n,target:l}))});var j0;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(j0||(j0={}));var U0;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(U0||(U0={}));function V2(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Uf(),u=jf(),c=CT(t,{relative:o});return C.useCallback(f=>{if(R2(f,n)){f.preventDefault();let d=r!==void 0?r:Uc(u)===Uc(c);l(t,{replace:d,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function M2(){return y.jsx("div",{children:y.jsx("h1",{className:" uppercase text-xl font-bold tracking-wide text-stone-700",children:"Budget Tracker"})})}function z0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?z0(Object(n),!0).forEach(function(r){Ye(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):z0(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Bc(t){"@babel/helpers - typeof";return Bc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Bc(t)}function $2(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function B0(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function F2(t,e,n){return e&&B0(t.prototype,e),n&&B0(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Ye(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jg(t,e){return U2(t)||B2(t,e)||NT(t,e)||W2()}function Sl(t){return j2(t)||z2(t)||NT(t)||H2()}function j2(t){if(Array.isArray(t))return jp(t)}function U2(t){if(Array.isArray(t))return t}function z2(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function B2(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function NT(t,e){if(t){if(typeof t=="string")return jp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jp(t,e)}}function jp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function H2(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function W2(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var H0=function(){},Ug={},OT={},DT=null,LT={mark:H0,measure:H0};try{typeof window<"u"&&(Ug=window),typeof document<"u"&&(OT=document),typeof MutationObserver<"u"&&(DT=MutationObserver),typeof performance<"u"&&(LT=performance)}catch{}var q2=Ug.navigator||{},W0=q2.userAgent,q0=W0===void 0?"":W0,ai=Ug,ke=OT,K0=DT,vu=LT;ai.document;var Sr=!!ke.documentElement&&!!ke.head&&typeof ke.addEventListener=="function"&&typeof ke.createElement=="function",VT=~q0.indexOf("MSIE")||~q0.indexOf("Trident/"),_u,wu,Eu,Tu,Iu,mr="___FONT_AWESOME___",Up=16,MT="fa",$T="svg-inline--fa",Gi="data-fa-i2svg",zp="data-fa-pseudo-element",K2="data-fa-pseudo-element-pending",zg="data-prefix",Bg="data-icon",G0="fontawesome-i2svg",G2="async",Q2=["HTML","HEAD","STYLE","SCRIPT"],FT=function(){try{return!0}catch{return!1}}(),Te="classic",Oe="sharp",Hg=[Te,Oe];function kl(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Te]}})}var Ka=kl((_u={},Ye(_u,Te,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Ye(_u,Oe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),_u)),Ga=kl((wu={},Ye(wu,Te,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ye(wu,Oe,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),wu)),Qa=kl((Eu={},Ye(Eu,Te,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ye(Eu,Oe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),Eu)),Y2=kl((Tu={},Ye(Tu,Te,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ye(Tu,Oe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),Tu)),X2=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,jT="fa-layers-text",J2=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Z2=kl((Iu={},Ye(Iu,Te,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ye(Iu,Oe,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),Iu)),UT=[1,2,3,4,5,6,7,8,9,10],eR=UT.concat([11,12,13,14,15,16,17,18,19,20]),tR=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ri={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Ya=new Set;Object.keys(Ga[Te]).map(Ya.add.bind(Ya));Object.keys(Ga[Oe]).map(Ya.add.bind(Ya));var nR=[].concat(Hg,Sl(Ya),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ri.GROUP,Ri.SWAP_OPACITY,Ri.PRIMARY,Ri.SECONDARY]).concat(UT.map(function(t){return"".concat(t,"x")})).concat(eR.map(function(t){return"w-".concat(t)})),ya=ai.FontAwesomeConfig||{};function rR(t){var e=ke.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function iR(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(ke&&typeof ke.querySelector=="function"){var sR=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];sR.forEach(function(t){var e=jg(t,2),n=e[0],r=e[1],i=iR(rR(n));i!=null&&(ya[r]=i)})}var zT={styleDefault:"solid",familyDefault:"classic",cssPrefix:MT,replacementClass:$T,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ya.familyPrefix&&(ya.cssPrefix=ya.familyPrefix);var ao=M(M({},zT),ya);ao.autoReplaceSvg||(ao.observeMutations=!1);var z={};Object.keys(zT).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){ao[t]=n,va.forEach(function(r){return r(z)})},get:function(){return ao[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){ao.cssPrefix=e,va.forEach(function(n){return n(z)})},get:function(){return ao.cssPrefix}});ai.FontAwesomeConfig=z;var va=[];function oR(t){return va.push(t),function(){va.splice(va.indexOf(t),1)}}var xr=Up,Mn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function aR(t){if(!(!t||!Sr)){var e=ke.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=ke.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return ke.head.insertBefore(e,r),t}}var lR="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Xa(){for(var t=12,e="";t-- >0;)e+=lR[Math.random()*62|0];return e}function Co(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Wg(t){return t.classList?Co(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function BT(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function uR(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(BT(t[n]),'" ')},"").trim()}function zf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function qg(t){return t.size!==Mn.size||t.x!==Mn.x||t.y!==Mn.y||t.rotate!==Mn.rotate||t.flipX||t.flipY}function cR(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function fR(t){var e=t.transform,n=t.width,r=n===void 0?Up:n,i=t.height,s=i===void 0?Up:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&VT?l+="translate(".concat(e.x/xr-r/2,"em, ").concat(e.y/xr-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/xr,"em), calc(-50% + ").concat(e.y/xr,"em)) "):l+="translate(".concat(e.x/xr,"em, ").concat(e.y/xr,"em) "),l+="scale(".concat(e.size/xr*(e.flipX?-1:1),", ").concat(e.size/xr*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var dR=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function HT(){var t=MT,e=$T,n=z.cssPrefix,r=z.replacementClass,i=dR;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Q0=!1;function uh(){z.autoAddCss&&!Q0&&(aR(HT()),Q0=!0)}var hR={mixout:function(){return{dom:{css:HT,insertCss:uh}}},hooks:function(){return{beforeDOMElementCreation:function(){uh()},beforeI2svg:function(){uh()}}}},gr=ai||{};gr[mr]||(gr[mr]={});gr[mr].styles||(gr[mr].styles={});gr[mr].hooks||(gr[mr].hooks={});gr[mr].shims||(gr[mr].shims=[]);var _n=gr[mr],WT=[],pR=function t(){ke.removeEventListener("DOMContentLoaded",t),Hc=1,WT.map(function(e){return e()})},Hc=!1;Sr&&(Hc=(ke.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ke.readyState),Hc||ke.addEventListener("DOMContentLoaded",pR));function mR(t){Sr&&(Hc?setTimeout(t,0):WT.push(t))}function Al(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?BT(t):"<".concat(e," ").concat(uR(r),">").concat(s.map(Al).join(""),"</").concat(e,">")}function Y0(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var gR=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},ch=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?gR(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function yR(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bp(t){var e=yR(t);return e.length===1?e[0].toString(16):null}function vR(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function X0(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hp(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=X0(e);typeof _n.hooks.addPack=="function"&&!i?_n.hooks.addPack(t,X0(e)):_n.styles[t]=M(M({},_n.styles[t]||{}),s),t==="fas"&&Hp("fa",e)}var Su,ku,Au,Ls=_n.styles,_R=_n.shims,wR=(Su={},Ye(Su,Te,Object.values(Qa[Te])),Ye(Su,Oe,Object.values(Qa[Oe])),Su),Kg=null,qT={},KT={},GT={},QT={},YT={},ER=(ku={},Ye(ku,Te,Object.keys(Ka[Te])),Ye(ku,Oe,Object.keys(Ka[Oe])),ku);function TR(t){return~nR.indexOf(t)}function IR(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!TR(i)?i:null}var XT=function(){var e=function(s){return ch(Ls,function(o,a,l){return o[l]=ch(a,s,{}),o},{})};qT=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),KT=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),YT=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ls||z.autoFetchSvg,r=ch(_R,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});GT=r.names,QT=r.unicodes,Kg=Bf(z.styleDefault,{family:z.familyDefault})};oR(function(t){Kg=Bf(t.styleDefault,{family:z.familyDefault})});XT();function Gg(t,e){return(qT[t]||{})[e]}function SR(t,e){return(KT[t]||{})[e]}function bi(t,e){return(YT[t]||{})[e]}function JT(t){return GT[t]||{prefix:null,iconName:null}}function kR(t){var e=QT[t],n=Gg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function li(){return Kg}var Qg=function(){return{prefix:null,iconName:null,rest:[]}};function Bf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Te:n,i=Ka[r][t],s=Ga[r][t]||Ga[r][i],o=t in _n.styles?t:null;return s||o||null}var J0=(Au={},Ye(Au,Te,Object.keys(Qa[Te])),Ye(Au,Oe,Object.keys(Qa[Oe])),Au);function Hf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Ye(e,Te,"".concat(z.cssPrefix,"-").concat(Te)),Ye(e,Oe,"".concat(z.cssPrefix,"-").concat(Oe)),e),o=null,a=Te;(t.includes(s[Te])||t.some(function(u){return J0[Te].includes(u)}))&&(a=Te),(t.includes(s[Oe])||t.some(function(u){return J0[Oe].includes(u)}))&&(a=Oe);var l=t.reduce(function(u,c){var f=IR(z.cssPrefix,c);if(Ls[c]?(c=wR[a].includes(c)?Y2[a][c]:c,o=c,u.prefix=c):ER[a].indexOf(c)>-1?(o=c,u.prefix=Bf(c,{family:a})):f?u.iconName=f:c!==z.replacementClass&&c!==s[Te]&&c!==s[Oe]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var d=o==="fa"?JT(u.iconName):{},p=bi(u.prefix,u.iconName);d.prefix&&(o=null),u.iconName=d.iconName||p||u.iconName,u.prefix=d.prefix||u.prefix,u.prefix==="far"&&!Ls.far&&Ls.fas&&!z.autoFetchSvg&&(u.prefix="fas")}return u},Qg());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Oe&&(Ls.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=bi(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=li()||"fas"),l}var AR=function(){function t(){$2(this,t),this.definitions={}}return F2(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Hp(a,o[a]);var l=Qa[Te][a];l&&Hp(l,o[a]),XT()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(f){typeof f=="string"&&(n[a][f]=u)}),n[a][l]=u}),n}}]),t}(),Z0=[],Vs={},Gs={},xR=Object.keys(Gs);function CR(t,e){var n=e.mixoutsTo;return Z0=t,Vs={},Object.keys(Gs).forEach(function(r){xR.indexOf(r)===-1&&delete Gs[r]}),Z0.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Bc(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Vs[o]||(Vs[o]=[]),Vs[o].push(s[o])})}r.provides&&r.provides(Gs)}),n}function Wp(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Vs[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function Qi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Vs[t]||[];i.forEach(function(s){s.apply(null,n)})}function yr(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Gs[t]?Gs[t].apply(null,e):void 0}function qp(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||li();if(e)return e=bi(n,e)||e,Y0(ZT.definitions,n,e)||Y0(_n.styles,n,e)}var ZT=new AR,PR=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Qi("noAuto")},RR={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Sr?(Qi("beforeI2svg",e),yr("pseudoElements2svg",e),yr("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,mR(function(){NR({autoReplaceSvgRoot:n}),Qi("watch",e)})}},bR={icon:function(e){if(e===null)return null;if(Bc(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:bi(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Bf(e[0]);return{prefix:r,iconName:bi(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(X2))){var i=Hf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||li(),iconName:bi(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=li();return{prefix:s,iconName:bi(s,e)||e}}}},tn={noAuto:PR,config:z,dom:RR,parse:bR,library:ZT,findIconDefinition:qp,toHtml:Al},NR=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?ke:n;(Object.keys(_n.styles).length>0||z.autoFetchSvg)&&Sr&&z.autoReplaceSvg&&tn.dom.i2svg({node:r})};function Wf(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Al(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Sr){var r=ke.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function OR(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(qg(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=zf(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function DR(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function Yg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,f=t.extra,d=t.watchable,p=d===void 0?!1:d,v=r.found?r:n,w=v.width,T=v.height,g=i==="fak",h=[z.replacementClass,s?"".concat(z.cssPrefix,"-").concat(s):""].filter(function(G){return f.classes.indexOf(G)===-1}).filter(function(G){return G!==""||!!G}).concat(f.classes).join(" "),m={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(T)})},E=g&&!~f.classes.indexOf("fa-fw")?{width:"".concat(w/T*16*.0625,"em")}:{};p&&(m.attributes[Gi]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Xa())},children:[l]}),delete m.attributes.title);var I=M(M({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},E),f.styles)}),x=r.found&&n.found?yr("generateAbstractMask",I)||{children:[],attributes:{}}:yr("generateAbstractIcon",I)||{children:[],attributes:{}},k=x.children,V=x.attributes;return I.children=k,I.attributes=V,a?DR(I):OR(I)}function e_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Gi]="");var c=M({},o.styles);qg(i)&&(c.transform=fR({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var f=zf(c);f.length>0&&(u.style=f);var d=[];return d.push({tag:"span",attributes:u,children:[e]}),s&&d.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),d}function LR(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=zf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var fh=_n.styles;function Kp(t){var e=t[0],n=t[1],r=t.slice(4),i=jg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ri.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ri.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(Ri.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var VR={found:!1,width:512,height:512};function MR(t,e){!FT&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Gp(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=li()),new Promise(function(r,i){if(yr("missingIconAbstract"),n==="fa"){var s=JT(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&fh[e]&&fh[e][t]){var o=fh[e][t];return r(Kp(o))}MR(t,e),r(M(M({},VR),{},{icon:z.showMissingIcons&&t?yr("missingIconAbstract")||{}:{}}))})}var t_=function(){},Qp=z.measurePerformance&&vu&&vu.mark&&vu.measure?vu:{mark:t_,measure:t_},ea='FA "6.5.1"',$R=function(e){return Qp.mark("".concat(ea," ").concat(e," begins")),function(){return eI(e)}},eI=function(e){Qp.mark("".concat(ea," ").concat(e," ends")),Qp.measure("".concat(ea," ").concat(e),"".concat(ea," ").concat(e," begins"),"".concat(ea," ").concat(e," ends"))},Xg={begin:$R,end:eI},Zu=function(){};function n_(t){var e=t.getAttribute?t.getAttribute(Gi):null;return typeof e=="string"}function FR(t){var e=t.getAttribute?t.getAttribute(zg):null,n=t.getAttribute?t.getAttribute(Bg):null;return e&&n}function jR(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function UR(){if(z.autoReplaceSvg===!0)return ec.replace;var t=ec[z.autoReplaceSvg];return t||ec.replace}function zR(t){return ke.createElementNS("http://www.w3.org/2000/svg",t)}function BR(t){return ke.createElement(t)}function tI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?zR:BR:n;if(typeof t=="string")return ke.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(tI(o,{ceFn:r}))}),i}function HR(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var ec={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(tI(i),n)}),n.getAttribute(Gi)===null&&z.keepOriginalSource){var r=ke.createComment(HR(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Wg(n).indexOf(z.replacementClass))return ec.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===z.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Al(a)}).join(`
`);n.setAttribute(Gi,""),n.innerHTML=o}};function r_(t){t()}function nI(t,e){var n=typeof e=="function"?e:Zu;if(t.length===0)n();else{var r=r_;z.mutateApproach===G2&&(r=ai.requestAnimationFrame||r_),r(function(){var i=UR(),s=Xg.begin("mutate");t.map(i),s(),n()})}}var Jg=!1;function rI(){Jg=!0}function Yp(){Jg=!1}var Wc=null;function i_(t){if(K0&&z.observeMutations){var e=t.treeCallback,n=e===void 0?Zu:e,r=t.nodeCallback,i=r===void 0?Zu:r,s=t.pseudoElementsCallback,o=s===void 0?Zu:s,a=t.observeMutationsRoot,l=a===void 0?ke:a;Wc=new K0(function(u){if(!Jg){var c=li();Co(u).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!n_(f.addedNodes[0])&&(z.searchPseudoElements&&o(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&z.searchPseudoElements&&o(f.target.parentNode),f.type==="attributes"&&n_(f.target)&&~tR.indexOf(f.attributeName))if(f.attributeName==="class"&&FR(f.target)){var d=Hf(Wg(f.target)),p=d.prefix,v=d.iconName;f.target.setAttribute(zg,p||c),v&&f.target.setAttribute(Bg,v)}else jR(f.target)&&i(f.target)})}}),Sr&&Wc.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function WR(){Wc&&Wc.disconnect()}function qR(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function KR(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Hf(Wg(t));return i.prefix||(i.prefix=li()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=SR(i.prefix,t.innerText)||Gg(i.prefix,Bp(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function GR(t){var e=Co(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||Xa()):(e["aria-hidden"]="true",e.focusable="false")),e}function QR(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Mn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function s_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=KR(t),r=n.iconName,i=n.prefix,s=n.rest,o=GR(t),a=Wp("parseNodeAttributes",{},t),l=e.styleParser?qR(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Mn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var YR=_n.styles;function iI(t){var e=z.autoReplaceSvg==="nest"?s_(t,{styleParser:!1}):s_(t);return~e.extra.classes.indexOf(jT)?yr("generateLayersText",t,e):yr("generateSvgReplacementMutation",t,e)}var ui=new Set;Hg.map(function(t){ui.add("fa-".concat(t))});Object.keys(Ka[Te]).map(ui.add.bind(ui));Object.keys(Ka[Oe]).map(ui.add.bind(ui));ui=Sl(ui);function o_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Sr)return Promise.resolve();var n=ke.documentElement.classList,r=function(f){return n.add("".concat(G0,"-").concat(f))},i=function(f){return n.remove("".concat(G0,"-").concat(f))},s=z.autoFetchSvg?ui:Hg.map(function(c){return"fa-".concat(c)}).concat(Object.keys(YR));s.includes("fa")||s.push("fa");var o=[".".concat(jT,":not([").concat(Gi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Gi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Co(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=Xg.begin("onTree"),u=a.reduce(function(c,f){try{var d=iI(f);d&&c.push(d)}catch(p){FT||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,f){Promise.all(u).then(function(d){nI(d,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(d){l(),f(d)})})}function XR(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;iI(t).then(function(n){n&&nI([n],e)})}function JR(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:qp(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:qp(i||{})),t(r,M(M({},n),{},{mask:i}))}}var ZR=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?Mn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,f=n.title,d=f===void 0?null:f,p=n.titleId,v=p===void 0?null:p,w=n.classes,T=w===void 0?[]:w,g=n.attributes,h=g===void 0?{}:g,m=n.styles,E=m===void 0?{}:m;if(e){var I=e.prefix,x=e.iconName,k=e.icon;return Wf(M({type:"icon"},e),function(){return Qi("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(d?h["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(v||Xa()):(h["aria-hidden"]="true",h.focusable="false")),Yg({icons:{main:Kp(k),mask:l?Kp(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:I,iconName:x,transform:M(M({},Mn),i),symbol:o,title:d,maskId:c,titleId:v,extra:{attributes:h,styles:E,classes:T}})})}},eb={mixout:function(){return{icon:JR(ZR)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=o_,n.nodeCallback=XR,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?ke:r,s=n.callback,o=s===void 0?function(){}:s;return o_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,f=r.maskId,d=r.extra;return new Promise(function(p,v){Promise.all([Gp(i,a),c.iconName?Gp(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var T=jg(w,2),g=T[0],h=T[1];p([n,Yg({icons:{main:g,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:f,title:s,titleId:o,extra:d,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=zf(a);l.length>0&&(i.style=l);var u;return qg(o)&&(u=yr("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},tb={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Wf({type:"layer"},function(){Qi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Sl(s)).join(" ")},children:o}]})}}}},nb={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,f=c===void 0?{}:c;return Wf({type:"counter",content:n},function(){return Qi("beforeDOMElementCreation",{content:n,params:r}),LR({content:n.toString(),title:s,extra:{attributes:u,styles:f,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Sl(a))}})})}}}},rb={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?Mn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,f=c===void 0?{}:c,d=r.styles,p=d===void 0?{}:d;return Wf({type:"text",content:n},function(){return Qi("beforeDOMElementCreation",{content:n,params:r}),e_({content:n,transform:M(M({},Mn),s),title:a,extra:{attributes:f,styles:p,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Sl(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(VT){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,e_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},ib=new RegExp('"',"ug"),a_=[1105920,1112319];function sb(t){var e=t.replace(ib,""),n=vR(e,0),r=n>=a_[0]&&n<=a_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bp(i?e[0]:e),isSecondary:r||i}}function l_(t,e){var n="".concat(K2).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Co(t.children),o=s.filter(function(k){return k.getAttribute(zp)===e})[0],a=ai.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(J2),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var f=a.getPropertyValue("content"),d=~["Sharp"].indexOf(l[2])?Oe:Te,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ga[d][l[2].toLowerCase()]:Z2[d][u],v=sb(f),w=v.value,T=v.isSecondary,g=l[0].startsWith("FontAwesome"),h=Gg(p,w),m=h;if(g){var E=kR(w);E.iconName&&E.prefix&&(h=E.iconName,p=E.prefix)}if(h&&!T&&(!o||o.getAttribute(zg)!==p||o.getAttribute(Bg)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var I=QR(),x=I.extra;x.attributes[zp]=e,Gp(h,p).then(function(k){var V=Yg(M(M({},I),{},{icons:{main:k,mask:Qg()},prefix:p,iconName:m,extra:x,watchable:!0})),G=ke.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(G,t.firstChild):t.appendChild(G),G.outerHTML=V.map(function(H){return Al(H)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function ob(t){return Promise.all([l_(t,"::before"),l_(t,"::after")])}function ab(t){return t.parentNode!==document.head&&!~Q2.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(zp)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function u_(t){if(Sr)return new Promise(function(e,n){var r=Co(t.querySelectorAll("*")).filter(ab).map(ob),i=Xg.begin("searchPseudoElements");rI(),Promise.all(r).then(function(){i(),Yp(),e()}).catch(function(){i(),Yp(),n()})})}var lb={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=u_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?ke:r;z.searchPseudoElements&&u_(i)}}},c_=!1,ub={mixout:function(){return{dom:{unwatch:function(){rI(),c_=!0}}}},hooks:function(){return{bootstrap:function(){i_(Wp("mutationObserverCallbacks",{}))},noAuto:function(){WR()},watch:function(n){var r=n.observeMutationsRoot;c_?Yp():i_(Wp("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},f_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},cb={mixout:function(){return{parse:{transform:function(n){return f_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=f_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(l," ").concat(u," ").concat(c)},d={transform:"translate(".concat(o/2*-1," -256)")},p={outer:a,inner:f,path:d};return{tag:"g",attributes:M({},p.outer),children:[{tag:"g",attributes:M({},p.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),p.path)}]}]}}}},dh={x:0,y:0,width:"100%",height:"100%"};function d_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function fb(t){return t.tag==="g"?t.children:[t]}var db={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Hf(i.split(" ").map(function(o){return o.trim()})):Qg();return s.prefix||(s.prefix=li()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,f=o.width,d=o.icon,p=cR({transform:l,containerWidth:f,iconWidth:u}),v={tag:"rect",attributes:M(M({},dh),{},{fill:"white"})},w=c.children?{children:c.children.map(d_)}:{},T={tag:"g",attributes:M({},p.inner),children:[d_(M({tag:c.tag,attributes:M(M({},c.attributes),p.path)},w))]},g={tag:"g",attributes:M({},p.outer),children:[T]},h="mask-".concat(a||Xa()),m="clip-".concat(a||Xa()),E={tag:"mask",attributes:M(M({},dh),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,g]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:fb(d)},E]};return r.push(I,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},dh)}),{children:r,attributes:i}}}},hb={provides:function(e){var n=!1;ai.matchMedia&&(n=ai.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},pb={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},mb=[hR,eb,tb,nb,rb,lb,ub,cb,db,hb,pb];CR(mb,{mixoutsTo:tn});tn.noAuto;tn.config;tn.library;tn.dom;var Xp=tn.parse;tn.findIconDefinition;tn.toHtml;var gb=tn.icon;tn.layer;tn.text;tn.counter;var sI={exports:{}},yb="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vb=yb,_b=vb;function oI(){}function aI(){}aI.resetWarningCache=oI;var wb=function(){function t(r,i,s,o,a,l){if(l!==_b){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:aI,resetWarningCache:oI};return n.PropTypes=n,n};sI.exports=wb();var Eb=sI.exports;const re=aw(Eb);function h_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Br(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?h_(Object(n),!0).forEach(function(r){Ms(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):h_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function qc(t){"@babel/helpers - typeof";return qc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qc(t)}function Ms(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Tb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Ib(t,e){if(t==null)return{};var n=Tb(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Jp(t){return Sb(t)||kb(t)||Ab(t)||xb()}function Sb(t){if(Array.isArray(t))return Zp(t)}function kb(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ab(t,e){if(t){if(typeof t=="string")return Zp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zp(t,e)}}function Zp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function xb(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Cb(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,f=t.pulse,d=t.fixedWidth,p=t.inverse,v=t.border,w=t.listItem,T=t.flip,g=t.size,h=t.rotation,m=t.pull,E=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":f,"fa-fw":d,"fa-inverse":p,"fa-border":v,"fa-li":w,"fa-flip":T===!0,"fa-flip-horizontal":T==="horizontal"||T==="both","fa-flip-vertical":T==="vertical"||T==="both"},Ms(e,"fa-".concat(g),typeof g<"u"&&g!==null),Ms(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Ms(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Ms(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(I){return E[I]?I:null}).filter(function(I){return I})}function Pb(t){return t=t-0,t===t}function lI(t){return Pb(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Rb=["style"];function bb(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Nb(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=lI(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[bb(i)]=s:e[i]=s,e},{})}function uI(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return uI(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Nb(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[lI(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Ib(n,Rb);return i.attrs.style=Br(Br({},i.attrs.style),o),t.apply(void 0,[e.tag,Br(Br({},i.attrs),a)].concat(Jp(r)))}var cI=!1;try{cI=!0}catch{}function Ob(){if(!cI&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function p_(t){if(t&&qc(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xp.icon)return Xp.icon(t);if(t===null)return null;if(t&&qc(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function hh(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ms({},t,e):{}}var St=je.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=p_(n),c=hh("classes",[].concat(Jp(Cb(t)),Jp(s.split(" ")))),f=hh("transform",typeof t.transform=="string"?Xp.transform(t.transform):t.transform),d=hh("mask",p_(r)),p=gb(u,Br(Br(Br(Br({},c),f),d),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!p)return Ob("Could not find icon",u),null;var v=p.abstract,w={ref:e};return Object.keys(t).forEach(function(T){St.defaultProps.hasOwnProperty(T)||(w[T]=t[T])}),Db(v[0],w)});St.displayName="FontAwesomeIcon";St.propTypes={beat:re.bool,border:re.bool,beatFade:re.bool,bounce:re.bool,className:re.string,fade:re.bool,flash:re.bool,mask:re.oneOfType([re.object,re.array,re.string]),maskId:re.string,fixedWidth:re.bool,inverse:re.bool,flip:re.oneOf([!0,!1,"horizontal","vertical","both"]),icon:re.oneOfType([re.object,re.array,re.string]),listItem:re.bool,pull:re.oneOf(["right","left"]),pulse:re.bool,rotation:re.oneOf([0,90,180,270]),shake:re.bool,size:re.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:re.bool,spinPulse:re.bool,spinReverse:re.bool,symbol:re.oneOfType([re.bool,re.string]),title:re.string,titleId:re.string,transform:re.oneOfType([re.string,re.object]),swapOpacity:re.bool};St.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Db=uI.bind(null,je.createElement),Lb={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},Vb={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},Mb={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},$b={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},Fb={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},jb={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},Ub={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},zb={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Bb={prefix:"fas",iconName:"arrow-up-right-dots",icon:[576,512,[],"e4b7","M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},fI={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},Hb={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};let Wb={data:""},qb=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||Wb,Kb=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,Gb=/\/\*[^]*?\*\/|  +/g,m_=/\n+/g,Lr=(t,e)=>{let n="",r="",i="";for(let s in t){let o=t[s];s[0]=="@"?s[1]=="i"?n=s+" "+o+";":r+=s[1]=="f"?Lr(o,s):s+"{"+Lr(o,s[1]=="k"?"":e)+"}":typeof o=="object"?r+=Lr(o,e?e.replace(/([^,])+/g,a=>s.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):s):o!=null&&(s=/^--/.test(s)?s:s.replace(/[A-Z]/g,"-$&").toLowerCase(),i+=Lr.p?Lr.p(s,o):s+":"+o+";")}return n+(e&&i?e+"{"+i+"}":i)+r},Jn={},dI=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+dI(t[n]);return e}return t},Qb=(t,e,n,r,i)=>{let s=dI(t),o=Jn[s]||(Jn[s]=(l=>{let u=0,c=11;for(;u<l.length;)c=101*c+l.charCodeAt(u++)>>>0;return"go"+c})(s));if(!Jn[o]){let l=s!==t?t:(u=>{let c,f,d=[{}];for(;c=Kb.exec(u.replace(Gb,""));)c[4]?d.shift():c[3]?(f=c[3].replace(m_," ").trim(),d.unshift(d[0][f]=d[0][f]||{})):d[0][c[1]]=c[2].replace(m_," ").trim();return d[0]})(t);Jn[o]=Lr(i?{["@keyframes "+o]:l}:l,n?"":"."+o)}let a=n&&Jn.g?Jn.g:null;return n&&(Jn.g=Jn[o]),((l,u,c,f)=>{f?u.data=u.data.replace(f,l):u.data.indexOf(l)===-1&&(u.data=c?l+u.data:u.data+l)})(Jn[o],e,r,a),o},Yb=(t,e,n)=>t.reduce((r,i,s)=>{let o=e[s];if(o&&o.call){let a=o(n),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=l?"."+l:a&&typeof a=="object"?a.props?"":Lr(a,""):a===!1?"":a}return r+i+(o??"")},"");function qf(t){let e=this||{},n=t.call?t(e.p):t;return Qb(n.unshift?n.raw?Yb(n,[].slice.call(arguments,1),e.p):n.reduce((r,i)=>Object.assign(r,i&&i.call?i(e.p):i),{}):n,qb(e.target),e.g,e.o,e.k)}let hI,em,tm;qf.bind({g:1});let vr=qf.bind({k:1});function Xb(t,e,n,r){Lr.p=e,hI=t,em=n,tm=r}function gi(t,e){let n=this||{};return function(){let r=arguments;function i(s,o){let a=Object.assign({},s),l=a.className||i.className;n.p=Object.assign({theme:em&&em()},a),n.o=/ *go\d+/.test(l),a.className=qf.apply(n,r)+(l?" "+l:""),e&&(a.ref=o);let u=t;return t[0]&&(u=a.as||t,delete a.as),tm&&u[0]&&tm(a),hI(u,a)}return e?e(i):i}}var Jb=t=>typeof t=="function",Kc=(t,e)=>Jb(t)?t(e):t,Zb=(()=>{let t=0;return()=>(++t).toString()})(),pI=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),eN=20,tc=new Map,tN=1e3,g_=t=>{if(tc.has(t))return;let e=setTimeout(()=>{tc.delete(t),ls({type:4,toastId:t})},tN);tc.set(t,e)},nN=t=>{let e=tc.get(t);e&&clearTimeout(e)},nm=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,eN)};case 1:return e.toast.id&&nN(e.toast.id),{...t,toasts:t.toasts.map(s=>s.id===e.toast.id?{...s,...e.toast}:s)};case 2:let{toast:n}=e;return t.toasts.find(s=>s.id===n.id)?nm(t,{type:1,toast:n}):nm(t,{type:0,toast:n});case 3:let{toastId:r}=e;return r?g_(r):t.toasts.forEach(s=>{g_(s.id)}),{...t,toasts:t.toasts.map(s=>s.id===r||r===void 0?{...s,visible:!1}:s)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(s=>s.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(s=>({...s,pauseDuration:s.pauseDuration+i}))}}},nc=[],rc={toasts:[],pausedAt:void 0},ls=t=>{rc=nm(rc,t),nc.forEach(e=>{e(rc)})},rN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},iN=(t={})=>{let[e,n]=C.useState(rc);C.useEffect(()=>(nc.push(n),()=>{let i=nc.indexOf(n);i>-1&&nc.splice(i,1)}),[e]);let r=e.toasts.map(i=>{var s,o;return{...t,...t[i.type],...i,duration:i.duration||((s=t[i.type])==null?void 0:s.duration)||(t==null?void 0:t.duration)||rN[i.type],style:{...t.style,...(o=t[i.type])==null?void 0:o.style,...i.style}}});return{...e,toasts:r}},sN=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||Zb()}),xl=t=>(e,n)=>{let r=sN(e,t,n);return ls({type:2,toast:r}),r.id},rt=(t,e)=>xl("blank")(t,e);rt.error=xl("error");rt.success=xl("success");rt.loading=xl("loading");rt.custom=xl("custom");rt.dismiss=t=>{ls({type:3,toastId:t})};rt.remove=t=>ls({type:4,toastId:t});rt.promise=(t,e,n)=>{let r=rt.loading(e.loading,{...n,...n==null?void 0:n.loading});return t.then(i=>(rt.success(Kc(e.success,i),{id:r,...n,...n==null?void 0:n.success}),i)).catch(i=>{rt.error(Kc(e.error,i),{id:r,...n,...n==null?void 0:n.error})}),t};var oN=(t,e)=>{ls({type:1,toast:{id:t,height:e}})},aN=()=>{ls({type:5,time:Date.now()})},lN=t=>{let{toasts:e,pausedAt:n}=iN(t);C.useEffect(()=>{if(n)return;let s=Date.now(),o=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(s-a.createdAt);if(l<0){a.visible&&rt.dismiss(a.id);return}return setTimeout(()=>rt.dismiss(a.id),l)});return()=>{o.forEach(a=>a&&clearTimeout(a))}},[e,n]);let r=C.useCallback(()=>{n&&ls({type:6,time:Date.now()})},[n]),i=C.useCallback((s,o)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:u}=o||{},c=e.filter(p=>(p.position||u)===(s.position||u)&&p.height),f=c.findIndex(p=>p.id===s.id),d=c.filter((p,v)=>v<f&&p.visible).length;return c.filter(p=>p.visible).slice(...a?[d+1]:[0,d]).reduce((p,v)=>p+(v.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:oN,startPause:aN,endPause:r,calculateOffset:i}}},uN=vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,cN=vr`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,fN=vr`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,dN=gi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${uN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${fN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,hN=vr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pN=gi("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${hN} 1s linear infinite;
`,mN=vr`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,gN=vr`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,yN=gi("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${gN} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,vN=gi("div")`
  position: absolute;
`,_N=gi("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,wN=vr`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,EN=gi("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${wN} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,TN=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?C.createElement(EN,null,e):e:n==="blank"?null:C.createElement(_N,null,C.createElement(pN,{...r}),n!=="loading"&&C.createElement(vN,null,n==="error"?C.createElement(dN,{...r}):C.createElement(yN,{...r})))},IN=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,SN=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,kN="0%{opacity:0;} 100%{opacity:1;}",AN="0%{opacity:1;} 100%{opacity:0;}",xN=gi("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,CN=gi("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,PN=(t,e)=>{let n=t.includes("top")?1:-1,[r,i]=pI()?[kN,AN]:[IN(n),SN(n)];return{animation:e?`${vr(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${vr(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},RN=C.memo(({toast:t,position:e,style:n,children:r})=>{let i=t.height?PN(t.position||e||"top-center",t.visible):{opacity:0},s=C.createElement(TN,{toast:t}),o=C.createElement(CN,{...t.ariaProps},Kc(t.message,t));return C.createElement(xN,{className:t.className,style:{...i,...n,...t.style}},typeof r=="function"?r({icon:s,message:o}):C.createElement(C.Fragment,null,s,o))});Xb(C.createElement);var bN=({id:t,className:e,style:n,onHeightUpdate:r,children:i})=>{let s=C.useCallback(o=>{if(o){let a=()=>{let l=o.getBoundingClientRect().height;r(t,l)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return C.createElement("div",{ref:s,className:e,style:n},i)},NN=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},i=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:pI()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...i}},ON=qf`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,xu=16,DN=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:i,containerStyle:s,containerClassName:o})=>{let{toasts:a,handlers:l}=lN(n);return C.createElement("div",{style:{position:"fixed",zIndex:9999,top:xu,left:xu,right:xu,bottom:xu,pointerEvents:"none",...s},className:o,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(u=>{let c=u.position||e,f=l.calculateOffset(u,{reverseOrder:t,gutter:r,defaultPosition:e}),d=NN(c,f);return C.createElement(bN,{id:u.id,key:u.id,onHeightUpdate:l.updateHeight,className:u.visible?ON:"",style:d},u.type==="custom"?Kc(u.message,u):i?i(u):C.createElement(RN,{toast:u,position:c}))}))},$n=rt,y_={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},LN=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gI={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,f=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;l||(p=64,o||(d=64)),r.push(n[c],n[f],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mI(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||f==null)throw new VN;const d=s<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),f!==64){const v=u<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class VN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const MN=function(t){const e=mI(t);return gI.encodeByteArray(e,!0)},Gc=function(t){return MN(t).replace(/\./g,"")},yI=function(t){try{return gI.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $N(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FN=()=>$N().__FIREBASE_DEFAULTS__,jN=()=>{if(typeof process>"u"||typeof y_>"u")return;const t=y_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UN=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yI(t[1]);return e&&JSON.parse(e)},Zg=()=>{try{return FN()||jN()||UN()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vI=t=>{var e,n;return(n=(e=Zg())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zN=t=>{const e=vI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},_I=()=>{var t;return(t=Zg())===null||t===void 0?void 0:t.config},wI=t=>{var e;return(e=Zg())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Gc(JSON.stringify(n)),Gc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function WN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function qN(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GN(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QN(){try{return typeof indexedDB=="object"}catch{return!1}}function YN(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN="FirebaseError";class kr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=XN,Object.setPrototypeOf(this,kr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Cl.prototype.create)}}class Cl{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?JN(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new kr(i,a,r)}}function JN(t,e){return t.replace(ZN,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ZN=/\{\$([^}]+)}/g;function e4(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Qc(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(v_(s)&&v_(o)){if(!Qc(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function v_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ta(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function na(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function t4(t,e){const n=new n4(t,e);return n.subscribe.bind(n)}class n4{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");r4(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=ph),i.error===void 0&&(i.error=ph),i.complete===void 0&&(i.complete=ph);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function r4(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ph(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){return t&&t._delegate?t._delegate:t}class Yi{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ai="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i4{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new BN;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(o4(e))try{this.getOrInitializeService({instanceIdentifier:Ai})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ai){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ai){return this.instances.has(e)}getOptions(e=Ai){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:s4(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ai){return this.component?this.component.multipleInstances?e:Ai:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function s4(t){return t===Ai?void 0:t}function o4(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a4{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i4(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const l4={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},u4=ae.INFO,c4={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},f4=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=c4[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ey{constructor(e){this.name=e,this._logLevel=u4,this._logHandler=f4,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l4[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const d4=(t,e)=>e.some(n=>t instanceof n);let __,w_;function h4(){return __||(__=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function p4(){return w_||(w_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const EI=new WeakMap,rm=new WeakMap,TI=new WeakMap,mh=new WeakMap,ty=new WeakMap;function m4(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ti(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&EI.set(n,t)}).catch(()=>{}),ty.set(e,t),e}function g4(t){if(rm.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});rm.set(t,e)}let im={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rm.get(t);if(e==="objectStoreNames")return t.objectStoreNames||TI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ti(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y4(t){im=t(im)}function v4(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(gh(this),e,...n);return TI.set(r,e.sort?e.sort():[e]),ti(r)}:p4().includes(t)?function(...e){return t.apply(gh(this),e),ti(EI.get(this))}:function(...e){return ti(t.apply(gh(this),e))}}function _4(t){return typeof t=="function"?v4(t):(t instanceof IDBTransaction&&g4(t),d4(t,h4())?new Proxy(t,im):t)}function ti(t){if(t instanceof IDBRequest)return m4(t);if(mh.has(t))return mh.get(t);const e=_4(t);return e!==t&&(mh.set(t,e),ty.set(e,t)),e}const gh=t=>ty.get(t);function w4(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ti(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ti(o.result),l.oldVersion,l.newVersion,ti(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const E4=["get","getKey","getAll","getAllKeys","count"],T4=["put","add","delete","clear"],yh=new Map;function E_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(yh.get(e))return yh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=T4.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||E4.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return yh.set(e,s),s}y4(t=>({...t,get:(e,n,r)=>E_(e,n)||t.get(e,n,r),has:(e,n)=>!!E_(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I4{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(S4(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function S4(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sm="@firebase/app",T_="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi=new ey("@firebase/app"),k4="@firebase/app-compat",A4="@firebase/analytics-compat",x4="@firebase/analytics",C4="@firebase/app-check-compat",P4="@firebase/app-check",R4="@firebase/auth",b4="@firebase/auth-compat",N4="@firebase/database",O4="@firebase/database-compat",D4="@firebase/functions",L4="@firebase/functions-compat",V4="@firebase/installations",M4="@firebase/installations-compat",$4="@firebase/messaging",F4="@firebase/messaging-compat",j4="@firebase/performance",U4="@firebase/performance-compat",z4="@firebase/remote-config",B4="@firebase/remote-config-compat",H4="@firebase/storage",W4="@firebase/storage-compat",q4="@firebase/firestore",K4="@firebase/firestore-compat",G4="firebase",Q4="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="[DEFAULT]",Y4={[sm]:"fire-core",[k4]:"fire-core-compat",[x4]:"fire-analytics",[A4]:"fire-analytics-compat",[P4]:"fire-app-check",[C4]:"fire-app-check-compat",[R4]:"fire-auth",[b4]:"fire-auth-compat",[N4]:"fire-rtdb",[O4]:"fire-rtdb-compat",[D4]:"fire-fn",[L4]:"fire-fn-compat",[V4]:"fire-iid",[M4]:"fire-iid-compat",[$4]:"fire-fcm",[F4]:"fire-fcm-compat",[j4]:"fire-perf",[U4]:"fire-perf-compat",[z4]:"fire-rc",[B4]:"fire-rc-compat",[H4]:"fire-gcs",[W4]:"fire-gcs-compat",[q4]:"fire-fst",[K4]:"fire-fst-compat","fire-js":"fire-js",[G4]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc=new Map,am=new Map;function X4(t,e){try{t.container.addComponent(e)}catch(n){Xi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lo(t){const e=t.name;if(am.has(e))return Xi.debug(`There were multiple attempts to register component ${e}.`),!1;am.set(e,t);for(const n of Yc.values())X4(n,t);return!0}function ny(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J4={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ni=new Cl("app","Firebase",J4);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z4{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ni.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Po=Q4;function II(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:om,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ni.create("bad-app-name",{appName:String(i)});if(n||(n=_I()),!n)throw ni.create("no-options");const s=Yc.get(i);if(s){if(Qc(n,s.options)&&Qc(r,s.config))return s;throw ni.create("duplicate-app",{appName:i})}const o=new a4(i);for(const l of am.values())o.addComponent(l);const a=new Z4(n,r,o);return Yc.set(i,a),a}function SI(t=om){const e=Yc.get(t);if(!e&&t===om&&_I())return II();if(!e)throw ni.create("no-app",{appName:t});return e}function ri(t,e,n){var r;let i=(r=Y4[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xi.warn(a.join(" "));return}lo(new Yi(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e3="firebase-heartbeat-database",t3=1,Ja="firebase-heartbeat-store";let vh=null;function kI(){return vh||(vh=w4(e3,t3,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ja)}}}).catch(t=>{throw ni.create("idb-open",{originalErrorMessage:t.message})})),vh}async function n3(t){try{return await(await kI()).transaction(Ja).objectStore(Ja).get(AI(t))}catch(e){if(e instanceof kr)Xi.warn(e.message);else{const n=ni.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xi.warn(n.message)}}}async function I_(t,e){try{const r=(await kI()).transaction(Ja,"readwrite");await r.objectStore(Ja).put(e,AI(t)),await r.done}catch(n){if(n instanceof kr)Xi.warn(n.message);else{const r=ni.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Xi.warn(r.message)}}}function AI(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r3=1024,i3=30*24*60*60*1e3;class s3{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a3(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=S_();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=i3}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=S_(),{heartbeatsToSend:r,unsentEntries:i}=o3(this._heartbeatsCache.heartbeats),s=Gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function S_(){return new Date().toISOString().substring(0,10)}function o3(t,e=r3){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),k_(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),k_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a3{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return QN()?YN().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n3(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return I_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function k_(t){return Gc(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l3(t){lo(new Yi("platform-logger",e=>new I4(e),"PRIVATE")),lo(new Yi("heartbeat",e=>new s3(e),"PRIVATE")),ri(sm,T_,t),ri(sm,T_,"esm2017"),ri("fire-js","")}l3("");var u3="firebase",c3="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ri(u3,c3,"app");function ry(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f3=xI,CI=new Cl("auth","Firebase",xI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new ey("@firebase/auth");function d3(t,...e){Xc.logLevel<=ae.WARN&&Xc.warn(`Auth (${Po}): ${t}`,...e)}function ic(t,...e){Xc.logLevel<=ae.ERROR&&Xc.error(`Auth (${Po}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sn(t,...e){throw iy(t,...e)}function Hn(t,...e){return iy(t,...e)}function h3(t,e,n){const r=Object.assign(Object.assign({},f3()),{[e]:n});return new Cl("auth","Firebase",r).create(e,{appName:t.name})}function iy(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return CI.create(t,...e)}function Y(t,e,...n){if(!t)throw iy(e,...n)}function ar(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ic(e),new Error(e)}function _r(t,e){t||ar(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function p3(){return A_()==="http:"||A_()==="https:"}function A_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p3()||qN()||"connection"in navigator)?navigator.onLine:!0}function g3(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e,n){this.shortDelay=e,this.longDelay=n,_r(n>e,"Short delay should be less than long delay!"),this.isMobile=WN()||KN()}get(){return m3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e){_r(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ar("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ar("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ar("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v3=new Rl(3e4,6e4);function yi(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vi(t,e,n,r,i={}){return RI(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pl(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),PI.fetch()(bI(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function RI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},y3),e);try{const i=new w3(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Cu(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cu(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Cu(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Cu(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw h3(t,c,u);Sn(t,c)}}catch(i){if(i instanceof kr)throw i;Sn(t,"network-request-failed",{message:String(i)})}}async function bl(t,e,n,r,i={}){const s=await vi(t,e,n,r,i);return"mfaPendingCredential"in s&&Sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bI(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?sy(t.config,i):`${t.config.apiScheme}://${i}`}function _3(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class w3{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Hn(this.auth,"network-request-failed")),v3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Cu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Hn(t,e,r);return i.customData._tokenResponse=n,i}function x_(t){return t!==void 0&&t.enterprise!==void 0}class E3{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return _3(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function T3(t,e){return vi(t,"GET","/v2/recaptchaConfig",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I3(t,e){return vi(t,"POST","/v1/accounts:delete",e)}async function S3(t,e){return vi(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function k3(t,e=!1){const n=Pt(t),r=await n.getIdToken(e),i=oy(r);Y(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_a(_h(i.auth_time)),issuedAtTime:_a(_h(i.iat)),expirationTime:_a(_h(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function _h(t){return Number(t)*1e3}function oy(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ic("JWT malformed, contained fewer than 3 sections"),null;try{const i=yI(n);return i?JSON.parse(i):(ic("Failed to decode base64 JWT payload"),null)}catch(i){return ic("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function A3(t){const e=oy(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kr&&x3(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function x3({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C3{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_a(this.lastLoginAt),this.creationTime=_a(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Za(t,S3(n,{idToken:r}));Y(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?b3(s.providerUserInfo):[],a=R3(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new NI(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,f)}async function P3(t){const e=Pt(t);await Jc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R3(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function b3(t){return t.map(e=>{var{providerId:n}=e,r=ry(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N3(t,e){const n=await RI(t,{},async()=>{const r=Pl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bI(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",PI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function O3(t,e){return vi(t,"POST","/v2/accounts:revokeToken",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):A3(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Y(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await N3(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new el;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Y(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Y(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new el,this.toJSON())}_performRefresh(){return ar("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cr(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=ry(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new C3(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new NI(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Za(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return k3(this,e)}reload(){return P3(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Za(this,I3(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,p=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,g=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:E,isAnonymous:I,providerData:x,stsTokenManager:k}=n;Y(m&&k,e,"internal-error");const V=el.fromJSON(this.name,k);Y(typeof m=="string",e,"internal-error"),Cr(f,e.name),Cr(d,e.name),Y(typeof E=="boolean",e,"internal-error"),Y(typeof I=="boolean",e,"internal-error"),Cr(p,e.name),Cr(v,e.name),Cr(w,e.name),Cr(T,e.name),Cr(g,e.name),Cr(h,e.name);const G=new Fi({uid:m,auth:e,email:d,emailVerified:E,displayName:f,isAnonymous:I,photoURL:v,phoneNumber:p,tenantId:w,stsTokenManager:V,createdAt:g,lastLoginAt:h});return x&&Array.isArray(x)&&(G.providerData=x.map(H=>Object.assign({},H))),T&&(G._redirectEventId=T),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new el;i.updateFromServerResponse(n);const s=new Fi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Jc(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_=new Map;function lr(t){_r(t instanceof Function,"Expected a class definition");let e=C_.get(t);return e?(_r(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,C_.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}OI.type="NONE";const P_=OI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e,n){return`firebase:${t}:${e}:${n}`}class Qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=sc(this.userKey,i.apiKey,s),this.fullPersistenceKey=sc("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qs(lr(P_),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||lr(P_);const o=sc(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const f=Fi._fromJSON(e,c);u!==s&&(a=f),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qs(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qs(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(DI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($I(e))return"Blackberry";if(FI(e))return"Webos";if(ay(e))return"Safari";if((e.includes("chrome/")||LI(e))&&!e.includes("edge/"))return"Chrome";if(MI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function DI(t=Ct()){return/firefox\//i.test(t)}function ay(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function LI(t=Ct()){return/crios\//i.test(t)}function VI(t=Ct()){return/iemobile/i.test(t)}function MI(t=Ct()){return/android/i.test(t)}function $I(t=Ct()){return/blackberry/i.test(t)}function FI(t=Ct()){return/webos/i.test(t)}function Kf(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function D3(t=Ct()){var e;return Kf(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function L3(){return GN()&&document.documentMode===10}function jI(t=Ct()){return Kf(t)||MI(t)||FI(t)||$I(t)||/windows phone/i.test(t)||VI(t)}function V3(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(t,e=[]){let n;switch(t){case"Browser":n=R_(Ct());break;case"Worker":n=`${R_(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Po}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M3{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $3(t,e={}){return vi(t,"GET","/v2/passwordPolicy",yi(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F3=6;class j3{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:F3,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U3{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new b_(this),this.idTokenSubscription=new b_(this),this.beforeStateQueue=new M3(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=CI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=lr(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=g3()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pt(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(lr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await $3(this),n=new j3(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Cl("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await O3(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&lr(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Qs.create(this,[lr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=UI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d3(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function us(t){return Pt(t)}class b_{constructor(e){this.auth=e,this.observer=null,this.addObserver=t4(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z3(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zI(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Hn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",z3().appendChild(r)})}function B3(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const H3="https://www.google.com/recaptcha/enterprise.js?render=",W3="recaptcha-enterprise",q3="NO_RECAPTCHA";class K3{constructor(e){this.type=W3,this.auth=us(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{T3(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new E3(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;x_(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(q3)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&x_(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}zI(H3+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function N_(t,e,n,r=!1){const i=new K3(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function um(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await N_(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await N_(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G3(t,e){const n=ny(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Qc(s,e??{}))return i;Sn(i,"already-initialized")}return n.initialize({options:e})}function Q3(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(lr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Y3(t,e,n){const r=us(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=BI(e),{host:o,port:a}=X3(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||J3()}function BI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function X3(t){const e=BI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:O_(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:O_(o)}}}function O_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function J3(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ar("not implemented")}_getIdTokenResponse(e){return ar("not implemented")}_linkToIdToken(e,n){return ar("not implemented")}_getReauthenticationResolver(e){return ar("not implemented")}}async function Z3(t,e){return vi(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(t,e){return bl(t,"POST","/v1/accounts:signInWithPassword",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}async function nO(t,e){return bl(t,"POST","/v1/accounts:signInWithEmailLink",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl extends ly{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new tl(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new tl(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(e,n,"signInWithPassword",eO);case"emailLink":return tO(e,{email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return um(e,r,"signUpPassword",Z3);case"emailLink":return nO(e,{idToken:n,email:this._email,oobCode:this._password});default:Sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e){return bl(t,"POST","/v1/accounts:signInWithIdp",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rO="http://localhost";class Ji extends ly{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ji(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=ry(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ji(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ys(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ys(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ys(e,n)}buildRequest(){const e={requestUri:rO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pl(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sO(t){const e=ta(na(t)).link,n=e?ta(na(e)).deep_link_id:null,r=ta(na(t)).deep_link_id;return(r?ta(na(r)).link:null)||r||n||e||t}class uy{constructor(e){var n,r,i,s,o,a;const l=ta(na(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,f=iO((i=l.mode)!==null&&i!==void 0?i:null);Y(u&&c&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=sO(e);try{return new uy(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(){this.providerId=Ro.PROVIDER_ID}static credential(e,n){return tl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=uy.parseLink(n);return Y(r,"argument-error"),tl._fromEmailAndCode(e,r.code,r.tenantId)}}Ro.PROVIDER_ID="password";Ro.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ro.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl extends HI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr extends Nl{constructor(){super("facebook.com")}static credential(e){return Ji._fromParams({providerId:Vr.PROVIDER_ID,signInMethod:Vr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vr.credentialFromTaggedObject(e)}static credentialFromError(e){return Vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vr.credential(e.oauthAccessToken)}catch{return null}}}Vr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends Nl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ji._fromParams({providerId:Mr.PROVIDER_ID,signInMethod:Mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mr.credentialFromTaggedObject(e)}static credentialFromError(e){return Mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mr.credential(n,r)}catch{return null}}}Mr.GOOGLE_SIGN_IN_METHOD="google.com";Mr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends Nl{constructor(){super("github.com")}static credential(e){return Ji._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $r.credential(e.oauthAccessToken)}catch{return null}}}$r.GITHUB_SIGN_IN_METHOD="github.com";$r.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Nl{constructor(){super("twitter.com")}static credential(e,n){return Ji._fromParams({providerId:Fr.PROVIDER_ID,signInMethod:Fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fr.credentialFromTaggedObject(e)}static credentialFromError(e){return Fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fr.credential(n,r)}catch{return null}}}Fr.TWITTER_SIGN_IN_METHOD="twitter.com";Fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(t,e){return bl(t,"POST","/v1/accounts:signUp",yi(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Fi._fromIdTokenResponse(e,r,i),o=D_(r);return new Zi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=D_(r);return new Zi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function D_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc extends kr{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Zc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Zc(e,n,r,i)}}function WI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Zc._fromErrorAndOperation(t,s,e,r):s})}async function aO(t,e,n=!1){const r=await Za(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Zi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Za(t,WI(r,i,e,t),n);Y(s.idToken,r,"internal-error");const o=oy(s.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),Zi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qI(t,e,n=!1){const r="signIn",i=await WI(t,r,e),s=await Zi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uO(t,e){return qI(us(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KI(t){const e=us(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function cO(t,e,n){const r=us(t),o=await um(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",oO).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&KI(t),l}),a=await Zi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function fO(t,e,n){return uO(Pt(t),Ro.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&KI(t),r})}function dO(t,e,n,r){return Pt(t).onIdTokenChanged(e,n,r)}function hO(t,e,n){return Pt(t).beforeAuthStateChanged(e,n)}function pO(t,e,n,r){return Pt(t).onAuthStateChanged(e,n,r)}function mO(t){return Pt(t).signOut()}const ef="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ef,"1"),this.storage.removeItem(ef),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gO(){const t=Ct();return ay(t)||Kf(t)}const yO=1e3,vO=10;class QI extends GI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gO()&&V3(),this.fallbackToPolling=jI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);L3()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}QI.type="LOCAL";const _O=QI;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YI extends GI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}YI.type="SESSION";const XI=YI;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Gf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await wO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cy(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=cy("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const d=f;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wn(){return window}function TO(t){Wn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JI(){return typeof Wn().WorkerGlobalScope<"u"&&typeof Wn().importScripts=="function"}async function IO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kO(){return JI()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI="firebaseLocalStorageDb",AO=1,tf="firebaseLocalStorage",eS="fbase_key";class Ol{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qf(t,e){return t.transaction([tf],e?"readwrite":"readonly").objectStore(tf)}function xO(){const t=indexedDB.deleteDatabase(ZI);return new Ol(t).toPromise()}function cm(){const t=indexedDB.open(ZI,AO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(tf,{keyPath:eS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(tf)?e(r):(r.close(),await xO(),e(await cm()))})})}async function L_(t,e,n){const r=Qf(t,!0).put({[eS]:e,value:n});return new Ol(r).toPromise()}async function CO(t,e){const n=Qf(t,!1).get(e),r=await new Ol(n).toPromise();return r===void 0?null:r.value}function V_(t,e){const n=Qf(t,!0).delete(e);return new Ol(n).toPromise()}const PO=800,RO=3;class tS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>RO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return JI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gf._getInstance(kO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await IO(),!this.activeServiceWorker)return;this.sender=new EO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cm();return await L_(e,ef,"1"),await V_(e,ef),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>L_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>CO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>V_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qf(i,!1).getAll();return new Ol(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}tS.type="LOCAL";const bO=tS;new Rl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NO(t,e){return e?lr(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy extends ly{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ys(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ys(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function OO(t){return qI(t.auth,new fy(t),t.bypassAuthState)}function DO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),lO(n,new fy(t),t.bypassAuthState)}async function LO(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),aO(n,new fy(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OO;case"linkViaPopup":case"linkViaRedirect":return LO;case"reauthViaPopup":case"reauthViaRedirect":return DO;default:Sn(this.auth,"internal-error")}}resolve(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_r(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=new Rl(2e3,1e4);class $s extends nS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){_r(this.filter.length===1,"Popup operations only handle one event");const e=cy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,VO.get())};e()}}$s.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO="pendingRedirect",oc=new Map;class $O extends nS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=oc.get(this.auth._key());if(!e){try{const r=await FO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}oc.set(this.auth._key(),e)}return this.bypassAuthState||oc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FO(t,e){const n=zO(e),r=UO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jO(t,e){oc.set(t._key(),e)}function UO(t){return lr(t._redirectPersistence)}function zO(t){return sc(MO,t.config.apiKey,t.name)}async function BO(t,e,n=!1){const r=us(t),i=NO(r,e),o=await new $O(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=10*60*1e3;class WO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!rS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Hn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HO&&this.cachedEventUids.clear(),this.cachedEventUids.has(M_(e))}saveEventToCache(e){this.cachedEventUids.add(M_(e)),this.lastProcessedEventTime=Date.now()}}function M_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function rS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return rS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(t,e={}){return vi(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QO=/^https?/;async function YO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KO(t);for(const n of e)try{if(XO(n))return}catch{}Sn(t,"unauthorized-domain")}function XO(t){const e=lm(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QO.test(n))return!1;if(GO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=new Rl(3e4,6e4);function $_(){const t=Wn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZO(t){return new Promise((e,n)=>{var r,i,s;function o(){$_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{$_(),n(Hn(t,"network-request-failed"))},timeout:JO.get()})}if(!((i=(r=Wn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wn().gapi)===null||s===void 0)&&s.load)o();else{const a=B3("iframefcb");return Wn()[a]=()=>{gapi.load?o():n(Hn(t,"network-request-failed"))},zI(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ac=null,e})}let ac=null;function eD(t){return ac=ac||ZO(t),ac}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tD=new Rl(5e3,15e3),nD="__/auth/iframe",rD="emulator/auth/iframe",iD={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},sD=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oD(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?sy(e,rD):`https://${t.config.authDomain}/${nD}`,r={apiKey:e.apiKey,appName:t.name,v:Po},i=sD.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Pl(r).slice(1)}`}async function aD(t){const e=await eD(t),n=Wn().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:oD(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:iD,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Hn(t,"network-request-failed"),a=Wn().setTimeout(()=>{s(o)},tD.get());function l(){Wn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lD={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},uD=500,cD=600,fD="_blank",dD="http://localhost";class F_{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function hD(t,e,n,r=uD,i=cD){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lD),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ct().toLowerCase();n&&(a=LI(u)?fD:n),DI(u)&&(e=e||dD,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[p,v])=>`${d}${p}=${v},`,"");if(D3(u)&&a!=="_self")return pD(e||"",a),new F_(null);const f=window.open(e||"",a,c);Y(f,t,"popup-blocked");try{f.focus()}catch{}return new F_(f)}function pD(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mD="__/auth/handler",gD="emulator/auth/handler",yD=encodeURIComponent("fac");async function j_(t,e,n,r,i,s){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Po,eventId:i};if(e instanceof HI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",e4(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,f]of Object.entries(s||{}))o[c]=f}if(e instanceof Nl){const c=e.getScopes().filter(f=>f!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${yD}=${encodeURIComponent(l)}`:"";return`${vD(t)}?${Pl(a).slice(1)}${u}`}function vD({config:t}){return t.emulator?sy(t,gD):`https://${t.authDomain}/${mD}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="webStorageSupport";class _D{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=XI,this._completeRedirectFn=BO,this._overrideRedirectResult=jO}async _openPopup(e,n,r,i){var s;_r((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await j_(e,n,r,lm(),i);return hD(e,o,cy())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await j_(e,n,r,lm(),i);return TO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_r(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aD(e),r=new WO(e);return n.register("authEvent",i=>(Y(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(wh,{type:wh},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wh];o!==void 0&&n(!!o),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jI()||ay()||Kf()}}const wD=_D;var U_="@firebase/auth",z_="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ED{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ID(t){lo(new Yi("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:UI(t)},u=new U3(r,i,s,l);return Q3(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),lo(new Yi("auth-internal",e=>{const n=us(e.getProvider("auth").getImmediate());return(r=>new ED(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ri(U_,z_,TD(t)),ri(U_,z_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SD=5*60,kD=wI("authIdTokenMaxAge")||SD;let B_=null;const AD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>kD)return;const i=n==null?void 0:n.token;B_!==i&&(B_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function xD(t=SI()){const e=ny(t,"auth");if(e.isInitialized())return e.getImmediate();const n=G3(t,{popupRedirectResolver:wD,persistence:[bO,_O,XI]}),r=wI("authTokenSyncURL");if(r){const s=AD(r);hO(n,s,()=>s(n.currentUser)),dO(n,o=>s(o))}const i=vI("auth");return i&&Y3(n,`http://${i}`),n}ID("Browser");var CD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,dy=dy||{},X=CD||self;function Yf(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Dl(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function PD(t){return Object.prototype.hasOwnProperty.call(t,Eh)&&t[Eh]||(t[Eh]=++RD)}var Eh="closure_uid_"+(1e9*Math.random()>>>0),RD=0;function bD(t,e,n){return t.call.apply(t.bind,arguments)}function ND(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=bD:kt=ND,kt.apply(null,arguments)}function Pu(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function _i(){this.s=this.s,this.o=this.o}var OD=0;_i.prototype.s=!1;_i.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),OD!=0)&&PD(this)};_i.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const iS=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function H_(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Yf(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function At(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}At.prototype.h=function(){this.defaultPrevented=!0};var DD=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function nl(t){return/^[\s\xa0]*$/.test(t)}function Xf(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Vn(t){return Xf().indexOf(t)!=-1}function py(t){return py[" "](t),t}py[" "]=function(){};function LD(t,e){var n=x5;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var VD=Vn("Opera"),uo=Vn("Trident")||Vn("MSIE"),sS=Vn("Edge"),fm=sS||uo,oS=Vn("Gecko")&&!(Xf().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge"))&&!(Vn("Trident")||Vn("MSIE"))&&!Vn("Edge"),MD=Xf().toLowerCase().indexOf("webkit")!=-1&&!Vn("Edge");function aS(){var t=X.document;return t?t.documentMode:void 0}var dm;e:{var Th="",Ih=function(){var t=Xf();if(oS)return/rv:([^\);]+)(\)|;)/.exec(t);if(sS)return/Edge\/([\d\.]+)/.exec(t);if(uo)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(MD)return/WebKit\/(\S+)/.exec(t);if(VD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ih&&(Th=Ih?Ih[1]:""),uo){var Sh=aS();if(Sh!=null&&Sh>parseFloat(Th)){dm=String(Sh);break e}}dm=Th}var hm;if(X.document&&uo){var W_=aS();hm=W_||parseInt(dm,10)||void 0}else hm=void 0;var $D=hm;function rl(t,e){if(At.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(oS){e:{try{py(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:FD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&rl.$.h.call(this)}}ot(rl,At);var FD={2:"touch",3:"pen",4:"mouse"};rl.prototype.h=function(){rl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ll="closure_listenable_"+(1e6*Math.random()|0),jD=0;function UD(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++jD,this.fa=this.ia=!1}function Jf(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function my(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function zD(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function lS(t){const e={};for(const n in t)e[n]=t[n];return e}const q_="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uS(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<q_.length;s++)n=q_[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Zf(t){this.src=t,this.g={},this.h=0}Zf.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=mm(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new UD(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function pm(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=iS(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Jf(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function mm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var gy="closure_lm_"+(1e6*Math.random()|0),kh={};function cS(t,e,n,r,i){if(r&&r.once)return dS(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)cS(t,e[s],n,r,i);return null}return n=_y(n),t&&t[Ll]?t.O(e,n,Dl(r)?!!r.capture:!!r,i):fS(t,e,n,!1,r,i)}function fS(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Dl(i)?!!i.capture:!!i,a=vy(t);if(a||(t[gy]=a=new Zf(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=BD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)DD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(pS(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function BD(){function t(n){return e.call(t.src,t.listener,n)}const e=HD;return t}function dS(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dS(t,e[s],n,r,i);return null}return n=_y(n),t&&t[Ll]?t.P(e,n,Dl(r)?!!r.capture:!!r,i):fS(t,e,n,!0,r,i)}function hS(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)hS(t,e[s],n,r,i);else r=Dl(r)?!!r.capture:!!r,n=_y(n),t&&t[Ll]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=mm(s,n,r,i),-1<n&&(Jf(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=vy(t))&&(e=t.g[e.toString()],t=-1,e&&(t=mm(e,n,r,i)),(n=-1<t?e[t]:null)&&yy(n))}function yy(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ll])pm(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(pS(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vy(e))?(pm(n,t),n.h==0&&(n.src=null,e[gy]=null)):Jf(t)}}}function pS(t){return t in kh?kh[t]:kh[t]="on"+t}function HD(t,e){if(t.fa)t=!0;else{e=new rl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&yy(t),t=n.call(r,e)}return t}function vy(t){return t=t[gy],t instanceof Zf?t:null}var Ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function _y(t){return typeof t=="function"?t:(t[Ah]||(t[Ah]=function(e){return t.handleEvent(e)}),t[Ah])}function st(){_i.call(this),this.i=new Zf(this),this.S=this,this.J=null}ot(st,_i);st.prototype[Ll]=!0;st.prototype.removeEventListener=function(t,e,n,r){hS(this,t,e,n,r)};function ht(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new At(e,t);else if(e instanceof At)e.target=e.target||t;else{var i=e;e=new At(r,t),uS(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ru(o,r,!0,e)&&i}if(o=e.g=t,i=Ru(o,r,!0,e)&&i,i=Ru(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ru(o,r,!1,e)&&i}st.prototype.N=function(){if(st.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Jf(n[r]);delete t.g[e],t.h--}}this.J=null};st.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};st.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ru(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&pm(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var wy=X.JSON.stringify;class WD{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function qD(){var t=Ey;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class KD{constructor(){this.h=this.g=null}add(e,n){const r=mS.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var mS=new WD(()=>new GD,t=>t.reset());class GD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function QD(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function YD(t){X.setTimeout(()=>{throw t},0)}let il,sl=!1,Ey=new KD,gS=()=>{const t=X.Promise.resolve(void 0);il=()=>{t.then(XD)}};var XD=()=>{for(var t;t=qD();){try{t.h.call(t.g)}catch(n){YD(n)}var e=mS;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}sl=!1};function ed(t,e){st.call(this),this.h=t||1,this.g=e||X,this.j=kt(this.qb,this),this.l=Date.now()}ot(ed,st);D=ed.prototype;D.ga=!1;D.T=null;D.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),ht(this,"tick"),this.ga&&(Ty(this),this.start()))}};D.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ty(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}D.N=function(){ed.$.N.call(this),Ty(this),delete this.g};function Iy(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function yS(t){t.g=Iy(()=>{t.g=null,t.i&&(t.i=!1,yS(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class JD extends _i{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:yS(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ol(t){_i.call(this),this.h=t,this.g={}}ot(ol,_i);var K_=[];function vS(t,e,n,r){Array.isArray(n)||(n&&(K_[0]=n.toString()),n=K_);for(var i=0;i<n.length;i++){var s=cS(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function _S(t){my(t.g,function(e,n){this.g.hasOwnProperty(n)&&yy(e)},t),t.g={}}ol.prototype.N=function(){ol.$.N.call(this),_S(this)};ol.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function td(){this.g=!0}td.prototype.Ea=function(){this.g=!1};function ZD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var f=c.split("_");o=2<=f.length&&f[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function e5(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Fs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+n5(t,n)+(r?" "+r:"")})}function t5(t,e){t.info(function(){return"TIMEOUT: "+e})}td.prototype.info=function(){};function n5(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return wy(n)}catch{return e}}var cs={},G_=null;function nd(){return G_=G_||new st}cs.Ta="serverreachability";function wS(t){At.call(this,cs.Ta,t)}ot(wS,At);function al(t){const e=nd();ht(e,new wS(e))}cs.STAT_EVENT="statevent";function ES(t,e){At.call(this,cs.STAT_EVENT,t),this.stat=e}ot(ES,At);function Ot(t){const e=nd();ht(e,new ES(e,t))}cs.Ua="timingevent";function TS(t,e){At.call(this,cs.Ua,t),this.size=e}ot(TS,At);function Vl(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var rd={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},IS={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Sy(){}Sy.prototype.h=null;function Q_(t){return t.h||(t.h=t.i())}function SS(){}var Ml={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ky(){At.call(this,"d")}ot(ky,At);function Ay(){At.call(this,"c")}ot(Ay,At);var gm;function id(){}ot(id,Sy);id.prototype.g=function(){return new XMLHttpRequest};id.prototype.i=function(){return{}};gm=new id;function $l(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new ol(this),this.P=r5,t=fm?125:void 0,this.V=new ed(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new kS}function kS(){this.i=null,this.g="",this.h=!1}var r5=45e3,AS={},ym={};D=$l.prototype;D.setTimeout=function(t){this.P=t};function vm(t,e,n){t.L=1,t.A=od(wr(e)),t.u=n,t.S=!0,xS(t,null)}function xS(t,e){t.G=Date.now(),Fl(t),t.B=wr(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),LS(n.i,"t",r),t.o=0,n=t.l.J,t.h=new kS,t.g=nk(t.l,n?e:null,!t.u),0<t.O&&(t.M=new JD(kt(t.Pa,t,t.g),t.O)),vS(t.U,t.g,"readystatechange",t.nb),e=t.I?lS(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),al(),ZD(t.j,t.v,t.B,t.m,t.W,t.u)}D.nb=function(t){t=t.target;const e=this.M;e&&Fn(t)==3?e.l():this.Pa(t)};D.Pa=function(t){try{if(t==this.g)e:{const c=Fn(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>c)&&(c!=3||fm||this.g&&(this.h.h||this.g.ja()||Z_(this.g)))){this.J||c!=4||e==7||(e==8||0>=f?al(3):al(2)),sd(this);var n=this.g.da();this.ca=n;t:if(CS(this)){var r=Z_(this.g);t="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ni(this),wa(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,e5(this.j,this.v,this.B,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!nl(a)){var u=a;break t}}u=null}if(n=u)Fs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_m(this,n);else{this.i=!1,this.s=3,Ot(12),Ni(this),wa(this);break e}}this.S?(PS(this,c,o),fm&&this.i&&c==3&&(vS(this.U,this.V,"tick",this.mb),this.V.start())):(Fs(this.j,this.m,o,null),_m(this,o)),c==4&&Ni(this),this.i&&!this.J&&(c==4?JS(this.l,this):(this.i=!1,Fl(this)))}else S5(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Ot(12)):(this.s=0,Ot(13)),Ni(this),wa(this)}}}catch{}finally{}};function CS(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function PS(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if(i=i5(t,n),i==ym){e==4&&(t.s=4,Ot(14),r=!1),Fs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==AS){t.s=4,Ot(15),Fs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Fs(t.j,t.m,i,null),_m(t,i);CS(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Ot(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ny(e),e.M=!0,Ot(11))):(Fs(t.j,t.m,n,"[Invalid Chunked Response]"),Ni(t),wa(t))}D.mb=function(){if(this.g){var t=Fn(this.g),e=this.g.ja();this.o<e.length&&(sd(this),PS(this,t,e),this.i&&t!=4&&Fl(this))}};function i5(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?ym:(n=Number(e.substring(n,r)),isNaN(n)?AS:(r+=1,r+n>e.length?ym:(e=e.slice(r,r+n),t.o=r+n,e)))}D.cancel=function(){this.J=!0,Ni(this)};function Fl(t){t.Y=Date.now()+t.P,RS(t,t.P)}function RS(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Vl(kt(t.lb,t),e)}function sd(t){t.C&&(X.clearTimeout(t.C),t.C=null)}D.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(t5(this.j,this.B),this.L!=2&&(al(),Ot(17)),Ni(this),this.s=2,wa(this)):RS(this,this.Y-t)};function wa(t){t.l.H==0||t.J||JS(t.l,t)}function Ni(t){sd(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ty(t.V),_S(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function _m(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||wm(n.i,t))){if(!t.K&&wm(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)sf(n),cd(n);else break e;by(n),Ot(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Vl(kt(n.ib,n),6e3));if(1>=$S(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Oi(n,11)}else if((t.K||n.g==t)&&sf(n),!nl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const f=u[4];f!=null&&(n.Ga=f,n.l.info("SVER="+n.Ga));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const v=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.i;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xy(s,s.h),s.h=null))}if(r.F){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,Ie(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=tk(r,r.J?r.pa:null,r.Y),o.K){FS(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(sd(a),Fl(a)),r.g=o}else YS(r);0<n.j.length&&fd(n)}else u[0]!="stop"&&u[0]!="close"||Oi(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Oi(n,7):Ry(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}al(4)}catch{}}function s5(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Yf(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function o5(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Yf(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function bS(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Yf(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=o5(t),r=s5(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var NS=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function a5(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ji(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ji){this.h=t.h,nf(this,t.j),this.s=t.s,this.g=t.g,rf(this,t.m),this.l=t.l;var e=t.i,n=new ll;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Y_(this,n),this.o=t.o}else t&&(e=String(t).match(NS))?(this.h=!1,nf(this,e[1]||"",!0),this.s=ra(e[2]||""),this.g=ra(e[3]||"",!0),rf(this,e[4]),this.l=ra(e[5]||"",!0),Y_(this,e[6]||"",!0),this.o=ra(e[7]||"")):(this.h=!1,this.i=new ll(null,this.h))}ji.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ia(e,X_,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ia(e,X_,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ia(n,n.charAt(0)=="/"?c5:u5,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ia(n,d5)),t.join("")};function wr(t){return new ji(t)}function nf(t,e,n){t.j=n?ra(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function rf(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Y_(t,e,n){e instanceof ll?(t.i=e,h5(t.i,t.h)):(n||(e=ia(e,f5)),t.i=new ll(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function od(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ra(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ia(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,l5),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function l5(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var X_=/[#\/\?@]/g,u5=/[#\?:]/g,c5=/[#\?]/g,f5=/[#\?@]/g,d5=/#/g;function ll(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function wi(t){t.g||(t.g=new Map,t.h=0,t.i&&a5(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=ll.prototype;D.add=function(t,e){wi(this),this.i=null,t=bo(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function OS(t,e){wi(t),e=bo(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function DS(t,e){return wi(t),e=bo(t,e),t.g.has(e)}D.forEach=function(t,e){wi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.ta=function(){wi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.Z=function(t){wi(this);let e=[];if(typeof t=="string")DS(this,t)&&(e=e.concat(this.g.get(bo(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return wi(this),this.i=null,t=bo(this,t),DS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function LS(t,e,n){OS(t,e),0<n.length&&(t.i=null,t.g.set(bo(t,e),hy(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function bo(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function h5(t,e){e&&!t.j&&(wi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(OS(this,r),LS(this,i,n))},t)),t.j=e}var p5=class{constructor(t,e){this.g=t,this.map=e}};function VS(t){this.l=t||m5,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var m5=10;function MS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function $S(t){return t.h?1:t.g?t.g.size:0}function wm(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xy(t,e){t.g?t.g.add(e):t.h=e}function FS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}VS.prototype.cancel=function(){if(this.i=jS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function jS(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return hy(t.i)}var g5=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function y5(){this.g=new g5}function v5(t,e,n){const r=n||"";try{bS(t,function(i,s){let o=i;Dl(i)&&(o=wy(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _5(t,e){const n=new td;if(X.Image){const r=new Image;r.onload=Pu(bu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Pu(bu,n,r,"TestLoadImage: error",!1,e),r.onabort=Pu(bu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Pu(bu,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bu(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ad(t){this.l=t.ec||null,this.j=t.ob||!1}ot(ad,Sy);ad.prototype.g=function(){return new ld(this.l,this.j)};ad.prototype.i=function(t){return function(){return t}}({});function ld(t,e){st.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Cy,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(ld,st);var Cy=0;D=ld.prototype;D.open=function(t,e){if(this.readyState!=Cy)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ul(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,jl(this)),this.readyState=Cy};D.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ul(this)),this.g&&(this.readyState=3,ul(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;US(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function US(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}D.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?jl(this):ul(this),this.readyState==3&&US(this)}};D.Za=function(t){this.g&&(this.response=this.responseText=t,jl(this))};D.Ya=function(t){this.g&&(this.response=t,jl(this))};D.ka=function(){this.g&&jl(this)};function jl(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ul(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ul(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ld.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var w5=X.JSON.parse;function Le(t){st.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=zS,this.L=this.M=!1}ot(Le,st);var zS="",E5=/^https?$/i,T5=["POST","PUT"];D=Le.prototype;D.Oa=function(t){this.M=t};D.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():gm.g(),this.C=this.u?Q_(this.u):Q_(gm),this.g.onreadystatechange=kt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){J_(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=iS(T5,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{WS(this),0<this.B&&((this.L=I5(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.ua,this)):this.A=Iy(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){J_(this,s)}};function I5(t){return uo&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.ua=function(){typeof dy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ht(this,"timeout"),this.abort(8))};function J_(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,BS(t),ud(t)}function BS(t){t.F||(t.F=!0,ht(t,"complete"),ht(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ht(this,"complete"),ht(this,"abort"),ud(this))};D.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ud(this,!0)),Le.$.N.call(this)};D.La=function(){this.s||(this.G||this.v||this.l?HS(this):this.kb())};D.kb=function(){HS(this)};function HS(t){if(t.h&&typeof dy<"u"&&(!t.C[1]||Fn(t)!=4||t.da()!=2)){if(t.v&&Fn(t)==4)Iy(t.La,0,t);else if(ht(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(NS)[1]||null;!i&&X.self&&X.self.location&&(i=X.self.location.protocol.slice(0,-1)),r=!E5.test(i?i.toLowerCase():"")}n=r}if(n)ht(t,"complete"),ht(t,"success");else{t.m=6;try{var s=2<Fn(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",BS(t)}}finally{ud(t)}}}}function ud(t,e){if(t.g){WS(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||ht(t,"ready");try{n.onreadystatechange=r}catch{}}}function WS(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}D.isActive=function(){return!!this.g};function Fn(t){return t.g?t.g.readyState:0}D.da=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};D.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),w5(e)}};function Z_(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case zS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function S5(t){const e={};t=(t.g&&2<=Fn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(nl(t[r]))continue;var n=QD(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}zD(e,function(r){return r.join(", ")})}D.Ia=function(){return this.m};D.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function qS(t){let e="";return my(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Py(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=qS(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ie(t,e,n))}function Wo(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function KS(t){this.Ga=0,this.j=[],this.l=new td,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Wo("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Wo("baseRetryDelayMs",5e3,t),this.hb=Wo("retryDelaySeedMs",1e4,t),this.eb=Wo("forwardChannelMaxRetries",2,t),this.xa=Wo("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new VS(t&&t.concurrentRequestLimit),this.Ja=new y5,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}D=KS.prototype;D.ra=8;D.H=1;function Ry(t){if(GS(t),t.H==3){var e=t.W++,n=wr(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),Ul(t,n),e=new $l(t,t.l,e),e.L=2,e.A=od(wr(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=nk(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Fl(e)}ek(t)}function cd(t){t.g&&(Ny(t),t.g.cancel(),t.g=null)}function GS(t){cd(t),t.u&&(X.clearTimeout(t.u),t.u=null),sf(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function fd(t){if(!MS(t.i)&&!t.m){t.m=!0;var e=t.Na;il||gS(),sl||(il(),sl=!0),Ey.add(e,t),t.C=0}}function k5(t,e){return $S(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Vl(kt(t.Na,t,e),ZS(t,t.C)),t.C++,!0)}D.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new $l(this,this.l,t);let s=this.s;if(this.U&&(s?(s=lS(s),uS(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=QS(this,i,e),n=wr(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.F&&Ie(n,"X-HTTP-Session-Id",this.F),Ul(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(qS(s)))+"&"+e:this.o&&Py(n,this.o,s)),xy(this.i,i),this.bb&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),i.aa=!0,vm(i,n,null)):vm(i,n,e),this.H=2}}else this.H==3&&(t?e1(this,t):this.j.length==0||MS(this.i)||e1(this))};function e1(t,e){var n;e?n=e.m:n=t.W++;const r=wr(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.V),Ul(t,r),t.o&&t.s&&Py(r,t.o,t.s),n=new $l(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=QS(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),xy(t.i,n),vm(n,r,e)}function Ul(t,e){t.na&&my(t.na,function(n,r){Ie(e,r,n)}),t.h&&bS({},function(n,r){Ie(e,r,n)})}function QS(t,e,n){n=Math.min(t.j.length,n);var r=t.h?kt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{v5(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function YS(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;il||gS(),sl||(il(),sl=!0),Ey.add(e,t),t.A=0}}function by(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Vl(kt(t.Ma,t),ZS(t,t.A)),t.A++,!0)}D.Ma=function(){if(this.u=null,XS(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Vl(kt(this.jb,this),t)}};D.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ot(10),cd(this),XS(this))};function Ny(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function XS(t){t.g=new $l(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wr(t.wa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.V),Ie(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ie(e,"TO",t.qa),Ie(e,"TYPE","xmlhttp"),Ul(t,e),t.o&&t.s&&Py(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=od(wr(e)),n.u=null,n.S=!0,xS(n,t)}D.ib=function(){this.v!=null&&(this.v=null,cd(this),by(this),Ot(19))};function sf(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function JS(t,e){var n=null;if(t.g==e){sf(t),Ny(t),t.g=null;var r=2}else if(wm(t.i,e))n=e.F,FS(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var i=t.C;r=nd(),ht(r,new TS(r,n)),fd(t)}else YS(t);else if(i=e.s,i==3||i==0&&0<e.ca||!(r==1&&k5(t,e)||r==2&&by(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Oi(t,5);break;case 4:Oi(t,10);break;case 3:Oi(t,6);break;default:Oi(t,2)}}}function ZS(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Oi(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=kt(t.pb,t);n||(n=new ji("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||nf(n,"https"),od(n)),_5(n.toString(),r)}else Ot(2);t.H=0,t.h&&t.h.za(e),ek(t),GS(t)}D.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Ot(2)):(this.l.info("Failed to ping google.com"),Ot(1))};function ek(t){if(t.H=0,t.ma=[],t.h){const e=jS(t.i);(e.length!=0||t.j.length!=0)&&(H_(t.ma,e),H_(t.ma,t.j),t.i.i.length=0,hy(t.j),t.j.length=0),t.h.ya()}}function tk(t,e,n){var r=n instanceof ji?wr(n):new ji(n);if(r.g!="")e&&(r.g=e+"."+r.g),rf(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ji(null);r&&nf(s,r),e&&(s.g=e),i&&rf(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Ie(r,n,e),Ie(r,"VER",t.ra),Ul(t,r),r}function nk(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Le(new ad({ob:n})):new Le(t.va),e.Oa(t.J),e}D.isActive=function(){return!!this.h&&this.h.isActive(this)};function rk(){}D=rk.prototype;D.Ba=function(){};D.Aa=function(){};D.za=function(){};D.ya=function(){};D.isActive=function(){return!0};D.Va=function(){};function of(){if(uo&&!(10<=Number($D)))throw Error("Environmental error: no available transport.")}of.prototype.g=function(t,e){return new Jt(t,e)};function Jt(t,e){st.call(this),this.g=new KS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!nl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!nl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new No(this)}ot(Jt,st);Jt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Ot(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=tk(t,null,t.Y),fd(t)};Jt.prototype.close=function(){Ry(this.g)};Jt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wy(t),t=n);e.j.push(new p5(e.fb++,t)),e.H==3&&fd(e)};Jt.prototype.N=function(){this.g.h=null,delete this.j,Ry(this.g),delete this.g,Jt.$.N.call(this)};function ik(t){ky.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(ik,ky);function sk(){Ay.call(this),this.status=1}ot(sk,Ay);function No(t){this.g=t}ot(No,rk);No.prototype.Ba=function(){ht(this.g,"a")};No.prototype.Aa=function(t){ht(this.g,new ik(t))};No.prototype.za=function(t){ht(this.g,new sk)};No.prototype.ya=function(){ht(this.g,"b")};function A5(){this.blockSize=-1}function kn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ot(kn,A5);kn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}kn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)xh(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){xh(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){xh(this,r),i=0;break}}this.h=i,this.i+=e};kn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ge(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var x5={};function Oy(t){return-128<=t&&128>t?LD(t,function(e){return new ge([e|0],0>e?-1:0)}):new ge([t|0],0>t?-1:0)}function jn(t){if(isNaN(t)||!isFinite(t))return Xs;if(0>t)return ct(jn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Em;return new ge(e,0)}function ok(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return ct(ok(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=jn(Math.pow(e,8)),r=Xs,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=jn(Math.pow(e,s)),r=r.R(s).add(jn(o))):(r=r.R(n),r=r.add(jn(o)))}return r}var Em=4294967296,Xs=Oy(0),Tm=Oy(1),t1=Oy(16777216);D=ge.prototype;D.ea=function(){if(on(this))return-ct(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Em+r)*e,e*=Em}return t};D.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(ur(this))return"0";if(on(this))return"-"+ct(this).toString(t);for(var e=jn(Math.pow(t,6)),n=this,r="";;){var i=lf(n,e).g;n=af(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,ur(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};D.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function ur(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function on(t){return t.h==-1}D.X=function(t){return t=af(this,t),on(t)?-1:ur(t)?0:1};function ct(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ge(n,~t.h).add(Tm)}D.abs=function(){return on(this)?ct(this):this};D.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new ge(n,n[n.length-1]&-2147483648?-1:0)};function af(t,e){return t.add(ct(e))}D.R=function(t){if(ur(this)||ur(t))return Xs;if(on(this))return on(t)?ct(this).R(ct(t)):ct(ct(this).R(t));if(on(t))return ct(this.R(ct(t)));if(0>this.X(t1)&&0>t.X(t1))return jn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Nu(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Nu(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nu(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nu(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ge(n,0)};function Nu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qo(t,e){this.g=t,this.h=e}function lf(t,e){if(ur(e))throw Error("division by zero");if(ur(t))return new qo(Xs,Xs);if(on(t))return e=lf(ct(t),e),new qo(ct(e.g),ct(e.h));if(on(e))return e=lf(t,ct(e)),new qo(ct(e.g),e.h);if(30<t.g.length){if(on(t)||on(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Tm,r=e;0>=r.X(t);)n=n1(n),r=n1(r);var i=ys(n,1),s=ys(r,1);for(r=ys(r,2),n=ys(n,2);!ur(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=ys(r,1),n=ys(n,1)}return e=af(t,i.R(e)),new qo(i,e)}for(i=Xs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=jn(n),o=s.R(e);on(o)||0<o.X(t);)n-=r,s=jn(n),o=s.R(e);ur(s)&&(s=Tm),i=i.add(s),t=af(t,o)}return new qo(i,t)}D.gb=function(t){return lf(this,t).h};D.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ge(n,this.h&t.h)};D.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ge(n,this.h|t.h)};D.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ge(n,this.h^t.h)};function n1(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ge(n,t.h)}function ys(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new ge(i,t.h)}of.prototype.createWebChannel=of.prototype.g;Jt.prototype.send=Jt.prototype.u;Jt.prototype.open=Jt.prototype.m;Jt.prototype.close=Jt.prototype.close;rd.NO_ERROR=0;rd.TIMEOUT=8;rd.HTTP_ERROR=6;IS.COMPLETE="complete";SS.EventType=Ml;Ml.OPEN="a";Ml.CLOSE="b";Ml.ERROR="c";Ml.MESSAGE="d";st.prototype.listen=st.prototype.O;Le.prototype.listenOnce=Le.prototype.P;Le.prototype.getLastError=Le.prototype.Sa;Le.prototype.getLastErrorCode=Le.prototype.Ia;Le.prototype.getStatus=Le.prototype.da;Le.prototype.getResponseJson=Le.prototype.Wa;Le.prototype.getResponseText=Le.prototype.ja;Le.prototype.send=Le.prototype.ha;Le.prototype.setWithCredentials=Le.prototype.Oa;kn.prototype.digest=kn.prototype.l;kn.prototype.reset=kn.prototype.reset;kn.prototype.update=kn.prototype.j;ge.prototype.add=ge.prototype.add;ge.prototype.multiply=ge.prototype.R;ge.prototype.modulo=ge.prototype.gb;ge.prototype.compare=ge.prototype.X;ge.prototype.toNumber=ge.prototype.ea;ge.prototype.toString=ge.prototype.toString;ge.prototype.getBits=ge.prototype.D;ge.fromNumber=jn;ge.fromString=ok;var C5=function(){return new of},P5=function(){return nd()},Ch=rd,R5=IS,b5=cs,r1={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ou=SS,N5=Le,O5=kn,Js=ge;const i1="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new ey("@firebase/firestore");function Ko(){return es.logLevel}function j(t,...e){if(es.logLevel<=ae.DEBUG){const n=e.map(Dy);es.debug(`Firestore (${Oo}): ${t}`,...n)}}function Er(t,...e){if(es.logLevel<=ae.ERROR){const n=e.map(Dy);es.error(`Firestore (${Oo}): ${t}`,...n)}}function co(t,...e){if(es.logLevel<=ae.WARN){const n=e.map(Dy);es.warn(`Firestore (${Oo}): ${t}`,...n)}}function Dy(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Oo}) INTERNAL ASSERTION FAILED: `+t;throw Er(e),new Error(e)}function _e(t,e){t||J()}function te(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends kr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class D5{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class L5{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class V5{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new ii;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ii,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ii)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(_e(typeof r.accessToken=="string"),new ak(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Et(e)}}class M5{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class $5{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new M5(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F5{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class j5{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(_e(typeof n.token=="string"),this.R=n.token,new F5(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U5(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lk{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=U5(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function fo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(R.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(R.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Qe.fromMillis(Date.now())}static fromDate(e){return Qe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Qe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Qe(0,0))}static max(){return new Z(new Qe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cl.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cl?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class De extends cl{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(R.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new De(n)}static emptyPath(){return new De([])}}const z5=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends cl{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return z5.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ft(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(R.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new W(R.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new W(R.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new W(R.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.path=e}static fromPath(e){return new q(De.fromString(e))}static fromName(e){return new q(De.fromString(e).popFirst(5))}static empty(){return new q(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new De(e.slice()))}}function B5(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Z.fromTimestamp(r===1e9?new Qe(n+1,0):new Qe(n,r));return new ci(i,q.empty(),e)}function H5(t){return new ci(t.readTime,t.key,-1)}class ci{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ci(Z.min(),q.empty(),-1)}static max(){return new ci(Z.max(),q.empty(),-1)}}function W5(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=q.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q5="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class K5{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zl(t){if(t.code!==R.FAILED_PRECONDITION||t.message!==q5)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(i=>i?P.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new P((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new P((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Bl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ly{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Ly._e=-1;function dd(t){return t==null}function uf(t){return t===0&&1/t==-1/0}function G5(t){return typeof t=="number"&&Number.isInteger(t)&&!uf(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function fs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uk(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Du(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Du(this.root,e,this.comparator,!1)}getReverseIterator(){return new Du(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Du(this.root,e,this.comparator,!0)}}class Du{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ut.RED,this.left=i??ut.EMPTY,this.right=s??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ut(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ut.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new o1(this.data.getIterator())}getIteratorFrom(e){return new o1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof pt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new pt(this.comparator);return n.data=e,n}}class o1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Gt([])}unionWith(e){let n=new pt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ck("Invalid base64 string: "+s):s}}(e);return new Rt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Rt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Rt.EMPTY_BYTE_STRING=new Rt("");const Q5=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fi(t){if(_e(!!t),typeof t=="string"){let e=0;const n=Q5.exec(t);if(_e(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ts(t){return typeof t=="string"?Rt.fromBase64String(t):Rt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function My(t){const e=t.mapValue.fields.__previous_value__;return Vy(e)?My(e):e}function fl(t){const e=fi(t.mapValue.fields.__local_write_time__.timestampValue);return new Qe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y5{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class dl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new dl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof dl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ns(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vy(t)?4:X5(t)?9007199254740991:10:J()}function Qn(t,e){if(t===e)return!0;const n=ns(t);if(n!==ns(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return fl(t).isEqual(fl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=fi(i.timestampValue),a=fi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return ts(i.bytesValue).isEqual(ts(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ue(i.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(i.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ue(i.integerValue)===Ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ue(i.doubleValue),a=Ue(s.doubleValue);return o===a?uf(o)===uf(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return fo(t.arrayValue.values||[],e.arrayValue.values||[],Qn);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(s1(o)!==s1(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Qn(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function hl(t,e){return(t.values||[]).find(n=>Qn(n,e))!==void 0}function ho(t,e){if(t===e)return 0;const n=ns(t),r=ns(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=Ue(s.integerValue||s.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return a1(t.timestampValue,e.timestampValue);case 4:return a1(fl(t),fl(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(s,o){const a=ts(s),l=ts(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=fe(a[u],l[u]);if(c!==0)return c}return fe(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=fe(Ue(s.latitude),Ue(o.latitude));return a!==0?a:fe(Ue(s.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ho(a[u],l[u]);if(c)return c}return fe(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lu.mapValue&&o===Lu.mapValue)return 0;if(s===Lu.mapValue)return 1;if(o===Lu.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let f=0;f<l.length&&f<c.length;++f){const d=fe(l[f],c[f]);if(d!==0)return d;const p=ho(a[l[f]],u[c[f]]);if(p!==0)return p}return fe(l.length,c.length)}(t.mapValue,e.mapValue);default:throw J()}}function a1(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=fi(t),r=fi(e),i=fe(n.seconds,r.seconds);return i!==0?i:fe(n.nanos,r.nanos)}function po(t){return Im(t)}function Im(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=fi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ts(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Im(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Im(n.fields[o])}`;return i+"}"}(t.mapValue):J()}function Sm(t){return!!t&&"integerValue"in t}function $y(t){return!!t&&"arrayValue"in t}function l1(t){return!!t&&"nullValue"in t}function u1(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function lc(t){return!!t&&"mapValue"in t}function Ea(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return fs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ea(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ea(t.arrayValue.values[n]);return e}return Object.assign({},t)}function X5(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.value=e}static empty(){return new Ft({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!lc(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ea(n)}setAll(e){let n=ft.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Ea(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());lc(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Qn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];lc(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){fs(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ft(Ea(this.value))}}function fk(t){const e=[];return fs(t.fields,(n,r)=>{const i=new ft([n]);if(lc(r)){const s=fk(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new It(e,0,Z.min(),Z.min(),Z.min(),Ft.empty(),0)}static newFoundDocument(e,n,r,i){return new It(e,1,n,Z.min(),r,i,0)}static newNoDocument(e,n){return new It(e,2,n,Z.min(),Z.min(),Ft.empty(),0)}static newUnknownDocument(e,n){return new It(e,3,n,Z.min(),Z.min(),Ft.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ft.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ft.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof It&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new It(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(e,n){this.position=e,this.inclusive=n}}function c1(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=q.comparator(q.fromName(o.referenceValue),n.key):r=ho(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function f1(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Qn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n="asc"){this.field=e,this.dir=n}}function J5(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{}class Ke extends dk{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new eL(e,n,r):n==="array-contains"?new rL(e,r):n==="in"?new iL(e,r):n==="not-in"?new sL(e,r):n==="array-contains-any"?new oL(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new tL(e,r):new nL(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ho(n,this.value)):n!==null&&ns(this.value)===ns(n)&&this.matchesComparison(ho(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Yn extends dk{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Yn(e,n)}matches(e){return hk(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function hk(t){return t.op==="and"}function pk(t){return Z5(t)&&hk(t)}function Z5(t){for(const e of t.filters)if(e instanceof Yn)return!1;return!0}function km(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+po(t.value);if(pk(t))return t.filters.map(e=>km(e)).join(",");{const e=t.filters.map(n=>km(n)).join(",");return`${t.op}(${e})`}}function mk(t,e){return t instanceof Ke?function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&Qn(r.value,i.value)}(t,e):t instanceof Yn?function(r,i){return i instanceof Yn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&mk(o,i.filters[a]),!0):!1}(t,e):void J()}function gk(t){return t instanceof Ke?function(n){return`${n.field.canonicalString()} ${n.op} ${po(n.value)}`}(t):t instanceof Yn?function(n){return n.op.toString()+" {"+n.getFilters().map(gk).join(" ,")+"}"}(t):"Filter"}class eL extends Ke{constructor(e,n,r){super(e,n,r),this.key=q.fromName(r.referenceValue)}matches(e){const n=q.comparator(e.key,this.key);return this.matchesComparison(n)}}class tL extends Ke{constructor(e,n){super(e,"in",n),this.keys=yk("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class nL extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=yk("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function yk(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>q.fromName(r.referenceValue))}class rL extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return $y(n)&&hl(n.arrayValue,this.value)}}class iL extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&hl(this.value.arrayValue,n)}}class sL extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(hl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!hl(this.value.arrayValue,n)}}class oL extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!$y(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>hl(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aL{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function d1(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aL(t,e,n,r,i,s,o)}function Fy(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>km(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),dd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>po(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>po(r)).join(",")),e.ce=n}return e.ce}function jy(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!J5(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!mk(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!f1(t.startAt,e.startAt)&&f1(t.endAt,e.endAt)}function Am(t){return q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function lL(t,e,n,r,i,s,o,a){return new hd(t,e,n,r,i,s,o,a)}function Uy(t){return new hd(t)}function h1(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uL(t){return t.collectionGroup!==null}function Ta(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const s of e.explicitOrderBy)e.le.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new pt(ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.le.push(new ff(s,r))}),n.has(ft.keyField().canonicalString())||e.le.push(new ff(ft.keyField(),r))}return e.le}function qn(t){const e=te(t);return e.he||(e.he=cL(e,Ta(t))),e.he}function cL(t,e){if(t.limitType==="F")return d1(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ff(i.field,s)});const n=t.endAt?new cf(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new cf(t.startAt.position,t.startAt.inclusive):null;return d1(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function xm(t,e,n){return new hd(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pd(t,e){return jy(qn(t),qn(e))&&t.limitType===e.limitType}function vk(t){return`${Fy(qn(t))}|lt:${t.limitType}`}function ws(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>gk(i)).join(", ")}]`),dd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>po(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>po(i)).join(",")),`Target(${r})`}(qn(t))}; limitType=${t.limitType})`}function md(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ta(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=c1(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Ta(r),i)||r.endAt&&!function(o,a,l){const u=c1(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Ta(r),i))}(t,e)}function fL(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _k(t){return(e,n)=>{let r=!1;for(const i of Ta(t)){const s=dL(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function dL(t,e,n){const r=t.field.isKeyField()?q.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ho(l,u):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){fs(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return uk(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL=new be(q.comparator);function Tr(){return hL}const wk=new be(q.comparator);function sa(...t){let e=wk;for(const n of t)e=e.insert(n.key,n);return e}function Ek(t){let e=wk;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Di(){return Ia()}function Tk(){return Ia()}function Ia(){return new Do(t=>t.toString(),(t,e)=>t.isEqual(e))}const pL=new be(q.comparator),mL=new pt(q.comparator);function se(...t){let e=mL;for(const n of t)e=e.add(n);return e}const gL=new pt(fe);function yL(){return gL}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ik(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:uf(e)?"-0":e}}function Sk(t){return{integerValue:""+t}}function vL(t,e){return G5(e)?Sk(e):Ik(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(){this._=void 0}}function _L(t,e,n){return t instanceof df?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Vy(s)&&(s=My(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof mo?Ak(t,e):t instanceof pl?xk(t,e):function(i,s){const o=kk(i,s),a=p1(o)+p1(i.Ie);return Sm(o)&&Sm(i.Ie)?Sk(a):Ik(i.serializer,a)}(t,e)}function wL(t,e,n){return t instanceof mo?Ak(t,e):t instanceof pl?xk(t,e):n}function kk(t,e){return t instanceof hf?function(r){return Sm(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class df extends gd{}class mo extends gd{constructor(e){super(),this.elements=e}}function Ak(t,e){const n=Ck(e);for(const r of t.elements)n.some(i=>Qn(i,r))||n.push(r);return{arrayValue:{values:n}}}class pl extends gd{constructor(e){super(),this.elements=e}}function xk(t,e){let n=Ck(e);for(const r of t.elements)n=n.filter(i=>!Qn(i,r));return{arrayValue:{values:n}}}class hf extends gd{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function p1(t){return Ue(t.integerValue||t.doubleValue)}function Ck(t){return $y(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e,n){this.field=e,this.transform=n}}function TL(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof mo&&i instanceof mo||r instanceof pl&&i instanceof pl?fo(r.elements,i.elements,Qn):r instanceof hf&&i instanceof hf?Qn(r.Ie,i.Ie):r instanceof df&&i instanceof df}(t.transform,e.transform)}class IL{constructor(e,n){this.version=e,this.transformResults=n}}class Kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kn}static exists(e){return new Kn(void 0,e)}static updateTime(e){return new Kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function uc(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class yd{}function Pk(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new bk(t.key,Kn.none()):new Hl(t.key,t.data,Kn.none());{const n=t.data,r=Ft.empty();let i=new pt(ft.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ei(t.key,r,new Gt(i.toArray()),Kn.none())}}function SL(t,e,n){t instanceof Hl?function(i,s,o){const a=i.value.clone(),l=g1(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Ei?function(i,s,o){if(!uc(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=g1(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Rk(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Sa(t,e,n,r){return t instanceof Hl?function(s,o,a,l){if(!uc(s.precondition,o))return a;const u=s.value.clone(),c=y1(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ei?function(s,o,a,l){if(!uc(s.precondition,o))return a;const u=y1(s.fieldTransforms,l,o),c=o.data;return c.setAll(Rk(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(s,o,a){return uc(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function kL(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=kk(r.transform,i||null);s!=null&&(n===null&&(n=Ft.empty()),n.set(r.field,s))}return n||null}function m1(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fo(r,i,(s,o)=>TL(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Hl extends yd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ei extends yd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Rk(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function g1(t,e,n){const r=new Map;_e(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,wL(o,a,n[i]))}return r}function y1(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,_L(s,o,e))}return r}class bk extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AL extends yd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xL{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&SL(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Sa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Tk();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Pk(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&fo(this.mutations,e.mutations,(n,r)=>m1(n,r))&&fo(this.baseMutations,e.baseMutations,(n,r)=>m1(n,r))}}class zy{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){_e(e.mutations.length===r.length);let i=function(){return pL}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new zy(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CL{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,le;function RL(t){switch(t){default:return J();case R.CANCELLED:case R.UNKNOWN:case R.DEADLINE_EXCEEDED:case R.RESOURCE_EXHAUSTED:case R.INTERNAL:case R.UNAVAILABLE:case R.UNAUTHENTICATED:return!1;case R.INVALID_ARGUMENT:case R.NOT_FOUND:case R.ALREADY_EXISTS:case R.PERMISSION_DENIED:case R.FAILED_PRECONDITION:case R.ABORTED:case R.OUT_OF_RANGE:case R.UNIMPLEMENTED:case R.DATA_LOSS:return!0}}function Nk(t){if(t===void 0)return Er("GRPC error has no .code"),R.UNKNOWN;switch(t){case Fe.OK:return R.OK;case Fe.CANCELLED:return R.CANCELLED;case Fe.UNKNOWN:return R.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return R.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return R.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return R.INTERNAL;case Fe.UNAVAILABLE:return R.UNAVAILABLE;case Fe.UNAUTHENTICATED:return R.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return R.INVALID_ARGUMENT;case Fe.NOT_FOUND:return R.NOT_FOUND;case Fe.ALREADY_EXISTS:return R.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return R.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return R.FAILED_PRECONDITION;case Fe.ABORTED:return R.ABORTED;case Fe.OUT_OF_RANGE:return R.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return R.UNIMPLEMENTED;case Fe.DATA_LOSS:return R.DATA_LOSS;default:return J()}}(le=Fe||(Fe={}))[le.OK=0]="OK",le[le.CANCELLED=1]="CANCELLED",le[le.UNKNOWN=2]="UNKNOWN",le[le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",le[le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",le[le.NOT_FOUND=5]="NOT_FOUND",le[le.ALREADY_EXISTS=6]="ALREADY_EXISTS",le[le.PERMISSION_DENIED=7]="PERMISSION_DENIED",le[le.UNAUTHENTICATED=16]="UNAUTHENTICATED",le[le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",le[le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",le[le.ABORTED=10]="ABORTED",le[le.OUT_OF_RANGE=11]="OUT_OF_RANGE",le[le.UNIMPLEMENTED=12]="UNIMPLEMENTED",le[le.INTERNAL=13]="INTERNAL",le[le.UNAVAILABLE=14]="UNAVAILABLE",le[le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bL(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NL=new Js([4294967295,4294967295],0);function v1(t){const e=bL().encode(t),n=new O5;return n.update(e),new Uint8Array(n.digest())}function _1(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Js([n,r],0),new Js([i,s],0)]}class By{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oa(`Invalid padding: ${n}`);if(r<0)throw new oa(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oa(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oa(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Js.fromNumber(this.Te)}de(e,n,r){let i=e.add(n.multiply(Js.fromNumber(r)));return i.compare(NL)===1&&(i=new Js([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=v1(e),[r,i]=_1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new By(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=v1(e),[r,i]=_1(n);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oa extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vd{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new vd(Z.min(),i,new be(fe),Tr(),se())}}class Wl{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wl(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n,r,i){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=i}}class Ok{constructor(e,n){this.targetId=e,this.fe=n}}class Dk{constructor(e,n,r=Rt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class w1{constructor(){this.ge=0,this.pe=T1(),this.ye=Rt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=se(),n=se(),r=se();return this.pe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J()}}),new Wl(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=T1()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,_e(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class OL{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tr(),this.Qe=E1(),this.Ke=new be(fe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,i)=>{this.je(i)&&n(i)})}Je(e){const n=e.targetId,r=e.fe.count,i=this.Ye(n);if(i){const s=i.target;if(Am(s))if(r===0){const o=new q(s.path);this.We(n,o,It.newNoDocument(o,Z.min()))}else _e(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=ts(r).toUint8Array()}catch(l){if(l instanceof ck)return co("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new By(o,i,s)}catch(l){return co(l instanceof oa?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.We(n,s,null),i++)}),i}it(e){const n=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&Am(a.target)){const l=new q(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,It.newNoDocument(l,e))}s.De&&(n.set(o,s.ve()),s.Fe())}});let r=se();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ye(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(e));const i=new vd(e,n,this.Ke,this.qe,r);return this.qe=Tr(),this.Qe=E1(),this.Ke=new be(fe),i}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const i=this.ze(e);this.st(e,n)?i.Me(n,1):i.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new w1,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new pt(fe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new w1),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function E1(){return new be(q.comparator)}function T1(){return new be(q.comparator)}const DL={asc:"ASCENDING",desc:"DESCENDING"},LL={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},VL={and:"AND",or:"OR"};class ML{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Cm(t,e){return t.useProto3Json||dd(e)?e:{value:e}}function pf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Lk(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function $L(t,e){return pf(t,e.toTimestamp())}function Gn(t){return _e(!!t),Z.fromTimestamp(function(n){const r=fi(n);return new Qe(r.seconds,r.nanos)}(t))}function Hy(t,e){return function(r){return new De(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function Vk(t){const e=De.fromString(t);return _e(jk(e)),e}function Pm(t,e){return Hy(t.databaseId,e.path)}function Ph(t,e){const n=Vk(e);if(n.get(1)!==t.databaseId.projectId)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(R.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new q(Mk(n))}function Rm(t,e){return Hy(t.databaseId,e)}function FL(t){const e=Vk(t);return e.length===4?De.emptyPath():Mk(e)}function bm(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Mk(t){return _e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function I1(t,e,n){return{name:Pm(t,e),fields:n.value.mapValue.fields}}function jL(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(_e(c===void 0||typeof c=="string"),Rt.fromBase64String(c||"")):(_e(c===void 0||c instanceof Uint8Array),Rt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?R.UNKNOWN:Nk(u.code);return new W(c,u.message||"")}(o);n=new Dk(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ph(t,r.document.name),s=Gn(r.document.updateTime),o=r.document.createTime?Gn(r.document.createTime):Z.min(),a=new Ft({mapValue:{fields:r.document.fields}}),l=It.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new cc(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ph(t,r.document),s=r.readTime?Gn(r.readTime):Z.min(),o=It.newNoDocument(i,s),a=r.removedTargetIds||[];n=new cc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ph(t,r.document),s=r.removedTargetIds||[];n=new cc([],s,i,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new PL(i,s),a=r.targetId;n=new Ok(a,o)}}return n}function UL(t,e){let n;if(e instanceof Hl)n={update:I1(t,e.key,e.value)};else if(e instanceof bk)n={delete:Pm(t,e.key)};else if(e instanceof Ei)n={update:I1(t,e.key,e.data),updateMask:YL(e.fieldMask)};else{if(!(e instanceof AL))return J();n={verify:Pm(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof df)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof mo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof pl)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof hf)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:$L(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function zL(t,e){return t&&t.length>0?(_e(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?Gn(i.updateTime):Gn(s);return o.isEqual(Z.min())&&(o=Gn(s)),new IL(o,i.transformResults||[])}(n,e))):[]}function BL(t,e){return{documents:[Rm(t,e.path)]}}function HL(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rm(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rm(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return Fk(Yn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(f){return{field:Es(f.field),direction:KL(f.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Cm(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function WL(t){let e=FL(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_e(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(f){const d=$k(f);return d instanceof Yn&&pk(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(d=>function(v){return new ff(Ts(v.field),function(T){switch(T){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(f){let d;return d=typeof f=="object"?f.value:f,dd(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(f){const d=!!f.before,p=f.values||[];return new cf(p,d)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const d=!f.before,p=f.values||[];return new cf(p,d)}(n.endAt)),lL(e,i,o,s,a,"F",l,u)}function qL(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function $k(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ts(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ts(n.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ts(n.unaryFilter.field);return Ke.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ts(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ke.create(Ts(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Yn.create(n.compositeFilter.filters.map(r=>$k(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function KL(t){return DL[t]}function GL(t){return LL[t]}function QL(t){return VL[t]}function Es(t){return{fieldPath:t.canonicalString()}}function Ts(t){return ft.fromServerFormat(t.fieldPath)}function Fk(t){return t instanceof Ke?function(n){if(n.op==="=="){if(u1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NAN"}};if(l1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(u1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NAN"}};if(l1(n.value))return{unaryFilter:{field:Es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Es(n.field),op:GL(n.op),value:n.value}}}(t):t instanceof Yn?function(n){const r=n.getFilters().map(i=>Fk(i));return r.length===1?r[0]:{compositeFilter:{op:QL(n.op),filters:r}}}(t):J()}function YL(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,n,r,i,s=Z.min(),o=Z.min(),a=Rt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Hr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XL{constructor(e){this.ut=e}}function JL(t){const e=WL({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?xm(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZL{constructor(){this.on=new eV}addToCollectionParentIndex(e,n){return this.on.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(ci.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(ci.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class eV{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new pt(De.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new pt(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new go(0)}static Nn(){return new go(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(){this.changes=new Do(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,It.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nV{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rV{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Sa(r.mutation,i,Gt.empty(),Qe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const i=Di();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=sa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Di();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tr();const o=Ia(),a=function(){return Ia()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Ei)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Sa(c.mutation,u,c.mutation.getFieldMask(),Qe.now())):o.set(u.key,Gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var f;return a.set(u,new nV(c,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ia();let i=new be((o,a)=>o-a),s=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const f=(i.get(a.batchId)||se()).add(l);i=i.insert(a.batchId,f)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,f=Tk();c.forEach(d=>{if(!s.has(d)){const p=Pk(n.get(d),r.get(d));p!==null&&f.set(d,p),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):uL(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):P.resolve(Di());let a=-1,l=s;return o.next(u=>P.forEach(u,(c,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),s.get(c)?P.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,se())).next(c=>({batchId:a,changes:Ek(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new q(n)).next(r=>{let i=sa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=sa();return this.indexManager.getCollectionParents(e,s).next(a=>P.forEach(a,l=>{const u=function(f,d){return new hd(d,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((f,d)=>{o=o.insert(f,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,It.newInvalidDocument(c)))});let a=sa();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&Sa(c.mutation,u,Gt.empty(),Qe.now()),md(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iV{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return P.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Gn(i.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(i){return{name:i.name,query:JL(i.bundledQuery),readTime:Gn(i.readTime)}}(n)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sV{constructor(){this.overlays=new be(q.comparator),this.lr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Di();return P.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.lt(e,n,s)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const i=Di(),s=n.length+1,o=new q(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return P.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Di(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Di(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return P.resolve(a)}lt(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new CL(n,r));let s=this.lr.get(n);s===void 0&&(s=se(),this.lr.set(n,s)),this.lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(){this.hr=new pt(et.Pr),this.Ir=new pt(et.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new et(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new et(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new q(new De([])),r=new et(n,e),i=new et(n,e+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new q(new De([])),r=new et(n,e),i=new et(n,e+1);let s=se();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new et(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return q.comparator(e.key,n.key)||fe(e.gr,n.gr)}static Tr(e,n){return fe(e.gr,n.gr)||q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new pt(et.Pr)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new xL(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new et(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Sr(r),s=i<0?0:i;return P.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),i=new et(n,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),P.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new pt(fe);return n.forEach(i=>{const s=new et(i,0),o=new et(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),P.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;q.isDocumentKey(s)||(s=s.child(""));const o=new et(new q(s),0);let a=new pt(fe);return this.yr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gr)),!0)},o),P.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const i=this.wr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){_e(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return P.forEach(n.mutations,i=>{const s=new et(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new et(n,0),i=this.yr.firstAfterOrEqual(r);return P.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aV{constructor(e){this.Cr=e,this.docs=function(){return new be(q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():It.newInvalidDocument(n))}getEntries(e,n){let r=Tr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():It.newInvalidDocument(i))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tr();const o=n.path,a=new q(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||W5(H5(c),r)<=0||(i.has(c.key)||md(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return P.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}vr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new lV(this)}getSize(e){return P.resolve(this.size)}}class lV extends tV{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this._r.addEntry(e,i)):this._r.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uV{constructor(e){this.persistence=e,this.Fr=new Do(n=>Fy(n),jy),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Wy,this.targetCount=0,this.Nr=go.On()}forEachTarget(e,n){return this.Fr.forEach((r,i)=>n(i)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),P.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new go(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.kn(n),P.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),P.waitFor(s).next(()=>i)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),P.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cV{constructor(e,n){this.Br={},this.overlays={},this.Lr=new Ly(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new uV(this),this.indexManager=new ZL,this.remoteDocumentCache=function(i){return new aV(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new XL(n),this.Kr=new iV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sV,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new oV(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new fV(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class fV extends K5{constructor(e){super(),this.currentSequenceNumber=e}}class qy{constructor(e){this.persistence=e,this.Gr=new Wy,this.zr=null}static jr(e){return new qy(e)}get Hr(){if(this.zr)return this.zr;throw J()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Hr,r=>{const i=q.fromPath(r);return this.Jr(e,i).next(s=>{s||n.removeEntry(i,Z.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return P.or([()=>P.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=i}static Qi(e,n){let r=se(),i=se();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ky(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hV{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.zi(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new dV;return this.Hi(e,n,o).next(a=>{if(s.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>s.result)}Ji(e,n,r,i){return r.documentReadCount<this.Ui?(Ko()<=ae.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",ws(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),P.resolve()):(Ko()<=ae.DEBUG&&j("QueryEngine","Query:",ws(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Ko()<=ae.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",ws(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,qn(n))):P.resolve())}zi(e,n){if(h1(n))return P.resolve(null);let r=qn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=xm(n,null,"F"),r=qn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=se(...s);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Yi(n,a);return this.Zi(n,u,o,l.readTime)?this.zi(e,xm(n,null,"F")):this.Xi(e,u,n,l)}))})))}ji(e,n,r,i){return h1(n)||i.isEqual(Z.min())?P.resolve(null):this.Gi.getDocuments(e,r).next(s=>{const o=this.Yi(n,s);return this.Zi(n,o,r,i)?P.resolve(null):(Ko()<=ae.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ws(n)),this.Xi(e,o,n,B5(i,-1)).next(a=>a))})}Yi(e,n){let r=new pt(_k(e));return n.forEach((i,s)=>{md(e,s)&&(r=r.add(s))}),r}Zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(e,n,r){return Ko()<=ae.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",ws(n)),this.Gi.getDocumentsMatchingQuery(e,n,ci.min(),r)}Xi(e,n,r,i){return this.Gi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pV{constructor(e,n,r,i){this.persistence=e,this.es=n,this.serializer=i,this.ts=new be(fe),this.ns=new Do(s=>Fy(s),jy),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new rV(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function mV(t,e,n,r){return new pV(t,e,n,r)}async function Uk(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=se();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({_s:u,removedBatchIds:o,addedBatchIds:a}))})})}function gV(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const f=u.batch,d=f.keys();let p=P.resolve();return d.forEach(v=>{p=p.next(()=>c.getEntry(l,v)).next(w=>{const T=u.docVersions.get(v);_e(T!==null),w.version.compareTo(T)<0&&(f.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=se();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function zk(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function yV(t,e){const n=te(t),r=e.snapshotVersion;let i=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});i=n.ts;const a=[];e.targetChanges.forEach((c,f)=>{const d=i.get(f);if(!d)return;a.push(n.qr.removeMatchingKeys(s,c.removedDocuments,f).next(()=>n.qr.addMatchingKeys(s,c.addedDocuments,f)));let p=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?p=p.withResumeToken(Rt.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):c.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(c.resumeToken,r)),i=i.insert(f,p),function(w,T,g){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:g.addedDocuments.size+g.modifiedDocuments.size+g.removedDocuments.size>0}(d,p,c)&&a.push(n.qr.updateTargetData(s,p))});let l=Tr(),u=se();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(vV(s,o,e.documentUpdates).next(c=>{l=c.us,u=c.cs})),!r.isEqual(Z.min())){const c=n.qr.getLastRemoteSnapshotVersion(s).next(f=>n.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return P.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ts=i,s))}function vV(t,e,n){let r=se(),i=se();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(Z.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{us:o,cs:i}})}function _V(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function wV(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.qr.getTargetData(r,e).next(s=>s?(i=s,P.resolve(i)):n.qr.allocateTargetId(r).next(o=>(i=new Hr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Nm(t,e,n){const r=te(t),i=r.ts.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Bl(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(i.target)}function S1(t,e,n){const r=te(t);let i=Z.min(),s=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const f=te(l),d=f.ns.get(c);return d!==void 0?P.resolve(f.ts.get(d)):f.qr.getTargetData(u,c)}(r,o,qn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?i:Z.min(),n?s:se())).next(a=>(EV(r,fL(e),a),{documents:a,ls:s})))}function EV(t,e,n){let r=t.rs.get(e)||Z.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.rs.set(e,r)}class k1{constructor(){this.activeTargetIds=yL()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TV{constructor(){this.eo=new k1,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new k1,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IV{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=null;function Rh(){return Vu===null?Vu=function(){return 268435456+Math.round(2147483648*Math.random())}():Vu++,"0x"+Vu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kV{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="WebChannelConnection";class AV extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(n,r,i,s,o){const a=Rh(),l=this.So(n,r);j("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(u,s,o),this.Do(n,l,u,i).then(c=>(j("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw co("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}Co(n,r,i,s,o,a){return this.wo(n,r,i,s,o)}bo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Oo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}So(n,r){const i=SV[n];return`${this.mo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,i){const s=Rh();return new Promise((o,a)=>{const l=new N5;l.setWithCredentials(!0),l.listenOnce(R5.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ch.NO_ERROR:const c=l.getResponseJson();j(wt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Ch.TIMEOUT:j(wt,`RPC '${e}' ${s} timed out`),a(new W(R.DEADLINE_EXCEEDED,"Request time out"));break;case Ch.HTTP_ERROR:const f=l.getStatus();if(j(wt,`RPC '${e}' ${s} failed with status:`,f,"response text:",l.getResponseText()),f>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const v=function(T){const g=T.toLowerCase().replace(/_/g,"-");return Object.values(R).indexOf(g)>=0?g:R.UNKNOWN}(p.status);a(new W(v,p.message))}else a(new W(R.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new W(R.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{j(wt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);j(wt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}vo(e,n,r){const i=Rh(),s=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=C5(),a=P5(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.bo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");j(wt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const f=o.createWebChannel(c,l);let d=!1,p=!1;const v=new kV({co:T=>{p?j(wt,`Not sending because RPC '${e}' stream ${i} is closed:`,T):(d||(j(wt,`Opening RPC '${e}' stream ${i} transport.`),f.open(),d=!0),j(wt,`RPC '${e}' stream ${i} sending:`,T),f.send(T))},lo:()=>f.close()}),w=(T,g,h)=>{T.listen(g,m=>{try{h(m)}catch(E){setTimeout(()=>{throw E},0)}})};return w(f,Ou.EventType.OPEN,()=>{p||j(wt,`RPC '${e}' stream ${i} transport opened.`)}),w(f,Ou.EventType.CLOSE,()=>{p||(p=!0,j(wt,`RPC '${e}' stream ${i} transport closed`),v.Ro())}),w(f,Ou.EventType.ERROR,T=>{p||(p=!0,co(wt,`RPC '${e}' stream ${i} transport errored:`,T),v.Ro(new W(R.UNAVAILABLE,"The operation could not be completed")))}),w(f,Ou.EventType.MESSAGE,T=>{var g;if(!p){const h=T.data[0];_e(!!h);const m=h,E=m.error||((g=m[0])===null||g===void 0?void 0:g.error);if(E){j(wt,`RPC '${e}' stream ${i} received error:`,E);const I=E.status;let x=function(G){const H=Fe[G];if(H!==void 0)return Nk(H)}(I),k=E.message;x===void 0&&(x=R.INTERNAL,k="Unknown error status: "+I+" with message "+E.message),p=!0,v.Ro(new W(x,k)),f.close()}else j(wt,`RPC '${e}' stream ${i} received:`,h),v.Vo(h)}}),w(a,b5.STAT_EVENT,T=>{T.stat===r1.PROXY?j(wt,`RPC '${e}' stream ${i} detected buffering proxy`):T.stat===r1.NOPROXY&&j(wt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{v.Ao()},0),v}}function bh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){return new ML(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e,n,r=1e3,i=1.5,s=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e,n,r,i,s,o,a,l){this.si=e,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new Bk(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===R.RESOURCE_EXHAUSTED?(Er(n.toString()),Er("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===R.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===n&&this.s_(r,i)},r=>{e(()=>{const i=new W(R.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xV extends Hk{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=jL(this.serializer,e),r=function(s){if(!("targetChange"in s))return Z.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?Gn(o.readTime):Z.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=bm(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=Am(l)?{documents:BL(s,l)}:{query:HL(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Lk(s,o.resumeToken);const u=Cm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(Z.min())>0){a.readTime=pf(s,o.snapshotVersion.toTimestamp());const u=Cm(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=qL(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=bm(this.serializer),n.removeTarget=e,this.e_(n)}}class CV extends Hk{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=zL(e.writeResults,e.commitTime),r=Gn(e.commitTime);return this.listener.I_(r,n)}return _e(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=bm(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UL(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PV extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(R.UNKNOWN,i.toString())})}Co(e,n,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===R.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(R.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class RV{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Er(n),this.f_=!1):j("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bV{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{ds(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=te(l);u.C_.add(4),await ql(u),u.M_.set("Unknown"),u.C_.delete(4),await wd(u)}(this))})}),this.M_=new RV(r,i)}}async function wd(t){if(ds(t))for(const e of t.v_)await e(!0)}async function ql(t){for(const e of t.v_)await e(!1)}function Wk(t,e){const n=te(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),Yy(n)?Qy(n):Lo(n).Ho()&&Gy(n,e))}function qk(t,e){const n=te(t),r=Lo(n);n.D_.delete(e),r.Ho()&&Kk(n,e),n.D_.size===0&&(r.Ho()?r.Zo():ds(n)&&n.M_.set("Unknown"))}function Gy(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Lo(t).u_(e)}function Kk(t,e){t.x_.Oe(e),Lo(t).c_(e)}function Qy(t){t.x_=new OL({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Lo(t).start(),t.M_.g_()}function Yy(t){return ds(t)&&!Lo(t).jo()&&t.D_.size>0}function ds(t){return te(t).C_.size===0}function Gk(t){t.x_=void 0}async function NV(t){t.D_.forEach((e,n)=>{Gy(t,e)})}async function OV(t,e){Gk(t),Yy(t)?(t.M_.w_(e),Qy(t)):t.M_.set("Unknown")}async function DV(t,e,n){if(t.M_.set("Online"),e instanceof Dk&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await mf(t,r)}else if(e instanceof cc?t.x_.$e(e):e instanceof Ok?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(Z.min()))try{const r=await zk(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.D_.get(u);c&&s.D_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.D_.get(l);if(!c)return;s.D_.set(l,c.withResumeToken(Rt.EMPTY_BYTE_STRING,c.snapshotVersion)),Kk(s,l);const f=new Hr(c.target,l,u,c.sequenceNumber);Gy(s,f)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await mf(t,r)}}async function mf(t,e,n){if(!Bl(e))throw e;t.C_.add(1),await ql(t),t.M_.set("Offline"),n||(n=()=>zk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await wd(t)})}function Qk(t,e){return e().catch(n=>mf(t,n,e))}async function Ed(t){const e=te(t),n=di(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;LV(e);)try{const i=await _V(e.localStore,r);if(i===null){e.b_.length===0&&n.Zo();break}r=i.batchId,VV(e,i)}catch(i){await mf(e,i)}Yk(e)&&Xk(e)}function LV(t){return ds(t)&&t.b_.length<10}function VV(t,e){t.b_.push(e);const n=di(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function Yk(t){return ds(t)&&!di(t).jo()&&t.b_.length>0}function Xk(t){di(t).start()}async function MV(t){di(t).E_()}async function $V(t){const e=di(t);for(const n of t.b_)e.P_(n.mutations)}async function FV(t,e,n){const r=t.b_.shift(),i=zy.from(r,e,n);await Qk(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ed(t)}async function jV(t,e){e&&di(t).h_&&await async function(r,i){if(function(o){return RL(o)&&o!==R.ABORTED}(i.code)){const s=r.b_.shift();di(r).Yo(),await Qk(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ed(r)}}(t,e),Yk(t)&&Xk(t)}async function x1(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.C_.add(3),await ql(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await wd(n)}async function UV(t,e){const n=te(t);e?(n.C_.delete(2),await wd(n)):e||(n.C_.add(2),await ql(n),n.M_.set("Unknown"))}function Lo(t){return t.O_||(t.O_=function(n,r,i){const s=te(n);return s.A_(),new xV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:NV.bind(null,t),Io:OV.bind(null,t),a_:DV.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),Yy(t)?Qy(t):t.M_.set("Unknown")):(await t.O_.stop(),Gk(t))})),t.O_}function di(t){return t.N_||(t.N_=function(n,r,i){const s=te(n);return s.A_(),new CV(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{ho:MV.bind(null,t),Io:jV.bind(null,t),T_:$V.bind(null,t),I_:FV.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await Ed(t)):(await t.N_.stop(),t.b_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ii,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Xy(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(R.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jy(t,e){if(Er("AsyncQueue",`${e}: ${t}`),Bl(t))return new W(R.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||q.comparator(n.key,r.key):(n,r)=>q.comparator(n.key,r.key),this.keyedMap=sa(),this.sortedSet=new be(this.comparator)}static emptySet(e){return new Zs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C1{constructor(){this.B_=new be(q.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):J():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class yo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new yo(e,n,Zs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&pd(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zV{constructor(){this.k_=void 0,this.listeners=[]}}class BV{constructor(){this.queries=new Do(e=>vk(e),pd),this.onlineState="Unknown",this.q_=new Set}}async function HV(t,e){const n=te(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new zV),i)try{s.k_=await n.onListen(r)}catch(o){const a=Jy(o,`Initialization of query '${ws(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Q_(n.onlineState),s.k_&&e.K_(s.k_)&&Zy(n)}async function WV(t,e){const n=te(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function qV(t,e){const n=te(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&Zy(n)}function KV(t,e,n){const r=te(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Zy(t){t.q_.forEach(e=>{e.next()})}class GV{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new yo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=yo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e){this.key=e}}class Zk{constructor(e){this.key=e}}class QV{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=se(),this.mutatedKeys=se(),this._a=_k(e),this.aa=new Zs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new C1,i=n?n.aa:this.aa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,f)=>{const d=i.get(c),p=md(this.query,f)?f:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let T=!1;d&&p?d.data.isEqual(p.data)?v!==w&&(r.track({type:3,doc:p}),T=!0):this.ha(d,p)||(r.track({type:2,doc:p}),T=!0,(l&&this._a(p,l)>0||u&&this._a(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),T=!0):d&&!p&&(r.track({type:1,doc:d}),T=!0,(l||u)&&(a=!0)),T&&(p?(o=o.add(p),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((c,f)=>function(p,v){const w=T=>{switch(T){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return w(p)-w(v)}(c.type,f.type)||this._a(c.doc,f.doc)),this.Pa(r),i=i!=null&&i;const a=n&&!i?this.Ia():[],l=this.oa.size===0&&this.current&&!i?1:0,u=l!==this.sa;return this.sa=l,o.length!==0||u?{snapshot:new yo(this.query,e.aa,s,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new C1,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=se(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Zk(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new Jk(r))}),n}da(e){this.ia=e.ls,this.oa=se();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return yo.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class YV{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class XV{constructor(e){this.key=e,this.Ra=!1}}class JV{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Do(a=>vk(a),pd),this.fa=new Map,this.ga=new Set,this.pa=new be(q.comparator),this.ya=new Map,this.wa=new Wy,this.Sa={},this.ba=new Map,this.Da=go.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ZV(t,e){const n=uM(t);let r,i;const s=n.ma.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await wV(n.localStore,qn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await eM(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Wk(n.remoteStore,o)}return i}async function eM(t,e,n,r,i){t.va=(f,d,p)=>async function(w,T,g,h){let m=T.view.ca(g);m.Zi&&(m=await S1(w.localStore,T.query,!1).then(({documents:k})=>T.view.ca(k,m)));const E=h&&h.targetChanges.get(T.targetId),I=h&&h.targetMismatches.get(T.targetId)!=null,x=T.view.applyChanges(m,w.isPrimaryClient,E,I);return R1(w,T.targetId,x.Ta),x.snapshot}(t,f,d,p);const s=await S1(t.localStore,e,!0),o=new QV(e,s.ls),a=o.ca(s.documents),l=Wl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);R1(t,n,u.Ta);const c=new YV(e,n,o);return t.ma.set(e,c),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),u.snapshot}async function tM(t,e){const n=te(t),r=n.ma.get(e),i=n.fa.get(r.targetId);if(i.length>1)return n.fa.set(r.targetId,i.filter(s=>!pd(s,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Nm(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),qk(n.remoteStore,r.targetId),Om(n,r.targetId)}).catch(zl)):(Om(n,r.targetId),await Nm(n.localStore,r.targetId,!0))}async function nM(t,e,n){const r=cM(t);try{const i=await function(o,a){const l=te(o),u=Qe.now(),c=a.reduce((p,v)=>p.add(v.key),se());let f,d;return l.persistence.runTransaction("Locally write mutations","readwrite",p=>{let v=Tr(),w=se();return l.ss.getEntries(p,c).next(T=>{v=T,v.forEach((g,h)=>{h.isValidDocument()||(w=w.add(g))})}).next(()=>l.localDocuments.getOverlayedDocuments(p,v)).next(T=>{f=T;const g=[];for(const h of a){const m=kL(h,f.get(h.key).overlayedDocument);m!=null&&g.push(new Ei(h.key,m,fk(m.value.mapValue),Kn.exists(!0)))}return l.mutationQueue.addMutationBatch(p,u,g,a)}).next(T=>{d=T;const g=T.applyToLocalDocumentSet(f,w);return l.documentOverlayCache.saveOverlays(p,T.batchId,g)})}).then(()=>({batchId:d.batchId,changes:Ek(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.Sa[o.currentUser.toKey()];u||(u=new be(fe)),u=u.insert(a,l),o.Sa[o.currentUser.toKey()]=u}(r,i.batchId,n),await Kl(r,i.changes),await Ed(r.remoteStore)}catch(i){const s=Jy(i,"Failed to persist write");n.reject(s)}}async function eA(t,e){const n=te(t);try{const r=await yV(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.ya.get(s);o&&(_e(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?_e(o.Ra):i.removedDocuments.size>0&&(_e(o.Ra),o.Ra=!1))}),await Kl(n,r,e)}catch(r){await zl(r)}}function P1(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=te(o);l.onlineState=a;let u=!1;l.queries.forEach((c,f)=>{for(const d of f.listeners)d.Q_(a)&&(u=!0)}),u&&Zy(l)}(r.eventManager,e),i.length&&r.Va.a_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function rM(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ya.get(e),s=i&&i.key;if(s){let o=new be(q.comparator);o=o.insert(s,It.newNoDocument(s,Z.min()));const a=se().add(s),l=new vd(Z.min(),new Map,new be(fe),o,a);await eA(r,l),r.pa=r.pa.remove(s),r.ya.delete(e),ev(r)}else await Nm(r.localStore,e,!1).then(()=>Om(r,e,n)).catch(zl)}async function iM(t,e){const n=te(t),r=e.batch.batchId;try{const i=await gV(n.localStore,e);nA(n,r,null),tA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Kl(n,i)}catch(i){await zl(i)}}async function sM(t,e,n){const r=te(t);try{const i=await function(o,a){const l=te(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(_e(f!==null),c=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);nA(r,e,n),tA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Kl(r,i)}catch(i){await zl(i)}}function tA(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function nA(t,e,n){const r=te(t);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Sa[r.currentUser.toKey()]=i}}function Om(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||rA(t,r)})}function rA(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(qk(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),ev(t))}function R1(t,e,n){for(const r of n)r instanceof Jk?(t.wa.addReference(r.key,e),oM(t,r)):r instanceof Zk?(j("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||rA(t,r.key)):J()}function oM(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ga.add(r),ev(t))}function ev(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new q(De.fromString(e)),r=t.Da.next();t.ya.set(r,new XV(n)),t.pa=t.pa.insert(n,r),Wk(t.remoteStore,new Hr(qn(Uy(n.path)),r,"TargetPurposeLimboResolution",Ly._e))}}async function Kl(t,e,n){const r=te(t),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,l)=>{o.push(r.va(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Ky.Qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(l,u){const c=te(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(u,d=>P.forEach(d.ki,p=>c.persistence.referenceDelegate.addReference(f,d.targetId,p)).next(()=>P.forEach(d.qi,p=>c.persistence.referenceDelegate.removeReference(f,d.targetId,p)))))}catch(f){if(!Bl(f))throw f;j("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const d=f.targetId;if(!f.fromCache){const p=c.ts.get(d),v=p.snapshotVersion,w=p.withLastLimboFreeSnapshotVersion(v);c.ts=c.ts.insert(d,w)}}}(r.localStore,s))}async function aM(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Uk(n.localStore,e);n.currentUser=e,function(s,o){s.ba.forEach(a=>{a.forEach(l=>{l.reject(new W(R.CANCELLED,o))})}),s.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kl(n,r._s)}}function lM(t,e){const n=te(t),r=n.ya.get(e);if(r&&r.Ra)return se().add(r.key);{let i=se();const s=n.fa.get(e);if(!s)return i;for(const o of s){const a=n.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function uM(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=eA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rM.bind(null,e),e.Va.a_=qV.bind(null,e.eventManager),e.Va.Fa=KV.bind(null,e.eventManager),e}function cM(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=iM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=sM.bind(null,e),e}class b1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=_d(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return mV(this.persistence,new hV,e.initialUser,this.serializer)}createPersistence(e){return new cV(qy.jr,this.serializer)}createSharedClientState(e){return new TV}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class fM{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>P1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=aM.bind(null,this.syncEngine),await UV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new BV}()}createDatastore(e){const n=_d(e.databaseInfo.databaseId),r=function(s){return new AV(s)}(e.databaseInfo);return function(s,o,a,l){return new PV(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new bV(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>P1(this.syncEngine,n,0),function(){return A1.D()?new A1:new IV}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const f=new JV(i,s,o,a,l,u);return c&&(f.Ca=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=te(n);j("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ql(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):Er("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hM{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Et.UNAUTHENTICATED,this.clientId=lk.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(R.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ii;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Jy(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Nh(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Uk(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function N1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await mM(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>x1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>x1(e.remoteStore,s)),t._onlineComponents=e}function pM(t){return t.name==="FirebaseError"?t.code===R.FAILED_PRECONDITION||t.code===R.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function mM(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Nh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!pM(n))throw n;co("Error using user provided cache. Falling back to memory cache: "+n),await Nh(t,new b1)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Nh(t,new b1);return t._offlineComponents}async function iA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await N1(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await N1(t,new fM))),t._onlineComponents}function gM(t){return iA(t).then(e=>e.syncEngine)}async function yM(t){const e=await iA(t),n=e.eventManager;return n.onListen=ZV.bind(null,e.syncEngine),n.onUnlisten=tM.bind(null,e.syncEngine),n}function vM(t,e,n={}){const r=new ii;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new dM({next:d=>{o.enqueueAndForget(()=>WV(s,f));const p=d.docs.has(a);!p&&d.fromCache?u.reject(new W(R.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&l&&l.source==="server"?u.reject(new W(R.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(d)},error:d=>u.reject(d)}),f=new GV(Uy(a.path),c,{includeMetadataChanges:!0,J_:!0});return HV(s,f)}(await yM(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _M(t,e,n){if(!n)throw new W(R.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function wM(t,e,n,r){if(e===!0&&r===!0)throw new W(R.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function D1(t){if(!q.isDocumentKey(t))throw new W(R.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function tv(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function rs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(R.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=tv(t);throw new W(R.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L1{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(R.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(R.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}wM("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(R.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class nv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new L1({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(R.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(R.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new L1(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new D5;switch(r.type){case"firstParty":return new $5(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(R.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=O1.get(n);r&&(j("ComponentProvider","Removing Datastore"),O1.delete(n),r.terminate())}(this),Promise.resolve()}}function EM(t,e,n,r={}){var i;const s=(t=rs(t,nv))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&co("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Et.MOCK_USER;else{a=HN(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new W(R.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Et(u)}t._authCredentials=new L5(new ak(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rv(this.firestore,e,this._query)}}class Yt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ml(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Yt(this.firestore,e,this._key)}}class ml extends rv{constructor(e,n,r){super(e,n,Uy(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Yt(this.firestore,null,new q(e))}withConverter(e){return new ml(this.firestore,e,this._path)}}function Gl(t,e,...n){if(t=Pt(t),arguments.length===1&&(e=lk.newId()),_M("doc","path",e),t instanceof nv){const r=De.fromString(e,...n);return D1(r),new Yt(t,null,new q(r))}{if(!(t instanceof Yt||t instanceof ml))throw new W(R.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return D1(r),new Yt(t.firestore,t instanceof ml?t.converter:null,new q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TM{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new Bk(this,"async_queue_retry"),this.iu=()=>{const n=bh();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=bh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=bh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new ii;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Bl(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Er("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const i=Xy.createAndSchedule(this,e,n,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&J()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Td extends nv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new TM}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aA(this),this._firestoreClient.terminate()}}function IM(t,e){const n=typeof t=="object"?t:SI(),r=typeof t=="string"?t:e||"(default)",i=ny(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=zN("firestore");s&&EM(i,...s)}return i}function oA(t){return t._firestoreClient||aA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new Y5(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,sA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new hM(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vo(Rt.fromBase64String(e))}catch(n){throw new W(R.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vo(Rt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Id{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(R.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(R.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(R.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SM=/^__.*__$/;class kM{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms):new Hl(e,this.data,n,this.fieldTransforms)}}class lA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Ei(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function uA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class kd{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new kd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Au(e),i}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return gf(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(uA(this.Iu)&&SM.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class AM{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||_d(e)}pu(e,n,r,i=!1){return new kd({Iu:e,methodName:n,gu:r,path:ft.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(t){const e=t._freezeSettings(),n=_d(t._databaseId);return new AM(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xM(t,e,n,r,i,s={}){const o=t.pu(s.merge||s.mergeFields?2:0,e,n,i);sv("Data must be an object, but it was:",o,r);const a=fA(r,o);let l,u;if(s.merge)l=new Gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const f of s.mergeFields){const d=Dm(e,f,n);if(!o.contains(d))throw new W(R.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hA(c,d)||c.push(d)}l=new Gt(c),u=o.fieldTransforms.filter(f=>l.covers(f.field))}else l=null,u=o.fieldTransforms;return new kM(new Ft(a),l,u)}class Ad extends Sd{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ad}}function CM(t,e,n){return new kd({Iu:3,gu:e.settings.gu,methodName:t._methodName,du:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class PM extends Sd{constructor(e,n){super(e),this.yu=n}_toFieldTransform(e){const n=CM(this,e,!0),r=this.yu.map(s=>Ql(s,n)),i=new mo(r);return new EL(e.path,i)}isEqual(e){return this===e}}function RM(t,e,n,r){const i=t.pu(1,e,n);sv("Data must be an object, but it was:",i,r);const s=[],o=Ft.empty();fs(r,(l,u)=>{const c=ov(e,l,n);u=Pt(u);const f=i.Ru(c);if(u instanceof Ad)s.push(c);else{const d=Ql(u,f);d!=null&&(s.push(c),o.set(c,d))}});const a=new Gt(s);return new lA(o,a,i.fieldTransforms)}function bM(t,e,n,r,i,s){const o=t.pu(1,e,n),a=[Dm(e,r,n)],l=[i];if(s.length%2!=0)throw new W(R.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Dm(e,s[d])),l.push(s[d+1]);const u=[],c=Ft.empty();for(let d=a.length-1;d>=0;--d)if(!hA(u,a[d])){const p=a[d];let v=l[d];v=Pt(v);const w=o.Ru(p);if(v instanceof Ad)u.push(p);else{const T=Ql(v,w);T!=null&&(u.push(p),c.set(p,T))}}const f=new Gt(u);return new lA(c,f,o.fieldTransforms)}function Ql(t,e){if(dA(t=Pt(t)))return sv("Unsupported field value:",e,t),fA(t,e);if(t instanceof Sd)return function(r,i){if(!uA(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=Ql(a,i.Vu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Pt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vL(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=Qe.fromDate(r);return{timestampValue:pf(i.serializer,s)}}if(r instanceof Qe){const s=new Qe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:pf(i.serializer,s)}}if(r instanceof iv)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof vo)return{bytesValue:Lk(i.serializer,r._byteString)};if(r instanceof Yt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Hy(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${tv(r)}`)}(t,e)}function fA(t,e){const n={};return uk(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):fs(t,(r,i)=>{const s=Ql(i,e.Eu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function dA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Qe||t instanceof iv||t instanceof vo||t instanceof Yt||t instanceof Sd)}function sv(t,e,n){if(!dA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=tv(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Dm(t,e,n){if((e=Pt(e))instanceof Id)return e._internalPath;if(typeof e=="string")return ov(t,e);throw gf("Field path arguments must be of type string or ",t,!1,void 0,n)}const NM=new RegExp("[~\\*/\\[\\]]");function ov(t,e,n){if(e.search(NM)>=0)throw gf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Id(...e.split("."))._internalPath}catch{throw gf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function gf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new W(R.INVALID_ARGUMENT,a+t+l)}function hA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new OM(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class OM extends pA{data(){return super.data()}}function mA(t,e){return typeof e=="string"?ov(t,e):e instanceof Id?e._internalPath:e._delegate._internalPath}class DM{convertValue(e,n="none"){switch(ns(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ts(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return fs(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new iv(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=My(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(fl(e));default:return null}}convertTimestamp(e){const n=fi(e);return new Qe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);_e(jk(r));const i=new dl(r.get(1),r.get(3)),s=new q(r.popFirst(5));return i.isEqual(n)||Er(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LM(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VM{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gA extends pA{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new MM(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class MM extends gA{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(t){t=rs(t,Yt);const e=rs(t.firestore,Td);return vM(oA(e),t._key).then(n=>jM(e,t,n))}class $M extends DM{constructor(e){super(),this.firestore=e}convertBytes(e){return new vo(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Yt(this.firestore,null,n)}}function lv(t,e,n){t=rs(t,Yt);const r=rs(t.firestore,Td),i=LM(t.converter,e,n);return yA(r,[xM(cA(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Kn.none())])}function FM(t,e,n,...r){t=rs(t,Yt);const i=rs(t.firestore,Td),s=cA(i);let o;return o=typeof(e=Pt(e))=="string"||e instanceof Id?bM(s,"updateDoc",t._key,e,n,r):RM(s,"updateDoc",t._key,e),yA(i,[o.toMutation(t._key,Kn.exists(!0))])}function yA(t,e){return function(r,i){const s=new ii;return r.asyncQueue.enqueueAndForget(async()=>nM(await gM(r),i,s)),s.promise}(oA(t),e)}function jM(t,e,n){const r=n.docs.get(e._key),i=new $M(t);return new gA(t,i,e._key,r,new VM(n.hasPendingWrites,n.fromCache),e.converter)}function UM(...t){return new PM("arrayUnion",t)}(function(e,n=!0){(function(i){Oo=i})(Po),lo(new Yi("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Td(new V5(r.getProvider("auth-internal")),new j5(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new W(R.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new dl(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),ri(i1,"4.4.0",e),ri(i1,"4.4.0","esm2017")})();const zM={apiKey:"AIzaSyBjVbxjZ_d8qs8U3_WkwZR9jGnBpJVlR3g",authDomain:"budget-tracker-97e0a.firebaseapp.com",projectId:"budget-tracker-97e0a",storageBucket:"budget-tracker-97e0a.appspot.com",messagingSenderId:"268273372096",appId:"1:268273372096:web:785568ee62951a5db51625"},vA=II(zM),Mu=xD(vA),Yl=IM(vA),_A=C.createContext();function BM({children:t}){const[e,n]=C.useState(null),[r,i]=C.useState(!1),s=(l,u)=>(i(!0),cO(Mu,l,u)),o=(l,u)=>(i(!0),fO(Mu,l,u)),a=()=>(i(!0),mO(Mu));return C.useEffect(()=>{const l=pO(Mu,u=>{n(u),i(!1)});return()=>{l()}},[e]),y.jsx(_A.Provider,{value:{user:e,setUser:n,createUser:s,loginUser:o,logOut:a,isLoading:r,setIsLoading:i},children:t})}function An(){const t=C.useContext(_A);if(t===void 0)throw new Error("useAuthContext must be used within a AuthProvider");return t}function HM(){const t=Uf(),{logOut:e}=An();function n(){e().then(()=>{t("/"),rt.success("Logged out successfully")}).catch(r=>{rt.error(r.message)})}return y.jsxs("button",{onClick:n,className:"inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[y.jsx(St,{icon:Lb})," Logout"]})}function WM(){return y.jsx("div",{className:" w-8 h-8 border border-slate-800 rounded-full  flex items-center justify-center",children:y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 485.211 485.21",className:"fill-current text-slate-800",children:y.jsx("path",{d:"M394.235 333.585h-30.327c-33.495 0-60.653-27.158-60.653-60.654v-19.484c13.418-15.948 23.042-34.812 29.024-54.745.621-3.36 3.855-5.02 6.012-7.33 11.611-11.609 13.894-31.2 5.185-45.149-1.186-2.117-3.322-3.953-3.201-6.576 0-17.784.089-35.596-.023-53.366-.476-21.455-6.608-43.773-21.65-59.66-12.144-12.836-28.819-20.479-46.022-23.75-21.739-4.147-44.482-3.937-66.013 1.54-18.659 4.709-36.189 15.637-47.028 31.836-9.598 14.083-13.803 31.183-14.513 48.036-.266 18.094-.061 36.233-.116 54.371.413 3.631-2.667 6.088-4.058 9.094-8.203 14.881-4.592 35.155 8.589 45.978 3.344 2.308 3.97 6.515 5.181 10.142 5.748 17.917 15.282 34.487 27.335 48.925v20.138c0 33.496-27.157 60.654-60.651 60.654H90.978S36.014 348.743 0 424.56v30.327c0 16.759 13.564 30.321 30.327 30.321h424.562c16.759 0 30.322-13.562 30.322-30.321V424.56c-36.012-75.811-90.976-90.975-90.976-90.975z"})})})}function qM(){const{user:t}=An(),e=t.email.split("@")[0];return y.jsxs("div",{className:"flex items-center",children:[y.jsx("div",{className:"mx-5",children:y.jsx(HM,{})}),y.jsxs("div",{className:"flex items-center",children:[y.jsx("span",{className:" mr-1  text-stone-700",children:`${e}`}),y.jsx("span",{className:" ml-1 ",children:y.jsx(WM,{})})]})]})}function Xl({children:t}){return y.jsx("div",{className:" flex m-auto justify-between items-center w-2/3",children:t})}var Jl=t=>t.type==="checkbox",js=t=>t instanceof Date,Nt=t=>t==null;const wA=t=>typeof t=="object";var Xe=t=>!Nt(t)&&!Array.isArray(t)&&wA(t)&&!js(t),KM=t=>Xe(t)&&t.target?Jl(t.target)?t.target.checked:t.target.value:t,GM=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,QM=(t,e)=>t.has(GM(e)),YM=t=>{const e=t.constructor&&t.constructor.prototype;return Xe(e)&&e.hasOwnProperty("isPrototypeOf")},uv=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function er(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(uv&&(t instanceof Blob||t instanceof FileList))&&(n||Xe(t)))if(e=n?[]:{},!n&&!YM(t))e=t;else for(const r in t)t.hasOwnProperty(r)&&(e[r]=er(t[r]));else return t;return e}var Zl=t=>Array.isArray(t)?t.filter(Boolean):[],Ve=t=>t===void 0,U=(t,e,n)=>{if(!e||!Xe(t))return n;const r=Zl(e.split(/[,[\].]+?/)).reduce((i,s)=>Nt(i)?i:i[s],t);return Ve(r)||r===t?Ve(t[e])?n:t[e]:r},ir=t=>typeof t=="boolean";const V1={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},vn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Zn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};je.createContext(null);var XM=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==vn.all&&(e._proxyFormState[o]=!r||vn.all),n&&(n[o]=!0),t[o]}});return i},nn=t=>Xe(t)&&!Object.keys(t).length,JM=(t,e,n,r)=>{n(t);const{name:i,...s}=t;return nn(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!r||vn.all))},Oh=t=>Array.isArray(t)?t:[t];function ZM(t){const e=je.useRef(t);e.current=t,je.useEffect(()=>{const n=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var Un=t=>typeof t=="string",e6=(t,e,n,r,i)=>Un(t)?(r&&e.watch.add(t),U(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),U(n,s))):(r&&(e.watchAll=!0),n),cv=t=>/^\w*$/.test(t),EA=t=>Zl(t.replace(/["|']|\]/g,"").split(/\.|\[/)),Ae=(t,e,n)=>{let r=-1;const i=cv(e)?[e]:EA(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=Xe(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t},t6=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},M1=t=>({isOnSubmit:!t||t===vn.onSubmit,isOnBlur:t===vn.onBlur,isOnChange:t===vn.onChange,isOnAll:t===vn.all,isOnTouch:t===vn.onTouched}),$1=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length))));const ka=(t,e,n,r)=>{for(const i of n||Object.keys(t)){const s=U(t,i);if(s){const{_f:o,...a}=s;if(o){if(o.refs&&o.refs[0]&&e(o.refs[0],i)&&!r)break;if(o.ref&&e(o.ref,o.name)&&!r)break;ka(a,e)}else Xe(a)&&ka(a,e)}}};var n6=(t,e,n)=>{const r=Zl(U(t,n));return Ae(r,"root",e[n]),Ae(t,n,r),t},fv=t=>t.type==="file",Wr=t=>typeof t=="function",yf=t=>{if(!uv)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},fc=t=>Un(t),dv=t=>t.type==="radio",vf=t=>t instanceof RegExp;const F1={value:!1,isValid:!1},j1={value:!0,isValid:!0};var TA=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Ve(t[0].attributes.value)?Ve(t[0].value)||t[0].value===""?j1:{value:t[0].value,isValid:!0}:j1:F1}return F1};const U1={isValid:!1,value:null};var IA=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,U1):U1;function z1(t,e,n="validate"){if(fc(t)||Array.isArray(t)&&t.every(fc)||ir(t)&&!t)return{type:n,message:fc(t)?t:"",ref:e}}var vs=t=>Xe(t)&&!vf(t)?t:{value:t,message:""},B1=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:c,max:f,pattern:d,validate:p,name:v,valueAsNumber:w,mount:T,disabled:g}=t._f,h=U(e,v);if(!T||g)return{};const m=o?o[0]:s,E=ee=>{r&&m.reportValidity&&(m.setCustomValidity(ir(ee)?"":ee||""),m.reportValidity())},I={},x=dv(s),k=Jl(s),V=x||k,G=(w||fv(s))&&Ve(s.value)&&Ve(h)||yf(s)&&s.value===""||h===""||Array.isArray(h)&&!h.length,H=t6.bind(null,v,n,I),Je=(ee,ie,de,$e=Zn.maxLength,gt=Zn.minLength)=>{const We=ee?ie:de;I[v]={type:ee?$e:gt,message:We,ref:s,...H(ee?$e:gt,We)}};if(i?!Array.isArray(h)||!h.length:a&&(!V&&(G||Nt(h))||ir(h)&&!h||k&&!TA(o).isValid||x&&!IA(o).isValid)){const{value:ee,message:ie}=fc(a)?{value:!!a,message:a}:vs(a);if(ee&&(I[v]={type:Zn.required,message:ie,ref:m,...H(Zn.required,ie)},!n))return E(ie),I}if(!G&&(!Nt(c)||!Nt(f))){let ee,ie;const de=vs(f),$e=vs(c);if(!Nt(h)&&!isNaN(h)){const gt=s.valueAsNumber||h&&+h;Nt(de.value)||(ee=gt>de.value),Nt($e.value)||(ie=gt<$e.value)}else{const gt=s.valueAsDate||new Date(h),We=Q=>new Date(new Date().toDateString()+" "+Q),L=s.type=="time",B=s.type=="week";Un(de.value)&&h&&(ee=L?We(h)>We(de.value):B?h>de.value:gt>new Date(de.value)),Un($e.value)&&h&&(ie=L?We(h)<We($e.value):B?h<$e.value:gt<new Date($e.value))}if((ee||ie)&&(Je(!!ee,de.message,$e.message,Zn.max,Zn.min),!n))return E(I[v].message),I}if((l||u)&&!G&&(Un(h)||i&&Array.isArray(h))){const ee=vs(l),ie=vs(u),de=!Nt(ee.value)&&h.length>+ee.value,$e=!Nt(ie.value)&&h.length<+ie.value;if((de||$e)&&(Je(de,ee.message,ie.message),!n))return E(I[v].message),I}if(d&&!G&&Un(h)){const{value:ee,message:ie}=vs(d);if(vf(ee)&&!h.match(ee)&&(I[v]={type:Zn.pattern,message:ie,ref:s,...H(Zn.pattern,ie)},!n))return E(ie),I}if(p){if(Wr(p)){const ee=await p(h,e),ie=z1(ee,m);if(ie&&(I[v]={...ie,...H(Zn.validate,ie.message)},!n))return E(ie.message),I}else if(Xe(p)){let ee={};for(const ie in p){if(!nn(ee)&&!n)break;const de=z1(await p[ie](h,e),m,ie);de&&(ee={...de,...H(ie,de.message)},E(de.message),n&&(I[v]=ee))}if(!nn(ee)&&(I[v]={ref:m,...ee},!n))return I}}return E(!0),I};function r6(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Ve(t)?r++:t[e[r++]];return t}function i6(t){for(const e in t)if(t.hasOwnProperty(e)&&!Ve(t[e]))return!1;return!0}function at(t,e){const n=Array.isArray(e)?e:cv(e)?[e]:EA(e),r=n.length===1?t:r6(t,n),i=n.length-1,s=n[i];return r&&delete r[s],i!==0&&(Xe(r)&&nn(r)||Array.isArray(r)&&i6(r))&&at(t,n.slice(0,-1)),t}var Dh=()=>{let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}},_f=t=>Nt(t)||!wA(t);function Li(t,e){if(_f(t)||_f(e))return t===e;if(js(t)&&js(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(js(s)&&js(o)||Xe(s)&&Xe(o)||Array.isArray(s)&&Array.isArray(o)?!Li(s,o):s!==o)return!1}}return!0}var SA=t=>t.type==="select-multiple",s6=t=>dv(t)||Jl(t),Lh=t=>yf(t)&&t.isConnected,kA=t=>{for(const e in t)if(Wr(t[e]))return!0;return!1};function wf(t,e={}){const n=Array.isArray(t);if(Xe(t)||n)for(const r in t)Array.isArray(t[r])||Xe(t[r])&&!kA(t[r])?(e[r]=Array.isArray(t[r])?[]:{},wf(t[r],e[r])):Nt(t[r])||(e[r]=!0);return e}function AA(t,e,n){const r=Array.isArray(t);if(Xe(t)||r)for(const i in t)Array.isArray(t[i])||Xe(t[i])&&!kA(t[i])?Ve(e)||_f(n[i])?n[i]=Array.isArray(t[i])?wf(t[i],[]):{...wf(t[i])}:AA(t[i],Nt(e)?{}:e[i],n[i]):n[i]=!Li(t[i],e[i]);return n}var Vh=(t,e)=>AA(t,e,wf(e)),xA=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Ve(t)?t:e?t===""?NaN:t&&+t:n&&Un(t)?new Date(t):r?r(t):t;function Mh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return fv(e)?e.files:dv(e)?IA(t.refs).value:SA(e)?[...e.selectedOptions].map(({value:n})=>n):Jl(e)?TA(t.refs).value:xA(Ve(e.value)?t.ref.value:e.value,t)}var o6=(t,e,n,r)=>{const i={};for(const s of t){const o=U(e,s);o&&Ae(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},Go=t=>Ve(t)?t:vf(t)?t.source:Xe(t)?vf(t.value)?t.value.source:t.value:t,a6=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function H1(t,e,n){const r=U(t,n);if(r||cv(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=U(e,s),a=U(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var l6=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,u6=(t,e)=>!Zl(U(t,e)).length&&at(t,e);const c6={mode:vn.onSubmit,reValidateMode:vn.onChange,shouldFocusError:!0};function f6(t={},e){let n={...c6,...t},r={submitCount:0,isDirty:!1,isLoading:Wr(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},i={},s=Xe(n.defaultValues)||Xe(n.values)?er(n.defaultValues||n.values)||{}:{},o=n.shouldUnregister?{}:er(s),a={action:!1,mount:!1,watch:!1},l={mount:new Set,unMount:new Set,array:new Set,watch:new Set},u,c=0;const f={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},d={values:Dh(),array:Dh(),state:Dh()},p=t.resetOptions&&t.resetOptions.keepDirtyValues,v=M1(n.mode),w=M1(n.reValidateMode),T=n.criteriaMode===vn.all,g=_=>S=>{clearTimeout(c),c=setTimeout(_,S)},h=async _=>{if(f.isValid||_){const S=n.resolver?nn((await H()).errors):await ee(i,!0);S!==r.isValid&&d.state.next({isValid:S})}},m=_=>f.isValidating&&d.state.next({isValidating:_}),E=(_,S=[],A,F,O=!0,N=!0)=>{if(F&&A){if(a.action=!0,N&&Array.isArray(U(i,_))){const K=A(U(i,_),F.argA,F.argB);O&&Ae(i,_,K)}if(N&&Array.isArray(U(r.errors,_))){const K=A(U(r.errors,_),F.argA,F.argB);O&&Ae(r.errors,_,K),u6(r.errors,_)}if(f.touchedFields&&N&&Array.isArray(U(r.touchedFields,_))){const K=A(U(r.touchedFields,_),F.argA,F.argB);O&&Ae(r.touchedFields,_,K)}f.dirtyFields&&(r.dirtyFields=Vh(s,o)),d.state.next({name:_,isDirty:de(_,S),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else Ae(o,_,S)},I=(_,S)=>{Ae(r.errors,_,S),d.state.next({errors:r.errors})},x=_=>{r.errors=_,d.state.next({errors:r.errors,isValid:!1})},k=(_,S,A,F)=>{const O=U(i,_);if(O){const N=U(o,_,Ve(A)?U(s,_):A);Ve(N)||F&&F.defaultChecked||S?Ae(o,_,S?N:Mh(O._f)):We(_,N),a.mount&&h()}},V=(_,S,A,F,O)=>{let N=!1,K=!1;const ye={name:_},Ze=!!(U(i,_)&&U(i,_)._f.disabled);if(!A||F){f.isDirty&&(K=r.isDirty,r.isDirty=ye.isDirty=de(),N=K!==ye.isDirty);const bn=Ze||Li(U(s,_),S);K=!!(!Ze&&U(r.dirtyFields,_)),bn||Ze?at(r.dirtyFields,_):Ae(r.dirtyFields,_,!0),ye.dirtyFields=r.dirtyFields,N=N||f.dirtyFields&&K!==!bn}if(A){const bn=U(r.touchedFields,_);bn||(Ae(r.touchedFields,_,A),ye.touchedFields=r.touchedFields,N=N||f.touchedFields&&bn!==A)}return N&&O&&d.state.next(ye),N?ye:{}},G=(_,S,A,F)=>{const O=U(r.errors,_),N=f.isValid&&ir(S)&&r.isValid!==S;if(t.delayError&&A?(u=g(()=>I(_,A)),u(t.delayError)):(clearTimeout(c),u=null,A?Ae(r.errors,_,A):at(r.errors,_)),(A?!Li(O,A):O)||!nn(F)||N){const K={...F,...N&&ir(S)?{isValid:S}:{},errors:r.errors,name:_};r={...r,...K},d.state.next(K)}m(!1)},H=async _=>n.resolver(o,n.context,o6(_||l.mount,i,n.criteriaMode,n.shouldUseNativeValidation)),Je=async _=>{const{errors:S}=await H(_);if(_)for(const A of _){const F=U(S,A);F?Ae(r.errors,A,F):at(r.errors,A)}else r.errors=S;return S},ee=async(_,S,A={valid:!0})=>{for(const F in _){const O=_[F];if(O){const{_f:N,...K}=O;if(N){const ye=l.array.has(N.name),Ze=await B1(O,o,T,n.shouldUseNativeValidation&&!S,ye);if(Ze[N.name]&&(A.valid=!1,S))break;!S&&(U(Ze,N.name)?ye?n6(r.errors,Ze,N.name):Ae(r.errors,N.name,Ze[N.name]):at(r.errors,N.name))}K&&await ee(K,S,A)}}return A.valid},ie=()=>{for(const _ of l.unMount){const S=U(i,_);S&&(S._f.refs?S._f.refs.every(A=>!Lh(A)):!Lh(S._f.ref))&&Xn(_)}l.unMount=new Set},de=(_,S)=>(_&&S&&Ae(o,_,S),!Li(xn(),s)),$e=(_,S,A)=>e6(_,l,{...a.mount?o:Ve(S)?s:Un(_)?{[_]:S}:S},A,S),gt=_=>Zl(U(a.mount?o:s,_,t.shouldUnregister?U(s,_,[]):[])),We=(_,S,A={})=>{const F=U(i,_);let O=S;if(F){const N=F._f;N&&(!N.disabled&&Ae(o,_,xA(S,N)),O=yf(N.ref)&&Nt(S)?"":S,SA(N.ref)?[...N.ref.options].forEach(K=>K.selected=O.includes(K.value)):N.refs?Jl(N.ref)?N.refs.length>1?N.refs.forEach(K=>(!K.defaultChecked||!K.disabled)&&(K.checked=Array.isArray(O)?!!O.find(ye=>ye===K.value):O===K.value)):N.refs[0]&&(N.refs[0].checked=!!O):N.refs.forEach(K=>K.checked=K.value===O):fv(N.ref)?N.ref.value="":(N.ref.value=O,N.ref.type||d.values.next({name:_,values:{...o}})))}(A.shouldDirty||A.shouldTouch)&&V(_,O,A.shouldTouch,A.shouldDirty,!0),A.shouldValidate&&ce(_)},L=(_,S,A)=>{for(const F in S){const O=S[F],N=`${_}.${F}`,K=U(i,N);(l.array.has(_)||!_f(O)||K&&!K._f)&&!js(O)?L(N,O,A):We(N,O,A)}},B=(_,S,A={})=>{const F=U(i,_),O=l.array.has(_),N=er(S);Ae(o,_,N),O?(d.array.next({name:_,values:{...o}}),(f.isDirty||f.dirtyFields)&&A.shouldDirty&&d.state.next({name:_,dirtyFields:Vh(s,o),isDirty:de(_,N)})):F&&!F._f&&!Nt(N)?L(_,N,A):We(_,N,A),$1(_,l)&&d.state.next({...r}),d.values.next({name:_,values:{...o}}),!a.mount&&e()},Q=async _=>{const S=_.target;let A=S.name,F=!0;const O=U(i,A),N=()=>S.type?Mh(O._f):KM(_),K=ye=>{F=Number.isNaN(ye)||ye===U(o,A,ye)};if(O){let ye,Ze;const bn=N(),ms=_.type===V1.BLUR||_.type===V1.FOCUS_OUT,lx=!a6(O._f)&&!n.resolver&&!U(r.errors,A)&&!O._f.deps||l6(ms,U(r.touchedFields,A),r.isSubmitted,w,v),Dd=$1(A,l,ms);Ae(o,A,bn),ms?(O._f.onBlur&&O._f.onBlur(_),u&&u(0)):O._f.onChange&&O._f.onChange(_);const Ld=V(A,bn,ms,!1),ux=!nn(Ld)||Dd;if(!ms&&d.values.next({name:A,type:_.type,values:{...o}}),lx)return f.isValid&&h(),ux&&d.state.next({name:A,...Dd?{}:Ld});if(!ms&&Dd&&d.state.next({...r}),m(!0),n.resolver){const{errors:Iv}=await H([A]);if(K(bn),F){const cx=H1(r.errors,i,A),Sv=H1(Iv,i,cx.name||A);ye=Sv.error,A=Sv.name,Ze=nn(Iv)}}else ye=(await B1(O,o,T,n.shouldUseNativeValidation))[A],K(bn),F&&(ye?Ze=!1:f.isValid&&(Ze=await ee(i,!0)));F&&(O._f.deps&&ce(O._f.deps),G(A,Ze,ye,Ld))}},he=(_,S)=>{if(U(r.errors,S)&&_.focus)return _.focus(),1},ce=async(_,S={})=>{let A,F;const O=Oh(_);if(m(!0),n.resolver){const N=await Je(Ve(_)?_:O);A=nn(N),F=_?!O.some(K=>U(N,K)):A}else _?(F=(await Promise.all(O.map(async N=>{const K=U(i,N);return await ee(K&&K._f?{[N]:K}:K)}))).every(Boolean),!(!F&&!r.isValid)&&h()):F=A=await ee(i);return d.state.next({...!Un(_)||f.isValid&&A!==r.isValid?{}:{name:_},...n.resolver||!_?{isValid:A}:{},errors:r.errors,isValidating:!1}),S.shouldFocus&&!F&&ka(i,he,_?O:l.mount),F},xn=_=>{const S={...s,...a.mount?o:{}};return Ve(_)?S:Un(_)?U(S,_):_.map(A=>U(S,A))},Mt=(_,S)=>({invalid:!!U((S||r).errors,_),isDirty:!!U((S||r).dirtyFields,_),isTouched:!!U((S||r).touchedFields,_),error:U((S||r).errors,_)}),Cn=_=>{_&&Oh(_).forEach(S=>at(r.errors,S)),d.state.next({errors:_?r.errors:{}})},yt=(_,S,A)=>{const F=(U(i,_,{_f:{}})._f||{}).ref;Ae(r.errors,_,{...S,ref:F}),d.state.next({name:_,errors:r.errors,isValid:!1}),A&&A.shouldFocus&&F&&F.focus&&F.focus()},dn=(_,S)=>Wr(_)?d.values.subscribe({next:A=>_($e(void 0,S),A)}):$e(_,S,!0),Xn=(_,S={})=>{for(const A of _?Oh(_):l.mount)l.mount.delete(A),l.array.delete(A),S.keepValue||(at(i,A),at(o,A)),!S.keepError&&at(r.errors,A),!S.keepDirty&&at(r.dirtyFields,A),!S.keepTouched&&at(r.touchedFields,A),!n.shouldUnregister&&!S.keepDefaultValue&&at(s,A);d.values.next({values:{...o}}),d.state.next({...r,...S.keepDirty?{isDirty:de()}:{}}),!S.keepIsValid&&h()},Pn=({disabled:_,name:S,field:A,fields:F,value:O})=>{if(ir(_)){const N=_?void 0:Ve(O)?Mh(A?A._f:U(F,S)._f):O;Ae(o,S,N),V(S,N,!1,!1,!0)}},Ti=(_,S={})=>{let A=U(i,_);const F=ir(S.disabled);return Ae(i,_,{...A||{},_f:{...A&&A._f?A._f:{ref:{name:_}},name:_,mount:!0,...S}}),l.mount.add(_),A?Pn({field:A,disabled:S.disabled,name:_,value:S.value}):k(_,!0,S.value),{...F?{disabled:S.disabled}:{},...n.progressive?{required:!!S.required,min:Go(S.min),max:Go(S.max),minLength:Go(S.minLength),maxLength:Go(S.maxLength),pattern:Go(S.pattern)}:{},name:_,onChange:Q,onBlur:Q,ref:O=>{if(O){Ti(_,S),A=U(i,_);const N=Ve(O.value)&&O.querySelectorAll&&O.querySelectorAll("input,select,textarea")[0]||O,K=s6(N),ye=A._f.refs||[];if(K?ye.find(Ze=>Ze===N):N===A._f.ref)return;Ae(i,_,{_f:{...A._f,...K?{refs:[...ye.filter(Lh),N,...Array.isArray(U(s,_))?[{}]:[]],ref:{type:N.type,name:_}}:{ref:N}}}),k(_,!1,void 0,N)}else A=U(i,_,{}),A._f&&(A._f.mount=!1),(n.shouldUnregister||S.shouldUnregister)&&!(QM(l.array,_)&&a.action)&&l.unMount.add(_)}}},Ii=()=>n.shouldFocusError&&ka(i,he,l.mount),Rn=_=>{ir(_)&&(d.state.next({disabled:_}),ka(i,(S,A)=>{let F=_;const O=U(i,A);O&&ir(O._f.disabled)&&(F||(F=O._f.disabled)),S.disabled=F},0,!1))},wv=(_,S)=>async A=>{A&&(A.preventDefault&&A.preventDefault(),A.persist&&A.persist());let F=er(o);if(d.state.next({isSubmitting:!0}),n.resolver){const{errors:O,values:N}=await H();r.errors=O,F=N}else await ee(i);at(r.errors,"root"),nn(r.errors)?(d.state.next({errors:{}}),await _(F,A)):(S&&await S({...r.errors},A),Ii(),setTimeout(Ii)),d.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:nn(r.errors),submitCount:r.submitCount+1,errors:r.errors})},ax=(_,S={})=>{U(i,_)&&(Ve(S.defaultValue)?B(_,U(s,_)):(B(_,S.defaultValue),Ae(s,_,S.defaultValue)),S.keepTouched||at(r.touchedFields,_),S.keepDirty||(at(r.dirtyFields,_),r.isDirty=S.defaultValue?de(_,U(s,_)):de()),S.keepError||(at(r.errors,_),f.isValid&&h()),d.state.next({...r}))},Ev=(_,S={})=>{const A=_?er(_):s,F=er(A),O=_&&!nn(_)?F:s;if(S.keepDefaultValues||(s=A),!S.keepValues){if(S.keepDirtyValues||p)for(const N of l.mount)U(r.dirtyFields,N)?Ae(O,N,U(o,N)):B(N,U(O,N));else{if(uv&&Ve(_))for(const N of l.mount){const K=U(i,N);if(K&&K._f){const ye=Array.isArray(K._f.refs)?K._f.refs[0]:K._f.ref;if(yf(ye)){const Ze=ye.closest("form");if(Ze){Ze.reset();break}}}}i={}}o=t.shouldUnregister?S.keepDefaultValues?er(s):{}:er(O),d.array.next({values:{...O}}),d.values.next({values:{...O}})}l={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!a.mount&&e(),a.mount=!f.isValid||!!S.keepIsValid,a.watch=!!t.shouldUnregister,d.state.next({submitCount:S.keepSubmitCount?r.submitCount:0,isDirty:S.keepDirty?r.isDirty:!!(S.keepDefaultValues&&!Li(_,s)),isSubmitted:S.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:S.keepDirtyValues?r.dirtyFields:S.keepDefaultValues&&_?Vh(s,_):{},touchedFields:S.keepTouched?r.touchedFields:{},errors:S.keepErrors?r.errors:{},isSubmitSuccessful:S.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},Tv=(_,S)=>Ev(Wr(_)?_(o):_,S);return{control:{register:Ti,unregister:Xn,getFieldState:Mt,handleSubmit:wv,setError:yt,_executeSchema:H,_getWatch:$e,_getDirty:de,_updateValid:h,_removeUnmounted:ie,_updateFieldArray:E,_updateDisabledField:Pn,_getFieldArray:gt,_reset:Ev,_resetDefaultValues:()=>Wr(n.defaultValues)&&n.defaultValues().then(_=>{Tv(_,n.resetOptions),d.state.next({isLoading:!1})}),_updateFormState:_=>{r={...r,..._}},_disableForm:Rn,_subjects:d,_proxyFormState:f,_setErrors:x,get _fields(){return i},get _formValues(){return o},get _state(){return a},set _state(_){a=_},get _defaultValues(){return s},get _names(){return l},set _names(_){l=_},get _formState(){return r},set _formState(_){r=_},get _options(){return n},set _options(_){n={...n,..._}}},trigger:ce,register:Ti,handleSubmit:wv,watch:dn,setValue:B,getValues:xn,reset:Tv,resetField:ax,clearErrors:Cn,unregister:Xn,setError:yt,setFocus:(_,S={})=>{const A=U(i,_),F=A&&A._f;if(F){const O=F.refs?F.refs[0]:F.ref;O.focus&&(O.focus(),S.shouldSelect&&O.select())}},getFieldState:Mt}}function CA(t={}){const e=je.useRef(),n=je.useRef(),[r,i]=je.useState({isDirty:!1,isValidating:!1,isLoading:Wr(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:t.errors||{},disabled:!1,defaultValues:Wr(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...f6(t,()=>i(o=>({...o}))),formState:r});const s=e.current.control;return s._options=t,ZM({subject:s._subjects.state,next:o=>{JM(o,s._proxyFormState,s._updateFormState,!0)&&i({...s._formState})}}),je.useEffect(()=>s._disableForm(t.disabled),[s,t.disabled]),je.useEffect(()=>{if(s._proxyFormState.isDirty){const o=s._getDirty();o!==r.isDirty&&s._subjects.state.next({isDirty:o})}},[s,r.isDirty]),je.useEffect(()=>{t.values&&!Li(t.values,n.current)?(s._reset(t.values,s._options.resetOptions),n.current=t.values,i(o=>({...o}))):s._resetDefaultValues()},[t.values,s]),je.useEffect(()=>{t.errors&&s._setErrors(t.errors)},[t.errors,s]),je.useEffect(()=>{s._state.mount||(s._updateValid(),s._state.mount=!0),s._state.watch&&(s._state.watch=!1,s._subjects.state.next({...s._formState})),s._removeUnmounted()}),e.current.formState=XM(r,s),e.current}function d6(){return y.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm",children:y.jsx("div",{className:"loader"})})}function h6(){const t=Uf(),{register:e,handleSubmit:n}=CA(),{isLoading:r,loginUser:i,setIsLoading:s}=An();function o({email:a,password:l}){i(a,l).then(()=>{t("/budget-tracker")}).catch(u=>{$n.error(u.message),s(!1)})}return r?y.jsx(d6,{}):y.jsxs("form",{onSubmit:n(o),className:"flex items-center",children:[y.jsxs("div",{children:[y.jsx("label",{htmlFor:"email-address",className:"mx-1 my-0 text-left italic"}),y.jsx("input",{...e("email",{required:!0}),id:"email-address",type:"email",placeholder:"Email",className:"w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72",required:!0})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"password",className:"mx-1 my-0 italic"}),y.jsx("input",{...e("password",{required:!0}),id:"password",type:"password",placeholder:"Password",className:"w-16 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-48 sm:focus:w-56",required:!0})]}),y.jsx("div",{className:"mx-2",children:y.jsxs("button",{type:"submit",className:"inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[y.jsx(St,{icon:Mb})," Login"]})})]})}function xd(){const{user:t}=An();return y.jsx("header",{className:" flex p-4 bg-yellow-400 justify-center items-center w-full h-[4.5rem] ",children:y.jsxs(Xl,{children:[y.jsx(M2,{}),t?y.jsx(qM,{}):y.jsx(h6,{})]})})}function p6(){const{createUser:t,setIsLoading:e}=An(),{register:n,handleSubmit:r}=CA();function i(a,l,u){const c=Gl(Yl,l,u);lv(c,{email:a.email,uid:a.uid,entries:[]})}function s({email:a,password:l}){t(a,l).then(u=>{i(u.user,"users",u.user.uid),rt.success("Account created successfully ! Please login. ")}).catch(u=>{u.code==="auth/email-already-in-use"?(rt.error("📃 Email already in use. Please login. "),e(!1)):(rt.error(`📃 ${u.code}`),e(!1))})}function o(a){console.log(a)}return y.jsxs("div",{className:"flex flex-col items-center justify-center bg-yellow-400 w-96 m-auto mb-20  p-2 border-solid border-2 border-stone-700 rounded-2xl ",children:[y.jsx("h2",{className:" uppercase text-stone-700 text-lg tracking-widest p-4 font-bold text-center",children:"Create Account"}),y.jsxs("form",{onSubmit:r(s,o),children:[y.jsx("div",{className:" flex flex-col justify-center mb-2",children:y.jsx("input",{type:"email",id:"email",required:!0,placeholder:"Enter your email address",className:" w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72",...n("email",{required:!0})})}),y.jsx("div",{className:" flex flex-col justify-center text-left ",children:y.jsx("input",{type:"password",id:"password",required:!0,placeholder:"Type in your password",className:" w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 sm:focus:w-72",...n("password",{required:!0})})}),y.jsx("div",{className:"mt-5 px-1",children:y.jsxs("button",{type:"submit",className:" inline-block w-full  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[y.jsx(St,{icon:fI})," Sign up"]})})]})]})}function m6(){return y.jsxs(y.Fragment,{children:[y.jsx(xd,{}),y.jsx("section",{style:{backgroundImage:" url('/bgd.png')",height:"calc(100vh - 4.5rem)"},className:"w-full bg-cover  bg-top",children:y.jsx(Xl,{children:y.jsx("div",{style:{height:"calc(100vh - 4.5rem)"},className:" flex flex-col p-4 items-left justify-center",children:y.jsx("div",{children:y.jsx(p6,{})})})})})]})}function $h({bgColor:t,children:e}){return y.jsx("div",{className:` ${t} border-y-2 border-stone-700   uppercase flex justify-between items-center my-4 m-auto w-96 py-2 px-4 }`,children:e})}var Ut=function(){return Ut=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Ut.apply(this,arguments)};function gl(t,e,n){if(n||arguments.length===2)for(var r=0,i=e.length,s;r<i;r++)(s||!(r in e))&&(s||(s=Array.prototype.slice.call(e,0,r)),s[r]=e[r]);return t.concat(s||Array.prototype.slice.call(e))}var Ee="-ms-",Aa="-moz-",pe="-webkit-",PA="comm",Cd="rule",hv="decl",g6="@import",RA="@keyframes",y6="@layer",bA=Math.abs,pv=String.fromCharCode,Lm=Object.assign;function v6(t,e){return nt(t,0)^45?(((e<<2^nt(t,0))<<2^nt(t,1))<<2^nt(t,2))<<2^nt(t,3):0}function NA(t){return t.trim()}function nr(t,e){return(t=e.exec(t))?t[0]:t}function ne(t,e,n){return t.replace(e,n)}function dc(t,e,n){return t.indexOf(e,n)}function nt(t,e){return t.charCodeAt(e)|0}function _o(t,e,n){return t.slice(e,n)}function Dn(t){return t.length}function OA(t){return t.length}function aa(t,e){return e.push(t),t}function _6(t,e){return t.map(e).join("")}function W1(t,e){return t.filter(function(n){return!nr(n,e)})}var Pd=1,wo=1,DA=0,fn=0,ze=0,Vo="";function Rd(t,e,n,r,i,s,o,a){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Pd,column:wo,length:o,return:"",siblings:a}}function Rr(t,e){return Lm(Rd("",null,null,"",null,null,0,t.siblings),t,{length:-t.length},e)}function _s(t){for(;t.root;)t=Rr(t.root,{children:[t]});aa(t,t.siblings)}function w6(){return ze}function E6(){return ze=fn>0?nt(Vo,--fn):0,wo--,ze===10&&(wo=1,Pd--),ze}function Tn(){return ze=fn<DA?nt(Vo,fn++):0,wo++,ze===10&&(wo=1,Pd++),ze}function Ui(){return nt(Vo,fn)}function hc(){return fn}function bd(t,e){return _o(Vo,t,e)}function Vm(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T6(t){return Pd=wo=1,DA=Dn(Vo=t),fn=0,[]}function I6(t){return Vo="",t}function Fh(t){return NA(bd(fn-1,Mm(t===91?t+2:t===40?t+1:t)))}function S6(t){for(;(ze=Ui())&&ze<33;)Tn();return Vm(t)>2||Vm(ze)>3?"":" "}function k6(t,e){for(;--e&&Tn()&&!(ze<48||ze>102||ze>57&&ze<65||ze>70&&ze<97););return bd(t,hc()+(e<6&&Ui()==32&&Tn()==32))}function Mm(t){for(;Tn();)switch(ze){case t:return fn;case 34:case 39:t!==34&&t!==39&&Mm(ze);break;case 40:t===41&&Mm(t);break;case 92:Tn();break}return fn}function A6(t,e){for(;Tn()&&t+ze!==57;)if(t+ze===84&&Ui()===47)break;return"/*"+bd(e,fn-1)+"*"+pv(t===47?t:Tn())}function x6(t){for(;!Vm(Ui());)Tn();return bd(t,fn)}function C6(t){return I6(pc("",null,null,null,[""],t=T6(t),0,[0],t))}function pc(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,f=o,d=0,p=0,v=0,w=1,T=1,g=1,h=0,m="",E=i,I=s,x=r,k=m;T;)switch(v=h,h=Tn()){case 40:if(v!=108&&nt(k,f-1)==58){dc(k+=ne(Fh(h),"&","&\f"),"&\f",bA(u?a[u-1]:0))!=-1&&(g=-1);break}case 34:case 39:case 91:k+=Fh(h);break;case 9:case 10:case 13:case 32:k+=S6(v);break;case 92:k+=k6(hc()-1,7);continue;case 47:switch(Ui()){case 42:case 47:aa(P6(A6(Tn(),hc()),e,n,l),l);break;default:k+="/"}break;case 123*w:a[u++]=Dn(k)*g;case 125*w:case 59:case 0:switch(h){case 0:case 125:T=0;case 59+c:g==-1&&(k=ne(k,/\f/g,"")),p>0&&Dn(k)-f&&aa(p>32?K1(k+";",r,n,f-1,l):K1(ne(k," ","")+";",r,n,f-2,l),l);break;case 59:k+=";";default:if(aa(x=q1(k,e,n,u,c,i,a,m,E=[],I=[],f,s),s),h===123)if(c===0)pc(k,e,x,x,E,s,f,a,I);else switch(d===99&&nt(k,3)===110?100:d){case 100:case 108:case 109:case 115:pc(t,x,x,r&&aa(q1(t,x,x,0,0,i,a,m,i,E=[],f,I),I),i,I,f,a,r?E:I);break;default:pc(k,x,x,x,[""],I,0,a,I)}}u=c=p=0,w=g=1,m=k="",f=o;break;case 58:f=1+Dn(k),p=v;default:if(w<1){if(h==123)--w;else if(h==125&&w++==0&&E6()==125)continue}switch(k+=pv(h),h*w){case 38:g=c>0?1:(k+="\f",-1);break;case 44:a[u++]=(Dn(k)-1)*g,g=1;break;case 64:Ui()===45&&(k+=Fh(Tn())),d=Ui(),c=f=Dn(m=k+=x6(hc())),h++;break;case 45:v===45&&Dn(k)==2&&(w=0)}}return s}function q1(t,e,n,r,i,s,o,a,l,u,c,f){for(var d=i-1,p=i===0?s:[""],v=OA(p),w=0,T=0,g=0;w<r;++w)for(var h=0,m=_o(t,d+1,d=bA(T=o[w])),E=t;h<v;++h)(E=NA(T>0?p[h]+" "+m:ne(m,/&\f/g,p[h])))&&(l[g++]=E);return Rd(t,e,n,i===0?Cd:a,l,u,c,f)}function P6(t,e,n,r){return Rd(t,e,n,PA,pv(w6()),_o(t,2,-2),0,r)}function K1(t,e,n,r,i){return Rd(t,e,n,hv,_o(t,0,r),_o(t,r+1,-1),r,i)}function LA(t,e,n){switch(v6(t,e)){case 5103:return pe+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return pe+t+t;case 4789:return Aa+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return pe+t+Aa+t+Ee+t+t;case 5936:switch(nt(t,e+11)){case 114:return pe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return pe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return pe+t+Ee+ne(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return pe+t+Ee+t+t;case 6165:return pe+t+Ee+"flex-"+t+t;case 5187:return pe+t+ne(t,/(\w+).+(:[^]+)/,pe+"box-$1$2"+Ee+"flex-$1$2")+t;case 5443:return pe+t+Ee+"flex-item-"+ne(t,/flex-|-self/g,"")+(nr(t,/flex-|baseline/)?"":Ee+"grid-row-"+ne(t,/flex-|-self/g,""))+t;case 4675:return pe+t+Ee+"flex-line-pack"+ne(t,/align-content|flex-|-self/g,"")+t;case 5548:return pe+t+Ee+ne(t,"shrink","negative")+t;case 5292:return pe+t+Ee+ne(t,"basis","preferred-size")+t;case 6060:return pe+"box-"+ne(t,"-grow","")+pe+t+Ee+ne(t,"grow","positive")+t;case 4554:return pe+ne(t,/([^-])(transform)/g,"$1"+pe+"$2")+t;case 6187:return ne(ne(ne(t,/(zoom-|grab)/,pe+"$1"),/(image-set)/,pe+"$1"),t,"")+t;case 5495:case 3959:return ne(t,/(image-set\([^]*)/,pe+"$1$`$1");case 4968:return ne(ne(t,/(.+:)(flex-)?(.*)/,pe+"box-pack:$3"+Ee+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+pe+t+t;case 4200:if(!nr(t,/flex-|baseline/))return Ee+"grid-column-align"+_o(t,e)+t;break;case 2592:case 3360:return Ee+ne(t,"template-","")+t;case 4384:case 3616:return n&&n.some(function(r,i){return e=i,nr(r.props,/grid-\w+-end/)})?~dc(t+(n=n[e].value),"span",0)?t:Ee+ne(t,"-start","")+t+Ee+"grid-row-span:"+(~dc(n,"span",0)?nr(n,/\d+/):+nr(n,/\d+/)-+nr(t,/\d+/))+";":Ee+ne(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(r){return nr(r.props,/grid-\w+-start/)})?t:Ee+ne(ne(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return ne(t,/(.+)-inline(.+)/,pe+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Dn(t)-1-e>6)switch(nt(t,e+1)){case 109:if(nt(t,e+4)!==45)break;case 102:return ne(t,/(.+:)(.+)-([^]+)/,"$1"+pe+"$2-$3$1"+Aa+(nt(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~dc(t,"stretch",0)?LA(ne(t,"stretch","fill-available"),e,n)+t:t}break;case 5152:case 5920:return ne(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,a,l,u){return Ee+i+":"+s+u+(o?Ee+i+"-span:"+(a?l:+l-+s)+u:"")+t});case 4949:if(nt(t,e+6)===121)return ne(t,":",":"+pe)+t;break;case 6444:switch(nt(t,nt(t,14)===45?18:11)){case 120:return ne(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+pe+(nt(t,14)===45?"inline-":"")+"box$3$1"+pe+"$2$3$1"+Ee+"$2box$3")+t;case 100:return ne(t,":",":"+Ee)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ne(t,"scroll-","scroll-snap-")+t}return t}function Ef(t,e){for(var n="",r=0;r<t.length;r++)n+=e(t[r],r,t,e)||"";return n}function R6(t,e,n,r){switch(t.type){case y6:if(t.children.length)break;case g6:case hv:return t.return=t.return||t.value;case PA:return"";case RA:return t.return=t.value+"{"+Ef(t.children,r)+"}";case Cd:if(!Dn(t.value=t.props.join(",")))return""}return Dn(n=Ef(t.children,r))?t.return=t.value+"{"+n+"}":""}function b6(t){var e=OA(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function N6(t){return function(e){e.root||(e=e.return)&&t(e)}}function O6(t,e,n,r){if(t.length>-1&&!t.return)switch(t.type){case hv:t.return=LA(t.value,t.length,n);return;case RA:return Ef([Rr(t,{value:ne(t.value,"@","@"+pe)})],r);case Cd:if(t.length)return _6(n=t.props,function(i){switch(nr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_s(Rr(t,{props:[ne(i,/:(read-\w+)/,":"+Aa+"$1")]})),_s(Rr(t,{props:[i]})),Lm(t,{props:W1(n,r)});break;case"::placeholder":_s(Rr(t,{props:[ne(i,/:(plac\w+)/,":"+pe+"input-$1")]})),_s(Rr(t,{props:[ne(i,/:(plac\w+)/,":"+Aa+"$1")]})),_s(Rr(t,{props:[ne(i,/:(plac\w+)/,Ee+"input-$1")]})),_s(Rr(t,{props:[i]})),Lm(t,{props:W1(n,r)});break}return""})}}var D6={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Wt={},Eo=typeof process<"u"&&Wt!==void 0&&(Wt.REACT_APP_SC_ATTR||Wt.SC_ATTR)||"data-styled",VA="active",MA="data-styled-version",Nd="6.1.8",mv=`/*!sc*/
`,gv=typeof window<"u"&&"HTMLElement"in window,L6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Wt.REACT_APP_SC_DISABLE_SPEEDY!==""?Wt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Wt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Wt!==void 0&&Wt.SC_DISABLE_SPEEDY!==void 0&&Wt.SC_DISABLE_SPEEDY!==""&&Wt.SC_DISABLE_SPEEDY!=="false"&&Wt.SC_DISABLE_SPEEDY),Od=Object.freeze([]),To=Object.freeze({});function V6(t,e,n){return n===void 0&&(n=To),t.theme!==n.theme&&t.theme||e||n.theme}var $A=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,$6=/(^-|-$)/g;function G1(t){return t.replace(M6,"-").replace($6,"")}var F6=/(a)(d)/gi,$u=52,Q1=function(t){return String.fromCharCode(t+(t>25?39:97))};function $m(t){var e,n="";for(e=Math.abs(t);e>$u;e=e/$u|0)n=Q1(e%$u)+n;return(Q1(e%$u)+n).replace(F6,"$1-$2")}var jh,FA=5381,Us=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},jA=function(t){return Us(FA,t)};function UA(t){return $m(jA(t)>>>0)}function j6(t){return t.displayName||t.name||"Component"}function Uh(t){return typeof t=="string"&&!0}var zA=typeof Symbol=="function"&&Symbol.for,BA=zA?Symbol.for("react.memo"):60115,U6=zA?Symbol.for("react.forward_ref"):60112,z6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},B6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},HA={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},H6=((jh={})[U6]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},jh[BA]=HA,jh);function Y1(t){return("type"in(e=t)&&e.type.$$typeof)===BA?HA:"$$typeof"in t?H6[t.$$typeof]:z6;var e}var W6=Object.defineProperty,q6=Object.getOwnPropertyNames,X1=Object.getOwnPropertySymbols,K6=Object.getOwnPropertyDescriptor,G6=Object.getPrototypeOf,J1=Object.prototype;function WA(t,e,n){if(typeof e!="string"){if(J1){var r=G6(e);r&&r!==J1&&WA(t,r,n)}var i=q6(e);X1&&(i=i.concat(X1(e)));for(var s=Y1(t),o=Y1(e),a=0;a<i.length;++a){var l=i[a];if(!(l in B6||n&&n[l]||o&&l in o||s&&l in s)){var u=K6(e,l);try{W6(t,l,u)}catch{}}}}return t}function Io(t){return typeof t=="function"}function yv(t){return typeof t=="object"&&"styledComponentId"in t}function Vi(t,e){return t&&e?"".concat(t," ").concat(e):t||e||""}function Fm(t,e){if(t.length===0)return"";for(var n=t[0],r=1;r<t.length;r++)n+=e?e+t[r]:t[r];return n}function yl(t){return t!==null&&typeof t=="object"&&t.constructor.name===Object.name&&!("props"in t&&t.$$typeof)}function jm(t,e,n){if(n===void 0&&(n=!1),!n&&!yl(t)&&!Array.isArray(t))return e;if(Array.isArray(e))for(var r=0;r<e.length;r++)t[r]=jm(t[r],e[r]);else if(yl(e))for(var r in e)t[r]=jm(t[r],e[r]);return t}function vv(t,e){Object.defineProperty(t,"toString",{value:e})}function eu(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(t," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var Q6=function(){function t(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return t.prototype.indexOfGroup=function(e){for(var n=0,r=0;r<e;r++)n+=this.groupSizes[r];return n},t.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;e>=s;)if((s<<=1)<0)throw eu(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(a,n[o])&&(this.groupSizes[e]++,a++)},t.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;this.groupSizes[e]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},t.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var r=this.groupSizes[e],i=this.indexOfGroup(e),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(mv);return n},t}(),mc=new Map,Tf=new Map,gc=1,Fu=function(t){if(mc.has(t))return mc.get(t);for(;Tf.has(gc);)gc++;var e=gc++;return mc.set(t,e),Tf.set(e,t),e},Y6=function(t,e){gc=e+1,mc.set(t,e),Tf.set(e,t)},X6="style[".concat(Eo,"][").concat(MA,'="').concat(Nd,'"]'),J6=new RegExp("^".concat(Eo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Z6=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},e$=function(t,e){for(var n,r=((n=e.textContent)!==null&&n!==void 0?n:"").split(mv),i=[],s=0,o=r.length;s<o;s++){var a=r[s].trim();if(a){var l=a.match(J6);if(l){var u=0|parseInt(l[1],10),c=l[2];u!==0&&(Y6(c,u),Z6(t,c,l[3]),t.getTag().insertRules(u,i)),i.length=0}else i.push(a)}}};function t$(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var qA=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){var l=Array.from(a.querySelectorAll("style[".concat(Eo,"]")));return l[l.length-1]}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Eo,VA),r.setAttribute(MA,Nd);var o=t$();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},n$=function(){function t(e){this.element=qA(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw eu(17)}(this.element),this.length=0}return t.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},t.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},t}(),r$=function(){function t(e){this.element=qA(e),this.nodes=this.element.childNodes,this.length=0}return t.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},t.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},t}(),i$=function(){function t(e){this.rules=[],this.length=0}return t.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},t.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},t}(),Z1=gv,s$={isServer:!gv,useCSSOMInjection:!L6},KA=function(){function t(e,n,r){e===void 0&&(e=To),n===void 0&&(n={});var i=this;this.options=Ut(Ut({},s$),e),this.gs=n,this.names=new Map(r),this.server=!!e.isServer,!this.server&&gv&&Z1&&(Z1=!1,function(s){for(var o=document.querySelectorAll(X6),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Eo)!==VA&&(e$(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),vv(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",u=function(f){var d=function(g){return Tf.get(g)}(f);if(d===void 0)return"continue";var p=s.names.get(d),v=o.getGroup(f);if(p===void 0||v.length===0)return"continue";var w="".concat(Eo,".g").concat(f,'[id="').concat(d,'"]'),T="";p!==void 0&&p.forEach(function(g){g.length>0&&(T+="".concat(g,","))}),l+="".concat(v).concat(w,'{content:"').concat(T,'"}').concat(mv)},c=0;c<a;c++)u(c);return l}(i)})}return t.registerId=function(e){return Fu(e)},t.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new t(Ut(Ut({},this.options),e),this.gs,n&&this.names||void 0)},t.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new i$(i):r?new n$(i):new r$(i)}(this.options),new Q6(e)));var e},t.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},t.prototype.registerName=function(e,n){if(Fu(e),this.names.has(e))this.names.get(e).add(n);else{var r=new Set;r.add(n),this.names.set(e,r)}},t.prototype.insertRules=function(e,n,r){this.registerName(e,n),this.getTag().insertRules(Fu(e),r)},t.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.prototype.clearRules=function(e){this.getTag().clearGroup(Fu(e)),this.clearNames(e)},t.prototype.clearTag=function(){this.tag=void 0},t}(),o$=/&/g,a$=/^\s*\/\/.*$/gm;function GA(t,e){return t.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(r){return"".concat(e," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=GA(n.children,e)),n})}function l$(t){var e,n,r,i=t===void 0?To:t,s=i.options,o=s===void 0?To:s,a=i.plugins,l=a===void 0?Od:a,u=function(d,p,v){return v.startsWith(n)&&v.endsWith(n)&&v.replaceAll(n,"").length>0?".".concat(e):d},c=l.slice();c.push(function(d){d.type===Cd&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(o$,n).replace(r,u))}),o.prefix&&c.push(O6),c.push(R6);var f=function(d,p,v,w){p===void 0&&(p=""),v===void 0&&(v=""),w===void 0&&(w="&"),e=w,n=p,r=new RegExp("\\".concat(n,"\\b"),"g");var T=d.replace(a$,""),g=C6(v||p?"".concat(v," ").concat(p," { ").concat(T," }"):T);o.namespace&&(g=GA(g,o.namespace));var h=[];return Ef(g,b6(c.concat(N6(function(m){return h.push(m)})))),h};return f.hash=l.length?l.reduce(function(d,p){return p.name||eu(15),Us(d,p.name)},FA).toString():"",f}var u$=new KA,Um=l$(),QA=je.createContext({shouldForwardProp:void 0,styleSheet:u$,stylis:Um});QA.Consumer;je.createContext(void 0);function ew(){return C.useContext(QA)}var YA=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=Um);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,vv(this,function(){throw eu(12,String(r.name))})}return t.prototype.getName=function(e){return e===void 0&&(e=Um),this.name+e.hash},t}(),c$=function(t){return t>="A"&&t<="Z"};function tw(t){for(var e="",n=0;n<t.length;n++){var r=t[n];if(n===1&&r==="-"&&t[0]==="-")return t;c$(r)?e+="-"+r.toLowerCase():e+=r}return e.startsWith("ms-")?"-"+e:e}var XA=function(t){return t==null||t===!1||t===""},JA=function(t){var e,n,r=[];for(var i in t){var s=t[i];t.hasOwnProperty(i)&&!XA(s)&&(Array.isArray(s)&&s.isCss||Io(s)?r.push("".concat(tw(i),":"),s,";"):yl(s)?r.push.apply(r,gl(gl(["".concat(i," {")],JA(s),!1),["}"],!1)):r.push("".concat(tw(i),": ").concat((e=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in D6||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function zi(t,e,n,r){if(XA(t))return[];if(yv(t))return[".".concat(t.styledComponentId)];if(Io(t)){if(!Io(s=t)||s.prototype&&s.prototype.isReactComponent||!e)return[t];var i=t(e);return zi(i,e,n,r)}var s;return t instanceof YA?n?(t.inject(n,r),[t.getName(r)]):[t]:yl(t)?JA(t):Array.isArray(t)?Array.prototype.concat.apply(Od,t.map(function(o){return zi(o,e,n,r)})):[t.toString()]}function f$(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Io(n)&&!yv(n))return!1}return!0}var d$=jA(Nd),h$=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f$(e),this.componentId=n,this.baseHash=Us(d$,n),this.baseStyle=r,KA.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Vi(i,this.staticRulesId);else{var s=Fm(zi(this.rules,e,n,r)),o=$m(Us(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var a=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,a)}i=Vi(i,o),this.staticRulesId=o}else{for(var l=Us(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var d=Fm(zi(f,e,n,r));l=Us(l,d+c),u+=d}}if(u){var p=$m(l>>>0);n.hasNameForId(this.componentId,p)||n.insertRules(this.componentId,p,r(u,".".concat(p),void 0,this.componentId)),i=Vi(i,p)}}return i},t}(),ZA=je.createContext(void 0);ZA.Consumer;var zh={};function p$(t,e,n){var r=yv(t),i=t,s=!Uh(t),o=e.attrs,a=o===void 0?Od:o,l=e.componentId,u=l===void 0?function(E,I){var x=typeof E!="string"?"sc":G1(E);zh[x]=(zh[x]||0)+1;var k="".concat(x,"-").concat(UA(Nd+x+zh[x]));return I?"".concat(I,"-").concat(k):k}(e.displayName,e.parentComponentId):l,c=e.displayName,f=c===void 0?function(E){return Uh(E)?"styled.".concat(E):"Styled(".concat(j6(E),")")}(t):c,d=e.displayName&&e.componentId?"".concat(G1(e.displayName),"-").concat(e.componentId):e.componentId||u,p=r&&i.attrs?i.attrs.concat(a).filter(Boolean):a,v=e.shouldForwardProp;if(r&&i.shouldForwardProp){var w=i.shouldForwardProp;if(e.shouldForwardProp){var T=e.shouldForwardProp;v=function(E,I){return w(E,I)&&T(E,I)}}else v=w}var g=new h$(n,d,r?i.componentStyle:void 0);function h(E,I){return function(x,k,V){var G=x.attrs,H=x.componentStyle,Je=x.defaultProps,ee=x.foldedComponentIds,ie=x.styledComponentId,de=x.target,$e=je.useContext(ZA),gt=ew(),We=x.shouldForwardProp||gt.shouldForwardProp,L=V6(k,$e,Je)||To,B=function(Cn,yt,dn){for(var Xn,Pn=Ut(Ut({},yt),{className:void 0,theme:dn}),Ti=0;Ti<Cn.length;Ti+=1){var Ii=Io(Xn=Cn[Ti])?Xn(Pn):Xn;for(var Rn in Ii)Pn[Rn]=Rn==="className"?Vi(Pn[Rn],Ii[Rn]):Rn==="style"?Ut(Ut({},Pn[Rn]),Ii[Rn]):Ii[Rn]}return yt.className&&(Pn.className=Vi(Pn.className,yt.className)),Pn}(G,k,L),Q=B.as||de,he={};for(var ce in B)B[ce]===void 0||ce[0]==="$"||ce==="as"||ce==="theme"&&B.theme===L||(ce==="forwardedAs"?he.as=B.forwardedAs:We&&!We(ce,Q)||(he[ce]=B[ce]));var xn=function(Cn,yt){var dn=ew(),Xn=Cn.generateAndInjectStyles(yt,dn.styleSheet,dn.stylis);return Xn}(H,B),Mt=Vi(ee,ie);return xn&&(Mt+=" "+xn),B.className&&(Mt+=" "+B.className),he[Uh(Q)&&!$A.has(Q)?"class":"className"]=Mt,he.ref=V,C.createElement(Q,he)}(m,E,I)}h.displayName=f;var m=je.forwardRef(h);return m.attrs=p,m.componentStyle=g,m.displayName=f,m.shouldForwardProp=v,m.foldedComponentIds=r?Vi(i.foldedComponentIds,i.styledComponentId):"",m.styledComponentId=d,m.target=r?i.target:t,Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(I){for(var x=[],k=1;k<arguments.length;k++)x[k-1]=arguments[k];for(var V=0,G=x;V<G.length;V++)jm(I,G[V],!0);return I}({},i.defaultProps,E):E}}),vv(m,function(){return".".concat(m.styledComponentId)}),s&&WA(m,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}function nw(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n}var rw=function(t){return Object.assign(t,{isCss:!0})};function ex(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(Io(t)||yl(t))return rw(zi(nw(Od,gl([t],e,!0))));var r=t;return e.length===0&&r.length===1&&typeof r[0]=="string"?zi(r):rw(zi(nw(r,e)))}function zm(t,e,n){if(n===void 0&&(n=To),!e)throw eu(1,e);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return t(e,n,ex.apply(void 0,gl([i],s,!1)))};return r.attrs=function(i){return zm(t,e,Ut(Ut({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return zm(t,e,Ut(Ut({},n),i))},r}var tx=function(t){return zm(p$,t)},hs=tx;$A.forEach(function(t){hs[t]=tx(t)});function _v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=Fm(ex.apply(void 0,gl([t],e,!1))),i=UA(r);return new YA(i,r)}const nx="#4fa94d",rx={"aria-busy":!0,role:"progressbar"},ix=hs.div`
  display: ${t=>t.$visible?"flex":"none"};
`,sx="http://www.w3.org/2000/svg",m$=({height:t="100",width:e="100",color:n=nx,ariaLabel:r="audio-loading",wrapperStyle:i={},wrapperClass:s,visible:o=!0})=>y.jsx(ix,{$visible:o,style:{...i},className:s,"data-testid":"audio-loading","aria-label":r,...rx,children:y.jsxs("svg",{height:`${t}`,width:`${e}`,fill:n,viewBox:"0 0 55 80",xmlns:sx,"data-testid":"audio-svg",children:[y.jsx("title",{children:"Audio Visualization"}),y.jsx("desc",{children:"Animated representation of audio data"}),y.jsxs("g",{transform:"matrix(1 0 0 -1 0 80)",children:[y.jsx("rect",{width:"10",height:"20",rx:"3",children:y.jsx("animate",{attributeName:"height",begin:"0s",dur:"4.3s",values:"20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",calcMode:"linear",repeatCount:"indefinite"})}),y.jsx("rect",{x:"15",width:"10",height:"80",rx:"3",children:y.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"80;55;33;5;75;23;73;33;12;14;60;80",calcMode:"linear",repeatCount:"indefinite"})}),y.jsx("rect",{x:"30",width:"10",height:"50",rx:"3",children:y.jsx("animate",{attributeName:"height",begin:"0s",dur:"1.4s",values:"50;34;78;23;56;23;34;76;80;54;21;50",calcMode:"linear",repeatCount:"indefinite"})}),y.jsx("rect",{x:"45",width:"10",height:"30",rx:"3",children:y.jsx("animate",{attributeName:"height",begin:"0s",dur:"2s",values:"30;45;13;80;56;72;45;76;34;23;67;30",calcMode:"linear",repeatCount:"indefinite"})})]})]})}),pn=242.776657104492,g$=1.6,y$=_v`
12.5% {
  stroke-dasharray: ${pn*.14}px, ${pn}px;
  stroke-dashoffset: -${pn*.11}px;
}
43.75% {
  stroke-dasharray: ${pn*.35}px, ${pn}px;
  stroke-dashoffset: -${pn*.35}px;
}
100% {
  stroke-dasharray: ${pn*.01}px, ${pn}px;
  stroke-dashoffset: -${pn*.99}px;
}
`;hs.path`
  stroke-dasharray: ${pn*.01}px, ${pn};
  stroke-dashoffset: 0;
  animation: ${y$} ${g$}s linear infinite;
`;const v$=_v`
to {
   transform: rotate(360deg);
 }
`;hs.svg`
  animation: ${v$} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;hs.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const _$=({height:t=80,width:e=80,radius:n=9,color:r=nx,ariaLabel:i="three-dots-loading",wrapperStyle:s,wrapperClass:o,visible:a=!0})=>y.jsx(ix,{style:s,$visible:a,className:o,"data-testid":"three-dots-loading","aria-label":i,...rx,children:y.jsxs("svg",{width:e,height:t,viewBox:"0 0 120 30",xmlns:sx,fill:r,"data-testid":"three-dots-svg",children:[y.jsxs("circle",{cx:"15",cy:"15",r:Number(n)+6,children:[y.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"60",cy:"15",r:n,attributeName:"fill-opacity",from:"1",to:"0.3",children:[y.jsx("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})]}),y.jsxs("circle",{cx:"105",cy:"15",r:Number(n)+6,children:[y.jsx("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),y.jsx("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})]})]})}),w$=_v`
to {
   stroke-dashoffset: 136;
 }
`;hs.polygon`
  stroke-dasharray: 17;
  animation: ${w$} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;hs.svg`
  transform-origin: 50% 65%;
`;function ju(){return y.jsx("div",{className:" flex items-center justify-center",children:y.jsx(_$,{visible:!0,height:"20",width:"20",color:"#facc15",radius:"9",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClass:""})})}const Bh="$";function Pr(t){const[e,n]=t.split(", "),[r,i,s]=e.split("/"),o="20"+s,a=`${r}/${i}/${o}, ${n}`;return Date.parse(a)}function xa(t){return Number.isInteger(t)?t:Number(t.toFixed(2))}const E$={entries:[],filteredEntries:[],type:"inc",desc:"",amount:0,isEditing:!1,idToEdit:null,descToEdit:"",amountToEdit:0};function T$(t,{type:e,payload:n}){switch(e){case"type":return{...t,type:n};case"desc":return{...t,desc:n};case"value":return{...t,amount:n};case"loadEntries":return{...t,entries:n,filteredEntries:n};case"addEntry":return{...t,entries:[...t.entries,n],filteredEntries:[...t.filteredEntries,n],desc:"",amount:0};case"deleteEntry":return{...t,entries:t.entries.filter(r=>r.id!==n),filteredEntries:t.filteredEntries.filter(r=>r.id!==n)};case"openEditMode":return{...t,isEditing:!0,idToEdit:n.id,descToEdit:n.oldDesc,amountToEdit:n.oldVal};case"edit":return n.newDesc===""||n.newAmount===0?(alert("Please fill in all fields"),t):{...t,entries:t.entries.map(r=>r.id!==t.idToEdit?r:{...r,desc:n.newDesc,amount:n.newAmount}),filteredEntries:t.filteredEntries.map(r=>r.id!==t.idToEdit?r:{...r,desc:n.newDesc,amount:n.newAmount}),isEditing:!1,idToEdit:null,descToEdit:"",amountToEdit:0};case"closeModal":return{...t,isEditing:!1,idToEdit:null,descToEdit:"",amountToEdit:0};case"sortOption":return n==="date-asc"?{...t,entries:t.entries.sort((r,i)=>Pr(r.time)-Pr(i.time)),filteredEntries:t.filteredEntries.sort((r,i)=>Pr(r.time)-Pr(i.time))}:n==="date-desc"?{...t,entries:t.entries.sort((r,i)=>Pr(i.time)-Pr(r.time)),filteredEntries:t.filteredEntries.sort((r,i)=>Pr(i.time)-Pr(r.time))}:n==="amount-h"?{...t,entries:t.entries.sort((r,i)=>i.amount-r.amount),filteredEntries:t.filteredEntries.sort((r,i)=>i.amount-r.amount)}:n==="amount-l"?{...t,entries:t.entries.sort((r,i)=>r.amount-i.amount),filteredEntries:t.filteredEntries.sort((r,i)=>r.amount-i.amount)}:t;case"monthSort":return n===""?{...t,filteredEntries:[...t.entries]}:{...t,filteredEntries:t.entries.filter(r=>r.time.slice(0,2)===n)};default:throw new Error("Invalid action type")}}const ox=C.createContext();function I$({children:t}){const{user:e}=An(),[n,r]=C.useState(!1),[{entries:i,filteredEntries:s,type:o,desc:a,amount:l,isEditing:u,idToEdit:c,descToEdit:f,amountToEdit:d},p]=C.useReducer(T$,E$),v=[...s].filter(E=>E.type==="inc"),w=[...s].filter(E=>E.type==="exp"),T=v.map(E=>Number(E.amount)).reduce((E,I)=>E+I,0),g=w.map(E=>Number(E.amount)).reduce((E,I)=>E+I,0),h=T-g,m=Math.round(g/T*100)||"";return C.useEffect(()=>{if(!e)return;r(!0);const E=Gl(Yl,"users",e.uid);av(E).then(I=>{I.exists()?(p({type:"loadEntries",payload:I.data().entries}),r(!1)):(p({type:"loadEntries",payload:[]}),r(!1))}).catch(I=>console.log(I.message))},[e]),y.jsx(ox.Provider,{value:{entries:i,type:o,desc:a,amount:l,isEditing:u,idToEdit:c,descToEdit:f,amountToEdit:d,dispatch:p,incomeEntries:v,expenseEntries:w,incomeFunds:T,expenseFunds:g,availableFunds:h,percentage:m,isFetchingEntries:n},children:t})}function ps(){const t=C.useContext(ox);if(t===void 0)throw new Error("useAuthContext must be used within a AuthProvider");return t}function S$(){const{availableFunds:t,incomeFunds:e,expenseFunds:n,percentage:r,isFetchingEntries:i}=ps();return y.jsxs("div",{children:[y.jsx("div",{children:y.jsxs($h,{bgColor:"bg-stone-700",ring:"ring-3 ring-slate-400 ring-offset-2",children:[y.jsx("span",{className:"block text-yellow-400 ",children:"Available funds: "}),y.jsx("h3",{className:"font-bold text-yellow-400 text-xl",children:i?y.jsx(ju,{}):`${Bh} ${xa(t)}`})]})}),y.jsxs("div",{className:" flex w-full",children:[y.jsx("div",{className:" mr-4",children:y.jsxs($h,{bgColor:"bg-green-200",ring:"ring-3 ring-green-400 ring-offset-2",children:[y.jsx("span",{className:"block text-slate-700",children:"Income: "}),y.jsx("h3",{className:"font-bold text-slate-700 text-xl",children:i?y.jsx(ju,{}):`${Bh} ${xa(e)}`})]})}),y.jsx("div",{className:" ml-4",children:y.jsxs($h,{bgColor:"bg-rose-200",ring:"ring-3 ring-red-400 ring-offset-2",children:[y.jsx("span",{className:"block text-slate-700",children:"Expense: "}),y.jsx("h3",{className:"font-bold text-slate-700 text-xl",children:i?y.jsx(ju,{}):`${Bh} ${xa(n)}`})]})})]}),y.jsxs("span",{className:" m-auto mt-1 bg-stone-700 text-yellow-400 text-l p-2 w-1/2 flex items-center justify-center",title:"Expense / Income ratio",children:[i&&y.jsx(ju,{}),i||`Your expenses are ${n===0?0:r} % of your income.`]})]})}function k$(){const{user:t}=An(),{dispatch:e,desc:n,amount:r,entries:i,type:s}=ps(),o=C.useRef(null),a=async()=>{try{const l={id:crypto.randomUUID(),type:s,desc:n,amount:r,time:new Date().toLocaleString("en-us",{day:"2-digit",month:"2-digit",year:"2-digit",hour:"2-digit",minute:"2-digit"})};if(l.desc===""){alert("Please fill in description field");return}if(l.amount<=0){alert("Amount field must not be empty or less than 0");return}e({type:"addEntry",payload:l});const u=Gl(Yl,"users",t.uid);await FM(u,{entries:UM(l)})}catch{$n.error("Error adding entry to the database")}};return C.useEffect(()=>{o.current.focus()},[s,i]),y.jsxs("form",{className:"flex justify-between items-center w-2/3",children:[y.jsx("input",{type:"text",placeholder:"Add description",className:"py-2 px-4 mr-4",onChange:l=>e({type:"desc",payload:l.target.value}),value:n,ref:o,maxLength:30}),y.jsx("input",{type:"number",placeholder:"Add amount",className:"py-2 px-4 mr-4",onChange:l=>e({type:"value",payload:xa(Number(l.target.value))}),value:r,max:1e9}),y.jsxs("button",{type:"submit",className:"inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",onClick:l=>{l.preventDefault(),a()},children:[y.jsx(St,{icon:zb})," Add entry"]})]})}function A$(){const{dispatch:t}=ps();return y.jsxs("div",{className:"flex justify-between items-center my-4 mx-auto w-1/4 py-2 px-4",children:[y.jsx("label",{className:" uppercase",children:"Income"}),y.jsx("input",{type:"radio",name:"inputs",defaultChecked:!0,onChange:()=>t({type:"type",payload:"inc"})}),y.jsx("label",{className:" uppercase",children:"Expense"}),y.jsx("input",{type:"radio",name:"inputs",onChange:()=>t({type:"type",payload:"exp"})})]})}function x$(){return y.jsx(Xl,{children:y.jsxs("div",{className:" flex justify-between items-center py-2 px-4 my-4 m-auto w-full border-solid border-slate-700 border-2",children:[y.jsx(A$,{}),y.jsx(k$,{})]})})}function C$({entry:t}){const{user:e}=An(),{dispatch:n}=ps();function r(){$n(`📃 Entry created at ${t.time}`)}async function i(){try{const s=Gl(Yl,"users",e.uid),o=await av(s);if(o.exists()){const l=o.data().entries.filter(u=>u.id!==t.id);await lv(s,{entries:l},{merge:!0}),n({type:"deleteEntry",payload:t.id}),$n("📃 Entry successfully deleted")}else{const a=e.email.split("@")[0];$n(`📃 No document found for user: ${a}`)}}catch(s){$n.error(`📃 ${s.message}`)}}return y.jsxs("li",{className:"py-2 px-4 mb-2 w-full flex justify-between items-center border-y-2 border-slate-700 odd:bg-yellow-400 ",children:[y.jsx("span",{className:" w-52 block",children:t.desc}),y.jsx("div",{children:y.jsx("span",{className:" w-48",children:t.amount})}),y.jsxs("div",{className:"flex items-center justify-center gap-2",children:[y.jsx("span",{className:"btn-info text-slate-700  hover:text-slate-800 cursor-pointer",onClick:r,children:y.jsx(St,{icon:jb,title:"Click for date/time info"})}),y.jsx("span",{className:"btn-edit  text-slate-700  hover:text-slate-800 cursor-pointer",onClick:()=>{n({type:"openEditMode",payload:{id:t.id,oldDesc:t.desc,oldVal:t.amount}})},children:y.jsx(St,{icon:Vb,title:"Edit entry"})}),y.jsx("span",{className:"btn-delete  text-slate-700 cursor-pointer hover:text-slate-800",onClick:()=>i(),children:y.jsx(St,{icon:Fb,title:"Delete entry"})})]})]})}function iw({type:t,entriesType:e}){return y.jsx("div",{className:"w-full [&>*:last-child]:mb-4 max-h-[45vh] overflow-y-auto",children:y.jsx("ul",{className:`list ${t}`,children:e.map(n=>y.jsx(C$,{entry:n},n.id))})})}function P$(){const{user:t}=An(),{descToEdit:e,amountToEdit:n,idToEdit:r,dispatch:i}=ps(),[s,o]=C.useState(e),[a,l]=C.useState(n),u=C.useRef(null);async function c(f){try{const d=Gl(Yl,"users",t.uid),p=await av(d);if(p.exists()){const v=p.data().entries,w=v.findIndex(T=>T.id===f);w!==-1?(v[w]={...v[w],desc:s,amount:a},await lv(d,{entries:v},{merge:!0}),i({type:"edit",payload:{newDesc:s,newAmount:a}}),$n("📃 Entry successfully updated")):$n(`📃 No entry found with id: ${f}`)}else $n(`📃 No document found for user with id: ${t.uid}`)}catch(d){$n.error(`📃 ${d.message}`)}}return C.useEffect(()=>{u.current.focus()},[]),y.jsx("div",{className:"fixed inset-0 bg-stone-700 bg-opacity-40 backdrop-blur-sm flex items-center justify-center",children:y.jsxs("div",{className:" p-4 relative z-[100] w-[27%] h-[23%] border border-stone-700 bg-yellow-400 rounded-xl",children:[y.jsx("span",{className:" absolute right-4 cursor-pointer transition-all duration-500 ease-in-out hover:text-red-500 font-bold text-xl",title:"Close editing modal ",onClick:()=>i({type:"closeModal"}),children:"X"}),y.jsx("h2",{className:"text-center text-l uppercase mb-8 font-bold text-xl",children:"Edit entry"}),y.jsxs("form",{className:"flex my-4 m-auto w-full ",children:[y.jsx("input",{type:"text",value:s,onChange:f=>{o(f.target.value)},ref:u,className:"mr-2 p-2 border border-slate-700  w-2/3 rounded-md",maxLength:30}),y.jsx("input",{type:"number",value:a,onChange:f=>{l(xa(Number(f.target.value)))},className:" p-2 border border-slate-700 rounded-md",max:1e9})]}),y.jsxs("button",{type:"submit",className:"block mr-auto mt-10  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",onClick:f=>{f.preventDefault(),c(r)},children:[y.jsx(St,{icon:Hb})," Save Changes"]})]})})}function sw(){return y.jsx("div",{className:" flex items-center justify-center",children:y.jsx(m$,{height:"50",width:"50",color:"#facc15",ariaLabel:"audio-loading",wrapperStyle:{},wrapperClass:"wrapper-class",visible:!0})})}function ow({icon:t,h2Text:e}){return y.jsx("div",{className:"flex items-center justify-between",children:y.jsx("div",{children:y.jsxs("h2",{className:"uppercase font-semibold mb-2 text-stone-700",children:[t,e]})})})}function R$(){const[t,e]=C.useState("date-asc"),[n,r]=C.useState(""),{dispatch:i}=ps();function s(a){e(a.target.value),i({type:"sortOption",payload:a.target.value})}function o(a){r(a.target.value),i({type:"monthSort",payload:a.target.value})}return y.jsxs("div",{className:" mb-2 flex",children:[y.jsxs("div",{className:" mr-1",children:[y.jsx("label",{htmlFor:"sortOptions",children:"Sort entries: "}),y.jsxs("select",{id:"sortOptions",value:t,onChange:s,children:[y.jsx("option",{value:"date-asc",children:"Oldest First"}),y.jsx("option",{value:"date-desc",children:"Newest First"}),y.jsx("option",{value:"amount-h",children:"Amount Highest"}),y.jsx("option",{value:"amount-l",children:"Amount Lowest"})]})]}),y.jsxs("div",{children:[y.jsx("label",{htmlFor:"month",children:" "}),y.jsxs("select",{id:"monthSorting",value:n,onChange:o,children:[y.jsx("option",{value:"",children:"Choose by month - All"}),y.jsx("option",{value:"01",children:"January"}),y.jsx("option",{value:"02",children:"February"}),y.jsx("option",{value:"03",children:"March"}),y.jsx("option",{value:"04",children:"April"}),y.jsx("option",{value:"05",children:"May"}),y.jsx("option",{value:"06",children:"June"}),y.jsx("option",{value:"07",children:"July"}),y.jsx("option",{value:"08",children:"August"}),y.jsx("option",{value:"09",children:"September"}),y.jsx("option",{value:"10",children:"October"}),y.jsx("option",{value:"11",children:"November"}),y.jsx("option",{value:"12",children:"December"})]})]})]})}function b$(){const{isFetchingEntries:t,incomeEntries:e,expenseEntries:n,isEditing:r}=ps();return y.jsx(Xl,{children:y.jsxs("div",{className:"w-full flex flex-col m-auto",children:[y.jsx("div",{className:" mb-2",children:y.jsx(R$,{listType:" income"})}),y.jsxs("div",{className:" flex",children:[y.jsxs("div",{className:"w-full mx-2",children:[y.jsx(ow,{icon:y.jsx(St,{icon:Bb,className:" text-green-500"}),h2Text:" income"}),t&&y.jsx(sw,{}),e.length===0&&!t&&y.jsx("p",{children:"No income entries"}),y.jsx(iw,{type:"inc-list",entriesType:e})]}),y.jsxs("div",{className:"w-full mx-2",children:[y.jsx(ow,{icon:y.jsx(St,{icon:Ub,className:" text-red-500"}),h2Text:" expense"}),t&&y.jsx(sw,{}),n.length===0&&!t&&y.jsx("p",{children:"No expense entries"}),y.jsx(iw,{type:"exp-list",entriesType:n})]})]}),r&&y.jsx(P$,{})]})})}function N$(){const{logOut:t}=An();return C.useEffect(()=>(window.addEventListener("beforeunload",t),()=>{window.removeEventListener("beforeunload",t)}),[t]),y.jsxs("section",{children:[y.jsx(xd,{}),y.jsxs("div",{className:" w-screen flex flex-col items-center justify-center",children:[y.jsx(S$,{}),y.jsx(x$,{}),y.jsx(b$,{})]})]})}function O$(){return y.jsxs("div",{children:[y.jsx(xd,{}),y.jsxs("div",{className:"flex items-top justify-center h-screen mt-20",children:[y.jsx("h2",{className:"text-4xl text-stone-700 font-bold",children:"Page Not Found"}),y.jsx(bT,{to:"/",children:y.jsxs("button",{className:"inline-block ml-4  rounded-full bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[y.jsx(St,{icon:$b})," Back to Home"]})})]})]})}function D$(){return y.jsxs(y.Fragment,{children:[y.jsx(xd,{}),y.jsx("section",{style:{backgroundImage:" url('/bgd.png')",height:"calc(100vh - 4.5rem)"},className:"w-full bg-cover  bg-top",children:y.jsx(Xl,{children:y.jsxs("div",{style:{height:"calc(100vh - 4.5rem)"},className:" flex flex-col p-4 items-left justify-center",children:[y.jsx("p",{className:" text-stone-700 text-5xl w-2/3 leading-[4rem] mb-8",children:"Keep track of your finances with this awesome app!"}),y.jsx("div",{children:y.jsx(bT,{to:"/signup",children:y.jsxs("button",{className:"inline-block rounded-full w-40 bg-stone-700  font-semibold uppercase tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 sm:px-6 sm:py-4 px-4 py-2 md:px-5 md:py-2.5 text-xs",children:[y.jsx(St,{icon:fI})," Sign Up Here"]})})})]})})})]})}function L$({children:t}){const{user:e}=An(),n=Uf();return C.useEffect(()=>{e||n("/")},[e,n]),t}function V$(){return y.jsxs(O2,{basename:"/firebase-budget-tracker/",children:[y.jsx(BM,{children:y.jsxs(x2,{children:[y.jsx(Zo,{path:"/",element:y.jsx(D$,{})}),y.jsx(Zo,{path:"signup",element:y.jsx(m6,{})}),y.jsx(Zo,{path:"budget-tracker",element:y.jsx(L$,{children:y.jsx(I$,{children:y.jsx(N$,{})})})}),y.jsx(Zo,{path:"*",element:y.jsx(O$,{})})]})}),y.jsx(DN,{position:"bottom-center",reverseOrder:!1,gutter:12,containerStyle:{margin:"8px"},toastOptions:{success:{duration:3e3},error:{duration:3e3},style:{fontSize:"16px",maxWidth:"500px",padding:"16px 24px",marginBottom:"35px",backgroundColor:"bg-stone-100",color:"bg-stone-700"}}})]})}Hh.createRoot(document.getElementById("root")).render(y.jsx(je.StrictMode,{children:y.jsx(V$,{})}));
