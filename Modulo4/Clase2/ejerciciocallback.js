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
//Ejemplo basico pero sin Callback, sin verificaion de errores
const getDeportista =  (id) => {
    const  deportista = deportistas.find( d => d.id === id)?.nombre;
    return deportista;
}

const id = 2;
console.log(getDeportista(id));