/** Definir libreria utilizadas */
// fs, para interactuar con los archivos del sistema
const fs = require('fs');
//Axios, para realizar solicitudes HTTP.
const axios = require('axios')
//manera de ocultar ID de bases de datos secuenciales.
const { v4 : uuidv4 } = require('uuid');

/** Consumo de APÏ externa. nuevo Roomate */
const newRoommate = async () => {
    try {
        const response = await axios.get('https://randomuser.me/api');
        const dataUser = response.data.results[0];
        //Uso de dato obtenido de Api Externa                      
        const usuarioRandom = {
            id: uuidv4().slice(26), 
            nombre: dataUser.name.first + ' ' + dataUser.name.last,
            correo: dataUser.email,
            debe: 0,
            recibe: 0
        };
        return usuarioRandom;
    } catch(error) {
            console.log(error);
    }
};

/** Almacenamiento de roomate a Base Datos */
const saveRoommate = (newRoommate) => {
    //Se Realiza la lectura
    const roommatesJSON = JSON.parse(fs.readFileSync('roommates.json', 'utf8'));
    //unsift, inserta un elemento al principio del vector 
    roommatesJSON.roommates.unshift(newRoommate);
    //Registro en archivo roomates.json
    fs.writeFileSync('roommates.json', JSON.stringify(roommatesJSON));
};

/** Actualizacion de datos de roomates.json */
const saveGasto = (body) => {
    console.log(body);
    let roommatesJSON = JSON.parse(fs.readFileSync("roommates.json", "utf8"));
    let arregloRoommates = roommatesJSON.roommates;
    let conteoRoommates = arregloRoommates.length;
    //Registos de montos lo siguiente:
    /**
     * monto para cada roommates no seleccionado (en el Debe) = monto ingresado / cantidad de roommates.
     * monto que recibe el roomates seleccionado = monto ingresado.
     */
    arregloRoommates.map((roommate) => {
        if (conteoRoommates > 1) {
            if (roommate.nombre == body.selectRoommate) {
            let recibe = body.monto - (body.monto / conteoRoommates);
            roommate.recibe += Math.round(parseFloat(recibe));
            } else {
                console.log(roommate.nombre);
                console.log(body.selectRoommate);
                let debe = body.monto / conteoRoommates;
            roommate.debe += Math.round(parseFloat(debe));
            }
        }
        fs.writeFileSync("roommates.json", JSON.stringify(roommatesJSON))
    });
};

/** Exportacion de modulos a otro achivo Js. en uso para servidor.js */
module.exports = { newRoommate, saveRoommate, saveGasto };