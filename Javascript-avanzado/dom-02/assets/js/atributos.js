let $titulo = document.querySelector('#titulo');
let $texto = document.querySelector('.texto');

$texto.id = 'texto' // inserrta un Id a nuestra eqtiqueta de html
    /* $texto.style = 'color : red ; font-size: 24px'; */

$texto.className = 'bg-purple h3'; // aqui enlaza el java con CSS de talr forma que lo llamamos con className 
//$texto.className = 'h3'; // si lo agregamos de estra forma el texto se hace grande pero pierde el color para eso se agrega la clase mas clase
$texto.classList.add('text-center'); // añade la clase dentro de nuestro className
$texto.classList.remove('bg-purple'); // remueve la clase llamada bg-purple