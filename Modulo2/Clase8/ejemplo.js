
//AGREGAR ACCIONES DE ESTILO A LI, NO ESCALABLE
var lista = document.querySelectorAll(".lenguajes > li");
//console.log(lista);
for (let iterador = 0; iterador < lista.length; iterador++) {
    lista[iterador].addEventListener("click", function () {
        this.style.color = "red";
    })
}

//FUNCIONABILIDAD DE CAMBIO DE COLOR AL PASAR SOBRE EL TITULO
var tituloh1 = document.querySelector("#destacado");
//console.log(tituloh1);
tituloh1.addEventListener("mouseover", function(){
    this.classList.add("cambiarcolorfondo");
})

tituloh1.addEventListener("mouseleave", function(){
    this.classList.remove("cambiarcolorfondo");
})

tituloh1.addEventListener("click", function(){
    this.classList.add("cambiarcolorfondoclick");
})

//RECIBIR EVENTO EN EL BODY Y VER QUE ENTREGA
document.body.addEventListener("click", function(evento){
    console.log(evento);
});

//AGREGAR ACCIONES DE ESTILO A LI , ESCALABLE
var listaordenada = document.querySelectorAll("#listaordenada > li");
//console.log(listaordenada);
for(var iterador=0; iterador < listaordenada.length; iterador++){
    listaordenada[iterador].addEventListener("click", function () {
        this.classList.add("listaOrdenada");
    })
}

