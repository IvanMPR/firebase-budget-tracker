import{j as N,h as ur,o as J,i as ga,u as At,n as In,b as ba,k as dr,_ as mr}from"./index-JhpyRkv7.js";function vr(){return N.jsx("div",{children:N.jsx("h1",{className:" uppercase text-normal font-bold tracking-normal mb-1 text-stone-700 md:text-l w-40 md:tracking-wider xl:text-xl xl:w-60",children:"Budget Tracker"})})}function Ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ln(Object(n),!0).forEach(function(a){H(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ln(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function gt(e){"@babel/helpers - typeof";return gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},gt(e)}function gr(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Fn(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function br(e,t,n){return t&&Fn(e.prototype,t),n&&Fn(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function H(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function an(e,t){return pr(e)||xr(e,t)||ya(e,t)||kr()}function Ke(e){return yr(e)||hr(e)||ya(e)||wr()}function yr(e){if(Array.isArray(e))return $t(e)}function pr(e){if(Array.isArray(e))return e}function hr(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xr(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,s,l;try{for(n=n.call(e);!(r=(s=n.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(f){i=!0,l=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw l}}return a}}function ya(e,t){if(e){if(typeof e=="string")return $t(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $t(e,t)}}function $t(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function wr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kr(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Mn=function(){},rn={},pa={},ha=null,xa={mark:Mn,measure:Mn};try{typeof window<"u"&&(rn=window),typeof document<"u"&&(pa=document),typeof MutationObserver<"u"&&(ha=MutationObserver),typeof performance<"u"&&(xa=performance)}catch{}var Ar=rn.navigator||{},Dn=Ar.userAgent,Rn=Dn===void 0?"":Dn,xe=rn,D=pa,jn=ha,at=xa;xe.document;var be=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",wa=~Rn.indexOf("MSIE")||~Rn.indexOf("Trident/"),rt,it,st,ot,lt,me="___FONT_AWESOME___",Yt=16,ka="fa",Aa="svg-inline--fa",Ee="data-fa-i2svg",Wt="data-fa-pseudo-element",Sr="data-fa-pseudo-element-pending",sn="data-prefix",on="data-icon",zn="fontawesome-i2svg",_r="async",Or=["HTML","HEAD","STYLE","SCRIPT"],Sa=function(){try{return!0}catch{return!1}}(),M="classic",z="sharp",ln=[M,z];function Qe(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[M]}})}var We=Qe((rt={},H(rt,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),H(rt,z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),rt)),Be=Qe((it={},H(it,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),H(it,z,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),it)),qe=Qe((st={},H(st,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),H(st,z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),st)),Er=Qe((ot={},H(ot,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),H(ot,z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ot)),Pr=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,_a="fa-layers-text",Cr=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Nr=Qe((lt={},H(lt,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),H(lt,z,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),lt)),Oa=[1,2,3,4,5,6,7,8,9,10],Tr=Oa.concat([11,12,13,14,15,16,17,18,19,20]),Ir=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Xe=new Set;Object.keys(Be[M]).map(Xe.add.bind(Xe));Object.keys(Be[z]).map(Xe.add.bind(Xe));var Lr=[].concat(ln,Ke(Xe),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Se.GROUP,Se.SWAP_OPACITY,Se.PRIMARY,Se.SECONDARY]).concat(Oa.map(function(e){return"".concat(e,"x")})).concat(Tr.map(function(e){return"w-".concat(e)})),He=xe.FontAwesomeConfig||{};function Fr(e){var t=D.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Mr(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(D&&typeof D.querySelector=="function"){var Dr=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dr.forEach(function(e){var t=an(e,2),n=t[0],a=t[1],r=Mr(Fr(n));r!=null&&(He[a]=r)})}var Ea={styleDefault:"solid",familyDefault:"classic",cssPrefix:ka,replacementClass:Aa,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};He.familyPrefix&&(He.cssPrefix=He.familyPrefix);var De=p(p({},Ea),He);De.autoReplaceSvg||(De.observeMutations=!1);var w={};Object.keys(Ea).forEach(function(e){Object.defineProperty(w,e,{enumerable:!0,set:function(n){De[e]=n,$e.forEach(function(a){return a(w)})},get:function(){return De[e]}})});Object.defineProperty(w,"familyPrefix",{enumerable:!0,set:function(t){De.cssPrefix=t,$e.forEach(function(n){return n(w)})},get:function(){return De.cssPrefix}});xe.FontAwesomeConfig=w;var $e=[];function Rr(e){return $e.push(e),function(){$e.splice($e.indexOf(e),1)}}var ye=Yt,oe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function jr(e){if(!(!e||!be)){var t=D.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=D.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return D.head.insertBefore(t,a),e}}var zr="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ge(){for(var e=12,t="";e-- >0;)t+=zr[Math.random()*62|0];return t}function Re(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function fn(e){return e.classList?Re(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Pa(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Vr(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Pa(e[n]),'" ')},"").trim()}function St(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function cn(e){return e.size!==oe.size||e.x!==oe.x||e.y!==oe.y||e.rotate!==oe.rotate||e.flipX||e.flipY}function Ur(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(s," ").concat(l)},d={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:d}}function Hr(e){var t=e.transform,n=e.width,a=n===void 0?Yt:n,r=e.height,i=r===void 0?Yt:r,s=e.startCentered,l=s===void 0?!1:s,f="";return l&&wa?f+="translate(".concat(t.x/ye-a/2,"em, ").concat(t.y/ye-i/2,"em) "):l?f+="translate(calc(-50% + ".concat(t.x/ye,"em), calc(-50% + ").concat(t.y/ye,"em)) "):f+="translate(".concat(t.x/ye,"em, ").concat(t.y/ye,"em) "),f+="scale(".concat(t.size/ye*(t.flipX?-1:1),", ").concat(t.size/ye*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var $r=`:root, :host {
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
}`;function Ca(){var e=ka,t=Aa,n=w.cssPrefix,a=w.replacementClass,r=$r;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(l,".".concat(a))}return r}var Vn=!1;function Lt(){w.autoAddCss&&!Vn&&(jr(Ca()),Vn=!0)}var Yr={mixout:function(){return{dom:{css:Ca,insertCss:Lt}}},hooks:function(){return{beforeDOMElementCreation:function(){Lt()},beforeI2svg:function(){Lt()}}}},ve=xe||{};ve[me]||(ve[me]={});ve[me].styles||(ve[me].styles={});ve[me].hooks||(ve[me].hooks={});ve[me].shims||(ve[me].shims=[]);var re=ve[me],Na=[],Wr=function e(){D.removeEventListener("DOMContentLoaded",e),bt=1,Na.map(function(t){return t()})},bt=!1;be&&(bt=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),bt||D.addEventListener("DOMContentLoaded",Wr));function Br(e){be&&(bt?setTimeout(e,0):Na.push(e))}function Je(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?Pa(e):"<".concat(t," ").concat(Vr(a),">").concat(i.map(Je).join(""),"</").concat(t,">")}function Un(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var qr=function(t,n){return function(a,r,i,s){return t.call(n,a,r,i,s)}},Ft=function(t,n,a,r){var i=Object.keys(t),s=i.length,l=r!==void 0?qr(n,r):n,f,d,m;for(a===void 0?(f=1,m=t[i[0]]):(f=0,m=a);f<s;f++)d=i[f],m=l(m,t[d],d,t);return m};function Xr(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function Bt(e){var t=Xr(e);return t.length===1?t[0].toString(16):null}function Gr(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Hn(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function qt(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Hn(t);typeof re.hooks.addPack=="function"&&!r?re.hooks.addPack(e,Hn(t)):re.styles[e]=p(p({},re.styles[e]||{}),i),e==="fas"&&qt("fa",t)}var ft,ct,ut,Te=re.styles,Kr=re.shims,Qr=(ft={},H(ft,M,Object.values(qe[M])),H(ft,z,Object.values(qe[z])),ft),un=null,Ta={},Ia={},La={},Fa={},Ma={},Jr=(ct={},H(ct,M,Object.keys(We[M])),H(ct,z,Object.keys(We[z])),ct);function Zr(e){return~Lr.indexOf(e)}function ei(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!Zr(r)?r:null}var Da=function(){var t=function(i){return Ft(Te,function(s,l,f){return s[f]=Ft(l,i,{}),s},{})};Ta=t(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var l=i[2].filter(function(f){return typeof f=="number"});l.forEach(function(f){r[f.toString(16)]=s})}return r}),Ia=t(function(r,i,s){if(r[s]=s,i[2]){var l=i[2].filter(function(f){return typeof f=="string"});l.forEach(function(f){r[f]=s})}return r}),Ma=t(function(r,i,s){var l=i[2];return r[s]=s,l.forEach(function(f){r[f]=s}),r});var n="far"in Te||w.autoFetchSvg,a=Ft(Kr,function(r,i){var s=i[0],l=i[1],f=i[2];return l==="far"&&!n&&(l="fas"),typeof s=="string"&&(r.names[s]={prefix:l,iconName:f}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:l,iconName:f}),r},{names:{},unicodes:{}});La=a.names,Fa=a.unicodes,un=_t(w.styleDefault,{family:w.familyDefault})};Rr(function(e){un=_t(e.styleDefault,{family:w.familyDefault})});Da();function dn(e,t){return(Ta[e]||{})[t]}function ti(e,t){return(Ia[e]||{})[t]}function _e(e,t){return(Ma[e]||{})[t]}function Ra(e){return La[e]||{prefix:null,iconName:null}}function ni(e){var t=Fa[e],n=dn("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function we(){return un}var mn=function(){return{prefix:null,iconName:null,rest:[]}};function _t(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?M:n,r=We[a][e],i=Be[a][e]||Be[a][r],s=e in re.styles?e:null;return i||s||null}var $n=(ut={},H(ut,M,Object.keys(qe[M])),H(ut,z,Object.keys(qe[z])),ut);function Ot(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},H(t,M,"".concat(w.cssPrefix,"-").concat(M)),H(t,z,"".concat(w.cssPrefix,"-").concat(z)),t),s=null,l=M;(e.includes(i[M])||e.some(function(d){return $n[M].includes(d)}))&&(l=M),(e.includes(i[z])||e.some(function(d){return $n[z].includes(d)}))&&(l=z);var f=e.reduce(function(d,m){var g=ei(w.cssPrefix,m);if(Te[m]?(m=Qr[l].includes(m)?Er[l][m]:m,s=m,d.prefix=m):Jr[l].indexOf(m)>-1?(s=m,d.prefix=_t(m,{family:l})):g?d.iconName=g:m!==w.replacementClass&&m!==i[M]&&m!==i[z]&&d.rest.push(m),!r&&d.prefix&&d.iconName){var y=s==="fa"?Ra(d.iconName):{},S=_e(d.prefix,d.iconName);y.prefix&&(s=null),d.iconName=y.iconName||S||d.iconName,d.prefix=y.prefix||d.prefix,d.prefix==="far"&&!Te.far&&Te.fas&&!w.autoFetchSvg&&(d.prefix="fas")}return d},mn());return(e.includes("fa-brands")||e.includes("fab"))&&(f.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(f.prefix="fad"),!f.prefix&&l===z&&(Te.fass||w.autoFetchSvg)&&(f.prefix="fass",f.iconName=_e(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||s==="fa")&&(f.prefix=we()||"fas"),f}var ai=function(){function e(){gr(this,e),this.definitions={}}return br(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(l){n.definitions[l]=p(p({},n.definitions[l]||{}),s[l]),qt(l,s[l]);var f=qe[M][l];f&&qt(f,s[l]),Da()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var s=r[i],l=s.prefix,f=s.iconName,d=s.icon,m=d[2];n[l]||(n[l]={}),m.length>0&&m.forEach(function(g){typeof g=="string"&&(n[l][g]=d)}),n[l][f]=d}),n}}]),e}(),Yn=[],Ie={},Me={},ri=Object.keys(Me);function ii(e,t){var n=t.mixoutsTo;return Yn=e,Ie={},Object.keys(Me).forEach(function(a){ri.indexOf(a)===-1&&delete Me[a]}),Yn.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),gt(r[s])==="object"&&Object.keys(r[s]).forEach(function(l){n[s]||(n[s]={}),n[s][l]=r[s][l]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(s){Ie[s]||(Ie[s]=[]),Ie[s].push(i[s])})}a.provides&&a.provides(Me)}),n}function Xt(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Ie[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(a))}),t}function Pe(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Ie[e]||[];r.forEach(function(i){i.apply(null,n)})}function ge(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Me[e]?Me[e].apply(null,t):void 0}function Gt(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||we();if(t)return t=_e(n,t)||t,Un(ja.definitions,n,t)||Un(re.styles,n,t)}var ja=new ai,si=function(){w.autoReplaceSvg=!1,w.observeMutations=!1,Pe("noAuto")},oi={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return be?(Pe("beforeI2svg",t),ge("pseudoElements2svg",t),ge("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;w.autoReplaceSvg===!1&&(w.autoReplaceSvg=!0),w.observeMutations=!0,Br(function(){fi({autoReplaceSvgRoot:n}),Pe("watch",t)})}},li={icon:function(t){if(t===null)return null;if(gt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:_e(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=_t(t[0]);return{prefix:a,iconName:_e(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(w.cssPrefix,"-"))>-1||t.match(Pr))){var r=Ot(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||we(),iconName:_e(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=we();return{prefix:i,iconName:_e(i,t)||t}}}},Z={noAuto:si,config:w,dom:oi,parse:li,library:ja,findIconDefinition:Gt,toHtml:Je},fi=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?D:n;(Object.keys(re.styles).length>0||w.autoFetchSvg)&&be&&w.autoReplaceSvg&&Z.dom.i2svg({node:a})};function Et(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return Je(a)})}}),Object.defineProperty(e,"node",{get:function(){if(be){var a=D.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function ci(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,s=e.transform;if(cn(s)&&n.found&&!a.found){var l=n.width,f=n.height,d={x:l/f/2,y:.5};r.style=St(p(p({},i),{},{"transform-origin":"".concat(d.x+s.x/16,"em ").concat(d.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ui(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(w.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:p(p({},r),{},{id:s}),children:a}]}]}function vn(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,s=e.transform,l=e.symbol,f=e.title,d=e.maskId,m=e.titleId,g=e.extra,y=e.watchable,S=y===void 0?!1:y,P=a.found?a:n,V=P.width,I=P.height,Y=r==="fak",k=[w.replacementClass,i?"".concat(w.cssPrefix,"-").concat(i):""].filter(function(X){return g.classes.indexOf(X)===-1}).filter(function(X){return X!==""||!!X}).concat(g.classes).join(" "),C={children:[],attributes:p(p({},g.attributes),{},{"data-prefix":r,"data-icon":i,class:k,role:g.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(V," ").concat(I)})},j=Y&&!~g.classes.indexOf("fa-fw")?{width:"".concat(V/I*16*.0625,"em")}:{};S&&(C.attributes[Ee]=""),f&&(C.children.push({tag:"title",attributes:{id:C.attributes["aria-labelledby"]||"title-".concat(m||Ge())},children:[f]}),delete C.attributes.title);var _=p(p({},C),{},{prefix:r,iconName:i,main:n,mask:a,maskId:d,transform:s,symbol:l,styles:p(p({},j),g.styles)}),ee=a.found&&n.found?ge("generateAbstractMask",_)||{children:[],attributes:{}}:ge("generateAbstractIcon",_)||{children:[],attributes:{}},K=ee.children,fe=ee.attributes;return _.children=K,_.attributes=fe,l?ui(_):ci(_)}function Wn(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,s=e.extra,l=e.watchable,f=l===void 0?!1:l,d=p(p(p({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});f&&(d[Ee]="");var m=p({},s.styles);cn(r)&&(m.transform=Hr({transform:r,startCentered:!0,width:n,height:a}),m["-webkit-transform"]=m.transform);var g=St(m);g.length>0&&(d.style=g);var y=[];return y.push({tag:"span",attributes:d,children:[t]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}function di(e){var t=e.content,n=e.title,a=e.extra,r=p(p(p({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=St(a.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var Mt=re.styles;function Kt(e){var t=e[0],n=e[1],a=e.slice(4),r=an(a,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(w.cssPrefix,"-").concat(Se.GROUP)},children:[{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Se.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(w.cssPrefix,"-").concat(Se.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var mi={found:!1,width:512,height:512};function vi(e,t){!Sa&&!w.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Qt(e,t){var n=t;return t==="fa"&&w.styleDefault!==null&&(t=we()),new Promise(function(a,r){if(ge("missingIconAbstract"),n==="fa"){var i=Ra(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&Mt[t]&&Mt[t][e]){var s=Mt[t][e];return a(Kt(s))}vi(e,t),a(p(p({},mi),{},{icon:w.showMissingIcons&&e?ge("missingIconAbstract")||{}:{}}))})}var Bn=function(){},Jt=w.measurePerformance&&at&&at.mark&&at.measure?at:{mark:Bn,measure:Bn},Ue='FA "6.5.1"',gi=function(t){return Jt.mark("".concat(Ue," ").concat(t," begins")),function(){return za(t)}},za=function(t){Jt.mark("".concat(Ue," ").concat(t," ends")),Jt.measure("".concat(Ue," ").concat(t),"".concat(Ue," ").concat(t," begins"),"".concat(Ue," ").concat(t," ends"))},gn={begin:gi,end:za},dt=function(){};function qn(e){var t=e.getAttribute?e.getAttribute(Ee):null;return typeof t=="string"}function bi(e){var t=e.getAttribute?e.getAttribute(sn):null,n=e.getAttribute?e.getAttribute(on):null;return t&&n}function yi(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(w.replacementClass)}function pi(){if(w.autoReplaceSvg===!0)return mt.replace;var e=mt[w.autoReplaceSvg];return e||mt.replace}function hi(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function xi(e){return D.createElement(e)}function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?hi:xi:n;if(typeof e=="string")return D.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){r.appendChild(Va(s,{ceFn:a}))}),r}function wi(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var mt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(Va(r),n)}),n.getAttribute(Ee)===null&&w.keepOriginalSource){var a=D.createComment(wi(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~fn(n).indexOf(w.replacementClass))return mt.replace(t);var r=new RegExp("".concat(w.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(l,f){return f===w.replacementClass||f.match(r)?l.toSvg.push(f):l.toNode.push(f),l},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=a.map(function(l){return Je(l)}).join(`
`);n.setAttribute(Ee,""),n.innerHTML=s}};function Xn(e){e()}function Ua(e,t){var n=typeof t=="function"?t:dt;if(e.length===0)n();else{var a=Xn;w.mutateApproach===_r&&(a=xe.requestAnimationFrame||Xn),a(function(){var r=pi(),i=gn.begin("mutate");e.map(r),i(),n()})}}var bn=!1;function Ha(){bn=!0}function Zt(){bn=!1}var yt=null;function Gn(e){if(jn&&w.observeMutations){var t=e.treeCallback,n=t===void 0?dt:t,a=e.nodeCallback,r=a===void 0?dt:a,i=e.pseudoElementsCallback,s=i===void 0?dt:i,l=e.observeMutationsRoot,f=l===void 0?D:l;yt=new jn(function(d){if(!bn){var m=we();Re(d).forEach(function(g){if(g.type==="childList"&&g.addedNodes.length>0&&!qn(g.addedNodes[0])&&(w.searchPseudoElements&&s(g.target),n(g.target)),g.type==="attributes"&&g.target.parentNode&&w.searchPseudoElements&&s(g.target.parentNode),g.type==="attributes"&&qn(g.target)&&~Ir.indexOf(g.attributeName))if(g.attributeName==="class"&&bi(g.target)){var y=Ot(fn(g.target)),S=y.prefix,P=y.iconName;g.target.setAttribute(sn,S||m),P&&g.target.setAttribute(on,P)}else yi(g.target)&&r(g.target)})}}),be&&yt.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ki(){yt&&yt.disconnect()}function Ai(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),s=i[0],l=i.slice(1);return s&&l.length>0&&(a[s]=l.join(":").trim()),a},{})),n}function Si(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=Ot(fn(e));return r.prefix||(r.prefix=we()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ti(r.prefix,e.innerText)||dn(r.prefix,Bt(e.innerText))),!r.iconName&&w.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function _i(e){var t=Re(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return w.autoA11y&&(n?t["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(a||Ge()):(t["aria-hidden"]="true",t.focusable="false")),t}function Oi(){return{iconName:null,title:null,titleId:null,prefix:null,transform:oe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Kn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Si(e),a=n.iconName,r=n.prefix,i=n.rest,s=_i(e),l=Xt("parseNodeAttributes",{},e),f=t.styleParser?Ai(e):[];return p({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:oe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:s}},l)}var Ei=re.styles;function $a(e){var t=w.autoReplaceSvg==="nest"?Kn(e,{styleParser:!1}):Kn(e);return~t.extra.classes.indexOf(_a)?ge("generateLayersText",e,t):ge("generateSvgReplacementMutation",e,t)}var ke=new Set;ln.map(function(e){ke.add("fa-".concat(e))});Object.keys(We[M]).map(ke.add.bind(ke));Object.keys(We[z]).map(ke.add.bind(ke));ke=Ke(ke);function Qn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!be)return Promise.resolve();var n=D.documentElement.classList,a=function(g){return n.add("".concat(zn,"-").concat(g))},r=function(g){return n.remove("".concat(zn,"-").concat(g))},i=w.autoFetchSvg?ke:ln.map(function(m){return"fa-".concat(m)}).concat(Object.keys(Ei));i.includes("fa")||i.push("fa");var s=[".".concat(_a,":not([").concat(Ee,"])")].concat(i.map(function(m){return".".concat(m,":not([").concat(Ee,"])")})).join(", ");if(s.length===0)return Promise.resolve();var l=[];try{l=Re(e.querySelectorAll(s))}catch{}if(l.length>0)a("pending"),r("complete");else return Promise.resolve();var f=gn.begin("onTree"),d=l.reduce(function(m,g){try{var y=$a(g);y&&m.push(y)}catch(S){Sa||S.name==="MissingIcon"&&console.error(S)}return m},[]);return new Promise(function(m,g){Promise.all(d).then(function(y){Ua(y,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),f(),m()})}).catch(function(y){f(),g(y)})})}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;$a(e).then(function(n){n&&Ua([n],t)})}function Ci(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Gt(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Gt(r||{})),e(a,p(p({},n),{},{mask:r}))}}var Ni=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?oe:a,i=n.symbol,s=i===void 0?!1:i,l=n.mask,f=l===void 0?null:l,d=n.maskId,m=d===void 0?null:d,g=n.title,y=g===void 0?null:g,S=n.titleId,P=S===void 0?null:S,V=n.classes,I=V===void 0?[]:V,Y=n.attributes,k=Y===void 0?{}:Y,C=n.styles,j=C===void 0?{}:C;if(t){var _=t.prefix,ee=t.iconName,K=t.icon;return Et(p({type:"icon"},t),function(){return Pe("beforeDOMElementCreation",{iconDefinition:t,params:n}),w.autoA11y&&(y?k["aria-labelledby"]="".concat(w.replacementClass,"-title-").concat(P||Ge()):(k["aria-hidden"]="true",k.focusable="false")),vn({icons:{main:Kt(K),mask:f?Kt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:_,iconName:ee,transform:p(p({},oe),r),symbol:s,title:y,maskId:m,titleId:P,extra:{attributes:k,styles:j,classes:I}})})}},Ti={mixout:function(){return{icon:Ci(Ni)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Qn,n.nodeCallback=Pi,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?D:a,i=n.callback,s=i===void 0?function(){}:i;return Qn(r,s)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,s=a.titleId,l=a.prefix,f=a.transform,d=a.symbol,m=a.mask,g=a.maskId,y=a.extra;return new Promise(function(S,P){Promise.all([Qt(r,l),m.iconName?Qt(m.iconName,m.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(V){var I=an(V,2),Y=I[0],k=I[1];S([n,vn({icons:{main:Y,mask:k},prefix:l,iconName:r,transform:f,symbol:d,maskId:g,title:i,titleId:s,extra:y,watchable:!0})])}).catch(P)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.transform,l=n.styles,f=St(l);f.length>0&&(r.style=f);var d;return cn(s)&&(d=ge("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),a.push(d||i.icon),{children:a,attributes:r}}}},Ii={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return Et({type:"layer"},function(){Pe("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(l){Array.isArray(l)?l.map(function(f){s=s.concat(f.abstract)}):s=s.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(w.cssPrefix,"-layers")].concat(Ke(i)).join(" ")},children:s}]})}}}},Li={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,s=a.classes,l=s===void 0?[]:s,f=a.attributes,d=f===void 0?{}:f,m=a.styles,g=m===void 0?{}:m;return Et({type:"counter",content:n},function(){return Pe("beforeDOMElementCreation",{content:n,params:a}),di({content:n.toString(),title:i,extra:{attributes:d,styles:g,classes:["".concat(w.cssPrefix,"-layers-counter")].concat(Ke(l))}})})}}}},Fi={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?oe:r,s=a.title,l=s===void 0?null:s,f=a.classes,d=f===void 0?[]:f,m=a.attributes,g=m===void 0?{}:m,y=a.styles,S=y===void 0?{}:y;return Et({type:"text",content:n},function(){return Pe("beforeDOMElementCreation",{content:n,params:a}),Wn({content:n,transform:p(p({},oe),i),title:l,extra:{attributes:g,styles:S,classes:["".concat(w.cssPrefix,"-layers-text")].concat(Ke(d))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,s=a.extra,l=null,f=null;if(wa){var d=parseInt(getComputedStyle(n).fontSize,10),m=n.getBoundingClientRect();l=m.width/d,f=m.height/d}return w.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Wn({content:n.innerHTML,width:l,height:f,transform:i,title:r,extra:s,watchable:!0})])}}},Mi=new RegExp('"',"ug"),Jn=[1105920,1112319];function Di(e){var t=e.replace(Mi,""),n=Gr(t,0),a=n>=Jn[0]&&n<=Jn[1],r=t.length===2?t[0]===t[1]:!1;return{value:Bt(r?t[0]:t),isSecondary:a||r}}function Zn(e,t){var n="".concat(Sr).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=Re(e.children),s=i.filter(function(K){return K.getAttribute(Wt)===t})[0],l=xe.getComputedStyle(e,t),f=l.getPropertyValue("font-family").match(Cr),d=l.getPropertyValue("font-weight"),m=l.getPropertyValue("content");if(s&&!f)return e.removeChild(s),a();if(f&&m!=="none"&&m!==""){var g=l.getPropertyValue("content"),y=~["Sharp"].indexOf(f[2])?z:M,S=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?Be[y][f[2].toLowerCase()]:Nr[y][d],P=Di(g),V=P.value,I=P.isSecondary,Y=f[0].startsWith("FontAwesome"),k=dn(S,V),C=k;if(Y){var j=ni(V);j.iconName&&j.prefix&&(k=j.iconName,S=j.prefix)}if(k&&!I&&(!s||s.getAttribute(sn)!==S||s.getAttribute(on)!==C)){e.setAttribute(n,C),s&&e.removeChild(s);var _=Oi(),ee=_.extra;ee.attributes[Wt]=t,Qt(k,S).then(function(K){var fe=vn(p(p({},_),{},{icons:{main:K,mask:mn()},prefix:S,iconName:C,extra:ee,watchable:!0})),X=D.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(X,e.firstChild):e.appendChild(X),X.outerHTML=fe.map(function(Q){return Je(Q)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ri(e){return Promise.all([Zn(e,"::before"),Zn(e,"::after")])}function ji(e){return e.parentNode!==document.head&&!~Or.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Wt)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function ea(e){if(be)return new Promise(function(t,n){var a=Re(e.querySelectorAll("*")).filter(ji).map(Ri),r=gn.begin("searchPseudoElements");Ha(),Promise.all(a).then(function(){r(),Zt(),t()}).catch(function(){r(),Zt(),n()})})}var zi={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=ea,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?D:a;w.searchPseudoElements&&ea(r)}}},ta=!1,Vi={mixout:function(){return{dom:{unwatch:function(){Ha(),ta=!0}}}},hooks:function(){return{bootstrap:function(){Gn(Xt("mutationObserverCallbacks",{}))},noAuto:function(){ki()},watch:function(n){var a=n.observeMutationsRoot;ta?Zt():Gn(Xt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},na=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),s=i[0],l=i.slice(1).join("-");if(s&&l==="h")return a.flipX=!0,a;if(s&&l==="v")return a.flipY=!0,a;if(l=parseFloat(l),isNaN(l))return a;switch(s){case"grow":a.size=a.size+l;break;case"shrink":a.size=a.size-l;break;case"left":a.x=a.x-l;break;case"right":a.x=a.x+l;break;case"up":a.y=a.y-l;break;case"down":a.y=a.y+l;break;case"rotate":a.rotate=a.rotate+l;break}return a},n)},Ui={mixout:function(){return{parse:{transform:function(n){return na(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=na(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,s=n.iconWidth,l={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),d="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),m="rotate(".concat(r.rotate," 0 0)"),g={transform:"".concat(f," ").concat(d," ").concat(m)},y={transform:"translate(".concat(s/2*-1," -256)")},S={outer:l,inner:g,path:y};return{tag:"g",attributes:p({},S.outer),children:[{tag:"g",attributes:p({},S.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:p(p({},a.icon.attributes),S.path)}]}]}}}},Dt={x:0,y:0,width:"100%",height:"100%"};function aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Hi(e){return e.tag==="g"?e.children:[e]}var $i={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?Ot(r.split(" ").map(function(s){return s.trim()})):mn();return i.prefix||(i.prefix=we()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.mask,l=n.maskId,f=n.transform,d=i.width,m=i.icon,g=s.width,y=s.icon,S=Ur({transform:f,containerWidth:g,iconWidth:d}),P={tag:"rect",attributes:p(p({},Dt),{},{fill:"white"})},V=m.children?{children:m.children.map(aa)}:{},I={tag:"g",attributes:p({},S.inner),children:[aa(p({tag:m.tag,attributes:p(p({},m.attributes),S.path)},V))]},Y={tag:"g",attributes:p({},S.outer),children:[I]},k="mask-".concat(l||Ge()),C="clip-".concat(l||Ge()),j={tag:"mask",attributes:p(p({},Dt),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[P,Y]},_={tag:"defs",children:[{tag:"clipPath",attributes:{id:C},children:Hi(y)},j]};return a.push(_,{tag:"rect",attributes:p({fill:"currentColor","clip-path":"url(#".concat(C,")"),mask:"url(#".concat(k,")")},Dt)}),{children:a,attributes:r}}}},Yi={provides:function(t){var n=!1;xe.matchMedia&&(n=xe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:p(p({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=p(p({},i),{},{attributeName:"opacity"}),l={tag:"circle",attributes:p(p({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:p(p({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:p(p({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(l),a.push({tag:"path",attributes:p(p({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:p(p({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:p(p({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:p(p({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},Wi={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},Bi=[Yr,Ti,Ii,Li,Fi,zi,Vi,Ui,$i,Yi,Wi];ii(Bi,{mixoutsTo:Z});Z.noAuto;Z.config;Z.library;Z.dom;var en=Z.parse;Z.findIconDefinition;Z.toHtml;var qi=Z.icon;Z.layer;Z.text;Z.counter;var Ya={exports:{}},Xi="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Gi=Xi,Ki=Gi;function Wa(){}function Ba(){}Ba.resetWarningCache=Wa;var Qi=function(){function e(a,r,i,s,l,f){if(f!==Ki){var d=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw d.name="Invariant Violation",d}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ba,resetWarningCache:Wa};return n.PropTypes=n,n};Ya.exports=Qi();var Ji=Ya.exports;const O=ur(Ji);function ra(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ra(Object(n),!0).forEach(function(a){Le(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ra(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function pt(e){"@babel/helpers - typeof";return pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},pt(e)}function Le(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Zi(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function es(e,t){if(e==null)return{};var n=Zi(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function tn(e){return ts(e)||ns(e)||as(e)||rs()}function ts(e){if(Array.isArray(e))return nn(e)}function ns(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function as(e,t){if(e){if(typeof e=="string")return nn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nn(e,t)}}function nn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function rs(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function is(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,l=e.flash,f=e.spin,d=e.spinPulse,m=e.spinReverse,g=e.pulse,y=e.fixedWidth,S=e.inverse,P=e.border,V=e.listItem,I=e.flip,Y=e.size,k=e.rotation,C=e.pull,j=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":l,"fa-spin":f,"fa-spin-reverse":m,"fa-spin-pulse":d,"fa-pulse":g,"fa-fw":y,"fa-inverse":S,"fa-border":P,"fa-li":V,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},Le(t,"fa-".concat(Y),typeof Y<"u"&&Y!==null),Le(t,"fa-rotate-".concat(k),typeof k<"u"&&k!==null&&k!==0),Le(t,"fa-pull-".concat(C),typeof C<"u"&&C!==null),Le(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(j).map(function(_){return j[_]?_:null}).filter(function(_){return _})}function ss(e){return e=e-0,e===e}function qa(e){return ss(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var os=["style"];function ls(e){return e.charAt(0).toUpperCase()+e.slice(1)}function fs(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=qa(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[ls(r)]=i:t[r]=i,t},{})}function Xa(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(f){return Xa(e,f)}),r=Object.keys(t.attributes||{}).reduce(function(f,d){var m=t.attributes[d];switch(d){case"class":f.attrs.className=m,delete t.attributes.class;break;case"style":f.attrs.style=fs(m);break;default:d.indexOf("aria-")===0||d.indexOf("data-")===0?f.attrs[d.toLowerCase()]=m:f.attrs[qa(d)]=m}return f},{attrs:{}}),i=n.style,s=i===void 0?{}:i,l=es(n,os);return r.attrs.style=pe(pe({},r.attrs.style),s),e.apply(void 0,[t.tag,pe(pe({},r.attrs),l)].concat(tn(a)))}var Ga=!1;try{Ga=!0}catch{}function cs(){if(!Ga&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function ia(e){if(e&&pt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(en.icon)return en.icon(e);if(e===null)return null;if(e&&pt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Rt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Le({},e,t):{}}var je=J.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,s=e.title,l=e.titleId,f=e.maskId,d=ia(n),m=Rt("classes",[].concat(tn(is(e)),tn(i.split(" ")))),g=Rt("transform",typeof e.transform=="string"?en.transform(e.transform):e.transform),y=Rt("mask",ia(a)),S=qi(d,pe(pe(pe(pe({},m),g),y),{},{symbol:r,title:s,titleId:l,maskId:f}));if(!S)return cs("Could not find icon",d),null;var P=S.abstract,V={ref:t};return Object.keys(e).forEach(function(I){je.defaultProps.hasOwnProperty(I)||(V[I]=e[I])}),us(P[0],V)});je.displayName="FontAwesomeIcon";je.propTypes={beat:O.bool,border:O.bool,beatFade:O.bool,bounce:O.bool,className:O.string,fade:O.bool,flash:O.bool,mask:O.oneOfType([O.object,O.array,O.string]),maskId:O.string,fixedWidth:O.bool,inverse:O.bool,flip:O.oneOf([!0,!1,"horizontal","vertical","both"]),icon:O.oneOfType([O.object,O.array,O.string]),listItem:O.bool,pull:O.oneOf(["right","left"]),pulse:O.bool,rotation:O.oneOf([0,90,180,270]),shake:O.bool,size:O.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:O.bool,spinPulse:O.bool,spinReverse:O.bool,symbol:O.oneOfType([O.bool,O.string]),title:O.string,titleId:O.string,transform:O.oneOfType([O.string,O.object]),swapOpacity:O.bool};je.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var us=Xa.bind(null,J.createElement),ds={prefix:"fas",iconName:"arrow-right-from-bracket",icon:[512,512,["sign-out"],"f08b","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"]},$s={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},ms={prefix:"fas",iconName:"arrow-right-to-bracket",icon:[512,512,["sign-in"],"f090","M352 96l64 0c17.7 0 32 14.3 32 32l0 256c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l64 0c53 0 96-43 96-96l0-256c0-53-43-96-96-96l-64 0c-17.7 0-32 14.3-32 32s14.3 32 32 32zm-9.4 182.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L242.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},Ys={prefix:"fas",iconName:"house-user",icon:[576,512,["home-user"],"e1b0","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z"]},Ws={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},Bs={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},qs={prefix:"fas",iconName:"arrow-down-short-wide",icon:[576,512,["sort-amount-desc","sort-amount-down-alt"],"f884","M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 128H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Xs={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},Gs={prefix:"fas",iconName:"arrow-up-right-dots",icon:[576,512,[],"e4b7","M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM448 208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM400 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm128 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM272 384a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM144 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM576 336a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-48-80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Ks={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},Qs={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]};function vs(){const e=ga(),{logOut:t}=At();function n(){t().then(()=>{e("/"),In.success("Logged out successfully")}).catch(a=>{In.error(a.message)})}return N.jsxs("button",{onClick:n,className:"inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-normal md:tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50  px-2 py-2  text-xs md:px-5 md:py-2.5",children:[N.jsx(je,{icon:ds})," Logout"]})}function gs(){return N.jsx("div",{className:" w-8 h-8 border border-slate-800 rounded-full  items-center justify-center hidden md:flex",children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 485.211 485.21",className:"fill-current text-slate-800",children:N.jsx("path",{d:"M394.235 333.585h-30.327c-33.495 0-60.653-27.158-60.653-60.654v-19.484c13.418-15.948 23.042-34.812 29.024-54.745.621-3.36 3.855-5.02 6.012-7.33 11.611-11.609 13.894-31.2 5.185-45.149-1.186-2.117-3.322-3.953-3.201-6.576 0-17.784.089-35.596-.023-53.366-.476-21.455-6.608-43.773-21.65-59.66-12.144-12.836-28.819-20.479-46.022-23.75-21.739-4.147-44.482-3.937-66.013 1.54-18.659 4.709-36.189 15.637-47.028 31.836-9.598 14.083-13.803 31.183-14.513 48.036-.266 18.094-.061 36.233-.116 54.371.413 3.631-2.667 6.088-4.058 9.094-8.203 14.881-4.592 35.155 8.589 45.978 3.344 2.308 3.97 6.515 5.181 10.142 5.748 17.917 15.282 34.487 27.335 48.925v20.138c0 33.496-27.157 60.654-60.651 60.654H90.978S36.014 348.743 0 424.56v30.327c0 16.759 13.564 30.321 30.327 30.321h424.562c16.759 0 30.322-13.562 30.322-30.321V424.56c-36.012-75.811-90.976-90.975-90.976-90.975z"})})})}function bs(){const{user:e}=At(),t=e.email.split("@")[0];return N.jsxs("div",{className:"flex items-center",children:[N.jsx("div",{className:"mx-5",children:N.jsx(vs,{})}),N.jsxs("div",{className:"flex items-center",children:[N.jsx("span",{className:" mr-1  text-stone-700",children:`${t}`}),N.jsx("span",{className:" ml-1 ",children:N.jsx(gs,{})})]})]})}function ys({children:e}){return N.jsx("div",{className:" flex px-2 justify-between items-center w-full md:w-4/5 l:w-2/3 l:m-auto xl:w-2/3 xl:m-auto md:m-auto",children:e})}var Ze=e=>e.type==="checkbox",Fe=e=>e instanceof Date,G=e=>e==null;const Ka=e=>typeof e=="object";var $=e=>!G(e)&&!Array.isArray(e)&&Ka(e)&&!Fe(e),ps=e=>$(e)&&e.target?Ze(e.target)?e.target.checked:e.target.value:e,hs=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,xs=(e,t)=>e.has(hs(t)),ws=e=>{const t=e.constructor&&e.constructor.prototype;return $(t)&&t.hasOwnProperty("isPrototypeOf")},yn=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ue(e){let t;const n=Array.isArray(e);if(e instanceof Date)t=new Date(e);else if(e instanceof Set)t=new Set(e);else if(!(yn&&(e instanceof Blob||e instanceof FileList))&&(n||$(e)))if(t=n?[]:{},!n&&!ws(e))t=e;else for(const a in e)e.hasOwnProperty(a)&&(t[a]=ue(e[a]));else return e;return t}var et=e=>Array.isArray(e)?e.filter(Boolean):[],U=e=>e===void 0,x=(e,t,n)=>{if(!t||!$(e))return n;const a=et(t.split(/[,[\].]+?/)).reduce((r,i)=>G(r)?r:r[i],e);return U(a)||a===e?U(e[t])?n:e[t]:a},de=e=>typeof e=="boolean";const sa={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},ae={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},ce={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};J.createContext(null);var ks=(e,t,n,a=!0)=>{const r={defaultValues:t._defaultValues};for(const i in e)Object.defineProperty(r,i,{get:()=>{const s=i;return t._proxyFormState[s]!==ae.all&&(t._proxyFormState[s]=!a||ae.all),n&&(n[s]=!0),e[s]}});return r},te=e=>$(e)&&!Object.keys(e).length,As=(e,t,n,a)=>{n(e);const{name:r,...i}=e;return te(i)||Object.keys(i).length>=Object.keys(t).length||Object.keys(i).find(s=>t[s]===(!a||ae.all))},jt=e=>Array.isArray(e)?e:[e];function Ss(e){const t=J.useRef(e);t.current=e,J.useEffect(()=>{const n=!e.disabled&&t.current.subject&&t.current.subject.subscribe({next:t.current.next});return()=>{n&&n.unsubscribe()}},[e.disabled])}var le=e=>typeof e=="string",_s=(e,t,n,a,r)=>le(e)?(a&&t.watch.add(e),x(n,e,r)):Array.isArray(e)?e.map(i=>(a&&t.watch.add(i),x(n,i))):(a&&(t.watchAll=!0),n),pn=e=>/^\w*$/.test(e),Qa=e=>et(e.replace(/["|']|\]/g,"").split(/\.|\[/)),R=(e,t,n)=>{let a=-1;const r=pn(t)?[t]:Qa(t),i=r.length,s=i-1;for(;++a<i;){const l=r[a];let f=n;if(a!==s){const d=e[l];f=$(d)||Array.isArray(d)?d:isNaN(+r[a+1])?{}:[]}e[l]=f,e=e[l]}return e},Os=(e,t,n,a,r)=>t?{...n[e],types:{...n[e]&&n[e].types?n[e].types:{},[a]:r||!0}}:{},oa=e=>({isOnSubmit:!e||e===ae.onSubmit,isOnBlur:e===ae.onBlur,isOnChange:e===ae.onChange,isOnAll:e===ae.all,isOnTouch:e===ae.onTouched}),la=(e,t,n)=>!n&&(t.watchAll||t.watch.has(e)||[...t.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const Ye=(e,t,n,a)=>{for(const r of n||Object.keys(e)){const i=x(e,r);if(i){const{_f:s,...l}=i;if(s){if(s.refs&&s.refs[0]&&t(s.refs[0],r)&&!a)break;if(s.ref&&t(s.ref,s.name)&&!a)break;Ye(l,t)}else $(l)&&Ye(l,t)}}};var Es=(e,t,n)=>{const a=et(x(e,n));return R(a,"root",t[n]),R(e,n,a),e},hn=e=>e.type==="file",he=e=>typeof e=="function",ht=e=>{if(!yn)return!1;const t=e?e.ownerDocument:0;return e instanceof(t&&t.defaultView?t.defaultView.HTMLElement:HTMLElement)},vt=e=>le(e),xn=e=>e.type==="radio",xt=e=>e instanceof RegExp;const fa={value:!1,isValid:!1},ca={value:!0,isValid:!0};var Ja=e=>{if(Array.isArray(e)){if(e.length>1){const t=e.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:t,isValid:!!t.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!U(e[0].attributes.value)?U(e[0].value)||e[0].value===""?ca:{value:e[0].value,isValid:!0}:ca:fa}return fa};const ua={isValid:!1,value:null};var Za=e=>Array.isArray(e)?e.reduce((t,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:t,ua):ua;function da(e,t,n="validate"){if(vt(e)||Array.isArray(e)&&e.every(vt)||de(e)&&!e)return{type:n,message:vt(e)?e:"",ref:t}}var Ne=e=>$(e)&&!xt(e)?e:{value:e,message:""},ma=async(e,t,n,a,r)=>{const{ref:i,refs:s,required:l,maxLength:f,minLength:d,min:m,max:g,pattern:y,validate:S,name:P,valueAsNumber:V,mount:I,disabled:Y}=e._f,k=x(t,P);if(!I||Y)return{};const C=s?s[0]:i,j=E=>{a&&C.reportValidity&&(C.setCustomValidity(de(E)?"":E||""),C.reportValidity())},_={},ee=xn(i),K=Ze(i),fe=ee||K,X=(V||hn(i))&&U(i.value)&&U(k)||ht(i)&&i.value===""||k===""||Array.isArray(k)&&!k.length,Q=Os.bind(null,P,n,_),tt=(E,T,F,q=ce.maxLength,ie=ce.minLength)=>{const ne=E?T:F;_[P]={type:E?q:ie,message:ne,ref:i,...Q(E?q:ie,ne)}};if(r?!Array.isArray(k)||!k.length:l&&(!fe&&(X||G(k))||de(k)&&!k||K&&!Ja(s).isValid||ee&&!Za(s).isValid)){const{value:E,message:T}=vt(l)?{value:!!l,message:l}:Ne(l);if(E&&(_[P]={type:ce.required,message:T,ref:C,...Q(ce.required,T)},!n))return j(T),_}if(!X&&(!G(m)||!G(g))){let E,T;const F=Ne(g),q=Ne(m);if(!G(k)&&!isNaN(k)){const ie=i.valueAsNumber||k&&+k;G(F.value)||(E=ie>F.value),G(q.value)||(T=ie<q.value)}else{const ie=i.valueAsDate||new Date(k),ne=nt=>new Date(new Date().toDateString()+" "+nt),ze=i.type=="time",Ae=i.type=="week";le(F.value)&&k&&(E=ze?ne(k)>ne(F.value):Ae?k>F.value:ie>new Date(F.value)),le(q.value)&&k&&(T=ze?ne(k)<ne(q.value):Ae?k<q.value:ie<new Date(q.value))}if((E||T)&&(tt(!!E,F.message,q.message,ce.max,ce.min),!n))return j(_[P].message),_}if((f||d)&&!X&&(le(k)||r&&Array.isArray(k))){const E=Ne(f),T=Ne(d),F=!G(E.value)&&k.length>+E.value,q=!G(T.value)&&k.length<+T.value;if((F||q)&&(tt(F,E.message,T.message),!n))return j(_[P].message),_}if(y&&!X&&le(k)){const{value:E,message:T}=Ne(y);if(xt(E)&&!k.match(E)&&(_[P]={type:ce.pattern,message:T,ref:i,...Q(ce.pattern,T)},!n))return j(T),_}if(S){if(he(S)){const E=await S(k,t),T=da(E,C);if(T&&(_[P]={...T,...Q(ce.validate,T.message)},!n))return j(T.message),_}else if($(S)){let E={};for(const T in S){if(!te(E)&&!n)break;const F=da(await S[T](k,t),C,T);F&&(E={...F,...Q(T,F.message)},j(F.message),n&&(_[P]=E))}if(!te(E)&&(_[P]={ref:C,...E},!n))return _}}return j(!0),_};function Ps(e,t){const n=t.slice(0,-1).length;let a=0;for(;a<n;)e=U(e)?a++:e[t[a++]];return e}function Cs(e){for(const t in e)if(e.hasOwnProperty(t)&&!U(e[t]))return!1;return!0}function B(e,t){const n=Array.isArray(t)?t:pn(t)?[t]:Qa(t),a=n.length===1?e:Ps(e,n),r=n.length-1,i=n[r];return a&&delete a[i],r!==0&&($(a)&&te(a)||Array.isArray(a)&&Cs(a))&&B(e,n.slice(0,-1)),e}var zt=()=>{let e=[];return{get observers(){return e},next:r=>{for(const i of e)i.next&&i.next(r)},subscribe:r=>(e.push(r),{unsubscribe:()=>{e=e.filter(i=>i!==r)}}),unsubscribe:()=>{e=[]}}},wt=e=>G(e)||!Ka(e);function Oe(e,t){if(wt(e)||wt(t))return e===t;if(Fe(e)&&Fe(t))return e.getTime()===t.getTime();const n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(const r of n){const i=e[r];if(!a.includes(r))return!1;if(r!=="ref"){const s=t[r];if(Fe(i)&&Fe(s)||$(i)&&$(s)||Array.isArray(i)&&Array.isArray(s)?!Oe(i,s):i!==s)return!1}}return!0}var er=e=>e.type==="select-multiple",Ns=e=>xn(e)||Ze(e),Vt=e=>ht(e)&&e.isConnected,tr=e=>{for(const t in e)if(he(e[t]))return!0;return!1};function kt(e,t={}){const n=Array.isArray(e);if($(e)||n)for(const a in e)Array.isArray(e[a])||$(e[a])&&!tr(e[a])?(t[a]=Array.isArray(e[a])?[]:{},kt(e[a],t[a])):G(e[a])||(t[a]=!0);return t}function nr(e,t,n){const a=Array.isArray(e);if($(e)||a)for(const r in e)Array.isArray(e[r])||$(e[r])&&!tr(e[r])?U(t)||wt(n[r])?n[r]=Array.isArray(e[r])?kt(e[r],[]):{...kt(e[r])}:nr(e[r],G(t)?{}:t[r],n[r]):n[r]=!Oe(e[r],t[r]);return n}var Ut=(e,t)=>nr(e,t,kt(t)),ar=(e,{valueAsNumber:t,valueAsDate:n,setValueAs:a})=>U(e)?e:t?e===""?NaN:e&&+e:n&&le(e)?new Date(e):a?a(e):e;function Ht(e){const t=e.ref;if(!(e.refs?e.refs.every(n=>n.disabled):t.disabled))return hn(t)?t.files:xn(t)?Za(e.refs).value:er(t)?[...t.selectedOptions].map(({value:n})=>n):Ze(t)?Ja(e.refs).value:ar(U(t.value)?e.ref.value:t.value,e)}var Ts=(e,t,n,a)=>{const r={};for(const i of e){const s=x(t,i);s&&R(r,i,s._f)}return{criteriaMode:n,names:[...e],fields:r,shouldUseNativeValidation:a}},Ve=e=>U(e)?e:xt(e)?e.source:$(e)?xt(e.value)?e.value.source:e.value:e,Is=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function va(e,t,n){const a=x(e,n);if(a||pn(n))return{error:a,name:n};const r=n.split(".");for(;r.length;){const i=r.join("."),s=x(t,i),l=x(e,i);if(s&&!Array.isArray(s)&&n!==i)return{name:n};if(l&&l.type)return{name:i,error:l};r.pop()}return{name:n}}var Ls=(e,t,n,a,r)=>r.isOnAll?!1:!n&&r.isOnTouch?!(t||e):(n?a.isOnBlur:r.isOnBlur)?!e:(n?a.isOnChange:r.isOnChange)?e:!0,Fs=(e,t)=>!et(x(e,t)).length&&B(e,t);const Ms={mode:ae.onSubmit,reValidateMode:ae.onChange,shouldFocusError:!0};function Ds(e={},t){let n={...Ms,...e},a={submitCount:0,isDirty:!1,isLoading:he(n.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:n.errors||{},disabled:!1},r={},i=$(n.defaultValues)||$(n.values)?ue(n.defaultValues||n.values)||{}:{},s=n.shouldUnregister?{}:ue(i),l={action:!1,mount:!1,watch:!1},f={mount:new Set,unMount:new Set,array:new Set,watch:new Set},d,m=0;const g={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:zt(),array:zt(),state:zt()},S=e.resetOptions&&e.resetOptions.keepDirtyValues,P=oa(n.mode),V=oa(n.reValidateMode),I=n.criteriaMode===ae.all,Y=o=>c=>{clearTimeout(m),m=setTimeout(o,c)},k=async o=>{if(g.isValid||o){const c=n.resolver?te((await Q()).errors):await E(r,!0);c!==a.isValid&&y.state.next({isValid:c})}},C=o=>g.isValidating&&y.state.next({isValidating:o}),j=(o,c=[],u,h,b=!0,v=!0)=>{if(h&&u){if(l.action=!0,v&&Array.isArray(x(r,o))){const A=u(x(r,o),h.argA,h.argB);b&&R(r,o,A)}if(v&&Array.isArray(x(a.errors,o))){const A=u(x(a.errors,o),h.argA,h.argB);b&&R(a.errors,o,A),Fs(a.errors,o)}if(g.touchedFields&&v&&Array.isArray(x(a.touchedFields,o))){const A=u(x(a.touchedFields,o),h.argA,h.argB);b&&R(a.touchedFields,o,A)}g.dirtyFields&&(a.dirtyFields=Ut(i,s)),y.state.next({name:o,isDirty:F(o,c),dirtyFields:a.dirtyFields,errors:a.errors,isValid:a.isValid})}else R(s,o,c)},_=(o,c)=>{R(a.errors,o,c),y.state.next({errors:a.errors})},ee=o=>{a.errors=o,y.state.next({errors:a.errors,isValid:!1})},K=(o,c,u,h)=>{const b=x(r,o);if(b){const v=x(s,o,U(u)?x(i,o):u);U(v)||h&&h.defaultChecked||c?R(s,o,c?v:Ht(b._f)):ne(o,v),l.mount&&k()}},fe=(o,c,u,h,b)=>{let v=!1,A=!1;const L={name:o},W=!!(x(r,o)&&x(r,o)._f.disabled);if(!u||h){g.isDirty&&(A=a.isDirty,a.isDirty=L.isDirty=F(),v=A!==L.isDirty);const se=W||Oe(x(i,o),c);A=!!(!W&&x(a.dirtyFields,o)),se||W?B(a.dirtyFields,o):R(a.dirtyFields,o,!0),L.dirtyFields=a.dirtyFields,v=v||g.dirtyFields&&A!==!se}if(u){const se=x(a.touchedFields,o);se||(R(a.touchedFields,o,u),L.touchedFields=a.touchedFields,v=v||g.touchedFields&&se!==u)}return v&&b&&y.state.next(L),v?L:{}},X=(o,c,u,h)=>{const b=x(a.errors,o),v=g.isValid&&de(c)&&a.isValid!==c;if(e.delayError&&u?(d=Y(()=>_(o,u)),d(e.delayError)):(clearTimeout(m),d=null,u?R(a.errors,o,u):B(a.errors,o)),(u?!Oe(b,u):b)||!te(h)||v){const A={...h,...v&&de(c)?{isValid:c}:{},errors:a.errors,name:o};a={...a,...A},y.state.next(A)}C(!1)},Q=async o=>n.resolver(s,n.context,Ts(o||f.mount,r,n.criteriaMode,n.shouldUseNativeValidation)),tt=async o=>{const{errors:c}=await Q(o);if(o)for(const u of o){const h=x(c,u);h?R(a.errors,u,h):B(a.errors,u)}else a.errors=c;return c},E=async(o,c,u={valid:!0})=>{for(const h in o){const b=o[h];if(b){const{_f:v,...A}=b;if(v){const L=f.array.has(v.name),W=await ma(b,s,I,n.shouldUseNativeValidation&&!c,L);if(W[v.name]&&(u.valid=!1,c))break;!c&&(x(W,v.name)?L?Es(a.errors,W,v.name):R(a.errors,v.name,W[v.name]):B(a.errors,v.name))}A&&await E(A,c,u)}}return u.valid},T=()=>{for(const o of f.unMount){const c=x(r,o);c&&(c._f.refs?c._f.refs.every(u=>!Vt(u)):!Vt(c._f.ref))&&Ct(o)}f.unMount=new Set},F=(o,c)=>(o&&c&&R(s,o,c),!Oe(kn(),i)),q=(o,c,u)=>_s(o,f,{...l.mount?s:U(c)?i:le(o)?{[o]:c}:c},u,c),ie=o=>et(x(l.mount?s:i,o,e.shouldUnregister?x(i,o,[]):[])),ne=(o,c,u={})=>{const h=x(r,o);let b=c;if(h){const v=h._f;v&&(!v.disabled&&R(s,o,ar(c,v)),b=ht(v.ref)&&G(c)?"":c,er(v.ref)?[...v.ref.options].forEach(A=>A.selected=b.includes(A.value)):v.refs?Ze(v.ref)?v.refs.length>1?v.refs.forEach(A=>(!A.defaultChecked||!A.disabled)&&(A.checked=Array.isArray(b)?!!b.find(L=>L===A.value):b===A.value)):v.refs[0]&&(v.refs[0].checked=!!b):v.refs.forEach(A=>A.checked=A.value===b):hn(v.ref)?v.ref.value="":(v.ref.value=b,v.ref.type||y.values.next({name:o,values:{...s}})))}(u.shouldDirty||u.shouldTouch)&&fe(o,b,u.shouldTouch,u.shouldDirty,!0),u.shouldValidate&&Pt(o)},ze=(o,c,u)=>{for(const h in c){const b=c[h],v=`${o}.${h}`,A=x(r,v);(f.array.has(o)||!wt(b)||A&&!A._f)&&!Fe(b)?ze(v,b,u):ne(v,b,u)}},Ae=(o,c,u={})=>{const h=x(r,o),b=f.array.has(o),v=ue(c);R(s,o,v),b?(y.array.next({name:o,values:{...s}}),(g.isDirty||g.dirtyFields)&&u.shouldDirty&&y.state.next({name:o,dirtyFields:Ut(i,s),isDirty:F(o,v)})):h&&!h._f&&!G(v)?ze(o,v,u):ne(o,v,u),la(o,f)&&y.state.next({...a}),y.values.next({name:o,values:{...s}}),!l.mount&&t()},nt=async o=>{const c=o.target;let u=c.name,h=!0;const b=x(r,u),v=()=>c.type?Ht(b._f):ps(o),A=L=>{h=Number.isNaN(L)||L===x(s,u,L)};if(b){let L,W;const se=v(),Ce=o.type===sa.BLUR||o.type===sa.FOCUS_OUT,lr=!Is(b._f)&&!n.resolver&&!x(a.errors,u)&&!b._f.deps||Ls(Ce,x(a.touchedFields,u),a.isSubmitted,V,P),Tt=la(u,f,Ce);R(s,u,se),Ce?(b._f.onBlur&&b._f.onBlur(o),d&&d(0)):b._f.onChange&&b._f.onChange(o);const It=fe(u,se,Ce,!1),fr=!te(It)||Tt;if(!Ce&&y.values.next({name:u,type:o.type,values:{...s}}),lr)return g.isValid&&k(),fr&&y.state.next({name:u,...Tt?{}:It});if(!Ce&&Tt&&y.state.next({...a}),C(!0),n.resolver){const{errors:Nn}=await Q([u]);if(A(se),h){const cr=va(a.errors,r,u),Tn=va(Nn,r,cr.name||u);L=Tn.error,u=Tn.name,W=te(Nn)}}else L=(await ma(b,s,I,n.shouldUseNativeValidation))[u],A(se),h&&(L?W=!1:g.isValid&&(W=await E(r,!0)));h&&(b._f.deps&&Pt(b._f.deps),X(u,W,L,It))}},wn=(o,c)=>{if(x(a.errors,c)&&o.focus)return o.focus(),1},Pt=async(o,c={})=>{let u,h;const b=jt(o);if(C(!0),n.resolver){const v=await tt(U(o)?o:b);u=te(v),h=o?!b.some(A=>x(v,A)):u}else o?(h=(await Promise.all(b.map(async v=>{const A=x(r,v);return await E(A&&A._f?{[v]:A}:A)}))).every(Boolean),!(!h&&!a.isValid)&&k()):h=u=await E(r);return y.state.next({...!le(o)||g.isValid&&u!==a.isValid?{}:{name:o},...n.resolver||!o?{isValid:u}:{},errors:a.errors,isValidating:!1}),c.shouldFocus&&!h&&Ye(r,wn,o?b:f.mount),h},kn=o=>{const c={...i,...l.mount?s:{}};return U(o)?c:le(o)?x(c,o):o.map(u=>x(c,u))},An=(o,c)=>({invalid:!!x((c||a).errors,o),isDirty:!!x((c||a).dirtyFields,o),isTouched:!!x((c||a).touchedFields,o),error:x((c||a).errors,o)}),rr=o=>{o&&jt(o).forEach(c=>B(a.errors,c)),y.state.next({errors:o?a.errors:{}})},Sn=(o,c,u)=>{const h=(x(r,o,{_f:{}})._f||{}).ref;R(a.errors,o,{...c,ref:h}),y.state.next({name:o,errors:a.errors,isValid:!1}),u&&u.shouldFocus&&h&&h.focus&&h.focus()},ir=(o,c)=>he(o)?y.values.subscribe({next:u=>o(q(void 0,c),u)}):q(o,c,!0),Ct=(o,c={})=>{for(const u of o?jt(o):f.mount)f.mount.delete(u),f.array.delete(u),c.keepValue||(B(r,u),B(s,u)),!c.keepError&&B(a.errors,u),!c.keepDirty&&B(a.dirtyFields,u),!c.keepTouched&&B(a.touchedFields,u),!n.shouldUnregister&&!c.keepDefaultValue&&B(i,u);y.values.next({values:{...s}}),y.state.next({...a,...c.keepDirty?{isDirty:F()}:{}}),!c.keepIsValid&&k()},_n=({disabled:o,name:c,field:u,fields:h,value:b})=>{if(de(o)){const v=o?void 0:U(b)?Ht(u?u._f:x(h,c)._f):b;R(s,c,v),fe(c,v,!1,!1,!0)}},Nt=(o,c={})=>{let u=x(r,o);const h=de(c.disabled);return R(r,o,{...u||{},_f:{...u&&u._f?u._f:{ref:{name:o}},name:o,mount:!0,...c}}),f.mount.add(o),u?_n({field:u,disabled:c.disabled,name:o,value:c.value}):K(o,!0,c.value),{...h?{disabled:c.disabled}:{},...n.progressive?{required:!!c.required,min:Ve(c.min),max:Ve(c.max),minLength:Ve(c.minLength),maxLength:Ve(c.maxLength),pattern:Ve(c.pattern)}:{},name:o,onChange:nt,onBlur:nt,ref:b=>{if(b){Nt(o,c),u=x(r,o);const v=U(b.value)&&b.querySelectorAll&&b.querySelectorAll("input,select,textarea")[0]||b,A=Ns(v),L=u._f.refs||[];if(A?L.find(W=>W===v):v===u._f.ref)return;R(r,o,{_f:{...u._f,...A?{refs:[...L.filter(Vt),v,...Array.isArray(x(i,o))?[{}]:[]],ref:{type:v.type,name:o}}:{ref:v}}}),K(o,!1,void 0,v)}else u=x(r,o,{}),u._f&&(u._f.mount=!1),(n.shouldUnregister||c.shouldUnregister)&&!(xs(f.array,o)&&l.action)&&f.unMount.add(o)}}},On=()=>n.shouldFocusError&&Ye(r,wn,f.mount),sr=o=>{de(o)&&(y.state.next({disabled:o}),Ye(r,(c,u)=>{let h=o;const b=x(r,u);b&&de(b._f.disabled)&&(h||(h=b._f.disabled)),c.disabled=h},0,!1))},En=(o,c)=>async u=>{u&&(u.preventDefault&&u.preventDefault(),u.persist&&u.persist());let h=ue(s);if(y.state.next({isSubmitting:!0}),n.resolver){const{errors:b,values:v}=await Q();a.errors=b,h=v}else await E(r);B(a.errors,"root"),te(a.errors)?(y.state.next({errors:{}}),await o(h,u)):(c&&await c({...a.errors},u),On(),setTimeout(On)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:te(a.errors),submitCount:a.submitCount+1,errors:a.errors})},or=(o,c={})=>{x(r,o)&&(U(c.defaultValue)?Ae(o,x(i,o)):(Ae(o,c.defaultValue),R(i,o,c.defaultValue)),c.keepTouched||B(a.touchedFields,o),c.keepDirty||(B(a.dirtyFields,o),a.isDirty=c.defaultValue?F(o,x(i,o)):F()),c.keepError||(B(a.errors,o),g.isValid&&k()),y.state.next({...a}))},Pn=(o,c={})=>{const u=o?ue(o):i,h=ue(u),b=o&&!te(o)?h:i;if(c.keepDefaultValues||(i=u),!c.keepValues){if(c.keepDirtyValues||S)for(const v of f.mount)x(a.dirtyFields,v)?R(b,v,x(s,v)):Ae(v,x(b,v));else{if(yn&&U(o))for(const v of f.mount){const A=x(r,v);if(A&&A._f){const L=Array.isArray(A._f.refs)?A._f.refs[0]:A._f.ref;if(ht(L)){const W=L.closest("form");if(W){W.reset();break}}}}r={}}s=e.shouldUnregister?c.keepDefaultValues?ue(i):{}:ue(b),y.array.next({values:{...b}}),y.values.next({values:{...b}})}f={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&t(),l.mount=!g.isValid||!!c.keepIsValid,l.watch=!!e.shouldUnregister,y.state.next({submitCount:c.keepSubmitCount?a.submitCount:0,isDirty:c.keepDirty?a.isDirty:!!(c.keepDefaultValues&&!Oe(o,i)),isSubmitted:c.keepIsSubmitted?a.isSubmitted:!1,dirtyFields:c.keepDirtyValues?a.dirtyFields:c.keepDefaultValues&&o?Ut(i,o):{},touchedFields:c.keepTouched?a.touchedFields:{},errors:c.keepErrors?a.errors:{},isSubmitSuccessful:c.keepIsSubmitSuccessful?a.isSubmitSuccessful:!1,isSubmitting:!1})},Cn=(o,c)=>Pn(he(o)?o(s):o,c);return{control:{register:Nt,unregister:Ct,getFieldState:An,handleSubmit:En,setError:Sn,_executeSchema:Q,_getWatch:q,_getDirty:F,_updateValid:k,_removeUnmounted:T,_updateFieldArray:j,_updateDisabledField:_n,_getFieldArray:ie,_reset:Pn,_resetDefaultValues:()=>he(n.defaultValues)&&n.defaultValues().then(o=>{Cn(o,n.resetOptions),y.state.next({isLoading:!1})}),_updateFormState:o=>{a={...a,...o}},_disableForm:sr,_subjects:y,_proxyFormState:g,_setErrors:ee,get _fields(){return r},get _formValues(){return s},get _state(){return l},set _state(o){l=o},get _defaultValues(){return i},get _names(){return f},set _names(o){f=o},get _formState(){return a},set _formState(o){a=o},get _options(){return n},set _options(o){n={...n,...o}}},trigger:Pt,register:Nt,handleSubmit:En,watch:ir,setValue:Ae,getValues:kn,reset:Cn,resetField:or,clearErrors:rr,unregister:Ct,setError:Sn,setFocus:(o,c={})=>{const u=x(r,o),h=u&&u._f;if(h){const b=h.refs?h.refs[0]:h.ref;b.focus&&(b.focus(),c.shouldSelect&&b.select())}},getFieldState:An}}function Rs(e={}){const t=J.useRef(),n=J.useRef(),[a,r]=J.useState({isDirty:!1,isValidating:!1,isLoading:he(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:e.errors||{},disabled:!1,defaultValues:he(e.defaultValues)?void 0:e.defaultValues});t.current||(t.current={...Ds(e,()=>r(s=>({...s}))),formState:a});const i=t.current.control;return i._options=e,Ss({subject:i._subjects.state,next:s=>{As(s,i._proxyFormState,i._updateFormState,!0)&&r({...i._formState})}}),J.useEffect(()=>i._disableForm(e.disabled),[i,e.disabled]),J.useEffect(()=>{if(i._proxyFormState.isDirty){const s=i._getDirty();s!==a.isDirty&&i._subjects.state.next({isDirty:s})}},[i,a.isDirty]),J.useEffect(()=>{e.values&&!Oe(e.values,n.current)?(i._reset(e.values,i._options.resetOptions),n.current=e.values,r(s=>({...s}))):i._resetDefaultValues()},[e.values,i]),J.useEffect(()=>{e.errors&&i._setErrors(e.errors)},[e.errors,i]),J.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),t.current.formState=ks(a,i),t.current}function js(){const e=ga(),{register:t,handleSubmit:n}=Rs(),{isLoading:a,loginUser:r,setIsLoading:i}=At();ba();function s({email:l,password:f}){r(l,f).then(()=>{e("/budget-tracker")}).catch(d=>{mr.error(d.message),i(!1)})}return a?N.jsx(dr,{}):N.jsxs("form",{onSubmit:n(s),className:"flex items-center w-full",children:[N.jsxs("div",{className:" flex w-full xl:justify-end",children:[N.jsx("div",{children:N.jsx("input",{...t("email",{required:!0}),id:"email-address",type:"email",placeholder:"Email",className:"w-[95%] md:w-full rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 xl:focus:w-[101%]",required:!0})}),N.jsx("div",{children:N.jsx("input",{...t("password",{required:!0}),id:"password",type:"password",placeholder:"Password",className:"w-[75%] md:[w-85%] md:ml-2 rounded-full block bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50 xl:focus:w-[76%]",required:!0})})]}),N.jsx("div",{className:" w-1/5",children:N.jsxs("button",{type:"submit",className:"inline-block  rounded-full bg-stone-700  font-semibold uppercase tracking-normal md:tracking-wide text-yellow-400 transition-colors hover:bg-stone-800 active:translate-y-[2px] disabled:cursor-not-allowed disabled:opacity-50 py-2.5 px-3  text-xs xl:px-6",children:[N.jsx(je,{icon:ms})," Login"]})})]})}function Js(){const{user:e}=At(),{isSmallScreen:t}=ba();return N.jsx("header",{className:" flex flex-col py-2  bg-yellow-400 justify-center items-center w-full md:h-[4.5rem] md:flex-row md:justify-between xl:flex-row ",children:N.jsxs(ys,{children:[t&&N.jsx(vr,{}),e?N.jsx(bs,{}):N.jsx(js,{})]})})}export{ys as C,je as F,Js as H,Xs as a,Bs as b,$s as c,Ws as d,Qs as e,Ks as f,Gs as g,qs as h,Ys as i,Rs as u};
