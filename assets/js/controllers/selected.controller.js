import { productServices } from "../../../service/services-products.js";
import { renderProducts } from "../components/products/render-products.js";
const url = new URL(window.location).searchParams.get('id');
const container = document.querySelector('.product__selected');
const related = document.querySelectorAll('[data-products]');

putProduct(url,container,related)

async function putProduct(url,containier,related){
    if(url){
        try{
            const product = await productServices.getProduct(url);
            // console.log(product);
            const element = createProductElement(product.imgUrl,product.name,product.price,product.description);
            containier.innerHTML = element;
            related[0].dataset.products = product.section;
            renderProducts.putElements(related);
        }catch(err){
            console.log(err);
        }
    }else{
        Swal.fire({
            title: 'Ocurrio un error',
            icon: 'error',
            confirmButtonText: 'Volver al catalogo'
        })
        .then(()=>{
            window.location.href = "/index.html";
        })
    }
}

const createProductElement = (src,name,price,description)=>{
    const template = `
        <figure class="product__selected__img-con">
            <img src="${src}" alt="${name}" class="product__selected__img">
        </figure>
        <div class="product__selected__info">
            <h1 class="product__selected__name">${name}</h1>
            <div class="product__selected__price">S/. ${price}</div>
            <p class="product__selected__description">${description}</p>
        </div>
    `;
    return template;
}