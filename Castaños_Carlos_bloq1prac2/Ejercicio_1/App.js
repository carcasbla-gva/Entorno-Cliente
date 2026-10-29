let precio = parseFloat(prompt('Introduce el precio del producto:'));

function calcularIVA(precio) {
    const IVA = 0.21;
    return precio * IVA;
}

const ivaCalculado = calcularIVA(precio);
const precioFinal = precio + ivaCalculado;

alert(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);
console.log(`El precio final con IVA es: ${precioFinal.toFixed(2)}`);