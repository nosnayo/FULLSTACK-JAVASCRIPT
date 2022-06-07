/*
    Ejercicio For . Generar una Z de impresion
*/
let n = 10;
let x = 1;
var resultado = "";
for(let i=0; i<n;i++){
    for(let j=0; j<n; j++){
        if((i == 0) || (i == (n-1)) ){
            resultado+="*";
        }
        else if(j == ((n-1) - x)){
            resultado+="*";
            x++;
        }else{
            resultado+=" ";
        }
    }
    resultado+="\n";
}
console.log(resultado);