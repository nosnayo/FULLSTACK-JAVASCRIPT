//Funciones Anidadas Simple
function iniciar() {
    var nombre = "La Pincoya";

    function mostrarNombre(){
        console.log(nombre);
    }
    mostrarNombre();
}
iniciar();

//Retorno en Funciones Anidadas Simple
function crearFunction(){
    var nombre = 'El Caleuche';

    function mostrarNombre(){
        console.log(nombre);
    }
    return mostrarNombre;
}

//CLOSURE, es una objeto con una function y un retorno (o Contexto)
var miFunction = crearFunction();
miFunction();