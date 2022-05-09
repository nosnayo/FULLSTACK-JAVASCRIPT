//CAMBIO DE VALORES, PARA SABER QUE ESTA DENTRO
//USO DE INNERHTML
var source = document.querySelector("#source").innerHTML;
var destination = document.querySelector("#destination").innerHTML;

console.log(source);
console.log(destination);
document.querySelector("#source").innerHTML = destination;
document.querySelector("#destination").innerHTML = source;
