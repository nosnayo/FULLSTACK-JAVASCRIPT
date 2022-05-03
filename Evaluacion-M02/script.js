const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

var time = 10;
var palabraAleatoria; 
var score = 0;
var palabraIngresada = document.querySelector("#text");
let timeInterval = setInterval(actualizarTiempo, 1000);

function gameOver(){
    var titulo = "<h3>Te has quedado sin Tiempo!</h3>";
    var parrafo = "<p>Tu puntaje Final es: " + score + "</p>";
    var boton = '<button onclick="location.reload()">Volve a empezar</button>';
    document.getElementById("end-game-container").innerHTML = titulo + parrafo + boton;

}

function updateScore(){
    score++;
    document.getElementById("score").innerHTML = score;
}

function actualizarTiempo(){
    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }else{
        time--;
        document.getElementById("timeSpan").innerHTML = time;
    }
}

function randomWords(){
    return words[Math.floor(Math.random()*words.length)];
}

function addToDOM(){
    palabraAleatoria = document.getElementById("randomWord").textContent = randomWords();
}

addToDOM();
document.getElementById("timeSpan").innerHTML = time;
palabraIngresada.addEventListener("keypress", function(e){
    //console.log(e);
    if(event.key == "Enter"){
        //console.log(palabraIngresada.value);
        //console.log(palabraIngresada.value == palabraAleatoria);
        if(palabraIngresada.value == palabraAleatoria){
            time+=3;
            document.getElementById("timeSpan").innerHTML = time;
            updateScore();
            palabraIngresada.value = "";
            addToDOM();
        }
        //Caso equivocado, debe borrar y seguir intentando
    }

    //console.log(palabraAleatoria);
})

