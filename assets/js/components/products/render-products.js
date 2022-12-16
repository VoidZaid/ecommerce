import { productServices } from "../../../../service/services-products.js";

const newProduct = (name, price, imgUrl,alt,id)=>{
    const card = `
    <div class="products__group__product">
    <div class="products__group__product-container">
        <img class="products__group__product-img" src="${imgUrl}" alt="${alt}">
    </div>
        <div class="products__group__product__info-container">
            <h3 class="products__group__product__info-title">${name}</h3>
            <div class="products__group__product__info-price">S/ ${price}</div>
            <button class="products__group__product__info-watch">
                <a href="./producto.html?id=${id}">Ver producto</a>
            </button>
        </div>
    </div>
    `;
    return card;
}


// renderizamos los elementos donde corresponden, DECLARAR ANTES DE USAR
const renderElements = async(element)=>{
    const dataVal = element.dataset.products;
    try{
        const productsList = await productServices.productsList();
        productsList.forEach((obj)=>{
            if(obj.section == dataVal){
                element.innerHTML+=newProduct(obj.name,obj.price,obj.imgUrl,obj.alt,obj.id)
            }
        })
    }
    catch(err){
        console.log("Ocurrio un error: ",err);
    }
}

export const putElements = (containerElement)=>{
    containerElement.forEach(container=>{
        renderElements(container);
    })
}

export const renderProducts = {
    renderElements,
    putElements
}