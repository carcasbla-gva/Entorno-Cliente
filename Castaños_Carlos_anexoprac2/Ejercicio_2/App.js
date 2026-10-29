function validarDni() {
    var campoDni = document.getElementById("dni").value.trim();
    if (campoDni === "") {
        alert("El campo no tiene datos");
        return false;
    }
    return true;
}