/*BASICO SIN ASIGNACION DE VALORES
class GatoAnimado{
    nombre;
    annioCreacion;
    autor;
}
var doraemon = new GatoAnimado();
console.log(doraemon);
*/
/* EJERCICIO AUTOMOVIL
class Auto{
    constructor(marcaC, modeloC, annioC, colorC, precioC){
        this.marca = marcaC;
        this.modelo = modeloC;
        this.annio = annioC;
        this.color = colorC;
        this.precio = precioC;
    }
}
var autoYagan = new Auto("Yagan", "n/a", "2022", "azul", "20M");
console.log(autoYagan);
*/
//DAR VALORES A INSTANCIAS
class GatoAnimado{
    constructor(nombreC, autorC, annioCreacionC, formatoC){
        this.nombre = nombreC;
        this.annioCreacion = annioCreacionC;
        this.autor = autorC;
        this.formato = formatoC;
    }

    static mostrarBiografia(){
        console.log("bla bla bla bla");
    }

    listarNumeroDeEpisodios(){
        console.log("Ep1 . Ep2 ... EP1700");
    }

    episodioMejorRankeado(){
        console.log("Ep. 1700");
    }

    episodioPeorRankeado = function(){
        console.log("Ep. 1");
    }

    mostrarTodosLosAtributos = function(){
        var resultado = 'ATRIBUTOS DE SU INSTANCIA SON: \n' + 
        '===============================\n';
        resultado = this.nombre.toString();
        console.log(resultado);
        /*
        console.log('ATRIBUTOS DE SU INSTANCIA SON: \n' + 
        '===============================\n' + 
        this.nombre + '\n' + 
        this.autor + '\n' + 
        this.annioCreacion + '\n' + 
        this.formato);*/
    }
}
var doraemon = new GatoAnimado("Doraemon", "Fujiko", 1969, "Manga y Anime");
var gatoFelix = new GatoAnimado("Miao", "nelson", 2022, "black");
//console.log(doraemon.formato + " " + doraemon.annioCreacion);
//console.log(gatoFelix.formato + " " + gatoFelix.annioCreacion);
doraemon.idioma = "Japones";
doraemon.color = "azul";
delete doraemon.idioma;
//console.log(doraemon);
//doraemon.mostrarBiografia();
doraemon.listarNumeroDeEpisodios();
doraemon.episodioMejorRankeado();
console.log(Math.sqrt(9));
GatoAnimado.mostrarBiografia();
doraemon.mostrarTodosLosAtributos();
/*
función to String

cadena = new String("Hello world");
alert(cadena.toString())      // Displays "Hello world"
*/








