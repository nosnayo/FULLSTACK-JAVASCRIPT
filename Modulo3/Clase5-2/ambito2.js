const casaBabaYaga = {
    nombre: 'Casa de Baba Yaga',
    propositos: 'Cosas horribles',

    caminar(){
        console.log('Yo camino porque soy la casa de ');
    },
    atrapar(individuo){
        console.log('Yo, la ${this.nombre} atrapo a ${individuo}');
    },
    darSustito() {
        console.log('Yo, la ${this.nombre} doy mucho sustito');
    }

};

//casaBabaYaga.caminar();
//casaBabaYaga.atrapar("Hell Boy");

const laCasaDelTrauko = {
    nombre: "La Casa del Trauko"
}
casaBabaYaga.caminar.call(laCasaDelTrauko);
casaBabaYaga.atrapar.call(laCasaDelTrauko,"Doncellas");
casaBabaYaga.darSustito.call(laCasaDelTrauko, "MiCasa");