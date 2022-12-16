class headerComponent extends HTMLElement{
    constructor(){
        super();
        this.icon = "person";
        this.text = "Login";
        this.href = "./login.html";
        this.id = JSON.parse(sessionStorage.getItem('tiendeoLogin'));
    }
    // lista de los atributos que queremos que se oueda cambiar
    static get observedAttributes(){
        return ['icon','text','href'];
    }
    attributeChangedCallback(nameAtr,oldValue,newValue){
        switch(nameAtr){
            case 'icon':
                this.icon = newValue;
            break;
            case 'text':
                this.text = newValue;
            break;
            case 'href':
                this.href = newValue;
            break;
        }
    }
    // Esto es lo que se va a ver dentro del componente
    connectedCallback(){
        const header = document.createElement('header');
        header.className = 'header';
        header.innerHTML= `
            <nav class="header__nav">
                <ul class="header__nav-container">
                    <li class="header__nav__item">
                    <a href="./index.html"><h1 class="header__nav__item-logo logo">TIENDEO</h1></a>
                    </li>
                    <li class="header__nav__item">
                        <form action="" class="header__nav__item__form">
                            <input type="text" class="header__nav__item__form-input" placeholder="¿Qué deseas buscar?">
                            <button type="submit" class="header__nav__item__form-submit icon__btn">
                                <span class="material-icons-round textAnimation">
                                    search
                                </span>
                            </button>
                        </form>
                    </li>
                    <li class="header__nav__item last">
                       
                    </li>
                </ul>
            </nav>
        `;
        // console.log(this.id == "true");
        console.log(this.id);
        const btnCon = header.querySelector('.header__nav__item.last');
        if(this.id == "null"){
            btnCon.innerHTML= `
            <button class="header__nav__item-login icon__btn">
                <a href="./login.html">
                    <span class="material-icons-round textAnimation">
                        person
                    </span>
                    <span>
                        Login
                    </span>
                </a>
                </button>
            `
        }else if(this.id == "true"){
            btnCon.innerHTML= `
                <button class="add-product__btn btn">
                    <a href="${this.href}">Administrar</a>
                    <span class="material-icons-round textAnimation">
                        ${this.icon}
                    </span>
                </button>
            `
        }
        this.appendChild(header)
    }

}

// Con este codig la definimos como webComponent
window.customElements.define("header-component", headerComponent);