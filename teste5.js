// Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

// Solução

// Caso a string seja previamente definida no código
let string = "Hello World!";
let stringInvertida = "";

// Loop para ler cada caractere da string
for (let index = string.length - 1; index >= 0; index -= 1) {
  // Concatena cada caractere lido à variável invertida
  stringInvertida += string[index];
}

// Mostra o resultado no console
console.log(stringInvertida);

// Caso a string seja informada através de uma entrada de terminal
// Função para inverter a string
const prompt = require('prompt-sync')();

function inverterString(string) {
  // Declaração da variável que armazenará a string invertida
  let stringPromptInvertida = "";

  // Loop para percorrer a string de trás para frente
  for (let index = string.length - 1; index >= 0; index -= 1) {
    // Armazena cada caracter da string invertida
    stringPromptInvertida += string[index];
  }

  // Retorna a string invertida
  return stringPromptInvertida;
}

// Captura o valor do terminal
let stringPrompt = prompt("Insira a string que deseja inverter:");

// Invocação da função e impressão do resultado
console.log(inverterString(stringPrompt));