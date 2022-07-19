 const fs = require('fs');

 let poema = "Está lloviendo, está lloviendo, está lloeviendo,¡ojalá siempre esté lloviendo " +  
 " esté lloviendo siempre y el vendaval desenfrenado ... que yo soy íntegro" + " se asocie a la personalidad popular del huracán!";

 fs.writeFile('poemaPdR.txt', poema, (err) => {
     if (err) throw err;

     console.log("Se guardó correctamente");
 });