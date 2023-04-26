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
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
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
            <h2>${personaje.name}</h2>
            <span>${personaje.status}</span>
            <p>${personaje.gender}</p>
            <p>${personaje.species}</p>
            <p>${personaje.location.name}</p>
        </article>` 
        });
        return templateListSearch;
    },

    async createBotones(){
        let dataPage = await api.getByPage();
        const numPages = dataPage.info.pages;
        let botones = '';
        for(let i = 1; i <=numPages ; i++){
            botones += `<button class="pagebtn" onclick="window.location.href='?page=${i}'">${i}</button>`
        };
        return botones
    },

};

self.addEventListener("message", async (e) => {
    const result = await wsMyContent[`${e.data.module}`](e.data.data);
    postMessage(result);
});
