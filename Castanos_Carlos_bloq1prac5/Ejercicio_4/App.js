window.onload = function() {
    var checkNegrita = document.getElementById("checkNegrita");
    var checkCursiva = document.getElementById("checkCursiva");
    var parrafo = document.getElementById("parrafoTexto");

    checkNegrita.onclick = function() {
        if (this.checked) {
            parrafo.style.fontWeight = "bold";
        } else {
            parrafo.style.fontWeight = "normal";
        }
    };

    checkCursiva.onclick = function() {
        if (this.checked) {
            parrafo.style.fontStyle = "italic";
        } else {
            parrafo.style.fontStyle = "normal";
        }
    };
};