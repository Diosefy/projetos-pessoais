
// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

/**
 * Remove a classe 'selecionado' do botão atualmente ativo
 */
function desmarcarBotaoSelecionado() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	if (botaoSelecionado) {
		botaoSelecionado.classList.remove("selecionado");
	}
}

/**
 * Marca o botão clicado como selecionado
 * @param {Element} botao - Botão que foi clicado
 */
function marcarBotaoSelecionado(botao) {
	botao.classList.add("selecionado");
}

/**
 * Remove a seleção do personagem atualmente visível
 */
function desmarcarPersonagemSelecionado() {
	const personagemSelecionado = document.querySelector(".personagem.selecionado");
	if (personagemSelecionado) {
		personagemSelecionado.classList.remove("selecionado");
	}
}

/**
 * Exibe o personagem correspondente ao botão clicado
 * @param {number} indice - Índice do botão/personagem
 */
function mostrarPersonagemSelecionado(indice) {
	personagens[indice].classList.add("selecionado");
}

/**
 * Função principal que configura os eventos de clique nos botões
 */
function inicializarEventos() {
	botoes.forEach((botao, indice) => {
		botao.addEventListener("click", () => {
			desmarcarBotaoSelecionado();
			marcarBotaoSelecionado(botao);
			desmarcarPersonagemSelecionado();
			mostrarPersonagemSelecionado(indice);
		});
	});
}

// Inicia os eventos após o carregamento do script
inicializarEventos();









