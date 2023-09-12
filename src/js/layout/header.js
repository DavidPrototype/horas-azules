export default class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
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
                    <li class="menu__item menu__item--active"><a href="">Inicio</a></li>
                    <li class="menu__item"><a href="">Mi tarjeta</a></li>
                    <li class="menu__item"><a href="">Mi App</a></li>
                    <li class="menu__item"><a href="">Ayuda</a></li>
                </ul>
            </nav>
        </header>
        `;
    }
}

// Define your custom element
window.customElements.define("custom-header", Header);
