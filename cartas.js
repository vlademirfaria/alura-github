const cartas = [
    // Monstros Normais
    {
      nome: "Dragão Branco de Olhos Azuis",
      tipo: "Monstro Normal",
      ataque: 3000,
      defesa: 2500,
      descricao: "O lendário dragão branco com um poder destrutivo impressionante."
    },
    {
      nome: "Soldado Gigante de Pedra",
      tipo: "Monstro Normal",
      ataque: 1300,
      defesa: 2000,
      descricao: "Um guerreiro de pedra com alta defesa."
    },
    {
      nome: "Lobo Flamejante",
      tipo: "Monstro Normal",
      ataque: 1300,
      defesa: 1400,
      descricao: "Um lobo feroz coberto em chamas."
    },
  
    // Monstros de Efeito
    {
      nome: "Mago Negro",
      tipo: "Monstro de Efeito",
      ataque: 2500,
      defesa: 2100,
      descricao: "O mago supremo que controla as artes das trevas."
    },
    {
      nome: "Jinzo #7",
      tipo: "Monstro de Efeito",
      ataque: 500,
      defesa: 400,
      descricao: "Uma máquina poderosa que nega as Armadilhas do oponente."
    },
    {
      nome: "Dragão de Ferro Negro de Olhos Vermelhos",
      tipo: "Monstro de Efeito",
      ataque: 2400,
      defesa: 2000,
      descricao: "Um dragão imponente com a habilidade de negar invocações especiais."
    },
  
    // Monstros de Fusão
    {
      nome: "Dragão Meteoro Negro",
      tipo: "Monstro de Fusão",
      ataque: 2500,
      defesa: 2000,
      descricao: "Nascido da fusão de Olhos Vermelhos e Meteoro Dragão."
    },
    {
      nome: "Gaia, o Cavaleiro Feroz",
      tipo: "Monstro de Fusão",
      ataque: 2300,
      defesa: 2100,
      descricao: "A fusão do Gaia, o Cavaleiro Impetuoso e a Maldição de Dragão."
    },
    {
      nome: "Herói Elemental Bladedge",
      tipo: "Monstro de Fusão",
      ataque: 2300,
      defesa: 1500,
      descricao: "A combinação de Avian, Burstinatrix e Clayman."
    },
  
    // Magias
    {
      nome: "Olla Podrida",
      tipo: "Magia",
      ataque: null, // Magias não possuem pontos de ataque/defesa
      defesa: null,
      descricao: "Compre dois cards e descarte um."
    },
    {
      nome: "Raigeki",
      tipo: "Magia",
      ataque: null,
      defesa: null,
      descricao: "Destrua todos os monstros do oponente."
    },
    {
      nome: "Tocha de Harpie",
      tipo: "Magia",
      ataque: null,
      defesa: null,
      descricao: "Destrua uma Magia/Armadilha do oponente."
    },
  
    // Armadilhas
    {
      nome: "Cilindro Mágico",
      tipo: "Armadilha",
      ataque: null,
      defesa: null,
      descricao: "Negue um ataque e devolva o monstro atacante para a mão do oponente."
    },
    {
      nome: "Força Espelhada",
      tipo: "Armadilha",
      ataque: null,
      defesa: null,
      descricao: "Quando um monstro do oponente declara um ataque, inflija dano ao oponente igual ao ATK do monstro atacante."
    },
    {
      nome: "Solemn Judgment",
      tipo: "Armadilha",
      ataque: null,
      defesa: null,
      descricao: "Negue a ativação de qualquer card, pagando metade dos seus Pontos de Vida."
    }
  ];