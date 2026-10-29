window.onload = function () {
    var campo = document.getElementById("soloNumeros");
    campo.onkeypress = soloNumeros;
};

function soloNumeros(e) {
    var evento = e || window.event;

    // charCode para navegadores estándar W3C, keyCode para IE
    var codigo = evento.charCode || evento.keyCode;

    // Permitir teclas de control especiales (como retroceso o flechas en Firefox)
    if (codigo === 0 || codigo === 8) {
        return true;
    }

    // Rango ASCII para números '0' a '9' es de 48 a 57.
    if (codigo < 48 || codigo > 57) {
        return false; // Cancela la pulsación de la tecla.
    }

    return true;
}