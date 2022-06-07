
//linkear API
let url = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits";

//es una consulta asycrona
const buscarEnApi = async () => {
    //Consumir un API (cuando consume un api tiene que ver el contexto http)
    //await para espera la respuesta de la consulta
    const respuesta = await fetch(url);
    
    //convertir la respuesta en formato json
    const commits = await respuesta.json();
    //Ver respuesta de API
    console.log(commits[0].author.login);
    alert(commits[0].author.login);
    //contecto asincrono  
}

buscarEnApi();