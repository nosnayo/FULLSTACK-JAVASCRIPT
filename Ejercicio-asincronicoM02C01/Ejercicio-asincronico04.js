//Caculadora de Abastecimiento Maximo - Snacks
function calculadoraAbastecimiento() {

    var edadMaxima = parseInt(document.getElementById('edadMaxima').value);
    var snacks = document.getElementById('snacks').value;
    var cantidadDiaria = parseInt(document.getElementById('cantidadDiaria').value);
    var precio = parseInt(document.getElementById('precio').value);
    var snacksMaximo = cantidadDiaria * edadMaxima * 365 ;
    var precioMaximo = snacksMaximo * precio;

    alert("Su Edad Maxima es: [" + edadMaxima + "]\nSu consumo Diario es: [" + cantidadDiaria + "]\n\nRESULTADO:\nConsumo total de: " + snacksMaximo + " [" + snacks + "]\nGasto por vida: $" + precioMaximo);
}