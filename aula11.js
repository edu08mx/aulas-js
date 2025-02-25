// 1 - Crie uma classe ContaBancaria que tenha saldo privado e métodos para depositar, sacar e consultar o saldo.

class ContaBancaria {
    #saldo;  

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }


    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }


    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }


    consultarSaldo() {
        return `Saldo de ${this.titular}: R$${this.#saldo.toFixed(2)}`;
    }
}

const conta1 = new ContaBancaria('João', 1000);
console.log(conta1.consultarSaldo());
conta1.depositar(500);
conta1.sacar(200);
console.log(conta1.consultarSaldo());

// 2 - Implemente uma classe Usuario que armazena uma senha privada e permite alterar a senha com validação.

class Usuario {
    #senha;  
    constructor(nome, senhaInicial) {
        this.nome = nome;
        this.#senha = senhaInicial;
    }

    alterarSenha(senhaAtual, novaSenha) {
        if (this.#validarSenha(senhaAtual)) {
            if (this.#validarNovaSenha(novaSenha)) {
                this.#senha = novaSenha;
                console.log("Senha alterada com sucesso.");
            } else {
                console.log("Nova senha inválida. A senha deve ter pelo menos 6 caracteres.");
            }
        } else {
            console.log("Senha atual incorreta.");
        }
    }

    #validarSenha(senhaAtual) {
        return this.#senha === senhaAtual;
    }

    #validarNovaSenha(novaSenha) {
        return novaSenha.length >= 6;  
    }
    
    mostrarNome() {
        return `Usuário: ${this.nome}`;
    }
}

const usuario1 = new Usuario('João', 'senha123');
console.log(usuario1.mostrarNome());
usuario1.alterarSenha('senha123', 'novaSenha!1');
usuario1.alterarSenha('senhaErrada', 'senhaNova');
usuario1.alterarSenha('novaSenha!1', '12345'); 

// 3 - Crie uma classe ControleRemoto com métodos para ligar e desligar a TV, escondendo o estado interno.

class ControleRemoto {
    #ligado; 

    constructor() {
        this.#ligado = false;
    }

    ligar() {
        if (!this.#ligado) {
            this.#ligado = true;
            console.log("TV ligada.");
        } else {
            console.log("A TV já está ligada.");
        }
    }

    desligar() {
        if (this.#ligado) {
            this.#ligado = false;
            console.log("TV desligada.");
        } else {
            console.log("A TV já está desligada.");
        }
    }

    estadoAtual() {
        return this.#ligado ? "TV está ligada." : "TV está desligada.";
    }
}

const controle = new ControleRemoto();
console.log(controle.estadoAtual());
controle.ligar();
controle.ligar(); 
console.log(controle.estadoAtual());
controle.desligar(); 
controle.desligar();  

// 4 - Escreva uma classe Cofre que armazena valores privados e só permite acesso com uma senha correta.

class Cofre {
    #valor;  
    #senha; 

    constructor(senha, valorInicial = 0) {
        this.#senha = senha;
        this.#valor = valorInicial;
    }

    alterarValor(senha, novoValor) {
        if (this.#validarSenha(senha)) {
            this.#valor = novoValor;
            console.log(`Valor do cofre alterado para R$${novoValor}.`);
        } else {
            console.log("Senha incorreta. Acesso negado.");
        }
    }

    consultarValor(senha) {
        if (this.#validarSenha(senha)) {
            return `O valor do cofre é R$${this.#valor.toFixed(2)}.`;
        } else {
            console.log("Senha incorreta. Acesso negado.");
            return null;
        }
    }

    #validarSenha(senha) {
        return this.#senha === senha;
    }
}

const cofre = new Cofre("1234", 1000);
console.log(cofre.consultarValor("1234"));
cofre.alterarValor("1234", 2000);
console.log(cofre.consultarValor("1234"));
console.log(cofre.consultarValor("0000")); 
cofre.alterarValor("0000", 3000); 

// 5 - Implemente um sistema de carrinho de compras com itens privados e métodos para adicionar, remover e listar os itens.

class CarrinhoDeCompras {
    #itens;  

    constructor() {
        this.#itens = [];
    }

    adicionarItem(nome, preco) {
        const item = { nome, preco };
        this.#itens.push(item);
        console.log(`${nome} foi adicionado ao carrinho.`);
    }

    removerItem(nome) {
        const index = this.#itens.findIndex(item => item.nome === nome);
        if (index !== -1) {
            this.#itens.splice(index, 1);
            console.log(`${nome} foi removido do carrinho.`);
        } else {
            console.log(`${nome} não foi encontrado no carrinho.`);
        }
    }

    listarItens() {
        if (this.#itens.length === 0) {
            console.log("O carrinho está vazio.");
            return;
        }
        console.log("Itens no carrinho:");
        this.#itens.forEach(item => {
            console.log(`${item.nome} - R$${item.preco.toFixed(2)}`);
        });
    }

    calcularTotal() {
        const total = this.#itens.reduce((acc, item) => acc + item.preco, 0);
        return `Total: R$${total.toFixed(2)}`;
    }
}


const carrinho = new CarrinhoDeCompras();

carrinho.adicionarItem("Camiseta", 49.90);
carrinho.adicionarItem("Calça Jeans", 99.90);
carrinho.listarItens(); 
console.log(carrinho.calcularTotal()); 

carrinho.removerItem("Camiseta");
carrinho.listarItens(); 
console.log(carrinho.calcularTotal());




