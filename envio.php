<?php
// Llamando a los campos
$nombre = $_POST["nombre"];
$correo = $_POST["email"];
$mensaje = $_POST["mensaje"];

//Datos para el correo

$destinatario = "miguelmaring@gmail.com";
$asunto = "Menaje desde Yo Medium";

$carta = "De: $nombre \n";
$carta .= "Correo: $correo \n";
$carta .= "Mensaje: $mensaje";

// Enviando mensaje

mail($destinatario, $asunto, $carta);
header('Location: contactos.html')

?>