let readlineSync = require('readline-sync');
let descuento = ("Descuento 30%");
console.log("Decuento", 30);
let Precio = readlineSync.questionInt("30%: ");
console.log("30%", Precio);
let resultado =(Precio * 30)/100 ;
let echo = ( 30 * Precio)/100;
console.log("Descuento hecho:", resultado);
