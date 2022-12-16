const productsList = () =>fetch('http://localhost:3000/products').then((response)=>response.json());

const createProduct = (name,imgUrl,price,id,alt,section,description)=>{
    return fetch('http://localhost:3000/products',{
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
    return fetch(`http://localhost:3000/products/${id}`,{
        method: "DELETE",
    })
}

const getProduct = (id)=>{
    return fetch(`http://localhost:3000/products/${id}`).then((respuesta)=>respuesta.json())
    .catch((err)=> console.log(err));
        
}

const updateProduct= (name,imgUrl,price,id,alt,section,description)=>{
    return fetch(`http://localhost:3000/products/${id}`,{
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