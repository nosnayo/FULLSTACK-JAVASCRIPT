
function recibirInvitado(callback){ //recibirInvitado(saludar(nombre) { . . . } )
    var invitado = "Juan";  // var invitado = "Juan";
    callback(invitado);     // saludar("Juan") {console.log("Hola " + "juan")}
}

function saludar(nombre){
    console.log("Hola " + nombre);
}
function darTrago(nombre){
    console.log("Te doy un trago " + nombre);
}


recibirInvitado(saludar);
//recibirInvitado(saludar(nombre) {})
recibirInvitado(darTrago);