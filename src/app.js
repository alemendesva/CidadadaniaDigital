let historiaAtual = 0;
let pontuacao = 0;

function carregarHistoria() {
  if (historiaAtual >= conteudos.length) {
    document.getElementById('app-container').innerHTML = `
      <h2>Fim de Jogo!</h2>
      <p>Você acertou ${pontuacao} de ${conteudos.length} situações.</p>
      <button onclick="location.reload()">Jogar Novamente</button>
    `;
    return;
  }

  const historia = conteudos[historiaAtual];
  document.getElementById('tema-titulo').innerText = historia.tema;
  document.getElementById('historia-texto').innerText = historia.historia;
  document.getElementById('video-area').innerHTML = historia.videoPlaceholder;
  document.getElementById('pergunta-texto').innerText = historia.pergunta;

  const alternativasDiv = document.getElementById('alternativas-area');
  alternativasDiv.innerHTML = '';
  document.getElementById('feedback-area').innerText = '';

  historia.alternativas.forEach(alt => {
    const btn = document.createElement('button');
    btn.innerText = `${alt.letra}) ${alt.texto}`;
    btn.className = 'btn-alternativa';
    btn.onclick = () => processarJogada(historia.id, alt.letra);
    alternativasDiv.appendChild(btn);
  });
}

function processarJogada(idHistoria, respostaClicada) {
  const resultado = verificarResposta(idHistoria, respostaClicada, conteudos);
  const feedbackDiv = document.getElementById('feedback-area');
  
  feedbackDiv.innerText = resultado.mensagem;
  if (resultado.sucesso) pontuacao++;

  document.querySelectorAll('.btn-alternativa').forEach(b => b.disabled = true);
  
  setTimeout(() => {
    historiaAtual++;
    carregarHistoria();
  }, 4000); // Aguarda 4 segundos para a pessoa ler a explicação
}

// Inicia a aplicação se estiver no navegador
if (typeof window !== 'undefined') {
  window.onload = carregarHistoria;
}