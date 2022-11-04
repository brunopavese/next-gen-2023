// Ao se comparar se uma string é maior que outra, considera-se a ordem alfabética ou lexicográfica.
// No caso, “abcd” < “adbc” < “bacd”.

// Escreva uma função que receba uma string A e retorne uma string B, sendo que B é composta pelos
// mesmos caracteres que A reordenados.

// B deve obedecer às seguintes condições:

// Ser maior que A
// Ser a menor string possível que cumpra as condições acima
// Caso não seja possível encontrar uma string que cumpra as condições, retorne a string “sem
// reposta”.
// Por exemplo:

// A = “ab”
// Logo, o resultado será “ba”

// A = “abcde”
// Logo, o resultado será “abced” 12345 > 12354 > 12435 > 12453  6 5 9 10 1 21  2 1 9 9 1 1
//                                abcde > abced > abdce > abdec   feijao         banana

// A = “ba”
// Nesse caso, o resultado será “sem resposta"
function menorStringMaior(name) {
  const nameArray = name.split("");

  const permutador = (arrayParaPermutar) => {
    let resultado = [];

    const permuta = (array, m = []) => {
      if (array.length === 0) {
        resultado.push(m.join(""));
      } else {
        for (let i = 0; i < array.length; i++) {
          let atual = array.slice();
          let proximo = atual.splice(i, 1);
          permuta(atual.slice(), m.concat(proximo));
        }
      }
    };

    permuta(arrayParaPermutar);

    return resultado;
  };

  const permutaçõesDeName = Array.from(new Set(permutador(nameArray).sort()));

  const IndexDeNameNoArray = permutaçõesDeName.findIndex((index) => {
    return index === name;
  });

  return permutaçõesDeName[IndexDeNameNoArray + 1]
    ? permutaçõesDeName[IndexDeNameNoArray + 1]
    : "sem resposta";
}

console.log(menorStringMaior("abcde"));