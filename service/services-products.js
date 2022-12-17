// const url = "http://localhost:3000/products";
const url = "https://alurageek-voidzaid.onrender.com/products";
const productsList = () =>fetch(`${url}`).then((response)=>response.json());

const createProduct = (name,imgUrl,price,id,alt,section,description)=>{
    return fetch(`${url}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name,
            imgUrl,
            price,
            id,
            alt,
            section,
            description
        })
    })
}

const deleteProduct = (id)=>{
    return fetch(`${url}/${id}`,{
        method: "DELETE",
    })
}

const getProduct = (id)=>{
    return fetch(`${url}/${id}`).then((respuesta)=>respuesta.json())
    .catch((err)=> console.log(err));
        
}

const updateProduct= (name,imgUrl,price,id,alt,section,description)=>{
    return fetch(`${url}/${id}`,{
        method: 'PUT',
        headers: {
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            imgUrl,
            price,
            id,
            alt,
            section,
            description
        })
    })
    .then((respuesta) => respuesta)
    .catch((err)=>console.log(err))
}

export const productServices = {
    productsList,
    createProduct,
    deleteProduct,
    getProduct,
    updateProduct
}