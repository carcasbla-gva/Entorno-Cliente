var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();

    var enlaceInicio = document.getElementById("enlaceInicio");
    var enlaceBienvenida = document.getElementById("enlaceBienvenida");

    enlaceInicio.onclick = function (e) {
        e.preventDefault(); // Evitamos que el navegador recargue la página
        sacardatos("inicio.html", "contenedor");
    };

    enlaceBienvenida.onclick = function (e) {
        e.preventDefault();
        sacardatos("bienvenida.html", "contenedor");
    };
};

function sacardatos(datos, idDiv) {
    if (objeto) {
        var lugar = document.getElementById(idDiv);

        objeto.open("GET", datos);

        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 && objeto.status == 200) {
                lugar.innerHTML = objeto.responseText;
            }
        };

        objeto.send(null);
    }
}