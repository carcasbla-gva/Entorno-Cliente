function cambiarAzul() {
    var caja = document.getElementById("cajaMensaje");
    caja.style.backgroundColor = "blue";
    caja.style.color = "white"; // Para legibilidad sobre azul
}

function cambiarVerde() {
    var caja = document.getElementById("cajaMensaje");
    caja.style.backgroundColor = "green";
    caja.style.color = "white";
}

function restaurarColor() {
    var caja = document.getElementById("cajaMensaje");
    caja.style.backgroundColor = "white";
    caja.style.color = "black";
}