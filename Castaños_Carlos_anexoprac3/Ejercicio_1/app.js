function validarFormulario() {
    let inputDni = document.getElementById("campoDni");
    let valorDni = inputDni.value.trim();

    if (valorDni === "") {
        alert("El campo no tiene datos");
        return false;
    }

    return true;
}