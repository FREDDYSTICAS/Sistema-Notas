document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('calificacionesForm');
    const mensaje = document.getElementById('mensaje');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

        const materia = document.getElementById('materia').value;
        const estudianteId = document.getElementById('estudiante').value;
        const calificacion = document.getElementById('calificacion').value;

        // Validación básica
        if (materia && estudianteId && calificacion) {
            mensaje.textContent = `Calificación de ${calificacion} guardada para el estudiante ${estudianteId} en la materia ${materia}.`;
            mensaje.style.color = 'green';
            form.reset(); // Limpiar el formulario después de enviar
        } else {
            mensaje.textContent = 'Por favor, completa todos los campos.';
            mensaje.style.color = 'red';
        }
    });
});
