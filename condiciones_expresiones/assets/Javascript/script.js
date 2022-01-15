/* Operadores aritemticos */
//Realiza operaciones + - / * % ()

let operacion = 3 * 5 + (10 - 5);
document.write(`${operacion} <br>`);

let operacion2 = 3 - 5 / 2 * 4;
document.write(`<br> ${operacion2}`);

/*Operadores racionales */
// < > == === <= >= != !==
//boollean true false

document.write(`<br> ${7<7}`);
document.write(`<br> ${7<=7}`);
document.write(`<br> ${7=="7"}`);
document.write(`<br> ${7==="7"}`);
document.write(`<br> ${7 !="7"}`);
document.write(`<br> ${7!=="7"}`);

/*Incremento y decremento */
// +=, -=, *=, /=
let incremento = 5;
incremento += 5; // incremento = incremento + 5;
document.write(`<br> ${incremento}`);

incremento -= 5;
document.write(`<br> ${incremento}`);

incremento *= 5;
document.write(`<br> ${incremento}`);

incremento /= 5;
document.write(`<br> ${incremento}`);

/* operador unario */
// ++, --
//suma uno,resta uno

let suma = 0;
document.write(`<br>  Linea 41 valor obetenido ${suma}`);
suma++;
document.write(`<br> Linea 43 valor obtenido ${suma}`);
suma++;
document.write(`<br> Linea 45 valor obtenido ${suma}`);
suma--;
suma--;
document.write(`<br> Linea 48 valor obtenido ${suma}`);

/*  */
for (let i = 0; i < 10; i++) {
    /* codigo */
}

/* 
++variable =preincremento -primero modifica el valor y ya hace uso de la variable ++ = postincrementi - usando las variable y despues hace el incremento*/

let num = 5;
document.write(`<br>${num++}`); // 5
document.write(`<br>${num}`); //6

for (let i = 0; i < 3; i++) {
    //iteracion
    //primer iteracion, se define
    console.log('este es el ciclo padre');
    for (let j = 0; j < 3; j++) {
        console.log('este es ciclo hijo');
    }
}