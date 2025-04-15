var prompt = require('prompt-sync')();

const Frase = prompt("Digite uma frase:");
const Letra = prompt("Digite uma letra:");

const palavras = Frase.split(" ");

const letraselecionada = palavras.filter(palavra =>
  palavra.startsWith(Letra)
);

console.log(`Número de palavras que começam com "${Letra}": ${letraselecionada.length}`);