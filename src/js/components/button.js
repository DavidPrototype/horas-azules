import "../../scss/components/button.scss";

export default class Button extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let id = this.getAttribute("data-id");
        let valor = this.getAttribute("value");
        let tipo = this.getAttribute("tipo");

        this.innerHTML = `
              <button class="${tipo}" id='${id}'>${valor}</buton>`;
    }

    attributeChangesCallback(nombreAtr, viejoAtr, nuevoAtr) {}
}

window.customElements.define("custom-boton", Button);
