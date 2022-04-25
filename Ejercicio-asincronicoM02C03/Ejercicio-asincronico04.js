function calcularFizzBuzz() {
    //DEL 1 al 100
    var numero = 1;
    var respuesta = "";

    while(numero <= 100){
        if( numero%3 == 0 ){
            if( numero%5 == 0){ 
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + "FizzBuzz\n");
            }else{
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + "Fizz\n");
            }
        }else{
            if( numero%5 == 0){ 
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + "Buzz\n");
            }
        }
        numero++;

    }    
    
    respuesta = respuesta + ("Fin");
    return alert(respuesta); 
    //alert("Fin");
    //console.log("Fin");
}