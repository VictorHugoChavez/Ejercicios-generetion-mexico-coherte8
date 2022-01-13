/* Funcion
es un bloque de codigo reutilizable
Puede volver o no un valor*/



function sumar(suma1, suma2) { //Operaciones o codigo a ejecutar, las mismas entradas seran las mismas salidas

    return suma1 + suma2; //este debe ser lo ultimo para una funcion
    console.log('Hoal desde la funcion');
}

function restar(suma1, suma2) {
    document.write(`La resta de ${suma1} y ${suma2} es ${suma1-suma2} <br>`);
}

let suma1 = parseInt(prompt('iNGRESE NUMERO 1'));
let suma2 = parseInt(prompt('Ingrese numero 2'));
let suma = sumar(suma1, suma2); //se declara la variable ya que la funcion me esta regresando un valor 

//tempalte string habilita el uso del texto, habilitando tambien javascript
//` backstick o comilla invertida 

restar(suma1, suma2);

document.write(`La suma de ${suma1} y ${suma2} es ${suma} <br>`); /// tambien podemos ocupar etiquetas de html, aqui ocupa el javascript junto con el html es una froma abrevida   ${}  de utilizar y la forma de abajo se utiliza concatenat
document.write('La suma de ' + suma1 + ' y ' + suma2 + ' es ' + suma);