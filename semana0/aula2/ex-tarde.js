// Exercício 1
// a)

const prod1 = "Pêra =";
const valor1 = 5;

const prod2 = "Uva =";
const valor2 = 7;

const prod3 = "Maçã =";
const valor3 = 6;

const total = valor1 + valor2 + valor3;

const moeda = "R$";

console.log (prod1, moeda, valor1);
console.log (prod2, moeda, valor2);
console.log (prod3, moeda, valor3);
console.log ("Valor total =", moeda, total);


// b)

const grausF = 95; 
const kelvin = (grausF - 32) * (5/9) + 273.15;
const grausC = (grausF - 32) * (5/9);

console.log ("Temperatura em Fahrenheit =", grausF, "°F");
console.log ("Temperatura em Celsius =", grausC, "°C");
console.log ("Temperatura em Kelvin =", kelvin, "K");




// Exercício 2
// a)

const grausF2 = prompt ("Digite a temperatura e Fharenheit:");
const kelvin2 = (grausF - 32) * (5/9) + 273.15;
const grausC2 = (grausF - 32) * (5/9);

console.log ("Temperatura em Fahrenheit =", grausF2, "°F");
console.log ("Temperatura em Celsius =", grausC2, "°C");
console.log ("Temperatura em Kelvin =", kelvin2, "K");


// b)

const nome = prompt("Insira seu nome:");
const sobrenome = prompt("Insira seu sobrenome:")

console.log ("Nome completo:", nome, sobrenome);


// c)

const rua = prompt("Informe a rua:");
const numero = prompt("Qual número?");
const complem = prompt("Informe o complemento");
const bairro = prompt("Qual bairro?");
const cidade = prompt("Informe a cidade:");

console.log (rua+ ",", numero, "-", complem, "-", "bairro"+ ",", cidade);


// Exercício 3
// a) 

const casaTrancada = confirm ("A casa está trancada?");
const estaComChave = confirm ("Você está com a chave?");

const consegueEntrar = (casaTrancada && estaComChave) || !casaTrancada;

console.log("O usuário consegue entrar em casa?",consegueEntrar)

// b)

const estaChovendo = confirm("Está chovendo?");
const temGuardaChuva = confirm("Tem guarda-chuva?");

const vaiSeMolhar = (estaChovendo && !temGuardaChuva);

console.log("O usuáro vai se molhar?", vaiSeMolhar)



// Exercício 3
const salarioMinimo = prompt("Qual é o valor do salario mínimo?");
const consumoKW = prompt("Informe quantos kW a residência consumiu:");

const valorKW = salarioMinimo / 5;

console.log("O valor de cada kW é:", valorKW);

const valorTotal = consumoKW * valorKW;

console.log("O valor total a ser pago por essa residência é: R$", valorTotal);

const valorComDesc = valorTotal * .85;

console.log ("Com 15% de desconto, o valor a ser pago é: R$", valorComDesc);