function cargarEnPantalla(data){
    const container = document.querySelector("#main");
    container.innerHTML="";
    container.insertAdjacentHTML("beforeend", data);
}

/* Funciones con workers */
export default{
    showApi(){
        const WS = new Worker("./storage/wsMyContent.js", {type: "module"});
        WS.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend", e.data);
        });
        WS.postMessage({module:"wsShowApi", data: ""});
    },
    
    search(){
        const wsSr = new Worker("./storage/wsMyContent.js", {type: "module"});
        wsSr.addEventListener("message", (e) => {
            cargarEnPantalla(e.data);
        });
        const searchInput = document.querySelector("#searchField");
        searchInput.addEventListener("keyup", () => {
            const searchTerm = searchInput.value;
            wsSr.postMessage({module: "wsSearch", data: searchTerm});
        });
    },

    pagination(){
        const wsPagination = new Worker("./storage/wsMyContent.js", {type: "module"});
        wsPagination.addEventListener("message", (e) => {
            cargarEnPantalla(e.data);
        });
        for (let paginador = 0; paginador < 2; paginador++) {
            const pagesContainer = document.querySelector("#pagesContainer" + (paginador + 1));
            for (let i = 1; i <= 21; i++) {
                let numeroPagina = i + (21 * paginador);
                const botonPagina = document.createElement("li");
                botonPagina.setAttribute("class", "page-link");
                botonPagina.addEventListener("click", () => {
                    wsPagination.postMessage({module: "wsPage", data: numeroPagina});
                });
                botonPagina.innerHTML = numeroPagina;
                pagesContainer.appendChild(botonPagina);
            }
        }
    },
};
