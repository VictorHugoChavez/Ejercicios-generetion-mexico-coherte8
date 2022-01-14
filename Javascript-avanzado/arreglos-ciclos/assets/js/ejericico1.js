let numeros = [1, 3, 5, 5, 46546, 234, 3464, 654321, 154, 354, 641, 646521, 642, 111, 6426, 15656, 15, 18, 19, 20];
let suma = 0;
let prom;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    prom = suma / numeros.length;
}

document.write(`El arreglo del ejercicio es ${numeros}`);
document.write(`<br> La suma de total es de ${suma}<br>`);
document.write(`<br> El promedio es de ${prom}`);