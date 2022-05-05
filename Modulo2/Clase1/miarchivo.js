/*INICIAL VARIABLES
console.log("Hola Mundo Javascript");
const PI = 3.14;
const EDAD_MINIMA_CONDUCIR = 18;
let miEdad = 39;
console.log(miEdad);
*/

/*FUNCIONES
function concatenarPalabra(a, b, c){
    var miFrase = a + b +c;
    return miFrase;
}
var miPropiaFrase = concatenarPalabra("Hola "," soy "," Nelson"); 
console.log(miPropiaFrase);
*/

function suma() {
    var num1 = parseInt(document.getElementById("numero1").value);
    var num2 = parseInt(document.getElementById("numero2").value);

    var resultadoSuma = num1 + num2;
    return resultadoSuma; 
}