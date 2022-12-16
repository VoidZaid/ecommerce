import {usersServices} from "../../../../service/services-user.js"

export function sessionStart(formInput){
    formInput.addEventListener('submit',(e)=>{
        e.preventDefault();
        const email = e.target.querySelector('[data-login="email"]').value;
        const password = e.target.querySelector('[data-login="password"]').value;
        valUser(email,password);
        // console.log(email,password);
    })
}
const valUser = async(email, password)=>{
    try{
        const usersList = await usersServices.usersList();
        usersList.forEach((user)=>{
            // console.log("hola mundo",user.password,user.email);
            if(email == user.email && password == user.password){
                sessionStorage.setItem('tiendeoLogin','true');
                Swal.fire({
                    title: 'Correcto!',
                    text: 'Iniciaste sessión!',
                    icon: 'success',
                    confirmButtonText: 'Ir a administrar'
                }).then(() => {
                    window.location.href = "./adm-product.html";
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                Swal.fire({
                    title: 'Error!',
                    text: 'Ocurrio un error, vuelve a intentarlo',
                    icon: 'error',
                    confirmButtonText: 'Aceptar'
                })
            }
        })
    }
    catch(err){
        console.log("Ocurrio un error en el Login: ",err);
    }
}