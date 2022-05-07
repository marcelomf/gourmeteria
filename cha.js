/*
30/04 Este programa tem como objetivo auxiliar uma pessoa a fazer chá!
07/05 Este programa tem como objetivo auxiliar uma pessoa a fazer chá(de vários sabores) ou café(de vários tipos)!
@author Marcelo M. Fleury
*/
const prompt = require('prompt-sync')();

function fazerCha() {
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
  let isCha = true;
  let continuarFazendo;
  while(isCha) {
    fazerCha();
    continuarFazendo = prompt("Deseja fazer outro chá ? ")
    if(continuarFazendo.toLowerCase() == 'não' || continuarFazendo.toLowerCase() == 'n') 
      isCha = false
  }
  console.log("Obrigado! Volte sempre :)")
}

main();