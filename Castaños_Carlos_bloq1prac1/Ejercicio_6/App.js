let cadena = prompt('Introduce una cadena: ');
let palabras = cadena.split(' ');

document.write(`La longitud de la cadena es ${cadena.length}<br>
La cadena en mayusculas es ${cadena.toUpperCase()}<br>
La cadena en minusculas es ${cadena.toLowerCase()}<br>
`);

document.write('CADENA NORMAL<br>');
for (let i = 0; i < palabras.length; i++) {
document.write(`${palabras[i]}<br>`);
}

document.write('CADENA AL REVÉS<br>');
for (let i = palabras.length - 1; i >= 0; i--) {
document.write(`${palabras[i]}<br>`);
}