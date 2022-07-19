const express = require('express');
const fbd = require('../Dia3/conectionRegiones');

const app = express();
//forma para utilizar un nuevo servicio
app.get('/', (request, response) => 
{
    response.send("Hola plataforma 5")
})

app.get('/equipo', (request, response) => 
{
    response.send("<p style='color:blue'>El mejor equipo Chillan</p>")
})

app.get('/prueba', (request, response) => 
{
    response.send("Hola plataforma 5")
})

app.get('/mostrarclientes', (request, response) =>
{
    response.send("<h1>Estoy mostrando clientes</h1>")
})

// Confección de un insert para una tabla determinada
app.get('/insertarRegion', (request, response) => {
    const cone = fbd.conectarBBDD();
    let sqlConsulta = "insert into region2 (id, nombre) values (6, 'Stgo')";
    //console.log(sqlConsulta);
    cone.query(sqlConsulta)
        .then(respuesta => {
            response.send("Se ingresó correctamente")
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            response.send("Hicimos la morición")
            response.send(error)
            fbd.desconectarBBDD(cone);
        });
});

// Confección de una consulta general
app.get('/consultarRegiones', (request, response) => {
    //let arregloRegion = [];
    const cone = fbd.conectarBBDD();
    cone.query('select * from region2')
        .then(respuesta => {
            //Se optimizo a un arreglo de respuesta
            //arregloRegion.push(respuesta.rows)
            response.send(respuesta.rows)
            fbd.desconectarBBDD(cone);
            //return arregloRegion
        })
        .catch( error => {
            response.send("Hicimos la morición")
            response.send(error)
            fbd.desconectarBBDD(cone);
        });
});

const PORT = 8008;
//listen es que escucha por ese puerto indicado.
app.listen(PORT, () => 
{   //alt96
    console.log(`Servidor escuchando en el puerto ${PORT}`)
});
