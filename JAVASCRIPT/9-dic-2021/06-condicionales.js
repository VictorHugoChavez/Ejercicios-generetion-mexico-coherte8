/*CONDICIONALES SE UTILIZA PARA TOMAR DECISIONES DENTRO DE NUESTRO PROGRAMA */

/*
if( condicion)
{
    codigo
    codigo
    codigo
    codigo
}
*/


let edad = parseInt(prompt('Ingresa tu edad por favor : '));
if (edad >= 18 && edad < 30) {
    document.write('ERES UN JOVEN');
} else if (edad >= 30 && edad < 60) {
    document.write('ERES UN ADULTO');
} else if (edad >= 60) {
    document.write('ERES UN ADULTO MAYOR');
} else {
    document.write('ERES UN NIÑO');
}