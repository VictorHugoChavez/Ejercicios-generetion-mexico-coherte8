"use strict"
//clases, molde que nos permite crear objetos
class Animal {
    constructor(nombre, especie) { // es una funcion nuestro constructor
            //this hace refrencia al contexto en que se esta actualizando
            this.nombre = nombre;
            this.especie = especie;
            /*         console.log('Este es un constructor') */
        }
        // metodos == funcion+
    get getNombre() { //para cada uno de las variables debe ahber un get y set correspondiente //Solo tiene el proposito de leeer o modificar un atributo por cada uno de los atributos de nuestra clase
        return this.nombre;
    }
    set setNombre(nombre) {
        this.nombre = nombre
    }
    get getEspecie() { //para cada uno de las variables debe ahber un get y set correspondiente
        return this.especie;
    }
    set setEspecie(especie) {
        this.especie = especie;
    }

    presentarse() {
        document.write(` Hola soy ${this.especie} y me llamo ${this.nombre} <br>`);
    }
    cambiarNombre(nuevo) {
            this.nombre = nuevo;
            let mensaje = `Mi nombre es  ${this.nombre} y soy un  ${this.especie} <br>`
                //return mensaje;
            return document.write(mensaje)
        }
        //Metodos estaticos
    static saludar() { //Pertenece solo a la clase y no se hereda a los objetos
        return console.log('Hola soy un metodo estatico')
    }

}
Animal.saludar();

//Animal.presentarse()


//Heredan los atrunutos y los metos de la clase qeu esten utilizando
const Animal1 = new Animal('Scooby', 'Perro'); // creamos un objeto atraves de nuestra clase animal
console.log(Animal1);
//instanciar = hacer una copia, crear un objeto
const Animal2 = new Animal('Oddi', 'Perro');
console.log(Animal2)

const Animal3 = new Animal();
console.log(Animal3)

Animal1.presentarse();
Animal2.presentarse();
Animal3.presentarse();

console.log(Animal1.nombre);

Animal.nombre = 'Scrapy'
console.log(Animal1.nombre);

Animal1.cambiarNombre("odiixsdda");
//document.write(Animal1.cambiarNombre("odiixsdda")); //si no ponemos a donde va ser dirigido no va imprimir ya sea que sea console.og y document.write.

//Getters y Setter 
// get= obtener el valor de un Atributos
//set= fijar o cambiar el valor de un atributo

console.log(Animal1.getNombre)
Animal1.setNombre = "Manchas";
console.log(Animal1.getNombre)
    //console.log(Animal1.saludar()); // no los ereda nuestro objeto el valor estatico ya que solo vive en la clase y ´por lo tanto va dar error