let readlineSync = require('readline-sync');
let base = readlineSync.questionInt("Ingrese la base: ");
let altura = readlineSync.questionInt("Ingrese la altura: ");
area = base * altura;
console.log("El área es: ", area);