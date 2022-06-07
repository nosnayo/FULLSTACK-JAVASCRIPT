//Declaracion de Variables (elementos de querySelector para posterior uso con appendChild).
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container");
let inputPrincipal = document.querySelector(".input");

//CLASE ITEM - Crear Nueva tarea
class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea);
    };

    crearDiv(nuevaTarea){
        //Crear elemento Item
        let nuevoInputItem = document.createElement("input");
        nuevoInputItem.setAttribute("type", "text");
        nuevoInputItem.setAttribute("disabled", true);
        nuevoInputItem.classList.add("item-input");
        nuevoInputItem.value = nuevaTarea;

        //button Editar
        let botonEditar = document.createElement("button");
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
        botonEditar.classList.add("button-edit");

        //button Delete
        let botonRemover = document.createElement("button");
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
        botonRemover.classList.add("button-delete");

        //Crear etiqueta DIV
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("item");
        //Agregando a etiqueta Div
        nuevoDiv.appendChild(nuevoInputItem);
        nuevoDiv.appendChild(botonEditar);
        nuevoDiv.appendChild(botonRemover);

        //Ultimo Agregando a Div Container
        contenedor.appendChild(nuevoDiv);

        //Agregando Eventos Edit y Delete
        botonEditar.addEventListener("click", () => {
            if(nuevoInputItem.disabled == false){
                nuevoInputItem.setAttribute("disabled", true);
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
                botonEditar.style.color = "black";
            }else{
                nuevoInputItem.removeAttribute("disabled");
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
                botonEditar.style.color = "blue";
            }
        })
        botonRemover.addEventListener("click", () => {
            nuevoDiv.removeChild(nuevoInputItem);
            nuevoDiv.removeChild(botonEditar);
            nuevoDiv.removeChild(botonRemover);
        })
    }
}

//Validacion de input-Tarea
function chequearInput() {
    inputPrincipal = document.querySelector(".input").value;
    if(inputPrincipal) {
        let item = new Item(inputPrincipal);
        //Implementacion detallada del constructor
        //item.crearDiv(inputPrincipal);
        inputPrincipal = document.querySelector(".input").value = "";
    } else{
        alert("Debe Ingresar una Tarea");
    }
}

//Button Agregar
botonAgregar.addEventListener("click", () => {
    chequearInput();
})
