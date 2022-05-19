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

const findPostById = (id) => { // findPostById = function(id) { . . . }
    const post = posts.find( (item) => item.id === id);
    //devolver la promesa
    return new Promise( (resolver, reject) => {
        //resolver
        if(post){
            resolver(post);
        } else{
            reject("No se pudo encontrar el id " + id);
        }
    });
};

findPostById(9)
    .then((post) => console.log(post))
    .catch((error) => console.log(error))
    .finally(() => console.log("Fin de la promesa"));
