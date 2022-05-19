
class Animal {
    constructor(nombre, especie, lugarDeOrigen, tipoDeComida){
        this.nombre = nombre;
        this.especie = especie;
        this.lugarDeOrigen = lugarDeOrigen;
        this.tipoDeComida = tipoDeComida;
    }

    todosAComer(){
        console.log("Todos los animales a comer");
    }
}

class Gato extends Animal {
    constructor(nombre, especie, lugarDeOrigen, tipoDeComida, cantidadDeMiauAlDia, horasDeSuenno) {
        //SETEO DE VARIABLES, Herencia
        super(nombre, especie, lugarDeOrigen, tipoDeComida);
        this.cantidadDeMiauAlDia = cantidadDeMiauAlDia;
        this.horasDeSuenno = horasDeSuenno;
    }
    todosAComer(){
        console.log("Todos los Gatos a comer, (con Palitos Chinos)");
    }  
}

class Canario extends Animal {
    constructor(nombre, especie, lugarDeOrigen, tipoDeComida, cantidadDePlumas, tiempoDeVuelo){
        super(nombre, especie, lugarDeOrigen, tipoDeComida);
        this.cantidadDePlumas = cantidadDePlumas;
        this.tiempoDeVuelo = tiempoDeVuelo;
    }
    todosAComer(){
        console.log("Todos los Canario a comer, (con Palitos Chinos)");
    }
}

class Perro extends Animal {
    constructor(nombre, especie, lugarDeOrigen, tipoDeComida, ladridosAlDia, cantidadMovimientoCola){
        super(nombre, especie, lugarDeOrigen, tipoDeComida);
        this.ladridosAlDia = ladridosAlDia;
        this.cantidadMovimientoCola = cantidadMovimientoCola;
    }
}

var unGatoCualquiera = new Gato("Benito", "Filinus Domesticum", "Romano", "Cat Chow", 10, 20);
//console.log(unGatoCualquiera);
//unGatoCualquiera.todosAComer();

var unCanarioCualquiera = new Canario("GuruGuru", "Canarium Amarillum", "España", "Amapolas", 5000, 3);
//console.log(unCanarioCualquiera);
//unCanarioCualquiera.todosAComer();

var unPerroCualquiera = new Perro("Loena", "Akira Americana", "EEUU", "Purina Doh Chow", 5, 50);
//unPerroCualquiera.todosAComer();


///QUIERO MANDAR A COMER A TODOS
var arregloConAnimales = [unGatoCualquiera, unCanarioCualquiera, unPerroCualquiera];

for(var iterador = 0; iterador < arregloConAnimales.length; iterador++){
    arregloConAnimales[iterador].todosAComer();
}