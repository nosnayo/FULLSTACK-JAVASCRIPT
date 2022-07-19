const fbd = require('./conectionRegiones');

// Confección de una consulta general
function consultarRegiones() {
    let arregloRegion = [];
    const cone = fbd.conectarBBDD();
    cone.query('select * from region2')
        .then(respuesta => {
            //Se optimizo a un arreglo de respuesta
            arregloRegion.push(respuesta.rows)
            //console.log(respuesta.rows)
            fbd.desconectarBBDD(cone);
            return arregloRegion
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}

// Confección de un delete para la tabla en la que está trabajando
function eliminarRegion(id) {
    const cone = fbd.conectarBBDD();
    cone.query("delete from region2 where id='"+ id + "'")
        .then(respuesta => {
            console.log("Se eliminó correctamente")
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}
// Confección de un insert para una tabla determinada
function insertarRegion(id, nombre) {
    const cone = fbd.conectarBBDD();
    let sqlConsulta = "insert into region2 (id, nombre) values ("+ id + ", " + "'" + nombre + "')";
    console.log(sqlConsulta);
    cone.query(sqlConsulta)
        .then(respuesta => {
            console.log("Se ingresó correctamente")
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}
// Confección de una actualizacion para una tabla determinada
function actualizarRegion(id, nombre) {
    const cone = fbd.conectarBBDD();
    let sqlUpdate = "update region2 set nombre='" + nombre + "' where id=" + id;
    console.log(sqlUpdate);
    cone.query(sqlUpdate)
        .then(respuesta => {
            console.log("Se actualizó correctamente")
            fbd.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fbd.desconectarBBDD(cone);
        });
}

//Exportación de Módulos
module.exports = { consultarRegiones, eliminarRegion, insertarRegion, actualizarRegion }
