/*fuljo de orden en que se ejecuta las declaraciones */

let miVariable = 10;
console.log(miVariable);

/* Estructuras de control de flujo */

let edad = 17;
let tieneIne = true;

if (edad >= 18 && tieneIne == true) { // al ocupar la condicion or nos dara la opcion 1, recordar que con uno se cumpla 
    console.log('Puede entrar');
} else {
    console.log('No puedes entrar')
}

/*
6-11
12-18
19-23
0-5
*/

/* operador ternario*/

/*condicion a evaluar ?  se ejecuta si es verdadero : se ejecuta si es falso; */

let edad1 = 19 // es una forma corta del if
    // condicion || pregnta ||  se ejecuta verdadero  || se ejucta si es falso  
    /*     (edad1 >= 18) ? console.log("Mayor de edad") : console.log("Menor de edad"); */

/* let pregunta = (edad1 >= 18) ? "Mayor de edad" : "Menor de edad"; */

/* console.log(pregunta); */
/* 
let preguntaedad = `Tengo ${edad1} años y soy ${(edad1 >= 18) ? "Mayor de edad" : "Menor de edad"} `;

console.log(preguntaedad);
/*  */
/* let dia; */

/* if (dia === 0) {
    console.log("Domingo");
} else if (dia === 1) {
    console.log("Lunes");
} else if (dia === 2) {
    console.log("Martes");
} else if (dia === 3) {
    console.log("Miercoles");
} else if (dia === 4) {
    console.log("Jueves");
} else if (dia === 5) {
    console.log("Viernes");
} else if (dia === 6) {
    console.log("Sabado");
} else {
    console.log("Este noi es undia");
} */

//switch - case

/*
    switch(variable a evaluar){
        case valor:
            -codigo a ejecutar
        break;
         case valor:
            -codigo a ejecutar
        break;
         case valor:
            -codigo a ejecutar
        break;
         case valor:
            -codigo a ejecutar
        break;
         case valor:
            -codigo a ejecutar
        break;
         case valor:
            -codigo a ejecutar
        break;
        .
        .
        .
        .
        .
    }

*/

let dia = 3;

switch (dia) { //evalua la variable y que caso es similar
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Juves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    default:
        console.log('No esxiste el dia');
        break;

}

let cuponDescuento = "Plata";
let descuento;

switch (cuponDescuento) {
    case "Bronce":
        descuento = 5;
        break;
    case "Plata":
        descuento = 10;
        break;
    case "Oro":
        descuento = 15;
        break;
    default:
        console.log("Cupon erroneo")
        break;
}
console.log(descuento);