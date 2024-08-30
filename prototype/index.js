const pessoa = { // prototype, prototipo de pessoa
    genero: 'masculino',
}

const luciano = { // instância, objeto de pessoa
    __proto__: pessoa, // herança
    nome: 'Luciano',
    sobrenome: 'Silva',
    idade: 25,
    descrever: () => {
        console.log(`${luciano.nome} ${luciano.sobrenome} tem ${luciano.idade} anos.`)
    }
}

luciano.falar = () => {
    console.log('Ola ' + luciano.nome)
}

luciano.descrever()

console.log(luciano.genero)

luciano.falar()