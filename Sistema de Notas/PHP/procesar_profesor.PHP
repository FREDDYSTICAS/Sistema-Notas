// procesar_profesor.php
<?php
include 'conexion.php'; // Asegúrate de incluir tu archivo de conexión

// Captura de datos del formulario
$estudiante = $_POST['estudiante'];
$calificacion = $_POST['calificacion'];

// Preparar y ejecutar la consulta
$sql = "INSERT INTO calificaciones (id_usuario, calificacion) VALUES (?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $estudiante, $calificacion); // "ii" indica que ambos son enteros

if ($stmt->execute()) {
    echo "Calificación guardada exitosamente";
} else {
    echo "Error al guardar la calificación: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
