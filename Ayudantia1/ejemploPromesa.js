 
const alumnos = [
    {
        id:1,
        nombre:"Fernando"
    },
    {
        id:2,
        nombre:"Felipe"
    },
    {
        id:3,
        nombre:"Alejandra"
    },
    {
        id:4,
        nombre:"Juan Pablo"
    },
    {
        id:5,
        nombre:"Sandra"
    }
];
 
const bootcamps = [
    {
        id:1,
        curso:"JavaScript"
    },
    {
        id:2,
        curso:"C#"
    },
    {
        id:3,
        curso:"Django"
    },
    {
        id:4,
        curso:"Java"
    }
];
 
// FUNCION GET ALUMNO
const getAlumno = (id) => {
 
    return new Promise ( (resolve, reject) => {
 
        const alumno = alumnos.find( a => a.id === id );
 
        (alumno)
            ?resolve(alumno)
            :reject(`No existe un alumno con el id ${id}`); // acento grave - ESCAPE
    } );
}
 
// FUNCION GETBOOTCAMP
const getBootcamp = (id) => {
    return new Promise ( (resolve, reject) => {
        const plataforma5 = bootcamps.find( b => b.id===id);
 
        (plataforma5)
        ?resolve(plataforma5)
        :reject(`No existe un bootcamp con el id ${id}`);
    });
}
 
// FUNCION QUE ME TRAE EL ALUMNO Y EL BOOTCAMP
const getInfoCompletaAlumno = (id) => {
 
    try {
        let alumno = getAlumno(id);
        let bootcamp = getBootcamp(id);
 
        return `El bootcamp asignado a ${alumno} es ${bootcamp}`;
    } catch (error) {
        throw error;
    }
};
 
 
 
// LLAMADA DE LA FUNCION
getAlumno(3)
    .then( msg => console.log(msg))
    .catch( error => console.log(error));
 
// LLAMADA DE LA FUNCION GETBOOTCAMP
getBootcamp(1)
    .then( msg => console.log(msg))
    .catch( error => console.log(error));
 
   
getInfoCompletaAlumno(2)
    .then( msg => console.log(msg))
    .catch( error => console.log(error));