export default class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
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
        `;
    }
}

// Define your custom element
window.customElements.define("custom-footer", Footer);
