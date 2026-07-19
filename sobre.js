const saludo=document.getElementById("saludo");

if(saludo){

const nombre=localStorage.getItem("nombre");

saludo.innerHTML="Es un placer, "+nombre+" ";

}

const sobre=document.getElementById("sobre");

if(sobre){

sobre.addEventListener("click",()=>{

sobre.classList.add("abierto");

setTimeout(()=>{

window.location.href="carta.html";

},1000);

});

}