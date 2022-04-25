function calcularJuego() {
    
    var valor_usuario = parseInt(document.getElementById('eleccion').value);
    var valor_maquina = Math.ceil(Math.random()*3);
    /*
    1 -> Piedra 
    2 -> Papel
    3 -> Tijera
    */
    if(valor_maquina == 3) {
        if(valor_usuario == 3){
            alert("Maquina:[Tijera]" + "\tEscogio:[Tijera]\n" + "Tijera empata con Tijera, " + "!HA EMPATADO¡\n\n" + "Puede Volver a Jugar");
        }else{
            if(valor_usuario == 2){
                alert("Maquina:[Tijera]" + "\tEscogio:[Papel]\n" + "Tijera corta a Papel, " + "!HA PERDIDO¡\n\n" + "Puede Volver a Jugar");
            }else{
                alert("Maquina:[Tijera]" + "\tEscogio:[Piedra]\n" + "Tijera No corta a Piedra, " + "!HA GANADOR, FELICITACIONES .. ¡\n\n" + "Puede Volver a Jugar");
            }
        }
    }else{
        if(valor_maquina == 2){
            if(valor_usuario == 3){
                alert("Maquina:[Papel]" + "\tEscogio:[Tijera]\n" + "Papel es cortado por la Tijera, " + "!HA GANADOR, FELICITACIONES .. ¡\n\n" + "Puede Volver a Jugar");
            }else{
                if(valor_usuario == 2){
                    alert("Maquina:[Papel]" + "\tEscogio:[Papel]\n" + "Papel empata con Papel, " + "!HA EMPATADO¡\n\n" + "Puede Volver a Jugar");
                }else{
                    alert("Maquina:[Papel]" + "\tEscogio:[Piedra]\n" + "Papel envuelve a Piedra, " + "!HA PERDIDO¡\n\n" + "Puede Volver a Jugar");
                }
            }
        }else{
            if(valor_usuario == 3){
                alert("Maquina:[Piedra]" + "\tEscogio:[Tijera]\n" + "Piedra rompe a la Tijera, " + "!HA PERDIDO¡\n\n" + "Puede Volver a Jugar"); 
            }else{
                if(valor_usuario == 2){
                    alert("Maquina:[Piedra]" + "\tEscogio:[Papel]\n" + "Piedra es envuelta por el Papel, " + "!HA GANADOR, FELICITACIONES .. ¡\n\n" + "Puede Volver a Jugar");
                }else{
                    alert("Maquina:[Piedra]" + "\tEscogio:[Piedra]\n" + "Piedra empata con Piedra, " + "!HA EMPATADO¡\n\n" + "Puede Volver a Jugar");
                }
            }
        }
    }
}