// 2 tipos de declaração de funções em js

// declaração de função

function nomeDafuncao() {
    console.log('nome da função');
}

const nomeDaOutraFuncao = function() {
    console.log('nome da outra função');
}

// diferença basica entre elas.. é o hoisiting, no hoisting, a função pode ser 
//chamada antes de ser declarada, mas no caso da constante o hoisting faz a 
//declaração primeiro, mas não a atribuição, então a função não existirá antes da 
//atribuição, diferente da declaração da função.