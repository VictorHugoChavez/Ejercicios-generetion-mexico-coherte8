/*
Variable var se utiliza se utiliza  anteriormente , son variables globales
Variable let  es una variable  de contexto, solo vive en un bloque

*/

var numero = 40;
console.log(numero); //40

if (true) {
    var numero = 50; //50
    console.log(numero);
}
console.log(numero); //40

var texto = 'bootcamp java'; // bootcamp jave
console.log(texto)

if (true) {
    let texto = 'cohorte 8'; //cohorte 8
    console.log(texto);
    let numerofavorito = 666;
    console.log(numerofavorito);
}
console.log(texto); // bootcamp java
console.log(numerofavorito);
/* va maracar un error ya que la variable let solo existe dentro de la if, si fuese una variable  var lo imprime por estar declarada 
y ser global sin importar si esta dentro o fuera del if*/