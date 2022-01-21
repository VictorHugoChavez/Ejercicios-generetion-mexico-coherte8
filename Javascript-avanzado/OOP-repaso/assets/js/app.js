class Animalito {
    constructor(nombre, edad, especie, revisado) {
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
        this.enfermo = false;
        this.revisado = revisado;
    }
    saludar() {
        return console.log(`Hola mi nombre es ${this.nombre}`);
    }
}

class Veterinario {
    constructor() {
        this.cantidadPacientes = 0;
        this.pacientesRevisados = 0;
        this.listaPacientes = [];
    }

    agregarPaciente(paciente) {
        this.listaPacientes.push(paciente);
        this.cantidadPacientes += 1;
        // this.cantidadPacientes++; 
        let mensaje = `Paciente agregado <br>`;
        return document.write(mensaje);
    }
    modificarPacientesRevisados() {
        this.pacientesRevisados++;
    }


    revisarPaciente(paciente) {
        if (paciente.revisado === false) {
            paciente.revisado = true;
            this.modificarPacientesRevisados();
            /*   this.pacientesRevisados++; */
            document.write('<br>Paciente ha sido revisado')
        } else {
            document.write(`Este paciente ya fue revisado`);
        }
    }

    mostrarLista() {
        for (let i = 0; i < this.listaPacientes.length; i++) {
            document.write(" " + this.listaPacientes[i].nombre);
        }
        document.write(`<br>cantidad de pacientes: ${this.cantidadPacientes} <br> Pacientes revisados: ${this.pacientesRevisados}<br> `);
    }

}

const doctorvictor = new Veterinario();
//objetos creados de la clase animalito
const animalito1 = new Animalito("Maya", 10, "Perro", false); //Objeto 1
const animalito2 = new Animalito("Jaqui", 8, "gato", true); //Objeto 2

console.log(animalito1);
console.log(animalito2);

doctorvictor.agregarPaciente(animalito1);
doctorvictor.agregarPaciente(animalito2);

console.log(doctorvictor.listaPacientes);

doctorvictor.mostrarLista();
doctorvictor.revisarPaciente(animalito2);
doctorvictor.mostrarLista();

doctorvictor.revisarPaciente(animalito2)

//operador cortocircuito
let variable = 0;
console.log()