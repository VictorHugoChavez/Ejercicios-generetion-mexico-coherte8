/*
Operadores  aritmeticos nos sirven para hacer operaciones 
------------------------------NOMBRE: CHAVEZ CRUZ VICTOR HUGO ------------------------------------------------
+ Sirve para sumar o conectar
- Sirve para restar numeros
* Sirve para multiplicar dos numeros
/ Sirve para dividir dos numeros
% modulo nis sirve para obtener el residuo de una disvision

*/

const numero1 = parseInt(prompt('INGRESA EL NUMERO 1')); //prompt realiza una pregunta al usuario
const numero2 = parseInt(prompt('INGRESA EL NUMERO 2')); //parseInt transforma el valor en numero

const suma = numero1 + numero2; // se suman los numeros
const resta = numero1 - numero2; // se restan los numeros
const multiplicacion = numero2 * numero1; // se multiplican los numeros
const division = numero1 / numero2; // se dividen los numeros


console.log('Numero 1: ' + numero1);
console.log('Numero 2: ' + numero2);
console.log('Suma :  ' + suma); // imprime en consola
console.log('Resta: ' + resta); // imprime en consola
console.log('Multiplicacion : ' + multiplicacion); // imprime en consola
console.log('Division :' + division); // imprime en consola