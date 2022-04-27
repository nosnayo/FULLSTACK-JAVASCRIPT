function sumArray(){
    var arreglo = document.getElementById("arreglo").value.split(',');
    var contador = 0;
    var resultado = 0;

    while(contador < (arreglo.length)){
        resultado = resultado + parseInt(arreglo[contador]);
        contador++;
    }
    return alert(resultado);
}

//var arreglo = [1,2,3];
//sumArray(arreglo);
//sumArray([10, 3, 10, 4]);
//sumArray([-5,100]);