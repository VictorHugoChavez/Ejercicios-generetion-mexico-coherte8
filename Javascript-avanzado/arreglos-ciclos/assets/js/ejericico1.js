let numeros = [1, 3, 5, 5, 46546, 234, 3464, 654321, 154, 354, 641, 646521, 642, 111, 6426, 15656, 15, 18, 19, 20];
let suma = 0;
let prom;
for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    prom = suma / numeros.length;
}

document.write(`El arreglo del ejercicio es ${numeros}`);
document.write(`<br> La suma de total es de ${suma}<br>`);
document.write(`<br> El promedio es de ${prom}`);


let numerosejercicio2 = [1, 2];
let sum = 0;
let rest = 0;

let prome;

for (let n = 0; n < numerosejercicio2.length; n++) {
    sum += numerosejercicio2[n];
    rest -= numerosejercicio2[n];
    /* 15
     */
}

document.write(`<br><br>Mi arrego es de ${numerosejercicio2} <br> por lo cual la suma es de ${sum} <br> la resta de los numeros  es de  ${rest}`)



/******--------------------EJercio extra */

const ejercicio1 = [];
let pregunta = parseInt(prompt("Ingrese la cantidad de chekes"));
let suma3 = 0;
let promen;
let varianza;
let cuestionario1;
let operaciones = prompt("Ingrese que desea calcular (Suma,Promedio o Varianza")

switch (operaciones) {
    case 'Suma':
        for (i = 0; i < pregunta; i++) {
            cuestionario1 = parseInt(prompt("Ingrese los valores que dese sumar"));
            ejercicio1.push(cuestionario1);
        }
        for (i = 0; i < ejercicio1.length; i++) {
            suma3 += ejercicio1[i];
        }
        document.write(`<br><br>Usted tiene ${pregunta} chekes <br> Los valores ingresados son ${ejercicio1} <br>
         La suma de ellos es de ${suma3}<br>`)
        break;
    case 'Promedio':
        for (i = 0; i < pregunta; i++) {
            cuestionario1 = parseInt(prompt("Ingrese la calificaciones de los alumnos"));
            ejercicio1.push(cuestionario1);

        }
        for (i = 0; i < ejercicio1.length; i++) {
            suma3 += ejercicio1[i];
        }
        document.write(`<br>Usted tiene ${pregunta} alumnos y las calificaciones ingresadas son ${ejercicio1} la suma de ellos es de ${suma3}<br>`)
        break;
    case 'Varianza':
        for (i = 0; i < pregunta; i++) {
            document.write(`<br>La suma de los valores es ${pregunta}`);
        }
        break;
    default:
        document.write(`<br><br>No existe la valor indicado`);
        break;
}