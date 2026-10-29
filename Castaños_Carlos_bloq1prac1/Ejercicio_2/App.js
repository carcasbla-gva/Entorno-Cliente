let numeros = [7, 8, 2, 9, 10];
let sumaMayores8 = 0;

for (let n of numeros) {
    if (n > 8) {
    sumaMayores8 += n;
    }
}

alert(`Suma de los mayores de 8: ${sumaMayores8}`);
console.log(`Suma de los mayores de 8: ${sumaMayores8}`);