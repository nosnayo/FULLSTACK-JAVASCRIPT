var peliculas = [
    { loHasVisto: "Viste", titulo: "Busqueda Implacable", ranting: "5 estrellas"},
    { loHasVisto: "No viste", titulo: "Norbit", ranting: "3 estrellas"},
    { loHasVisto: "Viste", titulo: "Mini Espías", ranting: "2 estrellas"},
    { loHasVisto: "No Viste", titulo: "La Vida es Bella", ranting: "5 estrellas"},
];

//RECORRER ARREGLO PARA VER ATRIBUSTOS DE CADA PELICULA
for(var contador in peliculas){  
console.log(peliculas[contador]["loHasVisto"] +  ' "' + peliculas[contador]["titulo"] + '" - ' + peliculas[contador]["ranting"]);
}

