window.onload = function () {
    let enlace = document.getElementById("miEnlace");
    let contenedor = document.getElementById("contenedor");

    enlace.onclick = detenerPropagacion;
    contenedor.onclick = function () {
        alert("El clic llegó al contenedor.");
    };
};

function detenerPropagacion(evento) {
    if (evento.stopPropagation) {
        evento.stopPropagation();
    } else {
        evento.cancelBubble = true;
    }

    alert("Se detuvo la propagación del evento.");
}
