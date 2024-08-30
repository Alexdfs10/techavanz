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

// Función para agregar un nuevo nombre
function agregarNombre(e) {
    e.preventDefault();
    const nombreInput = document.getElementById('nombre-input').value;

    fetch('http://localhost/api.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nombre: nombreInput })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        obtenerNombres();  // Actualizar la lista de nombres
    })
    .catch(error => console.error('Error al enviar los datos:', error));
}

// Escuchar el envío del formulario
document.getElementById('nombre-form').addEventListener('submit', agregarNombre);

// Cargar los nombres al cargar la página
obtenerNombres();
