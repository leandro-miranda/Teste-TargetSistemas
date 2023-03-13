// Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

// Calculando o valor total mensal
let sp = 67836.43;
let rj = 36678.66;
let mg = 29229.88;
let es = 27165.48;
let outros = 19849.53;
let total = sp + rj + mg + es + outros;

// Calculando os percentuais de representação
let porcentagemSp = (sp/total)*100;
let porcentagemRj = (rj/total)*100;
let porcentagemMg = (mg/total)*100;
let porcentagemEs = (es/total)*100;
let porcentagemOutros = (outros/total)*100;

// Imprimindo o resultado
console.log(`SP: ${porcentagemSp.toFixed(2)}%`);
console.log(`RJ: ${porcentagemRj.toFixed(2)}%`);
console.log(`MG: ${porcentagemMg.toFixed(2)}%`);
console.log(`ES: ${porcentagemEs.toFixed(2)}%`);
console.log(`Outros: ${porcentagemOutros.toFixed(2)}%`);