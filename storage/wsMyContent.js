import api from "../API/api.js";

let wsMyContent = {
    async wsShowApi(){
        const data = await api.getApi();
        let templateList = '';
        data.results.forEach(personaje =>{
            templateList += `<article>
            <div class="img">       
                <img src="${personaje.image}" alt="" srcset="">
            </div>
            <h2 class="my-3">${personaje.name}</h2>
            <p>${personaje.status}</p>
            <p>${personaje.gender}</p>
            <p>${personaje.species}</p>
            <p>${personaje.location.name}</p>
        </article>`
        });
        return templateList;
    },
    
    async wsSearch(searchTerm){
        let dataSearch = await api.getByName(searchTerm);
        let templateListSearch = '';
        dataSearch.results.forEach(personaje =>{
            templateListSearch += `<article>
            <div class="img">       
                <img src="${personaje.image}" alt="" srcset="">
            </div>
            <h2 class="my-3">${personaje.name}</h2>
            <p>${personaje.status}</p>
            <p>${personaje.gender}</p>
            <p>${personaje.species}</p>
            <p>${personaje.location.name}</p>
        </article>` 
        });
        return templateListSearch;
    },


/*     async createSelect(number){
        let dataPage = await api.getByPage();
        const numPages = dataPage.info.pages;
        let select = '';
        for(let i = 1; i <= numPages ; i++){
            select += `<option value="${i}">${i}</option>`
        };
        return select
    }, */

};

self.addEventListener("message", async (e) => {
    const result = await wsMyContent[`${e.data.module}`](e.data.data);
    postMessage(result);
});
