const child_process = require("child_process");

let num1 = null;
let num2 = null;
let num3 = null;
let num4 = null;

// Function ejecutar, de parametro un archivo
//Toda la funcion tambien es una promesa porque devulve una promesa
function ejecutar(archivo){
    //promesa contruida con una fn anonima
    return new Promise( (resolve) => {
        //ejecucion con child_process
        //ejecuta node con nombre de archivo
        child_process.exec(`node ${archivo}`, function (err, result) {
            //se ejecuta una siguien funcion anonima
            //donde el resultado se convierne en numero
            console.log(result);
            resolve(Number(result));
        });
    });
};

ejecutar("primerNumero.js").then( (numero1) => {
    num1=numero1;
    
    ejecutar("segundoNumero.js").then( (numero2) => {
        num2 = numero2;
        
        ejecutar("tercerNumero.js").then( (numero3) => {
            num3 = numero3;
            
            ejecutar("cuartoNumero.js").then( (numero4) => {
                num4 = numero4;
                console.log(num1 + num2 + num3 + num4);
            });
        });
    });
});

