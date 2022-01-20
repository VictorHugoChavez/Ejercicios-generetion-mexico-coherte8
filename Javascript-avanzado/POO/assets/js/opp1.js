class Carro {

    constructor(marca = 'Chocolate', color = 'arcoiris', modelo = 2020, velocidad = 100, numeroPuertas = 4) {
        this.marca = marca;
        this.color = color;
        this.modelo = modelo;
        this.velocidad = velocidad;
        this.numeroPuertas = numeroPuertas;
    }

    acelerar() {
        return this.velocidad += 1;
    }
    reversa() {
        return this.velocidad -= 1;
    }
    frenar() {
        return this.velocidad = 0;
    }

    toString() {
        document.write(`El auto ${this.marca} de color ${this.color}, modelo ${this.modelo} tiene ${this.numeroPuertas} puertas y va a una velocidad de ${this.velocidad} <br>`);
    }
}


const Carro1 = new Carro();
Carro1.toString();
Carro1.acelerar();
Carro1.acelerar();
Carro1.acelerar();
Carro1.toString();
Carro1.reversa();
Carro1.toString();
Carro1.frenar();
Carro1.toString();