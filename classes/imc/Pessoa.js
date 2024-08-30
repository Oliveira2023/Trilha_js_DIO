class Pessoa {
    nome;
    peso;
    altura;
    constructor(nome, peso, altura) {
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    descreverImc() {

        console.log(`Meu imc é ${this.calcularImc()}`)

        
    }
    calcularImc() {
        return (this.peso / (this.altura * this.altura)).toFixed(2)
    }
    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            console.log(`${this.nome} seu imc é ${imc} e esta abaixo do peso`)
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`${this.nome} seu imc é ${imc} e esta no peso ideal`)
        } else if (imc >= 25 && imc < 30) {
            console.log(`${this.nome} seu imc é ${imc} e esta com sobrepeso`)
        } else if (imc >= 30 && imc < 40) {
            console.log(`${this.nome} seu imc é ${imc} e esta com obesidade`)
        } else {
            console.log(`${this.nome} seu imc é ${imc} e esta com obesidade grave`)
        }
    }
}

export default Pessoa