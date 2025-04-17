var prompt = require('prompt-sync')();

let texto = prompt("Digite um texto: ");

function removeTexto(texto){
    texto.replace(/[^a-zA-Z0-9]/g, "");
}

console.log(removeTexto("eu.sei@.cantar"));