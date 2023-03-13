// Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número,
// ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE:
// Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

//Criando a função para calcular a sequência de Fibonacci
function calcularSequenciaFibonacci(numero) {
  let sequencia = [0, 1];

  for (let index = 2; index < numero; index +=1) {
    sequencia[index] = sequencia[index - 1] + sequencia[index - 2];
  }

  return sequencia;
}

//Criando a função para verificar se o número informado pertence à sequência
function verificarNumeroSequenciaFibonacci(numero) {
  const sequenciaFibonacci = calcularSequenciaFibonacci(numero);

  if (sequenciaFibonacci.includes(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci`);
  }
}
  
//Invocando a função para verificar se o número 20 pertence à sequência
verificarNumeroSequenciaFibonacci(21);
verificarNumeroSequenciaFibonacci(40);