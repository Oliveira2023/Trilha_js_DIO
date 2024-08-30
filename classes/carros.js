class Carro {
    marca;
    cor;
    gastoMedioPorKm;
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKm = gastoMedioPorKm
    }

    calculaGasto(distanciaEmKm, precoCombustivel) {
        const GastoViagem =(distanciaEmKm * this.gastoMedioPorKm * precoCombustivel).toFixed(2)
        return ("Gasto de viagem: R$ " + GastoViagem)
    }

}

export default Carro