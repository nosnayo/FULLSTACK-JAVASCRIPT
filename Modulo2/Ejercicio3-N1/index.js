let minuto = 5;
let minutero = 1;
let segundos = 60;
let segundero = 1;

while(minutero <= minuto){
    while(segundero < segundos){
        console.log(minutero + " minutos, " + segundero + " segundos.");
        segundero++;
    };
    segundero = 1;
    minutero++;
}