//istalacion de libreria para el manejo de bd
//npm install pg
//Node tiene un gestor de paquete para instalaciones.


//Invoca libreria que tiene instalada
// Client parte de la sintaxi debe ser una variable objeto
const { Client } =require('pg');

//Crea un objeto conexion para pasar los datos
const conectionPG = {
    host: 'localhost',
    user: 'postgres',
    password: 'nelson',
    database: 'postgres',
    port: '5432',
};

//Crea una nueva conexion de base de datos
//basedatos es un constructor
const consultaPG = new Client(conectionPG);

//invocar el metodo connect que abre la conexion como tal.
consultaPG.connect();

const insert = "insert into usuario(id, email) values (10, 'usuari010@gmail.com')";

consultaPG.query(insert)
//El metodo responde como una promesa
//la promesa se captura con un then y un catch
    .then(respuesta => {
        console.log(respuesta.rows)
        //cierra la conexion
        consultaPG.end();
    })
    .catch(err => {
        console.log(err)
        consultaPG.end();
    })