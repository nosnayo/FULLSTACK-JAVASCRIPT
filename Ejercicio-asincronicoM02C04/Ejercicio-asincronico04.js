function calcularFizzBuzz2() {
    //DEL 1 al Limite
    var palabra1 = document.getElementById('palabra1').value;
    var palabra2 = document.getElementById('palabra2').value;
    var limite = parseInt(document.getElementById('limite').value);
    var fizz_num = parseInt(document.getElementById('fizz_num').value);
    var buzz_num = parseInt(document.getElementById('buzz_num').value);
   
    var numero = 1;
    var respuesta = "";

    while(numero <= limite){
        if( numero%fizz_num == 0 ){
            if( numero%buzz_num == 0){ 
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + palabra1 + palabra2 + "\n");
            }else{
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + palabra1 + "\n");
            }
        }else{
            if( numero%buzz_num == 0){ 
                respuesta = respuesta + ("Su numero: [" + numero + "] es: " + palabra2 + "\n");
            }
        }
        numero++;

    }    
    
    respuesta = respuesta + ("Fin");
    return alert(respuesta); 
    //alert("Fin");
    //console.log("Fin");
}