// 1. Inicialización del objeto XMLHttpRequest como en el PDF
var XMLHttpRequestObject = false;

if (window.XMLHttpRequest) {
    XMLHttpRequestObject = new XMLHttpRequest();
} else if (window.ActiveXObject) {
    XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
}

// 2. Evento semántico al cargar
window.onload = function () {
    var boton = document.getElementById("btnMostrar");

    boton.onclick = function () {
        // Llamamos a sacardatos pasando el json, el contenedor y la función que lo procesa
        sacardatos("datos.json", "contenedor", mostrarDatosJSON);
    };
};

// 3. Función sacardatos
function sacardatos(datos, idDiv, procesarEspecial) {
    if (XMLHttpRequestObject) {
        var objeto = document.getElementById(idDiv);

        XMLHttpRequestObject.open("GET", datos);

        XMLHttpRequestObject.onreadystatechange = function () {
            if (XMLHttpRequestObject.readyState == 4 && XMLHttpRequestObject.status == 200) {
                if (procesarEspecial) {
                    procesarEspecial(XMLHttpRequestObject, objeto);
                } else {
                    objeto.innerHTML = XMLHttpRequestObject.responseText;
                }
            }
        };

        XMLHttpRequestObject.send(null);
    }
}

// 4. Función específica para convertir y pintar el JSON
function mostrarDatosJSON(xhr, objeto) {
    var info = JSON.parse(xhr.responseText);

    objeto.innerHTML = 
        "<p><strong>Nombre:</strong> " + info.nombre + "</p>" +
        "<p><strong>Curso:</strong> " + info.curso + "</p>" +
        "<p><strong>Asignatura:</strong> " + info.asignatura + "</p>" +
        "<p><strong>Tema:</strong> " + info.tema + "</p>";
}