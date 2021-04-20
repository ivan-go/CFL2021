let readlineSync = require('readline-sync');
let Altura  = readlineSync.questionFloat("Altura Requerida:");
console.log("Ingrese Altura Requerida:".Altura);
let Tu = readlineSync.question("Tu Altura:");
console.log("ingrese Tu Altura:".Tu);
if (Altura <= Tu){
    console.log("si puedes pasar.");
} else {
    console.log("no puedes pasar");
}