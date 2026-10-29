let precio = parseFloat(prompt("Introduce el precio del artículo:"));
let tipoIva = 0.21;

let iva = precio * tipoIva;
let total = precio + iva;

alert(`Precio base: ${precio.toFixed(2)} € \n IVA 21%: ${iva.toFixed(2)} € \n Total: ${total.toFixed(2)} €`);
console.log(`IVA: ${iva.toFixed(2)} €`);
console.log(`Total con IVA: ${total.toFixed(2)} €`);