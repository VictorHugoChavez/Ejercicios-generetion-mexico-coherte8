// las variables que se conectan al DOM llevan por delante un $

// let $title = document.getElementById("title");
// title.textContent = 'Titulo escrito desde JS';


//getElementbyId devuelve elementos
// getElementbyClassName, byName and byTagName devuelven arreglos 

// querySelector
// document.querySelector('.className')
// document.querySelector('#id')
// document.querySelector('tag')

let $title = document.querySelector('#title');
$title.textContent = 'Titulo escrito desde JS';

let $paragraph = document.querySelector('p');
console.log($paragraph.textContent);

// querySelectorAll seleccionna todos los elementos que comparten la misma etiqueta
let $paragraphs = document.querySelectorAll('p');
// forma para acceder a la información que almacena el arreglo 
console.log($paragraphs[1].textContent);

// Crear elementos HTML desde JS
// Este elemento no estará insertado en el HTML doc, solo estará en memoria
// Esto nos da la habilidad de modificarlo antes de insertarlo en el DOM

// Lo creamos 
let subtitle = document.createElement('h3');

// Lo modificamos 
subtitle.textContent = 'Este es un subtítulo desde JS';

// Lo insertamos
// document nos permite acceder a la página web
// .body nos lleva a esa parte del documento
// .append inserta el elemento al final del documento 
/* document.body.append(subtitle); */
$title.insertAdjacentElement("afterend", subtitle); // inserta el elemento  despues te lña qtiqueta que hice referencia 
$titulo.remove();

let $contenido = document.querySelector('#Contenido')
    //console.log($contenido.textContent = "Hola"); //Borra lo que tiene adentro de mi a Html, mo nos permite poner etiquetas como HTML
console.log($contenido.innerHTM = '<br>'); // la eqtiqueta br o tambien otra eqtiqueta si lo puede escribir con ayuda con el innerHTM, hasta sobreescribir el Html o insentarlo,devuelve  el conetenido Html del elemento, se puede asignar para modificar, a este solo modifica al hijo 
console.log($contenido.outerHTML = 'Hola') // afecta todo el elemnto de nuestra ID contenido, incluye al div, se puede decir  que el outer modifico padre y el hijo 

let contenidoParrafo = document.createElement('p');
contenidoParrafo.textContent = 'Contenido de mi nuevo parrafo';
//$contenido.appendChild(contenidoParrafo); //crea ellemnto hijo dentro del Html, crea dentro del elemnto pero hasta el final