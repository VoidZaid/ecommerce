const sessionStatus = JSON.parse(sessionStorage.getItem('tiendeoLogin'));
console.log(sessionStatus);
var URLactual = window.location.pathname;

if(URLactual =="/login.html"){
    if(sessionStatus){
        Swal.fire({
            title: 'Has inciado sesión',
            icon: 'success',
            confirmButtonText: 'Ir a administrar'
        })
        .then(()=>window.location.href = "/adm-product.html")
        
    }
}else if(URLactual=="/adm-product.html" || URLactual=="/add-product.html"){
    if(!sessionStatus){
        // Swal.fire({
        //     title: 'No has inciado sesión',
        //     icon: 'error',
        //     confirmButtonText: 'Iniciar Sesión'
        // })
        // .then(()=>window.location.href = "/login.html");
        window.location.href = "/login.html";
    }
}