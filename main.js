import getApiData from "./storage/wsMyContent.js";
/* import { article } from "./storage/wsMyContent.js"; */

document.addEventListener("keyup", e =>{
    if(e.target.matches("#search")){
        getApiData.document.querySelectorAll(".articulo").forEach(personaje =>{
            personaje.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
                ?personaje.classList.remove(".filtro")
                :personaje.classList.add(".filtro")
        })
    }
})
