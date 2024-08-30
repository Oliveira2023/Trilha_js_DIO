const entradas = [10, 5, 50, 12, 98, 23, 15, 51, 72, 18, 99]
let i = 0;
function gets() {
    let saida = entradas[i]
    i++
    return saida
}

function print(texto) {
    console.log(texto);
}

module.exports = {gets, print} 