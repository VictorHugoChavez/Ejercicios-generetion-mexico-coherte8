 const sumar = (numero1, numero2) => {
     return numero1 + numero2;
 }

 const restar = (numero1, numero2) => {
     return numero1 - numero2;
 }
 const multiplicar = (numero1, numero2) => {
     return numero1 * numero2;
 }
 const dividir = (numero1, numero2) => {
     return numero1 / numero2;
 }

 const mostrarResultado = (operacion, numero1, numero2, resultado) => {
     const respuesta = document.createElement('h3');
     respuesta.textContent = `La ${operacion} del ${numero1} y el ${numero2} es de ${resultado}`
     document.body.appendChild(respuesta);
 }


 module.exports = {
     sumar,
     restar,
     multiplicar,
     dividir
 }

 /* export {
     sumar,
     restar,
     multiplicar,
     dividir,
     mostrarResultado
 } */

 // se puede hacer en conjunto o pude hacer uno por uno


 ///pruebas unitarias, que son y que beneficios
 //https://content.breatheco.de/es/lesson/how-to-create-unit-testing-with-Javascript-and-Jest#escribiendo-tu-primera-prueba-unitaria-con-jest

 //https://jestjs.io/ nos ayuda hacer pruebas lña pagina, es codigo que prueba nuestro codigo