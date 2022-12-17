import { productServices } from "../../../../service/services-products.js";
const createAdmElement = (src,id,nam,price)=>{
    const div = document.createElement('div');
    div.className ='products__group__product';
    const template = `
    <div class="products__group__product-container">
        <img class="products__group__product-img" src="${src}" alt="${nam}">
    </div>
    <div class="products__group__product__info-container">
        <h3 class="products__group__product__info-title">${nam}</h3>
        <div class="products__group__product__info-price">S/ ${price}</div>
        <button class="products__group__product__info-watch">
            <a href="./producto.html?id=${id}">Ver producto</a>
        </button>
    </div>
    <div class="icons__edit__delete">
        <span class="material-icons-round" id="${id}">
            delete
        </span>
        <span class="material-icons-round edit">
            edit
        </span>
    </div>
    `;
    div.innerHTML=template;
    const deleteIcon = div.querySelector('.material-icons-round');
    const editIcon = div.querySelector('.material-icons-round.edit');
    deleteIcon.addEventListener('click',async()=>{
        const id = deleteIcon.id;
        try{
            const response = await productServices.deleteProduct(id);
            console.log(response);//resporna respuesta
            console.log(response.json());//retorna promesa
        }catch(err){
            console.log(err);
        }
    })
    editIcon.addEventListener('click',()=>{
        window.location.href=`/ecommerce/add-product.html?id=${id}`;
    })
    return div;
}
export const renderAdmElements = async(containerElement)=>{
    try{
        const productsList = await productServices.productsList();
        productsList.forEach(obj => {
            let newElement =  createAdmElement(obj.imgUrl,obj.id,obj.name,obj.price);
            containerElement.appendChild(newElement);
        });
    }catch(err){
        console.log(err);
    }
}

const deleteProduct=(element)=>{
    element.addEventListener('click',(e)=>{

    })
}