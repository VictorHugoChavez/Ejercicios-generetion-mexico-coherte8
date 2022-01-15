/*Escribir un documento html el cual debe contener un input y un botón.
Escribir un programa en donde se defina un número secreto.
Se debe leer el valor que el usuario escriba en el input y darle pistas al usuario sobre si adivinó o no el número secreto.

Si el número que escribio el usaurio es igual al número secreto se debe mostrar Felicidades, adivinaste el número secreto
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 5, se debe mostrar Calienteeeeeeee
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 10, se debe mostrar Caliente
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 20, se debe mostrar Tibio
Si la diferencia entre en número ingresado y el número secreto es menor o igual a 30, se debe mostrar Frio
Si la diferencia entre en número ingresado y el número secreto es mayor a 30, se debe mostrar Congelado*/
const numeroMagico = parseInt(Math.random() * 99 + 1);
let boton = document.getElementById("btn");

boton.onclick = function() {
    let palabra = document.getElementById("palabra");
    let body = document.getElementById("respuesta");
    body.innerHTML = `<h3>${numeroSecreto(palabra.value)} el ${palabra.value}</h3>`;
}

function numeroSecreto(numero) {
    let respuesta;
    distancia = Math.abs(numeroMagico - numero);
    if (distancia == 0) {
        respuesta = "Felicidades encontraste el numero " + numero;
    } else if (distancia < 5) {
        respuesta = "Calienteeeee";
    } else if (distancia < 10) {
        respuesta = "Cliente";
    } else if (distancia < 20) {
        respuesta = "Tibio";
    } else if (distancia < 30) {
        respuesta = "Frio";
    } else {
        respuesta = "Congelado";
    }
    return respuesta;
}