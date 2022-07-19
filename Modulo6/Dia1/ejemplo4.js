const fs = require('fs');

let poema = "hoy esta soliado" + " haber si lo guarda"

fs.writeFile('poemaNelson.txt', poema, (err) => {
    if (err) throw err;

    console.log("Se guardó correctamente");
});