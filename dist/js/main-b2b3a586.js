(function(){const _=document.createElement("link").relList;if(_&&_.supports&&_.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();var R=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},_t={exports:{}},j={exports:{}},Q={exports:{}};/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function bt(){return nt||(nt=1,function(m,_){(function(e,n){m.exports=n()})(R,function(){const e=new Map;return{set(r,i,s){e.has(r)||e.set(r,new Map);const o=e.get(r);if(!o.has(i)&&o.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(o.keys())[0]}.`);return}o.set(i,s)},get(r,i){return e.has(r)&&e.get(r).get(i)||null},remove(r,i){if(!e.has(r))return;const s=e.get(r);s.delete(i),s.size===0&&e.delete(r)}}})}(Q)),Q.exports}var G={exports:{}},W={exports:{}};/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function V(){return ot||(ot=1,function(m,_){(function(e,n){n(_)})(R,function(e){const i="transitionend",s=t=>(t&&window.CSS&&window.CSS.escape&&(t=t.replace(/#([^\s"#']+)/g,(l,a)=>`#${CSS.escape(a)}`)),t),o=t=>t==null?`${t}`:Object.prototype.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase(),h=t=>{do t+=Math.floor(Math.random()*1e6);while(document.getElementById(t));return t},p=t=>{if(!t)return 0;let{transitionDuration:l,transitionDelay:a}=window.getComputedStyle(t);const c=Number.parseFloat(l),E=Number.parseFloat(a);return!c&&!E?0:(l=l.split(",")[0],a=a.split(",")[0],(Number.parseFloat(l)+Number.parseFloat(a))*1e3)},T=t=>{t.dispatchEvent(new Event(i))},w=t=>!t||typeof t!="object"?!1:(typeof t.jquery<"u"&&(t=t[0]),typeof t.nodeType<"u"),f=t=>w(t)?t.jquery?t[0]:t:typeof t=="string"&&t.length>0?document.querySelector(s(t)):null,b=t=>{if(!w(t)||t.getClientRects().length===0)return!1;const l=getComputedStyle(t).getPropertyValue("visibility")==="visible",a=t.closest("details:not([open])");if(!a)return l;if(a!==t){const c=t.closest("summary");if(c&&c.parentNode!==a||c===null)return!1}return l},S=t=>!t||t.nodeType!==Node.ELEMENT_NODE||t.classList.contains("disabled")?!0:typeof t.disabled<"u"?t.disabled:t.hasAttribute("disabled")&&t.getAttribute("disabled")!=="false",k=t=>{if(!document.documentElement.attachShadow)return null;if(typeof t.getRootNode=="function"){const l=t.getRootNode();return l instanceof ShadowRoot?l:null}return t instanceof ShadowRoot?t:t.parentNode?k(t.parentNode):null},D=()=>{},C=t=>{t.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,O=[],P=t=>{document.readyState==="loading"?(O.length||document.addEventListener("DOMContentLoaded",()=>{for(const l of O)l()}),O.push(t)):t()},q=()=>document.documentElement.dir==="rtl",d=t=>{P(()=>{const l=I();if(l){const a=t.NAME,c=l.fn[a];l.fn[a]=t.jQueryInterface,l.fn[a].Constructor=t,l.fn[a].noConflict=()=>(l.fn[a]=c,t.jQueryInterface)}})},u=(t,l=[],a=t)=>typeof t=="function"?t(...l):a,g=(t,l,a=!0)=>{if(!a){u(t);return}const c=5,E=p(l)+c;let A=!1;const L=({target:M})=>{M===l&&(A=!0,l.removeEventListener(i,L),u(t))};l.addEventListener(i,L),setTimeout(()=>{A||T(l)},E)},v=(t,l,a,c)=>{const E=t.length;let A=t.indexOf(l);return A===-1?!a&&c?t[E-1]:t[0]:(A+=a?1:-1,c&&(A=(A+E)%E),t[Math.max(0,Math.min(A,E-1))])};e.defineJQueryPlugin=d,e.execute=u,e.executeAfterTransition=g,e.findShadowRoot=k,e.getElement=f,e.getNextActiveElement=v,e.getTransitionDurationFromElement=p,e.getUID=h,e.getjQuery=I,e.isDisabled=S,e.isElement=w,e.isRTL=q,e.isVisible=b,e.noop=D,e.onDOMContentLoaded=P,e.parseSelector=s,e.reflow=C,e.toType=o,e.triggerTransitionEnd=T,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(W,W.exports)),W.exports}/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var rt;function F(){return rt||(rt=1,function(m,_){(function(e,n){m.exports=n(V())})(R,function(e){const n=/[^.]*(?=\..*)\.|.*/,r=/\..*/,i=/::\d+$/,s={};let o=1;const h={mouseenter:"mouseover",mouseleave:"mouseout"},p=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function T(d,u){return u&&`${u}::${o++}`||d.uidEvent||o++}function w(d){const u=T(d);return d.uidEvent=u,s[u]=s[u]||{},s[u]}function f(d,u){return function g(v){return q(v,{delegateTarget:d}),g.oneOff&&P.off(d,v.type,u),u.apply(d,[v])}}function b(d,u,g){return function v(t){const l=d.querySelectorAll(u);for(let{target:a}=t;a&&a!==this;a=a.parentNode)for(const c of l)if(c===a)return q(t,{delegateTarget:a}),v.oneOff&&P.off(d,t.type,u,g),g.apply(a,[t])}}function S(d,u,g=null){return Object.values(d).find(v=>v.callable===u&&v.delegationSelector===g)}function k(d,u,g){const v=typeof u=="string",t=v?g:u||g;let l=O(d);return p.has(l)||(l=d),[v,t,l]}function D(d,u,g,v,t){if(typeof u!="string"||!d)return;let[l,a,c]=k(u,g,v);u in h&&(a=(U=>function(y){if(!y.relatedTarget||y.relatedTarget!==y.delegateTarget&&!y.delegateTarget.contains(y.relatedTarget))return U.call(this,y)})(a));const E=w(d),A=E[c]||(E[c]={}),L=S(A,a,l?g:null);if(L){L.oneOff=L.oneOff&&t;return}const M=T(a,u.replace(n,"")),$=l?b(d,g,a):f(d,a);$.delegationSelector=l?g:null,$.callable=a,$.oneOff=t,$.uidEvent=M,A[M]=$,d.addEventListener(c,$,l)}function C(d,u,g,v,t){const l=S(u[g],v,t);l&&(d.removeEventListener(g,l,!!t),delete u[g][l.uidEvent])}function I(d,u,g,v){const t=u[g]||{};for(const[l,a]of Object.entries(t))l.includes(v)&&C(d,u,g,a.callable,a.delegationSelector)}function O(d){return d=d.replace(r,""),h[d]||d}const P={on(d,u,g,v){D(d,u,g,v,!1)},one(d,u,g,v){D(d,u,g,v,!0)},off(d,u,g,v){if(typeof u!="string"||!d)return;const[t,l,a]=k(u,g,v),c=a!==u,E=w(d),A=E[a]||{},L=u.startsWith(".");if(typeof l<"u"){if(!Object.keys(A).length)return;C(d,E,a,l,t?g:null);return}if(L)for(const M of Object.keys(E))I(d,E,M,u.slice(1));for(const[M,$]of Object.entries(A)){const N=M.replace(i,"");(!c||u.includes(N))&&C(d,E,a,$.callable,$.delegationSelector)}},trigger(d,u,g){if(typeof u!="string"||!d)return null;const v=e.getjQuery(),t=O(u),l=u!==t;let a=null,c=!0,E=!0,A=!1;l&&v&&(a=v.Event(u,g),v(d).trigger(a),c=!a.isPropagationStopped(),E=!a.isImmediatePropagationStopped(),A=a.isDefaultPrevented());const L=q(new Event(u,{bubbles:c,cancelable:!0}),g);return A&&L.preventDefault(),E&&d.dispatchEvent(L),L.defaultPrevented&&a&&a.preventDefault(),L}};function q(d,u={}){for(const[g,v]of Object.entries(u))try{d[g]=v}catch{Object.defineProperty(d,g,{configurable:!0,get(){return v}})}return d}return P})}(G)),G.exports}var J={exports:{}},Z={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var at;function mt(){return at||(at=1,function(m,_){(function(e,n){m.exports=n()})(R,function(){function e(i){if(i==="true")return!0;if(i==="false")return!1;if(i===Number(i).toString())return Number(i);if(i===""||i==="null")return null;if(typeof i!="string")return i;try{return JSON.parse(decodeURIComponent(i))}catch{return i}}function n(i){return i.replace(/[A-Z]/g,s=>`-${s.toLowerCase()}`)}return{setDataAttribute(i,s,o){i.setAttribute(`data-bs-${n(s)}`,o)},removeDataAttribute(i,s){i.removeAttribute(`data-bs-${n(s)}`)},getDataAttributes(i){if(!i)return{};const s={},o=Object.keys(i.dataset).filter(h=>h.startsWith("bs")&&!h.startsWith("bsConfig"));for(const h of o){let p=h.replace(/^bs/,"");p=p.charAt(0).toLowerCase()+p.slice(1,p.length),s[p]=e(i.dataset[h])}return s},getDataAttribute(i,s){return e(i.getAttribute(`data-bs-${n(s)}`))}}})}(Z)),Z.exports}/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var lt;function st(){return lt||(lt=1,function(m,_){(function(e,n){m.exports=n(mt(),V())})(R,function(e,n){class r{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(s){return s=this._mergeConfigObj(s),s=this._configAfterMerge(s),this._typeCheckConfig(s),s}_configAfterMerge(s){return s}_mergeConfigObj(s,o){const h=n.isElement(o)?e.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof h=="object"?h:{},...n.isElement(o)?e.getDataAttributes(o):{},...typeof s=="object"?s:{}}}_typeCheckConfig(s,o=this.constructor.DefaultType){for(const[h,p]of Object.entries(o)){const T=s[h],w=n.isElement(T)?"element":n.toType(T);if(!new RegExp(p).test(w))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${h}" provided type "${w}" but expected type "${p}".`)}}}return r})}(J)),J.exports}/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ct;function gt(){return ct||(ct=1,function(m,_){(function(e,n){m.exports=n(bt(),F(),st(),V())})(R,function(e,n,r,i){const s="5.3.1";class o extends r{constructor(p,T){super(),p=i.getElement(p),p&&(this._element=p,this._config=this._getConfig(T),e.set(this._element,this.constructor.DATA_KEY,this))}dispose(){e.remove(this._element,this.constructor.DATA_KEY),n.off(this._element,this.constructor.EVENT_KEY);for(const p of Object.getOwnPropertyNames(this))this[p]=null}_queueCallback(p,T,w=!0){i.executeAfterTransition(p,T,w)}_getConfig(p){return p=this._mergeConfigObj(p,this._element),p=this._configAfterMerge(p),this._typeCheckConfig(p),p}static getInstance(p){return e.get(i.getElement(p),this.DATA_KEY)}static getOrCreateInstance(p,T={}){return this.getInstance(p)||new this(p,typeof T=="object"?T:null)}static get VERSION(){return s}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(p){return`${p}${this.EVENT_KEY}`}}return o})}(j)),j.exports}var X={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ut;function K(){return ut||(ut=1,function(m,_){(function(e,n){m.exports=n(V())})(R,function(e){const n=i=>{let s=i.getAttribute("data-bs-target");if(!s||s==="#"){let o=i.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),s=o&&o!=="#"?o.trim():null}return e.parseSelector(s)},r={find(i,s=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(s,i))},findOne(i,s=document.documentElement){return Element.prototype.querySelector.call(s,i)},children(i,s){return[].concat(...i.children).filter(o=>o.matches(s))},parents(i,s){const o=[];let h=i.parentNode.closest(s);for(;h;)o.push(h),h=h.parentNode.closest(s);return o},prev(i,s){let o=i.previousElementSibling;for(;o;){if(o.matches(s))return[o];o=o.previousElementSibling}return[]},next(i,s){let o=i.nextElementSibling;for(;o;){if(o.matches(s))return[o];o=o.nextElementSibling}return[]},focusableChildren(i){const s=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(s,i).filter(o=>!e.isDisabled(o)&&e.isVisible(o))},getSelectorFromElement(i){const s=n(i);return s&&r.findOne(s)?s:null},getElementFromSelector(i){const s=n(i);return s?r.findOne(s):null},getMultipleElementsFromSelector(i){const s=n(i);return s?r.find(s):[]}};return r})}(X)),X.exports}/*!
  * Bootstrap collapse.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(m,_){(function(e,n){m.exports=n(gt(),F(),K(),V())})(R,function(e,n,r,i){const s="collapse",h=".bs.collapse",p=".data-api",T=`show${h}`,w=`shown${h}`,f=`hide${h}`,b=`hidden${h}`,S=`click${h}${p}`,k="show",D="collapse",C="collapsing",I="collapsed",O=`:scope .${D} .${D}`,P="collapse-horizontal",q="width",d="height",u=".collapse.show, .collapse.collapsing",g='[data-bs-toggle="collapse"]',v={parent:null,toggle:!0},t={parent:"(null|element)",toggle:"boolean"};class l extends e{constructor(c,E){super(c,E),this._isTransitioning=!1,this._triggerArray=[];const A=r.find(g);for(const L of A){const M=r.getSelectorFromElement(L),$=r.find(M).filter(N=>N===this._element);M!==null&&$.length&&this._triggerArray.push(L)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return v}static get DefaultType(){return t}static get NAME(){return s}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let c=[];if(this._config.parent&&(c=this._getFirstLevelChildren(u).filter(N=>N!==this._element).map(N=>l.getOrCreateInstance(N,{toggle:!1}))),c.length&&c[0]._isTransitioning||n.trigger(this._element,T).defaultPrevented)return;for(const N of c)N.hide();const A=this._getDimension();this._element.classList.remove(D),this._element.classList.add(C),this._element.style[A]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const L=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D,k),this._element.style[A]="",n.trigger(this._element,w)},$=`scroll${A[0].toUpperCase()+A.slice(1)}`;this._queueCallback(L,this._element,!0),this._element.style[A]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||n.trigger(this._element,f).defaultPrevented)return;const E=this._getDimension();this._element.style[E]=`${this._element.getBoundingClientRect()[E]}px`,i.reflow(this._element),this._element.classList.add(C),this._element.classList.remove(D,k);for(const L of this._triggerArray){const M=r.getElementFromSelector(L);M&&!this._isShown(M)&&this._addAriaAndCollapsedClass([L],!1)}this._isTransitioning=!0;const A=()=>{this._isTransitioning=!1,this._element.classList.remove(C),this._element.classList.add(D),n.trigger(this._element,b)};this._element.style[E]="",this._queueCallback(A,this._element,!0)}_isShown(c=this._element){return c.classList.contains(k)}_configAfterMerge(c){return c.toggle=!!c.toggle,c.parent=i.getElement(c.parent),c}_getDimension(){return this._element.classList.contains(P)?q:d}_initializeChildren(){if(!this._config.parent)return;const c=this._getFirstLevelChildren(g);for(const E of c){const A=r.getElementFromSelector(E);A&&this._addAriaAndCollapsedClass([E],this._isShown(A))}}_getFirstLevelChildren(c){const E=r.find(O,this._config.parent);return r.find(c,this._config.parent).filter(A=>!E.includes(A))}_addAriaAndCollapsedClass(c,E){if(c.length)for(const A of c)A.classList.toggle(I,!E),A.setAttribute("aria-expanded",E)}static jQueryInterface(c){const E={};return typeof c=="string"&&/show|hide/.test(c)&&(E.toggle=!1),this.each(function(){const A=l.getOrCreateInstance(this,E);if(typeof c=="string"){if(typeof A[c]>"u")throw new TypeError(`No method named "${c}"`);A[c]()}})}}return n.on(document,S,g,function(a){(a.target.tagName==="A"||a.delegateTarget&&a.delegateTarget.tagName==="A")&&a.preventDefault();for(const c of r.getMultipleElementsFromSelector(this))l.getOrCreateInstance(c,{toggle:!1}).toggle()}),i.defineJQueryPlugin(l),l})})(_t);var Et={exports:{}},tt={exports:{}};/*!
  * Bootstrap backdrop.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var dt;function At(){return dt||(dt=1,function(m,_){(function(e,n){m.exports=n(F(),st(),V())})(R,function(e,n,r){const i="backdrop",s="fade",o="show",h=`mousedown.bs.${i}`,p={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},T={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class w extends n{constructor(b){super(),this._config=this._getConfig(b),this._isAppended=!1,this._element=null}static get Default(){return p}static get DefaultType(){return T}static get NAME(){return i}show(b){if(!this._config.isVisible){r.execute(b);return}this._append();const S=this._getElement();this._config.isAnimated&&r.reflow(S),S.classList.add(o),this._emulateAnimation(()=>{r.execute(b)})}hide(b){if(!this._config.isVisible){r.execute(b);return}this._getElement().classList.remove(o),this._emulateAnimation(()=>{this.dispose(),r.execute(b)})}dispose(){this._isAppended&&(e.off(this._element,h),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const b=document.createElement("div");b.className=this._config.className,this._config.isAnimated&&b.classList.add(s),this._element=b}return this._element}_configAfterMerge(b){return b.rootElement=r.getElement(b.rootElement),b}_append(){if(this._isAppended)return;const b=this._getElement();this._config.rootElement.append(b),e.on(b,h,()=>{r.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(b){r.executeAfterTransition(b,this._getElement(),this._config.isAnimated)}}return w})}(tt)),tt.exports}var Y={exports:{}};/*!
  * Bootstrap component-functions.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var pt;function wt(){return pt||(pt=1,function(m,_){(function(e,n){n(_,F(),K(),V())})(R,function(e,n,r,i){const s=(o,h="hide")=>{const p=`click.dismiss${o.EVENT_KEY}`,T=o.NAME;n.on(document,p,`[data-bs-dismiss="${T}"]`,function(w){if(["A","AREA"].includes(this.tagName)&&w.preventDefault(),i.isDisabled(this))return;const f=r.getElementFromSelector(this)||this.closest(`.${T}`);o.getOrCreateInstance(f)[h]()})};e.enableDismissTrigger=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})})}(Y,Y.exports)),Y.exports}var et={exports:{}};/*!
  * Bootstrap focustrap.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ht;function vt(){return ht||(ht=1,function(m,_){(function(e,n){m.exports=n(F(),K(),st())})(R,function(e,n,r){const i="focustrap",o=".bs.focustrap",h=`focusin${o}`,p=`keydown.tab${o}`,T="Tab",w="forward",f="backward",b={autofocus:!0,trapElement:null},S={autofocus:"boolean",trapElement:"element"};class k extends r{constructor(C){super(),this._config=this._getConfig(C),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return b}static get DefaultType(){return S}static get NAME(){return i}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),e.off(document,o),e.on(document,h,C=>this._handleFocusin(C)),e.on(document,p,C=>this._handleKeydown(C)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,e.off(document,o))}_handleFocusin(C){const{trapElement:I}=this._config;if(C.target===document||C.target===I||I.contains(C.target))return;const O=n.focusableChildren(I);O.length===0?I.focus():this._lastTabNavDirection===f?O[O.length-1].focus():O[0].focus()}_handleKeydown(C){C.key===T&&(this._lastTabNavDirection=C.shiftKey?f:w)}}return k})}(et)),et.exports}var it={exports:{}};/*!
  * Bootstrap scrollbar.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ft;function yt(){return ft||(ft=1,function(m,_){(function(e,n){m.exports=n(mt(),K(),V())})(R,function(e,n,r){const i=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",s=".sticky-top",o="padding-right",h="margin-right";class p{constructor(){this._element=document.body}getWidth(){const w=document.documentElement.clientWidth;return Math.abs(window.innerWidth-w)}hide(){const w=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,o,f=>f+w),this._setElementAttributes(i,o,f=>f+w),this._setElementAttributes(s,h,f=>f-w)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,o),this._resetElementAttributes(i,o),this._resetElementAttributes(s,h)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(w,f,b){const S=this.getWidth(),k=D=>{if(D!==this._element&&window.innerWidth>D.clientWidth+S)return;this._saveInitialAttribute(D,f);const C=window.getComputedStyle(D).getPropertyValue(f);D.style.setProperty(f,`${b(Number.parseFloat(C))}px`)};this._applyManipulationCallback(w,k)}_saveInitialAttribute(w,f){const b=w.style.getPropertyValue(f);b&&e.setDataAttribute(w,f,b)}_resetElementAttributes(w,f){const b=S=>{const k=e.getDataAttribute(S,f);if(k===null){S.style.removeProperty(f);return}e.removeDataAttribute(S,f),S.style.setProperty(f,k)};this._applyManipulationCallback(w,b)}_applyManipulationCallback(w,f){if(r.isElement(w)){f(w);return}for(const b of n.find(w,this._element))f(b)}}return p})}(it)),it.exports}/*!
  * Bootstrap modal.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(m,_){(function(e,n){m.exports=n(gt(),F(),K(),At(),wt(),vt(),V(),yt())})(R,function(e,n,r,i,s,o,h,p){const T="modal",f=".bs.modal",b=".data-api",S="Escape",k=`hide${f}`,D=`hidePrevented${f}`,C=`hidden${f}`,I=`show${f}`,O=`shown${f}`,P=`resize${f}`,q=`click.dismiss${f}`,d=`mousedown.dismiss${f}`,u=`keydown.dismiss${f}`,g=`click${f}${b}`,v="modal-open",t="fade",l="show",a="modal-static",c=".modal.show",E=".modal-dialog",A=".modal-body",L='[data-bs-toggle="modal"]',M={backdrop:!0,focus:!0,keyboard:!0},$={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class N extends e{constructor(y,x){super(y,x),this._dialog=r.findOne(E,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new p,this._addEventListeners()}static get Default(){return M}static get DefaultType(){return $}static get NAME(){return T}toggle(y){return this._isShown?this.hide():this.show(y)}show(y){this._isShown||this._isTransitioning||n.trigger(this._element,I,{relatedTarget:y}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(v),this._adjustDialog(),this._backdrop.show(()=>this._showElement(y)))}hide(){!this._isShown||this._isTransitioning||n.trigger(this._element,k).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(l),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){n.off(window,f),n.off(this._dialog,f),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new i({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new o({trapElement:this._element})}_showElement(y){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const x=r.findOne(A,this._dialog);x&&(x.scrollTop=0),h.reflow(this._element),this._element.classList.add(l);const B=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,n.trigger(this._element,O,{relatedTarget:y})};this._queueCallback(B,this._dialog,this._isAnimated())}_addEventListeners(){n.on(this._element,u,y=>{if(y.key===S){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),n.on(window,P,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),n.on(this._element,d,y=>{n.one(this._element,q,x=>{if(!(this._element!==y.target||this._element!==x.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(v),this._resetAdjustments(),this._scrollBar.reset(),n.trigger(this._element,C)})}_isAnimated(){return this._element.classList.contains(t)}_triggerBackdropTransition(){if(n.trigger(this._element,D).defaultPrevented)return;const x=this._element.scrollHeight>document.documentElement.clientHeight,B=this._element.style.overflowY;B==="hidden"||this._element.classList.contains(a)||(x||(this._element.style.overflowY="hidden"),this._element.classList.add(a),this._queueCallback(()=>{this._element.classList.remove(a),this._queueCallback(()=>{this._element.style.overflowY=B},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const y=this._element.scrollHeight>document.documentElement.clientHeight,x=this._scrollBar.getWidth(),B=x>0;if(B&&!y){const H=h.isRTL()?"paddingLeft":"paddingRight";this._element.style[H]=`${x}px`}if(!B&&y){const H=h.isRTL()?"paddingRight":"paddingLeft";this._element.style[H]=`${x}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(y,x){return this.each(function(){const B=N.getOrCreateInstance(this,y);if(typeof y=="string"){if(typeof B[y]>"u")throw new TypeError(`No method named "${y}"`);B[y](x)}})}}return n.on(document,g,L,function(U){const y=r.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&U.preventDefault(),n.one(y,I,H=>{H.defaultPrevented||n.one(y,C,()=>{h.isVisible(this)&&this.focus()})});const x=r.findOne(c);x&&N.getInstance(x).hide(),N.getOrCreateInstance(y).toggle(this)}),s.enableDismissTrigger(N),h.defineJQueryPlugin(N),N})})(Et);class Tt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("nav-active");this.innerHTML=`
        <header class="header">
            <nav class="nav">
                <div class="nav__logo">
                    <div class="custom-container">
                        <a
                            data-bs-toggle="modal" 
                            data-bs-target="#modal-salida-logo"
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
                <modal-salida id-modal="modal-salida-logo" link-btn-salida="https://www.bancoppel.com/main/index.html"></modal-salida>
        `,this.getAttribute("nav-active")&&document.getElementById(_).classList.add("menu__item--active")}}window.customElements.define("custom-header",Tt);class Ct extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
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
                            <li><a href="https://www.bancoppel.com/acerca_bancoppel/quienes_somos.html?v=2" target="_blank">¿Quiénes somos?</a></li>
                            <li><a href="https://www.bancoppel.com/preguntas_frecuentes/" target="_blank">Centro de Ayuda</a></li>
                            <li><a href="https://www.bancoppel.com/acerca_bancoppel/info_corp.html?v=2" target="_blank">Información corporativa</a></li>
                            <li><a href="https://www.bancoppel.com/corresponsales/index.html" target="_blank">Corresponsales</a></li>
                            <li><a href="https://www.bancoppel.com/acerca_bancoppel/ipab.html" target="_blank">Productos protegidos por IPAB</a></li>
                            <li><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank">Tarifas y comisiones</a></li>
                            <li><a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a41f" target="_blank">Despachos de cobranza internos</a></li>
                            <li><a href="https://www.bancoppel.com/pdf/Despacho_de_Cobranza_Externos.pdf" target="_blank">Despachos de cobranza externos</a></li>
                            <li><a href="https://www.bancoppelapimarket.com/" target="_blank">API Market</a></li>
                             
                        </ul>
                    </div>
                    <div class="col-12 col-lg-6" id="unidad">
                        <h3>Unidad Especializada Bancoppel Condusef</h3>
                        
                        <p>
                            BanCoppel, S.A., Institución de Banca Múltiple recibe las consultas, reclamaciones o
                            aclaraciones en su <span><a href="https://bancoppel.com/pdf/unidad_especializada_bancoppel_condusef.pdf" target="_blank" id="lnk-unidadespec"> Unidad Especializada de Atención a Usuarios</a></span>, ubicada en 
                            Av. Insurgentes Sur 553, Interior Piso 6, Colonia Escandón II Sección, C.P. 11800, Miguel Hidalgo, Ciudad de México y 
                            por  <span> correo electrónico <a href="mailto:une@bancoppel.com" id="lnk-correobanco">une@bancoppel.com</a> </span> o <span>teléfono (55) 5278 0000 ext. 510196</span> , 
                            así como en cualquiera de sus sucursales u oficinas. En el caso de no obtener una 
                            respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección 
                            y Defensa de los Usuarios de Servicios Financieros.
                        </p>
                        <p>
                           <span> Correo electrónico: <a href="mailto:asesoria@condusef.gob.mx" id="lnk-correoasesoria">asesoria@condusef.gob.mx</a>, chat en línea 
                            <a href="https://www.condusef.gob.mx/" target="_blank" id="lnk-condusef">www.condusef.gob.mx</a> o Tel: 800 999 8080 y 55 53 40 09 99.
                           </span>   
                        </p>
                    </div>
                    <div class="col-12 col-lg-3" id="contacto">
                      <h3>Contacto</h3>
                        <ul>
                            <li>
                            <a 
                                href="tel:8001226773"                               
                            > 
                            Lada sin costo en México<br />
                            800-1-226-773 
                             </a>
                            </li>
                            <li>
                              <a href="tel:8662543790">
                                Desde Estados Unidos y Canadá<br />
                               866-254-3790</a>
                            </li>
                        </ul>
                        <div class="footer--socials">
                            <a href="https://www.facebook.com/BanCoppel/" target="_blank"><img
                                src="img/icon-facebook.svg"
                                title="Facebook"
                                alt="Logo Facebook"
                            /></a>
                            <a href="https://www.youtube.com/channel/UCiLO44Yr96fpdkv-ZN-duqg" target="_blank"><img
                                src="img/icon-youtube.svg"
                                title="Youtube"
                                alt="Logo Youtube"
                            /></a>
                            <a href="https://www.linkedin.com/company/bancoppel/" target="_blank"><img
                                src="img/linkedin.svg"
                                title="Linkedin"
                                alt="Logo Linkedin"
                            /></a>
                            <a href="https://www.tiktok.com/@bancoppel" target="_blank"><img
                                src="img/tiktok.svg"
                                title="Tik Tok"
                                alt="Logo Tik Tok"
                            /></a>
                            <a href="https://wa.me/5215530559922" target="_blank"><img
                                src="img/whatsapp.svg"
                                title="Whatsapp"
                                alt="Whatsapp"
                            /></a>
                            
                        </div>
                    </div>
                </div>

                <div class="footer--sponsors">
                    
                    <a href="https://www.bancoppel.com/modal_bcopp/buro.html" target="_blank">
                        <img src="img/buro.svg" alt="Logo Fintech" title="Buro"/>
                    </a>
                    <a href="https://www.fintechmexico.org/" target="_blank">
                        <img src="img/fintech.svg" alt="Logo Fintech"  title="FINTECH"/>
                    </a>
                   
                  
                </div>
                <div class="footer--legales">
                <p class="sitio-admin">
                  Este sitio es administrado por BanCoppel.
                </p>
                <p class="sacv">
                BanCoppel S.A. Institución de Banca Múltiple es una persona moral distinta a Coppel S.A. DE C.V., así como de cualquiera de sus negocios asociados o vinculados.
                </p>    
                <p class="copyright">
                        Copyrigth 2022
                        <span class="asociacion"
                            >Bancoppel S.A Institución de Banca Múltiple</span
                        >
                        - Todos los derechos reservados
                       
                    </p>
                    <p id="links-legal">
                       <a href="https://www.bancoppel.com/imagenes/1001/pdf.php?id=4836a6a5" target="_blank"> Consulta costos y comisiones de nuestros productos</a>
                        <a href="https://www.bancoppel.com/acerca_bancoppel/terminos.html" target="_blank">Términos y Condiciones de Uso </a>
                        <a href="https://www.bancoppel.com/acerca_bancoppel/aviso.html" target="_blank"> Aviso de Privacidad </a>
                       
                    </p>
                    
                </div>
            </div>
        </footer>
        `}}window.customElements.define("custom-footer",Ct);class Lt extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
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
                                       srcset="img/app.jpeg"
                                       alt="Imagen App Bancoppel"
                                   />
                                  
                               </picture>
                               
                              
                                <picture class="qr">
                                    <source srcset="img/qr-img.webp" type="image/webp">
                                    <img                                     
                                        src="img/qr-img.png"
                                        width="151" height="147"
                                        alt="imagen QR"
                                    />
                                </picture>
                           </div>
                        </div>
                        <div class="col-lg-8 app--instrucciones">
                            <picture>
                                <img src="icons/idea.svg" alt="" />
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
                            Haz compras seguras, transfiere, recarga tiempo aire, activa y desactiva tarjetas desde tu celular.
                            </p>
                            <a href="https://bancoppe.onelink.me/UapG/c2757ivk" target="_blank"><custom-boton tipo="primario" texto="Descargar"></custom-boton></a>
                        </div>
                    </div>

                    
                </div>
            </section>
        `}}window.customElements.define("app-bancoppel",Lt);class St extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("data-id"),e=this.getAttribute("texto"),n=this.getAttribute("tipo");this.innerHTML=`
              <button class="btn ${n}" id='${_}'>${e}</buton>`}attributeChangesCallback(_,e,n){}}window.customElements.define("custom-boton",St);class Dt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icon"),e=this.getAttribute("texto-badge");this.innerHTML=`
          <div class="badge">
            <img src="${_}">
            <h6>${e}</h6>
          </div>
        `}}window.customElements.define("custom-badge",Dt);class kt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icon"),e=this.getAttribute("texto-badge"),n=this.getAttribute("titulo"),r=this.getAttribute("descripcion"),i=this.getAttribute("imagen"),s=this.getAttribute("imagenWebp"),o=this.getAttribute("link");this.innerHTML=`
            <a href="${o}" class="text-decoration-none">
                <div class="card card-promo">
                    <custom-badge icon="${_}" texto-badge="${e}"></custom-badge>
                    <div class="card-promo__info">
                        <h5><strong>${n}</strong></h5>
                        <p>${r}
                        </p>
                        <h6 class="link"><strong>Ver más</strong></h6>
                        
                    </div>
                    <div class="card-promo__image">
                        <picture>
                            <source srcset="${s}" type="image/webp">
                            <img src="${i}" alt="" />
                        </picture>
                    </div>
                </div>
            </a>
    `}}window.customElements.define("custom-card",kt);class Nt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icon"),e=this.getAttribute("titulo");this.innerHTML=`
        
        <div
            class="card card-icon"
        >
            <picture>
                <img
                    src="${_}"
                    alt=""
                />
            </picture>
            <h5><strong>${e}</strong></h5>
        </div>
    `}}window.customElements.define("custom-card-icon",Nt);class xt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("tipo"),e=this.getAttribute("titulo"),n=this.getAttribute("subtitulo"),r=this.getAttribute("texto-boton"),i=this.getAttribute("link-boton"),s=this.getAttribute("imagen"),o=this.getAttribute("imagen-webp"),h=this.getAttribute("imagen-tarjeta"),p=this.getAttribute("imagen-tarjeta-webp"),T=this.getAttribute("icon"),w=this.getAttribute("texto-badge");_=="primario"?this.innerHTML=`
                <div class="hero hero-${_}">
                    <div class="hero--info">
                        <h1 class="title-underline">${e}</h1>
                        <p>${n}</p>

                        ${r=="hide"?"":'<a href="'+i+'"><custom-boton tipo="primario" value="'+r+'"><custom-boton></a>'}
                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${o}" type="image/webp">
                            <img
                                class="w-100"
                                src="${s}"
                                alt="Imagen Hero"
                            />
                        </picture>
                        ${h=="hide"?"":'<picture class="hero--img--tdc"><source srcset="'+p+'" type="image/webp"><img class="w-100" src="'+h+'" alt="Imagen Tarjeta Credito Bancoppel" /></picture>'}
                        ${T=="hide"?"":'<div class="hero--badge"><custom-badge icon="'+T+'" texto-badge="'+w+'"></custom-badge></div>'}    
                    </figure>
                    
                </div>
            `:_=="secundario"&&(this.innerHTML=`
                <div class="hero hero-${_}">
                    <div class="hero--info">
                        <h1 class="title-underline">${e}</h1>
                        <p>${n}</p>

                        ${r=="hide"?"":'<a href="'+i+'"><custom-boton tipo="secundario" value="'+r+'"><custom-boton></a>'}
                    </div>
                    
                    <div class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${o}" type="image/webp">
                            <img
                                class="w-100"
                                src="${s}"
                                alt="Imagen Hero"
                            />
                        </picture>
                    </div>
                    
                </div>
            `)}}window.customElements.define("custom-hero",xt);class Mt extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("icono"),e=this.getAttribute("titulo-alert"),n=this.getAttribute("texto-alert");this.innerHTML=`
          <div class="col-12 col-lg-10 col-xl-8 alert--card">
                <picture class="badge--image">
                    <img src="${_}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido"><h4 class="strong-circular">${e}</h4>${n}</div>
            </div>
        `}}window.customElements.define("custom-alert",Mt);class Ot extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("title"),e=this.getAttribute("content");this.innerHTML=`
                <div class="accordion-item">
                    <h2 class="accordion-button collapsed" data-bs-toggle="collapse" aria-expanded="false">
                        ${_}
                    </h2>
                    <div id="" class="accordion-collapse collapse" data-bs-parent="#accordionExample"><p>
                        ${e}
                        </p>
                    </div>
                </div>
                `}attributeChangesCallback(_,e,n){}static get observedAttributes(){}}window.customElements.define("custom-accordion",Ot);let z=document.querySelectorAll("custom-accordion");for(let m=0;m<z.length;m++)z[m].querySelector(".accordion-button").setAttribute("data-bs-target","#accordion-"+m),z[m].querySelector(".accordion-button").id="heading-"+m,z[m].querySelector(".accordion-collapse").id="accordion-"+m;class $t extends HTMLElement{constructor(){super()}connectedCallback(){let _=this.getAttribute("id-modal"),e=this.getAttribute("id-btn-salida"),n=this.getAttribute("link-btn-salida");this.innerHTML=`
             <div
                class="modal fade"
                id="${_}"
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
                            href="${n}"
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

        `}}window.customElements.define("modal-salida",$t);
