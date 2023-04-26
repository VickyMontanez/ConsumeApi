export default{
    showApi(){
        const WS = new Worker("./storage/wsMyContent.js", {type: "module"});
        WS.postMessage({module:"wsShowApi", data:""}) 
        WS.addEventListener("message", (e)=>{
            const container = document.querySelector("#main");
            container.innerHTML="";
            container.insertAdjacentHTML("beforeend",e.data);
        })

    }
}