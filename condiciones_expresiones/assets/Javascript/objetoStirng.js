let cadena1 = 'Hola';
console.log(cadena1);
let cadena2 = new String('Adios') // Objeto String
console.log(cadena2)

/* let arreglo = new Array(1);
console.log(arreglo); */


//includes () busca una cadena en otra y regresa tur o false
console.log(cadena2.toLocaleLowerCase().includes('a'));
console.log(cadena2.toLocaleLowerCase());
console.log(cadena2.toUpperCase());


//cohersion y conversion

//cohersion - Javascript convierte en automatico un tipo de dato en otro

console.log(cadena1.toLowerCase());

/*Funcion que recibe una palabra y regresa invertida*/
let palabrasinver = parseInt(prompt("Ingrese la cantidad de palabras que desea invertir"))
let palabra = "";
let arreglo = palabra.split("");

// el espacio dice que va separar y pondra los arreglos. Se puede poner un valor, si dejamos el espacio "" va crear una division con cada una de las letras 
/* let arregloInvertido = arreglo.reverse(); */
console.log(arreglo.reverse().join(""))

function invertirPalabra(cadena) {
    document.write(`<br>La palabra que ingreso es ${palabra}`)
    let arreglo = cadena.split("");
    arreglo.reverse();
    let cadenaInvertida = arreglo.join("") // une los elemntos de una arreglo y regresa un string
    return document.write(`<br>La Palabra invertida es:  ${cadenaInvertida}`);
}
for (i = 0; i < palabrasinver; i++) {
    palabra = prompt("Ingrese la cadena de texto que desea invertir")
    invertirPalabra(palabra)
}


/* invertirPalabra('Generetion') */