(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function o(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();class u extends HTMLElement{constructor(){super()}connectedCallback(){let s=this.getAttribute("data-id"),i=this.getAttribute("value");this.innerHTML=`
              <button id='${s}'>${i}</buton>`}attributeChangesCallback(s,i,o){}}window.customElements.define("custom-boton",u);class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let s=this.getAttribute("icon"),i=this.getAttribute("texto-tag");this.shadowRoot.innerHTML=`
        <style>
          @import "../../scss/components/tag.scss";
        </style>
      
        <div class="tag">
          <img src="${s}">
          <h6>${i}</h6>
        </div>
    `}}window.customElements.define("custom-tag",m);class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let s=this.getAttribute("icon"),i=this.getAttribute("texto-tag"),o=this.getAttribute("titulo"),t=this.getAttribute("descripcion"),e=this.getAttribute("imagen"),r=this.getAttribute("imagenWebp"),d=this.getAttribute("link");this.shadowRoot.innerHTML=`
        <style>
          @import "../../scss/components/cards.scss";
        </style>
        
         <div class="card card-promo">
            <custom-tag icon="${s}" texto-tag=${i}></custom-tag>
            <div class="card-promo__info">
                <h5><strong>${o}</strong></h5>
                <p>${t}
                </p>
                <a href="${d}" target="_blank">
                    <strong>Ver más</strong>
                </a>
            </div>
            <div class="card-promo__image">
                <picture>
                    <source srcset="${r}" type="image/webp">
                    <img src="${e}" alt="" />
                </picture>
            </div>
        </div>
    `}}window.customElements.define("custom-card",p);const c=window.matchMedia("(max-width:1279px)");let a;const l=()=>{if(c.matches===!0)return g();if(c.matches===!1){a!==void 0&&a.destroy(!0,!0);return}},g=()=>{a=new Swiper(".swiper",{spaceBetween:24,slidesPerView:"auto",direction:"horizontal",mousewheel:!0,pagination:{el:".swiper-pagination"}})};c.addListener(l);l();
