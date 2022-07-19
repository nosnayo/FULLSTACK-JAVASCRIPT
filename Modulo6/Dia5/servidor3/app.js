const express = require('express')
const app = express()

//Para manejar la solicitud de HTTP POST, se debe usar módulo de middleware llamado body-parser.
const bodyParser = require('body-parser')
 
//especificamos el subdirectorio donde se encuentran las páginas estáticas (especificar los recursos estaticos)
app.use(express.static(__dirname + '/public'))
 
//Para parsear. extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(bodyParser.urlencoded({ extended: false }))
 
// Mostrar página con números y links (para mostrar tablas posteriormente)
//function llamada desde el formulario
app.post('/mostrarnumeros', (req, res) =>
{
    console.log("Valor= " + req.body.numero1);
    //recibir valores 
    let num1 = req.body.numero1;
    let num2 = req.body.numero2;
    //asignacion parseint
    num1 = parseInt(num1);
    num2 = parseInt(num2);
 
    //Para entregar resultado, va armando la pagina
    let pagina = '<!doctype html><html><head></head><body>';
 
    for (let x = num1; x<= num2; x++) {
        //desplega posibles tablas a seleccionar de num1 a num2
        pagina += `<a href="/mostrartabla?valor=${x}">${x}</a> - `;
    };
    pagina += '</body></html>';
 
    res.send(pagina);
});
 
// Método para mostrar las tablas (dependiendo del número)
app.get('/mostrartabla', (req, res) =>
{   //recuperar valor
    let num = req.query.valor;
    num = parseInt(num); // a agregar
    let pagina = '<!doctype html><html><head></head><body>';
    // x a agregar
    for (let x = 1; x <= 10; x++) {
        let tabla = num * x;    //a agregar
        pagina += `${num} * ${x} = ${tabla} <br>`;
    }
    pagina += '<a href="index.html">Retornar</a>';
    pagina += '</body></html>';
    res.send(pagina);
});
 
//Uso del Servicio 
var server = app.listen(2022, () => {
    console.log("Servidor web iniciado");
});//min 3:09:50