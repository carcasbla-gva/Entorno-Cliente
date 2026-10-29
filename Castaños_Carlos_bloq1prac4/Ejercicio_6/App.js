window.onload = function() {
    // Obtenemos todos los botones de la página de forma dinámica
    var botones = document.getElementsByTagName("button");

    // Asignamos el manejador de eventos a cada botón
    for (var i = 0; i < botones.length; i++) {
        botones[i].onclick = mostrarMensaje;
    }
};

function mostrarMensaje() {
    alert("Has pulsado sobre un botón");
}