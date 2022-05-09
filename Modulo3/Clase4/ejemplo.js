$(document).ready( function() 
{

    $.ajax( {
        type: "GET",
        url: "https://mindicador.cl/api",
        dataType: "json",
        success: function (data) {
            $('#valorUF').text(data.uf.valor);
        }
    });

});
