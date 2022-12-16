import { putElements } from "../components/products/render-products.js";


// agregamos los productos segun donde corresponda
const productGroup = document.querySelectorAll('[data-products]');
putElements(productGroup);
