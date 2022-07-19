//child process sirve para ejecutar valores desde la linea de comando
const child_process = require("child_process");

let ejecucion = null;
let mostrar = null;

// Function ejecutar, de parametro un archivo
//Toda la funcion tambien es una promesa porque devulve una promesa
function ejecutar(){
    //promesa contruida con una fn anonima
    return new Promise( (resolve) => {
        //ejecucion con child_process
        //ejecuta la impresion
        child_process.exec(`dir`, function (err, result) {
            //se ejecuta una siguiente funcion anonima
            //donde solo se imprime
            ejecucion = result;
            console.log(ejecucion);
        });
    });
};

ejecutar().then( (posicion) => {
    mostrar=posicion;
    console.log(mostrar);
});