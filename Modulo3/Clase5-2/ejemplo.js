
//Mostrar alertas 3 veces pero desde un arreglo
function mostrarAyuda(help){
    document.getElementById('help').innerHTML= help;
}

//Aqui creamo un contexto Distinto
function callBackDeMostratAyuda(help){
    //Tenemo un CLOSURE Distinto
    return function(){
        mostrarAyuda(help);
    }
}


function setearAyuda(){
    var arregloDeAyuda = [
        {   'id': 'email', 'help': "La dirección de correo es obligatoria"  },
        {   'id': 'nombre', 'help': "Debe completar el nombre"  },
        {   'id': 'edad', 'help': "La edad debe ser mayor a 18 añor"    }
    ];

    for(var i=0; i<arregloDeAyuda.length; i++){
        var item = arregloDeAyuda[i];
        document.getElementById(item.id).onfocus = callBackDeMostratAyuda(item.help);
        
        //document.getElementById(item.id).onfocus = function(){
        //    mostrarAyuda(item.help);
        //}
    }
};

setearAyuda();
