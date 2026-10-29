// Evento al cargar la página
window.onload = function() {
    alert("Página que contiene un reloj digital");
    iniciarReloj();
};

// Evento al abandonar la página
window.onbeforeunload = function() {
    alert("Página cancelada");
};

function iniciarReloj() {
    actualizarHora();
    // Actualiza la hora cada segundo (1000 ms)
    setInterval(actualizarHora, 1000);
}

function actualizarHora() {
    var ahora = new Date();
    var h = ahora.getHours();
    var m = ahora.getMinutes();
    var s = ahora.getSeconds();

    // Formatear a dos dígitos
    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    var cadenaHora = h + ":" + m + ":" + s;
    document.getElementById("reloj").textContent = cadenaHora;
}