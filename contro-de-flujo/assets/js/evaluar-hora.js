let hora = parseInt(prompt('Ingrese la hora actual'));

/*
6-11
12-18
19-23
0-5
*/
/*Buenos dias 6 - 11
Buenas tardes 12 - 18
Buenas noches 19 - 23
Dejame dormir 0 - 5
*/

if (hora >= 6 && hora <= 11) {
    console.log('Buenos dias');
    document.write('Buenos dias');

} else if (hora >= 12 && hora <= 18) {
    console.log('Buena tarde');
    document.write('Buenos tarde');

} else if (hora >= 19 && hora <= 23) {
    console.log('Buena noche');
    document.write('Buena noche');
} else if (hora >= 0 && hora <= 5) {
    console.log('Dejame dormir');
    document.write('dejame dormir')
} else {
    console.log('No existe la hora');
    document.write('No existe la hora');

}