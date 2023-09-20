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
                    <li class="menu__item" id="nav-ayuda"><a href="ayuda.html">Ayuda</a></li>
                </ul>
            </nav>
        </header>
        `;

        document.getElementById(active).classList.add("menu__item--active");
    }
}

// Define your custom element
window.customElements.define("custom-header", Header);
