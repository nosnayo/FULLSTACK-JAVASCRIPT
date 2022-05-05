//RESPUESTA EJERCICIO ASINCRONICO ADAPTADO A HTML
class Libro {
    constructor(nombreC, autorC, editorialC, generoC){
        this.nombre = nombreC;
        this.autor = autorC;
        this.editorial = editorialC;
        this.genero = generoC;
    }

    mostrarLibro(){
        return      ("Nombre: " + this.nombre +
                    "<br>autor: " + this.autor +
                    "<br>editorial: " + this.editorial +
                    "<br>genero: " + this.genero) +
                    "<br>";
    }

    static filtrarPorAutor(){
        var contFiltro = 0;
        var autorFiltro = document.getElementById('autor').value;
        var resultado = "<h4>LIBROS DEL AUTOR:</h4>" + autorFiltro + "<br>"; 
        for(var i = 0; i < Libro.length; i++){
            if(libros[i].autor == autorFiltro){
                contFiltro++;
                resultado = resultado + "<br>(" + contFiltro + ")<br>" + libros[i].mostrarLibro();
                 
            }
        }
        document.getElementById('filtro').innerHTML = resultado;
    }
}

var libro1 = new Libro("El mar de aire", "Rosa María Herrera", "N-A", "Biografía");
var libro2 = new Libro("Las voces del crimen", "Daniel Marchante Suárez", "N-A", "Narrativa negra"); 
var libro3 = new Libro("El Alquimista", "Paulo Coelho" , "Booket", "Novela contemporánea");
var libro4 = new Libro("El Peregrino de Compostela", "Paulo Coelho", "Booket", "Ficción moderna y contemporanea");
let libros = [libro1 , libro2, libro3, libro4];
var listadoLibros = "";
var autorFiltro;
//LIBROS DIPONIBLES
for(var contador = 0; contador < libros.length; contador++){
    listadoLibros = listadoLibros + "LIBRO [" + (contador + 1) + "]<br>";
    listadoLibros = listadoLibros + libros[contador].mostrarLibro() + "=================================<br>";
}
document.getElementById("libros").innerHTML = listadoLibros;

//FILTRO DE LIBRO





//Libro.filtrarPorAutor(libros, "Paulo Coelho");