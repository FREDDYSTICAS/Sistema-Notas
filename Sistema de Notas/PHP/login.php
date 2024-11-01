<?php
session_start();
include('db_connection.php');

// Capturar datos del formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $userid = $_POST['userid'];
    $email = $_POST['email'];
    $password = md5($_POST['password']); // Encriptar para comparar con la base de datos

    // Verificar las credenciales en la base de datos
    $sql = "SELECT * FROM usuarios WHERE nombre_usuario = ? AND id_usuario_unico = ? AND correo = ? AND contrasena = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssss", $username, $userid, $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        $_SESSION['username'] = $user['nombre_usuario'];
        $_SESSION['role'] = $user['rol'];

        // Redirigir según el rol del usuario
        switch ($user['rol']) {
            case 'estudiante':
                header("Location: /Sistema_de_Notas/Dashboard_Estudiante.html");
                break;
            case 'profesor':
                header("Location: /Sistema_de_Notas/Dashboard_Profesor.html");
                break;
            case 'superadministrador':
                header("Location: /Sistema_de_Notas/Dashboard_Admin.html");
                break;
            default:
                echo "Rol no reconocido";
        }
    } else {
        echo "Credenciales incorrectas. Por favor, inténtelo de nuevo.";
    }
}
$conn->close();
?>
