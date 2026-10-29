function sumarDiez() {
    let campo = document.getElementById("cajaContador");
    let valorActual = parseInt(campo.value, 10);
    campo.value = valorActual + 10;
}

function inicializar() {
    document.getElementById("cajaContador").value = 0;
}