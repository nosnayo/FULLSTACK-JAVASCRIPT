//AsincronicoM03C04 - PARTE 3

//AL CARGAR PAGINA
$(document).ready(function () {
    obtenerChiste();
    function obtenerChiste(){
    //LLAMADA A FUNCION GETJSON, CONSUMO DE API
        $.getJSON("https://api.chucknorris.io/jokes/random", function (data) {
            $('.chiste').text(data.value);  
        });    
    }
    
    //PARA ACTUALIZAR, Y SOLICTAR NUEVO CHISTE
    $('button').on('click', function(){
        //location.reload(true);
        obtenerChiste();
    })
    
})