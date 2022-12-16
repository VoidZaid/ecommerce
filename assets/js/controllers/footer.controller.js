import { sendMess } from "../components/footer/send-form.js";
import { inputsValidation } from "../components/footer/val-form.js";

const formToSend = document.querySelector("#contact__form");
const inputs = document.querySelectorAll("[data-input]");

inputsValidation(inputs);
sendMess(formToSend,"918939293");