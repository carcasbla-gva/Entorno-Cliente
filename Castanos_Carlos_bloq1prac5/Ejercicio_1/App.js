window.onload = function() {
    var form = document.getElementById("miFormulario");
    var inputNombre = document.getElementById("nombre");
    var selectAficion = document.getElementById("aficion");
    var textareaObs = document.getElementById("observaciones");

    // 1. Establecer el foco en el campo nombre al cargar la página
    inputNombre.focus();

    // 2. Evento onchange en la lista desplegable de aficiones
    selectAficion.onchange = function() {
        var longitud = this.options.length;
        var indice = this.selectedIndex;
        var valor = this.options[indice].value;

        alert(
            "La longitud de la lista es " + longitud + "\n" +
            "El índice seleccionado es el " + indice + "\n" +
            "El valor del índice seleccionado es " + valor
        );
    };

    // 3. Limitar el textarea a 150 caracteres
    textareaObs.onkeypress = function(e) {
        var evento = e || window.event;
        // Permitir teclas de control como borrar (backspace/delete)
        var codigo = evento.charCode || evento.keyCode;

        if (this.value.length >= 150 && codigo !== 8 && codigo !== 0) {
            return false;
        }
    };

    // También se valida al pegar texto
    textareaObs.oninput = function() {
        if (this.value.length > 150) {
            this.value = this.value.substring(0, 150);
        }
    };

    // 4. Validaciones al enviar el formulario (onsubmit)
    form.onsubmit = function(e) {
        var evento = e || window.event;
        var campoDni = document.getElementById("dni").value.trim();
        var campoTelefono = document.getElementById("telefono").value.trim();

        // Validar DNI obligatorio
        if (campoDni === "") {
            alert("Error: El campo DNI es obligatorio.");
            document.getElementById("dni").focus();
            if (evento.preventDefault) evento.preventDefault();
            return false;
        }

        // Validar Teléfono: 9 dígitos consecutivos sin espacios ni guiones
        var patronTelefono = /^\d{9}$/;
        if (campoTelefono !== "" && !patronTelefono.test(campoTelefono)) {
            alert("Error: El teléfono debe estar formado por 9 dígitos consecutivos.");
            document.getElementById("telefono").focus();
            if (evento.preventDefault) evento.preventDefault();
            return false;
        }

        alert("Formulario validado correctamente. Guardando cambios...");
        return true;
    };
};