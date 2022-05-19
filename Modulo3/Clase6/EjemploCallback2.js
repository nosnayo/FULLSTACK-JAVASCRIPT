//Funcion que pasa a otra como un argumento
//Definir arreglo
const posts = [
    {
        userId: 1,
        id: 1,
        title: "Esto es un titulo para el id 1",
        body: "Esto es el body del post para el id 1",
    },
    {
        userId: 1,
        id: 2,
        title: "Esto es un título para el id 2",
        body: "Este es el body del post para el id 2",
    },
    {
        userId: 1,
        id: 3,
        title: "Esto es un título para el id 3",
        body: "Este es el body del post para el id 3",
    },
];

//nueva notacion de function(arg1, arg2){}
//se nombra como callback por es mas expresivo, es mas elocuente
//la funcion callback es de utilidad para hacer uso de ella, en la funcion final.
const findPostById = (id, callback) => {
    const post = posts.find((item) => item.id === id);

    if(post){
        callback(post);
    } else{
        callback("No se ha encontrado el id: " + id);
    }
};

//Voy a recibir como primer parametro (0 argumento) el error. llamado err
findPostById(5, (err, post) => {
    if(err){
        return console.log(err);
    }
    console.log(post);

});

