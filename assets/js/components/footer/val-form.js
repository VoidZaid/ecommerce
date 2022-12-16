import { getMessage } from "./errMessage.js";

export function inputsValidation(inputs){
    inputs.forEach((input)=>{
        input.addEventListener('blur',(e)=>{
            e.preventDefault;
            e.target.dataset.input
            valInput(e.target);
        })
    })
}



function valInput(input){
    console.log(input.validity.valid);
    if(input.validity.valid){
        input.parentElement.classList.remove("input__container-invalid");
        input.parentElement.querySelector(".input__err-mess").innerHTML = "";
    }else{
        input.parentElement.classList.add("input__container-invalid");
        input.parentElement.querySelector(".input__err-mess").innerHTML = getMessage(input);
    }    
}



