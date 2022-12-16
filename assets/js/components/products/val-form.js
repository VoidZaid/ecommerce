import { toValInput } from "../login/login-input-messsage.js";
// import { productServices } from "../../../../service/services-products.js";

function valForm(inputs,typeData){
    const arr = [];
    inputs.forEach((input)=>{
        const inpDataSet = input.dataset[typeData];
        const inpTest = toValInput.regEx[inpDataSet].test(input.value);
        if(!inpTest)
            arr.push(inpDataSet);
    })
    if(arr.length>=1)
        return false;
    return true;
}

export const productsMethods = {
    valForm
}