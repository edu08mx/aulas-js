// 1 - Use um loop for para imprimir os números de 1 a 10 no console.
for (let i = 1; i <= 10; i++){
console.log(`Número: ${i}`);
}

// 2 - Crie uma lista de nomes e use um for para exibir cada nome.

const nomes = ['Luiz', 'Eduardo', 'Furtado']
    for (let i = 0; i < nomes.length; i++){
        console.log(nomes[i]);
    }

// 3 - Escreva um código que verifica se um número em um array é maior que 10. Pare de verificar assim que encontrar o primeiro.

let numeros = [9, 8, 7, 5, 16, 1]; 

let numeroEncontrado = false; 

for (let i = 0; i < numeros.length; i++) {  
    if (numeros[i] > 10) {
        console.log(`Encontrado número maior que 10: ${numeros[i]}`);
        numeroEncontrado = true;
        break; 
    }
}

if (!numeroEncontrado) {
    console.log("Não foi encontrado nenhum número maior que 10.");
}

// 4 - Use um while para simular um contador de 10 a 0 e exiba "Lançamento!" quando atingir 0.

    let contador = 10;
        while (contador >= 0){
            if (contador === 0){
                console.log("Lançamento");
            } else {
                console.log(contador);
            }
            contador--;
        }

// 5 - Escreva um loop que calcula o fatorial de um número (ex: 5! = 5*4*3*2*1).

let numero = 5; 
let fatorial = 1;  

for (let i = numero; i > 0; i--) { 
    fatorial *= i; 
}

console.log(`O fatorial de ${numero} é ${fatorial}`);

