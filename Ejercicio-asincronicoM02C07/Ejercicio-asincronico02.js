//1 y 2 CAMBIAR TITULO USO DE textContent
var tituloH1 = document.querySelector('h1');
tituloH1.textContent = "Nuevo titulo para H1";

//3 CAMBIAR DESCRICION DE H1 A PARRAFO CON innerHTML
document.querySelector('#tUnoXParrafo').innerHTML = '<p> Nueva Descripcion para parrafo </p>'; 

//4 CREAR NUEVO PARRAFO Y AGREGAR A LA PAGINA CON appendChild
var nuevoP = document.createElement('p');
nuevoP.textContent = "Descripcion de Parrafo agregado";
document.body.appendChild(nuevoP);