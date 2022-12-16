const regEx={
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^[a-zA-ZÀ-ÿ0-9\.\-_\s]{8,15}$/,
    category:/^[a-z0-9]{8,9}$/,
    productName:/^[a-zA-Z0-9-_\s]{1,30}$/,
    price:/^[0-9]{1,4}$/,
    description:/^[a-zA-ZÀ-ÿ0-9-_\s\.\,+@!¡?¿()]{1,350}$/
}
const errMessages = {
    email: "Correo: ejemplo@dominio.com",
    password: "Entre 8 y 15 números, letras y caracteres especiales ",
    category: "De 8 a 9 caracteres sin espacios en minúsculas [diversous/consoles/starwars]",
    productName: "Máximo 30 caracteres entre numero, letras y '-'",
    price:"Solo números sin carateres especiales, maximo 4",
    description:"Máximo 350 caracteres entre numeros y letras."
}

function getErrMessage(inpDataSet){
    const message = errMessages[inpDataSet]
    return message;
}

function valInput(input,typeData){
    const inpVal = input.value;
    const inpDataSet = input.dataset[typeData];
    const inpTest = regEx[inpDataSet].test(inpVal);
    if(inpTest){
        return "";
    }else{
        return getErrMessage(inpDataSet);
    }
}
function setMessage(input,typeData){
    const message = valInput(input,typeData);
    // console.log(mess);
    if(message.length >= 1){
        input.parentElement.classList.add("input__container-invalid");
        input.parentElement.querySelector(".input__err-mess").innerHTML = message;
    }else{
        input.parentElement.classList.remove("input__container-invalid");
        input.parentElement.querySelector(".input__err-mess").innerHTML = "";
        // console.log("est.........");
    }
}
export const toValInput = {
    setMessage,
    regEx
}
