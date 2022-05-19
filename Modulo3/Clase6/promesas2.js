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

const findPostById = (id) =>
    new Promise( (resolve, reject) => {
        setTimeout( () => {
            const post = posts.find( (item) => item.id === id);
            post? resolve(post): reject("No encontre el id " + id);
        }, 5000);
    });

findPostById(1)
    .then( (post) => console.log(post))
    .catch( (e) => console.log(e));
console.log("Fin del programa");