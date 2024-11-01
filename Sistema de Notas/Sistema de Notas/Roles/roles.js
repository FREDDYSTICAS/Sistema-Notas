// roles.js

function selectRole(role) {
    const roleMessage = document.getElementById("roleMessage");
    const continueLink = document.getElementById("continueLink");

    // Guardar el rol seleccionado en el almacenamiento local
    localStorage.setItem("userRole", role);

    // Mostrar mensaje de rol seleccionado y habilitar enlace de "Continuar"
    roleMessage.textContent = `Rol seleccionado: ${role}. Haz clic en "Continuar" para iniciar sesión.`;
    roleMessage.style.display = "block";
    continueLink.style.display = "inline-block";
}
