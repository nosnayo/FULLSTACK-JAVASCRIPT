/*
    Conociendo Callback
*/
const deportistas = [
    {
        id:1,
        nombre:"Rodrigo"
    },
    {
        id:2,
        nombre:"Consuelo"
    },
    {
        id:3,
        nombre:"Sergio"
    },
    {
        id:4,
        nombre:"Milford"
    }
];

const deportes = [
    {
        id:1,
        deporte:"Pesas"
    },
    {
        id:2,
        deporte:"Volley"
    },
    {
        id:3,
        deporte:"Zumba"
    }
];

// DEFINICIÓN DE LA FUNCIÓN
// DEFINICIÓN DE LA FUNCIÓN GETDEPORTISTA
//const getDeportitas = function(id){}
const getDeportista =  (id, callback) => {
    const  deportista = deportistas.find( d => d.id === id)?.nombre;

    if (deportista){
        callback(null, deportista);
    } else {
        callback(`No existe el deportista con el ID ${id}, sorry`);
    }
}

// DEFINICIÓN DE LA FUNCIÓN GETDEPORTE
const getDeporte =  (id, callback) => {
    const  deporte = deportes.find( d => d.id === id)?.deporte;

    if (deporte){
        callback(null, deporte);
    } else {
        callback(`No existe el ID ${id}, sorry`);
    }
}

const id = 4;
// INVOCACIÓN
getDeportista(id, (err, deportistaCB) => {
    if (err) {
        console.log("Error!!!");
        return console.log(err);
    }

    getDeporte(id, (err, deporteCB) => {
        if(err){
            console.log("Error!!!");
            return console.log(err);
        }
        console.log(`El deportista ${deportistaCB} practica ${deporteCB}`);
    })
});