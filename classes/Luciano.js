import Pessoa from "./Pessoa.js";

const luciano = new Pessoa("Luciano", "Oliveira", 25);

luciano['idade'] = 49
// console.log(luciano);

luciano.descrever()

function CompararPessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} tem mais idade que ${pessoa2.nome}.`)
    }else if (pessoa1.idade < pessoa2.idade) {
        console.log(`${pessoa2.nome} tem mais idade que ${pessoa1.nome}.`)
    }else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade.`)
    }
}

const renan = new Pessoa("Renan", "Silva", 30);

CompararPessoas(luciano, renan);

luciano.sexo = "masculino"
console.log(luciano);