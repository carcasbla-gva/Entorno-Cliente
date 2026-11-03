window.onload = function() {
    var radios = document.getElementsByName("colorRadio");
    var parrafo = document.getElementById("parrafoTexto");

    for (var i = 0; i < radios.length; i++) {
        radios[i].onclick = function() {
            parrafo.style.color = this.value;
        };
    }
};