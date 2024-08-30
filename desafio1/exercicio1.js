const {gets, print} = require('./funcoes-aux.js')

let media = gets();

if (media >= 7.0) {
    print("aprovado")
}else if (media < 7.0 && media >= 5.0) {
    print("recuperacao")
}else if(media >=0 &&media < 5.0) {
    print("reprovado")
}else {
    print("nota invalida")
}