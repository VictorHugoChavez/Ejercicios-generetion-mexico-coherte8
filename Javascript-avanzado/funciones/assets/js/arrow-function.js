/* Arrow Function
Funcion flecha
es un bloque de codigo reutilizable
Puede tener o no parametros de entrada
Puede devolver o no valor
*/
/* function sumar(numero1, numero2) { 

    return numero1 + numero2; 

} */

const sumar = (numero1, numero2) => { // indica que la funcion es flecha, es lo mismo que fuction.
    return numero1 + numero2;
}


let numero1 = parseInt(prompt('iNGRESE NUMERO 1'));
let numero2 = parseInt(prompt('Ingrese numero 2'));
let suma = sumar(numero1, numero2);


document.write(`La suma de ${numero1} y ${numero2} es ${suma} <br>`);