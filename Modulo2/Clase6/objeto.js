var valor1 = 'hola';
var valor2 = 'nelson';
var miObjeto = {
    propiedad1: valor1,
    propiedad2: valor2,
};

var objetoAuto = {
    marca: "Audi",
    modelo: "GT2",
    annio: 2018,
    arrancar : function(arrancarP){
        var arrancarFuncion = arrancarP;
        console.log("El auto arranco a: " + arrancarFuncion);
    },
    acelerar: function(){
        console.log("Brummmmmmm!!");
    },
    frenar: function(){
        console.log("Estoy Frenandoooooo!!");
    },
    turbo: function(eligirTurboP){
        var eligirTurboF = eligirTurboP;
        if(eligirTurboF){
            console.log("Inyectando Nitro!!!!");
        } else{
            console.log("Inyecto parafina!!!!");
        }
    }
};

//NOTACIONES
console.log("Notacion Bracket: " + objetoAuto['marca']);
console.log("Notacion punto: " + objetoAuto.marca);
objetoAuto.arrancar(100);
objetoAuto["arrancar"](100);

objetoAuto.acelerar();
objetoAuto["acelerar"]();

objetoAuto.frenar();
objetoAuto["frenar"]();

objetoAuto.turbo(false);
objetoAuto["turbo"](true);

//HACER CAMBIO VALORES PROPIEDADES
objetoAuto.modelo = "GT3";
objetoAuto.marca = "Yagan";
console.log(objetoAuto);

//Agregar Mas Funciones
objetoAuto.turboDos = function(tipoTurboP){
    console.log("Turboooo!!!, tipo: " + tipoTurboP);
};
objetoAuto.turboDos("Maximo");

//Agregar Mas atributos
objetoAuto.color = "Azul";
console.log(objetoAuto);

//ARREGLOS CON PROPIEDADES DE OBJETOS
var autos = [
    { marca: "Audi", color: "Azul" },
    { marca: "Fiat", color: "Rojo" },
    { marca: "Yagan", color: "Cafecito" },
];
console.log(autos[0].color);
console.log(autos[0]["color"]);
