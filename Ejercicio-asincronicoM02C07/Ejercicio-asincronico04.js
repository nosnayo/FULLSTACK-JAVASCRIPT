var dimencionarDiv = document.querySelector("div");
    dimencionarDiv.style.width = "400px";
    dimencionarDiv.style.height = "400px";
    dimencionarDiv.style.background = "green";
    dimencionarDiv.classList.add('square');

//var nuevoCu = document.querySelector("#squareDos").classList.add("squareStyle");
//    nuevo.classList.remove(".squareStyle");
    
setInterval( function(){
    dimencionarDiv.classList.toggle("div"); 
}, 1000);