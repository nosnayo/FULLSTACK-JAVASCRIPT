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
 
// FUNCIÓN PARA RECUPERAR ALUMNO
const getAlumno = (id, callback) => {
    const alumno = alumnos.find( a => a.id === id );
 
    if (alumno){
        callback(alumno);
    } else {
        callback(`No existe alumno con el id ${id}`);
    }
   
}
 
const getBootcamp = (id) => {
    const plataforma5 = bootcamps.find( b => b.id === id );
    console.log(plataforma5);
}
 
 
getAlumno(6, (alumnoCB) => {
    console.log(alumnoCB);
});
 
//getBootcamp(4);