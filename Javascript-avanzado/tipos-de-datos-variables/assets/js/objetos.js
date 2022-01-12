/* let miObjeto={
    //palabra clave valor
    nombre:'Victor Hugo'
}; */

let nombre = 'Victor Hugo';
let edad = 25;
let direccion = 'Tlalanepantla de baz, EDOMEX';
let numero = 23115643524;

console.log(nombre);

let persona = {
    nombre: {
        apellidoPaterno: 'Chavez',
        apellidoMaterno: 'Cruz',
        nombre: 'VictorHugo'
    },
    edad: 25,
    direccion: {
        ciudad: 'Tlalnepantla de baz',
        estado: 'Mexico'
    },
    numero: [212453454114, 1114635146574]
};
//arregloa vs objetos
//almacenar informacion
//['valor','valor2','valor3'];
//arreglo[1];
/* let otroObjeto={
    nombre:'addmkdf',
    apellidos:'kjhfdskjfhd'
}; */
/* let arreflo */
console.log(persona.nombre.apellidoMaterno); /// solo se tiene que poner el objeto mas "." junto el nombre del objeto secundario

let tienda = {
    comida: {
        carne: {
            peso: '1kilo',
            tipo: 'Res',
            numerodecortes: 7
        },
        cereales: {
            marca: ['zucaritas', 'frutloops', 'Chococrispis'],
            peso: '750g',
            costo: '150 $'
        },
        lacteos: {
            marca: 'elpura',
            peso: '1litos'
        }
    },
    tecnologia: {
        marcas: {
            Huawei: {
                producto: 'televisor smart TV'
            },
            samsung: {
                producto: 'Monitor 27.2pulgadas'
            },
            hp: {
                producto: 'Laptop HP model k1543',
                precio: 11600
            }
        }
    }
};

console.log(tienda.tecnologia.marcas.Huawei.producto)
console.log(tienda.comida.cereales.peso)