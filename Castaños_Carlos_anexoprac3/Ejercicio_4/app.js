function mostrarNumEnlaces() {
    let todosLosEnlaces = document.getElementsByTagName("a");
    document.getElementById("resultado").innerHTML = 
        "<p><strong>Número total de enlaces:</strong> " + todosLosEnlaces.length + "</p>";
}

function mostrarRefEnlaces() {
    let todosLosEnlaces = document.getElementsByTagName("a");
    let html = "<p><strong>Referencias de todos los enlaces:</strong></p><ul>";

    for (let i = 0; i < todosLosEnlaces.length; i++) {
        html += "<li>" + todosLosEnlaces[i].getAttribute("href") + "</li>";
    }

    html += "</ul>";
    document.getElementById("resultado").innerHTML = html;
}

function mostrarRefEnlacesPorParrafo() {
    let parrafos = document.getElementsByTagName("p");
    let html = "<p><strong>Referencias de enlaces por párrafo:</strong></p>";

    for (let i = 0; i < parrafos.length; i++) {
        let enlacesEnParrafo = parrafos[i].getElementsByTagName("a");
        html += "<p><strong>Párrafo " + (i + 1) + ":</strong> (" + enlacesEnParrafo.length + " enlaces)</p><ul>";

        for (let j = 0; j < enlacesEnParrafo.length; j++) {
            html += "<li>" + enlacesEnParrafo[j].getAttribute("href") + "</li>";
        }

        html += "</ul>";
    }

    document.getElementById("resultado").innerHTML = html;
}

// Nuevas funciones del Ejercicio 4. Cambio de atributos de color mediante DOM.
function parrafosVerdes() {
    let parrafos = document.getElementsByTagName("p");

    // Recorremos la colección de nodos <p> para modificar su atributo de estilo.
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "green";
    }
}

function desactivarColor() {
    let parrafos = document.getElementsByTagName("p");

    // Restablecemos la propiedad color a su valor por defecto inicial.
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "";
    }
}