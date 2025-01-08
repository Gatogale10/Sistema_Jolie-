document.getElementById("historia-clinica").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío del formulario

    // Recoge los datos del formulario
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const telefono = document.getElementById("telefono").value;

    // Valida campos obligatorios
    if (!nombre || !direccion || !telefono) {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    // Muestra un mensaje de éxito
    alert("Formulario enviado correctamente.");
});
