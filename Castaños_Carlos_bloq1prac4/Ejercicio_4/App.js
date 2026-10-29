// Función para registrar escuchadores de eventos compatible con IE y W3C
function agregarEvento(elemento, evento, funcion) {
    if (elemento.addEventListener) {
        // Estándar W3C
        elemento.addEventListener(evento, funcion, false);
    } else if (elemento.attachEvent) {
        // Internet Explorer heredado
        elemento.attachEvent("on" + evento, funcion);
    } else {
        elemento["on" + evento] = funcion;
    }
}

function cambiarTamano(e) {
    var evento = e || window.event;
    // Referencia al elemento compatible con IE (srcElement) y W3C (target/this)
    var objetivo = evento.target || evento.srcElement;

    if (evento.type === "mouseover") {
        objetivo.style.fontSize = "16pt";
    } else if (evento.type === "mouseout") {
        objetivo.style.fontSize = "12pt";
    }
}

agregarEvento(window, "load", function() {
    var div = document.getElementById("miDiv");
    agregarEvento(div, "mouseover", cambiarTamano);
    agregarEvento(div, "mouseout", cambiarTamano);
});