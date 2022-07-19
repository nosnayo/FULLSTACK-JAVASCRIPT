//Invoca libreria que tiene instalada
// Client parte de la sintaxi debe ser una variable objeto
const { Client } =require('pg');

function conectarBBDD(){
    //Crea un objeto conexion para pasar los datos
    const conectionPG = {
        host: 'localhost',
        user: 'postgres',
        password: 'nelson',
        database: 'postgres',
        port: '5432',
    };

    const crudPG = new Client(conectionPG)
    crudPG.connect();

    return crudPG;
}

function desconectarBBDD(conexion){
    conexion.end();
}

module.exports = { conectarBBDD, desconectarBBDD };