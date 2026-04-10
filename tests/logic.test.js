const { verificarResposta } = require('../src/logic');
const { conteudos } = require('../src/data');

describe("Testes da Regra de Negócio do Quiz", () => {
  
  // Teste 1: Caminho Feliz (Resposta Correta)
  test("Deve retornar sucesso=true quando a resposta for a correta", () => {
    const resultado = verificarResposta(1, "B", conteudos);
    expect(resultado.sucesso).toBe(true);
    expect(resultado.mensagem).toMatch(/Correto/);
  });

  // Teste 2: Entrada Incorreta (Comportamento de Erro)
  test("Deve retornar sucesso=false quando a resposta for errada", () => {
    const resultado = verificarResposta(1, "A", conteudos);
    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toMatch(/Incorreto/);
  });

  // Teste 3: Caso Limite / Entrada Inválida
  test("Deve tratar adequadamente caso a resposta esteja vazia", () => {
    const resultado = verificarResposta(2, "", conteudos);
    expect(resultado.sucesso).toBe(false);
    expect(resultado.erro).toBe("Resposta não fornecida.");
  });

});