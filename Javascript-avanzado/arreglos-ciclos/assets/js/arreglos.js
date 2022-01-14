//declarar un arreglo
/* const numeros = [5, 8, 9, 10, 15]; */

let numeros = new Array(); //es otra forma de declarar arreglos
numeros = [1, 3, 5, 5, 46546, 234, 3464, 654321] // arreglo

console.log(numeros.length);

document.write(numeros[5])

for (let i = 0; i < numeros.length; i++) { // ciclo for variable, condicion y el incremento i=i+1 forkma aberviada i++
    document.write(`${numeros[i]} <br>`) // lo que se hara adentro del for
}