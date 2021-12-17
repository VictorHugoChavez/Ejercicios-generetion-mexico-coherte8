function procesadorDeFrutas(manzanas, naranjas) {
    let jugo = 'Jugo de ' + manzanas + ' manzana y ' + naranjas + ' naranja.';
    return jugo;
}

let jugodeManzana = procesadorDeFrutas(4, 0);
console.log(jugodeManzana);
let jugodeNaranja = procesadorDeFrutas(0, 5);
console.log(jugodeNaranja);