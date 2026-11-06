window.onload = function () {
    let enlace = document.getElementById("miEnlace");
    enlace.onclick = evitarNavegacion;
};

function evitarNavegacion(event) {

    if (event.preventDefault) {
        event.preventDefault();
        alert("Se ha cancelado la navegación. El enlace no te redirigirá.");
    } else {
        event.returnValue = false;
    }
    return false;
}