function crearCampoTexto() {
    var contenedor = document.getElementById("contenedorElemento");

    // 1. Crear el nodo de elemento
    var cajaTexto = document.createElement("input");

    // 2. Asignar atributos usando setAttribute() o propiedades del DOM
    cajaTexto.setAttribute("type", "text");
    cajaTexto.setAttribute("id", "miInputDinamico");
    cajaTexto.setAttribute("name", "usuario");
    cajaTexto.setAttribute("placeholder", "Escribe tu nombre aquí...");
    cajaTexto.setAttribute("maxlength", "30");

    // También se pueden aplicar atributos de estilo directamente
    cajaTexto.style.padding = "8px";
    cajaTexto.style.border = "2px solid #0055aa";

    // 3. Insertar el elemento en el árbol DOM
    contenedor.appendChild(cajaTexto);
}