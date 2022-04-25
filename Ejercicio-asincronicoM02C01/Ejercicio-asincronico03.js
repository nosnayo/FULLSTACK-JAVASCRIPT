/* Calcular Dias Vividos*/
function calcularDiasVividos() {
    var edad = parseInt(document.getElementById('edad').value);
    var diasVividos = edad * 365;
    
    alert("Ingresaste [" + edad + "] años de Edad" + ", entonces has vivido " + diasVividos + " días.");
}