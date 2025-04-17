var prompt = require('prompt-sync')();

let frase = prompt("Digite uma frase: ");

let palavras = frase.split(" ");

let letraMaiuscula = palavras.map(function(palavra) {
    return palavra.charAt(0).toUpperCase() + palavra.slice(1);
});
 
let fraseMaiuscula = letraMaiuscula.join(" ");


console.log(fraseMaiuscula);