<?php
if (isset($_GET["nombre"]) && trim($_GET["nombre"]) !== "") {
    $nombre = htmlspecialchars($_GET["nombre"]);
    echo "<p>Hola, <strong>" . $nombre . "</strong>. Datos recibidos correctamente en PHP mediante GET.</p>";
} else {
    echo "<p style='color:red;'>Por favor, introduce un nombre antes de enviar.</p>";
}
?>