let title = document.getElementById('title'); // aqui vamos a referencias nuestro html con javascript ocupando document.getElementById e indicando la variable entre comillas simples
console.log(title)
title.textContent = 'Este texto esta escrito  desde javascript' // realiza el cambio a nuestro h1 de nuestro html

let parrafos = document.getElementsByTagName('p')
console.log(parrafos)

//parrafos[0].textContent = 'Parrafos escritos desde Javascript'; // aqui como existen varias variables  es nesesario indicarle que nodo o que "p" va ser la que modificque cuando ponemos 0 es el primer parrafo y si pongo el 1 buscara el segundo

/*for(let i=0; i < parrafos.length;i++){
    parrafos[i].textContent = 'Parrafo '+ i + ' escritos desde Javascript'

}*/
let email = document.getElementById('email');
let password = document.getElementById('password');

function getInformation() {
    console.log(email.value);
    console.log(password.value);
}