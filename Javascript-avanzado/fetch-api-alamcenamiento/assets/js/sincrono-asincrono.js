/*Codigo sincrono */
let variableSincrona;
variableSincrona = 10 * 3;
console.log(variableSincrona);

/* Codigo asincrono*/
let variableASincrona;
setTimeout(() => {
    variableASincrona = 10 * 3; //es una tarea programada y se va ejecutar despues de cierto tiempo
    //primer valor es una funcion anonima y la segunda es el tiempo que se va tardar y el valor es en milisegundo 
    console.log(variableASincrona);
}, 2000)
console.log(variableASincrona);