const { response } = require('express');
const express = require('express');
//constante app con el servidor express ya funcionando.
const app2 = express();

// Configuración del motor de plantillas EJS
app2.set('view engine', 'ejs');
app2.set('views', __dirname + '/views');//dirname es nuestra carpeta actual

// Método get con una respuesta por defecto
app2.get('/', (request, response) =>
{
    console.log("Entramos a esta opción, saludos");
});

// Método para probar nuestro primer ejs
app2.get('/ejemplo', (req, res) => 
{   //La pagina puede ser configurable con titulo
    res.render("index", {titulo: "Enorme y Glorioso equipo Chillan"});
});

//Método para probar otra URL con ejs
app2.get('/lenguajes', (req, res) => 
{
    res.render("lenguajeProgramacion", {descripcion: "Curso JS, nivel experto"});
});

//Método para manejar una página de error
//recibe los errores y los envia a una pagina
app2.use( (req, res, next) => {
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Hicimos la morición"
    });
});

//Iniciar Servicios
const PORT = 2022;
//En la siguiente funcion podemos enviar lo que queremos
app2.listen(PORT, () => 
{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});