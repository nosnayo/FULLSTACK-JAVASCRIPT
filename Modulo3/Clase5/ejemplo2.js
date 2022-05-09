//IDENTIFICAR ELEMENTOS Y PINTARLOS (CASO POR EL NOMBRE DEL ELEMENTO)
$(document).ready( function() {
    //$('ul.todos > li > ul > li').css('color', 'red');
    //$('ul.todos > li > ul > li > ul > li:nth-child(2n+1)').css('color', 'red');
    //$('ul.todos > li > ul > li > ul > li:eq(3)').css('color', 'red');
    
    //NO FUNCIONO PINTAR 3 ELEMENTO DEL SEGUNDO UL
    $('ul.segundo > li:nth-child(3)').css('color', 'red');

});