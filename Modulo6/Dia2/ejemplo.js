//importar function modularizado
const fdb = require('./conection');

//Conección de una consulta general
function hacerSelect(tabla){
    const cone = fdb.conectarBBDD();
    cone.query('select * from ' + tabla)
        .then(respuesta => {
            console.log(respuesta.rows)
            //crudPG.end();
            fdb.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            //crudPG.end()
            fdb.desconectarBBDD();
        });
}

// Confección de un delete para la tabla en la que está trabajando
function eliminar(nombre){
    const cone = fdb.conectarBBDD();
    cone.query("delete from gatito where nombre='" + nombre + "'")
        .then(respuesta => {
            console.log("Se eliminó correctamente")
            console.log(respuesta.rows)
            //crudPG.end();
            fdb.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            //crudPG.end()
            fdb.desconectarBBDD(cone);
        });
}

// Confección de un insert para una tabla determinada
function insertar(id, nombre) {
    const cone = fdb.conectarBBDD();
    let sqlConsulta = "insert into gatito (id, nombre) values ("+ id + ", " + "'" + nombre + "')";
    console.log(sqlConsulta);
    cone.query(sqlConsulta)
        .then(respuesta => {
            console.log("Se ingresó correctamente")
            //crudPG.end();
            fdb.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            //crudPG.end();
            fdb.desconectarBBDD(cone);
        });
}

// Confección de una actualizacion para una tabla determinada
function actualizar(id, nombre) {
    const cone = fdb.conectarBBDD();
    let sqlUpdate = "update gatito set nombre='" + nombre + "' where id=" + id;
    console.log(sqlUpdate);
    cone.query(sqlUpdate)
        .then(respuesta => {
            console.log("Se actualizó correctamente")
            fdb.desconectarBBDD(cone);
        })
        .catch( error => {
            console.log("Hicimos la morición")
            console.log(error)
            fdb.desconectarBBDD(cone);
        });
}

//LLAMADA A LAS FUNCIONES (Se ensapsularon las operaciones)
//insertar(1, "Doraemon");
//insertar(2, "Gato Felix");
//actualizar(1, "gato regalito");
hacerSelect('gatito');




