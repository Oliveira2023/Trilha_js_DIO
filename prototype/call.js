
function Pessoa(nome, idade){
    this.nome = nome
    this.idade = idade

}

Pessoa.prototype.falar = function(){
    console.log('Meu nome é ' + this.nome)
}

const renan = new Pessoa('Renan', 30)

renan.falar()

// usando call
const luciano = {
    genero: 'masculino'
}

Pessoa.call(luciano, 'Luciano', 25)

// luciano.falar() não atribui o prototype para o luciano
// na verdade acho que o prototype é o primeiro argumento

console.log(luciano);
