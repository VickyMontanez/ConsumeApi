
import config from "./config.js"

    function getApiData(done){
        const results = fetch(`${config.api.url}`);
        results
            .then(response => response.json())
            .then(data =>{done(data)})
            .catch(error => {
                console.error('Error al llamar a la API', error);
                throw error;
            })
            
    };

    getApiData(data =>{
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(/* html */
            `
            <article>
                <div class="img">       
                    <img src="${personaje.image}" alt="" srcset="">
                </div>
                <h2>${personaje.name}</h2>
                <span>${personaje.status}</span>
                <p>${personaje.gender}</p>
                <p>${personaje.species}</p>
                <p>${personaje.location.name}</p>
            </article>
            `)
        const main = document.querySelector("main");
        main.append(article);
        });
    });

    self.addEventListener("message",(e)=>{
        postMessage(wsMyContent[e.data.module](e.data.data.results));
    });

    export default{
        getApiData
    };