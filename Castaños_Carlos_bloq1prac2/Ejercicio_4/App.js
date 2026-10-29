/*function redimensionar() {
    alert("¡Bienvenido al sitio web!");
if (navigator.userAgent.includes("MSIE")) {
window.resizeTo(500, 500);
} else {
        alert("No permitido con este navegador");
    }
}*/
/*window.onload = function() {
    alert("¡Bienvenido al sitio web!");
}*/
function redimensionarPantalla() {
    var navegador = navigator.userAgent.toLowerCase();
    if (navegador.indexOf("msie") !== -1 || navegador.indexOf("trident") !== -1) {
    window.resizeTo(500, 500);
    }else {
        alert("Operación no permitida con este navegador");
    }
}
redimensionarPantalla();