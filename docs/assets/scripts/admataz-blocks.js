var AdmatazBlocks=function(){"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(t,e){t.appendChild(e)}function l(t,e,o){t.insertBefore(e,o||null)}function c(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function u(){return t=" ",document.createTextNode(t);var t}function h(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}let d;function g(t){d=t}const $=[],m=[],p=[],y=[],w=Promise.resolve();let x=!1;function b(t){p.push(t)}function k(){const t=new Set;do{for(;$.length;){const t=$.shift();g(t),v(t.$$)}for(;m.length;)m.pop()();for(let e=0;e<p.length;e+=1){const o=p[e];t.has(o)||(o(),t.add(o))}p.length=0}while($.length);for(;y.length;)y.pop()();x=!1}function v(t){null!==t.fragment&&(t.update(),n(t.before_update),t.fragment&&t.fragment.p(t.ctx,t.dirty),t.dirty=[-1],t.after_update.forEach(b))}const C=new Set;function _(t,e){-1===t.$$.dirty[0]&&($.push(t),x||(x=!0,w.then(k)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function E(i,s,l,c,f,a,u=[-1]){const h=d;g(i);const $=s.props||{},m=i.$$={fragment:null,ctx:null,props:a,update:t,not_equal:f,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:o(),dirty:u};let p=!1;var y,w;m.ctx=l?l(i,$,(t,e,o=e)=>(m.ctx&&f(m.ctx[t],m.ctx[t]=o)&&(m.bound[t]&&m.bound[t](o),p&&_(i,t)),e)):[],m.update(),p=!0,n(m.before_update),m.fragment=!!c&&c(m.ctx),s.target&&(s.hydrate?m.fragment&&m.fragment.l(function(t){return Array.from(t.childNodes)}(s.target)):m.fragment&&m.fragment.c(),s.intro&&((y=i.$$.fragment)&&y.i&&(C.delete(y),y.i(w))),function(t,o,i){const{fragment:s,on_mount:l,on_destroy:c,after_update:f}=t.$$;s&&s.m(o,i),b(()=>{const o=l.map(e).filter(r);c?c.push(...o):n(o),t.$$.on_mount=[]}),f.forEach(b)}(i,s.target,s.anchor),k()),g(h)}let M;function q(t,e,o){const n=t.slice();return n[17]=e[o],n}function A(t){let e,o,n,r,i,f,u;return{c(){e=a("g"),o=a("polygon"),r=a("polygon"),i=a("polygon"),h(o,"points","2,2 0,1 2,0 4,1"),h(o,"fill",n=t[17].fillColour),h(o,"classname","cubeTop"),h(r,"points","2,2 2,4 0,3 0,1"),h(r,"fill",t[6]),h(r,"classname","cubeFrontLeft"),h(i,"points","2,2 4,1 4,3 2,4"),h(i,"fill",t[7]),h(i,"classname","cubeFrontRight"),h(e,"transform",f=`matrix( ${t[3]/4} 0 0 ${t[3]/4} ${t[17].xpos+t[17].xoffset} ${t[17].ypos+t[0]*t[17].randomizer})`),h(e,"fill",u=t[17].fillColour),h(e,"stroke",t[4]),h(e,"stroke-width",t[5])},m(t,n){l(t,e,n),s(e,o),s(e,r),s(e,i)},p(t,s){256&s&&n!==(n=t[17].fillColour)&&h(o,"fill",n),64&s&&h(r,"fill",t[6]),128&s&&h(i,"fill",t[7]),265&s&&f!==(f=`matrix( ${t[3]/4} 0 0 ${t[3]/4} ${t[17].xpos+t[17].xoffset} ${t[17].ypos+t[0]*t[17].randomizer})`)&&h(e,"transform",f),256&s&&u!==(u=t[17].fillColour)&&h(e,"fill",u),16&s&&h(e,"stroke",t[4]),32&s&&h(e,"stroke-width",t[5])},d(t){t&&c(e)}}}function L(e){let o,n,r,i,d,g,$,m,p=e[8],y=[];for(let t=0;t<p.length;t+=1)y[t]=A(q(e,p,t));return{c(){o=f("div"),n=f("div"),r=f("div"),i=a("svg");for(let t=0;t<y.length;t+=1)y[t].c();var s,l,c,p;g=u(),$=f("div"),$.innerHTML="<slot></slot>",this.c=t,h(i,"version","1.1"),h(i,"xmlns","http://www.w3.org/2000/svg"),h(i,"id","blocks-svg"),h(i,"viewBox",d=`0 0 ${e[2]} ${e[1]}`),h(i,"preserveAspectRatio","xMinYMin meet"),h(r,"class","blocks-container"),h(n,"class","bg"),h($,"class","fg"),h(o,"class","scrolling-block-container"),s=$,l="scroll",c=e[9],s.addEventListener(l,c,p),m=()=>s.removeEventListener(l,c,p)},m(t,e){l(t,o,e),s(o,n),s(n,r),s(r,i);for(let t=0;t<y.length;t+=1)y[t].m(i,null);s(o,g),s(o,$)},p(t,[e]){if(505&e){let o;for(p=t[8],o=0;o<p.length;o+=1){const n=q(t,p,o);y[o]?y[o].p(n,e):(y[o]=A(n),y[o].c(),y[o].m(i,null))}for(;o<y.length;o+=1)y[o].d(1);y.length=p.length}6&e&&d!==(d=`0 0 ${t[2]} ${t[1]}`)&&h(i,"viewBox",d)},i:t,o:t,d(t){t&&c(o),function(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}(y,t),m()}}}function T(t,e,o){let n,{containerwidth:r=10}=e,{containerheight:i=960}=e,s=1,{yoffset:l=0}=e,{ylimit:c=10}=e,{scale:f=20}=e,{colours:a=["#E86C4E","#666","#FFE074","#71A166","#667FCC"]}=e,{strokecolour:u="#bbb"}=e,{strokewidth:h=.05}=e,{fillcolourfrontleft:d="#fff"}=e,{fillcolourfrontright:g="#efefef"}=e,{gapfrequency:$=.7}=e,{definedylimit:m=0}=e,{randomness:p=1}=e;return t.$set=t=>{"containerwidth"in t&&o(2,r=t.containerwidth),"containerheight"in t&&o(10,i=t.containerheight),"yoffset"in t&&o(0,l=t.yoffset),"ylimit"in t&&o(1,c=t.ylimit),"scale"in t&&o(3,f=t.scale),"colours"in t&&o(11,a=t.colours),"strokecolour"in t&&o(4,u=t.strokecolour),"strokewidth"in t&&o(5,h=t.strokewidth),"fillcolourfrontleft"in t&&o(6,d=t.fillcolourfrontleft),"fillcolourfrontright"in t&&o(7,g=t.fillcolourfrontright),"gapfrequency"in t&&o(12,$=t.gapfrequency),"definedylimit"in t&&o(13,m=t.definedylimit),"randomness"in t&&o(14,p=t.randomness)},t.$$.update=()=>{12&t.$$.dirty&&o(15,s=Math.ceil(r/f)+1),1028&t.$$.dirty&&o(8,n=r&&i?function(){let t,e,o=[],n=0;for(let r=0;r<c;r++)for(let i=0;i<s;i++)r&&Math.random()<$||(n=r%2?f/2:0,t=i*f-f,e=r*f/4-f/4,o.push({xpos:t,ypos:e,xoffset:n,fillColour:a[Math.floor(Math.random()*a.length)],randomizer:Math.random()*p}));return o}():[]),9224&t.$$.dirty&&o(1,c=m||Math.ceil(i/f*4)+1),33796&t.$$.dirty&&console.log({xlimit:s,containerwidth:r,containerheight:i})},[l,c,r,f,u,h,d,g,n,function(t){o(0,l=t.target.scrollTop)},i,a,$,m,p]}"function"==typeof HTMLElement&&(M=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}$destroy(){!function(t,e){const o=t.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(){}});class z extends M{constructor(t){super(),this.shadowRoot.innerHTML='<style>.scrolling-block-container{width:100%;height:100%;position:absolute}.bg{position:absolute;width:100%;height:100%}.fg{position:absolute;overflow:auto;margin:0 auto;width:100%;height:100%}.blocks-container{top:"0";height:100%;width:100%}#blocks-svg{width:100%;height:100%;position:absolute}</style>',E(this,{target:this.shadowRoot},T,L,i,{containerwidth:2,containerheight:10,yoffset:0,ylimit:1,scale:3,colours:11,strokecolour:4,strokewidth:5,fillcolourfrontleft:6,fillcolourfrontright:7,gapfrequency:12,definedylimit:13,randomness:14}),t&&(t.target&&l(t.target,this,t.anchor),t.props&&(this.$set(t.props),k()))}static get observedAttributes(){return["containerwidth","containerheight","yoffset","ylimit","scale","colours","strokecolour","strokewidth","fillcolourfrontleft","fillcolourfrontright","gapfrequency","definedylimit","randomness"]}get containerwidth(){return this.$$.ctx[2]}set containerwidth(t){this.$set({containerwidth:t}),k()}get containerheight(){return this.$$.ctx[10]}set containerheight(t){this.$set({containerheight:t}),k()}get yoffset(){return this.$$.ctx[0]}set yoffset(t){this.$set({yoffset:t}),k()}get ylimit(){return this.$$.ctx[1]}set ylimit(t){this.$set({ylimit:t}),k()}get scale(){return this.$$.ctx[3]}set scale(t){this.$set({scale:t}),k()}get colours(){return this.$$.ctx[11]}set colours(t){this.$set({colours:t}),k()}get strokecolour(){return this.$$.ctx[4]}set strokecolour(t){this.$set({strokecolour:t}),k()}get strokewidth(){return this.$$.ctx[5]}set strokewidth(t){this.$set({strokewidth:t}),k()}get fillcolourfrontleft(){return this.$$.ctx[6]}set fillcolourfrontleft(t){this.$set({fillcolourfrontleft:t}),k()}get fillcolourfrontright(){return this.$$.ctx[7]}set fillcolourfrontright(t){this.$set({fillcolourfrontright:t}),k()}get gapfrequency(){return this.$$.ctx[12]}set gapfrequency(t){this.$set({gapfrequency:t}),k()}get definedylimit(){return this.$$.ctx[13]}set definedylimit(t){this.$set({definedylimit:t}),k()}get randomness(){return this.$$.ctx[14]}set randomness(t){this.$set({randomness:t}),k()}}return customElements.define("admataz-blocks",z),z}();
