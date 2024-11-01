// login.js

// Función para alternar entre mostrar y ocultar la contraseña
function togglePassword() {
    const passwordField = document.getElementById("password");
    const passwordButton = passwordField.nextElementSibling;
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordButton.textContent = "🙈";
    } else {
        passwordField.type = "password";
        passwordButton.textContent = "👁️";
    }
}

// Envío del formulario y redirección según el rol
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío para pruebas locales

    // Obtener los valores de los campos de entrada
    const username = document.getElementById("username").value;
    const userid = document.getElementById("userid").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Verifica que todos los campos estén completos
    if (username && userid && email && password) {
        // Obtener el rol del usuario de localStorage
        const userRole = localStorage.getItem("userRole");

        // Redirige a la página correspondiente según el rol almacenado
        switch (userRole) {
            case 'Estudiante':
                window.location.href = "/Sistema de Notas/Estudiantes/estudiante.html";
                break;
            case 'Profesor':
                window.location.href ="/Sistema de Notas/Profesor/profesor.html";
                break;
            case 'Superadministrador':
                window.location.href = "/Sistema de Notas/Superadministrador/Superadm.html";
                break;
            default:
                alert("Rol no reconocido o no seleccionado. Por favor, selecciona tu rol.");
                window.location.href = '/Sistema de Notas/Roles/roles.html'; // Redirige a selección de rol si no se ha seleccionado
        }
    } else {
        alert("Por favor, complete todos los campos para ingresar.");
    }
});
