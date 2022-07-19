const { Client } = require('pg');

//Function para conectar a BD
function conectarBBDD() {

    const conectionPG = {
        host: 'localhost',
        user: 'postgres',
        password: 'nelson',
        database: 'postgres',
        port: '5432',
    };

    const crudPG = new Client(conectionPG);
    crudPG.connect();

    return crudPG;
}
//Function para desconectar a BD
function desconectarBBDD(conexion) {
    conexion.end();
}

// Exportación de Módulos
module.exports = { conectarBBDD, desconectarBBDD };
