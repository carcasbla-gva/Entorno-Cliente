window.onload = function() {
let infoContenedor = document.getElementById("infoLocation");

let urlActual = window.location.href;
//alert("URL del documento: " + urlActual);
infoContenedor.innerHTML = "<p><strong>URL del documento:</strong> " + urlActual + "</p>";
let pathName = window.location.pathname;
let protocolo = window.location.protocol;

infoContenedor.innerHTML = 
    "<p><strong>URL del documento:</strong> " + urlActual + "</p>" +
    "<p><strong>Pathname:</strong> " + pathName + "</p>" +
    "<p><strong>Protocolo:</strong> " + protocolo + "</p>";

function irAGoogle() {
    window.location.href = "https://www.google.com";
}
}