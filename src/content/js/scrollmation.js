var app=function(t){"use strict";function o(){}const e=t=>t;function n(t,o){for(const e in o)t[e]=o[e];return t}function s(t){return t()}function r(){return Object.create(null)}function i(t){t.forEach(s)}function l(t){return"function"==typeof t}function c(t,o){return t!=t?o==o:t!==o||t&&"object"==typeof t||"function"==typeof t}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),p=a?t=>requestAnimationFrame(t):o;const d=new Set;let h,f=!1;function g(){d.forEach(t=>{t[0](u())||(d.delete(t),t[1]())}),(f=d.size>0)&&p(g)}function m(t,o){t.appendChild(o)}function P(t,o,e){t.insertBefore(o,e||null)}function $(t){t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function v(){return t=" ",document.createTextNode(t);var t}function x(t,o,e,n){return t.addEventListener(o,e,n),()=>t.removeEventListener(o,e,n)}function y(t,o,e){null==e?t.removeAttribute(o):t.getAttribute(o)!==e&&t.setAttribute(o,e)}function w(t,o,e,n){t.style.setProperty(o,e,n?"important":"")}function S(t,o){"static"===getComputedStyle(t).position&&(t.style.position="relative");const e=document.createElement("object");let n;return e.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),e.type="text/html",e.tabIndex=-1,e.onload=()=>{(n=e.contentDocument.defaultView).addEventListener("resize",o)},/Trident/.test(navigator.userAgent)?(t.appendChild(e),e.data="about:blank"):(e.data="about:blank",t.appendChild(e)),{cancel:()=>{n&&n.removeEventListener&&n.removeEventListener("resize",o),t.removeChild(e)}}}function E(t){h=t}function _(){const t=function(){if(!h)throw new Error("Function called outside component initialization");return h}();return(o,e)=>{const n=t.$$.callbacks[o];if(n){const s=function(t,o){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,o),e}(o,e);n.slice().forEach(o=>{o.call(t,s)})}}}const j=[],H=[],T=[],C=[],k=Promise.resolve();let A=!1;function I(t){T.push(t)}function N(){const t=new Set;do{for(;j.length;){const t=j.shift();E(t),z(t.$$)}for(;H.length;)H.pop()();for(let o=0;o<T.length;o+=1){const e=T[o];t.has(e)||(e(),t.add(e))}T.length=0}while(j.length);for(;C.length;)C.pop()();A=!1}function z(t){null!==t.fragment&&(t.update(t.dirty),i(t.before_update),t.fragment&&t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(I))}const D=new Set;function L(t,o){t.$$.dirty||(j.push(t),A||(A=!0,k.then(N)),t.$$.dirty=r()),t.$$.dirty[o]=!0}function R(t,e,n,c,a,u){const p=h;E(t);const d=e.props||{},f=t.$$={fragment:null,ctx:null,props:u,update:o,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:r(),dirty:null};let g=!1;var m,P;f.ctx=n?n(t,d,(o,e,n=e)=>(f.ctx&&a(f.ctx[o],f.ctx[o]=n)&&(f.bound[o]&&f.bound[o](n),g&&L(t,o)),e)):d,f.update(),g=!0,i(f.before_update),f.fragment=!!c&&c(f.ctx),e.target&&(e.hydrate?f.fragment&&f.fragment.l(function(t){return Array.from(t.childNodes)}(e.target)):f.fragment&&f.fragment.c(),e.intro&&((m=t.$$.fragment)&&m.i&&(D.delete(m),m.i(P))),function(t,o,e){const{fragment:n,on_mount:r,on_destroy:c,after_update:a}=t.$$;n&&n.m(o,e),I(()=>{const o=r.map(s).filter(l);c?c.push(...o):i(o),t.$$.on_mount=[]}),a.forEach(I)}(t,e.target,e.anchor),N()),E(p)}let O;"function"==typeof HTMLElement&&(O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,o,e){this[t]=e}$destroy(){!function(t,o){const e=t.$$;null!==e.fragment&&(i(e.on_destroy),e.fragment&&e.fragment.d(o),e.on_destroy=e.fragment=null,e.ctx={})}(this,1),this.$destroy=o}$on(t,o){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(o),()=>{const t=e.indexOf(o);-1!==t&&e.splice(t,1)}}$set(){}});const M=[];function q(t){const o=t-1;return o*o*o+1}function F(t){return"[object Date]"===Object.prototype.toString.call(t)}function W(t,o){if(t===o||t!=t)return()=>t;const e=typeof t;if(e!==typeof o||Array.isArray(t)!==Array.isArray(o))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=o.map((o,e)=>W(t[e],o));return t=>e.map(o=>o(t))}if("object"===e){if(!t||!o)throw new Error("Object cannot be null");if(F(t)&&F(o)){t=t.getTime();const e=(o=o.getTime())-t;return o=>new Date(t+o*e)}const e=Object.keys(o),n={};return e.forEach(e=>{n[e]=W(t[e],o[e])}),t=>{const o={};return e.forEach(e=>{o[e]=n[e](t)}),o}}if("number"===e){const e=o-t;return o=>t+o*e}throw new Error(`Cannot interpolate ${e} values`)}function B(t,s={}){const r=function(t,e=o){let n;const s=[];function r(o){if(c(t,o)&&(t=o,n)){const o=!M.length;for(let o=0;o<s.length;o+=1){const e=s[o];e[1](),M.push(e,t)}if(o){for(let t=0;t<M.length;t+=2)M[t][0](M[t+1]);M.length=0}}}return{set:r,update:function(o){r(o(t))},subscribe:function(i,l=o){const c=[i,l];return s.push(c),1===s.length&&(n=e(r)||o),i(t),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(n(),n=null)}}}}(t);let i,l=t;function a(o,c){if(null==t)return r.set(t=o),Promise.resolve();l=o;let a=i,h=!1,{delay:m=0,duration:P=400,easing:$=e,interpolate:b=W}=n(n({},s),c);const v=u()+m;let x;return(i=function(t){let o;return f||(f=!0,p(g)),{promise:new Promise(e=>{d.add(o=[t,e])}),abort(){d.delete(o)}}}(e=>{if(e<v)return!0;h||(x=b(t,o),"function"==typeof P&&(P=P(t,o)),h=!0),a&&(a.abort(),a=null);const n=e-v;return n>P?(r.set(t=o),!1):(r.set(t=x($(n/P))),!0)})).promise}return{set:a,update:(o,e)=>a(o(l,t),e),subscribe:r.subscribe}}function V(t){let o,e,n,s,r;return{c(){o=b("div"),e=b("slot"),n=v(),(s=b("div")).textContent=" ",y(s,"class","scrollmation-scroll-spacer"),I(()=>t.div1_resize_handler.call(o)),y(o,"class","scrollmation-fg"),w(o,"margin-top",t.containerHeight+t.startpos+"px"),w(o,"margin-bottom",t.containerHeight+t.endpos+"px")},m(i,l){P(i,o,l),m(o,e),m(o,n),m(o,s),r=S(o,t.div1_resize_handler.bind(o))},p(t,e){(t.containerHeight||t.startpos)&&w(o,"margin-top",e.containerHeight+e.startpos+"px"),(t.containerHeight||t.endpos)&&w(o,"margin-bottom",e.containerHeight+e.endpos+"px")},d(t){t&&$(o),r.cancel()}}}function G(t){let e,n,s,r=!t.loading&&V(t);return{c(){e=b("div"),r&&r.c(),this.c=o,I(()=>t.div_resize_handler.call(e)),y(e,"class","scrollmation-container"),w(e,"opacity",t.loading?0:1),s=[x(e,"scroll",t.onScroll),x(e,"wheel",t.onWheel)]},m(o,s){P(o,e,s),r&&r.m(e,null),n=S(e,t.div_resize_handler.bind(e)),t.div_binding(e)},p(t,o){o.loading?r&&(r.d(1),r=null):r?r.p(t,o):((r=V(o)).c(),r.m(e,null)),t.loading&&w(e,"opacity",o.loading?0:1)},i:o,o:o,d(o){o&&$(e),r&&r.d(),n.cancel(),t.div_binding(null),i(s)}}}let J=0;function K(t,e,n){let s,r=o,i=()=>(r(),r=function(t,o){const e=t.subscribe(o);return e.unsubscribe?()=>e.unsubscribe():e}(C,t=>n("$progress",s=t)),C);t.$$.on_destroy.push(()=>r());_();let l,c,a,u,p,d,h,f=0,g=!1,m=!0,{startpos:P=0}=e,{homepos:$=0}=e,{endpos:b=100}=e,{duration:v=900}=e,{easing:x=q}=e,{scrolldata:y={}}=e,{isPrevNav:w=!1}=e,{scrolltoposition:S=null}=e,{jumptoposition:E=null}=e,{pgId:j=0}=e;let T,{progress:C=B(0,{duration:v,easing:x})}=e;async function k(t){return await A(t,!1)}async function A(t="home",o=!0){if(t){switch(t){case"offscreen":d=u+100;break;case"start":d=J;break;case"end":d=u;break;case"beforeStart":d=J+1;break;case"beforeEnd":d=u-1;break;default:d=T}o?(n("animatingScroll",g=!0),await C.set(d),n("animatingScroll",g=!1)):await C.set(d,{duration:0})}}return i(),t.$set=t=>{"startpos"in t&&n("startpos",P=t.startpos),"homepos"in t&&n("homepos",$=t.homepos),"endpos"in t&&n("endpos",b=t.endpos),"duration"in t&&n("duration",v=t.duration),"easing"in t&&n("easing",x=t.easing),"scrolldata"in t&&n("scrolldata",y=t.scrolldata),"isPrevNav"in t&&n("isPrevNav",w=t.isPrevNav),"scrolltoposition"in t&&n("scrolltoposition",S=t.scrolltoposition),"jumptoposition"in t&&n("jumptoposition",E=t.jumptoposition),"pgId"in t&&n("pgId",j=t.pgId),"progress"in t&&i(n("progress",C=t.progress))},t.$$.update=(t={animatingScroll:1,$progress:1,containerHeight:1,contentHeight:1,endpos:1,startpos:1,homepos:1,scrollPosPx:1,prevScrollPosPx:1,scrolltoposition:1,jumptoposition:1,pgId:1,endScrollPosPx:1,startScrollPosPx:1,homeScrollPos:1,scrollDir:1})=>{(t.animatingScroll||t.$progress)&&g&&n("container",a.scrollTop=s,a),(t.containerHeight||t.contentHeight||t.endpos||t.startpos)&&n("endScrollPosPx",u=c+l+b+P),(t.containerHeight||t.homepos||t.startpos)&&n("homeScrollPos",T=c-$+P),(t.scrollPosPx||t.prevScrollPosPx)&&n("scrollDir",h=f-p),t.scrolltoposition&&A(S),t.jumptoposition&&k(E),t.pgId&&async function(t){setTimeout(async()=>{w?await A("beforeEnd",!1):await A("beforeStart",!1),n("animatingScroll",g=!0),n("loading",m=!1),await A("home")},200)}(),(t.contentHeight||t.containerHeight||t.scrollPosPx||t.endScrollPosPx||t.startScrollPosPx||t.homeScrollPos||t.scrollDir)&&n("scrolldata",y={contentHeight:l,containerHeight:c,scrollPosPx:f,endScrollPosPx:u,startScrollPosPx:J,homeScrollPos:T,scrollDir:h})},{contentHeight:l,containerHeight:c,container:a,loading:m,startpos:P,homepos:$,endpos:b,duration:v,easing:x,scrolldata:y,isPrevNav:w,scrolltoposition:S,jumptoposition:E,pgId:j,onScroll:async function(t){n("prevScrollPosPx",p=f),n("scrollPosPx",f=t.target.scrollTop),g||C.set(f,{duration:0});let o=null;if(p!==f){const t=new CustomEvent("scroll",{detail:y,bubbles:!0,cancelable:!0,composed:!0});this.dispatchEvent(t),f===u&&(o="next"),f===J&&(o="prev"),f===T&&(o="home");const e=new CustomEvent(o,{detail:y,bubbles:!0,cancelable:!0,composed:!0});if(g&&f===d)return void this.dispatchEvent(e);!g&&o&&this.dispatchEvent(e)}},onWheel:function(t){g&&t.preventDefault()},progress:C,jumpToPos:k,scrollToPos:A,div1_resize_handler:function(){l=this.clientHeight,n("contentHeight",l)},div_resize_handler:function(){c=this.clientHeight,n("containerHeight",c)},div_binding:function(t){H[t?"unshift":"push"](()=>{n("container",a=t)})}}}class Q extends O{constructor(t){super(),this.shadowRoot.innerHTML="<style>.scrollmation-container{width:100%;height:100%;overflow:auto;scrollbar-width:none;overscroll-behavior:none}.scrollmation-container::-webkit-scrollbar{display:none}.scrollmation-scroll-spacer{height:1px}.scrollmation-fg{width:100%;padding-right:65px}</style>",R(this,{target:this.shadowRoot},K,G,c,{startpos:0,homepos:0,endpos:0,duration:0,easing:0,scrolldata:0,isPrevNav:0,scrolltoposition:0,jumptoposition:0,pgId:0,progress:0,jumpToPos:0,scrollToPos:0}),t&&(t.target&&P(t.target,this,t.anchor),t.props&&(this.$set(t.props),N()))}static get observedAttributes(){return["startpos","homepos","endpos","duration","easing","scrolldata","isPrevNav","scrolltoposition","jumptoposition","pgId","progress","jumpToPos","scrollToPos"]}get startpos(){return this.$$.ctx.startpos}set startpos(t){this.$set({startpos:t}),N()}get homepos(){return this.$$.ctx.homepos}set homepos(t){this.$set({homepos:t}),N()}get endpos(){return this.$$.ctx.endpos}set endpos(t){this.$set({endpos:t}),N()}get duration(){return this.$$.ctx.duration}set duration(t){this.$set({duration:t}),N()}get easing(){return this.$$.ctx.easing}set easing(t){this.$set({easing:t}),N()}get scrolldata(){return this.$$.ctx.scrolldata}set scrolldata(t){this.$set({scrolldata:t}),N()}get isPrevNav(){return this.$$.ctx.isPrevNav}set isPrevNav(t){this.$set({isPrevNav:t}),N()}get scrolltoposition(){return this.$$.ctx.scrolltoposition}set scrolltoposition(t){this.$set({scrolltoposition:t}),N()}get jumptoposition(){return this.$$.ctx.jumptoposition}set jumptoposition(t){this.$set({jumptoposition:t}),N()}get pgId(){return this.$$.ctx.pgId}set pgId(t){this.$set({pgId:t}),N()}get progress(){return this.$$.ctx.progress}set progress(t){this.$set({progress:t}),N()}get jumpToPos(){return this.$$.ctx.jumpToPos}get scrollToPos(){return this.$$.ctx.scrollToPos}}return customElements.define("scroll-mation",Q),t.default=Q,t.fullRangePx=({endScrollPosPx:t,startScrollPosPx:o})=>t-o,t.toEndPx=(t,o)=>t-o,t.toEndRatio=({scrollPosPx:t,endScrollPosPx:o,homeScrollPos:e})=>(t-o)/(e-o),t.toHomePx=({homeScrollPos:t,scrollPosPx:o})=>t-o,t.toHomeRatio=({homeScrollPos:t,scrollPosPx:o,startScrollPosPx:e})=>(t-o)/(t-e),t.toRangeRatio=({scrollPosPx:t,endScrollPosPx:o,startScrollPosPx:e})=>(t-o)/(e-o),t.toStartPx=(t,o)=>t-o,t.toStartRatio=({homeScrollPos:t,scrollPosPx:o,startScrollPosPx:e})=>(o-e)/(t-e),t}({});
//# sourceMappingURL=scrollmation.js.map
