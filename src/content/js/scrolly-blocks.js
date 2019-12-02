var app=function(){"use strict";function t(){}function e(t,e){for(const o in e)t[o]=e[o];return t}function o(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(o)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e){t.appendChild(e)}function c(t,e,o){t.insertBefore(e,o||null)}function f(t){t.parentNode.removeChild(t)}function u(t){return document.createElement(t)}function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(){return t=" ",document.createTextNode(t);var t}function d(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}let $;function p(t){$=t}const g=[],m=[],y=[],b=[],x=Promise.resolve();let C=!1;function k(t){y.push(t)}function v(){const t=new Set;do{for(;g.length;){const t=g.shift();p(t),w(t.$$)}for(;m.length;)m.pop()();for(let e=0;e<y.length;e+=1){const o=y[e];t.has(o)||(o(),t.add(o))}y.length=0}while(g.length);for(;b.length;)b.pop()();C=!1}function w(t){null!==t.fragment&&(t.update(),r(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(k))}const F=new Set;let E,L;function M(t,e){t&&t.i&&(F.delete(t),t.i(e))}function R(t,e,o,n){if(t&&t.o){if(F.has(t))return;F.add(t),E.c.push(()=>{F.delete(t),n&&(o&&t.d(1),n())}),t.o(e)}}function _(t){t&&t.c()}function z(t,e,n){const{fragment:i,on_mount:l,on_destroy:c,after_update:f}=t.$$;i&&i.m(e,n),k(()=>{const e=l.map(o).filter(s);c?c.push(...e):r(e),t.$$.on_mount=[]}),f.forEach(k)}function A(t,e){const o=t.$$;null!==o.fragment&&(r(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function T(t,e){-1===t.$$.dirty[0]&&(g.push(t),C||(C=!0,x.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,o,s,i,l,c,f=[-1]){const u=$;p(e);const a=o.props||{},h=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:f};let d=!1;h.ctx=s?s(e,a,(t,o,n=o)=>(h.ctx&&l(h.ctx[t],h.ctx[t]=n)&&(h.bound[t]&&h.bound[t](n),d&&T(e,t)),o)):[],h.update(),d=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target&&(o.hydrate?h.fragment&&h.fragment.l(function(t){return Array.from(t.childNodes)}(o.target)):h.fragment&&h.fragment.c(),o.intro&&M(e.$$.fragment),z(e,o.target,o.anchor),v()),p(u)}function H(e){let o,n,r,s;return{c(){o=a("g"),n=a("polygon"),r=a("polygon"),s=a("polygon"),this.c=t,d(n,"points","2,2 0,1 2,0 4,1"),d(n,"fill",e[0]),d(n,"classname","cubeTop"),d(r,"points","2,2 2,4 0,3 0,1"),d(r,"fill",e[3]),d(r,"classname","cubeFrontLeft"),d(s,"points","2,2 4,1 4,3 2,4"),d(s,"fill",e[4]),d(s,"classname","cubeFrontRight"),d(o,"transform",e[5]),d(o,"fill",e[0]),d(o,"stroke",e[1]),d(o,"stroke-width",e[2])},m(t,e){c(t,o,e),l(o,n),l(o,r),l(o,s)},p(t,[e]){1&e&&d(n,"fill",t[0]),8&e&&d(r,"fill",t[3]),16&e&&d(s,"fill",t[4]),32&e&&d(o,"transform",t[5]),1&e&&d(o,"fill",t[0]),2&e&&d(o,"stroke",t[1]),4&e&&d(o,"stroke-width",t[2])},i:t,o:t,d(t){t&&f(o)}}}function S(t,e,o){let n,{colours:r=["#E86C4E","#666","#FFE074","#71A166","#667FCC"]}=e,{fillColour:s=r[Math.floor(Math.random()*r.length)]}=e,{scale:i=12}=e,{strokeColour:l="#bbb"}=e,{strokeWidth:c=.05}=e,{fillColourFrontLeft:f="#fff"}=e,{fillColourFrontRight:u="#efefef"}=e,{xpos:a=0}=e,{ypos:h=0}=e,{xoffset:d=0}=e,{yoffset:$=0}=e,{randomizer:p=1}=e;return t.$set=t=>{"colours"in t&&o(6,r=t.colours),"fillColour"in t&&o(0,s=t.fillColour),"scale"in t&&o(7,i=t.scale),"strokeColour"in t&&o(1,l=t.strokeColour),"strokeWidth"in t&&o(2,c=t.strokeWidth),"fillColourFrontLeft"in t&&o(3,f=t.fillColourFrontLeft),"fillColourFrontRight"in t&&o(4,u=t.fillColourFrontRight),"xpos"in t&&o(8,a=t.xpos),"ypos"in t&&o(9,h=t.ypos),"xoffset"in t&&o(10,d=t.xoffset),"yoffset"in t&&o(11,$=t.yoffset),"randomizer"in t&&o(12,p=t.randomizer)},t.$$.update=()=>{8064&t.$$.dirty&&o(5,n=`matrix( ${i/4} 0 0 ${i/4} ${a+d*p} ${h+$*p})`)},[s,l,c,f,u,n,r,i,a,h,d,$,p]}"function"==typeof HTMLElement&&(L=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}$destroy(){A(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(){}});class j extends L{constructor(t){super(),W(this,{target:this.shadowRoot},S,H,i,{colours:6,fillColour:0,scale:7,strokeColour:1,strokeWidth:2,fillColourFrontLeft:3,fillColourFrontRight:4,xpos:8,ypos:9,xoffset:10,yoffset:11,randomizer:12}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),v()))}static get observedAttributes(){return["colours","fillColour","scale","strokeColour","strokeWidth","fillColourFrontLeft","fillColourFrontRight","xpos","ypos","xoffset","yoffset","randomizer"]}get colours(){return this.$$.ctx[6]}set colours(t){this.$set({colours:t}),v()}get fillColour(){return this.$$.ctx[0]}set fillColour(t){this.$set({fillColour:t}),v()}get scale(){return this.$$.ctx[7]}set scale(t){this.$set({scale:t}),v()}get strokeColour(){return this.$$.ctx[1]}set strokeColour(t){this.$set({strokeColour:t}),v()}get strokeWidth(){return this.$$.ctx[2]}set strokeWidth(t){this.$set({strokeWidth:t}),v()}get fillColourFrontLeft(){return this.$$.ctx[3]}set fillColourFrontLeft(t){this.$set({fillColourFrontLeft:t}),v()}get fillColourFrontRight(){return this.$$.ctx[4]}set fillColourFrontRight(t){this.$set({fillColourFrontRight:t}),v()}get xpos(){return this.$$.ctx[8]}set xpos(t){this.$set({xpos:t}),v()}get ypos(){return this.$$.ctx[9]}set ypos(t){this.$set({ypos:t}),v()}get xoffset(){return this.$$.ctx[10]}set xoffset(t){this.$set({xoffset:t}),v()}get yoffset(){return this.$$.ctx[11]}set yoffset(t){this.$set({yoffset:t}),v()}get randomizer(){return this.$$.ctx[12]}set randomizer(t){this.$set({randomizer:t}),v()}}function B(t,e,o){const n=t.slice();return n[10]=e[o],n}function N(t){let o;const n=[t[10],{yoffset:t[1]},{scale:t[2]}];let r={};for(let t=0;t<n.length;t+=1)r=e(r,n[t]);const s=new j({props:r});return{c(){_(s.$$.fragment)},m(t,e){z(s,t,e),o=!0},p(t,e){const o=38&e?function(t,e){const o={},n={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],l=e[s];if(l){for(const t in i)t in l||(n[t]=1);for(const t in l)r[t]||(o[t]=l[t],r[t]=1);t[s]=l}else for(const t in i)r[t]=1}for(const t in n)t in o||(o[t]=void 0);return o}(n,[32&e&&(r=t[10],"object"==typeof r&&null!==r?r:{}),2&e&&{yoffset:t[1]},4&e&&{scale:t[2]}]):{};var r;s.$set(o)},i(t){o||(M(s.$$.fragment,t),o=!0)},o(t){R(s.$$.fragment,t),o=!1},d(t){A(s,t)}}}function O(e){let o,n,s,i,h,$=e[5],p=[];for(let t=0;t<$.length;t+=1)p[t]=N(B(e,$,t));const g=t=>R(p[t],1,1,()=>{p[t]=null});return{c(){o=u("div"),n=a("svg");for(let t=0;t<p.length;t+=1)p[t].c();this.c=t,d(n,"version","1.1"),d(n,"xmlns","http://www.w3.org/2000/svg"),d(n,"id","blocks-svg"),d(n,"viewBox",s=`0 0 ${e[3]} ${e[0]}`),d(n,"preserveAspectRatio","xMinYMin meet"),d(o,"class","blocks-container"),k(()=>e[9].call(o))},m(t,r){c(t,o,r),l(o,n);for(let t=0;t<p.length;t+=1)p[t].m(n,null);i=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const o=document.createElement("object");let n;return o.setAttribute("style","display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;"),o.setAttribute("aria-hidden","true"),o.type="text/html",o.tabIndex=-1,o.onload=()=>{n=o.contentDocument.defaultView,n.addEventListener("resize",e)},/Trident/.test(navigator.userAgent)?(t.appendChild(o),o.data="about:blank"):(o.data="about:blank",t.appendChild(o)),{cancel:()=>{n&&n.removeEventListener&&n.removeEventListener("resize",e),t.removeChild(o)}}}(o,e[9].bind(o)),h=!0},p(t,[e]){if(38&e){let o;for($=t[5],o=0;o<$.length;o+=1){const r=B(t,$,o);p[o]?(p[o].p(r,e),M(p[o],1)):(p[o]=N(r),p[o].c(),M(p[o],1),p[o].m(n,null))}for(E={r:0,c:[],p:E},o=$.length;o<p.length;o+=1)g(o);E.r||r(E.c),E=E.p}(!h||9&e&&s!==(s=`0 0 ${t[3]} ${t[0]}`))&&d(n,"viewBox",s)},i(t){if(!h){for(let t=0;t<$.length;t+=1)M(p[t]);h=!0}},o(t){p=p.filter(Boolean);for(let t=0;t<p.length;t+=1)R(p[t]);h=!1},d(t){t&&f(o),function(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}(p,t),i.cancel()}}}function q(t,e,o){let n,r=0,s=0,i=1,{yoffset:l=0}=e,{ylimit:c=10}=e,{scale:f=40}=e,{colours:u=["#E86C4E","#666","#FFE074","#71A166","#667FCC"]}=e;function a(){let t,e,o=[],n=0;for(let r=0;r<c;r++)for(let s=0;s<i;s++)r&&Math.random()<.7||(n=r%2?f/2:0,t=s*f-f,e=r*f/4-f/4,o.push({xpos:t,ypos:e,xoffset:n,fillColour:u[Math.floor(Math.random()*u.length)],randomizer:Math.ceil(10*Math.random())}));return o}return t.$set=t=>{"yoffset"in t&&o(1,l=t.yoffset),"ylimit"in t&&o(0,c=t.ylimit),"scale"in t&&o(2,f=t.scale),"colours"in t&&o(6,u=t.colours)},t.$$.update=()=>{12&t.$$.dirty&&o(7,i=Math.ceil(r/f)+1),20&t.$$.dirty&&o(0,c=Math.ceil(s/f*4)+1),153&t.$$.dirty&&o(5,n=r&&s&&i&&c?a():[])},[c,l,f,r,s,n,u,i,a,function(){r=this.clientWidth,s=this.clientHeight,o(3,r),o(4,s)}]}customElements.define("scrolly-blocks",j);class D extends L{constructor(t){super(),this.shadowRoot.innerHTML='<style>.blocks-container{top:"0";height:100%;width:100%}#blocks-svg{background-color:#dddcdc;width:100%;height:100%;position:absolute}</style>',W(this,{target:this.shadowRoot},q,O,i,{yoffset:1,ylimit:0,scale:2,colours:6}),t&&(t.target&&c(t.target,this,t.anchor),t.props&&(this.$set(t.props),v()))}static get observedAttributes(){return["yoffset","ylimit","scale","colours"]}get yoffset(){return this.$$.ctx[1]}set yoffset(t){this.$set({yoffset:t}),v()}get ylimit(){return this.$$.ctx[0]}set ylimit(t){this.$set({ylimit:t}),v()}get scale(){return this.$$.ctx[2]}set scale(t){this.$set({scale:t}),v()}get colours(){return this.$$.ctx[6]}set colours(t){this.$set({colours:t}),v()}}function I(e){let o,n,r,s,i,a;const $=new D({props:{yoffset:e[0]}});return{c(){var i,l,c,f;o=u("div"),n=u("div"),_($.$$.fragment),r=h(),s=u("div"),s.innerHTML="<slot></slot>",this.c=t,d(n,"class","bg"),d(s,"class","fg"),d(o,"class","scrolling-block-container"),i=s,l="scroll",c=e[1],i.addEventListener(l,c,f),a=()=>i.removeEventListener(l,c,f)},m(t,e){c(t,o,e),l(o,n),z($,n,null),l(o,r),l(o,s),i=!0},p(t,[e]){const o={};1&e&&(o.yoffset=t[0]),$.$set(o)},i(t){i||(M($.$$.fragment,t),i=!0)},o(t){R($.$$.fragment,t),i=!1},d(t){t&&f(o),A($),a()}}}function P(t,e,o){let n=0;return[n,function(t){o(0,n=t.target.scrollTop)}]}customElements.define("scrolly-blocks",D);class V extends L{constructor(t){super(),this.shadowRoot.innerHTML="<style>.scrolling-block-container{width:100%;height:100%;position:absolute}.bg{position:absolute;width:100%;height:100%}.fg{position:absolute;overflow:auto;margin:0 auto;width:100%;height:100%;background:rgba(255, 255, 255, 0.5)}</style>",W(this,{target:this.shadowRoot},P,I,i,{}),t&&t.target&&c(t.target,this,t.anchor)}}return customElements.define("scrolly-blocks",V),new V({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=scrolly-blocks.js.map