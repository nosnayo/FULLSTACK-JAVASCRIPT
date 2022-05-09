/*RECIBIR DATO de ETIQUETA
console.log("Mire --> " + document.querySelector('h1'));
*/

//SELECTOR de ETIQUETA
var titulo = document.querySelector('h1');
var tituloDos = document.querySelector('h2');
var tituloTres = document.querySelector('h3');
//SELECTOR de CLASS
var parrafo = document.querySelector(".subTitulo");
//SELECTOR de ID
var parrafoPequennop = document.querySelector("#subt");
var linkGoogle = document.querySelector("#btnGoogle");
//GETELEMENT de ID
var parrafoTres = document.getElementById("subtTres");

titulo.style.color="rose";
parrafo.style.color="red";
parrafoPequennop.style.color="blue";
parrafoTres.style.color="green";
parrafoTres.textContent = "Este es un parrafo que ha cambiado";
//IMPRIMIR HTML
titulo.innerHTML = "Pagina del <u>Glorioso</u> equipo Chillan, Plataforma 5";
//CAMBIOS DE ESTILOS CAMBIANDO CLASS / IMPORTANTE
//ELIMINAR ATRIBUTO A LA CLASS (DEL CODIGO HTML RECIBIDO). 
tituloDos.classList.remove("aRemover");
tituloTres.classList.remove("aRemover2");
//AGREGAR ATRIBUTO A LA CLASS (DEL CODIGO HTML RECIBIDO). 
tituloDos.classList.add("importante");
tituloTres.classList.add("importante2");
console.log(tituloDos);
console.log(tituloTres);

//GETATTRIBUTE recibir otros atributos, SE DEBE HACER REFERENCIA PRIMERO
var atributoLink = linkGoogle.getAttribute('href');
console.log(atributoLink);
//SETATTRIBUTE, CAMBIOS DE VALORES EN ATRIBUTOS HREF
linkGoogle.setAttribute("href", "http://plataforma5.iicap.cl");
console.log(linkGoogle);


//RECOGER ARREGLO DE ATRIBUTOS y cambiarlos
var arregloLinks = document.querySelectorAll("a");
console.log(arregloLinks);
var elementoParticular;
for(var iterador = 0; iterador<arregloLinks.length; iterador++){
    arregloLinks[iterador].setAttribute("href","http://plataforma5.iicap.cl");
    elementoParticular = arregloLinks[iterador].getAttribute('href');
    console.log(elementoParticular);
}

//CREAR ELEMENTOS HTML NUEVO / MEDIANTE INVOCANDO AL COMPONENTE PADRE
//SE CREA AL ELEMENTO
var elementoH6 = document.createElement("h6");
elementoH6.textContent = "Este es un h6 creado desde JS";
//EL ELEMENTO DEBE INCLUIRSE COMO HIJO
var divParaH6 = document.createElement("div");
divParaH6.appendChild(elementoH6);
document.body.appendChild(divParaH6);
//document.body.removeChild(divParaH6);