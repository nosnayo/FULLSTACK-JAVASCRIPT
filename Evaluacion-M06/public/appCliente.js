// Arreglos vacíos definidos de manera global, para ser utilizados posteriormente por funciones.
let roommatesActualizados = [];
let gastosActualizados = [];
/** Lectura de todo los id de Atributos html */
// Para el atributo html id de Button "agregar roommate"
let addRoommate = document.querySelector('#addRoommate');
// Para el atributo html id de Button "agregar"
let addGasto = document.querySelector('#addGasto');
let resetRoommate = document.querySelector('#resetRoommate');
let bodyTablaR = document.querySelector('#bodyTablaR');
let bodyTablaH = document.querySelector('#bodyTablaH');
let selectRoommate = document.querySelector('#selectRoommate');
let descripcionGasto = document.querySelector('#descripcion');
let montoGasto = document.querySelector('#montoGasto');
let botonEliminar = document.querySelector('.boton-remover');
let divStatus= document.querySelector('#divCodStatus');

/** Js para evento click de generar Roomate */
addRoommate.addEventListener("click", async () => { 
        await axios.post('/roommates', {responseType: 'json'})
                .then((response) => {
                        if(response.status==200){
                                //metodo importante para actualizar listado de Roomate y historial.
                                renderizar();
                                renderStatus(`El código de estado de respuesta HTTP es: ${response.status}`);  
                        }
                })
                .catch((err) => {
                        console.log(err);
                }); 
});
/** Carga de Pagina princial */
const renderizar = async () => {
        try {
                //valores inicializados
                bodyTablaR.innerHTML = ''; 
                bodyTablaH.innerHTML = ''; 
                selectRoommate.innerHTML = ''; 
                await traerRoommates();
                //traerRoomates obtiene la data de roomatesActualizado. que es necesio recorrer.
                roommatesActualizados.forEach((data) => {      
                        let nuevaFila = document.createElement('div');
                        //Agregando data de roomate en variable
                        nuevaFila.classList.add("row")
                        nuevaFila.innerHTML = `
                                <div class="col-4">
                                <h6>${data.nombre}</h6>
                                </div>
                                <div class="col-4">
                                <h6>${data.debe}</h6>
                                </div>
                                <div class="col-4">
                                <h6>${data.recibe}</h6>
                                </div>     
                        `
                        //Uso de apendChile agregar fila registo de nuevaFila.
                        bodyTablaR.appendChild(nuevaFila); 
                });
                //Obtencion de listado selector de Roomates para su uso.
                roommatesActualizados.forEach((data) => {      
                        let nuevaOption = document.createElement('option');
                        nuevaOption.innerHTML = `
                        <option value="${data.nombre}">${data.nombre}</option>  
                        `
                        selectRoommate.appendChild(nuevaOption); 
                });
                //Al igual que ver los Roomaetes, se solicita tener datos del Historial de Gastos
                await traerGastos();
                //traerGastos obtiene la data de gastorActualizados. que es necesio recorrer.
                gastosActualizados.forEach((data) => 
                {       //Agregando data de gatos en variable
                        let nuevaFila = document.createElement('div');
                        nuevaFila.classList.add("row")
                        nuevaFila.innerHTML = `
                                <div class="col-4">
                                        <p>${data.roommate}</p>
                                </div>
                                <div class="col-4">
                                        <p>${data.descripcion}</p>
                                </div>
                                <div class="col-2">
                                        <p>${data.monto}</p>
                                </div>
                                <div class="col-2">
                                        <a class="boton-editar" href="#"><i class="fa-solid fa-pen"></i></a>
                                        <button class="boton-remover" onclick="borrarGasto('${data.id}')"><i class="fa-solid fa-trash"></i></button>
                                </div>         
                        `
                        bodyTablaH.appendChild(nuevaFila);  
                });
                
        } catch (err) {
                console.log(err);
        }
};
/** Como cliente HTTP, se hace uso de librería de AXIOS. consumo de servicios */
const traerRoommates = async () => {
        //Solicita mediante la ruta roomates.
        await axios.get('roommates')
                .then((response) => {
                        if (response.status == 200) {
                                //Obteniendo data de roomates, como respuesta roommatesActualizados.
                                roommatesActualizados = response.data.roommates;
                        }
                })
                .catch((err) => {
                        console.log(err);
                }); 
};
/** Como cliente HTTP, se hace uso de librería de AXIOS. consumo de servicios (consulta de gastos) */
const traerGastos = async () => {
        await axios.get('gastos')
                .then((response) => {
                        if (response.status == 200) {
                                //Obteniendo data de gastos, como respuesta gatosActualizados.
                                gastosActualizados = response.data.gastos;
                        }
                })
                .catch((err) => {
                        console.log(err);
                }); 
};
/** Como cliente HTTP, se hace uso de librería de AXIOS. consumo de servicios, ahora para borrar gastos */
const borrarGasto = async (id) => {
        //solicitud de servidor para que se elimine un gasto
        await axios.delete('/gasto?id=' + id, {responseType: 'json'})
                .then((response) => {
                        if(response.status==200){
                                //metodo importante para actualizar listado de Roomate y historial.
                                renderizar();
                                renderStatus(`El código de estado de respuesta HTTP es: ${response.status}`);  
                        }
                })
                .catch((err) => {
                        console.log(err);
                }); 
};
/** Como respuesta, se actualiza codigo html con la siguiente funcion */
const renderStatus = (status) => {
        //Inicializar respuesta
        divStatus.innerHTML = ''; 
        
        //Crear elemento
        let nuevoParrafo = document.createElement('p');
        //Agregar respuesta del servio en una variable html
        nuevoParrafo.innerHTML = status;                        
        //Agregar respuesta.
        divStatus.appendChild(nuevoParrafo);
};        
/** Renderizar para la carga inicial de las pagina */
renderizar(); 
