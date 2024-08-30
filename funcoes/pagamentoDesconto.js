function aplicarDesconto(preco, desconto) {
    return (preco * (100 - desconto)) / 100
}
function definirDesconto(formaDePagamento) {
    switch (formaDePagamento) {
        case 1:
            return 10
        case 2:
            return 15
        case 3:
            return 20
        case 4:
            return 25
        default:
            return 0
    }
}
function aplicarJuros(preco, juros) {
    return (preco * (100 + juros)) / 100
}

(() => {
    const preco = 100
    const formaDePagamento = 2
    const desconto = definirDesconto(formaDePagamento)

    const valorComDesconto = aplicarDesconto(preco, desconto)
    console.log(`O valor com desconto de ${desconto}% é de ${valorComDesconto}`)
})()

