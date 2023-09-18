(function(){const E=document.createElement("link").relList;if(E&&E.supports&&E.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))u(a);new MutationObserver(a=>{for(const t of a)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&u(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const t={};return a.integrity&&(t.integrity=a.integrity),a.referrerPolicy&&(t.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?t.credentials="include":a.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(a){if(a.ep)return;a.ep=!0;const t=r(a);fetch(a.href,t)}})();var $=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ie={exports:{}},q={exports:{}},B={exports:{}};/*!
  * Bootstrap data.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Q;function se(){return Q||(Q=1,function(_,E){(function(r,u){_.exports=u()})($,function(){const r=new Map;return{set(a,t,n){r.has(a)||r.set(a,new Map);const i=r.get(a);if(!i.has(t)&&i.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`);return}i.set(t,n)},get(a,t){return r.has(a)&&r.get(a).get(t)||null},remove(a,t){if(!r.has(a))return;const n=r.get(a);n.delete(t),n.size===0&&r.delete(a)}}})}(B)),B.exports}var j={exports:{}},F={exports:{}};/*!
  * Bootstrap index.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var W;function P(){return W||(W=1,function(_,E){(function(r,u){u(E)})($,function(r){const t="transitionend",n=e=>(e&&window.CSS&&window.CSS.escape&&(e=e.replace(/#([^\s"#']+)/g,(o,s)=>`#${CSS.escape(s)}`)),e),i=e=>e==null?`${e}`:Object.prototype.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),b=e=>{do e+=Math.floor(Math.random()*1e6);while(document.getElementById(e));return e},f=e=>{if(!e)return 0;let{transitionDuration:o,transitionDelay:s}=window.getComputedStyle(e);const l=Number.parseFloat(o),h=Number.parseFloat(s);return!l&&!h?0:(o=o.split(",")[0],s=s.split(",")[0],(Number.parseFloat(o)+Number.parseFloat(s))*1e3)},A=e=>{e.dispatchEvent(new Event(t))},y=e=>!e||typeof e!="object"?!1:(typeof e.jquery<"u"&&(e=e[0]),typeof e.nodeType<"u"),R=e=>y(e)?e.jquery?e[0]:e:typeof e=="string"&&e.length>0?document.querySelector(n(e)):null,k=e=>{if(!y(e)||e.getClientRects().length===0)return!1;const o=getComputedStyle(e).getPropertyValue("visibility")==="visible",s=e.closest("details:not([open])");if(!s)return o;if(s!==e){const l=e.closest("summary");if(l&&l.parentNode!==s||l===null)return!1}return o},O=e=>!e||e.nodeType!==Node.ELEMENT_NODE||e.classList.contains("disabled")?!0:typeof e.disabled<"u"?e.disabled:e.hasAttribute("disabled")&&e.getAttribute("disabled")!=="false",D=e=>{if(!document.documentElement.attachShadow)return null;if(typeof e.getRootNode=="function"){const o=e.getRootNode();return o instanceof ShadowRoot?o:null}return e instanceof ShadowRoot?e:e.parentNode?D(e.parentNode):null},L=()=>{},T=e=>{e.offsetHeight},I=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,M=[],N=e=>{document.readyState==="loading"?(M.length||document.addEventListener("DOMContentLoaded",()=>{for(const o of M)o()}),M.push(e)):e()},x=()=>document.documentElement.dir==="rtl",d=e=>{N(()=>{const o=I();if(o){const s=e.NAME,l=o.fn[s];o.fn[s]=e.jQueryInterface,o.fn[s].Constructor=e,o.fn[s].noConflict=()=>(o.fn[s]=l,e.jQueryInterface)}})},c=(e,o=[],s=e)=>typeof e=="function"?e(...o):s,g=(e,o,s=!0)=>{if(!s){c(e);return}const l=5,h=f(o)+l;let p=!1;const v=({target:C})=>{C===o&&(p=!0,o.removeEventListener(t,v),c(e))};o.addEventListener(t,v),setTimeout(()=>{p||A(o)},h)},m=(e,o,s,l)=>{const h=e.length;let p=e.indexOf(o);return p===-1?!s&&l?e[h-1]:e[0]:(p+=s?1:-1,l&&(p=(p+h)%h),e[Math.max(0,Math.min(p,h-1))])};r.defineJQueryPlugin=d,r.execute=c,r.executeAfterTransition=g,r.findShadowRoot=D,r.getElement=R,r.getNextActiveElement=m,r.getTransitionDurationFromElement=f,r.getUID=b,r.getjQuery=I,r.isDisabled=O,r.isElement=y,r.isRTL=x,r.isVisible=k,r.noop=L,r.onDOMContentLoaded=N,r.parseSelector=n,r.reflow=T,r.toType=i,r.triggerTransitionEnd=A,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})})}(F,F.exports)),F.exports}/*!
  * Bootstrap event-handler.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var G;function te(){return G||(G=1,function(_,E){(function(r,u){_.exports=u(P())})($,function(r){const u=/[^.]*(?=\..*)\.|.*/,a=/\..*/,t=/::\d+$/,n={};let i=1;const b={mouseenter:"mouseover",mouseleave:"mouseout"},f=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function A(d,c){return c&&`${c}::${i++}`||d.uidEvent||i++}function y(d){const c=A(d);return d.uidEvent=c,n[c]=n[c]||{},n[c]}function R(d,c){return function g(m){return x(m,{delegateTarget:d}),g.oneOff&&N.off(d,m.type,c),c.apply(d,[m])}}function k(d,c,g){return function m(e){const o=d.querySelectorAll(c);for(let{target:s}=e;s&&s!==this;s=s.parentNode)for(const l of o)if(l===s)return x(e,{delegateTarget:s}),m.oneOff&&N.off(d,e.type,c,g),g.apply(s,[e])}}function O(d,c,g=null){return Object.values(d).find(m=>m.callable===c&&m.delegationSelector===g)}function D(d,c,g){const m=typeof c=="string",e=m?g:c||g;let o=M(d);return f.has(o)||(o=d),[m,e,o]}function L(d,c,g,m,e){if(typeof c!="string"||!d)return;let[o,s,l]=D(c,g,m);c in b&&(s=(re=>function(H){if(!H.relatedTarget||H.relatedTarget!==H.delegateTarget&&!H.delegateTarget.contains(H.relatedTarget))return re.call(this,H)})(s));const h=y(d),p=h[l]||(h[l]={}),v=O(p,s,o?g:null);if(v){v.oneOff=v.oneOff&&e;return}const C=A(s,c.replace(u,"")),w=o?k(d,g,s):R(d,s);w.delegationSelector=o?g:null,w.callable=s,w.oneOff=e,w.uidEvent=C,p[C]=w,d.addEventListener(l,w,o)}function T(d,c,g,m,e){const o=O(c[g],m,e);o&&(d.removeEventListener(g,o,!!e),delete c[g][o.uidEvent])}function I(d,c,g,m){const e=c[g]||{};for(const[o,s]of Object.entries(e))o.includes(m)&&T(d,c,g,s.callable,s.delegationSelector)}function M(d){return d=d.replace(a,""),b[d]||d}const N={on(d,c,g,m){L(d,c,g,m,!1)},one(d,c,g,m){L(d,c,g,m,!0)},off(d,c,g,m){if(typeof c!="string"||!d)return;const[e,o,s]=D(c,g,m),l=s!==c,h=y(d),p=h[s]||{},v=c.startsWith(".");if(typeof o<"u"){if(!Object.keys(p).length)return;T(d,h,s,o,e?g:null);return}if(v)for(const C of Object.keys(h))I(d,h,C,c.slice(1));for(const[C,w]of Object.entries(p)){const S=C.replace(t,"");(!l||c.includes(S))&&T(d,h,s,w.callable,w.delegationSelector)}},trigger(d,c,g){if(typeof c!="string"||!d)return null;const m=r.getjQuery(),e=M(c),o=c!==e;let s=null,l=!0,h=!0,p=!1;o&&m&&(s=m.Event(c,g),m(d).trigger(s),l=!s.isPropagationStopped(),h=!s.isImmediatePropagationStopped(),p=s.isDefaultPrevented());const v=x(new Event(c,{bubbles:l,cancelable:!0}),g);return p&&v.preventDefault(),h&&d.dispatchEvent(v),v.defaultPrevented&&s&&s.preventDefault(),v}};function x(d,c={}){for(const[g,m]of Object.entries(c))try{d[g]=m}catch{Object.defineProperty(d,g,{configurable:!0,get(){return m}})}return d}return N})}(j)),j.exports}var K={exports:{}},V={exports:{}};/*!
  * Bootstrap manipulator.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var J;function oe(){return J||(J=1,function(_,E){(function(r,u){_.exports=u()})($,function(){function r(t){if(t==="true")return!0;if(t==="false")return!1;if(t===Number(t).toString())return Number(t);if(t===""||t==="null")return null;if(typeof t!="string")return t;try{return JSON.parse(decodeURIComponent(t))}catch{return t}}function u(t){return t.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}return{setDataAttribute(t,n,i){t.setAttribute(`data-bs-${u(n)}`,i)},removeDataAttribute(t,n){t.removeAttribute(`data-bs-${u(n)}`)},getDataAttributes(t){if(!t)return{};const n={},i=Object.keys(t.dataset).filter(b=>b.startsWith("bs")&&!b.startsWith("bsConfig"));for(const b of i){let f=b.replace(/^bs/,"");f=f.charAt(0).toLowerCase()+f.slice(1,f.length),n[f]=r(t.dataset[b])}return n},getDataAttribute(t,n){return r(t.getAttribute(`data-bs-${u(n)}`))}}})}(V)),V.exports}/*!
  * Bootstrap config.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var X;function ae(){return X||(X=1,function(_,E){(function(r,u){_.exports=u(oe(),P())})($,function(r,u){class a{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,i){const b=u.isElement(i)?r.getDataAttribute(i,"config"):{};return{...this.constructor.Default,...typeof b=="object"?b:{},...u.isElement(i)?r.getDataAttributes(i):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,i=this.constructor.DefaultType){for(const[b,f]of Object.entries(i)){const A=n[b],y=u.isElement(A)?"element":u.toType(A);if(!new RegExp(f).test(y))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${y}" but expected type "${f}".`)}}}return a})}(K)),K.exports}/*!
  * Bootstrap base-component.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var Z;function le(){return Z||(Z=1,function(_,E){(function(r,u){_.exports=u(se(),te(),ae(),P())})($,function(r,u,a,t){const n="5.3.1";class i extends a{constructor(f,A){super(),f=t.getElement(f),f&&(this._element=f,this._config=this._getConfig(A),r.set(this._element,this.constructor.DATA_KEY,this))}dispose(){r.remove(this._element,this.constructor.DATA_KEY),u.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,A,y=!0){t.executeAfterTransition(f,A,y)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return r.get(t.getElement(f),this.DATA_KEY)}static getOrCreateInstance(f,A={}){return this.getInstance(f)||new this(f,typeof A=="object"?A:null)}static get VERSION(){return n}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}return i})}(q)),q.exports}var z={exports:{}};/*!
  * Bootstrap selector-engine.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ee;function ce(){return ee||(ee=1,function(_,E){(function(r,u){_.exports=u(P())})($,function(r){const u=t=>{let n=t.getAttribute("data-bs-target");if(!n||n==="#"){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i=`#${i.split("#")[1]}`),n=i&&i!=="#"?i.trim():null}return r.parseSelector(n)},a={find(t,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,t))},findOne(t,n=document.documentElement){return Element.prototype.querySelector.call(n,t)},children(t,n){return[].concat(...t.children).filter(i=>i.matches(n))},parents(t,n){const i=[];let b=t.parentNode.closest(n);for(;b;)i.push(b),b=b.parentNode.closest(n);return i},prev(t,n){let i=t.previousElementSibling;for(;i;){if(i.matches(n))return[i];i=i.previousElementSibling}return[]},next(t,n){let i=t.nextElementSibling;for(;i;){if(i.matches(n))return[i];i=i.nextElementSibling}return[]},focusableChildren(t){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(i=>`${i}:not([tabindex^="-"])`).join(",");return this.find(n,t).filter(i=>!r.isDisabled(i)&&r.isVisible(i))},getSelectorFromElement(t){const n=u(t);return n&&a.findOne(n)?n:null},getElementFromSelector(t){const n=u(t);return n?a.findOne(n):null},getMultipleElementsFromSelector(t){const n=u(t);return n?a.find(n):[]}};return a})}(z)),z.exports}/*!
  * Bootstrap collapse.js v5.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(_,E){(function(r,u){_.exports=u(le(),te(),ce(),P())})($,function(r,u,a,t){const n="collapse",b=".bs.collapse",f=".data-api",A=`show${b}`,y=`shown${b}`,R=`hide${b}`,k=`hidden${b}`,O=`click${b}${f}`,D="show",L="collapse",T="collapsing",I="collapsed",M=`:scope .${L} .${L}`,N="collapse-horizontal",x="width",d="height",c=".collapse.show, .collapse.collapsing",g='[data-bs-toggle="collapse"]',m={parent:null,toggle:!0},e={parent:"(null|element)",toggle:"boolean"};class o extends r{constructor(l,h){super(l,h),this._isTransitioning=!1,this._triggerArray=[];const p=a.find(g);for(const v of p){const C=a.getSelectorFromElement(v),w=a.find(C).filter(S=>S===this._element);C!==null&&w.length&&this._triggerArray.push(v)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return m}static get DefaultType(){return e}static get NAME(){return n}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let l=[];if(this._config.parent&&(l=this._getFirstLevelChildren(c).filter(S=>S!==this._element).map(S=>o.getOrCreateInstance(S,{toggle:!1}))),l.length&&l[0]._isTransitioning||u.trigger(this._element,A).defaultPrevented)return;for(const S of l)S.hide();const p=this._getDimension();this._element.classList.remove(L),this._element.classList.add(T),this._element.style[p]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const v=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(L,D),this._element.style[p]="",u.trigger(this._element,y)},w=`scroll${p[0].toUpperCase()+p.slice(1)}`;this._queueCallback(v,this._element,!0),this._element.style[p]=`${this._element[w]}px`}hide(){if(this._isTransitioning||!this._isShown()||u.trigger(this._element,R).defaultPrevented)return;const h=this._getDimension();this._element.style[h]=`${this._element.getBoundingClientRect()[h]}px`,t.reflow(this._element),this._element.classList.add(T),this._element.classList.remove(L,D);for(const v of this._triggerArray){const C=a.getElementFromSelector(v);C&&!this._isShown(C)&&this._addAriaAndCollapsedClass([v],!1)}this._isTransitioning=!0;const p=()=>{this._isTransitioning=!1,this._element.classList.remove(T),this._element.classList.add(L),u.trigger(this._element,k)};this._element.style[h]="",this._queueCallback(p,this._element,!0)}_isShown(l=this._element){return l.classList.contains(D)}_configAfterMerge(l){return l.toggle=!!l.toggle,l.parent=t.getElement(l.parent),l}_getDimension(){return this._element.classList.contains(N)?x:d}_initializeChildren(){if(!this._config.parent)return;const l=this._getFirstLevelChildren(g);for(const h of l){const p=a.getElementFromSelector(h);p&&this._addAriaAndCollapsedClass([h],this._isShown(p))}}_getFirstLevelChildren(l){const h=a.find(M,this._config.parent);return a.find(l,this._config.parent).filter(p=>!h.includes(p))}_addAriaAndCollapsedClass(l,h){if(l.length)for(const p of l)p.classList.toggle(I,!h),p.setAttribute("aria-expanded",h)}static jQueryInterface(l){const h={};return typeof l=="string"&&/show|hide/.test(l)&&(h.toggle=!1),this.each(function(){const p=o.getOrCreateInstance(this,h);if(typeof l=="string"){if(typeof p[l]>"u")throw new TypeError(`No method named "${l}"`);p[l]()}})}}return u.on(document,O,g,function(s){(s.target.tagName==="A"||s.delegateTarget&&s.delegateTarget.tagName==="A")&&s.preventDefault();for(const l of a.getMultipleElementsFromSelector(this))o.getOrCreateInstance(l,{toggle:!1}).toggle()}),t.defineJQueryPlugin(o),o})})(ie);class ue extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("nav-active");this.innerHTML=`
        <header class="header">
            <nav class="nav">
                <div class="nav__logo">
                    <a
                        href="https://www.bancoppel.com/main/index.html"
                        target="_blank"
                    >
                        <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                    </a>
                </div>

                <ul class="menu font-secondary">
                    <li class="menu__item" id="nav-inicio"><a href="index.html">Inicio</a></li>
                    <li class="menu__item" id="nav-tarjeta"><a href="mi-tarjeta.html">Mi tarjeta</a></li>
                    <li class="menu__item" id="nav-app"><a href="mi-app.html">Mi App</a></li>
                    <li class="menu__item" id="nav-ayuda"><a href="">Ayuda</a></li>
                </ul>
            </nav>
        </header>
        `,document.getElementById(E).classList.add("menu__item--active")}}window.customElements.define("custom-header",ue);class de extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=`
             <footer class="footer">
            <div class="custom-container">
                <a
                    href="https://www.bancoppel.com/main/index.html"
                    target="_blank"
                >
                    <img src="img/Logotipo.svg" alt="Logo BanCoppel" />
                </a>
                <h3>Acerca de BanCoppel</h3>
                <div class="row">
                    <div class="col-12 col-lg-4">
                        <ul>
                            <li><a href="">¿Quiénes somos?</a></li>
                            <li><a href="">Preguntas Frecuentes</a></li>
                            <li><a href="">Centro de Ayupda</a></li>
                            <li><a href="">Informacion Corporativa</a></li>
                            <li><a href="">Repositorio Histórico</a></li>
                            <li><a href="">Corresponsales</a></li>
                            <li><a href="">Productos protegidos por el IPAB</a></li>
                            <li><a href="">Aviso de Privacidad</a></li>
                            <li><a href="">Robo de Identidad</a></li>
                            <li><a href="">Tarifas y Comisiones</a></li>
                            <li>
                                Unidad Especializada Bancoppel Condusef<br /><br /><a href="tel:(55)
                                5278 0000">(55)
                                5278 0000 ext. 510196</a><br /><a href="mailto:une@bancoppel.com">une@bancoppel.com</a>
                            </li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-4">
                        <ul>
                            <li><a href="">Despachos de Cobranza Internos</a></li>
                            <li><a href="">Despachos de Cobranza Externos</a></li>
                            <li><a href="">Tips de Seguridad</a></li>
                            <li><a href="">Localiza tu Sucursal</a></li>
                            <li><a href="">Educación Financiera</a></li>
                            <li><a href="">API Market</a></li>
                        </ul>
                    </div>
                    <div class="col-12 col-lg-4">
                        <ul class="footer--desplegables">
                            <li class="desplegable"><a href="">
                                Sucursales y cajeros
                                <span
                                    ><img
                                        src="/img/arrow-right.svg"
                                        alt="Icono Flecha Derecha"
                                /></span>
                            </a></li>
                            <li class="desplegable"><a href="">
                                Bolsa de trabajo
                                <span
                                    ><img
                                        src="/img/arrow-right.svg"
                                        alt="Icono Flecha Derecha"
                                /></span>
                            </a></li>
                            <li class="desplegable"><a href="">
                                Centro de ayuda
                                <span
                                    ><img
                                        src="/img/arrow-right.svg"
                                        alt="Icono Flecha Derecha"
                                /></span>
                            </a></li>
                            <li class="desplegable"><a href="">Contacto</a></li>
                        </ul>
                        <ul>
                            <li>
                                Lada sin costo en México<br />
                                800-1-226-773
                            </li>
                            <li>
                                Desde Estados Unidos y Canadá<br />
                                866-254-3790
                            </li>
                        </ul>
                        <div class="footer--socials">
                            <a href="" target="_blank"><img
                                src="/img/icon-facebook.svg"
                                alt="Logo Facebook"
                            /></a>
                            <a href="" target="_blank"><img
                                src="/img/icon-linkedin.svg"
                                alt="Logo Linkedin"
                            /></a>
                            <a href="" target="_blank"><img
                                src="/img/icon-youtube.svg"
                                alt="Logo Youtube"
                            /></a>
                        </div>
                    </div>
                </div>

                <div class="footer--sponsors">
                    <img src="/img/icon-fintech.svg" alt="Logo Fintech" />
                    <img src="/img/fundacion.png" alt="Logo Fundacion" />
                    <img src="/img/buro.svg" alt="Logo Fintech" />
                </div>
                <div class="footer--legales">
                    <p>
                        Copyrigth 2022
                        <span class="asociacion"
                            >Bancoppel S.A Institución de Banca Múltiple</span
                        >
                        - Todos los derechos reservados
                        <a href="">Tarifas y comisiones de crédito</a>
                        <a href="">Tarifas y comisiones de captación</a>
                    </p>
                    <p>
                        Consulta nuestros productos más destacados:
                        <a href=""> TDC Gratis</a>
                        <a href=""> TDC en línea</a>
                        <a href=""> Crédito BanCoppel</a>
                        <a href=""> Crédito Bancario</a>
                    </p>
                    <p>
                        <a href="">Términos y Condiciones de Uso </a>
                        <a href=""> Aviso de Privacidad </a>
                        <a href="">Mapa de Sitio </a>
                        <a href="">Repositorio Histórico</a>
                    </p>
                </div>
            </div>
        </footer>
        `}}window.customElements.define("custom-footer",de);class fe extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("data-id"),r=this.getAttribute("value"),u=this.getAttribute("tipo");this.innerHTML=`
              <button class="${u}" id='${E}'>${r}</buton>`}attributeChangesCallback(E,r,u){}}window.customElements.define("custom-boton",fe);class ge extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("icon"),r=this.getAttribute("texto-badge");this.innerHTML=`
          <div class="badge">
            <img src="${E}">
            <h6>${r}</h6>
          </div>
        `}}window.customElements.define("custom-badge",ge);class he extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("icon"),r=this.getAttribute("texto-badge"),u=this.getAttribute("titulo"),a=this.getAttribute("descripcion"),t=this.getAttribute("imagen"),n=this.getAttribute("imagenWebp"),i=this.getAttribute("link");this.innerHTML=`
        
         <div class="card card-promo">
            <custom-badge icon="${E}" texto-badge="${r}"></custom-badge>
            <div class="card-promo__info">
                <h5><strong>${u}</strong></h5>
                <p>${a}
                </p>
                <a href="${i}" target="_blank">
                    <strong>Ver más</strong>
                </a>
            </div>
            <div class="card-promo__image">
                <picture>
                    <source srcset="${n}" type="image/webp">
                    <img src="${t}" alt="" />
                </picture>
            </div>
        </div>
    `}}window.customElements.define("custom-card",he);class pe extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("icon"),r=this.getAttribute("titulo");this.innerHTML=`
        
        <div
            class="card card-icon"
        >
            <picture>
                <img
                    src="${E}"
                    alt=""
                />
            </picture>
            <h5><strong>${r}</strong></h5>
        </div>
    `}}window.customElements.define("custom-card-icon",pe);class me extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("tipo"),r=this.getAttribute("titulo"),u=this.getAttribute("subtitulo"),a=this.getAttribute("texto-boton"),t=this.getAttribute("link-boton"),n=this.getAttribute("imagen"),i=this.getAttribute("imagen-webp"),b=this.getAttribute("imagen-tarjeta"),f=this.getAttribute("imagen-tarjeta-webp"),A=this.getAttribute("icon"),y=this.getAttribute("texto-badge");E=="primario"?this.innerHTML=`
                <div class="hero hero-${E}">
                    <div class="hero--info">
                        <h1 class="title-underline">${r}</h1>
                        <p>${u}</p>

                        ${a=="hide"?"":'<a href="'+t+'"><custom-boton tipo="primario" value="'+a+'"><custom-boton></a>'}
                    </div>
                    
                    <figure class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${i}" type="image/webp">
                            <img
                                class="w-100"
                                src="${n}"
                                alt="Imagen Hero"
                            />
                        </picture>
                        ${b=="hide"?"":'<picture class="hero--img--tdc"><source srcset="'+b+'" type="image/webp"><img class="w-100" src="'+f+'" alt="Imagen Tarjeta Credito Bancoppel" /></picture>'}
                        ${A=="hide"?"":'<div class="hero--badge"><custom-badge icon="'+A+'" texto-badge="'+y+'"></custom-badge></div>'}    
                    </figure>
                    
                </div>
            `:E=="secundario"&&(this.innerHTML=`
                <div class="hero hero-${E}">
                    <div class="hero--info">
                        <h1 class="title-underline">${r}</h1>
                        <p><strong>${u}</strong></p>

                        ${a=="hide"?"":'<a href="'+t+'"><custom-boton tipo="secundario" value="'+a+'"><custom-boton></a>'}
                    </div>
                    
                    <div class="hero--img">
                        <picture class="hero--fondo">
                            <source srcset="${i}" type="image/webp">
                            <img
                                class="w-100"
                                src="${n}"
                                alt="Imagen Hero"
                            />
                        </picture>
                    </div>
                    
                </div>
            `)}}window.customElements.define("custom-hero",me);class be extends HTMLElement{constructor(){super()}connectedCallback(){let E=this.getAttribute("icono"),r=this.getAttribute("titulo-alert"),u=this.getAttribute("texto-alert");this.innerHTML=`
          <div class="col-12 col-lg-10 col-xl-8 alert--card">
                <picture class="badge--image">
                    <img src="${E}" alt="Icono Idea" />
                </picture>
                
                <div class="contenido"><h4 class="strong-circular">${r}</h4>${u}</div>
            </div>
        `}}window.customElements.define("custom-alert",be);const U=window.matchMedia("(max-width:1279px)");let Y;const ne=()=>{if(U.matches===!0)return Ee();if(U.matches===!1){Y!==void 0&&Y.destroy(!0,!0);return}},Ee=()=>{Y=new Swiper(".swiper",{spaceBetween:24,slidesPerView:"auto",direction:"horizontal",pagination:{el:".swiper-pagination"}})};U.addListener(ne);ne();
