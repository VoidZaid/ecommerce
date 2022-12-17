const productsList = () =>fetch('https://alurageek-voidzaid.onrender.com/products').then((response)=>response.json());

const createProduct = (name,imgUrl,price,id,alt,section,description)=>{
    return fetch('https://alurageek-voidzaid.onrender.com/products',{
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
    return fetch(`https://alurageek-voidzaid.onrender.com/products/${id}`,{
        method: "DELETE",
    })
}

const getProduct = (id)=>{
    return fetch(`https://alurageek-voidzaid.onrender.com/products/${id}`).then((respuesta)=>respuesta.json())
    .catch((err)=> console.log(err));
        
}

const updateProduct= (name,imgUrl,price,id,alt,section,description)=>{
    return fetch(`https://alurageek-voidzaid.onrender.com/products/${id}`,{
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