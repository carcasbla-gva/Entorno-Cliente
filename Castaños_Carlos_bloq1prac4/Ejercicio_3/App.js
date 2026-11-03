window.onload = function() {
    var div = document.getElementById("miDiv");

    div.onmouseover = cambiarTamano;
    div.onmouseout = cambiarTamano;
};

function cambiarTamano(evento) {
    // Garantiza compatibilidad con versiones antiguas de IE
    if (evento.type === "mouseover") {
        this.style.fontSize = "16pt";
    } else if (evento.type === "mouseout") {
        this.style.fontSize = "12pt";
    }
}