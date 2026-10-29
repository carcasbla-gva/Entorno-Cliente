    // Muestra el número total de enlaces en el documento
function mostrarNumEnlaces() {
    let todosLosEnlaces = document.getElementsByTagName("a");
    let num = todosLosEnlaces.length;
    
    document.getElementById("resultado").innerHTML = 
        "<p><strong>Número total de enlaces:</strong> " + num + "</p>";
}

// Muestra las URLs de todos los enlaces del documento
function mostrarRefEnlaces() {
    let todosLosEnlaces = document.getElementsByTagName("a");
    let html = "<p><strong>Referencias de todos los enlaces:</strong></p><ul>";

    for (let i = 0; i < todosLosEnlaces.length; i++) {
        // Obtenemos el atributo href mediante getAttribute o la propiedad href del nodo.
        let url = todosLosEnlaces[i].getAttribute("href");
        html += "<li>" + url + "</li>";
    }
    html += "</ul>";
    document.getElementById("resultado").innerHTML = html;
}

// Muestra las URLs de los enlaces desglosadas párrafo por párrafo.
function mostrarRefEnlacesPorParrafo() {
    let parrafos = document.getElementById("parrafos").getElementsByTagName("p");
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