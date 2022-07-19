/* PARTE 1 */
const { Client } = require('pg');
const express = require('express');
const app = express();

/* PARTE3 */
const conectionPG = {
    host: 'localhost',
    user: 'postgres',
    password: 'nelson',
    database: 'postgres',
    port: '5432',
};

/* PARTE2 */
//Para manejar la solicitud de HTTP POST, se debe usar módulo de middleware llamado body-parser.
const bodyParser = require('body-parser')
//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'))
//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
//Para serializar. body-parserestá a punto de cambiar el valor predeterminado extendedde trueafalse . El protocolo extendido usa la biblioteca para analizar x-www-form-urlencodedlos datos.
app.use(bodyParser.urlencoded({ extended: false }))

/* PARTE 4 */
//Ingresar
app.post('/ingresarPokemonAction', (req, res) => {
    /* PARTE DEL 5 */
    let numeroPokemon = req.body.numeroPokemon;
    let nombrePokemon = req.body.nombrePokemon;
    let tipoPokemon = req.body.tipoPokemon;
 
    numeroPokemon = parseInt(numeroPokemon);
    /* PARTE DEL 6 */
    let sqlIngresoPokemon = "insert into pokemonGO (id, nombre, tipo) values (" + numeroPokemon + ", '" + nombrePokemon + "', '" + tipoPokemon + "')";
    
    /* PARTE DEL 7 */
    const insertPokemon = new Client(conectionPG);
    insertPokemon.connect();

    insertPokemon.query(sqlIngresoPokemon)
    .then( respuesta =>
        {
            console.log("Se ingresó la Pokemon");
            insertPokemon.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            insertPokemon.end();
        });
 
        /* PARTE DEL 8 */
        let paginaExito = '<!doctype html><head></head><body>';
        paginaExito += '<h3>la pokemon se ha grabado exitosamente</h3>';
        paginaExito += '<br>';
        paginaExito += '<br>';
        paginaExito += '<a href="http://localhost:2022/pokemon.html">Regresar<a>';
        paginaExito += '</body></html>';

        res.send(paginaExito);
});

/** PARTE 9 */
//Mostar
app.get('/mostrarPokemonesAction', (req, res) => {
    /** PARTE 10 */
    console.log("Entramos en mostrarPokemonesAction");
    let sqlConsulta = "select * from PokemonGo";
    /** PARTE 11 */
    const consultaPokemon = new Client(conectionPG);
    consultaPokemon.connect();
    
    consultaPokemon.query(sqlConsulta)
    .then( respuesta =>
        {
            //console.log(respuesta.rows);
            /** Parte 12 */
            let paginaExito = '<!doctype html><html><head></head><body>';
            paginaExito += '<h3>Los Pokemones son las siguientes:</h3>';
            paginaExito += '<br>';
            paginaExito += '<table border=1>';
            paginaExito +=      '<tr>';
            paginaExito +=          '<th>Id Pokemon</th>';
            paginaExito +=          '<th>Nombre Pokemon</th>';
            paginaExito +=          '<th>Tipo Pokemon</th>';
            paginaExito +=          '<th>Eliminar</th>';
            paginaExito +=          '<th>Editar</th>';
            paginaExito +=      '</tr>';
            //paginaExito += respuesta.rows;
            for (let i=0; i<respuesta.rows.length; i++){
                paginaExito +=  '<tr>';
                paginaExito +=      '<th>' + respuesta.rows[i].id + '</th>';
                paginaExito +=      '<th>' + respuesta.rows[i].nombre + '</th>';
                paginaExito +=      '<th>' + respuesta.rows[i].tipo + '</th>';
                paginaExito +=      '<th><a href=eliminarPokemonAction?id=' + respuesta.rows[i].id + '> Eliminar Pokemon</a></th>';
                paginaExito +=      '<th><a href=editarPokemonAction?id=' + respuesta.rows[i].id + '> Editar Pokemon</a></th>';
                paginaExito +=  '</tr>';
                //MOSTRAR POR TERMINAL
                //console.log(respuesta.rows[i].id);
                //console.log(respuesta.rows[i].nombre);
            };
            paginaExito +='</table>';
            paginaExito += '<br>';
            paginaExito += '<a href="http://localhost:2022/pokemon.html"> Volver</a>';
            paginaExito += '</body></html>';
            
            res.send(paginaExito);
            consultaPokemon.end();
            //res.send("Se ingresó la Región");
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            consultaPokemon.end();
        });

});
/** Parte 13 */
//Eliminar registro en la BBDD
app.get('/eliminarPokemonAction', (req, res) =>{
    /** Parte 14 */
    // Obtener Parametros como un objeto
    const host = "localhost";
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    /** Parte 15 */
    let idPokemon = 0;
    //recorrer el objeto
    miURL.searchParams.forEach( (id, nombre) =>
    {
        idPokemon = id;
        console.log(`${id} ${nombre}`);
    });
    console.log(idPokemon);
    //parseo
    idPokemon = parseInt(idPokemon);

    /** Parte 16 */
    //Proceso de eliminacion
    let sqlDelete = "delete from pokemonGO where id = " + idPokemon + "";
    console.log(sqlDelete);
    /** Parte 17 */
    const deletePokemon = new Client(conectionPG);
    deletePokemon.connect();

    deletePokemon.query(sqlDelete)
    .then( respuesta => 
        {
            console.log("Se eliminó la Pokemon");
            deletePokemon.end();
        })
    .catch( error => 
        {
            console.log("Hicimos la Morición");
            console.log(error);
            deletePokemon.end();

        });
    /** PARTE 18 */
    res.redirect('mostrarPokemonesAction');
});

/** Parte 19 */
//Editar una Región en la BBDD 
app.get('/editarPokemonAction', (req, res) =>{
    /** Parte 20 */
    //Agarrar algo que viene de la URL
    const host = "localhost";
    //Crea URL variable
    let miURL = new URL(`http://${host}:${req.url}`);
    const parametros = miURL.searchParams.values;

    /** PArte 21 */
    let idPokemon = 0;
    //solo imprimir valores recibidos de la URL (Obtener valores)
    miURL.searchParams.forEach( (id, nombre) =>
    {
        idPokemon = id;
        console.log(`${id} ${nombre}`);
    });
    //parseo
    idPokemon = parseInt(idPokemon);
    /** PARTE 22 */
    let paginaExito = '<!doctype html><html><head></head><body>';
        paginaExito += '<h3>Editar Pokemon:</h3>';
        paginaExito += '<br>';
        paginaExito += '<form action="editarNombreYTipoPokemonAction" method="post">';
        paginaExito += 'ID de Pokemon: ' + idPokemon;
        paginaExito += '<br>';
        paginaExito += '<br>';
        paginaExito += 'Ingrese el Nuevo Nombre de Pokemon:';
        paginaExito += '<br>';
        paginaExito += '<input type="text" name="nuevoNombrePokemon" size="50"><br></br>';
        paginaExito += 'Ingrese el Nuevo Tipo de Pokemon:';
        paginaExito += '<br>';
        paginaExito += '<input type="text" name="nuevoTipoPokemon" size="50"><br></br>';
        paginaExito += '<input type="submit" value="Modificar Pokemon">';
        //Uso de imput con tipo hidden para recibir el id
        paginaExito += '<input name="idPokemon" type="hidden" value="' + idPokemon + '"></input>'
        paginaExito += '</form>';
        paginaExito += '</body>';
        paginaExito += '</html >';

        res.send(paginaExito);
});

/** PARTE 23 */
//Editar nombre una Región en la BBDD (UPDATE)  (se copio de eliminar action)
app.post('/editarNombreyTipoPokemonAction', (req, res) => {
    /** PARTE 24 */
    console.log("editarNombreyTipoPokemonAction");
    //Recibir datos de Formulario
    let numeroPokemon = req.body.idPokemon;
    let nombrePokemon = req.body.nuevoNombrePokemon;
    let tipoPokemon = req.body.nuevoTipoPokemon;
    //verificar la captura de datos
    console.log(numeroPokemon);
    console.log(nombrePokemon);
    console.log(tipoPokemon);
    numeroPokemon = parseInt(numeroPokemon);
    
    /** PArte 25 */
    let sqlEditar = "update pokemonGO set nombre='" + nombrePokemon + "', tipo='" + tipoPokemon + "' where id = "  + numeroPokemon + ";";
    console.log(sqlEditar);
    /** PArte 26 */
    const editarPokemon = new Client(conectionPG);
    editarPokemon.connect();
    editarPokemon.query(sqlEditar)
    .then( respuesta =>
        {
            console.log("Se editó la Pokemon");
            editarPokemon.end();
        })
    .catch( error =>
        {
            console.log("Hicimos la Morición");
            console.log(error);
            editarPokemon.end();
        });
    /** Parte 27 */
    //refresca la tabla, yo use setTime para la actualizacion y espera. function callback definido vacio.
    setTimeout(function(){}, 3000);
    res.redirect('mostrarPokemonesAction');
});
/* INICIO DEL SERVIDOR */
 
var server = app.listen(2022, () => {
    console.log('Servidor web iniciado')
})


/*
PASOS:
1. importar las 3 libreria de express y pg / Agregar inicio de servidor
2. Paseo indicando donde esta la carpeta publica. con esto recien se reconoce el html (Son 3 lineas)
3. Agregar contenido de postgres conexion. nota: ya habia inportado la libreria 1.
4. Copia y pegar metodo INGRESAR. AQUI COMIENZA LAS RUTAS DE EXPRESS
5.      Recibir los valores y parseo de int.
6.      Hacer string para ingresar pokemon (el insert sql), mediante console verificar si esta bien el string insert
7.      llamar al cliente / aplicar la query y su promesa cerrando la conexion.
8.      Generar pagina de exito con su retorno.
9. Copia y Pegar Mostrar pokemon
10.     hacer consola de la nueva ruta / hacer string de select
11.     llamar al cliente / aplicar la query y su promesa cerrando la conexion.
12.     Generar pagina de exito con su retorno.
13. Copia y Pegar Eliminar Pokemon
14.     Obtener Parametro de URL.
15.     Recorrer el objeto recibido por URL / Hacer Parseo de los int.
16.     Hacer string para eliminar pokemon (el delete sql), mediante console verificar si esta bien el string
17.     llamar al cliente / aplicar la query y su promesa cerrando la conexion, Solo por consola imprimir ok operacion.
18.     redirecionar a la misma pagina de Mostrar.
19. Copia y Pegar Editar Registro.
20.     Obtener Parametro de URL.
21.     Recorrer el objeto recibido por URL / Hacer Parseo de los int.
22.     CONTRUIR PAGINA para editar.
23. Copiar y Pegar Editar nombre y tipo. (Update)
24.     Recibir los valores y parseo de int.
25.     Hacer string para updetear pokemon (el update sql), mediante console verificar si esta bien el string.
26.     llamar al cliente / aplicar la query y su promesa cerrando la conexion.
27.     Redirect a pagina inicial de mostrar. 
28. Pruebas Finalizado.

*/