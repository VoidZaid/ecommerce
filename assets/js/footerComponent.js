class footerComponent extends HTMLElement{
    constructor(){
        super();
    }

    // Esto es lo que se va a ver dentro del componente
    connectedCallback(){
        this.innerHTML= `
        <footer class="footer">
            <div class="footer__container">
                <nav class="footer__nav">
                    <ul class="footer__nav__list">
                        <li class="footer__nav__list-item logo">TIENDEO</li>
                        <li class="footer__nav__list-item"><a href="">Quienes somos</a></li>
                        <li class="footer__nav__list-item"><a href="">Política de privacidad</a></li>
                        <li class="footer__nav__list-item"><a href="">Programa de fidelidad</a></li>
                        <li class="footer__nav__list-item"><a href="">Nuestras tiendas</a></li>
                        <li class="footer__nav__list-item"><a href="">Quiero ser franquiciado</a></li>
                        <li class="footer__nav__list-item"><a href="">Anúncia aquí</a></li>
                    </ul>
                </nav>
                <section class="footer__contact">
                    <h3 class="footer__contact-title">Hable con nosotros</h3>
                    <form action="" class="footer__contact__form" id="contact__form">
                        <div class="footer__contact__form__container inputCon">
                            <input class="footer__contact__form__input input" type="text" placeholder=" " id="nombre" minlength="5" maxlength="40" required data-input="name">
                            <label class="inputLabel" for="nombre">Nombre</label>
                            <span class="input__err-mess">* hola mundo</span>
                        </div>
                        <div class="footer__contact__form__container inputCon">
                            <textarea class="footer__contact__form__textarea input" name="" id="mensaje" cols="30" rows="10" placeholder=" " minlength="10" maxlength="120" required data-input="message"></textarea>
                            <label class="inputLabel" for="mensaje">Escribe tu mensaje</label>
                            <span class="input__err-mess">* hola mundo</span>
                        </div>
                        <div class="footer__contact__form__container inputCon">
                            <button class="footer__contact__form__submit btn" type="submit" id="send">Enviar mensaje</button>
                        </div>
                    </form>
                </section>
            </div>

            <section class="footer__rodapie">
                <p class="footer__roapie-text">Desarrollado por Rene Diaz <br> <span>2022</span></p>
            </section>

        </footer>

        `;
    }

}

// Con este codig la definimos como webComponent
window.customElements.define("footer-component", footerComponent);