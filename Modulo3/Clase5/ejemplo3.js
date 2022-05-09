//DAR COLOR EN DIV MEDIANTE JQUERY
//no funciona
$(document).ready(function(){
    let miCaja = $('.micaja');
    //On como prender
    miCaja.on('mouseenter', function(){
        $(this).css('background-color', 'red');
    });
    miCaja.on('mouseleave', function(){
        $(this).css('background-color', 'white');
    });

    let miCajita = $('.micajita');
    //On como prender
    miCajita.on('mouseenter', function(){
        $(this).css('background-color', 'green');
    });
    miCajita.on('mouseleave', function(){
        $(this).css('background-color', 'blue');
    });

    //IMPRIMIR PRESIONANDO BUTTON
    
    $('button').on('click', function(){
        //IMPRIMIR EN HTML MEDIA JQUERY
        //$('p').text("El grandisimo equipo Chillan");
        //CONSUMO DE API
        //$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function(data) {
        $.getJSON("https://api.chucknorris.io/jokes/random", function(data) {
            console.log(data.value);
        });

    })
      
});
