function sumarDiez() {
    var campo = document.getElementById("contador");
    var valorActual = parseInt(campo.value, 10);
    campo.value = valorActual + 10;
}

function inicializar() {
    document.getElementById("contador").value = 0;
}