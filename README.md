# Cidadania Digital: Prevenção de Golpes 🛡️

![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/alemendesva/CidadadaniaDigital/ci.yml?style=flat-square&logo=github)
![Versão](https://img.shields.io/badge/version-1.0.0-blue?style=flat-square)

**Acesse o jogo online aqui:** [Cidadania Digital - Jogar Agora](https://alemendesva.github.io/CidadadaniaDigital/)

---

## 🎯 Qual problema estamos tentando resolver?
Muitos idosos e pessoas com pouca vivência tecnológica são alvos diários de golpes digitais, engenharia social e furtos de credenciais. A ausência de letramento digital gera vulnerabilidade financeira e emocional. O foco deste projeto é educar e prevenir, atacando diretamente essa dor social.

## 👥 Público-alvo e Solução
Desenvolvido com foco no **público 60+**, este projeto é um sistema educativo (Web GUI) de Prevenção de Golpes. 

Utilizando histórias interativas e um ambiente livre de jargões técnicos complexos, a aplicação simula cenários reais (como senhas anotadas em post-its, falsos atendentes de banco ou o gatilho da urgência em compras falsas) e testa o conhecimento do usuário por meio de um quiz interativo de fixação de aprendizado.

## ✨ Funcionalidades
* **10 Cenários Interativos:** Histórias curtas baseadas em golpes reais.
* **Feedback Imediato:** Explicação clara do motivo de cada resposta estar certa ou errada.
* **Interface Acessível:** Botões grandes, alto contraste e uso simples (foco em usabilidade para idosos).
* **Pontuação Final:** Gamificação simples para engajar o usuário.

---

## 📸 Demonstração do Projeto


![Demonstração do Jogo](https://github.com/alemendesva/CidadadaniaDigital/blob/main/capa.JPG)

---

## ⚙️ Tecnologias Utilizadas
* **Interface e Lógica:** HTML5, CSS3, JavaScript (Vanilla).
* **Testes Automatizados:** Jest.
* **Análise Estática (Linting):** ESLint.
* **CI / Pipeline:** GitHub Actions.
* **Gerenciador de Dependências:** NPM (package.json).

---

## 🚀 Como instalar e executar localmente

### 1. Executando a Aplicação (Interface GUI)
A aplicação é construída para rodar diretamente no cliente, sem necessidade de servidores complexos.
1. Clone este repositório:
   ```bash
   git clone [https://github.com/alemendesva/CidadadaniaDigital.git](https://github.com/alemendesva/CidadadaniaDigital.git)

### 2. Executando as ferramentas de Qualidade (Lint e Testes)

Para provar a qualidade do código e rodar os testes automatizados, você precisará do [Node.js](https://nodejs.org/) instalado no seu computador.

No terminal da raiz do projeto, instale as dependências:
`npm install`

Para rodar a **Análise Estática (Linting)** e verificar se o código segue as boas práticas e padrões estabelecidos (ESLint):
`npm run lint`

Para rodar os **Testes Automatizados** e validar a lógica de negócio da aplicação (Jest):
`npm test`

---

## 👤 Autoria e Licença

Desenvolvido por **[Seu Nome Aqui]** - [Link para seu LinkedIn ou GitHub]

Este projeto foi construído como requisito para a avaliação prática do ciclo de desenvolvimento de software (Bootcamp), focando em estruturação, testes, integração contínua (CI/CD) e impacto social.

Licença: **MIT**
