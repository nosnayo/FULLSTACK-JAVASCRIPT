class Libro {
    constructor(nombreC, autorC, editorialC, generoC){
        this.nombre = nombreC;
        this.autor = autorC;
        this.editorial = editorialC;
        this.genero = generoC;
    }

    mostrarLibro(){
        console.log("Nombre: " + this.nombre +
                    "\nautor: " + this.autor +
                    "\neditorial: " + this.editorial +
                    "\ngenero: " + this.genero);
    }

    static filtrarPorAutor(Arreglo, autor){
        var contFiltro = 0;
        console.log("=====================\n" + "LIBROS DEL AUTOR: " + autor); 
        for(var i = 0; i < Arreglo.length; i++){
            if(Arreglo[i].autor == autor){
                contFiltro++;
                console.log("(" + contFiltro + ")"); 
                Arreglo[i].mostrarLibro();
                 
            }
        }
    }
}

var libro1 = new Libro("El mar de aire", "Rosa María Herrera", "N-A", "Biografía");
var libro2 = new Libro("Las voces del crimen", "Daniel Marchante Suárez", "N-A", "Narrativa negra"); 
var libro3 = new Libro("El Alquimista", "Paulo Coelho" , "Booket", "Novela contemporánea");
var libro4 = new Libro("El Peregrino de Compostela", "Paulo Coelho", "Booket", "Ficción moderna y contemporanea");
let libros = [libro1 , libro2, libro3, libro4];

//LIBROS DIPONIBLES
for(var contador = 0; contador < libros.length; contador++){
    console.log("=====================\n" + "LIBRO [" +  (contador+1) + "]");
    libros[contador].mostrarLibro();
}

//FILTRO DE LIBRO
Libro.filtrarPorAutor(libros, "Paulo Coelho");