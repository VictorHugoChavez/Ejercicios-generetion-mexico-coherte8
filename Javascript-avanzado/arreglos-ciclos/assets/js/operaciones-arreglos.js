let numeros = [1, 3, 5, 5, 46546, 234, 3464, 654321, 154, 354, 641, 646521, 647651332, 111, 6426] // arreglo
    /* numeros.forEach(function(numero, indice) { */
numeros.forEach(numero => { //recorre todos los elememtos del arreglo, el indice te dice que valor corresponde al array, se puede decir que el segundo valor, es nesesario poner valores, y si ponemos el tercero va imprimir todo nuestro arreglo el tamño del
    document.write(numero + '<br>')
});


let numeros2 = numeros.map(function(elemnet) {
    return elemnet;
    // nos permite crear un arreglo  nuevo atraves de otro arreglo
});
document.write(` <br> ${numeros2}`)

///ejemplo e .map
/* let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas;

frutas2.push('pera')
document.write(`<br> ${frutas} <br>`)
document.write(`<br> ${frutas2} <br>`) */
//Map crea un arreglo atraves de otro arreglo
let frutas = ['mango', 'uva', 'piña'];
let frutas2 = frutas.map(function(elemntosa) {
    return elemntosa;
});

frutas2.push('pera') //agrega el elemento pera al arreglo frutras2
document.write(`<br> ${frutas} <br>`)
document.write(`<br> ${frutas2} <br>`)


//includes solo verifica si esta el elemnto dentro de los arrglos, arrojando  false o   true
document.write(`<br> ${numeros.includes('dija')} <br>`);

//filter los elementos que cumplen cierta condicion

let numeropares = numeros.filter((elemento) => { // filtra dependiendo de la condcion 
    /*     if (elemento % 2 == 0) {
            return true;
        } else {
            return false;
        } */
    /*     console.log(elemento % 2 == 0)

        return elemento % 2 == 0;  */ // indica que si nuestro residuo es igual a 0 entonces arrojara verdadero o falso
    if (elemento > 100) {
        return true;
    }

})
document.write(`<br> ${numeropares} <br>`);

let frutasco = ['Mango', 'uva', 'piña', 'Mandarina', 'Manzana', 'Aguacate'];
let frutasfiltro = frutasco.filter((fruta) => {
    /*     if (fruta.includes('m') == true) {
            return true;
        } */
    return fruta.toLowerCase().includes('M'); // debe ser especifico si es mayusculas o minusculas // include es decir incluye en este caso dice M,TOLOWERCASE es transforma mayusclas en minusculas, toUppercase es para transformar a mayusculas
})
document.write(`<br> ${frutasfiltro} <br>`)

/* Sort  sirve para ordenar conforme al primer elemento no utilizar*/

let otrosNumeros = [9, 2, 3, 5, 1, 4, 8, 6, 7, 11]
document.write(`<br> ${otrosNumeros.sort()} <br>`)

/*reverse invierte el orden de los elemntis de un arreglo, invirtiendolos*/
/* ejemplo  es como un chat*/
document.write(`<br> ${numeros.reverse()} <br>`)

/* find   obtiene el primer elemento que cumpla con una condicion*/
let frutaEncontrada = frutas.find((elemtary) => {
    return elemtary.toLocaleLowerCase().includes('piña');
});

document.write(`<br> ${frutaEncontrada} <br>`)