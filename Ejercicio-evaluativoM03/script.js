var resetButton = document.querySelector("#reset");
var cantidadColores = 6;
var pickedColor; //var para Color a Buscar
var clickedColor; //var para Color escogido 
var colorDisplay = document.getElementById("colorDisplay");
var arregloCuadros = document.querySelectorAll(".square");
var arregloDificultad = document.querySelectorAll(".mode"); 

/*Solo para Array definido
    colors =    
    [   "rgb(240, 14, 128)", "rgb(240, 14, 128)", 
        "rgb(240, 14, 128)", "rgb(240, 14, 128)",
        "rgb(240, 14, 128)", "rgb(0, 0, 0)",
    ]
*/
//Funcionabilidad de button reset
resetButton.addEventListener("click", function(){
    iniciarJuego();
})

function iniciarJuego(){
    var colors=generateRandomColors(cantidadColores);
    colorDisplay.textContent = pickedColor = colors[Math.floor(Math.random() * colors.length)];
    colorear(colors);    
    document.querySelector("h1").style.backgroundColor = 'rgb(70, 130, 180)';
    document.querySelector("#message").textContent = "";
    document.querySelector("#reset").textContent = "New Colors";
}

//Generar colores en Array
function generateRandomColors(cantidad){
    var array=[];

    for(var i = 0; i < cantidad; i++){
        array[i]=randomColor();
    }
    return array
}
//Randon para 1 color
function randomColor() {
    var rojo = Math.floor(Math.random()*256);
    var azul = Math.floor(Math.random()*256);
    var verde = Math.floor(Math.random()*256);
    return "rgb(" + rojo + ", " + azul + ", " + verde + ")"
}
//Colorear Cuadros html segun el arreglo colors    
function colorear(colors){
       
    for(var i = 0; i < arregloCuadros.length; i++){
        if(colors[i]){
            arregloCuadros[i].style.backgroundColor = colors[i];
            arregloCuadros[i].style.display = "block";
        }else{
            arregloCuadros[i].style.display = "none";
        }
    }
}

//Colorear de 1 Color
function changeColors(color){
    for (var i = 0; i < arregloCuadros.length; i++){
        arregloCuadros[i].style.backgroundColor = color;
    }
}
//Seleccionar dificultad
function recibirDificultad(){
    for(var i=0; i<arregloDificultad.length; i++){   
        arregloDificultad[i].addEventListener("click", function(){
            this.classList.add("selected");
            if(this.textContent === "Easy"){
                arregloDificultad[1].classList.remove("selected");
                cantidadColores = 3;
                iniciarJuego();
            }else{
                arregloDificultad[0].classList.remove("selected");                
                cantidadColores = 6;
                iniciarJuego();
            }
        });
    };
}

//Recibir cuadro Seleccionado
function recibirCuadro(){
    for(var i = 0; i < arregloCuadros.length; i++){
        arregloCuadros[i].addEventListener("click", function(){
            clickedColor = this.style.backgroundColor

            if(clickedColor === pickedColor){
                document.querySelector("#message").textContent = "¡Correcto!";
                document.querySelector("h1").style.backgroundColor = clickedColor;
                changeColors(clickedColor);
                resetButton.textContent = "Play Again!";

            }else{                
                this.style.background = '#232323';
                document.querySelector("#message").textContent = "Intentalo Nuevamente"  
            }
        })

    };
}

recibirDificultad();
recibirCuadro();
iniciarJuego();