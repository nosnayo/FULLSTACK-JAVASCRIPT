console.log(this);

class EstudianteJS {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

var estudiantePlataforma5 = new EstudianteJS("Doraemon", "70");
//console.log(estudiantePlataforma5);

var miVariable = function miSuperFunction(){
    console.log(this);
};

miVariable();