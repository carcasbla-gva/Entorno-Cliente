window.onload = function() {
    var formulario = document.getElementById("miFormulario");

    // Asignamos el manejador del evento submit
    formulario.onsubmit = validarYCancelarEnvio;
};

function validarYCancelarEnvio(e) {
    // Normalizamos el objeto evento para compatibilidad cruzada
    var evento = e || window.event;

    // Obtenemos los valores de los tres campos limpios de espacios sobrantes
    var c1 = document.getElementById("campo1").value.trim();
    var c2 = document.getElementById("campo2").value.trim();
    var c3 = document.getElementById("campo3").value.trim();

    // Comprobamos si alguno de los tres está vacío
    if (c1 === "" || c2 === "" || c3 === "") {
        alert("Envío cancelado: Hay campos vacíos en el formulario.");

        // Cancelación del comportamiento por defecto según el estándar W3C e IE
        if (evento.preventDefault) {
            evento.preventDefault(); // Estándar W3C
        } else {
            evento.returnValue = false; // Internet Explorer
        }

        return false;
    }

    // Si todos los campos están completos
    alert("Formulario enviado con éxito.");
    return true;
}