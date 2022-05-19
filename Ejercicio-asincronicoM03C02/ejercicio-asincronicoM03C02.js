
function diaSemana(){
    //Array para dia en string
    const dias=["domingo", "lunes", "martes", "miercoles", "jueves", "viernes", "sabado"];

    //Obtener fecha Ingresada
    var getDia = document.getElementById('verFecha').value;
    //Dia a ver, ingresar hra segun ubicacion geografica
    var dt = new Date(getDia +' 17:00:00');
    //Resultado en vista, uso de getDay para obtener dia en entero.
    document.getElementById('resultadoDia').innerHTML = "Dia de la semana : " + dias[dt.getDay()];
    alert('Fecha Ingresada: ' + dt.toLocaleDateString() + '\nCorresponde a Dia de la semana : ' + dias[dt.getDay()]);
}