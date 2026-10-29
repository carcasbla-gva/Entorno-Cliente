function mostrarHoraYSaludo() {
    let ahora = new Date();
    let hora = ahora.getHours();
    let minutos = ahora.getMinutes().toString().padStart(2, '0');

    let saludo = " ";

    if (hora >= 0 && hora < 14) {
        saludo = "Buenos días";
    }
    else if (hora >= 14 && hora < 20) {
        saludo = "Buenas tardes";
    }
    else {
        saludo = "Buenas noches";
    }

    let mensaje = saludo + ", son las " + hora + ":" + minutos + " horas";
    document.getElementById("salidaHora").textContent = mensaje;
}