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
        const articles = [];
        data.results.forEach(personaje => {
            const article = document.createRange().createContextualFragment(/* html */
            `
            <article>
                <div class="img">       
                    <img src="${personaje.image}" alt="" srcset="">
                </div>
                <h2 class="articulo">${personaje.name}</h2>
                <div class="py-2">
                    <p><i class="bi bi-life-preserver"></i>${personaje.status}</p>
                    <p><i class="bi bi-gender-ambiguous"></i>${personaje.gender}</p>
                    <p><i class="bi bi-caret-right-fill"></i>${personaje.species}</p>
                    <p><i class="bi bi-geo-alt-fill"></i>${personaje.location.name}</p>
                </div>
            </article>
            `)
        
        articles.push(article);
        const main = document.querySelector("main");
        main.append(article);
        });
    })
    
    export default{
        getApiData
    };
