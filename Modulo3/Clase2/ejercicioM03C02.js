class Auto {
    constructor(marca, modelo, anio, nPuestas){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.nPuestas = nPuestas;
    }
    acelerar(){
        console.log("acelerando . . ")
    }
    subirVidrio(){
        console.log("subir Vidrios . . ")
    }
}

class AutoGas extends Auto {
    constructor(marca, modelo, anio, nPuestas){
        super(marca, modelo, anio, nPuestas);
    }
    acelerar(){
        console.log("acelerando a Gas")
    }
    subirVidrio(){
        console.log("subir Vidrios . . ")
    }
}
class AutoNafta extends Auto {
    constructor(marca, modelo, anio, nPuestas){
        super(marca, modelo, anio, nPuestas);
    }
    acelerar(){
        console.log("acelerando a Nafta")
    }
    subirVidrio(){
        console.log("subir Vidrios . . ")
    }
}

class AutoElectrico extends Auto {
    //Otra Manera cuando son los mismo atributos
    super(marca, modelo, anio, nPuestas){
    }
    acelerar(){
        console.log("acelerando a Electricidad")
    }
    subirVidrio(){
        console.log("subir Vidrios . . ")
    }
}

var auto = new Auto("hyundai", "accent", 2022, 4);
//console.log(auto);
var autoGas = new AutoGas("peugeot", "306", 2020, 2);
var autoNafta = new AutoNafta("volvo", "vv 22", 2018, 4);
var autoElectrico = new AutoElectrico("tesla", "Model S", 2021, 2);
//sconsole.log(autoElectrico);

listaAuto = [auto, autoGas, autoNafta, autoElectrico];

for(let iterador=0 ; iterador < listaAuto.length ; iterador++){
    listaAuto[iterador].acelerar();
    listaAuto[iterador].subirVidrio();
    console.log("============");
}