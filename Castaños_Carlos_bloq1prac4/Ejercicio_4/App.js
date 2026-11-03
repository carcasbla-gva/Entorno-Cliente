
function cambiarTamano(evento) {
    if (evento.type === "mouseover") {
        this.style.fontSize = "16pt";
    } else if (evento.type === "mouseout") {
        this.style.fontSize = "12pt";
    }
}

window.onload = function() {
    let div = document.getElementById("miDiv");
    div.addEventListener("mouseover", cambiarTamano);
    div.addEventListener("mouseout", cambiarTamano);
}