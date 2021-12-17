/* Los arregos son aquellos elementos que tinen dentro finciones
Tienen metodos o funciones que nos permiten ordenado manipular los datos almacenados*/

const arreglo1 = []; //MANERA 1
console.log(arreglo1);

const arreglo2 = Array.of(1, 'Hola', true); // MANERA 2
console.log(arreglo2);

//const arreglo3 = newArray(3, true, 'adios') // MANERA 3 MANERA ANTIGUA

/*arreglos agrupan los valores */

const frutas = ['manzana', 'naranjas', 'uvas', 'sandias', [1, 2, 3, 4, 5, ['A', 'B', 'C']]];
//notacion de corchetes

console.log(frutas[1]);
console.log(frutas[3]);
console.log(frutas[4]);
console.log(frutas[4][5][1]);

//metodos
/* length=longitud*/
const numeros = [1, 2, 3, 4, 5, 6, 7];
console.log(numeros.length);

/* push= añade un elemento al final de nuestro arreglo */

numeros.push('E');
console.log(numeros);

/*pop=elimina el ultimo elemnto */

numeros.pop();
console.log(numeros);

/*unshift = agrega un elemento inicio */

numeros.unshift(1);
console.log(numeros);

/*shift= elimina el primer elemento */
numeros.shift();
console.log(numeros);