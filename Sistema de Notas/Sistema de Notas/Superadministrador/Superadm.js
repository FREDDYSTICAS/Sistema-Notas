document.getElementById("accion").addEventListener("change", function() {
    const extraFields = document.getElementById("extraFields");
    if (this.value === "crear_usuario" || this.value === "modificar_usuario") {
        extraFields.style.display = "block";
    } else {
        extraFields.style.display = "none";
    }
});

// Simular envío de formulario y mostrar mensaje de feedback
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar el envío real del formulario

    // Aquí puedes agregar lógica para enviar los datos al servidor

    // Mostrar mensaje de feedback
    const feedback = document.getElementById("feedback");
    feedback.style.display = "block";
    feedback.textContent = "La acción se ha ejecutado con éxito!";
    feedback.style.color = "green";
});
