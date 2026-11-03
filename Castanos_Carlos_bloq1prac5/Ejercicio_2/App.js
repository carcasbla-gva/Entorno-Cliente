window.onload = function() {
    var select = document.getElementById("colorSelect");
    var parrafo = document.getElementById("parrafoTexto");

    select.onchange = function() {
        parrafo.style.color = this.value;
    };
};