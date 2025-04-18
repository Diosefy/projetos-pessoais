idade = prompt("Digite sua idade");
if (idade < 18) {
  alert("Você NÃO pode jogar");
}

//alert("Vamos começar!")
if (idade >= 18) {
  escolhajogador = prompt(
    "Digite 1: Pedra, Digite 2: papel ou Digite 3: tesoura"
  );
  escolhacomputador = Math.floor(Math.random() * 3) + 1;

  if (escolhajogador == escolhacomputador) {
    alert("Empate!!");
  }

  if (escolhajogador == 1) {
    if (escolhacomputador == 2) {
      // Jogador Pedra, Computador Papel -> Computador venceu
      alert("O computador venceu! Escolheu Papel");
    }
    if (escolhacomputador == 3) {
      // Jogador Pedra, Computador Tesoura -> Jogador venceu
      alert("O jogador venceu! Computador Tesoura");
    }
  }
  
   if (escolhajogador == 2) {
    if (escolhacomputador == 1) {
      // Jogador Papel, Computador Pedra -> Computador venceu
      alert("O computador venceu! Escolheu Pedra");
    }
    if (escolhacomputador == 3) {
      // Jogador Papel, Computador Pedra -> Jogador venceu
      alert("O jogador venceu! Computador Pedra");
    }
  }
  
   if (escolhajogador == 3) {
    if (escolhacomputador == 2) {
      // Jogador Tesoura, Computador Papel -> Jogador venceu
      alert("O jogador venceu!");
    }
    if (escolhacomputador == 1) {
      // Jogador Tesoura, Computador Pedra -> Computador venceu
      alert("O Computador venceu! Computador Tesoura");
    }
  }

  
  
  alert("A escolha do computador foi: " + escolhacomputador);
}