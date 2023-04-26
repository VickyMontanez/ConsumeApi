export default{
    showApi(){
        const WS = new Worker("./storage/wsMyContent.js", {type: "module"});
        WS.postMessage({module:"wsShowApi", data:""});
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
    },

    botones(){
        const wsbtn = new Worker ("./storage/wsMyContent.js", {type: "module"});
        wsbtn.addEventListener("message", (e)=>{
            const containerbtn = document.querySelector("#containerbtn");
            containerbtn.innerHTML="";
            containerbtn.insertAdjacentHTML("beforeend", e.data);
        });
        wsbtn.postMessage({module:"createBotones"});
    },

    pagesTemplate(){
        const wspage = new Worker("./storage/wsMyContent.js", {type:"module"});
        wspage.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend", e.data);
        });
        const urlParams = new URLSearchParams(window.location.search);
        const page = urlParams.get('page') || 1;
        wspage.postMessage({module:"createTemplate", num: page});
    },

};
