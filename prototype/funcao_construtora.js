// Função construtora
function Pessoa(nome, idade) {
    // ganha o this
    this.nome = nome
    this.idade = idade
}

// adicionar uma função descrever
Pessoa.prototype.descrever = function() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
}
Pessoa.prototype.falar = function() {
    console.log('Ola ' + this.nome)
}


const p1 = new Pessoa('Luciano', 25)
p1.descrever()
p1.falar()

console.log(p1);

// Açucares sintáticos - substituição de prototypes
// Por debaixo dos panos é prototype-based

class Pessoa_Classe {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}


const p2 = new Pessoa_Classe('Luciano', 45)

p2.descrever()

console.log(p2)