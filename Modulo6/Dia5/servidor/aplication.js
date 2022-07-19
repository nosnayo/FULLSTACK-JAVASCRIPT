const { response } = require('express');
const express = require('express');
//constante app con el servidor express ya funcionando.
const app = express();

//referencia a recurso estatico public
app.use(express.static(__dirname + "/public"));
//recibe los errores y los envia a una pagina
app.use( (request, response, next) => {
    response.status(404).sendFile(__dirname + "/public/404.html");
});

// Método get con una respuesta por defecto
app.get('/', (request, response) =>
{
    console.log("Entramos a esta opción, saludos");
});

app.get('/ejemplo', (request, response) => 
{
    response.send("Hola plataforma 5");
});

const PORT = 2022;
//En la siguiente funcion podemos enviar lo que queremos
app.listen(PORT, () => 
{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
