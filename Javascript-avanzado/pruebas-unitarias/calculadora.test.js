const { sumar, restar, multiplicar, dividir } = require('./calculadora');
/* 
describe('Pruebas eb el componente calculadora', () => {
PUEDE TENER DOS DESCRIBE PERO NO ES RECOMENDABLE YA QUE EL DESCRUBE HACE REFERENCIA AL ARCHIVO CALCULADORA.JS  Y LOS TEST SERIA LAS FUNCIONES QUE UIQERO COMPROBAR

}); */


describe('Pruebas  del componente calculadora', () => {
    test('Pruebas en la funcion restar', () => {
        expect(restar(6, 5)).toBe(1);
    })
    test('Pruebas en la funcion dividir', () => { /// esta es la otra forma de realiza r un test donde se ponde describe y despues todos los test que queremos realizar para comprobar nuestara funcion
        expect(dividir(4, 2)).toBe(2);
    })
    test('Pruebas en la funcion multiplicar', () => {
        expect(multiplicar(3, 2)).toBe(6);
    })
    test('Pruebas en la funcion sumar', () => {
        expect(sumar(3, 5)).toBe(8);
    })
});

/// para siempre que se este haciendo las preubas es nesesario hacer cambio en package.json hacer la modificacion en test poninedo jest --watchAll para quer siempre se haga el comando y si quiero terminar pruebas es ctrl+c

// va dentro de llaves ya que lo estoy exportandod de mi archivo calculadora.js {}, asi como exporta debe declararse

//pruebas unitarias comando  npm run test


//se ve en la consola  que espoersamos y lo que recibe la la funcion.


//https://jestjs.io/docs/using-matchers  PAGINA

//https://devhints.io/jest