var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();
    var boton = document.getElementById("btnEnviar");

    boton.onclick = function () {
        var nombre = document.getElementById("txtNombre").value;
        var url = "saludo.php?nombre=" + encodeURIComponent(nombre);
        sacardatos(url, "contenedor");
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