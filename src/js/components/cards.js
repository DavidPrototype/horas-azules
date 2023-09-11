export default class Card extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        let icono = this.getAttribute("icon");
        let texto = this.getAttribute("texto-tag");
        let titulo = this.getAttribute("titulo");
        let descripcion = this.getAttribute("descripcion");
        let imagen = this.getAttribute("imagen");
        let imagenWebp = this.getAttribute("imagenWebp");
        let link = this.getAttribute("link");

        this.shadowRoot.innerHTML = `
        <style>
          @import "../../scss/components/cards.scss";
        </style>
        
         <div class="card card-promo">
            <custom-tag icon="${icono}" texto-tag=${texto}></custom-tag>
            <div class="card-promo__info">
                <h5><strong>${titulo}</strong></h5>
                <p>${descripcion}
                </p>
                <a href="${link}" target="_blank">
                    <strong>Ver más</strong>
                </a>
            </div>
            <div class="card-promo__image">
                <picture>
                    <source srcset="${imagenWebp}" type="image/webp">
                    <img src="${imagen}" alt="" />
                </picture>
            </div>
        </div>
    `;
    }
}

// Define your custom element
window.customElements.define("custom-card", Card);
