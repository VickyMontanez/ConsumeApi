function getPokemones(done){
    const results = fetch("https://pokeapi.co/api/v2/pokemon/1/");
    results
        .then(response => response.json())
        .then(data =>{done(data)});
};

getPokemones(data =>{
        const article = document.createRange().createContextualFragment(`
        <article>
            <div class="img">       
                <img src="${data.sprites.other.home.front_default}" alt="" srcset="">
            </div>
            <h2>${data.name}</h2>
            <p>${data.order}</p>
        </article>
        `)

    const main = document.querySelector("main");
    main.append(article);
});