window.onload = function () {
    let formulario = document.getElementById("miFormulario");

    // Asignamos el manejador del evento submit
    formulario.onsubmit = validarYCancelarEnvio;
};

function validarYCancelarEnvio(evento) {

    let c1 = document.getElementById("campo1").value.trim();
    let c2 = document.getElementById("campo2").value.trim();
    let c3 = document.getElementById("campo3").value.trim();

    if (c1 === "" || c2 === "" || c3 === "") {
        alert("Envío cancelado: Hay campos vacíos en el formulario.");
        evento.preventDefault();
    }
    else {
        alert("Formulario enviado con éxito.");
    }

}