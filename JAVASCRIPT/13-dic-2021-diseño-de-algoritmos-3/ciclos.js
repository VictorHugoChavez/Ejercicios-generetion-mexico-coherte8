/* ciclos-bucles-loops

while
do while
for

*/

// while  si la condicion es verdadera se ejecuta 
/*
let condicion = 1; - valor inicial es el valor donde quiero  que comience
while(condicion){}  si la condicion es verdadera seguira repitiendo lo que esta dentro del while
se debe realizar una modificacion a nuestro valor incial
*/

// imprimir  todos los numeros 1-10

/*let condicion = 8; // se define el valor

while (condicion <= 10) { // se realiza la condicion  hasta que sea falso
    console.log(condicion); // imprime en la consola
    //condicion = condicion + 1; // simepre hay realizar la condicion para que no se haga un buche infinito definiendo el valor que requerimos
    condicion++; //  Se le conoce como incremento '++' , al elemento se le suma 1

}

let numero = 1;
numero++; //2
numero++; //3 
numero++; //4
numero--; //3  se realiza uan resta de 1, es abreviado
numero--; //2
numero--; //1

console.log(numero);

/*
do while
primero pega y luego ejecuta el do while

*/


/*let condicion = 1; // se define el valor

do { // primero ejecuta el codigo  para imprimir  como dicen "primero pega y luego ejecuta el do while" 
    console.log(condicion);
    condicion++;
} while (condicion <= 10); // despues de eso se detiene

/* CICLO FOR 
utiliza contador

*/

/*
for (let control = 1; control <= 10; contorl++) {

    console.log(control);
    // se incia con una variable, despues la condicon, hasta dodne terminara 

}
*/

const comidas = ['pozole', 'Tacos', 'Tamales', 'tortas'];

for (let i = 0; i < comidas.length; i++) {
    console.log(comidas[i]);
}