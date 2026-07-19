const nombre = localStorage.getItem("nombre") || "María";

document.getElementById("titulo").innerHTML =
"Para " + nombre + " ";

const mensaje =

"Hola " + nombre + ".\n" +

"Quería decirte algo desde hace mucho tiempo.\n" +

"Cada conversación contigo me deja una sonrisa.\n" +

"Me encanta la forma en la que eres.\n" +

"Por eso preparé esta pequeña sorpresa.\n" +

"Espero que te guste mucho";

let i = 0;

const texto = document.getElementById("texto");

function escribir(){

if(i < mensaje.length){

texto.innerHTML += mensaje.charAt(i);

i++;

setTimeout(escribir,45);

}else{

document
.getElementById("continuar")
.style.display="inline-block";

}

}

escribir();

document
.getElementById("continuar")
.addEventListener("click",()=>{

window.location.href="preguntas.html";

});