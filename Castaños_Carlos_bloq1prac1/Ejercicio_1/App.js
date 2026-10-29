let suma = 0;
let mayores100 = 0;

for (let i = 1; i <= 5; i++) {
    let num = parseInt(prompt(`Introduce el número ${i}:`));
    suma += num;
    if (num >= 100) {
    mayores100++;
    }
}

alert(`Suma total: ${suma} \n Mayores de 100: ${mayores100}`);
console.log(`Suma total: ${suma}`);
console.log(`Mayores de 100: ${mayores100}`);