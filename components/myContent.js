export default{
    showApi(){
        const WS = new Worker("./storage/wsMyContent.js", {type: "module"});
        WS.postMessage({module:"wsShowApi", data:""});
        WS.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.append
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
        wsbtn.addEventListener("onclick", (e)=>{
            document.querySelector(".pagebtn");
            alert("funciona")
        })
    },
};
