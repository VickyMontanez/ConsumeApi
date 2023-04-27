import api from "../API/api.js";
/*  Función para NO sobreescribir */

function crearCharactersList(lista) {
    let templateList = '';
    lista.forEach(personaje =>{
        templateList +=  `<article>
        <div class="content">
            <div class="img">       
                <img src="${personaje.image}" alt="" srcset="">
            </div>
            <div class="info my-3">
            <h2 >${personaje.name}</h2>
            <ul class="mt-4">
                <li><p>${personaje.status}</p></li>
                <li><p>${personaje.gender}</p></li>
                <li><p>${personaje.species}</p></li>
                <li><p>${personaje.location.name}<p></p></li>
            </ul> 
    </div>
        </div>
    </article>` 
    });
    return templateList;
}

/* funciones asíncronas con data obtenida desde Api */
let wsMyContent = {
    async wsShowApi(){
        const data = await api.getApi();
        return crearCharactersList(data.results);
    },
    
    async wsSearch(searchTerm){
        let dataSearch = await api.getByName(searchTerm);
        return crearCharactersList(dataSearch.results);
    },

    async wsPage(pageNumber){
        let dataPage = await api.getByPage(pageNumber);
        return crearCharactersList(dataPage.results);
    },

};

self.addEventListener("message", async (e) => {
    const result = await wsMyContent[`${e.data.module}`](e.data.data);
    postMessage(result);
});
