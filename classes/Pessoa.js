class Pessoa {
    nome;
    sobrenome;
    idade;
    constructor(nome, sobrenome, idade) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos.`)
    }
}

export default Pessoa;