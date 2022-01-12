let name2 = document.getElementById("name")

function getname() {
    let name = prompt("Que nombre desea cambiar");
    name2.textContent = "Hola " + name;
}