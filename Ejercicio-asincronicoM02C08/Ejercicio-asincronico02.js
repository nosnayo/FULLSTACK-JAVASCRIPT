function darColor(colorP){
    document.body.style.backgroundColor = colorP;
}

//Solo para volver a color Blanco
var colorAtributo = document.querySelector("#colorAtributo");
//Listener que Incova el cambio de Color a Blanco.
inputColores.addEventListener("keydown", function () {
    if ("BackSpace") {
        darColor('white');
    }
})
