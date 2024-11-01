// conexion.php
<?php
$host = 'localhost'; // o tu host de base de datos
$usuario = 'BASE CLASE';
$contrasena = '';
$basedatos = 'gestion_notas';

// Crear conexión
$conn = new mysqli($host, $usuario, $contrasena, $basedatos);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conectado exitosamente";
?>
