window.onload = function() {
    var enlace = document.getElementById("miEnlace");

    enlace.onclick = evitarNavegacion;
};

function evitarNavegacion(e) {
    var evento = e || window.event;

    alert("Se ha cancelado la navegación. El enlace no te redirigirá.");

    // Evita que el navegador abra la URL del atributo href
    if (evento.preventDefault) {
        evento.preventDefault(); // Estándar W3C
    } else {
        evento.returnValue = false; // Internet Explorer
    }

    return false;
}