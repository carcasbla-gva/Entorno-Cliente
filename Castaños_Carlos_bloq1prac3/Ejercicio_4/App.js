function contarImagenes() {
    // getElementsByTagName devuelve una colección HTML con todas las etiquetas <img>
    var imagenes = document.getElementsByTagName("img");
    alert("Número total de imágenes: " + imagenes.length);
}

function contarEnlaces() {
    // Colección con todas las etiquetas <a>
    var enlaces = document.getElementsByTagName("a");
    alert("Número total de enlaces: " + enlaces.length);
}