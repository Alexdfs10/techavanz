// Obtener referencias a los elementos del DOM
const numero1Input = document.getElementById('numero1');
const numero2Input = document.getElementById('numero2');
const resultadoDiv = document.getElementById('resultado');
const sumarBtn = document.getElementById('sumarBtn');

// Agregar un evento al botón para realizar la suma
sumarBtn.addEventListener('click', () => {
    // Convertir los valores de los inputs a números



    const numero1 = parseFloat(numero1Input.value);
    const numero2 = parseFloat(numero2Input.value);

    // Verificar que ambos valores sean números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
       resultadoDiv.textContent = "Por favor, ingresa números válidos.";
    } else {
        // Realizar la suma
        const suma = numero1 + numero2;

        // Mostrar el resultado
        resultadoDiv.textContent = `Resultado: ${suma}`;
    }
});
