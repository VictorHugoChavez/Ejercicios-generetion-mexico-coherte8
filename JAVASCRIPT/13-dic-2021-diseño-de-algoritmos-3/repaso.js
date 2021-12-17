/*
ARREGLOS
*/

const comidas = ['pozole', 'quesadillas', 'tacos'];

/*
length
*/

console.log(comidas.length)

/*push agrega al final
pop - quita un elemnto del final
unshift- agrega elemento al inicio
shift quita elemento al inicio
*/

comidas.push('torta');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach - nos puede servir una accion por cada elemnto de nuestro arreglo de forma automaitica*/

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])

comidas.forEach(function(el) {
    console.log(el)
})

const numeros = [1, 4, 7, 8]; /// es el arreglo  de numeros
console.log(numeros); /// imprime en consola
numeros.forEach(function(el) { /// se mando a llamar la funcion para que no haya confusion
    let suma = el + 1; // se define la variable y se realiza la operacion del arreglo sumando mas uno
    console.log(suma); /// imprime en consola

})

/* ejercicio */
const arr = [];

function suma(num) { // este es la funcion
    let sumaNum = num + 1;
    return arr.unshift(sumaNum); // se puede utilizar el push (agrega al final) y el unshift (agrega al inicio)
    // va almazenar cada vez que se llame
}
suma(7); // se llama la funcion para que se agregue el valor
suma(9); /// recordar que  elvalor cambia ya que se puede reutilizar
suma(312);
suma(94132);
suma(364156146);


console.log(arr); // se imprime el valor