window.onload = function() {
    let form = document.getElementById("miFormulario");
    let inputNombre = document.getElementById("nombre");
    let selectAficion = document.getElementById("aficion");
    let textareaObs = document.getElementById("observaciones");

    // Establecer el foco en el campo nombre al cargar la página
    inputNombre.focus();

    // Evento onchange en la lista desplegable de aficiones
    selectAficion.onchange = function() {
        let longitud = this.options.length;
        let indice = this.selectedIndex;
        let valor = this.options[indice].value;
        alert(
            "La longitud de la lista es " + longitud + "\n" +
            "El índice seleccionado es el " + indice + "\n" +
            "El valor del índice seleccionado es " + valor
        );
    };

    // Limitar el textarea a 150 caracteres
    textareaObs.onkeypress = function(event) {        
        if (this.value.length >= 150) {
            event.preventDefault();
        }
    };
/*
    // También se valida al pegar texto
    textareaObs.oninput = function() {
        if (this.value.length > 150) {
            this.value = this.value.substring(0, 150);
        }
    };
*/
    // Validaciones al enviar el formulario (onsubmit)
    form.onsubmit = function(event) {
        let campoDni = document.getElementById("dni").value.trim();
        let campoTelefono = document.getElementById("telefono").value.trim();

        // Validar DNI obligatorio
        if (campoDni === "") {
            alert("Error: El campo DNI es obligatorio.");
            document.getElementById("dni").focus();
            event.preventDefault();
        }

        // Validar Teléfono: 9 dígitos consecutivos sin espacios ni guiones
        else if (!/^\d{9}$/.test(campoTelefono)) {
            alert("Error: El teléfono debe estar formado por 9 dígitos consecutivos.");
            document.getElementById("telefono").focus();
            event.preventDefault();
        }
        else {
        alert("Formulario validado correctamente. Guardando cambios...");
        }
    };
};