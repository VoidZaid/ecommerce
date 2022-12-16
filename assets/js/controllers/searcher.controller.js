const form = document.querySelector('.header__nav__item__form');
form.addEventListener('keyup',(e)=>{
    e.preventDefault();
    const toFind = document.querySelector('.header__nav__item__form-input').value.toUpperCase();
    console.log(toFind);
    const elements = document.querySelectorAll('.products__group__product__info-title');
    for (let i = 0; i < elements.length; i++) {
        if(!elements[i].innerText.toUpperCase().includes(toFind)){
            elements[i].parentElement.parentElement.style.display = "none"
            // console.log(elements[i].parentElement.parentElement);
        }else{
            elements[i].parentElement.parentElement.style.display = "block"
        }
        
    }
})