// 2. Evento semántico al cargar
window.onload = function () {
    objecto = new XMLHttpRequest();
    var boton = document.getElementById("btnMostrar");

    boton.onclick = function () {
        // Llamamos a sacardatos pasando el json, el contenedor y la función que lo procesa
        sacardatos("datos.json", "contenedor");
    };
};

// 3. Función sacardatos
function sacardatos(datos, idDiv) {
    if (objecto) {
        var lugar = document.getElementById(idDiv);

        objecto.open("GET", datos);

        objecto.onreadystatechange = function () {
            if (objecto.readyState == 4 && objecto.status == 200) {
                mostrarDatosJSON(objecto, lugar);
            }
        };
        objecto.send(null);
    }
}

// 4. Función específica para convertir y pintar el JSON
function mostrarDatosJSON(xhr, respuestaLugar) {
    var info = JSON.parse(xhr.responseText);
    respuestaLugar.innerHTML = 
        "<p><strong>Nombre:</strong> " + info.nombre + "</p>" +
        "<p><strong>Curso:</strong> " + info.curso + "</p>" +
        "<p><strong>Asignatura:</strong> " + info.asignatura + "</p>" +
        "<p><strong>Tema:</strong> " + info.tema + "</p>";
}