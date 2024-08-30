const pessoa = {
    nome: 'Luciano',
    sobrenome: 'Silva',
    idade: 25,
    descrever: () => {
        console.log(`${pessoa.nome} ${pessoa.sobrenome} tem ${pessoa.idade} anos.`)
    }
}

// console.log(pessoa)
// pessoa.peso = 80
// console.log(pessoa)
// pessoa.idade = 49
// console.log(pessoa)
// pessoa.sobrenome = "Oliveira"
// console.log(pessoa)

pessoa.descrever()

const atributo = "idade"
console.log(pessoa[atributo])