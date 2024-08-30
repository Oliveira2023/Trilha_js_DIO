function funcao1() {
    console.log(this);
    // nesse caso o this é o contexto da função
}
const funcao2 = () => {
    console.log(this);
    // nesse caso não existe o this
}

const renan = {
    nome: 'Renan',
    funcao1,
    funcao2
}

renan.funcao1()
renan.funcao2() // não mostra o objeto porque não assume o contexto this.