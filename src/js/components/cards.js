import "../../scss/components/cards.scss";

export default class Card extends HTMLElement {
    constructor() {
        super();
        /* this.attachShadow({ mode: "open" }); */
    }

    connectedCallback() {
        let icono = this.getAttribute("icon");
        let texto = this.getAttribute("texto-badge");
        let titulo = this.getAttribute("titulo");
        let descripcion = this.getAttribute("descripcion");
        let imagen = this.getAttribute("imagen");
        let imagenWebp = this.getAttribute("imagenWebp");
        let link = this.getAttribute("link");

        this.innerHTML = `
        
         <div class="card card-promo">
            <custom-badge icon="${icono}" texto-badge="${texto}"></custom-badge>
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