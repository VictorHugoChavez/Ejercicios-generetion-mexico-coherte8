/*
Crea una función que calcule el descuento que se le va a hacer a un cliente 
según el valor de su compra.

Si es una compra de menos de 100, se le hará un descuento del 10%. (0-99)
Si es una compra de 100 hasta menos de 200 se le hará un descuento del 20%.(100 - 199)
y si es una compra de más de 200 se le hará un descuento del 30%. (200 =>)

Utiliza prompt, funciones, condicionales y operadores de comparación.

La función debe pedir el precio al cliente, e imprimir el resultado del precio menos el descuento
 ya sea en pantalla o en consola.

(Se guardará en un archivo nuevo llamado ejercicioFunciones.js)


*/




function descuentocliente(x) {
    if (x < 100) {
        total = x * 0.90;
    } else if (x >= 100 && x < 200) {
        total = x * 0.80;
    } else if (x >= 200) {
        total = x * 0.70;
    }
    console.log('El totla a pagar ya contado del descuento es de  $ ' + total + ' pesos')
}

const x = parseInt(prompt('Ingresa el dinero gastado: '));
descuentocliente(x);

/*
function precioFinal(compra) {
    if (compra < 100) {
        descuentoAplicado = compra * 0.9;
    } else if (compra >= 100 && compra < 200) {
        descuentoAplicado = compra * 0.8;
    } else if (compra >= 200) {
        descuentoAplicado = compra * 0.7;
    }
    document.write('<h1> El total a pagar ya contando es descuento es de $' + descuentoAplicado + ' pesos</h1>')
}

let compra = parseInt(prompt('Ingresa el dinero gastado: '));
precioFinal(compra)*/