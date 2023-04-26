import api from "../API/api.js"
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
    }
};

self.addEventListener("message", async (e) => {
    const result = await wsMyContent[`${e.data.module}`](e.data.data);
    postMessage(result);
});
