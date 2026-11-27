var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();
    var boton = document.getElementById("btnMostrar");

    boton.onclick = function () {
        sacardatos("datos.txt", "contenedor");
    };
};

function sacardatos(datos, idDiv) {
    if (objeto) {
        var lugar = document.getElementById(idDiv);

        objeto.open("GET", datos);

        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 && objeto.status == 200) {
                lugar.innerHTML = "<p>" + objeto.responseText + "</p>";
            }
        };

        objeto.send(null);
    }
}