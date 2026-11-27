var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();
    var boton = document.getElementById("btnEjecutar");

    boton.onclick = function () {
        sacardatos("scriptExterno.js", "contenedor");
    };
};

function sacardatos(datos, idDiv) {
    if (objeto) {
        objeto.open("GET", datos);

        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 && objeto.status == 200) {
                eval(objeto.responseText);
            }
        };

        objeto.send(null);
    }
}