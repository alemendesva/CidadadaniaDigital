const conteudos = [
  {
    id: 1,
    tema: "O Monitor de Dona Maria",
    historia: "Dona Maria, 64 anos, trabalha em um órgão público e anota todas as suas senhas em post-its colados no monitor. Um técnico mal-intencionado anota a 'Senha_Sistema_2024' e acessa a máquina dela remotamente. Como o navegador estava aberto, ele acessa o e-mail pessoal e o banco de Maria.",
    videoPlaceholder: "<video width='100%' autoplay loop muted><source src='src/historia1.mp4' type='video/mp4'></video>",
    pergunta: "Qual foi o erro principal de Dona Maria?",
    alternativas: [
      { letra: "A", texto: "Deixar o monitor ligado após o expediente." },
      { letra: "B", texto: "Expor credenciais de acesso em um local físico sem proteção." },
      { letra: "C", texto: "Usar o navegador do trabalho para fins pessoais." }
    ],
    correta: "B",
    explicacao: "Senhas nunca devem ser anotadas onde outras pessoas tenham acesso visual."
  },
  {
    id: 2,
    tema: "A Promoção Imperdível",
    historia: "Seu Jorge recebe uma ligação automática: 'Parabéns! Você foi sorteado para comprar uma Smart TV por R$ 199! Restam apenas 2 unidades e a oferta expira em 3 minutos!'. O coração de Jorge acelera com o senso de urgência.",
    videoPlaceholder: "<video width='100%' autoplay loop muted><source src='src/historia2.mp4' type='video/mp4'></video>",
    pergunta: "Qual a melhor reação ao sentir essa pressão de urgência?",
    alternativas: [
      { letra: "A", texto: "Comprar rapidamente antes que a promoção acabe." },
      { letra: "B", texto: "Respirar fundo, ignorar a pressão e pedir ajuda a alguém mais experiente." }
    ],
    correta: "B",
    explicacao: "Golpistas usam cronômetros e o gatilho da urgência para forçar decisões impulsivas. A dúvida é sua melhor amiga."
  },
  {
    id: 3,
    tema: "O Esbarrão no Metrô (NFC)",
    historia: "Ana está no metrô. Seu celular tem o pagamento por aproximação (NFC) sempre ativo e sem bloqueio. Um golpista com uma maquininha escondida na mochila encosta perto do bolso de Ana e faz uma cobrança de R$ 50 sem ela notar.",
    videoPlaceholder: "<video width='100%' autoplay loop muted><source src='src/historia3.mp4' type='video/mp4'></video>",
    pergunta: "Como Ana poderia ter evitado esse prejuízo invisível?",
    alternativas: [
      { letra: "A", texto: "Desativando o NFC no celular ou configurando a carteira digital para exigir senha antes do pagamento." },
      { letra: "B", texto: "Deixando o celular apenas na bolsa, e não no bolso da calça." }
    ],
    correta: "A",
    explicacao: "A tecnologia por aproximação é prática, mas configurar a carteira digital para pedir autenticação (biometria ou senha) é essencial para evitar furtos em aglomerações."
  },
  {
    id: 4,
    tema: "O Perigo da Senha Universal",
    historia: "Carlos acha muito difícil decorar várias senhas. Por isso, ele usa 'Carlos123' no seu e-mail, Facebook, conta do banco e em um aplicativo de uma lojinha pequena onde compra roupas. Um dia, o banco de dados dessa lojinha vaza na internet.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Vazamento de Dados ]</div>",
    pergunta: "Qual é o principal e maior risco que Carlos corre agora?",
    alternativas: [
      { letra: "A", texto: "Perder apenas o histórico de compras de roupas na lojinha." },
      { letra: "B", texto: "Receber mais propagandas de roupas no seu e-mail." },
      { letra: "C", texto: "Ter seu computador infectado com um vírus físico que queima o HD." },
      { letra: "D", texto: "Os criminosos testarem a mesma senha vazada e conseguirem acessar o banco e o e-mail de Carlos." },
      { letra: "E", texto: "O e-mail dele ser bloqueado por inatividade pelo provedor." }
    ],
    correta: "D",
    explicacao: "O maior perigo de usar uma 'senha universal' é o efeito dominó. Se um site com segurança fraca for invadido, os hackers vão usar robôs para testar a mesma senha em sites mais importantes."
  },
  {
    id: 5,
    tema: "O Filho Pedindo Dinheiro (WhatsApp)",
    historia: "Dona Lúcia recebe uma mensagem no WhatsApp de um número desconhecido, mas que tem a foto perfeita do seu filho. A mensagem diz: 'Mãe, meu celular quebrou e estou usando este número provisório. Preciso pagar um mecânico urgente. Faz um Pix de R$ 800? Amanhã te devolvo'.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Tela do WhatsApp ]</div>",
    pergunta: "Qual a atitude correta e mais segura que Dona Lúcia deve tomar imediatamente?",
    alternativas: [
      { letra: "A", texto: "Fazer o Pix rapidamente, pois é uma emergência e tem a foto do filho." },
      { letra: "B", texto: "Ligar para o número ANTIGO do filho (ou fazer chamada de vídeo) para ouvir a voz dele e confirmar a história." },
      { letra: "C", texto: "Perguntar no próprio WhatsApp qual é o nome do mecânico para ver se o golpista sabe responder." },
      { letra: "D", texto: "Adicionar o novo número na agenda e fazer a transferência apenas no dia seguinte." }
    ],
    correta: "B",
    explicacao: "Fotos de perfil são públicas e fáceis de copiar. Nunca transfira dinheiro sem confirmar por ligação de voz ou vídeo através do número antigo que você já conhece."
  },
  {
    id: 6,
    tema: "O Golpe do Falso Suporte (Vishing)",
    historia: "Dona Rita recebe uma ligação de um suposto gerente do seu banco. Ele avisa em tom de pânico que a conta dela foi invadida e pede que ela instale um 'aplicativo de segurança oficial do banco' para resolver o problema. Na verdade, é um programa de acesso remoto.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Telefone Tocando ]</div>",
    pergunta: "Como Dona Rita pode identificar que essa ligação é um golpe?",
    alternativas: [
      { letra: "A", texto: "Se o atendente disser o CPF dela corretamente, não é golpe." },
      { letra: "B", texto: "Bancos NUNCA ligam pedindo senhas ou a instalação de aplicativos de segurança por fora das lojas oficiais." },
      { letra: "C", texto: "Bancos costumam ligar apenas fora do horário comercial para resolver problemas urgentes de segurança." }
    ],
    correta: "B",
    explicacao: "Os golpistas podem ter acesso a alguns dos seus dados pessoais. A regra inquebrável é: se pedirem para você instalar um aplicativo remoto, desligue o telefone imediatamente."
  },
  {
    id: 7,
    tema: "O Falso Boleto (Phishing)",
    historia: "Seu Antônio recebe um e-mail com o brasão do Detran dizendo que sua CNH será suspensa hoje se ele não pagar uma multa de R$ 150. O e-mail tem um anexo chamado 'boleto_multa.pdf' e um botão vermelho piscando para pagamento.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: E-mail Suspeito ]</div>",
    pergunta: "O que Seu Antônio deve fazer?",
    alternativas: [
      { letra: "A", texto: "Pagar logo para não ter a carteira suspensa." },
      { letra: "B", texto: "Abrir o anexo para ver qual foi a infração cometida." },
      { letra: "C", texto: "Ignorar o e-mail, não clicar em nada e acessar o aplicativo oficial do governo ou o site do Detran digitando o endereço no navegador." }
    ],
    correta: "C",
    explicacao: "Órgãos do governo não enviam ameaças de suspensão imediata por e-mail com links. Sempre verifique pendências usando os canais oficiais."
  },
  {
    id: 8,
    tema: "O Wi-Fi da Padaria",
    historia: "Dona Helena está tomando um café na padaria e decide aproveitar a rede Wi-Fi chamada 'Padaria_Gratis', que não exige nenhuma senha, para acessar o aplicativo do banco e pagar a conta de luz.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Conectando no Wi-Fi ]</div>",
    pergunta: "Qual é o principal risco que Dona Helena está correndo?",
    alternativas: [
      { letra: "A", texto: "O banco pode cobrar uma taxa extra por ela usar uma conexão de internet de terceiros." },
      { letra: "B", texto: "Redes públicas sem senha podem ser facilmente interceptadas por criminosos que roubam as senhas digitadas." },
      { letra: "C", texto: "A internet pode cair no meio da transação e ela acabar pagando a conta duas vezes." },
      { letra: "D", texto: "Não há risco, pois todos os aplicativos de celular são imunes a redes abertas." }
    ],
    correta: "B",
    explicacao: "Evite acessar bancos ou digitar senhas importantes quando estiver usando Wi-Fi público (shoppings, aeroportos, cafés). Prefira usar a rede 4G/5G do seu celular."
  },
  {
    id: 9,
    tema: "O 'Namorado' Estrangeiro (Golpe do Amor)",
    historia: "Dona Carmem conheceu um homem encantador no Facebook que diz ser um general americano em missão. Após meses de mensagens carinhosas, ele diz que quer visitá-la no Brasil, mas precisa que ela pague a 'taxa da alfândega' transferindo R$ 2.000.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Conversa no Facebook ]</div>",
    pergunta: "Qual é a realidade da situação de Dona Carmem?",
    alternativas: [
      { letra: "A", texto: "Ela está prestes a conhecer o amor da sua vida." },
      { letra: "B", texto: "É um procedimento burocrático normal para militares dos Estados Unidos." },
      { letra: "C", texto: "É um golpe clássico; o criminoso cria uma falsa relação emocional durante meses para depois extorquir dinheiro." }
    ],
    correta: "C",
    explicacao: "Golpistas criam perfis falsos muito convincentes para gerar confiança. Nunca envie dinheiro para pessoas que você conheceu apenas pela internet e nunca viu pessoalmente."
  },
  {
    id: 10,
    tema: "O Link de 'Bom Dia' Premiado",
    historia: "No grupo da família no WhatsApp, um tio encaminha uma mensagem: 'A loja X está dando kits de perfume grátis de Dia das Mães! Clique no link e preencha seus dados para receber o seu em casa!'. O link na mensagem tem um nome estranho.",
    videoPlaceholder: "<div class='video-fake'>[ Espaço reservado para o Vídeo: Grupo de Família ]</div>",
    pergunta: "Qual a atitude mais segura ao ver essa mensagem?",
    alternativas: [
      { letra: "A", texto: "Clicar e preencher rápido, pois foi um parente de confiança que enviou a mensagem." },
      { letra: "B", texto: "Avisar o grupo que é golpe, não clicar no link e verificar as redes sociais oficiais da loja para ver se a promoção existe." },
      { letra: "C", texto: "Clicar só para olhar a página, mas fechar antes de colocar o CPF." }
    ],
    correta: "B",
    explicacao: "A maioria dos links maliciosos chegam através de amigos e parentes que clicaram sem querer. Ofertas espetaculares via WhatsApp geralmente servem para roubar dados pessoais ou instalar vírus."
  }
];

// Exporta para ser testado pelo Jest e acessado no front-end
if (typeof module !== "undefined" && module.exports) {
  module.exports = { conteudos };
}