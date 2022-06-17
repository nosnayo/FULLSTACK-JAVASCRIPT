 
// Dibujar la tabla del 1 (1, 12)
 
/*
 
1 * 1 = 1;
1 * 2 = 2;
1 * 3 = 3;
 
...
 
*/
 
 
var tabla = 1;
var limiteInferior = 1;
var limiteSuperior = 10;
 
for (let iteradorI=limiteInferior; iteradorI<=limiteSuperior; iteradorI++) { // 1, 2, 3 ... 13
   
    console.log("**** Tabla del " + iteradorI + " *****");
 
    for (let iteradorJ=limiteInferior; iteradorJ<=10; iteradorJ++) {
        if (iteradorJ%2)
            console.log(iteradorI + " * " + iteradorJ + " = " + iteradorI*iteradorJ); // 1*1=1,1*2=2 ...1*12=12
    }  
 
}