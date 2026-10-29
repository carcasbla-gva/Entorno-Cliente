var divActivo = null;

// Añade un párrafo detrás del último párrafo creado
function anyadirParrafo() {
    var divi = divActivo || document.getElementById("divisor");
    var nuevoP = document.createElement("p");
    var texto = document.createTextNode("Párrafo añadido");
    nuevoP.appendChild(texto);
    divi.appendChild(nuevoP);
}

// Inserta un párrafo detrás del primer párrafo inicial
function insertarParrafo() {
    var divi = divActivo || document.getElementById("divisor");
    var parrafos = divi.getElementsByTagName("p");
    if (parrafos.length >= 1) {
        var nuevoP = document.createElement("p");
        var texto = document.createTextNode("Párrafo insertado");
        nuevoP.appendChild(texto);
        // Si existe un segundo párrafo, se inserta antes de él (quedando detrás del primero)
        if (parrafos.length > 1) {
            divi.insertBefore(nuevoP, parrafos[1]);
        } else {
            divi.appendChild(nuevoP);
        }
    }
}

// Reemplaza el segundo párrafo por "Párrafo reemplazado"
function reemplazarParrafo() {
    var divi = divActivo || document.getElementById("divisor");
    var parrafos = divi.getElementsByTagName("p");
    if (parrafos.length > 1) {
        var nuevoP = document.createElement("p");
        var texto = document.createTextNode("Párrafo reemplazado");
        nuevoP.appendChild(texto);
        // Reemplaza el nodo en la posición 1 del segundo párrafo
        divi.replaceChild(nuevoP, parrafos[1]);
    } else {
        alert("No existe un segundo párrafo para reemplazar.");
    }
}

// Elimina el párrafo que haya inmediatamente detrás del primero
function borrarParrafo() {
    var divi = divActivo || document.getElementById("divisor");
    var parrafos = divi.getElementsByTagName("p");
    if (parrafos.length > 1) {
        divi.removeChild(parrafos[1]);
    } else {
        alert("No hay ningún párrafo detrás del primero para borrar.");
    }
}

// Clona toda la estructura del div con sus hijos (deep clone: true) y la añade al body

/*function clonarDiv() {
    var divi = document.getElementById("divisor");
    var divClonado = divi.cloneNode(true);
    document.body.appendChild(divClonado);
}*/

function clonarDiv() {
    var divi = divActivo || document.getElementById("divisor");
    var divClonado = divi.cloneNode(true);
    divClonado.removeAttribute("id");
    document.body.insertBefore(divClonado, document.querySelector("button"));
    divActivo = divClonado;
}