// 1 - Crie uma função que calcule o dobro de um número.
function Calcular(a) {
    let resultado = a * 2;
    console.log(resultado);
}
    Calcular(2);

// 2 - Escreva uma função que receba um nome e retorne uma mensagem de boas-vindas.

function saudacao(nome) {
    return `Seja bem vindo a nosso site ${nome}!`;
}
    console.log(saudacao("Luiz Eduardo"));

// 3 - Crie uma função que receba dois números e retorne o maior deles.

function numero(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(numero(25, 20));

// 4 Implemente uma função que calcule a média de três números.
function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

console.log(calcularMedia(10, 15, 20));  // Vai imprimir 15

// 5 -Crie uma função que receba um array de números e retorne a soma deles.
function somaNumeros(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somaNumeros([5, 5, 5]));  // Vai imprimir 15

// 6 - Escreva uma função que receba uma string e retorne o número de caracteres dessa string.

function contarCaracteres(str) {
    return str.length;
}

console.log(contarCaracteres("Hello, world!"));  // Vai imprimir 13
  

