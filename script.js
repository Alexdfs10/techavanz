// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.querySelector(".close");
var userInput = document.getElementById('userInput');


// Abrir la ventana modal cuando se hace clic en el botón
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Cerrar la ventana modal cuando se hace clic en la "X"
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

// Cerrar la ventana modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Agregar evento al botón para enviar el mensaje
