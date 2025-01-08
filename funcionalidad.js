// Referencias a los elementos
const addPersonBtn = document.getElementById('add-person-btn');
const formContainer = document.getElementById('form-container');
const personForm = document.getElementById('person-form');
const personList = document.getElementById('person-list');

// Mostrar el formulario al hacer clic en el botón
addPersonBtn.addEventListener('click', () => {
    formContainer.style.display = 'block';
});

// Manejar el envío del formulario
personForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar recargar la página
    
    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    // Crear un nuevo elemento en la lista de personas
    const li = document.createElement('li');
    li.textContent = `Nombre: ${name}, Edad: ${age}, Correo: ${email}`;
    personList.appendChild(li);

    // Limpiar el formulario
    personForm.reset();

    // Ocultar el formulario
    formContainer.style.display = 'none';
});