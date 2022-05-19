var Contador = (
    function() {
        var llevoLaCuenta = 0;

        function sumarValor(valor){
            llevoLaCuenta += valor;
        }
        return {
            incrementar: function(){
                sumarValor(1);
            },
            descrementar: function(){
                sumarValor(-1);
            },
            devuelveElValor: function(){
                return llevoLaCuenta;
            }
        }
    }
)();
//Funciones  aplicando ENCAPSULACION
console.log(Contador.devuelveElValor());
Contador.incrementar();
Contador.incrementar();
console.log(Contador.devuelveElValor());


