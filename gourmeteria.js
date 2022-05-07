/*
30/04 Este programa tem como objetivo auxiliar uma pessoa a fazer chá.
07/05 Agora este programa tem como objetivo auxiliar uma pessoa a fazer chá(de vários sabores) ou café(de vários tipos).
14/05 Agora o programa tem como objetivo, fazer chás, cafés, bolinhos e pãezinhos.
21/05 Agora o programa tem como objetivo, calcular quantas calorias o cliente está consumindo.
28/05 Agora o programa tem como objetivo, calcular o IMC do cliente e recomendar um lanche tendo como base os indices calóricos e o nível de estresse do cliente. Perguntar e guardar o nível de satisfação do cliente após o lanche.
04/06 Agora o programa deve trabalhar com arquivos CSVs, para ler os tipos de chás, cafés, bolinhos e pãezinhos. Deve também salvar todos os pedidos do cliente em um arquivo JSON.
11/06 Agora o programa deve substituir todos os arquivos JSONs e CSVs por um banco de dados MySQL. O ORM prisma deve ser utilizado.
18/06 Utilizando a arquitetura RestFUL(fastifyjs), o programa exportar uma rota/endpoint para disponibilizar todos os seus pedidos.
25/06 Utilizando a arquitetura RestFUL(fastifyjs), o programa deve consumir todos os pedidos das gourmeterias parceiras.
02/07 Utilizando a lógica fuzzy, deve-se montar uma base de dados com 1 milhão de pedidos. A base de dados original, deve conter 20 pedidos, de 3 clientes especificos. 
09/07 Utilizando algoritmos genéticos, deve-se recomendar um lanche ótimo ao cliente.
16/07 Utilizando deep learning(tensorflowjs), deve-se recomendar um lanche ótimo ao cliente.
23/07 Utilizando deep learning(tensorflowjs), deve-se detectar o risco de obesidade, anemia e anorexia de um cliente.
@author Marcelo M. Fleury
*/
const prompt = require('prompt-sync')();

function fazerBebida() {
  let nome = apresentacaoEPegarNome();
  let dadosPreparo;
  let adoca;

  console.log(`Prazer ${nome}, vamos começar a fazer o seu chá!`);

  dadosPreparo = preparar();
  adoca = adocar();
  finalizar(nome, dadosPreparo, adoca);
}

function apresentacaoEPegarNome() {
  let nome;
  
  console.log("\nOlá! Seja bem vindo!\nIrei te ajudar a fazer o seu chá!\n\n");
  nome = prompt('Qual o seu nome ? ');
  
  return nome;
}

function preparar() {
  let temperatura;
  let tempo;
  let quantidade;

  temperatura = prompt('Qual temperatura que você utiliza para ferver a água ? ');
  tempo = prompt('Você leva quanto tempo(em segundos) para ferver a água ? ');
  tempo = Number(tempo);
  quantidade = prompt("Qual a quantidade(em ml) de água você quer ? ");
  
  return {
    temperatura: temperatura,
    tempo: tempo,
    quantidade: quantidade
  };
}

function adocar() {
  let adoca;
  adoca = prompt('Você deseja adoçar o seu chá ? ');
  if(adoca.toLowerCase() == 'sim' || adoca.toLowerCase() == 's') {
    console.log("O seu chá foi adoçado.");
  } else {
    console.log("O seu chá não foi foi adoçado.");
  }
  return adoca;
}

function finalizar(nome, dadosPreparo) {
  console.log(`\nO seu chá ${nome}, foi finalizado!\n\n`);
  console.log("Dados de preparo: \n");
  console.log(`Temperatura: ${dadosPreparo.temperatura}`);
  console.log(`Tempo: ${dadosPreparo.tempo} segundos`);
  console.log(`Quantidade: ${dadosPreparo.quantidade} ml`);
  console.log(`Espero que tenha gostado :)\n\n`);
}

function main() {
  let isPreparar = true;
  let continuarFazendo;
  while(isPreparar) {
    fazerBebida();
    continuarFazendo = prompt("Deseja fazer outro chá ? ")
    if(continuarFazendo.toLowerCase() == 'não' || continuarFazendo.toLowerCase() == 'n') 
      isPreparar = false
  }
  console.log("Obrigado! Volte sempre :)")
}

main();