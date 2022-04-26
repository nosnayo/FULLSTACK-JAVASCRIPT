//JavaScript básico - CLASE 4 / Ejercicio en clase 02
function triplicador(param){
    let triple = param*3;
    return triple;
}
console.log("Triplicador " + triplicador(7));

function multiplicador(param1, param2){
    let multiplica = param1 * param2;
    return multiplica;
}
console.log("Multiplicador " + multiplicador(6, 3));

function division(param1, param2){
    let divide = param1 / param2;
    return divide;
}
console.log("Division " + division(8, 4));

function resto(param1, param2){
    let modulo = param1 % param2;
    return modulo;
}
console.log("Resto " + resto(9, 4));


var calculoGeneral = resto(division(multiplicador(triplicador(5), 12), 12), 3);

console .log("Calculo General " + calculoGeneral);