// 1 - Crie uma classe chamada Livro com atributos titulo, autor e ano. Adicione um método para exibir os detalhes do livro.

class Livro {
    constructor(titulo, autor, ano){
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }

    detalhes(){
        console.log(`${this.titulo}, ${this.autor}, ${this.ano}`)
}
}

const livro1 = new Livro("JavaScript", "Luiz Eduardo", "2025")
console.log(livro1)

livro1.detalhes()


// 2 - Implemente uma classe ContaBancaria com os métodos depositar e sacar.

class ContaBancaria {
    constructor(saldo = 0) {
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Valor inválido para depósito.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        } else {
            console.log("Saldo insuficiente ou valor inválido para saque.");
        }
    }
}

const minhaConta = new ContaBancaria(1000);

minhaConta.depositar(500);
minhaConta.sacar(300);     
minhaConta.sacar(1500);     

// 3 - Crie uma classe Pessoa com um método que exibe "Bem-vindo, [nome]!".

class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    saudacao(){
        console.log(`Bem vindo, ${this.nome}`)
}
}

let pessoa1 = new Pessoa("Luiz Eduardo")
pessoa1.saudacao()

// 4 - Implemente uma classe Calculadora com métodos para soma, subtração, multiplicação e divisão.

class Calculadora {
    soma(a, b) {
        return a + b;
    }

    subtracao(a, b) {
        return a - b;
    }

    multiplicacao(a, b) {
        return a * b;
    }

    divisao(a, b) {
        if (b === 0) {
            return "Erro: Divisão por zero!";
        }
        return a / b;
    }
}


const calc = new Calculadora();

// Teste
console.log("Soma:", calc.soma(10, 5));             
console.log("Subtração:", calc.subtracao(10, 5));  
console.log("Multiplicação:", calc.multiplicacao(10, 5));
console.log("Divisão:", calc.divisao(10, 5));      
console.log("Divisão por zero:", calc.divisao(10, 0)); 

// 5 - Crie uma classe Agenda para armazenar e exibir contatos.

class Agenda {
    constructor() {
        this.contatos = []; 
    }

    adicionarContato(nome) {
        this.contatos.push(nome);
        console.log(`Contato "${nome}" adicionado à agenda.`);
    }

    exibirContatos() {
        if (this.contatos.length === 0) {
            console.log("A agenda está vazia.");
        } else {
            console.log("Lista de contatos:");
            this.contatos.forEach((contato, index) => {
                console.log(`${index + 1}. ${contato}`);
            });
        }
    }
}


const minhaAgenda = new Agenda();


minhaAgenda.adicionarContato("Luiz Eduardo");
minhaAgenda.adicionarContato("Maria Gabriela");


minhaAgenda.exibirContatos();

