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
      nome: "Exodia, o Proibido",
      tipo: "Monstro de Efeito",
      ataque: 1000,
      defesa: 1000,
      descricao: "Se você tiver \"Perna Direita de \"O Proibido\"\", \"Perna Esquerda de \"O Proibido\"\", \"Braço Direito de \"O Proibido\"\" e \"Braço Esquerdo de \"O Proibido\"\", além de este card na sua mão, você vence o Duelo."
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
    },
    // Adicionando as novas cartas à lista existente
      // Monstro de Efeito
  {
    nome: "Eldlich, o Senhor Dourado",
    tipo: "Monstro de Efeito",
    ataque: 2500,
    defesa: 2800,
    descricao: "Você pode enviar este card e 1 Magia/Armadilha da sua mão para o Cemitério e, depois, escolha 1 card no campo; envie-o para o Cemitério. Se este card estiver no seu Cemitério: você pode enviar 1 Magia/Armadilha que você controla para o Cemitério; adicione este card à sua mão e, depois, você pode Invocar por Invocação-Especial 1 monstro Zumbi da sua mão e, se isso acontecer, até o final do turno do seu oponente, ele ganha 1000 de ATK/DEF e não pode ser destruído por efeitos de card. Você só pode usar cada efeito de \"Eldlich, o Senhor Dourado\" uma vez por turno."
  },
  // Armadilhas
  {
    nome: "Wattcancelar",
    tipo: "Armadilha",
    ataque: null,
    defesa: null,
    descricao: "Quando seu oponente Invocaria um ou mais monstros por Invocação-Normal ou Especial: descarte 1 monstro \"Watt\"; negue a Invocação e, se isso acontecer, destrua esse(s) monstro(s)."
  },
  {
    nome: "Oferenda Derradeira",
    tipo: "Armadilha Contínua",
    ataque: null,
    defesa: null,
    descricao: "Durante sua Fase Principal ou a Fase de Batalha do seu oponente: você pode pagar 500 PV; imediatamente depois que este efeito resolver, Invoque 1 monstro por Invocação-Normal/Baixar."
  },
  {
    nome: "Oferenda Fomedeira",
    tipo: "Armadilha Contínua",
    ataque: null,
    defesa: null,
    descricao: "Durante sua Fase Principal: você pode pagar 1000 PV; você pode conduzir até 3 Invocações-Normal/Baixar neste turno, não apenas 1. Durante a Fase de Batalha do seu oponente: você pode pagar 500 PV; imediatamente depois que este efeito resolver, Invoque 1 monstro por Invocação-Normal. Você só pode usar cada efeito de \"Oferenda Fomedeira\" uma vez por turno."
  },
  // Monstro de Efeito
  {
    nome: "Engenhoca Marionete Boneca Lúgubre",
    tipo: "Monstro de Efeito",
    ataque: 0,
    defesa: 0,
    descricao: "Se este card estiver no seu Cemitério: você pode banir 1 outro monstro \"Engenhoca Marionete\" do seu Cemitério; Invoque este card por Invocação-Especial. Você só pode usar este efeito de \"Engenhoca Marionete Boneca Lúgubre\" uma vez por turno. Não pode ser usado como matéria para uma Invocação-Xyz, exceto para a Invocação-Xyz de um monstro \"Engenhoca Marionete\"."
  },

  // Monstro de Efeito
  {
    nome: "Sapo Arbóreo",
    tipo: "Monstro de Efeito",
    ataque: 100,
    defesa: 100,
    descricao: "Uma vez por turno, durante sua Fase de Apoio, se este card estiver no seu Cemitério e você não controlar \"Sapo Arbóreo\": você pode Invocar este card por Invocação-Especial. Você não pode controlar Magias/Armadilhas para ativar e resolver este efeito."
  },
  // Monstro de Efeito
  {
    nome: "Mago Negro, o Mago da Magia Negra",
    tipo: "Monstro de Efeito",
    ataque: 2500,
    defesa: 2100,
    descricao: "O nome deste card se torna \"Mago Negro\" enquanto estiver no campo. Você só pode usar cada um dos seguintes efeitos de \"Mago Negro, o Mago da Magia Negra\" uma vez por turno. Se \"Sarcófago Brilhante\" estiver no campo: você pode Invocar este card por Invocação-Especial da sua mão. Se este card for destruído por um efeito de card e um monstro de Nível 5 ou mais estiver no campo: você pode Invocar este card por Invocação-Especial e, depois, você pode Baixar 1 Magia/Armadilha do seu Deck que mencione \"Mago Negro\"."
  },

  // Monstro de Efeito
  {
    nome: "Engenhoca Marionete Soldadinhos",
    tipo: "Monstro de Efeito",
    ataque: 0,
    defesa: 0,
    descricao: "Se este card for Invocado por Invocação-Normal ou Especial: você pode enviar 1 monstro \"Engenhoca Marionete\" com um Nível diferente que o deste card do seu Deck para o Cemitério; o Nível deste card se torna o desse monstro. Você só pode usar este efeito de \"Engenhoca Marionete Soldadinhos\" uma vez por turno. Você pode banir este card do seu Cemitério e, depois, escolha até 2 monstros \"Engenhoca Marionete\" que você controla; aumente o Nível deles em 4 até o final deste turno."
  },

  // Monstro de Efeito
  {
    nome: "Engenhoca Marionete Boneca Rouge",
    tipo: "Monstro de Efeito",
    ataque: 400,
    defesa: 1400,
    descricao: "Se este card estiver na sua mão: você pode revelar 1 Monstro Xyz \"Engenhoca Marionete\" no seu Deck Adicional; Invoque por Invocação-Especial tanto este card quanto 1 monstro \"Engenhoca Marionete\" com o mesmo Nível que a Classe do monstro revelado do seu Deck. Se este card for enviado para o Cemitério, exceto da mão: você pode adicioná-lo à sua mão. Você só pode usar cada efeito de \"Engenhoca Marionete Boneca Rouge\" uma vez por turno e, além disso, você não pode Invocar por Invocação-Especial do Deck Adicional no turno em que ativar qualquer um dos efeitos deste card, exceto monstros \"Engenhoca Marionete\"."
  },

  // Monstro de Efeito
  {
    nome: "Engenhoca Marionete Grito do Gado",
    tipo: "Monstro de Efeito",
    ataque: 2000,
    defesa: 2000,
    descricao: "Você pode desassociar 1 matéria de um Monstro Xyz que você controla; Invoque este card por Invocação-Especial da sua mão ou do Cemitério, mas bana-o quando ele deixar o campo. Você só pode usar este efeito de \"Engenhoca Marionete Grito do Gado\" uma vez por turno. Um Monstro Xyz \"Engenhoca Marionete\" que tenha este card como matéria ganha este efeito. Uma vez por turno: você pode escolher 1 monstro no Cemitério do seu oponente; Invoque-o por Invocação-Especial no campo do seu oponente em Posição de Defesa."
  },

  // Monstro de Efeito
  {
    nome: "Dragão da Sublimação Final de Luz",
    tipo: "Monstro de Efeito",
    ataque: 2600,
    defesa: 2100,
    descricao: "Você pode banir 1 monstro Dragão de Nível 8 do seu Deck Adicional; Invoque este card por Invocação-Especial da sua mão e, além disso, você não pode Invocar por Invocação-Especial pelo resto deste turno, exceto monstros Dragão. Durante sua Fase Principal: você pode Invocar por Invocação-Fusão 1 Monstro de Fusão do seu Deck Adicional, usando monstros da sua mão ou do campo. Quando um monstro do oponente declarar um ataque: você pode fazer com que este card perca exatamente 500 de ATK/DEF e, se isso acontecer, esse monstro do oponente perde 1500 de ATK. Você só pode usar cada efeito de \"Dragão da Sublimação Final de Luz\" uma vez por turno."
  },

  // Monstro de Efeito
  {
    nome: "Dragão da Evaporação Final de Trevas",
    tipo: "Monstro de Efeito",
    ataque: 2600,
    defesa: 2100,
    descricao: "Você pode banir 1 monstro Dragão de Nível 8 do seu Deck Adicional; Invoque este card por Invocação-Especial da sua mão e, além disso, você não pode Invocar por Invocação-Especial pelo resto deste turno, exceto monstros Dragão. Você pode ativar 1 desses efeitos; Invoque por Invocação-Fusão 1 Monstro de Fusão do seu Deck Adicional, usando monstros da sua mão ou do campo. Escolha 1 outro monstro em Posição de Ataque no campo; faça com que este card perca exatamente 500 de ATK/DEF e, se isso acontecer, destrua esse monstro. Você só pode usar cada efeito de \"Dragão da Evaporação Final de Trevas\" uma vez por turno."
  },
  // Monstro de Efeito
  {
    nome: "Dragão de Orgulho e Alma",
    tipo: "Monstro de Efeito",
    ataque: 2500,
    defesa: 2500,
    descricao: "Não pode ser Invocado por Invocação-Normal/Baixado. Deve ser Invocado por Invocação-Especial (da sua mão) enquanto seu oponente tiver 25 ou mais cards no Cemitério dele. Enquanto você tiver 25 ou mais cards no seu Cemitério, este card ganha 2500 de ATK/DEF."
},

// Monstro de Efeito
{
    nome: "Sengenjin Desperto de um Milênio",
    tipo: "Monstro de Efeito",
    ataque: 2750,
    defesa: 2500,
    descricao: "Não pode ser destruído por efeitos de monstro. Você só pode usar cada um dos seguintes efeitos de \"Sengenjin Desperto de um Milênio\" uma vez por turno. Se este card estiver na sua mão: você pode colocá-lo na sua Zona de Magias & Armadilhas como uma Magia Contínua com a face para cima. Enquanto este card for uma Magia Contínua: você pode pagar 2000 PV ou revelar 1 \"Ankh do Milênio\" na sua mão; Invoque este card por Invocação-Especial e, depois, você pode adicionar 1 monstro \"Milênio\" do seu Deck à sua mão."
},

// Monstro de Efeito
{
    nome: "Golem que Guarda os Tesouros do Milênio",
    tipo: "Monstro de Efeito",
    ataque: 2000,
    defesa: 2200,
    descricao: "A ativação de um \"Ankh do Milênio\" seu não pode ser negada. Você só pode usar cada um dos seguintes efeitos de \"Golem que Guarda os Tesouros do Milênio\" uma vez por turno. Se este card estiver na sua mão: você pode colocá-lo na sua Zona de Magias & Armadilhas como uma Magia Contínua com a face para cima. Enquanto este card for uma Magia Contínua: você pode pagar 2000 PV ou revelar 1 \"Ankh do Milênio\" na sua mão; Invoque este card por Invocação-Especial e, depois, você pode adicionar 1 \"Templo de Wedju\" do seu Deck à sua mão."
},

// Monstro de Efeito
{
    nome: "Escudo da Dinastia do Milênio",
    tipo: "Monstro de Efeito",
    ataque: 0,
    defesa: 3000,
    descricao: "Não pode ser destruído por efeitos de Magia/Armadilha. Você só pode usar cada um dos seguintes efeitos de \"Escudo da Dinastia do Milênio\" uma vez por turno. Se este card estiver na sua mão: você pode colocá-lo na sua Zona de Magias & Armadilhas como uma Magia Contínua com a face para cima. Enquanto este card for uma Magia Contínua: você pode pagar 2000 PV ou revelar 1 \"Ankh do Milênio\" na sua mão; Invoque este card por Invocação-Especial e, depois, você pode adicionar 1 \"Ankh do Milênio\" do seu Deck à sua mão."
},

// Monstro de Efeito
{
    nome: "Dama da Lua do Milênio",
    tipo: "Monstro de Efeito",
    ataque: 1500,
    defesa: 1300,
    descricao: "Se este card batalhar um monstro, nenhum dos dois pode ser destruído nessa batalha. Você só pode usar cada um dos seguintes efeitos de \"Dama da Lua do Milênio\" uma vez por turno. Se este card estiver na sua mão: você pode colocá-lo na sua Zona de Magias & Armadilhas como uma Magia Contínua com a face para cima. Se seu oponente ativar um card ou efeito, enquanto este card for uma Magia Contínua (exceto durante a Etapa de Dano): você pode Invocar este card por Invocação-Especial e, se isso acontecer, pelo resto deste turno, seu oponente não pode escolher monstros Ilusão ou Mago de Nível 5 ou mais que você controla como alvo de efeitos de card."
},

// Monstro de Efeito
{
    nome: "Reflexo Demoníaco do Milênio",
    tipo: "Monstro de Efeito",
    ataque: 1300,
    defesa: 1400,
    descricao: "Se este card batalhar um monstro, nenhum dos dois pode ser destruído nessa batalha. Você só pode usar cada um dos seguintes efeitos de \"Reflexo Demoníaco do Milênio\" uma vez por turno. Se este card estiver na sua mão: você pode colocá-lo na sua Zona de Magias & Armadilhas como uma Magia Contínua com a face para cima. Se seu oponente ativar um card ou efeito, enquanto este card for uma Magia Contínua (exceto durante a Etapa de Dano): você pode Invocar este card por Invocação-Especial e, depois, você pode ganhar PV igual à metade do ATK de 1 monstro no campo."
}
];