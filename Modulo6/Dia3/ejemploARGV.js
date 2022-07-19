
//Recuperar la ubicacion de las variables de entorno y la actual
//slice para la ubicacion de los parametos
const argumentos = process.argv.slice(2);
//Argumento parte en posicion 2
let num1 = Number(argumentos[0]);
let num2 = Number(argumentos[1]);

let resultado = num1 / num2;

console.log(resultado);
//node .\ejemploARGV.js 1 2