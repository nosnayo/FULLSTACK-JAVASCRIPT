
class Persona {
    constructor(nombreP, edadP){
        this.nombre = nombreP;
        this.edad = edadP;
    }

    saludar(){
        return `${this.nombre} está saludando`;
    }

    despedirse(){
        return `${this.nombre} está despidiendo`;
    }
}

//Clase Estudiante
class Estudiante extends Persona {
    
    constructor(nombreP, edadP, notasP = []){
        super(nombreP, edadP);
        this.notas = notasP;
    }
    //Setear
    set setNotas(notaP2){
        this.notas.push(notaP2);
    }

    get getNotas() {
        return this.notas;
    }

    //Se va a sobrescribir el Metodo
    //MUY UTIL, implementa el Polimorfismo (Sobrescribir la FN)
    saludar(){
        return `${this.nombre} es estudiante!!!! y está saludando`;
    }

    despedirse(){
        return `${this.nombre} es estudiante!!!! y está despidiendo`;
    }

    promedio() {
        var arreglo = this.notas;
        var suma = 0;

        for (var iterador=0; iterador<arreglo.length; iterador++){
            suma = suma + arreglo[iterador];
        }
        return suma/arreglo.length;
    }

    
}

var ejemploEstudiante = new Estudiante("Rodrigo", 32);
console.log(ejemploEstudiante);
console.log(ejemploEstudiante.saludar());
console.log(ejemploEstudiante.despedirse());

var ejemploPersona = new Persona("Juan Random", 25);
console.log(ejemploPersona.saludar());
console.log(ejemploPersona.despedirse());

var ejemploEstudiante = new Estudiante("Rodrigo", 32, [6, 7, 5]);
console.log(ejemploEstudiante);

ejemploEstudiante.setNotas = 4;
console.log(ejemploEstudiante.getNotas);

//Evitar este Problema, Solucionar con Encapsulamiento
//ejemploEstudiante.notas = [7, 7, 7];
//console.log(ejemploEstudiante);
