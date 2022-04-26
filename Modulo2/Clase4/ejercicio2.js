function verificarEdadParaCC(nombreP, edadP){
    var resultado = false;
    if(edadP < 18){
        console.log("Estimado " + nombreP + "No tiene edad para tener CC");
    }else{
        console.log("Estimado " + nombreP + " Usted cumple las condiciones para tener CC");
        resultado = true;
    }

    return resultado;
}

var resultado = verificarEdadParaCC("Nelson", 20);
console.log(resultado);