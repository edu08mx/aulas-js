// 1 - Crie uma classe Veiculo e duas subclasses: Carro e Moto. Adicione métodos específicos para cada subclasse.

class Veiculo {
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    informacoes() {
        console.log(`${this.marca} - ${this.modelo} - ${this.cor}`);
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo, cor, numeroPortas) {
        super(marca, modelo, cor);
        this.numeroPortas = numeroPortas;
    }

    abrirPorta() {
        console.log(`O carro ${this.marca} ${this.modelo} com ${this.numeroPortas} portas está abrindo a porta.`);
    }

    informacoes() {
        console.log(`${this.marca} - ${this.modelo} - ${this.cor} - ${this.numeroPortas} portas`);
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, cor) {
        super(marca, modelo, cor);
    }

    acelerar() {
        console.log(`A moto ${this.marca} ${this.modelo} está acelerando.`);
    }
}

const carro1 = new Carro("Fiat", "Uno", "Preto", 4);
console.log(carro1);
carro1.informacoes();
carro1.abrirPorta();

const moto1 = new Moto("Honda", "CG160", "Vermelha");
console.log(moto1);
moto1.informacoes();
moto1.acelerar();

// 2 - Implemente uma classe Funcionario e uma subclasse Gerente que adicione um atributo setor.

class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    informacoes() {
        console.log(`Funcionário: ${this.nome} - Salário: R$${this.salario.toFixed(2)}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, setor) {
        super(nome, salario);
        this.setor = setor;
    }

    informacoes() {
        console.log(`Gerente: ${this.nome} - Salário: R$${this.salario.toFixed(2)} - Setor: ${this.setor}`);
    }
}


const funcionario1 = new Funcionario("Carlos", 3000);
funcionario1.informacoes();

const gerente1 = new Gerente("Mariana", 7000, "TI");
gerente1.informacoes();

// 3 - Crie uma superclasse Forma com um método para calcular área, e subclasses como Quadrado e Círculo que sobrescrevam esse método.

class Forma {
    calcularArea() {
        throw new Error("O método calcularArea() deve ser implementado nas subclasses.");
    }
}

class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    calcularArea() {
        return this.lado * this.lado;
    }
}

class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    calcularArea() {
        return Math.PI * Math.pow(this.raio, 2);
    }
}


const quadrado = new Quadrado(5);
console.log(`Área do quadrado: ${quadrado.calcularArea()} unidades²`);

const circulo = new Circulo(3);
console.log(`Área do círculo: ${circulo.calcularArea().toFixed(2)} unidades²`);

// 4 - Escreva uma classe Animal e subclasses como Cachorro e Gato, cada uma com métodos específicos.

class Animal {
    constructor(nome, especie) {
        this.nome = nome;
        this.especie = especie;
    }

    fazerSom() {
        console.log(`${this.nome} está emitindo um som.`);
    }
}

class Cachorro extends Animal {
    constructor(nome, raca) {
        super(nome, "Cachorro");
        this.raca = raca;
    }

    latir() {
        console.log(`${this.nome} está latindo`);
    }
}

class Gato extends Animal {
    constructor(nome, cor) {
        super(nome, "Gato");
        this.cor = cor;
    }

    miar() {
        console.log(`${this.nome} está miando`);
    }
}


const cachorro1 = new Cachorro("Rex", "Labrador");
console.log(cachorro1);
cachorro1.fazerSom();
cachorro1.latir();

const gato1 = new Gato("Bichano", "Branco");
console.log(gato1);
gato1.fazerSom();
gato1.miar();

// 5 - Crie uma classe Conta e uma subclasse ContaPoupanca que adicione juros ao saldo.

class Conta {
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Valor de depósito inválido.");
        }
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado com sucesso.`);
        } else {
            console.log("Saldo insuficiente ou valor inválido.");
        }
    }

    consultarSaldo() {
        return `Saldo de ${this.titular}: R$${this.saldo.toFixed(2)}`;
    }
}


class ContaPoupanca extends Conta {
    constructor(titular, saldo = 0, taxaJuros = 0.05) {
        super(titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    adicionarJuros() {
        const juros = this.saldo * this.taxaJuros;
        this.saldo += juros;
        console.log(`Juros de R$${juros.toFixed(2)} adicionados à conta.`);
    }
}


const conta1 = new Conta('João', 1000);
console.log(conta1.consultarSaldo());
conta1.depositar(500);
conta1.sacar(200);
console.log(conta1.consultarSaldo());

const contaPoupanca1 = new ContaPoupanca('Maria', 2000, 0.03);
console.log(contaPoupanca1.consultarSaldo());
contaPoupanca1.adicionarJuros();
console.log(contaPoupanca1.consultarSaldo());



