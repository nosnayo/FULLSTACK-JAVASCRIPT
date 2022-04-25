//Ver si se Jubila o no
function verificarJubilacion() {
    var sexo = document.getElementById('sexo').value;
    var edad = parseInt(document.getElementById('edad').value);
    
    if((sexo=="Femenino" && edad>=60) || (sexo=="Masculino" && edad >= 65)){
        alert("Ud. esta en Edad de poder jubilarse!");
    }else{
        alert("Ud. NO esta en Edad de poder jubilarse!");
    }

}