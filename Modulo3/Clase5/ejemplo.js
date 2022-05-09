//CAPTURA DE PARRAFOS

//CAPTURA DE CLICK EN BUTTON
let boton = document.getElementById("boton");
boton.addEventListener("click", function(){
//ALTERNATIVA NO FUNCIONA
//boton.click( function(){
         alert("Click sobre el boton");

})

//SE EJECUTA CADA VEZ QUE LA PAGINA SE RECARGA
$(document).ready( function(){
    
    let titulo_1 = $('#titulo_1');
    let titulo_2 = $('#titulo_2');
    let titulo_3 = $('#titulo_3');
    let texto_1 = $('#texto_1');
    let boton = $('#boton');

    console.log(titulo_1);
    console.log(titulo_2);
    console.log(titulo_3);
    console.log(texto_1);
    console.log(boton);
})
//LLAMADA QUERY MEDIANTE CLASS
$(document).ready(function(){
    let titulos = $('.titulos');
    console.log(titulos);
})