const delegateBD = require('./ejemploRegiones');

// Funcion del delegate para consultar regiones
function consultarRegiones() {
    let resultado = delegateBD.consultarRegiones();
    for(let i=0; i <= resultado.length ;i++) 
    {    console.log(element[i]);    
    };
    
}

consultarRegiones();

//LLAMADA A LAS FUNCIONES
//eliminarRegion(2);
//insertarRegion(2, "Antofagasta");
//actualizarRegion(1, "Tarapaca y nada mas");
//consultarRegiones();
