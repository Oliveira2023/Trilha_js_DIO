
const pessoa = {
    idade: 18
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
    }

console.log(renan) // mostra idade 30 porque já encontra esse atributo primeiro, sobrescreve a idade + pra dentro

// outra forma de fazer o prototype

const pessoa1 = {
    genero: 'masculino'
}
const renan1 = Object.create(pessoa1)

renan1.nome = 'Renan'

console.log(renan1.genero);
