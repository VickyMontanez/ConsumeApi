/* Se debe obtener toda la data de los personajes de la API */
const getApi = async()=>{
    try{
        const data = await fetch(`https://rickandmortyapi.com/api/character`);
        const result = await data.json();
        return result;
    }catch (error) {
        console.log(error);;
    };
};

/* Se obtiene la data de los personajes por su Id */
const getById = async(id)=>{
    try{
        const data = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
        const results = await data.json();
        return results;
    } catch(error){
        console.log(error);
    };
};

/* Se obtiene la data de los personajes por su Name */
const getByName = async(name)=>{
    try{
        const data = await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`);
        const results = await data.json();
        return results
    }catch(error){
        console.log(error);
    };
};

/* Se obtiene la data de los personajes por su page*/
const getByPage = async(page)=>{
    try{
        const data = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
        const results = await data.json();
        return results
    }catch(error){
        console.log(error);
    }
}

export default{
    getApi,
    getById,
    getByName,
    getByPage
}