setTimeout(() => {

    window.location.href = "login.html";

},6000);
/*login*/
const boton=document.getElementById("continuar");

if(boton){

boton.addEventListener("click",()=>{

const nombre=document
.getElementById("nombre")
.value
.trim()
.toLowerCase();

const mensaje=document.getElementById("mensaje");

if(nombre==="maría" || nombre==="maria"){

localStorage.setItem("nombre","María");

mensaje.style.color="#22c55e";

mensaje.innerHTML="❤️ Bienvenida María...";

setTimeout(()=>{

window.location.href="sobre.html";

},1500);

}else{

mensaje.style.color="#f87171";

mensaje.innerHTML="Lo siento... esta sorpresa no fue creada para ti.";

}

});

}
