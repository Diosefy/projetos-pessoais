//Preciso criar uma lista com meus 3 jogadores
personagem = ["", "", ""]

viloes = ["", "", ""]

forcapersonagem = 0 
forcaviloes = 0

alert("O Array personagem, contém: " + personagem)
for (let i=0; i<3; i++) {
  escolhapersonagem = prompt ("Digite o nome do seu personagem: "+ (i + 1))
  personagem [i] = escolhapersonagem
  //Calcular a força de cada jogador e somar, para dar a força do time
  forcapersonagem = forcapersonagem = Math.floor(Math.random() * 10) +1;
  //forcapersonagem += Math.floor(Math.random() * 10) +1; //Maneira avançada de fazer a mesma coisa
}
console.log("Agora o Array personagem, contém: " + personagem)
console.log("Inicio Viloes: " + viloes)
for(let i=0; i<3; i++) {
  indicealeatorio = Math.floor(Math.random() * 10)
  
  viloespossiveis = ["Coringa", "Thanos", "Voldemort", "Darth Vader", "Loki", "Magneto", "Lex Luthor", "Freddy Krueger", "Homelander", "Duende Verde"]
  viloes [i] = viloespossiveis [indicealeatorio]
  //Calcular a força de cada jogador do computador e somar
  forcaviloes = forcaviloes = Math.floor(Math.random() *10 ) +1;
}
console.log("Final Viloes: " + viloes)


//Comparar os dois times para saber quem venceu
if(forcapersonagem > forcaviloes) {
  alert("Seu time é MUITO forte. Você ganhou a disputa do cabo de guerra!! Sua força foi: "+ forcapersonagem)
}
else {
  if(forcapersonagem < forcaviloes) {
    alert("Seu time não é forte o suficiente. O computador ganhou o cabo de guerra com a força de: "+ forcaviloes)
  }
  else{
    alert("Os dois tem a mesma forca. Vocês EMPATARAM!")
  }
}