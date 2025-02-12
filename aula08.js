// 1 - Crie uma matriz 3x3 e preencha-a com números sequenciais de 1 a 9.

let Matriz = [
  [1, 2, 3], 
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < Matriz.length; i++) {
  console.log(Matriz[i]);
}

// 2 - Escreva uma função que receba uma matriz e retorne a soma de todos os seus elementos.

function somaMatriz(matriz) {
  let soma = 0;
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          soma += matriz[i][j]; // Soma cada elemento
      }
  }
  return soma;
}
const matrizSoma = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(somaMatriz(matrizSoma)); // Saída: 45

// 3 - Crie um tabuleiro de xadrez 8x8, preenchendo-o com "⬜" e "⬛".

function criarTabuleiro() {
  let tabuleiro = '';
  for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
          if ((i + j) % 2 === 0) {
              tabuleiro += '⬜';
          } else {
              tabuleiro += '⬛';
          }
      }
      tabuleiro += '\n'; // Quebra de linha após cada linha do tabuleiro
  }
  return tabuleiro;
}

console.log(criarTabuleiro());

// 4 - Verifique quantos números em uma matriz são pares.

function contarPares(matriz) {
  let contagem = 0;
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] % 2 === 0) {
              contagem++; // Incrementa a contagem se o número for par
          }
      }
  }
  return contagem;
}

const matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(contarPares(matriz2)); // Saída: 4

// 5 - Substitua todos os valores maiores que 10 em uma matriz por 0.

function substituirMaiorQueDez(matriz) {
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j] > 10) {
              matriz[i][j] = 0; // Substitui por 0 se o valor for maior que 10
          }
      }
  }
  return matriz;
}
const matriz3 = [
  [1, 2, 3],
  [4, 11, 6],
  [7, 12, 9]
];

console.log(substituirMaiorQueDez(matriz3));
// Saída esperada: [
//   [1, 2, 3],
//   [4, 0, 6],
//   [7, 0, 9]
// ]

// 6 - Implemente uma função que multiplique todos os elementos de uma matriz por um valor fornecido.

function multiplicarMatriz(matriz, valor) {
  for (let i = 0; i < matriz.length; i++) {
      for (let j = 0; j < matriz[i].length; j++) {
          matriz[i][j] *= valor; // Multiplica cada elemento pelo valor fornecido
      }
  }
  return matriz;
}
const matriz4 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(multiplicarMatriz(matriz4, 2));
// Saída esperada: [
//   [2, 4, 6],
//   [8, 10, 12],
//   [14, 16, 18]
// ]
