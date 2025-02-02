// 1 - Crie um array com três cores e adicione uma nova cor no final.

let cores = ['Azul', 'Vermelho', 'Verde']
    cores.push('Amarelo')
    console.log(cores)

// 2 - Use um loop para exibir todos os itens de um array de compras.

    let lista = ['Arroz', 'Feijão', 'Carne'];
        for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// 3 -Dado um array de números [10, 20, 30, 40, 50], use o método slice para extrair os dois últimos números.

let numeros = [10, 20, 30, 40, 50];
    console.log(numeros.slice(3))


// 4 -Crie um array de tarefas e remova a primeira tarefa usando shift.

let tarefas = ['Tarefa1', 'Tarefa2', 'Tarefa3']
    tarefas.shift();
    console.log(tarefas);

// 5 - Use splice para substituir o terceiro item de um array por "Substituído".

let item = [1, 2, 3, 4, 5]
    item.splice(2, 1, 'Substituído');
    console.log(item)

// 6 - Transforme um array de palavras em uma frase completa usando join.
let frase = ["Curso", "de", "JavaScript"]
let fraseNova = frase.join(" ")
    console.log(fraseNova);