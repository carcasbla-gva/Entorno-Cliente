function calcularCadena() {
    var cadena = "2+2";

    var resultado = eval(cadena);

    document.getElementById("resultadoEval").textContent = 
        "Cadena evaluada: '" + cadena + "' => Resultado: " + resultado;
}