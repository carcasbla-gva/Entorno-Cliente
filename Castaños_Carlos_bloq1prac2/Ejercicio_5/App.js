function mostrarFechaActual(){
    let fecha = new Date();

    let diasSemana = [
        "Domingo", "Lunes", "Martes", "Miercoles", 
        "Jueves", "Viernes", "Sabado"
    ];

    let meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    let diaTexto = diasSemana[fecha.getDay()];
    let diaNumero = fecha.getDate();
    let mesTexto = meses[fecha.getMonth()];
    let anio = fecha.getFullYear();

    let textoFecha = `${diaTexto}, ${diaNumero} de ${mesTexto} de ${anio}`;
    document.getElementById("parrafoFecha").innerHTML = textoFecha;
}