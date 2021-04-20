let readlineSync = require('readline-sync');
let Monto = readlineSync.questionFloat("Ingresa Monto:");
let Cantidad = readlineSync.questionFloat("Ingresal cantidad:");
let PrecioTotal = Monto * Cantidad;
if (PrecioTotal >=1000){
    descuento = (PrecioTotal * 10)/100;
    MontoConDescuento = PrecioTotal - descuento; 
    console.log("Por gastar mas de 1000 tiene un 10% de descuento.");
    console.log("El monto a pagar es:" + MontoConDescuento);
} else {
    console.log("No tiene descuento.El monto a pagar es:"+ PrecioTotal);
}