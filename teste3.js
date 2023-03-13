// Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Declarando as variáveis
const faturamentoDiario = [120.50, 200.00, 250.00, 80.00, 90.00, 300.00, 400.00, 200.00, 100.00, 220.00, 180.50, 250.00];
let menorValor = 0;
let maiorValor = 0;
let media = 0;
let acimaMedia = 0;

// Calcula a média de faturamento
for (let index = 0; index < faturamentoDiario.length; index += 1) {
    media += faturamentoDiario[index];
}

media = media / faturamentoDiario.length;

//Calcula o menor e maior valor
menorValor = faturamentoDiario[0];
maiorValor = faturamentoDiario[0];

for (let index = 0; index < faturamentoDiario.length; index += 1) {
	if (faturamentoDiario[index] < menorValor) {
			menorValor = faturamentoDiario[index];
	}
	if (faturamentoDiario[index] > maiorValor) {
			maiorValor = faturamentoDiario[index];
	}
}

//Calcula os dias com faturamento acima da média
for (let index = 0; index < faturamentoDiario.length; index += 1) {
	if (faturamentoDiario[index] > media) {
			acimaMedia += 1;
	}
}

//Exibe o resultado
console.log("Menor valor de faturamento em um dia do mês: R$ " + menorValor);
console.log("Maior valor de faturamento em um dia do mês: R$ " + maiorValor);
console.log("Número de dias no mês com faturamento acima da média: " + acimaMedia);