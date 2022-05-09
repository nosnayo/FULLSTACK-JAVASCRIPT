function arregloDeObjetos(numeroP, parametroP){
    var arreglo = [];
    //Recorrer para insertar N Atributos
    for(var i = 1; i <= numeroP; i++){
        //Insertar Atributos a Arreglo
        arreglo.push({ [parametroP] : i});
    }
    console.log(arreglo);
}

arregloDeObjetos(5, "hola");
arregloDeObjetos(3, "chau");