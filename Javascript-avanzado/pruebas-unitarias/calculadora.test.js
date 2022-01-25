const { sumar, restar, multiplicar } = require('./calculadora');

describe('Pruebas eb el componente calculadora', () => {
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    })

});


describe('Pruebas  del componente calculadora', () => {
    test('Pruebas en la funcion restar', () => {
        expect(restar(6, 5)).toBe(1);
    })

});

describe('Pruebas eb el componente calculadora', () => {
    test('Pruebas en la funcion multiplicar', () => {
        expect(multiplicar(3, 2)).toBe(6);
    })

});
// va dentro de llaves ya que lo estoy exportandod de mi archivo calculadora.js {}, asi como exporta debe declararse