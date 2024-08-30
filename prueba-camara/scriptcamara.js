// Obtener elementos del DOM
const video = document.getElementById('video');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');

let stream;

// Función para encender la cámara
async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Error al acceder a la cámara: ", err);
    }
}

// Función para apagar la cámara
function stopCamera() {
    if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        video.srcObject = null;
    }
}

// Asignar eventos a los botones
startButton.addEventListener('click', startCamera);
stopButton.addEventListener('click', stopCamera);
