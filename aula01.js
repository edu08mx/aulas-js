// 1 - Crie uma variável para armazenar seu nome e outra para sua idade. Imprima uma frase como: "Meu nome é [nome] e tenho [idade] anos".

let nome = "Eduardo"
let idade = 25
console.log("Olá, meu nome é ", nome, "e eu tenho ", idade, "anos")


// 2 - Declare uma variável para armazenar o preço de um produto e outra para o desconto. Calcule o preço final e mostre no console.

let precoproduto = 15
let desconto = 5
let precofinal = precoproduto - desconto
console.log("O valor do produto é ", precoproduto, "e o desconto é de ", desconto, ". Então o preço final ficou", precofinal)

// 3 - Crie um array com três de suas comidas favoritas e exiba a segunda comida na lista.

let comidas = ['Arroz', 'Feijao', 'Carne']
console.log(comidas[1])

// 4 - Crie um objeto que represente um livro, com propriedades como titulo, autor e ano. Mostre no console o título e o autor.

let livro = {
  titulo: "Conceitos Básicos JavaScript",
  autor: "Eduardo",
  ano: 2025
};
console.log("O titulo do livro é", livro.titulo, "e o autor do livro é", livro.autor)

// 5 - Declare uma variável estaLogado com o valor false. Depois, mude o valor para true e imprima a mensagem: "Status de login: [valor da variável]".
let estaLogado = false
estaLogado = true
console.log("Status de login: " + estaLogado)


// 6 - Crie uma variável constante chamada PI com o valor 3.14. Use-a para calcular a área de um círculo com raio 5 e mostre o resultado.

const PI = 3.14;
const raio = 5;
const area = PI * raio * raio;
console.log("Área do círculo:", area);






