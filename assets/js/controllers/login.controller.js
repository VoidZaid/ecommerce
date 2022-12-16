import { toValInput } from "../components/login/login-input-messsage.js";
import {sessionStart} from "../components/login/val-users.js"

const logElements = document.querySelectorAll('[data-login]');
logElements.forEach(input=>{
    input.addEventListener('keyup',(e)=>{
        toValInput.setMessage(e.target,"login")
    })
})

const sessionForm = document.querySelector('#session__form');
sessionStart(sessionForm);


