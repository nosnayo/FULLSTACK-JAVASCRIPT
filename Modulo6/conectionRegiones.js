const { Client } = require('pg');

//Function para conectar a BD
function conectarBBDD() {

    const conectionPG = {
        user: 'postgres',
        password: 'maxhito',
        host: 'localhost',  // Localhost es MI COMPUTADOR
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
