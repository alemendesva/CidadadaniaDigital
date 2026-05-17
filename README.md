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

## 🌐 Entrega Intermediária

🌐 Integração com API Externa
Para atender aos requisitos desta Etapa Intermediária, a aplicação foi conectada ao mundo exterior através do consumo da Slip Advice API, uma API pública, aberta e gratuita.

A cada nova questão do quiz que é carregada na tela, o sistema faz uma requisição em segundo plano para o servidor da API, que retorna um conselho de sabedoria inédito. Esse dado é tratado e inserido dinamicamente no rodapé da nossa interface, fornecendo pílulas de conscientização e motivando o usuário a continuar seus estudos de segurança a cada clique. Caso ocorra qualquer instabilidade na rede ou bloqueio de requisição, o sistema conta com um mecanismo de segurança (fallback) que exibe dicas estáticas de proteção digital, garantindo que a experiência do usuário nunca seja interrompida.

🚀 Próximos Passos: Evolução para a Central de Segurança
O quiz atual servirá como base para o nosso objetivo principal. Para a entrega final, transformaremos este projeto em uma Central de Segurança e Educação Cibernética Completa para o usuário.

O cronograma de expansão prevê o desenvolvimento e a integração das seguintes ferramentas:

Integração com a API Have I Been Pwned (HIBP): Um módulo onde o usuário poderá digitar seu e-mail para verificar se seus dados pessoais foram expostos em algum grande vazamento de segurança na internet.

Gerador de Senhas Fortes: Uma ferramenta utilitária integrada que criará senhas robustas e aleatórias baseadas nas melhores práticas de cibersegurança.

Feed de Notícias sobre Phishing e Golpes: Consumo de uma API de notícias focada em tecnologia para exibir em tempo real os alertas de fraudes, golpes digitais e técnicas de engenharia social mais recentes que estão acontecendo no mercado.

Com essa evolução, a aplicação deixará de ser apenas um jogo de perguntas e respostas e se tornará um portal de utilidade pública, unindo treinamento preventivo, ferramentas práticas de proteção e atualizações do mundo real em um único lugar.

## 👤 Autoria e Licença

Desenvolvido por **[Alexandre Mendes Almeida]** - [https://www.linkedin.com/in/alexandremva/]

Este projeto foi construído como requisito para a avaliação prática do ciclo de desenvolvimento de software (Bootcamp), focando em estruturação, testes, integração contínua (CI/CD) e impacto social.

Licença: **MIT**
