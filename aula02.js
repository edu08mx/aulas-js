// 1 - Escreva um código que exiba "Bom dia", "Boa tarde" ou "Boa noite" com base em um valor da variável hora.

let hora = 20; 
    if (hora < 12){
    console.log("Bom dia.");
}   else if (hora < 18){
    console.log("Boa Tarde");
}
    else
    console.log("Boa Noite")

// 2 - Use um switch para exibir o nome de um mês com base em um número (1 para Janeiro, 2 para Fevereiro, etc.).

let mes = 3
    switch (mes) {
        case 1:
            console.log("Janeiro");
        break; 
        case 2:
            console.log("Fevereiro");
        break;
        case 3:
            console.log("Março") ; 
        break;      
        default:
            console.log("Mês Inválido") ;   
    }

// 3 - Crie um programa que verifica se uma pessoa pode dirigir. Use a variável idade e mostre "Pode dirigir" ou "Não pode dirigir".

let idade = 16
    if (idade <= 18) {
        console.log("Não pode dirigir")
    } 
    else 
    console.log("Pode Digirir")

// 4 - Use o operador ternário para verificar se uma variável saldo é maior que 0 e exiba "Saldo positivo" ou "Saldo negativo".

let saldo = 15
let mensagem = saldo <= 5 ? "Saldo Negativo" : "Saldo Positivo";
console.log(mensagem)

// 5 - Escreva um programa que classifique números em "Positivo", "Negativo" ou "Zero".
    let numero = 5
    if (numero > 0) {
        console.log("Positivo")
    } else if (numero < 0) {
        console.log("Negativo")
    }  else {
        console.log("Zero") }

// 6 - Crie um sistema de opções para um caixa eletrônico: "1 - Sacar", "2 - Depositar", "3 - Saldo". Use switch para processar a escolha

let opcao = 2
    switch (opcao){
        case 1:
            console.log("Sacar");
        break    
        case 2:
            console.log("Depositar");
        break    
        case 3:
            console.log("Verificar Saldo");
        break    
        case 4:
            console.log("Opção Inválida") ;           
    }