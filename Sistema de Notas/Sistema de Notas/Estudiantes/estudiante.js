document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('materiaForm');
    const calificacionesList = document.getElementById('calificaciones-list');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera tradicional
        const selectedMateria = document.getElementById('materia').value;

        // Simulación de calificaciones
        const calificaciones = {
            matematica: [90, 85, 78],
            ciencia: [88, 92, 80],
            historia: [75, 80, 70],
        };

        // Limpia la lista de calificaciones
        calificacionesList.innerHTML = '';

        // Si hay calificaciones para la materia seleccionada, muéstralas
        if (calificaciones[selectedMateria]) {
            calificaciones[selectedMateria].forEach(calificacion => {
                const listItem = document.createElement('li');
                listItem.textContent = `Calificación: ${calificacion}`;
                calificacionesList.appendChild(listItem);
            });
        } else {
            const listItem = document.createElement('li');
            listItem.textContent = 'No hay calificaciones disponibles para esta materia.';
            calificacionesList.appendChild(listItem);
        }
    });
});
