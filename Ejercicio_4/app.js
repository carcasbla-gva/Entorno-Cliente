var objeto;

window.onload = function () {
    objeto = new XMLHttpRequest();
    var boton = document.getElementById("btnMostrar");

    boton.onclick = function () {
        sacardatos("datos.xml", "contenedor");
    };
};

function sacardatos(datos, idDiv) {
    if (objeto) {
        var lugar = document.getElementById(idDiv);

        objeto.open("GET", datos);

        objeto.onreadystatechange = function () {
            if (objeto.readyState == 4 && objeto.status == 200) {
                mostrarDatosXML(objeto, lugar);
            }
        };

        objeto.send(null);
    }
}

function mostrarDatosXML(xhr, respuestaLugar) {
    var xml = xhr.responseXML;
    var modulos = xml.getElementsByTagName("modulo");
    var html = "<ul>";

    for (var i = 0; i < modulos.length; i++) {
        var nombre = modulos[i].getElementsByTagName("nombre")[0].textContent;
        var curso = modulos[i].getElementsByTagName("curso")[0].textContent;
        html += "<li><strong>" + nombre + "</strong> (" + curso + ")</li>";
    }

    html += "</ul>";
    respuestaLugar.innerHTML = html;
}