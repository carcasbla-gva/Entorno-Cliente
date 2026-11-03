window.onload = function () {
    var campo = document.getElementById("soloNumeros");
    campo.onkeypress = soloNumeros;
};

function soloNumeros(evento) {
    // charCode para navegadores estándar W3C, keyCode para IE
    var codigo = evento.keyCode;
    // Permitir teclas de control especiales (como retroceso o flechas en Firefox)
    // Rango ASCII para números '0' a '9' es de 48 a 57.
    if (codigo < 48 || codigo > 57) {
        evento.preventDefault(); // Cancela la pulsación de la tecla.
    }
}