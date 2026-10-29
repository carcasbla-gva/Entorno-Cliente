function anyadirElemento() {
    var lista = document.getElementById("listaelemen");
    var nuevoLi = document.createElement("li");
    var texto = document.createTextNode("tigre");
    nuevoLi.appendChild(texto);
    lista.appendChild(nuevoLi);
}

function insertarElemento() {
    var lista = document.getElementById("listaelemen");
    var items = lista.getElementsByTagName("li");

    if (items.length >= 1) {
        var nuevoLi = document.createElement("li");
        var texto = document.createTextNode("elefante");
        nuevoLi.appendChild(texto);

        if (items.length > 1) {
            lista.insertBefore(nuevoLi, items[1]);
        } else {
            lista.appendChild(nuevoLi);
        }
    }
}

function reemplazarElemento() {
    var lista = document.getElementById("listaelemen");
    var items = lista.children; // Solo hijos de primer nivel

    if (items.length > 1) {
        var nuevoLi = document.createElement("li");
        var texto = document.createTextNode("guepardo");
        nuevoLi.appendChild(texto);

        lista.replaceChild(nuevoLi, items[1]);
    } else {
        alert("No hay suficiente elementos para reemplazar.");
    }
}

function borrarElemento() {
    var lista = document.getElementById("listaelemen");
    var items = lista.children;

    if (items.length > 1) {
        lista.removeChild(items[1]);
    } else {
        alert("No hay elementos suficientes para borrar.");
    }
}

function clonarLista() {
    var lista = document.getElementById("listaelemen");
    var listaClonada = lista.cloneNode(true);
    document.body.appendChild(listaClonada);
}

// Crear sublista dentro del primer <li> ("leon") usando métodos DOM
function crearSublistaDOM() {
    var lista = document.getElementById("listaelemen");
    var primerLi = lista.getElementsByTagName("li")[0];

    var subUl = document.createElement("ul");
    var subLi = document.createElement("li");
    var texto = document.createTextNode("Salvaje");

    subLi.appendChild(texto);
    subUl.appendChild(subLi);
    primerLi.appendChild(subUl);
}

// Crear sublista dentro del primer <li> ("leon") usando innerHTML
function crearSublistaInnerHTML() {
    var lista = document.getElementById("listaelemen");
    var primerLi = lista.getElementsByTagName("li")[0];

    primerLi.innerHTML += "<ul><li>Salvaje</li></ul>";
}