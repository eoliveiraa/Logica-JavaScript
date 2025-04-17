var prompt = require('prompt-sync')();

let texto = prompt("Digite um texto: ");

let numero = texto.split(" ");

const digito = numero.filter(numero => {
    return !isNaN(numero) && numero !== " ";
  });
  
  console.log("existem ", digito.length + " "+"digitos numericos!");
  

 