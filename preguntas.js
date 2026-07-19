const nombre = localStorage.getItem("nombre") || "María";

// Pon aquí TU NÚMERO DE TELÉFONO con el código de tu país (sin el signo + ni espacios). 
// Por ejemplo, si es de Venezuela (+58), ponlo así: "584120000000"
const tuTelefono = "58129342182"; 

const preguntas = [
    {
        pregunta: "A ver " + nombre + ", ¿tienes algún pasatiempo raro o hobbie que casi nadie conozca? 👀",
        claveGuardado: "hobbie_raro"
    },
    {
        pregunta: "¿Qué es algo pequeño que te alegra el día completo? ",
        claveGuardado: "detalle_alegre"
    },
    {
        pregunta: "Si tuvieras que ir a una cita ideal justo ahora... ¿A dónde iríamos? ",
        claveGuardado: "cita_ideal"
    }
];

let indiceActual = 0;

const elNumPregunta = document.getElementById("num-pregunta");
const elEnunciado = document.getElementById("enunciado-pregunta");
const elContenedorOpciones = document.getElementById("contenedor-opciones");
const elFeedback = document.getElementById("mensaje-feedback");

function cargarPregunta() {
    elFeedback.innerHTML = "";
    elContenedorOpciones.innerHTML = "";
    
    const data = preguntas[indiceActual];
    elNumPregunta.innerHTML = "Pregunta " + (indiceActual + 1) + " ";
    elEnunciado.innerHTML = data.pregunta;
    
    const inputTexto = document.createElement("input");
    inputTexto.type = "text";
    inputTexto.id = "respuesta-abierta";
    inputTexto.placeholder = "Escribe tu respuesta aquí...";
    inputTexto.style.color = "#000000";
    
    const botonEnviar = document.createElement("button");
    botonEnviar.innerHTML = "Continuar";
    botonEnviar.style.marginTop = "15px";
    
    botonEnviar.addEventListener("click", () => {
        const respuesta = inputTexto.value.trim();
        
        if (respuesta === "") {
            elFeedback.style.color = "#f87171";
            elFeedback.innerHTML = "¡No dejes el espacio en blanco! Escribe algo bonito.";
        } else {
            // Guardamos localmente cada respuesta
            localStorage.setItem(data.claveGuardado, respuesta);
            
            elFeedback.style.color = "#22c55e";
            elFeedback.innerHTML = "Guardando respuesta...";
            
            setTimeout(() => {
                indiceActual++;
                
                if (indiceActual < preguntas.length) {
                    cargarPregunta();
                } else {
                    // --- AQUÍ TERMINAN LAS PREGUNTAS: REDACTAR EL MENSAJE DE WHATSAPP ---
                    elContenedorOpciones.innerHTML = "";
                    elNumPregunta.innerHTML = "¡Gracias por responder!";
                    elEnunciado.innerHTML = "Presiona el botón para enviarme tus respuestas por WhatsApp y ver la sorpresa final...";
                    
                    // Recuperamos todas las respuestas guardadas
                    const r1 = localStorage.getItem("hobbie_raro");
                    const r2 = localStorage.getItem("detalle_alegre");
                    const r3 = localStorage.getItem("cita_ideal");

                    // Construimos el texto del mensaje automatizado
                    let mensajeWhatsApp = `¡Hola! Ya terminé de responder tus preguntas de la sorpresa: \n\n`;
                    mensajeWhatsApp += `• *Pasatiempo raro:* ${r1}\n`;
                    mensajeWhatsApp += `• *Algo que me alegra el día:* ${r2}\n`;
                    mensajeWhatsApp += `• *Mi cita ideal:* ${r3}`;

                    // Codificamos el texto para que sea una URL válida
                    const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

                    // Creamos el botón final de WhatsApp
                    const botonWhatsApp = document.createElement("button");
                    botonWhatsApp.innerHTML = "Enviar respuestas e Ir a la Galería 💌";
                    botonWhatsApp.style.background = "#25D366"; // Color verde oficial de WhatsApp
                    botonWhatsApp.style.marginTop = "15px";

                    botonWhatsApp.addEventListener("click", () => {
                        // Abre el chat con tu número y el mensaje ya escrito
                        window.open(`https://wa.me/${58129342182}?text=${mensajeCodificado}`, '_blank');

                        // Inmediatamente después redirige su pestaña de la web a la galería
                        setTimeout(() => {
                            window.location.href = "galeria.html";
                        }, 1000);
                    });

                    elContenedorOpciones.appendChild(botonWhatsApp);
                }
            }, 1200);
        }
    });
    
    elContenedorOpciones.appendChild(inputTexto);
    elContenedorOpciones.appendChild(botonEnviar);
}

cargarPregunta();