
const http = require('http');

//Creando servicios
const servidorWeb = http.createServer( (request, response) => {
    //configuraciones
    response.writeHead(200);
    response.end("Hola Mundo");
});

//conection a puerto.
const PORT = 8008;
//usando el puerto
servidorWeb.listen(PORT);
console.log(`Estoy escuchando por el puerto ${PORT}`);

