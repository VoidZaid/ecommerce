// const inputFile = document.querySelector('.add__input__file');
function addEventDragDrop(dropArea,inputFile){
    const imgText = dropArea.querySelector('.add__input__file-drop-messaje');
    // se acriva cuando estamos arrastrando un elemento
    dropArea.addEventListener('dragover',(e)=>{
        e.preventDefault();
        dropArea.classList.add("active");
        imgText.textContent = "Suelta para agregar";
    })
    // se activa cuando estamos arratrando un elemento pero no estamos dentro de dropArea
    dropArea.addEventListener('dragleave',(e)=>{
        e.preventDefault();
        dropArea.classList.remove("active");
        imgText.textContent = "Arrastre para agregar...";
    })
    // Cuando soltamos archivos que estamos arrastrando dentr de la zona
    dropArea.addEventListener('drop',(e)=>{
        e.preventDefault();
        let file = e.dataTransfer.files;
        // console.log(file[0].name);
        valImgType(file);
        dropArea.classList.remove("active");
        imgText.textContent = "Arrastre para agregar...";
    })
    inputFile.addEventListener('change',(e)=>{
        let file = e.target.files;
        valImgType(file)
        console.log(file);
    })
}

function valImgType(file){
    // e.dataTransfer.files nos devuelve un array, debemos entrar a solo el primero, porque no admitimos mas de un archivo
    if(file.length == 1){
        const docType = file[0].type;
        const validExten = ['image/jpeg','image/jpg','image/png','image/webp'];
        if(validExten.includes(docType)){
            // Obj nos permite leer las propiedades archivo a subir
            const fileReader = new FileReader();
            // cuando se cague el archivo (load)
            fileReader.addEventListener('load',(e)=>{
                const fileUrl = fileReader.result;
                // console.log(fileUrl);
                const cardContainer = document.querySelector('.uploaded__card.btn');
                putImg(fileUrl,file[0].name,cardContainer);
            })
            if(file[0]){
                fileReader.readAsDataURL(file[0]);
            }
        }else{
            alert("HAS FALLADO DE ARCGHIVP")
        }
    }else{
        alert("Solo puede subir un archivo por favoir")
    }
}
function putImg(urlImg,nameImg,cardContainer){
    cardContainer.style.display = 'flex';
    cardContainer.innerHTML = createLoadedImg(urlImg,nameImg);
}   
function createLoadedImg(urlImg,nameImg){
    const card = `
        <img class="uploaded__card-img" src="${urlImg}" alt="${nameImg}">
        <span class="uploaded__card-name">${nameImg}</span>
        <span class="material-icons-round uploaded__card-icon">
            cancel
        </span>
    `;
    return card;
}
function imgSrc(){
    const imgSrc = document.querySelector('.uploaded__card-img');
    if(imgSrc)
        return imgSrc.getAttribute('src');
    return null;
}


export const methodsDragDrop = {
    addEventDragDrop,
    imgSrc,
    putImg
}


// submitBtn.addEventListener('click',(e)=>{
//     e.preventDefault();
//     const id = `${Math.random().toString(32).substring(7)}`
//     const imgUrl = imgSrc();
//     const imgNam = imgName();
//     const price = 100;
//     productServices.createProduct(imgNam,imgUrl,id,price)
//         .then(response=>{
//             console.log("esta es la respuesta: " + response);
//         })
//         .catch(err=>console.log(err))
// })