
function darleMimosAlGato(callback){ //Fn darleDeComerAlGato( aComer(nombre) )
    var miGato = "Rin"; // se define esta variable
    callback(miGato);   // aComer("Rin") { console.log("le ..." + "Rin") }
}

function aComer(nombreDelGato){
    console.log("Le estoy dando de comer a " + nombreDelGato);
}
function acariciar(nombreDelGato){
    console.log("Acariciando al gato " + nombreDelGato);
}
function rascar(nombreDelGato){
    console.log("Rascar la wata al gato " + nombreDelGato);
}

darleMimosAlGato(aComer); //Ejecutamos la Fn
darleMimosAlGato(acariciar);
darleMimosAlGato(rascar);
