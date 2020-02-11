console.log("Bem vindo ao jogo de Blackjack!");

function comprarCarta() {
  // Cria array de cartas
  const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  // Cria array de naipes
  const naipes = ["♦️", "♥️", "♣️", "♠️"]

  // Sorteia uma carta
  const numero = cartas[Math.floor(Math.random() * 13)]

  // Sorteia um naipe
  const naipe = naipes[Math.floor(Math.random() * 4)]

  let valor

  // Verifica se é uma das letras e coloca o valor correspondente na variável valor
  if (numero === "A") {
    valor = 11
  } else if (numero === "J" || numero === "Q" || numero === "K") {
    valor = 10
  } else { // Se nao for uma das letras, só converte a string para número
    valor = Number(numero)
  }

  // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
  const carta = {
    texto: numero + naipe,
    valor: valor
  }

  return carta
}

let iniciarNovaRodada = true;

iniciarNovaRodada = confirm ("Quer iniciar uma nova rodada?");

if (iniciarNovaRodada) {

  const primeiraCartaUsuario = comprarCarta();
  const segundaCartaUsuario = comprarCarta();

  const valorCartasUsuario = primeiraCartaUsuario.valor + segundaCartaUsuario.valor;

  console.log("Usuário - cartas:", primeiraCartaUsuario.texto, segundaCartaUsuario.texto); // imprime o texto da carta. Nesse caso: "K♦️"
  console.log("Pontuação:", valorCartasUsuario); // imprime o valor da carta (um número). Nesse caso: 10

  const primeiraCartaComputador = comprarCarta();
  const segundaCartaComputador = comprarCarta();
  
  const valorCartasComputador = primeiraCartaComputador.valor + segundaCartaComputador.valor;

  console.log("Computador - cartas:", primeiraCartaComputador.texto, segundaCartaComputador.texto); // imprime o texto da carta. Nesse caso: "K♦️"
  console.log("Pontuação:", valorCartasComputador);

  if (valorCartasUsuario > valorCartasComputador){

    console.log("Usuário venceu!")

  } else if (valorCartasUsuario < valorCartasComputador){

    console.log("Computador venceu!")
  } else {

    console.log("Empate!")

  }


} else {

  console.log("O jogo acabou.");  

}