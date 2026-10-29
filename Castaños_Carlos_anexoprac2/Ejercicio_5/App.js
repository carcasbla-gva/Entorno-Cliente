function iniciarTemporizador() {
    alert("¡Bienvenido al sitio web!");
    setTimeout(abrirDocumento, 20000);
}

function abrirDocumento() {
    window.open("https://www.google.com", "_blank");
}