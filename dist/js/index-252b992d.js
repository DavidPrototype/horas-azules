(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();class d extends HTMLElement{constructor(){super()}connectedCallback(){let i=this.getAttribute("data-id"),r=this.getAttribute("value");this.innerHTML=`
              <button id='${i}'>${r}</buton>`}attributeChangesCallback(i,r,s){}}window.customElements.define("custom-boton",d);class m extends HTMLElement{constructor(){super()}connectedCallback(){let i=this.getAttribute("icon"),r=this.getAttribute("texto-tag");this.innerHTML=`
          <div class="tag">
            <img src="${i}">
            <h6>${r}</h6>
          </div>
        `}}window.customElements.define("custom-tag",m);class g extends HTMLElement{constructor(){super()}connectedCallback(){let i=this.getAttribute("icon"),r=this.getAttribute("texto-tag"),s=this.getAttribute("titulo"),t=this.getAttribute("descripcion"),e=this.getAttribute("imagen"),o=this.getAttribute("imagenWebp"),u=this.getAttribute("link");this.innerHTML=`
        
         <div class="card card-promo">
            <custom-tag icon="${i}" texto-tag=${r}></custom-tag>
            <div class="card-promo__info">
                <h5><strong>${s}</strong></h5>
                <p>${t}
                </p>
                <a href="${u}" target="_blank">
                    <strong>Ver más</strong>
                </a>
            </div>
            <div class="card-promo__image">
                <picture>
                    <source srcset="${o}" type="image/webp">
                    <img src="${e}" alt="" />
                </picture>
            </div>
        </div>
    `}}window.customElements.define("custom-card",g);const c=window.matchMedia("(max-width:1279px)");let a;const l=()=>{if(c.matches===!0)return p();if(c.matches===!1){a!==void 0&&a.destroy(!0,!0);return}},p=()=>{a=new Swiper(".swiper",{spaceBetween:24,slidesPerView:"auto",direction:"horizontal",mousewheel:!0,pagination:{el:".swiper-pagination"}})};c.addListener(l);l();
