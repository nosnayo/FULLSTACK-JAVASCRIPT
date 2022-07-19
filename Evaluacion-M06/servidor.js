/** Realizar Importaciones Repositorio y definiciones*/
const PORT = 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs'); //se importa módulo file system.
const { dirname } = require('path');
const axios = require('axios').default;
//manera de ocultar ID de bases de datos secuenciales.
const { v4 : uuidv4 } = require('uuid');
//Importar modulos master
const { newRoommate, saveRoommate, saveGasto } = require('./moduloMaster.js');

/** Definir ubicacion de recursos en public */
app.use(express.static(__dirname + '/public'));
/** Para Parseo de codigo recibido por la URL */
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * Rutas de Servidor
 */
/** 1. Documento Html */
app.get('/', (request, response) => 
{   
    response.redirect(__dirname + 'index.html');
})

/** 2. Generar y Almacenar Nuevo roommate */
app.post('/roommates', (request, response) => {   
    //Funcion de moduloMaster, uso de Promesa.
    newRoommate()
        .then( (ranRoommate) => {
            //Funcion de moduloMaster, Registrar nuevo roomate
            saveRoommate(ranRoommate);
            //JSON.stringify, convierte un objeto o valor de JavaScript en una cadena de texto JSON
            response.end(JSON.stringify(ranRoommate));
        })
        .catch((err) => {
            response.statusCode = 500;
            response.end();
            console.log(err);
        });
});

/** 3- Devolver Todos los roommate almacenado. */
app.get('/roommates', (request, response) => {
    response.end(fs.readFileSync('roommates.json', 'utf8'));
});

/** 4. Actualización de registro. de historial de gastos */
app.post('/gasto', (request, response) => {
    try {
        let gasto = {
            id: uuidv4().slice(26),
            roommate: request.body.selectRoommate,
            descripcion: request.body.descripcion,
            monto: parseInt(request.body.monto)
        };    
        const gastosJSON = JSON.parse(fs.readFileSync('gastos.json', 'utf8'));
        gastosJSON.gastos.unshift(gasto);
        console.log(JSON.stringify(gastosJSON));
        fs.writeFileSync('gastos.json', JSON.stringify(gastosJSON));
        //Generar registro de agregar, para "Agregar gastos"
        saveGasto(request.body);

        let paginaExito = `<!DOCTYPE html>
        <html lang="es">     
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css">
            <link rel="stylesheet" href="style.css">
            <title>Gasto guardado con éxito</title>
        </head>
        <body>
            <h4>El gasto por concepto de ${request.body.descripcion}, cuyo monto es de: $ ${request.body.monto} pesos, pagado por ${request.body.selectRoommate}, ha sido guardado con éxito.</h4>
            <p> <a href="http://localhost:8080"> Volver al panel principal </a> </p>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"></script>
        </body>
        
        </html>`;
        response.send (paginaExito);
    } catch (err) {
        console.log(err);
    };   
});

/** 4. Devuelve el historial con todos losgastos registrados. */
app.get('/gastos', (request, response) => 
{  
    const gastosJSON = JSON.parse(fs.readFileSync('gastos.json', 'utf8'));
    response.end(JSON.stringify(gastosJSON));
});

/** 6. Elimina un gasto del historial. */
app.delete('/gasto', (request, response) => {
    console.log(request.query.id);
    const id = request.query.id;
    const gastosJSON = JSON.parse(fs.readFileSync('gastos.json', 'utf8'));
    gastosJSON.gastos = gastosJSON.gastos.filter((gasto) => gasto.id !== id);
    fs.writeFileSync("gastos.json", JSON.stringify(gastosJSON));
    response.end();
});

/** Consumiendo servicio en puerto 8080 */
app.listen(PORT, () => 
{
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
