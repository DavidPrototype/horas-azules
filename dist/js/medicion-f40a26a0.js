(function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Et={exports:{}},z={exports:{}},Q={exports:{}};/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function At(){return st||(st=1,function(l,m){(function(e,s){l.exports=s()})(R,function(){const e=new Map;return{set(r,i,o){e.has(r)||e.set(r,new Map);const n=e.get(r);if(!n.has(i)&&n.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);return}n.set(i,o)},get(r,i){return e.has(r)&&e.get(r).get(i)||null},remove(r,i){if(!e.has(r))return;const o=e.get(r);o.delete(i),o.size===0&&e.delete(r)}}})}(Q)),Q.exports}var G={exports:{}},Y={exports:{}};/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function P(){return ot||(ot=1,function(l,m){(function(e,s){s(m)})(R,function(e){const i="transitionend",o=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(c,a)=>`#${CSS.escape(a)}`)),t),n=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),p=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},f=t=>{if(!t)return 0;let{transitionDuration:c,transitionDelay:a}=window.getComputedStyle(t);const u=Number.parseFloat(c),E=Number.parseFloat(a);return!u&&!E?0:(c=c.split(",")[0],a=a.split(",")[0],(Number.parseFloat(c)+Number.parseFloat(a))*1e3)},w=t=>{t.dispatchEvent(new Event(i))},v=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),g=t=>v(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(o(t)):null,b=t=>{if(!v(t)||t.getClientRects().length===0)return!1;const c=getComputedStyle(t).getPropertyValue("visibility")==="visible",a=t.closest("details:not([open])");if(!a)return c;if(a!==t){const u=t.closest("summary");if(u&&u.parentNode!==a||u===null)return!1}return c},L=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",N=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const c=t.getRootNode();return c instanceof ShadowRoot?c:null}return t instanceof ShadowRoot?t:t.parentNode?N(t.parentNode):null},D=()=>{},C=t=>{t.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,k=[],B=t=>{document.readyState==="loading"?(k.length||document.addEventListener("DOMContentLoaded",()=>{for(const c of k)c()}),k.push(t)):t()},q=()=>document.documentElement.dir==="rtl",h=t=>{B(()=>{const c=I();if(c){const a=t.NAME,u=c.fn[a];c.fn[a]=t.jQueryInterface,c.fn[a].Constructor=t,c.fn[a].noConflict=()=>(c.fn[a]=u,t.jQueryInterface)}})},d=(t,c=[],a=t)=>typeof t=="function"?t(...c):a,_=(t,c,a=!0)=>{if(!a){d(t);return}const u=5,E=f(c)+u;let A=!1;const S=({target:O})=>{O===c&&(A=!0,c.removeEventListener(i,S),d(t))};c.addEventListener(i,S),setTimeout(()=>{A||w(c)},E)},y=(t,c,a,u)=>{const E=t.length;let A=t.indexOf(c);return A===-1?!a&&u?t[E-1]:t[0]:(A+=a?1:-1,u&&(A=(A+E)%E),t[Math.max(0,Math.min(A,E-1))])};e.defineJQueryPlugin=h,e.execute=d,e.executeAfterTransition=_,e.findShadowRoot=N,e.getElement=g,e.getNextActiveElement=y,e.getTransitionDurationFromElement=f,e.getUID=p,e.getjQuery=I,e.isDisabled=L,e.isElement=v,e.isRTL=q,e.isVisible=b,e.noop=D,e.onDOMContentLoaded=B,e.parseSelector=o,e.reflow=C,e.toType=n,e.triggerTransitionEnd=w,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(Y,Y.exports)),Y.exports}/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function V(){return rt||(rt=1,function(l,m){(function(e,s){l.exports=s(P())})(R,function(e){const s=/[^.]*(?=\..*)\.|.*/,r=/\..*/,i=/::\d+$/,o={};let n=1;const p={mouseenter:"mouseover",mouseleave:"mouseout"},f=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function w(h,d){return d&&`${d}::${n++}`||h.uidEvent||n++}function v(h){const d=w(h);return h.uidEvent=d,o[d]=o[d]||{},o[d]}function g(h,d){return function _(y){return q(y,{delegateTarget:h}),_.oneOff&&B.off(h,y.type,d),d.apply(h,[y])}}function b(h,d,_){return function y(t){const c=h.querySelectorAll(d);for(let{target:a}=t;a&&a!==this;a=a.parentNode)for(const u of c)if(u===a)return q(t,{delegateTarget:a}),y.oneOff&&B.off(h,t.type,d,_),_.apply(a,[t])}}function L(h,d,_=null){return Object.values(h).find(y=>y.callable===d&&y.delegationSelector===_)}function N(h,d,_){const y=typeof d=="string",t=y?_:d||_;let c=k(h);return f.has(c)||(c=h),[y,t,c]}function D(h,d,_,y,t){if(typeof d!="string"||!h)return;let[c,a,u]=N(d,_,y);d in p&&(a=(U=>function(T){if(!T.relatedTarget||T.relatedTarget!==T.delegateTarget&&!T.delegateTarget.contains(T.relatedTarget))return U.call(this,T)})(a));const E=v(h),A=E[u]||(E[u]={}),S=L(A,a,c?_:null);if(S){S.oneOff=S.oneOff&&t;return}const O=w(a,d.replace(s,"")),$=c?b(h,_,a):g(h,a);$.delegationSelector=c?_:null,$.callable=a,$.oneOff=t,$.uidEvent=O,A[O]=$,h.addEventListener(u,$,c)}function C(h,d,_,y,t){const c=L(d[_],y,t);c&&(h.removeEventListener(_,c,!!t),delete d[_][c.uidEvent])}function I(h,d,_,y){const t=d[_]||{};for(const[c,a]of Object.entries(t))c.includes(y)&&C(h,d,_,a.callable,a.delegationSelector)}function k(h){return h=h.replace(r,""),p[h]||h}const B={on(h,d,_,y){D(h,d,_,y,!1)},one(h,d,_,y){D(h,d,_,y,!0)},off(h,d,_,y){if(typeof d!="string"||!h)return;const[t,c,a]=N(d,_,y),u=a!==d,E=v(h),A=E[a]||{},S=d.startsWith(".");if(typeof c<"u"){if(!Object.keys(A).length)return;C(h,E,a,c,t?_:null);return}if(S)for(const O of Object.keys(E))I(h,E,O,d.slice(1));for(const[O,$]of Object.entries(A)){const M=O.replace(i,"");(!u||d.includes(M))&&C(h,E,a,$.callable,$.delegationSelector)}},trigger(h,d,_){if(typeof d!="string"||!h)return null;const y=e.getjQuery(),t=k(d),c=d!==t;let a=null,u=!0,E=!0,A=!1;c&&y&&(a=y.Event(d,_),y(h).trigger(a),u=!a.isPropagationStopped(),E=!a.isImmediatePropagationStopped(),A=a.isDefaultPrevented());const S=q(new Event(d,{bubbles:u,cancelable:!0}),_);return A&&S.preventDefault(),E&&h.dispatchEvent(S),S.defaultPrevented&&a&&a.preventDefault(),S}};function q(h,d={}){for(const[_,y]of Object.entries(d))try{h[_]=y}catch{Object.defineProperty(h,_,{configurable:!0,get(){return y}})}return h}return B})}(G)),G.exports}var J={exports:{}},X={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function _t(){return at||(at=1,function(l,m){(function(e,s){l.exports=s()})(R,function(){function e(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function s(i){return i.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}return{setDataAttribute(i,o,n){i.setAttribute(`data-bs-${s(o)}`,n)},removeDataAttribute(i,o){i.removeAttribute(`data-bs-${s(o)}`)},getDataAttributes(i){if(!i)return{};const o={},n=Object.keys(i.dataset).filter(p=>p.startsWith("bs")&&!p.startsWith("bsConfig"));for(const p of n){let f=p.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1,f.length),o[f]=e(i.dataset[p])}return o},getDataAttribute(i,o){return e(i.getAttribute(`data-bs-${s(o)}`))}}})}(X)),X.exports}/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function nt(){return ct||(ct=1,function(l,m){(function(e,s){l.exports=s(_t(),P())})(R,function(e,s){class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(o){return o=this._mergeConfigObj(o),o=this._configAfterMerge(o),this._typeCheckConfig(o),o}_configAfterMerge(o){return o}_mergeConfigObj(o,n){const p=s.isElement(n)?e.getDataAttribute(n,"config"):{};return{...this.constructor.Default,...typeof p=="object"?p:{},...s.isElement(n)?e.getDataAttributes(n):{},...typeof o=="object"?o:{}}}_typeCheckConfig(o,n=this.constructor.DefaultType){for(const[p,f]of Object.entries(n)){const w=o[p],v=s.isElement(w)?"element":s.toType(w);if(!new RegExp(f).test(v))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${p}" provided type "${v}" but expected type "${f}".`)}}}return r})}(J)),J.exports}/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function bt(){return lt||(lt=1,function(l,m){(function(e,s){l.exports=s(At(),V(),nt(),P())})(R,function(e,s,r,i){const o="5.3.1";class n extends r{constructor(f,w){super(),f=i.getElement(f),f&&(this._element=f,this._config=this._getConfig(w),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),s.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,w,v=!0){i.executeAfterTransition(f,w,v)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return e.get(i.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,w={}){return this.getInstance(f)||new this(f,typeof w=="object"?w:null)}static get VERSION(){return o}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return n})}(z)),z.exports}var Z={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function K(){return ut||(ut=1,function(l,m){(function(e,s){l.exports=s(P())})(R,function(e){const s=i=>{let o=i.getAttribute("data-bs-target");if(!o||o==="#"){let n=i.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n=`#${n.split("#")[1]}`),o=n&&n!=="#"?n.trim():null}return e.parseSelector(o)},r={find(i,o=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(o,i))},findOne(i,o=document.documentElement){return Element.prototype.querySelector.call(o,i)},children(i,o){return[].concat(...i.children).filter(n=>n.matches(o))},parents(i,o){const n=[];let p=i.parentNode.closest(o);for(;p;)n.push(p),p=p.parentNode.closest(o);return n},prev(i,o){let n=i.previousElementSibling;for(;n;){if(n.matches(o))return[n];n=n.previousElementSibling}return[]},next(i,o){let n=i.nextElementSibling;for(;n;){if(n.matches(o))return[n];n=n.nextElementSibling}return[]},focusableChildren(i){const o=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(n=>`${n}:not([tabindex^="-"])`).join(",");return this.find(o,i).filter(n=>!e.isDisabled(n)&&e.isVisible(n))},getSelectorFromElement(i){const o=s(i);return o&&r.findOne(o)?o:null},getElementFromSelector(i){const o=s(i);return o?r.findOne(o):null},getMultipleElementsFromSelector(i){const o=s(i);return o?r.find(o):[]}};return r})}(Z)),Z.exports}/*!
  * Bootstrap collapse.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,m){(function(e,s){l.exports=s(bt(),V(),K(),P())})(R,function(e,s,r,i){const o="collapse",p=".bs.collapse",f=".data-api",w=`show${p}`,v=`shown${p}`,g=`hide${p}`,b=`hidden${p}`,L=`click${p}${f}`,N="show",D="collapse",C="collapsing",I="collapsed",k=`:scope .${D} .${D}`,B="collapse-horizontal",q="width",h="height",d=".collapse.show, .collapse.collapsing",_='[data-bs-toggle="collapse"]',y={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class c extends e{constructor(u,E){super(u,E),this._isTransitioning=!1,this._triggerArray=[];const A=r.find(_);for(const S of A){const O=r.getSelectorFromElement(S),$=r.find(O).filter(M=>M===this._element);O!==null&&$.length&&this._triggerArray.push(S)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return y}static get DefaultType(){return t}static get NAME(){return o}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let u=[];if(this._config.parent&&(u=this._getFirstLevelChildren(d).filter(M=>M!==this._element).map(M=>c.getOrCreateInstance(M,{toggle:!1}))),u.length&&u[0]._isTransitioning||s.trigger(this._element,w).defaultPrevented)return;for(const M of u)M.hide();const A=this._getDimension();this._element.classList.remove(D),this._element.classList.add(C),this._element.style[A]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const S=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D,N),this._element.style[A]="",s.trigger(this._element,v)},$=`scroll${A[0].toUpperCase()+A.slice(1)}`;this._queueCallback(S,this._element,!0),this._element.style[A]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||s.trigger(this._element,g).defaultPrevented)return;const E=this._getDimension();this._element.style[E]=`${this._element.getBoundingClientRect()[E]}px`,i.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(D,N);for(const S of this._triggerArray){const O=r.getElementFromSelector(S);O&&!this._isShown(O)&&this._addAriaAndCollapsedClass([S],!1)}this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D),s.trigger(this._element,b)};this._element.style[E]="",this._queueCallback(A,this._element,!0)}_isShown(u=this._element){return u.classList.contains(N)}_configAfterMerge(u){return u.toggle=!!u.toggle,u.parent=i.getElement(u.parent),u}_getDimension(){return this._element.classList.contains(B)?q:h}_initializeChildren(){if(!this._config.parent)return;const u=this._getFirstLevelChildren(_);for(const E of u){const A=r.getElementFromSelector(E);A&&this._addAriaAndCollapsedClass([E],this._isShown(A))}}_getFirstLevelChildren(u){const E=r.find(k,this._config.parent);return r.find(u,this._config.parent).filter(A=>!E.includes(A))}_addAriaAndCollapsedClass(u,E){if(u.length)for(const A of u)A.classList.toggle(I,!E),A.setAttribute("aria-expanded",E)}static jQueryInterface(u){const E={};return typeof u=="string"&&/show|hide/.test(u)&&(E.toggle=!1),this.each(function(){const A=c.getOrCreateInstance(this,E);if(typeof u=="string"){if(typeof A[u]>"u")throw new TypeError(`No method named "${u}"`);A[u]()}})}}return s.on(document,L,_,function(a){(a.target.tagName==="A"||a.delegateTarget&&a.delegateTarget.tagName==="A")&&a.preventDefault();for(const u of r.getMultipleElementsFromSelector(this))c.getOrCreateInstance(u,{toggle:!1}).toggle()}),i.defineJQueryPlugin(c),c})})(Et);var vt={exports:{}},tt={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function yt(){return dt||(dt=1,function(l,m){(function(e,s){l.exports=s(V(),nt(),P())})(R,function(e,s,r){const i="backdrop",o="fade",n="show",p=`mousedown.bs.${i}`,f={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},w={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class v extends s{constructor(b){super(),this._config=this._getConfig(b),this._isAppended=!1,this._element=null}static get Default(){return f}static get DefaultType(){return w}static get NAME(){return i}show(b){if(!this._config.isVisible){r.execute(b);return}this._append();const L=this._getElement();this._config.isAnimated&&r.reflow(L),L.classList.add(n),this._emulateAnimation(()=>{r.execute(b)})}hide(b){if(!this._config.isVisible){r.execute(b);return}this._getElement().classList.remove(n),this._emulateAnimation(()=>{this.dispose(),r.execute(b)})}dispose(){this._isAppended&&(e.off(this._element,p),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const b=document.createElement("div");b.className=this._config.className,this._config.isAnimated&&b.classList.add(o),this._element=b}return this._element}_configAfterMerge(b){return b.rootElement=r.getElement(b.rootElement),b}_append(){if(this._isAppended)return;const b=this._getElement();this._config.rootElement.append(b),e.on(b,p,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(b){r.executeAfterTransition(b,this._getElement(),this._config.isAnimated)}}return v})}(tt)),tt.exports}var W={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function Tt(){return ht||(ht=1,function(l,m){(function(e,s){s(m,V(),K(),P())})(R,function(e,s,r,i){const o=(n,p="hide")=>{const f=`click.dismiss${n.EVENT_KEY}`,w=n.NAME;s.on(document,f,`[data-bs-dismiss="${w}"]`,function(v){if(["A","AREA"].includes(this.tagName)&&v.preventDefault(),i.isDisabled(this))return;const g=r.getElementFromSelector(this)||this.closest(`.${w}`);n.getOrCreateInstance(g)[p]()})};e.enableDismissTrigger=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(W,W.exports)),W.exports}var et={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function wt(){return ft||(ft=1,function(l,m){(function(e,s){l.exports=s(V(),K(),nt())})(R,function(e,s,r){const i="focustrap",n=".bs.focustrap",p=`focusin${n}`,f=`keydown.tab${n}`,w="Tab",v="forward",g="backward",b={autofocus:!0,trapElement:null},L={autofocus:"boolean",trapElement:"element"};class N extends r{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return b}static get DefaultType(){return L}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,n),e.on(document,p,C=>this._handleFocusin(C)),e.on(document,f,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,n))}_handleFocusin(C){const{trapElement:I}=this._config;if(C.target===document||C.target===I||I.contains(C.target))return;const k=s.focusableChildren(I);k.length===0?I.focus():this._lastTabNavDirection===g?k[k.length-1].focus():k[0].focus()}_handleKeydown(C){C.key===w&&(this._lastTabNavDirection=C.shiftKey?g:v)}}return N})}(et)),et.exports}var it={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function Ct(){return pt||(pt=1,function(l,m){(function(e,s){l.exports=s(_t(),K(),P())})(R,function(e,s,r){const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",o=".sticky-top",n="padding-right",p="margin-right";class f{constructor(){this._element=document.body}getWidth(){const v=document.documentElement.clientWidth;return Math.abs(window.innerWidth-v)}hide(){const v=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,n,g=>g+v),this._setElementAttributes(i,n,g=>g+v),this._setElementAttributes(o,p,g=>g-v)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,n),this._resetElementAttributes(i,n),this._resetElementAttributes(o,p)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(v,g,b){const L=this.getWidth(),N=D=>{if(D!==this._element&&window.innerWidth>D.clientWidth+L)return;this._saveInitialAttribute(D,g);const C=window.getComputedStyle(D).getPropertyValue(g);D.style.setProperty(g,`${b(Number.parseFloat(C))}px`)};this._applyManipulationCallback(v,N)}_saveInitialAttribute(v,g){const b=v.style.getPropertyValue(g);b&&e.setDataAttribute(v,g,b)}_resetElementAttributes(v,g){const b=L=>{const N=e.getDataAttribute(L,g);if(N===null){L.style.removeProperty(g);return}e.removeDataAttribute(L,g),L.style.setProperty(g,N)};this._applyManipulationCallback(v,b)}_applyManipulationCallback(v,g){if(r.isElement(v)){g(v);return}for(const b of s.find(v,this._element))g(b)}}return f})}(it)),it.exports}/*!
  * Bootstrap modal.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(l,m){(function(e,s){l.exports=s(bt(),V(),K(),yt(),Tt(),wt(),P(),Ct())})(R,function(e,s,r,i,o,n,p,f){const w="modal",g=".bs.modal",b=".data-api",L="Escape",N=`hide${g}`,D=`hidePrevented${g}`,C=`hidden${g}`,I=`show${g}`,k=`shown${g}`,B=`resize${g}`,q=`click.dismiss${g}`,h=`mousedown.dismiss${g}`,d=`keydown.dismiss${g}`,_=`click${g}${b}`,y="modal-open",t="fade",c="show",a="modal-static",u=".modal.show",E=".modal-dialog",A=".modal-body",S='[data-bs-toggle="modal"]',O={backdrop:!0,focus:!0,keyboard:!0},$={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class M extends e{constructor(T,x){super(T,x),this._dialog=r.findOne(E,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new f,this._addEventListeners()}static get Default(){return O}static get DefaultType(){return $}static get NAME(){return w}toggle(T){return this._isShown?this.hide():this.show(T)}show(T){this._isShown||this._isTransitioning||s.trigger(this._element,I,{relatedTarget:T}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(y),this._adjustDialog(),this._backdrop.show(()=>this._showElement(T)))}hide(){!this._isShown||this._isTransitioning||s.trigger(this._element,N).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(c),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){s.off(window,g),s.off(this._dialog,g),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new i({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new n({trapElement:this._element})}_showElement(T){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const x=r.findOne(A,this._dialog);x&&(x.scrollTop=0),p.reflow(this._element),this._element.classList.add(c);const F=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,s.trigger(this._element,k,{relatedTarget:T})};this._queueCallback(F,this._dialog,this._isAnimated())}_addEventListeners(){s.on(this._element,d,T=>{if(T.key===L){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),s.on(window,B,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),s.on(this._element,h,T=>{s.one(this._element,q,x=>{if(!(this._element!==T.target||this._element!==x.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(y),this._resetAdjustments(),this._scrollBar.reset(),s.trigger(this._element,C)})}_isAnimated(){return this._element.classList.contains(t)}_triggerBackdropTransition(){if(s.trigger(this._element,D).defaultPrevented)return;const x=this._element.scrollHeight>document.documentElement.clientHeight,F=this._element.style.overflowY;F==="hidden"||this._element.classList.contains(a)||(x||(this._element.style.overflowY="hidden"),this._element.classList.add(a),this._queueCallback(()=>{this._element.classList.remove(a),this._queueCallback(()=>{this._element.style.overflowY=F},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const T=this._element.scrollHeight>document.documentElement.clientHeight,x=this._scrollBar.getWidth(),F=x>0;if(F&&!T){const H=p.isRTL()?"paddingLeft":"paddingRight";this._element.style[H]=`${x}px`}if(!F&&T){const H=p.isRTL()?"paddingRight":"paddingLeft";this._element.style[H]=`${x}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(T,x){return this.each(function(){const F=M.getOrCreateInstance(this,T);if(typeof T=="string"){if(typeof F[T]>"u")throw new TypeError(`No method named "${T}"`);F[T](x)}})}}return s.on(document,_,S,function(U){const T=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&U.preventDefault(),s.one(T,I,H=>{H.defaultPrevented||s.one(T,C,()=>{p.isVisible(this)&&this.focus()})});const x=r.findOne(u);x&&M.getInstance(x).hide(),M.getOrCreateInstance(T).toggle(this)}),o.enableDismissTrigger(M),p.defineJQueryPlugin(M),M})})(vt);class St extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("nav-active");this.innerHTML=`
        <header class="header">
            <nav class="nav">
                <div class="nav__logo">
                    <div class="custom-container">
                        <a
                            href="https://www.bancoppel.com/main/index.html"
                            target="_blank"
                        >
                            <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                        </a>
                    </div>
                </div>
                <div class="nav--menu custom-container">
                    <ul class="menu font-secondary">
                        <li class="menu__item" id="nav-inicio"><a href="index.html">Inicio</a></li>
                        <li class="menu__item" id="nav-tarjeta"><a href="mi-tarjeta.html">Mi tarjeta</a></li>
                        <li class="menu__item" id="nav-app"><a href="mi-app.html">Mi App</a></li>
                        <li class="menu__item" id="nav-ayuda"><a href="preguntas-frecuentes.html">Ayuda</a></li>
                    </ul>
                </div>
                    
                </nav>
        </header>
        `,this.getAttribute("nav-active")&&document.getElementById(m).classList.add("menu__item--active")}}window.customElements.define("custom-header",St);class Lt extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
             <footer class="footer">
            <div class="custom-container">
                <a
                    href="https://www.bancoppel.com/main/index.html"
                    target="_blank"
                >
                    <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                </a>
               
                <div class="row">
                    <div class="col-12 col-lg-3" id="acerca">
                     <h3>Acerca de BanCoppel</h3>
                        <ul>
                            <li><a href="javascript:void(0);">¿Quiénes somos?</a></li>
                            <li><a href="javascript:void(0);">Informacion Corporativa</a></li>
                            <li><a href="javascript:void(0);">Tarifas y Comisiones</a></li>                            
                            
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6" id="unidad">
                        <h3>Unidad Especializada Bancoppel Condusef</h3>
                        <p>
                            BanCoppel, S.A., Institución de Banca Múltiple recibe las consultas, reclamaciones o
                            aclaraciones en su Unidad Especializada de Atención a Usuarios, ubicada en 
                            Av. Insurgentes Sur 553, Interior Piso 6,
                        </p>
                        <p>
                            Colonia Escandón II Sección, C.P. 11800, Miguel Hidalgo, Ciudad de México y 
                            por <span> correo electrónico une@bancoppel.com </span> o <span>teléfono (55) 5278 0000 ext. 510196</span> , 
                            así como en cualquiera de sus sucursales u oficinas. En el caso de no obtener una 
                            respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección 
                            y Defensa de los Usuarios de Servicios Financieros.
                        </p>
                        <p>
                           <span> Correo electrónico: asesoria@condusef.gob.mx, chat en línea 
                            www.condusef.gob.mx o Tel: 800 999 8080 y 55 53 40 09 99.
                           </span>   
                        </p>
                    </div>
                    <div class="col-12 col-lg-3" id="contacto">
                      <h3>Contacto</h3>
                        <ul>
                            <li>
                                Lada sin costo en México<br />
                               <a href="tel:8001226773"> 800-1-226-773 </a>
                            </li>
                            <li>
                                Desde Estados Unidos y Canadá<br />
                                <a href="tel:8662543790">866-254-3790</a>
                            </li>
                        </ul>
                        <div class="footer--socials">
                            <a href="javascript:void(0);" target="_blank"><img
                                src="/img/icon-facebook.svg"
                                title="Facebook"
                                alt="Logo Facebook"
                            /></a>
                            <a href="javascript:void(0);" target="_blank"><img
                                src="/img/icon-youtube.svg"
                                title="Youtube"
                                alt="Logo Youtube"
                            /></a>
                            
                        </div>
                    </div>
                </div>

                <div class="footer--sponsors">
                    <a href="javascript:void(0);">
                        <img src="/img/icon-fintech.svg" alt="Logo Fintech"  title="FINTECH"/>
                    </a>
                    <a href="javascript:void(0);">
                        <img src="/img/buro.svg" alt="Logo Fintech" title="Buro"/>
                    </a>
                </div>
                <div class="footer--legales">
                    <p>
                        Copyrigth 2022
                        <span class="asociacion"
                            >Bancoppel S.A Institución de Banca Múltiple</span
                        >
                        - Todos los derechos reservados
                       
                    </p>
                    <p id="links-legal">
                        Consulta nuestros productos más destacados
                        <a href="javascript:void(0);">Términos y Condiciones de Uso </a>
                        <a href="javascript:void(0);"> Aviso de Privacidad </a>
                       
                    </p>
                    
                </div>
            </div>
        </footer>
        `}}window.customElements.define("custom-footer",Lt);class Dt extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
             <section class="app">
                <div class="custom-container">
                    <div class="row">
                        <div class="col-12 col-lg-10 col-xl-12 app--mockup">
                           <div class="img--container">

                               <picture class="image">
                              
                                   <source                                      
                                       srcset="img/app.webp"
                                       media="(min-width: 1024px)"
                                       type="image/webp"
                                   />
                                   <source                                      
                                       srcset=" img/app-portrait.webp"
                                       media="(min-width: 768px)"
                                       type="image/webp"
                                   />
                                   
                                   <img                                                                           
                                       srcset="/img/app.jpeg"
                                       alt="magen App Bancoppel"
                                   />
                                  
                               </picture>
                               
                              
                                <picture class="qr">
                                    <img                                     
                                        src="/img/qr-img.png"
                                        width="151" height="147"
                                        alt="imagen QR"
                                    />
                                </picture>
                           </div>
                        </div>
                        <div class="col-lg-8 app--instrucciones">
                            <picture>
                                <img src="/icons/idea.svg" alt="" />
                            </picture>
                            <p>
                                Pon la cámara de tu celular frente al código QR
                                para descargar la App.
                            </p>
                        </div>
                        <div class="col-12 col-lg-10 col-xl-6 app--info">
                            <h2 class="title-underline">
                                Lleva el banco a todas partes con la App
                                BanCoppel*
                            </h2>
                            <p>
                                Acude a cualquier Sucursal para firmar el
                                Contrato de Servicios Digitales, antes de usar
                                la Banca Electrónica.
                            </p>
                            <a href="https://bancoppe.onelink.me/UapG/c2757ivk" target="_blank"><custom-boton tipo="primario" texto="Descargar"></custom-boton></a>
                        </div>
                    </div>

                    
                </div>
            </section>
        `}}window.customElements.define("app-bancoppel",Dt);class Nt extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("data-id"),e=this.getAttribute("texto"),s=this.getAttribute("tipo");this.innerHTML=`
              <button class="btn ${s}" id='${m}'>${e}</buton>`}attributeChangesCallback(m,e,s){}}window.customElements.define("custom-boton",Nt);class Mt extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("icon"),e=this.getAttribute("texto-badge");this.innerHTML=`
          <div class="badge">
            <img src="${m}">
            <h6>${e}</h6>
          </div>
        `}}window.customElements.define("custom-badge",Mt);class xt extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("icon"),e=this.getAttribute("texto-badge"),s=this.getAttribute("titulo"),r=this.getAttribute("descripcion"),i=this.getAttribute("imagen"),o=this.getAttribute("imagenWebp"),n=this.getAttribute("link");this.innerHTML=`
            <a href="${n}" class="text-decoration-none">
                <div class="card card-promo">
                    <custom-badge icon="${m}" texto-badge="${e}"></custom-badge>
                    <div class="card-promo__info">
                        <h5><strong>${s}</strong></h5>
                        <p>${r}
                        </p>
                        <h6 class="link"><strong>Ver más</strong></h6>
                        
                    </div>
                    <div class="card-promo__image">
                        <picture>
                            <source srcset="${o}" type="image/webp">
                            <img src="${i}" alt="" />
                        </picture>
                    </div>
                </div>
            </a>
    `}}window.customElements.define("custom-card",xt);class Ot extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("icon"),e=this.getAttribute("titulo");this.innerHTML=`
        
        <div
            class="card card-icon"
        >
            <picture>
                <img
                    src="${m}"
                    alt=""
                />
            </picture>
            <h5><strong>${e}</strong></h5>
        </div>
    `}}window.customElements.define("custom-card-icon",Ot);class kt extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("tipo"),e=this.getAttribute("titulo"),s=this.getAttribute("subtitulo"),r=this.getAttribute("texto-boton"),i=this.getAttribute("link-boton"),o=this.getAttribute("imagen"),n=this.getAttribute("imagen-webp"),p=this.getAttribute("imagen-tarjeta"),f=this.getAttribute("imagen-tarjeta-webp"),w=this.getAttribute("icon"),v=this.getAttribute("texto-badge");m=="primario"?this.innerHTML=`
                <div class="hero hero-${m}">
                    <div class="hero--info">
                        <h1 class="title-underline">${e}</h1>
                        <p>${s}</p>

                        ${r=="hide"?"":'<a href="'+i+'"><custom-boton tipo="primario" value="'+r+'"><custom-boton></a>'}
                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${n}" type="image/webp">
                            <img
                                class="w-100"
                                src="${o}"
                                alt="Imagen Hero"
                            />
                        </picture>
                        ${p=="hide"?"":'<picture class="hero--img--tdc"><source srcset="'+p+'" type="image/webp"><img class="w-100" src="'+f+'" alt="Imagen Tarjeta Credito Bancoppel" /></picture>'}
                        ${w=="hide"?"":'<div class="hero--badge"><custom-badge icon="'+w+'" texto-badge="'+v+'"></custom-badge></div>'}    
                    </figure>
                    
                </div>
            `:m=="secundario"&&(this.innerHTML=`
                <div class="hero hero-${m}">
                    <div class="hero--info">
                        <h1 class="title-underline">${e}</h1>
                        <p><strong>${s}</strong></p>

                        ${r=="hide"?"":'<a href="'+i+'"><custom-boton tipo="secundario" value="'+r+'"><custom-boton></a>'}
                    </div>
                    
                    <div class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${n}" type="image/webp">
                            <img
                                class="w-100"
                                src="${o}"
                                alt="Imagen Hero"
                            />
                        </picture>
                    </div>
                    
                </div>
            `)}}window.customElements.define("custom-hero",kt);class $t extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("icono"),e=this.getAttribute("titulo-alert"),s=this.getAttribute("texto-alert");this.innerHTML=`
          <div class="col-12 col-lg-10 col-xl-8 alert--card">
                <picture class="badge--image">
                    <img src="${m}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido"><h4 class="strong-circular">${e}</h4>${s}</div>
            </div>
        `}}window.customElements.define("custom-alert",$t);class It extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("title"),e=this.getAttribute("content");this.innerHTML=`
                <div class="accordion-item">
                    <h2 class="accordion-button collapsed" data-bs-toggle="collapse" aria-expanded="false">
                        ${m}
                    </h2>
                    <div id="" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><p>
                        ${e}
                        </p>
                    </div>
                </div>
                `}attributeChangesCallback(m,e,s){}static get observedAttributes(){}}window.customElements.define("custom-accordion",It);let j=document.querySelectorAll("custom-accordion");for(let l=0;l<j.length;l++)j[l].querySelector(".accordion-button").setAttribute("data-bs-target","#accordion-"+l),j[l].querySelector(".accordion-button").id="heading-"+l,j[l].querySelector(".accordion-collapse").id="accordion-"+l;class Rt extends HTMLElement{constructor(){super()}connectedCallback(){let m=this.getAttribute("id-modal"),e=this.getAttribute("id-btn-salida"),s=this.getAttribute("link-btn-salida");this.innerHTML=`
             <div
                class="modal fade"
                id="${m}"
                tabindex="-1"
                aria-labelledby="modal-salidaLabel"
                aria-hidden="true"
                role="dialog"
            >
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-body">
                        <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                        <h1 id="modal-salidaLabel">
                            <strong>
                                Estás a punto de salir del sitio Horas
                                Azules</strong
                            >
                        </h1>
                        <p>
                            Serás redirigido al sitio oficial de la promoción que
                            seleccionaste, el cual es responsable de su propio
                            contenido y política de privacidad.
                        </p>
                        <a
                            href="${s}"
                            target="_blank"
                            rel="noopener noreferrer"
                            id="${e}"
                            class="link-btn"
                        >
                            <custom-boton
                                tipo="secundario-icon"
                                texto="Continuar"
                            ></custom-boton
                        ></a>
                    </div>
                </div>
            </div>

        `}}window.customElements.define("modal-salida",Rt);document.addEventListener("DOMContentLoaded",function(){document.querySelectorAll(".nav--menu .menu__item").forEach(n=>{n.addEventListener("click",()=>{Ft(n.innerText),gt(n.innerText)})}),document.querySelector(".nav__logo a").addEventListener("click",function(){gt("Logo Bancoppel")}),document.querySelectorAll("footer #acerca ul li").forEach(n=>{n.addEventListener("click",function(){Bt(n.firstChild.innerText)})});const s=document.querySelectorAll("footer #contacto ul li a");s[0].addEventListener("click",function(){mt("México")}),s[1].addEventListener("click",function(){mt("Estados Unidos y Canadá")}),document.querySelectorAll(".footer--socials img").forEach(n=>{n.addEventListener("click",function(){console.log(n.getAttribute("title")),qt(n.getAttribute("title"))})}),document.querySelectorAll(".footer--sponsors img").forEach(n=>{n.addEventListener("click",function(){Pt(n.getAttribute("title"))})}),document.querySelectorAll(".footer--legales #links-legal a").forEach(n=>{n.addEventListener("click",function(){Vt(n.innerText)})})});function Ft(l){dataLayer.push({nd1:"Horas azules BanCoppel",nd2:"Menú",nd3:l,nd4:"",event:"horasAzulesBcpl"})}function gt(l){dataLayer.push({nd1:"Menú superior",nd2:l,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})}function Bt(l){dataLayer.push({nd1:"Menú Inferior",nd2:"Acerca de bancoppel",nd3:l,nd4:"",event:"clicMenuSuperiorGeneral"})}function mt(l){dataLayer.push({nd1:"Menú inferior",nd2:"Teléfono",nd3:l,nd4:"",event:"clicMenuSuperiorGeneral"})}function qt(l){dataLayer.push({nd1:"Menú inferior",nd2:"Redes sociales",nd3:l,nd4:"",event:"clicMenuSuperiorGeneral"})}function Pt(l){dataLayer.push({nd1:"Menú inferior",nd2:"Sitios externos",nd3:l,nd4:"",event:"clicMenuSuperiorGeneral"})}function Vt(l){dataLayer.push({nd1:"Menú inferior",nd2:l,nd3:"",nd4:"",event:"clicMenuSuperiorGeneral"})}
