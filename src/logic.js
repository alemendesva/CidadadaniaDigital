function verificarResposta(conteudoId, respostaUsuario, dados) {
  if (!respostaUsuario) {
    return { sucesso: false, erro: "Resposta não fornecida." };
  }
  
  const historia = dados.find(item => item.id === conteudoId);
  if (!historia) {
    return { sucesso: false, erro: "História não encontrada." };
  }

  if (respostaUsuario === historia.correta) {
    return { sucesso: true, mensagem: "✅ Correto! " + historia.explicacao };
  } else {
    return { sucesso: false, mensagem: "❌ Incorreto. " + historia.explicacao };
  }
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { verificarResposta };
}