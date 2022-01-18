// https://lenguajejs.com/javascript/caracteristicas/eventos/  se revisa la pagina para el tema de eventos
//https://www.arkaitzgarro.com/javascript/capitulo-15.html los diferentes eventos que podemos ocupar 
//https://developer.mozilla.org/es/docs/Web/Events eventos de javascript

let $titulo = document.querySelector('#titulo')
let $mensaje = document.querySelector('#mensaje');
let $btnMensaje = document.querySelector('#btnMensaje'); // hace referencia a la etiqueta que tiene id btnmensaje
let $spanError = document.querySelector('span')

/* addEventListener agrega un evento al elemento */
$btnMensaje.addEventListener('click', () => { // el click es cuando le damos click y nos informa el javascript
    console.log("No lo vuelvas hacer");
}); // primero es el eventos que va disparara , la segunda es la funcion anonima del evento

$mensaje.addEventListener('keydown', (e) => { //sucede  que guarda la informacion cuando presiona una tecla (e) estamos haciendo referencia al evento keydown
    console.log(e.target.value);

    if (e.target.value.length < 3) {
        $spanError.classList.remove('hide');
        $spanError.classList.add('error');
    } else {

        $spanError.classList.add('hide');
        $spanError.classList.remove('error');
    } //
    /*     console.log(e); */
    /* console.log("Escribiste mal "); */
})

// el segundo valor no nesesariamente deber ser funcion anonima, puede tener una funcion  ya dentro