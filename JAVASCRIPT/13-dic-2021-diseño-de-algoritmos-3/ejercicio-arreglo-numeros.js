/*Tomar los números de un arreglo llamado 'numeros', [1, 4, 7, 9, 19, 15, 46, 27, 40, 123]
- multiplicar cada numero por dos
-guardar los resultados en un arreglo llamado 'resultado'
-imprimir en consola o en el body cada elemento del arreglo 'resultado'

******************** realizar el ejercio con funciones y con los ciclos*******************/

const numeros = [1, 4, 7, 9, 19, 15, 46, 27, 40, 123];
const resultado = [];

for (let i = 0; i < numeros.length; i++) {
    resultado.push(numeros[i] * 2)
    console.log(resultado[i]);


}

console.log(numeros);
console.log(resultado);