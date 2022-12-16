import { toValInput } from "../components/login/login-input-messsage.js";
import { productsMethods } from "../components/products/val-form.js";
import { methodsDragDrop } from "../components/products/input-img.js";
import { productServices } from "../../../service/services-products.js";
// evento para validar formulario de producto
const inproduct = document.querySelectorAll('[data-inproduct]');
const dropArea = document.querySelector('.add__input__file-drop');
const inputFile = document.querySelector('#product__img');
// const inputFileLabel = document.querySelector('.add__input__file-label');
const btn = document.querySelector('#product__btn');

// **************************************************
// **************************************************
const getProduct = async()=>{
    const url = new URL(window.location).searchParams.get('id');
    try{
        const thisProduct = await productServices.getProduct(url);
        console.log(thisProduct);
        inproduct[1].value = thisProduct.name;
        inproduct[2].value = thisProduct.price;
        inproduct[0].value = thisProduct.section;
        inproduct[3].value = thisProduct.description;

        const cardContainer = document.querySelector('.uploaded__card.btn');
        methodsDragDrop.putImg(thisProduct.imgUrl,thisProduct.name,cardContainer)
    }catch(err){
        console.log(err);
    }
}

function editOrCreate(){
    const url = new URL(window.location).searchParams.get('id');
    // console.log(url);
    if(url == null){
        btn.addEventListener('click',addNewProduct);
    }else{
        // inputFile.click();
        btn.addEventListener('click',updateSelectedProduct);
        getProduct();
        console.log("no se va a agregar nuevo elemento");
    }
}
// **************************************************
// **************************************************
function addNewProduct(e){
    e.preventDefault();
    console.log("CLICK EN AGREGAR NUEVO");
    const resultValForm=productsMethods.valForm(inproduct,"inproduct");
    if(resultValForm){
        const imgUrl = methodsDragDrop.imgSrc();
        const id = `${Math.random().toString(32).substring(7)}`;
        // validamos que el campo de imagen no este vacio
        if(imgUrl==null){
            Swal.fire({
                title: 'El campo de imagen esta vacío',
                icon: 'warning',
                confirmButtonText: 'Llenar formulario'
            })
        // imgen ha sido cargada, eviamos datos
        }else{
            Swal.fire({
                title: 'Se han enviado los datos',
                icon: 'success',
                confirmButtonText: 'Continuar'
            })
            .then(()=> {
                productServices.createProduct(inproduct[1].value,imgUrl,inproduct[2].value,id,inproduct[1].value,inproduct[0].value,inproduct[3].value)
                .then(()=>{
                    console.log("HECHO");
                    window.location.href = "./add-product.html";
                })
                .catch(err=>console.log(err));
            })
            .catch((err) => console.log(err));
        }
    }
}
function updateSelectedProduct(e){
    e.preventDefault();
    const resultValForm=productsMethods.valForm(inproduct,"inproduct");
    const url = new URL(window.location).searchParams.get('id');
    if(resultValForm){
        console.log("hola mundo");
        const imgUrl = methodsDragDrop.imgSrc();
        if(imgUrl==null){
            Swal.fire({
                title: 'El campo de imagen esta vacío',
                icon: 'warning',
                confirmButtonText: 'Llenar formulario'
            })
        // imgen ha sido cargada, eviamos datos
        }else{
            Swal.fire({
                title: 'Se han enviado los datos!',
                icon: 'success',
                confirmButtonText: 'Ir a administrar productos'
            })
            .then(async()=> {
                try{
                    await productServices.updateProduct(inproduct[1].value,imgUrl,inproduct[2].value,url,inproduct[1].value,inproduct[0].value,inproduct[3].value)
                    window.location.href = "./adm-product.html";
                }catch(err){
                    console.log(err);
                }
            })
            .catch((err) => console.log(err));
        }
    }
}

// *******************************************
// *******************************************
// *******************************************
inproduct.forEach((input)=>{
    input.addEventListener('keyup',()=>{
        toValInput.setMessage(input,"inproduct");
    })
})



methodsDragDrop.addEventDragDrop(dropArea,inputFile);
editOrCreate();
