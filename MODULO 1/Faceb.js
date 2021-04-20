let readlineSync = require('readline-sync');
let usuario = "perrito";
let clave = "432";
let userIngresado = readlineSync.question("Por favor ingrese el usuario: ");
let claveIngresada = readlineSync.question("Por favor ingrese la clave: ");
if (usuario == userIngresado && clave == claveIngresada){
         console.log("Bienvenido");
} else {
         console.log("El usuario o la clave son incorrectos");
}