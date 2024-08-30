const { gets, print } = require('./funcoes-aux-ex2.js')

let numeros = gets();

let maiorPar = null;

let menorImpar = null;

for (let i = 0; i < numeros; i++) {
    numeroAtual = gets()
    if (numeroAtual % 2 === 0) {
        if (maiorPar == null || numeroAtual > maiorPar) {
        maiorPar = numeroAtual
        }
    } else {
        if (menorImpar == null || numeroAtual < menorImpar) {
        menorImpar = numeroAtual
        }
    }
}


print(menorImpar)
print(maiorPar)
