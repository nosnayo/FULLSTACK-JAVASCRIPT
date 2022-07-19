//console.log('Hola Glorioso');
const fs = require('fs');

const mascota = [
    {
        nombre: 'REX',
        edad: 8
    },
    {
        nombre: 'Meli',
        edad: 2
    }
];
//Escribir archivo json el array
//fs.writeFileSync('./mascotas.json', JSON.stringify(mascota));

//f.anonima
const getData = () => {
    let data = fs.readFileSync('./mascotas.json', 'utf8');

    //verificacion
    if(!data) return [];//retorna vacio
    else {
        //convierte en JSON
        const file = JSON.parse(data);
        return file;
    }
}
//Llama a funcion
const datosMascotas = getData();
console.log(datosMascotas);