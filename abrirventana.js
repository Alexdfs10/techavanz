// Obtener elementos del DOM
const modalContainer = document.getElementById('modalContainer');
const openModalBtn = document.getElementById('openModalBtn');
const abrirwhats = document.getElementById('imageButton');

 // Asegúrate de que existe este elemento



// Función para cargar la ventana modal desde otro archivo HTML
async function loadModal() {
    try {
        const response = await fetch('modal.html');
        const modalContent = await response.text();
        modalContainer.innerHTML = modalContent;

        // Ahora que el contenido está cargado, podemos activar la lógica de abrir/cerrar
        const modal = document.getElementById('myModal');
        const closeModalBtn = document.querySelector('.close');
        const cerrarBtn = document.getElementById('cerrar');
        const enviarinfo = document.getElementById('sumarBtn');
        const resultadoaa = document.getElementById('resultado');
        const userInput = document.getElementById('userInput');
        // Mostrar la ventana modal
        modal.style.display = 'block';

        // Cerrar la ventana modal al hacer clic en la "X" o el botón "Cerrar"
        closeModalBtn.onclick = () => { modal.style.display = 'none'; };

                // en caso de
        try {
            cerrarBtn.onclick = () => {
                modal.style.display = 'none';
            };
        } catch (error) {
            console.error('Ocurrió un error al intentar cerrar el modal:', error);
        }
        

        // Cerrar la ventana modal al hacer clic en el overlay (fuera del contenido)
        modal.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };
        
        enviarinfo.addEventListener('click', () => {
            var userMessage = userInput.value; // Obtener el valor del input
            resultadoaa.textContent = "Correcto " + userMessage; // Mostrar el valor en el resultado
        });
        


    } catch (err) {
        console.error("Error al cargar la ventana modal: ", err);
    }


    
    
}


function obtenerNombres() {
    fetch('http://localhost/api.php')
        .then(response => response.json())
        .then(data => {
            const nombreList = document.getElementById('nombre-list2');
            nombreList.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item.nombre;
                nombreList.appendChild(li);
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}





// Asignar evento al botón para cargar y mostrar la ventana modal
obtenerNombres();
openModalBtn.addEventListener('click', loadModal);

// Agregar un listener al botón



