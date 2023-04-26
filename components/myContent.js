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

/*     Select(){
        const wsbtn = new Worker ("./storage/wsMyContent.js", {type: "module"});
        wsbtn.addEventListener("message", (e)=>{
            const select =document.querySelector("#containerSelect");
            select.innerHTML="";
            select.insertAdjacentHTML("beforeend", e.data);
        });
        wsbtn.postMessage({module:"createSelect"});
    }, */



/*     let number=1;
    myComponent.mostrarData(number);
    select.addEventListener("change", (e)=>{
        number= e.target.value;
        myComponent.mostrarData(number);
    })
 */

    funcBotones(){
        const boton = document.querySelectorAll(".pagebtn")
        let number=1;
        myComponent.mostrarData(number);
        boton.addEventListener("click", (e)=>{
            number= e.target.value;
            myComponent.mostrarData(number);
            alert("QAAAAAAAAAAAAAA")
        })
    }
};
