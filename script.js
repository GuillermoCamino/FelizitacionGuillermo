'use strict'

var elemento = document.getElementById("#saludos");
var elemento = document.getElementById("#campana");


setTimeout(function() {
    saludos.style.display = "flex";
}, 3000); 


setTimeout(function() {
  saludos.style.display = "none";
}, 8000); 

setInterval(function() {
  campana.style.display = "flex";
}, 1000); 
setInterval(function() {
  campana.style.display = "none";
}, 2000); 


document.getElementById("saludos").style.transform = "rotate(180deg)";

let body= document.querySelector("body");
body.addEventListener("click",ocultarsaludo);

function ocultarsaludo(){
  document.getElementById("saludos").style.display="none"
  saludos.style.display = "none";

}

const button = document.getElementById('button');

button.addEventListener('mouseover', () => {
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
  button.style.transform = 'scale(1)';
});

function playMusic() {
  var audio = document.getElementById("musica");
  audio.play();
}
