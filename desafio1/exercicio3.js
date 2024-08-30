const {gets, print} = require('./funcoes-aux-ex3.js');

let salario = gets();
let bonus = gets();
let desconto;

if(salario < 1100){
 desconto = 0.05
}else if(salario < 2500){
    desconto = 0.1
}else{
    desconto = 0.15
}

print ("Salario a receber: " + ((salario + bonus) - (salario * desconto)).toFixed(2))