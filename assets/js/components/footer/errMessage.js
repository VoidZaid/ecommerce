export function getMessage(input){
    const valObj = input.validity;
    const errType = getErrType(valObj);
    // console.log(errType);
    const mess = errMess[input.dataset.input][errType]||"";
    console.log(mess);
    return mess;
}

function getErrType(inputVal){
    for(let val in inputVal){
        if(inputVal[val] == true){;
            // console.log(val);
            return val;
        };
    }
}

// si agregamos nuevos tipos de inputs debemos tener sus tipos de errores como parte del Obj ErrMess con el mismo dataSet
const errMess = {
    name:{
        valueMissing:"* El campo no debe estar vacio",
        tooLong:"* El campo debe tener menos de 40 caracteres",
        tooShort:"* El campo debe tener mas de 5 caracteres"
    },
    message:{
        valueMissing:"*El campo no debe estar vacio",
        tooLong:"*El campo debe tener menos de 40 caracteres",
        tooShort:"*El campo debe tener mas de 10 caracteres"
    }
}