var peliculas = [
    { loHasVisto: "Viste", titulo: "Busqueda Implacable", ranting: "5 estrellas"},
    { loHasVisto: "No viste", titulo: "Norbit", ranting: "3 estrellas"},
    { loHasVisto: "Viste", titulo: "Mini Espías", ranting: "2 estrellas"},
    { loHasVisto: "No Viste", titulo: "La Vida es Bella", ranting: "5 estrellas"},
];

//RECORRER ARREGLO PARA VER ATRIBUSTOS DE CADA PELICULA
var peliculasResp = "LISTADO DE PELICULAS <br>";
for(var contador in peliculas){  
    peliculasResp = peliculasResp + peliculas[contador]["loHasVisto"] +  ' "' + peliculas[contador]["titulo"] + '" - ' + peliculas[contador]["ranting"] + "<br>";
}
document.getElementById("peliculas").innerHTML = peliculasResp; 


function arregloDeObjetos(numeroP, parametroP){
    var arreglo = [];
    var arregloString = "[ ";
    //Recorrer para insertar N Atributos
    for(var i = 1; i <= numeroP; i++){
        //Insertar Atributos a Arreglo
        arreglo.push({ [parametroP] : i});
        arregloString += "{ " + parametroP + " : " + i + " } ";
    }
    arregloString += " ]"
    console.log(arreglo);
    document.getElementById("arreglo").innerHTML = arregloString;
}

//arregloDeObjetos(5, "hola");
//arregloDeObjetos(3, "chau");