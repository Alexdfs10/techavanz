
// Definir la URL del endpoint de la API
const url = "https://api.z-api.io/instances/3D417576311FE0C1B4F02286F7004CFC/token/3CC26F64FCF5DC468C07A0E4/send-text";

// Clave privada (client-token)
const privateKey = "Fdca33c56dbf749a292bb7b6f38c4ae93S";

// Obtener el botón y el campo de estado
const sendMessageBtn = document.getElementById("sendMessageBtn");
const statusMessage = document.getElementById("status");

// Añadir un listener al botón para enviar el mensaje
sendMessageBtn.addEventListener("click", () => {
    // Obtener el número de teléfono ingresado por el usuario
    const phone = document.getElementById("phone").value;
    const mensjaee = document.getElementById("mensajee").value;
    // Definir el cuerpo de la solicitud con el número de teléfono y el mensaje
    const payload = {
        phone: phone,
        message: mensjaee // Mensaje que se enviará
    };

    // Hacer la solicitud POST usando fetch
    fetch(url, {
        method: "POST",
        headers: {
            "client-token": privateKey, // Añadir la clave privada como client-token
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload) // Convertir el objeto a una cadena JSON
    })
    .then(response => {
        // Comprobar si la respuesta es exitosa
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json(); // Convertir la respuesta a JSON
    })
    .then(data => {
        // Manejar la respuesta de la API
        statusMessage.textContent = "Mensaje enviado correctamente: " ;//+ JSON.stringify(data);
    })
    .catch(err => {
        // Manejar errores
        statusMessage.textContent = "Hubo un error con la solicitud: " + err;
        console.error(err);
    });
});
