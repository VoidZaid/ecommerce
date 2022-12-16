export function sendMess(element,phone){
    
    element.addEventListener('submit',()=>{
        const name = element.querySelector('#nombre').value;
        const message = element.querySelector('#mensaje').value;
        const url = "https://api.whatsapp.com/send?phone=51"+phone+"&text=Nombre:%0A"+name+"%0A%0AMensaje:%0A"+message+"%0A";
        window.open(url);
    });
}