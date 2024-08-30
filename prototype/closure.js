// closure é a capacidade de guardar o armazenamento das variáveis dentro de uma função	, dentro do contexto, e chamar outra função?? dentro da mesma.

function soma(x) {
    return function(y) {
        return x + y
    }
}

// como chamaria esta função normalmente?

// console.log(soma(2)(3))

// como chamaria esta função com closure?

const soma2 = soma(2)
console.log(soma2); // retorna a função e mantém a entrada de x => isso é closure

console.log(soma2(3))  //soma 2 + 3
console.log(soma2(4)); //soma 2 + 4
console.log(soma2(5)); //soma 2 + 5

