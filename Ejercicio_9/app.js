var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();
    var boton = document.getElementById("btnCargar");

    boton.onclick = function () {
        sacardatos("proceso.php", "contenedor");
    };
};

function sacardatos(datos, idDiv) {
    if (objeto) {
        var lugar = document.getElementById(idDiv);

        objeto.open("GET", datos);

        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 && objeto.status == 200) {
                lugar.innerHTML = objeto.responseText;
            } else {
                // Mientras readyState sea 1, 2 o 3 mostramos el GIF animado
                lugar.innerHTML = '<img src="cargando.gif" alt="Cargando datos..." width="50">';
            }
        };

        objeto.send(null);
    }
}