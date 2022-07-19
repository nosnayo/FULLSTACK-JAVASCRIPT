// {} =  notación llamada destructuración para los objetos
const { Client } = require('pg');
const express = require('express');
const app = express();
 
const conectionPG = {
    host: 'localhost',
    user: 'postgres',
    password: 'nelson',
    database: 'postgres',
    port: '5432',
};
//Para manejar la solicitud de HTTP POST, se debe usar módulo de middleware llamado body-parser.
const bodyParser = require('body-parser')
 
//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))
 
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
//Para serializar. body-parserestá a punto de cambiar el valor predeterminado extendedde trueafalse . El protocolo extendido usa la biblioteca para analizar x-www-form-urlencodedlos datos.
app.use(bodyParser.urlencoded({ extended: false }))
 
/* ENRUTAMIENTO */
 
app.post('/ingresarRegionAction', (req, res) => {
 
    let numRegion = req.body.numeroRegion;
    let nomRegion = req.body.nombreRegion;
 
    numRegion = parseInt(numRegion);
 
    let sqlIngreso = "insert into region (id, nombre) values (" + numRegion + ", '" + nomRegion + "')";
    const insertRegion = new Client(conectionPG);
    insertRegion.connect();
 
    insertRegion.query(sqlIngreso)
    .then( respuesta =>
        {
            console.log("Se ingresó la Región");
            insertRegion.end();
            //res.send("Se ingresó la Región");
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            insertRegion.end();
        });
 
       let paginaExito = '<!doctype html><head></head><body>';
       paginaExito += '<h3>la región se ha grabado exitosamente</h3>';
       paginaExito += '<br>';
       paginaExito += '<a href="http://localhost:2022/region.html">Regresar<a>';
       paginaExito += '</body></html>';
    
       res.send(paginaExito);

  });
 
//Mostar las Regiones
app.get('/mostrarRegionesAction', (req, res) => {
    let sqlConsulta = "select * from region";

    const consultaRegiones = new Client(conectionPG);
    consultaRegiones.connect();
    
    consultaRegiones.query(sqlConsulta)
    .then( respuesta =>
        {
            //console.log(respuesta.rows);
            
            let paginaExito = '<!doctype html><html><head></head><body>';
            paginaExito += '<h3>Las regiones son las siguientes:</h3>';
            paginaExito += '<br>';
            paginaExito += '<table border=1>';
            paginaExito +=      '<tr>';
            paginaExito +=          '<th>Id Región</th>';
            paginaExito +=          '<th>Nombre Región</th>';
            paginaExito +=          '<th>Eliminar</th>';
            paginaExito +=          '<th>Editar</th>';
            paginaExito +=      '</tr>';
            //paginaExito += respuesta.rows;
            for (let i=0; i<respuesta.rows.length; i++){
                paginaExito +=  '<tr>';
                paginaExito +=      '<th>' + respuesta.rows[i].id + '</th>';
                paginaExito +=      '<th>' + respuesta.rows[i].nombre + '</th>';
                paginaExito +=      '<th><a href=eliminarRegionAction?id=' + respuesta.rows[i].id + '> Eliminar región</a></th>';
                paginaExito +=      '<th><a href=editarRegionAction?id=' + respuesta.rows[i].id + '> Editar región</a></th>';
                paginaExito +=  '</tr>';
                //MOSTRAR POR TERMINAL
                //console.log(respuesta.rows[i].id);
                //console.log(respuesta.rows[i].nombre);
            };
            paginaExito +='</table>';
            paginaExito += '<br>';
            paginaExito += '<a href="http://localhost:2022/region.html"> Volver</a>';
            paginaExito += '</body></html>';
            
            res.send(paginaExito);
            consultaRegiones.end();
            //res.send("Se ingresó la Región");
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            consultaRegiones.end();
        });

});

//Editar una Región en la BBDD 
app.get('/editarRegionAction', (req, res) =>{

    //Agarrar algo que viene de la URL
    const host = "localhost";
    //Crea URL variable
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    let idRegion = 0;

    //solo imprimir valores recibidos de la URL (Obtener valores)
    miURL.searchParams.forEach( (id, nombre) =>
    {
        idRegion = id;
        console.log(`${id} ${nombre}`);
    });

    //parseo
    idRegion = parseInt(idRegion);

    let paginaExito = '<!doctype html><html><head></head><body>';
        paginaExito += '<h3>Editar Región:</h3>';
        paginaExito += '<br>';
        paginaExito += '<form action="editarNombreRegionAction" method="post">';
        paginaExito += 'ID de la Región:' + idRegion;
        paginaExito += '<br>';
        paginaExito += 'Ingrese el Nuevo Nombre de la Región:';
        paginaExito += '<br>';
        paginaExito += '<input type="text" name="nuevoNombreRegion" size="50"><br></br>';
        paginaExito += '<input type="submit" value="Modificar Región">';
        //Uso de imput con tipo hidden
        paginaExito += '<input name="idRegion" type="hidden" value="' + idRegion + '"></input>'
        paginaExito += '</form>';
        paginaExito += '</body>';
        paginaExito += '</html >';

        res.send(paginaExito);
});

//Editar nombre una Región en la BBDD (UPDATE)  (se copio de eliminar action)
app.post('/editarNombreRegionAction', (req, res) => {
    console.log("editarNombreRegionAction");
    //Recibir datos de Formulario
    let numRegion = req.body.idRegion;
    let nomRegion = req.body.nuevoNombreRegion;
    //verificar la captura de datos
    console.log(numRegion);
    console.log(nomRegion);

    //TRUCO, componente html hiden. componente que no se vee pero guarda valores
 
    numRegion = parseInt(numRegion);
 
    let sqlEditar = "update region set nombre='" + nomRegion + "' where id = "  + numRegion + "";
    console.log(sqlEditar);
    const editarRegion = new Client(conectionPG);
    editarRegion.connect();
 
    editarRegion.query(sqlEditar)
    .then( respuesta =>
        {
            console.log("Se editó la Región");
            editarRegion.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            editarRegion.end();
        });
 
    //refresca la tabla, yo use setTime para la actualizacion y espera. function callback definido vacio.
    setTimeout(function(){}, 3000);
    res.redirect('mostrarRegionesAction');
});

//Eliminar una Región en la BBDD
app.get('/eliminarRegionAction', (req, res) =>{

    const host = "localhost";
    //Crea URL variable
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    let idRegion = 0;

    //solo imprimir valores recibidos de la URL
    miURL.searchParams.forEach( (id, nombre) =>
    {
        idRegion = id;
        console.log(`${id} ${nombre}`);
    });
    console.log(idRegion);

    //parseo
    idRegion = parseInt(idRegion);

    //Proceso de eliminacion
    let sqlDelete = "delete from region where id = " + idRegion + "";
    console.log(sqlDelete);
    const deleteRegion = new Client(conectionPG);
    deleteRegion.connect();

    deleteRegion.query(sqlDelete)
    .then( respuesta => 
        {
            console.log("Se eliminó la Región");
            deleteRegion.end();
        })
    .catch( error => 
        {
            console.log("Hicimos la Morición");
            console.log(error);
            deleteRegion.end();

        });

    res.redirect('mostrarRegionesAction');
});


/* INICIO DEL SERVIDOR */
 
var server = app.listen(2022, () => {
    console.log('Servidor web iniciado')
})