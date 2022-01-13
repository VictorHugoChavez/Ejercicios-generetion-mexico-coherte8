/*
Escribir un programa que detecte el cupón que tiene el usuario

Bronce se le hará un descuento del 5 %
Plata se le hará un descuento del 10%
Oro se le hará un descuento del 20%
Platino se le hará el descuento del 25%

-El usuario introduce el precio primero y después el cupón
-El programa debe mostrar el precio original y el precio con el descuento aplicado
-También debe mostrar el mensaje "El cupón no es válido" en caso de que sea un 
 cupón equivocado

*/



let cuponDescuento = prompt('Ingrese su cupon (Bronce,Plata, Oro, Platino');
let valor = parseInt(prompt('Ingrese el precio del producto'));
let descuento;




switch (cuponDescuento) {
    case "Bronce":
        descuento = valor * 0.95;
        break;
    case "Plata":
        descuento = valor * 0.90;
        break;
    case "Oro":
        descuento = valor * 0.80;
        break;
    case "Platino":
        descuento = valor * 0.75;
        break;
    default:
        console.log("Cupon erroneo")
        break;
}
document.write(`El valor que ingreso es ${valor} y el cupon que tiene es " ${cuponDescuento} " por lo tanto su descuento es de ${descuento} `)