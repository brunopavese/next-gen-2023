// Dada um texto qualquer e uma lista de termos de pesquisa (sequencia de caracteres), retorne
// os primeiros K termos mais recorrentes na string, onde K é um parâmetro configurável.

// Exemplo:

// String: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
// incididunt ut labore et dolore magna aliqua"

// Lista de termos: ["a", "em", "i", "el"]

// K: 2

// Resultado: ["i", "a"]

// Explicação:

// Ocorrências de cada termo,"i": 11, "a": 7, "em": 2, "el": 1, com K = 2,
// retornamos "i" e "a" ordenados conforme a quantidade de ocorrências de cada termo.

// Obs: Quando houver termos com quantidades iguais, priorizar o retorno de acordo
// com a ordem de ocorrência do termo na string.

function calculaTopOcorrenciasDeQueries(texto, queries, k) {
  const listaFrequencias = new Map();
  const resposta = []

  queries.forEach((termo) => {
    const regex = new RegExp(termo, "g");
    listaFrequencias.set(termo, (texto.match(regex) || []).length);
  });

  const maioresValores = Array.from(listaFrequencias.values()).sort(
    function (a, b) {
      if (a > b) return 1;
      if (a < b) return -1;
      return 0;
  }).reverse().slice(0, k);

  function buscaChave(map, valor) {
    for (let [chave, value] of map.entries()) {
      if (value === valor) return chave;
    }
  }

  maioresValores.forEach((valor) => {
    resposta.push(buscaChave(listaFrequencias, valor))
  })

  return resposta 
}

console.log(
  calculaTopOcorrenciasDeQueries(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    ["i", "em", "a", "el"],
    2
  )
);