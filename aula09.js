// 1 - Escreva uma função recursiva que conte de n até 0.

function ContagemRegressiva(numero) {
    if (numero === 0){
        console.log("Fim")
        return;
    }

    console.log(numero);
    ContagemRegressiva(numero - 1);

}

    ContagemRegressiva(10);

// 2 - Implemente uma função que calcule o fatorial de um número.

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}

const numero = 5;
console.log(`O fatorial de ${numero} é ${fatorial(numero)}`);

// 3 - Crie uma função que some todos os números de um array usando recursão.

function somarArray(arr) {
    if (arr.length === 0) {
        return 0;
    } else {
        return arr[0] + somarArray(arr.slice(1));
    }
}

const numeros = [1, 2, 3, 4, 5];
console.log(`A soma dos números no array é ${somarArray(numeros)}`);


// 4 - Escreva uma função para verificar se uma palavra é um palíndromo usando recursão.

function verificarPalindromo(palavra) {
    if (palavra.length <= 1) {
        return true;
    }
    if (palavra[0] === palavra[palavra.length - 1]) {
        return verificarPalindromo(palavra.slice(1, palavra.length - 1));
    }
    return false;
}

const palavra = "radar";
console.log(`${palavra} é um palíndromo? ${verificarPalindromo(palavra)}`);

// 5 - Implemente uma função que calcule o n-ésimo termo da sequência de Fibonacci.

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const termo = 5;
console.log(`O ${termo}-ésimo termo da sequência de Fibonacci é ${fibonacci(termo)}`);

// 6 - Crie uma função que liste todos os arquivos de um diretório usando recursão.

const fs = require('fs');
const path = require('path');

function listarArquivos(diretorio) {
    const arquivos = fs.readdirSync(diretorio);
    let listaArquivos = [];

    arquivos.forEach(arquivo => {
        const caminhoCompleto = path.join(diretorio, arquivo);
        const stats = fs.statSync(caminhoCompleto);

        if (stats.isDirectory()) {
            listaArquivos = listaArquivos.concat(listarArquivos(caminhoCompleto));
        } else {
            listaArquivos.push(caminhoCompleto);
        }
    });

    return listaArquivos;
}

const diretorio = './meu-diretorio';
const arquivos = listarArquivos(diretorio);
console.log('Arquivos encontrados:', arquivos);


