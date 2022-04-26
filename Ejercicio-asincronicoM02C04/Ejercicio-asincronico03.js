function contarDeA_n(){
    var contar_de_a = parseInt(document.getElementById('contar_de_a').value);
    var contar_hasta = parseInt(document.getElementById('contar_hasta').value);
    var respuesta = "RESPUESTA:\n";
    var contador = contar_de_a;

    while(contador <= contar_hasta){
        respuesta = respuesta + "Contador: " + contador + "\n";
        contador = contador + contar_de_a;
    }

    return alert(respuesta);
}