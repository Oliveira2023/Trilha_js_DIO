const funcoes = require("./funcoes-auxiliares")

// destruturação
const { gets, print } = funcoes;
let maior = 0;

const quantidadeNumeros = gets();
for (let i = 0; i < quantidadeNumeros; i++) {
    let numrosSorteado = gets()
    if (numrosSorteado > maior) {
        maior = numrosSorteado
    }
}

print(maior)
