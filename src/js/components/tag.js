import "../../scss/components/tag.scss";

export default class Tag extends HTMLElement {
    constructor() {
        super();
        /* this.attachShadow({ mode: "open" }); */
    }

    connectedCallback() {
        let icono = this.getAttribute("icon");
        let texto = this.getAttribute("texto-tag");

        this.innerHTML = `
          <div class="tag">
            <img src="${icono}">
            <h6>${texto}</h6>
          </div>
        `;
        /* this.shadowRoot.innerHTML = `
          <div class="tag">
            <img src="${icono}">
            <h6>${texto}</h6>
          </div>
        `; */
    }
}

// Define your custom element
window.customElements.define("custom-tag", Tag);
