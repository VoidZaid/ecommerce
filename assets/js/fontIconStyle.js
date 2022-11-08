class fontIconStyle extends HTMLElement{
    constructor(){
        super();
    }

    // Esto es lo que se va a ver dentro del componente
    connectedCallback(){
        this.innerHTML= `       
            
            <!-- fonts & icons -->
            <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,500;0,700;1,300&family=Splash&display=swap" rel="stylesheet">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
        
            <!-- HOJAS DE ESTILOS -->
            <link rel="stylesheet" href="./assets/css/normalize.css">
            <link rel="stylesheet" href="./assets/css/base.css">
            <link rel="stylesheet" href="./assets/css/root.css">
            <!-- header -->
            <link rel="stylesheet" href="./assets/css/aheader/header-container.css">
            <link rel="stylesheet" href="./assets/css/aheader/header-nav.css">
            <!-- banner -->
            <link rel="stylesheet" href="./assets/css/banner/banner.css">
            <link rel="stylesheet" href="./assets/css/banner/banner-announce.css">
            <!-- products -->
            <link rel="stylesheet" href="./assets/css/cproducts/product.css">
            <link rel="stylesheet" href="./assets/css/cproducts/products-group-head.css">
            <link rel="stylesheet" href="./assets/css/cproducts/products-item.css">
            <link rel="stylesheet" href="./assets/css/cproducts/products-group-items.css">
            <!-- FOOTER -->
            <link rel="stylesheet" href="./assets/css/footer/footer-container.css">
            <link rel="stylesheet" href="./assets/css/footer/footer-nav.css">
            <link rel="stylesheet" href="./assets/css/footer/footer-contact.css">
            <link rel="stylesheet" href="./assets/css/footer/footer-rodapie.css">
        `;
    }

}

// Con este codig la definimos como webComponent
window.customElements.define("font-icon-style", fontIconStyle);