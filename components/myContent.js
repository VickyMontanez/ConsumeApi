export default{
    showApi(){
        const WS = new Worker("./storage/wsMyContent.js", {type: "module"});
        WS.postMessage({module:"wsShowApi", data:""}) 
        WS.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend",e.data);
        });
    },
    
    search(){
        const wsSr = new Worker("./storage/wsMyContent.js",{type: "module"});
        wsSr.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend", e.data);
        });
        const searchInput = document.querySelector("#searchField");
        searchInput.addEventListener("keyup", ()=>{
            const searchTerm = searchInput.value;
            wsSr.postMessage({module:"wsSearch", data: searchTerm});
        });
    }
};
