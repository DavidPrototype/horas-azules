export default class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let active = this.getAttribute("nav-active");

        this.innerHTML = `
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
        `;

        this.getAttribute("nav-active")
            ? document
                  .getElementById(active)
                  .classList.add("menu__item--active")
            : "";
    }
}

// Define your custom element
window.customElements.define("custom-header", Header);
