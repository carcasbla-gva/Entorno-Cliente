window.onload = function () {
    let enlace = document.getElementById("miEnlace");
    enlace.onclick = evitarNavegacion;
};

function evitarNavegacion(evento) {
    evento.preventDefault();
    alert("Se ha cancelado la navegación. El enlace no te redirigirá.");
    /*if (evento.preventDefault) {
        evento.preventDefault();
        alert("Se ha cancelado la navegación. El enlace no te redirigirá.");
    } else {
        evento.returnValue = false;
    }
    return false;*/
}