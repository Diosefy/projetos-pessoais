ganhou = 0 //Se for 1, perdeu. Se for 0 ganhou

for(let rodada = 1; rodada <=3; rodada ++) {
  console.log("Rodada: " + rodada)
  
  
  escolhajogador = prompt("Nível "+rodada+" Escolha um vidro: 1, 2 ou 3. ")
  
  pisoquebrado = Math.floor(Math.random() * 3) + 1;
  
  if (escolhajogador == pisoquebrado) {
    alert("O vidro quebrou!")
    rodada = 100;
    ganhou = 1
  }
  else {
    alert("Passou! O piso quebrado estava na ponte: " + pisoquebrado)
  }
  
}

  if (ganhou == 0) {
  alert ("Você venceu, PARABÉNS!!");
}