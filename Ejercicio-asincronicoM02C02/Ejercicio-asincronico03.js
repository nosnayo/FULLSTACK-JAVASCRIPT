//PAR o IMPAR
function verificarParImpar() {
    var numero = parseInt(document.getElementById('numero').value);
    if(numero%2==0){
        alert("Su numero[" + numero + "]\t" + "Es par")
    }else{
        alert("Su numero[" + numero + "]\t" + "Es impar")
    }
}