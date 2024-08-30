
const pessoa = {
    nome: 'Luciano',
    idade: 49
}

function gritar (prefixo) {
    console.log(prefixo, this.nome); // pra funcionar sem o this, basta colocar o nome do atributo e o objeto:  pessoa.nome
}

gritar("olaaaaa") // this.nome não está no contexto. 

gritar.apply(pessoa, ["olaaaaa"]) // passa a pessoa para o contexto da função, assim assume o this.

gritar.call(pessoa, "olaaaaa")

new gritar("olaaaaa")